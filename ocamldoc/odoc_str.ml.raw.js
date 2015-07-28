var Odoc_name=require("Odoc_name");
var String=require("String");
var Printtyp=require("Printtyp");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Format=require("Format");
var Odoc_print=require("Odoc_print");
var Buffer=require("Buffer");
var Odoc_misc=require("Odoc_misc");
var Odoc_messages=require("Odoc_messages");
var
 string_of_variance=
  function(t,param)
   {var $js=((t[4]=0)||(t[4]=1))&&(t[6]=0);
    if($js)
     {var cn=param[2];
      var $js$1=param[1]!=0;
      if($js$1)
       {var $js$2=cn!=0;if($js$2){var exit=52}else{return "+"}}
      else
       {var $js$3=cn!=0;if($js$3){return "-"}else{var exit=52}}
      switch(exit){case 52:return ""}}
    else
     {return ""}};
var
 is_arrow_type=
  function(t)
   {var match=t[1];
    var $js=match;
    if(typeof $js=="number")
     {"unknown block:match/1235"}
    else
     {var $js$1=$js[0];
      if($js$1==1)
       {return 1}
      else
       if($js$1==6)
        {var exit=51}
       else
        if($js$1==7){var exit=51}else{var exit=50}}
    switch(exit){case 51:return is_arrow_type(match[1]);case 50:return 0}};
var
 raw_string_of_type_list=
  function(sep,type_list)
   {var $js=Buffer["create"];
    var buf=$js(256);
    var $js$1=Format["formatter_of_buffer"];
    var fmt=$js$1(buf);
    var
     need_parent=
      function(t)
       {var match=t[1];
        var $js$2=match;
        if(typeof $js$2=="number")
         {"unknown block:match/1209"}
        else
         {var $js$3=$js$2[0];
          if($js$3==1)
           {var exit=42}
          else
           if($js$3==2)
            {var exit=42}
           else
            if($js$3==3)
             {return 0}
            else
             if($js$3==6)
              {var exit=45}
             else
              if($js$3==7){var exit=45}else{var exit=44}}
        switch(exit)
         {case 45:return need_parent(match[1]);
          case 42:return 1;
          case 44:return 0
          }};
    var
     print_one_type=
      function(variance,t)
       {var $js$2=Printtyp["mark_loops"];
        $js$2(t);
        var $js$3=need_parent(t);
        if($js$3)
         {var $js$4=Format["fprintf"];
          $js$4(fmt,[0,[12,40,[2,0,0]],"(%s"],variance);
          var $js$5=Printtyp["type_scheme_max"];
          $js$5([0,0],fmt,t);
          var $js$6=Format["fprintf"];
          return $js$6(fmt,[0,[12,41,0],")"])}
        else
         {var $js$7=Format["fprintf"];
          $js$7(fmt,[0,[2,0,0],"%s"],variance);
          var $js$8=Printtyp["type_scheme_max"];
          return $js$8([0,0],fmt,t)}};
    var $js$2=type_list;
    if($js$2)
     {var tyl=type_list[2];
      var match=type_list[1];
      var ty=match[2];
      var variance=match[1];
      var $js$3=tyl;
      if($js$3)
       {var $js$4=Format["fprintf"];
        $js$4(fmt,[0,[18,[1,[0,[11,"<hov 2>",0],"<hov 2>"]],0],"@[<hov 2>"]);
        print_one_type(variance,ty);
        var $js$5=List["iter"];
        $js$5
         (function(param)
           {var $js$6=Format["fprintf"];
            $js$6(fmt,[0,[17,[0,"@,",0,0],[2,0,0]],"@,%s"],sep);
            return print_one_type(param[1],param[2])},
          tyl);
        var $js$6=Format["fprintf"];
        $js$6(fmt,[0,[17,0,0],"@]"])}
      else
       {print_one_type(variance,ty)}}
    else
     {}
    var $js$7=Format["pp_print_flush"];
    $js$7(fmt,0);
    var $js$8=Buffer["contents"];
    return $js$8(buf)};
