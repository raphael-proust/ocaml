var Odoc_global=require("Odoc_global");
var Odoc_class=require("Odoc_class");
var Odoc_value=require("Odoc_value");
var List=require("List");
var Pervasives=require("Pervasives");
var Str=require("Str");
var Odoc_module=require("Odoc_module");
var Odoc_messages=require("Odoc_messages");
var
 merge_before_tags=
  function(l)
   {var
     iter=
      function(acc,param)
       {var $js=param;
        if($js)
         {var match=param[1];
          var v=match[1];
          var $js$1=List["partition"];
          var
           match$1=
            $js$1
             (function(param$1){return "unknown primitive:caml_equal"},
              param[2]);
          var $js$2=List["fold_left"];
          var $js$3=List["map"];
          var $js$4=$js$3(function(prim){return prim[2]},match$1[1]);
          var
           text=
            $js$2
             (function(acc$1,t)
               {var $js$5=Pervasives["@"];
                var $js$6=Pervasives["@"];
                var $js$7=$js$6([0,[0," "],0],t);
                return $js$5(acc$1,$js$7)},
              match[2],
              $js$4);
          var acc$1=[0,[0,v,text],acc];
          return iter(acc$1,match$1[2])}
        else
         {var $js$5=List["rev"];return $js$5(acc)}};
    return iter(0,l)};
