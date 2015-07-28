var String=require("String");
var Char=require("Char");
var CamlinternalFormatBasics=require("CamlinternalFormatBasics");
var Pervasives=require("Pervasives");
var Buffer=require("Buffer");
var Bytes=require("Bytes");
var Sys=require("Sys");
var create_char_set=function(param){var $js=Bytes["make"];return $js(32,0)};
var
 add_in_char_set=
  function(char_set,c)
   {var ind=c;
    var str_ind=ind>>>3;
    var mask=1<<(ind&7);
    var $js=Pervasives["char_of_int"];
    var $js$1=char_set[str_ind];
    var $js$2=$js$1;
    var $js$3=$js$2|mask;
    var $js$4=$js($js$3);
    return char_set[str_ind]=$js$4,0};
var
 freeze_char_set=
  function(char_set){var $js=Bytes["to_string"];return $js(char_set)};
var
 rev_char_set=
  function(char_set)
   {var char_set'=create_char_set(0);
    var $js=0;
    var $js$1=31;
    for(var i=$js;i<=$js$1;i++)
     {var $js$2=Pervasives["char_of_int"];
      var $js$3=char_set[i];
      var $js$4=$js$3;
      var $js$5=$js$4^255;
      var $js$6=$js$2($js$5);
      char_set'[i]=$js$6,0}
    var $js$7=Bytes["unsafe_to_string"];
    return $js$7(char_set')};
var
 is_in_char_set=
  function(char_set,c)
   {var ind=c;
    var str_ind=ind>>>3;
    var mask=1<<(ind&7);
    var $js=char_set[str_ind];
    var $js$1=$js;
    var $js$2=$js$1&mask;
    return $js$2!=0};
var
 pad_of_pad_opt=
  function(pad_opt)
   {var $js=pad_opt;
    if($js){var width=pad_opt[1];return [0,1,width]}else{return 0}};
var
 prec_of_prec_opt=
  function(prec_opt)
   {var $js=prec_opt;
    if($js){var ndec=prec_opt[1];return [0,ndec]}else{return 0}};
var
 param_format_of_ignored_format=
  function(ign,fmt)
   {var $js=ign;
    if(typeof $js=="number")
     {if($js==0)
       {return [0,[0,fmt]]}
      else
       if($js==1)
        {return [0,[1,fmt]]}
       else
        if($js==2)
         {return [0,[9,fmt]]}
        else
         if($js==3){return [0,[19,fmt]]}else if($js==4){return [0,[22,fmt]]}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var pad_opt=ign[1];
        var $js$2=pad_of_pad_opt(pad_opt);
        var $js$3=[2,$js$2,fmt];
        return [0,$js$3]}
      else
       if($js$1==1)
        {var pad_opt$1=ign[1];
         var $js$4=pad_of_pad_opt(pad_opt$1);
         var $js$5=[3,$js$4,fmt];
         return [0,$js$5]}
       else
        if($js$1==2)
         {var pad_opt$2=ign[2];
          var iconv=ign[1];
          var $js$6=pad_of_pad_opt(pad_opt$2);
          var $js$7=[4,iconv,$js$6,0,fmt];
          return [0,$js$7]}
        else
         if($js$1==3)
          {var pad_opt$3=ign[2];
           var iconv$1=ign[1];
           var $js$8=pad_of_pad_opt(pad_opt$3);
           var $js$9=[5,iconv$1,$js$8,0,fmt];
           return [0,$js$9]}
         else
          if($js$1==4)
           {var pad_opt$4=ign[2];
            var iconv$2=ign[1];
            var $js$10=pad_of_pad_opt(pad_opt$4);
            var $js$11=[6,iconv$2,$js$10,0,fmt];
            return [0,$js$11]}
          else
           if($js$1==5)
            {var pad_opt$5=ign[2];
             var iconv$3=ign[1];
             var $js$12=pad_of_pad_opt(pad_opt$5);
             var $js$13=[7,iconv$3,$js$12,0,fmt];
             return [0,$js$13]}
           else
            if($js$1==6)
             {var prec_opt=ign[2];
              var pad_opt$6=ign[1];
              var $js$14=pad_of_pad_opt(pad_opt$6);
              var $js$15=prec_of_prec_opt(prec_opt);
              var $js$16=[8,0,$js$14,$js$15,fmt];
              return [0,$js$16]}
            else
             if($js$1==7)
              {var fmtty=ign[2];
               var pad_opt$7=ign[1];
               return [0,[13,pad_opt$7,fmtty,fmt]]}
             else
              if($js$1==8)
               {var fmtty$1=ign[2];
                var pad_opt$8=ign[1];
                return [0,[14,pad_opt$8,fmtty$1,fmt]]}
              else
               if($js$1==9)
                {var char_set=ign[2];
                 var width_opt=ign[1];
                 return [0,[20,width_opt,char_set,fmt]]}
               else
                if($js$1==10){var counter=ign[1];return [0,[21,counter,fmt]]}}};
var default_float_precision=6;
var
 buffer_create=
  function(init_size)
   {var $js="unknown primitive:caml_create_string";return [0,0,$js]};
var
 buffer_check_size=
  function(buf,overhead)
   {var len=buf[2]["length"];
    var min_len=buf[1]+overhead;
    var $js=min_len>len;
    if($js)
     {var $js$1=Pervasives["max"];
      var new_len=$js$1(len*2,min_len);
      var new_str="unknown primitive:caml_create_string";
      var $js$2=Bytes["blit"];
      $js$2(buf[2],0,new_str,0,len);
      return buf[2]=new_str,0}
    else
     {return 0}};
var
 buffer_add_char=
  function(buf,c)
   {buffer_check_size(buf,1);buf[2][buf[1]]=c,0;return buf[1]=buf[1]+1,0};
var
 buffer_add_string=
  function(buf,s)
   {var str_len=s["length"];
    buffer_check_size(buf,str_len);
    var $js=String["blit"];
    $js(s,0,buf[2],buf[1],str_len);
    return buf[1]=buf[1]+str_len,0};
var
 buffer_contents=
  function(buf){var $js=Bytes["sub_string"];return $js(buf[2],0,buf[1])};
var
 char_of_iconv=
  function(iconv)
   {var $js=iconv;
    var $js$1=$js[0];
    if($js$1==0)
     {var exit=387}
    else
     if($js$1==1)
      {var exit=387}
     else
      if($js$1==2)
       {var exit=387}
      else
       if($js$1==3)
        {var exit=388}
       else
        if($js$1==4)
         {var exit=388}
        else
         if($js$1==5)
          {var exit=388}
         else
          if($js$1==6)
           {var exit=389}
          else
           if($js$1==7)
            {var exit=389}
           else
            if($js$1==8)
             {var exit=390}
            else
             if($js$1==9)
              {var exit=390}
             else
              if($js$1==10)
               {var exit=391}
              else
               if($js$1==11){var exit=391}else if($js$1==12){return 117}
    switch(exit)
     {case 387:return 100;
      case 388:return 105;
      case 389:return 120;
      case 390:return 88;
      case 391:return 111
      }};
var
 char_of_fconv=
  function(fconv)
   {var $js=fconv;
    var $js$1=$js[0];
    if($js$1==0)
     {var exit=381}
    else
     if($js$1==1)
      {var exit=381}
     else
      if($js$1==2)
       {var exit=381}
      else
       if($js$1==3)
        {var exit=382}
       else
        if($js$1==4)
         {var exit=382}
        else
         if($js$1==5)
          {var exit=382}
         else
          if($js$1==6)
           {var exit=383}
          else
           if($js$1==7)
            {var exit=383}
           else
            if($js$1==8)
             {var exit=383}
            else
             if($js$1==9)
              {var exit=384}
             else
              if($js$1==10)
               {var exit=384}
              else
               if($js$1==11)
                {var exit=384}
               else
                if($js$1==12)
                 {var exit=385}
                else
                 if($js$1==13)
                  {var exit=385}
                 else
                  if($js$1==14){var exit=385}else if($js$1==15){return 70}
    switch(exit)
     {case 381:return 102;
      case 382:return 101;
      case 383:return 69;
      case 384:return 103;
      case 385:return 71
      }};
var
 char_of_counter=
  function(counter)
   {var $js=counter;
    var $js$1=$js[0];
    if($js$1==0)
     {return 108}
    else
     if($js$1==1){return 110}else if($js$1==2){return 78}};
var
 bprint_char_set=
  function(buf,char_set)
   {var
     print_start=
      function(set)
       {var
         is_alone=
          function(c)
           {var $js=Char["chr"];
            var $js$1=$js(c-1);
            var $js$2=Char["chr"];
            var $js$3=$js$2(c+1);
            var match=[0,$js$1,$js$3];
            var after=match[2];
            var before=match[1];
            var $js$4=is_in_char_set(set,c);
            var $js$5=is_in_char_set(set,before);
            var $js$6=is_in_char_set(set,after);
            var $js$7=$js$5&&$js$6;
            var $js$8=!$js$7;
            return $js$4&&$js$8};
        var $js=is_alone(93);
        if($js){buffer_add_char(buf,93)}else{}
        print_out(set,1);
        var $js$1=is_alone(45);
        if($js$1){return buffer_add_char(buf,45)}else{return 0}};
    var
     print_out=
      function(set,i)
       {var $js=i<256;
        if($js)
         {var $js$1=Pervasives["char_of_int"];
          var $js$2=$js$1(i);
          var $js$3=is_in_char_set(set,$js$2);
          if($js$3){return print_first(set,i)}else{return print_out(set,i+1)}}
        else
         {return 0}};
    var
     print_first=
      function(set,i)
       {var $js=Pervasives["char_of_int"];
        var match=$js(i);
        var switcher=-45+match;
        var $js$1=!(48<switcher>>>0);
        if($js$1)
         {var switcher$1=-1+switcher;
          var $js$2=46<switcher$1>>>0;
          if($js$2){return print_out(set,i+1)}else{var exit=375}}
        else
         {var $js$3=switcher>=210;
          if($js$3){return print_char(buf,255)}else{var exit=375}}
        switch(exit){case 375:return print_second(set,i+1)}};
    var
     print_second=
      function(set,i)
       {var $js=Pervasives["char_of_int"];
        var $js$1=$js(i);
        var $js$2=is_in_char_set(set,$js$1);
        if($js$2)
         {var $js$3=Pervasives["char_of_int"];
          var match=$js$3(i);
          var switcher=-45+match;
          var $js$4=!(48<switcher>>>0);
          if($js$4)
           {var switcher$1=-1+switcher;
            var $js$5=46<switcher$1>>>0;
            if($js$5)
             {var $js$6=Pervasives["char_of_int"];
              var $js$7=$js$6(i+1);
              var $js$8=is_in_char_set(set,$js$7);
              var $js$9=!$js$8;
              if($js$9)
               {print_char(buf,i-1);return print_out(set,i+1)}
              else
               {var exit=376}}
            else
             {var exit=376}}
          else
           {var $js$10=switcher>=210;
            if($js$10)
             {print_char(buf,254);return print_char(buf,255)}
            else
             {var exit=376}}
          switch(exit)
           {case 376:
             var $js$11=Pervasives["char_of_int"];
             var $js$12=$js$11(i+1);
             var $js$13=is_in_char_set(set,$js$12);
             var $js$14=!$js$13;
             if($js$14)
              {print_char(buf,i-1);
               print_char(buf,i);
               return print_out(set,i+2)}
             else
              {return print_in(set,i-1,i+2)}
            }}
        else
         {print_char(buf,i-1);return print_out(set,i+1)}};
    var
     print_in=
      function(set,i,j)
       {var $js=Pervasives["char_of_int"];
        var $js$1=$js(j);
        var $js$2=is_in_char_set(set,$js$1);
        var $js$3=!$js$2;
        var $js$4=(j=256)||$js$3;
        if($js$4)
         {print_char(buf,i);
          print_char(buf,45);
          print_char(buf,j-1);
          var $js$5=j<256;
          if($js$5){return print_out(set,j+1)}else{return 0}}
        else
         {return print_in(set,i,j+1)}};
    var
     print_char=
      function(buf$1,i)
       {var $js=Pervasives["char_of_int"];
        var c=$js(i);
        var $js$1=c!=37;
        if($js$1)
         {var $js$2=c!=64;
          if($js$2)
           {return buffer_add_char(buf$1,c)}
          else
           {buffer_add_char(buf$1,37);return buffer_add_char(buf$1,64)}}
        else
         {buffer_add_char(buf$1,37);return buffer_add_char(buf$1,37)}};
    buffer_add_char(buf,91);
    var $js=is_in_char_set(char_set,0);
    if($js)
     {buffer_add_char(buf,94);var $js$1=rev_char_set(char_set)}
    else
     {var $js$1=char_set}
    print_start($js$1);
    return buffer_add_char(buf,93)};
var
 bprint_padty=
  function(buf,padty)
   {var $js=padty;
    var $js$1=$js[0];
    if($js$1==0)
     {return buffer_add_char(buf,45)}
    else
     if($js$1==1){return 0}else if($js$1==2){return buffer_add_char(buf,48)}};
var
 bprint_ignored_flag=
  function(buf,ign_flag)
   {var $js=ign_flag;if($js){return buffer_add_char(buf,95)}else{return 0}};
var
 bprint_pad_opt=
  function(buf,pad_opt)
   {var $js=pad_opt;
    if($js)
     {var width=pad_opt[1];
      var $js$1=Pervasives["string_of_int"];
      var $js$2=$js$1(width);
      return buffer_add_string(buf,$js$2)}
    else
     {return 0}};
var
 bprint_padding=
  function(buf,pad)
   {var $js=pad;
    if(typeof $js=="number")
     {if($js==0){return 0}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var n=pad[2];
        var padty=pad[1];
        bprint_padty(buf,padty);
        var $js$2=Pervasives["string_of_int"];
        var $js$3=$js$2(n);
        return buffer_add_string(buf,$js$3)}
      else
       if($js$1==1)
        {var padty$1=pad[1];
         bprint_padty(buf,padty$1);
         return buffer_add_char(buf,42)}}};
var
 bprint_precision=
  function(buf,prec)
   {var $js="unknown primitive:isint";
    if($js)
     {var $js$1=prec!=0;
      if($js$1){return buffer_add_string(buf,".*")}else{return 0}}
    else
     {var n=prec[1];
      buffer_add_char(buf,46);
      var $js$2=Pervasives["string_of_int"];
      var $js$3=$js$2(n);
      return buffer_add_string(buf,$js$3)}};
var
 bprint_iconv_flag=
  function(buf,iconv)
   {var $js=iconv;
    var $js$1=$js[0];
    if($js$1==0)
     {var exit=365}
    else
     if($js$1==1)
      {var exit=362}
     else
      if($js$1==2)
       {var exit=363}
      else
       if($js$1==3)
        {var exit=365}
       else
        if($js$1==4)
         {var exit=362}
        else
         if($js$1==5)
          {var exit=363}
         else
          if($js$1==6)
           {var exit=365}
          else
           if($js$1==7)
            {var exit=364}
           else
            if($js$1==8)
             {var exit=365}
            else
             if($js$1==9)
              {var exit=364}
             else
              if($js$1==10)
               {var exit=365}
              else
               if($js$1==11){var exit=364}else if($js$1==12){var exit=365}
    switch(exit)
     {case 362:return buffer_add_char(buf,43);
      case 363:return buffer_add_char(buf,32);
      case 364:return buffer_add_char(buf,35);
      case 365:return 0
      }};
var
 bprint_int_fmt=
  function(buf,ign_flag,iconv,pad,prec)
   {buffer_add_char(buf,37);
    bprint_ignored_flag(buf,ign_flag);
    bprint_iconv_flag(buf,iconv);
    bprint_padding(buf,pad);
    bprint_precision(buf,prec);
    var $js=char_of_iconv(iconv);
    return buffer_add_char(buf,$js)};
var
 bprint_altint_fmt=
  function(buf,ign_flag,iconv,pad,prec,c)
   {buffer_add_char(buf,37);
    bprint_ignored_flag(buf,ign_flag);
    bprint_iconv_flag(buf,iconv);
    bprint_padding(buf,pad);
    bprint_precision(buf,prec);
    buffer_add_char(buf,c);
    var $js=char_of_iconv(iconv);
    return buffer_add_char(buf,$js)};
var
 bprint_fconv_flag=
  function(buf,fconv)
   {var $js=fconv;
    var $js$1=$js[0];
    if($js$1==0)
     {var exit=358}
    else
     if($js$1==1)
      {var exit=356}
     else
      if($js$1==2)
       {var exit=357}
      else
       if($js$1==3)
        {var exit=358}
       else
        if($js$1==4)
         {var exit=356}
        else
         if($js$1==5)
          {var exit=357}
         else
          if($js$1==6)
           {var exit=358}
          else
           if($js$1==7)
            {var exit=356}
           else
            if($js$1==8)
             {var exit=357}
            else
             if($js$1==9)
              {var exit=358}
             else
              if($js$1==10)
               {var exit=356}
              else
               if($js$1==11)
                {var exit=357}
               else
                if($js$1==12)
                 {var exit=358}
                else
                 if($js$1==13)
                  {var exit=356}
                 else
                  if($js$1==14){var exit=357}else if($js$1==15){var exit=358}
    switch(exit)
     {case 356:return buffer_add_char(buf,43);
      case 357:return buffer_add_char(buf,32);
      case 358:return 0
      }};
var
 bprint_float_fmt=
  function(buf,ign_flag,fconv,pad,prec)
   {buffer_add_char(buf,37);
    bprint_ignored_flag(buf,ign_flag);
    bprint_fconv_flag(buf,fconv);
    bprint_padding(buf,pad);
    bprint_precision(buf,prec);
    var $js=char_of_fconv(fconv);
    return buffer_add_char(buf,$js)};
var
 string_of_formatting_lit=
  function(formatting_lit)
   {var $js=formatting_lit;
    if(typeof $js=="number")
     {if($js==0)
       {return "@]"}
      else
       if($js==1)
        {return "@}"}
       else
        if($js==2)
         {return "@?"}
        else
         if($js==3)
          {return "@\n"}
         else
          if($js==4)
           {return "@."}
          else
           if($js==5){return "@@"}else if($js==6){return "@%"}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var str=formatting_lit[1];return str}
      else
       if($js$1==1)
        {var str$1=formatting_lit[1];return str$1}
       else
        if($js$1==2)
         {var c=formatting_lit[1];
          var $js$2=Pervasives["^"];
          var $js$3=String["make"];
          var $js$4=$js$3(1,c);
          return $js$2("@",$js$4)}}};
var
 string_of_formatting_gen=
  function(formatting_gen)
   {var $js=formatting_gen;
    if($js==0)
     {var match=formatting_gen[1];var str=match[2];return str}
    else
     if($js==1)
      {var match$1=formatting_gen[1];var str$1=match$1[2];return str$1}};
var
 bprint_char_literal=
  function(buf,chr)
   {var $js=chr!=37;
    if($js)
     {return buffer_add_char(buf,chr)}
    else
     {return buffer_add_string(buf,"%%")}};
var
 bprint_string_literal=
  function(buf,str)
   {var $js=0;
    var $js$1=str["length"]-1;
    for(var i=$js;i<=$js$1;i++)
     {var $js$2=str[i];bprint_char_literal(buf,$js$2)}};
var
 bprint_fmtty=
  function(buf,fmtty)
   {var $js=fmtty;
    if(typeof $js=="number")
     {if($js==0){return 0}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var rest=fmtty[1];
        buffer_add_string(buf,"%c");
        return bprint_fmtty(buf,rest)}
      else
       if($js$1==1)
        {var rest$1=fmtty[1];
         buffer_add_string(buf,"%s");
         return bprint_fmtty(buf,rest$1)}
       else
        if($js$1==2)
         {var rest$2=fmtty[1];
          buffer_add_string(buf,"%i");
          return bprint_fmtty(buf,rest$2)}
        else
         if($js$1==3)
          {var rest$3=fmtty[1];
           buffer_add_string(buf,"%li");
           return bprint_fmtty(buf,rest$3)}
         else
          if($js$1==4)
           {var rest$4=fmtty[1];
            buffer_add_string(buf,"%ni");
            return bprint_fmtty(buf,rest$4)}
          else
           if($js$1==5)
            {var rest$5=fmtty[1];
             buffer_add_string(buf,"%Li");
             return bprint_fmtty(buf,rest$5)}
           else
            if($js$1==6)
             {var rest$6=fmtty[1];
              buffer_add_string(buf,"%f");
              return bprint_fmtty(buf,rest$6)}
            else
             if($js$1==7)
              {var rest$7=fmtty[1];
               buffer_add_string(buf,"%B");
               return bprint_fmtty(buf,rest$7)}
             else
              if($js$1==8)
               {var rest$8=fmtty[2];
                var sub_fmtty=fmtty[1];
                buffer_add_string(buf,"%{");
                bprint_fmtty(buf,sub_fmtty);
                buffer_add_string(buf,"%}");
                return bprint_fmtty(buf,rest$8)}
              else
               if($js$1==9)
                {var rest$9=fmtty[3];
                 var sub_fmtty$1=fmtty[1];
                 buffer_add_string(buf,"%(");
                 bprint_fmtty(buf,sub_fmtty$1);
                 buffer_add_string(buf,"%)");
                 return bprint_fmtty(buf,rest$9)}
               else
                if($js$1==10)
                 {var rest$10=fmtty[1];
                  buffer_add_string(buf,"%a");
                  return bprint_fmtty(buf,rest$10)}
                else
                 if($js$1==11)
                  {var rest$11=fmtty[1];
                   buffer_add_string(buf,"%t");
                   return bprint_fmtty(buf,rest$11)}
                 else
                  if($js$1==12)
                   {var rest$12=fmtty[1];
                    buffer_add_string(buf,"%?");
                    return bprint_fmtty(buf,rest$12)}
                  else
                   if($js$1==13)
                    {var rest$13=fmtty[1];
                     buffer_add_string(buf,"%r");
                     return bprint_fmtty(buf,rest$13)}
                   else
                    if($js$1==14)
                     {var rest$14=fmtty[1];
                      buffer_add_string(buf,"%_r");
                      return bprint_fmtty(buf,rest$14)}}};
var
 int_of_custom_arity=
  function(param)
   {var $js=param;
    if($js)
     {var x=param[1];var $js$1=int_of_custom_arity(x);return 1+$js$1}
    else
     {return 0}};
