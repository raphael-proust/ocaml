// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var CamlinternalFormatBasics=require("./camlinternalFormatBasics.js");
var CamlinternalFormat=require("./camlinternalFormat.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Printf=require("./printf.js");
var Buffer=require("./buffer.js");
var CamlPrimitive=require("./camlPrimitive.js");


var null_char=0;

var
 next_char=
  function(ib)
   {try
     {var c=ib[7](/* () */0);
      
      ib[2]=c;
      ib[3]=/* true */1;
      ib[4]=1+ib[4];
      if(c===10){c===10}
      
      return c;
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["End_of_file"])
       {ib[2]=null_char;
        ib[3]=/* false */0;
        ib[1]=/* true */1;
        return null_char;
        }
      else
       {throw exn;}
      }
    };

var peek_char=function(ib){return ib[3]?ib[2]:next_char(ib);};

var
 checked_peek_char=
  function(ib)
   {var c=peek_char(ib);
    
    if(ib[1]){throw CamlPrimitive["caml_global_data"]["End_of_file"];}else{}
    
    return c;
    };

var end_of_input=function(ib){peek_char(ib);return ib[1];};

var eof=function(ib){return ib[1];};

var beginning_of_input=function(ib){return ib[4]===0;};

var
 name_of_input=
  function(ib)
   {var match=ib[9];
    
    if(typeof match==="number")
     {switch(match)
       {case 0:return "unnamed character string";
        case 1:return "unnamed function";
        }}
    else
     {switch(match[0])
       {case 0:return match[1];
        case 1:return "unnamed pervasives input channel";
        }}
    };

var char_count=function(ib){return ib[3]?ib[4]-1:ib[4];};

var line_count=function(ib){return ib[5];};

var reset_token=function(ib){return Buffer["reset"](ib[8]);};

var invalidate_current_char=function(ib){return ib[3]=/* false */0,0;};

var
 token=
  function(ib)
   {var tokbuf=ib[8];
    
    var tok=Buffer["contents"](tokbuf);
    
    Buffer["clear"](tokbuf);
    ib[6]=1+ib[6];
    return tok;
    };

var token_count=function(ib){return ib[6];};

var skip_char=function(width,ib){invalidate_current_char(ib);return width;};

var ignore_char=function(width,ib){return skip_char(width-1,ib);};

var
 store_char=
  function(width,ib,c)
   {Buffer["add_char"](ib[8],c);return ignore_char(width,ib);};

var default_token_buffer_size=1024;

var
 create=
  function(iname,next)
   {return /* record */[0,
            /* false */0,
            null_char,
            /* false */0,
            0,
            0,
            0,
            next,
            Buffer["create"](default_token_buffer_size),
            iname];
    };

var
 from_string=
  function(s)
   {var i=[0,0];
    
    var len=s["length"];
    
    var
     next=
      function(param)
       {if(i[1]>=len)
         {throw CamlPrimitive["caml_global_data"]["End_of_file"];}
        else
         {var c=s["charCodeAt"](i[1]);i[0]++;return c;}
        };
    
    return create(/* From_string */0,next);
    };

var from_function=create(/* From_function */1);

var file_buffer_size=[0,1024];

var
 scan_close_at_end=
  function(ic)
   {Pervasives["close_in"](ic);
    throw CamlPrimitive["caml_global_data"]["End_of_file"];
    };

var
 scan_raise_at_end=
  function(_ic){throw CamlPrimitive["caml_global_data"]["End_of_file"];};

var
 from_ic=
  function(scan_close_ic,iname,ic)
   {var len=file_buffer_size[1];
    
    var buf=CamlPrimitive["caml_create_string"](len);
    
    var i=[0,0];
    
    var lim=[0,0];
    
    var eof$1=[0,/* false */0];
    
    var
     next=
      function(param)
       {if(i[1]<lim[1])
         {var c=buf[i[1]];i[0]++;return c;}
        else
         {if(eof$1[1])
           {throw CamlPrimitive["caml_global_data"]["End_of_file"];}
          else
           {lim[1]=Pervasives["input"](ic,buf,0,len);
            return lim[1]===0
                    ?(eof$1[1]=/* true */1,scan_close_ic(ic))
                    :(i[1]=1,buf[0]);
            }
          }
        };
    
    return create(iname,next);
    };

var from_ic_close_at_end=from_ic(scan_close_at_end);

var
 stdin=
  from_ic
   (scan_raise_at_end,
    /* From_file */[0,"-",Pervasives["stdin"]],
    Pervasives["stdin"]);

var
 open_in=
  function(fname)
   {switch(fname)
     {case "-":return stdin;
      default:
       var ic=Pervasives["open_in"](fname);
       
       return from_ic_close_at_end(/* From_file */[0,fname,ic],ic);
       }
    };

var
 open_in_bin=
  function(fname)
   {switch(fname)
     {case "-":return stdin;
      default:
       var ic=Pervasives["open_in_bin"](fname);
       
       return from_ic_close_at_end(/* From_file */[0,fname,ic],ic);
       }
    };

var memo=[0,/* [] */0];

var
 memo_from_ic=
  function(scan_close_ic,ic)
   {try
     {return List["assq"](ic,memo[1]);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var ib=from_ic(scan_close_ic,/* From_channel */[1,ic],ic);
        
        memo[1]=/* :: */[0,/* tuple */[0,ic,ib],memo[1]];
        return ib;
        }
      else
       {throw exn;}
      }
    };

var from_channel=memo_from_ic(scan_raise_at_end);

var
 close_in=
  function(ib)
   {var match=ib[9];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=247;case 1:exit=247;}}
    else
     {switch(match[0])
       {case 0:return Pervasives["close_in"](match[2]);
        case 1:return Pervasives["close_in"](match[1]);
        }}
    
    switch(exit){case 247:return /* () */0;}
    };

var
 Scanning=
  [0,
   stdin,
   stdin,
   next_char,
   invalidate_current_char,
   peek_char,
   checked_peek_char,
   store_char,
   skip_char,
   ignore_char,
   token,
   reset_token,
   char_count,
   line_count,
   token_count,
   eof,
   end_of_input,
   beginning_of_input,
   name_of_input,
   open_in,
   open_in_bin,
   open_in,
   open_in_bin,
   from_string,
   from_function,
   from_channel,
   close_in];

var
 Scan_failure=
  CamlPrimitive["caml_set_oo_id"]([248,"Scanf.Scan_failure",0]);

var bad_input=function(s){throw [0,Scan_failure,s];};

var
 bad_input_escape=
  function(c)
   {return bad_input
            (Printf["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "illegal escape character ",
                 [/* Caml_char */1,/* End_of_format */0]],
                "illegal escape character %C"],
               c));
    };