var $js=Str["regexp"];
var version_separators=$js("[\.\+]");
var
 merge_info=
  function(merge_options,m1,m2)
   {var match=m1[1];
    var match$1=m2[1];
    var $js$1=match;
    if($js$1)
     {var d1=match[1];
      var $js$2=match$1;
      if($js$2)
       {var $js$3=List["mem"];
        var $js$4=$js$3(0,merge_options);
        if($js$4)
         {var $js$5=Pervasives["@"];
          var $js$6=$js$5(d1,[0,0,match$1[1]]);
          var new_desc_opt=[0,$js$6]}
        else
         {var new_desc_opt=[0,d1]}}
      else
       {d=d1;var exit=152}}
    else
     {var $js$7=match$1;
      if($js$7){var d=match$1[1];var exit=152}else{var new_desc_opt=0}}
    switch(exit){case 152:var new_desc_opt=[0,d]}
    var match$2=m1[2];
    var match$3=m2[2];
    var $js$8=match$2;
    if($js$8)
     {var $js$9=match$3;
      if($js$9){var exit$1=149}else{l=match$2;var exit$1=147}}
    else
     {var $js$10=match$3;if($js$10){var exit$1=149}else{var new_authors=0}}
    switch(exit$1)
     {case 149:
       var $js$11=match$2;
       if($js$11)
        {var $js$12=List["mem"];
         var $js$13=$js$12(1,merge_options);
         if($js$13)
          {var $js$14=Pervasives["@"];var new_authors=$js$14(match$2,match$3)}
         else
          {var new_authors=match$2}}
       else
        {"unknown block:(exit 147 match/1524)"}
      case 147:var new_authors=l
      }
    var match$4=m1[3];
    var match$5=m2[3];
    var $js$15=match$4;
    if($js$15)
     {var v1=match$4[1];
      var $js$16=match$5;
      if($js$16)
       {var $js$17=List["mem"];
        var $js$18=$js$17(2,merge_options);
        if($js$18)
         {var $js$19=Pervasives["^"];
          var $js$20=Pervasives["^"];
          var $js$21=$js$20(" ",match$5[1]);
          var $js$22=$js$19(v1,$js$21);
          var new_version=[0,$js$22]}
        else
         {var new_version=[0,v1]}}
      else
       {v=v1;var exit$2=145}}
    else
     {var $js$23=match$5;
      if($js$23){var v=match$5[1];var exit$2=145}else{var new_version=0}}
    switch(exit$2){case 145:var new_version=[0,v]}
    var match$6=m1[4];
    var match$7=m2[4];
    var $js$24=match$6;
    if($js$24)
     {var $js$25=match$7;
      if($js$25){var exit$3=142}else{l$1=match$6;var exit$3=140}}
    else
     {var $js$26=match$7;if($js$26){var exit$3=142}else{var new_sees=0}}
    switch(exit$3)
     {case 142:
       var $js$27=match$6;
       if($js$27)
        {var $js$28=List["mem"];
         var $js$29=$js$28(3,merge_options);
         if($js$29)
          {var $js$30=Pervasives["@"];var new_sees=$js$30(match$6,match$7)}
         else
          {var new_sees=match$6}}
       else
        {"unknown block:(exit 140 match/1510)"}
      case 140:var new_sees=l$1
      }
    var match$8=m1[5];
    var match$9=m2[5];
    var $js$31=match$8;
    if($js$31)
     {var v1$1=match$8[1];
      var $js$32=match$9;
      if($js$32)
       {var $js$33=List["mem"];
        var $js$34=$js$33(4,merge_options);
        if($js$34)
         {var $js$35=Pervasives["^"];
          var $js$36=Pervasives["^"];
          var $js$37=$js$36(" ",match$9[1]);
          var $js$38=$js$35(v1$1,$js$37);
          var new_since=[0,$js$38]}
        else
         {var new_since=[0,v1$1]}}
      else
       {v$1=v1$1;var exit$4=138}}
    else
     {var $js$39=match$9;
      if($js$39){var v$1=match$9[1];var exit$4=138}else{var new_since=0}}
    switch(exit$4){case 138:var new_since=[0,v$1]}
    var match$10=m1[6];
    var match$11=m2[6];
    var $js$40=match$10;
    if($js$40)
     {var $js$41=match$11;
      if($js$41){var exit$5=135}else{l$2=match$10;var exit$5=133}}
    else
     {var $js$42=match$11;if($js$42){var exit$5=135}else{var new_before=0}}
    switch(exit$5)
     {case 135:
       var $js$43=match$10;
       if($js$43)
        {var $js$44=List["mem"];
         var $js$45=$js$44(5,merge_options);
         if($js$45)
          {var $js$46=Pervasives["@"];
           var $js$47=$js$46(m1[6],m2[6]);
           var new_before=merge_before_tags($js$47)}
         else
          {var new_before=match$10}}
       else
        {"unknown block:(exit 133 match/1496)"}
      case 133:var new_before=l$2
      }
    var $js$48=List["map"];
    var
     new_before$1=
      $js$48
       (function(param)
         {var v$2=param[1];
          var $js$49=Str["split"];
          var $js$50=$js$49(version_separators,v$2);
          return [0,$js$50,v$2,param[2]]},
        new_before);
    var $js$49=List["sort"];
    var
     new_before$2=
      $js$49
       (function(prim,prim$1){return "unknown primitive:caml_compare"},
        new_before$1);
    var $js$50=List["map"];
    var
     new_before$3=
      $js$50(function(param){return [0,param[2],param[3]]},new_before$2);
    var match$12=m1[7];
    var match$13=m2[7];
    var $js$51=match$12;
    if($js$51)
     {var t1=match$12[1];
      var $js$52=match$13;
      if($js$52)
       {var $js$53=List["mem"];
        var $js$54=$js$53(6,merge_options);
        if($js$54)
         {var $js$55=Pervasives["@"];
          var $js$56=$js$55(t1,[0,0,match$13[1]]);
          var new_dep=[0,$js$56]}
        else
         {var new_dep=[0,t1]}}
      else
       {t=t1;var exit$6=128}}
    else
     {var $js$57=match$13;
      if($js$57){var t=match$13[1];var exit$6=128}else{var new_dep=0}}
    switch(exit$6){case 128:var new_dep=[0,t]}
    var match$14=m1[8];
    var match$15=m2[8];
    var $js$58=match$14;
    if($js$58)
     {var $js$59=match$15;
      if($js$59){var exit$7=125}else{l$3=match$14;var exit$7=123}}
    else
     {var $js$60=match$15;if($js$60){var exit$7=125}else{var new_params=0}}
    switch(exit$7)
     {case 125:
       var $js$61=match$14;
       if($js$61)
        {var $js$62=List["mem"];
         var $js$63=$js$62(7,merge_options);
         if($js$63)
          {var $js$64=List["partition"];
           var
            match$16=
             $js$64
              (function(param)
                {var $js$65=List["mem_assoc"];
                 return $js$65(param[1],match$14)},
               match$15);
           var
            iter=
             function(param)
              {var $js$65=param;
               if($js$65)
                {var match$17=param[1];
                 var param2=match$17[1];
                 var $js$66=List["assoc"];
                 var desc1=$js$66(param2,match$14);
                 var $js$67=Pervasives["@"];
                 var $js$68=$js$67(desc1,[0,0,match$17[2]]);
                 var $js$69=[0,param2,$js$68];
                 var $js$70=iter(param[2]);
                 return [0,$js$69,$js$70]}
               else
                {return 0}};
           var l1_completed=iter(match$16[1]);
           var $js$65=Pervasives["@"];
           var new_params=$js$65(l1_completed,match$16[2])}
         else
          {var new_params=match$14}}
       else
        {"unknown block:(exit 123 match/1477)"}
      case 123:var new_params=l$3
      }
    var match$17=m1[9];
    var match$18=m2[9];
    var $js$66=match$17;
    if($js$66)
     {var $js$67=match$18;
      if($js$67){var exit$8=117}else{l$4=match$17;var exit$8=115}}
    else
     {var $js$68=match$18;
      if($js$68){var exit$8=117}else{var new_raised_exceptions=0}}
    switch(exit$8)
     {case 117:
       var $js$69=match$17;
       if($js$69)
        {var $js$70=List["mem"];
         var $js$71=$js$70(8,merge_options);
         if($js$71)
          {var $js$72=List["partition"];
           var
            match$19=
             $js$72
              (function(param)
                {var $js$73=List["mem_assoc"];
                 return $js$73(param[1],match$17)},
               match$18);
           var
            iter$1=
             function(param)
              {var $js$73=param;
               if($js$73)
                {var match$20=param[1];
                 var exc2=match$20[1];
                 var $js$74=List["assoc"];
                 var desc1=$js$74(exc2,match$17);
                 var $js$75=Pervasives["@"];
                 var $js$76=$js$75(desc1,[0,0,match$20[2]]);
                 var $js$77=[0,exc2,$js$76];
                 var $js$78=iter$1(param[2]);
                 return [0,$js$77,$js$78]}
               else
                {return 0}};
           var l1_completed$1=iter$1(match$19[1]);
           var $js$73=Pervasives["@"];
           var new_raised_exceptions=$js$73(l1_completed$1,match$19[2])}
         else
          {var new_raised_exceptions=match$17}}
       else
        {"unknown block:(exit 115 match/1465)"}
      case 115:var new_raised_exceptions=l$4
      }
    var match$20=m1[10];
    var match$21=m2[10];
    var $js$74=match$20;
    if($js$74)
     {var t1$1=match$20[1];
      var $js$75=match$21;
      if($js$75)
       {var $js$76=List["mem"];
        var $js$77=$js$76(9,merge_options);
        if($js$77)
         {var $js$78=Pervasives["@"];
          var $js$79=$js$78(t1$1,[0,0,match$21[1]]);
          var new_rv=[0,$js$79]}
        else
         {var new_rv=[0,t1$1]}}
      else
       {t$1=t1$1;var exit$9=110}}
    else
     {var $js$80=match$21;
      if($js$80){var t$1=match$21[1];var exit$9=110}else{var new_rv=0}}
    switch(exit$9){case 110:var new_rv=[0,t$1]}
    var match$22=m1[11];
    var match$23=m2[11];
    var $js$81=match$22;
    if($js$81)
     {var $js$82=match$23;
      if($js$82)
       {var $js$83=List["mem"];
        var $js$84=$js$83(10,merge_options);
        if($js$84)
         {var $js$85=Pervasives["@"];var new_custom=$js$85(match$22,match$23)}
        else
         {var new_custom=match$22}}
      else
       {l$5=match$22;var exit$10=105}}
    else
     {var $js$86=match$23;
      if($js$86){l$5=match$23;var exit$10=105}else{var new_custom=0}}
    switch(exit$10){case 105:var new_custom=l$5}
    return [0,
            new_desc_opt,
            new_authors,
            new_version,
            new_sees,
            new_since,
            new_before$3,
            new_dep,
            new_params,
            new_raised_exceptions,
            new_rv,
            new_custom]};
