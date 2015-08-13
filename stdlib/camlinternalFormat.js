// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Char=require("Char");
var CamlinternalFormatBasics=require("CamlinternalFormatBasics");
var Pervasives=require("Pervasives");
var CamlPrimtivie=require("CamlPrimtivie");
var Buffer=require("Buffer");
var Bytes=require("Bytes");
var Sys=require("Sys");


var create_char_set=function(param){return Bytes["make"](32,0);};

var
 add_in_char_set=
  function(char_set,c)
   {var ind=c;
    
    var str_ind=ind>>>3;
    
    var mask=1<<(ind&7);
    
    return char_set[str_ind]=
           Pervasives["char_of_int"](char_set[str_ind]|mask),
           0;
    };

var freeze_char_set=function(char_set){return Bytes["to_string"](char_set);};

var
 rev_char_set=
  function(char_set)
   {var char_set$prime=create_char_set(/* () */0);
    
    for(var i=0;i<=31;i++)
     {char_set$prime[i]=Pervasives["char_of_int"](char_set[i]^255),0}
    
    return Bytes["unsafe_to_string"](char_set$prime);
    };

var
 is_in_char_set=
  function(char_set,c)
   {var ind=c;
    
    var str_ind=ind>>>3;
    
    var mask=1<<(ind&7);
    
    return (char_set[str_ind]&mask)!=0;
    };

var
 pad_of_pad_opt=
  function(pad_opt)
   {if(pad_opt)
     {var width=pad_opt[1];return /* Lit_padding */[0,/* Right */1,width];}
    else
     {return /* No_padding */0;}
    };

var
 prec_of_prec_opt=
  function(prec_opt)
   {if(prec_opt)
     {var ndec=prec_opt[1];return /* Lit_precision */[0,ndec];}
    else
     {return /* No_precision */0;}
    };

var
 param_format_of_ignored_format=
  function(ign,fmt)
   {if(typeof ign=="number")
     {switch(ign)
       {case 0:return /* Param_format_EBB */[0,/* Char */[0,fmt]];
        case 1:return /* Param_format_EBB */[0,/* Caml_char */[1,fmt]];
        case 2:return /* Param_format_EBB */[0,/* Bool */[9,fmt]];
        case 3:return /* Param_format_EBB */[0,/* Reader */[19,fmt]];
        case 4:return /* Param_format_EBB */[0,/* Scan_next_char */[22,fmt]];
        }}
    else
     {switch(ign[0])
       {case 0:
         var pad_opt=ign[1];
         
         return /* Param_format_EBB */[0,
                 /* String */[2,pad_of_pad_opt(pad_opt),fmt]];
         
        case 1:
         var pad_opt$1=ign[1];
         
         return /* Param_format_EBB */[0,
                 /* Caml_string */[3,pad_of_pad_opt(pad_opt$1),fmt]];
         
        case 2:
         var pad_opt$2=ign[2];
         
         var iconv=ign[1];
         
         return /* Param_format_EBB */[0,
                 /* Int */[4,
                  iconv,
                  pad_of_pad_opt(pad_opt$2),
                  /* No_precision */0,
                  fmt]];
         
        case 3:
         var pad_opt$3=ign[2];
         
         var iconv$1=ign[1];
         
         return /* Param_format_EBB */[0,
                 /* Int32 */[5,
                  iconv$1,
                  pad_of_pad_opt(pad_opt$3),
                  /* No_precision */0,
                  fmt]];
         
        case 4:
         var pad_opt$4=ign[2];
         
         var iconv$2=ign[1];
         
         return /* Param_format_EBB */[0,
                 /* Nativeint */[6,
                  iconv$2,
                  pad_of_pad_opt(pad_opt$4),
                  /* No_precision */0,
                  fmt]];
         
        case 5:
         var pad_opt$5=ign[2];
         
         var iconv$3=ign[1];
         
         return /* Param_format_EBB */[0,
                 /* Int64 */[7,
                  iconv$3,
                  pad_of_pad_opt(pad_opt$5),
                  /* No_precision */0,
                  fmt]];
         
        case 6:
         var prec_opt=ign[2];
         
         var pad_opt$6=ign[1];
         
         return /* Param_format_EBB */[0,
                 /* Float */[8,
                  /* Float_f */0,
                  pad_of_pad_opt(pad_opt$6),
                  prec_of_prec_opt(prec_opt),
                  fmt]];
         
        case 7:
         var fmtty=ign[2];
         
         var pad_opt$7=ign[1];
         
         return /* Param_format_EBB */[0,
                 /* Format_arg */[13,pad_opt$7,fmtty,fmt]];
         
        case 8:
         var fmtty$1=ign[2];
         
         var pad_opt$8=ign[1];
         
         return /* Param_format_EBB */[0,
                 /* Format_subst */[14,pad_opt$8,fmtty$1,fmt]];
         
        case 9:
         var char_set=ign[2];
         
         var width_opt=ign[1];
         
         return /* Param_format_EBB */[0,
                 /* Scan_char_set */[20,width_opt,char_set,fmt]];
         
        case 10:
         var counter=ign[1];
         
         return /* Param_format_EBB */[0,
                 /* Scan_get_counter */[21,counter,fmt]];
         
        }}
    };

var default_float_precision=6;

var
 buffer_create=
  function(init_size)
   {return /* record */[0,0,CamlPrimtivie["caml_create_string"](init_size)];};

var
 buffer_check_size=
  function(buf,overhead)
   {var len=buf[2]["length"];
    
    var min_len=buf[1]+overhead;
    
    if(min_len>len)
     {var new_len=Pervasives["max"](len*2,min_len);
      
      var new_str=CamlPrimtivie["caml_create_string"](new_len);
      
      Bytes["blit"](buf[2],0,new_str,0,len);
      return buf[2]=new_str,0;
      }
    else
     {return 0;}
    };

var
 buffer_add_char=
  function(buf,c)
   {buffer_check_size(buf,1);buf[2][buf[1]]=c,0;return buf[1]=buf[1]+1,0;};

var
 buffer_add_string=
  function(buf,s)
   {var str_len=s["length"];
    
    buffer_check_size(buf,str_len);
    $$String["blit"](s,0,buf[2],buf[1],str_len);
    return buf[1]=buf[1]+str_len,0;
    };

var
 buffer_contents=
  function(buf){return Bytes["sub_string"](buf[2],0,buf[1]);};

var
 char_of_iconv=
  function(iconv)
   {var exit;
    
    switch(iconv)
     {case 0:exit=387;
      case 1:exit=387;
      case 2:exit=387;
      case 3:exit=388;
      case 4:exit=388;
      case 5:exit=388;
      case 6:exit=389;
      case 7:exit=389;
      case 8:exit=390;
      case 9:exit=390;
      case 10:exit=391;
      case 11:exit=391;
      case 12:return 117;
      }
    
    switch(exit)
     {case 387:return 100;
      case 388:return 105;
      case 389:return 120;
      case 390:return 88;
      case 391:return 111;
      }
    };

var
 char_of_fconv=
  function(fconv)
   {var exit;
    
    switch(fconv)
     {case 0:exit=381;
      case 1:exit=381;
      case 2:exit=381;
      case 3:exit=382;
      case 4:exit=382;
      case 5:exit=382;
      case 6:exit=383;
      case 7:exit=383;
      case 8:exit=383;
      case 9:exit=384;
      case 10:exit=384;
      case 11:exit=384;
      case 12:exit=385;
      case 13:exit=385;
      case 14:exit=385;
      case 15:return 70;
      }
    
    switch(exit)
     {case 381:return 102;
      case 382:return 101;
      case 383:return 69;
      case 384:return 103;
      case 385:return 71;
      }
    };

var
 char_of_counter=
  function(counter)
   {switch(counter){case 0:return 108;case 1:return 110;case 2:return 78;}};

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
            
            var after=match[2];
            
            var before=match[1];
            
            return is_in_char_set(set,c)&&
                   !(is_in_char_set(set,before)&&is_in_char_set(set,after));
            };
        
        if(is_alone(93)){buffer_add_char(buf,93)}else{}
        
        print_out(set,1);
        if(is_alone(45)){return buffer_add_char(buf,45);}else{return 0;}
        };
    
    var
     print_out=
      function(set,i)
       {if(i<256)
         {if(is_in_char_set(set,Pervasives["char_of_int"](i)))
           {return print_first(set,i);}
          else
           {return print_out(set,i+1);}
          }
        else
         {return 0;}
        };
    
    var
     print_first=
      function(set,i)
       {var match=Pervasives["char_of_int"](i);
        
        var exit;
        
        var switcher=-45+match;
        
        if(!(48<switcher>>>0))
         {var switcher$1=-1+switcher;
          
          if(46<switcher$1>>>0){return print_out(set,i+1);}else{exit=375;}
          }
        else
         {if(switcher>=210){return print_char(buf,255);}else{exit=375;}}
        
        switch(exit){case 375:return print_second(set,i+1);}
        };
    
    var
     print_second=
      function(set,i)
       {if(is_in_char_set(set,Pervasives["char_of_int"](i)))
         {var match=Pervasives["char_of_int"](i);
          
          var exit;
          
          var switcher=-45+match;
          
          if(!(48<switcher>>>0))
           {var switcher$1=-1+switcher;
            
            if(46<switcher$1>>>0)
             {if(!is_in_char_set(set,Pervasives["char_of_int"](i+1)))
               {print_char(buf,i-1);return print_out(set,i+1);}
              else
               {exit=376;}
              }
            else
             {exit=376;}
            }
          else
           {if(switcher>=210)
             {print_char(buf,254);return print_char(buf,255);}
            else
             {exit=376;}
            }
          
          switch(exit)
           {case 376:
             if(!is_in_char_set(set,Pervasives["char_of_int"](i+1)))
              {print_char(buf,i-1);
               print_char(buf,i);
               return print_out(set,i+2);
               }
             else
              {return print_in(set,i-1,i+2);}
             
            }
          }
        else
         {print_char(buf,i-1);return print_out(set,i+1);}
        };
    
    var
     print_in=
      function(set,i,j)
       {if((j=256)||!is_in_char_set(set,Pervasives["char_of_int"](j)))
         {print_char(buf,i);
          print_char(buf,45);
          print_char(buf,j-1);
          if(j<256){return print_out(set,j+1);}else{return 0;}
          }
        else
         {return print_in(set,i,j+1);}
        };
    
    var
     print_char=
      function(buf,i)
       {var c=Pervasives["char_of_int"](i);
        
        if(c!=37)
         {if(c!=64)
           {return buffer_add_char(buf,c);}
          else
           {buffer_add_char(buf,37);return buffer_add_char(buf,64);}
          }
        else
         {buffer_add_char(buf,37);return buffer_add_char(buf,37);}
        };
    
    buffer_add_char(buf,91);
    print_start
     (is_in_char_set(char_set,0)
       ?(buffer_add_char(buf,94),rev_char_set(char_set))
       :char_set);
    return buffer_add_char(buf,93);
    };

var
 bprint_padty=
  function(buf,padty)
   {switch(padty)
     {case 0:return buffer_add_char(buf,45);
      case 1:return /* () */0;
      case 2:return buffer_add_char(buf,48);
      }
    };

var
 bprint_ignored_flag=
  function(buf,ign_flag)
   {if(ign_flag){return buffer_add_char(buf,95);}else{return 0;}};

var
 bprint_pad_opt=
  function(buf,pad_opt)
   {if(pad_opt)
     {var width=pad_opt[1];
      
      return buffer_add_string(buf,Pervasives["string_of_int"](width));
      }
    else
     {return /* () */0;}
    };

var
 bprint_padding=
  function(buf,pad)
   {if(typeof pad=="number")
     {switch(pad){case 0:return /* () */0;}}
    else
     {switch(pad[0])
       {case 0:
         var n=pad[2];
         
         var padty=pad[1];
         
         bprint_padty(buf,padty);
         return buffer_add_string(buf,Pervasives["string_of_int"](n));
         
        case 1:
         var padty$1=pad[1];
         
         bprint_padty(buf,padty$1);
         return buffer_add_char(buf,42);
         
        }}
    };

var
 bprint_precision=
  function(buf,prec)
   {if(typeof prec==="number")
     {if(prec!=0){return buffer_add_string(buf,".*");}else{return /* () */0;}}
    else
     {var n=prec[1];
      
      buffer_add_char(buf,46);
      return buffer_add_string(buf,Pervasives["string_of_int"](n));
      }
    };

var
 bprint_iconv_flag=
  function(buf,iconv)
   {var exit;
    
    switch(iconv)
     {case 0:exit=365;
      case 1:exit=362;
      case 2:exit=363;
      case 3:exit=365;
      case 4:exit=362;
      case 5:exit=363;
      case 6:exit=365;
      case 7:exit=364;
      case 8:exit=365;
      case 9:exit=364;
      case 10:exit=365;
      case 11:exit=364;
      case 12:exit=365;
      }
    
    switch(exit)
     {case 362:return buffer_add_char(buf,43);
      case 363:return buffer_add_char(buf,32);
      case 364:return buffer_add_char(buf,35);
      case 365:return /* () */0;
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
    return buffer_add_char(buf,char_of_iconv(iconv));
    };

var
 bprint_altint_fmt=
  function(buf,ign_flag,iconv,pad,prec,c)
   {buffer_add_char(buf,37);
    bprint_ignored_flag(buf,ign_flag);
    bprint_iconv_flag(buf,iconv);
    bprint_padding(buf,pad);
    bprint_precision(buf,prec);
    buffer_add_char(buf,c);
    return buffer_add_char(buf,char_of_iconv(iconv));
    };

var
 bprint_fconv_flag=
  function(buf,fconv)
   {var exit;
    
    switch(fconv)
     {case 0:exit=358;
      case 1:exit=356;
      case 2:exit=357;
      case 3:exit=358;
      case 4:exit=356;
      case 5:exit=357;
      case 6:exit=358;
      case 7:exit=356;
      case 8:exit=357;
      case 9:exit=358;
      case 10:exit=356;
      case 11:exit=357;
      case 12:exit=358;
      case 13:exit=356;
      case 14:exit=357;
      case 15:exit=358;
      }
    
    switch(exit)
     {case 356:return buffer_add_char(buf,43);
      case 357:return buffer_add_char(buf,32);
      case 358:return /* () */0;
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
    return buffer_add_char(buf,char_of_fconv(fconv));
    };

var
 string_of_formatting_lit=
  function(formatting_lit)
   {if(typeof formatting_lit=="number")
     {switch(formatting_lit)
       {case 0:return "@]";
        case 1:return "@}";
        case 2:return "@?";
        case 3:return "@\n";
        case 4:return "@.";
        case 5:return "@@";
        case 6:return "@%";
        }}
    else
     {switch(formatting_lit[0])
       {case 0:var str=formatting_lit[1];return str;
        case 1:var str$1=formatting_lit[1];return str$1;
        case 2:
         var c=formatting_lit[1];
         
         return Pervasives["^"]("@",$$String["make"](1,c));
         
        }}
    };

var
 string_of_formatting_gen=
  function(formatting_gen)
   {switch(formatting_gen[0])
     {case 0:var match=formatting_gen[1];var str=match[2];return str;
      case 1:var match$1=formatting_gen[1];var str$1=match$1[2];return str$1;
      }
    };

var
 bprint_char_literal=
  function(buf,chr)
   {if(chr!=37)
     {return buffer_add_char(buf,chr);}
    else
     {return buffer_add_string(buf,"%%");}
    };

var
 bprint_string_literal=
  function(buf,str)
   {for(var i=0;i<=str["length"]-1;i++){bprint_char_literal(buf,str[i])}};

var
 bprint_fmtty=
  function(buf,fmtty)
   {if(typeof fmtty=="number")
     {switch(fmtty){case 0:return /* () */0;}}
    else
     {switch(fmtty[0])
       {case 0:
         var rest=fmtty[1];
         
         buffer_add_string(buf,"%c");
         return bprint_fmtty(buf,rest);
         
        case 1:
         var rest$1=fmtty[1];
         
         buffer_add_string(buf,"%s");
         return bprint_fmtty(buf,rest$1);
         
        case 2:
         var rest$2=fmtty[1];
         
         buffer_add_string(buf,"%i");
         return bprint_fmtty(buf,rest$2);
         
        case 3:
         var rest$3=fmtty[1];
         
         buffer_add_string(buf,"%li");
         return bprint_fmtty(buf,rest$3);
         
        case 4:
         var rest$4=fmtty[1];
         
         buffer_add_string(buf,"%ni");
         return bprint_fmtty(buf,rest$4);
         
        case 5:
         var rest$5=fmtty[1];
         
         buffer_add_string(buf,"%Li");
         return bprint_fmtty(buf,rest$5);
         
        case 6:
         var rest$6=fmtty[1];
         
         buffer_add_string(buf,"%f");
         return bprint_fmtty(buf,rest$6);
         
        case 7:
         var rest$7=fmtty[1];
         
         buffer_add_string(buf,"%B");
         return bprint_fmtty(buf,rest$7);
         
        case 8:
         var rest$8=fmtty[2];
         
         var sub_fmtty=fmtty[1];
         
         buffer_add_string(buf,"%{");
         bprint_fmtty(buf,sub_fmtty);
         buffer_add_string(buf,"%}");
         return bprint_fmtty(buf,rest$8);
         
        case 9:
         var rest$9=fmtty[3];
         
         var sub_fmtty$1=fmtty[1];
         
         buffer_add_string(buf,"%(");
         bprint_fmtty(buf,sub_fmtty$1);
         buffer_add_string(buf,"%)");
         return bprint_fmtty(buf,rest$9);
         
        case 10:
         var rest$10=fmtty[1];
         
         buffer_add_string(buf,"%a");
         return bprint_fmtty(buf,rest$10);
         
        case 11:
         var rest$11=fmtty[1];
         
         buffer_add_string(buf,"%t");
         return bprint_fmtty(buf,rest$11);
         
        case 12:
         var rest$12=fmtty[1];
         
         buffer_add_string(buf,"%?");
         return bprint_fmtty(buf,rest$12);
         
        case 13:
         var rest$13=fmtty[1];
         
         buffer_add_string(buf,"%r");
         return bprint_fmtty(buf,rest$13);
         
        case 14:
         var rest$14=fmtty[1];
         
         buffer_add_string(buf,"%_r");
         return bprint_fmtty(buf,rest$14);
         
        }}
    };

var
 int_of_custom_arity=
  function(param)
   {if(param){var x=param[1];return 1+int_of_custom_arity(x);}else{return 0;}};

var
 bprint_fmt=
  function(buf,fmt)
   {var
     fmtiter=
      function(fmt,ign_flag)
       {if(typeof fmt=="number")
         {switch(fmt){case 0:return /* () */0;}}
        else
         {switch(fmt[0])
           {case 0:
             var rest=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,99);
             return fmtiter(rest,/* false */0);
             
            case 1:
             var rest$1=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,67);
             return fmtiter(rest$1,/* false */0);
             
            case 2:
             var rest$2=fmt[2];
             
             var pad=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             bprint_padding(buf,pad);
             buffer_add_char(buf,115);
             return fmtiter(rest$2,/* false */0);
             
            case 3:
             var rest$3=fmt[2];
             
             var pad$1=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             bprint_padding(buf,pad$1);
             buffer_add_char(buf,83);
             return fmtiter(rest$3,/* false */0);
             
            case 4:
             var rest$4=fmt[4];
             
             var prec=fmt[3];
             
             var pad$2=fmt[2];
             
             var iconv=fmt[1];
             
             bprint_int_fmt(buf,ign_flag,iconv,pad$2,prec);
             return fmtiter(rest$4,/* false */0);
             
            case 5:
             var rest$5=fmt[4];
             
             var prec$1=fmt[3];
             
             var pad$3=fmt[2];
             
             var iconv$1=fmt[1];
             
             bprint_altint_fmt(buf,ign_flag,iconv$1,pad$3,prec$1,108);
             return fmtiter(rest$5,/* false */0);
             
            case 6:
             var rest$6=fmt[4];
             
             var prec$2=fmt[3];
             
             var pad$4=fmt[2];
             
             var iconv$2=fmt[1];
             
             bprint_altint_fmt(buf,ign_flag,iconv$2,pad$4,prec$2,110);
             return fmtiter(rest$6,/* false */0);
             
            case 7:
             var rest$7=fmt[4];
             
             var prec$3=fmt[3];
             
             var pad$5=fmt[2];
             
             var iconv$3=fmt[1];
             
             bprint_altint_fmt(buf,ign_flag,iconv$3,pad$5,prec$3,76);
             return fmtiter(rest$7,/* false */0);
             
            case 8:
             var rest$8=fmt[4];
             
             var prec$4=fmt[3];
             
             var pad$6=fmt[2];
             
             var fconv=fmt[1];
             
             bprint_float_fmt(buf,ign_flag,fconv,pad$6,prec$4);
             return fmtiter(rest$8,/* false */0);
             
            case 9:
             var rest$9=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,66);
             return fmtiter(rest$9,/* false */0);
             
            case 10:
             var rest$10=fmt[1];
             
             buffer_add_string(buf,"%!");
             return fmtiter(rest$10,ign_flag);
             
            case 11:
             var rest$11=fmt[2];
             
             var str=fmt[1];
             
             bprint_string_literal(buf,str);
             return fmtiter(rest$11,ign_flag);
             
            case 12:
             var rest$12=fmt[2];
             
             var chr=fmt[1];
             
             bprint_char_literal(buf,chr);
             return fmtiter(rest$12,ign_flag);
             
            case 13:
             var rest$13=fmt[3];
             
             var fmtty=fmt[2];
             
             var pad_opt=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             bprint_pad_opt(buf,pad_opt);
             buffer_add_char(buf,123);
             bprint_fmtty(buf,fmtty);
             buffer_add_char(buf,37);
             buffer_add_char(buf,125);
             return fmtiter(rest$13,/* false */0);
             
            case 14:
             var rest$14=fmt[3];
             
             var fmtty$1=fmt[2];
             
             var pad_opt$1=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             bprint_pad_opt(buf,pad_opt$1);
             buffer_add_char(buf,40);
             bprint_fmtty(buf,fmtty$1);
             buffer_add_char(buf,37);
             buffer_add_char(buf,41);
             return fmtiter(rest$14,/* false */0);
             
            case 15:
             var rest$15=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,97);
             return fmtiter(rest$15,/* false */0);
             
            case 16:
             var rest$16=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,116);
             return fmtiter(rest$16,/* false */0);
             
            case 17:
             var rest$17=fmt[2];
             
             var fmting_lit=fmt[1];
             
             bprint_string_literal(buf,string_of_formatting_lit(fmting_lit));
             return fmtiter(rest$17,ign_flag);
             
            case 18:
             var rest$18=fmt[2];
             
             var fmting_gen=fmt[1];
             
             bprint_string_literal(buf,"@{");
             bprint_string_literal(buf,string_of_formatting_gen(fmting_gen));
             return fmtiter(rest$18,ign_flag);
             
            case 19:
             var rest$19=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,114);
             return fmtiter(rest$19,/* false */0);
             
            case 20:
             var rest$20=fmt[3];
             
             var char_set=fmt[2];
             
             var width_opt=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             bprint_pad_opt(buf,width_opt);
             bprint_char_set(buf,char_set);
             return fmtiter(rest$20,/* false */0);
             
            case 21:
             var rest$21=fmt[2];
             
             var counter=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,char_of_counter(counter));
             return fmtiter(rest$21,/* false */0);
             
            case 22:
             var rest$22=fmt[1];
             
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             bprint_string_literal(buf,"0c");
             return fmtiter(rest$22,/* false */0);
             
            case 23:
             var rest$23=fmt[2];
             
             var ign=fmt[1];
             
             var match=param_format_of_ignored_format(ign,rest$23);
             
             var fmt$prime=match[1];
             
             return fmtiter(fmt$prime,/* true */1);
             
            case 24:
             var rest$24=fmt[3];
             
             var arity=fmt[1];
             
             for(var _i=1;_i<=int_of_custom_arity(arity);_i++)
              {buffer_add_char(buf,37),
               bprint_ignored_flag(buf,ign_flag),
               buffer_add_char(buf,63)}
             
             return fmtiter(rest$24,/* false */0);
             
            }}
        };
    
    return fmtiter(fmt,/* false */0);
    };