var
 bad_token_length=
  function(message)
   {return bad_input
            (Printf["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "scanning of ",
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   " failed: the specified length was too short for token",
                   /* End_of_format */0]]],
                "scanning of %s failed: the specified length was too short for token"],
               message));
    };

var
 bad_end_of_input=
  function(message)
   {return bad_input
            (Printf["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "scanning of ",
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   " failed: premature end of file occurred before end of token",
                   /* End_of_format */0]]],
                "scanning of %s failed: premature end of file occurred before end of token"],
               message));
    };

var
 bad_float=
  function(param)
   {return bad_input("no dot or exponent part found in float token");};

var
 character_mismatch_err=
  function(c,ci)
   {return Printf["sprintf"]
            ([/* Format */0,
              [/* String_literal */11,
               "looking for ",
               [/* Caml_char */1,
                [/* String_literal */11,
                 ", found ",
                 [/* Caml_char */1,/* End_of_format */0]]]],
              "looking for %C, found %C"],
             c,
             ci);
    };

var
 character_mismatch=
  function(c,ci){return bad_input(character_mismatch_err(c,ci));};

var
 skip_whites=
  function(ib)
   {var c=Scanning[5](ib);
    
    if(!Scanning[15](ib))
     {var exit;
      
      var switcher=-9+c;
      
      if(!(4<switcher>>>0))
       {if(1<-2+switcher>>>0){exit=237;}else{exit=238;}}
      else
       {if(switcher!==23){exit=238;}else{exit=237;}}
      
      switch(exit)
       {case 238:return /* () */0;
        case 237:Scanning[4](ib);return skip_whites(ib);
        }
      }
    else
     {return 0;}
    };

var
 check_char=
  function(ib,c)
   {if(c===32)
     {return skip_whites(ib);}
    else
     {var ci=Scanning[6](ib);
      
      if(ci===c)
       {return Scanning[4](ib);}
      else
       {var exit;
        
        if(ci!==13)
         {exit=235;}
        else
         {if(c===10){Scanning[4](ib);return check_char(ib,10);}else{exit=235;}
          }
        
        switch(exit){case 235:return character_mismatch(c,ci);}
        }
      }
    };

var token_char=function(ib){return Scanning[10](ib)["charCodeAt"](0);};

var token_string=Scanning[10];

var
 token_bool=
  function(ib)
   {var s=Scanning[10](ib);
    
    var exit;
    
    switch(s)
     {case "false":return /* false */0;
      case "true":return /* true */1;
      default:exit=231;}
    
    switch(exit)
     {case 231:
       return bad_input
               (Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "invalid boolean ",
                    [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                   "invalid boolean %S"],
                  s));
       
      }
    };

var
 token_int_literal=
  function(conv,ib)
   {var exit;
    
    var switcher=-88+conv;
    
    var tok;
    if(32<switcher>>>0)
     {exit=228;}
    else
     {switch(switcher)
       {case 0:exit=227;
        case 1:exit=228;
        case 2:exit=228;
        case 3:exit=228;
        case 4:exit=228;
        case 5:exit=228;
        case 6:exit=228;
        case 7:exit=228;
        case 8:exit=228;
        case 9:exit=228;
        case 10:tok=Pervasives["^"]("0b",Scanning[10](ib));
        case 11:exit=228;
        case 12:exit=226;
        case 13:exit=228;
        case 14:exit=228;
        case 15:exit=228;
        case 16:exit=228;
        case 17:exit=226;
        case 18:exit=228;
        case 19:exit=228;
        case 20:exit=228;
        case 21:exit=228;
        case 22:exit=228;
        case 23:tok=Pervasives["^"]("0o",Scanning[10](ib));
        case 24:exit=228;
        case 25:exit=228;
        case 26:exit=228;
        case 27:exit=228;
        case 28:exit=228;
        case 29:exit=226;
        case 30:exit=228;
        case 31:exit=228;
        case 32:exit=227;
        }
      }
    
    switch(exit)
     {case 228:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"scanf.ml",507,11]];
       
      case 226:var tok=Scanning[10](ib);
      case 227:var tok=Pervasives["^"]("0x",Scanning[10](ib));
      }
    
    var l=tok["length"];
    
    return l===0||tok["charCodeAt"](0)!==43?tok:$$String["sub"](tok,1,l-1);
    };

var
 token_int=
  function(conv,ib)
   {return CamlPrimitive["caml_int_of_string"](token_int_literal(conv,ib));};

var
 token_float=
  function(ib)
   {return CamlPrimitive["caml_float_of_string"](Scanning[10](ib));};

var
 token_nativeint=
  function(conv,ib)
   {return CamlPrimitive["caml_nativeint_of_string"]
            (token_int_literal(conv,ib));
    };

var
 token_int32=
  function(conv,ib)
   {return CamlPrimitive["caml_int32_of_string"](token_int_literal(conv,ib));};

var
 token_int64=
  function(conv,ib)
   {return CamlPrimitive["caml_int64_of_string"](token_int_literal(conv,ib));};

var
 scan_decimal_digits=
  function(width,ib)
   {if(width===0)
     {return width;}
    else
     {var c=Scanning[5](ib);
      
      if(Scanning[15](ib))
       {return width;}
      else
       {var exit;
        
        if(c>=58)
         {if(c!==95)
           {exit=218;}
          else
           {var width$1=Scanning[9](width,ib);
            
            return scan_decimal_digits(width$1,ib);
            }
          }
        else
         {if(c>=48)
           {var width$2=Scanning[7](width,ib,c);
            
            return scan_decimal_digits(width$2,ib);
            }
          else
           {exit=218;}
          }
        
        switch(exit){case 218:return width;}
        }
      }
    };

var
 scan_decimal_digits_plus=
  function(width,ib)
   {if(width===0)
     {return bad_token_length("decimal digits");}
    else
     {var c=Scanning[6](ib);
      
      if(9<-48+c>>>0)
       {return bad_input
                (Printf["sprintf"]
                  ([/* Format */0,
                    [/* String_literal */11,
                     "character ",
                     [/* Caml_char */1,
                      [/* String_literal */11,
                       " is not a decimal digit",
                       /* End_of_format */0]]],
                    "character %C is not a decimal digit"],
                   c));
        }
      else
       {var width$1=Scanning[7](width,ib,c);
        
        return scan_decimal_digits(width$1,ib);
        }
      }
    };