var
 merge_info_opt=
  function(merge_options,mli_opt,ml_opt)
   {var $js$1=mli_opt;
    if($js$1)
     {var i=mli_opt[1];
      var $js$2=ml_opt;
      if($js$2)
       {var $js$3=merge_info(merge_options,i,ml_opt[1]);return [0,$js$3]}
      else
       {return [0,i]}}
    else
     {var $js$4=ml_opt;if($js$4){return [0,ml_opt[1]]}else{return 0}}};
var
 merge_types=
  function(merge_options,mli,ml)
   {var $js$1=merge_info_opt(merge_options,mli[2],ml[2]);
    mli[2]=$js$1,0;
    var init=mli[7];
    var $js$2=[0,ml[7][1],init[2]];
    mli[7]=$js$2,0;
    var match=mli[8];
    var $js$3=match;
    if($js$3){var $js$4=mli[8]}else{var $js$4=ml[8]}
    mli[8]=$js$4,0;
    var match$1=mli[4];
    var match$2=ml[4];
    var $js$5=match$1;
    if(typeof $js$5=="number")
     {if($js$5==0)
       {return 0}
      else
       if($js$5==1)
        {var $js$6="unknown primitive:isint";
         if($js$6)
          {var $js$7=match$2!=0;if($js$7){return 0}else{var exit=101}}
         else
          {var exit=101}}}
    else
     {var $js$8=$js$5[0];
      if($js$8==0)
       {var $js$9=match$2;
        if(typeof $js$9=="number")
         {"unknown block:match/1434"}
        else
         {var $js$10=$js$9[0];
          if($js$10==0)
           {var l2=match$2[1];
            var
             f=
              function(cons)
               {try
                 {var $js$11=List["find"];
                  var
                   cons2=
                    $js$11
                     (function(c2){return "unknown primitive:caml_string_equal"},
                      l2);
                  var match$3=cons[4];
                  var match$4=cons2[4];
                  var $js$12=match$3;
                  if($js$12)
                   {var d1=match$3[1];
                    var $js$13=match$4;
                    if($js$13)
                     {var $js$14=List["mem"];
                      var $js$15=$js$14(0,merge_options);
                      if($js$15)
                       {var $js$16=merge_info(merge_options,d1,match$4[1]);
                        var new_desc=[0,$js$16]}
                      else
                       {var new_desc=[0,d1]}}
                    else
                     {d=d1;var exit$1=92}}
                  else
                   {var $js$17=match$4;
                    if($js$17)
                     {var d=match$4[1];var exit$1=92}
                    else
                     {var new_desc=0}}
                  switch(exit$1){case 92:var new_desc=[0,d]}
                  return cons[4]=new_desc,0}
                catch(exn)
                 {var $js$18=exn=Not_found;
                  if($js$18)
                   {var $js$19=Odoc_global["inverse_merge_ml_mli"][1];
                    if($js$19)
                     {return 0}
                    else
                     {var $js$20=Odoc_messages["different_types"];
                      var $js$21=$js$20(mli[1]);
                      var $js$22=[0,Failure,$js$21];
                      throw $js$22}}
                  else
                   {return "unknown primitive:reraise"}}};
            var $js$11=List["iter"];
            return $js$11(f,match$1[1])}
          else
           {var exit=101}}}
      else
       if($js$8==1)
        {var $js$12=match$2;
         if(typeof $js$12=="number")
          {"unknown block:match/1434"}
         else
          {var $js$13=$js$12[0];
           if($js$13==1)
            {var l2$1=match$2[1];
             var
              f$1=
               function(record)
                {try
                  {var $js$14=List["find"];
                   var
                    record2=
                     $js$14
                      (function(r){return "unknown primitive:caml_string_equal"},
                       l2$1);
                   var match$3=record[4];
                   var match$4=record2[4];
                   var $js$15=match$3;
                   if($js$15)
                    {var d1=match$3[1];
                     var $js$16=match$4;
                     if($js$16)
                      {var $js$17=List["mem"];
                       var $js$18=$js$17(0,merge_options);
                       if($js$18)
                        {var $js$19=merge_info(merge_options,d1,match$4[1]);
                         var new_desc=[0,$js$19]}
                       else
                        {var new_desc=[0,d1]}}
                     else
                      {d=d1;var exit$1=97}}
                   else
                    {var $js$20=match$4;
                     if($js$20)
                      {var d=match$4[1];var exit$1=97}
                     else
                      {var new_desc=0}}
                   switch(exit$1){case 97:var new_desc=[0,d]}
                   return record[4]=new_desc,0}
                 catch(exn)
                  {var $js$21=exn=Not_found;
                   if($js$21)
                    {var $js$22=Odoc_global["inverse_merge_ml_mli"][1];
                     if($js$22)
                      {return 0}
                     else
                      {var $js$23=Odoc_messages["different_types"];
                       var $js$24=$js$23(mli[1]);
                       var $js$25=[0,Failure,$js$24];
                       throw $js$25}}
                   else
                    {return "unknown primitive:reraise"}}};
             var $js$14=List["iter"];
             return $js$14(f$1,match$1[1])}
           else
            {var exit=101}}}}
    switch(exit)
     {case 101:
       var $js$15=Odoc_global["inverse_merge_ml_mli"][1];
       if($js$15)
        {return 0}
       else
        {var $js$16=Odoc_messages["different_types"];
         var $js$17=$js$16(mli[1]);
         var $js$18=[0,Failure,$js$17];
         throw $js$18}
      }};
var
 merge_type_extension=
  function(merge_options,mli,ml)
   {var $js$1=merge_info_opt(merge_options,mli[1],ml[1]);
    mli[1]=$js$1,0;
    var init=mli[6];
    var $js$2=[0,ml[6][1],init[2]];
    mli[6]=$js$2,0;
    var match=mli[7];
    var $js$3=match;
    if($js$3){var $js$4=mli[7]}else{var $js$4=ml[7]}
    return mli[7]=$js$4,0};
var
 merge_extension_constructor=
  function(merge_options,mli,ml)
   {var match=mli[7];
    var match$1=ml[7];
    var $js$1=match;
    if($js$1)
     {var d1=match[1];
      var $js$2=match$1;
      if($js$2)
       {var $js$3=List["mem"];
        var $js$4=$js$3(0,merge_options);
        if($js$4)
         {var $js$5=merge_info(merge_options,d1,match$1[1]);
          var new_desc=[0,$js$5]}
        else
         {var new_desc=[0,d1]}}
      else
       {d=d1;var exit=86}}
    else
     {var $js$6=match$1;
      if($js$6){var d=match$1[1];var exit=86}else{var new_desc=0}}
    switch(exit){case 86:var new_desc=[0,d]}
    return mli[7]=new_desc,0};
