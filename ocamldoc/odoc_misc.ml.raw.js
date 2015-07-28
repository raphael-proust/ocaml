var String=require("String");
var Ctype=require("Ctype");
var Char=require("Char");
var Btype=require("Btype");
var Pervasives=require("Pervasives");
var List=require("List");
var Predef=require("Predef");
var Printf=require("Printf");
var Unix=require("Unix");
var Path=require("Path");
var Buffer=require("Buffer");
var Odoc_messages=require("Odoc_messages");
var
 no_blanks=
  function(s)
   {var len=s["length"];
    var $js=Buffer["create"];
    var buf=$js(len);
    var $js$1=0;
    var $js$2=len-1;
    for(var i=$js$1;i<=$js$2;i++)
     {var c=s[i];
      var switcher=-9+c;
      var $js$3=!(4<switcher>>>0);
      if($js$3)
       {var $js$4=1<-2+switcher>>>0;if($js$4){var exit=101}else{var exit=102}}
      else
       {var $js$5=switcher!=23;if($js$5){var exit=102}else{var exit=101}}
      switch(exit)
       {case 102:var $js$6=Buffer["add_char"];$js$6(buf,c);case 101:}}
    var $js$7=Buffer["contents"];
    return $js$7(buf)};
var
 input_file_as_string=
  function(nom)
   {var $js=Pervasives["open_in_bin"];
    var chanin=$js(nom);
    var len=1024;
    var s="unknown primitive:caml_create_string";
    var $js$1=Buffer["create"];
    var buf=$js$1(len);
    var
     iter=
      function(param)
       {try
         {var $js$2=Pervasives["input"];
          var n=$js$2(chanin,s,0,len);
          var $js$3=n=0;
          if($js$3)
           {return 0}
          else
           {var $js$4=Buffer["add_subbytes"];$js$4(buf,s,0,n);return iter(0)}}
        catch(exn)
         {var $js$5=exn=End_of_file;
          if($js$5){return 0}else{return "unknown primitive:reraise"}}};
    iter(0);
    var $js$2=Pervasives["close_in"];
    $js$2(chanin);
    var $js$3=Buffer["contents"];
    return $js$3(buf)};
var
 split_string=
  function(s,chars)
   {var len=s["length"];
    var
     iter=
      function(acc,pos)
       {var $js=pos>=len;
        if($js)
         {var $js$1=acc;if($js$1==""){return 0}else{return [0,acc,0]}}
        else
         {var $js$2=List["mem"];
          var $js$3=$js$2(s[pos],chars);
          if($js$3)
           {var $js$4=acc;
            if($js$4=="")
             {return iter("",pos+1)}
            else
             {var $js$5=iter("",pos+1);return [0,acc,$js$5]}}
          else
           {var $js$6=Printf["sprintf"];
            var $js$7=$js$6([0,[2,0,[0,0]],"%s%c"],acc,s[pos]);
            return iter($js$7,pos+1)}}};
    return iter("",0)};
var
 split_with_blanks=
  function(s){return split_string(s,[0,32,[0,10,[0,13,[0,9,0]]]])};
var
 list_concat=
  function(sep)
   {var
     iter=
      function(param)
       {var $js=param;
        if($js)
         {var q=param[2];
          var h=param[1];
          var $js$1=q;
          if($js$1){return [0,h,[0,sep,q]]}else{return [0,h,0]}}
        else
         {return 0}};
    return iter};
var
 string_of_longident=
  function(li)
   {var $js=li;
    if($js==0)
     {return li[1]}
    else
     if($js==1)
      {var $js$1=Pervasives["^"];
       var $js$2=string_of_longident(li[1]);
       var $js$3=Pervasives["^"];
       var $js$4=$js$3(".",li[2]);
       return $js$1($js$2,$js$4)}
     else
      if($js==2)
       {var $js$5=Pervasives["^"];
        var $js$6=string_of_longident(li[1]);
        var $js$7=Pervasives["^"];
        var $js$8=Pervasives["^"];
        var $js$9=string_of_longident(li[2]);
        var $js$10=$js$8($js$9,")");
        var $js$11=$js$7("(",$js$10);
        return $js$5($js$6,$js$11)}};