var
 scan_digits_plus=
  function(basis,digitp,width,ib)
   {var
     scan_digits=
      function(width)
       {if(width===0)
         {return width;}
        else
         {var c=Scanning[5](ib);
          
          if(Scanning[15](ib))
           {return width;}
          else
           {if(digitp(c))
             {var width$1=Scanning[7](width,ib,c);
              
              return scan_digits(width$1);
              }
            else
             {if(c!==95)
               {return width;}
              else
               {var width$2=Scanning[9](width,ib);
                
                return scan_digits(width$2);
                }
              }
            }
          }
        };
    
    if(width===0)
     {return bad_token_length("digits");}
    else
     {var c=Scanning[6](ib);
      
      if(digitp(c))
       {var width$1=Scanning[7](width,ib,c);return scan_digits(width$1);}
      else
       {return bad_input
                (Printf["sprintf"]
                  ([/* Format */0,
                    [/* String_literal */11,
                     "character ",
                     [/* Caml_char */1,
                      [/* String_literal */11,
                       " is not a valid ",
                       [/* String */2,
                        /* No_padding */0,
                        [/* String_literal */11," digit",/* End_of_format */0]]]]],
                    "character %C is not a valid %s digit"],
                   c,
                   basis));
        }
      }
    };

var
 is_binary_digit=
  function(param){return 1<-48+param>>>0?/* false */0:/* true */1;};

var scan_binary_int=scan_digits_plus("binary",is_binary_digit);

var
 is_octal_digit=
  function(param){return 7<-48+param>>>0?/* false */0:/* true */1;};

var scan_octal_int=scan_digits_plus("octal",is_octal_digit);

var
 is_hexa_digit=
  function(param)
   {var exit;
    
    var switcher=-48+param;
    
    if(22<switcher>>>0)
     {if(5<-49+switcher>>>0){exit=192;}else{exit=191;}}
    else
     {if(6<-10+switcher>>>0){exit=191;}else{exit=192;}}
    
    switch(exit){case 192:return /* false */0;case 191:return /* true */1;}
    };

var scan_hexadecimal_int=scan_digits_plus("hexadecimal",is_hexa_digit);

var
 scan_sign=
  function(width,ib)
   {var c=Scanning[6](ib);
    
    var exit;
    
    var switcher=-43+c;
    
    if(2<switcher>>>0)
     {exit=186;}
    else
     {switch(switcher)
       {case 0:return Scanning[7](width,ib,c);
        case 1:exit=186;
        case 2:return Scanning[7](width,ib,c);
        }
      }
    
    switch(exit){case 186:return width;}
    };

var
 scan_optionally_signed_decimal_int=
  function(width,ib)
   {var width$1=scan_sign(width,ib);
    
    return scan_decimal_digits_plus(width$1,ib);
    };

var
 scan_unsigned_int=
  function(width,ib)
   {var c=Scanning[6](ib);
    
    if(c!==48)
     {return scan_decimal_digits_plus(width,ib);}
    else
     {var width$1=Scanning[7](width,ib,c);
      
      if(width$1===0)
       {return width$1;}
      else
       {var c$1=Scanning[5](ib);
        
        if(Scanning[15](ib))
         {return width$1;}
        else
         {var exit;
          
          if(c$1>=99)
           {if(c$1!==111)
             {if(c$1!==120){exit=179;}else{exit=178;}}
            else
             {return scan_octal_int(Scanning[7](width$1,ib,c$1),ib);}
            }
          else
           {if(c$1!==88)
             {if(c$1>=98)
               {return scan_binary_int(Scanning[7](width$1,ib,c$1),ib);}
              else
               {exit=179;}
              }
            else
             {exit=178;}
            }
          
          switch(exit)
           {case 179:return scan_decimal_digits(width$1,ib);
            case 178:
             return scan_hexadecimal_int(Scanning[7](width$1,ib,c$1),ib);
            }
          }
        }
      }
    };

var
 scan_optionally_signed_int=
  function(width,ib)
   {var width$1=scan_sign(width,ib);return scan_unsigned_int(width$1,ib);};

var
 scan_int_conv=
  function(conv,width,ib)
   {var exit;
    
    var switcher=-88+conv;
    
    if(32<switcher>>>0)
     {exit=174;}
    else
     {switch(switcher)
       {case 0:exit=173;
        case 1:exit=174;
        case 2:exit=174;
        case 3:exit=174;
        case 4:exit=174;
        case 5:exit=174;
        case 6:exit=174;
        case 7:exit=174;
        case 8:exit=174;
        case 9:exit=174;
        case 10:return scan_binary_int(width,ib);
        case 11:exit=174;
        case 12:return scan_optionally_signed_decimal_int(width,ib);
        case 13:exit=174;
        case 14:exit=174;
        case 15:exit=174;
        case 16:exit=174;
        case 17:return scan_optionally_signed_int(width,ib);
        case 18:exit=174;
        case 19:exit=174;
        case 20:exit=174;
        case 21:exit=174;
        case 22:exit=174;
        case 23:return scan_octal_int(width,ib);
        case 24:exit=174;
        case 25:exit=174;
        case 26:exit=174;
        case 27:exit=174;
        case 28:exit=174;
        case 29:return scan_decimal_digits_plus(width,ib);
        case 30:exit=174;
        case 31:exit=174;
        case 32:exit=173;
        }
      }
    
    switch(exit)
     {case 174:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"scanf.ml",674,9]];
       
      case 173:return scan_hexadecimal_int(width,ib);
      }
    };

var
 scan_frac_part=
  function(width,ib)
   {if(width===0)
     {return width;}
    else
     {var c=Scanning[5](ib);
      
      return Scanning[15](ib)
              ?width
              :9<-48+c>>>0
                ?width
                :scan_decimal_digits(Scanning[7](width,ib,c),ib);
      }
    };

var
 scan_exp_part=
  function(width,ib)
   {if(width===0)
     {return width;}
    else
     {var c=Scanning[5](ib);
      
      if(Scanning[15](ib))
       {return width;}
      else
       {var exit;
        
        if(c!==69){if(c!==101){return width;}else{exit=165;}}else{exit=165;}
        
        switch(exit)
         {case 165:
           return scan_optionally_signed_decimal_int
                   (Scanning[7](width,ib,c),ib);
           
          }
        }
      }
    };

var
 scan_int_part=
  function(width,ib)
   {var width$1=scan_sign(width,ib);return scan_decimal_digits(width$1,ib);};

var
 scan_float=
  function(width,precision,ib)
   {var width$1=scan_int_part(width,ib);
    
    if(width$1===0)
     {return /* tuple */[0,width$1,precision];}
    else
     {var c=Scanning[5](ib);
      
      if(Scanning[15](ib))
       {return /* tuple */[0,width$1,precision];}
      else
       {if(c!==46)
         {return /* tuple */[0,scan_exp_part(width$1,ib),precision];}
        else
         {var width$2=Scanning[7](width$1,ib,c);
          
          var precision$1=Pervasives["min"](width$2,precision);
          
          var width$3=width$2-(precision$1-scan_frac_part(precision$1,ib));
          
          return /* tuple */[0,scan_exp_part(width$3,ib),precision$1];
          }
        }
      }
    };