var
 merge_param_info=
  function(pi_mli,pi_ml)
   {var $js$1=pi_mli;
    if($js$1==0)
     {var sn_mli=pi_mli[1];
      var $js$2=pi_ml;
      if($js$2==0)
       {var $js$3="unknown primitive:caml_string_equal";
        if($js$3)
         {return [0,[0,pi_ml[1][1],sn_mli[2],sn_mli[3]]]}
        else
         {return pi_mli}}
      else
       if($js$2==1){return pi_mli}}
    else
     if($js$1==1)
      {var t_mli=pi_mli[2];
       var l_mli=pi_mli[1];
       var $js$4=pi_ml;
       if($js$4==0)
        {var sn_ml=pi_ml[1];return [0,[0,sn_ml[1],t_mli,sn_ml[3]]]}
       else
        if($js$4==1)
         {var l_ml=pi_ml[1];
          var $js$5=List["length"];
          var $js$6=$js$5(l_mli);
          var $js$7=List["length"];
          var $js$8=$js$7(l_ml);
          var $js$9=$js$6!=$js$8;
          if($js$9)
           {return pi_mli}
          else
           {var $js$10=List["map2"];
            var new_l=$js$10(merge_param_info,l_mli,l_ml);
            return [1,new_l,t_mli]}}}};
var
 merge_parameters=
  function(param_mli,param_ml)
   {var $js$1=param_mli;
    if($js$1)
     {var $js$2=param_ml;
      if($js$2)
       {var $js$3=merge_param_info(param_mli[1],param_ml[1]);
        var $js$4=merge_parameters(param_mli[2],param_ml[2]);
        return [0,$js$3,$js$4]}
      else
       {l=param_mli;var exit=82}}
    else
     {var $js$5=param_ml;if($js$5){l=param_ml;var exit=82}else{return 0}}
    switch(exit){case 82:return l}};
var
 merge_classes=
  function(merge_options,mli,ml)
   {var $js$1=merge_info_opt(merge_options,mli[2],ml[2]);
    mli[2]=$js$1,0;
    var init=mli[8];
    var $js$2=[0,ml[8][1],init[2]];
    mli[8]=$js$2,0;
    var $js$3=merge_parameters(mli[7],ml[7]);
    mli[7]=$js$3,0;
    var $js$4=Odoc_class["class_update_parameters_text"];
    $js$4(mli);
    var $js$5=List["iter"];
    var $js$6=Odoc_class["class_attributes"];
    var $js$7=$js$6(0,mli);
    $js$5
     (function(a)
       {try
         {var $js$8=List["find"];
          var $js$9=List["rev"];
          var $js$10=Odoc_class["class_elements"];
          var $js$11=$js$10(0,ml);
          var $js$12=$js$9($js$11);
          var
           match=
            $js$8
             (function(ele)
               {var $js$13=ele;
                if($js$13==0)
                 {var a2=ele[1];
                  var $js$14="unknown primitive:caml_string_equal";
                  if($js$14)
                   {var $js$15=merge_info_opt(merge_options,a[1][2],a2[1][2]);
                    a[1][2]=$js$15,0;
                    var init$1=a[1][7];
                    var $js$16=[0,a2[1][7][1],init$1[2]];
                    a[1][7]=$js$16,0;
                    var $js$17=Odoc_global["keep_code"][1];
                    if($js$17){a[1][6]=a2[1][6],0}else{}
                    return 1}
                  else
                   {return 0}}
                else
                 if($js$13==1){var exit=79}else if($js$13==2){var exit=79}
                switch(exit){case 79:return 0}},
              $js$12);
          return 0}
        catch(exn)
         {var $js$13=exn=Not_found;
          if($js$13){return 0}else{return "unknown primitive:reraise"}}},
      $js$7);
    var $js$8=List["iter"];
    var $js$9=Odoc_class["class_methods"];
    var $js$10=$js$9(0,mli);
    return $js$8
            (function(m)
              {try
                {var $js$11=List["find"];
                 var $js$12=List["rev"];
                 var $js$13=Odoc_class["class_elements"];
                 var $js$14=$js$13(0,ml);
                 var $js$15=$js$12($js$14);
                 var
                  match=
                   $js$11
                    (function(ele)
                      {var $js$16=ele;
                       if($js$16==0)
                        {var exit=76}
                       else
                        if($js$16==1)
                         {var m2=ele[1];
                          var $js$17="unknown primitive:caml_string_equal";
                          if($js$17)
                           {var $js$18=merge_info_opt(merge_options,m[1][2],m2[1][2]);
                            m[1][2]=$js$18,0;
                            var init$1=m[1][7];
                            var $js$19=[0,m2[1][7][1],init$1[2]];
                            m[1][7]=$js$19,0;
                            var $js$20=merge_parameters(m[1][5],m2[1][5]);
                            m[1][5]=$js$20,0;
                            var $js$21=Odoc_value["update_value_parameters_text"];
                            $js$21(m[1]);
                            var $js$22=Odoc_global["keep_code"][1];
                            if($js$22){m[1][6]=m2[1][6],0}else{}
                            return 1}
                          else
                           {return 0}}
                        else
                         if($js$16==2){var exit=76}
                       switch(exit){case 76:return 0}},
                     $js$15);
                 return 0}
               catch(exn)
                {var $js$16=exn=Not_found;
                 if($js$16){return 0}else{return "unknown primitive:reraise"}}},
             $js$10)};