var
 get_fields=
  function(type_expr)
   {var $js=Ctype["flatten_fields"];
    var $js$1=Ctype["object_fields"];
    var $js$2=$js$1(type_expr);
    var match=$js($js$2);
    var $js$3=List["fold_left"];
    return $js$3
            (function(acc,param)
              {var field_kind=param[2];
               var label=param[1];
               var $js$4="unknown primitive:isint";
               if($js$4)
                {var $js$5=field_kind!=0;
                 if($js$5){return acc}else{var exit=84}}
               else
                {var exit=84}
               switch(exit)
                {case 84:
                  var $js$6="unknown primitive:caml_string_equal";
                  if($js$6)
                   {return acc}
                  else
                   {var $js$7=Pervasives["@"];
                    return $js$7(acc,[0,[0,label,param[3]],0])}
                 }},
             0,
             match[1])};
var
 string_of_text=
  function(t)
   {var
     iter=
      function(t_ele)
       {var $js=t_ele;
        if(typeof $js=="number")
         {if($js==0){return "\n"}else if($js==1){return ""}}
        else
         {var $js$1=$js[0];
          if($js$1==0)
           {var exit=82}
          else
           if($js$1==1)
            {var exit=82}
           else
            if($js$1==2)
             {var exit=82}
            else
             if($js$1==3)
              {var exit=82}
             else
              if($js$1==10)
               {var $js$2=Pervasives["^"];
                var $js$3=String["concat"];
                var $js$4=List["map"];
                var
                 $js$5=
                  $js$4
                   (function(t$1)
                     {var $js$6=Pervasives["^"];
                      var $js$7=string_of_text(t$1);
                      return $js$6("\n- ",$js$7)},
                    t_ele[1]);
                var $js$6=$js$3("",$js$5);
                return $js$2($js$6,"\n")}
              else
               if($js$1==11)
                {var
                  f=
                   function(n,param)
                    {var $js$7=param;
                     if($js$7)
                      {var $js$8=Pervasives["^"];
                       var $js$9=Pervasives["^"];
                       var $js$10=Pervasives["string_of_int"];
                       var $js$11=$js$10(n);
                       var $js$12=Pervasives["^"];
                       var $js$13=Pervasives["^"];
                       var $js$14=string_of_text(param[1]);
                       var $js$15=f(n+1,param[2]);
                       var $js$16=$js$13($js$14,$js$15);
                       var $js$17=$js$12(". ",$js$16);
                       var $js$18=$js$9($js$11,$js$17);
                       return $js$8("\n",$js$18)}
                     else
                      {return "\n"}};
                 return f(1,t_ele[1])}
               else
                if($js$1==12)
                 {var $js$7=Pervasives["^"];
                  var $js$8=Pervasives["^"];
                  var $js$9=string_of_text(t_ele[1]);
                  var $js$10=$js$8($js$9,"\n");
                  return $js$7("\t",$js$10)}
                else
                 if($js$1==13)
                  {var $js$11=Pervasives["^"];
                   var $js$12=Pervasives["^"];
                   var $js$13=string_of_text(t_ele[3]);
                   var $js$14=$js$12($js$13,"\n");
                   return $js$11("\n",$js$14)}
                 else
                  if($js$1==14)
                   {var $js$15=Pervasives["^"];
                    var $js$16=Pervasives["^"];
                    var $js$17=$js$16(t_ele[1]," %}");
                    return $js$15("{% ",$js$17)}
                  else
                   if($js$1==15)
                    {var $js$18=Pervasives["^"];
                     var $js$19=Pervasives["^"];
                     var $js$20=Pervasives["^"];
                     var $js$21=string_of_text(t_ele[2]);
                     var $js$22=$js$20("]",$js$21);
                     var $js$23=$js$19(t_ele[1],$js$22);
                     return $js$18("[",$js$23)}
                   else
                    if($js$1==16)
                     {var match=t_ele[3];
                      var $js$24=match;
                      if($js$24)
                       {var $js$25=Printf["sprintf"];
                        var $js$26=string_of_text(match[1]);
                        return $js$25([0,[12,91,[2,0,[12,93,0]]],"[%s]"],$js$26)}
                      else
                       {return iter([1,t_ele[1]])}}
                    else
                     if($js$1==17)
                      {var $js$27=Pervasives["^"];
                       var $js$28=Pervasives["^"];
                       var $js$29=string_of_text(t_ele[1]);
                       var $js$30=$js$28($js$29,"}");
                       return $js$27("^{",$js$30)}
                     else
                      if($js$1==18)
                       {var $js$31=Pervasives["^"];
                        var $js$32=Pervasives["^"];
                        var $js$33=string_of_text(t_ele[1]);
                        var $js$34=$js$32($js$33,"}");
                        return $js$31("^{",$js$34)}
                      else
                       if($js$1==19)
                        {var $js$35=List["map"];
                         var $js$36=$js$35(function(s){return [1,s]},t_ele[1]);
                         var $js$37=list_concat([0,", "],$js$36);
                         return string_of_text($js$37)}
                       else
                        if($js$1==20)
                         {return string_of_text(t_ele[2])}
                        else
                         if($js$1==21)
                          {return ""}
                         else
                          {return string_of_text(t_ele[1])}}
        switch(exit){case 82:return t_ele[1]}};
    var $js=String["concat"];
    var $js$1=List["map"];
    var $js$2=$js$1(iter,t);
    return $js("",$js$2)};
