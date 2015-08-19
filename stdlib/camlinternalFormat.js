// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Char=require("./char.js");
var CamlinternalFormatBasics=require("./camlinternalFormatBasics.js");
var Pervasives=require("./pervasives.js");
var Buffer=require("./buffer.js");
var Bytes=require("./bytes.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var create_char_set=function(param){return Bytes["make"](32,0)};

var
 add_in_char_set=
  function(char_set,c)
   {var ind=c;
    
    var str_ind=ind>>>3;
    
    var mask=1<<(ind&7);
    
    return char_set[str_ind]=
           Pervasives["char_of_int"](char_set[str_ind]|mask),
           0};

var freeze_char_set=function(char_set){return Bytes["to_string"](char_set)};

var
 rev_char_set=
  function(char_set)
   {var char_set$prime=create_char_set(/* () */0);
    
    for(var i=0;i<=31;i++)
     {char_set$prime[i]=
      Pervasives["char_of_int"](char_set["charCodeAt"](i)^255)}
    
    return Bytes["unsafe_to_string"](char_set$prime)};

var
 is_in_char_set=
  function(char_set,c)
   {var ind=c;
    
    var str_ind=ind>>>3;
    
    var mask=1<<(ind&7);
    
    return (char_set["charCodeAt"](str_ind)&mask)!==0};

var
 pad_of_pad_opt=
  function(pad_opt)
   {return pad_opt
            ?/* Lit_padding */[0,/* Right */1,pad_opt[1]]
            :/* No_padding */0};

var
 prec_of_prec_opt=
  function(prec_opt)
   {return prec_opt?/* Lit_precision */[0,prec_opt[1]]:/* No_precision */0};

var
 param_format_of_ignored_format=
  function(ign,fmt)
   {if(typeof ign==="number")
     {switch(ign)
       {case 0:return /* Param_format_EBB */[0,/* Char */[0,fmt]];
        case 1:return /* Param_format_EBB */[0,/* Caml_char */[1,fmt]];
        case 2:return /* Param_format_EBB */[0,/* Bool */[9,fmt]];
        case 3:return /* Param_format_EBB */[0,/* Reader */[19,fmt]];
        case 4:return /* Param_format_EBB */[0,/* Scan_next_char */[22,fmt]]
        }}
    else
     {switch(ign[0])
       {case 0:
         return /* Param_format_EBB */[0,
                 /* String */[2,pad_of_pad_opt(ign[1]),fmt]];
        case 1:
         return /* Param_format_EBB */[0,
                 /* Caml_string */[3,pad_of_pad_opt(ign[1]),fmt]];
        case 2:
         return /* Param_format_EBB */[0,
                 /* Int */[4,
                  ign[1],
                  pad_of_pad_opt(ign[2]),
                  /* No_precision */0,
                  fmt]];
        case 3:
         return /* Param_format_EBB */[0,
                 /* Int32 */[5,
                  ign[1],
                  pad_of_pad_opt(ign[2]),
                  /* No_precision */0,
                  fmt]];
        case 4:
         return /* Param_format_EBB */[0,
                 /* Nativeint */[6,
                  ign[1],
                  pad_of_pad_opt(ign[2]),
                  /* No_precision */0,
                  fmt]];
        case 5:
         return /* Param_format_EBB */[0,
                 /* Int64 */[7,
                  ign[1],
                  pad_of_pad_opt(ign[2]),
                  /* No_precision */0,
                  fmt]];
        case 6:
         return /* Param_format_EBB */[0,
                 /* Float */[8,
                  /* Float_f */0,
                  pad_of_pad_opt(ign[1]),
                  prec_of_prec_opt(ign[2]),
                  fmt]];
        case 7:
         return /* Param_format_EBB */[0,
                 /* Format_arg */[13,ign[1],ign[2],fmt]];
        case 8:
         return /* Param_format_EBB */[0,
                 /* Format_subst */[14,ign[1],ign[2],fmt]];
        case 9:
         return /* Param_format_EBB */[0,
                 /* Scan_char_set */[20,ign[1],ign[2],fmt]];
        case 10:
         return /* Param_format_EBB */[0,
                 /* Scan_get_counter */[21,ign[1],fmt]]
        }}
    };

var default_float_precision=6;

var
 buffer_create=
  function(init_size)
   {return /* record */[0,0,CamlPrimitive["caml_create_string"](init_size)]};

var
 buffer_check_size=
  function(buf,overhead)
   {var len=buf[2]["length"];
    
    var min_len=buf[1]+overhead;
    
    if(min_len>len)
     {var new_len=Pervasives["max"](len*2,min_len);
      
      var new_str=CamlPrimitive["caml_create_string"](new_len);
      
      Bytes["blit"](buf[2],0,new_str,0,len);
      return buf[2]=new_str,0}
    else
     {return 0}
    };

var
 buffer_add_char=
  function(buf,c)
   {buffer_check_size(buf,1);buf[2][buf[1]]=c;return buf[1]=buf[1]+1,0};

var
 buffer_add_string=
  function(buf,s)
   {var str_len=s["length"];
    
    buffer_check_size(buf,str_len);
    $$String["blit"](s,0,buf[2],buf[1],str_len);
    return buf[1]=buf[1]+str_len,0};

var
 buffer_contents=
  function(buf){return Bytes["sub_string"](buf[2],0,buf[1])};

var
 char_of_iconv=
  function(iconv)
   {var exit;
    
    switch(iconv)
     {case 0:exit=387;break;
      case 1:exit=387;break;
      case 2:exit=387;break;
      case 3:exit=388;break;
      case 4:exit=388;break;
      case 5:exit=388;break;
      case 6:exit=389;break;
      case 7:exit=389;break;
      case 8:exit=390;break;
      case 9:exit=390;break;
      case 10:exit=391;break;
      case 11:exit=391;break;
      case 12:return 117
      }
    
    switch(exit)
     {case 387:return 100;
      case 388:return 105;
      case 389:return 120;
      case 390:return 88;
      case 391:return 111
      }
    };

var
 char_of_fconv=
  function(fconv)
   {var exit;
    
    switch(fconv)
     {case 0:exit=381;break;
      case 1:exit=381;break;
      case 2:exit=381;break;
      case 3:exit=382;break;
      case 4:exit=382;break;
      case 5:exit=382;break;
      case 6:exit=383;break;
      case 7:exit=383;break;
      case 8:exit=383;break;
      case 9:exit=384;break;
      case 10:exit=384;break;
      case 11:exit=384;break;
      case 12:exit=385;break;
      case 13:exit=385;break;
      case 14:exit=385;break;
      case 15:return 70
      }
    
    switch(exit)
     {case 381:return 102;
      case 382:return 101;
      case 383:return 69;
      case 384:return 103;
      case 385:return 71
      }
    };

var
 char_of_counter=
  function(counter)
   {switch(counter){case 0:return 108;case 1:return 110;case 2:return 78}};

var
 bprint_char_set=
  function(buf,char_set)
   {var
     print_start=
      function(set)
       {var
         is_alone=
          function(c)
           {var match=/* tuple */[0,Char["chr"](c-1),Char["chr"](c+1)];
            
            return is_in_char_set(set,c)&&
                   !(is_in_char_set(set,match[1])&&
                    is_in_char_set(set,match[2]))};
        
        if(is_alone(93)){buffer_add_char(buf,93)}
        
        print_out(set,1);
        return is_alone(45)?buffer_add_char(buf,45):0};
    
    var
     print_out=
      function(set,i)
       {return i<256
                ?is_in_char_set(set,Pervasives["char_of_int"](i))
                  ?print_first(set,i)
                  :print_out(set,i+1)
                :0};
    
    var
     print_first=
      function(set,i)
       {var match=Pervasives["char_of_int"](i);
        
        var exit;
        
        var switcher=-45+match;
        
        if(!(48<switcher>>>0))
         {if(46<-1+switcher>>>0){return print_out(set,i+1)}else{exit=375;}}
        else
         {if(switcher>=210){return print_char(buf,255)}else{exit=375;}}
        
        switch(exit){case 375:return print_second(set,i+1)}
        };
    
    var
     print_second=
      function(set,i)
       {if(is_in_char_set(set,Pervasives["char_of_int"](i)))
         {var match=Pervasives["char_of_int"](i);
          
          var exit;
          
          var switcher=-45+match;
          
          if(!(48<switcher>>>0))
           {if(46<-1+switcher>>>0)
             {if(!is_in_char_set(set,Pervasives["char_of_int"](i+1)))
               {print_char(buf,i-1);return print_out(set,i+1)}
              else
               {exit=376;}
              }
            else
             {exit=376;}
            }
          else
           {if(switcher>=210)
             {print_char(buf,254);return print_char(buf,255)}
            else
             {exit=376;}
            }
          
          switch(exit)
           {case 376:
             return !is_in_char_set(set,Pervasives["char_of_int"](i+1))
                     ?(print_char(buf,i-1),print_char(buf,i),print_out(set,i+2))
                     :print_in(set,i-1,i+2)
            }
          }
        else
         {print_char(buf,i-1);return print_out(set,i+1)}
        };
    
    var
     print_in=
      function(set,i,j)
       {return j===256||!is_in_char_set(set,Pervasives["char_of_int"](j))
                ?(print_char(buf,i),
                  print_char(buf,45),
                  print_char(buf,j-1),
                  j<256?print_out(set,j+1):0)
                :print_in(set,i,j+1)};
    
    var
     print_char=
      function(buf,i)
       {var c=Pervasives["char_of_int"](i);
        
        return c!==37
                ?c!==64
                  ?buffer_add_char(buf,c)
                  :(buffer_add_char(buf,37),buffer_add_char(buf,64))
                :(buffer_add_char(buf,37),buffer_add_char(buf,37))};
    
    buffer_add_char(buf,91);
    print_start
     (is_in_char_set(char_set,0)
       ?(buffer_add_char(buf,94),rev_char_set(char_set))
       :char_set);
    return buffer_add_char(buf,93)};

var
 bprint_padty=
  function(buf,padty)
   {switch(padty)
     {case 0:return buffer_add_char(buf,45);
      case 1:return /* () */0;
      case 2:return buffer_add_char(buf,48)
      }
    };

var
 bprint_ignored_flag=
  function(buf,ign_flag){return ign_flag?buffer_add_char(buf,95):0};

var
 bprint_pad_opt=
  function(buf,pad_opt)
   {return pad_opt
            ?buffer_add_string(buf,Pervasives["string_of_int"](pad_opt[1]))
            :/* () */0};

var
 bprint_padding=
  function(buf,pad)
   {if(typeof pad==="number")
     {switch(pad){case 0:return /* () */0}}
    else
     {switch(pad[0])
       {case 0:
         bprint_padty(buf,pad[1]);
         return buffer_add_string(buf,Pervasives["string_of_int"](pad[2]));
        case 1:bprint_padty(buf,pad[1]);return buffer_add_char(buf,42)
        }}
    };

var
 bprint_precision=
  function(buf,prec)
   {return typeof prec==="number"
            ?prec!==0?buffer_add_string(buf,".*"):/* () */0
            :(buffer_add_char(buf,46),
              buffer_add_string(buf,Pervasives["string_of_int"](prec[1])))};

var
 bprint_iconv_flag=
  function(buf,iconv)
   {var exit;
    
    switch(iconv)
     {case 0:exit=365;break;
      case 1:exit=362;break;
      case 2:exit=363;break;
      case 3:exit=365;break;
      case 4:exit=362;break;
      case 5:exit=363;break;
      case 6:exit=365;break;
      case 7:exit=364;break;
      case 8:exit=365;break;
      case 9:exit=364;break;
      case 10:exit=365;break;
      case 11:exit=364;break;
      case 12:exit=365;break
      }
    
    switch(exit)
     {case 362:return buffer_add_char(buf,43);
      case 363:return buffer_add_char(buf,32);
      case 364:return buffer_add_char(buf,35);
      case 365:return /* () */0
      }
    };

var
 bprint_int_fmt=
  function(buf,ign_flag,iconv,pad,prec)
   {buffer_add_char(buf,37);
    bprint_ignored_flag(buf,ign_flag);
    bprint_iconv_flag(buf,iconv);
    bprint_padding(buf,pad);
    bprint_precision(buf,prec);
    return buffer_add_char(buf,char_of_iconv(iconv))};

var
 bprint_altint_fmt=
  function(buf,ign_flag,iconv,pad,prec,c)
   {buffer_add_char(buf,37);
    bprint_ignored_flag(buf,ign_flag);
    bprint_iconv_flag(buf,iconv);
    bprint_padding(buf,pad);
    bprint_precision(buf,prec);
    buffer_add_char(buf,c);
    return buffer_add_char(buf,char_of_iconv(iconv))};

var
 bprint_fconv_flag=
  function(buf,fconv)
   {var exit;
    
    switch(fconv)
     {case 0:exit=358;break;
      case 1:exit=356;break;
      case 2:exit=357;break;
      case 3:exit=358;break;
      case 4:exit=356;break;
      case 5:exit=357;break;
      case 6:exit=358;break;
      case 7:exit=356;break;
      case 8:exit=357;break;
      case 9:exit=358;break;
      case 10:exit=356;break;
      case 11:exit=357;break;
      case 12:exit=358;break;
      case 13:exit=356;break;
      case 14:exit=357;break;
      case 15:exit=358;break
      }
    
    switch(exit)
     {case 356:return buffer_add_char(buf,43);
      case 357:return buffer_add_char(buf,32);
      case 358:return /* () */0
      }
    };

var
 bprint_float_fmt=
  function(buf,ign_flag,fconv,pad,prec)
   {buffer_add_char(buf,37);
    bprint_ignored_flag(buf,ign_flag);
    bprint_fconv_flag(buf,fconv);
    bprint_padding(buf,pad);
    bprint_precision(buf,prec);
    return buffer_add_char(buf,char_of_fconv(fconv))};

var
 string_of_formatting_lit=
  function(formatting_lit)
   {if(typeof formatting_lit==="number")
     {switch(formatting_lit)
       {case 0:return "@]";
        case 1:return "@}";
        case 2:return "@?";
        case 3:return "@\n";
        case 4:return "@.";
        case 5:return "@@";
        case 6:return "@%"
        }}
    else
     {switch(formatting_lit[0])
       {case 0:return formatting_lit[1];
        case 1:return formatting_lit[1];
        case 2:
         return Pervasives["^"]("@",$$String["make"](1,formatting_lit[1]))
        }}
    };

var
 string_of_formatting_gen=
  function(formatting_gen)
   {switch(formatting_gen[0])
     {case 0:return formatting_gen[1][2];case 1:return formatting_gen[1][2]}
    };

var
 bprint_char_literal=
  function(buf,chr)
   {return chr!==37?buffer_add_char(buf,chr):buffer_add_string(buf,"%%")};

var
 bprint_string_literal=
  function(buf,str)
   {for(var i=0;i<=str["length"]-1;i++)
     {bprint_char_literal(buf,str["charCodeAt"](i))}
    return 0;
    };

var
 bprint_fmtty=
  function(buf,fmtty)
   {if(typeof fmtty==="number")
     {switch(fmtty){case 0:return /* () */0}}
    else
     {switch(fmtty[0])
       {case 0:buffer_add_string(buf,"%c");return bprint_fmtty(buf,fmtty[1]);
        case 1:buffer_add_string(buf,"%s");return bprint_fmtty(buf,fmtty[1]);
        case 2:buffer_add_string(buf,"%i");return bprint_fmtty(buf,fmtty[1]);
        case 3:buffer_add_string(buf,"%li");return bprint_fmtty(buf,fmtty[1]);
        case 4:buffer_add_string(buf,"%ni");return bprint_fmtty(buf,fmtty[1]);
        case 5:buffer_add_string(buf,"%Li");return bprint_fmtty(buf,fmtty[1]);
        case 6:buffer_add_string(buf,"%f");return bprint_fmtty(buf,fmtty[1]);
        case 7:buffer_add_string(buf,"%B");return bprint_fmtty(buf,fmtty[1]);
        case 8:
         buffer_add_string(buf,"%{");
         bprint_fmtty(buf,fmtty[1]);
         buffer_add_string(buf,"%}");
         return bprint_fmtty(buf,fmtty[2]);
        case 9:
         buffer_add_string(buf,"%(");
         bprint_fmtty(buf,fmtty[1]);
         buffer_add_string(buf,"%)");
         return bprint_fmtty(buf,fmtty[3]);
        case 10:buffer_add_string(buf,"%a");return bprint_fmtty(buf,fmtty[1]);
        case 11:buffer_add_string(buf,"%t");return bprint_fmtty(buf,fmtty[1]);
        case 12:buffer_add_string(buf,"%?");return bprint_fmtty(buf,fmtty[1]);
        case 13:buffer_add_string(buf,"%r");return bprint_fmtty(buf,fmtty[1]);
        case 14:buffer_add_string(buf,"%_r");return bprint_fmtty(buf,fmtty[1])
        }}
    };

var
 int_of_custom_arity=
  function(param){return param?1+int_of_custom_arity(param[1]):0};

var
 bprint_fmt=
  function(buf,fmt)
   {var
     fmtiter=
      function(fmt,ign_flag)
       {if(typeof fmt==="number")
         {switch(fmt){case 0:return /* () */0}}
        else
         {switch(fmt[0])
           {case 0:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,99);
             return fmtiter(fmt[1],/* false */0);
            case 1:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,67);
             return fmtiter(fmt[1],/* false */0);
            case 2:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             bprint_padding(buf,fmt[1]);
             buffer_add_char(buf,115);
             return fmtiter(fmt[2],/* false */0);
            case 3:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             bprint_padding(buf,fmt[1]);
             buffer_add_char(buf,83);
             return fmtiter(fmt[2],/* false */0);
            case 4:
             bprint_int_fmt(buf,ign_flag,fmt[1],fmt[2],fmt[3]);
             return fmtiter(fmt[4],/* false */0);
            case 5:
             bprint_altint_fmt(buf,ign_flag,fmt[1],fmt[2],fmt[3],108);
             return fmtiter(fmt[4],/* false */0);
            case 6:
             bprint_altint_fmt(buf,ign_flag,fmt[1],fmt[2],fmt[3],110);
             return fmtiter(fmt[4],/* false */0);
            case 7:
             bprint_altint_fmt(buf,ign_flag,fmt[1],fmt[2],fmt[3],76);
             return fmtiter(fmt[4],/* false */0);
            case 8:
             bprint_float_fmt(buf,ign_flag,fmt[1],fmt[2],fmt[3]);
             return fmtiter(fmt[4],/* false */0);
            case 9:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,66);
             return fmtiter(fmt[1],/* false */0);
            case 10:
             buffer_add_string(buf,"%!");return fmtiter(fmt[1],ign_flag);
            case 11:
             bprint_string_literal(buf,fmt[1]);
             return fmtiter(fmt[2],ign_flag);
            case 12:
             bprint_char_literal(buf,fmt[1]);return fmtiter(fmt[2],ign_flag);
            case 13:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             bprint_pad_opt(buf,fmt[1]);
             buffer_add_char(buf,123);
             bprint_fmtty(buf,fmt[2]);
             buffer_add_char(buf,37);
             buffer_add_char(buf,125);
             return fmtiter(fmt[3],/* false */0);
            case 14:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             bprint_pad_opt(buf,fmt[1]);
             buffer_add_char(buf,40);
             bprint_fmtty(buf,fmt[2]);
             buffer_add_char(buf,37);
             buffer_add_char(buf,41);
             return fmtiter(fmt[3],/* false */0);
            case 15:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,97);
             return fmtiter(fmt[1],/* false */0);
            case 16:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,116);
             return fmtiter(fmt[1],/* false */0);
            case 17:
             bprint_string_literal(buf,string_of_formatting_lit(fmt[1]));
             return fmtiter(fmt[2],ign_flag);
            case 18:
             bprint_string_literal(buf,"@{");
             bprint_string_literal(buf,string_of_formatting_gen(fmt[1]));
             return fmtiter(fmt[2],ign_flag);
            case 19:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,114);
             return fmtiter(fmt[1],/* false */0);
            case 20:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             bprint_pad_opt(buf,fmt[1]);
             bprint_char_set(buf,fmt[2]);
             return fmtiter(fmt[3],/* false */0);
            case 21:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,char_of_counter(fmt[1]));
             return fmtiter(fmt[2],/* false */0);
            case 22:
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             bprint_string_literal(buf,"0c");
             return fmtiter(fmt[1],/* false */0);
            case 23:
             var match=param_format_of_ignored_format(fmt[1],fmt[2]);
             
             return fmtiter(match[1],/* true */1);
            case 24:
             for(var _i=1;_i<=int_of_custom_arity(fmt[1]);_i++)
              {buffer_add_char(buf,37),
               bprint_ignored_flag(buf,ign_flag),
               buffer_add_char(buf,63)}
             
             return fmtiter(fmt[3],/* false */0)
            }}
        };
    
    return fmtiter(fmt,/* false */0)};