var
 scan_caml_float=
  function(width,precision,ib)
   {var width$1=scan_optionally_signed_decimal_int(width,ib);
    
    if(width$1===0)
     {return bad_float(/* () */0);}
    else
     {var c=Scanning[5](ib);
      
      if(Scanning[15](ib))
       {return bad_float(/* () */0);}
      else
       {var exit;
        
        var switcher=-69+c;
        
        if(!(32<switcher>>>0))
         {if(30<-1+switcher>>>0)
           {return scan_exp_part(width$1,ib);}
          else
           {exit=152;}
          }
        else
         {if(switcher!==-23)
           {exit=152;}
          else
           {var width$2=Scanning[7](width$1,ib,c);
            
            var precision$1=Pervasives["min"](width$2,precision);
            
            var width$3=width$2-(precision$1-scan_frac_part(precision$1,ib));
            
            return scan_exp_part(width$3,ib);
            }
          }
        
        switch(exit){case 152:return bad_float(/* () */0);}
        }
      }
    };

var
 scan_string=
  function(stp,width,ib)
   {var
     loop=
      function(width)
       {if(width===0)
         {return width;}
        else
         {var c=Scanning[5](ib);
          
          if(Scanning[15](ib))
           {return width;}
          else
           {if(stp)
             {return c===stp[1]
                      ?Scanning[8](width,ib)
                      :loop(Scanning[7](width,ib,c));
              }
            else
             {var exit;
              
              var switcher=-9+c;
              
              if(!(4<switcher>>>0))
               {if(1<-2+switcher>>>0){exit=144;}else{exit=145;}}
              else
               {if(switcher!==23){exit=145;}else{exit=144;}}
              
              switch(exit)
               {case 145:return loop(Scanning[7](width,ib,c));
                case 144:return width;
                }
              }
            }
          }
        };
    
    return loop(width);
    };

var
 scan_char=
  function(width,ib){return Scanning[7](width,ib,Scanning[6](ib));};

var
 char_for_backslash=
  function(c)
   {var exit;
    
    if(c>=110)
     {if(c>=117)
       {exit=141;}
      else
       {switch(-110+c)
         {case 0:return 10;
          case 1:exit=141;
          case 2:exit=141;
          case 3:exit=141;
          case 4:return 13;
          case 5:exit=141;
          case 6:return 9;
          }
        }
      }
    else
     {if(c!==98){exit=141;}else{return 8;}}
    
    switch(exit){case 141:return c;}
    };

var decimal_value_of_char=function(c){return c-48;};

var
 char_for_decimal_code=
  function(c0,c1,c2)
   {var
     c=
      100*
      decimal_value_of_char(c0)+
      10*
      decimal_value_of_char(c1)+
      decimal_value_of_char(c2);
    
    return c<0||c>255
            ?bad_input
              (Printf["sprintf"]
                ([/* Format */0,
                  [/* String_literal */11,
                   "bad character decimal encoding \",
                   [/* Char */0,
                    [/* Char */0,[/* Char */0,/* End_of_format */0]]]],
                  "bad character decimal encoding \%c%c%c"],
                 c0,
                 c1,
                 c2))
            :Pervasives["char_of_int"](c);
    };

var
 hexadecimal_value_of_char=
  function(c){var d=c;return d>=97?d-87:d>=65?d-55:d-48;};

var
 char_for_hexadecimal_code=
  function(c1,c2)
   {var c=16*hexadecimal_value_of_char(c1)+hexadecimal_value_of_char(c2);
    
    return c<0||c>255
            ?bad_input
              (Printf["sprintf"]
                ([/* Format */0,
                  [/* String_literal */11,
                   "bad character hexadecimal encoding \",
                   [/* Char */0,[/* Char */0,/* End_of_format */0]]],
                  "bad character hexadecimal encoding \%c%c"],
                 c1,
                 c2))
            :Pervasives["char_of_int"](c);
    };

var
 check_next_char=
  function(message,width,ib)
   {if(width===0)
     {return bad_token_length(message);}
    else
     {var c=Scanning[5](ib);
      
      return Scanning[15](ib)?bad_end_of_input(message):c;
      }
    };

var check_next_char_for_char=check_next_char("a Char");

var check_next_char_for_string=check_next_char("a String");

var
 scan_backslash_char=
  function(width,ib)
   {var c=check_next_char_for_char(width,ib);
    
    var exit;
    
    if(c>=40)
     {if(c>=58)
       {var switcher=-92+c;
        
        if(28<switcher>>>0)
         {exit=128;}
        else
         {switch(switcher)
           {case 0:exit=126;
            case 1:exit=128;
            case 2:exit=128;
            case 3:exit=128;
            case 4:exit=128;
            case 5:exit=128;
            case 6:exit=126;
            case 7:exit=128;
            case 8:exit=128;
            case 9:exit=128;
            case 10:exit=128;
            case 11:exit=128;
            case 12:exit=128;
            case 13:exit=128;
            case 14:exit=128;
            case 15:exit=128;
            case 16:exit=128;
            case 17:exit=128;
            case 18:exit=126;
            case 19:exit=128;
            case 20:exit=128;
            case 21:exit=128;
            case 22:exit=126;
            case 23:exit=128;
            case 24:exit=126;
            case 25:exit=128;
            case 26:exit=128;
            case 27:exit=128;
            case 28:
             var
              get_digit=
               function(param)
                {var c$1=Scanning[3](ib);
                 
                 var exit$1;
                 
                 var switcher$1=-48+c$1;
                 
                 if(22<switcher$1>>>0)
                  {if(5<-49+switcher$1>>>0){exit$1=123;}else{exit$1=122;}}
                 else
                  {if(6<-10+switcher$1>>>0){exit$1=122;}else{exit$1=123;}}
                 
                 switch(exit$1)
                  {case 123:return bad_input_escape(c$1);case 122:return c$1;}
                 };
             
             var c1=get_digit(/* () */0);
             
             var c2=get_digit(/* () */0);
             
             return Scanning[7](width-2,ib,char_for_hexadecimal_code(c1,c2));
             
            }
          }
        }
      else
       {if(c>=48)
         {var
           get_digit$1=
            function(param)
             {var c$1=Scanning[3](ib);
              
              return 9<-48+c$1>>>0?bad_input_escape(c$1):c$1;
              };
          
          var c1$1=get_digit$1(/* () */0);
          
          var c2$1=get_digit$1(/* () */0);
          
          return Scanning[7](width-2,ib,char_for_decimal_code(c,c1$1,c2$1));
          }
        else
         {exit=128;}
        }
      }
    else
     {if(c!==34){if(c>=39){exit=126;}else{exit=128;}}else{exit=126;}}
    
    switch(exit)
     {case 128:return bad_input_escape(c);
      case 126:return Scanning[7](width,ib,char_for_backslash(c));
      }
    };