var
 string_of_fmt=
  function(fmt)
   {var buf=buffer_create(16);
    
    bprint_fmt(buf,fmt);
    return buffer_contents(buf);
    };

var
 symm=
  function(param)
   {if(typeof param=="number")
     {switch(param){case 0:return /* End_of_fmtty */0;}}
    else
     {switch(param[0])
       {case 0:var rest=param[1];return /* Char_ty */[0,symm(rest)];
        case 1:var rest$1=param[1];return /* String_ty */[1,symm(rest$1)];
        case 2:var rest$2=param[1];return /* Int_ty */[2,symm(rest$2)];
        case 3:var rest$3=param[1];return /* Int32_ty */[3,symm(rest$3)];
        case 4:var rest$4=param[1];return /* Nativeint_ty */[4,symm(rest$4)];
        case 5:var rest$5=param[1];return /* Int64_ty */[5,symm(rest$5)];
        case 6:var rest$6=param[1];return /* Float_ty */[6,symm(rest$6)];
        case 7:var rest$7=param[1];return /* Bool_ty */[7,symm(rest$7)];
        case 8:
         var rest$8=param[2];
         
         var ty=param[1];
         
         return /* Format_arg_ty */[8,ty,symm(rest$8)];
         
        case 9:
         var rest$9=param[3];
         
         var ty2=param[2];
         
         var ty1=param[1];
         
         return /* Format_subst_ty */[9,ty2,ty1,symm(rest$9)];
         
        case 10:var rest$10=param[1];return /* Alpha_ty */[10,symm(rest$10)];
        case 11:var rest$11=param[1];return /* Theta_ty */[11,symm(rest$11)];
        case 12:var rest$12=param[1];return /* Any_ty */[12,symm(rest$12)];
        case 13:var rest$13=param[1];return /* Reader_ty */[13,symm(rest$13)];
        case 14:
         var rest$14=param[1];
         
         return /* Ignored_reader_ty */[14,symm(rest$14)];
         
        }}
    };

var
 fmtty_rel_det=
  function(param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:
         return /* tuple */[0,
                 function(param$1){return /* Refl */0;},
                 function(param$1){return /* Refl */0;},
                 function(param$1){return /* Refl */0;},
                 function(param$1){return /* Refl */0;}];
         
        }}
    else
     {switch(param[0])
       {case 0:
         var rest=param[1];
         
         var match=fmtty_rel_det(rest);
         
         var de=match[4];
         
         var ed=match[3];
         
         var af=match[2];
         
         var fa=match[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$1=fa(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$1=af(/* Refl */0);return /* Refl */0;},
                 ed,
                 de];
         
        case 1:
         var rest$1=param[1];
         
         var match$1=fmtty_rel_det(rest$1);
         
         var de$1=match$1[4];
         
         var ed$1=match$1[3];
         
         var af$1=match$1[2];
         
         var fa$1=match$1[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$2=fa$1(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$2=af$1(/* Refl */0);return /* Refl */0;},
                 ed$1,
                 de$1];
         
        case 2:
         var rest$2=param[1];
         
         var match$2=fmtty_rel_det(rest$2);
         
         var de$2=match$2[4];
         
         var ed$2=match$2[3];
         
         var af$2=match$2[2];
         
         var fa$2=match$2[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$3=fa$2(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$3=af$2(/* Refl */0);return /* Refl */0;},
                 ed$2,
                 de$2];
         
        case 3:
         var rest$3=param[1];
         
         var match$3=fmtty_rel_det(rest$3);
         
         var de$3=match$3[4];
         
         var ed$3=match$3[3];
         
         var af$3=match$3[2];
         
         var fa$3=match$3[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$4=fa$3(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$4=af$3(/* Refl */0);return /* Refl */0;},
                 ed$3,
                 de$3];
         
        case 4:
         var rest$4=param[1];
         
         var match$4=fmtty_rel_det(rest$4);
         
         var de$4=match$4[4];
         
         var ed$4=match$4[3];
         
         var af$4=match$4[2];
         
         var fa$4=match$4[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$5=fa$4(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$5=af$4(/* Refl */0);return /* Refl */0;},
                 ed$4,
                 de$4];
         
        case 5:
         var rest$5=param[1];
         
         var match$5=fmtty_rel_det(rest$5);
         
         var de$5=match$5[4];
         
         var ed$5=match$5[3];
         
         var af$5=match$5[2];
         
         var fa$5=match$5[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$6=fa$5(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$6=af$5(/* Refl */0);return /* Refl */0;},
                 ed$5,
                 de$5];
         
        case 6:
         var rest$6=param[1];
         
         var match$6=fmtty_rel_det(rest$6);
         
         var de$6=match$6[4];
         
         var ed$6=match$6[3];
         
         var af$6=match$6[2];
         
         var fa$6=match$6[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$7=fa$6(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$7=af$6(/* Refl */0);return /* Refl */0;},
                 ed$6,
                 de$6];
         
        case 7:
         var rest$7=param[1];
         
         var match$7=fmtty_rel_det(rest$7);
         
         var de$7=match$7[4];
         
         var ed$7=match$7[3];
         
         var af$7=match$7[2];
         
         var fa$7=match$7[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$8=fa$7(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$8=af$7(/* Refl */0);return /* Refl */0;},
                 ed$7,
                 de$7];
         
        case 8:
         var rest$8=param[2];
         
         var match$8=fmtty_rel_det(rest$8);
         
         var de$8=match$8[4];
         
         var ed$8=match$8[3];
         
         var af$8=match$8[2];
         
         var fa$8=match$8[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$9=fa$8(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$9=af$8(/* Refl */0);return /* Refl */0;},
                 ed$8,
                 de$8];
         
        case 9:
         var rest$9=param[3];
         
         var ty2=param[2];
         
         var ty1=param[1];
         
         var match$9=fmtty_rel_det(rest$9);
         
         var de$9=match$9[4];
         
         var ed$9=match$9[3];
         
         var af$9=match$9[2];
         
         var fa$9=match$9[1];
         
         var ty=trans(symm(ty1),ty2);
         
         var match$10=fmtty_rel_det(ty);
         
         var jd=match$10[4];
         
         var dj=match$10[3];
         
         var ga=match$10[2];
         
         var ag=match$10[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$11=fa$9(/* Refl */0);
                   
                   var match$12=ag(/* Refl */0);
                   
                   return /* Refl */0;
                   },
                 function(param$1)
                  {var match$11=ga(/* Refl */0);
                   
                   var match$12=af$9(/* Refl */0);
                   
                   return /* Refl */0;
                   },
                 function(param$1)
                  {var match$11=ed$9(/* Refl */0);
                   
                   var match$12=dj(/* Refl */0);
                   
                   return /* Refl */0;
                   },
                 function(param$1)
                  {var match$11=jd(/* Refl */0);
                   
                   var match$12=de$9(/* Refl */0);
                   
                   return /* Refl */0;
                   }];
         
        case 10:
         var rest$10=param[1];
         
         var match$11=fmtty_rel_det(rest$10);
         
         var de$10=match$11[4];
         
         var ed$10=match$11[3];
         
         var af$10=match$11[2];
         
         var fa$10=match$11[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$12=fa$10(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$12=af$10(/* Refl */0);return /* Refl */0;},
                 ed$10,
                 de$10];
         
        case 11:
         var rest$11=param[1];
         
         var match$12=fmtty_rel_det(rest$11);
         
         var de$11=match$12[4];
         
         var ed$11=match$12[3];
         
         var af$11=match$12[2];
         
         var fa$11=match$12[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$13=fa$11(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$13=af$11(/* Refl */0);return /* Refl */0;},
                 ed$11,
                 de$11];
         
        case 12:
         var rest$12=param[1];
         
         var match$13=fmtty_rel_det(rest$12);
         
         var de$12=match$13[4];
         
         var ed$12=match$13[3];
         
         var af$12=match$13[2];
         
         var fa$12=match$13[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$14=fa$12(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$14=af$12(/* Refl */0);return /* Refl */0;},
                 ed$12,
                 de$12];
         
        case 13:
         var rest$13=param[1];
         
         var match$14=fmtty_rel_det(rest$13);
         
         var de$13=match$14[4];
         
         var ed$13=match$14[3];
         
         var af$13=match$14[2];
         
         var fa$13=match$14[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$15=fa$13(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$15=af$13(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$15=ed$13(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$15=de$13(/* Refl */0);return /* Refl */0;}];
         
        case 14:
         var rest$14=param[1];
         
         var match$15=fmtty_rel_det(rest$14);
         
         var de$14=match$15[4];
         
         var ed$14=match$15[3];
         
         var af$14=match$15[2];
         
         var fa$14=match$15[1];
         
         return /* tuple */[0,
                 function(param$1)
                  {var match$16=fa$14(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$16=af$14(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$16=ed$14(/* Refl */0);return /* Refl */0;},
                 function(param$1)
                  {var match$16=de$14(/* Refl */0);return /* Refl */0;}];
         
        }}
    };

var
 trans=
  function(ty1,ty2)
   {var match=ty1;
    
    var match$1=ty2;
    
    var exit;
    
    if(typeof match=="number")
     {switch(match)
       {case 0:
         if(typeof match$1=="number")
          {switch(match$1){case 0:return /* End_of_fmtty */0;}}
         else
          {switch(match$1[0])
            {case 8:exit=335;
             case 9:exit=333;
             case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:exit=339;
             case 14:exit=337;
             default:
              throw [0,Assert_failure,[0,"camlinternalFormat.ml",816,23]];}}
         
        }}
    else
     {switch(match[0])
       {case 0:
         var rest1=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=331;}}
         else
          {switch(match$1[0])
            {case 0:
              var rest2=match$1[1];return /* Char_ty */[0,trans(rest1,rest2)];
             case 8:exit=335;
             case 9:exit=333;
             case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:exit=339;
             case 14:exit=337;
             }}
         
        case 1:
         var rest1$1=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=331;}}
         else
          {switch(match$1[0])
            {case 1:
              var rest2$1=match$1[1];
              
              return /* String_ty */[1,trans(rest1$1,rest2$1)];
              
             case 8:exit=335;
             case 9:exit=333;
             case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:exit=339;
             case 14:exit=337;
             }}
         
        case 2:
         var rest1$2=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=331;}}
         else
          {switch(match$1[0])
            {case 2:
              var rest2$2=match$1[1];
              
              return /* Int_ty */[2,trans(rest1$2,rest2$2)];
              
             case 8:exit=335;
             case 9:exit=333;
             case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:exit=339;
             case 14:exit=337;
             }}
         
        case 3:
         var rest1$3=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=331;}}
         else
          {switch(match$1[0])
            {case 3:
              var rest2$3=match$1[1];
              
              return /* Int32_ty */[3,trans(rest1$3,rest2$3)];
              
             case 8:exit=335;
             case 9:exit=333;
             case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:exit=339;
             case 14:exit=337;
             }}
         
        case 4:
         var rest1$4=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=331;}}
         else
          {switch(match$1[0])
            {case 4:
              var rest2$4=match$1[1];
              
              return /* Nativeint_ty */[4,trans(rest1$4,rest2$4)];
              
             case 8:exit=335;
             case 9:exit=333;
             case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:exit=339;
             case 14:exit=337;
             }}
         
        case 5:
         var rest1$5=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=331;}}
         else
          {switch(match$1[0])
            {case 5:
              var rest2$5=match$1[1];
              
              return /* Int64_ty */[5,trans(rest1$5,rest2$5)];
              
             case 8:exit=335;
             case 9:exit=333;
             case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:exit=339;
             case 14:exit=337;
             }}
         
        case 6:
         var rest1$6=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=331;}}
         else
          {switch(match$1[0])
            {case 6:
              var rest2$6=match$1[1];
              
              return /* Float_ty */[6,trans(rest1$6,rest2$6)];
              
             case 8:exit=335;
             case 9:exit=333;
             case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:exit=339;
             case 14:exit=337;
             }}
         
        case 7:
         var rest1$7=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=331;}}
         else
          {switch(match$1[0])
            {case 7:
              var rest2$7=match$1[1];
              
              return /* Bool_ty */[7,trans(rest1$7,rest2$7)];
              
             case 8:exit=335;
             case 9:exit=333;
             case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:exit=339;
             case 14:exit=337;
             }}
         
        case 8:
         var rest1$8=match[2];
         
         var ty1$1=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 8:
              var rest2$8=match$1[2];
              
              var ty2$1=match$1[1];
              
              return /* Format_arg_ty */[8,
                      trans(ty1$1,ty2$1),
                      trans(rest1$8,rest2$8)];
              
             case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:exit=339;
             case 14:exit=337;
             default:exit=336;}}
         
        case 9:
         var rest1$9=match[3];
         
         var ty12=match[2];
         
         var ty11=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 8:exit=335;
             case 9:
              var rest2$9=match$1[3];
              
              var ty22=match$1[2];
              
              var ty21=match$1[1];
              
              var ty=trans(symm(ty12),ty21);
              
              var match$2=fmtty_rel_det(ty);
              
              var f4=match$2[4];
              
              var f2=match$2[2];
              
              var match$3=f2(/* Refl */0);
              
              var match$4=f4(/* Refl */0);
              
              return /* Format_subst_ty */[9,ty11,ty22,trans(rest1$9,rest2$9)];
              
             case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:exit=339;
             case 14:exit=337;
             default:exit=334;}}
         
        case 10:
         var rest1$10=match[1];
         
         var exit$1;
         
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 10:
              var rest2$10=match$1[1];
              
              return /* Alpha_ty */[10,trans(rest1$10,rest2$10)];
              
             default:exit$1=346;}}
         
         switch(exit$1)
          {case 346:
            throw [0,Assert_failure,[0,"camlinternalFormat.ml",780,21]];
           }
         
        case 11:
         var rest1$11=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 10:exit=345;
             case 11:
              var rest2$11=match$1[1];
              
              return /* Theta_ty */[11,trans(rest1$11,rest2$11)];
              
             default:exit=344;}}
         
        case 12:
         var rest1$12=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 10:exit=345;
             case 11:exit=343;
             case 12:
              var rest2$12=match$1[1];
              
              return /* Any_ty */[12,trans(rest1$12,rest2$12)];
              
             default:exit=342;}}
         
        case 13:
         var rest1$13=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:
              var rest2$13=match$1[1];
              
              return /* Reader_ty */[13,trans(rest1$13,rest2$13)];
              
             default:exit=340;}}
         
        case 14:
         var rest1$14=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 10:exit=345;
             case 11:exit=343;
             case 12:exit=341;
             case 13:exit=339;
             case 14:
              var rest2$14=match$1[1];
              
              return /* Ignored_reader_ty */[14,trans(rest1$14,rest2$14)];
              
             default:exit=338;}}
         
        }}
    
    switch(exit)
     {case 345:throw [0,Assert_failure,[0,"camlinternalFormat.ml",781,21]];
      case 344:throw [0,Assert_failure,[0,"camlinternalFormat.ml",784,21]];
      case 343:throw [0,Assert_failure,[0,"camlinternalFormat.ml",785,21]];
      case 342:throw [0,Assert_failure,[0,"camlinternalFormat.ml",788,19]];
      case 341:throw [0,Assert_failure,[0,"camlinternalFormat.ml",789,19]];
      case 340:throw [0,Assert_failure,[0,"camlinternalFormat.ml",792,22]];
      case 339:throw [0,Assert_failure,[0,"camlinternalFormat.ml",793,22]];
      case 338:throw [0,Assert_failure,[0,"camlinternalFormat.ml",797,30]];
      case 337:throw [0,Assert_failure,[0,"camlinternalFormat.ml",798,30]];
      case 336:throw [0,Assert_failure,[0,"camlinternalFormat.ml",802,26]];
      case 335:throw [0,Assert_failure,[0,"camlinternalFormat.ml",803,26]];
      case 334:throw [0,Assert_failure,[0,"camlinternalFormat.ml",812,28]];
      case 333:throw [0,Assert_failure,[0,"camlinternalFormat.ml",813,28]];
      case 331:throw [0,Assert_failure,[0,"camlinternalFormat.ml",817,23]];
      }
    };

var
 fmtty_of_formatting_gen=
  function(formatting_gen)
   {switch(formatting_gen[0])
     {case 0:
       var match=formatting_gen[1];var fmt=match[1];return fmtty_of_fmt(fmt);
      case 1:
       var match$1=formatting_gen[1];
       
       var fmt$1=match$1[1];
       
       return fmtty_of_fmt(fmt$1);
       
      }
    };