var
 string_of_fmt=
  function(fmt)
   {var buf=buffer_create(16);bprint_fmt(buf,fmt);return buffer_contents(buf)};

var
 symm=
  function(param)
   {if(typeof param==="number")
     {switch(param){case 0:return /* End_of_fmtty */0}}
    else
     {switch(param[0])
       {case 0:return /* Char_ty */[0,symm(param[1])];
        case 1:return /* String_ty */[1,symm(param[1])];
        case 2:return /* Int_ty */[2,symm(param[1])];
        case 3:return /* Int32_ty */[3,symm(param[1])];
        case 4:return /* Nativeint_ty */[4,symm(param[1])];
        case 5:return /* Int64_ty */[5,symm(param[1])];
        case 6:return /* Float_ty */[6,symm(param[1])];
        case 7:return /* Bool_ty */[7,symm(param[1])];
        case 8:return /* Format_arg_ty */[8,param[1],symm(param[2])];
        case 9:
         return /* Format_subst_ty */[9,param[2],param[1],symm(param[3])];
        case 10:return /* Alpha_ty */[10,symm(param[1])];
        case 11:return /* Theta_ty */[11,symm(param[1])];
        case 12:return /* Any_ty */[12,symm(param[1])];
        case 13:return /* Reader_ty */[13,symm(param[1])];
        case 14:return /* Ignored_reader_ty */[14,symm(param[1])]
        }}
    };

var
 fmtty_rel_det=
  function(param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:
         return /* tuple */[0,
                 function(param$1){return /* Refl */0},
                 function(param$1){return /* Refl */0},
                 function(param$1){return /* Refl */0},
                 function(param$1){return /* Refl */0}]
        }}
    else
     {switch(param[0])
       {case 0:
         var match=fmtty_rel_det(param[1]);
         
         var af=match[2];
         
         var fa=match[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$1=fa(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$1=af(/* Refl */0);return /* Refl */0},
                 match[3],
                 match[4]];
        case 1:
         var match$1=fmtty_rel_det(param[1]);
         
         var af$1=match$1[2];
         
         var fa$1=match$1[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$2=fa$1(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$2=af$1(/* Refl */0);return /* Refl */0},
                 match$1[3],
                 match$1[4]];
        case 2:
         var match$2=fmtty_rel_det(param[1]);
         
         var af$2=match$2[2];
         
         var fa$2=match$2[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$3=fa$2(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$3=af$2(/* Refl */0);return /* Refl */0},
                 match$2[3],
                 match$2[4]];
        case 3:
         var match$3=fmtty_rel_det(param[1]);
         
         var af$3=match$3[2];
         
         var fa$3=match$3[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$4=fa$3(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$4=af$3(/* Refl */0);return /* Refl */0},
                 match$3[3],
                 match$3[4]];
        case 4:
         var match$4=fmtty_rel_det(param[1]);
         
         var af$4=match$4[2];
         
         var fa$4=match$4[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$5=fa$4(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$5=af$4(/* Refl */0);return /* Refl */0},
                 match$4[3],
                 match$4[4]];
        case 5:
         var match$5=fmtty_rel_det(param[1]);
         
         var af$5=match$5[2];
         
         var fa$5=match$5[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$6=fa$5(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$6=af$5(/* Refl */0);return /* Refl */0},
                 match$5[3],
                 match$5[4]];
        case 6:
         var match$6=fmtty_rel_det(param[1]);
         
         var af$6=match$6[2];
         
         var fa$6=match$6[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$7=fa$6(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$7=af$6(/* Refl */0);return /* Refl */0},
                 match$6[3],
                 match$6[4]];
        case 7:
         var match$7=fmtty_rel_det(param[1]);
         
         var af$7=match$7[2];
         
         var fa$7=match$7[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$8=fa$7(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$8=af$7(/* Refl */0);return /* Refl */0},
                 match$7[3],
                 match$7[4]];
        case 8:
         var match$8=fmtty_rel_det(param[2]);
         
         var af$8=match$8[2];
         
         var fa$8=match$8[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$9=fa$8(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$9=af$8(/* Refl */0);return /* Refl */0},
                 match$8[3],
                 match$8[4]];
        case 9:
         var match$9=fmtty_rel_det(param[3]);
         
         var de=match$9[4];
         
         var ed=match$9[3];
         
         var af$9=match$9[2];
         
         var fa$9=match$9[1];
         
         var ty=trans(symm(param[1]),param[2]);
         
         var match$10=fmtty_rel_det(ty);
         
         var jd=match$10[4];
         
         var dj=match$10[3];
         
         var ga=match$10[2];
         
         var ag=match$10[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$11=fa$9(/* Refl */0);
                   
                   var match$12=ag(/* Refl */0);
                   
                   return /* Refl */0},
                 function(param$1)
                  {var match$11=ga(/* Refl */0);
                   
                   var match$12=af$9(/* Refl */0);
                   
                   return /* Refl */0},
                 function(param$1)
                  {var match$11=ed(/* Refl */0);
                   
                   var match$12=dj(/* Refl */0);
                   
                   return /* Refl */0},
                 function(param$1)
                  {var match$11=jd(/* Refl */0);
                   
                   var match$12=de(/* Refl */0);
                   
                   return /* Refl */0}];
        case 10:
         var match$11=fmtty_rel_det(param[1]);
         
         var af$10=match$11[2];
         
         var fa$10=match$11[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$12=fa$10(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$12=af$10(/* Refl */0);return /* Refl */0},
                 match$11[3],
                 match$11[4]];
        case 11:
         var match$12=fmtty_rel_det(param[1]);
         
         var af$11=match$12[2];
         
         var fa$11=match$12[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$13=fa$11(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$13=af$11(/* Refl */0);return /* Refl */0},
                 match$12[3],
                 match$12[4]];
        case 12:
         var match$13=fmtty_rel_det(param[1]);
         
         var af$12=match$13[2];
         
         var fa$12=match$13[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$14=fa$12(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$14=af$12(/* Refl */0);return /* Refl */0},
                 match$13[3],
                 match$13[4]];
        case 13:
         var match$14=fmtty_rel_det(param[1]);
         
         var de$1=match$14[4];
         
         var ed$1=match$14[3];
         
         var af$13=match$14[2];
         
         var fa$13=match$14[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$15=fa$13(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$15=af$13(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$15=ed$1(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$15=de$1(/* Refl */0);return /* Refl */0}];
        case 14:
         var match$15=fmtty_rel_det(param[1]);
         
         var de$2=match$15[4];
         
         var ed$2=match$15[3];
         
         var af$14=match$15[2];
         
         var fa$14=match$15[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$16=fa$14(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$16=af$14(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$16=ed$2(/* Refl */0);return /* Refl */0},
                 function(param$1)
                  {var match$16=de$2(/* Refl */0);return /* Refl */0}]
        }}
    };

var
 trans=
  function(ty1,ty2)
   {var exit;
    
    if(typeof ty1==="number")
     {switch(ty1)
       {case 0:
         if(typeof ty2==="number")
          {switch(ty2){case 0:return /* End_of_fmtty */0}}
         else
          {switch(ty2[0])
            {case 8:exit=335;break;
             case 9:exit=333;break;
             case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:exit=339;break;
             case 14:exit=337;break;
             default:
              throw [0,
                     CamlPrimitive["caml_global_data"]["Assert_failure"],
                     [0,"camlinternalFormat.ml",816,23]]}}
         break
        }}
    else
     {switch(ty1[0])
       {case 0:
         if(typeof ty2==="number")
          {switch(ty2){case 0:exit=331;break}}
         else
          {switch(ty2[0])
            {case 0:return /* Char_ty */[0,trans(ty1[1],ty2[1])];
             case 8:exit=335;break;
             case 9:exit=333;break;
             case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:exit=339;break;
             case 14:exit=337;break
             }}
         break;
        case 1:
         if(typeof ty2==="number")
          {switch(ty2){case 0:exit=331;break}}
         else
          {switch(ty2[0])
            {case 1:return /* String_ty */[1,trans(ty1[1],ty2[1])];
             case 8:exit=335;break;
             case 9:exit=333;break;
             case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:exit=339;break;
             case 14:exit=337;break
             }}
         break;
        case 2:
         if(typeof ty2==="number")
          {switch(ty2){case 0:exit=331;break}}
         else
          {switch(ty2[0])
            {case 2:return /* Int_ty */[2,trans(ty1[1],ty2[1])];
             case 8:exit=335;break;
             case 9:exit=333;break;
             case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:exit=339;break;
             case 14:exit=337;break
             }}
         break;
        case 3:
         if(typeof ty2==="number")
          {switch(ty2){case 0:exit=331;break}}
         else
          {switch(ty2[0])
            {case 3:return /* Int32_ty */[3,trans(ty1[1],ty2[1])];
             case 8:exit=335;break;
             case 9:exit=333;break;
             case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:exit=339;break;
             case 14:exit=337;break
             }}
         break;
        case 4:
         if(typeof ty2==="number")
          {switch(ty2){case 0:exit=331;break}}
         else
          {switch(ty2[0])
            {case 4:return /* Nativeint_ty */[4,trans(ty1[1],ty2[1])];
             case 8:exit=335;break;
             case 9:exit=333;break;
             case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:exit=339;break;
             case 14:exit=337;break
             }}
         break;
        case 5:
         if(typeof ty2==="number")
          {switch(ty2){case 0:exit=331;break}}
         else
          {switch(ty2[0])
            {case 5:return /* Int64_ty */[5,trans(ty1[1],ty2[1])];
             case 8:exit=335;break;
             case 9:exit=333;break;
             case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:exit=339;break;
             case 14:exit=337;break
             }}
         break;
        case 6:
         if(typeof ty2==="number")
          {switch(ty2){case 0:exit=331;break}}
         else
          {switch(ty2[0])
            {case 6:return /* Float_ty */[6,trans(ty1[1],ty2[1])];
             case 8:exit=335;break;
             case 9:exit=333;break;
             case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:exit=339;break;
             case 14:exit=337;break
             }}
         break;
        case 7:
         if(typeof ty2==="number")
          {switch(ty2){case 0:exit=331;break}}
         else
          {switch(ty2[0])
            {case 7:return /* Bool_ty */[7,trans(ty1[1],ty2[1])];
             case 8:exit=335;break;
             case 9:exit=333;break;
             case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:exit=339;break;
             case 14:exit=337;break
             }}
         break;
        case 8:
         if(typeof ty2==="number")
          {switch(ty2){}}
         else
          {switch(ty2[0])
            {case 8:
              return /* Format_arg_ty */[8,
                      trans(ty1[1],ty2[1]),
                      trans(ty1[2],ty2[2])];
             case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:exit=339;break;
             case 14:exit=337;break;
             default:exit=336;}}
         break;
        case 9:
         if(typeof ty2==="number")
          {switch(ty2){}}
         else
          {switch(ty2[0])
            {case 8:exit=335;break;
             case 9:
              var ty=trans(symm(ty1[2]),ty2[1]);
              
              var match=fmtty_rel_det(ty);
              
              var match$1=match[2](/* Refl */0);
              
              var match$2=match[4](/* Refl */0);
              
              return /* Format_subst_ty */[9,
                      ty1[1],
                      ty2[2],
                      trans(ty1[3],ty2[3])];
             case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:exit=339;break;
             case 14:exit=337;break;
             default:exit=334;}}
         break;
        case 10:
         var exit$1;
         
         if(typeof ty2==="number")
          {switch(ty2){}}
         else
          {switch(ty2[0])
            {case 10:return /* Alpha_ty */[10,trans(ty1[1],ty2[1])];
             default:exit$1=346;}}
         
         switch(exit$1)
          {case 346:
            throw [0,
                   CamlPrimitive["caml_global_data"]["Assert_failure"],
                   [0,"camlinternalFormat.ml",780,21]]
           }
         break;
        case 11:
         if(typeof ty2==="number")
          {switch(ty2){}}
         else
          {switch(ty2[0])
            {case 10:exit=345;break;
             case 11:return /* Theta_ty */[11,trans(ty1[1],ty2[1])];
             default:exit=344;}}
         break;
        case 12:
         if(typeof ty2==="number")
          {switch(ty2){}}
         else
          {switch(ty2[0])
            {case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:return /* Any_ty */[12,trans(ty1[1],ty2[1])];
             default:exit=342;}}
         break;
        case 13:
         if(typeof ty2==="number")
          {switch(ty2){}}
         else
          {switch(ty2[0])
            {case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:return /* Reader_ty */[13,trans(ty1[1],ty2[1])];
             default:exit=340;}}
         break;
        case 14:
         if(typeof ty2==="number")
          {switch(ty2){}}
         else
          {switch(ty2[0])
            {case 10:exit=345;break;
             case 11:exit=343;break;
             case 12:exit=341;break;
             case 13:exit=339;break;
             case 14:return /* Ignored_reader_ty */[14,trans(ty1[1],ty2[1])];
             default:exit=338;}}
         break
        }}
    
    switch(exit)
     {case 345:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",781,21]];
      case 344:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",784,21]];
      case 343:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",785,21]];
      case 342:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",788,19]];
      case 341:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",789,19]];
      case 340:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",792,22]];
      case 339:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",793,22]];
      case 338:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",797,30]];
      case 337:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",798,30]];
      case 336:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",802,26]];
      case 335:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",803,26]];
      case 334:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",812,28]];
      case 333:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",813,28]];
      case 331:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"camlinternalFormat.ml",817,23]]
      }
    };

var
 fmtty_of_formatting_gen=
  function(formatting_gen)
   {switch(formatting_gen[0])
     {case 0:return fmtty_of_fmt(formatting_gen[1][1]);
      case 1:return fmtty_of_fmt(formatting_gen[1][1])
      }
    };

var
 fmtty_of_fmt=
  function(fmtty)
   {if(typeof fmtty==="number")
     {switch(fmtty){case 0:return /* End_of_fmtty */0}}
    else
     {switch(fmtty[0])
       {case 0:return /* Char_ty */[0,fmtty_of_fmt(fmtty[1])];
        case 1:return /* Char_ty */[0,fmtty_of_fmt(fmtty[1])];
        case 2:
         return fmtty_of_padding_fmtty
                 (fmtty[1],/* String_ty */[1,fmtty_of_fmt(fmtty[2])]);
        case 3:
         return fmtty_of_padding_fmtty
                 (fmtty[1],/* String_ty */[1,fmtty_of_fmt(fmtty[2])]);
        case 4:
         var ty_rest=fmtty_of_fmt(fmtty[4]);
         
         var
          prec_ty=
           fmtty_of_precision_fmtty(fmtty[3],/* Int_ty */[2,ty_rest]);
         
         return fmtty_of_padding_fmtty(fmtty[2],prec_ty);
        case 5:
         var ty_rest$1=fmtty_of_fmt(fmtty[4]);
         
         var
          prec_ty$1=
           fmtty_of_precision_fmtty(fmtty[3],/* Int32_ty */[3,ty_rest$1]);
         
         return fmtty_of_padding_fmtty(fmtty[2],prec_ty$1);
        case 6:
         var ty_rest$2=fmtty_of_fmt(fmtty[4]);
         
         var
          prec_ty$2=
           fmtty_of_precision_fmtty(fmtty[3],/* Nativeint_ty */[4,ty_rest$2]);
         
         return fmtty_of_padding_fmtty(fmtty[2],prec_ty$2);
        case 7:
         var ty_rest$3=fmtty_of_fmt(fmtty[4]);
         
         var
          prec_ty$3=
           fmtty_of_precision_fmtty(fmtty[3],/* Int64_ty */[5,ty_rest$3]);
         
         return fmtty_of_padding_fmtty(fmtty[2],prec_ty$3);
        case 8:
         var ty_rest$4=fmtty_of_fmt(fmtty[4]);
         
         var
          prec_ty$4=
           fmtty_of_precision_fmtty(fmtty[3],/* Float_ty */[6,ty_rest$4]);
         
         return fmtty_of_padding_fmtty(fmtty[2],prec_ty$4);
        case 9:return /* Bool_ty */[7,fmtty_of_fmt(fmtty[1])];
        case 10:return fmtty_of_fmt(fmtty[1]);
        case 11:return fmtty_of_fmt(fmtty[2]);
        case 12:return fmtty_of_fmt(fmtty[2]);
        case 13:return /* Format_arg_ty */[8,fmtty[2],fmtty_of_fmt(fmtty[3])];
        case 14:
         var ty=fmtty[2];
         
         return /* Format_subst_ty */[9,ty,ty,fmtty_of_fmt(fmtty[3])];
        case 15:return /* Alpha_ty */[10,fmtty_of_fmt(fmtty[1])];
        case 16:return /* Theta_ty */[11,fmtty_of_fmt(fmtty[1])];
        case 17:return fmtty_of_fmt(fmtty[2]);
        case 18:
         return CamlinternalFormatBasics["concat_fmtty"]
                 (fmtty_of_formatting_gen(fmtty[1]),fmtty_of_fmt(fmtty[2]));
        case 19:return /* Reader_ty */[13,fmtty_of_fmt(fmtty[1])];
        case 20:return /* String_ty */[1,fmtty_of_fmt(fmtty[3])];
        case 21:return /* Int_ty */[2,fmtty_of_fmt(fmtty[2])];
        case 22:return /* Char_ty */[0,fmtty_of_fmt(fmtty[1])];
        case 23:return fmtty_of_ignored_format(fmtty[1],fmtty[2]);
        case 24:return fmtty_of_custom(fmtty[1],fmtty_of_fmt(fmtty[3]))
        }}
    };

var
 fmtty_of_custom=
  function(arity,fmtty)
   {return arity?/* Any_ty */[12,fmtty_of_custom(arity[1],fmtty)]:fmtty};