var
 string_of_author_list=
  function(l)
   {var $js=l;
    if($js)
     {var $js$1=Pervasives["^"];
      var $js$2=Pervasives["^"];
      var $js$3=Pervasives["^"];
      var $js$4=Pervasives["^"];
      var $js$5=String["concat"];
      var $js$6=$js$5(", ",l);
      var $js$7=$js$4($js$6,"\n");
      var $js$8=$js$3(":\n",$js$7);
      var $js$9=$js$2(Odoc_messages["authors"],$js$8);
      return $js$1("* ",$js$9)}
    else
     {return ""}};
var
 string_of_version_opt=
  function(v_opt)
   {var $js=v_opt;
    if($js)
     {var $js$1=Pervasives["^"];
      var $js$2=Pervasives["^"];
      var $js$3=Pervasives["^"];
      var $js$4=$js$3(v_opt[1],"\n");
      var $js$5=$js$2(": ",$js$4);
      return $js$1(Odoc_messages["version"],$js$5)}
    else
     {return ""}};
var
 string_of_since_opt=
  function(s_opt)
   {var $js=s_opt;
    if($js)
     {var $js$1=Pervasives["^"];
      var $js$2=Pervasives["^"];
      var $js$3=Pervasives["^"];
      var $js$4=$js$3(s_opt[1],"\n");
      var $js$5=$js$2(" ",$js$4);
      return $js$1(Odoc_messages["since"],$js$5)}
    else
     {return ""}};
var
 string_of_raised_exceptions=
  function(l)
   {var $js=l;
    if($js)
     {var $js$1=l[2];
      if($js$1)
       {var $js$2=Pervasives["^"];
        var $js$3=Pervasives["^"];
        var $js$4=Pervasives["^"];
        var $js$5=String["concat"];
        var $js$6=List["map"];
        var
         $js$7=
          $js$6
           (function(param)
             {var $js$8=Pervasives["^"];
              var $js$9=Pervasives["^"];
              var $js$10=Pervasives["^"];
              var $js$11=Pervasives["^"];
              var $js$12=string_of_text(param[2]);
              var $js$13=$js$11($js$12,"\n");
              var $js$14=$js$10(" ",$js$13);
              var $js$15=$js$9(param[1],$js$14);
              return $js$8("- ",$js$15)},
            l);
        var $js$8=$js$5("",$js$7);
        var $js$9=$js$4($js$8,"\n");
        var $js$10=$js$3("\n",$js$9);
        return $js$2(Odoc_messages["raises"],$js$10)}
      else
       {var match=l[1];
        var $js$11=Pervasives["^"];
        var $js$12=Pervasives["^"];
        var $js$13=Pervasives["^"];
        var $js$14=Pervasives["^"];
        var $js$15=Pervasives["^"];
        var $js$16=string_of_text(match[2]);
        var $js$17=$js$15($js$16,"\n");
        var $js$18=$js$14(" ",$js$17);
        var $js$19=$js$13(match[1],$js$18);
        var $js$20=$js$12(" ",$js$19);
        return $js$11(Odoc_messages["raises"],$js$20)}}
    else
     {return ""}};