var
 fmtty_of_fmt=
  function(fmtty)
   {if(typeof fmtty=="number")
     {switch(fmtty){case 0:return /* End_of_fmtty */0;}}
    else
     {switch(fmtty[0])
       {case 0:var rest=fmtty[1];return /* Char_ty */[0,fmtty_of_fmt(rest)];
        case 1:
         var rest$1=fmtty[1];return /* Char_ty */[0,fmtty_of_fmt(rest$1)];
        case 2:
         var rest$2=fmtty[2];
         
         var pad=fmtty[1];
         
         return fmtty_of_padding_fmtty
                 (pad,/* String_ty */[1,fmtty_of_fmt(rest$2)]);
         
        case 3:
         var rest$3=fmtty[2];
         
         var pad$1=fmtty[1];
         
         return fmtty_of_padding_fmtty
                 (pad$1,/* String_ty */[1,fmtty_of_fmt(rest$3)]);
         
        case 4:
         var rest$4=fmtty[4];
         
         var prec=fmtty[3];
         
         var pad$2=fmtty[2];
         
         var ty_rest=fmtty_of_fmt(rest$4);
         
         var prec_ty=fmtty_of_precision_fmtty(prec,/* Int_ty */[2,ty_rest]);
         
         return fmtty_of_padding_fmtty(pad$2,prec_ty);
         
        case 5:
         var rest$5=fmtty[4];
         
         var prec$1=fmtty[3];
         
         var pad$3=fmtty[2];
         
         var ty_rest$1=fmtty_of_fmt(rest$5);
         
         var
          prec_ty$1=
           fmtty_of_precision_fmtty(prec$1,/* Int32_ty */[3,ty_rest$1]);
         
         return fmtty_of_padding_fmtty(pad$3,prec_ty$1);
         
        case 6:
         var rest$6=fmtty[4];
         
         var prec$2=fmtty[3];
         
         var pad$4=fmtty[2];
         
         var ty_rest$2=fmtty_of_fmt(rest$6);
         
         var
          prec_ty$2=
           fmtty_of_precision_fmtty(prec$2,/* Nativeint_ty */[4,ty_rest$2]);
         
         return fmtty_of_padding_fmtty(pad$4,prec_ty$2);
         
        case 7:
         var rest$7=fmtty[4];
         
         var prec$3=fmtty[3];
         
         var pad$5=fmtty[2];
         
         var ty_rest$3=fmtty_of_fmt(rest$7);
         
         var
          prec_ty$3=
           fmtty_of_precision_fmtty(prec$3,/* Int64_ty */[5,ty_rest$3]);
         
         return fmtty_of_padding_fmtty(pad$5,prec_ty$3);
         
        case 8:
         var rest$8=fmtty[4];
         
         var prec$4=fmtty[3];
         
         var pad$6=fmtty[2];
         
         var ty_rest$4=fmtty_of_fmt(rest$8);
         
         var
          prec_ty$4=
           fmtty_of_precision_fmtty(prec$4,/* Float_ty */[6,ty_rest$4]);
         
         return fmtty_of_padding_fmtty(pad$6,prec_ty$4);
         
        case 9:
         var rest$9=fmtty[1];return /* Bool_ty */[7,fmtty_of_fmt(rest$9)];
        case 10:var rest$10=fmtty[1];return fmtty_of_fmt(rest$10);
        case 11:var rest$11=fmtty[2];return fmtty_of_fmt(rest$11);
        case 12:var rest$12=fmtty[2];return fmtty_of_fmt(rest$12);
        case 13:
         var rest$13=fmtty[3];
         
         var ty=fmtty[2];
         
         return /* Format_arg_ty */[8,ty,fmtty_of_fmt(rest$13)];
         
        case 14:
         var rest$14=fmtty[3];
         
         var ty$1=fmtty[2];
         
         return /* Format_subst_ty */[9,ty$1,ty$1,fmtty_of_fmt(rest$14)];
         
        case 15:
         var rest$15=fmtty[1];return /* Alpha_ty */[10,fmtty_of_fmt(rest$15)];
        case 16:
         var rest$16=fmtty[1];return /* Theta_ty */[11,fmtty_of_fmt(rest$16)];
        case 17:var rest$17=fmtty[2];return fmtty_of_fmt(rest$17);
        case 18:
         var rest$18=fmtty[2];
         
         var fmting_gen=fmtty[1];
         
         return CamlinternalFormatBasics["concat_fmtty"]
                 (fmtty_of_formatting_gen(fmting_gen),fmtty_of_fmt(rest$18));
         
        case 19:
         var rest$19=fmtty[1];
         
         return /* Reader_ty */[13,fmtty_of_fmt(rest$19)];
         
        case 20:
         var rest$20=fmtty[3];return /* String_ty */[1,fmtty_of_fmt(rest$20)];
        case 21:
         var rest$21=fmtty[2];return /* Int_ty */[2,fmtty_of_fmt(rest$21)];
        case 22:
         var rest$22=fmtty[1];return /* Char_ty */[0,fmtty_of_fmt(rest$22)];
        case 23:
         var rest$23=fmtty[2];
         
         var ign=fmtty[1];
         
         return fmtty_of_ignored_format(ign,rest$23);
         
        case 24:
         var rest$24=fmtty[3];
         
         var arity=fmtty[1];
         
         return fmtty_of_custom(arity,fmtty_of_fmt(rest$24));
         
        }}
    };

var
 fmtty_of_custom=
  function(arity,fmtty)
   {if(arity)
     {var arity$1=arity[1];
      
      return /* Any_ty */[12,fmtty_of_custom(arity$1,fmtty)];
      }
    else
     {return fmtty;}
    };

var
 fmtty_of_ignored_format=
  function(ign,fmt)
   {if(typeof ign=="number")
     {switch(ign)
       {case 0:return fmtty_of_fmt(fmt);
        case 1:return fmtty_of_fmt(fmt);
        case 2:return fmtty_of_fmt(fmt);
        case 3:return /* Ignored_reader_ty */[14,fmtty_of_fmt(fmt)];
        case 4:return fmtty_of_fmt(fmt);
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
         var fmtty=ign[2];
         
         return CamlinternalFormatBasics["concat_fmtty"]
                 (fmtty,fmtty_of_fmt(fmt));
         
        case 9:return fmtty_of_fmt(fmt);
        case 10:return fmtty_of_fmt(fmt);
        }}
    };

var
 fmtty_of_padding_fmtty=
  function(pad,fmtty)
   {if(typeof pad=="number")
     {switch(pad){case 0:return fmtty;}}
    else
     {switch(pad[0]){case 0:return fmtty;case 1:return /* Int_ty */[2,fmtty];}}
    };

var
 fmtty_of_precision_fmtty=
  function(prec,fmtty)
   {if(typeof prec==="number")
     {if(prec!=0){return /* Int_ty */[2,fmtty];}else{return fmtty;}}
    else
     {return fmtty;}
    };

var
 Type_mismatch=
  CamlPrimtivie["caml_set_oo_id"]([248,"CamlinternalFormat.Type_mismatch",0]);

var
 type_padding=
  function(pad,fmtty)
   {var match=pad;
    
    var match$1=fmtty;
    
    var exit;
    
    if(typeof match=="number")
     {switch(match)
       {case 0:return /* Padding_fmtty_EBB */[0,/* No_padding */0,fmtty];}}
    else
     {switch(match[0])
       {case 0:
         var w=match[2];
         
         var padty=match[1];
         
         return /* Padding_fmtty_EBB */[0,/* Lit_padding */[0,padty,w],fmtty];
         
        case 1:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 2:
              var rest=match$1[1];
              
              var padty$1=match[1];
              
              return /* Padding_fmtty_EBB */[0,
                      /* Arg_padding */[1,padty$1],
                      rest];
              
             default:exit=300;}}
         
        }}
    
    switch(exit){case 300:throw Type_mismatch;}
    };

var
 type_padprec=
  function(pad,prec,fmtty)
   {var match=type_padding(pad,fmtty);
    
    var match$1=prec;
    
    var match$2=match;
    
    var exit;
    
    if(typeof match$1==="number")
     {if(match$1!=0)
       {var match$3=match$2[2];
        
        if(typeof match$3=="number")
         {switch(match$3){}}
        else
         {switch(match$3[0])
           {case 2:
             var rest=match$3[1];
             
             var pad$1=match$2[1];
             
             return /* Padprec_fmtty_EBB */[0,pad$1,/* Arg_precision */1,rest];
             
            default:exit=298;}}
        }
      else
       {var rest$1=match$2[2];
        
        var pad$2=match$2[1];
        
        return /* Padprec_fmtty_EBB */[0,pad$2,/* No_precision */0,rest$1];
        }
      }
    else
     {var rest$2=match$2[2];
      
      var pad$3=match$2[1];
      
      var p=match$1[1];
      
      return /* Padprec_fmtty_EBB */[0,pad$3,/* Lit_precision */[0,p],rest$2];
      }
    
    switch(exit){case 298:throw Type_mismatch;}
    };

var
 type_format=
  function(fmt,fmtty)
   {var match=type_format_gen(fmt,fmtty);
    
    var match$1=match[2];
    
    if(typeof match$1==="number")
     {var fmt$prime=match[1];return fmt$prime;}
    else
     {throw Type_mismatch;}
    };

var
 type_format_gen=
  function(fmt,fmtty)
   {var match=fmt;
    
    var match$1=fmtty;
    
    var exit;
    
    if(typeof match=="number")
     {switch(match)
       {case 0:
         var fmtty_rest=match$1;
         
         return /* Fmt_fmtty_EBB */[0,/* End_of_format */0,fmtty_rest];
         
        }}
    else
     {switch(match[0])
       {case 0:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 0:
              var fmtty_rest$1=match$1[1];
              
              var fmt_rest=match[1];
              
              var match$2=type_format_gen(fmt_rest,fmtty_rest$1);
              
              var fmtty$prime=match$2[2];
              
              var fmt$prime=match$2[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Char */[0,fmt$prime],
                      fmtty$prime];
              
             default:exit=293;}}
         
        case 1:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 0:
              var fmtty_rest$2=match$1[1];
              
              var fmt_rest$1=match[1];
              
              var match$3=type_format_gen(fmt_rest$1,fmtty_rest$2);
              
              var fmtty$prime$1=match$3[2];
              
              var fmt$prime$1=match$3[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Caml_char */[1,fmt$prime$1],
                      fmtty$prime$1];
              
             default:exit=293;}}
         
        case 2:
         var fmt_rest$2=match[2];
         
         var pad=match[1];
         
         var match$4=type_padding(pad,fmtty);
         
         var match$5=match$4[2];
         
         var pad$1=match$4[1];
         
         var exit$1;
         
         if(typeof match$5=="number")
          {switch(match$5){}}
         else
          {switch(match$5[0])
            {case 1:
              var fmtty_rest$3=match$5[1];
              
              var match$6=type_format_gen(fmt_rest$2,fmtty_rest$3);
              
              var fmtty$prime$2=match$6[2];
              
              var fmt$prime$2=match$6[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* String */[2,pad$1,fmt$prime$2],
                      fmtty$prime$2];
              
             default:exit$1=286;}}
         
         switch(exit$1){case 286:throw Type_mismatch;}
         
        case 3:
         var fmt_rest$3=match[2];
         
         var pad$2=match[1];
         
         var match$7=type_padding(pad$2,fmtty);
         
         var match$8=match$7[2];
         
         var pad$3=match$7[1];
         
         var exit$2;
         
         if(typeof match$8=="number")
          {switch(match$8){}}
         else
          {switch(match$8[0])
            {case 1:
              var fmtty_rest$4=match$8[1];
              
              var match$9=type_format_gen(fmt_rest$3,fmtty_rest$4);
              
              var fmtty$prime$3=match$9[2];
              
              var fmt$prime$3=match$9[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Caml_string */[3,pad$3,fmt$prime$3],
                      fmtty$prime$3];
              
             default:exit$2=287;}}
         
         switch(exit$2){case 287:throw Type_mismatch;}
         
        case 4:
         var fmt_rest$4=match[4];
         
         var prec=match[3];
         
         var pad$4=match[2];
         
         var iconv=match[1];
         
         var match$10=type_padprec(pad$4,prec,fmtty);
         
         var match$11=match$10[3];
         
         var prec$1=match$10[2];
         
         var pad$5=match$10[1];
         
         var exit$3;
         
         if(typeof match$11=="number")
          {switch(match$11){}}
         else
          {switch(match$11[0])
            {case 2:
              var fmtty_rest$5=match$11[1];
              
              var match$12=type_format_gen(fmt_rest$4,fmtty_rest$5);
              
              var fmtty$prime$4=match$12[2];
              
              var fmt$prime$4=match$12[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Int */[4,iconv,pad$5,prec$1,fmt$prime$4],
                      fmtty$prime$4];
              
             default:exit$3=288;}}
         
         switch(exit$3){case 288:throw Type_mismatch;}
         
        case 5:
         var fmt_rest$5=match[4];
         
         var prec$2=match[3];
         
         var pad$6=match[2];
         
         var iconv$1=match[1];
         
         var match$13=type_padprec(pad$6,prec$2,fmtty);
         
         var match$14=match$13[3];
         
         var prec$3=match$13[2];
         
         var pad$7=match$13[1];
         
         var exit$4;
         
         if(typeof match$14=="number")
          {switch(match$14){}}
         else
          {switch(match$14[0])
            {case 3:
              var fmtty_rest$6=match$14[1];
              
              var match$15=type_format_gen(fmt_rest$5,fmtty_rest$6);
              
              var fmtty$prime$5=match$15[2];
              
              var fmt$prime$5=match$15[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Int32 */[5,iconv$1,pad$7,prec$3,fmt$prime$5],
                      fmtty$prime$5];
              
             default:exit$4=289;}}
         
         switch(exit$4){case 289:throw Type_mismatch;}
         
        case 6:
         var fmt_rest$6=match[4];
         
         var prec$4=match[3];
         
         var pad$8=match[2];
         
         var iconv$2=match[1];
         
         var match$16=type_padprec(pad$8,prec$4,fmtty);
         
         var match$17=match$16[3];
         
         var prec$5=match$16[2];
         
         var pad$9=match$16[1];
         
         var exit$5;
         
         if(typeof match$17=="number")
          {switch(match$17){}}
         else
          {switch(match$17[0])
            {case 4:
              var fmtty_rest$7=match$17[1];
              
              var match$18=type_format_gen(fmt_rest$6,fmtty_rest$7);
              
              var fmtty$prime$6=match$18[2];
              
              var fmt$prime$6=match$18[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Nativeint */[6,iconv$2,pad$9,prec$5,fmt$prime$6],
                      fmtty$prime$6];
              
             default:exit$5=290;}}
         
         switch(exit$5){case 290:throw Type_mismatch;}
         
        case 7:
         var fmt_rest$7=match[4];
         
         var prec$6=match[3];
         
         var pad$10=match[2];
         
         var iconv$3=match[1];
         
         var match$19=type_padprec(pad$10,prec$6,fmtty);
         
         var match$20=match$19[3];
         
         var prec$7=match$19[2];
         
         var pad$11=match$19[1];
         
         var exit$6;
         
         if(typeof match$20=="number")
          {switch(match$20){}}
         else
          {switch(match$20[0])
            {case 5:
              var fmtty_rest$8=match$20[1];
              
              var match$21=type_format_gen(fmt_rest$7,fmtty_rest$8);
              
              var fmtty$prime$7=match$21[2];
              
              var fmt$prime$7=match$21[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Int64 */[7,iconv$3,pad$11,prec$7,fmt$prime$7],
                      fmtty$prime$7];
              
             default:exit$6=291;}}
         
         switch(exit$6){case 291:throw Type_mismatch;}
         
        case 8:
         var fmt_rest$8=match[4];
         
         var prec$8=match[3];
         
         var pad$12=match[2];
         
         var fconv=match[1];
         
         var match$22=type_padprec(pad$12,prec$8,fmtty);
         
         var match$23=match$22[3];
         
         var prec$9=match$22[2];
         
         var pad$13=match$22[1];
         
         var exit$7;
         
         if(typeof match$23=="number")
          {switch(match$23){}}
         else
          {switch(match$23[0])
            {case 6:
              var fmtty_rest$9=match$23[1];
              
              var match$24=type_format_gen(fmt_rest$8,fmtty_rest$9);
              
              var fmtty$prime$8=match$24[2];
              
              var fmt$prime$8=match$24[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Float */[8,fconv,pad$13,prec$9,fmt$prime$8],
                      fmtty$prime$8];
              
             default:exit$7=292;}}
         
         switch(exit$7){case 292:throw Type_mismatch;}
         
        case 9:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 7:
              var fmtty_rest$10=match$1[1];
              
              var fmt_rest$9=match[1];
              
              var match$25=type_format_gen(fmt_rest$9,fmtty_rest$10);
              
              var fmtty$prime$9=match$25[2];
              
              var fmt$prime$9=match$25[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Bool */[9,fmt$prime$9],
                      fmtty$prime$9];
              
             default:exit=293;}}
         
        case 10:
         var fmtty_rest$11=match$1;
         
         var fmt_rest$10=match[1];
         
         var match$26=type_format_gen(fmt_rest$10,fmtty_rest$11);
         
         var fmtty$prime$10=match$26[2];
         
         var fmt$prime$10=match$26[1];
         
         return /* Fmt_fmtty_EBB */[0,
                 /* Flush */[10,fmt$prime$10],
                 fmtty$prime$10];
         
        case 11:
         var fmtty_rest$12=match$1;
         
         var fmt_rest$11=match[2];
         
         var str=match[1];
         
         var match$27=type_format_gen(fmt_rest$11,fmtty_rest$12);
         
         var fmtty$prime$11=match$27[2];
         
         var fmt$prime$11=match$27[1];
         
         return /* Fmt_fmtty_EBB */[0,
                 /* String_literal */[11,str,fmt$prime$11],
                 fmtty$prime$11];
         
        case 12:
         var fmtty_rest$13=match$1;
         
         var fmt_rest$12=match[2];
         
         var chr=match[1];
         
         var match$28=type_format_gen(fmt_rest$12,fmtty_rest$13);
         
         var fmtty$prime$12=match$28[2];
         
         var fmt$prime$12=match$28[1];
         
         return /* Fmt_fmtty_EBB */[0,
                 /* Char_literal */[12,chr,fmt$prime$12],
                 fmtty$prime$12];
         
        case 13:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 8:
              var fmtty_rest$14=match$1[2];
              
              var sub_fmtty$prime=match$1[1];
              
              var fmt_rest$13=match[3];
              
              var sub_fmtty=match[2];
              
              var pad_opt=match[1];
              
              if
               (CamlPrimtivie["caml_notequal"]
                 (/* Fmtty_EBB */[0,sub_fmtty],
                  /* Fmtty_EBB */[0,sub_fmtty$prime]))
               {throw Type_mismatch;}
              else
               {}
              
              var match$29=type_format_gen(fmt_rest$13,fmtty_rest$14);
              
              var fmtty$prime$13=match$29[2];
              
              var fmt$prime$13=match$29[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Format_arg */[13,pad_opt,sub_fmtty$prime,fmt$prime$13],
                      fmtty$prime$13];
              
             default:exit=293;}}
         
        case 14:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 9:
              var fmtty_rest$15=match$1[3];
              
              var sub_fmtty1=match$1[1];
              
              var fmt_rest$14=match[3];
              
              var sub_fmtty$1=match[2];
              
              var pad_opt$1=match[1];
              
              if
               (CamlPrimtivie["caml_notequal"]
                 (/* Fmtty_EBB */[0,
                   CamlinternalFormatBasics["erase_rel"](sub_fmtty$1)],
                  /* Fmtty_EBB */[0,
                   CamlinternalFormatBasics["erase_rel"](sub_fmtty1)]))
               {throw Type_mismatch;}
              else
               {}
              
              var
               match$30=
                type_format_gen
                 (fmt_rest$14,
                  CamlinternalFormatBasics["erase_rel"](fmtty_rest$15));
              
              var fmtty$prime$14=match$30[2];
              
              var fmt$prime$14=match$30[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Format_subst */[14,pad_opt$1,sub_fmtty1,fmt$prime$14],
                      fmtty$prime$14];
              
             default:exit=293;}}
         
        case 15:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 10:
              var fmtty_rest$16=match$1[1];
              
              var fmt_rest$15=match[1];
              
              var match$31=type_format_gen(fmt_rest$15,fmtty_rest$16);
              
              var fmtty$prime$15=match$31[2];
              
              var fmt$prime$15=match$31[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Alpha */[15,fmt$prime$15],
                      fmtty$prime$15];
              
             default:exit=293;}}
         
        case 16:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 11:
              var fmtty_rest$17=match$1[1];
              
              var fmt_rest$16=match[1];
              
              var match$32=type_format_gen(fmt_rest$16,fmtty_rest$17);
              
              var fmtty$prime$16=match$32[2];
              
              var fmt$prime$16=match$32[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Theta */[16,fmt$prime$16],
                      fmtty$prime$16];
              
             default:exit=293;}}
         
        case 17:
         var fmtty_rest$18=match$1;
         
         var fmt_rest$17=match[2];
         
         var formatting_lit=match[1];
         
         var match$33=type_format_gen(fmt_rest$17,fmtty_rest$18);
         
         var fmtty$prime$17=match$33[2];
         
         var fmt$prime$17=match$33[1];
         
         return /* Fmt_fmtty_EBB */[0,
                 /* Formatting_lit */[17,formatting_lit,fmt$prime$17],
                 fmtty$prime$17];
         
        case 18:
         var fmtty_rest$19=match$1;
         
         var fmt_rest$18=match[2];
         
         var formatting_gen=match[1];
         
         return type_formatting_gen(formatting_gen,fmt_rest$18,fmtty_rest$19);
         
        case 19:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 13:
              var fmtty_rest$20=match$1[1];
              
              var fmt_rest$19=match[1];
              
              var match$34=type_format_gen(fmt_rest$19,fmtty_rest$20);
              
              var fmtty$prime$18=match$34[2];
              
              var fmt$prime$18=match$34[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Reader */[19,fmt$prime$18],
                      fmtty$prime$18];
              
             default:exit=293;}}
         
        case 20:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 1:
              var fmtty_rest$21=match$1[1];
              
              var fmt_rest$20=match[3];
              
              var char_set=match[2];
              
              var width_opt=match[1];
              
              var match$35=type_format_gen(fmt_rest$20,fmtty_rest$21);
              
              var fmtty$prime$19=match$35[2];
              
              var fmt$prime$19=match$35[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Scan_char_set */[20,width_opt,char_set,fmt$prime$19],
                      fmtty$prime$19];
              
             default:exit=293;}}
         
        case 21:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 2:
              var fmtty_rest$22=match$1[1];
              
              var fmt_rest$21=match[2];
              
              var counter=match[1];
              
              var match$36=type_format_gen(fmt_rest$21,fmtty_rest$22);
              
              var fmtty$prime$20=match$36[2];
              
              var fmt$prime$20=match$36[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Scan_get_counter */[21,counter,fmt$prime$20],
                      fmtty$prime$20];
              
             default:exit=293;}}
         
        case 22:exit=293;
        case 23:
         var fmtty_rest$23=match$1;
         
         var rest=match[2];
         
         var ign=match[1];
         
         return type_ignored_param(ign,rest,fmtty_rest$23);
         
        case 24:exit=293;
        }}
    
    switch(exit){case 293:throw Type_mismatch;}
    };

