var String=require("String");
var CamlinternalFormatBasics=require("CamlinternalFormatBasics");
var CamlinternalFormat=require("CamlinternalFormat");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Buffer=require("Buffer");
var null_char=0;
var
 next_char=
  function(ib)
   {try
     {var $js=ib[7];
      var c=$js(0);
      ib[2]=c,0;
      ib[3]=1,0;
      ib[4]=1+ib[4],0;
      var $js$1=c=10;
      if($js$1){ib[5]=1+ib[5],0}else{}
      return c}
    catch(exn)
     {var $js$2=exn=End_of_file;
      if($js$2)
       {var c$1=null_char;ib[2]=c$1,0;ib[3]=0,0;ib[1]=1,0;return c$1}
      else
       {return "unknown primitive:reraise"}}};
var
 peek_char=
  function(ib){var $js=ib[3];if($js){return ib[2]}else{return next_char(ib)}};
var
 checked_peek_char=
  function(ib)
   {var c=peek_char(ib);
    var $js=ib[1];
    if($js){var $js$1=End_of_file;throw $js$1}else{}
    return c};
var end_of_input=function(ib){var $js=peek_char(ib);0;return ib[1]};
var eof=function(ib){return ib[1]};
var beginning_of_input=function(ib){return ib[4]=0};
var
 name_of_input=
  function(ib)
   {var match=ib[9];
    var $js=match;
    if(typeof $js=="number")
     {if($js==0)
       {return "unnamed character string"}
      else
       if($js==1){return "unnamed function"}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var fname=match[1];return fname}
      else
       if($js$1==1){return "unnamed pervasives input channel"}}};
var
 char_count=
  function(ib){var $js=ib[3];if($js){return ib[4]-1}else{return ib[4]}};
var line_count=function(ib){return ib[5]};
var reset_token=function(ib){var $js=Buffer["reset"];return $js(ib[8])};
var invalidate_current_char=function(ib){return ib[3]=0,0};
var
 token=
  function(ib)
   {var tokbuf=ib[8];
    var $js=Buffer["contents"];
    var tok=$js(tokbuf);
    var $js$1=Buffer["clear"];
    $js$1(tokbuf);
    ib[6]=1+ib[6],0;
    return tok};
var token_count=function(ib){return ib[6]};
var skip_char=function(width,ib){invalidate_current_char(ib);return width};
var ignore_char=function(width,ib){return skip_char(width-1,ib)};
var
 store_char=
  function(width,ib,c)
   {var $js=Buffer["add_char"];$js(ib[8],c);return ignore_char(width,ib)};
var default_token_buffer_size=1024;
var
 create=
  function(iname,next)
   {var $js=Buffer["create"];
    var $js$1=$js(default_token_buffer_size);
    return [0,0,null_char,0,0,0,0,next,$js$1,iname]};
var
 from_string=
  function(s)
   {var i=[0,0];
    var len=s["length"];
    var
     next=
      function(param)
       {var $js=i[1]>=len;
        if($js)
         {var $js$1=End_of_file;throw $js$1}
        else
         {var c=s[i[1]];i[0]++;return c}};
    return create(0,next)};
var from_function=create(1);
var file_buffer_size=[0,1024];
var
 scan_close_at_end=
  function(ic)
   {var $js=Pervasives["close_in"];$js(ic);var $js$1=End_of_file;throw $js$1};
var scan_raise_at_end=function(_ic){var $js=End_of_file;throw $js};
var
 from_ic=
  function(scan_close_ic,iname,ic)
   {var len=file_buffer_size[1];
    var buf="unknown primitive:caml_create_string";
    var i=[0,0];
    var lim=[0,0];
    var eof$1=[0,0];
    var
     next=
      function(param)
       {var $js=i[1]<lim[1];
        if($js)
         {var c=buf[i[1]];i[0]++;return c}
        else
         {var $js$1=eof$1[1];
          if($js$1)
           {var $js$2=End_of_file;throw $js$2}
          else
           {var $js$3=Pervasives["input"];
            var $js$4=$js$3(ic,buf,0,len);
            lim[1]=$js$4,0;
            var $js$5=lim[1]=0;
            if($js$5)
             {eof$1[1]=1,0;return scan_close_ic(ic)}
            else
             {i[1]=1,0;return buf[0]}}}};
    return create(iname,next)};
var from_ic_close_at_end=from_ic(scan_close_at_end);
var
 stdin=
  from_ic(scan_raise_at_end,[0,"-",Pervasives["stdin"]],Pervasives["stdin"]);
var stdib=stdin;
var
 open_in=
  function(fname)
   {var $js=fname;
    if($js=="-")
     {return stdin}
    else
     {var fname$1=fname;
      var $js$1=Pervasives["open_in"];
      var ic=$js$1(fname$1);
      return from_ic_close_at_end([0,fname$1,ic],ic)}};
var
 open_in_bin=
  function(fname)
   {var $js=fname;
    if($js=="-")
     {return stdin}
    else
     {var fname$1=fname;
      var $js$1=Pervasives["open_in_bin"];
      var ic=$js$1(fname$1);
      return from_ic_close_at_end([0,fname$1,ic],ic)}};
var from_file=open_in;
var from_file_bin=open_in_bin;
var memo=[0,0];
var
 memo_from_ic=
  function(scan_close_ic,ic)
   {try
     {var $js=List["assq"];return $js(ic,memo[1])}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1)
       {var ib=from_ic(scan_close_ic,[1,ic],ic);
        memo[1]=[0,[0,ic,ib],memo[1]],0;
        return ib}
      else
       {return "unknown primitive:reraise"}}};
var from_channel=memo_from_ic(scan_raise_at_end);
var
 close_in=
  function(ib)
   {var match=ib[9];
    var $js=match;
    if(typeof $js=="number")
     {if($js==0){var exit=247}else if($js==1){var exit=247}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var ic=match[2];var $js$2=Pervasives["close_in"];return $js$2(ic)}
      else
       if($js$1==1)
        {var ic$1=match[1];
         var $js$3=Pervasives["close_in"];
         return $js$3(ic$1)}}
    switch(exit){case 247:return 0}};
var
 Scanning=
  [0,
   stdin,
   stdib,
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
   from_file,
   from_file_bin,
   from_string,
   from_function,
   from_channel,
   close_in];
var Scan_failure="unknown primitive:caml_set_oo_id";
var bad_input=function(s){var $js=[0,Scan_failure,s];throw $js};
var
 bad_input_escape=
  function(c)
   {var $js=Printf["sprintf"];
    var
     $js$1=
      $js
       ([0,
         [11,"illegal escape character ",[1,0]],
         "illegal escape character %C"],
        c);
    return bad_input($js$1)};
var
 bad_token_length=
  function(message)
   {var $js=Printf["sprintf"];
    var
     $js$1=
      $js
       ([0,
         [11,
          "scanning of ",
          [2,0,[11," failed: the specified length was too short for token",0]]],
         "scanning of %s failed: the specified length was too short for token"],
        message);
    return bad_input($js$1)};
var
 bad_end_of_input=
  function(message)
   {var $js=Printf["sprintf"];
    var
     $js$1=
      $js
       ([0,
         [11,
          "scanning of ",
          [2,
           0,
           [11,
            " failed: premature end of file occurred before end of token",
            0]]],
         "scanning of %s failed: premature end of file occurred before end of token"],
        message);
    return bad_input($js$1)};
var
 bad_float=
  function(param)
   {return bad_input("no dot or exponent part found in float token")};
var
 character_mismatch_err=
  function(c,ci)
   {var $js=Printf["sprintf"];
    return $js
            ([0,
              [11,"looking for ",[1,[11,", found ",[1,0]]]],
              "looking for %C, found %C"],
             c,
             ci)};
var
 character_mismatch=
  function(c,ci){var $js=character_mismatch_err(c,ci);return bad_input($js)};
var
 skip_whites=
  function(ib)
   {var $js=Scanning[5];
    var c=$js(ib);
    var $js$1=Scanning[15];
    var $js$2=$js$1(ib);
    var $js$3=!$js$2;
    if($js$3)
     {var switcher=-9+c;
      var $js$4=!(4<switcher>>>0);
      if($js$4)
       {var switcher$1=-2+switcher;
        var $js$5=1<switcher$1>>>0;
        if($js$5){var exit=237}else{var exit=238}}
      else
       {var $js$6=switcher!=23;if($js$6){var exit=238}else{var exit=237}}
      switch(exit)
       {case 238:return 0;
        case 237:var $js$7=Scanning[4];$js$7(ib);return skip_whites(ib)
        }}
    else
     {return 0}};
var
 check_char=
  function(ib,c)
   {var $js=c=32;
    if($js)
     {return skip_whites(ib)}
    else
     {var $js$1=Scanning[6];
      var ci=$js$1(ib);
      var $js$2=ci=c;
      if($js$2)
       {var $js$3=Scanning[4];return $js$3(ib)}
      else
       {var $js$4=ci!=13;
        if($js$4)
         {var exit=235}
        else
         {var $js$5=c=10;
          if($js$5)
           {var $js$6=Scanning[4];$js$6(ib);return check_char(ib,10)}
          else
           {var exit=235}}
        switch(exit){case 235:return character_mismatch(c,ci)}}}};