var
 string_of_see=
  function(param)
   {var t=param[2];
    var see_ref=param[1];
    var $js=see_ref;
    if($js==0)
     {var t_ref=[0,[15,see_ref[1],t],0]}
    else
     if($js==1)
      {var t_ref=[0,[1,see_ref[1]],[0,[0," "],t]]}
     else
      if($js==2){var t_ref=[0,[5,[0,[0,see_ref[1]],0]],[0,[0," "],t]]}
    return string_of_text(t_ref)};
var
 string_of_sees=
  function(l)
   {var $js=l;
    if($js)
     {var $js$1=l[2];
      if($js$1)
       {var $js$2=Pervasives["^"];
        var $js$3=Pervasives["^"];
        var $js$4=Pervasives["^"];
        var $js$5=String["concat"];
        var $js$6=List["map"];
        var
         $js$7=
          $js$6
           (function(see)
             {var $js$8=Pervasives["^"];
              var $js$9=Pervasives["^"];
              var $js$10=string_of_see(see);
              var $js$11=$js$9($js$10,"\n");
              return $js$8("- ",$js$11)},
            l);
        var $js$8=$js$5("",$js$7);
        var $js$9=$js$4($js$8,"\n");
        var $js$10=$js$3("\n",$js$9);
        return $js$2(Odoc_messages["see_also"],$js$10)}
      else
       {var $js$11=Pervasives["^"];
        var $js$12=Pervasives["^"];
        var $js$13=Pervasives["^"];
        var $js$14=string_of_see(l[1]);
        var $js$15=$js$13($js$14," \n");
        var $js$16=$js$12(" ",$js$15);
        return $js$11(Odoc_messages["see_also"],$js$16)}}
    else
     {return ""}};
var
 string_of_return_opt=
  function(return_opt)
   {var $js=return_opt;
    if($js)
     {var $js$1=Pervasives["^"];
      var $js$2=Pervasives["^"];
      var $js$3=Pervasives["^"];
      var $js$4=string_of_text(return_opt[1]);
      var $js$5=$js$3($js$4,"\n");
      var $js$6=$js$2(" ",$js$5);
      return $js$1(Odoc_messages["returns"],$js$6)}
    else
     {return ""}};
var
 string_of_info=
  function(i)
   {var M=Odoc_types;
    var $js=Pervasives["^"];
    var match=i[7];
    var $js$1=match;
    if($js$1)
     {var $js$2=Pervasives["^"];
      var $js$3=Pervasives["^"];
      var $js$4=Pervasives["^"];
      var $js$5=string_of_text(match[1]);
      var $js$6=$js$4($js$5,"\n");
      var $js$7=$js$3("! ",$js$6);
      var $js$8=$js$2(Odoc_messages["deprecated"],$js$7)}
    else
     {var $js$8=""}
    var $js$9=Pervasives["^"];
    var match$1=i[1];
    var $js$10=match$1;
    if($js$10)
     {var d=match$1[1];
      var $js$11="unknown primitive:caml_equal";
      if($js$11)
       {var $js$12=""}
      else
       {var $js$13=Pervasives["^"];
        var $js$14=string_of_text(d);
        var $js$12=$js$13($js$14,"\n")}}
    else
     {var $js$12=""}
    var $js$15=Pervasives["^"];
    var $js$16=string_of_author_list(i[2]);
    var $js$17=Pervasives["^"];
    var $js$18=string_of_version_opt(i[3]);
    var $js$19=Pervasives["^"];
    var $js$20=string_of_since_opt(i[5]);
    var $js$21=Pervasives["^"];
    var $js$22=string_of_raised_exceptions(i[9]);
    var $js$23=string_of_return_opt(i[10]);
    var $js$24=$js$21($js$22,$js$23);
    var $js$25=$js$19($js$20,$js$24);
    var $js$26=$js$17($js$18,$js$25);
    var $js$27=$js$15($js$16,$js$26);
    var $js$28=$js$9($js$12,$js$27);
    return $js($js$8,$js$28)};
var
 apply_opt=
  function(f,v_opt)
   {var $js=v_opt;
    if($js){var $js$1=f(v_opt[1]);return [0,$js$1]}else{return 0}};