var
 string_of_type_list=
  function(par,sep,type_list)
   {var $js=par;
    if($js)
     {var par$1=par[1]}
    else
     {var $js$1=type_list;
      if($js$1)
       {var $js$2=type_list[2];if($js$2){var par$1=1}else{var exit=36}}
      else
       {var exit=36}
      switch(exit){case 36:var par$1=0}}
    var $js$3=Printf["sprintf"];
    var $js$4=par$1;
    if($js$4){var $js$5="("}else{var $js$5=""}
    var $js$6=List["map"];
    var $js$7=$js$6(function(t){return [0,"",t]},type_list);
    var $js$8=raw_string_of_type_list(sep,$js$7);
    var $js$9=par$1;
    if($js$9){var $js$10=")"}else{var $js$10=""}
    return $js$3([0,[2,0,[2,0,[2,0,0]]],"%s%s%s"],$js$5,$js$8,$js$10)};
var
 string_of_type_param_list=
  function(t)
   {var match=t[3];
    var $js=match;
    if($js)
     {var $js$1=match[2];if($js$1){var par=1}else{var exit=32}}
    else
     {var exit=32}
    switch(exit){case 32:var par=0}
    var $js$2=Printf["sprintf"];
    var $js$3=par;
    if($js$3){var $js$4="("}else{var $js$4=""}
    var $js$5=List["map"];
    var
     $js$6=
      $js$5
       (function(param)
         {var $js$7=string_of_variance(t,[0,param[2],param[3]]);
          return [0,$js$7,param[1]]},
        t[3]);
    var $js$7=raw_string_of_type_list(", ",$js$6);
    var $js$8=par;
    if($js$8){var $js$9=")"}else{var $js$9=""}
    return $js$2([0,[2,0,[2,0,[2,0,0]]],"%s%s%s"],$js$4,$js$7,$js$9)};
var
 string_of_type_extension_param_list=
  function(te)
   {var match=te[3];
    var $js=match;
    if($js)
     {var $js$1=match[2];if($js$1){var par=1}else{var exit=28}}
    else
     {var exit=28}
    switch(exit){case 28:var par=0}
    var $js$2=Printf["sprintf"];
    var $js$3=par;
    if($js$3){var $js$4="("}else{var $js$4=""}
    var $js$5=List["map"];
    var $js$6=$js$5(function(typ){return [0,"",typ]},te[3]);
    var $js$7=raw_string_of_type_list(", ",$js$6);
    var $js$8=par;
    if($js$8){var $js$9=")"}else{var $js$9=""}
    return $js$2([0,[2,0,[2,0,[2,0,0]]],"%s%s%s"],$js$4,$js$7,$js$9)};
var
 string_of_class_type_param_list=
  function(l)
   {var $js=l;
    if($js)
     {var $js$1=l[2];if($js$1){var par=1}else{var exit=24}}
    else
     {var exit=24}
    switch(exit){case 24:var par=0}
    var $js$2=Printf["sprintf"];
    var $js$3=par;
    if($js$3){var $js$4="["}else{var $js$4=""}
    var $js$5=List["map"];
    var $js$6=$js$5(function(typ){return [0,"",typ]},l);
    var $js$7=raw_string_of_type_list(", ",$js$6);
    var $js$8=par;
    if($js$8){var $js$9="]"}else{var $js$9=""}
    return $js$2([0,[2,0,[2,0,[2,0,0]]],"%s%s%s"],$js$4,$js$7,$js$9)};