var
 bprint_fmt=
  function(buf,fmt)
   {var
     fmtiter=
      function(fmt$1,ign_flag)
       {var $js=fmt$1;
        if(typeof $js=="number")
         {if($js==0){return 0}}
        else
         {var $js$1=$js[0];
          if($js$1==0)
           {var rest=fmt$1[1];
            buffer_add_char(buf,37);
            bprint_ignored_flag(buf,ign_flag);
            buffer_add_char(buf,99);
            return fmtiter(rest,0)}
          else
           if($js$1==1)
            {var rest$1=fmt$1[1];
             buffer_add_char(buf,37);
             bprint_ignored_flag(buf,ign_flag);
             buffer_add_char(buf,67);
             return fmtiter(rest$1,0)}
           else
            if($js$1==2)
             {var rest$2=fmt$1[2];
              var pad=fmt$1[1];
              buffer_add_char(buf,37);
              bprint_ignored_flag(buf,ign_flag);
              bprint_padding(buf,pad);
              buffer_add_char(buf,115);
              return fmtiter(rest$2,0)}
            else
             if($js$1==3)
              {var rest$3=fmt$1[2];
               var pad$1=fmt$1[1];
               buffer_add_char(buf,37);
               bprint_ignored_flag(buf,ign_flag);
               bprint_padding(buf,pad$1);
               buffer_add_char(buf,83);
               return fmtiter(rest$3,0)}
             else
              if($js$1==4)
               {var rest$4=fmt$1[4];
                var prec=fmt$1[3];
                var pad$2=fmt$1[2];
                var iconv=fmt$1[1];
                bprint_int_fmt(buf,ign_flag,iconv,pad$2,prec);
                return fmtiter(rest$4,0)}
              else
               if($js$1==5)
                {var rest$5=fmt$1[4];
                 var prec$1=fmt$1[3];
                 var pad$3=fmt$1[2];
                 var iconv$1=fmt$1[1];
                 bprint_altint_fmt(buf,ign_flag,iconv$1,pad$3,prec$1,108);
                 return fmtiter(rest$5,0)}
               else
                if($js$1==6)
                 {var rest$6=fmt$1[4];
                  var prec$2=fmt$1[3];
                  var pad$4=fmt$1[2];
                  var iconv$2=fmt$1[1];
                  bprint_altint_fmt(buf,ign_flag,iconv$2,pad$4,prec$2,110);
                  return fmtiter(rest$6,0)}
                else
                 if($js$1==7)
                  {var rest$7=fmt$1[4];
                   var prec$3=fmt$1[3];
                   var pad$5=fmt$1[2];
                   var iconv$3=fmt$1[1];
                   bprint_altint_fmt(buf,ign_flag,iconv$3,pad$5,prec$3,76);
                   return fmtiter(rest$7,0)}
                 else
                  if($js$1==8)
                   {var rest$8=fmt$1[4];
                    var prec$4=fmt$1[3];
                    var pad$6=fmt$1[2];
                    var fconv=fmt$1[1];
                    bprint_float_fmt(buf,ign_flag,fconv,pad$6,prec$4);
                    return fmtiter(rest$8,0)}
                  else
                   if($js$1==9)
                    {var rest$9=fmt$1[1];
                     buffer_add_char(buf,37);
                     bprint_ignored_flag(buf,ign_flag);
                     buffer_add_char(buf,66);
                     return fmtiter(rest$9,0)}
                   else
                    if($js$1==10)
                     {var rest$10=fmt$1[1];
                      buffer_add_string(buf,"%!");
                      return fmtiter(rest$10,ign_flag)}
                    else
                     if($js$1==11)
                      {var rest$11=fmt$1[2];
                       var str=fmt$1[1];
                       bprint_string_literal(buf,str);
                       return fmtiter(rest$11,ign_flag)}
                     else
                      if($js$1==12)
                       {var rest$12=fmt$1[2];
                        var chr=fmt$1[1];
                        bprint_char_literal(buf,chr);
                        return fmtiter(rest$12,ign_flag)}
                      else
                       if($js$1==13)
                        {var rest$13=fmt$1[3];
                         var fmtty=fmt$1[2];
                         var pad_opt=fmt$1[1];
                         buffer_add_char(buf,37);
                         bprint_ignored_flag(buf,ign_flag);
                         bprint_pad_opt(buf,pad_opt);
                         buffer_add_char(buf,123);
                         bprint_fmtty(buf,fmtty);
                         buffer_add_char(buf,37);
                         buffer_add_char(buf,125);
                         return fmtiter(rest$13,0)}
                       else
                        if($js$1==14)
                         {var rest$14=fmt$1[3];
                          var fmtty$1=fmt$1[2];
                          var pad_opt$1=fmt$1[1];
                          buffer_add_char(buf,37);
                          bprint_ignored_flag(buf,ign_flag);
                          bprint_pad_opt(buf,pad_opt$1);
                          buffer_add_char(buf,40);
                          bprint_fmtty(buf,fmtty$1);
                          buffer_add_char(buf,37);
                          buffer_add_char(buf,41);
                          return fmtiter(rest$14,0)}
                        else
                         if($js$1==15)
                          {var rest$15=fmt$1[1];
                           buffer_add_char(buf,37);
                           bprint_ignored_flag(buf,ign_flag);
                           buffer_add_char(buf,97);
                           return fmtiter(rest$15,0)}
                         else
                          if($js$1==16)
                           {var rest$16=fmt$1[1];
                            buffer_add_char(buf,37);
                            bprint_ignored_flag(buf,ign_flag);
                            buffer_add_char(buf,116);
                            return fmtiter(rest$16,0)}
                          else
                           if($js$1==17)
                            {var rest$17=fmt$1[2];
                             var fmting_lit=fmt$1[1];
                             var $js$2=string_of_formatting_lit(fmting_lit);
                             bprint_string_literal(buf,$js$2);
                             return fmtiter(rest$17,ign_flag)}
                           else
                            if($js$1==18)
                             {var rest$18=fmt$1[2];
                              var fmting_gen=fmt$1[1];
                              bprint_string_literal(buf,"@{");
                              var $js$3=string_of_formatting_gen(fmting_gen);
                              bprint_string_literal(buf,$js$3);
                              return fmtiter(rest$18,ign_flag)}
                            else
                             if($js$1==19)
                              {var rest$19=fmt$1[1];
                               buffer_add_char(buf,37);
                               bprint_ignored_flag(buf,ign_flag);
                               buffer_add_char(buf,114);
                               return fmtiter(rest$19,0)}
                             else
                              if($js$1==20)
                               {var rest$20=fmt$1[3];
                                var char_set=fmt$1[2];
                                var width_opt=fmt$1[1];
                                buffer_add_char(buf,37);
                                bprint_ignored_flag(buf,ign_flag);
                                bprint_pad_opt(buf,width_opt);
                                bprint_char_set(buf,char_set);
                                return fmtiter(rest$20,0)}
                              else
                               if($js$1==21)
                                {var rest$21=fmt$1[2];
                                 var counter=fmt$1[1];
                                 buffer_add_char(buf,37);
                                 bprint_ignored_flag(buf,ign_flag);
                                 var $js$4=char_of_counter(counter);
                                 buffer_add_char(buf,$js$4);
                                 return fmtiter(rest$21,0)}
                               else
                                if($js$1==22)
                                 {var rest$22=fmt$1[1];
                                  buffer_add_char(buf,37);
                                  bprint_ignored_flag(buf,ign_flag);
                                  bprint_string_literal(buf,"0c");
                                  return fmtiter(rest$22,0)}
                                else
                                 if($js$1==23)
                                  {var rest$23=fmt$1[2];
                                   var ign=fmt$1[1];
                                   var match=param_format_of_ignored_format(ign,rest$23);
                                   var fmt'=match[1];
                                   return fmtiter(fmt',1)}
                                 else
                                  if($js$1==24)
                                   {var rest$24=fmt$1[3];
                                    var arity=fmt$1[1];
                                    var $js$5=1;
                                    var $js$6=int_of_custom_arity(arity);
                                    for(var _i=$js$5;_i<=$js$6;_i++)
                                     {buffer_add_char(buf,37);
                                      bprint_ignored_flag(buf,ign_flag);
                                      buffer_add_char(buf,63)}
                                    return fmtiter(rest$24,0)}}};
    return fmtiter(fmt,0)};
var
 string_of_fmt=
  function(fmt)
   {var buf=buffer_create(16);bprint_fmt(buf,fmt);return buffer_contents(buf)};
var
 symm=
  function(param)
   {var $js=param;
    if(typeof $js=="number")
     {if($js==0){return 0}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var rest=param[1];var $js$2=symm(rest);return [0,$js$2]}
      else
       if($js$1==1)
        {var rest$1=param[1];var $js$3=symm(rest$1);return [1,$js$3]}
       else
        if($js$1==2)
         {var rest$2=param[1];var $js$4=symm(rest$2);return [2,$js$4]}
        else
         if($js$1==3)
          {var rest$3=param[1];var $js$5=symm(rest$3);return [3,$js$5]}
         else
          if($js$1==4)
           {var rest$4=param[1];var $js$6=symm(rest$4);return [4,$js$6]}
          else
           if($js$1==5)
            {var rest$5=param[1];var $js$7=symm(rest$5);return [5,$js$7]}
           else
            if($js$1==6)
             {var rest$6=param[1];var $js$8=symm(rest$6);return [6,$js$8]}
            else
             if($js$1==7)
              {var rest$7=param[1];var $js$9=symm(rest$7);return [7,$js$9]}
             else
              if($js$1==8)
               {var rest$8=param[2];
                var ty=param[1];
                var $js$10=symm(rest$8);
                return [8,ty,$js$10]}
              else
               if($js$1==9)
                {var rest$9=param[3];
                 var ty2=param[2];
                 var ty1=param[1];
                 var $js$11=symm(rest$9);
                 return [9,ty2,ty1,$js$11]}
               else
                if($js$1==10)
                 {var rest$10=param[1];
                  var $js$12=symm(rest$10);
                  return [10,$js$12]}
                else
                 if($js$1==11)
                  {var rest$11=param[1];
                   var $js$13=symm(rest$11);
                   return [11,$js$13]}
                 else
                  if($js$1==12)
                   {var rest$12=param[1];
                    var $js$14=symm(rest$12);
                    return [12,$js$14]}
                  else
                   if($js$1==13)
                    {var rest$13=param[1];
                     var $js$15=symm(rest$13);
                     return [13,$js$15]}
                   else
                    if($js$1==14)
                     {var rest$14=param[1];
                      var $js$16=symm(rest$14);
                      return [14,$js$16]}}};
var
 fmtty_rel_det=
  function(param)
   {var $js=param;
    if(typeof $js=="number")
     {if($js==0)
       {return [0,
                function(param$1){return 0},
                function(param$1){return 0},
                function(param$1){return 0},
                function(param$1){return 0}]}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var rest=param[1];
        var match=fmtty_rel_det(rest);
        var de=match[4];
        var ed=match[3];
        var af=match[2];
        var fa=match[1];
        return [0,
                function(param$1){var match$1=fa(0);return 0},
                function(param$1){var match$1=af(0);return 0},
                ed,
                de]}
      else
       if($js$1==1)
        {var rest$1=param[1];
         var match$1=fmtty_rel_det(rest$1);
         var de$1=match$1[4];
         var ed$1=match$1[3];
         var af$1=match$1[2];
         var fa$1=match$1[1];
         return [0,
                 function(param$1){var match$2=fa$1(0);return 0},
                 function(param$1){var match$2=af$1(0);return 0},
                 ed$1,
                 de$1]}
       else
        if($js$1==2)
         {var rest$2=param[1];
          var match$2=fmtty_rel_det(rest$2);
          var de$2=match$2[4];
          var ed$2=match$2[3];
          var af$2=match$2[2];
          var fa$2=match$2[1];
          return [0,
                  function(param$1){var match$3=fa$2(0);return 0},
                  function(param$1){var match$3=af$2(0);return 0},
                  ed$2,
                  de$2]}
        else
         if($js$1==3)
          {var rest$3=param[1];
           var match$3=fmtty_rel_det(rest$3);
           var de$3=match$3[4];
           var ed$3=match$3[3];
           var af$3=match$3[2];
           var fa$3=match$3[1];
           return [0,
                   function(param$1){var match$4=fa$3(0);return 0},
                   function(param$1){var match$4=af$3(0);return 0},
                   ed$3,
                   de$3]}
         else
          if($js$1==4)
           {var rest$4=param[1];
            var match$4=fmtty_rel_det(rest$4);
            var de$4=match$4[4];
            var ed$4=match$4[3];
            var af$4=match$4[2];
            var fa$4=match$4[1];
            return [0,
                    function(param$1){var match$5=fa$4(0);return 0},
                    function(param$1){var match$5=af$4(0);return 0},
                    ed$4,
                    de$4]}
          else
           if($js$1==5)
            {var rest$5=param[1];
             var match$5=fmtty_rel_det(rest$5);
             var de$5=match$5[4];
             var ed$5=match$5[3];
             var af$5=match$5[2];
             var fa$5=match$5[1];
             return [0,
                     function(param$1){var match$6=fa$5(0);return 0},
                     function(param$1){var match$6=af$5(0);return 0},
                     ed$5,
                     de$5]}
           else
            if($js$1==6)
             {var rest$6=param[1];
              var match$6=fmtty_rel_det(rest$6);
              var de$6=match$6[4];
              var ed$6=match$6[3];
              var af$6=match$6[2];
              var fa$6=match$6[1];
              return [0,
                      function(param$1){var match$7=fa$6(0);return 0},
                      function(param$1){var match$7=af$6(0);return 0},
                      ed$6,
                      de$6]}
            else
             if($js$1==7)
              {var rest$7=param[1];
               var match$7=fmtty_rel_det(rest$7);
               var de$7=match$7[4];
               var ed$7=match$7[3];
               var af$7=match$7[2];
               var fa$7=match$7[1];
               return [0,
                       function(param$1){var match$8=fa$7(0);return 0},
                       function(param$1){var match$8=af$7(0);return 0},
                       ed$7,
                       de$7]}
             else
              if($js$1==8)
               {var rest$8=param[2];
                var match$8=fmtty_rel_det(rest$8);
                var de$8=match$8[4];
                var ed$8=match$8[3];
                var af$8=match$8[2];
                var fa$8=match$8[1];
                return [0,
                        function(param$1){var match$9=fa$8(0);return 0},
                        function(param$1){var match$9=af$8(0);return 0},
                        ed$8,
                        de$8]}
              else
               if($js$1==9)
                {var rest$9=param[3];
                 var ty2=param[2];
                 var ty1=param[1];
                 var match$9=fmtty_rel_det(rest$9);
                 var de$9=match$9[4];
                 var ed$9=match$9[3];
                 var af$9=match$9[2];
                 var fa$9=match$9[1];
                 var $js$2=symm(ty1);
                 var ty=trans($js$2,ty2);
                 var match$10=fmtty_rel_det(ty);
                 var jd=match$10[4];
                 var dj=match$10[3];
                 var ga=match$10[2];
                 var ag=match$10[1];
                 return [0,
                         function(param$1)
                          {var match$11=fa$9(0);var match$12=ag(0);return 0},
                         function(param$1)
                          {var match$11=ga(0);var match$12=af$9(0);return 0},
                         function(param$1)
                          {var match$11=ed$9(0);var match$12=dj(0);return 0},
                         function(param$1)
                          {var match$11=jd(0);var match$12=de$9(0);return 0}]}
               else
                if($js$1==10)
                 {var rest$10=param[1];
                  var match$11=fmtty_rel_det(rest$10);
                  var de$10=match$11[4];
                  var ed$10=match$11[3];
                  var af$10=match$11[2];
                  var fa$10=match$11[1];
                  return [0,
                          function(param$1){var match$12=fa$10(0);return 0},
                          function(param$1){var match$12=af$10(0);return 0},
                          ed$10,
                          de$10]}
                else
                 if($js$1==11)
                  {var rest$11=param[1];
                   var match$12=fmtty_rel_det(rest$11);
                   var de$11=match$12[4];
                   var ed$11=match$12[3];
                   var af$11=match$12[2];
                   var fa$11=match$12[1];
                   return [0,
                           function(param$1){var match$13=fa$11(0);return 0},
                           function(param$1){var match$13=af$11(0);return 0},
                           ed$11,
                           de$11]}
                 else
                  if($js$1==12)
                   {var rest$12=param[1];
                    var match$13=fmtty_rel_det(rest$12);
                    var de$12=match$13[4];
                    var ed$12=match$13[3];
                    var af$12=match$13[2];
                    var fa$12=match$13[1];
                    return [0,
                            function(param$1){var match$14=fa$12(0);return 0},
                            function(param$1){var match$14=af$12(0);return 0},
                            ed$12,
                            de$12]}
                  else
                   if($js$1==13)
                    {var rest$13=param[1];
                     var match$14=fmtty_rel_det(rest$13);
                     var de$13=match$14[4];
                     var ed$13=match$14[3];
                     var af$13=match$14[2];
                     var fa$13=match$14[1];
                     return [0,
                             function(param$1){var match$15=fa$13(0);return 0},
                             function(param$1){var match$15=af$13(0);return 0},
                             function(param$1){var match$15=ed$13(0);return 0},
                             function(param$1){var match$15=de$13(0);return 0}]}
                   else
                    if($js$1==14)
                     {var rest$14=param[1];
                      var match$15=fmtty_rel_det(rest$14);
                      var de$14=match$15[4];
                      var ed$14=match$15[3];
                      var af$14=match$15[2];
                      var fa$14=match$15[1];
                      return [0,
                              function(param$1){var match$16=fa$14(0);return 0},
                              function(param$1){var match$16=af$14(0);return 0},
                              function(param$1){var match$16=ed$14(0);return 0},
                              function(param$1){var match$16=de$14(0);return 0}]}}};
var
 trans=
  function(ty1,ty2)
   {var match=ty1;
    var match$1=ty2;
    var $js=match;
    if(typeof $js=="number")
     {if($js==0)
       {var $js$1=match$1;
        if(typeof $js$1=="number")
         {if($js$1==0){return 0}}
        else
         {var $js$2=$js$1[0];
          if($js$2==8)
           {var exit=335}
          else
           if($js$2==9)
            {var exit=333}
           else
            if($js$2==10)
             {var exit=345}
            else
             if($js$2==11)
              {var exit=343}
             else
              if($js$2==12)
               {var exit=341}
              else
               if($js$2==13)
                {var exit=339}
               else
                if($js$2==14)
                 {var exit=337}
                else
                 {var
                   $js$3=
                    [0,Assert_failure,[0,"camlinternalFormat.ml",816,23]];
                  throw $js$3}}}}
    else
     {var $js$4=$js[0];
      if($js$4==0)
       {var rest1=match[1];
        var $js$5=match$1;
        if(typeof $js$5=="number")
         {if($js$5==0){var exit=331}}
        else
         {var $js$6=$js$5[0];
          if($js$6==0)
           {var rest2=match$1[1];
            var $js$7=trans(rest1,rest2);
            return [0,$js$7]}
          else
           if($js$6==8)
            {var exit=335}
           else
            if($js$6==9)
             {var exit=333}
            else
             if($js$6==10)
              {var exit=345}
             else
              if($js$6==11)
               {var exit=343}
              else
               if($js$6==12)
                {var exit=341}
               else
                if($js$6==13){var exit=339}else if($js$6==14){var exit=337}}}
      else
       if($js$4==1)
        {var rest1$1=match[1];
         var $js$8=match$1;
         if(typeof $js$8=="number")
          {if($js$8==0){var exit=331}}
         else
          {var $js$9=$js$8[0];
           if($js$9==1)
            {var rest2$1=match$1[1];
             var $js$10=trans(rest1$1,rest2$1);
             return [1,$js$10]}
           else
            if($js$9==8)
             {var exit=335}
            else
             if($js$9==9)
              {var exit=333}
             else
              if($js$9==10)
               {var exit=345}
              else
               if($js$9==11)
                {var exit=343}
               else
                if($js$9==12)
                 {var exit=341}
                else
                 if($js$9==13){var exit=339}else if($js$9==14){var exit=337}}}
       else
        if($js$4==2)
         {var rest1$2=match[1];
          var $js$11=match$1;
          if(typeof $js$11=="number")
           {if($js$11==0){var exit=331}}
          else
           {var $js$12=$js$11[0];
            if($js$12==2)
             {var rest2$2=match$1[1];
              var $js$13=trans(rest1$2,rest2$2);
              return [2,$js$13]}
            else
             if($js$12==8)
              {var exit=335}
             else
              if($js$12==9)
               {var exit=333}
              else
               if($js$12==10)
                {var exit=345}
               else
                if($js$12==11)
                 {var exit=343}
                else
                 if($js$12==12)
                  {var exit=341}
                 else
                  if($js$12==13)
                   {var exit=339}
                  else
                   if($js$12==14){var exit=337}}}
        else
         if($js$4==3)
          {var rest1$3=match[1];
           var $js$14=match$1;
           if(typeof $js$14=="number")
            {if($js$14==0){var exit=331}}
           else
            {var $js$15=$js$14[0];
             if($js$15==3)
              {var rest2$3=match$1[1];
               var $js$16=trans(rest1$3,rest2$3);
               return [3,$js$16]}
             else
              if($js$15==8)
               {var exit=335}
              else
               if($js$15==9)
                {var exit=333}
               else
                if($js$15==10)
                 {var exit=345}
                else
                 if($js$15==11)
                  {var exit=343}
                 else
                  if($js$15==12)
                   {var exit=341}
                  else
                   if($js$15==13)
                    {var exit=339}
                   else
                    if($js$15==14){var exit=337}}}
         else
          if($js$4==4)
           {var rest1$4=match[1];
            var $js$17=match$1;
            if(typeof $js$17=="number")
             {if($js$17==0){var exit=331}}
            else
             {var $js$18=$js$17[0];
              if($js$18==4)
               {var rest2$4=match$1[1];
                var $js$19=trans(rest1$4,rest2$4);
                return [4,$js$19]}
              else
               if($js$18==8)
                {var exit=335}
               else
                if($js$18==9)
                 {var exit=333}
                else
                 if($js$18==10)
                  {var exit=345}
                 else
                  if($js$18==11)
                   {var exit=343}
                  else
                   if($js$18==12)
                    {var exit=341}
                   else
                    if($js$18==13)
                     {var exit=339}
                    else
                     if($js$18==14){var exit=337}}}
          else
           if($js$4==5)
            {var rest1$5=match[1];
             var $js$20=match$1;
             if(typeof $js$20=="number")
              {if($js$20==0){var exit=331}}
             else
              {var $js$21=$js$20[0];
               if($js$21==5)
                {var rest2$5=match$1[1];
                 var $js$22=trans(rest1$5,rest2$5);
                 return [5,$js$22]}
               else
                if($js$21==8)
                 {var exit=335}
                else
                 if($js$21==9)
                  {var exit=333}
                 else
                  if($js$21==10)
                   {var exit=345}
                  else
                   if($js$21==11)
                    {var exit=343}
                   else
                    if($js$21==12)
                     {var exit=341}
                    else
                     if($js$21==13)
                      {var exit=339}
                     else
                      if($js$21==14){var exit=337}}}
           else
            if($js$4==6)
             {var rest1$6=match[1];
              var $js$23=match$1;
              if(typeof $js$23=="number")
               {if($js$23==0){var exit=331}}
              else
               {var $js$24=$js$23[0];
                if($js$24==6)
                 {var rest2$6=match$1[1];
                  var $js$25=trans(rest1$6,rest2$6);
                  return [6,$js$25]}
                else
                 if($js$24==8)
                  {var exit=335}
                 else
                  if($js$24==9)
                   {var exit=333}
                  else
                   if($js$24==10)
                    {var exit=345}
                   else
                    if($js$24==11)
                     {var exit=343}
                    else
                     if($js$24==12)
                      {var exit=341}
                     else
                      if($js$24==13)
                       {var exit=339}
                      else
                       if($js$24==14){var exit=337}}}
            else
             if($js$4==7)
              {var rest1$7=match[1];
               var $js$26=match$1;
               if(typeof $js$26=="number")
                {if($js$26==0){var exit=331}}
               else
                {var $js$27=$js$26[0];
                 if($js$27==7)
                  {var rest2$7=match$1[1];
                   var $js$28=trans(rest1$7,rest2$7);
                   return [7,$js$28]}
                 else
                  if($js$27==8)
                   {var exit=335}
                  else
                   if($js$27==9)
                    {var exit=333}
                   else
                    if($js$27==10)
                     {var exit=345}
                    else
                     if($js$27==11)
                      {var exit=343}
                     else
                      if($js$27==12)
                       {var exit=341}
                      else
                       if($js$27==13)
                        {var exit=339}
                       else
                        if($js$27==14){var exit=337}}}
             else
              if($js$4==8)
               {var rest1$8=match[2];
                var ty1$1=match[1];
                var $js$29=match$1;
                if(typeof $js$29=="number")
                 {"unknown block:match/76069"}
                else
                 {var $js$30=$js$29[0];
                  if($js$30==8)
                   {var rest2$8=match$1[2];
                    var ty2$1=match$1[1];
                    var $js$31=trans(ty1$1,ty2$1);
                    var $js$32=trans(rest1$8,rest2$8);
                    return [8,$js$31,$js$32]}
                  else
                   if($js$30==10)
                    {var exit=345}
                   else
                    if($js$30==11)
                     {var exit=343}
                    else
                     if($js$30==12)
                      {var exit=341}
                     else
                      if($js$30==13)
                       {var exit=339}
                      else
                       if($js$30==14){var exit=337}else{var exit=336}}}
              else
               if($js$4==9)
                {var rest1$9=match[3];
                 var ty12=match[2];
                 var ty11=match[1];
                 var $js$33=match$1;
                 if(typeof $js$33=="number")
                  {"unknown block:match/76069"}
                 else
                  {var $js$34=$js$33[0];
                   if($js$34==8)
                    {var exit=335}
                   else
                    if($js$34==9)
                     {var rest2$9=match$1[3];
                      var ty22=match$1[2];
                      var ty21=match$1[1];
                      var $js$35=symm(ty12);
                      var ty=trans($js$35,ty21);
                      var match$2=fmtty_rel_det(ty);
                      var f4=match$2[4];
                      var f2=match$2[2];
                      var match$3=f2(0);
                      var match$4=f4(0);
                      var $js$36=trans(rest1$9,rest2$9);
                      return [9,ty11,ty22,$js$36]}
                    else
                     if($js$34==10)
                      {var exit=345}
                     else
                      if($js$34==11)
                       {var exit=343}
                      else
                       if($js$34==12)
                        {var exit=341}
                       else
                        if($js$34==13)
                         {var exit=339}
                        else
                         if($js$34==14){var exit=337}else{var exit=334}}}
               else
                if($js$4==10)
                 {var rest1$10=match[1];
                  var $js$37=match$1;
                  if(typeof $js$37=="number")
                   {"unknown block:match/76069"}
                  else
                   {var $js$38=$js$37[0];
                    if($js$38==10)
                     {var rest2$10=match$1[1];
                      var $js$39=trans(rest1$10,rest2$10);
                      return [10,$js$39]}
                    else
                     {var exit$1=346}}
                  switch(exit$1)
                   {case 346:
                     var
                      $js$40=
                       [0,Assert_failure,[0,"camlinternalFormat.ml",780,21]];
                     throw $js$40
                    }}
                else
                 if($js$4==11)
                  {var rest1$11=match[1];
                   var $js$41=match$1;
                   if(typeof $js$41=="number")
                    {"unknown block:match/76069"}
                   else
                    {var $js$42=$js$41[0];
                     if($js$42==10)
                      {var exit=345}
                     else
                      if($js$42==11)
                       {var rest2$11=match$1[1];
                        var $js$43=trans(rest1$11,rest2$11);
                        return [11,$js$43]}
                      else
                       {var exit=344}}}
                 else
                  if($js$4==12)
                   {var rest1$12=match[1];
                    var $js$44=match$1;
                    if(typeof $js$44=="number")
                     {"unknown block:match/76069"}
                    else
                     {var $js$45=$js$44[0];
                      if($js$45==10)
                       {var exit=345}
                      else
                       if($js$45==11)
                        {var exit=343}
                       else
                        if($js$45==12)
                         {var rest2$12=match$1[1];
                          var $js$46=trans(rest1$12,rest2$12);
                          return [12,$js$46]}
                        else
                         {var exit=342}}}
                  else
                   if($js$4==13)
                    {var rest1$13=match[1];
                     var $js$47=match$1;
                     if(typeof $js$47=="number")
                      {"unknown block:match/76069"}
                     else
                      {var $js$48=$js$47[0];
                       if($js$48==10)
                        {var exit=345}
                       else
                        if($js$48==11)
                         {var exit=343}
                        else
                         if($js$48==12)
                          {var exit=341}
                         else
                          if($js$48==13)
                           {var rest2$13=match$1[1];
                            var $js$49=trans(rest1$13,rest2$13);
                            return [13,$js$49]}
                          else
                           {var exit=340}}}
                   else
                    if($js$4==14)
                     {var rest1$14=match[1];
                      var $js$50=match$1;
                      if(typeof $js$50=="number")
                       {"unknown block:match/76069"}
                      else
                       {var $js$51=$js$50[0];
                        if($js$51==10)
                         {var exit=345}
                        else
                         if($js$51==11)
                          {var exit=343}
                         else
                          if($js$51==12)
                           {var exit=341}
                          else
                           if($js$51==13)
                            {var exit=339}
                           else
                            if($js$51==14)
                             {var rest2$14=match$1[1];
                              var $js$52=trans(rest1$14,rest2$14);
                              return [14,$js$52]}
                            else
                             {var exit=338}}}}
    switch(exit)
     {case 345:
       var $js$53=[0,Assert_failure,[0,"camlinternalFormat.ml",781,21]];
       throw $js$53;
      case 344:
       var $js$54=[0,Assert_failure,[0,"camlinternalFormat.ml",784,21]];
       throw $js$54;
      case 343:
       var $js$55=[0,Assert_failure,[0,"camlinternalFormat.ml",785,21]];
       throw $js$55;
      case 342:
       var $js$56=[0,Assert_failure,[0,"camlinternalFormat.ml",788,19]];
       throw $js$56;
      case 341:
       var $js$57=[0,Assert_failure,[0,"camlinternalFormat.ml",789,19]];
       throw $js$57;
      case 340:
       var $js$58=[0,Assert_failure,[0,"camlinternalFormat.ml",792,22]];
       throw $js$58;
      case 339:
       var $js$59=[0,Assert_failure,[0,"camlinternalFormat.ml",793,22]];
       throw $js$59;
      case 338:
       var $js$60=[0,Assert_failure,[0,"camlinternalFormat.ml",797,30]];
       throw $js$60;
      case 337:
       var $js$61=[0,Assert_failure,[0,"camlinternalFormat.ml",798,30]];
       throw $js$61;
      case 336:
       var $js$62=[0,Assert_failure,[0,"camlinternalFormat.ml",802,26]];
       throw $js$62;
      case 335:
       var $js$63=[0,Assert_failure,[0,"camlinternalFormat.ml",803,26]];
       throw $js$63;
      case 334:
       var $js$64=[0,Assert_failure,[0,"camlinternalFormat.ml",812,28]];
       throw $js$64;
      case 333:
       var $js$65=[0,Assert_failure,[0,"camlinternalFormat.ml",813,28]];
       throw $js$65;
      case 331:
       var $js$66=[0,Assert_failure,[0,"camlinternalFormat.ml",817,23]];
       throw $js$66
      }};
var
 fmtty_of_formatting_gen=
  function(formatting_gen)
   {var $js=formatting_gen;
    if($js==0)
     {var match=formatting_gen[1];var fmt=match[1];return fmtty_of_fmt(fmt)}
    else
     if($js==1)
      {var match$1=formatting_gen[1];
       var fmt$1=match$1[1];
       return fmtty_of_fmt(fmt$1)}};