var
 string_of_date=
  function(*opt*,d)
   {var $js=*opt*;
    if($js){var hour=*opt*[1]}else{var hour=1}
    var
     add_0=
      function(s)
       {var $js$1=s["length"]<2;
        if($js$1){var $js$2=Pervasives["^"];return $js$2("0",s)}else{return s}};
    var $js$1=Unix["localtime"];
    var t=$js$1(d);
    var $js$2=Pervasives["^"];
    var $js$3=Pervasives["string_of_int"];
    var $js$4=$js$3(t[6]+1900);
    var $js$5=Pervasives["^"];
    var $js$6=Pervasives["^"];
    var $js$7=Pervasives["string_of_int"];
    var $js$8=$js$7(t[5]+1);
    var $js$9=add_0($js$8);
    var $js$10=Pervasives["^"];
    var $js$11=Pervasives["^"];
    var $js$12=Pervasives["string_of_int"];
    var $js$13=$js$12(t[4]);
    var $js$14=add_0($js$13);
    var $js$15=hour;
    if($js$15)
     {var $js$16=Pervasives["^"];
      var $js$17=Pervasives["^"];
      var $js$18=Pervasives["string_of_int"];
      var $js$19=$js$18(t[3]);
      var $js$20=add_0($js$19);
      var $js$21=Pervasives["^"];
      var $js$22=Pervasives["string_of_int"];
      var $js$23=$js$22(t[2]);
      var $js$24=add_0($js$23);
      var $js$25=$js$21(":",$js$24);
      var $js$26=$js$17($js$20,$js$25);
      var $js$27=$js$16(" ",$js$26)}
    else
     {var $js$27=""}
    var $js$28=$js$11($js$14,$js$27);
    var $js$29=$js$10("-",$js$28);
    var $js$30=$js$6($js$9,$js$29);
    var $js$31=$js$5("-",$js$30);
    return $js$2($js$4,$js$31)};
var
 text_list_concat=
  function(sep,l)
   {var $js=l;
    if($js)
     {var q=l[2];
      var t=l[1];
      var $js$1=q;
      if($js$1)
       {var $js$2=Pervasives["@"];
        var $js$3=text_list_concat(sep,q);
        var $js$4=[0,sep,$js$3];
        return $js$2(t,$js$4)}
      else
       {return t}}
    else
     {return 0}};
var
 text_no_title_no_list=
  function(t)
   {var
     iter=
      function(t_ele)
       {var $js=t_ele;
        if(typeof $js=="number")
         {if($js==0){return [0,0,0]}else if($js==1){return 0}}
        else
         {var $js$1=$js[0];
          if($js$1==4)
           {var $js$2=text_no_title_no_list(t_ele[1]);
            var $js$3=[4,$js$2];
            return [0,$js$3,0]}
          else
           if($js$1==5)
            {var $js$4=text_no_title_no_list(t_ele[1]);
             var $js$5=[5,$js$4];
             return [0,$js$5,0]}
           else
            if($js$1==6)
             {var $js$6=text_no_title_no_list(t_ele[1]);
              var $js$7=[6,$js$6];
              return [0,$js$7,0]}
            else
             if($js$1==7)
              {var $js$8=text_no_title_no_list(t_ele[1]);
               var $js$9=[7,$js$8];
               return [0,$js$9,0]}
             else
              if($js$1==8)
               {var $js$10=text_no_title_no_list(t_ele[1]);
                var $js$11=[8,$js$10];
                return [0,$js$11,0]}
              else
               if($js$1==9)
                {var $js$12=text_no_title_no_list(t_ele[1]);
                 var $js$13=[9,$js$12];
                 return [0,$js$13,0]}
               else
                if($js$1==10)
                 {var exit=61}
                else
                 if($js$1==11)
                  {var exit=61}
                 else
                  if($js$1==12)
                   {var $js$14=text_no_title_no_list(t_ele[1]);
                    var $js$15=[12,$js$14];
                    return [0,$js$15,0]}
                  else
                   if($js$1==13)
                    {return text_no_title_no_list(t_ele[3])}
                   else
                    if($js$1==14)
                     {return [0,[14,t_ele[1]],0]}
                    else
                     if($js$1==15)
                      {var $js$16=text_no_title_no_list(t_ele[2]);
                       var $js$17=[15,t_ele[1],$js$16];
                       return [0,$js$17,0]}
                     else
                      if($js$1==17)
                       {var $js$18=text_no_title_no_list(t_ele[1]);
                        var $js$19=[17,$js$18];
                        return [0,$js$19,0]}
                      else
                       if($js$1==18)
                        {var $js$20=text_no_title_no_list(t_ele[1]);
                         var $js$21=[18,$js$20];
                         return [0,$js$21,0]}
                       else
                        if($js$1==19)
                         {var $js$22=List["map"];
                          var
                           $js$23=
                            $js$22(function(s){return [16,s,[0,0],0]},t_ele[1]);
                          return list_concat([0,", "],$js$23)}
                        else
                         if($js$1==20)
                          {var $js$24=text_no_title_no_list(t_ele[2]);
                           var $js$25=[20,t_ele[1],$js$24];
                           return [0,$js$25,0]}
                         else
                          {return [0,t_ele,0]}}
        switch(exit)
         {case 61:
           var $js$26=List["map"];
           var $js$27=$js$26(text_no_title_no_list,t_ele[1]);
           var $js$28=text_list_concat([0,", "],$js$27);
           return [0,[0," "],$js$28]
          }};
    var $js=List["flatten"];
    var $js$1=List["map"];
    var $js$2=$js$1(iter,t);
    return $js($js$2)};