var
 string_of_class_params=
  function(c)
   {var $js=Buffer["create"];
    var b=$js(256);
    var
     iter=
      function(param)
       {var $js$1=param;
        if($js$1==0)
         {var exit=21}
        else
         if($js$1==1)
          {var exit=21}
         else
          if($js$1==2)
           {var t=param[2];
            var label=param[1];
            var parent=is_arrow_type(t);
            var $js$2=Printf["bprintf"];
            var $js$3=label;
            if($js$3=="")
             {var $js$4=""}
            else
             {var $js$5=Pervasives["^"];var $js$4=$js$5(label,":")}
            var $js$6=parent;
            if($js$6){var $js$7="("}else{var $js$7=""}
            var $js$8=Odoc_print["string_of_type_expr"];
            var $js$9=Odoc_misc["is_optional"];
            var $js$10=$js$9(label);
            if($js$10)
             {var $js$11=Odoc_misc["remove_option"];var $js$12=$js$11(t)}
            else
             {var $js$12=t}
            var $js$13=$js$8($js$12);
            var $js$14=parent;
            if($js$14){var $js$15=")"}else{var $js$15=""}
            $js$2
             (b,
              [0,[2,0,[2,0,[2,0,[2,0,[11," -> ",0]]]]],"%s%s%s%s -> "],
              $js$4,
              $js$7,
              $js$13,
              $js$15);
            return iter(param[3])}
        switch(exit){case 21:return 0}};
    iter(c[3]);
    var $js$1=Buffer["contents"];
    return $js$1(b)};
var
 bool_of_private=
  function(param){var $js=param!=0;if($js){return 0}else{return 1}};