var
 merge_class_types=
  function(merge_options,mli,ml)
   {var $js$1=merge_info_opt(merge_options,mli[2],ml[2]);
    mli[2]=$js$1,0;
    var init=mli[7];
    var $js$2=[0,ml[7][1],init[2]];
    mli[7]=$js$2,0;
    var $js$3=List["iter"];
    var $js$4=Odoc_class["class_type_attributes"];
    var $js$5=$js$4(0,mli);
    $js$3
     (function(a)
       {try
         {var $js$6=List["find"];
          var $js$7=List["rev"];
          var $js$8=Odoc_class["class_type_elements"];
          var $js$9=$js$8(0,ml);
          var $js$10=$js$7($js$9);
          var
           match=
            $js$6
             (function(ele)
               {var $js$11=ele;
                if($js$11==0)
                 {var a2=ele[1];
                  var $js$12="unknown primitive:caml_string_equal";
                  if($js$12)
                   {var $js$13=merge_info_opt(merge_options,a[1][2],a2[1][2]);
                    a[1][2]=$js$13,0;
                    var init$1=a[1][7];
                    var $js$14=[0,a2[1][7][1],init$1[2]];
                    a[1][7]=$js$14,0;
                    var $js$15=Odoc_global["keep_code"][1];
                    if($js$15){a[1][6]=a2[1][6],0}else{}
                    return 1}
                  else
                   {return 0}}
                else
                 if($js$11==1){var exit=72}else if($js$11==2){var exit=72}
                switch(exit){case 72:return 0}},
              $js$10);
          return 0}
        catch(exn)
         {var $js$11=exn=Not_found;
          if($js$11){return 0}else{return "unknown primitive:reraise"}}},
      $js$5);
    var $js$6=List["iter"];
    var $js$7=Odoc_class["class_type_methods"];
    var $js$8=$js$7(0,mli);
    return $js$6
            (function(m)
              {try
                {var $js$9=List["find"];
                 var $js$10=List["rev"];
                 var $js$11=Odoc_class["class_type_elements"];
                 var $js$12=$js$11(0,ml);
                 var $js$13=$js$10($js$12);
                 var
                  match=
                   $js$9
                    (function(ele)
                      {var $js$14=ele;
                       if($js$14==0)
                        {var exit=69}
                       else
                        if($js$14==1)
                         {var m2=ele[1];
                          var $js$15="unknown primitive:caml_string_equal";
                          if($js$15)
                           {var $js$16=merge_info_opt(merge_options,m[1][2],m2[1][2]);
                            m[1][2]=$js$16,0;
                            var init$1=m[1][7];
                            var $js$17=[0,m2[1][7][1],init$1[2]];
                            m[1][7]=$js$17,0;
                            var $js$18=merge_parameters(m[1][5],m2[1][5]);
                            m[1][5]=$js$18,0;
                            var $js$19=Odoc_value["update_value_parameters_text"];
                            $js$19(m[1]);
                            var $js$20=Odoc_global["keep_code"][1];
                            if($js$20){m[1][6]=m2[1][6],0}else{}
                            return 1}
                          else
                           {return 0}}
                        else
                         if($js$14==2){var exit=69}
                       switch(exit){case 69:return 0}},
                     $js$13);
                 return 0}
               catch(exn)
                {var $js$14=exn=Not_found;
                 if($js$14){return 0}else{return "unknown primitive:reraise"}}},
             $js$8)};