var
 type_formatting_gen=
  function(formatting_gen,fmt0,fmtty0)
   {switch(formatting_gen[0])
     {case 0:
       var match=formatting_gen[1];
       
       var str=match[2];
       
       var fmt1=match[1];
       
       var match$1=type_format_gen(fmt1,fmtty0);
       
       var fmtty2=match$1[2];
       
       var fmt2=match$1[1];
       
       var match$2=type_format_gen(fmt0,fmtty2);
       
       var fmtty3=match$2[2];
       
       var fmt3=match$2[1];
       
       return /* Fmt_fmtty_EBB */[0,
               /* Formatting_gen */[18,
                /* Open_tag */[0,/* Format */[0,fmt2,str]],
                fmt3],
               fmtty3];
       
      case 1:
       var match$3=formatting_gen[1];
       
       var str$1=match$3[2];
       
       var fmt1$1=match$3[1];
       
       var match$4=type_format_gen(fmt1$1,fmtty0);
       
       var fmtty2$1=match$4[2];
       
       var fmt2$1=match$4[1];
       
       var match$5=type_format_gen(fmt0,fmtty2$1);
       
       var fmtty3$1=match$5[2];
       
       var fmt3$1=match$5[1];
       
       return /* Fmt_fmtty_EBB */[0,
               /* Formatting_gen */[18,
                /* Open_box */[1,/* Format */[0,fmt2$1,str$1]],
                fmt3$1],
               fmtty3$1];
       
      }
    };

var
 type_ignored_param=
  function(ign,fmt,fmtty)
   {if(typeof ign=="number")
     {switch(ign)
       {case 0:
         var ign$prime=ign;return type_ignored_param_one(ign$prime,fmt,fmtty);
        case 1:
         var ign$prime$1=ign;
         
         return type_ignored_param_one(ign$prime$1,fmt,fmtty);
         
        case 2:
         var ign$prime$2=ign;
         
         return type_ignored_param_one(ign$prime$2,fmt,fmtty);
         
        case 3:
         var exit;
         
         if(typeof fmtty=="number")
          {switch(fmtty){}}
         else
          {switch(fmtty[0])
            {case 14:
              var fmtty_rest=fmtty[1];
              
              var match=type_format_gen(fmt,fmtty_rest);
              
              var fmtty$prime=match[2];
              
              var fmt$prime=match[1];
              
              return /* Fmt_fmtty_EBB */[0,
                      /* Ignored_param */[23,/* Ignored_reader */3,fmt$prime],
                      fmtty$prime];
              
             default:exit=294;}}
         
         switch(exit){case 294:throw Type_mismatch;}
         
        case 4:
         var ign$prime$3=ign;
         
         return type_ignored_param_one(ign$prime$3,fmt,fmtty);
         
        }}
    else
     {switch(ign[0])
       {case 0:
         var ign$prime$4=ign;
         
         return type_ignored_param_one(ign$prime$4,fmt,fmtty);
         
        case 1:
         var ign$prime$5=ign;
         
         return type_ignored_param_one(ign$prime$5,fmt,fmtty);
         
        case 2:
         var ign$prime$6=ign;
         
         return type_ignored_param_one(ign$prime$6,fmt,fmtty);
         
        case 3:
         var ign$prime$7=ign;
         
         return type_ignored_param_one(ign$prime$7,fmt,fmtty);
         
        case 4:
         var ign$prime$8=ign;
         
         return type_ignored_param_one(ign$prime$8,fmt,fmtty);
         
        case 5:
         var ign$prime$9=ign;
         
         return type_ignored_param_one(ign$prime$9,fmt,fmtty);
         
        case 6:
         var ign$prime$10=ign;
         
         return type_ignored_param_one(ign$prime$10,fmt,fmtty);
         
        case 7:
         var sub_fmtty=ign[2];
         
         var pad_opt=ign[1];
         
         return type_ignored_param_one
                 (/* Ignored_format_arg */[7,pad_opt,sub_fmtty],fmt,fmtty);
         
        case 8:
         var sub_fmtty$1=ign[2];
         
         var pad_opt$1=ign[1];
         
         var match$1=type_ignored_format_substitution(sub_fmtty$1,fmt,fmtty);
         
         var match$2=match$1[2];
         
         var fmtty$prime$1=match$2[2];
         
         var fmt$prime$1=match$2[1];
         
         var sub_fmtty$prime=match$1[1];
         
         return /* Fmt_fmtty_EBB */[0,
                 /* Ignored_param */[23,
                  /* Ignored_format_subst */[8,pad_opt$1,sub_fmtty$prime],
                  fmt$prime$1],
                 fmtty$prime$1];
         
        case 9:
         var ign$prime$11=ign;
         
         return type_ignored_param_one(ign$prime$11,fmt,fmtty);
         
        case 10:
         var ign$prime$12=ign;
         
         return type_ignored_param_one(ign$prime$12,fmt,fmtty);
         
        }}
    };

var
 type_ignored_param_one=
  function(ign,fmt,fmtty)
   {var match=type_format_gen(fmt,fmtty);
    
    var fmtty$prime=match[2];
    
    var fmt$prime=match[1];
    
    return /* Fmt_fmtty_EBB */[0,
            /* Ignored_param */[23,ign,fmt$prime],
            fmtty$prime];
    };

var
 type_ignored_format_substitution=
  function(sub_fmtty,fmt,fmtty)
   {var match=sub_fmtty;
    
    var match$1=fmtty;
    
    var exit;
    
    if(typeof match=="number")
     {switch(match)
       {case 0:
         var fmtty$1=match$1;
         
         return /* Fmtty_fmt_EBB */[0,
                 /* End_of_fmtty */0,
                 type_format_gen(fmt,fmtty$1)];
         
        }}
    else
     {switch(match[0])
       {case 0:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 0:
              var fmtty_rest=match$1[1];
              
              var sub_fmtty_rest=match[1];
              
              var
               match$2=
                type_ignored_format_substitution
                 (sub_fmtty_rest,fmt,fmtty_rest);
              
              var fmt$prime=match$2[2];
              
              var sub_fmtty_rest$prime=match$2[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Char_ty */[0,sub_fmtty_rest$prime],
                      fmt$prime];
              
             default:exit=297;}}
         
        case 1:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 1:
              var fmtty_rest$1=match$1[1];
              
              var sub_fmtty_rest$1=match[1];
              
              var
               match$3=
                type_ignored_format_substitution
                 (sub_fmtty_rest$1,fmt,fmtty_rest$1);
              
              var fmt$prime$1=match$3[2];
              
              var sub_fmtty_rest$prime$1=match$3[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* String_ty */[1,sub_fmtty_rest$prime$1],
                      fmt$prime$1];
              
             default:exit=297;}}
         
        case 2:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 2:
              var fmtty_rest$2=match$1[1];
              
              var sub_fmtty_rest$2=match[1];
              
              var
               match$4=
                type_ignored_format_substitution
                 (sub_fmtty_rest$2,fmt,fmtty_rest$2);
              
              var fmt$prime$2=match$4[2];
              
              var sub_fmtty_rest$prime$2=match$4[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Int_ty */[2,sub_fmtty_rest$prime$2],
                      fmt$prime$2];
              
             default:exit=297;}}
         
        case 3:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 3:
              var fmtty_rest$3=match$1[1];
              
              var sub_fmtty_rest$3=match[1];
              
              var
               match$5=
                type_ignored_format_substitution
                 (sub_fmtty_rest$3,fmt,fmtty_rest$3);
              
              var fmt$prime$3=match$5[2];
              
              var sub_fmtty_rest$prime$3=match$5[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Int32_ty */[3,sub_fmtty_rest$prime$3],
                      fmt$prime$3];
              
             default:exit=297;}}
         
        case 4:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 4:
              var fmtty_rest$4=match$1[1];
              
              var sub_fmtty_rest$4=match[1];
              
              var
               match$6=
                type_ignored_format_substitution
                 (sub_fmtty_rest$4,fmt,fmtty_rest$4);
              
              var fmt$prime$4=match$6[2];
              
              var sub_fmtty_rest$prime$4=match$6[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Nativeint_ty */[4,sub_fmtty_rest$prime$4],
                      fmt$prime$4];
              
             default:exit=297;}}
         
        case 5:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 5:
              var fmtty_rest$5=match$1[1];
              
              var sub_fmtty_rest$5=match[1];
              
              var
               match$7=
                type_ignored_format_substitution
                 (sub_fmtty_rest$5,fmt,fmtty_rest$5);
              
              var fmt$prime$5=match$7[2];
              
              var sub_fmtty_rest$prime$5=match$7[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Int64_ty */[5,sub_fmtty_rest$prime$5],
                      fmt$prime$5];
              
             default:exit=297;}}
         
        case 6:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 6:
              var fmtty_rest$6=match$1[1];
              
              var sub_fmtty_rest$6=match[1];
              
              var
               match$8=
                type_ignored_format_substitution
                 (sub_fmtty_rest$6,fmt,fmtty_rest$6);
              
              var fmt$prime$6=match$8[2];
              
              var sub_fmtty_rest$prime$6=match$8[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Float_ty */[6,sub_fmtty_rest$prime$6],
                      fmt$prime$6];
              
             default:exit=297;}}
         
        case 7:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 7:
              var fmtty_rest$7=match$1[1];
              
              var sub_fmtty_rest$7=match[1];
              
              var
               match$9=
                type_ignored_format_substitution
                 (sub_fmtty_rest$7,fmt,fmtty_rest$7);
              
              var fmt$prime$7=match$9[2];
              
              var sub_fmtty_rest$prime$7=match$9[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Bool_ty */[7,sub_fmtty_rest$prime$7],
                      fmt$prime$7];
              
             default:exit=297;}}
         
        case 8:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 8:
              var fmtty_rest$8=match$1[2];
              
              var sub2_fmtty$prime=match$1[1];
              
              var sub_fmtty_rest$8=match[2];
              
              var sub2_fmtty=match[1];
              
              if
               (CamlPrimtivie["caml_notequal"]
                 (/* Fmtty_EBB */[0,sub2_fmtty],
                  /* Fmtty_EBB */[0,sub2_fmtty$prime]))
               {throw Type_mismatch;}
              else
               {}
              
              var
               match$10=
                type_ignored_format_substitution
                 (sub_fmtty_rest$8,fmt,fmtty_rest$8);
              
              var fmt$prime$8=match$10[2];
              
              var sub_fmtty_rest$prime$8=match$10[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Format_arg_ty */[8,
                       sub2_fmtty$prime,
                       sub_fmtty_rest$prime$8],
                      fmt$prime$8];
              
             default:exit=297;}}
         
        case 9:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 9:
              var fmtty_rest$9=match$1[3];
              
              var sub2_fmtty$prime$1=match$1[2];
              
              var sub1_fmtty$prime=match$1[1];
              
              var sub_fmtty_rest$9=match[3];
              
              var sub2_fmtty$1=match[2];
              
              var sub1_fmtty=match[1];
              
              if
               (CamlPrimtivie["caml_notequal"]
                 (/* Fmtty_EBB */[0,
                   CamlinternalFormatBasics["erase_rel"](sub1_fmtty)],
                  /* Fmtty_EBB */[0,
                   CamlinternalFormatBasics["erase_rel"](sub1_fmtty$prime)]))
               {throw Type_mismatch;}
              else
               {}
              
              if
               (CamlPrimtivie["caml_notequal"]
                 (/* Fmtty_EBB */[0,
                   CamlinternalFormatBasics["erase_rel"](sub2_fmtty$1)],
                  /* Fmtty_EBB */[0,
                   CamlinternalFormatBasics["erase_rel"](sub2_fmtty$prime$1)]))
               {throw Type_mismatch;}
              else
               {}
              
              var
               sub_fmtty$prime=
                trans(symm(sub1_fmtty$prime),sub2_fmtty$prime$1);
              
              var match$11=fmtty_rel_det(sub_fmtty$prime);
              
              var f4=match$11[4];
              
              var f2=match$11[2];
              
              var match$12=f2(/* Refl */0);
              
              var match$13=f4(/* Refl */0);
              
              var
               match$14=
                type_ignored_format_substitution
                 (CamlinternalFormatBasics["erase_rel"](sub_fmtty_rest$9),
                  fmt,
                  fmtty_rest$9);
              
              var fmt$prime$9=match$14[2];
              
              var sub_fmtty_rest$prime$9=match$14[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Format_subst_ty */[9,
                       sub1_fmtty$prime,
                       sub2_fmtty$prime$1,
                       symm(sub_fmtty_rest$prime$9)],
                      fmt$prime$9];
              
             default:exit=297;}}
         
        case 10:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 10:
              var fmtty_rest$10=match$1[1];
              
              var sub_fmtty_rest$10=match[1];
              
              var
               match$15=
                type_ignored_format_substitution
                 (sub_fmtty_rest$10,fmt,fmtty_rest$10);
              
              var fmt$prime$10=match$15[2];
              
              var sub_fmtty_rest$prime$10=match$15[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Alpha_ty */[10,sub_fmtty_rest$prime$10],
                      fmt$prime$10];
              
             default:exit=297;}}
         
        case 11:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 11:
              var fmtty_rest$11=match$1[1];
              
              var sub_fmtty_rest$11=match[1];
              
              var
               match$16=
                type_ignored_format_substitution
                 (sub_fmtty_rest$11,fmt,fmtty_rest$11);
              
              var fmt$prime$11=match$16[2];
              
              var sub_fmtty_rest$prime$11=match$16[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Theta_ty */[11,sub_fmtty_rest$prime$11],
                      fmt$prime$11];
              
             default:exit=297;}}
         
        case 12:exit=297;
        case 13:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 13:
              var fmtty_rest$12=match$1[1];
              
              var sub_fmtty_rest$12=match[1];
              
              var
               match$17=
                type_ignored_format_substitution
                 (sub_fmtty_rest$12,fmt,fmtty_rest$12);
              
              var fmt$prime$12=match$17[2];
              
              var sub_fmtty_rest$prime$12=match$17[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Reader_ty */[13,sub_fmtty_rest$prime$12],
                      fmt$prime$12];
              
             default:exit=297;}}
         
        case 14:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 14:
              var fmtty_rest$13=match$1[1];
              
              var sub_fmtty_rest$13=match[1];
              
              var
               match$18=
                type_ignored_format_substitution
                 (sub_fmtty_rest$13,fmt,fmtty_rest$13);
              
              var fmt$prime$13=match$18[2];
              
              var sub_fmtty_rest$prime$13=match$18[1];
              
              return /* Fmtty_fmt_EBB */[0,
                      /* Ignored_reader_ty */[14,sub_fmtty_rest$prime$13],
                      fmt$prime$13];
              
             default:exit=297;}}
         
        }}
    
    switch(exit){case 297:throw Type_mismatch;}
    };

var
 recast=
  function(fmt,fmtty)
   {return type_format(fmt,CamlinternalFormatBasics["erase_rel"](symm(fmtty)));
    };

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
     {return str;}
    else
     {var res=Bytes["make"](width$1,(padty$1=/* Zeros */2)?48:32);
      
      switch(padty$1)
       {case 0:$$String["blit"](str,0,res,0,len);
        case 1:$$String["blit"](str,0,res,width$1-len,len);
        case 2:
         if(len>0&&((str[0]=43)||(str[0]=45)||(str[0]=32)))
          {res[0]=str[0],0,$$String["blit"](str,1,res,width$1-len+1,len-1)}
         else
          {if(len>1&&(str[0]=48)&&((str[1]=120)||(str[1]=88)))
            {res[1]=str[1],0,$$String["blit"](str,2,res,width$1-len+2,len-2)}
           else
            {$$String["blit"](str,0,res,width$1-len,len)}
           }
         
        }
      
      return Bytes["unsafe_to_string"](res);
      }
    };

var
 fix_int_precision=
  function(prec,str)
   {var prec$1=Pervasives["abs"](prec);
    
    var len=str["length"];
    
    var c=str[0];
    
    var exit;
    
    if(c>=58)
     {if(c>=71)
       {var switcher=-97+c;if(5<switcher>>>0){exit=274;}else{exit=276;}}
      else
       {if(c>=65){exit=276;}else{exit=274;}}
      }
    else
     {if(c!=32)
       {if(c>=43)
         {var switcher$1=-43+c;
          
          switch(switcher$1)
           {case 0:exit=275;
            case 1:exit=274;
            case 2:exit=275;
            case 3:exit=274;
            case 4:exit=274;
            case 5:
             if(prec$1+2>len&&len>1&&((str[1]=120)||(str[1]=88)))
              {var res=Bytes["make"](prec$1+2,48);
               
               res[1]=str[1],0;
               $$String["blit"](str,2,res,prec$1-len+4,len-2);
               return Bytes["unsafe_to_string"](res);
               }
             else
              {exit=276;}
             
            case 6:exit=276;
            case 7:exit=276;
            case 8:exit=276;
            case 9:exit=276;
            case 10:exit=276;
            case 11:exit=276;
            case 12:exit=276;
            case 13:exit=276;
            case 14:exit=276;
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
         
         res$1[0]=c,0;
         $$String["blit"](str,1,res$1,prec$1-len+2,len-1);
         return Bytes["unsafe_to_string"](res$1);
         }
       else
        {exit=274;}
       
      case 276:
       if(prec$1>len)
        {var res$2=Bytes["make"](prec$1,48);
         
         $$String["blit"](str,0,res$2,prec$1-len,len);
         return Bytes["unsafe_to_string"](res$2);
         }
       else
        {exit=274;}
       
      case 274:return str;
      }
    };

var
 string_to_caml_string=
  function(str)
   {return $$String["concat"]
            ($$String["escaped"](str),
             [/* :: */0,'"',[/* :: */0,'"',/* [] */0]]);
    };

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
      case 12:return "%u";
      }
    };

var
 format_of_aconv=
  function(iconv,c)
   {switch(iconv)
     {case 0:var seps=[/* :: */0,"%",[/* :: */0,"d",/* [] */0]];
      case 1:var seps=[/* :: */0,"%+",[/* :: */0,"d",/* [] */0]];
      case 2:var seps=[/* :: */0,"% ",[/* :: */0,"d",/* [] */0]];
      case 3:var seps=[/* :: */0,"%",[/* :: */0,"i",/* [] */0]];
      case 4:var seps=[/* :: */0,"%+",[/* :: */0,"i",/* [] */0]];
      case 5:var seps=[/* :: */0,"% ",[/* :: */0,"i",/* [] */0]];
      case 6:var seps=[/* :: */0,"%",[/* :: */0,"x",/* [] */0]];
      case 7:var seps=[/* :: */0,"%#",[/* :: */0,"x",/* [] */0]];
      case 8:var seps=[/* :: */0,"%",[/* :: */0,"X",/* [] */0]];
      case 9:var seps=[/* :: */0,"%#",[/* :: */0,"X",/* [] */0]];
      case 10:var seps=[/* :: */0,"%",[/* :: */0,"o",/* [] */0]];
      case 11:var seps=[/* :: */0,"%#",[/* :: */0,"o",/* [] */0]];
      case 12:var seps=[/* :: */0,"%",[/* :: */0,"u",/* [] */0]];
      }
    
    return $$String["concat"]($$String["make"](1,c),seps);
    };

var
 format_of_fconv=
  function(fconv,prec)
   {if(fconv=/* Float_F */15)
     {return "%.12g";}
    else
     {var prec$1=Pervasives["abs"](prec);
      
      var symb=char_of_fconv(fconv);
      
      var buf=buffer_create(16);
      
      buffer_add_char(buf,37);
      bprint_fconv_flag(buf,fconv);
      buffer_add_char(buf,46);
      buffer_add_string(buf,Pervasives["string_of_int"](prec$1));
      buffer_add_char(buf,symb);
      return buffer_contents(buf);
      }
    };

var
 convert_int=
  function(iconv,n)
   {return CamlPrimtivie["caml_format_int"](format_of_iconv(iconv),n);};

var
 convert_int32=
  function(iconv,n)
   {return CamlPrimtivie["caml_int32_format"](format_of_aconv(iconv,108),n);};

var
 convert_nativeint=
  function(iconv,n)
   {return CamlPrimtivie["caml_nativeint_format"]
            (format_of_aconv(iconv,110),n);
    };

var
 convert_int64=
  function(iconv,n)
   {return CamlPrimtivie["caml_int64_format"](format_of_aconv(iconv,76),n);};

var
 convert_float=
  function(fconv,prec,x)
   {var prec$1=Pervasives["abs"](prec);
    
    var
     str=
      CamlPrimtivie["caml_format_float"](format_of_fconv(fconv,prec$1),x);
    
    if(fconv!=/* Float_F */15)
     {return str;}
    else
     {var len=str["length"];
      
      var
       is_valid=
        function(i)
         {if(i=len)
           {return /* false */0;}
          else
           {var match=str[i];
            
            var exit;
            
            var switcher=-46+match;
            
            if(!(23<switcher>>>0))
             {var switcher$1=-1+switcher;
              
              if(21<switcher$1>>>0){exit=253;}else{exit=254;}
              }
            else
             {if(switcher!=55){exit=254;}else{exit=253;}}
            
            switch(exit)
             {case 254:return is_valid(i+1);case 253:return /* true */1;}
            }
          };
      
      var match=CamlPrimtivie["caml_classify_float"](x);
      
      if(match!=3)
       {if(match>=4)
         {return "nan";}
        else
         {if(is_valid(0)){return str;}else{return Pervasives["^"](str,".");}}
        }
      else
       {if(x<0){return "neg_infinity";}else{return "infinity";}}
      }
    };

var
 format_caml_char=
  function(c)
   {return $$String["concat"]
            (Char["escaped"](c),[/* :: */0,"'",[/* :: */0,"'",/* [] */0]]);
    };

var
 string_of_fmtty=
  function(fmtty)
   {var buf=buffer_create(16);
    
    bprint_fmtty(buf,fmtty);
    return buffer_contents(buf);
    };