var
 string_of_type=
  function(t)
   {var M=Odoc_type;
    var P=Printf;
    var
     field_doc_str=
      function(param)
       {var $js=param;
        if($js)
         {var $js$1=P[4];
          var $js$2=Odoc_misc["string_of_info"];
          var $js$3=$js$2(param[1]);
          return $js$1([0,[11,"(* ",[2,0,[11," *)",0]]],"(* %s *)"],$js$3)}
        else
         {return ""}};
    var priv=bool_of_private(t[5]);
    var $js=String["concat"];
    var $js$1=List["map"];
    var
     $js$2=
      $js$1
       (function(param)
         {var $js$3=Pervasives["^"];
          var $js$4=string_of_variance(t,[0,param[2],param[3]]);
          var $js$5=Odoc_print["string_of_type_expr"];
          var $js$6=$js$5(param[1]);
          return $js$3($js$4,$js$6)},
        t[3]);
    var parameters_str=$js(" ",$js$2);
    var match=t[6];
    var $js$3=match;
    if($js$3)
     {var match$1=match[1];
      var $js$4=match$1;
      if($js$4==0)
       {var $js$5=Pervasives["^"];
        var $js$6=Pervasives["^"];
        var $js$7=priv;
        if($js$7){var $js$8="private "}else{var $js$8=""}
        var $js$9=Pervasives["^"];
        var $js$10=Odoc_print["string_of_type_expr"];
        var $js$11=$js$10(match$1[1]);
        var $js$12=$js$9($js$11," ");
        var $js$13=$js$6($js$8,$js$12);
        var manifest_str=$js$5("= ",$js$13)}
      else
       if($js$4==1)
        {var $js$14=P[4];
         var $js$15=priv;
         if($js$15){var $js$16="private "}else{var $js$16=""}
         var $js$17=String["concat"];
         var $js$18=List["map"];
         var
          $js$19=
           $js$18
            (function(field)
              {var $js$20=P[4];
               var $js$21=Odoc_print["string_of_type_expr"];
               var $js$22=$js$21(field[2]);
               var $js$23=field_doc_str(field[3]);
               return $js$20
                       ([0,
                         [11,"   ",[2,0,[11," : ",[2,0,[12,59,[2,0,0]]]]]],
                         "   %s : %s;%s"],
                        field[1],
                        $js$22,
                        $js$23)},
             match$1[1]);
         var $js$20=$js$17("\n",$js$19);
         var
          manifest_str=
           $js$14
            ([0,
              [11,"= ",[2,0,[11,"<\n",[2,0,[11,"\n>\n",0]]]]],
              "= %s<\n%s\n>\n"],
             $js$16,
             $js$20)}}
    else
     {var manifest_str=""}
    var match$2=t[4];
    var $js$21=match$2;
    if(typeof $js$21=="number")
     {if($js$21==0)
       {var type_kind_str=""}
      else
       if($js$21==1){var type_kind_str="= .."}}
    else
     {var $js$22=$js$21[0];
      if($js$22==0)
       {var $js$23=P[4];
        var $js$24=priv;
        if($js$24){var $js$25=" private"}else{var $js$25=""}
        var $js$26=String["concat"];
        var $js$27=List["map"];
        var
         $js$28=
          $js$27
           (function(cons)
             {var match$3=cons[4];
              var $js$29=match$3;
              if($js$29)
               {var $js$30=P[4];
                var $js$31=Odoc_misc["string_of_info"];
                var $js$32=$js$31(match$3[1]);
                var
                 comment=
                  $js$30([0,[11,"(* ",[2,0,[11," *)",0]]],"(* %s *)"],$js$32)}
              else
               {var comment=""}
              var
               string_of_parameters=
                function(lst)
                 {var $js$33=String["concat"];
                  var $js$34=List["map"];
                  var
                   $js$35=
                    $js$34
                     (function(t$1)
                       {var $js$36=Pervasives["^"];
                        var $js$37=Pervasives["^"];
                        var $js$38=Odoc_print["string_of_type_expr"];
                        var $js$39=$js$38(t$1);
                        var $js$40=$js$37($js$39,")");
                        return $js$36("(",$js$40)},
                      lst);
                  return $js$33(" * ",$js$35)};
              var $js$33=P[4];
              var match$4=cons[2];
              var match$5=cons[3];
              var $js$34=match$4;
              if($js$34)
               {var $js$35=match$5;
                if($js$35)
                 {var $js$36=P[4];
                  var $js$37=string_of_parameters(match$4);
                  var $js$38=Odoc_print["string_of_type_expr"];
                  var $js$39=$js$38(match$5[1]);
                  var
                   $js$40=
                    $js$36
                     ([0,[11," : ",[2,0,[11," -> ",[2,0,0]]]]," : %s -> %s"],
                      $js$37,
                      $js$39)}
                else
                 {var $js$41=Pervasives["^"];
                  var $js$42=string_of_parameters(match$4);
                  var $js$40=$js$41(" of ",$js$42)}}
              else
               {var $js$43=match$5;
                if($js$43)
                 {var $js$44=Pervasives["^"];
                  var $js$45=Odoc_print["string_of_type_expr"];
                  var $js$46=$js$45(match$5[1]);
                  var $js$40=$js$44(" : ",$js$46)}
                else
                 {var $js$40=""}}
              return $js$33
                      ([0,[11,"  | ",[2,0,[2,0,[2,0,0]]]],"  | %s%s%s"],
                       cons[1],
                       $js$40,
                       comment)},
            match$2[1]);
        var $js$29=$js$26("\n",$js$28);
        var
         type_kind_str=
          $js$23
           ([0,[12,61,[2,0,[12,10,[2,0,[12,10,0]]]]],"=%s\n%s\n"],
            $js$25,
            $js$29)}
      else
       if($js$22==1)
        {var $js$30=P[4];
         var $js$31=priv;
         if($js$31){var $js$32="private "}else{var $js$32=""}
         var $js$33=String["concat"];
         var $js$34=List["map"];
         var
          $js$35=
           $js$34
            (function(field)
              {var $js$36=P[4];
               var $js$37=field[2];
               if($js$37){var $js$38="mutable "}else{var $js$38=""}
               var $js$39=Odoc_print["string_of_type_expr"];
               var $js$40=$js$39(field[3]);
               var $js$41=field_doc_str(field[4]);
               return $js$36
                       ([0,
                         [11,"   ",[2,0,[2,0,[11," : ",[2,0,[12,59,[2,0,0]]]]]]],
                         "   %s%s : %s;%s"],
                        $js$38,
                        field[1],
                        $js$40,
                        $js$41)},
             match$2[1]);
         var $js$36=$js$33("\n",$js$35);
         var
          type_kind_str=
           $js$30
            ([0,
              [11,"= ",[2,0,[11,"{\n",[2,0,[11,"\n}\n",0]]]]],
              "= %s{\n%s\n}\n"],
             $js$32,
             $js$36)}}
    var $js$37=P[4];
    var $js$38=Odoc_name["simple"];
    var $js$39=$js$38(t[1]);
    var match$3=t[2];
    var $js$40=match$3;
    if($js$40)
     {var $js$41=Odoc_misc["string_of_info"];var $js$42=$js$41(match$3[1])}
    else
     {var $js$42=""}
    return $js$37
            ([0,
              [11,"type ",[2,0,[12,32,[2,0,[12,32,[2,0,[2,0,[2,0,0]]]]]]]],
              "type %s %s %s%s%s"],
             parameters_str,
             $js$39,
             manifest_str,
             type_kind_str,
             $js$42)};