var
 token_char=
  function(ib){var $js=Scanning[10];var $js$1=$js(ib);return $js$1[0]};
var token_string=Scanning[10];
var
 token_bool=
  function(ib)
   {var $js=Scanning[10];
    var s=$js(ib);
    var $js$1=s;
    if($js$1=="false")
     {return 0}
    else
     if($js$1=="true"){return 1}else{var exit=231}
    switch(exit)
     {case 231:
       var $js$2=Printf["sprintf"];
       var
        $js$3=
         $js$2([0,[11,"invalid boolean ",[3,0,0]],"invalid boolean %S"],s);
       return bad_input($js$3)
      }};
var
 token_int_literal=
  function(conv,ib)
   {var switcher=-88+conv;
    var $js=32<switcher>>>0;
    if($js)
     {var exit=228}
    else
     {var $js$1=switcher;
      var $js$2=$js$1[0];
      if($js$2==0)
       {var exit=227}
      else
       if($js$2==1)
        {var exit=228}
       else
        if($js$2==2)
         {var exit=228}
        else
         if($js$2==3)
          {var exit=228}
         else
          if($js$2==4)
           {var exit=228}
          else
           if($js$2==5)
            {var exit=228}
           else
            if($js$2==6)
             {var exit=228}
            else
             if($js$2==7)
              {var exit=228}
             else
              if($js$2==8)
               {var exit=228}
              else
               if($js$2==9)
                {var exit=228}
               else
                if($js$2==10)
                 {var $js$3=Pervasives["^"];
                  var $js$4=Scanning[10];
                  var $js$5=$js$4(ib);
                  var tok=$js$3("0b",$js$5)}
                else
                 if($js$2==11)
                  {var exit=228}
                 else
                  if($js$2==12)
                   {var exit=226}
                  else
                   if($js$2==13)
                    {var exit=228}
                   else
                    if($js$2==14)
                     {var exit=228}
                    else
                     if($js$2==15)
                      {var exit=228}
                     else
                      if($js$2==16)
                       {var exit=228}
                      else
                       if($js$2==17)
                        {var exit=226}
                       else
                        if($js$2==18)
                         {var exit=228}
                        else
                         if($js$2==19)
                          {var exit=228}
                         else
                          if($js$2==20)
                           {var exit=228}
                          else
                           if($js$2==21)
                            {var exit=228}
                           else
                            if($js$2==22)
                             {var exit=228}
                            else
                             if($js$2==23)
                              {var $js$6=Pervasives["^"];
                               var $js$7=Scanning[10];
                               var $js$8=$js$7(ib);
                               var tok=$js$6("0o",$js$8)}
                             else
                              if($js$2==24)
                               {var exit=228}
                              else
                               if($js$2==25)
                                {var exit=228}
                               else
                                if($js$2==26)
                                 {var exit=228}
                                else
                                 if($js$2==27)
                                  {var exit=228}
                                 else
                                  if($js$2==28)
                                   {var exit=228}
                                  else
                                   if($js$2==29)
                                    {var exit=226}
                                   else
                                    if($js$2==30)
                                     {var exit=228}
                                    else
                                     if($js$2==31){var exit=228}else if($js$2==32){var exit=227}}
    switch(exit)
     {case 228:var $js$9=[0,Assert_failure,[0,"scanf.ml",507,11]];throw $js$9;
      case 226:var $js$10=Scanning[10];var tok=$js$10(ib);
      case 227:
       var $js$11=Pervasives["^"];
       var $js$12=Scanning[10];
       var $js$13=$js$12(ib);
       var tok=$js$11("0x",$js$13)
      }
    var l=tok["length"];
    var $js$14=tok[0];
    var $js$15=$js$14!=43;
    var $js$16=(l=0)||$js$15;
    if($js$16)
     {return tok}
    else
     {var $js$17=String["sub"];return $js$17(tok,1,l-1)}};
var
 token_int=
  function(conv,ib)
   {var $js=token_int_literal(conv,ib);
    return "unknown primitive:caml_int_of_string"};
var
 token_float=
  function(ib)
   {var $js=Scanning[10];
    var $js$1=$js(ib);
    return "unknown primitive:caml_float_of_string"};
var
 token_nativeint=
  function(conv,ib)
   {var $js=token_int_literal(conv,ib);
    return "unknown primitive:caml_nativeint_of_string"};
var
 token_int32=
  function(conv,ib)
   {var $js=token_int_literal(conv,ib);
    return "unknown primitive:caml_int32_of_string"};
var
 token_int64=
  function(conv,ib)
   {var $js=token_int_literal(conv,ib);
    return "unknown primitive:caml_int64_of_string"};
var
 scan_decimal_digits=
  function(width,ib)
   {var $js=width=0;
    if($js)
     {return width}
    else
     {var $js$1=Scanning[5];
      var c=$js$1(ib);
      var $js$2=Scanning[15];
      var $js$3=$js$2(ib);
      if($js$3)
       {return width}
      else
       {var $js$4=c>=58;
        if($js$4)
         {var $js$5=c!=95;
          if($js$5)
           {var exit=218}
          else
           {var $js$6=Scanning[9];
            var width$1=$js$6(width,ib);
            return scan_decimal_digits(width$1,ib)}}
        else
         {var $js$7=c>=48;
          if($js$7)
           {var c$1=c;
            var $js$8=Scanning[7];
            var width$2=$js$8(width,ib,c$1);
            return scan_decimal_digits(width$2,ib)}
          else
           {var exit=218}}
        switch(exit){case 218:return width}}}};
var
 scan_decimal_digits_plus=
  function(width,ib)
   {var $js=width=0;
    if($js)
     {return bad_token_length("decimal digits")}
    else
     {var $js$1=Scanning[6];
      var c=$js$1(ib);
      var switcher=-48+c;
      var $js$2=9<switcher>>>0;
      if($js$2)
       {var c$1=c;
        var $js$3=Printf["sprintf"];
        var
         $js$4=
          $js$3
           ([0,
             [11,"character ",[1,[11," is not a decimal digit",0]]],
             "character %C is not a decimal digit"],
            c$1);
        return bad_input($js$4)}
      else
       {var $js$5=Scanning[7];
        var width$1=$js$5(width,ib,c);
        return scan_decimal_digits(width$1,ib)}}};
var
 scan_digits_plus=
  function(basis,digitp,width,ib)
   {var
     scan_digits=
      function(width$1)
       {var $js=width$1=0;
        if($js)
         {return width$1}
        else
         {var $js$1=Scanning[5];
          var c=$js$1(ib);
          var $js$2=Scanning[15];
          var $js$3=$js$2(ib);
          if($js$3)
           {return width$1}
          else
           {var c$1=c;
            var $js$4=digitp(c$1);
            if($js$4)
             {var $js$5=Scanning[7];
              var width$2=$js$5(width$1,ib,c$1);
              return scan_digits(width$2)}
            else
             {var $js$6=c!=95;
              if($js$6)
               {return width$1}
              else
               {var $js$7=Scanning[9];
                var width$3=$js$7(width$1,ib);
                return scan_digits(width$3)}}}}};
    var $js=width=0;
    if($js)
     {return bad_token_length("digits")}
    else
     {var $js$1=Scanning[6];
      var c=$js$1(ib);
      var $js$2=digitp(c);
      if($js$2)
       {var $js$3=Scanning[7];
        var width$1=$js$3(width,ib,c);
        return scan_digits(width$1)}
      else
       {var $js$4=Printf["sprintf"];
        var
         $js$5=
          $js$4
           ([0,
             [11,
              "character ",
              [1,[11," is not a valid ",[2,0,[11," digit",0]]]]],
             "character %C is not a valid %s digit"],
            c,
            basis);
        return bad_input($js$5)}}};
var
 is_binary_digit=
  function(param)
   {var switcher=-48+param;
    var $js=1<switcher>>>0;
    if($js){return 0}else{return 1}};
var scan_binary_int=scan_digits_plus("binary",is_binary_digit);
var
 is_octal_digit=
  function(param)
   {var switcher=-48+param;
    var $js=7<switcher>>>0;
    if($js){return 0}else{return 1}};
var scan_octal_int=scan_digits_plus("octal",is_octal_digit);
var
 is_hexa_digit=
  function(param)
   {var switcher=-48+param;
    var $js=22<switcher>>>0;
    if($js)
     {var switcher$1=-49+switcher;
      var $js$1=5<switcher$1>>>0;
      if($js$1){var exit=192}else{var exit=191}}
    else
     {var switcher$2=-10+switcher;
      var $js$2=6<switcher$2>>>0;
      if($js$2){var exit=191}else{var exit=192}}
    switch(exit){case 192:return 0;case 191:return 1}};
var scan_hexadecimal_int=scan_digits_plus("hexadecimal",is_hexa_digit);
var scan_unsigned_decimal_int=scan_decimal_digits_plus;
var
 scan_sign=
  function(width,ib)
   {var $js=Scanning[6];
    var c=$js(ib);
    var switcher=-43+c;
    var $js$1=2<switcher>>>0;
    if($js$1)
     {var exit=186}
    else
     {var $js$2=switcher;
      var $js$3=$js$2[0];
      if($js$3==0)
       {var $js$4=Scanning[7];return $js$4(width,ib,c)}
      else
       if($js$3==1)
        {var exit=186}
       else
        if($js$3==2){var $js$5=Scanning[7];return $js$5(width,ib,c)}}
    switch(exit){case 186:return width}};