var
 merge_module_types=
  function(merge_options,mli,ml)
   {var $js$1=merge_info_opt(merge_options,mli[2],ml[2]);
    mli[2]=$js$1,0;
    var init=mli[7];
    var $js$2=[0,ml[7][1],init[2]];
    mli[7]=$js$2,0;
    var $js$3=List["iter"];
    var $js$4=Odoc_module["module_type_type_extensions"];
    var $js$5=$js$4(0,mli);
    $js$3
     (function(te)
       {var
         f=
          function(exts,elems)
           {var $js$6=exts;
            if($js$6)
             {var $js$7=elems;
              if($js$7)
               {var match=elems[1];
                var $js$8=match;
                if($js$8==6)
                 {var te2=match[1];
                  var
                   merge_ext=
                    function(xt)
                     {try
                       {var $js$9=List["find"];
                        var
                         xt2=
                          $js$9
                           (function(xt2$1)
                             {return "unknown primitive:caml_string_equal"},
                            te2[5]);
                        merge_extension_constructor(merge_options,xt,xt2);
                        return 1}
                      catch(exn)
                       {var $js$10=exn=Not_found;
                        if($js$10){return 0}else{return "unknown primitive:reraise"}}};
                  var $js$9=List["partition"];
                  var match$1=$js$9(merge_ext,exts);
                  var $js$10=match$1[1]!=0;
                  if($js$10){merge_type_extension(merge_options,te,te2)}else{}
                  return f(match$1[2],elems[2])}
                else
                 {return f(exts,elems[2])}}
              else
               {var exit=31}}
            else
             {var exit=31}
            switch(exit){case 31:return 0}};
        var $js$6=List["rev"];
        var $js$7=Odoc_module["module_type_elements"];
        var $js$8=$js$7(0,ml);
        var $js$9=$js$6($js$8);
        return f(te[5],$js$9)},
      $js$5);
    var $js$6=List["iter"];
    var $js$7=Odoc_module["module_type_exceptions"];
    var $js$8=$js$7(0,mli);
    $js$6
     (function(ex)
       {try
         {var $js$9=List["find"];
          var $js$10=List["rev"];
          var $js$11=Odoc_module["module_type_elements"];
          var $js$12=$js$11(0,ml);
          var $js$13=$js$10($js$12);
          var
           match=
            $js$9
             (function(ele)
               {var $js$14=ele;
                if($js$14==7)
                 {var ex2=ele[1];
                  var $js$15="unknown primitive:caml_string_equal";
                  if($js$15)
                   {var $js$16=merge_info_opt(merge_options,ex[2],ex2[2]);
                    ex[2]=$js$16,0;
                    var init$1=ex[6];
                    var $js$17=[0,ex2[6][1],init$1[2]];
                    ex[6]=$js$17,0;
                    var match$1=ex[7];
                    var $js$18=match$1;
                    if($js$18){var $js$19=ex[7]}else{var $js$19=ex2[7]}
                    ex[7]=$js$19,0;
                    return 1}
                  else
                   {return 0}}
                else
                 {return 0}},
              $js$13);
          return 0}
        catch(exn)
         {var $js$14=exn=Not_found;
          if($js$14){return 0}else{return "unknown primitive:reraise"}}},
      $js$8);
    var $js$9=List["iter"];
    var $js$10=Odoc_module["module_type_types"];
    var $js$11=$js$10(0,mli);
    $js$9
     (function(ty)
       {try
         {var $js$12=List["find"];
          var $js$13=List["rev"];
          var $js$14=Odoc_module["module_type_elements"];
          var $js$15=$js$14(0,ml);
          var $js$16=$js$13($js$15);
          var
           match=
            $js$12
             (function(ele)
               {var $js$17=ele;
                if($js$17==8)
                 {var ty2=ele[1];
                  var $js$18="unknown primitive:caml_string_equal";
                  if($js$18)
                   {merge_types(merge_options,ty,ty2);return 1}
                  else
                   {return 0}}
                else
                 {return 0}},
              $js$16);
          return 0}
        catch(exn)
         {var $js$17=exn=Not_found;
          if($js$17){return 0}else{return "unknown primitive:reraise"}}},
      $js$11);
    var $js$12=List["iter"];
    var $js$13=Odoc_module["module_type_modules"];
    var $js$14=$js$13(0,mli);
    $js$12
     (function(m)
       {try
         {var $js$15=List["find"];
          var $js$16=List["rev"];
          var $js$17=Odoc_module["module_type_elements"];
          var $js$18=$js$17(0,ml);
          var $js$19=$js$16($js$18);
          var
           match=
            $js$15
             (function(ele)
               {var $js$20=ele;
                if($js$20==0)
                 {var m2=ele[1];
                  var $js$21="unknown primitive:caml_string_equal";
                  if($js$21)
                   {var $js$22=merge_modules(merge_options,m,m2);0;return 1}
                  else
                   {return 0}}
                else
                 {return 0}},
              $js$19);
          return 0}
        catch(exn)
         {var $js$20=exn=Not_found;
          if($js$20){return 0}else{return "unknown primitive:reraise"}}},
      $js$14);
    var $js$15=List["iter"];
    var $js$16=Odoc_module["module_type_module_types"];
    var $js$17=$js$16(0,mli);
    $js$15
     (function(m)
       {try
         {var $js$18=List["find"];
          var $js$19=List["rev"];
          var $js$20=Odoc_module["module_type_elements"];
          var $js$21=$js$20(0,ml);
          var $js$22=$js$19($js$21);
          var
           match=
            $js$18
             (function(ele)
               {var $js$23=ele;
                if($js$23==1)
                 {var m2=ele[1];
                  var $js$24="unknown primitive:caml_string_equal";
                  if($js$24)
                   {merge_module_types(merge_options,m,m2);return 1}
                  else
                   {return 0}}
                else
                 {return 0}},
              $js$22);
          return 0}
        catch(exn)
         {var $js$23=exn=Not_found;
          if($js$23){return 0}else{return "unknown primitive:reraise"}}},
      $js$17);
    var $js$18=List["iter"];
    var $js$19=Odoc_module["module_type_values"];
    var $js$20=$js$19(0,mli);
    $js$18
     (function(v)
       {try
         {var $js$21=List["find"];
          var $js$22=List["rev"];
          var $js$23=Odoc_module["module_type_elements"];
          var $js$24=$js$23(0,ml);
          var $js$25=$js$22($js$24);
          var
           match=
            $js$21
             (function(ele)
               {var $js$26=ele;
                if($js$26==5)
                 {var v2=ele[1];
                  var $js$27="unknown primitive:caml_string_equal";
                  if($js$27)
                   {var $js$28=merge_info_opt(merge_options,v[2],v2[2]);
                    v[2]=$js$28,0;
                    var init$1=v[7];
                    var $js$29=[0,v2[7][1],init$1[2]];
                    v[7]=$js$29,0;
                    var $js$30=merge_parameters(v[5],v2[5]);
                    v[5]=$js$30,0;
                    var $js$31=Odoc_value["update_value_parameters_text"];
                    $js$31(v);
                    var $js$32=Odoc_global["keep_code"][1];
                    if($js$32){v[6]=v2[6],0}else{}
                    return 1}
                  else
                   {return 0}}
                else
                 {return 0}},
              $js$25);
          return 0}
        catch(exn)
         {var $js$26=exn=Not_found;
          if($js$26){return 0}else{return "unknown primitive:reraise"}}},
      $js$20);
    var $js$21=List["iter"];
    var $js$22=Odoc_module["module_type_classes"];
    var $js$23=$js$22(0,mli);
    $js$21
     (function(c)
       {try
         {var $js$24=List["find"];
          var $js$25=List["rev"];
          var $js$26=Odoc_module["module_type_elements"];
          var $js$27=$js$26(0,ml);
          var $js$28=$js$25($js$27);
          var
           match=
            $js$24
             (function(ele)
               {var $js$29=ele;
                if($js$29==3)
                 {var c2=ele[1];
                  var $js$30="unknown primitive:caml_string_equal";
                  if($js$30)
                   {merge_classes(merge_options,c,c2);return 1}
                  else
                   {return 0}}
                else
                 {return 0}},
              $js$28);
          return 0}
        catch(exn)
         {var $js$29=exn=Not_found;
          if($js$29){return 0}else{return "unknown primitive:reraise"}}},
      $js$23);
    var $js$24=List["iter"];
    var $js$25=Odoc_module["module_type_class_types"];
    var $js$26=$js$25(0,mli);
    return $js$24
            (function(c)
              {try
                {var $js$27=List["find"];
                 var $js$28=List["rev"];
                 var $js$29=Odoc_module["module_type_elements"];
                 var $js$30=$js$29(0,ml);
                 var $js$31=$js$28($js$30);
                 var
                  match=
                   $js$27
                    (function(ele)
                      {var $js$32=ele;
                       if($js$32==4)
                        {var c2=ele[1];
                         var $js$33="unknown primitive:caml_string_equal";
                         if($js$33)
                          {merge_class_types(merge_options,c,c2);return 1}
                         else
                          {return 0}}
                       else
                        {return 0}},
                     $js$31);
                 return 0}
               catch(exn)
                {var $js$32=exn=Not_found;
                 if($js$32){return 0}else{return "unknown primitive:reraise"}}},
             $js$26)};