var
 fmtty_of_ignored_format=
  function(ign,fmt)
   {if(typeof ign==="number")
     {switch(ign)
       {case 0:return fmtty_of_fmt(fmt);
        case 1:return fmtty_of_fmt(fmt);
        case 2:return fmtty_of_fmt(fmt);
        case 3:return /* Ignored_reader_ty */[14,fmtty_of_fmt(fmt)];
        case 4:return fmtty_of_fmt(fmt)
        }}
    else
     {switch(ign[0])
       {case 0:return fmtty_of_fmt(fmt);
        case 1:return fmtty_of_fmt(fmt);
        case 2:return fmtty_of_fmt(fmt);
        case 3:return fmtty_of_fmt(fmt);
        case 4:return fmtty_of_fmt(fmt);
        case 5:return fmtty_of_fmt(fmt);
        case 6:return fmtty_of_fmt(fmt);
        case 7:return fmtty_of_fmt(fmt);
        case 8:
         return CamlinternalFormatBasics["concat_fmtty"]
                 (ign[2],fmtty_of_fmt(fmt));
        case 9:return fmtty_of_fmt(fmt);
        case 10:return fmtty_of_fmt(fmt)
        }}
    };

var
 fmtty_of_padding_fmtty=
  function(pad,fmtty)
   {if(typeof pad==="number")
     {switch(pad){case 0:return fmtty}}
    else
     {switch(pad[0]){case 0:return fmtty;case 1:return /* Int_ty */[2,fmtty]}}
    };

var
 fmtty_of_precision_fmtty=
  function(prec,fmtty)
   {return typeof prec==="number"?prec!==0?/* Int_ty */[2,fmtty]:fmtty:fmtty};

var
 Type_mismatch=
  CamlPrimitive["caml_set_oo_id"]([248,"CamlinternalFormat.Type_mismatch",0]);

var
 type_padding=
  function(pad,fmtty)
   {var exit;
    
    if(typeof pad==="number")
     {switch(pad)
       {case 0:return /* Padding_fmtty_EBB */[0,/* No_padding */0,fmtty]}}
    else
     {switch(pad[0])
       {case 0:
         return /* Padding_fmtty_EBB */[0,
                 /* Lit_padding */[0,pad[1],pad[2]],
                 fmtty];
        case 1:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 2:
              return /* Padding_fmtty_EBB */[0,
                      /* Arg_padding */[1,pad[1]],
                      fmtty[1]];
             default:exit=300;}}
         break
        }}
    
    switch(exit){case 300:throw Type_mismatch}
    };

var
 type_padprec=
  function(pad,prec,fmtty)
   {var match=type_padding(pad,fmtty);
    
    var exit;
    
    if(typeof prec==="number")
     {if(prec!==0)
       {var match$1=match[2];
        
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 2:
             return /* Padprec_fmtty_EBB */[0,
                     match[1],
                     /* Arg_precision */1,
                     match$1[1]];
            default:exit=298;}}
        }
      else
       {return /* Padprec_fmtty_EBB */[0,
                match[1],
                /* No_precision */0,
                match[2]]}
      }
    else
     {return /* Padprec_fmtty_EBB */[0,
              match[1],
              /* Lit_precision */[0,prec[1]],
              match[2]]}
    
    switch(exit){case 298:throw Type_mismatch}
    };

var
 type_format=
  function(fmt,fmtty)
   {var match=type_format_gen(fmt,fmtty);
    
    if(typeof match[2]==="number"){return match[1]}else{throw Type_mismatch}
    };

var
 type_format_gen=
  function(fmt,fmtty)
   {var exit;
    
    if(typeof fmt==="number")
     {switch(fmt)
       {case 0:return /* Fmt_fmtty_EBB */[0,/* End_of_format */0,fmtty]}}
    else
     {switch(fmt[0])
       {case 0:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 0:
              var match=type_format_gen(fmt[1],fmtty[1]);
              
              return /* Fmt_fmtty_EBB */[0,/* Char */[0,match[1]],match[2]];
             default:exit=293;}}
         break;
        case 1:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 0:
              var match$1=type_format_gen(fmt[1],fmtty[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Caml_char */[1,match$1[1]],
                      match$1[2]];
             default:exit=293;}}
         break;
        case 2:
         var match$2=type_padding(fmt[1],fmtty);
         
         var match$3=match$2[2];
         
         var exit$1;
         
         if(typeof match$3==="number")
          {switch(match$3){}}
         else
          {switch(match$3[0])
            {case 1:
              var match$4=type_format_gen(fmt[2],match$3[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* String */[2,match$2[1],match$4[1]],
                      match$4[2]];
             default:exit$1=286;}}
         
         switch(exit$1){case 286:throw Type_mismatch}
         break;
        case 3:
         var match$5=type_padding(fmt[1],fmtty);
         
         var match$6=match$5[2];
         
         var exit$2;
         
         if(typeof match$6==="number")
          {switch(match$6){}}
         else
          {switch(match$6[0])
            {case 1:
              var match$7=type_format_gen(fmt[2],match$6[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Caml_string */[3,match$5[1],match$7[1]],
                      match$7[2]];
             default:exit$2=287;}}
         
         switch(exit$2){case 287:throw Type_mismatch}
         break;
        case 4:
         var match$8=type_padprec(fmt[2],fmt[3],fmtty);
         
         var match$9=match$8[3];
         
         var exit$3;
         
         if(typeof match$9==="number")
          {switch(match$9){}}
         else
          {switch(match$9[0])
            {case 2:
              var match$10=type_format_gen(fmt[4],match$9[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Int */[4,fmt[1],match$8[1],match$8[2],match$10[1]],
                      match$10[2]];
             default:exit$3=288;}}
         
         switch(exit$3){case 288:throw Type_mismatch}
         break;
        case 5:
         var match$11=type_padprec(fmt[2],fmt[3],fmtty);
         
         var match$12=match$11[3];
         
         var exit$4;
         
         if(typeof match$12==="number")
          {switch(match$12){}}
         else
          {switch(match$12[0])
            {case 3:
              var match$13=type_format_gen(fmt[4],match$12[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Int32 */[5,fmt[1],match$11[1],match$11[2],match$13[1]],
                      match$13[2]];
             default:exit$4=289;}}
         
         switch(exit$4){case 289:throw Type_mismatch}
         break;
        case 6:
         var match$14=type_padprec(fmt[2],fmt[3],fmtty);
         
         var match$15=match$14[3];
         
         var exit$5;
         
         if(typeof match$15==="number")
          {switch(match$15){}}
         else
          {switch(match$15[0])
            {case 4:
              var match$16=type_format_gen(fmt[4],match$15[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Nativeint */[6,
                       fmt[1],
                       match$14[1],
                       match$14[2],
                       match$16[1]],
                      match$16[2]];
             default:exit$5=290;}}
         
         switch(exit$5){case 290:throw Type_mismatch}
         break;
        case 7:
         var match$17=type_padprec(fmt[2],fmt[3],fmtty);
         
         var match$18=match$17[3];
         
         var exit$6;
         
         if(typeof match$18==="number")
          {switch(match$18){}}
         else
          {switch(match$18[0])
            {case 5:
              var match$19=type_format_gen(fmt[4],match$18[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Int64 */[7,fmt[1],match$17[1],match$17[2],match$19[1]],
                      match$19[2]];
             default:exit$6=291;}}
         
         switch(exit$6){case 291:throw Type_mismatch}
         break;
        case 8:
         var match$20=type_padprec(fmt[2],fmt[3],fmtty);
         
         var match$21=match$20[3];
         
         var exit$7;
         
         if(typeof match$21==="number")
          {switch(match$21){}}
         else
          {switch(match$21[0])
            {case 6:
              var match$22=type_format_gen(fmt[4],match$21[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Float */[8,fmt[1],match$20[1],match$20[2],match$22[1]],
                      match$22[2]];
             default:exit$7=292;}}
         
         switch(exit$7){case 292:throw Type_mismatch}
         break;
        case 9:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 7:
              var match$23=type_format_gen(fmt[1],fmtty[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Bool */[9,match$23[1]],
                      match$23[2]];
             default:exit=293;}}
         break;
        case 10:
         var match$24=type_format_gen(fmt[1],fmtty);
         
         return /* Fmt_fmtty_EBB */[0,/* Flush */[10,match$24[1]],match$24[2]];
        case 11:
         var match$25=type_format_gen(fmt[2],fmtty);
         
         return /* Fmt_fmtty_EBB */[0,
                 /* String_literal */[11,fmt[1],match$25[1]],
                 match$25[2]];
        case 12:
         var match$26=type_format_gen(fmt[2],fmtty);
         
         return /* Fmt_fmtty_EBB */[0,
                 /* Char_literal */[12,fmt[1],match$26[1]],
                 match$26[2]];
        case 13:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 8:
              var sub_fmtty$prime=fmtty[1];
              
              if
               (CamlPrimitive["caml_notequal"]
                 (/* Fmtty_EBB */[0,fmt[2]],
                  /* Fmtty_EBB */[0,sub_fmtty$prime]))
               {throw Type_mismatch}
              else
               {}
              
              var match$27=type_format_gen(fmt[3],fmtty[2]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Format_arg */[13,fmt[1],sub_fmtty$prime,match$27[1]],
                      match$27[2]];
             default:exit=293;}}
         break;
        case 14:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 9:
              var sub_fmtty1=fmtty[1];
              
              if
               (CamlPrimitive["caml_notequal"]
                 (/* Fmtty_EBB */[0,
                   CamlinternalFormatBasics["erase_rel"](fmt[2])],
                  /* Fmtty_EBB */[0,
                   CamlinternalFormatBasics["erase_rel"](sub_fmtty1)]))
               {throw Type_mismatch}
              else
               {}
              
              var
               match$28=
                type_format_gen
                 (fmt[3],CamlinternalFormatBasics["erase_rel"](fmtty[3]));
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Format_subst */[14,fmt[1],sub_fmtty1,match$28[1]],
                      match$28[2]];
             default:exit=293;}}
         break;
        case 15:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 10:
              var match$29=type_format_gen(fmt[1],fmtty[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Alpha */[15,match$29[1]],
                      match$29[2]];
             default:exit=293;}}
         break;
        case 16:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 11:
              var match$30=type_format_gen(fmt[1],fmtty[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Theta */[16,match$30[1]],
                      match$30[2]];
             default:exit=293;}}
         break;
        case 17:
         var match$31=type_format_gen(fmt[2],fmtty);
         
         return /* Fmt_fmtty_EBB */[0,
                 /* Formatting_lit */[17,fmt[1],match$31[1]],
                 match$31[2]];
        case 18:return type_formatting_gen(fmt[1],fmt[2],fmtty);
        case 19:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 13:
              var match$32=type_format_gen(fmt[1],fmtty[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Reader */[19,match$32[1]],
                      match$32[2]];
             default:exit=293;}}
         break;
        case 20:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 1:
              var match$33=type_format_gen(fmt[3],fmtty[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Scan_char_set */[20,fmt[1],fmt[2],match$33[1]],
                      match$33[2]];
             default:exit=293;}}
         break;
        case 21:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 2:
              var match$34=type_format_gen(fmt[2],fmtty[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Scan_get_counter */[21,fmt[1],match$34[1]],
                      match$34[2]];
             default:exit=293;}}
         break;
        case 22:exit=293;break;
        case 23:return type_ignored_param(fmt[1],fmt[2],fmtty);
        case 24:exit=293;break
        }}
    
    switch(exit){case 293:throw Type_mismatch}
    };

var
 type_formatting_gen=
  function(formatting_gen,fmt0,fmtty0)
   {switch(formatting_gen[0])
     {case 0:
       var match=formatting_gen[1];
       
       var match$1=type_format_gen(match[1],fmtty0);
       
       var match$2=type_format_gen(fmt0,match$1[2]);
       
       return /* Fmt_fmtty_EBB */[0,
               /* Formatting_gen */[18,
                /* Open_tag */[0,/* Format */[0,match$1[1],match[2]]],
                match$2[1]],
               match$2[2]];
      case 1:
       var match$3=formatting_gen[1];
       
       var match$4=type_format_gen(match$3[1],fmtty0);
       
       var match$5=type_format_gen(fmt0,match$4[2]);
       
       return /* Fmt_fmtty_EBB */[0,
               /* Formatting_gen */[18,
                /* Open_box */[1,/* Format */[0,match$4[1],match$3[2]]],
                match$5[1]],
               match$5[2]]
      }
    };

var
 type_ignored_param=
  function(ign,fmt,fmtty)
   {if(typeof ign==="number")
     {switch(ign)
       {case 0:return type_ignored_param_one(ign,fmt,fmtty);
        case 1:return type_ignored_param_one(ign,fmt,fmtty);
        case 2:return type_ignored_param_one(ign,fmt,fmtty);
        case 3:
         var exit;
         
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 14:
              var match=type_format_gen(fmt,fmtty[1]);
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Ignored_param */[23,/* Ignored_reader */3,match[1]],
                      match[2]];
             default:exit=294;}}
         
         switch(exit){case 294:throw Type_mismatch}
         break;
        case 4:return type_ignored_param_one(ign,fmt,fmtty)
        }}
    else
     {switch(ign[0])
       {case 0:return type_ignored_param_one(ign,fmt,fmtty);
        case 1:return type_ignored_param_one(ign,fmt,fmtty);
        case 2:return type_ignored_param_one(ign,fmt,fmtty);
        case 3:return type_ignored_param_one(ign,fmt,fmtty);
        case 4:return type_ignored_param_one(ign,fmt,fmtty);
        case 5:return type_ignored_param_one(ign,fmt,fmtty);
        case 6:return type_ignored_param_one(ign,fmt,fmtty);
        case 7:
         return type_ignored_param_one
                 (/* Ignored_format_arg */[7,ign[1],ign[2]],fmt,fmtty);
        case 8:
         var match$1=type_ignored_format_substitution(ign[2],fmt,fmtty);
         
         var match$2=match$1[2];
         
         return /* Fmt_fmtty_EBB */[0,
                 /* Ignored_param */[23,
                  /* Ignored_format_subst */[8,ign[1],match$1[1]],
                  match$2[1]],
                 match$2[2]];
        case 9:return type_ignored_param_one(ign,fmt,fmtty);
        case 10:return type_ignored_param_one(ign,fmt,fmtty)
        }}
    };

var
 type_ignored_param_one=
  function(ign,fmt,fmtty)
   {var match=type_format_gen(fmt,fmtty);
    
    return /* Fmt_fmtty_EBB */[0,
            /* Ignored_param */[23,ign,match[1]],
            match[2]]};

var
 type_ignored_format_substitution=
  function(sub_fmtty,fmt,fmtty)
   {var exit;
    
    if(typeof sub_fmtty==="number")
     {switch(sub_fmtty)
       {case 0:
         return /* Fmtty_fmt_EBB */[0,
                 /* End_of_fmtty */0,
                 type_format_gen(fmt,fmtty)]
        }}
    else
     {switch(sub_fmtty[0])
       {case 0:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 0:
              var
               match=
                type_ignored_format_substitution(sub_fmtty[1],fmt,fmtty[1]);
              
              return /* Fmtty_fmt_EBB */[0,/* Char_ty */[0,match[1]],match[2]];
             default:exit=297;}}
         break;
        case 1:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 1:
              var
               match$1=
                type_ignored_format_substitution(sub_fmtty[1],fmt,fmtty[1]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* String_ty */[1,match$1[1]],
                      match$1[2]];
             default:exit=297;}}
         break;
        case 2:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 2:
              var
               match$2=
                type_ignored_format_substitution(sub_fmtty[1],fmt,fmtty[1]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Int_ty */[2,match$2[1]],
                      match$2[2]];
             default:exit=297;}}
         break;
        case 3:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 3:
              var
               match$3=
                type_ignored_format_substitution(sub_fmtty[1],fmt,fmtty[1]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Int32_ty */[3,match$3[1]],
                      match$3[2]];
             default:exit=297;}}
         break;
        case 4:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 4:
              var
               match$4=
                type_ignored_format_substitution(sub_fmtty[1],fmt,fmtty[1]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Nativeint_ty */[4,match$4[1]],
                      match$4[2]];
             default:exit=297;}}
         break;
        case 5:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 5:
              var
               match$5=
                type_ignored_format_substitution(sub_fmtty[1],fmt,fmtty[1]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Int64_ty */[5,match$5[1]],
                      match$5[2]];
             default:exit=297;}}
         break;
        case 6:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 6:
              var
               match$6=
                type_ignored_format_substitution(sub_fmtty[1],fmt,fmtty[1]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Float_ty */[6,match$6[1]],
                      match$6[2]];
             default:exit=297;}}
         break;
        case 7:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 7:
              var
               match$7=
                type_ignored_format_substitution(sub_fmtty[1],fmt,fmtty[1]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Bool_ty */[7,match$7[1]],
                      match$7[2]];
             default:exit=297;}}
         break;
        case 8:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 8:
              var sub2_fmtty$prime=fmtty[1];
              
              if
               (CamlPrimitive["caml_notequal"]
                 (/* Fmtty_EBB */[0,sub_fmtty[1]],
                  /* Fmtty_EBB */[0,sub2_fmtty$prime]))
               {throw Type_mismatch}
              else
               {}
              
              var
               match$8=
                type_ignored_format_substitution(sub_fmtty[2],fmt,fmtty[2]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Format_arg_ty */[8,sub2_fmtty$prime,match$8[1]],
                      match$8[2]];
             default:exit=297;}}
         break;
        case 9:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 9:
              var sub2_fmtty$prime$1=fmtty[2];
              
              var sub1_fmtty$prime=fmtty[1];
              
              if
               (CamlPrimitive["caml_notequal"]
                 (/* Fmtty_EBB */[0,
                   CamlinternalFormatBasics["erase_rel"](sub_fmtty[1])],
                  /* Fmtty_EBB */[0,
                   CamlinternalFormatBasics["erase_rel"](sub1_fmtty$prime)]))
               {throw Type_mismatch}
              else
               {}
              
              if
               (CamlPrimitive["caml_notequal"]
                 (/* Fmtty_EBB */[0,
                   CamlinternalFormatBasics["erase_rel"](sub_fmtty[2])],
                  /* Fmtty_EBB */[0,
                   CamlinternalFormatBasics["erase_rel"](sub2_fmtty$prime$1)]))
               {throw Type_mismatch}
              else
               {}
              
              var
               sub_fmtty$prime=
                trans(symm(sub1_fmtty$prime),sub2_fmtty$prime$1);
              
              var match$9=fmtty_rel_det(sub_fmtty$prime);
              
              var match$10=match$9[2](/* Refl */0);
              
              var match$11=match$9[4](/* Refl */0);
              
              var
               match$12=
                type_ignored_format_substitution
                 (CamlinternalFormatBasics["erase_rel"](sub_fmtty[3]),
                  fmt,
                  fmtty[3]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Format_subst_ty */[9,
                       sub1_fmtty$prime,
                       sub2_fmtty$prime$1,
                       symm(match$12[1])],
                      match$12[2]];
             default:exit=297;}}
         break;
        case 10:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 10:
              var
               match$13=
                type_ignored_format_substitution(sub_fmtty[1],fmt,fmtty[1]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Alpha_ty */[10,match$13[1]],
                      match$13[2]];
             default:exit=297;}}
         break;
        case 11:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 11:
              var
               match$14=
                type_ignored_format_substitution(sub_fmtty[1],fmt,fmtty[1]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Theta_ty */[11,match$14[1]],
                      match$14[2]];
             default:exit=297;}}
         break;
        case 12:exit=297;break;
        case 13:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 13:
              var
               match$15=
                type_ignored_format_substitution(sub_fmtty[1],fmt,fmtty[1]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Reader_ty */[13,match$15[1]],
                      match$15[2]];
             default:exit=297;}}
         break;
        case 14:
         if(typeof fmtty==="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 14:
              var
               match$16=
                type_ignored_format_substitution(sub_fmtty[1],fmt,fmtty[1]);
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Ignored_reader_ty */[14,match$16[1]],
                      match$16[2]];
             default:exit=297;}}
         break
        }}
    
    switch(exit){case 297:throw Type_mismatch}
    };