var
 make_printf=
  function(k,o,acc,fmt)
   {if(typeof fmt=="number")
     {switch(fmt){case 0:return k(o,acc);}}
    else
     {switch(fmt[0])
       {case 0:
         var rest=fmt[1];
         
         return function(c)
          {var new_acc=/* Acc_data_char */[5,acc,c];
           
           return make_printf(k,o,new_acc,rest);
           };
         
        case 1:
         var rest$1=fmt[1];
         
         return function(c)
          {var new_acc=/* Acc_data_string */[4,acc,format_caml_char(c)];
           
           return make_printf(k,o,new_acc,rest$1);
           };
         
        case 2:
         var rest$2=fmt[2];
         
         var pad=fmt[1];
         
         return make_string_padding
                 (k,o,acc,rest$2,pad,function(str){return str;});
         
        case 3:
         var rest$3=fmt[2];
         
         var pad$1=fmt[1];
         
         return make_string_padding
                 (k,o,acc,rest$3,pad$1,string_to_caml_string);
         
        case 4:
         var rest$4=fmt[4];
         
         var prec=fmt[3];
         
         var pad$2=fmt[2];
         
         var iconv=fmt[1];
         
         return make_int_padding_precision
                 (k,o,acc,rest$4,pad$2,prec,convert_int,iconv);
         
        case 5:
         var rest$5=fmt[4];
         
         var prec$1=fmt[3];
         
         var pad$3=fmt[2];
         
         var iconv$1=fmt[1];
         
         return make_int_padding_precision
                 (k,o,acc,rest$5,pad$3,prec$1,convert_int32,iconv$1);
         
        case 6:
         var rest$6=fmt[4];
         
         var prec$2=fmt[3];
         
         var pad$4=fmt[2];
         
         var iconv$2=fmt[1];
         
         return make_int_padding_precision
                 (k,o,acc,rest$6,pad$4,prec$2,convert_nativeint,iconv$2);
         
        case 7:
         var rest$7=fmt[4];
         
         var prec$3=fmt[3];
         
         var pad$5=fmt[2];
         
         var iconv$3=fmt[1];
         
         return make_int_padding_precision
                 (k,o,acc,rest$7,pad$5,prec$3,convert_int64,iconv$3);
         
        case 8:
         var rest$8=fmt[4];
         
         var prec$4=fmt[3];
         
         var pad$6=fmt[2];
         
         var fconv=fmt[1];
         
         return make_float_padding_precision
                 (k,o,acc,rest$8,pad$6,prec$4,fconv);
         
        case 9:
         var rest$9=fmt[1];
         
         return function(b)
          {return make_printf
                   (k,
                    o,
                    /* Acc_data_string */[4,acc,Pervasives["string_of_bool"](b)],
                    rest$9);
           };
         
        case 10:
         var rest$10=fmt[1];
         
         return make_printf(k,o,/* Acc_flush */[7,acc],rest$10);
         
        case 11:
         var rest$11=fmt[2];
         
         var str=fmt[1];
         
         return make_printf(k,o,/* Acc_string_literal */[2,acc,str],rest$11);
         
        case 12:
         var rest$12=fmt[2];
         
         var chr=fmt[1];
         
         return make_printf(k,o,/* Acc_char_literal */[3,acc,chr],rest$12);
         
        case 13:
         var rest$13=fmt[3];
         
         var sub_fmtty=fmt[2];
         
         var ty=string_of_fmtty(sub_fmtty);
         
         return function(str)
          {return make_printf(k,o,/* Acc_data_string */[4,acc,ty],rest$13);};
         
        case 14:
         var rest$14=fmt[3];
         
         var fmtty=fmt[2];
         
         return function(param)
          {var fmt$1=param[1];
           
           return make_printf
                   (k,
                    o,
                    acc,
                    CamlinternalFormatBasics["concat_fmt"]
                     (recast(fmt$1,fmtty),rest$14));
           };
         
        case 15:
         var rest$15=fmt[1];
         
         return function(f,x)
          {return make_printf
                   (k,
                    o,
                    /* Acc_delay */[6,acc,function(o){return f(o,x);}],
                    rest$15);
           };
         
        case 16:
         var rest$16=fmt[1];
         
         return function(f)
          {return make_printf(k,o,/* Acc_delay */[6,acc,f],rest$16);};
         
        case 17:
         var rest$17=fmt[2];
         
         var fmting_lit=fmt[1];
         
         return make_printf
                 (k,o,/* Acc_formatting_lit */[0,acc,fmting_lit],rest$17);
         
        case 18:
         var match=fmt[1];
         
         switch(match[0])
          {case 0:
            var rest$18=fmt[2];
            
            var match$1=match[1];
            
            var fmt$prime=match$1[1];
            
            var
             k$prime=
              function(koc,kacc)
               {return make_printf
                        (k,
                         koc,
                         /* Acc_formatting_gen */[1,acc,/* Acc_open_tag */[0,kacc]],
                         rest$18);
                };
            
            return make_printf(k$prime,o,/* End_of_acc */0,fmt$prime);
            
           case 1:
            var rest$19=fmt[2];
            
            var match$2=match[1];
            
            var fmt$prime$1=match$2[1];
            
            var
             k$prime$1=
              function(koc,kacc)
               {return make_printf
                        (k,
                         koc,
                         /* Acc_formatting_gen */[1,acc,/* Acc_open_box */[1,kacc]],
                         rest$19);
                };
            
            return make_printf(k$prime$1,o,/* End_of_acc */0,fmt$prime$1);
            
           }
         
        case 19:throw [0,Assert_failure,[0,"camlinternalFormat.ml",1449,4]];
        case 20:
         var rest$20=fmt[3];
         
         var new_acc=/* Acc_invalid_arg */[8,acc,"Printf: bad conversion %["];
         
         return function(param){return make_printf(k,o,new_acc,rest$20);};
         
        case 21:
         var rest$21=fmt[2];
         
         return function(n)
          {var
            new_acc$1=
             /* Acc_data_string */[4,
              acc,
              CamlPrimtivie["caml_format_int"]("%u",n)];
           
           return make_printf(k,o,new_acc$1,rest$21);
           };
         
        case 22:
         var rest$22=fmt[1];
         
         return function(c)
          {var new_acc$1=/* Acc_data_char */[5,acc,c];
           
           return make_printf(k,o,new_acc$1,rest$22);
           };
         
        case 23:
         var rest$23=fmt[2];
         
         var ign=fmt[1];
         
         return make_ignored_param(k,o,acc,ign,rest$23);
         
        case 24:
         var rest$24=fmt[3];
         
         var f=fmt[2];
         
         var arity=fmt[1];
         
         return make_custom(k,o,acc,rest$24,arity,f(/* () */0));
         
        }}
    };

var
 make_ignored_param=
  function(k,o,acc,ign,fmt)
   {if(typeof ign=="number")
     {switch(ign)
       {case 0:return make_invalid_arg(k,o,acc,fmt);
        case 1:return make_invalid_arg(k,o,acc,fmt);
        case 2:return make_invalid_arg(k,o,acc,fmt);
        case 3:throw [0,Assert_failure,[0,"camlinternalFormat.ml",1517,39]];
        case 4:return make_invalid_arg(k,o,acc,fmt);
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
        case 8:var fmtty=ign[2];return make_from_fmtty(k,o,acc,fmtty,fmt);
        case 9:return make_invalid_arg(k,o,acc,fmt);
        case 10:return make_invalid_arg(k,o,acc,fmt);
        }}
    };

var
 make_from_fmtty=
  function(k,o,acc,fmtty,fmt)
   {if(typeof fmtty=="number")
     {switch(fmtty){case 0:return make_invalid_arg(k,o,acc,fmt);}}
    else
     {switch(fmtty[0])
       {case 0:
         var rest=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest,fmt);};
         
        case 1:
         var rest$1=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$1,fmt);};
         
        case 2:
         var rest$2=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$2,fmt);};
         
        case 3:
         var rest$3=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$3,fmt);};
         
        case 4:
         var rest$4=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$4,fmt);};
         
        case 5:
         var rest$5=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$5,fmt);};
         
        case 6:
         var rest$6=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$6,fmt);};
         
        case 7:
         var rest$7=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$7,fmt);};
         
        case 8:
         var rest$8=fmtty[2];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$8,fmt);};
         
        case 9:
         var rest$9=fmtty[3];
         
         var ty2=fmtty[2];
         
         var ty1=fmtty[1];
         
         var ty=trans(symm(ty1),ty2);
         
         return function(param)
          {return make_from_fmtty
                   (k,
                    o,
                    acc,
                    CamlinternalFormatBasics["concat_fmtty"](ty,rest$9),
                    fmt);
           };
         
        case 10:
         var rest$10=fmtty[1];
         
         return function(param,param$1)
          {return make_from_fmtty(k,o,acc,rest$10,fmt);};
         
        case 11:
         var rest$11=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$11,fmt);};
         
        case 12:
         var rest$12=fmtty[1];
         
         return function(param){return make_from_fmtty(k,o,acc,rest$12,fmt);};
         
        case 13:throw [0,Assert_failure,[0,"camlinternalFormat.ml",1540,31]];
        case 14:throw [0,Assert_failure,[0,"camlinternalFormat.ml",1541,31]];
        }}
    };

var
 make_invalid_arg=
  function(k,o,acc,fmt)
   {return make_printf
            (k,o,/* Acc_invalid_arg */[8,acc,"Printf: bad conversion %_"],fmt);
    };

var
 make_string_padding=
  function(k,o,acc,fmt,pad,trans)
   {if(typeof pad=="number")
     {switch(pad)
       {case 0:
         return function(x)
          {var new_acc=/* Acc_data_string */[4,acc,trans(x)];
           
           return make_printf(k,o,new_acc,fmt);
           };
         
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
           
           return make_printf(k,o,new_acc,fmt);
           };
         
        case 1:
         var padty$1=pad[1];
         
         return function(w,x)
          {var
            new_acc=
             /* Acc_data_string */[4,acc,fix_padding(padty$1,w,trans(x))];
           
           return make_printf(k,o,new_acc,fmt);
           };
         
        }}
    };

var
 make_int_padding_precision=
  function(k,o,acc,fmt,pad,prec,trans,iconv)
   {var match=pad;
    
    var match$1=prec;
    
    if(typeof match=="number")
     {switch(match)
       {case 0:
         if(typeof match$1==="number")
          {if(match$1!=0)
            {return function(p,x)
              {var str=fix_int_precision(p,trans(iconv,x));
               
               return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
               };
             }
           else
            {return function(x)
              {var str=trans(iconv,x);
               
               return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
               };
             }
           }
         else
          {var p=match$1[1];
           
           return function(x)
            {var str=fix_int_precision(p,trans(iconv,x));
             
             return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
             };
           }
         
        }}
    else
     {switch(match[0])
       {case 0:
         var w=match[2];
         
         var padty=match[1];
         
         if(typeof match$1==="number")
          {if(match$1!=0)
            {var w$1=w;
             
             var padty$1=padty;
             
             return function(p,x)
              {var
                str=
                 fix_padding(padty$1,w$1,fix_int_precision(p,trans(iconv,x)));
               
               return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
               };
             }
           else
            {return function(x)
              {var str=fix_padding(padty,w,trans(iconv,x));
               
               return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
               };
             }
           }
         else
          {var w$2=w;
           
           var padty$2=padty;
           
           var p$1=match$1[1];
           
           return function(x)
            {var
              str=
               fix_padding(padty$2,w$2,fix_int_precision(p$1,trans(iconv,x)));
             
             return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
             };
           }
         
        case 1:
         var padty$3=match[1];
         
         if(typeof match$1==="number")
          {if(match$1!=0)
            {var padty$4=padty$3;
             
             return function(w,p,x)
              {var
                str=
                 fix_padding(padty$4,w,fix_int_precision(p,trans(iconv,x)));
               
               return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
               };
             }
           else
            {return function(w,x)
              {var str=fix_padding(padty$3,w,trans(iconv,x));
               
               return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
               };
             }
           }
         else
          {var padty$5=padty$3;
           
           var p$2=match$1[1];
           
           return function(w,x)
            {var
              str=
               fix_padding(padty$5,w,fix_int_precision(p$2,trans(iconv,x)));
             
             return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
             };
           }
         
        }}
    };

var
 make_float_padding_precision=
  function(k,o,acc,fmt,pad,prec,fconv)
   {var match=pad;
    
    var match$1=prec;
    
    if(typeof match=="number")
     {switch(match)
       {case 0:
         if(typeof match$1==="number")
          {if(match$1!=0)
            {return function(p,x)
              {var str=convert_float(fconv,p,x);
               
               return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
               };
             }
           else
            {return function(x)
              {var str=convert_float(fconv,default_float_precision,x);
               
               return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
               };
             }
           }
         else
          {var p=match$1[1];
           
           return function(x)
            {var str=convert_float(fconv,p,x);
             
             return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
             };
           }
         
        }}
    else
     {switch(match[0])
       {case 0:
         var w=match[2];
         
         var padty=match[1];
         
         if(typeof match$1==="number")
          {if(match$1!=0)
            {var w$1=w;
             
             var padty$1=padty;
             
             return function(p,x)
              {var str=fix_padding(padty$1,w$1,convert_float(fconv,p,x));
               
               return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
               };
             }
           else
            {return function(x)
              {var str=convert_float(fconv,default_float_precision,x);
               
               var str$prime=fix_padding(padty,w,str);
               
               return make_printf
                       (k,o,/* Acc_data_string */[4,acc,str$prime],fmt);
               };
             }
           }
         else
          {var w$2=w;
           
           var padty$2=padty;
           
           var p$1=match$1[1];
           
           return function(x)
            {var str=fix_padding(padty$2,w$2,convert_float(fconv,p$1,x));
             
             return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
             };
           }
         
        case 1:
         var padty$3=match[1];
         
         if(typeof match$1==="number")
          {if(match$1!=0)
            {var padty$4=padty$3;
             
             return function(w,p,x)
              {var str=fix_padding(padty$4,w,convert_float(fconv,p,x));
               
               return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
               };
             }
           else
            {return function(w,x)
              {var str=convert_float(fconv,default_float_precision,x);
               
               var str$prime=fix_padding(padty$3,w,str);
               
               return make_printf
                       (k,o,/* Acc_data_string */[4,acc,str$prime],fmt);
               };
             }
           }
         else
          {var padty$5=padty$3;
           
           var p$2=match$1[1];
           
           return function(w,x)
            {var str=fix_padding(padty$5,w,convert_float(fconv,p$2,x));
             
             return make_printf(k,o,/* Acc_data_string */[4,acc,str],fmt);
             };
           }
         
        }}
    };

var
 make_custom=
  function(k,o,acc,rest,arity,f)
   {if(arity)
     {var arity$1=arity[1];
      
      return function(x){return make_custom(k,o,acc,rest,arity$1,f(x));};
      }
    else
     {return make_printf(k,o,/* Acc_data_string */[4,acc,f],rest);}
    };

var
 output_acc=
  function(o,acc)
   {var exit;
    
    if(typeof acc=="number")
     {switch(acc){case 0:return /* () */0;}}
    else
     {switch(acc[0])
       {case 0:
         var fmting_lit=acc[2];
         
         var p=acc[1];
         
         var s=string_of_formatting_lit(fmting_lit);
         
         output_acc(o,p);
         return Pervasives["output_string"](o,s);
         
        case 1:
         var match=acc[2];
         
         var p$1=acc[1];
         
         switch(match[0])
          {case 0:
            var acc$prime=match[1];
            
            output_acc(o,p$1);
            Pervasives["output_string"](o,"@{");
            return output_acc(o,acc$prime);
            
           case 1:
            var p$2=p$1;
            
            var acc$prime$1=match[1];
            
            output_acc(o,p$2);
            Pervasives["output_string"](o,"@[");
            return output_acc(o,acc$prime$1);
            
           }
         
        case 2:exit=215;
        case 3:exit=216;
        case 4:exit=215;
        case 5:exit=216;
        case 6:var f=acc[2];var p$3=acc[1];output_acc(o,p$3);return f(o);
        case 7:var p$4=acc[1];output_acc(o,p$4);return Pervasives["flush"](o);
        case 8:
         var msg=acc[2];
         
         var p$5=acc[1];
         
         output_acc(o,p$5);
         return Pervasives["invalid_arg"](msg);
         
        }}
    
    switch(exit)
     {case 215:
       var s$1=acc[2];
       
       var p$6=acc[1];
       
       var p$7=p$6;
       
       var s$2=s$1;
       
       output_acc(o,p$7);
       return Pervasives["output_string"](o,s$2);
       
      case 216:
       var c=acc[2];
       
       var p$8=acc[1];
       
       var p$9=p$8;
       
       var c$1=c;
       
       output_acc(o,p$9);
       return Pervasives["output_char"](o,c$1);
       
      }
    };

var
 bufput_acc=
  function(b,acc)
   {var exit;
    
    if(typeof acc=="number")
     {switch(acc){case 0:return /* () */0;}}
    else
     {switch(acc[0])
       {case 0:
         var fmting_lit=acc[2];
         
         var p=acc[1];
         
         var s=string_of_formatting_lit(fmting_lit);
         
         bufput_acc(b,p);
         return Buffer["add_string"](b,s);
         
        case 1:
         var match=acc[2];
         
         var p$1=acc[1];
         
         switch(match[0])
          {case 0:
            var acc$prime=match[1];
            
            bufput_acc(b,p$1);
            Buffer["add_string"](b,"@{");
            return bufput_acc(b,acc$prime);
            
           case 1:
            var p$2=p$1;
            
            var acc$prime$1=match[1];
            
            bufput_acc(b,p$2);
            Buffer["add_string"](b,"@[");
            return bufput_acc(b,acc$prime$1);
            
           }
         
        case 2:exit=210;
        case 3:exit=211;
        case 4:exit=210;
        case 5:exit=211;
        case 6:var f=acc[2];var p$3=acc[1];bufput_acc(b,p$3);return f(b);
        case 7:var p$4=acc[1];return bufput_acc(b,p$4);
        case 8:
         var msg=acc[2];
         
         var p$5=acc[1];
         
         bufput_acc(b,p$5);
         return Pervasives["invalid_arg"](msg);
         
        }}
    
    switch(exit)
     {case 210:
       var s$1=acc[2];
       
       var p$6=acc[1];
       
       var p$7=p$6;
       
       var s$2=s$1;
       
       bufput_acc(b,p$7);
       return Buffer["add_string"](b,s$2);
       
      case 211:
       var c=acc[2];
       
       var p$8=acc[1];
       
       var p$9=p$8;
       
       var c$1=c;
       
       bufput_acc(b,p$9);
       return Buffer["add_char"](b,c$1);
       
      }
    };

var
 strput_acc=
  function(b,acc)
   {var exit;
    
    if(typeof acc=="number")
     {switch(acc){case 0:return /* () */0;}}
    else
     {switch(acc[0])
       {case 0:
         var fmting_lit=acc[2];
         
         var p=acc[1];
         
         var s=string_of_formatting_lit(fmting_lit);
         
         strput_acc(b,p);
         return Buffer["add_string"](b,s);
         
        case 1:
         var match=acc[2];
         
         var p$1=acc[1];
         
         switch(match[0])
          {case 0:
            var acc$prime=match[1];
            
            strput_acc(b,p$1);
            Buffer["add_string"](b,"@{");
            return strput_acc(b,acc$prime);
            
           case 1:
            var p$2=p$1;
            
            var acc$prime$1=match[1];
            
            strput_acc(b,p$2);
            Buffer["add_string"](b,"@[");
            return strput_acc(b,acc$prime$1);
            
           }
         
        case 2:exit=205;
        case 3:exit=206;
        case 4:exit=205;
        case 5:exit=206;
        case 6:
         var f=acc[2];
         
         var p$3=acc[1];
         
         strput_acc(b,p$3);
         return Buffer["add_string"](b,f(/* () */0));
         
        case 7:var p$4=acc[1];return strput_acc(b,p$4);
        case 8:
         var msg=acc[2];
         
         var p$5=acc[1];
         
         strput_acc(b,p$5);
         return Pervasives["invalid_arg"](msg);
         
        }}
    
    switch(exit)
     {case 205:
       var s$1=acc[2];
       
       var p$6=acc[1];
       
       var p$7=p$6;
       
       var s$2=s$1;
       
       strput_acc(b,p$7);
       return Buffer["add_string"](b,s$2);
       
      case 206:
       var c=acc[2];
       
       var p$8=acc[1];
       
       var p$9=p$8;
       
       var c$1=c;
       
       strput_acc(b,p$9);
       return Buffer["add_char"](b,c$1);
       
      }
    };

var
 failwith_message=
  function(param)
   {var fmt=param[1];
    
    var buf=Buffer["create"](256);
    
    var
     k=
      function(param$1,acc)
       {strput_acc(buf,acc);
        return Pervasives["failwith"](Buffer["contents"](buf));
        };
    
    return make_printf(k,/* () */0,/* End_of_acc */0,fmt);
    };