var
 scan_caml_char=
  function(width,ib)
   {var
     find_start=
      function(width)
       {var c=Scanning[6](ib);
        
        return c!==39
                ?character_mismatch(39,c)
                :find_char(Scanning[9](width,ib));
        };
    
    var
     find_char=
      function(width)
       {var c=check_next_char_for_char(width,ib);
        
        return c!==92
                ?find_stop(Scanning[7](width,ib,c))
                :find_stop(scan_backslash_char(Scanning[9](width,ib),ib));
        };
    
    var
     find_stop=
      function(width)
       {var c=check_next_char_for_char(width,ib);
        
        return c!==39?character_mismatch(39,c):Scanning[9](width,ib);
        };
    
    return find_start(width);
    };

var
 scan_caml_string=
  function(width,ib)
   {var
     find_start=
      function(width)
       {var c=Scanning[6](ib);
        
        return c!==34
                ?character_mismatch(34,c)
                :find_stop(Scanning[9](width,ib));
        };
    
    var
     find_stop=
      function(width)
       {var c=check_next_char_for_string(width,ib);
        
        return c!==34
                ?c!==92
                  ?find_stop(Scanning[7](width,ib,c))
                  :scan_backslash(Scanning[9](width,ib))
                :Scanning[9](width,ib);
        };
    
    var
     scan_backslash=
      function(width)
       {var match=check_next_char_for_string(width,ib);
        
        return match!==10
                ?match!==13
                  ?find_stop(scan_backslash_char(width,ib))
                  :skip_newline(Scanning[9](width,ib))
                :skip_spaces(Scanning[9](width,ib));
        };
    
    var
     skip_newline=
      function(width)
       {var match=check_next_char_for_string(width,ib);
        
        return match!==10
                ?find_stop(Scanning[7](width,ib,13))
                :skip_spaces(Scanning[9](width,ib));
        };
    
    var
     skip_spaces=
      function(width)
       {var match=check_next_char_for_string(width,ib);
        
        return match!==32?find_stop(width):skip_spaces(Scanning[9](width,ib));
        };
    
    return find_start(width);
    };

var
 scan_bool=
  function(ib)
   {var c=Scanning[6](ib);
    
    var
     m=
      c!==102
       ?c!==116
         ?bad_input
           (Printf["sprintf"]
             ([/* Format */0,
               [/* String_literal */11,
                "the character ",
                [/* Caml_char */1,
                 [/* String_literal */11,
                  " cannot start a boolean",
                  /* End_of_format */0]]],
               "the character %C cannot start a boolean"],
              c))
         :4
       :5;
    
    return scan_string(/* None */0,m,ib);
    };

var
 scan_chars_in_char_set=
  function(char_set,scan_indic,width,ib)
   {var
     scan_chars=
      function(i,stp)
       {var c=Scanning[5](ib);
        
        if
         (i>
          0&&
          !Scanning[15](ib)&&
          CamlinternalFormat["is_in_char_set"](char_set,c)&&
          c!==
          stp)
         {var match=Scanning[7](Pervasives["max_int"],ib,c);
          
          return scan_chars(i-1,stp);
          }
        else
         {return 0;}
        };
    
    if(scan_indic)
     {var c=scan_indic[1];
      
      scan_chars(width,c);
      if(!Scanning[15](ib))
       {var ci=Scanning[5](ib);
        
        return c===ci?Scanning[4](ib):character_mismatch(c,ci);
        }
      else
       {return 0;}
      }
    else
     {return scan_chars(width,-1);}
    };

var
 scanf_bad_input=
  function(ib,x)
   {var exit;
    
    if(x[1]===Scan_failure)
     {var s=x[2];exit=91;}
    else
     {if(x[1]===CamlPrimitive["caml_global_data"]["Failure"])
       {var s=x[2];exit=91;}
      else
       {throw x;}
      }
    
    switch(exit)
     {case 91:
       var i=Scanning[12](ib);
       
       return bad_input
               (Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "scanf: bad input at char number ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* String_literal */11,
                      ": ",
                      [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]]]],
                   "scanf: bad input at char number %i: %S"],
                  i,
                  s));
       
      }
    };

var
 get_counter=
  function(ib,counter)
   {switch(counter)
     {case 0:return Scanning[13](ib);
      case 1:return Scanning[12](ib);
      case 2:return Scanning[14](ib);
      }
    };

var
 width_of_pad_opt=
  function(pad_opt){return pad_opt?pad_opt[1]:Pervasives["max_int"];};

var
 stopper_of_formatting_lit=
  function(fmting)
   {if(fmting===/* Escaped_percent */6)
     {return [/* tuple */0,37,""];}
    else
     {var str=CamlinternalFormat["string_of_formatting_lit"](fmting);
      
      var stp=str["charCodeAt"](1);
      
      var sub_str=$$String["sub"](str,2,str["length"]-2);
      
      return /* tuple */[0,stp,sub_str];
      }
    };

var
 take_format_readers=
  function(k,fmt)
   {if(typeof fmt==="number")
     {switch(fmt){case 0:return k(/* Nil */0);}}
    else
     {switch(fmt[0])
       {case 0:return take_format_readers(k,fmt[1]);
        case 1:return take_format_readers(k,fmt[1]);
        case 2:return take_format_readers(k,fmt[2]);
        case 3:return take_format_readers(k,fmt[2]);
        case 4:return take_format_readers(k,fmt[4]);
        case 5:return take_format_readers(k,fmt[4]);
        case 6:return take_format_readers(k,fmt[4]);
        case 7:return take_format_readers(k,fmt[4]);
        case 8:return take_format_readers(k,fmt[4]);
        case 9:return take_format_readers(k,fmt[1]);
        case 10:return take_format_readers(k,fmt[1]);
        case 11:return take_format_readers(k,fmt[2]);
        case 12:return take_format_readers(k,fmt[2]);
        case 13:return take_format_readers(k,fmt[3]);
        case 14:
         return take_fmtty_format_readers
                 (k,
                  CamlinternalFormatBasics["erase_rel"]
                   (CamlinternalFormat["symm"](fmt[2])),
                  fmt[3]);
         
        case 15:return take_format_readers(k,fmt[1]);
        case 16:return take_format_readers(k,fmt[1]);
        case 17:return take_format_readers(k,fmt[2]);
        case 18:
         var match=fmt[1];
         
         switch(match[0])
          {case 0:
            return take_format_readers
                    (k,
                     CamlinternalFormatBasics["concat_fmt"](match[1][1],fmt[2]));
            
           case 1:
            return take_format_readers
                    (k,
                     CamlinternalFormatBasics["concat_fmt"](match[1][1],fmt[2]));
            
           }
         
        case 19:
         var fmt_rest=fmt[1];
         
         return function(reader)
          {var
            new_k=
             function(readers_rest)
              {return k(/* Cons */[0,reader,readers_rest]);};
           
           return take_format_readers(new_k,fmt_rest);
           };
         
        case 20:return take_format_readers(k,fmt[3]);
        case 21:return take_format_readers(k,fmt[2]);
        case 22:return take_format_readers(k,fmt[1]);
        case 23:return take_ignored_format_readers(k,fmt[1],fmt[2]);
        case 24:return take_format_readers(k,fmt[3]);
        }}
    };