var
 recast=
  function(fmt,fmtty)
   {return type_format(fmt,CamlinternalFormatBasics["erase_rel"](symm(fmtty)))};

var
 fix_padding=
  function(padty,width,str)
   {var len=str["length"];
    
    var
     match=
      /* tuple */[0,Pervasives["abs"](width),width<0?/* Left */0:padty];
    
    var padty$1=match[2];
    
    var width$1=match[1];
    
    if(width$1<=len)
     {return str}
    else
     {var res=Bytes["make"](width$1,padty$1===/* Zeros */2?48:32);
      
      switch(padty$1)
       {case 0:$$String["blit"](str,0,res,0,len);break;
        case 1:$$String["blit"](str,0,res,width$1-len,len);break;
        case 2:
         len>
          0&&
          (str["charCodeAt"](0)===
           43||
           str["charCodeAt"](0)===
           45||
           str["charCodeAt"](0)===
           32)
          ?(res[0]=
            str["charCodeAt"](0),
            $$String["blit"](str,1,res,width$1-len+1,len-1))
          :len>
            1&&
            str["charCodeAt"](0)===
            48&&
            (str["charCodeAt"](1)===120||str["charCodeAt"](1)===88)
            ?(res[1]=
              str["charCodeAt"](1),
              $$String["blit"](str,2,res,width$1-len+2,len-2))
            :$$String["blit"](str,0,res,width$1-len,len);
         break
        }
      
      return Bytes["unsafe_to_string"](res)}
    };

var
 fix_int_precision=
  function(prec,str)
   {var prec$1=Pervasives["abs"](prec);
    
    var len=str["length"];
    
    var c=str["charCodeAt"](0);
    
    var exit;
    
    if(c>=58)
     {if(c>=71)
       {if(5<-97+c>>>0){exit=274;}else{exit=276;}}
      else
       {if(c>=65){exit=276;}else{exit=274;}}
      }
    else
     {if(c!==32)
       {if(c>=43)
         {switch(-43+c)
           {case 0:exit=275;break;
            case 1:exit=274;break;
            case 2:exit=275;break;
            case 3:exit=274;break;
            case 4:exit=274;break;
            case 5:
             if
              (prec$1+
               2>
               len&&
               len>
               1&&
               (str["charCodeAt"](1)===120||str["charCodeAt"](1)===88))
              {var res=Bytes["make"](prec$1+2,48);
               
               res[1]=str["charCodeAt"](1);
               $$String["blit"](str,2,res,prec$1-len+4,len-2);
               return Bytes["unsafe_to_string"](res)}
             else
              {exit=276;}
             break;
            case 6:exit=276;break;
            case 7:exit=276;break;
            case 8:exit=276;break;
            case 9:exit=276;break;
            case 10:exit=276;break;
            case 11:exit=276;break;
            case 12:exit=276;break;
            case 13:exit=276;break;
            case 14:exit=276;break
            }
          }
        else
         {exit=274;}
        }
      else
       {exit=275;}
      }
    
    switch(exit)
     {case 275:
       if(prec$1+1>len)
        {var res$1=Bytes["make"](prec$1+1,48);
         
         res$1[0]=c;
         $$String["blit"](str,1,res$1,prec$1-len+2,len-1);
         return Bytes["unsafe_to_string"](res$1)}
       else
        {exit=274;}
       break;
      case 276:
       if(prec$1>len)
        {var res$2=Bytes["make"](prec$1,48);
         
         $$String["blit"](str,0,res$2,prec$1-len,len);
         return Bytes["unsafe_to_string"](res$2)}
       else
        {exit=274;}
       break;
      case 274:return str
      }
    };

var
 string_to_caml_string=
  function(str)
   {return $$String["concat"]
            ($$String["escaped"](str),
             [/* :: */0,'"',[/* :: */0,'"',/* [] */0]])};

var
 format_of_iconv=
  function(iconv)
   {switch(iconv)
     {case 0:return "%d";
      case 1:return "%+d";
      case 2:return "% d";
      case 3:return "%i";
      case 4:return "%+i";
      case 5:return "% i";
      case 6:return "%x";
      case 7:return "%#x";
      case 8:return "%X";
      case 9:return "%#X";
      case 10:return "%o";
      case 11:return "%#o";
      case 12:return "%u"
      }
    };

var
 format_of_aconv=
  function(iconv,c)
   {switch(iconv)
     {case 0:var seps=[/* :: */0,"%",[/* :: */0,"d",/* [] */0]];break;
      case 1:var seps=[/* :: */0,"%+",[/* :: */0,"d",/* [] */0]];break;
      case 2:var seps=[/* :: */0,"% ",[/* :: */0,"d",/* [] */0]];break;
      case 3:var seps=[/* :: */0,"%",[/* :: */0,"i",/* [] */0]];break;
      case 4:var seps=[/* :: */0,"%+",[/* :: */0,"i",/* [] */0]];break;
      case 5:var seps=[/* :: */0,"% ",[/* :: */0,"i",/* [] */0]];break;
      case 6:var seps=[/* :: */0,"%",[/* :: */0,"x",/* [] */0]];break;
      case 7:var seps=[/* :: */0,"%#",[/* :: */0,"x",/* [] */0]];break;
      case 8:var seps=[/* :: */0,"%",[/* :: */0,"X",/* [] */0]];break;
      case 9:var seps=[/* :: */0,"%#",[/* :: */0,"X",/* [] */0]];break;
      case 10:var seps=[/* :: */0,"%",[/* :: */0,"o",/* [] */0]];break;
      case 11:var seps=[/* :: */0,"%#",[/* :: */0,"o",/* [] */0]];break;
      case 12:var seps=[/* :: */0,"%",[/* :: */0,"u",/* [] */0]];break
      }
    
    return $$String["concat"]($$String["make"](1,c),seps)};

var
 format_of_fconv=
  function(fconv,prec)
   {if(fconv===/* Float_F */15)
     {return "%.12g"}
    else
     {var prec$1=Pervasives["abs"](prec);
      
      var symb=char_of_fconv(fconv);
      
      var buf=buffer_create(16);
      
      buffer_add_char(buf,37);
      bprint_fconv_flag(buf,fconv);
      buffer_add_char(buf,46);
      buffer_add_string(buf,Pervasives["string_of_int"](prec$1));
      buffer_add_char(buf,symb);
      return buffer_contents(buf)}
    };

var
 convert_int=
  function(iconv,n)
   {return CamlPrimitive["caml_format_int"](format_of_iconv(iconv),n)};

var
 convert_int32=
  function(iconv,n)
   {return CamlPrimitive["caml_int32_format"](format_of_aconv(iconv,108),n)};

var
 convert_nativeint=
  function(iconv,n)
   {return CamlPrimitive["caml_nativeint_format"]
            (format_of_aconv(iconv,110),n)};

var
 convert_int64=
  function(iconv,n)
   {return CamlPrimitive["caml_int64_format"](format_of_aconv(iconv,76),n)};

var
 convert_float=
  function(fconv,prec,x)
   {var prec$1=Pervasives["abs"](prec);
    
    var
     str=
      CamlPrimitive["caml_format_float"](format_of_fconv(fconv,prec$1),x);
    
    if(fconv!==/* Float_F */15)
     {return str}
    else
     {var len=str["length"];
      
      var
       is_valid=
        function(i)
         {if(i===len)
           {return /* false */0}
          else
           {var match=str["charCodeAt"](i);
            
            var exit;
            
            var switcher=-46+match;
            
            if(!(23<switcher>>>0))
             {if(21<-1+switcher>>>0){exit=253;}else{exit=254;}}
            else
             {if(switcher!==55){exit=254;}else{exit=253;}}
            
            switch(exit)
             {case 254:return is_valid(i+1);case 253:return /* true */1}
            }
          };
      
      var match=CamlPrimitive["caml_classify_float"](x);
      
      return match!==3
              ?match>=4?"nan":is_valid(0)?str:Pervasives["^"](str,".")
              :x<0?"neg_infinity":"infinity"}
    };

var
 format_caml_char=
  function(c)
   {return $$String["concat"]
            (Char["escaped"](c),[/* :: */0,"'",[/* :: */0,"'",/* [] */0]])};

var
 string_of_fmtty=
  function(fmtty)
   {var buf=buffer_create(16);
    
    bprint_fmtty(buf,fmtty);
    return buffer_contents(buf)};

var
 make_printf=
  function(k,o,acc,fmt)
   {if(typeof fmt==="number")
     {switch(fmt){case 0:return k(o,acc)}}
    else
     {switch(fmt[0])
       {case 0:
         var rest=fmt[1];
         
         return function(c)
          {var new_acc=/* Acc_data_char */[5,acc,c];
           
           return make_printf(k,o,new_acc,rest)};
        case 1:
         var rest$1=fmt[1];
         
         return function(c)
          {var new_acc=/* Acc_data_string */[4,acc,format_caml_char(c)];
           
           return make_printf(k,o,new_acc,rest$1)};
        case 2:
         return make_string_padding
                 (k,o,acc,fmt[2],fmt[1],function(str){return str});
        case 3:
         return make_string_padding
                 (k,o,acc,fmt[2],fmt[1],string_to_caml_string);
        case 4:
         return make_int_padding_precision
                 (k,o,acc,fmt[4],fmt[2],fmt[3],convert_int,fmt[1]);
        case 5:
         return make_int_padding_precision
                 (k,o,acc,fmt[4],fmt[2],fmt[3],convert_int32,fmt[1]);
        case 6:
         return make_int_padding_precision
                 (k,o,acc,fmt[4],fmt[2],fmt[3],convert_nativeint,fmt[1]);
        case 7:
         return make_int_padding_precision
                 (k,o,acc,fmt[4],fmt[2],fmt[3],convert_int64,fmt[1]);
        case 8:
         return make_float_padding_precision
                 (k,o,acc,fmt[4],fmt[2],fmt[3],fmt[1]);
        case 9:
         var rest$2=fmt[1];
         
         return function(b)
          {return make_printf
                   (k,
                    o,
                    /* Acc_data_string */[4,acc,Pervasives["string_of_bool"](b)],
                    rest$2)};
        case 10:return make_printf(k,o,/* Acc_flush */[7,acc],fmt[1]);
        case 11:
         return make_printf(k,o,/* Acc_string_literal */[2,acc,fmt[1]],fmt[2]);
        case 12:
         return make_printf(k,o,/* Acc_char_literal */[3,acc,fmt[1]],fmt[2]);
        case 13:
         var rest$3=fmt[3];
         
         var ty=string_of_fmtty(fmt[2]);
         
         return function(str)
          {return make_printf(k,o,/* Acc_data_string */[4,acc,ty],rest$3)};
        case 14:
         var rest$4=fmt[3];
         
         var fmtty=fmt[2];
         
         return function(param)
          {return make_printf
                   (k,
                    o,
                    acc,
                    CamlinternalFormatBasics["concat_fmt"]
                     (recast(param[1],fmtty),rest$4))};
        case 15:
         var rest$5=fmt[1];
         
         return function(f,x)
          {return make_printf
                   (k,
                    o,
                    /* Acc_delay */[6,acc,function(o){return f(o,x)}],
                    rest$5)};
        case 16:
         var rest$6=fmt[1];
         
         return function(f)
          {return make_printf(k,o,/* Acc_delay */[6,acc,f],rest$6)};
        case 17:
         return make_printf(k,o,/* Acc_formatting_lit */[0,acc,fmt[1]],fmt[2]);
        case 18:
         var match=fmt[1];
         
         switch(match[0])
          {case 0:
            var rest$7=fmt[2];
            
            var
             k$prime=
              function(koc,kacc)
               {return make_printf
                        (k,
                         koc,
                         /* Acc_formatting_gen */[1,acc,/* Acc_open_tag */[0,kacc]],
                         rest$7)};
            
            return make_printf(k$prime,o,/* End_of_acc */0,match[1][1]);
           case 1:
            var rest$8=fmt[2];
            
            var
             k$prime$1=
              function(koc,kacc)
               {return make_printf
                        (k,
                         koc,
                         /* Acc_formatting_gen */[1,acc,/* Acc_open_box */[1,kacc]],
                         rest$8)};
            
            return make_printf(k$prime$1,o,/* End_of_acc */0,match[1][1])
           }
         break;
        case 19:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"camlinternalFormat.ml",1449,4]];
        case 20:
         var rest$9=fmt[3];
         
         var new_acc=/* Acc_invalid_arg */[8,acc,"Printf: bad conversion %["];
         
         return function(param){return make_printf(k,o,new_acc,rest$9)};
        case 21:
         var rest$10=fmt[2];
         
         return function(n)
          {var
            new_acc$1=
             /* Acc_data_string */[4,
              acc,
              CamlPrimitive["caml_format_int"]("%u",n)];
           
           return make_printf(k,o,new_acc$1,rest$10)};
        case 22:
         var rest$11=fmt[1];
         
         return function(c)
          {var new_acc$1=/* Acc_data_char */[5,acc,c];
           
           return make_printf(k,o,new_acc$1,rest$11)};
        case 23:return make_ignored_param(k,o,acc,fmt[1],fmt[2]);
        case 24:return make_custom(k,o,acc,fmt[3],fmt[1],fmt[2](/* () */0))
        }}
    };

var
 make_ignored_param=
  function(k,o,acc,ign,fmt)
   {if(typeof ign==="number")
     {switch(ign)
       {case 0:return make_invalid_arg(k,o,acc,fmt);
        case 1:return make_invalid_arg(k,o,acc,fmt);
        case 2:return make_invalid_arg(k,o,acc,fmt);
        case 3:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"camlinternalFormat.ml",1517,39]];
        case 4:return make_invalid_arg(k,o,acc,fmt)
        }}
    else
     {switch(ign[0])
       {case 0:return make_invalid_arg(k,o,acc,fmt);
        case 1:return make_invalid_arg(k,o,acc,fmt);
        case 2:return make_invalid_arg(k,o,acc,fmt);
        case 3:return make_invalid_arg(k,o,acc,fmt);
        case 4:return make_invalid_arg(k,o,acc,fmt);
        case 5:return make_invalid_arg(k,o,acc,fmt);
        case 6:return make_invalid_arg(k,o,acc,fmt);
        case 7:return make_invalid_arg(k,o,acc,fmt);
        case 8:return make_from_fmtty(k,o,acc,ign[2],fmt);
        case 9:return make_invalid_arg(k,o,acc,fmt);
        case 10:return make_invalid_arg(k,o,acc,fmt)
        }}
    };

var
 make_from_fmtty=
  function(k,o,acc,fmtty,fmt)
   {if(typeof fmtty==="number")
     {switch(fmtty){case 0:return make_invalid_arg(k,o,acc,fmt)}}
    else
     {switch(fmtty[0])
       {case 0:
         var rest=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest,fmt)};
        case 1:
         var rest$1=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$1,fmt)};
        case 2:
         var rest$2=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$2,fmt)};
        case 3:
         var rest$3=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$3,fmt)};
        case 4:
         var rest$4=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$4,fmt)};
        case 5:
         var rest$5=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$5,fmt)};
        case 6:
         var rest$6=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$6,fmt)};
        case 7:
         var rest$7=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$7,fmt)};
        case 8:
         var rest$8=fmtty[2];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$8,fmt)};
        case 9:
         var rest$9=fmtty[3];
         
         var ty=trans(symm(fmtty[1]),fmtty[2]);
         
         return function(param)
          {return make_from_fmtty
                   (k,
                    o,
                    acc,
                    CamlinternalFormatBasics["concat_fmtty"](ty,rest$9),
                    fmt)};
        case 10:
         var rest$10=fmtty[1];
         
         return function(param,param$1)
          {return make_from_fmtty(k,o,acc,rest$10,fmt)};
        case 11:
         var rest$11=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$11,fmt)};
        case 12:
         var rest$12=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$12,fmt)};
        case 13:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"camlinternalFormat.ml",1540,31]];
        case 14:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"camlinternalFormat.ml",1541,31]]
        }}
    };

var
 make_invalid_arg=
  function(k,o,acc,fmt)
   {return make_printf
            (k,o,/* Acc_invalid_arg */[8,acc,"Printf: bad conversion %_"],fmt)};

var
 make_string_padding=
  function(k,o,acc,fmt,pad,trans)
   {if(typeof pad==="number")
     {switch(pad)
       {case 0:
         return function(x)
          {var new_acc=/* Acc_data_string */[4,acc,trans(x)];
           
           return make_printf(k,o,new_acc,fmt)}
        }}
    else
     {switch(pad[0])
       {case 0:
         var width=pad[2];
         
         var padty=pad[1];
         
         return function(x)
          {var
            new_acc=
             /* Acc_data_string */[4,acc,fix_padding(padty,width,trans(x))];
           
           return make_printf(k,o,new_acc,fmt)};
        case 1:
         var padty$1=pad[1];
         
         return function(w,x)
          {var
            new_acc=
             /* Acc_data_string */[4,acc,fix_padding(padty$1,w,trans(x))];
           
           return make_printf(k,o,new_acc,fmt)}
        }}
    };

var
 make_int_padding_precision=
  function(k,o,acc,fmt,pad,prec,trans,iconv)
   {if(typeof pad==="number")
     {switch(pad)
       {case 0:
         if(typeof prec==="number")
          {return prec!==0
                   ?function(p,x)
                     {var str=fix_int_precision(p,trans(iconv,x));
                      
                      return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}
                   :function(x)
                     {var str=trans(iconv,x);
                      
                      return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}}
         else
          {var p=prec[1];
           
           return function(x)
            {var str=fix_int_precision(p,trans(iconv,x));
             
             return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}}
         break
        }}
    else
     {switch(pad[0])
       {case 0:
         var w=pad[2];
         
         var padty=pad[1];
         
         if(typeof prec==="number")
          {return prec!==0
                   ?function(p,x)
                     {var
                       str=
                        fix_padding(padty,w,fix_int_precision(p,trans(iconv,x)));
                      
                      return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}
                   :function(x)
                     {var str=fix_padding(padty,w,trans(iconv,x));
                      
                      return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}}
         else
          {var p$1=prec[1];
           
           return function(x)
            {var
              str=
               fix_padding(padty,w,fix_int_precision(p$1,trans(iconv,x)));
             
             return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}}
         break;
        case 1:
         var padty$1=pad[1];
         
         if(typeof prec==="number")
          {return prec!==0
                   ?function(w,p,x)
                     {var
                       str=
                        fix_padding(padty$1,w,fix_int_precision(p,trans(iconv,x)));
                      
                      return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}
                   :function(w,x)
                     {var str=fix_padding(padty$1,w,trans(iconv,x));
                      
                      return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}}
         else
          {var p$2=prec[1];
           
           return function(w,x)
            {var
              str=
               fix_padding(padty$1,w,fix_int_precision(p$2,trans(iconv,x)));
             
             return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}}
         break
        }}
    };