var
 get_titles_in_text=
  function(t)
   {var l=[0,0];
    var
     iter_ele=
      function(ele)
       {var $js=ele;
        if(typeof $js=="number")
         {if($js==0){var exit=53}else if($js==1){var exit=53}}
        else
         {var $js$1=$js[0];
          if($js$1==0)
           {var exit=50}
          else
           if($js$1==1)
            {var exit=50}
           else
            if($js$1==2)
             {var exit=50}
            else
             if($js$1==3)
              {var exit=50}
             else
              if($js$1==10)
               {var exit=55}
              else
               if($js$1==11)
                {var exit=55}
               else
                if($js$1==13)
                 {return l[1]=[0,[0,ele[1],ele[2],ele[3]],l[1]],0}
                else
                 if($js$1==14)
                  {var exit=53}
                 else
                  if($js$1==15)
                   {var t$1=ele[2];var exit=52}
                  else
                   if($js$1==16)
                    {var exit=50}
                   else
                    if($js$1==17)
                     {var exit=56}
                    else
                     if($js$1==18)
                      {var exit=56}
                     else
                      if($js$1==19)
                       {var exit=53}
                      else
                       if($js$1==20)
                        {return iter_text(ele[2])}
                       else
                        if($js$1==21){var exit=53}else{return iter_text(ele[1])}}
        switch(exit)
         {case 53:return 0;
          case 55:var $js$2=List["iter"];return $js$2(iter_text,ele[1]);
          case 56:"unknown block:(exit 52 (field 0 ele/1165))";
          case 50:return 0;
          case 52:return iter_text(t$1)
          }};
    var
     iter_text=
      function(txt){var $js=List["iter"];return $js(iter_ele,txt)};
    iter_text(t);
    var $js=List["rev"];
    return $js(l[1])};
var
 text_concat=
  function(sep,l)
   {var
     iter=
      function(param)
       {var $js=param;
        if($js)
         {var q=param[2];
          var last=param[1];
          var $js$1=q;
          if($js$1)
           {var $js$2=Pervasives["@"];
            var $js$3=Pervasives["@"];
            var $js$4=iter(q);
            var $js$5=$js$3(sep,$js$4);
            return $js$2(last,$js$5)}
          else
           {return last}}
        else
         {return 0}};
    return iter(l)};
var
 get_before_dot=
  function(s)
   {try
     {var len=s["length"];
      var $js=String["index"];
      var n=$js(s,46);
      var $js$1=n+1>=len;
      if($js$1)
       {return [0,1,s,""]}
      else
       {var match=s[n+1];
        var switcher=-9+match;
        var $js$2=!(4<switcher>>>0);
        if($js$2)
         {var $js$3=1<-2+switcher>>>0;if($js$3){var exit=43}else{var exit=44}}
        else
         {var $js$4=switcher!=23;if($js$4){var exit=44}else{var exit=43}}
        switch(exit)
         {case 44:
           var $js$5=String["sub"];
           var $js$6=$js$5(s,n+1,len-n-1);
           var match$1=get_before_dot($js$6);
           var $js$7=Pervasives["^"];
           var $js$8=String["sub"];
           var $js$9=$js$8(s,0,n+1);
           var $js$10=$js$7($js$9,match$1[2]);
           return [0,match$1[1],$js$10,match$1[3]];
          case 43:
           var $js$11=String["sub"];
           var $js$12=$js$11(s,0,n+1);
           var $js$13=String["sub"];
           var $js$14=$js$13(s,n+1,len-n-1);
           return [0,1,$js$12,$js$14]
          }}}
    catch(exn)
     {var $js$15=exn=Not_found;
      if($js$15){return [0,0,s,""]}else{return "unknown primitive:reraise"}}};