var
 scan_optionally_signed_decimal_int=
  function(width,ib)
   {var width$1=scan_sign(width,ib);
    return scan_unsigned_decimal_int(width$1,ib)};
var
 scan_unsigned_int=
  function(width,ib)
   {var $js=Scanning[6];
    var c=$js(ib);
    var $js$1=c!=48;
    if($js$1)
     {return scan_unsigned_decimal_int(width,ib)}
    else
     {var $js$2=Scanning[7];
      var width$1=$js$2(width,ib,c);
      var $js$3=width$1=0;
      if($js$3)
       {return width$1}
      else
       {var $js$4=Scanning[5];
        var c$1=$js$4(ib);
        var $js$5=Scanning[15];
        var $js$6=$js$5(ib);
        if($js$6)
         {return width$1}
        else
         {var $js$7=c$1>=99;
          if($js$7)
           {var $js$8=c$1!=111;
            if($js$8)
             {var $js$9=c$1!=120;if($js$9){var exit=179}else{var exit=178}}
            else
             {var $js$10=Scanning[7];
              var $js$11=$js$10(width$1,ib,c$1);
              return scan_octal_int($js$11,ib)}}
          else
           {var $js$12=c$1!=88;
            if($js$12)
             {var $js$13=c$1>=98;
              if($js$13)
               {var $js$14=Scanning[7];
                var $js$15=$js$14(width$1,ib,c$1);
                return scan_binary_int($js$15,ib)}
              else
               {var exit=179}}
            else
             {var exit=178}}
          switch(exit)
           {case 179:return scan_decimal_digits(width$1,ib);
            case 178:
             var $js$16=Scanning[7];
             var $js$17=$js$16(width$1,ib,c$1);
             return scan_hexadecimal_int($js$17,ib)
            }}}}};
var
 scan_optionally_signed_int=
  function(width,ib)
   {var width$1=scan_sign(width,ib);return scan_unsigned_int(width$1,ib)};
var
 scan_int_conv=
  function(conv,width,ib)
   {var switcher=-88+conv;
    var $js=32<switcher>>>0;
    if($js)
     {var exit=174}
    else
     {var $js$1=switcher;
      var $js$2=$js$1[0];
      if($js$2==0)
       {var exit=173}
      else
       if($js$2==1)
        {var exit=174}
       else
        if($js$2==2)
         {var exit=174}
        else
         if($js$2==3)
          {var exit=174}
         else
          if($js$2==4)
           {var exit=174}
          else
           if($js$2==5)
            {var exit=174}
           else
            if($js$2==6)
             {var exit=174}
            else
             if($js$2==7)
              {var exit=174}
             else
              if($js$2==8)
               {var exit=174}
              else
               if($js$2==9)
                {var exit=174}
               else
                if($js$2==10)
                 {return scan_binary_int(width,ib)}
                else
                 if($js$2==11)
                  {var exit=174}
                 else
                  if($js$2==12)
                   {return scan_optionally_signed_decimal_int(width,ib)}
                  else
                   if($js$2==13)
                    {var exit=174}
                   else
                    if($js$2==14)
                     {var exit=174}
                    else
                     if($js$2==15)
                      {var exit=174}
                     else
                      if($js$2==16)
                       {var exit=174}
                      else
                       if($js$2==17)
                        {return scan_optionally_signed_int(width,ib)}
                       else
                        if($js$2==18)
                         {var exit=174}
                        else
                         if($js$2==19)
                          {var exit=174}
                         else
                          if($js$2==20)
                           {var exit=174}
                          else
                           if($js$2==21)
                            {var exit=174}
                           else
                            if($js$2==22)
                             {var exit=174}
                            else
                             if($js$2==23)
                              {return scan_octal_int(width,ib)}
                             else
                              if($js$2==24)
                               {var exit=174}
                              else
                               if($js$2==25)
                                {var exit=174}
                               else
                                if($js$2==26)
                                 {var exit=174}
                                else
                                 if($js$2==27)
                                  {var exit=174}
                                 else
                                  if($js$2==28)
                                   {var exit=174}
                                  else
                                   if($js$2==29)
                                    {return scan_unsigned_decimal_int(width,ib)}
                                   else
                                    if($js$2==30)
                                     {var exit=174}
                                    else
                                     if($js$2==31){var exit=174}else if($js$2==32){var exit=173}}
    switch(exit)
     {case 174:var $js$3=[0,Assert_failure,[0,"scanf.ml",674,9]];throw $js$3;
      case 173:return scan_hexadecimal_int(width,ib)
      }};
var
 scan_frac_part=
  function(width,ib)
   {var $js=width=0;
    if($js)
     {return width}
    else
     {var $js$1=Scanning[5];
      var c=$js$1(ib);
      var $js$2=Scanning[15];
      var $js$3=$js$2(ib);
      if($js$3)
       {return width}
      else
       {var switcher=-48+c;
        var $js$4=9<switcher>>>0;
        if($js$4)
         {return width}
        else
         {var c$1=c;
          var $js$5=Scanning[7];
          var $js$6=$js$5(width,ib,c$1);
          return scan_decimal_digits($js$6,ib)}}}};
var
 scan_exp_part=
  function(width,ib)
   {var $js=width=0;
    if($js)
     {return width}
    else
     {var $js$1=Scanning[5];
      var c=$js$1(ib);
      var $js$2=Scanning[15];
      var $js$3=$js$2(ib);
      if($js$3)
       {return width}
      else
       {var $js$4=c!=69;
        if($js$4)
         {var $js$5=c!=101;if($js$5){return width}else{var exit=165}}
        else
         {var exit=165}
        switch(exit)
         {case 165:
           var c$1=c;
           var $js$6=Scanning[7];
           var $js$7=$js$6(width,ib,c$1);
           return scan_optionally_signed_decimal_int($js$7,ib)
          }}}};
var
 scan_int_part=
  function(width,ib)
   {var width$1=scan_sign(width,ib);return scan_decimal_digits(width$1,ib)};
var
 scan_float=
  function(width,precision,ib)
   {var width$1=scan_int_part(width,ib);
    var $js=width$1=0;
    if($js)
     {return [0,width$1,precision]}
    else
     {var $js$1=Scanning[5];
      var c=$js$1(ib);
      var $js$2=Scanning[15];
      var $js$3=$js$2(ib);
      if($js$3)
       {return [0,width$1,precision]}
      else
       {var $js$4=c!=46;
        if($js$4)
         {var $js$5=scan_exp_part(width$1,ib);return [0,$js$5,precision]}
        else
         {var $js$6=Scanning[7];
          var width$2=$js$6(width$1,ib,c);
          var $js$7=Pervasives["min"];
          var precision$1=$js$7(width$2,precision);
          var $js$8=scan_frac_part(precision$1,ib);
          var $js$9=precision$1-$js$8;
          var width$3=width$2-$js$9;
          var $js$10=scan_exp_part(width$3,ib);
          return [0,$js$10,precision$1]}}}};
var
 scan_caml_float=
  function(width,precision,ib)
   {var width$1=scan_optionally_signed_decimal_int(width,ib);
    var $js=width$1=0;
    if($js)
     {return bad_float(0)}
    else
     {var $js$1=Scanning[5];
      var c=$js$1(ib);
      var $js$2=Scanning[15];
      var $js$3=$js$2(ib);
      if($js$3)
       {return bad_float(0)}
      else
       {var switcher=-69+c;
        var $js$4=!(32<switcher>>>0);
        if($js$4)
         {var switcher$1=-1+switcher;
          var $js$5=30<switcher$1>>>0;
          if($js$5){return scan_exp_part(width$1,ib)}else{var exit=152}}
        else
         {var $js$6=switcher!=-23;
          if($js$6)
           {var exit=152}
          else
           {var $js$7=Scanning[7];
            var width$2=$js$7(width$1,ib,c);
            var $js$8=Pervasives["min"];
            var precision$1=$js$8(width$2,precision);
            var $js$9=scan_frac_part(precision$1,ib);
            var $js$10=precision$1-$js$9;
            var width$3=width$2-$js$10;
            return scan_exp_part(width$3,ib)}}
        switch(exit){case 152:return bad_float(0)}}}};
var
 scan_string=
  function(stp,width,ib)
   {var
     loop=
      function(width$1)
       {var $js=width$1=0;
        if($js)
         {return width$1}
        else
         {var $js$1=Scanning[5];
          var c=$js$1(ib);
          var $js$2=Scanning[15];
          var $js$3=$js$2(ib);
          if($js$3)
           {return width$1}
          else
           {var $js$4=stp;
            if($js$4)
             {var c'=stp[1];
              var $js$5=c=c';
              if($js$5)
               {var $js$6=Scanning[8];return $js$6(width$1,ib)}
              else
               {var $js$7=Scanning[7];
                var $js$8=$js$7(width$1,ib,c);
                return loop($js$8)}}
            else
             {var switcher=-9+c;
              var $js$9=!(4<switcher>>>0);
              if($js$9)
               {var switcher$1=-2+switcher;
                var $js$10=1<switcher$1>>>0;
                if($js$10){var exit=144}else{var exit=145}}
              else
               {var $js$11=switcher!=23;
                if($js$11){var exit=145}else{var exit=144}}
              switch(exit)
               {case 145:
                 var $js$12=Scanning[7];
                 var $js$13=$js$12(width$1,ib,c);
                 return loop($js$13);
                case 144:return width$1
                }}}}};
    return loop(width)};