var
 make_float_padding_precision=
  function(k,o,acc,fmt,pad,prec,fconv)
   {if(typeof pad==="number")
     {switch(pad)
       {case 0:
         if(typeof prec==="number")
          {return prec!==0
                   ?function(p,x)
                     {var str=convert_float(fconv,p,x);
                      
                      return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}
                   :function(x)
                     {var str=convert_float(fconv,default_float_precision,x);
                      
                      return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}}
         else
          {var p=prec[1];
           
           return function(x)
            {var str=convert_float(fconv,p,x);
             
             return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}}
         break
        }}
    else
     {switch(pad[0])
       {case 0:
         var w=pad[2];
         
         var padty=pad[1];
         
         if(typeof prec==="number")
          {return prec!==0
                   ?function(p,x)
                     {var str=fix_padding(padty,w,convert_float(fconv,p,x));
                      
                      return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}
                   :function(x)
                     {var str=convert_float(fconv,default_float_precision,x);
                      
                      var str$prime=fix_padding(padty,w,str);
                      
                      return make_printf
                              (k,o,/* Acc_data_string */[4,acc,str$prime],fmt)}}
         else
          {var p$1=prec[1];
           
           return function(x)
            {var str=fix_padding(padty,w,convert_float(fconv,p$1,x));
             
             return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}}
         break;
        case 1:
         var padty$1=pad[1];
         
         if(typeof prec==="number")
          {return prec!==0
                   ?function(w,p,x)
                     {var str=fix_padding(padty$1,w,convert_float(fconv,p,x));
                      
                      return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}
                   :function(w,x)
                     {var str=convert_float(fconv,default_float_precision,x);
                      
                      var str$prime=fix_padding(padty$1,w,str);
                      
                      return make_printf
                              (k,o,/* Acc_data_string */[4,acc,str$prime],fmt)}}
         else
          {var p$2=prec[1];
           
           return function(w,x)
            {var str=fix_padding(padty$1,w,convert_float(fconv,p$2,x));
             
             return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt)}}
         break
        }}
    };

var
 make_custom=
  function(k,o,acc,rest,arity,f)
   {if(arity)
     {var arity$1=arity[1];
      
      return function(x){return make_custom(k,o,acc,rest,arity$1,f(x))}}
    else
     {return make_printf(k,o,/* Acc_data_string */[4,acc,f],rest)}
    };

var
 output_acc=
  function(o,acc)
   {var exit;
    
    if(typeof acc==="number")
     {switch(acc){case 0:return /* () */0}}
    else
     {switch(acc[0])
       {case 0:
         var s=string_of_formatting_lit(acc[2]);
         
         output_acc(o,acc[1]);
         return Pervasives["output_string"](o,s);
        case 1:
         var match=acc[2];
         
         var p=acc[1];
         
         switch(match[0])
          {case 0:
            output_acc(o,p);
            Pervasives["output_string"](o,"@{");
            return output_acc(o,match[1]);
           case 1:
            output_acc(o,p);
            Pervasives["output_string"](o,"@[");
            return output_acc(o,match[1])
           }
         break;
        case 2:exit=215;break;
        case 3:exit=216;break;
        case 4:exit=215;break;
        case 5:exit=216;break;
        case 6:output_acc(o,acc[1]);return acc[2](o);
        case 7:output_acc(o,acc[1]);return Pervasives["flush"](o);
        case 8:output_acc(o,acc[1]);return Pervasives["invalid_arg"](acc[2])
        }}
    
    switch(exit)
     {case 215:
       output_acc(o,acc[1]);return Pervasives["output_string"](o,acc[2]);
      case 216:output_acc(o,acc[1]);return Pervasives["output_char"](o,acc[2])
      }
    };

var
 bufput_acc=
  function(b,acc)
   {var exit;
    
    if(typeof acc==="number")
     {switch(acc){case 0:return /* () */0}}
    else
     {switch(acc[0])
       {case 0:
         var s=string_of_formatting_lit(acc[2]);
         
         bufput_acc(b,acc[1]);
         return Buffer["add_string"](b,s);
        case 1:
         var match=acc[2];
         
         var p=acc[1];
         
         switch(match[0])
          {case 0:
            bufput_acc(b,p);
            Buffer["add_string"](b,"@{");
            return bufput_acc(b,match[1]);
           case 1:
            bufput_acc(b,p);
            Buffer["add_string"](b,"@[");
            return bufput_acc(b,match[1])
           }
         break;
        case 2:exit=210;break;
        case 3:exit=211;break;
        case 4:exit=210;break;
        case 5:exit=211;break;
        case 6:bufput_acc(b,acc[1]);return acc[2](b);
        case 7:return bufput_acc(b,acc[1]);
        case 8:bufput_acc(b,acc[1]);return Pervasives["invalid_arg"](acc[2])
        }}
    
    switch(exit)
     {case 210:bufput_acc(b,acc[1]);return Buffer["add_string"](b,acc[2]);
      case 211:bufput_acc(b,acc[1]);return Buffer["add_char"](b,acc[2])
      }
    };

var
 strput_acc=
  function(b,acc)
   {var exit;
    
    if(typeof acc==="number")
     {switch(acc){case 0:return /* () */0}}
    else
     {switch(acc[0])
       {case 0:
         var s=string_of_formatting_lit(acc[2]);
         
         strput_acc(b,acc[1]);
         return Buffer["add_string"](b,s);
        case 1:
         var match=acc[2];
         
         var p=acc[1];
         
         switch(match[0])
          {case 0:
            strput_acc(b,p);
            Buffer["add_string"](b,"@{");
            return strput_acc(b,match[1]);
           case 1:
            strput_acc(b,p);
            Buffer["add_string"](b,"@[");
            return strput_acc(b,match[1])
           }
         break;
        case 2:exit=205;break;
        case 3:exit=206;break;
        case 4:exit=205;break;
        case 5:exit=206;break;
        case 6:
         strput_acc(b,acc[1]);
         return Buffer["add_string"](b,acc[2](/* () */0));
        case 7:return strput_acc(b,acc[1]);
        case 8:strput_acc(b,acc[1]);return Pervasives["invalid_arg"](acc[2])
        }}
    
    switch(exit)
     {case 205:strput_acc(b,acc[1]);return Buffer["add_string"](b,acc[2]);
      case 206:strput_acc(b,acc[1]);return Buffer["add_char"](b,acc[2])
      }
    };

var
 failwith_message=
  function(param)
   {var buf=Buffer["create"](256);
    
    var
     k=
      function(param$1,acc)
       {strput_acc(buf,acc);
        return Pervasives["failwith"](Buffer["contents"](buf))};
    
    return make_printf(k,/* () */0,/* End_of_acc */0,param[1])};