var
 take_fmtty_format_readers=
  function(k,fmtty,fmt)
   {if(typeof fmtty==="number")
     {switch(fmtty){case 0:return take_format_readers(k,fmt);}}
    else
     {switch(fmtty[0])
       {case 0:return take_fmtty_format_readers(k,fmtty[1],fmt);
        case 1:return take_fmtty_format_readers(k,fmtty[1],fmt);
        case 2:return take_fmtty_format_readers(k,fmtty[1],fmt);
        case 3:return take_fmtty_format_readers(k,fmtty[1],fmt);
        case 4:return take_fmtty_format_readers(k,fmtty[1],fmt);
        case 5:return take_fmtty_format_readers(k,fmtty[1],fmt);
        case 6:return take_fmtty_format_readers(k,fmtty[1],fmt);
        case 7:return take_fmtty_format_readers(k,fmtty[1],fmt);
        case 8:return take_fmtty_format_readers(k,fmtty[2],fmt);
        case 9:
         var
          ty=
           CamlinternalFormat["trans"]
            (CamlinternalFormat["symm"](fmtty[1]),fmtty[2]);
         
         return take_fmtty_format_readers
                 (k,CamlinternalFormatBasics["concat_fmtty"](ty,fmtty[3]),fmt);
         
        case 10:return take_fmtty_format_readers(k,fmtty[1],fmt);
        case 11:return take_fmtty_format_readers(k,fmtty[1],fmt);
        case 12:return take_fmtty_format_readers(k,fmtty[1],fmt);
        case 13:
         var fmt_rest=fmtty[1];
         
         return function(reader)
          {var
            new_k=
             function(readers_rest)
              {return k(/* Cons */[0,reader,readers_rest]);};
           
           return take_fmtty_format_readers(new_k,fmt_rest,fmt);
           };
         
        case 14:
         var fmt_rest$1=fmtty[1];
         
         return function(reader)
          {var
            new_k=
             function(readers_rest)
              {return k(/* Cons */[0,reader,readers_rest]);};
           
           return take_fmtty_format_readers(new_k,fmt_rest$1,fmt);
           };
         
        }}
    };

var
 take_ignored_format_readers=
  function(k,ign,fmt)
   {if(typeof ign==="number")
     {switch(ign)
       {case 0:return take_format_readers(k,fmt);
        case 1:return take_format_readers(k,fmt);
        case 2:return take_format_readers(k,fmt);
        case 3:
         return function(reader)
          {var
            new_k=
             function(readers_rest)
              {return k(/* Cons */[0,reader,readers_rest]);};
           
           return take_format_readers(new_k,fmt);
           };
         
        case 4:return take_format_readers(k,fmt);
        }}
    else
     {switch(ign[0])
       {case 0:return take_format_readers(k,fmt);
        case 1:return take_format_readers(k,fmt);
        case 2:return take_format_readers(k,fmt);
        case 3:return take_format_readers(k,fmt);
        case 4:return take_format_readers(k,fmt);
        case 5:return take_format_readers(k,fmt);
        case 6:return take_format_readers(k,fmt);
        case 7:return take_format_readers(k,fmt);
        case 8:return take_fmtty_format_readers(k,ign[2],fmt);
        case 9:return take_format_readers(k,fmt);
        case 10:return take_format_readers(k,fmt);
        }}
    };