var
 open_box_of_string=
  function(str)
   {if(CamlPrimtivie["caml_string_equal"](str,""))
     {return [/* tuple */0,0,/* Pp_box */4];}
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
                   str);
          };
      
      var
       parse_spaces=
        function(i)
         {if(i=len)
           {return i;}
          else
           {var match=str[i];
            
            var exit;
            
            if(match!=9)
             {if(match!=32){return i;}else{exit=190;}}
            else
             {exit=190;}
            
            switch(exit){case 190:return parse_spaces(i+1);}
            }
          };
      
      var
       parse_lword=
        function(i,j)
         {if(j=len)
           {return j;}
          else
           {var match=str[j];
            
            var switcher=-97+match;
            
            if(25<switcher>>>0){return j;}else{return parse_lword(i,j+1);}
            }
          };
      
      var
       parse_int=
        function(i,j)
         {if(j=len)
           {return j;}
          else
           {var match=str[j];
            
            var exit;
            
            if(match>=48)
             {if(match>=58){exit=195;}else{exit=194;}}
            else
             {if(match!=45){exit=195;}else{exit=194;}}
            
            switch(exit){case 195:return j;case 194:return parse_int(i,j+1);}
            }
          };
      
      var wstart=parse_spaces(0);
      
      var wend=parse_lword(wstart,wstart);
      
      var box_name=$$String["sub"](str,wstart,wend-wstart);
      
      var nstart=parse_spaces(wend);
      
      var nend=parse_int(nstart,nstart);
      
      if(nstart=nend)
       {var indent=0;}
      else
       {try
         {var
           indent=
            CamlPrimtivie["caml_int_of_string"]
             ($$String["sub"](str,nstart,nend-nstart));
          }
        catch(exn)
         {var tag=exn[1];
          
          if(tag=Failure){var indent=invalid_box(/* () */0);}else{throw exn;}
          }
        }
      
      var exp_end=parse_spaces(nend);
      
      if(exp_end!=len){var match=invalid_box(/* () */0);}else{var match=0;}
      
      var exit;
      
      switch(box_name)
       {case "":exit=178;
        case "b":exit=178;
        case "h":var box_type=/* Pp_hbox */0;
        case "hov":var box_type=/* Pp_hovbox */3;
        case "hv":var box_type=/* Pp_hvbox */2;
        case "v":var box_type=/* Pp_vbox */1;
        default:exit=179;}
      
      switch(exit)
       {case 179:var box_type=invalid_box(/* () */0);
        case 178:var box_type=/* Pp_box */4;
        }
      
      return /* tuple */[0,indent,box_type];
      }
    };

var
 make_padding_fmt_ebb=
  function(pad,fmt)
   {if(typeof pad=="number")
     {switch(pad)
       {case 0:return /* Padding_fmt_EBB */[0,/* No_padding */0,fmt];}}
    else
     {switch(pad[0])
       {case 0:
         var w=pad[2];
         
         var s=pad[1];
         
         return /* Padding_fmt_EBB */[0,/* Lit_padding */[0,s,w],fmt];
         
        case 1:
         var s$1=pad[1];
         
         return /* Padding_fmt_EBB */[0,/* Arg_padding */[1,s$1],fmt];
         
        }}
    };

var
 make_precision_fmt_ebb=
  function(prec,fmt)
   {if(typeof prec==="number")
     {if(prec!=0)
       {return /* Precision_fmt_EBB */[0,/* Arg_precision */1,fmt];}
      else
       {return /* Precision_fmt_EBB */[0,/* No_precision */0,fmt];}
      }
    else
     {var p=prec[1];
      
      return /* Precision_fmt_EBB */[0,/* Lit_precision */[0,p],fmt];
      }
    };

var
 make_padprec_fmt_ebb=
  function(pad,prec,fmt)
   {var match=make_precision_fmt_ebb(prec,fmt);
    
    var fmt$prime=match[2];
    
    var prec$1=match[1];
    
    if(typeof pad=="number")
     {switch(pad)
       {case 0:
         return /* Padprec_fmt_EBB */[0,/* No_padding */0,prec$1,fmt$prime];
        }}
    else
     {switch(pad[0])
       {case 0:
         var w=pad[2];
         
         var s=pad[1];
         
         return /* Padprec_fmt_EBB */[0,
                 /* Lit_padding */[0,s,w],
                 prec$1,
                 fmt$prime];
         
        case 1:
         var s$1=pad[1];
         
         return /* Padprec_fmt_EBB */[0,
                 /* Arg_padding */[1,s$1],
                 prec$1,
                 fmt$prime];
         
        }}
    };