var
 open_box_of_string=
  function(str)
   {if(CamlPrimitive["caml_string_equal"](str,""))
     {return [/* tuple */0,0,/* Pp_box */4]}
    else
     {var len=str["length"];
      
      var
       invalid_box=
        function(param)
         {return failwith_message
                  ([/* Format */0,
                    [/* String_literal */11,
                     "invalid box description ",
                     [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                    "invalid box description %S"],
                   str)};
      
      var
       parse_spaces=
        function(i)
         {if(i===len)
           {return i}
          else
           {var match=str["charCodeAt"](i);
            
            var exit;
            
            if(match!==9)
             {if(match!==32){return i}else{exit=190;}}
            else
             {exit=190;}
            
            switch(exit){case 190:return parse_spaces(i+1)}
            }
          };
      
      var
       parse_lword=
        function(i,j)
         {if(j===len)
           {return j}
          else
           {var match=str["charCodeAt"](j);
            
            return 25<-97+match>>>0?j:parse_lword(i,j+1)}
          };
      
      var
       parse_int=
        function(i,j)
         {if(j===len)
           {return j}
          else
           {var match=str["charCodeAt"](j);
            
            var exit;
            
            if(match>=48)
             {if(match>=58){exit=195;}else{exit=194;}}
            else
             {if(match!==45){exit=195;}else{exit=194;}}
            
            switch(exit){case 195:return j;case 194:return parse_int(i,j+1)}
            }
          };
      
      var wstart=parse_spaces(0);
      
      var wend=parse_lword(wstart,wstart);
      
      var box_name=$$String["sub"](str,wstart,wend-wstart);
      
      var nstart=parse_spaces(wend);
      
      var nend=parse_int(nstart,nstart);
      
      var indent;
      if(nstart===nend)
       {indent=0;}
      else
       {try
         {indent=
          CamlPrimitive["caml_int_of_string"]
           ($$String["sub"](str,nstart,nend-nstart));
          }
        catch(exn)
         {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
           {indent=invalid_box(/* () */0);}
          else
           {throw exn}
          }
        }
      
      var exp_end=parse_spaces(nend);
      
      var match=exp_end!==len?invalid_box(/* () */0):0;
      
      var exit;
      
      switch(box_name)
       {case "":exit=178;break;
        case "b":exit=178;break;
        case "h":var box_type=/* Pp_hbox */0;break;
        case "hov":var box_type=/* Pp_hovbox */3;break;
        case "hv":var box_type=/* Pp_hvbox */2;break;
        case "v":var box_type=/* Pp_vbox */1;break;
        default:exit=179;}
      
      switch(exit)
       {case 179:var box_type=invalid_box(/* () */0);break;
        case 178:var box_type=/* Pp_box */4;break
        }
      
      return /* tuple */[0,indent,box_type]}
    };

var
 make_padding_fmt_ebb=
  function(pad,fmt)
   {if(typeof pad==="number")
     {switch(pad)
       {case 0:return /* Padding_fmt_EBB */[0,/* No_padding */0,fmt]}}
    else
     {switch(pad[0])
       {case 0:
         return /* Padding_fmt_EBB */[0,
                 /* Lit_padding */[0,pad[1],pad[2]],
                 fmt];
        case 1:return /* Padding_fmt_EBB */[0,/* Arg_padding */[1,pad[1]],fmt]
        }}
    };

var
 make_precision_fmt_ebb=
  function(prec,fmt)
   {return typeof prec==="number"
            ?prec!==0
              ?/* Precision_fmt_EBB */[0,/* Arg_precision */1,fmt]
              :/* Precision_fmt_EBB */[0,/* No_precision */0,fmt]
            :/* Precision_fmt_EBB */[0,/* Lit_precision */[0,prec[1]],fmt]};

var
 make_padprec_fmt_ebb=
  function(pad,prec,fmt)
   {var match=make_precision_fmt_ebb(prec,fmt);
    
    var fmt$prime=match[2];
    
    var prec$1=match[1];
    
    if(typeof pad==="number")
     {switch(pad)
       {case 0:
         return /* Padprec_fmt_EBB */[0,/* No_padding */0,prec$1,fmt$prime]
        }}
    else
     {switch(pad[0])
       {case 0:
         return /* Padprec_fmt_EBB */[0,
                 /* Lit_padding */[0,pad[1],pad[2]],
                 prec$1,
                 fmt$prime];
        case 1:
         return /* Padprec_fmt_EBB */[0,
                 /* Arg_padding */[1,pad[1]],
                 prec$1,
                 fmt$prime]
        }}
    };

var
 fmt_ebb_of_string=
  function(legacy_behavior,str)
   {var legacy_behavior$1=legacy_behavior?legacy_behavior[1]:/* true */1;
    
    var
     invalid_format_message=
      function(str_ind,msg)
       {return failwith_message
                ([/* Format */0,
                  [/* String_literal */11,
                   "invalid format ",
                   [/* Caml_string */3,
                    /* No_padding */0,
                    [/* String_literal */11,
                     ": at character number ",
                     [/* Int */4,
                      /* Int_d */0,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* String_literal */11,
                       ", ",
                       [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
                  "invalid format %S: at character number %d, %s"],
                 str,
                 str_ind,
                 msg)};
    
    var
     unexpected_end_of_format=
      function(end_ind)
       {return invalid_format_message(end_ind,"unexpected end of format")};
    
    var
     invalid_nonnull_char_width=
      function(str_ind)
       {return invalid_format_message
                (str_ind,"non-zero widths are unsupported for %c conversions")};
    
    var
     invalid_format_without=
      function(str_ind,c,s)
       {return failwith_message
                ([/* Format */0,
                  [/* String_literal */11,
                   "invalid format ",
                   [/* Caml_string */3,
                    /* No_padding */0,
                    [/* String_literal */11,
                     ": at character number ",
                     [/* Int */4,
                      /* Int_d */0,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* String_literal */11,
                       ", '",
                       [/* Char */0,
                        [/* String_literal */11,
                         "' without ",
                         [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]],
                  "invalid format %S: at character number %d, '%c' without %s"],
                 str,
                 str_ind,
                 c,
                 s)};
    
    var
     expected_character=
      function(str_ind,expected,read)
       {return failwith_message
                ([/* Format */0,
                  [/* String_literal */11,
                   "invalid format ",
                   [/* Caml_string */3,
                    /* No_padding */0,
                    [/* String_literal */11,
                     ": at character number ",
                     [/* Int */4,
                      /* Int_d */0,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* String_literal */11,
                       ", ",
                       [/* String */2,
                        /* No_padding */0,
                        [/* String_literal */11,
                         " expected, read ",
                         [/* Caml_char */1,/* End_of_format */0]]]]]]]],
                  "invalid format %S: at character number %d, %s expected, read %C"],
                 str,
                 str_ind,
                 expected,
                 read)};
    
    var
     parse=
      function(beg_ind,end_ind){return parse_literal(beg_ind,beg_ind,end_ind)};
    
    var
     parse_literal=
      function(lit_start,str_ind,end_ind)
       {if(str_ind===end_ind)
         {return add_literal(lit_start,str_ind,/* End_of_format */0)}
        else
         {var match=str["charCodeAt"](str_ind);
          
          if(match!==37)
           {if(match!==64)
             {return parse_literal(lit_start,str_ind+1,end_ind)}
            else
             {var match$1=parse_after_at(str_ind+1,end_ind);
              
              return add_literal(lit_start,str_ind,match$1[1])}
            }
          else
           {var match$2=parse_format(str_ind,end_ind);
            
            return add_literal(lit_start,str_ind,match$2[1])}
          }
        };
    
    var
     parse_format=
      function(pct_ind,end_ind){return parse_ign(pct_ind,pct_ind+1,end_ind)};
    
    var
     parse_ign=
      function(pct_ind,str_ind,end_ind)
       {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
        
        var match=str["charCodeAt"](str_ind);
        
        return match!==95
                ?parse_flags(pct_ind,str_ind,end_ind,/* false */0)
                :parse_flags(pct_ind,str_ind+1,end_ind,/* true */1)};
    
    var
     parse_flags=
      function(pct_ind,str_ind,end_ind,ign)
       {var zero=[0,/* false */0];
        
        var minus=[0,/* false */0];
        
        var plus=[0,/* false */0];
        
        var space=[0,/* false */0];
        
        var sharp=[0,/* false */0];
        
        var
         set_flag=
          function(str_ind,flag)
           {if(flag[1]&&!legacy_behavior$1)
             {failwith_message
               ([/* Format */0,
                 [/* String_literal */11,
                  "invalid format ",
                  [/* Caml_string */3,
                   /* No_padding */0,
                   [/* String_literal */11,
                    ": at character number ",
                    [/* Int */4,
                     /* Int_d */0,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* String_literal */11,
                      ", duplicate flag ",
                      [/* Caml_char */1,/* End_of_format */0]]]]]],
                 "invalid format %S: at character number %d, duplicate flag %C"],
                str,
                str_ind,
                str["charCodeAt"](str_ind))}
            
            return flag[1]=/* true */1,0};
        
        var
         read_flags=
          function(str_ind)
           {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
            
            var match=str["charCodeAt"](str_ind);
            
            var exit;
            
            var switcher=-32+match;
            
            if(16<switcher>>>0)
             {exit=7;}
            else
             {switch(switcher)
               {case 0:set_flag(str_ind,space);return read_flags(str_ind+1);
                case 1:exit=7;break;
                case 2:exit=7;break;
                case 3:set_flag(str_ind,sharp);return read_flags(str_ind+1);
                case 4:exit=7;break;
                case 5:exit=7;break;
                case 6:exit=7;break;
                case 7:exit=7;break;
                case 8:exit=7;break;
                case 9:exit=7;break;
                case 10:exit=7;break;
                case 11:set_flag(str_ind,plus);return read_flags(str_ind+1);
                case 12:exit=7;break;
                case 13:set_flag(str_ind,minus);return read_flags(str_ind+1);
                case 14:exit=7;break;
                case 15:exit=7;break;
                case 16:set_flag(str_ind,zero);return read_flags(str_ind+1)
                }
              }
            
            switch(exit)
             {case 7:
               return parse_padding
                       (pct_ind,
                        str_ind,
                        end_ind,
                        zero[1],
                        minus[1],
                        plus[1],
                        sharp[1],
                        space[1],
                        ign)
              }
            };
        
        return read_flags(str_ind)};
    
    var
     parse_padding=
      function(pct_ind,str_ind,end_ind,zero,minus,plus,sharp,space,ign)
       {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
        
        var
         padty=
          zero!==0
           ?minus!==0
             ?legacy_behavior$1
               ?/* Left */0
               :incompatible_flag(pct_ind,str_ind,45,"0")
             :/* Zeros */2
           :minus!==0?/* Left */0:/* Right */1;
        
        var match=str["charCodeAt"](str_ind);
        
        var exit;
        
        if(match>=48)
         {if(match>=58)
           {exit=16;}
          else
           {var match$1=parse_positive(str_ind,end_ind,0);
            
            return parse_after_padding
                    (pct_ind,
                     match$1[1],
                     end_ind,
                     minus,
                     plus,
                     sharp,
                     space,
                     ign,
                     /* Lit_padding */[0,padty,match$1[2]])}
          }
        else
         {if(match!==42)
           {exit=16;}
          else
           {return parse_after_padding
                    (pct_ind,
                     str_ind+1,
                     end_ind,
                     minus,
                     plus,
                     sharp,
                     space,
                     ign,
                     /* Arg_padding */[1,padty])}
          }
        
        switch(exit)
         {case 16:
           switch(padty)
            {case 0:
              if(!legacy_behavior$1)
               {invalid_format_without(str_ind-1,45,"padding")}
              
              return parse_after_padding
                      (pct_ind,
                       str_ind,
                       end_ind,
                       minus,
                       plus,
                       sharp,
                       space,
                       ign,
                       /* No_padding */0);
             case 1:
              return parse_after_padding
                      (pct_ind,
                       str_ind,
                       end_ind,
                       minus,
                       plus,
                       sharp,
                       space,
                       ign,
                       /* No_padding */0);
             case 2:
              return parse_after_padding
                      (pct_ind,
                       str_ind,
                       end_ind,
                       minus,
                       plus,
                       sharp,
                       space,
                       ign,
                       [/* Lit_padding */0,/* Right */1,0])
             }
           break
          }
        };
    
    var
     parse_after_padding=
      function(pct_ind,str_ind,end_ind,minus,plus,sharp,space,ign,pad)
       {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
        
        var symb=str["charCodeAt"](str_ind);
        
        return symb!==46
                ?parse_conversion
                  (pct_ind,
                   str_ind+1,
                   end_ind,
                   plus,
                   sharp,
                   space,
                   ign,
                   pad,
                   /* No_precision */0,
                   pad,
                   symb)
                :parse_precision
                  (pct_ind,str_ind+1,end_ind,minus,plus,sharp,space,ign,pad)};
    
    var
     parse_precision=
      function(pct_ind,str_ind,end_ind,minus,plus,sharp,space,ign,pad)
       {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
        
        var
         parse_literal$1=
          function(minus,str_ind)
           {var match=parse_positive(str_ind,end_ind,0);
            
            return parse_after_precision
                    (pct_ind,
                     match[1],
                     end_ind,
                     minus,
                     plus,
                     sharp,
                     space,
                     ign,
                     pad,
                     /* Lit_precision */[0,match[2]])};
        
        var symb=str["charCodeAt"](str_ind);
        
        var exit;
        
        if(symb>=48)
         {if(symb>=58){exit=19;}else{return parse_literal$1(minus,str_ind)}}
        else
         {if(symb>=42)
           {switch(-42+symb)
             {case 0:
               return parse_after_precision
                       (pct_ind,
                        str_ind+1,
                        end_ind,
                        minus,
                        plus,
                        sharp,
                        space,
                        ign,
                        pad,
                        /* Arg_precision */1);
              case 1:exit=21;break;
              case 2:exit=19;break;
              case 3:exit=21;break;
              case 4:exit=19;break;
              case 5:exit=19;break
              }
            }
          else
           {exit=19;}
          }
        
        switch(exit)
         {case 21:
           if(legacy_behavior$1)
            {return parse_literal$1(minus||symb===45,str_ind+1)}
           else
            {exit=19;}
           break;
          case 19:
           return legacy_behavior$1
                   ?parse_after_precision
                     (pct_ind,
                      str_ind,
                      end_ind,
                      minus,
                      plus,
                      sharp,
                      space,
                      ign,
                      pad,
                      [/* Lit_precision */0,0])
                   :invalid_format_without(str_ind-1,46,"precision")
          }
        };
    
    var
     parse_after_precision=
      function(pct_ind,str_ind,end_ind,minus,plus,sharp,space,ign,pad,prec)
       {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
        
        var
         parse_conv=
          function(padprec)
           {return parse_conversion
                    (pct_ind,
                     str_ind+1,
                     end_ind,
                     plus,
                     sharp,
                     space,
                     ign,
                     pad,
                     prec,
                     padprec,
                     str["charCodeAt"](str_ind))};
        
        if(typeof pad==="number")
         {var exit;
          
          if(typeof prec==="number")
           {if(prec!==0){exit=24;}else{return parse_conv(/* No_padding */0)}}
          else
           {exit=24;}
          
          switch(exit)
           {case 24:
             return minus!==0
                     ?typeof prec==="number"
                       ?parse_conv([/* Arg_padding */1,/* Left */0])
                       :parse_conv(/* Lit_padding */[0,/* Left */0,prec[1]])
                     :typeof prec==="number"
                       ?parse_conv([/* Arg_padding */1,/* Right */1])
                       :parse_conv(/* Lit_padding */[0,/* Right */1,prec[1]])
            }
          }
        else
         {return parse_conv(pad)}
        };
    
    var
     parse_conversion=
      function
       (pct_ind,str_ind,end_ind,plus,sharp,space,ign,pad,prec,padprec,symb)
       {var plus_used=[0,/* false */0];
        
        var sharp_used=[0,/* false */0];
        
        var space_used=[0,/* false */0];
        
        var ign_used=[0,/* false */0];
        
        var pad_used=[0,/* false */0];
        
        var prec_used=[0,/* false */0];
        
        var get_plus=function(param){plus_used[1]=/* true */1;return plus};
        
        var get_sharp=function(param){sharp_used[1]=/* true */1;return sharp};
        
        var get_space=function(param){space_used[1]=/* true */1;return space};
        
        var get_ign=function(param){ign_used[1]=/* true */1;return ign};
        
        var get_pad=function(param){pad_used[1]=/* true */1;return pad};
        
        var get_prec=function(param){prec_used[1]=/* true */1;return prec};
        
        var
         get_padprec=
          function(param){pad_used[1]=/* true */1;return padprec};
        
        var
         check_no_0=
          function(symb,pad)
           {if(typeof pad==="number")
             {switch(pad){case 0:return pad}}
            else
             {switch(pad[0])
               {case 0:
                 return pad[1]>=2
                         ?legacy_behavior$1
                           ?/* Lit_padding */[0,/* Right */1,pad[2]]
                           :incompatible_flag(pct_ind,str_ind,symb,"0")
                         :pad;
                case 1:
                 return pad[1]>=2
                         ?legacy_behavior$1
                           ?[/* Arg_padding */1,/* Right */1]
                           :incompatible_flag(pct_ind,str_ind,symb,"0")
                         :pad
                }}
            };
        
        var
         opt_of_pad=
          function(c,pad)
           {if(typeof pad==="number")
             {switch(pad){case 0:return /* None */0}}
            else
             {switch(pad[0])
               {case 0:
                 switch(pad[1])
                  {case 0:
                    return legacy_behavior$1
                            ?/* Some */[0,pad[2]]
                            :incompatible_flag(pct_ind,str_ind,c,"'-'");
                   case 1:return /* Some */[0,pad[2]];
                   case 2:
                    return legacy_behavior$1
                            ?/* Some */[0,pad[2]]
                            :incompatible_flag(pct_ind,str_ind,c,"'0'")
                   }
                 break;
                case 1:return incompatible_flag(pct_ind,str_ind,c,"'*'")
                }}
            };
        
        var get_pad_opt=function(c){return opt_of_pad(c,get_pad(/* () */0))};
        
        var
         get_padprec_opt=
          function(c){return opt_of_pad(c,get_padprec(/* () */0))};
        
        var
         get_prec_opt=
          function(param)
           {var match=get_prec(/* () */0);
            
            return typeof match==="number"
                    ?match!==0
                      ?incompatible_flag(pct_ind,str_ind,95,"'*'")
                      :/* None */0
                    :/* Some */[0,match[1]]};
        
        var exit;
        
        var fmt_result;
        if(symb>=124)
         {exit=63;}
        else
         {switch(symb)
           {case 0:exit=63;break;
            case 1:exit=63;break;
            case 2:exit=63;break;
            case 3:exit=63;break;
            case 4:exit=63;break;
            case 5:exit=63;break;
            case 6:exit=63;break;
            case 7:exit=63;break;
            case 8:exit=63;break;
            case 9:exit=63;break;
            case 10:exit=63;break;
            case 11:exit=63;break;
            case 12:exit=63;break;
            case 13:exit=63;break;
            case 14:exit=63;break;
            case 15:exit=63;break;
            case 16:exit=63;break;
            case 17:exit=63;break;
            case 18:exit=63;break;
            case 19:exit=63;break;
            case 20:exit=63;break;
            case 21:exit=63;break;
            case 22:exit=63;break;
            case 23:exit=63;break;
            case 24:exit=63;break;
            case 25:exit=63;break;
            case 26:exit=63;break;
            case 27:exit=63;break;
            case 28:exit=63;break;
            case 29:exit=63;break;
            case 30:exit=63;break;
            case 31:exit=63;break;
            case 32:exit=69;break;
            case 33:
             var match=parse(str_ind,end_ind);
             
             fmt_result=/* Fmt_EBB */[0,/* Flush */[10,match[1]]];
             break;
            case 34:exit=63;break;
            case 35:exit=69;break;
            case 36:exit=63;break;
            case 37:exit=68;break;
            case 38:exit=63;break;
            case 39:exit=63;break;
            case 40:
             var sub_end=search_subformat_end(str_ind,end_ind,41);
             
             var match$1=parse(sub_end+2,end_ind);
             
             var fmt_rest=match$1[1];
             
             var match$2=parse(str_ind,sub_end);
             
             var sub_fmtty=fmtty_of_fmt(match$2[1]);
             
             if(get_ign(/* () */0))
              {var
                ignored=
                 /* Ignored_format_subst */[8,get_pad_opt(95),sub_fmtty];
               
               fmt_result=
               /* Fmt_EBB */[0,/* Ignored_param */[23,ignored,fmt_rest]];
               }
             else
              {fmt_result=
               /* Fmt_EBB */[0,
                /* Format_subst */[14,get_pad_opt(40),sub_fmtty,fmt_rest]];
               }
             break;
            case 41:exit=63;break;
            case 42:exit=63;break;
            case 43:exit=69;break;
            case 44:fmt_result=parse(str_ind,end_ind);break;
            case 45:exit=69;break;
            case 46:exit=63;break;
            case 47:exit=63;break;
            case 48:exit=63;break;
            case 49:exit=63;break;
            case 50:exit=63;break;
            case 51:exit=63;break;
            case 52:exit=63;break;
            case 53:exit=63;break;
            case 54:exit=63;break;
            case 55:exit=63;break;
            case 56:exit=63;break;
            case 57:exit=63;break;
            case 58:exit=63;break;
            case 59:exit=63;break;
            case 60:exit=63;break;
            case 61:exit=63;break;
            case 62:exit=63;break;
            case 63:exit=63;break;
            case 64:exit=68;break;
            case 65:exit=63;break;
            case 66:exit=67;break;
            case 67:
             var match$3=parse(str_ind,end_ind);
             
             var fmt_rest$1=match$3[1];
             
             fmt_result=
             get_ign(/* () */0)
              ?/* Fmt_EBB */[0,
                /* Ignored_param */[23,/* Ignored_caml_char */1,fmt_rest$1]]
              :/* Fmt_EBB */[0,/* Caml_char */[1,fmt_rest$1]];
             break;
            case 68:exit=63;break;
            case 69:exit=66;break;
            case 70:exit=66;break;
            case 71:exit=66;break;
            case 72:exit=63;break;
            case 73:exit=63;break;
            case 74:exit=63;break;
            case 75:exit=63;break;
            case 76:exit=65;break;
            case 77:exit=63;break;
            case 78:
             var match$4=parse(str_ind,end_ind);
             
             var fmt_rest$2=match$4[1];
             
             var counter=/* Token_counter */2;
             
             if(get_ign(/* () */0))
              {var ignored$1=/* Ignored_scan_get_counter */[10,counter];
               
               fmt_result=
               /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$1,fmt_rest$2]];
               }
             else
              {fmt_result=
               /* Fmt_EBB */[0,/* Scan_get_counter */[21,counter,fmt_rest$2]];
               }
             break;
            case 79:exit=63;break;
            case 80:exit=63;break;
            case 81:exit=63;break;
            case 82:exit=63;break;
            case 83:
             var pad$1=check_no_0(symb,get_padprec(/* () */0));
             
             var match$5=parse(str_ind,end_ind);
             
             var fmt_rest$3=match$5[1];
             
             if(get_ign(/* () */0))
              {var ignored$2=/* Ignored_caml_string */[1,get_padprec_opt(95)];
               
               fmt_result=
               /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$2,fmt_rest$3]];
               }
             else
              {var match$6=make_padding_fmt_ebb(pad$1,fmt_rest$3);
               
               fmt_result=
               /* Fmt_EBB */[0,/* Caml_string */[3,match$6[1],match$6[2]]];
               }
             break;
            case 84:exit=63;break;
            case 85:exit=63;break;
            case 86:exit=63;break;
            case 87:exit=63;break;
            case 88:exit=64;break;
            case 89:exit=63;break;
            case 90:exit=63;break;
            case 91:
             var match$7=parse_char_set(str_ind,end_ind);
             
             var char_set=match$7[2];
             
             var match$8=parse(match$7[1],end_ind);
             
             var fmt_rest$4=match$8[1];
             
             if(get_ign(/* () */0))
              {var
                ignored$3=
                 /* Ignored_scan_char_set */[9,get_pad_opt(95),char_set];
               
               fmt_result=
               /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$3,fmt_rest$4]];
               }
             else
              {fmt_result=
               /* Fmt_EBB */[0,
                /* Scan_char_set */[20,get_pad_opt(91),char_set,fmt_rest$4]];
               }
             break;
            case 92:exit=63;break;
            case 93:exit=63;break;
            case 94:exit=63;break;
            case 95:exit=69;break;
            case 96:exit=63;break;
            case 97:
             var match$9=parse(str_ind,end_ind);
             
             fmt_result=/* Fmt_EBB */[0,/* Alpha */[15,match$9[1]]];
             break;
            case 98:exit=67;break;
            case 99:
             var
              char_format=
               function(fmt_rest)
                {return get_ign(/* () */0)
                         ?/* Fmt_EBB */[0,
                           /* Ignored_param */[23,/* Ignored_char */0,fmt_rest]]
                         :/* Fmt_EBB */[0,/* Char */[0,fmt_rest]]};
             
             var
              scan_format=
               function(fmt_rest)
                {return get_ign(/* () */0)
                         ?/* Fmt_EBB */[0,
                           /* Ignored_param */[23,
                            /* Ignored_scan_next_char */4,
                            fmt_rest]]
                         :/* Fmt_EBB */[0,/* Scan_next_char */[22,fmt_rest]]};
             
             var match$10=parse(str_ind,end_ind);
             
             var fmt_rest$5=match$10[1];
             
             var match$11=get_pad_opt(99);
             
             fmt_result=
             match$11
              ?match$11[1]!==0
                ?!legacy_behavior$1
                  ?invalid_nonnull_char_width(str_ind)
                  :char_format(fmt_rest$5)
                :scan_format(fmt_rest$5)
              :char_format(fmt_rest$5);
             break;
            case 100:exit=64;break;
            case 101:exit=66;break;
            case 102:exit=66;break;
            case 103:exit=66;break;
            case 104:exit=63;break;
            case 105:exit=64;break;
            case 106:exit=63;break;
            case 107:exit=63;break;
            case 108:exit=65;break;
            case 109:exit=63;break;
            case 110:exit=65;break;
            case 111:exit=64;break;
            case 112:exit=63;break;
            case 113:exit=63;break;
            case 114:
             var match$12=parse(str_ind,end_ind);
             
             var fmt_rest$6=match$12[1];
             
             fmt_result=
             get_ign(/* () */0)
              ?/* Fmt_EBB */[0,
                /* Ignored_param */[23,/* Ignored_reader */3,fmt_rest$6]]
              :/* Fmt_EBB */[0,/* Reader */[19,fmt_rest$6]];
             break;
            case 115:
             var pad$2=check_no_0(symb,get_padprec(/* () */0));
             
             var match$13=parse(str_ind,end_ind);
             
             var fmt_rest$7=match$13[1];
             
             if(get_ign(/* () */0))
              {var ignored$4=/* Ignored_string */[0,get_padprec_opt(95)];
               
               fmt_result=
               /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$4,fmt_rest$7]];
               }
             else
              {var match$14=make_padding_fmt_ebb(pad$2,fmt_rest$7);
               
               fmt_result=
               /* Fmt_EBB */[0,/* String */[2,match$14[1],match$14[2]]];
               }
             break;
            case 116:
             var match$15=parse(str_ind,end_ind);
             
             fmt_result=/* Fmt_EBB */[0,/* Theta */[16,match$15[1]]];
             break;
            case 117:exit=64;break;
            case 118:exit=63;break;
            case 119:exit=63;break;
            case 120:exit=64;break;
            case 121:exit=63;break;
            case 122:exit=63;break;
            case 123:
             var sub_end$1=search_subformat_end(str_ind,end_ind,125);
             
             var match$16=parse(str_ind,sub_end$1);
             
             var match$17=parse(sub_end$1+2,end_ind);
             
             var fmt_rest$8=match$17[1];
             
             var sub_fmtty$1=fmtty_of_fmt(match$16[1]);
             
             if(get_ign(/* () */0))
              {var
                ignored$5=
                 /* Ignored_format_arg */[7,get_pad_opt(95),sub_fmtty$1];
               
               fmt_result=
               /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$5,fmt_rest$8]];
               }
             else
              {fmt_result=
               /* Fmt_EBB */[0,
                /* Format_arg */[13,get_pad_opt(123),sub_fmtty$1,fmt_rest$8]];
               }
             break
            }
          }
        
        switch(exit)
         {case 64:
           var
            iconv=
             compute_int_conv
              (pct_ind,
               str_ind,
               get_plus(/* () */0),
               get_sharp(/* () */0),
               get_space(/* () */0),
               symb);
           
           var match$18=parse(str_ind,end_ind);
           
           var fmt_rest$9=match$18[1];
           
           var fmt_result;
           if(get_ign(/* () */0))
            {var ignored$6=/* Ignored_int */[2,iconv,get_pad_opt(95)];
             
             fmt_result=
             /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$6,fmt_rest$9]];
             }
           else
            {var match$19=get_pad(/* () */0);
             
             var match$20=get_prec(/* () */0);
             
             var exit$1;
             
             var pad$3;
             if(typeof match$20==="number")
              {if(match$20!==0){exit$1=36;}else{pad$3=match$19;}}
             else
              {exit$1=36;}
             
             switch(exit$1)
              {case 36:
                if(typeof match$19==="number")
                 {switch(match$19){case 0:var pad$3=/* No_padding */0;break}}
                else
                 {switch(match$19[0])
                   {case 0:
                     var
                      pad$3=
                       match$19[1]>=2
                        ?legacy_behavior$1
                          ?/* Lit_padding */[0,/* Right */1,match$19[2]]
                          :incompatible_flag(pct_ind,str_ind,48,"precision")
                        :match$19;
                     break;
                    case 1:
                     var
                      pad$3=
                       match$19[1]>=2
                        ?legacy_behavior$1
                          ?[/* Arg_padding */1,/* Right */1]
                          :incompatible_flag(pct_ind,str_ind,48,"precision")
                        :match$19;
                     break
                    }}
                break
               }
             
             var
              match$21=
               make_padprec_fmt_ebb(pad$3,get_prec(/* () */0),fmt_rest$9);
             
             fmt_result=
             /* Fmt_EBB */[0,
              /* Int */[4,iconv,match$21[1],match$21[2],match$21[3]]];
             }
           break;
          case 65:
           var fmt_result;
           if(str_ind===end_ind||!is_int_base(str["charCodeAt"](str_ind)))
            {var match$22=parse(str_ind,end_ind);
             
             var fmt_rest$10=match$22[1];
             
             var counter$1=counter_of_char(symb);
             
             if(get_ign(/* () */0))
              {var ignored$7=/* Ignored_scan_get_counter */[10,counter$1];
               
               fmt_result=
               /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$7,fmt_rest$10]];
               }
             else
              {fmt_result=
               /* Fmt_EBB */[0,
                /* Scan_get_counter */[21,counter$1,fmt_rest$10]];
               }
             }
           else
            {exit=63;}
           break;
          case 66:
           var
            fconv=
             compute_float_conv
              (pct_ind,str_ind,get_plus(/* () */0),get_space(/* () */0),symb);
           
           var match$23=parse(str_ind,end_ind);
           
           var fmt_rest$11=match$23[1];
           
           var fmt_result;
           if(get_ign(/* () */0))
            {var
              ignored$8=
               /* Ignored_float */[6,get_pad_opt(95),get_prec_opt(/* () */0)];
             
             fmt_result=
             /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$8,fmt_rest$11]];
             }
           else
            {var
              match$24=
               make_padprec_fmt_ebb
                (get_pad(/* () */0),get_prec(/* () */0),fmt_rest$11);
             
             fmt_result=
             /* Fmt_EBB */[0,
              /* Float */[8,fconv,match$24[1],match$24[2],match$24[3]]];
             }
           break;
          case 67:
           var match$25=parse(str_ind,end_ind);
           
           var fmt_rest$12=match$25[1];
           
           var
            fmt_result=
             get_ign(/* () */0)
              ?/* Fmt_EBB */[0,
                /* Ignored_param */[23,/* Ignored_bool */2,fmt_rest$12]]
              :/* Fmt_EBB */[0,/* Bool */[9,fmt_rest$12]];
           break;
          case 68:
           var match$26=parse(str_ind,end_ind);
           
           var
            fmt_result=
             /* Fmt_EBB */[0,/* Char_literal */[12,symb,match$26[1]]];
           break;
          case 69:
           var
            fmt_result=
             failwith_message
              ([/* Format */0,
                [/* String_literal */11,
                 "invalid format ",
                 [/* Caml_string */3,
                  /* No_padding */0,
                  [/* String_literal */11,
                   ": at character number ",
                   [/* Int */4,
                    /* Int_d */0,
                    /* No_padding */0,
                    /* No_precision */0,
                    [/* String_literal */11,
                     ", flag ",
                     [/* Caml_char */1,
                      [/* String_literal */11,
                       " is only allowed after the '",
                       [/* Char_literal */12,
                        37,
                        [/* String_literal */11,
                         "', before padding and precision",
                         /* End_of_format */0]]]]]]]]],
                "invalid format %S: at character number %d, flag %C is only allowed after the '%%', before padding and precision"],
               str,
               pct_ind,
               symb);
           break;
          case 63:
           var fmt_result;
           if(symb>=108)
            {if(symb>=111)
              {exit=62;}
             else
              {switch(-108+symb)
                {case 0:
                  var
                   iconv$1=
                    compute_int_conv
                     (pct_ind,
                      str_ind+1,
                      get_plus(/* () */0),
                      get_sharp(/* () */0),
                      get_space(/* () */0),
                      str["charCodeAt"](str_ind));
                  
                  var match$27=parse(str_ind+1,end_ind);
                  
                  var fmt_rest$13=match$27[1];
                  
                  if(get_ign(/* () */0))
                   {var
                     ignored$9=
                      /* Ignored_int32 */[3,iconv$1,get_pad_opt(95)];
                    
                    fmt_result=
                    /* Fmt_EBB */[0,
                     /* Ignored_param */[23,ignored$9,fmt_rest$13]];
                    }
                  else
                   {var
                     match$28=
                      make_padprec_fmt_ebb
                       (get_pad(/* () */0),get_prec(/* () */0),fmt_rest$13);
                    
                    fmt_result=
                    /* Fmt_EBB */[0,
                     /* Int32 */[5,iconv$1,match$28[1],match$28[2],match$28[3]]];
                    }
                  break;
                 case 1:exit=62;break;
                 case 2:
                  var
                   iconv$2=
                    compute_int_conv
                     (pct_ind,
                      str_ind+1,
                      get_plus(/* () */0),
                      get_sharp(/* () */0),
                      get_space(/* () */0),
                      str["charCodeAt"](str_ind));
                  
                  var match$29=parse(str_ind+1,end_ind);
                  
                  var fmt_rest$14=match$29[1];
                  
                  if(get_ign(/* () */0))
                   {var
                     ignored$10=
                      /* Ignored_nativeint */[4,iconv$2,get_pad_opt(95)];
                    
                    fmt_result=
                    /* Fmt_EBB */[0,
                     /* Ignored_param */[23,ignored$10,fmt_rest$14]];
                    }
                  else
                   {var
                     match$30=
                      make_padprec_fmt_ebb
                       (get_pad(/* () */0),get_prec(/* () */0),fmt_rest$14);
                    
                    fmt_result=
                    /* Fmt_EBB */[0,
                     /* Nativeint */[6,
                      iconv$2,
                      match$30[1],
                      match$30[2],
                      match$30[3]]];
                    }
                  break
                 }
               }
             }
           else
            {if(symb!==76)
              {exit=62;}
             else
              {var
                iconv$3=
                 compute_int_conv
                  (pct_ind,
                   str_ind+1,
                   get_plus(/* () */0),
                   get_sharp(/* () */0),
                   get_space(/* () */0),
                   str["charCodeAt"](str_ind));
               
               var match$31=parse(str_ind+1,end_ind);
               
               var fmt_rest$15=match$31[1];
               
               if(get_ign(/* () */0))
                {var
                  ignored$11=
                   /* Ignored_int64 */[5,iconv$3,get_pad_opt(95)];
                 
                 fmt_result=
                 /* Fmt_EBB */[0,
                  /* Ignored_param */[23,ignored$11,fmt_rest$15]];
                 }
               else
                {var
                  match$32=
                   make_padprec_fmt_ebb
                    (get_pad(/* () */0),get_prec(/* () */0),fmt_rest$15);
                 
                 fmt_result=
                 /* Fmt_EBB */[0,
                  /* Int64 */[7,iconv$3,match$32[1],match$32[2],match$32[3]]];
                 }
               }
             }
           break;
          case 62:
           var
            fmt_result=
             failwith_message
              ([/* Format */0,
                [/* String_literal */11,
                 "invalid format ",
                 [/* Caml_string */3,
                  /* No_padding */0,
                  [/* String_literal */11,
                   ": at character number ",
                   [/* Int */4,
                    /* Int_d */0,
                    /* No_padding */0,
                    /* No_precision */0,
                    [/* String_literal */11,
                     ', invalid conversion "',
                     [/* Char_literal */12,
                      37,
                      [/* Char */0,[/* Char_literal */12,34,/* End_of_format */0]]]]]]]],
                'invalid format %S: at character number %d, invalid conversion "%%%c"'],
               str,
               str_ind-1,
               symb);
           break
          }
        
        if(!legacy_behavior$1)
         {if(!plus_used[1]&&plus)
           {incompatible_flag(pct_ind,str_ind,symb,"'+'")}
          
          if(!sharp_used[1]&&sharp)
           {incompatible_flag(pct_ind,str_ind,symb,"'#'")}
          
          if(!space_used[1]&&space)
           {incompatible_flag(pct_ind,str_ind,symb,"' '")}
          
          if
           (!pad_used[1]&&
            CamlPrimitive["caml_notequal"]
             (/* Padding_EBB */[0,pad],[/* Padding_EBB */0,/* No_padding */0]))
           {incompatible_flag(pct_ind,str_ind,symb,"`padding'")}
          
          if
           (!prec_used[1]&&
            CamlPrimitive["caml_notequal"]
             (/* Precision_EBB */[0,prec],
              [/* Precision_EBB */0,/* No_precision */0]))
           {incompatible_flag(pct_ind,str_ind,ign?95:symb,"`precision'")}
          
          if(ign&&plus){incompatible_flag(pct_ind,str_ind,95,"'+'")}
          }
        else
         {}
        
        if(!ign_used[1]&&ign)
         {var exit$2;
          
          if(symb>=38)
           {if(symb!==44)
             {if(symb!==64){exit$2=27;}else{exit$2=28;}}
            else
             {exit$2=28;}
            }
          else
           {if(symb!==33)
             {if(symb>=37){exit$2=28;}else{exit$2=27;}}
            else
             {exit$2=28;}
            }
          
          switch(exit$2)
           {case 28:if(legacy_behavior$1){}else{exit$2=27;}break;
            case 27:incompatible_flag(pct_ind,str_ind,symb,"'_'");break
            }
          }
        else
         {}
        
        return fmt_result};
    
    var
     parse_after_at=
      function(str_ind,end_ind)
       {if(str_ind===end_ind)
         {return [/* Fmt_EBB */0,
                  [/* Char_literal */12,64,/* End_of_format */0]]}
        else
         {var c=str["charCodeAt"](str_ind);
          
          var exit;
          
          if(c>=65)
           {if(c>=94)
             {var switcher=-123+c;
              
              if(2<switcher>>>0)
               {exit=91;}
              else
               {switch(switcher)
                 {case 0:return parse_tag(/* true */1,str_ind+1,end_ind);
                  case 1:exit=91;break;
                  case 2:
                   var match=parse(str_ind+1,end_ind);
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,/* Close_tag */1,match[1]]]
                  }
                }
              }
            else
             {if(c>=91)
               {switch(-91+c)
                 {case 0:return parse_tag(/* false */0,str_ind+1,end_ind);
                  case 1:exit=91;break;
                  case 2:
                   var match$1=parse(str_ind+1,end_ind);
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,/* Close_box */0,match$1[1]]]
                  }
                }
              else
               {exit=91;}
              }
            }
          else
           {if(c!==10)
             {if(c>=32)
               {switch(-32+c)
                 {case 0:
                   var match$2=parse(str_ind+1,end_ind);
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,[/* Break */0,"@ ",1,0],match$2[1]]];
                  case 1:exit=91;break;
                  case 2:exit=91;break;
                  case 3:exit=91;break;
                  case 4:exit=91;break;
                  case 5:
                   if(str_ind+1<end_ind&&str["charCodeAt"](str_ind+1)===37)
                    {var match$3=parse(str_ind+2,end_ind);
                     
                     return /* Fmt_EBB */[0,
                             /* Formatting_lit */[17,/* Escaped_percent */6,match$3[1]]]}
                   else
                    {var match$4=parse(str_ind,end_ind);
                     
                     return /* Fmt_EBB */[0,/* Char_literal */[12,64,match$4[1]]]}
                   break;
                  case 6:exit=91;break;
                  case 7:exit=91;break;
                  case 8:exit=91;break;
                  case 9:exit=91;break;
                  case 10:exit=91;break;
                  case 11:exit=91;break;
                  case 12:
                   var match$5=parse(str_ind+1,end_ind);
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,[/* Break */0,"@,",0,0],match$5[1]]];
                  case 13:exit=91;break;
                  case 14:
                   var match$6=parse(str_ind+1,end_ind);
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,/* Flush_newline */4,match$6[1]]];
                  case 15:exit=91;break;
                  case 16:exit=91;break;
                  case 17:exit=91;break;
                  case 18:exit=91;break;
                  case 19:exit=91;break;
                  case 20:exit=91;break;
                  case 21:exit=91;break;
                  case 22:exit=91;break;
                  case 23:exit=91;break;
                  case 24:exit=91;break;
                  case 25:exit=91;break;
                  case 26:exit=91;break;
                  case 27:return parse_good_break(str_ind+1,end_ind);
                  case 28:return parse_magic_size(str_ind+1,end_ind);
                  case 29:exit=91;break;
                  case 30:exit=91;break;
                  case 31:
                   var match$7=parse(str_ind+1,end_ind);
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,/* FFlush */2,match$7[1]]];
                  case 32:
                   var match$8=parse(str_ind+1,end_ind);
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,/* Escaped_at */5,match$8[1]]]
                  }
                }
              else
               {exit=91;}
              }
            else
             {var match$9=parse(str_ind+1,end_ind);
              
              return /* Fmt_EBB */[0,
                      /* Formatting_lit */[17,/* Force_newline */3,match$9[1]]]}
            }
          
          switch(exit)
           {case 91:
             var match$10=parse(str_ind+1,end_ind);
             
             return /* Fmt_EBB */[0,
                     /* Formatting_lit */[17,/* Scan_indic */[2,c],match$10[1]]]
            }
          }
        };
    
    var
     check_open_box=
      function(fmt)
       {var exit;
        
        if(typeof fmt==="number")
         {switch(fmt){}}
        else
         {switch(fmt[0])
           {case 11:
             if(typeof fmt[2]==="number")
              {try
                {return open_box_of_string(fmt[1])}
               catch(exn)
                {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
                  {return /* () */0}
                 else
                  {throw exn}
                 }
               }
             else
              {exit=93;}
             break;
            default:exit=93;}}
        
        switch(exit){case 93:return /* () */0}
        };
    
    var
     parse_tag=
      function(is_open_tag,str_ind,end_ind)
       {try
         {if(str_ind===end_ind)
           {throw CamlPrimitive["caml_global_data"]["Not_found"]}
          else
           {}
          
          var match=str["charCodeAt"](str_ind);
          
          if(match!==60)
           {throw CamlPrimitive["caml_global_data"]["Not_found"]}
          else
           {var ind=$$String["index_from"](str,str_ind+1,62);
            
            if(ind>=end_ind)
             {throw CamlPrimitive["caml_global_data"]["Not_found"]}
            else
             {}
            
            var sub_str=$$String["sub"](str,str_ind,ind-str_ind+1);
            
            var match$1=parse(ind+1,end_ind);
            
            var match$2=parse(str_ind,ind+1);
            
            var sub_fmt=match$2[1];
            
            var sub_format=/* Format */[0,sub_fmt,sub_str];
            
            var
             formatting=
              is_open_tag
               ?/* Open_tag */[0,sub_format]
               :(check_open_box(sub_fmt),/* Open_box */[1,sub_format]);
            
            return /* Fmt_EBB */[0,
                    /* Formatting_gen */[18,formatting,match$1[1]]]}
          }
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {var match$3=parse(str_ind,end_ind);
            
            var sub_format$1=[/* Format */0,/* End_of_format */0,""];
            
            var
             formatting$1=
              is_open_tag
               ?/* Open_tag */[0,sub_format$1]
               :/* Open_box */[1,sub_format$1];
            
            return /* Fmt_EBB */[0,
                    /* Formatting_gen */[18,formatting$1,match$3[1]]]}
          else
           {throw exn}
          }
        };
    
    var
     parse_good_break=
      function(str_ind,end_ind)
       {var match;
        try
         {if(str_ind===end_ind||str["charCodeAt"](str_ind)!==60)
           {throw CamlPrimitive["caml_global_data"]["Not_found"]}
          else
           {}
          
          var str_ind_1=parse_spaces(str_ind+1,end_ind);
          
          var match$1=str["charCodeAt"](str_ind_1);
          
          var exit;
          
          if(match$1>=48)
           {if(match$1>=58){exit=114;}else{exit=113;}}
          else
           {if(match$1!==45){exit=114;}else{exit=113;}}
          
          switch(exit)
           {case 114:throw CamlPrimitive["caml_global_data"]["Not_found"];
            case 113:
             var match$2=parse_integer(str_ind_1,end_ind);
             
             var width=match$2[2];
             
             var str_ind_3=parse_spaces(match$2[1],end_ind);
             
             var match$3=str["charCodeAt"](str_ind_3);
             
             var exit$1;
             
             var switcher=-45+match$3;
             
             if(!(12<switcher>>>0))
              {if(1<-1+switcher>>>0)
                {var match$4=parse_integer(str_ind_3,end_ind);
                 
                 var str_ind_5=parse_spaces(match$4[1],end_ind);
                 
                 if(str["charCodeAt"](str_ind_5)!==62)
                  {throw CamlPrimitive["caml_global_data"]["Not_found"]}
                 else
                  {}
                 
                 var s=$$String["sub"](str,str_ind-2,str_ind_5-str_ind+3);
                 
                 match=
                 /* tuple */[0,str_ind_5+1,/* Break */[0,s,width,match$4[2]]];
                 }
               else
                {exit$1=110;}
               }
             else
              {if(switcher!==17)
                {exit$1=110;}
               else
                {var s$1=$$String["sub"](str,str_ind-2,str_ind_3-str_ind+3);
                 
                 match=/* tuple */[0,str_ind_3+1,/* Break */[0,s$1,width,0]];
                 }
               }
             
             switch(exit$1)
              {case 110:throw CamlPrimitive["caml_global_data"]["Not_found"]}
             break
            }
          }
        catch(exn)
         {var exit$2;
          
          if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {exit$2=103;}
          else
           {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
             {exit$2=103;}
            else
             {throw exn}
            }
          
          switch(exit$2)
           {case 103:
             match=/* tuple */[0,str_ind,[/* Break */0,"@;",1,0]];break
            }
          }
        
        var match$5=parse(match[1],end_ind);
        
        return /* Fmt_EBB */[0,/* Formatting_lit */[17,match[2],match$5[1]]]};
    
    var
     parse_magic_size=
      function(str_ind,end_ind)
       {var match;
        try
         {var str_ind_1=parse_spaces(str_ind,end_ind);
          
          var match$1=str["charCodeAt"](str_ind_1);
          
          var exit;
          
          if(match$1>=48)
           {if(match$1>=58){exit=124;}else{exit=123;}}
          else
           {if(match$1!==45){exit=124;}else{exit=123;}}
          
          switch(exit)
           {case 124:match=/* None */0;break;
            case 123:
             var match$2=parse_integer(str_ind_1,end_ind);
             
             var str_ind_3=parse_spaces(match$2[1],end_ind);
             
             if(str["charCodeAt"](str_ind_3)!==62)
              {throw CamlPrimitive["caml_global_data"]["Not_found"]}
             else
              {}
             
             var s=$$String["sub"](str,str_ind-2,str_ind_3-str_ind+3);
             
             match=
             /* Some */[0,
              /* tuple */[0,str_ind_3+1,/* Magic_size */[1,s,match$2[2]]]];
             break
            }
          }
        catch(exn)
         {var exit$1;
          
          if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {exit$1=118;}
          else
           {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
             {exit$1=118;}
            else
             {throw exn}
            }
          
          switch(exit$1){case 118:match=/* None */0;break}
          }
        
        if(match)
         {var match$3=match[1];
          
          var match$4=parse(match$3[1],end_ind);
          
          return /* Fmt_EBB */[0,
                  /* Formatting_lit */[17,match$3[2],match$4[1]]]}
        else
         {var match$5=parse(str_ind,end_ind);
          
          return /* Fmt_EBB */[0,
                  /* Formatting_lit */[17,[/* Scan_indic */2,60],match$5[1]]]}
        };
    
    var
     parse_char_set=
      function(str_ind,end_ind)
       {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
        
        var char_set=create_char_set(/* () */0);
        
        var add_char=function(c){return add_in_char_set(char_set,c)};
        
        var
         add_range=
          function(c,c$prime)
           {for(var i=c;i<=c$prime;i++)
             {add_in_char_set(char_set,Pervasives["char_of_int"](i))}
            return 0;
            };
        
        var
         fail_single_percent=
          function(str_ind)
           {return failwith_message
                    ([/* Format */0,
                      [/* String_literal */11,
                       "invalid format ",
                       [/* Caml_string */3,
                        /* No_padding */0,
                        [/* String_literal */11,
                         ": '",
                         [/* Char_literal */12,
                          37,
                          [/* String_literal */11,
                           "' alone is not accepted in character sets, use ",
                           [/* Char_literal */12,
                            37,
                            [/* Char_literal */12,
                             37,
                             [/* String_literal */11,
                              " instead at position ",
                              [/* Int */4,
                               /* Int_d */0,
                               /* No_padding */0,
                               /* No_precision */0,
                               [/* Char_literal */12,46,/* End_of_format */0]]]]]]]]]],
                      "invalid format %S: '%%' alone is not accepted in character sets, use %%%% instead at position %d."],
                     str,
                     str_ind)};
        
        var
         parse_char_set_start=
          function(str_ind,end_ind)
           {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
            
            var c=str["charCodeAt"](str_ind);
            
            return parse_char_set_after_char(str_ind+1,end_ind,c)};
        
        var
         parse_char_set_content=
          function(str_ind,end_ind)
           {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
            
            var c=str["charCodeAt"](str_ind);
            
            return c!==45
                    ?c!==93
                      ?parse_char_set_after_char(str_ind+1,end_ind,c)
                      :str_ind+1
                    :(add_char(45),parse_char_set_content(str_ind+1,end_ind))};
        
        var
         parse_char_set_after_char=
          function(str_ind,end_ind,c)
           {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
            
            var c$prime=str["charCodeAt"](str_ind);
            
            var exit;
            
            if(c$prime>=46)
             {if(c$prime!==64)
               {if(c$prime!==93){exit=132;}else{add_char(c);return str_ind+1}}
              else
               {exit=133;}
              }
            else
             {if(c$prime!==37)
               {if(c$prime>=45)
                 {return parse_char_set_after_minus(str_ind+1,end_ind,c)}
                else
                 {exit=132;}
                }
              else
               {exit=133;}
              }
            
            switch(exit)
             {case 133:
               if(c===37)
                {add_char(c$prime);
                 return parse_char_set_content(str_ind+1,end_ind)}
               else
                {exit=132;}
               break;
              case 132:
               if(c===37){fail_single_percent(str_ind)}
               
               add_char(c);
               return parse_char_set_after_char(str_ind+1,end_ind,c$prime)
              }
            };
        
        var
         parse_char_set_after_minus=
          function(str_ind,end_ind,c)
           {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
            
            var c$prime=str["charCodeAt"](str_ind);
            
            if(c$prime!==37)
             {return c$prime!==93
                      ?(add_range(c,c$prime),
                        parse_char_set_content(str_ind+1,end_ind))
                      :(add_char(c),add_char(45),str_ind+1)}
            else
             {if(str_ind+1===end_ind){unexpected_end_of_format(end_ind)}
              
              var c$prime$1=str["charCodeAt"](str_ind+1);
              
              var exit;
              
              if(c$prime$1!==37)
               {if(c$prime$1!==64)
                 {return fail_single_percent(str_ind)}
                else
                 {exit=134;}
                }
              else
               {exit=134;}
              
              switch(exit)
               {case 134:
                 add_range(c,c$prime$1);
                 return parse_char_set_content(str_ind+2,end_ind)
                }
              }
            };
        
        if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
        
        var match=str["charCodeAt"](str_ind);
        
        var
         match$1=
          match!==94
           ?/* tuple */[0,str_ind,/* false */0]
           :/* tuple */[0,str_ind+1,/* true */1];
        
        var next_ind=parse_char_set_start(match$1[1],end_ind);
        
        var char_set$1=freeze_char_set(char_set);
        
        return /* tuple */[0,
                next_ind,
                match$1[2]?rev_char_set(char_set$1):char_set$1]};
    
    var
     parse_spaces=
      function(str_ind,end_ind)
       {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
        
        return str["charCodeAt"](str_ind)===32
                ?parse_spaces(str_ind+1,end_ind)
                :str_ind};
    
    var
     parse_positive=
      function(str_ind,end_ind,acc)
       {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
        
        var c=str["charCodeAt"](str_ind);
        
        if(9<-48+c>>>0)
         {return /* tuple */[0,str_ind,acc]}
        else
         {var new_acc=acc*10+(c-48);
          
          return new_acc>Sys["max_string_length"]
                  ?failwith_message
                    ([/* Format */0,
                      [/* String_literal */11,
                       "invalid format ",
                       [/* Caml_string */3,
                        /* No_padding */0,
                        [/* String_literal */11,
                         ": integer ",
                         [/* Int */4,
                          /* Int_d */0,
                          /* No_padding */0,
                          /* No_precision */0,
                          [/* String_literal */11,
                           " is greater than the limit ",
                           [/* Int */4,
                            /* Int_d */0,
                            /* No_padding */0,
                            /* No_precision */0,
                            /* End_of_format */0]]]]]],
                      "invalid format %S: integer %d is greater than the limit %d"],
                     str,
                     new_acc,
                     Sys["max_string_length"])
                  :parse_positive(str_ind+1,end_ind,new_acc)}
        };
    
    var
     parse_integer=
      function(str_ind,end_ind)
       {if(str_ind===end_ind){unexpected_end_of_format(end_ind)}
        
        var match=str["charCodeAt"](str_ind);
        
        var exit;
        
        if(match>=48)
         {if(match>=58)
           {exit=148;}
          else
           {return parse_positive(str_ind,end_ind,0)}
          }
        else
         {if(match!==45)
           {exit=148;}
          else
           {if(str_ind+1===end_ind){unexpected_end_of_format(end_ind)}
            
            var c=str["charCodeAt"](str_ind+1);
            
            if(9<-48+c>>>0)
             {return expected_character(str_ind+1,"digit",c)}
            else
             {var match$1=parse_positive(str_ind+1,end_ind,0);
              
              return /* tuple */[0,match$1[1],-match$1[2]]}
            }
          }
        
        switch(exit)
         {case 148:
           throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"camlinternalFormat.ml",2621,11]]
          }
        };
    
    var
     add_literal=
      function(lit_start,str_ind,fmt)
       {var size=str_ind-lit_start;
        
        return size!==0
                ?size!==1
                  ?/* Fmt_EBB */[0,
                    /* String_literal */[11,
                     $$String["sub"](str,lit_start,size),
                     fmt]]
                  :/* Fmt_EBB */[0,
                    /* Char_literal */[12,str["charCodeAt"](lit_start),fmt]]
                :/* Fmt_EBB */[0,fmt]};
    
    var
     search_subformat_end=
      function(str_ind,end_ind,c)
       {if(str_ind===end_ind)
         {failwith_message
           ([/* Format */0,
             [/* String_literal */11,
              "invalid format ",
              [/* Caml_string */3,
               /* No_padding */0,
               [/* String_literal */11,
                ': unclosed sub-format, expected "',
                [/* Char_literal */12,
                 37,
                 [/* Char */0,
                  [/* String_literal */11,
                   '" at character number ',
                   [/* Int */4,
                    /* Int_d */0,
                    /* No_padding */0,
                    /* No_precision */0,
                    /* End_of_format */0]]]]]]],
             'invalid format %S: unclosed sub-format, expected "%%%c" at character number %d'],
            str,
            c,
            end_ind)}
        
        var match=str["charCodeAt"](str_ind);
        
        if(match!==37)
         {return search_subformat_end(str_ind+1,end_ind,c)}
        else
         {if(str_ind+1===end_ind){unexpected_end_of_format(end_ind)}
          
          if(str["charCodeAt"](str_ind+1)===c)
           {return str_ind}
          else
           {var match$1=str["charCodeAt"](str_ind+1);
            
            var exit;
            
            if(match$1>=95)
             {if(match$1>=123)
               {if(match$1>=126)
                 {exit=155;}
                else
                 {switch(-123+match$1)
                   {case 0:
                     var sub_end=search_subformat_end(str_ind+2,end_ind,125);
                     
                     return search_subformat_end(sub_end+2,end_ind,c);
                    case 1:exit=155;break;
                    case 2:
                     return expected_character(str_ind+1,"character ')'",125)
                    }
                  }
                }
              else
               {if(match$1>=96)
                 {exit=155;}
                else
                 {if(str_ind+2===end_ind){unexpected_end_of_format(end_ind)}
                  
                  var match$2=str["charCodeAt"](str_ind+2);
                  
                  if(match$2!==40)
                   {if(match$2!==123)
                     {return search_subformat_end(str_ind+3,end_ind,c)}
                    else
                     {var sub_end$1=search_subformat_end(str_ind+3,end_ind,125);
                      
                      return search_subformat_end(sub_end$1+2,end_ind,c)}
                    }
                  else
                   {var sub_end$2=search_subformat_end(str_ind+3,end_ind,41);
                    
                    return search_subformat_end(sub_end$2+2,end_ind,c)}
                  }
                }
              }
            else
             {if(match$1!==40)
               {if(match$1!==41)
                 {exit=155;}
                else
                 {return expected_character(str_ind+1,"character '}'",41)}
                }
              else
               {var sub_end$3=search_subformat_end(str_ind+2,end_ind,41);
                
                return search_subformat_end(sub_end$3+2,end_ind,c)}
              }
            
            switch(exit)
             {case 155:return search_subformat_end(str_ind+2,end_ind,c)}
            }
          }
        };
    
    var
     is_int_base=
      function(symb)
       {var exit;
        
        var switcher=-88+symb;
        
        if(32<switcher>>>0)
         {exit=158;}
        else
         {switch(switcher)
           {case 0:exit=157;break;
            case 1:exit=158;break;
            case 2:exit=158;break;
            case 3:exit=158;break;
            case 4:exit=158;break;
            case 5:exit=158;break;
            case 6:exit=158;break;
            case 7:exit=158;break;
            case 8:exit=158;break;
            case 9:exit=158;break;
            case 10:exit=158;break;
            case 11:exit=158;break;
            case 12:exit=157;break;
            case 13:exit=158;break;
            case 14:exit=158;break;
            case 15:exit=158;break;
            case 16:exit=158;break;
            case 17:exit=157;break;
            case 18:exit=158;break;
            case 19:exit=158;break;
            case 20:exit=158;break;
            case 21:exit=158;break;
            case 22:exit=158;break;
            case 23:exit=157;break;
            case 24:exit=158;break;
            case 25:exit=158;break;
            case 26:exit=158;break;
            case 27:exit=158;break;
            case 28:exit=158;break;
            case 29:exit=157;break;
            case 30:exit=158;break;
            case 31:exit=158;break;
            case 32:exit=157;break
            }
          }
        
        switch(exit){case 158:return /* false */0;case 157:return /* true */1}
        };
    
    var
     counter_of_char=
      function(symb)
       {var exit;
        
        if(symb>=108)
         {if(symb>=111)
           {exit=159;}
          else
           {switch(-108+symb)
             {case 0:return /* Line_counter */0;
              case 1:exit=159;break;
              case 2:return /* Char_counter */1
              }
            }
          }
        else
         {if(symb!==76){exit=159;}else{return /* Token_counter */2}}
        
        switch(exit)
         {case 159:
           throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"camlinternalFormat.ml",2683,34]]
          }
        };
    
    var
     compute_int_conv=
      function(pct_ind,str_ind,plus,sharp,space,symb)
       {var exit;
        
        if(plus!==0)
         {if(sharp!==0)
           {exit=161;}
          else
           {if(space!==0)
             {exit=160;}
            else
             {if(symb!==100)
               {if(symb!==105){exit=160;}else{return /* Int_pi */4}}
              else
               {return /* Int_pd */1}
              }
            }
          }
        else
         {if(sharp!==0)
           {if(space!==0)
             {exit=161;}
            else
             {if(symb!==88)
               {if(symb!==111)
                 {if(symb!==120){exit=161;}else{return /* Int_Cx */7}}
                else
                 {return /* Int_Co */11}
                }
              else
               {return /* Int_CX */9}
              }
            }
          else
           {if(space!==0)
             {if(symb!==100)
               {if(symb!==105){exit=160;}else{return /* Int_si */5}}
              else
               {return /* Int_sd */2}
              }
            else
             {var switcher=-88+symb;
              
              if(32<switcher>>>0)
               {exit=160;}
              else
               {switch(switcher)
                 {case 0:return /* Int_X */8;
                  case 1:exit=160;break;
                  case 2:exit=160;break;
                  case 3:exit=160;break;
                  case 4:exit=160;break;
                  case 5:exit=160;break;
                  case 6:exit=160;break;
                  case 7:exit=160;break;
                  case 8:exit=160;break;
                  case 9:exit=160;break;
                  case 10:exit=160;break;
                  case 11:exit=160;break;
                  case 12:return /* Int_d */0;
                  case 13:exit=160;break;
                  case 14:exit=160;break;
                  case 15:exit=160;break;
                  case 16:exit=160;break;
                  case 17:return /* Int_i */3;
                  case 18:exit=160;break;
                  case 19:exit=160;break;
                  case 20:exit=160;break;
                  case 21:exit=160;break;
                  case 22:exit=160;break;
                  case 23:return /* Int_o */10;
                  case 24:exit=160;break;
                  case 25:exit=160;break;
                  case 26:exit=160;break;
                  case 27:exit=160;break;
                  case 28:exit=160;break;
                  case 29:return /* Int_u */12;
                  case 30:exit=160;break;
                  case 31:exit=160;break;
                  case 32:return /* Int_x */6
                  }
                }
              }
            }
          }
        
        switch(exit)
         {case 161:
           var exit$1;
           
           var switcher$1=-88+symb;
           
           if(32<switcher$1>>>0)
            {exit=160;}
           else
            {switch(switcher$1)
              {case 0:
                if(legacy_behavior$1){return /* Int_CX */9}else{exit=160;}
                break;
               case 1:exit=160;break;
               case 2:exit=160;break;
               case 3:exit=160;break;
               case 4:exit=160;break;
               case 5:exit=160;break;
               case 6:exit=160;break;
               case 7:exit=160;break;
               case 8:exit=160;break;
               case 9:exit=160;break;
               case 10:exit=160;break;
               case 11:exit=160;break;
               case 12:exit$1=163;break;
               case 13:exit=160;break;
               case 14:exit=160;break;
               case 15:exit=160;break;
               case 16:exit=160;break;
               case 17:exit$1=163;break;
               case 18:exit=160;break;
               case 19:exit=160;break;
               case 20:exit=160;break;
               case 21:exit=160;break;
               case 22:exit=160;break;
               case 23:
                if(legacy_behavior$1){return /* Int_Co */11}else{exit=160;}
                break;
               case 24:exit=160;break;
               case 25:exit=160;break;
               case 26:exit=160;break;
               case 27:exit=160;break;
               case 28:exit=160;break;
               case 29:exit$1=163;break;
               case 30:exit=160;break;
               case 31:exit=160;break;
               case 32:
                if(legacy_behavior$1){return /* Int_Cx */7}else{exit=160;}
                break
               }
             }
           
           switch(exit$1)
            {case 163:
              return legacy_behavior$1
                      ?compute_int_conv
                        (pct_ind,str_ind,plus,/* false */0,space,symb)
                      :incompatible_flag(pct_ind,str_ind,symb,"'#'")
             }
           break;
          case 160:
           if(plus!==0)
            {return space!==0
                     ?legacy_behavior$1
                       ?compute_int_conv
                         (pct_ind,str_ind,plus,sharp,/* false */0,symb)
                       :incompatible_flag(pct_ind,str_ind,32,"'+'")
                     :legacy_behavior$1
                       ?compute_int_conv
                         (pct_ind,str_ind,/* false */0,sharp,space,symb)
                       :incompatible_flag(pct_ind,str_ind,symb,"'+'")}
           else
            {if(space!==0)
              {return legacy_behavior$1
                       ?compute_int_conv
                         (pct_ind,str_ind,plus,sharp,/* false */0,symb)
                       :incompatible_flag(pct_ind,str_ind,symb,"' '")}
             else
              {throw [0,
                      CamlPrimitive["caml_global_data"]["Assert_failure"],
                      [0,"camlinternalFormat.ml",2716,28]]}
             }
           break
          }
        };
    
    var
     compute_float_conv=
      function(pct_ind,str_ind,plus,space,symb)
       {if(plus!==0)
         {if(space!==0)
           {return legacy_behavior$1
                    ?compute_float_conv(pct_ind,str_ind,plus,/* false */0,symb)
                    :incompatible_flag(pct_ind,str_ind,32,"'+'")}
          else
           {var exit;
            
            if(symb>=72)
             {var switcher=-101+symb;
              
              if(2<switcher>>>0)
               {exit=164;}
              else
               {switch(switcher)
                 {case 0:return /* Float_pe */4;
                  case 1:return /* Float_pf */1;
                  case 2:return /* Float_pg */10
                  }
                }
              }
            else
             {if(symb>=69)
               {switch(-69+symb)
                 {case 0:return /* Float_pE */7;
                  case 1:exit=164;break;
                  case 2:return /* Float_pG */13
                  }
                }
              else
               {exit=164;}
              }
            
            switch(exit)
             {case 164:
               return legacy_behavior$1
                       ?compute_float_conv(pct_ind,str_ind,/* false */0,space,symb)
                       :incompatible_flag(pct_ind,str_ind,symb,"'+'")
              }
            }
          }
        else
         {if(space!==0)
           {var exit$1;
            
            if(symb>=72)
             {var switcher$1=-101+symb;
              
              if(2<switcher$1>>>0)
               {exit$1=165;}
              else
               {switch(switcher$1)
                 {case 0:return /* Float_se */5;
                  case 1:return /* Float_sf */2;
                  case 2:return /* Float_sg */11
                  }
                }
              }
            else
             {if(symb>=69)
               {switch(-69+symb)
                 {case 0:return /* Float_sE */8;
                  case 1:exit$1=165;break;
                  case 2:return /* Float_sG */14
                  }
                }
              else
               {exit$1=165;}
              }
            
            switch(exit$1)
             {case 165:
               return legacy_behavior$1
                       ?compute_float_conv(pct_ind,str_ind,plus,/* false */0,symb)
                       :incompatible_flag(pct_ind,str_ind,symb,"' '")
              }
            }
          else
           {var exit$2;
            
            if(symb>=72)
             {var switcher$2=-101+symb;
              
              if(2<switcher$2>>>0)
               {exit$2=166;}
              else
               {switch(switcher$2)
                 {case 0:return /* Float_e */3;
                  case 1:return /* Float_f */0;
                  case 2:return /* Float_g */9
                  }
                }
              }
            else
             {if(symb>=69)
               {switch(-69+symb)
                 {case 0:return /* Float_E */6;
                  case 1:return /* Float_F */15;
                  case 2:return /* Float_G */12
                  }
                }
              else
               {exit$2=166;}
              }
            
            switch(exit$2)
             {case 166:
               throw [0,
                      CamlPrimitive["caml_global_data"]["Assert_failure"],
                      [0,"camlinternalFormat.ml",2744,25]]
              }
            }
          }
        };
    
    var
     incompatible_flag=
      function(pct_ind,str_ind,symb,option)
       {var subfmt=$$String["sub"](str,pct_ind,str_ind-pct_ind);
        
        return failwith_message
                ([/* Format */0,
                  [/* String_literal */11,
                   "invalid format ",
                   [/* Caml_string */3,
                    /* No_padding */0,
                    [/* String_literal */11,
                     ": at character number ",
                     [/* Int */4,
                      /* Int_d */0,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* String_literal */11,
                       ", ",
                       [/* String */2,
                        /* No_padding */0,
                        [/* String_literal */11,
                         " is incompatible with '",
                         [/* Char */0,
                          [/* String_literal */11,
                           "' in sub-format ",
                           [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]]]]]]]]]],
                  "invalid format %S: at character number %d, %s is incompatible with '%c' in sub-format %S"],
                 str,
                 pct_ind,
                 option,
                 symb,
                 subfmt)};
    
    return parse(0,str["length"])};