var
 scan_char=
  function(width,ib)
   {var $js=Scanning[7];
    var $js$1=Scanning[6];
    var $js$2=$js$1(ib);
    return $js(width,ib,$js$2)};
var
 char_for_backslash=
  function(c)
   {var $js=c>=110;
    if($js)
     {var $js$1=c>=117;
      if($js$1)
       {var exit=141}
      else
       {var switcher=-110+c;
        var $js$2=switcher;
        var $js$3=$js$2[0];
        if($js$3==0)
         {return 10}
        else
         if($js$3==1)
          {var exit=141}
         else
          if($js$3==2)
           {var exit=141}
          else
           if($js$3==3)
            {var exit=141}
           else
            if($js$3==4)
             {return 13}
            else
             if($js$3==5){var exit=141}else if($js$3==6){return 9}}}
    else
     {var $js$4=c!=98;if($js$4){var exit=141}else{return 8}}
    switch(exit){case 141:return c}};
var decimal_value_of_char=function(c){return c-48};
var
 char_for_decimal_code=
  function(c0,c1,c2)
   {var $js=decimal_value_of_char(c0);
    var $js$1=100*$js;
    var $js$2=decimal_value_of_char(c1);
    var $js$3=10*$js$2;
    var $js$4=$js$1+$js$3;
    var $js$5=decimal_value_of_char(c2);
    var c=$js$4+$js$5;
    var $js$6=c<0||c>255;
    if($js$6)
     {var $js$7=Printf["sprintf"];
      var
       $js$8=
        $js$7
         ([0,
           [11,"bad character decimal encoding \",[0,[0,[0,0]]]],
           "bad character decimal encoding \%c%c%c"],
          c0,
          c1,
          c2);
      return bad_input($js$8)}
    else
     {var $js$9=Pervasives["char_of_int"];return $js$9(c)}};
var
 hexadecimal_value_of_char=
  function(c)
   {var d=c;
    var $js=d>=97;
    if($js)
     {return d-87}
    else
     {var $js$1=d>=65;if($js$1){return d-55}else{return d-48}}};
var
 char_for_hexadecimal_code=
  function(c1,c2)
   {var $js=hexadecimal_value_of_char(c1);
    var $js$1=16*$js;
    var $js$2=hexadecimal_value_of_char(c2);
    var c=$js$1+$js$2;
    var $js$3=c<0||c>255;
    if($js$3)
     {var $js$4=Printf["sprintf"];
      var
       $js$5=
        $js$4
         ([0,
           [11,"bad character hexadecimal encoding \",[0,[0,0]]],
           "bad character hexadecimal encoding \%c%c"],
          c1,
          c2);
      return bad_input($js$5)}
    else
     {var $js$6=Pervasives["char_of_int"];return $js$6(c)}};
var
 check_next_char=
  function(message,width,ib)
   {var $js=width=0;
    if($js)
     {return bad_token_length(message)}
    else
     {var $js$1=Scanning[5];
      var c=$js$1(ib);
      var $js$2=Scanning[15];
      var $js$3=$js$2(ib);
      if($js$3){return bad_end_of_input(message)}else{return c}}};
var check_next_char_for_char=check_next_char("a Char");
var check_next_char_for_string=check_next_char("a String");
var
 scan_backslash_char=
  function(width,ib)
   {var c=check_next_char_for_char(width,ib);
    var $js=c>=40;
    if($js)
     {var $js$1=c>=58;
      if($js$1)
       {var switcher=-92+c;
        var $js$2=28<switcher>>>0;
        if($js$2)
         {var exit=128}
        else
         {var $js$3=switcher;
          var $js$4=$js$3[0];
          if($js$4==0)
           {var exit=126}
          else
           if($js$4==1)
            {var exit=128}
           else
            if($js$4==2)
             {var exit=128}
            else
             if($js$4==3)
              {var exit=128}
             else
              if($js$4==4)
               {var exit=128}
              else
               if($js$4==5)
                {var exit=128}
               else
                if($js$4==6)
                 {var exit=126}
                else
                 if($js$4==7)
                  {var exit=128}
                 else
                  if($js$4==8)
                   {var exit=128}
                  else
                   if($js$4==9)
                    {var exit=128}
                   else
                    if($js$4==10)
                     {var exit=128}
                    else
                     if($js$4==11)
                      {var exit=128}
                     else
                      if($js$4==12)
                       {var exit=128}
                      else
                       if($js$4==13)
                        {var exit=128}
                       else
                        if($js$4==14)
                         {var exit=128}
                        else
                         if($js$4==15)
                          {var exit=128}
                         else
                          if($js$4==16)
                           {var exit=128}
                          else
                           if($js$4==17)
                            {var exit=128}
                           else
                            if($js$4==18)
                             {var exit=126}
                            else
                             if($js$4==19)
                              {var exit=128}
                             else
                              if($js$4==20)
                               {var exit=128}
                              else
                               if($js$4==21)
                                {var exit=128}
                               else
                                if($js$4==22)
                                 {var exit=126}
                                else
                                 if($js$4==23)
                                  {var exit=128}
                                 else
                                  if($js$4==24)
                                   {var exit=126}
                                  else
                                   if($js$4==25)
                                    {var exit=128}
                                   else
                                    if($js$4==26)
                                     {var exit=128}
                                    else
                                     if($js$4==27)
                                      {var exit=128}
                                     else
                                      if($js$4==28)
                                       {var
                                         get_digit=
                                          function(param)
                                           {var $js$5=Scanning[3];
                                            var c$1=$js$5(ib);
                                            var switcher$1=-48+c$1;
                                            var $js$6=22<switcher$1>>>0;
                                            if($js$6)
                                             {var switcher$2=-49+switcher$1;
                                              var $js$7=5<switcher$2>>>0;
                                              if($js$7){var exit$1=123}else{var exit$1=122}}
                                            else
                                             {var switcher$3=-10+switcher$1;
                                              var $js$8=6<switcher$3>>>0;
                                              if($js$8){var exit$1=122}else{var exit$1=123}}
                                            switch(exit$1)
                                             {case 123:var c$2=c$1;return bad_input_escape(c$2);
                                              case 122:var c$3=c$1;return c$3
                                              }};
                                        var c1=get_digit(0);
                                        var c2=get_digit(0);
                                        var $js$5=Scanning[7];
                                        var $js$6=char_for_hexadecimal_code(c1,c2);
                                        return $js$5(width-2,ib,$js$6)}}}
      else
       {var $js$7=c>=48;
        if($js$7)
         {var c$1=c;
          var
           get_digit$1=
            function(param)
             {var $js$8=Scanning[3];
              var c$2=$js$8(ib);
              var switcher$1=-48+c$2;
              var $js$9=9<switcher$1>>>0;
              if($js$9)
               {var c$3=c$2;return bad_input_escape(c$3)}
              else
               {var c$4=c$2;return c$4}};
          var c0=c$1;
          var c1$1=get_digit$1(0);
          var c2$1=get_digit$1(0);
          var $js$8=Scanning[7];
          var $js$9=char_for_decimal_code(c0,c1$1,c2$1);
          return $js$8(width-2,ib,$js$9)}
        else
         {var exit=128}}}
    else
     {var $js$10=c!=34;
      if($js$10)
       {var $js$11=c>=39;if($js$11){var exit=126}else{var exit=128}}
      else
       {var exit=126}}
    switch(exit)
     {case 128:var c$2=c;return bad_input_escape(c$2);
      case 126:
       var $js$12=Scanning[7];
       var $js$13=char_for_backslash(c);
       return $js$12(width,ib,$js$13)
      }};
var
 scan_caml_char=
  function(width,ib)
   {var
     find_start=
      function(width$1)
       {var $js=Scanning[6];
        var c=$js(ib);
        var $js$1=c!=39;
        if($js$1)
         {return character_mismatch(39,c)}
        else
         {var $js$2=Scanning[9];
          var $js$3=$js$2(width$1,ib);
          return find_char($js$3)}};
    var
     find_char=
      function(width$1)
       {var c=check_next_char_for_char(width$1,ib);
        var $js=c!=92;
        if($js)
         {var $js$1=Scanning[7];
          var $js$2=$js$1(width$1,ib,c);
          return find_stop($js$2)}
        else
         {var $js$3=Scanning[9];
          var $js$4=$js$3(width$1,ib);
          var $js$5=scan_backslash_char($js$4,ib);
          return find_stop($js$5)}};
    var
     find_stop=
      function(width$1)
       {var c=check_next_char_for_char(width$1,ib);
        var $js=c!=39;
        if($js)
         {return character_mismatch(39,c)}
        else
         {var $js$1=Scanning[9];return $js$1(width$1,ib)}};
    return find_start(width)};
var
 scan_caml_string=
  function(width,ib)
   {var
     find_start=
      function(width$1)
       {var $js=Scanning[6];
        var c=$js(ib);
        var $js$1=c!=34;
        if($js$1)
         {return character_mismatch(34,c)}
        else
         {var $js$2=Scanning[9];
          var $js$3=$js$2(width$1,ib);
          return find_stop($js$3)}};
    var
     find_stop=
      function(width$1)
       {var c=check_next_char_for_string(width$1,ib);
        var $js=c!=34;
        if($js)
         {var $js$1=c!=92;
          if($js$1)
           {var $js$2=Scanning[7];
            var $js$3=$js$2(width$1,ib,c);
            return find_stop($js$3)}
          else
           {var $js$4=Scanning[9];
            var $js$5=$js$4(width$1,ib);
            return scan_backslash($js$5)}}
        else
         {var $js$6=Scanning[9];return $js$6(width$1,ib)}};
    var
     scan_backslash=
      function(width$1)
       {var match=check_next_char_for_string(width$1,ib);
        var $js=match!=10;
        if($js)
         {var $js$1=match!=13;
          if($js$1)
           {var $js$2=scan_backslash_char(width$1,ib);return find_stop($js$2)}
          else
           {var $js$3=Scanning[9];
            var $js$4=$js$3(width$1,ib);
            return skip_newline($js$4)}}
        else
         {var $js$5=Scanning[9];
          var $js$6=$js$5(width$1,ib);
          return skip_spaces($js$6)}};
    var
     skip_newline=
      function(width$1)
       {var match=check_next_char_for_string(width$1,ib);
        var $js=match!=10;
        if($js)
         {var $js$1=Scanning[7];
          var $js$2=$js$1(width$1,ib,13);
          return find_stop($js$2)}
        else
         {var $js$3=Scanning[9];
          var $js$4=$js$3(width$1,ib);
          return skip_spaces($js$4)}};
    var
     skip_spaces=
      function(width$1)
       {var match=check_next_char_for_string(width$1,ib);
        var $js=match!=32;
        if($js)
         {return find_stop(width$1)}
        else
         {var $js$1=Scanning[9];
          var $js$2=$js$1(width$1,ib);
          return skip_spaces($js$2)}};
    return find_start(width)};
var
 scan_bool=
  function(ib)
   {var $js=Scanning[6];
    var c=$js(ib);
    var $js$1=c!=102;
    if($js$1)
     {var $js$2=c!=116;
      if($js$2)
       {var c$1=c;
        var $js$3=Printf["sprintf"];
        var
         $js$4=
          $js$3
           ([0,
             [11,"the character ",[1,[11," cannot start a boolean",0]]],
             "the character %C cannot start a boolean"],
            c$1);
        var m=bad_input($js$4)}
      else
       {var m=4}}
    else
     {var m=5}
    return scan_string(0,m,ib)};
var
 scan_chars_in_char_set=
  function(char_set,scan_indic,width,ib)
   {var
     scan_chars=
      function(i,stp)
       {var $js=Scanning[5];
        var c=$js(ib);
        var $js$1=Scanning[15];
        var $js$2=$js$1(ib);
        var $js$3=!$js$2;
        var $js$4=CamlinternalFormat["is_in_char_set"];
        var $js$5=$js$4(char_set,c);
        var $js$6=$js$5&&c!=stp;
        var $js$7=$js$3&&$js$6;
        var $js$8=i>0&&$js$7;
        if($js$8)
         {var $js$9=Scanning[7];
          var match=$js$9(Pervasives["max_int"],ib,c);
          return scan_chars(i-1,stp)}
        else
         {return 0}};
    var $js=scan_indic;
    if($js)
     {var c=scan_indic[1];
      scan_chars(width,c);
      var $js$1=Scanning[15];
      var $js$2=$js$1(ib);
      var $js$3=!$js$2;
      if($js$3)
       {var $js$4=Scanning[5];
        var ci=$js$4(ib);
        var $js$5=c=ci;
        if($js$5)
         {var $js$6=Scanning[4];return $js$6(ib)}
        else
         {return character_mismatch(c,ci)}}
      else
       {return 0}}
    else
     {return scan_chars(width,-1)}};
var
 scanf_bad_input=
  function(ib,x)
   {var tag=x[1];
    var $js=tag=Scan_failure;
    if($js)
     {var s=x[2];s$1=s;var exit=91}
    else
     {var tag$1=x[1];
      var $js$1=tag$1=Failure;
      if($js$1){var s$2=x[2];s$1=s$2;var exit=91}else{var $js$2=x;throw $js$2}}
    switch(exit)
     {case 91:
       var $js$3=Scanning[12];
       var i=$js$3(ib);
       var $js$4=Printf["sprintf"];
       var
        $js$5=
         $js$4
          ([0,
            [11,
             "scanf: bad input at char number ",
             [4,3,0,0,[11,": ",[3,0,0]]]],
            "scanf: bad input at char number %i: %S"],
           i,
           s$1);
       return bad_input($js$5)
      }};
var
 get_counter=
  function(ib,counter)
   {var $js=counter;
    var $js$1=$js[0];
    if($js$1==0)
     {var $js$2=Scanning[13];return $js$2(ib)}
    else
     if($js$1==1)
      {var $js$3=Scanning[12];return $js$3(ib)}
     else
      if($js$1==2){var $js$4=Scanning[14];return $js$4(ib)}};
var
 width_of_pad_opt=
  function(pad_opt)
   {var $js=pad_opt;
    if($js)
     {var width=pad_opt[1];return width}
    else
     {return Pervasives["max_int"]}};
var
 stopper_of_formatting_lit=
  function(fmting)
   {var $js=fmting=6;
    if($js)
     {return [0,37,""]}
    else
     {var $js$1=CamlinternalFormat["string_of_formatting_lit"];
      var str=$js$1(fmting);
      var stp=str[1];
      var $js$2=String["sub"];
      var sub_str=$js$2(str,2,str["length"]-2);
      return [0,stp,sub_str]}};
var
 take_format_readers=
  function(k,fmt)
   {var $js=fmt;
    if(typeof $js=="number")
     {if($js==0){return k(0)}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var rest=fmt[1];return take_format_readers(k,rest)}
      else
       if($js$1==1)
        {var rest$1=fmt[1];return take_format_readers(k,rest$1)}
       else
        if($js$1==2)
         {var rest$2=fmt[2];return take_format_readers(k,rest$2)}
        else
         if($js$1==3)
          {var rest$3=fmt[2];return take_format_readers(k,rest$3)}
         else
          if($js$1==4)
           {var rest$4=fmt[4];return take_format_readers(k,rest$4)}
          else
           if($js$1==5)
            {var rest$5=fmt[4];return take_format_readers(k,rest$5)}
           else
            if($js$1==6)
             {var rest$6=fmt[4];return take_format_readers(k,rest$6)}
            else
             if($js$1==7)
              {var rest$7=fmt[4];return take_format_readers(k,rest$7)}
             else
              if($js$1==8)
               {var rest$8=fmt[4];return take_format_readers(k,rest$8)}
              else
               if($js$1==9)
                {var rest$9=fmt[1];return take_format_readers(k,rest$9)}
               else
                if($js$1==10)
                 {var rest$10=fmt[1];return take_format_readers(k,rest$10)}
                else
                 if($js$1==11)
                  {var rest$11=fmt[2];return take_format_readers(k,rest$11)}
                 else
                  if($js$1==12)
                   {var rest$12=fmt[2];return take_format_readers(k,rest$12)}
                  else
                   if($js$1==13)
                    {var rest$13=fmt[3];return take_format_readers(k,rest$13)}
                   else
                    if($js$1==14)
                     {var rest$14=fmt[3];
                      var fmtty=fmt[2];
                      var $js$2=CamlinternalFormatBasics["erase_rel"];
                      var $js$3=CamlinternalFormat["symm"];
                      var $js$4=$js$3(fmtty);
                      var $js$5=$js$2($js$4);
                      return take_fmtty_format_readers(k,$js$5,rest$14)}
                    else
                     if($js$1==15)
                      {var rest$15=fmt[1];return take_format_readers(k,rest$15)}
                     else
                      if($js$1==16)
                       {var rest$16=fmt[1];return take_format_readers(k,rest$16)}
                      else
                       if($js$1==17)
                        {var rest$17=fmt[2];return take_format_readers(k,rest$17)}
                       else
                        if($js$1==18)
                         {var match=fmt[1];
                          var $js$6=match;
                          if($js$6==0)
                           {var rest$18=fmt[2];
                            var match$1=match[1];
                            var fmt$1=match$1[1];
                            var $js$7=CamlinternalFormatBasics["concat_fmt"];
                            var $js$8=$js$7(fmt$1,rest$18);
                            return take_format_readers(k,$js$8)}
                          else
                           if($js$6==1)
                            {var rest$19=fmt[2];
                             var match$2=match[1];
                             var fmt$2=match$2[1];
                             var $js$9=CamlinternalFormatBasics["concat_fmt"];
                             var $js$10=$js$9(fmt$2,rest$19);
                             return take_format_readers(k,$js$10)}}
                        else
                         if($js$1==19)
                          {var fmt_rest=fmt[1];
                           return function(reader)
                            {var
                              new_k=
                               function(readers_rest){return k([0,reader,readers_rest])};
                             return take_format_readers(new_k,fmt_rest)}}
                         else
                          if($js$1==20)
                           {var rest$20=fmt[3];return take_format_readers(k,rest$20)}
                          else
                           if($js$1==21)
                            {var rest$21=fmt[2];return take_format_readers(k,rest$21)}
                           else
                            if($js$1==22)
                             {var rest$22=fmt[1];return take_format_readers(k,rest$22)}
                            else
                             if($js$1==23)
                              {var rest$23=fmt[2];
                               var ign=fmt[1];
                               return take_ignored_format_readers(k,ign,rest$23)}
                             else
                              if($js$1==24)
                               {var rest$24=fmt[3];return take_format_readers(k,rest$24)}}};
var
 take_fmtty_format_readers=
  function(k,fmtty,fmt)
   {var $js=fmtty;
    if(typeof $js=="number")
     {if($js==0){return take_format_readers(k,fmt)}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var rest=fmtty[1];return take_fmtty_format_readers(k,rest,fmt)}
      else
       if($js$1==1)
        {var rest$1=fmtty[1];return take_fmtty_format_readers(k,rest$1,fmt)}
       else
        if($js$1==2)
         {var rest$2=fmtty[1];return take_fmtty_format_readers(k,rest$2,fmt)}
        else
         if($js$1==3)
          {var rest$3=fmtty[1];return take_fmtty_format_readers(k,rest$3,fmt)}
         else
          if($js$1==4)
           {var rest$4=fmtty[1];
            return take_fmtty_format_readers(k,rest$4,fmt)}
          else
           if($js$1==5)
            {var rest$5=fmtty[1];
             return take_fmtty_format_readers(k,rest$5,fmt)}
           else
            if($js$1==6)
             {var rest$6=fmtty[1];
              return take_fmtty_format_readers(k,rest$6,fmt)}
            else
             if($js$1==7)
              {var rest$7=fmtty[1];
               return take_fmtty_format_readers(k,rest$7,fmt)}
             else
              if($js$1==8)
               {var rest$8=fmtty[2];
                return take_fmtty_format_readers(k,rest$8,fmt)}
              else
               if($js$1==9)
                {var rest$9=fmtty[3];
                 var ty2=fmtty[2];
                 var ty1=fmtty[1];
                 var $js$2=CamlinternalFormat["trans"];
                 var $js$3=CamlinternalFormat["symm"];
                 var $js$4=$js$3(ty1);
                 var ty=$js$2($js$4,ty2);
                 var $js$5=CamlinternalFormatBasics["concat_fmtty"];
                 var $js$6=$js$5(ty,rest$9);
                 return take_fmtty_format_readers(k,$js$6,fmt)}
               else
                if($js$1==10)
                 {var rest$10=fmtty[1];
                  return take_fmtty_format_readers(k,rest$10,fmt)}
                else
                 if($js$1==11)
                  {var rest$11=fmtty[1];
                   return take_fmtty_format_readers(k,rest$11,fmt)}
                 else
                  if($js$1==12)
                   {var rest$12=fmtty[1];
                    return take_fmtty_format_readers(k,rest$12,fmt)}
                  else
                   if($js$1==13)
                    {var fmt_rest=fmtty[1];
                     return function(reader)
                      {var
                        new_k=
                         function(readers_rest){return k([0,reader,readers_rest])};
                       return take_fmtty_format_readers(new_k,fmt_rest,fmt)}}
                   else
                    if($js$1==14)
                     {var fmt_rest$1=fmtty[1];
                      return function(reader)
                       {var
                         new_k=
                          function(readers_rest){return k([0,reader,readers_rest])};
                        return take_fmtty_format_readers(new_k,fmt_rest$1,fmt)}}}};