var
 fmt_ebb_of_string=
  function(legacy_behavior,str)
   {if(legacy_behavior)
     {var flag=legacy_behavior[1];var legacy_behavior$1=flag;}
    else
     {var legacy_behavior$1=/* true */1;}
    
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
                 msg);
        };
    
    var
     unexpected_end_of_format=
      function(end_ind)
       {return invalid_format_message(end_ind,"unexpected end of format");};
    
    var
     invalid_nonnull_char_width=
      function(str_ind)
       {return invalid_format_message
                (str_ind,"non-zero widths are unsupported for %c conversions");
        };
    
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
                 s);
        };
    
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
                 read);
        };
    
    var
     parse=
      function(beg_ind,end_ind)
       {return parse_literal(beg_ind,beg_ind,end_ind);};
    
    var
     parse_literal=
      function(lit_start,str_ind,end_ind)
       {if(str_ind=end_ind)
         {return add_literal(lit_start,str_ind,/* End_of_format */0);}
        else
         {var match=str[str_ind];
          
          if(match!=37)
           {if(match!=64)
             {return parse_literal(lit_start,str_ind+1,end_ind);}
            else
             {var match$1=parse_after_at(str_ind+1,end_ind);
              
              var fmt_rest=match$1[1];
              
              return add_literal(lit_start,str_ind,fmt_rest);
              }
            }
          else
           {var match$2=parse_format(str_ind,end_ind);
            
            var fmt_rest$1=match$2[1];
            
            return add_literal(lit_start,str_ind,fmt_rest$1);
            }
          }
        };
    
    var
     parse_format=
      function(pct_ind,end_ind){return parse_ign(pct_ind,pct_ind+1,end_ind);};
    
    var
     parse_ign=
      function(pct_ind,str_ind,end_ind)
       {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
        
        var match=str[str_ind];
        
        if(match!=95)
         {return parse_flags(pct_ind,str_ind,end_ind,/* false */0);}
        else
         {return parse_flags(pct_ind,str_ind+1,end_ind,/* true */1);}
        };
    
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
                str[str_ind])}
            else
             {}
            
            return flag[1]=/* true */1,0;
            };
        
        var
         read_flags=
          function(str_ind)
           {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
            
            var match=str[str_ind];
            
            var exit;
            
            var switcher=-32+match;
            
            if(16<switcher>>>0)
             {exit=7;}
            else
             {switch(switcher)
               {case 0:set_flag(str_ind,space);return read_flags(str_ind+1);
                case 1:exit=7;
                case 2:exit=7;
                case 3:set_flag(str_ind,sharp);return read_flags(str_ind+1);
                case 4:exit=7;
                case 5:exit=7;
                case 6:exit=7;
                case 7:exit=7;
                case 8:exit=7;
                case 9:exit=7;
                case 10:exit=7;
                case 11:set_flag(str_ind,plus);return read_flags(str_ind+1);
                case 12:exit=7;
                case 13:set_flag(str_ind,minus);return read_flags(str_ind+1);
                case 14:exit=7;
                case 15:exit=7;
                case 16:set_flag(str_ind,zero);return read_flags(str_ind+1);
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
                        ign);
               
              }
            };
        
        return read_flags(str_ind);
        };
    
    var
     parse_padding=
      function(pct_ind,str_ind,end_ind,zero,minus,plus,sharp,space,ign)
       {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
        
        var match=zero;
        
        var match$1=minus;
        
        if(match!=0)
         {if(match$1!=0)
           {if(legacy_behavior$1)
             {var padty=/* Left */0;}
            else
             {var padty=incompatible_flag(pct_ind,str_ind,45,"0");}
            }
          else
           {var padty=/* Zeros */2;}
          }
        else
         {if(match$1!=0){var padty=/* Left */0;}else{var padty=/* Right */1;}}
        
        var match$2=str[str_ind];
        
        var exit;
        
        if(match$2>=48)
         {if(match$2>=58)
           {exit=16;}
          else
           {var match$3=parse_positive(str_ind,end_ind,0);
            
            var width=match$3[2];
            
            var new_ind=match$3[1];
            
            return parse_after_padding
                    (pct_ind,
                     new_ind,
                     end_ind,
                     minus,
                     plus,
                     sharp,
                     space,
                     ign,
                     /* Lit_padding */[0,padty,width]);
            }
          }
        else
         {if(match$2!=42)
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
                     /* Arg_padding */[1,padty]);
            }
          }
        
        switch(exit)
         {case 16:
           switch(padty)
            {case 0:
              if(!legacy_behavior$1)
               {invalid_format_without(str_ind-1,45,"padding")}
              else
               {}
              
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
                       [/* Lit_padding */0,/* Right */1,0]);
              
             }
           
          }
        };
    
    var
     parse_after_padding=
      function(pct_ind,str_ind,end_ind,minus,plus,sharp,space,ign,pad)
       {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
        
        var symb=str[str_ind];
        
        if(symb!=46)
         {return parse_conversion
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
                   symb);
          }
        else
         {return parse_precision
                  (pct_ind,str_ind+1,end_ind,minus,plus,sharp,space,ign,pad);
          }
        };
    
    var
     parse_precision=
      function(pct_ind,str_ind,end_ind,minus,plus,sharp,space,ign,pad)
       {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
        
        var
         parse_literal$1=
          function(minus,str_ind)
           {var match=parse_positive(str_ind,end_ind,0);
            
            var prec=match[2];
            
            var new_ind=match[1];
            
            return parse_after_precision
                    (pct_ind,
                     new_ind,
                     end_ind,
                     minus,
                     plus,
                     sharp,
                     space,
                     ign,
                     pad,
                     /* Lit_precision */[0,prec]);
            };
        
        var symb=str[str_ind];
        
        var exit;
        
        if(symb>=48)
         {if(symb>=58){exit=19;}else{return parse_literal$1(minus,str_ind);}}
        else
         {if(symb>=42)
           {var switcher=-42+symb;
            
            switch(switcher)
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
               
              case 1:exit=21;
              case 2:exit=19;
              case 3:exit=21;
              case 4:exit=19;
              case 5:exit=19;
              }
            }
          else
           {exit=19;}
          }
        
        switch(exit)
         {case 21:
           if(legacy_behavior$1)
            {return parse_literal$1(minus||(symb=45),str_ind+1);}
           else
            {exit=19;}
           
          case 19:
           if(legacy_behavior$1)
            {return parse_after_precision
                     (pct_ind,
                      str_ind,
                      end_ind,
                      minus,
                      plus,
                      sharp,
                      space,
                      ign,
                      pad,
                      [/* Lit_precision */0,0]);
             }
           else
            {return invalid_format_without(str_ind-1,46,"precision");}
           
          }
        };
    
    var
     parse_after_precision=
      function(pct_ind,str_ind,end_ind,minus,plus,sharp,space,ign,pad,prec)
       {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
        
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
                     str[str_ind]);
            };
        
        if(typeof pad==="number")
         {var match=minus;
          
          var match$1=prec;
          
          var exit;
          
          if(typeof match$1==="number")
           {if(match$1!=0)
             {exit=24;}
            else
             {return parse_conv(/* No_padding */0);}
            }
          else
           {exit=24;}
          
          switch(exit)
           {case 24:
             if(match!=0)
              {if(typeof match$1==="number")
                {return parse_conv([/* Arg_padding */1,/* Left */0]);}
               else
                {var n=match$1[1];
                 
                 return parse_conv(/* Lit_padding */[0,/* Left */0,n]);
                 }
               }
             else
              {if(typeof match$1==="number")
                {return parse_conv([/* Arg_padding */1,/* Right */1]);}
               else
                {var n$1=match$1[1];
                 
                 return parse_conv(/* Lit_padding */[0,/* Right */1,n$1]);
                 }
               }
             
            }
          }
        else
         {var pad$1=pad;return parse_conv(pad$1);}
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
        
        var get_plus=function(param){plus_used[1]=/* true */1,0;return plus;};
        
        var
         get_sharp=
          function(param){sharp_used[1]=/* true */1,0;return sharp;};
        
        var
         get_space=
          function(param){space_used[1]=/* true */1,0;return space;};
        
        var get_ign=function(param){ign_used[1]=/* true */1,0;return ign;};
        
        var get_pad=function(param){pad_used[1]=/* true */1,0;return pad;};
        
        var get_prec=function(param){prec_used[1]=/* true */1,0;return prec;};
        
        var
         get_padprec=
          function(param){pad_used[1]=/* true */1,0;return padprec;};
        
        var
         check_no_0=
          function(symb,pad)
           {if(typeof pad=="number")
             {switch(pad){case 0:return pad;}}
            else
             {switch(pad[0])
               {case 0:
                 var match=pad[1];
                 
                 if(match>=2)
                  {var width=pad[2];
                   
                   if(legacy_behavior$1)
                    {return /* Lit_padding */[0,/* Right */1,width];}
                   else
                    {return incompatible_flag(pct_ind,str_ind,symb,"0");}
                   }
                 else
                  {return pad;}
                 
                case 1:
                 var match$1=pad[1];
                 
                 if(match$1>=2)
                  {if(legacy_behavior$1)
                    {return [/* Arg_padding */1,/* Right */1];}
                   else
                    {return incompatible_flag(pct_ind,str_ind,symb,"0");}
                   }
                 else
                  {return pad;}
                 
                }}
            };
        
        var
         opt_of_pad=
          function(c,pad)
           {if(typeof pad=="number")
             {switch(pad){case 0:return /* None */0;}}
            else
             {switch(pad[0])
               {case 0:
                 var match=pad[1];
                 
                 switch(match)
                  {case 0:
                    var width=pad[2];
                    
                    if(legacy_behavior$1)
                     {return /* Some */[0,width];}
                    else
                     {return incompatible_flag(pct_ind,str_ind,c,"'-'");}
                    
                   case 1:var width$1=pad[2];return /* Some */[0,width$1];
                   case 2:
                    var width$2=pad[2];
                    
                    if(legacy_behavior$1)
                     {return /* Some */[0,width$2];}
                    else
                     {return incompatible_flag(pct_ind,str_ind,c,"'0'");}
                    
                   }
                 
                case 1:return incompatible_flag(pct_ind,str_ind,c,"'*'");
                }}
            };
        
        var get_pad_opt=function(c){return opt_of_pad(c,get_pad(/* () */0));};
        
        var
         get_padprec_opt=
          function(c){return opt_of_pad(c,get_padprec(/* () */0));};
        
        var
         get_prec_opt=
          function(param)
           {var match=get_prec(/* () */0);
            
            if(typeof match==="number")
             {if(match!=0)
               {return incompatible_flag(pct_ind,str_ind,95,"'*'");}
              else
               {return /* None */0;}
              }
            else
             {var ndec=match[1];return /* Some */[0,ndec];}
            };
        
        var exit;
        
        if(symb>=124)
         {exit=63;}
        else
         {switch(symb)
           {case 0:exit=63;
            case 1:exit=63;
            case 2:exit=63;
            case 3:exit=63;
            case 4:exit=63;
            case 5:exit=63;
            case 6:exit=63;
            case 7:exit=63;
            case 8:exit=63;
            case 9:exit=63;
            case 10:exit=63;
            case 11:exit=63;
            case 12:exit=63;
            case 13:exit=63;
            case 14:exit=63;
            case 15:exit=63;
            case 16:exit=63;
            case 17:exit=63;
            case 18:exit=63;
            case 19:exit=63;
            case 20:exit=63;
            case 21:exit=63;
            case 22:exit=63;
            case 23:exit=63;
            case 24:exit=63;
            case 25:exit=63;
            case 26:exit=63;
            case 27:exit=63;
            case 28:exit=63;
            case 29:exit=63;
            case 30:exit=63;
            case 31:exit=63;
            case 32:exit=69;
            case 33:
             var match=parse(str_ind,end_ind);
             
             var fmt_rest=match[1];
             
             var fmt_result=/* Fmt_EBB */[0,/* Flush */[10,fmt_rest]];
             
            case 34:exit=63;
            case 35:exit=69;
            case 36:exit=63;
            case 37:exit=68;
            case 38:exit=63;
            case 39:exit=63;
            case 40:
             var sub_end=search_subformat_end(str_ind,end_ind,41);
             
             var match$1=parse(sub_end+2,end_ind);
             
             var fmt_rest$1=match$1[1];
             
             var match$2=parse(str_ind,sub_end);
             
             var sub_fmt=match$2[1];
             
             var sub_fmtty=fmtty_of_fmt(sub_fmt);
             
             if(get_ign(/* () */0))
              {var
                ignored=
                 /* Ignored_format_subst */[8,get_pad_opt(95),sub_fmtty];
               
               var
                fmt_result=
                 /* Fmt_EBB */[0,/* Ignored_param */[23,ignored,fmt_rest$1]];
               }
             else
              {var
                fmt_result=
                 /* Fmt_EBB */[0,
                  /* Format_subst */[14,get_pad_opt(40),sub_fmtty,fmt_rest$1]];
               }
             
            case 41:exit=63;
            case 42:exit=63;
            case 43:exit=69;
            case 44:var fmt_result=parse(str_ind,end_ind);
            case 45:exit=69;
            case 46:exit=63;
            case 47:exit=63;
            case 48:exit=63;
            case 49:exit=63;
            case 50:exit=63;
            case 51:exit=63;
            case 52:exit=63;
            case 53:exit=63;
            case 54:exit=63;
            case 55:exit=63;
            case 56:exit=63;
            case 57:exit=63;
            case 58:exit=63;
            case 59:exit=63;
            case 60:exit=63;
            case 61:exit=63;
            case 62:exit=63;
            case 63:exit=63;
            case 64:exit=68;
            case 65:exit=63;
            case 66:exit=67;
            case 67:
             var match$3=parse(str_ind,end_ind);
             
             var fmt_rest$2=match$3[1];
             
             if(get_ign(/* () */0))
              {var
                fmt_result=
                 /* Fmt_EBB */[0,
                  /* Ignored_param */[23,/* Ignored_caml_char */1,fmt_rest$2]];
               }
             else
              {var fmt_result=/* Fmt_EBB */[0,/* Caml_char */[1,fmt_rest$2]];}
             
            case 68:exit=63;
            case 69:exit=66;
            case 70:exit=66;
            case 71:exit=66;
            case 72:exit=63;
            case 73:exit=63;
            case 74:exit=63;
            case 75:exit=63;
            case 76:exit=65;
            case 77:exit=63;
            case 78:
             var match$4=parse(str_ind,end_ind);
             
             var fmt_rest$3=match$4[1];
             
             var counter=/* Token_counter */2;
             
             if(get_ign(/* () */0))
              {var ignored$1=/* Ignored_scan_get_counter */[10,counter];
               
               var
                fmt_result=
                 /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$1,fmt_rest$3]];
               }
             else
              {var
                fmt_result=
                 /* Fmt_EBB */[0,
                  /* Scan_get_counter */[21,counter,fmt_rest$3]];
               }
             
            case 79:exit=63;
            case 80:exit=63;
            case 81:exit=63;
            case 82:exit=63;
            case 83:
             var pad$1=check_no_0(symb,get_padprec(/* () */0));
             
             var match$5=parse(str_ind,end_ind);
             
             var fmt_rest$4=match$5[1];
             
             if(get_ign(/* () */0))
              {var ignored$2=/* Ignored_caml_string */[1,get_padprec_opt(95)];
               
               var
                fmt_result=
                 /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$2,fmt_rest$4]];
               }
             else
              {var match$6=make_padding_fmt_ebb(pad$1,fmt_rest$4);
               
               var fmt_rest$prime=match$6[2];
               
               var pad$prime=match$6[1];
               
               var
                fmt_result=
                 /* Fmt_EBB */[0,
                  /* Caml_string */[3,pad$prime,fmt_rest$prime]];
               }
             
            case 84:exit=63;
            case 85:exit=63;
            case 86:exit=63;
            case 87:exit=63;
            case 88:exit=64;
            case 89:exit=63;
            case 90:exit=63;
            case 91:
             var match$7=parse_char_set(str_ind,end_ind);
             
             var char_set=match$7[2];
             
             var next_ind=match$7[1];
             
             var match$8=parse(next_ind,end_ind);
             
             var fmt_rest$5=match$8[1];
             
             if(get_ign(/* () */0))
              {var
                ignored$3=
                 /* Ignored_scan_char_set */[9,get_pad_opt(95),char_set];
               
               var
                fmt_result=
                 /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$3,fmt_rest$5]];
               }
             else
              {var
                fmt_result=
                 /* Fmt_EBB */[0,
                  /* Scan_char_set */[20,get_pad_opt(91),char_set,fmt_rest$5]];
               }
             
            case 92:exit=63;
            case 93:exit=63;
            case 94:exit=63;
            case 95:exit=69;
            case 96:exit=63;
            case 97:
             var match$9=parse(str_ind,end_ind);
             
             var fmt_rest$6=match$9[1];
             
             var fmt_result=/* Fmt_EBB */[0,/* Alpha */[15,fmt_rest$6]];
             
            case 98:exit=67;
            case 99:
             var
              char_format=
               function(fmt_rest)
                {if(get_ign(/* () */0))
                  {return /* Fmt_EBB */[0,
                           /* Ignored_param */[23,/* Ignored_char */0,fmt_rest]];
                   }
                 else
                  {return /* Fmt_EBB */[0,/* Char */[0,fmt_rest]];}
                 };
             
             var
              scan_format=
               function(fmt_rest)
                {if(get_ign(/* () */0))
                  {return /* Fmt_EBB */[0,
                           /* Ignored_param */[23,
                            /* Ignored_scan_next_char */4,
                            fmt_rest]];
                   }
                 else
                  {return /* Fmt_EBB */[0,/* Scan_next_char */[22,fmt_rest]];}
                 };
             
             var match$10=parse(str_ind,end_ind);
             
             var fmt_rest$7=match$10[1];
             
             var match$11=get_pad_opt(99);
             
             if(match$11)
              {var _n=match$11[1];
               
               if(_n!=0)
                {if(!legacy_behavior$1)
                  {var fmt_result=invalid_nonnull_char_width(str_ind);}
                 else
                  {var fmt_result=char_format(fmt_rest$7);}
                 }
               else
                {var fmt_result=scan_format(fmt_rest$7);}
               }
             else
              {var fmt_result=char_format(fmt_rest$7);}
             
            case 100:exit=64;
            case 101:exit=66;
            case 102:exit=66;
            case 103:exit=66;
            case 104:exit=63;
            case 105:exit=64;
            case 106:exit=63;
            case 107:exit=63;
            case 108:exit=65;
            case 109:exit=63;
            case 110:exit=65;
            case 111:exit=64;
            case 112:exit=63;
            case 113:exit=63;
            case 114:
             var match$12=parse(str_ind,end_ind);
             
             var fmt_rest$8=match$12[1];
             
             if(get_ign(/* () */0))
              {var
                fmt_result=
                 /* Fmt_EBB */[0,
                  /* Ignored_param */[23,/* Ignored_reader */3,fmt_rest$8]];
               }
             else
              {var fmt_result=/* Fmt_EBB */[0,/* Reader */[19,fmt_rest$8]];}
             
            case 115:
             var pad$2=check_no_0(symb,get_padprec(/* () */0));
             
             var match$13=parse(str_ind,end_ind);
             
             var fmt_rest$9=match$13[1];
             
             if(get_ign(/* () */0))
              {var ignored$4=/* Ignored_string */[0,get_padprec_opt(95)];
               
               var
                fmt_result=
                 /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$4,fmt_rest$9]];
               }
             else
              {var match$14=make_padding_fmt_ebb(pad$2,fmt_rest$9);
               
               var fmt_rest$prime$1=match$14[2];
               
               var pad$prime$1=match$14[1];
               
               var
                fmt_result=
                 /* Fmt_EBB */[0,/* String */[2,pad$prime$1,fmt_rest$prime$1]];
               }
             
            case 116:
             var match$15=parse(str_ind,end_ind);
             
             var fmt_rest$10=match$15[1];
             
             var fmt_result=/* Fmt_EBB */[0,/* Theta */[16,fmt_rest$10]];
             
            case 117:exit=64;
            case 118:exit=63;
            case 119:exit=63;
            case 120:exit=64;
            case 121:exit=63;
            case 122:exit=63;
            case 123:
             var sub_end$1=search_subformat_end(str_ind,end_ind,125);
             
             var match$16=parse(str_ind,sub_end$1);
             
             var sub_fmt$1=match$16[1];
             
             var match$17=parse(sub_end$1+2,end_ind);
             
             var fmt_rest$11=match$17[1];
             
             var sub_fmtty$1=fmtty_of_fmt(sub_fmt$1);
             
             if(get_ign(/* () */0))
              {var
                ignored$5=
                 /* Ignored_format_arg */[7,get_pad_opt(95),sub_fmtty$1];
               
               var
                fmt_result=
                 /* Fmt_EBB */[0,
                  /* Ignored_param */[23,ignored$5,fmt_rest$11]];
               }
             else
              {var
                fmt_result=
                 /* Fmt_EBB */[0,
                  /* Format_arg */[13,
                   get_pad_opt(123),
                   sub_fmtty$1,
                   fmt_rest$11]];
               }
             
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
           
           var fmt_rest$12=match$18[1];
           
           if(get_ign(/* () */0))
            {var ignored$6=/* Ignored_int */[2,iconv,get_pad_opt(95)];
             
             var
              fmt_result=
               /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$6,fmt_rest$12]];
             }
           else
            {var match$19=get_pad(/* () */0);
             
             var match$20=get_prec(/* () */0);
             
             var match$21=match$19;
             
             var match$22=match$20;
             
             var exit$1;
             
             if(typeof match$22==="number")
              {if(match$22!=0)
                {exit$1=36;}
               else
                {var pad$3=match$21;var pad$4=pad$3;}
               }
             else
              {exit$1=36;}
             
             switch(exit$1)
              {case 36:
                if(typeof match$21=="number")
                 {switch(match$21){case 0:var pad$4=/* No_padding */0;}}
                else
                 {switch(match$21[0])
                   {case 0:
                     var match$23=match$21[1];
                     
                     if(match$23>=2)
                      {var n=match$21[2];
                       
                       if(legacy_behavior$1)
                        {var pad$4=/* Lit_padding */[0,/* Right */1,n];}
                       else
                        {var
                          pad$4=
                           incompatible_flag(pct_ind,str_ind,48,"precision");
                         }
                       }
                     else
                      {var pad$5=match$21;var pad$4=pad$5;}
                     
                    case 1:
                     var match$24=match$21[1];
                     
                     if(match$24>=2)
                      {if(legacy_behavior$1)
                        {var pad$4=[/* Arg_padding */1,/* Right */1];}
                       else
                        {var
                          pad$4=
                           incompatible_flag(pct_ind,str_ind,48,"precision");
                         }
                       }
                     else
                      {var pad$6=match$21;var pad$4=pad$6;}
                     
                    }}
                
               }
             
             var
              match$25=
               make_padprec_fmt_ebb(pad$4,get_prec(/* () */0),fmt_rest$12);
             
             var fmt_rest$prime$2=match$25[3];
             
             var prec$prime=match$25[2];
             
             var pad$prime$2=match$25[1];
             
             var
              fmt_result=
               /* Fmt_EBB */[0,
                /* Int */[4,iconv,pad$prime$2,prec$prime,fmt_rest$prime$2]];
             }
           
          case 65:
           if((str_ind=end_ind)||!is_int_base(str[str_ind]))
            {var match$26=parse(str_ind,end_ind);
             
             var fmt_rest$13=match$26[1];
             
             var counter$1=counter_of_char(symb);
             
             if(get_ign(/* () */0))
              {var ignored$7=/* Ignored_scan_get_counter */[10,counter$1];
               
               var
                fmt_result=
                 /* Fmt_EBB */[0,
                  /* Ignored_param */[23,ignored$7,fmt_rest$13]];
               }
             else
              {var
                fmt_result=
                 /* Fmt_EBB */[0,
                  /* Scan_get_counter */[21,counter$1,fmt_rest$13]];
               }
             }
           else
            {exit=63;}
           
          case 66:
           var
            fconv=
             compute_float_conv
              (pct_ind,str_ind,get_plus(/* () */0),get_space(/* () */0),symb);
           
           var match$27=parse(str_ind,end_ind);
           
           var fmt_rest$14=match$27[1];
           
           if(get_ign(/* () */0))
            {var
              ignored$8=
               /* Ignored_float */[6,get_pad_opt(95),get_prec_opt(/* () */0)];
             
             var
              fmt_result=
               /* Fmt_EBB */[0,/* Ignored_param */[23,ignored$8,fmt_rest$14]];
             }
           else
            {var
              match$28=
               make_padprec_fmt_ebb
                (get_pad(/* () */0),get_prec(/* () */0),fmt_rest$14);
             
             var fmt_rest$prime$3=match$28[3];
             
             var prec$prime$1=match$28[2];
             
             var pad$prime$3=match$28[1];
             
             var
              fmt_result=
               /* Fmt_EBB */[0,
                /* Float */[8,fconv,pad$prime$3,prec$prime$1,fmt_rest$prime$3]];
             }
           
          case 67:
           var match$29=parse(str_ind,end_ind);
           
           var fmt_rest$15=match$29[1];
           
           if(get_ign(/* () */0))
            {var
              fmt_result=
               /* Fmt_EBB */[0,
                /* Ignored_param */[23,/* Ignored_bool */2,fmt_rest$15]];
             }
           else
            {var fmt_result=/* Fmt_EBB */[0,/* Bool */[9,fmt_rest$15]];}
           
          case 68:
           var c=symb;
           
           var match$30=parse(str_ind,end_ind);
           
           var fmt_rest$16=match$30[1];
           
           var
            fmt_result=
             /* Fmt_EBB */[0,/* Char_literal */[12,c,fmt_rest$16]];
           
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
           
          case 63:
           if(symb>=108)
            {if(symb>=111)
              {exit=62;}
             else
              {var switcher=-108+symb;
               
               switch(switcher)
                {case 0:
                  var
                   iconv$1=
                    compute_int_conv
                     (pct_ind,
                      str_ind+1,
                      get_plus(/* () */0),
                      get_sharp(/* () */0),
                      get_space(/* () */0),
                      str[str_ind]);
                  
                  var match$31=parse(str_ind+1,end_ind);
                  
                  var fmt_rest$17=match$31[1];
                  
                  if(get_ign(/* () */0))
                   {var
                     ignored$9=
                      /* Ignored_int32 */[3,iconv$1,get_pad_opt(95)];
                    
                    var
                     fmt_result=
                      /* Fmt_EBB */[0,
                       /* Ignored_param */[23,ignored$9,fmt_rest$17]];
                    }
                  else
                   {var
                     match$32=
                      make_padprec_fmt_ebb
                       (get_pad(/* () */0),get_prec(/* () */0),fmt_rest$17);
                    
                    var fmt_rest$prime$4=match$32[3];
                    
                    var prec$prime$2=match$32[2];
                    
                    var pad$prime$4=match$32[1];
                    
                    var
                     fmt_result=
                      /* Fmt_EBB */[0,
                       /* Int32 */[5,
                        iconv$1,
                        pad$prime$4,
                        prec$prime$2,
                        fmt_rest$prime$4]];
                    }
                  
                 case 1:exit=62;
                 case 2:
                  var
                   iconv$2=
                    compute_int_conv
                     (pct_ind,
                      str_ind+1,
                      get_plus(/* () */0),
                      get_sharp(/* () */0),
                      get_space(/* () */0),
                      str[str_ind]);
                  
                  var match$33=parse(str_ind+1,end_ind);
                  
                  var fmt_rest$18=match$33[1];
                  
                  if(get_ign(/* () */0))
                   {var
                     ignored$10=
                      /* Ignored_nativeint */[4,iconv$2,get_pad_opt(95)];
                    
                    var
                     fmt_result=
                      /* Fmt_EBB */[0,
                       /* Ignored_param */[23,ignored$10,fmt_rest$18]];
                    }
                  else
                   {var
                     match$34=
                      make_padprec_fmt_ebb
                       (get_pad(/* () */0),get_prec(/* () */0),fmt_rest$18);
                    
                    var fmt_rest$prime$5=match$34[3];
                    
                    var prec$prime$3=match$34[2];
                    
                    var pad$prime$5=match$34[1];
                    
                    var
                     fmt_result=
                      /* Fmt_EBB */[0,
                       /* Nativeint */[6,
                        iconv$2,
                        pad$prime$5,
                        prec$prime$3,
                        fmt_rest$prime$5]];
                    }
                  
                 }
               }
             }
           else
            {if(symb!=76)
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
                   str[str_ind]);
               
               var match$35=parse(str_ind+1,end_ind);
               
               var fmt_rest$19=match$35[1];
               
               if(get_ign(/* () */0))
                {var
                  ignored$11=
                   /* Ignored_int64 */[5,iconv$3,get_pad_opt(95)];
                 
                 var
                  fmt_result=
                   /* Fmt_EBB */[0,
                    /* Ignored_param */[23,ignored$11,fmt_rest$19]];
                 }
               else
                {var
                  match$36=
                   make_padprec_fmt_ebb
                    (get_pad(/* () */0),get_prec(/* () */0),fmt_rest$19);
                 
                 var fmt_rest$prime$6=match$36[3];
                 
                 var prec$prime$4=match$36[2];
                 
                 var pad$prime$6=match$36[1];
                 
                 var
                  fmt_result=
                   /* Fmt_EBB */[0,
                    /* Int64 */[7,
                     iconv$3,
                     pad$prime$6,
                     prec$prime$4,
                     fmt_rest$prime$6]];
                 }
               }
             }
           
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
           
          }
        
        if(!legacy_behavior$1)
         {if(!plus_used[1]&&plus)
           {incompatible_flag(pct_ind,str_ind,symb,"'+'")}
          else
           {}
          
          if(!sharp_used[1]&&sharp)
           {incompatible_flag(pct_ind,str_ind,symb,"'#'")}
          else
           {}
          
          if(!space_used[1]&&space)
           {incompatible_flag(pct_ind,str_ind,symb,"' '")}
          else
           {}
          
          if
           (!pad_used[1]&&
            CamlPrimtivie["caml_notequal"]
             (/* Padding_EBB */[0,pad],[/* Padding_EBB */0,/* No_padding */0]))
           {incompatible_flag(pct_ind,str_ind,symb,"`padding'")}
          else
           {}
          
          if
           (!prec_used[1]&&
            CamlPrimtivie["caml_notequal"]
             (/* Precision_EBB */[0,prec],
              [/* Precision_EBB */0,/* No_precision */0]))
           {incompatible_flag(pct_ind,str_ind,ign?95:symb,"`precision'")}
          else
           {}
          
          if(ign&&plus){incompatible_flag(pct_ind,str_ind,95,"'+'")}else{}
          }
        else
         {}
        
        if(!ign_used[1]&&ign)
         {var exit$2;
          
          if(symb>=38)
           {if(symb!=44)
             {if(symb!=64){exit$2=27;}else{exit$2=28;}}
            else
             {exit$2=28;}
            }
          else
           {if(symb!=33)
             {if(symb>=37){exit$2=28;}else{exit$2=27;}}
            else
             {exit$2=28;}
            }
          
          switch(exit$2)
           {case 28:if(legacy_behavior$1){}else{exit$2=27;}
            case 27:incompatible_flag(pct_ind,str_ind,symb,"'_'")
            }
          }
        else
         {}
        
        return fmt_result;
        };
    
    var
     parse_after_at=
      function(str_ind,end_ind)
       {if(str_ind=end_ind)
         {return [/* Fmt_EBB */0,
                  [/* Char_literal */12,64,/* End_of_format */0]];
          }
        else
         {var c=str[str_ind];
          
          var exit;
          
          if(c>=65)
           {if(c>=94)
             {var switcher=-123+c;
              
              if(2<switcher>>>0)
               {exit=91;}
              else
               {switch(switcher)
                 {case 0:return parse_tag(/* true */1,str_ind+1,end_ind);
                  case 1:exit=91;
                  case 2:
                   var match=parse(str_ind+1,end_ind);
                   
                   var fmt_rest=match[1];
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,/* Close_tag */1,fmt_rest]];
                   
                  }
                }
              }
            else
             {if(c>=91)
               {var switcher$1=-91+c;
                
                switch(switcher$1)
                 {case 0:return parse_tag(/* false */0,str_ind+1,end_ind);
                  case 1:exit=91;
                  case 2:
                   var match$1=parse(str_ind+1,end_ind);
                   
                   var fmt_rest$1=match$1[1];
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,/* Close_box */0,fmt_rest$1]];
                   
                  }
                }
              else
               {exit=91;}
              }
            }
          else
           {if(c!=10)
             {if(c>=32)
               {var switcher$2=-32+c;
                
                switch(switcher$2)
                 {case 0:
                   var match$2=parse(str_ind+1,end_ind);
                   
                   var fmt_rest$2=match$2[1];
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,[/* Break */0,"@ ",1,0],fmt_rest$2]];
                   
                  case 1:exit=91;
                  case 2:exit=91;
                  case 3:exit=91;
                  case 4:exit=91;
                  case 5:
                   if(str_ind+1<end_ind&&(str[str_ind+1]=37))
                    {var match$3=parse(str_ind+2,end_ind);
                     
                     var fmt_rest$3=match$3[1];
                     
                     return /* Fmt_EBB */[0,
                             /* Formatting_lit */[17,/* Escaped_percent */6,fmt_rest$3]];
                     }
                   else
                    {var match$4=parse(str_ind,end_ind);
                     
                     var fmt_rest$4=match$4[1];
                     
                     return /* Fmt_EBB */[0,/* Char_literal */[12,64,fmt_rest$4]];
                     }
                   
                  case 6:exit=91;
                  case 7:exit=91;
                  case 8:exit=91;
                  case 9:exit=91;
                  case 10:exit=91;
                  case 11:exit=91;
                  case 12:
                   var match$5=parse(str_ind+1,end_ind);
                   
                   var fmt_rest$5=match$5[1];
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,[/* Break */0,"@,",0,0],fmt_rest$5]];
                   
                  case 13:exit=91;
                  case 14:
                   var match$6=parse(str_ind+1,end_ind);
                   
                   var fmt_rest$6=match$6[1];
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,/* Flush_newline */4,fmt_rest$6]];
                   
                  case 15:exit=91;
                  case 16:exit=91;
                  case 17:exit=91;
                  case 18:exit=91;
                  case 19:exit=91;
                  case 20:exit=91;
                  case 21:exit=91;
                  case 22:exit=91;
                  case 23:exit=91;
                  case 24:exit=91;
                  case 25:exit=91;
                  case 26:exit=91;
                  case 27:return parse_good_break(str_ind+1,end_ind);
                  case 28:return parse_magic_size(str_ind+1,end_ind);
                  case 29:exit=91;
                  case 30:exit=91;
                  case 31:
                   var match$7=parse(str_ind+1,end_ind);
                   
                   var fmt_rest$7=match$7[1];
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,/* FFlush */2,fmt_rest$7]];
                   
                  case 32:
                   var match$8=parse(str_ind+1,end_ind);
                   
                   var fmt_rest$8=match$8[1];
                   
                   return /* Fmt_EBB */[0,
                           /* Formatting_lit */[17,/* Escaped_at */5,fmt_rest$8]];
                   
                  }
                }
              else
               {exit=91;}
              }
            else
             {var match$9=parse(str_ind+1,end_ind);
              
              var fmt_rest$9=match$9[1];
              
              return /* Fmt_EBB */[0,
                      /* Formatting_lit */[17,/* Force_newline */3,fmt_rest$9]];
              }
            }
          
          switch(exit)
           {case 91:
             var match$10=parse(str_ind+1,end_ind);
             
             var fmt_rest$10=match$10[1];
             
             return /* Fmt_EBB */[0,
                     /* Formatting_lit */[17,/* Scan_indic */[2,c],fmt_rest$10]];
             
            }
          }
        };
    
    var
     check_open_box=
      function(fmt)
       {var exit;
        
        if(typeof fmt=="number")
         {switch(fmt){}}
        else
         {switch(fmt[0])
           {case 11:
             var match=fmt[2];
             
             if(typeof match==="number")
              {var str$1=fmt[1];
               
               try
                {return open_box_of_string(str$1);}
               catch(exn)
                {var tag=exn[1];
                 
                 if(tag=Failure){return /* () */0;}else{throw exn;}
                 }
               }
             else
              {exit=93;}
             
            default:exit=93;}}
        
        switch(exit){case 93:return /* () */0;}
        };
    
    var
     parse_tag=
      function(is_open_tag,str_ind,end_ind)
       {try
         {if(str_ind=end_ind){throw Not_found;}else{}
          
          var match=str[str_ind];
          
          if(match!=60)
           {throw Not_found;}
          else
           {var ind=$$String["index_from"](str,str_ind+1,62);
            
            if(ind>=end_ind){throw Not_found;}else{}
            
            var sub_str=$$String["sub"](str,str_ind,ind-str_ind+1);
            
            var match$1=parse(ind+1,end_ind);
            
            var fmt_rest=match$1[1];
            
            var match$2=parse(str_ind,ind+1);
            
            var sub_fmt=match$2[1];
            
            var sub_format=/* Format */[0,sub_fmt,sub_str];
            
            if(is_open_tag)
             {var formatting=/* Open_tag */[0,sub_format];}
            else
             {check_open_box(sub_fmt);
              var formatting=/* Open_box */[1,sub_format];
              }
            
            return /* Fmt_EBB */[0,
                    /* Formatting_gen */[18,formatting,fmt_rest]];
            }
          }
        catch(exn)
         {if(exn=Not_found)
           {var match$3=parse(str_ind,end_ind);
            
            var fmt_rest$1=match$3[1];
            
            var sub_format$1=[/* Format */0,/* End_of_format */0,""];
            
            if(is_open_tag)
             {var formatting$1=/* Open_tag */[0,sub_format$1];}
            else
             {var formatting$1=/* Open_box */[1,sub_format$1];}
            
            return /* Fmt_EBB */[0,
                    /* Formatting_gen */[18,formatting$1,fmt_rest$1]];
            }
          else
           {throw exn;}
          }
        };
    
    var
     parse_good_break=
      function(str_ind,end_ind)
       {try
         {if((str_ind=end_ind)||str[str_ind]!=60){throw Not_found;}else{}
          
          var str_ind_1=parse_spaces(str_ind+1,end_ind);
          
          var match=str[str_ind_1];
          
          var exit;
          
          if(match>=48)
           {if(match>=58){exit=114;}else{exit=113;}}
          else
           {if(match!=45){exit=114;}else{exit=113;}}
          
          switch(exit)
           {case 114:throw Not_found;
            case 113:
             var match$1=parse_integer(str_ind_1,end_ind);
             
             var width=match$1[2];
             
             var str_ind_2=match$1[1];
             
             var str_ind_3=parse_spaces(str_ind_2,end_ind);
             
             var match$2=str[str_ind_3];
             
             var exit$1;
             
             var switcher=-45+match$2;
             
             if(!(12<switcher>>>0))
              {var switcher$1=-1+switcher;
               
               if(1<switcher$1>>>0)
                {var match$3=parse_integer(str_ind_3,end_ind);
                 
                 var offset=match$3[2];
                 
                 var str_ind_4=match$3[1];
                 
                 var str_ind_5=parse_spaces(str_ind_4,end_ind);
                 
                 if(str[str_ind_5]!=62){throw Not_found;}else{}
                 
                 var s=$$String["sub"](str,str_ind-2,str_ind_5-str_ind+3);
                 
                 var
                  match$4=
                   /* tuple */[0,str_ind_5+1,/* Break */[0,s,width,offset]];
                 }
               else
                {exit$1=110;}
               }
             else
              {if(switcher!=17)
                {exit$1=110;}
               else
                {var s$1=$$String["sub"](str,str_ind-2,str_ind_3-str_ind+3);
                 
                 var
                  match$4=
                   /* tuple */[0,str_ind_3+1,/* Break */[0,s$1,width,0]];
                 }
               }
             
             switch(exit$1){case 110:throw Not_found;}
             
            }
          }
        catch(exn)
         {var exit$2;
          
          if(exn=Not_found)
           {exit$2=103;}
          else
           {var tag=exn[1];if(tag=Failure){exit$2=103;}else{throw exn;}}
          
          switch(exit$2)
           {case 103:
             var match$4=/* tuple */[0,str_ind,[/* Break */0,"@;",1,0]];
            }
          }
        
        var formatting_lit=match$4[2];
        
        var next_ind=match$4[1];
        
        var match$5=parse(next_ind,end_ind);
        
        var fmt_rest=match$5[1];
        
        return /* Fmt_EBB */[0,
                /* Formatting_lit */[17,formatting_lit,fmt_rest]];
        };
    
    var
     parse_magic_size=
      function(str_ind,end_ind)
       {try
         {var str_ind_1=parse_spaces(str_ind,end_ind);
          
          var match=str[str_ind_1];
          
          var exit;
          
          if(match>=48)
           {if(match>=58){exit=124;}else{exit=123;}}
          else
           {if(match!=45){exit=124;}else{exit=123;}}
          
          switch(exit)
           {case 124:var match$1=/* None */0;
            case 123:
             var match$2=parse_integer(str_ind_1,end_ind);
             
             var size=match$2[2];
             
             var str_ind_2=match$2[1];
             
             var str_ind_3=parse_spaces(str_ind_2,end_ind);
             
             if(str[str_ind_3]!=62){throw Not_found;}else{}
             
             var s=$$String["sub"](str,str_ind-2,str_ind_3-str_ind+3);
             
             var
              match$1=
               /* Some */[0,
                /* tuple */[0,str_ind_3+1,/* Magic_size */[1,s,size]]];
             
            }
          }
        catch(exn)
         {var exit$1;
          
          if(exn=Not_found)
           {exit$1=118;}
          else
           {var tag=exn[1];if(tag=Failure){exit$1=118;}else{throw exn;}}
          
          switch(exit$1){case 118:var match$1=/* None */0;}
          }
        
        if(match$1)
         {var match$3=match$1[1];
          
          var formatting_lit=match$3[2];
          
          var next_ind=match$3[1];
          
          var match$4=parse(next_ind,end_ind);
          
          var fmt_rest=match$4[1];
          
          return /* Fmt_EBB */[0,
                  /* Formatting_lit */[17,formatting_lit,fmt_rest]];
          }
        else
         {var match$5=parse(str_ind,end_ind);
          
          var fmt_rest$1=match$5[1];
          
          return /* Fmt_EBB */[0,
                  /* Formatting_lit */[17,[/* Scan_indic */2,60],fmt_rest$1]];
          }
        };
    
    var
     parse_char_set=
      function(str_ind,end_ind)
       {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
        
        var char_set=create_char_set(/* () */0);
        
        var add_char=function(c){return add_in_char_set(char_set,c);};
        
        var
         add_range=
          function(c,c$prime)
           {for(var i=c;i<=c$prime;i++)
             {add_in_char_set(char_set,Pervasives["char_of_int"](i))}
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
                     str_ind);
            };
        
        var
         parse_char_set_start=
          function(str_ind,end_ind)
           {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
            
            var c=str[str_ind];
            
            return parse_char_set_after_char(str_ind+1,end_ind,c);
            };
        
        var
         parse_char_set_content=
          function(str_ind,end_ind)
           {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
            
            var c=str[str_ind];
            
            if(c!=45)
             {if(c!=93)
               {return parse_char_set_after_char(str_ind+1,end_ind,c);}
              else
               {return str_ind+1;}
              }
            else
             {add_char(45);return parse_char_set_content(str_ind+1,end_ind);}
            };
        
        var
         parse_char_set_after_char=
          function(str_ind,end_ind,c)
           {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
            
            var c$prime=str[str_ind];
            
            var exit;
            
            if(c$prime>=46)
             {if(c$prime!=64)
               {if(c$prime!=93){exit=132;}else{add_char(c);return str_ind+1;}}
              else
               {exit=133;}
              }
            else
             {if(c$prime!=37)
               {if(c$prime>=45)
                 {return parse_char_set_after_minus(str_ind+1,end_ind,c);}
                else
                 {exit=132;}
                }
              else
               {exit=133;}
              }
            
            switch(exit)
             {case 133:
               if(c=37)
                {add_char(c$prime);
                 return parse_char_set_content(str_ind+1,end_ind);
                 }
               else
                {exit=132;}
               
              case 132:
               var c$prime$1=c$prime;
               
               if(c=37){fail_single_percent(str_ind)}else{}
               
               add_char(c);
               return parse_char_set_after_char(str_ind+1,end_ind,c$prime$1);
               
              }
            };
        
        var
         parse_char_set_after_minus=
          function(str_ind,end_ind,c)
           {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
            
            var c$prime=str[str_ind];
            
            if(c$prime!=37)
             {if(c$prime!=93)
               {add_range(c,c$prime);
                return parse_char_set_content(str_ind+1,end_ind);
                }
              else
               {add_char(c);add_char(45);return str_ind+1;}
              }
            else
             {if((str_ind+1)=end_ind){unexpected_end_of_format(end_ind)}else{}
              
              var c$prime$1=str[str_ind+1];
              
              var exit;
              
              if(c$prime$1!=37)
               {if(c$prime$1!=64)
                 {return fail_single_percent(str_ind);}
                else
                 {exit=134;}
                }
              else
               {exit=134;}
              
              switch(exit)
               {case 134:
                 add_range(c,c$prime$1);
                 return parse_char_set_content(str_ind+2,end_ind);
                 
                }
              }
            };
        
        if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
        
        var match=str[str_ind];
        
        if(match!=94)
         {var match$1=/* tuple */[0,str_ind,/* false */0];}
        else
         {var match$1=/* tuple */[0,str_ind+1,/* true */1];}
        
        var reverse=match$1[2];
        
        var str_ind$1=match$1[1];
        
        var next_ind=parse_char_set_start(str_ind$1,end_ind);
        
        var char_set$1=freeze_char_set(char_set);
        
        return /* tuple */[0,
                next_ind,
                reverse?rev_char_set(char_set$1):char_set$1];
        };
    
    var
     parse_spaces=
      function(str_ind,end_ind)
       {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
        
        if(str[str_ind]=32)
         {return parse_spaces(str_ind+1,end_ind);}
        else
         {return str_ind;}
        };
    
    var
     parse_positive=
      function(str_ind,end_ind,acc)
       {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
        
        var c=str[str_ind];
        
        var switcher=-48+c;
        
        if(9<switcher>>>0)
         {return /* tuple */[0,str_ind,acc];}
        else
         {var new_acc=acc*10+(c-48);
          
          if(new_acc>Sys["max_string_length"])
           {return failwith_message
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
                     Sys["max_string_length"]);
            }
          else
           {return parse_positive(str_ind+1,end_ind,new_acc);}
          }
        };
    
    var
     parse_integer=
      function(str_ind,end_ind)
       {if(str_ind=end_ind){unexpected_end_of_format(end_ind)}else{}
        
        var match=str[str_ind];
        
        var exit;
        
        if(match>=48)
         {if(match>=58)
           {exit=148;}
          else
           {return parse_positive(str_ind,end_ind,0);}
          }
        else
         {if(match!=45)
           {exit=148;}
          else
           {if((str_ind+1)=end_ind){unexpected_end_of_format(end_ind)}else{}
            
            var c=str[str_ind+1];
            
            var switcher=-48+c;
            
            if(9<switcher>>>0)
             {return expected_character(str_ind+1,"digit",c);}
            else
             {var match$1=parse_positive(str_ind+1,end_ind,0);
              
              var n=match$1[2];
              
              var next_ind=match$1[1];
              
              return /* tuple */[0,next_ind,-n];
              }
            }
          }
        
        switch(exit)
         {case 148:
           throw [0,Assert_failure,[0,"camlinternalFormat.ml",2621,11]];
          }
        };
    
    var
     add_literal=
      function(lit_start,str_ind,fmt)
       {var size=str_ind-lit_start;
        
        if(size!=0)
         {if(size!=1)
           {return /* Fmt_EBB */[0,
                    /* String_literal */[11,
                     $$String["sub"](str,lit_start,size),
                     fmt]];
            }
          else
           {return /* Fmt_EBB */[0,/* Char_literal */[12,str[lit_start],fmt]];
            }
          }
        else
         {return /* Fmt_EBB */[0,fmt];}
        };
    
    var
     search_subformat_end=
      function(str_ind,end_ind,c)
       {if(str_ind=end_ind)
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
        else
         {}
        
        var match=str[str_ind];
        
        if(match!=37)
         {return search_subformat_end(str_ind+1,end_ind,c);}
        else
         {if((str_ind+1)=end_ind){unexpected_end_of_format(end_ind)}else{}
          
          if(str[str_ind+1]=c)
           {return str_ind;}
          else
           {var match$1=str[str_ind+1];
            
            var exit;
            
            if(match$1>=95)
             {if(match$1>=123)
               {if(match$1>=126)
                 {exit=155;}
                else
                 {var switcher=-123+match$1;
                  
                  switch(switcher)
                   {case 0:
                     var sub_end=search_subformat_end(str_ind+2,end_ind,125);
                     
                     return search_subformat_end(sub_end+2,end_ind,c);
                     
                    case 1:exit=155;
                    case 2:
                     return expected_character(str_ind+1,"character ')'",125);
                    }
                  }
                }
              else
               {if(match$1>=96)
                 {exit=155;}
                else
                 {if((str_ind+2)=end_ind)
                   {unexpected_end_of_format(end_ind)}
                  else
                   {}
                  
                  var match$2=str[str_ind+2];
                  
                  if(match$2!=40)
                   {if(match$2!=123)
                     {return search_subformat_end(str_ind+3,end_ind,c);}
                    else
                     {var sub_end$1=search_subformat_end(str_ind+3,end_ind,125);
                      
                      return search_subformat_end(sub_end$1+2,end_ind,c);
                      }
                    }
                  else
                   {var sub_end$2=search_subformat_end(str_ind+3,end_ind,41);
                    
                    return search_subformat_end(sub_end$2+2,end_ind,c);
                    }
                  }
                }
              }
            else
             {if(match$1!=40)
               {if(match$1!=41)
                 {exit=155;}
                else
                 {return expected_character(str_ind+1,"character '}'",41);}
                }
              else
               {var sub_end$3=search_subformat_end(str_ind+2,end_ind,41);
                
                return search_subformat_end(sub_end$3+2,end_ind,c);
                }
              }
            
            switch(exit)
             {case 155:return search_subformat_end(str_ind+2,end_ind,c);}
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
           {case 0:exit=157;
            case 1:exit=158;
            case 2:exit=158;
            case 3:exit=158;
            case 4:exit=158;
            case 5:exit=158;
            case 6:exit=158;
            case 7:exit=158;
            case 8:exit=158;
            case 9:exit=158;
            case 10:exit=158;
            case 11:exit=158;
            case 12:exit=157;
            case 13:exit=158;
            case 14:exit=158;
            case 15:exit=158;
            case 16:exit=158;
            case 17:exit=157;
            case 18:exit=158;
            case 19:exit=158;
            case 20:exit=158;
            case 21:exit=158;
            case 22:exit=158;
            case 23:exit=157;
            case 24:exit=158;
            case 25:exit=158;
            case 26:exit=158;
            case 27:exit=158;
            case 28:exit=158;
            case 29:exit=157;
            case 30:exit=158;
            case 31:exit=158;
            case 32:exit=157;
            }
          }
        
        switch(exit)
         {case 158:return /* false */0;case 157:return /* true */1;}
        };
    
    var
     counter_of_char=
      function(symb)
       {var exit;
        
        if(symb>=108)
         {if(symb>=111)
           {exit=159;}
          else
           {var switcher=-108+symb;
            
            switch(switcher)
             {case 0:return /* Line_counter */0;
              case 1:exit=159;
              case 2:return /* Char_counter */1;
              }
            }
          }
        else
         {if(symb!=76){exit=159;}else{return /* Token_counter */2;}}
        
        switch(exit)
         {case 159:
           throw [0,Assert_failure,[0,"camlinternalFormat.ml",2683,34]];
          }
        };
    
    var
     compute_int_conv=
      function(pct_ind,str_ind,plus,sharp,space,symb)
       {var match=plus;
        
        var match$1=sharp;
        
        var match$2=space;
        
        var match$3=symb;
        
        var exit;
        
        if(match!=0)
         {if(match$1!=0)
           {exit=161;}
          else
           {if(match$2!=0)
             {exit=160;}
            else
             {if(match$3!=100)
               {if(match$3!=105){exit=160;}else{return /* Int_pi */4;}}
              else
               {return /* Int_pd */1;}
              }
            }
          }
        else
         {if(match$1!=0)
           {if(match$2!=0)
             {exit=161;}
            else
             {if(match$3!=88)
               {if(match$3!=111)
                 {if(match$3!=120){exit=161;}else{return /* Int_Cx */7;}}
                else
                 {return /* Int_Co */11;}
                }
              else
               {return /* Int_CX */9;}
              }
            }
          else
           {if(match$2!=0)
             {if(match$3!=100)
               {if(match$3!=105){exit=160;}else{return /* Int_si */5;}}
              else
               {return /* Int_sd */2;}
              }
            else
             {var switcher=-88+match$3;
              
              if(32<switcher>>>0)
               {exit=160;}
              else
               {switch(switcher)
                 {case 0:return /* Int_X */8;
                  case 1:exit=160;
                  case 2:exit=160;
                  case 3:exit=160;
                  case 4:exit=160;
                  case 5:exit=160;
                  case 6:exit=160;
                  case 7:exit=160;
                  case 8:exit=160;
                  case 9:exit=160;
                  case 10:exit=160;
                  case 11:exit=160;
                  case 12:return /* Int_d */0;
                  case 13:exit=160;
                  case 14:exit=160;
                  case 15:exit=160;
                  case 16:exit=160;
                  case 17:return /* Int_i */3;
                  case 18:exit=160;
                  case 19:exit=160;
                  case 20:exit=160;
                  case 21:exit=160;
                  case 22:exit=160;
                  case 23:return /* Int_o */10;
                  case 24:exit=160;
                  case 25:exit=160;
                  case 26:exit=160;
                  case 27:exit=160;
                  case 28:exit=160;
                  case 29:return /* Int_u */12;
                  case 30:exit=160;
                  case 31:exit=160;
                  case 32:return /* Int_x */6;
                  }
                }
              }
            }
          }
        
        switch(exit)
         {case 161:
           var exit$1;
           
           var switcher$1=-88+match$3;
           
           if(32<switcher$1>>>0)
            {exit=160;}
           else
            {switch(switcher$1)
              {case 0:
                if(legacy_behavior$1){return /* Int_CX */9;}else{exit=160;}
               case 1:exit=160;
               case 2:exit=160;
               case 3:exit=160;
               case 4:exit=160;
               case 5:exit=160;
               case 6:exit=160;
               case 7:exit=160;
               case 8:exit=160;
               case 9:exit=160;
               case 10:exit=160;
               case 11:exit=160;
               case 12:exit$1=163;
               case 13:exit=160;
               case 14:exit=160;
               case 15:exit=160;
               case 16:exit=160;
               case 17:exit$1=163;
               case 18:exit=160;
               case 19:exit=160;
               case 20:exit=160;
               case 21:exit=160;
               case 22:exit=160;
               case 23:
                if(legacy_behavior$1){return /* Int_Co */11;}else{exit=160;}
               case 24:exit=160;
               case 25:exit=160;
               case 26:exit=160;
               case 27:exit=160;
               case 28:exit=160;
               case 29:exit$1=163;
               case 30:exit=160;
               case 31:exit=160;
               case 32:
                if(legacy_behavior$1){return /* Int_Cx */7;}else{exit=160;}
               }
             }
           
           switch(exit$1)
            {case 163:
              if(legacy_behavior$1)
               {return compute_int_conv
                        (pct_ind,str_ind,plus,/* false */0,space,symb);
                }
              else
               {return incompatible_flag(pct_ind,str_ind,symb,"'#'");}
              
             }
           
          case 160:
           if(match!=0)
            {if(match$2!=0)
              {if(legacy_behavior$1)
                {return compute_int_conv
                         (pct_ind,str_ind,plus,sharp,/* false */0,symb);
                 }
               else
                {return incompatible_flag(pct_ind,str_ind,32,"'+'");}
               }
             else
              {if(legacy_behavior$1)
                {return compute_int_conv
                         (pct_ind,str_ind,/* false */0,sharp,space,symb);
                 }
               else
                {return incompatible_flag(pct_ind,str_ind,symb,"'+'");}
               }
             }
           else
            {if(match$2!=0)
              {if(legacy_behavior$1)
                {return compute_int_conv
                         (pct_ind,str_ind,plus,sharp,/* false */0,symb);
                 }
               else
                {return incompatible_flag(pct_ind,str_ind,symb,"' '");}
               }
             else
              {throw [0,Assert_failure,[0,"camlinternalFormat.ml",2716,28]];}
             }
           
          }
        };
    
    var
     compute_float_conv=
      function(pct_ind,str_ind,plus,space,symb)
       {var match=plus;
        
        var match$1=space;
        
        var match$2=symb;
        
        if(match!=0)
         {if(match$1!=0)
           {if(legacy_behavior$1)
             {return compute_float_conv
                      (pct_ind,str_ind,plus,/* false */0,symb);
              }
            else
             {return incompatible_flag(pct_ind,str_ind,32,"'+'");}
            }
          else
           {var exit;
            
            if(match$2>=72)
             {var switcher=-101+match$2;
              
              if(2<switcher>>>0)
               {exit=164;}
              else
               {switch(switcher)
                 {case 0:return /* Float_pe */4;
                  case 1:return /* Float_pf */1;
                  case 2:return /* Float_pg */10;
                  }
                }
              }
            else
             {if(match$2>=69)
               {var switcher$1=-69+match$2;
                
                switch(switcher$1)
                 {case 0:return /* Float_pE */7;
                  case 1:exit=164;
                  case 2:return /* Float_pG */13;
                  }
                }
              else
               {exit=164;}
              }
            
            switch(exit)
             {case 164:
               if(legacy_behavior$1)
                {return compute_float_conv
                         (pct_ind,str_ind,/* false */0,space,symb);
                 }
               else
                {return incompatible_flag(pct_ind,str_ind,symb,"'+'");}
               
              }
            }
          }
        else
         {if(match$1!=0)
           {var exit$1;
            
            if(match$2>=72)
             {var switcher$2=-101+match$2;
              
              if(2<switcher$2>>>0)
               {exit$1=165;}
              else
               {switch(switcher$2)
                 {case 0:return /* Float_se */5;
                  case 1:return /* Float_sf */2;
                  case 2:return /* Float_sg */11;
                  }
                }
              }
            else
             {if(match$2>=69)
               {var switcher$3=-69+match$2;
                
                switch(switcher$3)
                 {case 0:return /* Float_sE */8;
                  case 1:exit$1=165;
                  case 2:return /* Float_sG */14;
                  }
                }
              else
               {exit$1=165;}
              }
            
            switch(exit$1)
             {case 165:
               if(legacy_behavior$1)
                {return compute_float_conv
                         (pct_ind,str_ind,plus,/* false */0,symb);
                 }
               else
                {return incompatible_flag(pct_ind,str_ind,symb,"' '");}
               
              }
            }
          else
           {var exit$2;
            
            if(match$2>=72)
             {var switcher$4=-101+match$2;
              
              if(2<switcher$4>>>0)
               {exit$2=166;}
              else
               {switch(switcher$4)
                 {case 0:return /* Float_e */3;
                  case 1:return /* Float_f */0;
                  case 2:return /* Float_g */9;
                  }
                }
              }
            else
             {if(match$2>=69)
               {var switcher$5=-69+match$2;
                
                switch(switcher$5)
                 {case 0:return /* Float_E */6;
                  case 1:return /* Float_F */15;
                  case 2:return /* Float_G */12;
                  }
                }
              else
               {exit$2=166;}
              }
            
            switch(exit$2)
             {case 166:
               throw [0,Assert_failure,[0,"camlinternalFormat.ml",2744,25]];
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
                 subfmt);
        };
    
    return parse(0,str["length"]);
    };

var
 format_of_string_fmtty=
  function(str,fmtty)
   {var match=fmt_ebb_of_string(/* None */0,str);
    
    var fmt=match[1];
    
    try
     {return /* Format */[0,type_format(fmt,fmtty),str];}
    catch(exn)
     {if(exn=Type_mismatch)
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
                 string_of_fmtty(fmtty));
        }
      else
       {throw exn;}
      }
    };

var
 format_of_string_format=
  function(str,param)
   {var str$prime=param[2];
    
    var fmt$prime=param[1];
    
    var match=fmt_ebb_of_string(/* None */0,str);
    
    var fmt=match[1];
    
    try
     {return /* Format */[0,type_format(fmt,fmtty_of_fmt(fmt$prime)),str];}
    catch(exn)
     {if(exn=Type_mismatch)
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
                 str$prime);
        }
      else
       {throw exn;}
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