var
 format_of_string_fmtty=
  function(str,fmtty)
   {var match=fmt_ebb_of_string(/* None */0,str);
    
    try
     {return /* Format */[0,type_format(match[1],fmtty),str]}
    catch(exn)
     {if(exn===Type_mismatch)
       {return failwith_message
                ([/* Format */0,
                  [/* String_literal */11,
                   "bad input: format type mismatch between ",
                   [/* Caml_string */3,
                    /* No_padding */0,
                    [/* String_literal */11,
                     " and ",
                     [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]]]],
                  "bad input: format type mismatch between %S and %S"],
                 str,
                 string_of_fmtty(fmtty))}
      else
       {throw exn}
      }
    };

var
 format_of_string_format=
  function(str,param)
   {var match=fmt_ebb_of_string(/* None */0,str);
    
    try
     {return /* Format */[0,type_format(match[1],fmtty_of_fmt(param[1])),str]}
    catch(exn)
     {if(exn===Type_mismatch)
       {return failwith_message
                ([/* Format */0,
                  [/* String_literal */11,
                   "bad input: format type mismatch between ",
                   [/* Caml_string */3,
                    /* No_padding */0,
                    [/* String_literal */11,
                     " and ",
                     [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]]]],
                  "bad input: format type mismatch between %S and %S"],
                 str,
                 param[2])}
      else
       {throw exn}
      }
    };

module["exports"]=
{"is_in_char_set":is_in_char_set,
 "rev_char_set":rev_char_set,
 "create_char_set":create_char_set,
 "add_in_char_set":add_in_char_set,
 "freeze_char_set":freeze_char_set,
 "param_format_of_ignored_format":param_format_of_ignored_format,
 "make_printf":make_printf,
 "output_acc":output_acc,
 "bufput_acc":bufput_acc,
 "strput_acc":strput_acc,
 "type_format":type_format,
 "fmt_ebb_of_string":fmt_ebb_of_string,
 "format_of_string_fmtty":format_of_string_fmtty,
 "format_of_string_format":format_of_string_format,
 "char_of_iconv":char_of_iconv,
 "string_of_formatting_lit":string_of_formatting_lit,
 "string_of_formatting_gen":string_of_formatting_gen,
 "string_of_fmtty":string_of_fmtty,
 "string_of_fmt":string_of_fmt,
 "open_box_of_string":open_box_of_string,
 "symm":symm,
 "trans":trans,
 "recast":recast};