var
 string_of_type_extension=
  function(te)
   {var M=Odoc_extension;
    var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=String["concat"];
    var $js$3=List["map"];
    var
     $js$4=
      $js$3
       (function(p)
         {var $js$5=Pervasives["^"];
          var $js$6=Odoc_print["string_of_type_expr"];
          var $js$7=$js$6(p);
          return $js$5($js$7," ")},
        te[3]);
    var $js$5=$js$2("",$js$4);
    var $js$6=Pervasives["^"];
    var $js$7=Pervasives["^"];
    var $js$8=Pervasives["^"];
    var $js$9=bool_of_private(te[4]);
    if($js$9){var $js$10="private "}else{var $js$10=""}
    var $js$11=Pervasives["^"];
    var $js$12=Pervasives["^"];
    var $js$13=String["concat"];
    var $js$14=List["map"];
    var
     $js$15=
      $js$14
       (function(x)
         {var $js$16=Pervasives["^"];
          var $js$17=Pervasives["^"];
          var $js$18=Odoc_name["simple"];
          var $js$19=$js$18(x[1]);
          var $js$20=Pervasives["^"];
          var match=x[2];
          var match$1=x[3];
          var $js$21=match;
          if($js$21)
           {var $js$22=match$1;
            if($js$22)
             {var $js$23=Pervasives["^"];
              var $js$24=Pervasives["^"];
              var $js$25=String["concat"];
              var $js$26=List["map"];
              var
               $js$27=
                $js$26
                 (function(t)
                   {var $js$28=Pervasives["^"];
                    var $js$29=Pervasives["^"];
                    var $js$30=Odoc_print["string_of_type_expr"];
                    var $js$31=$js$30(t);
                    var $js$32=$js$29($js$31,")");
                    return $js$28("(",$js$32)},
                  match);
              var $js$28=$js$25(" * ",$js$27);
              var $js$29=Pervasives["^"];
              var $js$30=Odoc_print["string_of_type_expr"];
              var $js$31=$js$30(match$1[1]);
              var $js$32=$js$29(" -> ",$js$31);
              var $js$33=$js$24($js$28,$js$32);
              var $js$34=$js$23(" : ",$js$33)}
            else
             {var $js$35=Pervasives["^"];
              var $js$36=String["concat"];
              var $js$37=List["map"];
              var
               $js$38=
                $js$37
                 (function(t)
                   {var $js$39=Pervasives["^"];
                    var $js$40=Pervasives["^"];
                    var $js$41=Odoc_print["string_of_type_expr"];
                    var $js$42=$js$41(t);
                    var $js$43=$js$40($js$42,")");
                    return $js$39("(",$js$43)},
                  match);
              var $js$39=$js$36(" * ",$js$38);
              var $js$34=$js$35(" of ",$js$39)}}
          else
           {var $js$40=match$1;
            if($js$40)
             {var $js$41=Pervasives["^"];
              var $js$42=Odoc_print["string_of_type_expr"];
              var $js$43=$js$42(match$1[1]);
              var $js$34=$js$41(" : ",$js$43)}
            else
             {var $js$34=""}}
          var $js$44=Pervasives["^"];
          var match$2=x[5];
          var $js$45=match$2;
          if($js$45)
           {var xa=match$2[1];
            var $js$46=Pervasives["^"];
            var match$3=xa[2];
            var $js$47=match$3;
            if($js$47){var $js$48=match$3[1][1]}else{var $js$48=xa[1]}
            var $js$49=$js$46(" = ",$js$48)}
          else
           {var $js$49=""}
          var $js$50=Pervasives["^"];
          var match$4=x[7];
          var $js$51=match$4;
          if($js$51)
           {var $js$52=Pervasives["^"];
            var $js$53=Pervasives["^"];
            var $js$54=Odoc_misc["string_of_info"];
            var $js$55=$js$54(match$4[1]);
            var $js$56=$js$53($js$55," *)");
            var $js$57=$js$52("(* ",$js$56)}
          else
           {var $js$57=""}
          var $js$58=$js$50($js$57,"\n");
          var $js$59=$js$44($js$49,$js$58);
          var $js$60=$js$20($js$34,$js$59);
          var $js$61=$js$17($js$19,$js$60);
          return $js$16("  | ",$js$61)},
        te[5]);
    var $js$16=$js$13("",$js$15);
    var match=te[1];
    var $js$17=match;
    if($js$17)
     {var $js$18=Odoc_misc["string_of_info"];var $js$19=$js$18(match[1])}
    else
     {var $js$19=""}
    var $js$20=$js$12($js$16,$js$19);
    var $js$21=$js$11("\n",$js$20);
    var $js$22=$js$8($js$10,$js$21);
    var $js$23=$js$7(" += ",$js$22);
    var $js$24=$js$6(te[2],$js$23);
    var $js$25=$js$1($js$5,$js$24);
    return $js("type ",$js$25)};