var
 take_ignored_format_readers=
  function(k,ign,fmt)
   {var $js=ign;
    if(typeof $js=="number")
     {if($js==0)
       {return take_format_readers(k,fmt)}
      else
       if($js==1)
        {return take_format_readers(k,fmt)}
       else
        if($js==2)
         {return take_format_readers(k,fmt)}
        else
         if($js==3)
          {return function(reader)
            {var
              new_k=
               function(readers_rest){return k([0,reader,readers_rest])};
             return take_format_readers(new_k,fmt)}}
         else
          if($js==4){return take_format_readers(k,fmt)}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {return take_format_readers(k,fmt)}
      else
       if($js$1==1)
        {return take_format_readers(k,fmt)}
       else
        if($js$1==2)
         {return take_format_readers(k,fmt)}
        else
         if($js$1==3)
          {return take_format_readers(k,fmt)}
         else
          if($js$1==4)
           {return take_format_readers(k,fmt)}
          else
           if($js$1==5)
            {return take_format_readers(k,fmt)}
           else
            if($js$1==6)
             {return take_format_readers(k,fmt)}
            else
             if($js$1==7)
              {return take_format_readers(k,fmt)}
             else
              if($js$1==8)
               {var fmtty=ign[2];
                return take_fmtty_format_readers(k,fmtty,fmt)}
              else
               if($js$1==9)
                {return take_format_readers(k,fmt)}
               else
                if($js$1==10){return take_format_readers(k,fmt)}}};