var
 make_scanf=
  function(ib,fmt,readers)
   {if(typeof fmt==="number")
     {switch(fmt){case 0:return /* Nil */0;}}
    else
     {switch(fmt[0])
       {case 0:
         var match=scan_char(0,ib);
         
         var c=token_char(ib);
         
         return /* Cons */[0,c,make_scanf(ib,fmt[1],readers)];
         
        case 1:
         var match$1=scan_caml_char(0,ib);
         
         var c$1=token_char(ib);
         
         return /* Cons */[0,c$1,make_scanf(ib,fmt[1],readers)];
         
        case 2:
         var rest=fmt[2];
         
         var pad=fmt[1];
         
         var exit;
         
         if(typeof rest==="number")
          {switch(rest){}}
         else
          {switch(rest[0])
            {case 17:
              var match$2=stopper_of_formatting_lit(rest[1]);
              
              var stp=match$2[1];
              
              var
               scan=
                function(width,param,ib)
                 {return scan_string(/* Some */[0,stp],width,ib);};
              
              var str_rest=/* String_literal */[11,match$2[2],rest[2]];
              
              return pad_prec_scanf
                      (ib,
                       str_rest,
                       readers,
                       pad,
                       /* No_precision */0,
                       scan,
                       token_string);
              
             case 18:
              var match$3=rest[1];
              
              switch(match$3[0])
               {case 0:
                 var
                  scan$1=
                   function(width,param,ib)
                    {return scan_string([/* Some */0,123],width,ib);};
                 
                 return pad_prec_scanf
                         (ib,
                          CamlinternalFormatBasics["concat_fmt"]
                           (match$3[1][1],rest[2]),
                          readers,
                          pad,
                          /* No_precision */0,
                          scan$1,
                          token_string);
                 
                case 1:
                 var
                  scan$2=
                   function(width,param,ib)
                    {return scan_string([/* Some */0,91],width,ib);};
                 
                 return pad_prec_scanf
                         (ib,
                          CamlinternalFormatBasics["concat_fmt"]
                           (match$3[1][1],rest[2]),
                          readers,
                          pad,
                          /* No_precision */0,
                          scan$2,
                          token_string);
                 
                }
              
             default:exit=67;}}
         
         switch(exit)
          {case 67:
            var
             scan$3=
              function(width,param,ib)
               {return scan_string(/* None */0,width,ib);};
            
            return pad_prec_scanf
                    (ib,
                     rest,
                     readers,
                     pad,
                     /* No_precision */0,
                     scan$3,
                     token_string);
            
           }
         
        case 3:
         var
          scan$4=
           function(width,param,ib){return scan_caml_string(width,ib);};
         
         return pad_prec_scanf
                 (ib,
                  fmt[2],
                  readers,
                  fmt[1],
                  /* No_precision */0,
                  scan$4,
                  token_string);
         
        case 4:
         var c$2=CamlinternalFormat["char_of_iconv"](fmt[1]);
         
         var
          scan$5=
           function(width,param,ib){return scan_int_conv(c$2,width,ib);};
         
         return pad_prec_scanf
                 (ib,fmt[4],readers,fmt[2],fmt[3],scan$5,token_int(c$2));
         
        case 5:
         var c$3=CamlinternalFormat["char_of_iconv"](fmt[1]);
         
         var
          scan$6=
           function(width,param,ib){return scan_int_conv(c$3,width,ib);};
         
         return pad_prec_scanf
                 (ib,fmt[4],readers,fmt[2],fmt[3],scan$6,token_int32(c$3));
         
        case 6:
         var c$4=CamlinternalFormat["char_of_iconv"](fmt[1]);
         
         var
          scan$7=
           function(width,param,ib){return scan_int_conv(c$4,width,ib);};
         
         return pad_prec_scanf
                 (ib,fmt[4],readers,fmt[2],fmt[3],scan$7,token_nativeint(c$4));
         
        case 7:
         var c$5=CamlinternalFormat["char_of_iconv"](fmt[1]);
         
         var
          scan$8=
           function(width,param,ib){return scan_int_conv(c$5,width,ib);};
         
         return pad_prec_scanf
                 (ib,fmt[4],readers,fmt[2],fmt[3],scan$8,token_int64(c$5));
         
        case 8:
         return fmt[1]>=15
                 ?pad_prec_scanf
                   (ib,
                    fmt[4],
                    readers,
                    fmt[2],
                    fmt[3],
                    scan_caml_float,
                    token_float)
                 :pad_prec_scanf
                   (ib,fmt[4],readers,fmt[2],fmt[3],scan_float,token_float);
         
        case 9:
         var match$4=scan_bool(ib);
         
         var b=token_bool(ib);
         
         return /* Cons */[0,b,make_scanf(ib,fmt[1],readers)];
         
        case 10:
         return Scanning[16](ib)
                 ?make_scanf(ib,fmt[1],readers)
                 :bad_input("end of input not found");
         
        case 11:
         $$String["iter"](check_char(ib),fmt[1]);
         return make_scanf(ib,fmt[2],readers);
         
        case 12:check_char(ib,fmt[1]);return make_scanf(ib,fmt[2],readers);
        case 13:
         var match$5=scan_caml_string(width_of_pad_opt(fmt[1]),ib);
         
         var s=token_string(ib);
         
         var fmt$1;
         try
          {fmt$1=CamlinternalFormat["format_of_string_fmtty"](s,fmt[2]);}
         catch(exn)
          {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
            {fmt$1=bad_input(exn[2]);}
           else
            {throw exn;}
           }
         
         return /* Cons */[0,fmt$1,make_scanf(ib,fmt[3],readers)];
         
        case 14:
         var fmtty=fmt[2];
         
         var match$6=scan_caml_string(width_of_pad_opt(fmt[1]),ib);
         
         var s$1=token_string(ib);
         
         var match$7;
         try
          {var
            match$8=
             CamlinternalFormat["fmt_ebb_of_string"](/* None */0,s$1);
           
           var
            match$9=
             CamlinternalFormat["fmt_ebb_of_string"](/* None */0,s$1);
           
           match$7=
           /* tuple */[0,
            CamlinternalFormat["type_format"]
             (match$8[1],CamlinternalFormatBasics["erase_rel"](fmtty)),
            CamlinternalFormat["type_format"]
             (match$9[1],
              CamlinternalFormatBasics["erase_rel"]
               (CamlinternalFormat["symm"](fmtty)))];
           }
         catch(exn$1)
          {if(exn$1[1]===CamlPrimitive["caml_global_data"]["Failure"])
            {match$7=bad_input(exn$1[2]);}
           else
            {throw exn$1;}
           }
         
         return /* Cons */[0,
                 /* Format */[0,match$7[1],s$1],
                 make_scanf
                  (ib,
                   CamlinternalFormatBasics["concat_fmt"](match$7[2],fmt[3]),
                   readers)];
         
        case 15:
         return Pervasives["invalid_arg"]('scanf: bad conversion "%a"');
        case 16:
         return Pervasives["invalid_arg"]('scanf: bad conversion "%t"');
        case 17:
         $$String["iter"]
          (check_char(ib),
           CamlinternalFormat["string_of_formatting_lit"](fmt[1]));
         return make_scanf(ib,fmt[2],readers);
         
        case 18:
         var match$10=fmt[1];
         
         switch(match$10[0])
          {case 0:
            check_char(ib,64);
            check_char(ib,123);
            return make_scanf
                    (ib,
                     CamlinternalFormatBasics["concat_fmt"]
                      (match$10[1][1],fmt[2]),
                     readers);
            
           case 1:
            check_char(ib,64);
            check_char(ib,91);
            return make_scanf
                    (ib,
                     CamlinternalFormatBasics["concat_fmt"]
                      (match$10[1][1],fmt[2]),
                     readers);
            
           }
         
        case 19:
         var x=readers[1](ib);
         
         return /* Cons */[0,x,make_scanf(ib,fmt[1],readers[2])];
         
        case 20:
         var rest$1=fmt[3];
         
         var char_set=fmt[2];
         
         var width_opt=fmt[1];
         
         var exit$1;
         
         if(typeof rest$1==="number")
          {switch(rest$1){}}
         else
          {switch(rest$1[0])
            {case 17:
              var match$11=stopper_of_formatting_lit(rest$1[1]);
              
              var width=width_of_pad_opt(width_opt);
              
              var
               match$12=
                scan_chars_in_char_set
                 (char_set,/* Some */[0,match$11[1]],width,ib);
              
              var s$2=token_string(ib);
              
              var str_rest$1=/* String_literal */[11,match$11[2],rest$1[2]];
              
              return /* Cons */[0,s$2,make_scanf(ib,str_rest$1,readers)];
              
             default:exit$1=69;}}
         
         switch(exit$1)
          {case 69:
            var width$1=width_of_pad_opt(width_opt);
            
            var
             match$13=
              scan_chars_in_char_set(char_set,/* None */0,width$1,ib);
            
            var s$3=token_string(ib);
            
            return /* Cons */[0,s$3,make_scanf(ib,rest$1,readers)];
            
           }
         
        case 21:
         var count=get_counter(ib,fmt[1]);
         
         return /* Cons */[0,count,make_scanf(ib,fmt[2],readers)];
         
        case 22:
         var c$6=Scanning[6](ib);
         
         return /* Cons */[0,c$6,make_scanf(ib,fmt[1],readers)];
         
        case 23:
         var
          match$14=
           CamlinternalFormat["param_format_of_ignored_format"](fmt[1],fmt[2]);
         
         var match$15=make_scanf(ib,match$14[1],readers);
         
         if(match$15)
          {return match$15[2];}
         else
          {throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"scanf.ml",1258,13]];
           }
         
        case 24:
         return Pervasives["invalid_arg"]
                 ('scanf: bad conversion "%?" (custom converter)');
         
        }}
    };