var
 first_sentence_text=
  function(t)
   {var $js=t;
    if($js)
     {var q=t[2];
      var match=first_sentence_text_ele(t[1]);
      var ele3_opt=match[3];
      var ele2=match[2];
      var stop=match[1];
      var $js$1=stop;
      if($js$1)
       {var $js$2=ele3_opt;
        if($js$2){var $js$3=[0,ele3_opt[1],q]}else{var $js$3=q}
        return [0,stop,[0,ele2,0],$js$3]}
      else
       {var match$1=first_sentence_text(q);
        return [0,match$1[1],[0,ele2,match$1[2]],match$1[3]]}}
    else
     {return [0,0,0,0]}};
var
 first_sentence_text_ele=
  function(text_ele)
   {var $js=text_ele;
    if(typeof $js=="number")
     {if($js==0){return [0,1,[0,""],[0,0]]}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var match=get_before_dot(text_ele[1]);
        return [0,match[1],[0,match[2]],[0,[0,match[3]]]]}
      else
       if($js$1==1)
        {var exit=38}
       else
        if($js$1==2)
         {var exit=38}
        else
         if($js$1==3)
          {var exit=38}
         else
          if($js$1==4)
           {var match$1=first_sentence_text(text_ele[1]);
            return [0,match$1[1],[4,match$1[2]],[0,[4,match$1[3]]]]}
          else
           if($js$1==5)
            {var match$2=first_sentence_text(text_ele[1]);
             return [0,match$2[1],[5,match$2[2]],[0,[5,match$2[3]]]]}
           else
            if($js$1==6)
             {var match$3=first_sentence_text(text_ele[1]);
              return [0,match$3[1],[6,match$3[2]],[0,[6,match$3[3]]]]}
            else
             if($js$1==7)
              {var match$4=first_sentence_text(text_ele[1]);
               return [0,match$4[1],[7,match$4[2]],[0,[7,match$4[3]]]]}
             else
              if($js$1==8)
               {var match$5=first_sentence_text(text_ele[1]);
                return [0,match$5[1],[8,match$5[2]],[0,[8,match$5[3]]]]}
              else
               if($js$1==9)
                {var match$6=first_sentence_text(text_ele[1]);
                 return [0,match$6[1],[9,match$6[2]],[0,[9,match$6[3]]]]}
               else
                if($js$1==12)
                 {var match$7=first_sentence_text(text_ele[1]);
                  return [0,match$7[1],[12,match$7[2]],[0,[12,match$7[3]]]]}
                else
                 if($js$1==13)
                  {var l_opt=text_ele[2];
                   var n=text_ele[1];
                   var match$8=first_sentence_text(text_ele[3]);
                   return [0,
                           match$8[1],
                           [13,n,l_opt,match$8[2]],
                           [0,[13,n,l_opt,match$8[3]]]]}
                 else
                  if($js$1==20)
                   {var exit=40}
                  else
                   if($js$1==21){var exit=40}else{var exit=39}}
    switch(exit)
     {case 38:return [0,0,text_ele,0];
      case 39:return [0,0,text_ele,0];
      case 40:return [0,0,text_ele,0]
      }};
var
 first_sentence_of_text=
  function(t){var match=first_sentence_text(t);return match[2]};
var
 first_sentence_and_rest_of_text=
  function(t){var match=first_sentence_text(t);return [0,match[2],match[3]]};
var
 remove_ending_newline=
  function(s)
   {var len=s["length"];
    var $js=len<=0;
    if($js)
     {return s}
    else
     {var match=s[len-1];
      var $js$1=match!=10;
      if($js$1){return s}else{var $js$2=String["sub"];return $js$2(s,0,len-1)}}};