var
 fmtty_of_fmt=
  function(fmtty)
   {var $js=fmtty;
    if(typeof $js=="number")
     {if($js==0){return 0}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var rest=fmtty[1];var $js$2=fmtty_of_fmt(rest);return [0,$js$2]}
      else
       if($js$1==1)
        {var rest$1=fmtty[1];var $js$3=fmtty_of_fmt(rest$1);return [0,$js$3]}
       else
        if($js$1==2)
         {var rest$2=fmtty[2];
          var pad=fmtty[1];
          var $js$4=fmtty_of_fmt(rest$2);
          var $js$5=[1,$js$4];
          return fmtty_of_padding_fmtty(pad,$js$5)}
        else
         if($js$1==3)
          {var rest$3=fmtty[2];
           var pad$1=fmtty[1];
           var $js$6=fmtty_of_fmt(rest$3);
           var $js$7=[1,$js$6];
           return fmtty_of_padding_fmtty(pad$1,$js$7)}
         else
          if($js$1==4)
           {var rest$4=fmtty[4];
            var prec=fmtty[3];
            var pad$2=fmtty[2];
            var ty_rest=fmtty_of_fmt(rest$4);
            var prec_ty=fmtty_of_precision_fmtty(prec,[2,ty_rest]);
            return fmtty_of_padding_fmtty(pad$2,prec_ty)}
          else
           if($js$1==5)
            {var rest$5=fmtty[4];
             var prec$1=fmtty[3];
             var pad$3=fmtty[2];
             var ty_rest$1=fmtty_of_fmt(rest$5);
             var prec_ty$1=fmtty_of_precision_fmtty(prec$1,[3,ty_rest$1]);
             return fmtty_of_padding_fmtty(pad$3,prec_ty$1)}
           else
            if($js$1==6)
             {var rest$6=fmtty[4];
              var prec$2=fmtty[3];
              var pad$4=fmtty[2];
              var ty_rest$2=fmtty_of_fmt(rest$6);
              var prec_ty$2=fmtty_of_precision_fmtty(prec$2,[4,ty_rest$2]);
              return fmtty_of_padding_fmtty(pad$4,prec_ty$2)}
            else
             if($js$1==7)
              {var rest$7=fmtty[4];
               var prec$3=fmtty[3];
               var pad$5=fmtty[2];
               var ty_rest$3=fmtty_of_fmt(rest$7);
               var prec_ty$3=fmtty_of_precision_fmtty(prec$3,[5,ty_rest$3]);
               return fmtty_of_padding_fmtty(pad$5,prec_ty$3)}
             else
              if($js$1==8)
               {var rest$8=fmtty[4];
                var prec$4=fmtty[3];
                var pad$6=fmtty[2];
                var ty_rest$4=fmtty_of_fmt(rest$8);
                var prec_ty$4=fmtty_of_precision_fmtty(prec$4,[6,ty_rest$4]);
                return fmtty_of_padding_fmtty(pad$6,prec_ty$4)}
              else
               if($js$1==9)
                {var rest$9=fmtty[1];
                 var $js$8=fmtty_of_fmt(rest$9);
                 return [7,$js$8]}
               else
                if($js$1==10)
                 {var rest$10=fmtty[1];return fmtty_of_fmt(rest$10)}
                else
                 if($js$1==11)
                  {var rest$11=fmtty[2];return fmtty_of_fmt(rest$11)}
                 else
                  if($js$1==12)
                   {var rest$12=fmtty[2];return fmtty_of_fmt(rest$12)}
                  else
                   if($js$1==13)
                    {var rest$13=fmtty[3];
                     var ty=fmtty[2];
                     var $js$9=fmtty_of_fmt(rest$13);
                     return [8,ty,$js$9]}
                   else
                    if($js$1==14)
                     {var rest$14=fmtty[3];
                      var ty$1=fmtty[2];
                      var $js$10=fmtty_of_fmt(rest$14);
                      return [9,ty$1,ty$1,$js$10]}
                    else
                     if($js$1==15)
                      {var rest$15=fmtty[1];
                       var $js$11=fmtty_of_fmt(rest$15);
                       return [10,$js$11]}
                     else
                      if($js$1==16)
                       {var rest$16=fmtty[1];
                        var $js$12=fmtty_of_fmt(rest$16);
                        return [11,$js$12]}
                      else
                       if($js$1==17)
                        {var rest$17=fmtty[2];return fmtty_of_fmt(rest$17)}
                       else
                        if($js$1==18)
                         {var rest$18=fmtty[2];
                          var fmting_gen=fmtty[1];
                          var $js$13=CamlinternalFormatBasics["concat_fmtty"];
                          var $js$14=fmtty_of_formatting_gen(fmting_gen);
                          var $js$15=fmtty_of_fmt(rest$18);
                          return $js$13($js$14,$js$15)}
                        else
                         if($js$1==19)
                          {var rest$19=fmtty[1];
                           var $js$16=fmtty_of_fmt(rest$19);
                           return [13,$js$16]}
                         else
                          if($js$1==20)
                           {var rest$20=fmtty[3];
                            var $js$17=fmtty_of_fmt(rest$20);
                            return [1,$js$17]}
                          else
                           if($js$1==21)
                            {var rest$21=fmtty[2];
                             var $js$18=fmtty_of_fmt(rest$21);
                             return [2,$js$18]}
                           else
                            if($js$1==22)
                             {var rest$22=fmtty[1];
                              var $js$19=fmtty_of_fmt(rest$22);
                              return [0,$js$19]}
                            else
                             if($js$1==23)
                              {var rest$23=fmtty[2];
                               var ign=fmtty[1];
                               return fmtty_of_ignored_format(ign,rest$23)}
                             else
                              if($js$1==24)
                               {var rest$24=fmtty[3];
                                var arity=fmtty[1];
                                var $js$20=fmtty_of_fmt(rest$24);
                                return fmtty_of_custom(arity,$js$20)}}};
var
 fmtty_of_custom=
  function(arity,fmtty)
   {var $js=arity;
    if($js)
     {var arity$1=arity[1];
      var $js$1=fmtty_of_custom(arity$1,fmtty);
      return [12,$js$1]}
    else
     {return fmtty}};
var
 fmtty_of_ignored_format=
  function(ign,fmt)
   {var $js=ign;
    if(typeof $js=="number")
     {if($js==0)
       {return fmtty_of_fmt(fmt)}
      else
       if($js==1)
        {return fmtty_of_fmt(fmt)}
       else
        if($js==2)
         {return fmtty_of_fmt(fmt)}
        else
         if($js==3)
          {var $js$1=fmtty_of_fmt(fmt);return [14,$js$1]}
         else
          if($js==4){return fmtty_of_fmt(fmt)}}
    else
     {var $js$2=$js[0];
      if($js$2==0)
       {return fmtty_of_fmt(fmt)}
      else
       if($js$2==1)
        {return fmtty_of_fmt(fmt)}
       else
        if($js$2==2)
         {return fmtty_of_fmt(fmt)}
        else
         if($js$2==3)
          {return fmtty_of_fmt(fmt)}
         else
          if($js$2==4)
           {return fmtty_of_fmt(fmt)}
          else
           if($js$2==5)
            {return fmtty_of_fmt(fmt)}
           else
            if($js$2==6)
             {return fmtty_of_fmt(fmt)}
            else
             if($js$2==7)
              {return fmtty_of_fmt(fmt)}
             else
              if($js$2==8)
               {var fmtty=ign[2];
                var $js$3=CamlinternalFormatBasics["concat_fmtty"];
                var $js$4=fmtty_of_fmt(fmt);
                return $js$3(fmtty,$js$4)}
              else
               if($js$2==9)
                {return fmtty_of_fmt(fmt)}
               else
                if($js$2==10){return fmtty_of_fmt(fmt)}}};
var
 fmtty_of_padding_fmtty=
  function(pad,fmtty)
   {var $js=pad;
    if(typeof $js=="number")
     {if($js==0){return fmtty}}
    else
     {var $js$1=$js[0];
      if($js$1==0){return fmtty}else if($js$1==1){return [2,fmtty]}}};
var
 fmtty_of_precision_fmtty=
  function(prec,fmtty)
   {var $js="unknown primitive:isint";
    if($js)
     {var $js$1=prec!=0;if($js$1){return [2,fmtty]}else{return fmtty}}
    else
     {return fmtty}};
var Type_mismatch="unknown primitive:caml_set_oo_id";
var
 type_padding=
  function(pad,fmtty)
   {var match=pad;
    var match$1=fmtty;
    var $js=match;
    if(typeof $js=="number")
     {if($js==0){return [0,0,fmtty]}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var w=match[2];var padty=match[1];return [0,[0,padty,w],fmtty]}
      else
       if($js$1==1)
        {var $js$2=match$1;
         if(typeof $js$2=="number")
          {"unknown block:match/75876"}
         else
          {var $js$3=$js$2[0];
           if($js$3==2)
            {var rest=match$1[1];
             var padty$1=match[1];
             return [0,[1,padty$1],rest]}
           else
            {var exit=300}}}}
    switch(exit){case 300:var $js$4=Type_mismatch;throw $js$4}};
var
 type_padprec=
  function(pad,prec,fmtty)
   {var match=type_padding(pad,fmtty);
    var match$1=prec;
    var match$2=match;
    var $js="unknown primitive:isint";
    if($js)
     {var $js$1=match$1!=0;
      if($js$1)
       {var match$3=match$2[2];
        var $js$2=match$3;
        if(typeof $js$2=="number")
         {"unknown block:match/75871"}
        else
         {var $js$3=$js$2[0];
          if($js$3==2)
           {var rest=match$3[1];var pad$1=match$2[1];return [0,pad$1,1,rest]}
          else
           {var exit=298}}}
      else
       {var rest$1=match$2[2];var pad$2=match$2[1];return [0,pad$2,0,rest$1]}}
    else
     {var rest$2=match$2[2];
      var pad$3=match$2[1];
      var p=match$1[1];
      return [0,pad$3,[0,p],rest$2]}
    switch(exit){case 298:var $js$4=Type_mismatch;throw $js$4}};
var
 type_format=
  function(fmt,fmtty)
   {var match=type_format_gen(fmt,fmtty);
    var match$1=match[2];
    var $js="unknown primitive:isint";
    if($js)
     {var fmt'=match[1];return fmt'}
    else
     {var $js$1=Type_mismatch;throw $js$1}};