var
 merge_modules=
  function(merge_options,mli,ml)
   {var $js$1=merge_info_opt(merge_options,mli[3],ml[3]);
    mli[3]=$js$1,0;
    var init=mli[7];
    var $js$2=[0,ml[7][1],init[2]];
    mli[7]=$js$2,0;
    var
     remove_doubles=
      function(acc,param)
       {var $js$3=param;
        if($js$3)
         {var q=param[2];
          var h=param[1];
          var $js$4=List["mem"];
          var $js$5=$js$4(h,acc);
          if($js$5)
           {return remove_doubles(acc,q)}
          else
           {return remove_doubles([0,h,acc],q)}}
        else
         {return acc}};
    var $js$3=remove_doubles(mli[8],ml[8]);
    mli[8]=$js$3,0;
    var $js$4=Odoc_global["keep_code"][1];
    if($js$4)
     {var match=mli[9];
      var match$1=ml[9];
      var $js$5=match;
      if($js$5)
       {var code=[0,match[1]]}
      else
       {var $js$6=match$1;if($js$6){var code=[0,match$1[1]]}else{var code=0}}}
    else
     {var code=0}
    var $js$7=Odoc_global["keep_code"][1];
    if($js$7)
     {var match$2=mli[10];
      var match$3=ml[10];
      var $js$8=match$2;
      if($js$8)
       {var code_intf=[0,match$2[1]]}
      else
       {var $js$9=match$3;
        if($js$9){var code_intf=[0,match$3[1]]}else{var code_intf=0}}}
    else
     {var code_intf=0}
    mli[9]=code,0;
    mli[10]=code_intf,0;
    var $js$10=List["iter"];
    var $js$11=Odoc_module["module_type_extensions"];
    var $js$12=$js$11(0,mli);
    $js$10
     (function(te)
       {var
         f=
          function(exts,elems)
           {var $js$13=exts;
            if($js$13)
             {var $js$14=elems;
              if($js$14)
               {var match$4=elems[1];
                var $js$15=match$4;
                if($js$15==6)
                 {var te2=match$4[1];
                  var
                   merge_ext=
                    function(xt)
                     {try
                       {var $js$16=List["find"];
                        var
                         xt2=
                          $js$16
                           (function(xt2$1)
                             {return "unknown primitive:caml_string_equal"},
                            te2[5]);
                        merge_extension_constructor(merge_options,xt,xt2);
                        return 1}
                      catch(exn)
                       {var $js$17=exn=Not_found;
                        if($js$17){return 0}else{return "unknown primitive:reraise"}}};
                  var $js$16=List["partition"];
                  var match$5=$js$16(merge_ext,exts);
                  var $js$17=match$5[1]!=0;
                  if($js$17){merge_type_extension(merge_options,te,te2)}else{}
                  return f(match$5[2],elems[2])}
                else
                 {return f(exts,elems[2])}}
              else
               {var exit=59}}
            else
             {var exit=59}
            switch(exit){case 59:return 0}};
        var $js$13=List["rev"];
        var $js$14=Odoc_module["module_elements"];
        var $js$15=$js$14(0,ml);
        var $js$16=$js$13($js$15);
        return f(te[5],$js$16)},
      $js$12);
    var $js$13=List["iter"];
    var $js$14=Odoc_module["module_exceptions"];
    var $js$15=$js$14(0,mli);
    $js$13
     (function(ex)
       {try
         {var $js$16=List["find"];
          var $js$17=List["rev"];
          var $js$18=Odoc_module["module_elements"];
          var $js$19=$js$18(0,ml);
          var $js$20=$js$17($js$19);
          var
           match$4=
            $js$16
             (function(ele)
               {var $js$21=ele;
                if($js$21==7)
                 {var ex2=ele[1];
                  var $js$22="unknown primitive:caml_string_equal";
                  if($js$22)
                   {var $js$23=merge_info_opt(merge_options,ex[2],ex2[2]);
                    ex[2]=$js$23,0;
                    var init$1=ex[6];
                    var $js$24=[0,ex[6][1],init$1[2]];
                    ex[6]=$js$24,0;
                    var match$5=ex[7];
                    var $js$25=match$5;
                    if($js$25){var $js$26=ex[7]}else{var $js$26=ex2[7]}
                    ex[7]=$js$26,0;
                    return 1}
                  else
                   {return 0}}
                else
                 {return 0}},
              $js$20);
          return 0}
        catch(exn)
         {var $js$21=exn=Not_found;
          if($js$21){return 0}else{return "unknown primitive:reraise"}}},
      $js$15);
    var $js$16=List["iter"];
    var $js$17=Odoc_module["module_types"];
    var $js$18=$js$17(0,mli);
    $js$16
     (function(ty)
       {try
         {var $js$19=List["find"];
          var $js$20=List["rev"];
          var $js$21=Odoc_module["module_elements"];
          var $js$22=$js$21(0,ml);
          var $js$23=$js$20($js$22);
          var
           match$4=
            $js$19
             (function(ele)
               {var $js$24=ele;
                if($js$24==8)
                 {var ty2=ele[1];
                  var $js$25="unknown primitive:caml_string_equal";
                  if($js$25)
                   {merge_types(merge_options,ty,ty2);return 1}
                  else
                   {return 0}}
                else
                 {return 0}},
              $js$23);
          return 0}
        catch(exn)
         {var $js$24=exn=Not_found;
          if($js$24){return 0}else{return "unknown primitive:reraise"}}},
      $js$18);
    var $js$19=List["iter"];
    var $js$20=Odoc_module["module_modules"];
    var $js$21=$js$20(0,mli);
    $js$19
     (function(m)
       {try
         {var $js$22=List["find"];
          var $js$23=List["rev"];
          var $js$24=Odoc_module["module_elements"];
          var $js$25=$js$24(0,ml);
          var $js$26=$js$23($js$25);
          var
           match$4=
            $js$22
             (function(ele)
               {var $js$27=ele;
                if($js$27==0)
                 {var m2=ele[1];
                  var $js$28="unknown primitive:caml_string_equal";
                  if($js$28)
                   {var $js$29=merge_modules(merge_options,m,m2);0;return 1}
                  else
                   {return 0}}
                else
                 {return 0}},
              $js$26);
          return 0}
        catch(exn)
         {var $js$27=exn=Not_found;
          if($js$27){return 0}else{return "unknown primitive:reraise"}}},
      $js$21);
    var $js$22=List["iter"];
    var $js$23=Odoc_module["module_module_types"];
    var $js$24=$js$23(0,mli);
    $js$22
     (function(m)
       {try
         {var $js$25=List["find"];
          var $js$26=List["rev"];
          var $js$27=Odoc_module["module_elements"];
          var $js$28=$js$27(0,ml);
          var $js$29=$js$26($js$28);
          var
           match$4=
            $js$25
             (function(ele)
               {var $js$30=ele;
                if($js$30==1)
                 {var m2=ele[1];
                  var $js$31="unknown primitive:caml_string_equal";
                  if($js$31)
                   {merge_module_types(merge_options,m,m2);return 1}
                  else
                   {return 0}}
                else
                 {return 0}},
              $js$29);
          return 0}
        catch(exn)
         {var $js$30=exn=Not_found;
          if($js$30){return 0}else{return "unknown primitive:reraise"}}},
      $js$24);
    var $js$25=List["iter"];
    var $js$26=Odoc_module["module_values"];
    var $js$27=$js$26(0,mli);
    $js$25
     (function(v)
       {try
         {var $js$28=List["find"];
          var $js$29=List["rev"];
          var $js$30=Odoc_module["module_values"];
          var $js$31=$js$30(0,ml);
          var $js$32=$js$29($js$31);
          var
           match$4=
            $js$28
             (function(v2)
               {var $js$33="unknown primitive:caml_string_equal";
                if($js$33)
                 {var $js$34=merge_info_opt(merge_options,v[2],v2[2]);
                  v[2]=$js$34,0;
                  var init$1=v[7];
                  var $js$35=[0,v2[7][1],init$1[2]];
                  v[7]=$js$35,0;
                  var $js$36=merge_parameters(v[5],v2[5]);
                  v[5]=$js$36,0;
                  var $js$37=Odoc_value["update_value_parameters_text"];
                  $js$37(v);
                  var $js$38=Odoc_global["keep_code"][1];
                  if($js$38){v[6]=v2[6],0}else{}
                  return 1}
                else
                 {return 0}},
              $js$32);
          return 0}
        catch(exn)
         {var $js$33=exn=Not_found;
          if($js$33){return 0}else{return "unknown primitive:reraise"}}},
      $js$27);
    var $js$28=List["iter"];
    var $js$29=Odoc_module["module_classes"];
    var $js$30=$js$29(0,mli);
    $js$28
     (function(c)
       {try
         {var $js$31=List["find"];
          var $js$32=List["rev"];
          var $js$33=Odoc_module["module_elements"];
          var $js$34=$js$33(0,ml);
          var $js$35=$js$32($js$34);
          var
           match$4=
            $js$31
             (function(ele)
               {var $js$36=ele;
                if($js$36==3)
                 {var c2=ele[1];
                  var $js$37="unknown primitive:caml_string_equal";
                  if($js$37)
                   {merge_classes(merge_options,c,c2);return 1}
                  else
                   {return 0}}
                else
                 {return 0}},
              $js$35);
          return 0}
        catch(exn)
         {var $js$36=exn=Not_found;
          if($js$36){return 0}else{return "unknown primitive:reraise"}}},
      $js$30);
    var $js$31=List["iter"];
    var $js$32=Odoc_module["module_class_types"];
    var $js$33=$js$32(0,mli);
    $js$31
     (function(c)
       {try
         {var $js$34=List["find"];
          var $js$35=List["rev"];
          var $js$36=Odoc_module["module_elements"];
          var $js$37=$js$36(0,ml);
          var $js$38=$js$35($js$37);
          var
           match$4=
            $js$34
             (function(ele)
               {var $js$39=ele;
                if($js$39==4)
                 {var c2=ele[1];
                  var $js$40="unknown primitive:caml_string_equal";
                  if($js$40)
                   {merge_class_types(merge_options,c,c2);return 1}
                  else
                   {return 0}}
                else
                 {return 0}},
              $js$38);
          return 0}
        catch(exn)
         {var $js$39=exn=Not_found;
          if($js$39){return 0}else{return "unknown primitive:reraise"}}},
      $js$33);
    return mli};