var
 search_string_backward=
  function(pat)
   {var lenp=pat["length"];
    var
     iter=
      function(s)
       {var len=s["length"];
        var match="unknown primitive:caml_int_compare";
        var $js=match!=-1;
        if($js)
         {var $js$1=match!=0;
          if($js$1)
           {var pos=len-lenp;
            var $js$2=String["sub"];
            var s2=$js$2(s,pos,lenp);
            var $js$3="unknown primitive:caml_string_equal";
            if($js$3)
             {return pos}
            else
             {var $js$4=String["sub"];
              var $js$5=$js$4(s,0,pos);
              return iter($js$5)}}
          else
           {var $js$6="unknown primitive:caml_string_equal";
            if($js$6){return 0}else{return "unknown primitive:raise"}}}
        else
         {return "unknown primitive:raise"}};
    return function(s){return iter(s)}};
var
 create_index_lists=
  function(elements,string_of_ele)
   {var
     f=
      function(current,acc0,acc1,acc2,param)
       {var $js=param;
        if($js)
         {var q=param[2];
          var ele=param[1];
          var s=string_of_ele(ele);
          var $js$1=s;
          if($js$1=="")
           {var $js$2=Pervasives["@"];
            var $js$3=$js$2(acc2,[0,ele,0]);
            return f(current,acc0,acc1,$js$3,q)}
          else
           {var $js$4=Char["uppercase"];
            var first=$js$4(s[0]);
            var $js$5=25<-65+first>>>0;
            if($js$5)
             {var $js$6=Pervasives["@"];
              var $js$7=$js$6(acc0,[0,ele,0]);
              return f(current,$js$7,acc1,acc2,q)}
            else
             {var $js$8=current=first;
              if($js$8)
               {var $js$9=Pervasives["@"];
                var $js$10=$js$9(acc2,[0,ele,0]);
                return f(current,acc0,acc1,$js$10,q)}
              else
               {var $js$11=Pervasives["@"];
                var $js$12=$js$11(acc1,[0,acc2,0]);
                return f(first,acc0,$js$12,[0,ele,0],q)}}}}
        else
         {var $js$13=Pervasives["@"];return $js$13([0,acc0,acc1],[0,acc2,0])}};
    return f(95,0,0,0,elements)};
var is_optional=Btype["is_optional"];
var label_name=Btype["label_name"];
var
 remove_option=
  function(typ)
   {var
     iter=
      function(t)
       {var $js=t;
        if(typeof $js=="number")
         {"unknown block:t/1285"}
        else
         {var $js$1=$js[0];
          if($js$1==3)
           {var match=t[2];
            var $js$2=match;
            if($js$2)
             {var $js$3=match[2];
              if($js$3)
               {var exit=3}
              else
               {var $js$4=Path["same"];
                var $js$5=$js$4(t[1],Predef["path_option"]);
                if($js$5){return match[1][1]}else{var exit=3}}}
            else
             {var exit=3}
            switch(exit){case 3:var exit$1=1}}
          else
           if($js$1==6)
            {var exit$1=4}
           else
            if($js$1==7){var exit$1=4}else{var exit$1=1}}
        switch(exit$1){case 4:return iter(t[1][1]);case 1:return t}};
    var $js=iter(typ[1]);
    return [0,$js,typ[2],typ[3]]};
module["exports"]=
{"no_blanks":no_blanks,
 "input_file_as_string":input_file_as_string,
 "split_with_blanks":split_with_blanks,
 "string_of_longident":string_of_longident,
 "get_fields":get_fields,
 "string_of_text":string_of_text,
 "string_of_author_list":string_of_author_list,
 "string_of_version_opt":string_of_version_opt,
 "string_of_since_opt":string_of_since_opt,
 "string_of_raised_exceptions":string_of_raised_exceptions,
 "string_of_see":string_of_see,
 "string_of_sees":string_of_sees,
 "string_of_return_opt":string_of_return_opt,
 "string_of_info":string_of_info,
 "apply_opt":apply_opt,
 "string_of_date":string_of_date,
 "first_sentence_of_text":first_sentence_of_text,
 "first_sentence_and_rest_of_text":first_sentence_and_rest_of_text,
 "text_no_title_no_list":text_no_title_no_list,
 "text_concat":text_concat,
 "get_titles_in_text":get_titles_in_text,
 "create_index_lists":create_index_lists,
 "remove_ending_newline":remove_ending_newline,
 "search_string_backward":search_string_backward,
 "remove_option":remove_option,
 "is_optional":is_optional,
 "label_name":label_name};