var
 pad_prec_scanf=
  function(ib,fmt,readers,pad,prec,scan,token)
   {if(typeof pad==="number")
     {switch(pad)
       {case 0:
         if(typeof prec==="number")
          {if(prec!==0)
            {return Pervasives["invalid_arg"]('scanf: bad conversion "%*"');}
           else
            {var match=scan(Pervasives["max_int"],Pervasives["max_int"],ib);
             
             var x=token(ib);
             
             return /* Cons */[0,x,make_scanf(ib,fmt,readers)];
             }
           }
         else
          {var match$1=scan(Pervasives["max_int"],prec[1],ib);
           
           var x$1=token(ib);
           
           return /* Cons */[0,x$1,make_scanf(ib,fmt,readers)];
           }
         
        }}
    else
     {switch(pad[0])
       {case 0:
         if(pad[1]!==0)
          {var w=pad[2];
           
           if(typeof prec==="number")
            {if(prec!==0)
              {return Pervasives["invalid_arg"]('scanf: bad conversion "%*"');
               }
             else
              {var match$2=scan(w,Pervasives["max_int"],ib);
               
               var x$2=token(ib);
               
               return /* Cons */[0,x$2,make_scanf(ib,fmt,readers)];
               }
             }
           else
            {var match$3=scan(w,prec[1],ib);
             
             var x$3=token(ib);
             
             return /* Cons */[0,x$3,make_scanf(ib,fmt,readers)];
             }
           }
         else
          {return Pervasives["invalid_arg"]('scanf: bad conversion "%-"');}
         
        case 1:return Pervasives["invalid_arg"]('scanf: bad conversion "%*"');
        }}
    };

var
 kscanf=
  function(ib,ef,param)
   {var str=param[2];
    
    var fmt=param[1];
    
    var apply=function(f,args){return args?apply(f(args[1]),args[2]):f;};
    
    var
     k=
      function(readers,f)
       {Scanning[11](ib);
        var match;
        try
         {match=/* Args */[0,make_scanf(ib,fmt,readers)];}
        catch(exc)
         {var exit;
          
          if(exc[1]===Scan_failure)
           {exit=21;}
          else
           {if(exc[1]===CamlPrimitive["caml_global_data"]["Failure"])
             {exit=21;}
            else
             {if(exc===CamlPrimitive["caml_global_data"]["End_of_file"])
               {exit=21;}
              else
               {if
                 (exc[1]===
                  CamlPrimitive["caml_global_data"]["Invalid_argument"])
                 {match=
                  Pervasives["invalid_arg"]
                   (Pervasives["^"]
                     (exc[2],
                      Pervasives["^"]
                       (' in format "',
                        Pervasives["^"]($$String["escaped"](str),'"'))));
                  }
                else
                 {throw exc;}
                }
              }
            }
          
          switch(exit){case 21:match=/* Exc */[1,exc];}
          }
        
        switch(match[0])
         {case 0:return apply(f,match[1]);case 1:return ef(ib,match[1]);}
        };
    
    return take_format_readers(k,fmt);
    };

var ksscanf=function(s,ef,fmt){return kscanf(Scanning[23](s),ef,fmt);};

var kfscanf=function(ic,ef,fmt){return kscanf(Scanning[25](ic),ef,fmt);};

var bscanf=function(ib,fmt){return kscanf(ib,scanf_bad_input,fmt);};

var
 fscanf=
  function(ic,fmt){return kscanf(Scanning[25](ic),scanf_bad_input,fmt);};

var
 sscanf=
  function(s,fmt){return kscanf(Scanning[23](s),scanf_bad_input,fmt);};

var scanf=function(fmt){return kscanf(Scanning[2],scanf_bad_input,fmt);};

var
 bscanf_format=
  function(ib,format,f)
   {var match=scan_caml_string(Pervasives["max_int"],ib);
    
    var str=token_string(ib);
    
    var fmt$prime;
    try
     {fmt$prime=CamlinternalFormat["format_of_string_format"](str,format);}
    catch(exn)
     {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
       {fmt$prime=bad_input(exn[2]);}
      else
       {throw exn;}
      }
    
    return f(fmt$prime);
    };

var
 sscanf_format=
  function(s,format,f){return bscanf_format(Scanning[23](s),format,f);};

var
 string_to_String=
  function(s)
   {var l=s["length"];
    
    var b=Buffer["create"](l+2);
    
    Buffer["add_char"](b,34);
    for(var i=0;i<=l-1;i++)
     {var c=s["charCodeAt"](i);if(c===34){c===34}Buffer["add_char"](b,c)}
    
    Buffer["add_char"](b,34);
    return Buffer["contents"](b);
    };

var
 format_from_string=
  function(s,fmt)
   {return sscanf_format(string_to_String(s),fmt,function(x){return x;});};

var
 unescaped=
  function(s)
   {return sscanf
            (Pervasives["^"]('"',Pervasives["^"](s,'"')),
             [/* Format */0,
              [/* Caml_string */3,
               /* No_padding */0,
               [/* Flush */10,/* End_of_format */0]],
              "%S%!"],
             function(x){return x;});
    };

module["exports"]=
{"Scanning":
 [0,
  Scanning[1],
  Scanning[19],
  Scanning[20],
  Scanning[26],
  Scanning[21],
  Scanning[22],
  Scanning[23],
  Scanning[24],
  Scanning[25],
  Scanning[16],
  Scanning[17],
  Scanning[18],
  Scanning[2]],
 "Scan_failure":Scan_failure,
 "bscanf":bscanf,
 "fscanf":fscanf,
 "sscanf":sscanf,
 "scanf":scanf,
 "kscanf":kscanf,
 "ksscanf":ksscanf,
 "kfscanf":kfscanf,
 "bscanf_format":bscanf_format,
 "sscanf_format":sscanf_format,
 "format_from_string":format_from_string,
 "unescaped":unescaped};