var
 type_format_gen=
  function(fmt,fmtty)
   {var match=fmt;
    var match$1=fmtty;
    var $js=match;
    if(typeof $js=="number")
     {if($js==0){var fmtty_rest=match$1;return [0,0,fmtty_rest]}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var $js$2=match$1;
        if(typeof $js$2=="number")
         {"unknown block:match/75793"}
        else
         {var $js$3=$js$2[0];
          if($js$3==0)
           {var fmtty_rest$1=match$1[1];
            var fmt_rest=match[1];
            var match$2=type_format_gen(fmt_rest,fmtty_rest$1);
            var fmtty'=match$2[2];
            var fmt'=match$2[1];
            return [0,[0,fmt'],fmtty']}
          else
           {var exit=293}}}
      else
       if($js$1==1)
        {var $js$4=match$1;
         if(typeof $js$4=="number")
          {"unknown block:match/75793"}
         else
          {var $js$5=$js$4[0];
           if($js$5==0)
            {var fmtty_rest$2=match$1[1];
             var fmt_rest$1=match[1];
             var match$3=type_format_gen(fmt_rest$1,fmtty_rest$2);
             var fmtty'$1=match$3[2];
             var fmt'$1=match$3[1];
             return [0,[1,fmt'$1],fmtty'$1]}
           else
            {var exit=293}}}
       else
        if($js$1==2)
         {var fmt_rest$2=match[2];
          var pad=match[1];
          var match$4=type_padding(pad,fmtty);
          var match$5=match$4[2];
          var pad$1=match$4[1];
          var $js$6=match$5;
          if(typeof $js$6=="number")
           {"unknown block:match/75737"}
          else
           {var $js$7=$js$6[0];
            if($js$7==1)
             {var fmtty_rest$3=match$5[1];
              var match$6=type_format_gen(fmt_rest$2,fmtty_rest$3);
              var fmtty'$2=match$6[2];
              var fmt'$2=match$6[1];
              return [0,[2,pad$1,fmt'$2],fmtty'$2]}
            else
             {var exit$1=286}}
          switch(exit$1){case 286:var $js$8=Type_mismatch;throw $js$8}}
        else
         if($js$1==3)
          {var fmt_rest$3=match[2];
           var pad$2=match[1];
           var match$7=type_padding(pad$2,fmtty);
           var match$8=match$7[2];
           var pad$3=match$7[1];
           var $js$9=match$8;
           if(typeof $js$9=="number")
            {"unknown block:match/75742"}
           else
            {var $js$10=$js$9[0];
             if($js$10==1)
              {var fmtty_rest$4=match$8[1];
               var match$9=type_format_gen(fmt_rest$3,fmtty_rest$4);
               var fmtty'$3=match$9[2];
               var fmt'$3=match$9[1];
               return [0,[3,pad$3,fmt'$3],fmtty'$3]}
             else
              {var exit$2=287}}
           switch(exit$2){case 287:var $js$11=Type_mismatch;throw $js$11}}
         else
          if($js$1==4)
           {var fmt_rest$4=match[4];
            var prec=match[3];
            var pad$4=match[2];
            var iconv=match[1];
            var match$10=type_padprec(pad$4,prec,fmtty);
            var match$11=match$10[3];
            var prec$1=match$10[2];
            var pad$5=match$10[1];
            var $js$12=match$11;
            if(typeof $js$12=="number")
             {"unknown block:match/75747"}
            else
             {var $js$13=$js$12[0];
              if($js$13==2)
               {var fmtty_rest$5=match$11[1];
                var match$12=type_format_gen(fmt_rest$4,fmtty_rest$5);
                var fmtty'$4=match$12[2];
                var fmt'$4=match$12[1];
                return [0,[4,iconv,pad$5,prec$1,fmt'$4],fmtty'$4]}
              else
               {var exit$3=288}}
            switch(exit$3){case 288:var $js$14=Type_mismatch;throw $js$14}}
          else
           if($js$1==5)
            {var fmt_rest$5=match[4];
             var prec$2=match[3];
             var pad$6=match[2];
             var iconv$1=match[1];
             var match$13=type_padprec(pad$6,prec$2,fmtty);
             var match$14=match$13[3];
             var prec$3=match$13[2];
             var pad$7=match$13[1];
             var $js$15=match$14;
             if(typeof $js$15=="number")
              {"unknown block:match/75752"}
             else
              {var $js$16=$js$15[0];
               if($js$16==3)
                {var fmtty_rest$6=match$14[1];
                 var match$15=type_format_gen(fmt_rest$5,fmtty_rest$6);
                 var fmtty'$5=match$15[2];
                 var fmt'$5=match$15[1];
                 return [0,[5,iconv$1,pad$7,prec$3,fmt'$5],fmtty'$5]}
               else
                {var exit$4=289}}
             switch(exit$4){case 289:var $js$17=Type_mismatch;throw $js$17}}
           else
            if($js$1==6)
             {var fmt_rest$6=match[4];
              var prec$4=match[3];
              var pad$8=match[2];
              var iconv$2=match[1];
              var match$16=type_padprec(pad$8,prec$4,fmtty);
              var match$17=match$16[3];
              var prec$5=match$16[2];
              var pad$9=match$16[1];
              var $js$18=match$17;
              if(typeof $js$18=="number")
               {"unknown block:match/75757"}
              else
               {var $js$19=$js$18[0];
                if($js$19==4)
                 {var fmtty_rest$7=match$17[1];
                  var match$18=type_format_gen(fmt_rest$6,fmtty_rest$7);
                  var fmtty'$6=match$18[2];
                  var fmt'$6=match$18[1];
                  return [0,[6,iconv$2,pad$9,prec$5,fmt'$6],fmtty'$6]}
                else
                 {var exit$5=290}}
              switch(exit$5){case 290:var $js$20=Type_mismatch;throw $js$20}}
            else
             if($js$1==7)
              {var fmt_rest$7=match[4];
               var prec$6=match[3];
               var pad$10=match[2];
               var iconv$3=match[1];
               var match$19=type_padprec(pad$10,prec$6,fmtty);
               var match$20=match$19[3];
               var prec$7=match$19[2];
               var pad$11=match$19[1];
               var $js$21=match$20;
               if(typeof $js$21=="number")
                {"unknown block:match/75762"}
               else
                {var $js$22=$js$21[0];
                 if($js$22==5)
                  {var fmtty_rest$8=match$20[1];
                   var match$21=type_format_gen(fmt_rest$7,fmtty_rest$8);
                   var fmtty'$7=match$21[2];
                   var fmt'$7=match$21[1];
                   return [0,[7,iconv$3,pad$11,prec$7,fmt'$7],fmtty'$7]}
                 else
                  {var exit$6=291}}
               switch(exit$6){case 291:var $js$23=Type_mismatch;throw $js$23}}
             else
              if($js$1==8)
               {var fmt_rest$8=match[4];
                var prec$8=match[3];
                var pad$12=match[2];
                var fconv=match[1];
                var match$22=type_padprec(pad$12,prec$8,fmtty);
                var match$23=match$22[3];
                var prec$9=match$22[2];
                var pad$13=match$22[1];
                var $js$24=match$23;
                if(typeof $js$24=="number")
                 {"unknown block:match/75767"}
                else
                 {var $js$25=$js$24[0];
                  if($js$25==6)
                   {var fmtty_rest$9=match$23[1];
                    var match$24=type_format_gen(fmt_rest$8,fmtty_rest$9);
                    var fmtty'$8=match$24[2];
                    var fmt'$8=match$24[1];
                    return [0,[8,fconv,pad$13,prec$9,fmt'$8],fmtty'$8]}
                  else
                   {var exit$7=292}}
                switch(exit$7){case 292:var $js$26=Type_mismatch;throw $js$26}}
              else
               if($js$1==9)
                {var $js$27=match$1;
                 if(typeof $js$27=="number")
                  {"unknown block:match/75793"}
                 else
                  {var $js$28=$js$27[0];
                   if($js$28==7)
                    {var fmtty_rest$10=match$1[1];
                     var fmt_rest$9=match[1];
                     var match$25=type_format_gen(fmt_rest$9,fmtty_rest$10);
                     var fmtty'$9=match$25[2];
                     var fmt'$9=match$25[1];
                     return [0,[9,fmt'$9],fmtty'$9]}
                   else
                    {var exit=293}}}
               else
                if($js$1==10)
                 {var fmtty_rest$11=match$1;
                  var fmt_rest$10=match[1];
                  var match$26=type_format_gen(fmt_rest$10,fmtty_rest$11);
                  var fmtty'$10=match$26[2];
                  var fmt'$10=match$26[1];
                  return [0,[10,fmt'$10],fmtty'$10]}
                else
                 if($js$1==11)
                  {var fmtty_rest$12=match$1;
                   var fmt_rest$11=match[2];
                   var str=match[1];
                   var match$27=type_format_gen(fmt_rest$11,fmtty_rest$12);
                   var fmtty'$11=match$27[2];
                   var fmt'$11=match$27[1];
                   return [0,[11,str,fmt'$11],fmtty'$11]}
                 else
                  if($js$1==12)
                   {var fmtty_rest$13=match$1;
                    var fmt_rest$12=match[2];
                    var chr=match[1];
                    var match$28=type_format_gen(fmt_rest$12,fmtty_rest$13);
                    var fmtty'$12=match$28[2];
                    var fmt'$12=match$28[1];
                    return [0,[12,chr,fmt'$12],fmtty'$12]}
                  else
                   if($js$1==13)
                    {var $js$29=match$1;
                     if(typeof $js$29=="number")
                      {"unknown block:match/75793"}
                     else
                      {var $js$30=$js$29[0];
                       if($js$30==8)
                        {var fmtty_rest$14=match$1[2];
                         var sub_fmtty'=match$1[1];
                         var fmt_rest$13=match[3];
                         var sub_fmtty=match[2];
                         var pad_opt=match[1];
                         var $js$31="unknown primitive:caml_notequal";
                         if($js$31){var $js$32=Type_mismatch;throw $js$32}else{}
                         var match$29=type_format_gen(fmt_rest$13,fmtty_rest$14);
                         var fmtty'$13=match$29[2];
                         var fmt'$13=match$29[1];
                         return [0,[13,pad_opt,sub_fmtty',fmt'$13],fmtty'$13]}
                       else
                        {var exit=293}}}
                   else
                    if($js$1==14)
                     {var $js$33=match$1;
                      if(typeof $js$33=="number")
                       {"unknown block:match/75793"}
                      else
                       {var $js$34=$js$33[0];
                        if($js$34==9)
                         {var fmtty_rest$15=match$1[3];
                          var sub_fmtty1=match$1[1];
                          var fmt_rest$14=match[3];
                          var sub_fmtty$1=match[2];
                          var pad_opt$1=match[1];
                          var $js$35=CamlinternalFormatBasics["erase_rel"];
                          var $js$36=$js$35(sub_fmtty$1);
                          var $js$37=[0,$js$36];
                          var $js$38=CamlinternalFormatBasics["erase_rel"];
                          var $js$39=$js$38(sub_fmtty1);
                          var $js$40=[0,$js$39];
                          var $js$41="unknown primitive:caml_notequal";
                          if($js$41){var $js$42=Type_mismatch;throw $js$42}else{}
                          var $js$43=CamlinternalFormatBasics["erase_rel"];
                          var $js$44=$js$43(fmtty_rest$15);
                          var match$30=type_format_gen(fmt_rest$14,$js$44);
                          var fmtty'$14=match$30[2];
                          var fmt'$14=match$30[1];
                          return [0,[14,pad_opt$1,sub_fmtty1,fmt'$14],fmtty'$14]}
                        else
                         {var exit=293}}}
                    else
                     if($js$1==15)
                      {var $js$45=match$1;
                       if(typeof $js$45=="number")
                        {"unknown block:match/75793"}
                       else
                        {var $js$46=$js$45[0];
                         if($js$46==10)
                          {var fmtty_rest$16=match$1[1];
                           var fmt_rest$15=match[1];
                           var match$31=type_format_gen(fmt_rest$15,fmtty_rest$16);
                           var fmtty'$15=match$31[2];
                           var fmt'$15=match$31[1];
                           return [0,[15,fmt'$15],fmtty'$15]}
                         else
                          {var exit=293}}}
                     else
                      if($js$1==16)
                       {var $js$47=match$1;
                        if(typeof $js$47=="number")
                         {"unknown block:match/75793"}
                        else
                         {var $js$48=$js$47[0];
                          if($js$48==11)
                           {var fmtty_rest$17=match$1[1];
                            var fmt_rest$16=match[1];
                            var match$32=type_format_gen(fmt_rest$16,fmtty_rest$17);
                            var fmtty'$16=match$32[2];
                            var fmt'$16=match$32[1];
                            return [0,[16,fmt'$16],fmtty'$16]}
                          else
                           {var exit=293}}}
                      else
                       if($js$1==17)
                        {var fmtty_rest$18=match$1;
                         var fmt_rest$17=match[2];
                         var formatting_lit=match[1];
                         var match$33=type_format_gen(fmt_rest$17,fmtty_rest$18);
                         var fmtty'$17=match$33[2];
                         var fmt'$17=match$33[1];
                         return [0,[17,formatting_lit,fmt'$17],fmtty'$17]}
                       else
                        if($js$1==18)
                         {var fmtty_rest$19=match$1;
                          var fmt_rest$18=match[2];
                          var formatting_gen=match[1];
                          return type_formatting_gen
                                  (formatting_gen,fmt_rest$18,fmtty_rest$19)}
                        else
                         if($js$1==19)
                          {var $js$49=match$1;
                           if(typeof $js$49=="number")
                            {"unknown block:match/75793"}
                           else
                            {var $js$50=$js$49[0];
                             if($js$50==13)
                              {var fmtty_rest$20=match$1[1];
                               var fmt_rest$19=match[1];
                               var match$34=type_format_gen(fmt_rest$19,fmtty_rest$20);
                               var fmtty'$18=match$34[2];
                               var fmt'$18=match$34[1];
                               return [0,[19,fmt'$18],fmtty'$18]}
                             else
                              {var exit=293}}}
                         else
                          if($js$1==20)
                           {var $js$51=match$1;
                            if(typeof $js$51=="number")
                             {"unknown block:match/75793"}
                            else
                             {var $js$52=$js$51[0];
                              if($js$52==1)
                               {var fmtty_rest$21=match$1[1];
                                var fmt_rest$20=match[3];
                                var char_set=match[2];
                                var width_opt=match[1];
                                var match$35=type_format_gen(fmt_rest$20,fmtty_rest$21);
                                var fmtty'$19=match$35[2];
                                var fmt'$19=match$35[1];
                                return [0,[20,width_opt,char_set,fmt'$19],fmtty'$19]}
                              else
                               {var exit=293}}}
                          else
                           if($js$1==21)
                            {var $js$53=match$1;
                             if(typeof $js$53=="number")
                              {"unknown block:match/75793"}
                             else
                              {var $js$54=$js$53[0];
                               if($js$54==2)
                                {var fmtty_rest$22=match$1[1];
                                 var fmt_rest$21=match[2];
                                 var counter=match[1];
                                 var match$36=type_format_gen(fmt_rest$21,fmtty_rest$22);
                                 var fmtty'$20=match$36[2];
                                 var fmt'$20=match$36[1];
                                 return [0,[21,counter,fmt'$20],fmtty'$20]}
                               else
                                {var exit=293}}}
                           else
                            if($js$1==22)
                             {var exit=293}
                            else
                             if($js$1==23)
                              {var fmtty_rest$23=match$1;
                               var rest=match[2];
                               var ign=match[1];
                               return type_ignored_param(ign,rest,fmtty_rest$23)}
                             else
                              if($js$1==24){var exit=293}}
    switch(exit){case 293:var $js$55=Type_mismatch;throw $js$55}};
var
 type_formatting_gen=
  function(formatting_gen,fmt0,fmtty0)
   {var $js=formatting_gen;
    if($js==0)
     {var match=formatting_gen[1];
      var str=match[2];
      var fmt1=match[1];
      var match$1=type_format_gen(fmt1,fmtty0);
      var fmtty2=match$1[2];
      var fmt2=match$1[1];
      var match$2=type_format_gen(fmt0,fmtty2);
      var fmtty3=match$2[2];
      var fmt3=match$2[1];
      return [0,[18,[0,[0,fmt2,str]],fmt3],fmtty3]}
    else
     if($js==1)
      {var match$3=formatting_gen[1];
       var str$1=match$3[2];
       var fmt1$1=match$3[1];
       var match$4=type_format_gen(fmt1$1,fmtty0);
       var fmtty2$1=match$4[2];
       var fmt2$1=match$4[1];
       var match$5=type_format_gen(fmt0,fmtty2$1);
       var fmtty3$1=match$5[2];
       var fmt3$1=match$5[1];
       return [0,[18,[1,[0,fmt2$1,str$1]],fmt3$1],fmtty3$1]}};
var
 type_ignored_param=
  function(ign,fmt,fmtty)
   {var $js=ign;
    if(typeof $js=="number")
     {if($js==0)
       {var ign'=ign;return type_ignored_param_one(ign',fmt,fmtty)}
      else
       if($js==1)
        {var ign'$1=ign;return type_ignored_param_one(ign'$1,fmt,fmtty)}
       else
        if($js==2)
         {var ign'$2=ign;return type_ignored_param_one(ign'$2,fmt,fmtty)}
        else
         if($js==3)
          {var $js$1=fmtty;
           if(typeof $js$1=="number")
            {"unknown block:fmtty/57114"}
           else
            {var $js$2=$js$1[0];
             if($js$2==14)
              {var fmtty_rest=fmtty[1];
               var match=type_format_gen(fmt,fmtty_rest);
               var fmtty'=match[2];
               var fmt'=match[1];
               return [0,[23,3,fmt'],fmtty']}
             else
              {var exit=294}}
           switch(exit){case 294:var $js$3=Type_mismatch;throw $js$3}}
         else
          if($js==4)
           {var ign'$3=ign;return type_ignored_param_one(ign'$3,fmt,fmtty)}}
    else
     {var $js$4=$js[0];
      if($js$4==0)
       {var ign'$4=ign;return type_ignored_param_one(ign'$4,fmt,fmtty)}
      else
       if($js$4==1)
        {var ign'$5=ign;return type_ignored_param_one(ign'$5,fmt,fmtty)}
       else
        if($js$4==2)
         {var ign'$6=ign;return type_ignored_param_one(ign'$6,fmt,fmtty)}
        else
         if($js$4==3)
          {var ign'$7=ign;return type_ignored_param_one(ign'$7,fmt,fmtty)}
         else
          if($js$4==4)
           {var ign'$8=ign;return type_ignored_param_one(ign'$8,fmt,fmtty)}
          else
           if($js$4==5)
            {var ign'$9=ign;return type_ignored_param_one(ign'$9,fmt,fmtty)}
           else
            if($js$4==6)
             {var ign'$10=ign;
              return type_ignored_param_one(ign'$10,fmt,fmtty)}
            else
             if($js$4==7)
              {var sub_fmtty=ign[2];
               var pad_opt=ign[1];
               return type_ignored_param_one([7,pad_opt,sub_fmtty],fmt,fmtty)}
             else
              if($js$4==8)
               {var sub_fmtty$1=ign[2];
                var pad_opt$1=ign[1];
                var
                 match$1=
                  type_ignored_format_substitution(sub_fmtty$1,fmt,fmtty);
                var match$2=match$1[2];
                var fmtty'$1=match$2[2];
                var fmt'$1=match$2[1];
                var sub_fmtty'=match$1[1];
                return [0,[23,[8,pad_opt$1,sub_fmtty'],fmt'$1],fmtty'$1]}
              else
               if($js$4==9)
                {var ign'$11=ign;
                 return type_ignored_param_one(ign'$11,fmt,fmtty)}
               else
                if($js$4==10)
                 {var ign'$12=ign;
                  return type_ignored_param_one(ign'$12,fmt,fmtty)}}};
var
 type_ignored_param_one=
  function(ign,fmt,fmtty)
   {var match=type_format_gen(fmt,fmtty);
    var fmtty'=match[2];
    var fmt'=match[1];
    return [0,[23,ign,fmt'],fmtty']};
var
 type_ignored_format_substitution=
  function(sub_fmtty,fmt,fmtty)
   {var match=sub_fmtty;
    var match$1=fmtty;
    var $js=match;
    if(typeof $js=="number")
     {if($js==0)
       {var fmtty$1=match$1;
        var $js$1=type_format_gen(fmt,fmtty$1);
        return [0,0,$js$1]}}
    else
     {var $js$2=$js[0];
      if($js$2==0)
       {var $js$3=match$1;
        if(typeof $js$3=="number")
         {"unknown block:match/75866"}
        else
         {var $js$4=$js$3[0];
          if($js$4==0)
           {var fmtty_rest=match$1[1];
            var sub_fmtty_rest=match[1];
            var
             match$2=
              type_ignored_format_substitution(sub_fmtty_rest,fmt,fmtty_rest);
            var fmt'=match$2[2];
            var sub_fmtty_rest'=match$2[1];
            return [0,[0,sub_fmtty_rest'],fmt']}
          else
           {var exit=297}}}
      else
       if($js$2==1)
        {var $js$5=match$1;
         if(typeof $js$5=="number")
          {"unknown block:match/75866"}
         else
          {var $js$6=$js$5[0];
           if($js$6==1)
            {var fmtty_rest$1=match$1[1];
             var sub_fmtty_rest$1=match[1];
             var
              match$3=
               type_ignored_format_substitution
                (sub_fmtty_rest$1,fmt,fmtty_rest$1);
             var fmt'$1=match$3[2];
             var sub_fmtty_rest'$1=match$3[1];
             return [0,[1,sub_fmtty_rest'$1],fmt'$1]}
           else
            {var exit=297}}}
       else
        if($js$2==2)
         {var $js$7=match$1;
          if(typeof $js$7=="number")
           {"unknown block:match/75866"}
          else
           {var $js$8=$js$7[0];
            if($js$8==2)
             {var fmtty_rest$2=match$1[1];
              var sub_fmtty_rest$2=match[1];
              var
               match$4=
                type_ignored_format_substitution
                 (sub_fmtty_rest$2,fmt,fmtty_rest$2);
              var fmt'$2=match$4[2];
              var sub_fmtty_rest'$2=match$4[1];
              return [0,[2,sub_fmtty_rest'$2],fmt'$2]}
            else
             {var exit=297}}}
        else
         if($js$2==3)
          {var $js$9=match$1;
           if(typeof $js$9=="number")
            {"unknown block:match/75866"}
           else
            {var $js$10=$js$9[0];
             if($js$10==3)
              {var fmtty_rest$3=match$1[1];
               var sub_fmtty_rest$3=match[1];
               var
                match$5=
                 type_ignored_format_substitution
                  (sub_fmtty_rest$3,fmt,fmtty_rest$3);
               var fmt'$3=match$5[2];
               var sub_fmtty_rest'$3=match$5[1];
               return [0,[3,sub_fmtty_rest'$3],fmt'$3]}
             else
              {var exit=297}}}
         else
          if($js$2==4)
           {var $js$11=match$1;
            if(typeof $js$11=="number")
             {"unknown block:match/75866"}
            else
             {var $js$12=$js$11[0];
              if($js$12==4)
               {var fmtty_rest$4=match$1[1];
                var sub_fmtty_rest$4=match[1];
                var
                 match$6=
                  type_ignored_format_substitution
                   (sub_fmtty_rest$4,fmt,fmtty_rest$4);
                var fmt'$4=match$6[2];
                var sub_fmtty_rest'$4=match$6[1];
                return [0,[4,sub_fmtty_rest'$4],fmt'$4]}
              else
               {var exit=297}}}
          else
           if($js$2==5)
            {var $js$13=match$1;
             if(typeof $js$13=="number")
              {"unknown block:match/75866"}
             else
              {var $js$14=$js$13[0];
               if($js$14==5)
                {var fmtty_rest$5=match$1[1];
                 var sub_fmtty_rest$5=match[1];
                 var
                  match$7=
                   type_ignored_format_substitution
                    (sub_fmtty_rest$5,fmt,fmtty_rest$5);
                 var fmt'$5=match$7[2];
                 var sub_fmtty_rest'$5=match$7[1];
                 return [0,[5,sub_fmtty_rest'$5],fmt'$5]}
               else
                {var exit=297}}}
           else
            if($js$2==6)
             {var $js$15=match$1;
              if(typeof $js$15=="number")
               {"unknown block:match/75866"}
              else
               {var $js$16=$js$15[0];
                if($js$16==6)
                 {var fmtty_rest$6=match$1[1];
                  var sub_fmtty_rest$6=match[1];
                  var
                   match$8=
                    type_ignored_format_substitution
                     (sub_fmtty_rest$6,fmt,fmtty_rest$6);
                  var fmt'$6=match$8[2];
                  var sub_fmtty_rest'$6=match$8[1];
                  return [0,[6,sub_fmtty_rest'$6],fmt'$6]}
                else
                 {var exit=297}}}
            else
             if($js$2==7)
              {var $js$17=match$1;
               if(typeof $js$17=="number")
                {"unknown block:match/75866"}
               else
                {var $js$18=$js$17[0];
                 if($js$18==7)
                  {var fmtty_rest$7=match$1[1];
                   var sub_fmtty_rest$7=match[1];
                   var
                    match$9=
                     type_ignored_format_substitution
                      (sub_fmtty_rest$7,fmt,fmtty_rest$7);
                   var fmt'$7=match$9[2];
                   var sub_fmtty_rest'$7=match$9[1];
                   return [0,[7,sub_fmtty_rest'$7],fmt'$7]}
                 else
                  {var exit=297}}}
             else
              if($js$2==8)
               {var $js$19=match$1;
                if(typeof $js$19=="number")
                 {"unknown block:match/75866"}
                else
                 {var $js$20=$js$19[0];
                  if($js$20==8)
                   {var fmtty_rest$8=match$1[2];
                    var sub2_fmtty'=match$1[1];
                    var sub_fmtty_rest$8=match[2];
                    var sub2_fmtty=match[1];
                    var $js$21="unknown primitive:caml_notequal";
                    if($js$21){var $js$22=Type_mismatch;throw $js$22}else{}
                    var
                     match$10=
                      type_ignored_format_substitution
                       (sub_fmtty_rest$8,fmt,fmtty_rest$8);
                    var fmt'$8=match$10[2];
                    var sub_fmtty_rest'$8=match$10[1];
                    return [0,[8,sub2_fmtty',sub_fmtty_rest'$8],fmt'$8]}
                  else
                   {var exit=297}}}
              else
               if($js$2==9)
                {var $js$23=match$1;
                 if(typeof $js$23=="number")
                  {"unknown block:match/75866"}
                 else
                  {var $js$24=$js$23[0];
                   if($js$24==9)
                    {var fmtty_rest$9=match$1[3];
                     var sub2_fmtty'$1=match$1[2];
                     var sub1_fmtty'=match$1[1];
                     var sub_fmtty_rest$9=match[3];
                     var sub2_fmtty$1=match[2];
                     var sub1_fmtty=match[1];
                     var $js$25=CamlinternalFormatBasics["erase_rel"];
                     var $js$26=$js$25(sub1_fmtty);
                     var $js$27=[0,$js$26];
                     var $js$28=CamlinternalFormatBasics["erase_rel"];
                     var $js$29=$js$28(sub1_fmtty');
                     var $js$30=[0,$js$29];
                     var $js$31="unknown primitive:caml_notequal";
                     if($js$31){var $js$32=Type_mismatch;throw $js$32}else{}
                     var $js$33=CamlinternalFormatBasics["erase_rel"];
                     var $js$34=$js$33(sub2_fmtty$1);
                     var $js$35=[0,$js$34];
                     var $js$36=CamlinternalFormatBasics["erase_rel"];
                     var $js$37=$js$36(sub2_fmtty'$1);
                     var $js$38=[0,$js$37];
                     var $js$39="unknown primitive:caml_notequal";
                     if($js$39){var $js$40=Type_mismatch;throw $js$40}else{}
                     var $js$41=symm(sub1_fmtty');
                     var sub_fmtty'=trans($js$41,sub2_fmtty'$1);
                     var match$11=fmtty_rel_det(sub_fmtty');
                     var f4=match$11[4];
                     var f2=match$11[2];
                     var match$12=f2(0);
                     var match$13=f4(0);
                     var $js$42=CamlinternalFormatBasics["erase_rel"];
                     var $js$43=$js$42(sub_fmtty_rest$9);
                     var
                      match$14=
                       type_ignored_format_substitution($js$43,fmt,fmtty_rest$9);
                     var fmt'$9=match$14[2];
                     var sub_fmtty_rest'$9=match$14[1];
                     var $js$44=symm(sub_fmtty_rest'$9);
                     var $js$45=[9,sub1_fmtty',sub2_fmtty'$1,$js$44];
                     return [0,$js$45,fmt'$9]}
                   else
                    {var exit=297}}}
               else
                if($js$2==10)
                 {var $js$46=match$1;
                  if(typeof $js$46=="number")
                   {"unknown block:match/75866"}
                  else
                   {var $js$47=$js$46[0];
                    if($js$47==10)
                     {var fmtty_rest$10=match$1[1];
                      var sub_fmtty_rest$10=match[1];
                      var
                       match$15=
                        type_ignored_format_substitution
                         (sub_fmtty_rest$10,fmt,fmtty_rest$10);
                      var fmt'$10=match$15[2];
                      var sub_fmtty_rest'$10=match$15[1];
                      return [0,[10,sub_fmtty_rest'$10],fmt'$10]}
                    else
                     {var exit=297}}}
                else
                 if($js$2==11)
                  {var $js$48=match$1;
                   if(typeof $js$48=="number")
                    {"unknown block:match/75866"}
                   else
                    {var $js$49=$js$48[0];
                     if($js$49==11)
                      {var fmtty_rest$11=match$1[1];
                       var sub_fmtty_rest$11=match[1];
                       var
                        match$16=
                         type_ignored_format_substitution
                          (sub_fmtty_rest$11,fmt,fmtty_rest$11);
                       var fmt'$11=match$16[2];
                       var sub_fmtty_rest'$11=match$16[1];
                       return [0,[11,sub_fmtty_rest'$11],fmt'$11]}
                     else
                      {var exit=297}}}
                 else
                  if($js$2==12)
                   {var exit=297}
                  else
                   if($js$2==13)
                    {var $js$50=match$1;
                     if(typeof $js$50=="number")
                      {"unknown block:match/75866"}
                     else
                      {var $js$51=$js$50[0];
                       if($js$51==13)
                        {var fmtty_rest$12=match$1[1];
                         var sub_fmtty_rest$12=match[1];
                         var
                          match$17=
                           type_ignored_format_substitution
                            (sub_fmtty_rest$12,fmt,fmtty_rest$12);
                         var fmt'$12=match$17[2];
                         var sub_fmtty_rest'$12=match$17[1];
                         return [0,[13,sub_fmtty_rest'$12],fmt'$12]}
                       else
                        {var exit=297}}}
                   else
                    if($js$2==14)
                     {var $js$52=match$1;
                      if(typeof $js$52=="number")
                       {"unknown block:match/75866"}
                      else
                       {var $js$53=$js$52[0];
                        if($js$53==14)
                         {var fmtty_rest$13=match$1[1];
                          var sub_fmtty_rest$13=match[1];
                          var
                           match$18=
                            type_ignored_format_substitution
                             (sub_fmtty_rest$13,fmt,fmtty_rest$13);
                          var fmt'$13=match$18[2];
                          var sub_fmtty_rest'$13=match$18[1];
                          return [0,[14,sub_fmtty_rest'$13],fmt'$13]}
                        else
                         {var exit=297}}}}
    switch(exit){case 297:var $js$54=Type_mismatch;throw $js$54}};
var
 recast=
  function(fmt,fmtty)
   {var $js=CamlinternalFormatBasics["erase_rel"];
    var $js$1=symm(fmtty);
    var $js$2=$js($js$1);
    return type_format(fmt,$js$2)};
var
 fix_padding=
  function(padty,width,str)
   {var len=str["length"];
    var $js=Pervasives["abs"];
    var $js$1=$js(width);
    var $js$2=width<0;
    if($js$2){var $js$3=0}else{var $js$3=padty}
    var match=[0,$js$1,$js$3];
    var padty$1=match[2];
    var width$1=match[1];
    var $js$4=width$1<=len;
    if($js$4)
     {return str}
    else
     {var $js$5=Bytes["make"];
      var $js$6=padty$1=2;
      if($js$6){var $js$7=48}else{var $js$7=32}
      var res=$js$5(width$1,$js$7);
      var $js$8=padty$1;
      var $js$9=$js$8[0];
      if($js$9==0)
       {var $js$10=String["blit"];$js$10(str,0,res,0,len)}
      else
       if($js$9==1)
        {var $js$11=String["blit"];$js$11(str,0,res,width$1-len,len)}
       else
        if($js$9==2)
         {var $js$12=str[0];
          var $js$13=$js$12=43;
          var $js$14=str[0];
          var $js$15=$js$14=45;
          var $js$16=str[0];
          var $js$17=$js$16=32;
          var $js$18=$js$15||$js$17;
          var $js$19=$js$13||$js$18;
          var $js$20=len>0&&$js$19;
          if($js$20)
           {var $js$21=str[0];
            res[0]=$js$21,0;
            var $js$22=String["blit"];
            $js$22(str,1,res,width$1-len+1,len-1)}
          else
           {var $js$23=str[0];
            var $js$24=$js$23=48;
            var $js$25=str[1];
            var $js$26=$js$25=120;
            var $js$27=str[1];
            var $js$28=$js$27=88;
            var $js$29=$js$26||$js$28;
            var $js$30=$js$24&&$js$29;
            var $js$31=len>1&&$js$30;
            if($js$31)
             {var $js$32=str[1];
              res[1]=$js$32,0;
              var $js$33=String["blit"];
              $js$33(str,2,res,width$1-len+2,len-2)}
            else
             {var $js$34=String["blit"];$js$34(str,0,res,width$1-len,len)}}}
      var $js$35=Bytes["unsafe_to_string"];
      return $js$35(res)}};
var
 fix_int_precision=
  function(prec,str)
   {var $js=Pervasives["abs"];
    var prec$1=$js(prec);
    var len=str["length"];
    var c=str[0];
    var $js$1=c>=58;
    if($js$1)
     {var $js$2=c>=71;
      if($js$2)
       {var switcher=-97+c;
        var $js$3=5<switcher>>>0;
        if($js$3){var exit=274}else{var exit=276}}
      else
       {var $js$4=c>=65;if($js$4){var exit=276}else{var exit=274}}}
    else
     {var $js$5=c!=32;
      if($js$5)
       {var $js$6=c>=43;
        if($js$6)
         {var switcher$1=-43+c;
          var $js$7=switcher$1;
          var $js$8=$js$7[0];
          if($js$8==0)
           {var exit=275}
          else
           if($js$8==1)
            {var exit=274}
           else
            if($js$8==2)
             {var exit=275}
            else
             if($js$8==3)
              {var exit=274}
             else
              if($js$8==4)
               {var exit=274}
              else
               if($js$8==5)
                {var $js$9=str[1];
                 var $js$10=$js$9=120;
                 var $js$11=str[1];
                 var $js$12=$js$11=88;
                 var $js$13=$js$10||$js$12;
                 var $js$14=len>1&&$js$13;
                 var $js$15=prec$1+2>len&&$js$14;
                 if($js$15)
                  {var $js$16=Bytes["make"];
                   var res=$js$16(prec$1+2,48);
                   var $js$17=str[1];
                   res[1]=$js$17,0;
                   var $js$18=String["blit"];
                   $js$18(str,2,res,prec$1-len+4,len-2);
                   var $js$19=Bytes["unsafe_to_string"];
                   return $js$19(res)}
                 else
                  {var exit=276}}
               else
                if($js$8==6)
                 {var exit=276}
                else
                 if($js$8==7)
                  {var exit=276}
                 else
                  if($js$8==8)
                   {var exit=276}
                  else
                   if($js$8==9)
                    {var exit=276}
                   else
                    if($js$8==10)
                     {var exit=276}
                    else
                     if($js$8==11)
                      {var exit=276}
                     else
                      if($js$8==12)
                       {var exit=276}
                      else
                       if($js$8==13){var exit=276}else if($js$8==14){var exit=276}}
        else
         {var exit=274}}
      else
       {var exit=275}}
    switch(exit)
     {case 275:
       var $js$20=prec$1+1>len;
       if($js$20)
        {var $js$21=Bytes["make"];
         var res$1=$js$21(prec$1+1,48);
         res$1[0]=c,0;
         var $js$22=String["blit"];
         $js$22(str,1,res$1,prec$1-len+2,len-1);
         var $js$23=Bytes["unsafe_to_string"];
         return $js$23(res$1)}
       else
        {"unknown block:(exit 274)"}
      case 276:
       var $js$24=prec$1>len;
       if($js$24)
        {var $js$25=Bytes["make"];
         var res$2=$js$25(prec$1,48);
         var $js$26=String["blit"];
         $js$26(str,0,res$2,prec$1-len,len);
         var $js$27=Bytes["unsafe_to_string"];
         return $js$27(res$2)}
       else
        {"unknown block:(exit 274)"}
      case 274:return str
      }};
var
 string_to_caml_string=
  function(str)
   {var $js=String["concat"];
    var $js$1=String["escaped"];
    var $js$2=$js$1(str);
    return $js($js$2,[0,'"',[0,'"',0]])};
var
 format_of_iconv=
  function(iconv)
   {var $js=iconv;
    var $js$1=$js[0];
    if($js$1==0)
     {return "%d"}
    else
     if($js$1==1)
      {return "%+d"}
     else
      if($js$1==2)
       {return "% d"}
      else
       if($js$1==3)
        {return "%i"}
       else
        if($js$1==4)
         {return "%+i"}
        else
         if($js$1==5)
          {return "% i"}
         else
          if($js$1==6)
           {return "%x"}
          else
           if($js$1==7)
            {return "%#x"}
           else
            if($js$1==8)
             {return "%X"}
            else
             if($js$1==9)
              {return "%#X"}
             else
              if($js$1==10)
               {return "%o"}
              else
               if($js$1==11){return "%#o"}else if($js$1==12){return "%u"}};
var
 format_of_aconv=
  function(iconv,c)
   {var $js=iconv;
    var $js$1=$js[0];
    if($js$1==0)
     {var seps=[0,"%",[0,"d",0]]}
    else
     if($js$1==1)
      {var seps=[0,"%+",[0,"d",0]]}
     else
      if($js$1==2)
       {var seps=[0,"% ",[0,"d",0]]}
      else
       if($js$1==3)
        {var seps=[0,"%",[0,"i",0]]}
       else
        if($js$1==4)
         {var seps=[0,"%+",[0,"i",0]]}
        else
         if($js$1==5)
          {var seps=[0,"% ",[0,"i",0]]}
         else
          if($js$1==6)
           {var seps=[0,"%",[0,"x",0]]}
          else
           if($js$1==7)
            {var seps=[0,"%#",[0,"x",0]]}
           else
            if($js$1==8)
             {var seps=[0,"%",[0,"X",0]]}
            else
             if($js$1==9)
              {var seps=[0,"%#",[0,"X",0]]}
             else
              if($js$1==10)
               {var seps=[0,"%",[0,"o",0]]}
              else
               if($js$1==11)
                {var seps=[0,"%#",[0,"o",0]]}
               else
                if($js$1==12){var seps=[0,"%",[0,"u",0]]}
    var $js$2=String["concat"];
    var $js$3=String["make"];
    var $js$4=$js$3(1,c);
    return $js$2($js$4,seps)};
var
 format_of_fconv=
  function(fconv,prec)
   {var $js=fconv=15;
    if($js)
     {return "%.12g"}
    else
     {var $js$1=Pervasives["abs"];
      var prec$1=$js$1(prec);
      var symb=char_of_fconv(fconv);
      var buf=buffer_create(16);
      buffer_add_char(buf,37);
      bprint_fconv_flag(buf,fconv);
      buffer_add_char(buf,46);
      var $js$2=Pervasives["string_of_int"];
      var $js$3=$js$2(prec$1);
      buffer_add_string(buf,$js$3);
      buffer_add_char(buf,symb);
      return buffer_contents(buf)}};
var
 convert_int=
  function(iconv,n)
   {var $js=format_of_iconv(iconv);return "unknown primitive:caml_format_int"};
var
 convert_int32=
  function(iconv,n)
   {var $js=format_of_aconv(iconv,108);
    return "unknown primitive:caml_int32_format"};
var
 convert_nativeint=
  function(iconv,n)
   {var $js=format_of_aconv(iconv,110);
    return "unknown primitive:caml_nativeint_format"};
var
 convert_int64=
  function(iconv,n)
   {var $js=format_of_aconv(iconv,76);
    return "unknown primitive:caml_int64_format"};
var
 convert_float=
  function(fconv,prec,x)
   {var $js=Pervasives["abs"];
    var prec$1=$js(prec);
    var $js$1=format_of_fconv(fconv,prec$1);
    var str="unknown primitive:caml_format_float";
    var $js$2=fconv!=15;
    if($js$2)
     {return str}
    else
     {var len=str["length"];
      var
       is_valid=
        function(i)
         {var $js$3=i=len;
          if($js$3)
           {return 0}
          else
           {var match=str[i];
            var switcher=-46+match;
            var $js$4=!(23<switcher>>>0);
            if($js$4)
             {var switcher$1=-1+switcher;
              var $js$5=21<switcher$1>>>0;
              if($js$5){var exit=253}else{var exit=254}}
            else
             {var $js$6=switcher!=55;
              if($js$6){var exit=254}else{var exit=253}}
            switch(exit){case 254:return is_valid(i+1);case 253:return 1}}};
      var match="unknown primitive:caml_classify_float";
      var $js$3=match!=3;
      if($js$3)
       {var $js$4=match>=4;
        if($js$4)
         {return "nan"}
        else
         {var $js$5=is_valid(0);
          if($js$5)
           {return str}
          else
           {var $js$6=Pervasives["^"];return $js$6(str,".")}}}
      else
       {var $js$7=x<0;if($js$7){return "neg_infinity"}else{return "infinity"}}}};
var
 format_caml_char=
  function(c)
   {var $js=String["concat"];
    var $js$1=Char["escaped"];
    var $js$2=$js$1(c);
    return $js($js$2,[0,"'",[0,"'",0]])};
var
 string_of_fmtty=
  function(fmtty)
   {var buf=buffer_create(16);
    bprint_fmtty(buf,fmtty);
    return buffer_contents(buf)};
var
 make_printf=
  function(k,o,acc,fmt)
   {var $js=fmt;
    if(typeof $js=="number")
     {if($js==0){return k(o,acc)}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var rest=fmt[1];
        return function(c)
         {var new_acc=[5,acc,c];return make_printf(k,o,new_acc,rest)}}
      else
       if($js$1==1)
        {var rest$1=fmt[1];
         return function(c)
          {var $js$2=format_caml_char(c);
           var new_acc=[4,acc,$js$2];
           return make_printf(k,o,new_acc,rest$1)}}
       else
        if($js$1==2)
         {var rest$2=fmt[2];
          var pad=fmt[1];
          return make_string_padding
                  (k,o,acc,rest$2,pad,function(str){return str})}
        else
         if($js$1==3)
          {var rest$3=fmt[2];
           var pad$1=fmt[1];
           return make_string_padding
                   (k,o,acc,rest$3,pad$1,string_to_caml_string)}
         else
          if($js$1==4)
           {var rest$4=fmt[4];
            var prec=fmt[3];
            var pad$2=fmt[2];
            var iconv=fmt[1];
            return make_int_padding_precision
                    (k,o,acc,rest$4,pad$2,prec,convert_int,iconv)}
          else
           if($js$1==5)
            {var rest$5=fmt[4];
             var prec$1=fmt[3];
             var pad$3=fmt[2];
             var iconv$1=fmt[1];
             return make_int_padding_precision
                     (k,o,acc,rest$5,pad$3,prec$1,convert_int32,iconv$1)}
           else
            if($js$1==6)
             {var rest$6=fmt[4];
              var prec$2=fmt[3];
              var pad$4=fmt[2];
              var iconv$2=fmt[1];
              return make_int_padding_precision
                      (k,o,acc,rest$6,pad$4,prec$2,convert_nativeint,iconv$2)}
            else
             if($js$1==7)
              {var rest$7=fmt[4];
               var prec$3=fmt[3];
               var pad$5=fmt[2];
               var iconv$3=fmt[1];
               return make_int_padding_precision
                       (k,o,acc,rest$7,pad$5,prec$3,convert_int64,iconv$3)}
             else
              if($js$1==8)
               {var rest$8=fmt[4];
                var prec$4=fmt[3];
                var pad$6=fmt[2];
                var fconv=fmt[1];
                return make_float_padding_precision
                        (k,o,acc,rest$8,pad$6,prec$4,fconv)}
              else
               if($js$1==9)
                {var rest$9=fmt[1];
                 return function(b)
                  {var $js$2=Pervasives["string_of_bool"];
                   var $js$3=$js$2(b);
                   var $js$4=[4,acc,$js$3];
                   return make_printf(k,o,$js$4,rest$9)}}
               else
                if($js$1==10)
                 {var rest$10=fmt[1];return make_printf(k,o,[7,acc],rest$10)}
                else
                 if($js$1==11)
                  {var rest$11=fmt[2];
                   var str=fmt[1];
                   return make_printf(k,o,[2,acc,str],rest$11)}
                 else
                  if($js$1==12)
                   {var rest$12=fmt[2];
                    var chr=fmt[1];
                    return make_printf(k,o,[3,acc,chr],rest$12)}
                  else
                   if($js$1==13)
                    {var rest$13=fmt[3];
                     var sub_fmtty=fmt[2];
                     var ty=string_of_fmtty(sub_fmtty);
                     return function(str$1)
                      {0;return make_printf(k,o,[4,acc,ty],rest$13)}}
                   else
                    if($js$1==14)
                     {var rest$14=fmt[3];
                      var fmtty=fmt[2];
                      return function(param)
                       {var fmt$1=param[1];
                        var $js$2=CamlinternalFormatBasics["concat_fmt"];
                        var $js$3=recast(fmt$1,fmtty);
                        var $js$4=$js$2($js$3,rest$14);
                        return make_printf(k,o,acc,$js$4)}}
                    else
                     if($js$1==15)
                      {var rest$15=fmt[1];
                       return function(f,x)
                        {return make_printf
                                 (k,o,[6,acc,function(o$1){return f(o$1,x)}],rest$15)}}
                     else
                      if($js$1==16)
                       {var rest$16=fmt[1];
                        return function(f)
                         {return make_printf(k,o,[6,acc,f],rest$16)}}
                      else
                       if($js$1==17)
                        {var rest$17=fmt[2];
                         var fmting_lit=fmt[1];
                         return make_printf(k,o,[0,acc,fmting_lit],rest$17)}
                       else
                        if($js$1==18)
                         {var match=fmt[1];
                          var $js$2=match;
                          if($js$2==0)
                           {var rest$18=fmt[2];
                            var match$1=match[1];
                            var fmt'=match$1[1];
                            var
                             k'=
                              function(koc,kacc)
                               {return make_printf(k,koc,[1,acc,[0,kacc]],rest$18)};
                            return make_printf(k',o,0,fmt')}
                          else
                           if($js$2==1)
                            {var rest$19=fmt[2];
                             var match$2=match[1];
                             var fmt'$1=match$2[1];
                             var
                              k'$1=
                               function(koc,kacc)
                                {return make_printf(k,koc,[1,acc,[1,kacc]],rest$19)};
                             return make_printf(k'$1,o,0,fmt'$1)}}
                        else
                         if($js$1==19)
                          {var
                            $js$3=
                             [0,Assert_failure,[0,"camlinternalFormat.ml",1449,4]];
                           throw $js$3}
                         else
                          if($js$1==20)
                           {var rest$20=fmt[3];
                            var new_acc=[8,acc,"Printf: bad conversion %["];
                            return function(param)
                             {return make_printf(k,o,new_acc,rest$20)}}
                          else
                           if($js$1==21)
                            {var rest$21=fmt[2];
                             return function(n)
                              {var $js$4="unknown primitive:caml_format_int";
                               var new_acc$1=[4,acc,$js$4];
                               return make_printf(k,o,new_acc$1,rest$21)}}
                           else
                            if($js$1==22)
                             {var rest$22=fmt[1];
                              return function(c)
                               {var new_acc$1=[5,acc,c];
                                return make_printf(k,o,new_acc$1,rest$22)}}
                            else
                             if($js$1==23)
                              {var rest$23=fmt[2];
                               var ign=fmt[1];
                               return make_ignored_param(k,o,acc,ign,rest$23)}
                             else
                              if($js$1==24)
                               {var rest$24=fmt[3];
                                var f=fmt[2];
                                var arity=fmt[1];
                                var $js$4=f(0);
                                return make_custom(k,o,acc,rest$24,arity,$js$4)}}};
var
 make_ignored_param=
  function(k,o,acc,ign,fmt)
   {var $js=ign;
    if(typeof $js=="number")
     {if($js==0)
       {return make_invalid_arg(k,o,acc,fmt)}
      else
       if($js==1)
        {return make_invalid_arg(k,o,acc,fmt)}
       else
        if($js==2)
         {return make_invalid_arg(k,o,acc,fmt)}
        else
         if($js==3)
          {var $js$1=[0,Assert_failure,[0,"camlinternalFormat.ml",1517,39]];
           throw $js$1}
         else
          if($js==4){return make_invalid_arg(k,o,acc,fmt)}}
    else
     {var $js$2=$js[0];
      if($js$2==0)
       {return make_invalid_arg(k,o,acc,fmt)}
      else
       if($js$2==1)
        {return make_invalid_arg(k,o,acc,fmt)}
       else
        if($js$2==2)
         {return make_invalid_arg(k,o,acc,fmt)}
        else
         if($js$2==3)
          {return make_invalid_arg(k,o,acc,fmt)}
         else
          if($js$2==4)
           {return make_invalid_arg(k,o,acc,fmt)}
          else
           if($js$2==5)
            {return make_invalid_arg(k,o,acc,fmt)}
           else
            if($js$2==6)
             {return make_invalid_arg(k,o,acc,fmt)}
            else
             if($js$2==7)
              {return make_invalid_arg(k,o,acc,fmt)}
             else
              if($js$2==8)
               {var fmtty=ign[2];return make_from_fmtty(k,o,acc,fmtty,fmt)}
              else
               if($js$2==9)
                {return make_invalid_arg(k,o,acc,fmt)}
               else
                if($js$2==10){return make_invalid_arg(k,o,acc,fmt)}}};
var
 make_from_fmtty=
  function(k,o,acc,fmtty,fmt)
   {var $js=fmtty;
    if(typeof $js=="number")
     {if($js==0){return make_invalid_arg(k,o,acc,fmt)}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var rest=fmtty[1];
        return function(param){return make_from_fmtty(k,o,acc,rest,fmt)}}
      else
       if($js$1==1)
        {var rest$1=fmtty[1];
         return function(param){return make_from_fmtty(k,o,acc,rest$1,fmt)}}
       else
        if($js$1==2)
         {var rest$2=fmtty[1];
          return function(param){return make_from_fmtty(k,o,acc,rest$2,fmt)}}
        else
         if($js$1==3)
          {var rest$3=fmtty[1];
           return function(param){return make_from_fmtty(k,o,acc,rest$3,fmt)}}
         else
          if($js$1==4)
           {var rest$4=fmtty[1];
            return function(param){return make_from_fmtty(k,o,acc,rest$4,fmt)}}
          else
           if($js$1==5)
            {var rest$5=fmtty[1];
             return function(param)
              {return make_from_fmtty(k,o,acc,rest$5,fmt)}}
           else
            if($js$1==6)
             {var rest$6=fmtty[1];
              return function(param)
               {return make_from_fmtty(k,o,acc,rest$6,fmt)}}
            else
             if($js$1==7)
              {var rest$7=fmtty[1];
               return function(param)
                {return make_from_fmtty(k,o,acc,rest$7,fmt)}}
             else
              if($js$1==8)
               {var rest$8=fmtty[2];
                return function(param)
                 {return make_from_fmtty(k,o,acc,rest$8,fmt)}}
              else
               if($js$1==9)
                {var rest$9=fmtty[3];
                 var ty2=fmtty[2];
                 var ty1=fmtty[1];
                 var $js$2=symm(ty1);
                 var ty=trans($js$2,ty2);
                 return function(param)
                  {var $js$3=CamlinternalFormatBasics["concat_fmtty"];
                   var $js$4=$js$3(ty,rest$9);
                   return make_from_fmtty(k,o,acc,$js$4,fmt)}}
               else
                if($js$1==10)
                 {var rest$10=fmtty[1];
                  return function(param,param$1)
                   {return make_from_fmtty(k,o,acc,rest$10,fmt)}}
                else
                 if($js$1==11)
                  {var rest$11=fmtty[1];
                   return function(param)
                    {return make_from_fmtty(k,o,acc,rest$11,fmt)}}
                 else
                  if($js$1==12)
                   {var rest$12=fmtty[1];
                    return function(param)
                     {return make_from_fmtty(k,o,acc,rest$12,fmt)}}
                  else
                   if($js$1==13)
                    {var
                      $js$3=
                       [0,Assert_failure,[0,"camlinternalFormat.ml",1540,31]];
                     throw $js$3}
                   else
                    if($js$1==14)
                     {var
                       $js$4=
                        [0,Assert_failure,[0,"camlinternalFormat.ml",1541,31]];
                      throw $js$4}}};
var
 make_invalid_arg=
  function(k,o,acc,fmt)
   {return make_printf(k,o,[8,acc,"Printf: bad conversion %_"],fmt)};
var
 make_string_padding=
  function(k,o,acc,fmt,pad,trans$1)
   {var $js=pad;
    if(typeof $js=="number")
     {if($js==0)
       {return function(x)
         {var $js$1=trans$1(x);
          var new_acc=[4,acc,$js$1];
          return make_printf(k,o,new_acc,fmt)}}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var width=pad[2];
        var padty=pad[1];
        return function(x)
         {var $js$2=trans$1(x);
          var $js$3=fix_padding(padty,width,$js$2);
          var new_acc=[4,acc,$js$3];
          return make_printf(k,o,new_acc,fmt)}}
      else
       if($js$1==1)
        {var padty$1=pad[1];
         return function(w,x)
          {var $js$2=trans$1(x);
           var $js$3=fix_padding(padty$1,w,$js$2);
           var new_acc=[4,acc,$js$3];
           return make_printf(k,o,new_acc,fmt)}}}};
var
 make_int_padding_precision=
  function(k,o,acc,fmt,pad,prec,trans$1,iconv)
   {var match=pad;
    var match$1=prec;
    var $js=match;
    if(typeof $js=="number")
     {if($js==0)
       {var $js$1="unknown primitive:isint";
        if($js$1)
         {var $js$2=match$1!=0;
          if($js$2)
           {return function(p,x)
             {var $js$3=trans$1(iconv,x);
              var str=fix_int_precision(p,$js$3);
              return make_printf(k,o,[4,acc,str],fmt)}}
          else
           {return function(x)
             {var str=trans$1(iconv,x);
              return make_printf(k,o,[4,acc,str],fmt)}}}
        else
         {var p=match$1[1];
          return function(x)
           {var $js$3=trans$1(iconv,x);
            var str=fix_int_precision(p,$js$3);
            return make_printf(k,o,[4,acc,str],fmt)}}}}
    else
     {var $js$3=$js[0];
      if($js$3==0)
       {var w=match[2];
        var padty=match[1];
        var $js$4="unknown primitive:isint";
        if($js$4)
         {var $js$5=match$1!=0;
          if($js$5)
           {var w$1=w;
            var padty$1=padty;
            return function(p$1,x)
             {var $js$6=trans$1(iconv,x);
              var $js$7=fix_int_precision(p$1,$js$6);
              var str=fix_padding(padty$1,w$1,$js$7);
              return make_printf(k,o,[4,acc,str],fmt)}}
          else
           {return function(x)
             {var $js$6=trans$1(iconv,x);
              var str=fix_padding(padty,w,$js$6);
              return make_printf(k,o,[4,acc,str],fmt)}}}
        else
         {var w$2=w;
          var padty$2=padty;
          var p$1=match$1[1];
          return function(x)
           {var $js$6=trans$1(iconv,x);
            var $js$7=fix_int_precision(p$1,$js$6);
            var str=fix_padding(padty$2,w$2,$js$7);
            return make_printf(k,o,[4,acc,str],fmt)}}}
      else
       if($js$3==1)
        {var padty$3=match[1];
         var $js$6="unknown primitive:isint";
         if($js$6)
          {var $js$7=match$1!=0;
           if($js$7)
            {var padty$4=padty$3;
             return function(w$3,p$2,x)
              {var $js$8=trans$1(iconv,x);
               var $js$9=fix_int_precision(p$2,$js$8);
               var str=fix_padding(padty$4,w$3,$js$9);
               return make_printf(k,o,[4,acc,str],fmt)}}
           else
            {return function(w$3,x)
              {var $js$8=trans$1(iconv,x);
               var str=fix_padding(padty$3,w$3,$js$8);
               return make_printf(k,o,[4,acc,str],fmt)}}}
         else
          {var padty$5=padty$3;
           var p$2=match$1[1];
           return function(w$3,x)
            {var $js$8=trans$1(iconv,x);
             var $js$9=fix_int_precision(p$2,$js$8);
             var str=fix_padding(padty$5,w$3,$js$9);
             return make_printf(k,o,[4,acc,str],fmt)}}}}};
var
 make_float_padding_precision=
  function(k,o,acc,fmt,pad,prec,fconv)
   {var match=pad;
    var match$1=prec;
    var $js=match;
    if(typeof $js=="number")
     {if($js==0)
       {var $js$1="unknown primitive:isint";
        if($js$1)
         {var $js$2=match$1!=0;
          if($js$2)
           {return function(p,x)
             {var str=convert_float(fconv,p,x);
              return make_printf(k,o,[4,acc,str],fmt)}}
          else
           {return function(x)
             {var str=convert_float(fconv,default_float_precision,x);
              return make_printf(k,o,[4,acc,str],fmt)}}}
        else
         {var p=match$1[1];
          return function(x)
           {var str=convert_float(fconv,p,x);
            return make_printf(k,o,[4,acc,str],fmt)}}}}
    else
     {var $js$3=$js[0];
      if($js$3==0)
       {var w=match[2];
        var padty=match[1];
        var $js$4="unknown primitive:isint";
        if($js$4)
         {var $js$5=match$1!=0;
          if($js$5)
           {var w$1=w;
            var padty$1=padty;
            return function(p$1,x)
             {var $js$6=convert_float(fconv,p$1,x);
              var str=fix_padding(padty$1,w$1,$js$6);
              return make_printf(k,o,[4,acc,str],fmt)}}
          else
           {return function(x)
             {var str=convert_float(fconv,default_float_precision,x);
              var str'=fix_padding(padty,w,str);
              return make_printf(k,o,[4,acc,str'],fmt)}}}
        else
         {var w$2=w;
          var padty$2=padty;
          var p$1=match$1[1];
          return function(x)
           {var $js$6=convert_float(fconv,p$1,x);
            var str=fix_padding(padty$2,w$2,$js$6);
            return make_printf(k,o,[4,acc,str],fmt)}}}
      else
       if($js$3==1)
        {var padty$3=match[1];
         var $js$6="unknown primitive:isint";
         if($js$6)
          {var $js$7=match$1!=0;
           if($js$7)
            {var padty$4=padty$3;
             return function(w$3,p$2,x)
              {var $js$8=convert_float(fconv,p$2,x);
               var str=fix_padding(padty$4,w$3,$js$8);
               return make_printf(k,o,[4,acc,str],fmt)}}
           else
            {return function(w$3,x)
              {var str=convert_float(fconv,default_float_precision,x);
               var str'=fix_padding(padty$3,w$3,str);
               return make_printf(k,o,[4,acc,str'],fmt)}}}
         else
          {var padty$5=padty$3;
           var p$2=match$1[1];
           return function(w$3,x)
            {var $js$8=convert_float(fconv,p$2,x);
             var str=fix_padding(padty$5,w$3,$js$8);
             return make_printf(k,o,[4,acc,str],fmt)}}}}};
var
 make_custom=
  function(k,o,acc,rest,arity,f)
   {var $js=arity;
    if($js)
     {var arity$1=arity[1];
      return function(x)
       {var $js$1=f(x);return make_custom(k,o,acc,rest,arity$1,$js$1)}}
    else
     {return make_printf(k,o,[4,acc,f],rest)}};
var
 output_acc=
  function(o,acc)
   {var $js=acc;
    if(typeof $js=="number")
     {if($js==0){return 0}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var fmting_lit=acc[2];
        var p=acc[1];
        var s=string_of_formatting_lit(fmting_lit);
        output_acc(o,p);
        var $js$2=Pervasives["output_string"];
        return $js$2(o,s)}
      else
       if($js$1==1)
        {var match=acc[2];
         var p$1=acc[1];
         var $js$3=match;
         if($js$3==0)
          {var acc'=match[1];
           output_acc(o,p$1);
           var $js$4=Pervasives["output_string"];
           $js$4(o,"@{");
           return output_acc(o,acc')}
         else
          if($js$3==1)
           {var p$2=p$1;
            var acc'$1=match[1];
            output_acc(o,p$2);
            var $js$5=Pervasives["output_string"];
            $js$5(o,"@[");
            return output_acc(o,acc'$1)}}
       else
        if($js$1==2)
         {var exit=215}
        else
         if($js$1==3)
          {var exit=216}
         else
          if($js$1==4)
           {var exit=215}
          else
           if($js$1==5)
            {var exit=216}
           else
            if($js$1==6)
             {var f=acc[2];var p$3=acc[1];output_acc(o,p$3);return f(o)}
            else
             if($js$1==7)
              {var p$4=acc[1];
               output_acc(o,p$4);
               var $js$6=Pervasives["flush"];
               return $js$6(o)}
             else
              if($js$1==8)
               {var msg=acc[2];
                var p$5=acc[1];
                output_acc(o,p$5);
                var $js$7=Pervasives["invalid_arg"];
                return $js$7(msg)}}
    switch(exit)
     {case 215:
       var s$1=acc[2];
       var p$6=acc[1];
       var p$7=p$6;
       var s$2=s$1;
       output_acc(o,p$7);
       var $js$8=Pervasives["output_string"];
       return $js$8(o,s$2);
      case 216:
       var c=acc[2];
       var p$8=acc[1];
       var p$9=p$8;
       var c$1=c;
       output_acc(o,p$9);
       var $js$9=Pervasives["output_char"];
       return $js$9(o,c$1)
      }};
var
 bufput_acc=
  function(b,acc)
   {var $js=acc;
    if(typeof $js=="number")
     {if($js==0){return 0}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var fmting_lit=acc[2];
        var p=acc[1];
        var s=string_of_formatting_lit(fmting_lit);
        bufput_acc(b,p);
        var $js$2=Buffer["add_string"];
        return $js$2(b,s)}
      else
       if($js$1==1)
        {var match=acc[2];
         var p$1=acc[1];
         var $js$3=match;
         if($js$3==0)
          {var acc'=match[1];
           bufput_acc(b,p$1);
           var $js$4=Buffer["add_string"];
           $js$4(b,"@{");
           return bufput_acc(b,acc')}
         else
          if($js$3==1)
           {var p$2=p$1;
            var acc'$1=match[1];
            bufput_acc(b,p$2);
            var $js$5=Buffer["add_string"];
            $js$5(b,"@[");
            return bufput_acc(b,acc'$1)}}
       else
        if($js$1==2)
         {var exit=210}
        else
         if($js$1==3)
          {var exit=211}
         else
          if($js$1==4)
           {var exit=210}
          else
           if($js$1==5)
            {var exit=211}
           else
            if($js$1==6)
             {var f=acc[2];var p$3=acc[1];bufput_acc(b,p$3);return f(b)}
            else
             if($js$1==7)
              {var p$4=acc[1];return bufput_acc(b,p$4)}
             else
              if($js$1==8)
               {var msg=acc[2];
                var p$5=acc[1];
                bufput_acc(b,p$5);
                var $js$6=Pervasives["invalid_arg"];
                return $js$6(msg)}}
    switch(exit)
     {case 210:
       var s$1=acc[2];
       var p$6=acc[1];
       var p$7=p$6;
       var s$2=s$1;
       bufput_acc(b,p$7);
       var $js$7=Buffer["add_string"];
       return $js$7(b,s$2);
      case 211:
       var c=acc[2];
       var p$8=acc[1];
       var p$9=p$8;
       var c$1=c;
       bufput_acc(b,p$9);
       var $js$8=Buffer["add_char"];
       return $js$8(b,c$1)
      }};
var
 strput_acc=
  function(b,acc)
   {var $js=acc;
    if(typeof $js=="number")
     {if($js==0){return 0}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var fmting_lit=acc[2];
        var p=acc[1];
        var s=string_of_formatting_lit(fmting_lit);
        strput_acc(b,p);
        var $js$2=Buffer["add_string"];
        return $js$2(b,s)}
      else
       if($js$1==1)
        {var match=acc[2];
         var p$1=acc[1];
         var $js$3=match;
         if($js$3==0)
          {var acc'=match[1];
           strput_acc(b,p$1);
           var $js$4=Buffer["add_string"];
           $js$4(b,"@{");
           return strput_acc(b,acc')}
         else
          if($js$3==1)
           {var p$2=p$1;
            var acc'$1=match[1];
            strput_acc(b,p$2);
            var $js$5=Buffer["add_string"];
            $js$5(b,"@[");
            return strput_acc(b,acc'$1)}}
       else
        if($js$1==2)
         {var exit=205}
        else
         if($js$1==3)
          {var exit=206}
         else
          if($js$1==4)
           {var exit=205}
          else
           if($js$1==5)
            {var exit=206}
           else
            if($js$1==6)
             {var f=acc[2];
              var p$3=acc[1];
              strput_acc(b,p$3);
              var $js$6=Buffer["add_string"];
              var $js$7=f(0);
              return $js$6(b,$js$7)}
            else
             if($js$1==7)
              {var p$4=acc[1];return strput_acc(b,p$4)}
             else
              if($js$1==8)
               {var msg=acc[2];
                var p$5=acc[1];
                strput_acc(b,p$5);
                var $js$8=Pervasives["invalid_arg"];
                return $js$8(msg)}}
    switch(exit)
     {case 205:
       var s$1=acc[2];
       var p$6=acc[1];
       var p$7=p$6;
       var s$2=s$1;
       strput_acc(b,p$7);
       var $js$9=Buffer["add_string"];
       return $js$9(b,s$2);
      case 206:
       var c=acc[2];
       var p$8=acc[1];
       var p$9=p$8;
       var c$1=c;
       strput_acc(b,p$9);
       var $js$10=Buffer["add_char"];
       return $js$10(b,c$1)
      }};
var
 failwith_message=
  function(param)
   {var fmt=param[1];
    var $js=Buffer["create"];
    var buf=$js(256);
    var
     k=
      function(param$1,acc)
       {strput_acc(buf,acc);
        var $js$1=Pervasives["failwith"];
        var $js$2=Buffer["contents"];
        var $js$3=$js$2(buf);
        return $js$1($js$3)};
    return make_printf(k,0,0,fmt)};
var
 open_box_of_string=
  function(str)
   {var $js="unknown primitive:caml_string_equal";
    if($js)
     {return [0,0,4]}
    else
     {var len=str["length"];
      var
       invalid_box=
        function(param)
         {return failwith_message
                  ([0,
                    [11,"invalid box description ",[3,0,0]],
                    "invalid box description %S"],
                   str)};
      var
       parse_spaces=
        function(i)
         {var $js$1=i=len;
          if($js$1)
           {return i}
          else
           {var match=str[i];
            var $js$2=match!=9;
            if($js$2)
             {var $js$3=match!=32;if($js$3){return i}else{var exit=190}}
            else
             {var exit=190}
            switch(exit){case 190:return parse_spaces(i+1)}}};
      var
       parse_lword=
        function(i,j)
         {var $js$1=j=len;
          if($js$1)
           {return j}
          else
           {var match=str[j];
            var switcher=-97+match;
            var $js$2=25<switcher>>>0;
            if($js$2){return j}else{return parse_lword(i,j+1)}}};
      var
       parse_int=
        function(i,j)
         {var $js$1=j=len;
          if($js$1)
           {return j}
          else
           {var match=str[j];
            var $js$2=match>=48;
            if($js$2)
             {var $js$3=match>=58;if($js$3){var exit=195}else{var exit=194}}
            else
             {var $js$4=match!=45;if($js$4){var exit=195}else{var exit=194}}
            switch(exit){case 195:return j;case 194:return parse_int(i,j+1)}}};
      var wstart=parse_spaces(0);
      var wend=parse_lword(wstart,wstart);
      var $js$1=String["sub"];
      var box_name=$js$1(str,wstart,wend-wstart);
      var nstart=parse_spaces(wend);
      var nend=parse_int(nstart,nstart);
      var $js$2=nstart=nend;
      if($js$2)
       {var indent=0}
      else
       {try
         {var $js$3=String["sub"];
          var $js$4=$js$3(str,nstart,nend-nstart);
          var indent="unknown primitive:caml_int_of_string"}
        catch(exn)
         {var tag=exn[1];
          var $js$5=tag=Failure;
          if($js$5)
           {var indent=invalid_box(0)}
          else
           {var indent="unknown primitive:reraise"}}}
      var exp_end=parse_spaces(nend);
      var $js$6=exp_end!=len;
      if($js$6){var match=invalid_box(0)}else{var match=0}
      var $js$7=box_name;
      if($js$7=="")
       {var exit=178}
      else
       if($js$7=="b")
        {var exit=178}
       else
        if($js$7=="h")
         {var box_type=0}
        else
         if($js$7=="hov")
          {var box_type=3}
         else
          if($js$7=="hv")
           {var box_type=2}
          else
           if($js$7=="v"){var box_type=1}else{var exit=179}
      switch(exit)
       {case 179:var box_type=invalid_box(0);case 178:var box_type=4}
      return [0,indent,box_type]}};
var
 make_padding_fmt_ebb=
  function(pad,fmt)
   {var $js=pad;
    if(typeof $js=="number")
     {if($js==0){return [0,0,fmt]}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var w=pad[2];var s=pad[1];return [0,[0,s,w],fmt]}
      else
       if($js$1==1){var s$1=pad[1];return [0,[1,s$1],fmt]}}};
var
 make_precision_fmt_ebb=
  function(prec,fmt)
   {var $js="unknown primitive:isint";
    if($js)
     {var $js$1=prec!=0;if($js$1){return [0,1,fmt]}else{return [0,0,fmt]}}
    else
     {var p=prec[1];return [0,[0,p],fmt]}};
var
 make_padprec_fmt_ebb=
  function(pad,prec,fmt)
   {var match=make_precision_fmt_ebb(prec,fmt);
    var fmt'=match[2];
    var prec$1=match[1];
    var $js=pad;
    if(typeof $js=="number")
     {if($js==0){return [0,0,prec$1,fmt']}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var w=pad[2];var s=pad[1];return [0,[0,s,w],prec$1,fmt']}
      else
       if($js$1==1){var s$1=pad[1];return [0,[1,s$1],prec$1,fmt']}}};
var
 fmt_ebb_of_string=
  function(legacy_behavior,str)
   {var $js=legacy_behavior;
    if($js)
     {var flag=legacy_behavior[1];var legacy_behavior$1=flag}
    else
     {var legacy_behavior$1=1}
    var
     invalid_format_message=
      function(str_ind,msg)
       {return failwith_message
                ([0,
                  [11,
                   "invalid format ",
                   [3,
                    0,
                    [11,": at character number ",[4,0,0,0,[11,", ",[2,0,0]]]]]],
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
                ([0,
                  [11,
                   "invalid format ",
                   [3,
                    0,
                    [11,
                     ": at character number ",
                     [4,0,0,0,[11,", '",[0,[11,"' without ",[2,0,0]]]]]]]],
                  "invalid format %S: at character number %d, '%c' without %s"],
                 str,
                 str_ind,
                 c,
                 s)};
    var
     expected_character=
      function(str_ind,expected,read)
       {return failwith_message
                ([0,
                  [11,
                   "invalid format ",
                   [3,
                    0,
                    [11,
                     ": at character number ",
                     [4,0,0,0,[11,", ",[2,0,[11," expected, read ",[1,0]]]]]]]],
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
       {var $js$1=str_ind=end_ind;
        if($js$1)
         {return add_literal(lit_start,str_ind,0)}
        else
         {var match=str[str_ind];
          var $js$2=match!=37;
          if($js$2)
           {var $js$3=match!=64;
            if($js$3)
             {return parse_literal(lit_start,str_ind+1,end_ind)}
            else
             {var match$1=parse_after_at(str_ind+1,end_ind);
              var fmt_rest=match$1[1];
              return add_literal(lit_start,str_ind,fmt_rest)}}
          else
           {var match$2=parse_format(str_ind,end_ind);
            var fmt_rest$1=match$2[1];
            return add_literal(lit_start,str_ind,fmt_rest$1)}}};
    var
     parse_format=
      function(pct_ind,end_ind){return parse_ign(pct_ind,pct_ind+1,end_ind)};
    var
     parse_ign=
      function(pct_ind,str_ind,end_ind)
       {var $js$1=str_ind=end_ind;
        if($js$1){unexpected_end_of_format(end_ind)}else{}
        var match=str[str_ind];
        var $js$2=match!=95;
        if($js$2)
         {return parse_flags(pct_ind,str_ind,end_ind,0)}
        else
         {return parse_flags(pct_ind,str_ind+1,end_ind,1)}};
    var
     parse_flags=
      function(pct_ind,str_ind,end_ind,ign)
       {var zero=[0,0];
        var minus=[0,0];
        var plus=[0,0];
        var space=[0,0];
        var sharp=[0,0];
        var
         set_flag=
          function(str_ind$1,flag$1)
           {var $js$1=flag$1[1]&&!legacy_behavior$1;
            if($js$1)
             {var $js$2=str[str_ind$1];
              failwith_message
               ([0,
                 [11,
                  "invalid format ",
                  [3,
                   0,
                   [11,
                    ": at character number ",
                    [4,0,0,0,[11,", duplicate flag ",[1,0]]]]]],
                 "invalid format %S: at character number %d, duplicate flag %C"],
                str,
                str_ind$1,
                $js$2)}
            else
             {}
            return flag$1[1]=1,0};
        var
         read_flags=
          function(str_ind$1)
           {var $js$1=str_ind$1=end_ind;
            if($js$1){unexpected_end_of_format(end_ind)}else{}
            var match=str[str_ind$1];
            var switcher=-32+match;
            var $js$2=16<switcher>>>0;
            if($js$2)
             {var exit=7}
            else
             {var $js$3=switcher;
              var $js$4=$js$3[0];
              if($js$4==0)
               {set_flag(str_ind$1,space);return read_flags(str_ind$1+1)}
              else
               if($js$4==1)
                {var exit=7}
               else
                if($js$4==2)
                 {var exit=7}
                else
                 if($js$4==3)
                  {set_flag(str_ind$1,sharp);return read_flags(str_ind$1+1)}
                 else
                  if($js$4==4)
                   {var exit=7}
                  else
                   if($js$4==5)
                    {var exit=7}
                   else
                    if($js$4==6)
                     {var exit=7}
                    else
                     if($js$4==7)
                      {var exit=7}
                     else
                      if($js$4==8)
                       {var exit=7}
                      else
                       if($js$4==9)
                        {var exit=7}
                       else
                        if($js$4==10)
                         {var exit=7}
                        else
                         if($js$4==11)
                          {set_flag(str_ind$1,plus);return read_flags(str_ind$1+1)}
                         else
                          if($js$4==12)
                           {var exit=7}
                          else
                           if($js$4==13)
                            {set_flag(str_ind$1,minus);return read_flags(str_ind$1+1)}
                           else
                            if($js$4==14)
                             {var exit=7}
                            else
                             if($js$4==15)
                              {var exit=7}
                             else
                              if($js$4==16)
                               {set_flag(str_ind$1,zero);return read_flags(str_ind$1+1)}}
            switch(exit)
             {case 7:
               return parse_padding
                       (pct_ind,
                        str_ind$1,
                        end_ind,
                        zero[1],
                        minus[1],
                        plus[1],
                        sharp[1],
                        space[1],
                        ign)
              }};
        return read_flags(str_ind)};
    var
     parse_padding=
      function(pct_ind,str_ind,end_ind,zero,minus,plus,sharp,space,ign)
       {var $js$1=str_ind=end_ind;
        if($js$1){unexpected_end_of_format(end_ind)}else{}
        var match=zero;
        var match$1=minus;
        var $js$2=match!=0;
        if($js$2)
         {var $js$3=match$1!=0;
          if($js$3)
           {var $js$4=legacy_behavior$1;
            if($js$4)
             {var padty=0}
            else
             {var padty=incompatible_flag(pct_ind,str_ind,45,"0")}}
          else
           {var padty=2}}
        else
         {var $js$5=match$1!=0;if($js$5){var padty=0}else{var padty=1}}
        var match$2=str[str_ind];
        var $js$6=match$2>=48;
        if($js$6)
         {var $js$7=match$2>=58;
          if($js$7)
           {var exit=16}
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
                     [0,padty,width])}}
        else
         {var $js$8=match$2!=42;
          if($js$8)
           {var exit=16}
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
                     [1,padty])}}
        switch(exit)
         {case 16:
           var $js$9=padty;
           var $js$10=$js$9[0];
           if($js$10==0)
            {var $js$11=!legacy_behavior$1;
             if($js$11){invalid_format_without(str_ind-1,45,"padding")}else{}
             return parse_after_padding
                     (pct_ind,str_ind,end_ind,minus,plus,sharp,space,ign,0)}
           else
            if($js$10==1)
             {return parse_after_padding
                      (pct_ind,str_ind,end_ind,minus,plus,sharp,space,ign,0)}
            else
             if($js$10==2)
              {return parse_after_padding
                       (pct_ind,str_ind,end_ind,minus,plus,sharp,space,ign,[0,1,0])}
          }};
    var
     parse_after_padding=
      function(pct_ind,str_ind,end_ind,minus,plus,sharp,space,ign,pad)
       {var $js$1=str_ind=end_ind;
        if($js$1){unexpected_end_of_format(end_ind)}else{}
        var symb=str[str_ind];
        var $js$2=symb!=46;
        if($js$2)
         {return parse_conversion
                  (pct_ind,
                   str_ind+1,
                   end_ind,
                   plus,
                   sharp,
                   space,
                   ign,
                   pad,
                   0,
                   pad,
                   symb)}
        else
         {return parse_precision
                  (pct_ind,str_ind+1,end_ind,minus,plus,sharp,space,ign,pad)}};
    var
     parse_precision=
      function(pct_ind,str_ind,end_ind,minus,plus,sharp,space,ign,pad)
       {var $js$1=str_ind=end_ind;
        if($js$1){unexpected_end_of_format(end_ind)}else{}
        var
         parse_literal$1=
          function(minus$1,str_ind$1)
           {var match=parse_positive(str_ind$1,end_ind,0);
            var prec=match[2];
            var new_ind=match[1];
            return parse_after_precision
                    (pct_ind,
                     new_ind,
                     end_ind,
                     minus$1,
                     plus,
                     sharp,
                     space,
                     ign,
                     pad,
                     [0,prec])};
        var symb=str[str_ind];
        var $js$2=symb>=48;
        if($js$2)
         {var $js$3=symb>=58;
          if($js$3){var exit=19}else{return parse_literal$1(minus,str_ind)}}
        else
         {var $js$4=symb>=42;
          if($js$4)
           {var switcher=-42+symb;
            var $js$5=switcher;
            var $js$6=$js$5[0];
            if($js$6==0)
             {return parse_after_precision
                      (pct_ind,str_ind+1,end_ind,minus,plus,sharp,space,ign,pad,1)}
            else
             if($js$6==1)
              {var exit=21}
             else
              if($js$6==2)
               {var exit=19}
              else
               if($js$6==3)
                {var exit=21}
               else
                if($js$6==4){var exit=19}else if($js$6==5){var exit=19}}
          else
           {var exit=19}}
        switch(exit)
         {case 21:
           var $js$7=legacy_behavior$1;
           if($js$7)
            {return parse_literal$1(minus||(symb=45),str_ind+1)}
           else
            {"unknown block:(exit 19)"}
          case 19:
           var $js$8=legacy_behavior$1;
           if($js$8)
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
                      [0,0])}
           else
            {return invalid_format_without(str_ind-1,46,"precision")}
          }};
    var
     parse_after_precision=
      function(pct_ind,str_ind,end_ind,minus,plus,sharp,space,ign,pad,prec)
       {var $js$1=str_ind=end_ind;
        if($js$1){unexpected_end_of_format(end_ind)}else{}
        var
         parse_conv=
          function(padprec)
           {var $js$2=str[str_ind];
            return parse_conversion
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
                     $js$2)};
        var $js$2="unknown primitive:isint";
        if($js$2)
         {var match=minus;
          var match$1=prec;
          var $js$3="unknown primitive:isint";
          if($js$3)
           {var $js$4=match$1!=0;
            if($js$4){var exit=24}else{return parse_conv(0)}}
          else
           {var exit=24}
          switch(exit)
           {case 24:
             var $js$5=match!=0;
             if($js$5)
              {var $js$6="unknown primitive:isint";
               if($js$6)
                {return parse_conv([1,0])}
               else
                {var n=match$1[1];return parse_conv([0,0,n])}}
             else
              {var $js$7="unknown primitive:isint";
               if($js$7)
                {return parse_conv([1,1])}
               else
                {var n$1=match$1[1];return parse_conv([0,1,n$1])}}
            }}
        else
         {var pad$1=pad;return parse_conv(pad$1)}};
    var
     parse_conversion=
      function
       (pct_ind,str_ind,end_ind,plus,sharp,space,ign,pad,prec,padprec,symb)
       {var plus_used=[0,0];
        var sharp_used=[0,0];
        var space_used=[0,0];
        var ign_used=[0,0];
        var pad_used=[0,0];
        var prec_used=[0,0];
        var get_plus=function(param){plus_used[1]=1,0;return plus};
        var get_sharp=function(param){sharp_used[1]=1,0;return sharp};
        var get_space=function(param){space_used[1]=1,0;return space};
        var get_ign=function(param){ign_used[1]=1,0;return ign};
        var get_pad=function(param){pad_used[1]=1,0;return pad};
        var get_prec=function(param){prec_used[1]=1,0;return prec};
        var get_padprec=function(param){pad_used[1]=1,0;return padprec};
        var
         check_no_0=
          function(symb$1,pad$1)
           {var $js$1=pad$1;
            if(typeof $js$1=="number")
             {if($js$1==0){return pad$1}}
            else
             {var $js$2=$js$1[0];
              if($js$2==0)
               {var match=pad$1[1];
                var $js$3=match>=2;
                if($js$3)
                 {var width=pad$1[2];
                  var $js$4=legacy_behavior$1;
                  if($js$4)
                   {return [0,1,width]}
                  else
                   {return incompatible_flag(pct_ind,str_ind,symb$1,"0")}}
                else
                 {return pad$1}}
              else
               if($js$2==1)
                {var match$1=pad$1[1];
                 var $js$5=match$1>=2;
                 if($js$5)
                  {var $js$6=legacy_behavior$1;
                   if($js$6)
                    {return [1,1]}
                   else
                    {return incompatible_flag(pct_ind,str_ind,symb$1,"0")}}
                 else
                  {return pad$1}}}};
        var
         opt_of_pad=
          function(c,pad$1)
           {var $js$1=pad$1;
            if(typeof $js$1=="number")
             {if($js$1==0){return 0}}
            else
             {var $js$2=$js$1[0];
              if($js$2==0)
               {var match=pad$1[1];
                var $js$3=match;
                var $js$4=$js$3[0];
                if($js$4==0)
                 {var width=pad$1[2];
                  var $js$5=legacy_behavior$1;
                  if($js$5)
                   {return [0,width]}
                  else
                   {return incompatible_flag(pct_ind,str_ind,c,"'-'")}}
                else
                 if($js$4==1)
                  {var width$1=pad$1[2];return [0,width$1]}
                 else
                  if($js$4==2)
                   {var width$2=pad$1[2];
                    var $js$6=legacy_behavior$1;
                    if($js$6)
                     {return [0,width$2]}
                    else
                     {return incompatible_flag(pct_ind,str_ind,c,"'0'")}}}
              else
               if($js$2==1){return incompatible_flag(pct_ind,str_ind,c,"'*'")}}};
        var
         get_pad_opt=
          function(c){var $js$1=get_pad(0);return opt_of_pad(c,$js$1)};
        var
         get_padprec_opt=
          function(c){var $js$1=get_padprec(0);return opt_of_pad(c,$js$1)};
        var
         get_prec_opt=
          function(param)
           {var match=get_prec(0);
            var $js$1="unknown primitive:isint";
            if($js$1)
             {var $js$2=match!=0;
              if($js$2)
               {return incompatible_flag(pct_ind,str_ind,95,"'*'")}
              else
               {return 0}}
            else
             {var ndec=match[1];return [0,ndec]}};
        var $js$1=symb>=124;
        if($js$1)
         {var exit=63}
        else
         {var $js$2=symb;
          var $js$3=$js$2[0];
          if($js$3==0)
           {var exit=63}
          else
           if($js$3==1)
            {var exit=63}
           else
            if($js$3==2)
             {var exit=63}
            else
             if($js$3==3)
              {var exit=63}
             else
              if($js$3==4)
               {var exit=63}
              else
               if($js$3==5)
                {var exit=63}
               else
                if($js$3==6)
                 {var exit=63}
                else
                 if($js$3==7)
                  {var exit=63}
                 else
                  if($js$3==8)
                   {var exit=63}
                  else
                   if($js$3==9)
                    {var exit=63}
                   else
                    if($js$3==10)
                     {var exit=63}
                    else
                     if($js$3==11)
                      {var exit=63}
                     else
                      if($js$3==12)
                       {var exit=63}
                      else
                       if($js$3==13)
                        {var exit=63}
                       else
                        if($js$3==14)
                         {var exit=63}
                        else
                         if($js$3==15)
                          {var exit=63}
                         else
                          if($js$3==16)
                           {var exit=63}
                          else
                           if($js$3==17)
                            {var exit=63}
                           else
                            if($js$3==18)
                             {var exit=63}
                            else
                             if($js$3==19)
                              {var exit=63}
                             else
                              if($js$3==20)
                               {var exit=63}
                              else
                               if($js$3==21)
                                {var exit=63}
                               else
                                if($js$3==22)
                                 {var exit=63}
                                else
                                 if($js$3==23)
                                  {var exit=63}
                                 else
                                  if($js$3==24)
                                   {var exit=63}
                                  else
                                   if($js$3==25)
                                    {var exit=63}
                                   else
                                    if($js$3==26)
                                     {var exit=63}
                                    else
                                     if($js$3==27)
                                      {var exit=63}
                                     else
                                      if($js$3==28)
                                       {var exit=63}
                                      else
                                       if($js$3==29)
                                        {var exit=63}
                                       else
                                        if($js$3==30)
                                         {var exit=63}
                                        else
                                         if($js$3==31)
                                          {var exit=63}
                                         else
                                          if($js$3==32)
                                           {var exit=69}
                                          else
                                           if($js$3==33)
                                            {var match=parse(str_ind,end_ind);
                                             var fmt_rest=match[1];
                                             var fmt_result=[0,[10,fmt_rest]]}
                                           else
                                            if($js$3==34)
                                             {var exit=63}
                                            else
                                             if($js$3==35)
                                              {var exit=69}
                                             else
                                              if($js$3==36)
                                               {var exit=63}
                                              else
                                               if($js$3==37)
                                                {var exit=68}
                                               else
                                                if($js$3==38)
                                                 {var exit=63}
                                                else
                                                 if($js$3==39)
                                                  {var exit=63}
                                                 else
                                                  if($js$3==40)
                                                   {var sub_end=search_subformat_end(str_ind,end_ind,41);
                                                    var match$1=parse(sub_end+2,end_ind);
                                                    var fmt_rest$1=match$1[1];
                                                    var match$2=parse(str_ind,sub_end);
                                                    var sub_fmt=match$2[1];
                                                    var sub_fmtty=fmtty_of_fmt(sub_fmt);
                                                    var $js$4=get_ign(0);
                                                    if($js$4)
                                                     {var $js$5=get_pad_opt(95);
                                                      var ignored=[8,$js$5,sub_fmtty];
                                                      var fmt_result=[0,[23,ignored,fmt_rest$1]]}
                                                    else
                                                     {var $js$6=get_pad_opt(40);
                                                      var $js$7=[14,$js$6,sub_fmtty,fmt_rest$1];
                                                      var fmt_result=[0,$js$7]}}
                                                  else
                                                   if($js$3==41)
                                                    {var exit=63}
                                                   else
                                                    if($js$3==42)
                                                     {var exit=63}
                                                    else
                                                     if($js$3==43)
                                                      {var exit=69}
                                                     else
                                                      if($js$3==44)
                                                       {var fmt_result=parse(str_ind,end_ind)}
                                                      else
                                                       if($js$3==45)
                                                        {var exit=69}
                                                       else
                                                        if($js$3==46)
                                                         {var exit=63}
                                                        else
                                                         if($js$3==47)
                                                          {var exit=63}
                                                         else
                                                          if($js$3==48)
                                                           {var exit=63}
                                                          else
                                                           if($js$3==49)
                                                            {var exit=63}
                                                           else
                                                            if($js$3==50)
                                                             {var exit=63}
                                                            else
                                                             if($js$3==51)
                                                              {var exit=63}
                                                             else
                                                              if($js$3==52)
                                                               {var exit=63}
                                                              else
                                                               if($js$3==53)
                                                                {var exit=63}
                                                               else
                                                                if($js$3==54)
                                                                 {var exit=63}
                                                                else
                                                                 if($js$3==55)
                                                                  {var exit=63}
                                                                 else
                                                                  if($js$3==56)
                                                                   {var exit=63}
                                                                  else
                                                                   if($js$3==57)
                                                                    {var exit=63}
                                                                   else
                                                                    if($js$3==58)
                                                                     {var exit=63}
                                                                    else
                                                                     if($js$3==59)
                                                                      {var exit=63}
                                                                     else
                                                                      if($js$3==60)
                                                                       {var exit=63}
                                                                      else
                                                                       if($js$3==61)
                                                                        {var exit=63}
                                                                       else
                                                                        if($js$3==62)
                                                                         {var exit=63}
                                                                        else
                                                                         if($js$3==63)
                                                                          {var exit=63}
                                                                         else
                                                                          if($js$3==64)
                                                                           {var exit=68}
                                                                          else
                                                                           if($js$3==65)
                                                                            {var exit=63}
                                                                           else
                                                                            if($js$3==66)
                                                                             {var exit=67}
                                                                            else
                                                                             if($js$3==67)
                                                                              {var match$3=parse(str_ind,end_ind);
                                                                               var fmt_rest$2=match$3[1];
                                                                               var $js$8=get_ign(0);
                                                                               if($js$8)
                                                                                {var fmt_result=[0,[23,1,fmt_rest$2]]}
                                                                               else
                                                                                {var fmt_result=[0,[1,fmt_rest$2]]}}
                                                                             else
                                                                              if($js$3==68)
                                                                               {var exit=63}
                                                                              else
                                                                               if($js$3==69)
                                                                                {var exit=66}
                                                                               else
                                                                                if($js$3==70)
                                                                                 {var exit=66}
                                                                                else
                                                                                 if($js$3==71)
                                                                                  {var exit=66}
                                                                                 else
                                                                                  if($js$3==72)
                                                                                   {var exit=63}
                                                                                  else
                                                                                   if($js$3==73)
                                                                                    {var exit=63}
                                                                                   else
                                                                                    if($js$3==74)
                                                                                     {var exit=63}
                                                                                    else
                                                                                     if($js$3==75)
                                                                                      {var exit=63}
                                                                                     else
                                                                                      if($js$3==76)
                                                                                       {var exit=65}
                                                                                      else
                                                                                       if($js$3==77)
                                                                                        {var exit=63}
                                                                                       else
                                                                                        if($js$3==78)
                                                                                         {var match$4=parse(str_ind,end_ind);
                                                                                          var fmt_rest$3=match$4[1];
                                                                                          var counter=2;
                                                                                          var $js$9=get_ign(0);
                                                                                          if($js$9)
                                                                                           {var ignored$1=[10,counter];
                                                                                            var fmt_result=[0,[23,ignored$1,fmt_rest$3]]}
                                                                                          else
                                                                                           {var fmt_result=[0,[21,counter,fmt_rest$3]]}}
                                                                                        else
                                                                                         if($js$3==79)
                                                                                          {var exit=63}
                                                                                         else
                                                                                          if($js$3==80)
                                                                                           {var exit=63}
                                                                                          else
                                                                                           if($js$3==81)
                                                                                            {var exit=63}
                                                                                           else
                                                                                            if($js$3==82)
                                                                                             {var exit=63}
                                                                                            else
                                                                                             if($js$3==83)
                                                                                              {var $js$10=get_padprec(0);
                                                                                               var pad$1=check_no_0(symb,$js$10);
                                                                                               var match$5=parse(str_ind,end_ind);
                                                                                               var fmt_rest$4=match$5[1];
                                                                                               var $js$11=get_ign(0);
                                                                                               if($js$11)
                                                                                                {var $js$12=get_padprec_opt(95);
                                                                                                 var ignored$2=[1,$js$12];
                                                                                                 var fmt_result=[0,[23,ignored$2,fmt_rest$4]]}
                                                                                               else
                                                                                                {var match$6=make_padding_fmt_ebb(pad$1,fmt_rest$4);
                                                                                                 var fmt_rest'=match$6[2];
                                                                                                 var pad'=match$6[1];
                                                                                                 var fmt_result=[0,[3,pad',fmt_rest']]}}
                                                                                             else
                                                                                              if($js$3==84)
                                                                                               {var exit=63}
                                                                                              else
                                                                                               if($js$3==85)
                                                                                                {var exit=63}
                                                                                               else
                                                                                                if($js$3==86)
                                                                                                 {var exit=63}
                                                                                                else
                                                                                                 if($js$3==87)
                                                                                                  {var exit=63}
                                                                                                 else
                                                                                                  if($js$3==88)
                                                                                                   {var exit=64}
                                                                                                  else
                                                                                                   if($js$3==89)
                                                                                                    {var exit=63}
                                                                                                   else
                                                                                                    if($js$3==90)
                                                                                                     {var exit=63}
                                                                                                    else
                                                                                                     if($js$3==91)
                                                                                                      {var match$7=parse_char_set(str_ind,end_ind);
                                                                                                       var char_set=match$7[2];
                                                                                                       var next_ind=match$7[1];
                                                                                                       var match$8=parse(next_ind,end_ind);
                                                                                                       var fmt_rest$5=match$8[1];
                                                                                                       var $js$13=get_ign(0);
                                                                                                       if($js$13)
                                                                                                        {var $js$14=get_pad_opt(95);
                                                                                                         var ignored$3=[9,$js$14,char_set];
                                                                                                         var fmt_result=[0,[23,ignored$3,fmt_rest$5]]}
                                                                                                       else
                                                                                                        {var $js$15=get_pad_opt(91);
                                                                                                         var $js$16=[20,$js$15,char_set,fmt_rest$5];
                                                                                                         var fmt_result=[0,$js$16]}}
                                                                                                     else
                                                                                                      if($js$3==92)
                                                                                                       {var exit=63}
                                                                                                      else
                                                                                                       if($js$3==93)
                                                                                                        {var exit=63}
                                                                                                       else
                                                                                                        if($js$3==94)
                                                                                                         {var exit=63}
                                                                                                        else
                                                                                                         if($js$3==95)
                                                                                                          {var exit=69}
                                                                                                         else
                                                                                                          if($js$3==96)
                                                                                                           {var exit=63}
                                                                                                          else
                                                                                                           if($js$3==97)
                                                                                                            {var match$9=parse(str_ind,end_ind);
                                                                                                             var fmt_rest$6=match$9[1];
                                                                                                             var fmt_result=[0,[15,fmt_rest$6]]}
                                                                                                           else
                                                                                                            if($js$3==98)
                                                                                                             {var exit=67}
                                                                                                            else
                                                                                                             if($js$3==99)
                                                                                                              {var
                                                                                                                char_format=
                                                                                                                 function(fmt_rest$7)
                                                                                                                  {var $js$17=get_ign(0);
                                                                                                                   if($js$17)
                                                                                                                    {return [0,[23,0,fmt_rest$7]]}
                                                                                                                   else
                                                                                                                    {return [0,[0,fmt_rest$7]]}};
                                                                                                               var
                                                                                                                scan_format=
                                                                                                                 function(fmt_rest$7)
                                                                                                                  {var $js$17=get_ign(0);
                                                                                                                   if($js$17)
                                                                                                                    {return [0,[23,4,fmt_rest$7]]}
                                                                                                                   else
                                                                                                                    {return [0,[22,fmt_rest$7]]}};
                                                                                                               var match$10=parse(str_ind,end_ind);
                                                                                                               var fmt_rest$7=match$10[1];
                                                                                                               var match$11=get_pad_opt(99);
                                                                                                               var $js$17=match$11;
                                                                                                               if($js$17)
                                                                                                                {var _n=match$11[1];
                                                                                                                 var $js$18=_n!=0;
                                                                                                                 if($js$18)
                                                                                                                  {var $js$19=!legacy_behavior$1;
                                                                                                                   if($js$19)
                                                                                                                    {var fmt_result=invalid_nonnull_char_width(str_ind)}
                                                                                                                   else
                                                                                                                    {var fmt_result=char_format(fmt_rest$7)}}
                                                                                                                 else
                                                                                                                  {var fmt_result=scan_format(fmt_rest$7)}}
                                                                                                               else
                                                                                                                {var fmt_result=char_format(fmt_rest$7)}}
                                                                                                             else
                                                                                                              if($js$3==100)
                                                                                                               {var exit=64}
                                                                                                              else
                                                                                                               if($js$3==101)
                                                                                                                {var exit=66}
                                                                                                               else
                                                                                                                if($js$3==102)
                                                                                                                 {var exit=66}
                                                                                                                else
                                                                                                                 if($js$3==103)
                                                                                                                  {var exit=66}
                                                                                                                 else
                                                                                                                  if($js$3==104)
                                                                                                                   {var exit=63}
                                                                                                                  else
                                                                                                                   if($js$3==105)
                                                                                                                    {var exit=64}
                                                                                                                   else
                                                                                                                    if($js$3==106)
                                                                                                                     {var exit=63}
                                                                                                                    else
                                                                                                                     if($js$3==107)
                                                                                                                      {var exit=63}
                                                                                                                     else
                                                                                                                      if($js$3==108)
                                                                                                                       {var exit=65}
                                                                                                                      else
                                                                                                                       if($js$3==109)
                                                                                                                        {var exit=63}
                                                                                                                       else
                                                                                                                        if($js$3==110)
                                                                                                                         {var exit=65}
                                                                                                                        else
                                                                                                                         if($js$3==111)
                                                                                                                          {var exit=64}
                                                                                                                         else
                                                                                                                          if($js$3==112)
                                                                                                                           {var exit=63}
                                                                                                                          else
                                                                                                                           if($js$3==113)
                                                                                                                            {var exit=63}
                                                                                                                           else
                                                                                                                            if($js$3==114)
                                                                                                                             {var match$12=parse(str_ind,end_ind);
                                                                                                                              var fmt_rest$8=match$12[1];
                                                                                                                              var $js$20=get_ign(0);
                                                                                                                              if($js$20)
                                                                                                                               {var fmt_result=[0,[23,3,fmt_rest$8]]}
                                                                                                                              else
                                                                                                                               {var fmt_result=[0,[19,fmt_rest$8]]}}
                                                                                                                            else
                                                                                                                             if($js$3==115)
                                                                                                                              {var $js$21=get_padprec(0);
                                                                                                                               var pad$2=check_no_0(symb,$js$21);
                                                                                                                               var match$13=parse(str_ind,end_ind);
                                                                                                                               var fmt_rest$9=match$13[1];
                                                                                                                               var $js$22=get_ign(0);
                                                                                                                               if($js$22)
                                                                                                                                {var $js$23=get_padprec_opt(95);
                                                                                                                                 var ignored$4=[0,$js$23];
                                                                                                                                 var fmt_result=[0,[23,ignored$4,fmt_rest$9]]}
                                                                                                                               else
                                                                                                                                {var match$14=make_padding_fmt_ebb(pad$2,fmt_rest$9);
                                                                                                                                 var fmt_rest'$1=match$14[2];
                                                                                                                                 var pad'$1=match$14[1];
                                                                                                                                 var fmt_result=[0,[2,pad'$1,fmt_rest'$1]]}}
                                                                                                                             else
                                                                                                                              if($js$3==116)
                                                                                                                               {var match$15=parse(str_ind,end_ind);
                                                                                                                                var fmt_rest$10=match$15[1];
                                                                                                                                var fmt_result=[0,[16,fmt_rest$10]]}
                                                                                                                              else
                                                                                                                               if($js$3==117)
                                                                                                                                {var exit=64}
                                                                                                                               else
                                                                                                                                if($js$3==118)
                                                                                                                                 {var exit=63}
                                                                                                                                else
                                                                                                                                 if($js$3==119)
                                                                                                                                  {var exit=63}
                                                                                                                                 else
                                                                                                                                  if($js$3==120)
                                                                                                                                   {var exit=64}
                                                                                                                                  else
                                                                                                                                   if($js$3==121)
                                                                                                                                    {var exit=63}
                                                                                                                                   else
                                                                                                                                    if($js$3==122)
                                                                                                                                     {var exit=63}
                                                                                                                                    else
                                                                                                                                     if($js$3==123)
                                                                                                                                      {var sub_end$1=search_subformat_end(str_ind,end_ind,125);
                                                                                                                                       var match$16=parse(str_ind,sub_end$1);
                                                                                                                                       var sub_fmt$1=match$16[1];
                                                                                                                                       var match$17=parse(sub_end$1+2,end_ind);
                                                                                                                                       var fmt_rest$11=match$17[1];
                                                                                                                                       var sub_fmtty$1=fmtty_of_fmt(sub_fmt$1);
                                                                                                                                       var $js$24=get_ign(0);
                                                                                                                                       if($js$24)
                                                                                                                                        {var $js$25=get_pad_opt(95);
                                                                                                                                         var ignored$5=[7,$js$25,sub_fmtty$1];
                                                                                                                                         var fmt_result=[0,[23,ignored$5,fmt_rest$11]]}
                                                                                                                                       else
                                                                                                                                        {var $js$26=get_pad_opt(123);
                                                                                                                                         var $js$27=[13,$js$26,sub_fmtty$1,fmt_rest$11];
                                                                                                                                         var fmt_result=[0,$js$27]}}}
        switch(exit)
         {case 64:
           var $js$28=get_plus(0);
           var $js$29=get_sharp(0);
           var $js$30=get_space(0);
           var
            iconv=
             compute_int_conv(pct_ind,str_ind,$js$28,$js$29,$js$30,symb);
           var match$18=parse(str_ind,end_ind);
           var fmt_rest$12=match$18[1];
           var $js$31=get_ign(0);
           if($js$31)
            {var $js$32=get_pad_opt(95);
             var ignored$6=[2,iconv,$js$32];
             var fmt_result=[0,[23,ignored$6,fmt_rest$12]]}
           else
            {var match$19=get_pad(0);
             var match$20=get_prec(0);
             var match$21=match$19;
             var match$22=match$20;
             var $js$33="unknown primitive:isint";
             if($js$33)
              {var $js$34=match$22!=0;
               if($js$34)
                {var exit$1=36}
               else
                {var pad$3=match$21;var pad$4=pad$3}}
             else
              {var exit$1=36}
             switch(exit$1)
              {case 36:
                var $js$35=match$21;
                if(typeof $js$35=="number")
                 {if($js$35==0){var pad$4=0}}
                else
                 {var $js$36=$js$35[0];
                  if($js$36==0)
                   {var match$23=match$21[1];
                    var $js$37=match$23>=2;
                    if($js$37)
                     {var n=match$21[2];
                      var $js$38=legacy_behavior$1;
                      if($js$38)
                       {var pad$4=[0,1,n]}
                      else
                       {var pad$4=incompatible_flag(pct_ind,str_ind,48,"precision")}}
                    else
                     {var pad$5=match$21;var pad$4=pad$5}}
                  else
                   if($js$36==1)
                    {var match$24=match$21[1];
                     var $js$39=match$24>=2;
                     if($js$39)
                      {var $js$40=legacy_behavior$1;
                       if($js$40)
                        {var pad$4=[1,1]}
                       else
                        {var pad$4=incompatible_flag(pct_ind,str_ind,48,"precision")}}
                     else
                      {var pad$6=match$21;var pad$4=pad$6}}}
               }
             var $js$41=get_prec(0);
             var match$25=make_padprec_fmt_ebb(pad$4,$js$41,fmt_rest$12);
             var fmt_rest'$2=match$25[3];
             var prec'=match$25[2];
             var pad'$2=match$25[1];
             var fmt_result=[0,[4,iconv,pad'$2,prec',fmt_rest'$2]]}
          case 65:
           var $js$42=str[str_ind];
           var $js$43=is_int_base($js$42);
           var $js$44=!$js$43;
           var $js$45=(str_ind=end_ind)||$js$44;
           if($js$45)
            {var match$26=parse(str_ind,end_ind);
             var fmt_rest$13=match$26[1];
             var counter$1=counter_of_char(symb);
             var $js$46=get_ign(0);
             if($js$46)
              {var ignored$7=[10,counter$1];
               var fmt_result=[0,[23,ignored$7,fmt_rest$13]]}
             else
              {var fmt_result=[0,[21,counter$1,fmt_rest$13]]}}
           else
            {"unknown block:(exit 63)"}
          case 66:
           var $js$47=get_plus(0);
           var $js$48=get_space(0);
           var fconv=compute_float_conv(pct_ind,str_ind,$js$47,$js$48,symb);
           var match$27=parse(str_ind,end_ind);
           var fmt_rest$14=match$27[1];
           var $js$49=get_ign(0);
           if($js$49)
            {var $js$50=get_pad_opt(95);
             var $js$51=get_prec_opt(0);
             var ignored$8=[6,$js$50,$js$51];
             var fmt_result=[0,[23,ignored$8,fmt_rest$14]]}
           else
            {var $js$52=get_pad(0);
             var $js$53=get_prec(0);
             var match$28=make_padprec_fmt_ebb($js$52,$js$53,fmt_rest$14);
             var fmt_rest'$3=match$28[3];
             var prec'$1=match$28[2];
             var pad'$3=match$28[1];
             var fmt_result=[0,[8,fconv,pad'$3,prec'$1,fmt_rest'$3]]}
          case 67:
           var match$29=parse(str_ind,end_ind);
           var fmt_rest$15=match$29[1];
           var $js$54=get_ign(0);
           if($js$54)
            {var fmt_result=[0,[23,2,fmt_rest$15]]}
           else
            {var fmt_result=[0,[9,fmt_rest$15]]}
          case 68:
           var c=symb;
           var match$30=parse(str_ind,end_ind);
           var fmt_rest$16=match$30[1];
           var fmt_result=[0,[12,c,fmt_rest$16]];
          case 69:
           var
            fmt_result=
             failwith_message
              ([0,
                [11,
                 "invalid format ",
                 [3,
                  0,
                  [11,
                   ": at character number ",
                   [4,
                    0,
                    0,
                    0,
                    [11,
                     ", flag ",
                     [1,
                      [11,
                       " is only allowed after the '",
                       [12,37,[11,"', before padding and precision",0]]]]]]]]],
                "invalid format %S: at character number %d, flag %C is only allowed after the '%%', before padding and precision"],
               str,
               pct_ind,
               symb);
          case 63:
           var $js$55=symb>=108;
           if($js$55)
            {var $js$56=symb>=111;
             if($js$56)
              {"unknown block:(exit 62)"}
             else
              {var switcher=-108+symb;
               var $js$57=switcher;
               var $js$58=$js$57[0];
               if($js$58==0)
                {var $js$59=get_plus(0);
                 var $js$60=get_sharp(0);
                 var $js$61=get_space(0);
                 var $js$62=str[str_ind];
                 var
                  iconv$1=
                   compute_int_conv
                    (pct_ind,str_ind+1,$js$59,$js$60,$js$61,$js$62);
                 var match$31=parse(str_ind+1,end_ind);
                 var fmt_rest$17=match$31[1];
                 var $js$63=get_ign(0);
                 if($js$63)
                  {var $js$64=get_pad_opt(95);
                   var ignored$9=[3,iconv$1,$js$64];
                   var fmt_result=[0,[23,ignored$9,fmt_rest$17]]}
                 else
                  {var $js$65=get_pad(0);
                   var $js$66=get_prec(0);
                   var
                    match$32=
                     make_padprec_fmt_ebb($js$65,$js$66,fmt_rest$17);
                   var fmt_rest'$4=match$32[3];
                   var prec'$2=match$32[2];
                   var pad'$4=match$32[1];
                   var fmt_result=[0,[5,iconv$1,pad'$4,prec'$2,fmt_rest'$4]]}}
               else
                if($js$58==1)
                 {"unknown block:(exit 62)"}
                else
                 if($js$58==2)
                  {var $js$67=get_plus(0);
                   var $js$68=get_sharp(0);
                   var $js$69=get_space(0);
                   var $js$70=str[str_ind];
                   var
                    iconv$2=
                     compute_int_conv
                      (pct_ind,str_ind+1,$js$67,$js$68,$js$69,$js$70);
                   var match$33=parse(str_ind+1,end_ind);
                   var fmt_rest$18=match$33[1];
                   var $js$71=get_ign(0);
                   if($js$71)
                    {var $js$72=get_pad_opt(95);
                     var ignored$10=[4,iconv$2,$js$72];
                     var fmt_result=[0,[23,ignored$10,fmt_rest$18]]}
                   else
                    {var $js$73=get_pad(0);
                     var $js$74=get_prec(0);
                     var
                      match$34=
                       make_padprec_fmt_ebb($js$73,$js$74,fmt_rest$18);
                     var fmt_rest'$5=match$34[3];
                     var prec'$3=match$34[2];
                     var pad'$5=match$34[1];
                     var fmt_result=[0,[6,iconv$2,pad'$5,prec'$3,fmt_rest'$5]]}}}}
           else
            {var $js$75=symb!=76;
             if($js$75)
              {"unknown block:(exit 62)"}
             else
              {var $js$76=get_plus(0);
               var $js$77=get_sharp(0);
               var $js$78=get_space(0);
               var $js$79=str[str_ind];
               var
                iconv$3=
                 compute_int_conv
                  (pct_ind,str_ind+1,$js$76,$js$77,$js$78,$js$79);
               var match$35=parse(str_ind+1,end_ind);
               var fmt_rest$19=match$35[1];
               var $js$80=get_ign(0);
               if($js$80)
                {var $js$81=get_pad_opt(95);
                 var ignored$11=[5,iconv$3,$js$81];
                 var fmt_result=[0,[23,ignored$11,fmt_rest$19]]}
               else
                {var $js$82=get_pad(0);
                 var $js$83=get_prec(0);
                 var match$36=make_padprec_fmt_ebb($js$82,$js$83,fmt_rest$19);
                 var fmt_rest'$6=match$36[3];
                 var prec'$4=match$36[2];
                 var pad'$6=match$36[1];
                 var fmt_result=[0,[7,iconv$3,pad'$6,prec'$4,fmt_rest'$6]]}}}
          case 62:
           var
            fmt_result=
             failwith_message
              ([0,
                [11,
                 "invalid format ",
                 [3,
                  0,
                  [11,
                   ": at character number ",
                   [4,
                    0,
                    0,
                    0,
                    [11,', invalid conversion "',[12,37,[0,[12,34,0]]]]]]]],
                'invalid format %S: at character number %d, invalid conversion "%%%c"'],
               str,
               str_ind-1,
               symb)
          }
        var $js$84=!legacy_behavior$1;
        if($js$84)
         {var $js$85=!plus_used[1]&&plus;
          if($js$85){incompatible_flag(pct_ind,str_ind,symb,"'+'")}else{}
          var $js$86=!sharp_used[1]&&sharp;
          if($js$86){incompatible_flag(pct_ind,str_ind,symb,"'#'")}else{}
          var $js$87=!space_used[1]&&space;
          if($js$87){incompatible_flag(pct_ind,str_ind,symb,"' '")}else{}
          var $js$88="unknown primitive:caml_notequal";
          var $js$89=!pad_used[1]&&$js$88;
          if($js$89)
           {incompatible_flag(pct_ind,str_ind,symb,"`padding'")}
          else
           {}
          var $js$90="unknown primitive:caml_notequal";
          var $js$91=!prec_used[1]&&$js$90;
          if($js$91)
           {var $js$92=ign;
            if($js$92){var $js$93=95}else{var $js$93=symb}
            incompatible_flag(pct_ind,str_ind,$js$93,"`precision'")}
          else
           {}
          var $js$94=ign&&plus;
          if($js$94){incompatible_flag(pct_ind,str_ind,95,"'+'")}else{}}
        else
         {}
        var $js$95=!ign_used[1]&&ign;
        if($js$95)
         {var $js$96=symb>=38;
          if($js$96)
           {var $js$97=symb!=44;
            if($js$97)
             {var $js$98=symb!=64;
              if($js$98){var exit$2=27}else{var exit$2=28}}
            else
             {var exit$2=28}}
          else
           {var $js$99=symb!=33;
            if($js$99)
             {var $js$100=symb>=37;
              if($js$100){var exit$2=28}else{var exit$2=27}}
            else
             {var exit$2=28}}
          switch(exit$2)
           {case 28:
             var $js$101=legacy_behavior$1;
             if($js$101){}else{"unknown block:(exit 27)"}
            case 27:incompatible_flag(pct_ind,str_ind,symb,"'_'")
            }}
        else
         {}
        return fmt_result};
    var
     parse_after_at=
      function(str_ind,end_ind)
       {var $js$1=str_ind=end_ind;
        if($js$1)
         {return [0,[12,64,0]]}
        else
         {var c=str[str_ind];
          var $js$2=c>=65;
          if($js$2)
           {var $js$3=c>=94;
            if($js$3)
             {var switcher=-123+c;
              var $js$4=2<switcher>>>0;
              if($js$4)
               {var exit=91}
              else
               {var $js$5=switcher;
                var $js$6=$js$5[0];
                if($js$6==0)
                 {return parse_tag(1,str_ind+1,end_ind)}
                else
                 if($js$6==1)
                  {var exit=91}
                 else
                  if($js$6==2)
                   {var match=parse(str_ind+1,end_ind);
                    var fmt_rest=match[1];
                    return [0,[17,1,fmt_rest]]}}}
            else
             {var $js$7=c>=91;
              if($js$7)
               {var switcher$1=-91+c;
                var $js$8=switcher$1;
                var $js$9=$js$8[0];
                if($js$9==0)
                 {return parse_tag(0,str_ind+1,end_ind)}
                else
                 if($js$9==1)
                  {var exit=91}
                 else
                  if($js$9==2)
                   {var match$1=parse(str_ind+1,end_ind);
                    var fmt_rest$1=match$1[1];
                    return [0,[17,0,fmt_rest$1]]}}
              else
               {var exit=91}}}
          else
           {var $js$10=c!=10;
            if($js$10)
             {var $js$11=c>=32;
              if($js$11)
               {var switcher$2=-32+c;
                var $js$12=switcher$2;
                var $js$13=$js$12[0];
                if($js$13==0)
                 {var match$2=parse(str_ind+1,end_ind);
                  var fmt_rest$2=match$2[1];
                  return [0,[17,[0,"@ ",1,0],fmt_rest$2]]}
                else
                 if($js$13==1)
                  {var exit=91}
                 else
                  if($js$13==2)
                   {var exit=91}
                  else
                   if($js$13==3)
                    {var exit=91}
                   else
                    if($js$13==4)
                     {var exit=91}
                    else
                     if($js$13==5)
                      {var $js$14=str[str_ind+1];
                       var $js$15=$js$14=37;
                       var $js$16=str_ind+1<end_ind&&$js$15;
                       if($js$16)
                        {var match$3=parse(str_ind+2,end_ind);
                         var fmt_rest$3=match$3[1];
                         return [0,[17,6,fmt_rest$3]]}
                       else
                        {var match$4=parse(str_ind,end_ind);
                         var fmt_rest$4=match$4[1];
                         return [0,[12,64,fmt_rest$4]]}}
                     else
                      if($js$13==6)
                       {var exit=91}
                      else
                       if($js$13==7)
                        {var exit=91}
                       else
                        if($js$13==8)
                         {var exit=91}
                        else
                         if($js$13==9)
                          {var exit=91}
                         else
                          if($js$13==10)
                           {var exit=91}
                          else
                           if($js$13==11)
                            {var exit=91}
                           else
                            if($js$13==12)
                             {var match$5=parse(str_ind+1,end_ind);
                              var fmt_rest$5=match$5[1];
                              return [0,[17,[0,"@,",0,0],fmt_rest$5]]}
                            else
                             if($js$13==13)
                              {var exit=91}
                             else
                              if($js$13==14)
                               {var match$6=parse(str_ind+1,end_ind);
                                var fmt_rest$6=match$6[1];
                                return [0,[17,4,fmt_rest$6]]}
                              else
                               if($js$13==15)
                                {var exit=91}
                               else
                                if($js$13==16)
                                 {var exit=91}
                                else
                                 if($js$13==17)
                                  {var exit=91}
                                 else
                                  if($js$13==18)
                                   {var exit=91}
                                  else
                                   if($js$13==19)
                                    {var exit=91}
                                   else
                                    if($js$13==20)
                                     {var exit=91}
                                    else
                                     if($js$13==21)
                                      {var exit=91}
                                     else
                                      if($js$13==22)
                                       {var exit=91}
                                      else
                                       if($js$13==23)
                                        {var exit=91}
                                       else
                                        if($js$13==24)
                                         {var exit=91}
                                        else
                                         if($js$13==25)
                                          {var exit=91}
                                         else
                                          if($js$13==26)
                                           {var exit=91}
                                          else
                                           if($js$13==27)
                                            {return parse_good_break(str_ind+1,end_ind)}
                                           else
                                            if($js$13==28)
                                             {return parse_magic_size(str_ind+1,end_ind)}
                                            else
                                             if($js$13==29)
                                              {var exit=91}
                                             else
                                              if($js$13==30)
                                               {var exit=91}
                                              else
                                               if($js$13==31)
                                                {var match$7=parse(str_ind+1,end_ind);
                                                 var fmt_rest$7=match$7[1];
                                                 return [0,[17,2,fmt_rest$7]]}
                                               else
                                                if($js$13==32)
                                                 {var match$8=parse(str_ind+1,end_ind);
                                                  var fmt_rest$8=match$8[1];
                                                  return [0,[17,5,fmt_rest$8]]}}
              else
               {var exit=91}}
            else
             {var match$9=parse(str_ind+1,end_ind);
              var fmt_rest$9=match$9[1];
              return [0,[17,3,fmt_rest$9]]}}
          switch(exit)
           {case 91:
             var match$10=parse(str_ind+1,end_ind);
             var fmt_rest$10=match$10[1];
             return [0,[17,[2,c],fmt_rest$10]]
            }}};
    var
     check_open_box=
      function(fmt)
       {var $js$1=fmt;
        if(typeof $js$1=="number")
         {"unknown block:fmt/74217"}
        else
         {var $js$2=$js$1[0];
          if($js$2==11)
           {var match=fmt[2];
            var $js$3="unknown primitive:isint";
            if($js$3)
             {var str$1=fmt[1];
              try
               {var $js$4=open_box_of_string(str$1);return 0}
              catch(exn)
               {var tag=exn[1];
                var $js$5=tag=Failure;
                if($js$5){return 0}else{return "unknown primitive:reraise"}}}
            else
             {var exit=93}}
          else
           {var exit=93}}
        switch(exit){case 93:return 0}};
    var
     parse_tag=
      function(is_open_tag,str_ind,end_ind)
       {try
         {var $js$1=str_ind=end_ind;
          if($js$1){var $js$2=Not_found;throw $js$2}else{}
          var match=str[str_ind];
          var $js$3=match!=60;
          if($js$3)
           {var $js$4=Not_found;throw $js$4}
          else
           {var $js$5=String["index_from"];
            var ind=$js$5(str,str_ind+1,62);
            var $js$6=ind>=end_ind;
            if($js$6){var $js$7=Not_found;throw $js$7}else{}
            var $js$8=String["sub"];
            var sub_str=$js$8(str,str_ind,ind-str_ind+1);
            var match$1=parse(ind+1,end_ind);
            var fmt_rest=match$1[1];
            var match$2=parse(str_ind,ind+1);
            var sub_fmt=match$2[1];
            var sub_format=[0,sub_fmt,sub_str];
            var $js$9=is_open_tag;
            if($js$9)
             {var formatting=[0,sub_format]}
            else
             {check_open_box(sub_fmt);var formatting=[1,sub_format]}
            return [0,[18,formatting,fmt_rest]]}}
        catch(exn)
         {var $js$10=exn=Not_found;
          if($js$10)
           {var match$3=parse(str_ind,end_ind);
            var fmt_rest$1=match$3[1];
            var sub_format$1=[0,0,""];
            var $js$11=is_open_tag;
            if($js$11)
             {var formatting$1=[0,sub_format$1]}
            else
             {var formatting$1=[1,sub_format$1]}
            return [0,[18,formatting$1,fmt_rest$1]]}
          else
           {return "unknown primitive:reraise"}}};
    var
     parse_good_break=
      function(str_ind,end_ind)
       {try
         {var $js$1=str[str_ind];
          var $js$2=$js$1!=60;
          var $js$3=(str_ind=end_ind)||$js$2;
          if($js$3){var $js$4=Not_found;throw $js$4}else{}
          var str_ind_1=parse_spaces(str_ind+1,end_ind);
          var match=str[str_ind_1];
          var $js$5=match>=48;
          if($js$5)
           {var $js$6=match>=58;if($js$6){var exit=114}else{var exit=113}}
          else
           {var $js$7=match!=45;if($js$7){var exit=114}else{var exit=113}}
          switch(exit)
           {case 114:var $js$8=Not_found;throw $js$8;
            case 113:
             var match$1=parse_integer(str_ind_1,end_ind);
             var width=match$1[2];
             var str_ind_2=match$1[1];
             var str_ind_3=parse_spaces(str_ind_2,end_ind);
             var match$2=str[str_ind_3];
             var switcher=-45+match$2;
             var $js$9=!(12<switcher>>>0);
             if($js$9)
              {var switcher$1=-1+switcher;
               var $js$10=1<switcher$1>>>0;
               if($js$10)
                {var match$3=parse_integer(str_ind_3,end_ind);
                 var offset=match$3[2];
                 var str_ind_4=match$3[1];
                 var str_ind_5=parse_spaces(str_ind_4,end_ind);
                 var $js$11=str[str_ind_5];
                 var $js$12=$js$11!=62;
                 if($js$12){var $js$13=Not_found;throw $js$13}else{}
                 var $js$14=String["sub"];
                 var s=$js$14(str,str_ind-2,str_ind_5-str_ind+3);
                 var match$4=[0,str_ind_5+1,[0,s,width,offset]]}
               else
                {var exit$1=110}}
             else
              {var $js$15=switcher!=17;
               if($js$15)
                {var exit$1=110}
               else
                {var $js$16=String["sub"];
                 var s$1=$js$16(str,str_ind-2,str_ind_3-str_ind+3);
                 var match$4=[0,str_ind_3+1,[0,s$1,width,0]]}}
             switch(exit$1){case 110:var $js$17=Not_found;throw $js$17}
            }}
        catch(exn)
         {var $js$18=exn=Not_found;
          if($js$18)
           {var exit$2=103}
          else
           {var tag=exn[1];
            var $js$19=tag=Failure;
            if($js$19)
             {var exit$2=103}
            else
             {var match$4="unknown primitive:reraise"}}
          switch(exit$2){case 103:var match$4=[0,str_ind,[0,"@;",1,0]]}}
        var formatting_lit=match$4[2];
        var next_ind=match$4[1];
        var match$5=parse(next_ind,end_ind);
        var fmt_rest=match$5[1];
        return [0,[17,formatting_lit,fmt_rest]]};
    var
     parse_magic_size=
      function(str_ind,end_ind)
       {try
         {var str_ind_1=parse_spaces(str_ind,end_ind);
          var match=str[str_ind_1];
          var $js$1=match>=48;
          if($js$1)
           {var $js$2=match>=58;if($js$2){var exit=124}else{var exit=123}}
          else
           {var $js$3=match!=45;if($js$3){var exit=124}else{var exit=123}}
          switch(exit)
           {case 124:var match$1=0;
            case 123:
             var match$2=parse_integer(str_ind_1,end_ind);
             var size=match$2[2];
             var str_ind_2=match$2[1];
             var str_ind_3=parse_spaces(str_ind_2,end_ind);
             var $js$4=str[str_ind_3];
             var $js$5=$js$4!=62;
             if($js$5){var $js$6=Not_found;throw $js$6}else{}
             var $js$7=String["sub"];
             var s=$js$7(str,str_ind-2,str_ind_3-str_ind+3);
             var match$1=[0,[0,str_ind_3+1,[1,s,size]]]
            }}
        catch(exn)
         {var $js$8=exn=Not_found;
          if($js$8)
           {var exit$1=118}
          else
           {var tag=exn[1];
            var $js$9=tag=Failure;
            if($js$9)
             {var exit$1=118}
            else
             {var match$1="unknown primitive:reraise"}}
          switch(exit$1){case 118:var match$1=0}}
        var $js$10=match$1;
        if($js$10)
         {var match$3=match$1[1];
          var formatting_lit=match$3[2];
          var next_ind=match$3[1];
          var match$4=parse(next_ind,end_ind);
          var fmt_rest=match$4[1];
          return [0,[17,formatting_lit,fmt_rest]]}
        else
         {var match$5=parse(str_ind,end_ind);
          var fmt_rest$1=match$5[1];
          return [0,[17,[2,60],fmt_rest$1]]}};
    var
     parse_char_set=
      function(str_ind,end_ind)
       {var $js$1=str_ind=end_ind;
        if($js$1){unexpected_end_of_format(end_ind)}else{}
        var char_set=create_char_set(0);
        var add_char=function(c){return add_in_char_set(char_set,c)};
        var
         add_range=
          function(c,c')
           {var $js$2=c;
            var $js$3=c';
            for(var i=$js$2;i<=$js$3;i++)
             {var $js$4=Pervasives["char_of_int"];
              var $js$5=$js$4(i);
              add_in_char_set(char_set,$js$5)}};
        var
         fail_single_percent=
          function(str_ind$1)
           {return failwith_message
                    ([0,
                      [11,
                       "invalid format ",
                       [3,
                        0,
                        [11,
                         ": '",
                         [12,
                          37,
                          [11,
                           "' alone is not accepted in character sets, use ",
                           [12,
                            37,
                            [12,37,[11," instead at position ",[4,0,0,0,[12,46,0]]]]]]]]]],
                      "invalid format %S: '%%' alone is not accepted in character sets, use %%%% instead at position %d."],
                     str,
                     str_ind$1)};
        var
         parse_char_set_start=
          function(str_ind$1,end_ind$1)
           {var $js$2=str_ind$1=end_ind$1;
            if($js$2){unexpected_end_of_format(end_ind$1)}else{}
            var c=str[str_ind$1];
            return parse_char_set_after_char(str_ind$1+1,end_ind$1,c)};
        var
         parse_char_set_content=
          function(str_ind$1,end_ind$1)
           {var $js$2=str_ind$1=end_ind$1;
            if($js$2){unexpected_end_of_format(end_ind$1)}else{}
            var c=str[str_ind$1];
            var $js$3=c!=45;
            if($js$3)
             {var $js$4=c!=93;
              if($js$4)
               {return parse_char_set_after_char(str_ind$1+1,end_ind$1,c)}
              else
               {return str_ind$1+1}}
            else
             {add_char(45);
              return parse_char_set_content(str_ind$1+1,end_ind$1)}};
        var
         parse_char_set_after_char=
          function(str_ind$1,end_ind$1,c)
           {var $js$2=str_ind$1=end_ind$1;
            if($js$2){unexpected_end_of_format(end_ind$1)}else{}
            var c'=str[str_ind$1];
            var $js$3=c'>=46;
            if($js$3)
             {var $js$4=c'!=64;
              if($js$4)
               {var $js$5=c'!=93;
                if($js$5){var exit=132}else{add_char(c);return str_ind$1+1}}
              else
               {var exit=133}}
            else
             {var $js$6=c'!=37;
              if($js$6)
               {var $js$7=c'>=45;
                if($js$7)
                 {return parse_char_set_after_minus(str_ind$1+1,end_ind$1,c)}
                else
                 {var exit=132}}
              else
               {var exit=133}}
            switch(exit)
             {case 133:
               var $js$8=c=37;
               if($js$8)
                {add_char(c');
                 return parse_char_set_content(str_ind$1+1,end_ind$1)}
               else
                {"unknown block:(exit 132)"}
              case 132:
               var c'$1=c';
               var $js$9=c=37;
               if($js$9){fail_single_percent(str_ind$1)}else{}
               add_char(c);
               return parse_char_set_after_char(str_ind$1+1,end_ind$1,c'$1)
              }};
        var
         parse_char_set_after_minus=
          function(str_ind$1,end_ind$1,c)
           {var $js$2=str_ind$1=end_ind$1;
            if($js$2){unexpected_end_of_format(end_ind$1)}else{}
            var c'=str[str_ind$1];
            var $js$3=c'!=37;
            if($js$3)
             {var $js$4=c'!=93;
              if($js$4)
               {add_range(c,c');
                return parse_char_set_content(str_ind$1+1,end_ind$1)}
              else
               {add_char(c);add_char(45);return str_ind$1+1}}
            else
             {var $js$5=(str_ind$1+1)=end_ind$1;
              if($js$5){unexpected_end_of_format(end_ind$1)}else{}
              var c'$1=str[str_ind$1+1];
              var $js$6=c'$1!=37;
              if($js$6)
               {var $js$7=c'$1!=64;
                if($js$7)
                 {return fail_single_percent(str_ind$1)}
                else
                 {var exit=134}}
              else
               {var exit=134}
              switch(exit)
               {case 134:
                 add_range(c,c'$1);
                 return parse_char_set_content(str_ind$1+2,end_ind$1)
                }}};
        var $js$2=str_ind=end_ind;
        if($js$2){unexpected_end_of_format(end_ind)}else{}
        var match=str[str_ind];
        var $js$3=match!=94;
        if($js$3){var match$1=[0,str_ind,0]}else{var match$1=[0,str_ind+1,1]}
        var reverse=match$1[2];
        var str_ind$1=match$1[1];
        var next_ind=parse_char_set_start(str_ind$1,end_ind);
        var char_set$1=freeze_char_set(char_set);
        var $js$4=reverse;
        if($js$4)
         {var $js$5=rev_char_set(char_set$1)}
        else
         {var $js$5=char_set$1}
        return [0,next_ind,$js$5]};
    var
     parse_spaces=
      function(str_ind,end_ind)
       {var $js$1=str_ind=end_ind;
        if($js$1){unexpected_end_of_format(end_ind)}else{}
        var $js$2=str[str_ind];
        var $js$3=$js$2=32;
        if($js$3){return parse_spaces(str_ind+1,end_ind)}else{return str_ind}};
    var
     parse_positive=
      function(str_ind,end_ind,acc)
       {var $js$1=str_ind=end_ind;
        if($js$1){unexpected_end_of_format(end_ind)}else{}
        var c=str[str_ind];
        var switcher=-48+c;
        var $js$2=9<switcher>>>0;
        if($js$2)
         {return [0,str_ind,acc]}
        else
         {var new_acc=acc*10+(c-48);
          var $js$3=new_acc>Sys["max_string_length"];
          if($js$3)
           {return failwith_message
                    ([0,
                      [11,
                       "invalid format ",
                       [3,
                        0,
                        [11,
                         ": integer ",
                         [4,0,0,0,[11," is greater than the limit ",[4,0,0,0,0]]]]]],
                      "invalid format %S: integer %d is greater than the limit %d"],
                     str,
                     new_acc,
                     Sys["max_string_length"])}
          else
           {return parse_positive(str_ind+1,end_ind,new_acc)}}};
    var
     parse_integer=
      function(str_ind,end_ind)
       {var $js$1=str_ind=end_ind;
        if($js$1){unexpected_end_of_format(end_ind)}else{}
        var match=str[str_ind];
        var $js$2=match>=48;
        if($js$2)
         {var $js$3=match>=58;
          if($js$3)
           {var exit=148}
          else
           {return parse_positive(str_ind,end_ind,0)}}
        else
         {var $js$4=match!=45;
          if($js$4)
           {var exit=148}
          else
           {var $js$5=(str_ind+1)=end_ind;
            if($js$5){unexpected_end_of_format(end_ind)}else{}
            var c=str[str_ind+1];
            var switcher=-48+c;
            var $js$6=9<switcher>>>0;
            if($js$6)
             {return expected_character(str_ind+1,"digit",c)}
            else
             {var match$1=parse_positive(str_ind+1,end_ind,0);
              var n=match$1[2];
              var next_ind=match$1[1];
              return [0,next_ind,-n]}}}
        switch(exit)
         {case 148:
           var $js$7=[0,Assert_failure,[0,"camlinternalFormat.ml",2621,11]];
           throw $js$7
          }};
    var
     add_literal=
      function(lit_start,str_ind,fmt)
       {var size=str_ind-lit_start;
        var $js$1=size!=0;
        if($js$1)
         {var $js$2=size!=1;
          if($js$2)
           {var $js$3=String["sub"];
            var $js$4=$js$3(str,lit_start,size);
            var $js$5=[11,$js$4,fmt];
            return [0,$js$5]}
          else
           {var $js$6=str[lit_start];
            var $js$7=[12,$js$6,fmt];
            return [0,$js$7]}}
        else
         {return [0,fmt]}};
    var
     search_subformat_end=
      function(str_ind,end_ind,c)
       {var $js$1=str_ind=end_ind;
        if($js$1)
         {failwith_message
           ([0,
             [11,
              "invalid format ",
              [3,
               0,
               [11,
                ': unclosed sub-format, expected "',
                [12,37,[0,[11,'" at character number ',[4,0,0,0,0]]]]]]],
             'invalid format %S: unclosed sub-format, expected "%%%c" at character number %d'],
            str,
            c,
            end_ind)}
        else
         {}
        var match=str[str_ind];
        var $js$2=match!=37;
        if($js$2)
         {return search_subformat_end(str_ind+1,end_ind,c)}
        else
         {var $js$3=(str_ind+1)=end_ind;
          if($js$3){unexpected_end_of_format(end_ind)}else{}
          var $js$4=str[str_ind+1];
          var $js$5=$js$4=c;
          if($js$5)
           {return str_ind}
          else
           {var match$1=str[str_ind+1];
            var $js$6=match$1>=95;
            if($js$6)
             {var $js$7=match$1>=123;
              if($js$7)
               {var $js$8=match$1>=126;
                if($js$8)
                 {var exit=155}
                else
                 {var switcher=-123+match$1;
                  var $js$9=switcher;
                  var $js$10=$js$9[0];
                  if($js$10==0)
                   {var sub_end=search_subformat_end(str_ind+2,end_ind,125);
                    return search_subformat_end(sub_end+2,end_ind,c)}
                  else
                   if($js$10==1)
                    {var exit=155}
                   else
                    if($js$10==2)
                     {return expected_character(str_ind+1,"character ')'",125)}}}
              else
               {var $js$11=match$1>=96;
                if($js$11)
                 {var exit=155}
                else
                 {var $js$12=(str_ind+2)=end_ind;
                  if($js$12){unexpected_end_of_format(end_ind)}else{}
                  var match$2=str[str_ind+2];
                  var $js$13=match$2!=40;
                  if($js$13)
                   {var $js$14=match$2!=123;
                    if($js$14)
                     {return search_subformat_end(str_ind+3,end_ind,c)}
                    else
                     {var sub_end$1=search_subformat_end(str_ind+3,end_ind,125);
                      return search_subformat_end(sub_end$1+2,end_ind,c)}}
                  else
                   {var sub_end$2=search_subformat_end(str_ind+3,end_ind,41);
                    return search_subformat_end(sub_end$2+2,end_ind,c)}}}}
            else
             {var $js$15=match$1!=40;
              if($js$15)
               {var $js$16=match$1!=41;
                if($js$16)
                 {var exit=155}
                else
                 {return expected_character(str_ind+1,"character '}'",41)}}
              else
               {var sub_end$3=search_subformat_end(str_ind+2,end_ind,41);
                return search_subformat_end(sub_end$3+2,end_ind,c)}}
            switch(exit)
             {case 155:return search_subformat_end(str_ind+2,end_ind,c)}}}};
    var
     is_int_base=
      function(symb)
       {var switcher=-88+symb;
        var $js$1=32<switcher>>>0;
        if($js$1)
         {var exit=158}
        else
         {var $js$2=switcher;
          var $js$3=$js$2[0];
          if($js$3==0)
           {var exit=157}
          else
           if($js$3==1)
            {var exit=158}
           else
            if($js$3==2)
             {var exit=158}
            else
             if($js$3==3)
              {var exit=158}
             else
              if($js$3==4)
               {var exit=158}
              else
               if($js$3==5)
                {var exit=158}
               else
                if($js$3==6)
                 {var exit=158}
                else
                 if($js$3==7)
                  {var exit=158}
                 else
                  if($js$3==8)
                   {var exit=158}
                  else
                   if($js$3==9)
                    {var exit=158}
                   else
                    if($js$3==10)
                     {var exit=158}
                    else
                     if($js$3==11)
                      {var exit=158}
                     else
                      if($js$3==12)
                       {var exit=157}
                      else
                       if($js$3==13)
                        {var exit=158}
                       else
                        if($js$3==14)
                         {var exit=158}
                        else
                         if($js$3==15)
                          {var exit=158}
                         else
                          if($js$3==16)
                           {var exit=158}
                          else
                           if($js$3==17)
                            {var exit=157}
                           else
                            if($js$3==18)
                             {var exit=158}
                            else
                             if($js$3==19)
                              {var exit=158}
                             else
                              if($js$3==20)
                               {var exit=158}
                              else
                               if($js$3==21)
                                {var exit=158}
                               else
                                if($js$3==22)
                                 {var exit=158}
                                else
                                 if($js$3==23)
                                  {var exit=157}
                                 else
                                  if($js$3==24)
                                   {var exit=158}
                                  else
                                   if($js$3==25)
                                    {var exit=158}
                                   else
                                    if($js$3==26)
                                     {var exit=158}
                                    else
                                     if($js$3==27)
                                      {var exit=158}
                                     else
                                      if($js$3==28)
                                       {var exit=158}
                                      else
                                       if($js$3==29)
                                        {var exit=157}
                                       else
                                        if($js$3==30)
                                         {var exit=158}
                                        else
                                         if($js$3==31){var exit=158}else if($js$3==32){var exit=157}}
        switch(exit){case 158:return 0;case 157:return 1}};
    var
     counter_of_char=
      function(symb)
       {var $js$1=symb>=108;
        if($js$1)
         {var $js$2=symb>=111;
          if($js$2)
           {var exit=159}
          else
           {var switcher=-108+symb;
            var $js$3=switcher;
            var $js$4=$js$3[0];
            if($js$4==0)
             {return 0}
            else
             if($js$4==1){var exit=159}else if($js$4==2){return 1}}}
        else
         {var $js$5=symb!=76;if($js$5){var exit=159}else{return 2}}
        switch(exit)
         {case 159:
           var $js$6=[0,Assert_failure,[0,"camlinternalFormat.ml",2683,34]];
           throw $js$6
          }};
    var
     compute_int_conv=
      function(pct_ind,str_ind,plus,sharp,space,symb)
       {var match=plus;
        var match$1=sharp;
        var match$2=space;
        var match$3=symb;
        var $js$1=match!=0;
        if($js$1)
         {var $js$2=match$1!=0;
          if($js$2)
           {var exit=161}
          else
           {var $js$3=match$2!=0;
            if($js$3)
             {var exit=160}
            else
             {var $js$4=match$3!=100;
              if($js$4)
               {var $js$5=match$3!=105;if($js$5){var exit=160}else{return 4}}
              else
               {return 1}}}}
        else
         {var $js$6=match$1!=0;
          if($js$6)
           {var $js$7=match$2!=0;
            if($js$7)
             {var exit=161}
            else
             {var $js$8=match$3!=88;
              if($js$8)
               {var $js$9=match$3!=111;
                if($js$9)
                 {var $js$10=match$3!=120;
                  if($js$10){var exit=161}else{return 7}}
                else
                 {return 11}}
              else
               {return 9}}}
          else
           {var $js$11=match$2!=0;
            if($js$11)
             {var $js$12=match$3!=100;
              if($js$12)
               {var $js$13=match$3!=105;
                if($js$13){var exit=160}else{return 5}}
              else
               {return 2}}
            else
             {var switcher=-88+match$3;
              var $js$14=32<switcher>>>0;
              if($js$14)
               {var exit=160}
              else
               {var $js$15=switcher;
                var $js$16=$js$15[0];
                if($js$16==0)
                 {return 8}
                else
                 if($js$16==1)
                  {var exit=160}
                 else
                  if($js$16==2)
                   {var exit=160}
                  else
                   if($js$16==3)
                    {var exit=160}
                   else
                    if($js$16==4)
                     {var exit=160}
                    else
                     if($js$16==5)
                      {var exit=160}
                     else
                      if($js$16==6)
                       {var exit=160}
                      else
                       if($js$16==7)
                        {var exit=160}
                       else
                        if($js$16==8)
                         {var exit=160}
                        else
                         if($js$16==9)
                          {var exit=160}
                         else
                          if($js$16==10)
                           {var exit=160}
                          else
                           if($js$16==11)
                            {var exit=160}
                           else
                            if($js$16==12)
                             {return 0}
                            else
                             if($js$16==13)
                              {var exit=160}
                             else
                              if($js$16==14)
                               {var exit=160}
                              else
                               if($js$16==15)
                                {var exit=160}
                               else
                                if($js$16==16)
                                 {var exit=160}
                                else
                                 if($js$16==17)
                                  {return 3}
                                 else
                                  if($js$16==18)
                                   {var exit=160}
                                  else
                                   if($js$16==19)
                                    {var exit=160}
                                   else
                                    if($js$16==20)
                                     {var exit=160}
                                    else
                                     if($js$16==21)
                                      {var exit=160}
                                     else
                                      if($js$16==22)
                                       {var exit=160}
                                      else
                                       if($js$16==23)
                                        {return 10}
                                       else
                                        if($js$16==24)
                                         {var exit=160}
                                        else
                                         if($js$16==25)
                                          {var exit=160}
                                         else
                                          if($js$16==26)
                                           {var exit=160}
                                          else
                                           if($js$16==27)
                                            {var exit=160}
                                           else
                                            if($js$16==28)
                                             {var exit=160}
                                            else
                                             if($js$16==29)
                                              {return 12}
                                             else
                                              if($js$16==30)
                                               {var exit=160}
                                              else
                                               if($js$16==31){var exit=160}else if($js$16==32){return 6}}}}}
        switch(exit)
         {case 161:
           var switcher$1=-88+match$3;
           var $js$17=32<switcher$1>>>0;
           if($js$17)
            {"unknown block:(exit 160)"}
           else
            {var $js$18=switcher$1;
             var $js$19=$js$18[0];
             if($js$19==0)
              {var $js$20=legacy_behavior$1;
               if($js$20){return 9}else{"unknown block:(exit 160)"}}
             else
              if($js$19==1)
               {"unknown block:(exit 160)"}
              else
               if($js$19==2)
                {"unknown block:(exit 160)"}
               else
                if($js$19==3)
                 {"unknown block:(exit 160)"}
                else
                 if($js$19==4)
                  {"unknown block:(exit 160)"}
                 else
                  if($js$19==5)
                   {"unknown block:(exit 160)"}
                  else
                   if($js$19==6)
                    {"unknown block:(exit 160)"}
                   else
                    if($js$19==7)
                     {"unknown block:(exit 160)"}
                    else
                     if($js$19==8)
                      {"unknown block:(exit 160)"}
                     else
                      if($js$19==9)
                       {"unknown block:(exit 160)"}
                      else
                       if($js$19==10)
                        {"unknown block:(exit 160)"}
                       else
                        if($js$19==11)
                         {"unknown block:(exit 160)"}
                        else
                         if($js$19==12)
                          {var exit$1=163}
                         else
                          if($js$19==13)
                           {"unknown block:(exit 160)"}
                          else
                           if($js$19==14)
                            {"unknown block:(exit 160)"}
                           else
                            if($js$19==15)
                             {"unknown block:(exit 160)"}
                            else
                             if($js$19==16)
                              {"unknown block:(exit 160)"}
                             else
                              if($js$19==17)
                               {var exit$1=163}
                              else
                               if($js$19==18)
                                {"unknown block:(exit 160)"}
                               else
                                if($js$19==19)
                                 {"unknown block:(exit 160)"}
                                else
                                 if($js$19==20)
                                  {"unknown block:(exit 160)"}
                                 else
                                  if($js$19==21)
                                   {"unknown block:(exit 160)"}
                                  else
                                   if($js$19==22)
                                    {"unknown block:(exit 160)"}
                                   else
                                    if($js$19==23)
                                     {var $js$21=legacy_behavior$1;
                                      if($js$21){return 11}else{"unknown block:(exit 160)"}}
                                    else
                                     if($js$19==24)
                                      {"unknown block:(exit 160)"}
                                     else
                                      if($js$19==25)
                                       {"unknown block:(exit 160)"}
                                      else
                                       if($js$19==26)
                                        {"unknown block:(exit 160)"}
                                       else
                                        if($js$19==27)
                                         {"unknown block:(exit 160)"}
                                        else
                                         if($js$19==28)
                                          {"unknown block:(exit 160)"}
                                         else
                                          if($js$19==29)
                                           {var exit$1=163}
                                          else
                                           if($js$19==30)
                                            {"unknown block:(exit 160)"}
                                           else
                                            if($js$19==31)
                                             {"unknown block:(exit 160)"}
                                            else
                                             if($js$19==32)
                                              {var $js$22=legacy_behavior$1;
                                               if($js$22){return 7}else{"unknown block:(exit 160)"}}}
           switch(exit$1)
            {case 163:
              var $js$23=legacy_behavior$1;
              if($js$23)
               {return compute_int_conv(pct_ind,str_ind,plus,0,space,symb)}
              else
               {return incompatible_flag(pct_ind,str_ind,symb,"'#'")}
             }
          case 160:
           var $js$24=match!=0;
           if($js$24)
            {var $js$25=match$2!=0;
             if($js$25)
              {var $js$26=legacy_behavior$1;
               if($js$26)
                {return compute_int_conv(pct_ind,str_ind,plus,sharp,0,symb)}
               else
                {return incompatible_flag(pct_ind,str_ind,32,"'+'")}}
             else
              {var $js$27=legacy_behavior$1;
               if($js$27)
                {return compute_int_conv(pct_ind,str_ind,0,sharp,space,symb)}
               else
                {return incompatible_flag(pct_ind,str_ind,symb,"'+'")}}}
           else
            {var $js$28=match$2!=0;
             if($js$28)
              {var $js$29=legacy_behavior$1;
               if($js$29)
                {return compute_int_conv(pct_ind,str_ind,plus,sharp,0,symb)}
               else
                {return incompatible_flag(pct_ind,str_ind,symb,"' '")}}
             else
              {var
                $js$30=
                 [0,Assert_failure,[0,"camlinternalFormat.ml",2716,28]];
               throw $js$30}}
          }};
    var
     compute_float_conv=
      function(pct_ind,str_ind,plus,space,symb)
       {var match=plus;
        var match$1=space;
        var match$2=symb;
        var $js$1=match!=0;
        if($js$1)
         {var $js$2=match$1!=0;
          if($js$2)
           {var $js$3=legacy_behavior$1;
            if($js$3)
             {return compute_float_conv(pct_ind,str_ind,plus,0,symb)}
            else
             {return incompatible_flag(pct_ind,str_ind,32,"'+'")}}
          else
           {var $js$4=match$2>=72;
            if($js$4)
             {var switcher=-101+match$2;
              var $js$5=2<switcher>>>0;
              if($js$5)
               {var exit=164}
              else
               {var $js$6=switcher;
                var $js$7=$js$6[0];
                if($js$7==0)
                 {return 4}
                else
                 if($js$7==1){return 1}else if($js$7==2){return 10}}}
            else
             {var $js$8=match$2>=69;
              if($js$8)
               {var switcher$1=-69+match$2;
                var $js$9=switcher$1;
                var $js$10=$js$9[0];
                if($js$10==0)
                 {return 7}
                else
                 if($js$10==1){var exit=164}else if($js$10==2){return 13}}
              else
               {var exit=164}}
            switch(exit)
             {case 164:
               var $js$11=legacy_behavior$1;
               if($js$11)
                {return compute_float_conv(pct_ind,str_ind,0,space,symb)}
               else
                {return incompatible_flag(pct_ind,str_ind,symb,"'+'")}
              }}}
        else
         {var $js$12=match$1!=0;
          if($js$12)
           {var $js$13=match$2>=72;
            if($js$13)
             {var switcher$2=-101+match$2;
              var $js$14=2<switcher$2>>>0;
              if($js$14)
               {var exit$1=165}
              else
               {var $js$15=switcher$2;
                var $js$16=$js$15[0];
                if($js$16==0)
                 {return 5}
                else
                 if($js$16==1){return 2}else if($js$16==2){return 11}}}
            else
             {var $js$17=match$2>=69;
              if($js$17)
               {var switcher$3=-69+match$2;
                var $js$18=switcher$3;
                var $js$19=$js$18[0];
                if($js$19==0)
                 {return 8}
                else
                 if($js$19==1){var exit$1=165}else if($js$19==2){return 14}}
              else
               {var exit$1=165}}
            switch(exit$1)
             {case 165:
               var $js$20=legacy_behavior$1;
               if($js$20)
                {return compute_float_conv(pct_ind,str_ind,plus,0,symb)}
               else
                {return incompatible_flag(pct_ind,str_ind,symb,"' '")}
              }}
          else
           {var $js$21=match$2>=72;
            if($js$21)
             {var switcher$4=-101+match$2;
              var $js$22=2<switcher$4>>>0;
              if($js$22)
               {var exit$2=166}
              else
               {var $js$23=switcher$4;
                var $js$24=$js$23[0];
                if($js$24==0)
                 {return 3}
                else
                 if($js$24==1){return 0}else if($js$24==2){return 9}}}
            else
             {var $js$25=match$2>=69;
              if($js$25)
               {var switcher$5=-69+match$2;
                var $js$26=switcher$5;
                var $js$27=$js$26[0];
                if($js$27==0)
                 {return 6}
                else
                 if($js$27==1){return 15}else if($js$27==2){return 12}}
              else
               {var exit$2=166}}
            switch(exit$2)
             {case 166:
               var
                $js$28=
                 [0,Assert_failure,[0,"camlinternalFormat.ml",2744,25]];
               throw $js$28
              }}}};
    var
     incompatible_flag=
      function(pct_ind,str_ind,symb,option)
       {var $js$1=String["sub"];
        var subfmt=$js$1(str,pct_ind,str_ind-pct_ind);
        return failwith_message
                ([0,
                  [11,
                   "invalid format ",
                   [3,
                    0,
                    [11,
                     ": at character number ",
                     [4,
                      0,
                      0,
                      0,
                      [11,
                       ", ",
                       [2,
                        0,
                        [11,
                         " is incompatible with '",
                         [0,[11,"' in sub-format ",[3,0,0]]]]]]]]]],
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
   {var match=fmt_ebb_of_string(0,str);
    var fmt=match[1];
    try
     {var $js=type_format(fmt,fmtty);return [0,$js,str]}
    catch(exn)
     {var $js$1=exn=Type_mismatch;
      if($js$1)
       {var $js$2=string_of_fmtty(fmtty);
        return failwith_message
                ([0,
                  [11,
                   "bad input: format type mismatch between ",
                   [3,0,[11," and ",[3,0,0]]]],
                  "bad input: format type mismatch between %S and %S"],
                 str,
                 $js$2)}
      else
       {return "unknown primitive:reraise"}}};
var
 format_of_string_format=
  function(str,param)
   {var str'=param[2];
    var fmt'=param[1];
    var match=fmt_ebb_of_string(0,str);
    var fmt=match[1];
    try
     {var $js=fmtty_of_fmt(fmt');
      var $js$1=type_format(fmt,$js);
      return [0,$js$1,str]}
    catch(exn)
     {var $js$2=exn=Type_mismatch;
      if($js$2)
       {return failwith_message
                ([0,
                  [11,
                   "bad input: format type mismatch between ",
                   [3,0,[11," and ",[3,0,0]]]],
                  "bad input: format type mismatch between %S and %S"],
                 str,
                 str')}
      else
       {return "unknown primitive:reraise"}}};
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