var
 string_of_exception=
  function(e)
   {var M=Odoc_exception;
    var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=Odoc_name["simple"];
    var $js$3=$js$2(e[1]);
    var $js$4=Pervasives["^"];
    var match=e[3];
    var match$1=e[4];
    var $js$5=match;
    if($js$5)
     {var $js$6=match$1;
      if($js$6)
       {var $js$7=Pervasives["^"];
        var $js$8=Pervasives["^"];
        var $js$9=String["concat"];
        var $js$10=List["map"];
        var
         $js$11=
          $js$10
           (function(t)
             {var $js$12=Pervasives["^"];
              var $js$13=Pervasives["^"];
              var $js$14=Odoc_print["string_of_type_expr"];
              var $js$15=$js$14(t);
              var $js$16=$js$13($js$15,")");
              return $js$12("(",$js$16)},
            match);
        var $js$12=$js$9(" * ",$js$11);
        var $js$13=Pervasives["^"];
        var $js$14=Odoc_print["string_of_type_expr"];
        var $js$15=$js$14(match$1[1]);
        var $js$16=$js$13(" -> ",$js$15);
        var $js$17=$js$8($js$12,$js$16);
        var $js$18=$js$7(" : ",$js$17)}
      else
       {var $js$19=Pervasives["^"];
        var $js$20=String["concat"];
        var $js$21=List["map"];
        var
         $js$22=
          $js$21
           (function(t)
             {var $js$23=Pervasives["^"];
              var $js$24=Pervasives["^"];
              var $js$25=Odoc_print["string_of_type_expr"];
              var $js$26=$js$25(t);
              var $js$27=$js$24($js$26,")");
              return $js$23("(",$js$27)},
            match);
        var $js$23=$js$20(" * ",$js$22);
        var $js$18=$js$19(" of ",$js$23)}}
    else
     {var $js$24=match$1;
      if($js$24)
       {var $js$25=Pervasives["^"];
        var $js$26=Odoc_print["string_of_type_expr"];
        var $js$27=$js$26(match$1[1]);
        var $js$18=$js$25(" : ",$js$27)}
      else
       {var $js$18=""}}
    var $js$28=Pervasives["^"];
    var match$2=e[5];
    var $js$29=match$2;
    if($js$29)
     {var ea=match$2[1];
      var $js$30=Pervasives["^"];
      var match$3=ea[2];
      var $js$31=match$3;
      if($js$31){var $js$32=match$3[1][1]}else{var $js$32=ea[1]}
      var $js$33=$js$30(" = ",$js$32)}
    else
     {var $js$33=""}
    var $js$34=Pervasives["^"];
    var match$4=e[2];
    var $js$35=match$4;
    if($js$35)
     {var $js$36=Odoc_misc["string_of_info"];var $js$37=$js$36(match$4[1])}
    else
     {var $js$37=""}
    var $js$38=$js$34("\n",$js$37);
    var $js$39=$js$28($js$33,$js$38);
    var $js$40=$js$4($js$18,$js$39);
    var $js$41=$js$1($js$3,$js$40);
    return $js("exception ",$js$41)};