var
 merge=
  function(merge_options,modules_list)
   {var
     iter=
      function(param)
       {var $js$1=param;
        if($js$1)
         {var m=param[1];
          var $js$2=List["partition"];
          var
           match=
            $js$2
             (function(m2){return "unknown primitive:caml_string_equal"},
              param[2]);
          var l_others=match[2];
          var l_same=match[1];
          var $js$3=l_same;
          if($js$3)
           {var $js$4=l_same[2];
            if($js$4)
             {var $js$5=Odoc_messages["too_many_module_objects"];
              var $js$6=$js$5(m[1]);
              var $js$7=[0,Failure,$js$6];
              throw $js$7}
            else
             {var m2=l_same[1];
              var
               f=
                function(b)
                 {var $js$8=Odoc_global["inverse_merge_ml_mli"][1];
                  if($js$8){return !b}else{return b}};
              var match$1=f(m[4]);
              var match$2=f(m2[4]);
              var $js$8=match$1!=0;
              if($js$8)
               {var $js$9=match$2!=0;
                if($js$9)
                 {var $js$10=Odoc_global["inverse_merge_ml_mli"][1];
                  if($js$10)
                   {var $js$11=Odoc_messages["two_implementations"];
                    var $js$12=$js$11(m[1]);
                    var $js$13=[0,Failure,$js$12];
                    throw $js$13}
                  else
                   {var $js$14=Odoc_messages["two_interfaces"];
                    var $js$15=$js$14(m[1]);
                    var $js$16=[0,Failure,$js$15];
                    throw $js$16}}
                else
                 {var $js$17=merge_modules(merge_options,m,m2);
                  var $js$18=iter(l_others);
                  return [0,$js$17,$js$18]}}
              else
               {var $js$19=match$2!=0;
                if($js$19)
                 {var $js$20=merge_modules(merge_options,m2,m);
                  var $js$21=iter(l_others);
                  return [0,$js$20,$js$21]}
                else
                 {var $js$22=Odoc_global["inverse_merge_ml_mli"][1];
                  if($js$22)
                   {var $js$23=Odoc_messages["two_interfaces"];
                    var $js$24=$js$23(m[1]);
                    var $js$25=[0,Failure,$js$24];
                    throw $js$25}
                  else
                   {var $js$26=Odoc_messages["two_implementations"];
                    var $js$27=$js$26(m[1]);
                    var $js$28=[0,Failure,$js$27];
                    throw $js$28}}}}}
          else
           {var $js$29=iter(l_others);return [0,m,$js$29]}}
        else
         {return 0}};
    return iter(modules_list)};
module["exports"]=
{"merge_before_tags":merge_before_tags,
 "merge_info_opt":merge_info_opt,
 "merge":merge};