var
 make_scanf=
  function(ib,fmt,readers)
   {var $js=fmt;
    if(typeof $js=="number")
     {if($js==0){return 0}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var rest=fmt[1];
        var match=scan_char(0,ib);
        var c=token_char(ib);
        var $js$2=make_scanf(ib,rest,readers);
        return [0,c,$js$2]}
      else
       if($js$1==1)
        {var rest$1=fmt[1];
         var match$1=scan_caml_char(0,ib);
         var c$1=token_char(ib);
         var $js$3=make_scanf(ib,rest$1,readers);
         return [0,c$1,$js$3]}
       else
        if($js$1==2)
         {var rest$2=fmt[2];
          var pad=fmt[1];
          var $js$4=rest$2;
          if(typeof $js$4=="number")
           {"unknown block:rest/1628"}
          else
           {var $js$5=$js$4[0];
            if($js$5==17)
             {var rest$3=rest$2[2];
              var fmting_lit=rest$2[1];
              var match$2=stopper_of_formatting_lit(fmting_lit);
              var str=match$2[2];
              var stp=match$2[1];
              var
               scan=
                function(width,param,ib$1)
                 {return scan_string([0,stp],width,ib$1)};
              var str_rest=[11,str,rest$3];
              return pad_prec_scanf
                      (ib,str_rest,readers,pad,0,scan,token_string)}
            else
             if($js$5==18)
              {var match$3=rest$2[1];
               var $js$6=match$3;
               if($js$6==0)
                {var pad$1=pad;
                 var rest$4=rest$2[2];
                 var match$4=match$3[1];
                 var fmt'=match$4[1];
                 var
                  scan$1=
                   function(width,param,ib$1)
                    {return scan_string([0,123],width,ib$1)};
                 var $js$7=CamlinternalFormatBasics["concat_fmt"];
                 var $js$8=$js$7(fmt',rest$4);
                 return pad_prec_scanf
                         (ib,$js$8,readers,pad$1,0,scan$1,token_string)}
               else
                if($js$6==1)
                 {var pad$2=pad;
                  var rest$5=rest$2[2];
                  var match$5=match$3[1];
                  var fmt'$1=match$5[1];
                  var
                   scan$2=
                    function(width,param,ib$1)
                     {return scan_string([0,91],width,ib$1)};
                  var $js$9=CamlinternalFormatBasics["concat_fmt"];
                  var $js$10=$js$9(fmt'$1,rest$5);
                  return pad_prec_scanf
                          (ib,$js$10,readers,pad$2,0,scan$2,token_string)}}
             else
              {var exit=67}}
          switch(exit)
           {case 67:
             var pad$3=pad;
             var
              scan$3=
               function(width,param,ib$1){return scan_string(0,width,ib$1)};
             return pad_prec_scanf
                     (ib,rest$2,readers,pad$3,0,scan$3,token_string)
            }}
        else
         if($js$1==3)
          {var rest$6=fmt[2];
           var pad$4=fmt[1];
           var
            scan$4=
             function(width,param,ib$1){return scan_caml_string(width,ib$1)};
           return pad_prec_scanf
                   (ib,rest$6,readers,pad$4,0,scan$4,token_string)}
         else
          if($js$1==4)
           {var rest$7=fmt[4];
            var prec=fmt[3];
            var pad$5=fmt[2];
            var iconv=fmt[1];
            var $js$11=CamlinternalFormat["char_of_iconv"];
            var c$2=$js$11(iconv);
            var
             scan$5=
              function(width,param,ib$1){return scan_int_conv(c$2,width,ib$1)};
            var $js$12=token_int(c$2);
            return pad_prec_scanf(ib,rest$7,readers,pad$5,prec,scan$5,$js$12)}
          else
           if($js$1==5)
            {var rest$8=fmt[4];
             var prec$1=fmt[3];
             var pad$6=fmt[2];
             var iconv$1=fmt[1];
             var $js$13=CamlinternalFormat["char_of_iconv"];
             var c$3=$js$13(iconv$1);
             var
              scan$6=
               function(width,param,ib$1)
                {return scan_int_conv(c$3,width,ib$1)};
             var $js$14=token_int32(c$3);
             return pad_prec_scanf
                     (ib,rest$8,readers,pad$6,prec$1,scan$6,$js$14)}
           else
            if($js$1==6)
             {var rest$9=fmt[4];
              var prec$2=fmt[3];
              var pad$7=fmt[2];
              var iconv$2=fmt[1];
              var $js$15=CamlinternalFormat["char_of_iconv"];
              var c$4=$js$15(iconv$2);
              var
               scan$7=
                function(width,param,ib$1)
                 {return scan_int_conv(c$4,width,ib$1)};
              var $js$16=token_nativeint(c$4);
              return pad_prec_scanf
                      (ib,rest$9,readers,pad$7,prec$2,scan$7,$js$16)}
            else
             if($js$1==7)
              {var rest$10=fmt[4];
               var prec$3=fmt[3];
               var pad$8=fmt[2];
               var iconv$3=fmt[1];
               var $js$17=CamlinternalFormat["char_of_iconv"];
               var c$5=$js$17(iconv$3);
               var
                scan$8=
                 function(width,param,ib$1)
                  {return scan_int_conv(c$5,width,ib$1)};
               var $js$18=token_int64(c$5);
               return pad_prec_scanf
                       (ib,rest$10,readers,pad$8,prec$3,scan$8,$js$18)}
             else
              if($js$1==8)
               {var match$6=fmt[1];
                var $js$19=match$6>=15;
                if($js$19)
                 {var rest$11=fmt[4];
                  var prec$4=fmt[3];
                  var pad$9=fmt[2];
                  return pad_prec_scanf
                          (ib,
                           rest$11,
                           readers,
                           pad$9,
                           prec$4,
                           scan_caml_float,
                           token_float)}
                else
                 {var rest$12=fmt[4];
                  var prec$5=fmt[3];
                  var pad$10=fmt[2];
                  return pad_prec_scanf
                          (ib,rest$12,readers,pad$10,prec$5,scan_float,token_float)}}
              else
               if($js$1==9)
                {var rest$13=fmt[1];
                 var match$7=scan_bool(ib);
                 var b=token_bool(ib);
                 var $js$20=make_scanf(ib,rest$13,readers);
                 return [0,b,$js$20]}
               else
                if($js$1==10)
                 {var rest$14=fmt[1];
                  var $js$21=Scanning[16];
                  var $js$22=$js$21(ib);
                  if($js$22)
                   {return make_scanf(ib,rest$14,readers)}
                  else
                   {return bad_input("end of input not found")}}
                else
                 if($js$1==11)
                  {var rest$15=fmt[2];
                   var str$1=fmt[1];
                   var $js$23=String["iter"];
                   var $js$24=check_char(ib);
                   $js$23($js$24,str$1);
                   return make_scanf(ib,rest$15,readers)}
                 else
                  if($js$1==12)
                   {var rest$16=fmt[2];
                    var chr=fmt[1];
                    check_char(ib,chr);
                    return make_scanf(ib,rest$16,readers)}
                  else
                   if($js$1==13)
                    {var rest$17=fmt[3];
                     var fmtty=fmt[2];
                     var pad_opt=fmt[1];
                     var $js$25=width_of_pad_opt(pad_opt);
                     var match$8=scan_caml_string($js$25,ib);
                     var s=token_string(ib);
                     try
                      {var $js$26=CamlinternalFormat["format_of_string_fmtty"];
                       var fmt$1=$js$26(s,fmtty)}
                     catch(exn)
                      {var tag=exn[1];
                       var $js$27=tag=Failure;
                       if($js$27)
                        {var msg=exn[2];var fmt$1=bad_input(msg)}
                       else
                        {var fmt$1="unknown primitive:reraise"}}
                     var $js$28=make_scanf(ib,rest$17,readers);
                     return [0,fmt$1,$js$28]}
                   else
                    if($js$1==14)
                     {var rest$18=fmt[3];
                      var fmtty$1=fmt[2];
                      var pad_opt$1=fmt[1];
                      var $js$29=width_of_pad_opt(pad_opt$1);
                      var match$9=scan_caml_string($js$29,ib);
                      var s$1=token_string(ib);
                      try
                       {var $js$30=CamlinternalFormat["fmt_ebb_of_string"];
                        var match$10=$js$30(0,s$1);
                        var fmt$2=match$10[1];
                        var $js$31=CamlinternalFormat["fmt_ebb_of_string"];
                        var match$11=$js$31(0,s$1);
                        var fmt'$2=match$11[1];
                        var $js$32=CamlinternalFormat["type_format"];
                        var $js$33=CamlinternalFormatBasics["erase_rel"];
                        var $js$34=$js$33(fmtty$1);
                        var $js$35=$js$32(fmt$2,$js$34);
                        var $js$36=CamlinternalFormat["type_format"];
                        var $js$37=CamlinternalFormatBasics["erase_rel"];
                        var $js$38=CamlinternalFormat["symm"];
                        var $js$39=$js$38(fmtty$1);
                        var $js$40=$js$37($js$39);
                        var $js$41=$js$36(fmt'$2,$js$40);
                        var match$12=[0,$js$35,$js$41]}
                      catch(exn$1)
                       {var tag$1=exn$1[1];
                        var $js$42=tag$1=Failure;
                        if($js$42)
                         {var msg$1=exn$1[2];var match$12=bad_input(msg$1)}
                        else
                         {var match$12="unknown primitive:reraise"}}
                      var fmt'$3=match$12[2];
                      var fmt$3=match$12[1];
                      var $js$43=CamlinternalFormatBasics["concat_fmt"];
                      var $js$44=$js$43(fmt'$3,rest$18);
                      var $js$45=make_scanf(ib,$js$44,readers);
                      return [0,[0,fmt$3,s$1],$js$45]}
                    else
                     if($js$1==15)
                      {var $js$46=Pervasives["invalid_arg"];
                       return $js$46('scanf: bad conversion "%a"')}
                     else
                      if($js$1==16)
                       {var $js$47=Pervasives["invalid_arg"];
                        return $js$47('scanf: bad conversion "%t"')}
                      else
                       if($js$1==17)
                        {var rest$19=fmt[2];
                         var formatting_lit=fmt[1];
                         var $js$48=String["iter"];
                         var $js$49=check_char(ib);
                         var $js$50=CamlinternalFormat["string_of_formatting_lit"];
                         var $js$51=$js$50(formatting_lit);
                         $js$48($js$49,$js$51);
                         return make_scanf(ib,rest$19,readers)}
                       else
                        if($js$1==18)
                         {var match$13=fmt[1];
                          var $js$52=match$13;
                          if($js$52==0)
                           {var rest$20=fmt[2];
                            var match$14=match$13[1];
                            var fmt'$4=match$14[1];
                            check_char(ib,64);
                            check_char(ib,123);
                            var $js$53=CamlinternalFormatBasics["concat_fmt"];
                            var $js$54=$js$53(fmt'$4,rest$20);
                            return make_scanf(ib,$js$54,readers)}
                          else
                           if($js$52==1)
                            {var rest$21=fmt[2];
                             var match$15=match$13[1];
                             var fmt'$5=match$15[1];
                             check_char(ib,64);
                             check_char(ib,91);
                             var $js$55=CamlinternalFormatBasics["concat_fmt"];
                             var $js$56=$js$55(fmt'$5,rest$21);
                             return make_scanf(ib,$js$56,readers)}}
                        else
                         if($js$1==19)
                          {var fmt_rest=fmt[1];
                           var readers_rest=readers[2];
                           var reader=readers[1];
                           var x=reader(ib);
                           var $js$57=make_scanf(ib,fmt_rest,readers_rest);
                           return [0,x,$js$57]}
                         else
                          if($js$1==20)
                           {var rest$22=fmt[3];
                            var char_set=fmt[2];
                            var width_opt=fmt[1];
                            var $js$58=rest$22;
                            if(typeof $js$58=="number")
                             {"unknown block:rest/1716"}
                            else
                             {var $js$59=$js$58[0];
                              if($js$59==17)
                               {var rest$23=rest$22[2];
                                var fmting_lit$1=rest$22[1];
                                var match$16=stopper_of_formatting_lit(fmting_lit$1);
                                var str$2=match$16[2];
                                var stp$1=match$16[1];
                                var width=width_of_pad_opt(width_opt);
                                var
                                 match$17=
                                  scan_chars_in_char_set(char_set,[0,stp$1],width,ib);
                                var s$2=token_string(ib);
                                var str_rest$1=[11,str$2,rest$23];
                                var $js$60=make_scanf(ib,str_rest$1,readers);
                                return [0,s$2,$js$60]}
                              else
                               {var exit$1=69}}
                            switch(exit$1)
                             {case 69:
                               var char_set$1=char_set;
                               var width_opt$1=width_opt;
                               var width$1=width_of_pad_opt(width_opt$1);
                               var
                                match$18=
                                 scan_chars_in_char_set(char_set$1,0,width$1,ib);
                               var s$3=token_string(ib);
                               var $js$61=make_scanf(ib,rest$22,readers);
                               return [0,s$3,$js$61]
                              }}
                          else
                           if($js$1==21)
                            {var rest$24=fmt[2];
                             var counter=fmt[1];
                             var count=get_counter(ib,counter);
                             var $js$62=make_scanf(ib,rest$24,readers);
                             return [0,count,$js$62]}
                           else
                            if($js$1==22)
                             {var rest$25=fmt[1];
                              var $js$63=Scanning[6];
                              var c$6=$js$63(ib);
                              var $js$64=make_scanf(ib,rest$25,readers);
                              return [0,c$6,$js$64]}
                            else
                             if($js$1==23)
                              {var rest$26=fmt[2];
                               var ign=fmt[1];
                               var
                                $js$65=
                                 CamlinternalFormat["param_format_of_ignored_format"];
                               var match$19=$js$65(ign,rest$26);
                               var fmt'$6=match$19[1];
                               var match$20=make_scanf(ib,fmt'$6,readers);
                               var $js$66=match$20;
                               if($js$66)
                                {var arg_rest=match$20[2];return arg_rest}
                               else
                                {var $js$67=[0,Assert_failure,[0,"scanf.ml",1258,13]];
                                 throw $js$67}}
                             else
                              if($js$1==24)
                               {var $js$68=Pervasives["invalid_arg"];
                                return $js$68
                                        ('scanf: bad conversion "%?" (custom converter)')}}};
var
 pad_prec_scanf=
  function(ib,fmt,readers,pad,prec,scan,token$1)
   {var match=pad;
    var match$1=prec;
    var $js=match;
    if(typeof $js=="number")
     {if($js==0)
       {var $js$1="unknown primitive:isint";
        if($js$1)
         {var $js$2=match$1!=0;
          if($js$2)
           {var $js$3=Pervasives["invalid_arg"];
            return $js$3('scanf: bad conversion "%*"')}
          else
           {var match$2=scan(Pervasives["max_int"],Pervasives["max_int"],ib);
            var x=token$1(ib);
            var $js$4=make_scanf(ib,fmt,readers);
            return [0,x,$js$4]}}
        else
         {var p=match$1[1];
          var match$3=scan(Pervasives["max_int"],p,ib);
          var x$1=token$1(ib);
          var $js$5=make_scanf(ib,fmt,readers);
          return [0,x$1,$js$5]}}}
    else
     {var $js$6=$js[0];
      if($js$6==0)
       {var match$4=match[1];
        var $js$7=match$4!=0;
        if($js$7)
         {var w=match[2];
          var $js$8="unknown primitive:isint";
          if($js$8)
           {var $js$9=match$1!=0;
            if($js$9)
             {var $js$10=Pervasives["invalid_arg"];
              return $js$10('scanf: bad conversion "%*"')}
            else
             {var match$5=scan(w,Pervasives["max_int"],ib);
              var x$2=token$1(ib);
              var $js$11=make_scanf(ib,fmt,readers);
              return [0,x$2,$js$11]}}
          else
           {var w$1=w;
            var p$1=match$1[1];
            var match$6=scan(w$1,p$1,ib);
            var x$3=token$1(ib);
            var $js$12=make_scanf(ib,fmt,readers);
            return [0,x$3,$js$12]}}
        else
         {var $js$13=Pervasives["invalid_arg"];
          return $js$13('scanf: bad conversion "%-"')}}
      else
       if($js$6==1)
        {var $js$14=Pervasives["invalid_arg"];
         return $js$14('scanf: bad conversion "%*"')}}};
var
 kscanf=
  function(ib,ef,param)
   {var str=param[2];
    var fmt=param[1];
    var
     apply=
      function(f,args)
       {var $js=args;
        if($js)
         {var r=args[2];var x=args[1];var $js$1=f(x);return apply($js$1,r)}
        else
         {return f}};
    var
     k=
      function(readers,f)
       {var $js=Scanning[11];
        $js(ib);
        try
         {var $js$1=make_scanf(ib,fmt,readers);var match=[0,$js$1]}
        catch(exc)
         {var tag=exc[1];
          var $js$2=tag=Scan_failure;
          if($js$2)
           {var exit=21}
          else
           {var tag$1=exc[1];
            var $js$3=tag$1=Failure;
            if($js$3)
             {var exit=21}
            else
             {var $js$4=exc=End_of_file;
              if($js$4)
               {var exit=21}
              else
               {var tag$2=exc[1];
                var $js$5=tag$2=Invalid_argument;
                if($js$5)
                 {var msg=exc[2];
                  var $js$6=Pervasives["invalid_arg"];
                  var $js$7=Pervasives["^"];
                  var $js$8=Pervasives["^"];
                  var $js$9=Pervasives["^"];
                  var $js$10=String["escaped"];
                  var $js$11=$js$10(str);
                  var $js$12=$js$9($js$11,'"');
                  var $js$13=$js$8(' in format "',$js$12);
                  var $js$14=$js$7(msg,$js$13);
                  var match=$js$6($js$14)}
                else
                 {var match="unknown primitive:reraise"}}}}
          switch(exit){case 21:var match=[1,exc]}}
        var $js$15=match;
        if($js$15==0)
         {var args=match[1];return apply(f,args)}
        else
         if($js$15==1){var exc$1=match[1];return ef(ib,exc$1)}};
    return take_format_readers(k,fmt)};
var kbscanf=kscanf;
var
 ksscanf=
  function(s,ef,fmt)
   {var $js=Scanning[23];var $js$1=$js(s);return kbscanf($js$1,ef,fmt)};
var
 kfscanf=
  function(ic,ef,fmt)
   {var $js=Scanning[25];var $js$1=$js(ic);return kbscanf($js$1,ef,fmt)};
var bscanf=function(ib,fmt){return kscanf(ib,scanf_bad_input,fmt)};
var
 fscanf=
  function(ic,fmt)
   {var $js=Scanning[25];
    var $js$1=$js(ic);
    return kscanf($js$1,scanf_bad_input,fmt)};
var
 sscanf=
  function(s,fmt)
   {var $js=Scanning[23];
    var $js$1=$js(s);
    return kscanf($js$1,scanf_bad_input,fmt)};
var scanf=function(fmt){return kscanf(Scanning[2],scanf_bad_input,fmt)};
var
 bscanf_format=
  function(ib,format,f)
   {var match=scan_caml_string(Pervasives["max_int"],ib);
    var str=token_string(ib);
    try
     {var $js=CamlinternalFormat["format_of_string_format"];
      var fmt'=$js(str,format)}
    catch(exn)
     {var tag=exn[1];
      var $js$1=tag=Failure;
      if($js$1)
       {var msg=exn[2];var fmt'=bad_input(msg)}
      else
       {var fmt'="unknown primitive:reraise"}}
    return f(fmt')};
var
 sscanf_format=
  function(s,format,f)
   {var $js=Scanning[23];
    var $js$1=$js(s);
    return bscanf_format($js$1,format,f)};
var
 string_to_String=
  function(s)
   {var l=s["length"];
    var $js=Buffer["create"];
    var b=$js(l+2);
    var $js$1=Buffer["add_char"];
    $js$1(b,34);
    var $js$2=0;
    var $js$3=l-1;
    for(var i=$js$2;i<=$js$3;i++)
     {var c=s[i];
      var $js$4=c=34;
      if($js$4){var $js$5=Buffer["add_char"];$js$5(b,92)}else{}
      var $js$6=Buffer["add_char"];
      $js$6(b,c)}
    var $js$7=Buffer["add_char"];
    $js$7(b,34);
    var $js$8=Buffer["contents"];
    return $js$8(b)};
var
 format_from_string=
  function(s,fmt)
   {var $js=string_to_String(s);
    return sscanf_format($js,fmt,function(x){return x})};
var
 unescaped=
  function(s)
   {var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=$js$1(s,'"');
    var $js$3=$js('"',$js$2);
    return sscanf($js$3,[0,[3,0,[10,0]],"%S%!"],function(x){return x})};
module["exports"]=
{"unknown block:(makeblock 0 (field 0 Scanning/1152) (field 18 Scanning/1152)\n  (field 19 Scanning/1152) (field 25 Scanning/1152) (field 20 Scanning/1152)\n  (field 21 Scanning/1152) (field 22 Scanning/1152) (field 23 Scanning/1152)\n  (field 24 Scanning/1152) (field 15 Scanning/1152) (field 16 Scanning/1152)\n  (field 17 Scanning/1152) (field 1 Scanning/1152))":
 unknown block:(makeblock 0 (field 0 Scanning/1152) (field 18 Scanning/1152)
  (field 19 Scanning/1152) (field 25 Scanning/1152) (field 20 Scanning/1152)
  (field 21 Scanning/1152) (field 22 Scanning/1152) (field 23 Scanning/1152)
  (field 24 Scanning/1152) (field 15 Scanning/1152) (field 16 Scanning/1152)
  (field 17 Scanning/1152) (field 1 Scanning/1152)),
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