var
 string_of_value=
  function(v)
   {var M=Odoc_value;
    var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=Odoc_name["simple"];
    var $js$3=$js$2(v[1]);
    var $js$4=Pervasives["^"];
    var $js$5=Pervasives["^"];
    var $js$6=Odoc_print["string_of_type_expr"];
    var $js$7=$js$6(v[3]);
    var $js$8=Pervasives["^"];
    var match=v[2];
    var $js$9=match;
    if($js$9)
     {var $js$10=Odoc_misc["string_of_info"];var $js$11=$js$10(match[1])}
    else
     {var $js$11=""}
    var $js$12=$js$8("\n",$js$11);
    var $js$13=$js$5($js$7,$js$12);
    var $js$14=$js$4(" : ",$js$13);
    var $js$15=$js$1($js$3,$js$14);
    return $js("val ",$js$15)};
var
 string_of_attribute=
  function(a)
   {var M=Odoc_value;
    var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=a[3];
    if($js$2){var $js$3="virtual "}else{var $js$3=""}
    var $js$4=Pervasives["^"];
    var $js$5=a[2];
    if($js$5)
     {var $js$6=Pervasives["^"];var $js$7=$js$6(Odoc_messages["mutab"]," ")}
    else
     {var $js$7=""}
    var $js$8=Pervasives["^"];
    var $js$9=Odoc_name["simple"];
    var $js$10=$js$9(a[1][1]);
    var $js$11=Pervasives["^"];
    var $js$12=Pervasives["^"];
    var $js$13=Odoc_print["string_of_type_expr"];
    var $js$14=$js$13(a[1][3]);
    var $js$15=Pervasives["^"];
    var match=a[1][2];
    var $js$16=match;
    if($js$16)
     {var $js$17=Odoc_misc["string_of_info"];var $js$18=$js$17(match[1])}
    else
     {var $js$18=""}
    var $js$19=$js$15("\n",$js$18);
    var $js$20=$js$12($js$14,$js$19);
    var $js$21=$js$11(" : ",$js$20);
    var $js$22=$js$8($js$10,$js$21);
    var $js$23=$js$4($js$7,$js$22);
    var $js$24=$js$1($js$3,$js$23);
    return $js("val ",$js$24)};
var
 string_of_method=
  function(m)
   {var M=Odoc_value;
    var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=m[2];
    if($js$2)
     {var $js$3=Pervasives["^"];var $js$4=$js$3(Odoc_messages["privat"]," ")}
    else
     {var $js$4=""}
    var $js$5=Pervasives["^"];
    var $js$6=Odoc_name["simple"];
    var $js$7=$js$6(m[1][1]);
    var $js$8=Pervasives["^"];
    var $js$9=Pervasives["^"];
    var $js$10=Odoc_print["string_of_type_expr"];
    var $js$11=$js$10(m[1][3]);
    var $js$12=Pervasives["^"];
    var match=m[1][2];
    var $js$13=match;
    if($js$13)
     {var $js$14=Odoc_misc["string_of_info"];var $js$15=$js$14(match[1])}
    else
     {var $js$15=""}
    var $js$16=$js$12("\n",$js$15);
    var $js$17=$js$9($js$11,$js$16);
    var $js$18=$js$8(" : ",$js$17);
    var $js$19=$js$5($js$7,$js$18);
    var $js$20=$js$1($js$4,$js$19);
    return $js("method ",$js$20)};
module["exports"]=
{"string_of_variance":string_of_variance,
 "string_of_type_list":string_of_type_list,
 "string_of_type_param_list":string_of_type_param_list,
 "string_of_type_extension_param_list":string_of_type_extension_param_list,
 "string_of_class_type_param_list":string_of_class_type_param_list,
 "string_of_type":string_of_type,
 "string_of_class_params":string_of_class_params,
 "string_of_type_extension":string_of_type_extension,
 "string_of_exception":string_of_exception,
 "string_of_value":string_of_value,
 "string_of_attribute":string_of_attribute,
 "string_of_method":string_of_method};
