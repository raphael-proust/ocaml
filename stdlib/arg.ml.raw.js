var String=require("String");
var List=require("List");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Buffer=require("Buffer");
var Sys=require("Sys");
var Bad="unknown primitive:caml_set_oo_id";
var Help="unknown primitive:caml_set_oo_id";
var Stop="unknown primitive:caml_set_oo_id";
var
 assoc3=
  function(x,l)
   {var $js=l;
    if($js)
     {var t=l[2];
      var match=l[1];
      var y2=match[2];
      var y1=match[1];
      var $js$1="unknown primitive:caml_equal";
      if($js$1){return y2}else{var t$1=t;return assoc3(x,t$1)}}
    else
     {var $js$2=Not_found;throw $js$2}};
var
 make_symlist=
  function(prefix,sep,suffix,l)
   {var $js=l;
    if($js)
     {var t=l[2];
      var h=l[1];
      var $js$1=Pervasives["^"];
      var $js$2=List["fold_left"];
      var $js$3=Pervasives["^"];
      var $js$4=$js$3(prefix,h);
      var
       $js$5=
        $js$2
         (function(x,y)
           {var $js$6=Pervasives["^"];
            var $js$7=Pervasives["^"];
            var $js$8=$js$7(sep,y);
            return $js$6(x,$js$8)},
          $js$4,
          t);
      return $js$1($js$5,suffix)}
    else
     {return "<none>"}};
var
 print_spec=
  function(buf,param)
   {var doc=param[3];
    var spec=param[2];
    var key=param[1];
    var $js=doc["length"]>0;
    if($js)
     {var $js$1=spec;
      if($js$1==11)
       {var l=spec[1];
        var $js$2=Printf["bprintf"];
        var $js$3=make_symlist("{","|","}",l);
        return $js$2
                (buf,
                 [0,
                  [11,"  ",[2,0,[12,32,[2,0,[2,0,[12,10,0]]]]]],
                  "  %s %s%s\n"],
                 key,
                 $js$3,
                 doc)}
      else
       {var $js$4=Printf["bprintf"];
        return $js$4
                (buf,
                 [0,[11,"  ",[2,0,[12,32,[2,0,[12,10,0]]]]],"  %s %s\n"],
                 key,
                 doc)}}
    else
     {return 0}};
var help_action=function(param){var $js=[0,Stop,[0,"-help"]];throw $js};
var
 add_help=
  function(speclist)
   {try
     {var $js=assoc3("-help",speclist);0;var add1=0}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1)
       {var
         add1=
          [0,[0,"-help",[0,help_action]," Display this list of options"],0]}
      else
       {var add1="unknown primitive:reraise"}}
    try
     {var $js$2=assoc3("--help",speclist);0;var add2=0}
    catch(exn$1)
     {var $js$3=exn$1=Not_found;
      if($js$3)
       {var
         add2=
          [0,[0,"--help",[0,help_action]," Display this list of options"],0]}
      else
       {var add2="unknown primitive:reraise"}}
    var $js$4=Pervasives["@"];
    var $js$5=Pervasives["@"];
    var $js$6=$js$5(add1,add2);
    return $js$4(speclist,$js$6)};
var
 usage_b=
  function(buf,speclist,errmsg)
   {var $js=Printf["bprintf"];
    $js(buf,[0,[2,0,[12,10,0]],"%s\n"],errmsg);
    var $js$1=List["iter"];
    var $js$2=print_spec(buf);
    var $js$3=add_help(speclist);
    return $js$1($js$2,$js$3)};
var
 usage_string=
  function(speclist,errmsg)
   {var $js=Buffer["create"];
    var b=$js(200);
    usage_b(b,speclist,errmsg);
    var $js$1=Buffer["contents"];
    return $js$1(b)};
var
 usage=
  function(speclist,errmsg)
   {var $js=Printf["eprintf"];
    var $js$1=usage_string(speclist,errmsg);
    return $js([0,[2,0,0],"%s"],$js$1)};
var current=[0,0];
var
 parse_argv_dynamic=
  function(*opt*,argv,speclist,anonfun,errmsg)
   {var $js=*opt*;
    if($js){var *sth*=*opt*[1];var current$1=*sth*}else{var current$1=current}
    var l=argv["length"];
    var $js$1=Buffer["create"];
    var b=$js$1(200);
    var initpos=current$1[1];
    var
     stop=
      function(error)
       {var $js$2=initpos<l;
        if($js$2){var progname=argv[initpos]}else{var progname="(?)"}
        var $js$3=error;
        if($js$3==0)
         {var s=error[1];
          var $js$4=s;
          if($js$4=="--help"){}else if($js$4=="-help"){}else{var exit=48}
          switch(exit)
           {case 48:
             var $js$5=Printf["bprintf"];
             $js$5
              (b,
               [0,
                [2,0,[11,": unknown option '",[2,0,[11,"'.\n",0]]]],
                "%s: unknown option '%s'.\n"],
               progname,
               s)
            }}
        else
         if($js$3==1)
          {var expected=error[3];
           var arg=error[2];
           var opt=error[1];
           var $js$6=Printf["bprintf"];
           $js$6
            (b,
             [0,
              [2,
               0,
               [11,
                ": wrong argument '",
                [2,
                 0,
                 [11,"'; option '",[2,0,[11,"' expects ",[2,0,[11,".\n",0]]]]]]]],
              "%s: wrong argument '%s'; option '%s' expects %s.\n"],
             progname,
             arg,
             opt,
             expected)}
         else
          if($js$3==2)
           {var s$1=error[1];
            var $js$7=Printf["bprintf"];
            $js$7
             (b,
              [0,
               [2,0,[11,": option '",[2,0,[11,"' needs an argument.\n",0]]]],
               "%s: option '%s' needs an argument.\n"],
              progname,
              s$1)}
          else
           if($js$3==3)
            {var s$2=error[1];
             var $js$8=Printf["bprintf"];
             $js$8
              (b,
               [0,[2,0,[11,": ",[2,0,[11,".\n",0]]]],"%s: %s.\n"],
               progname,
               s$2)}
        usage_b(b,speclist[1],errmsg);
        var $js$9="unknown primitive:caml_equal";
        var $js$10="unknown primitive:caml_equal";
        var $js$11=$js$9||$js$10;
        if($js$11)
         {var $js$12=Buffer["contents"];
          var $js$13=$js$12(b);
          var $js$14=[0,Help,$js$13];
          throw $js$14}
        else
         {var $js$15=Buffer["contents"];
          var $js$16=$js$15(b);
          var $js$17=[0,Bad,$js$16];
          throw $js$17}};
    current$1[0]++;
    for(;;)
     {var $js$2=current$1[1]<l;
      if($js$2)
       {var s=argv[current$1[1]];
        var $js$3=s[0];
        var $js$4=$js$3=45;
        var $js$5=s["length"]>=1&&$js$4;
        if($js$5)
         {try
           {var action=assoc3(s,speclist[1])}
          catch(exn)
           {var $js$6=exn=Not_found;
            if($js$6)
             {var action=stop([0,s])}
            else
             {var action="unknown primitive:reraise"}}
          try
           {var
             treat_action=
              function(param)
               {var $js$7=param;
                if($js$7==0)
                 {var f=param[1];return f(0)}
                else
                 if($js$7==1)
                  {var f$1=param[1];
                   var $js$8=current$1[1]+1<l;
                   if($js$8)
                    {var arg=argv[current$1[1]+1];
                     try
                      {var $js$9=Pervasives["bool_of_string"];
                       var $js$10=$js$9(arg);
                       f$1($js$10)}
                     catch(exn$1)
                      {var tag=exn$1[1];
                       var $js$11=tag=Invalid_argument;
                       if($js$11)
                        {var match=exn$1[2];
                         var $js$12=match;
                         if($js$12=="bool_of_string")
                          {var $js$13=[0,Stop,[1,s,arg,"a boolean"]];throw $js$13}
                         else
                          {var exit=33}}
                       else
                        {var exit=33}
                       switch(exit){case 33:"unknown primitive:reraise"}}
                     return current$1[0]++}
                   else
                    {var exit$1=44}}
                 else
                  if($js$7==2)
                   {var r=param[1];return r[1]=1,0}
                  else
                   if($js$7==3)
                    {var r$1=param[1];return r$1[1]=0,0}
                   else
                    if($js$7==4)
                     {var f$2=param[1];
                      var $js$14=current$1[1]+1<l;
                      if($js$14)
                       {var $js$15=argv[current$1[1]+1];
                        f$2($js$15);
                        return current$1[0]++}
                      else
                       {var exit$1=44}}
                    else
                     if($js$7==5)
                      {var r$2=param[1];
                       var $js$16=current$1[1]+1<l;
                       if($js$16)
                        {var $js$17=argv[current$1[1]+1];
                         r$2[1]=$js$17,0;
                         return current$1[0]++}
                       else
                        {var exit$1=44}}
                     else
                      if($js$7==6)
                       {var f$3=param[1];
                        var $js$18=current$1[1]+1<l;
                        if($js$18)
                         {var arg$1=argv[current$1[1]+1];
                          try
                           {var $js$19="unknown primitive:caml_int_of_string";
                            f$3($js$19)}
                          catch(exn$2)
                           {var tag$1=exn$2[1];
                            var $js$20=tag$1=Failure;
                            if($js$20)
                             {var match$1=exn$2[2];
                              var $js$21=match$1;
                              if($js$21=="int_of_string")
                               {var $js$22=[0,Stop,[1,s,arg$1,"an integer"]];throw $js$22}
                              else
                               {var exit$2=36}}
                            else
                             {var exit$2=36}
                            switch(exit$2){case 36:"unknown primitive:reraise"}}
                          return current$1[0]++}
                        else
                         {var exit$1=44}}
                      else
                       if($js$7==7)
                        {var r$3=param[1];
                         var $js$23=current$1[1]+1<l;
                         if($js$23)
                          {var arg$2=argv[current$1[1]+1];
                           try
                            {var $js$24="unknown primitive:caml_int_of_string";
                             r$3[1]=$js$24,0}
                           catch(exn$3)
                            {var tag$2=exn$3[1];
                             var $js$25=tag$2=Failure;
                             if($js$25)
                              {var match$2=exn$3[2];
                               var $js$26=match$2;
                               if($js$26=="int_of_string")
                                {var $js$27=[0,Stop,[1,s,arg$2,"an integer"]];throw $js$27}
                               else
                                {var exit$3=38}}
                             else
                              {var exit$3=38}
                             switch(exit$3){case 38:"unknown primitive:reraise"}}
                           return current$1[0]++}
                         else
                          {var exit$1=44}}
                       else
                        if($js$7==8)
                         {var f$4=param[1];
                          var $js$28=current$1[1]+1<l;
                          if($js$28)
                           {var arg$3=argv[current$1[1]+1];
                            try
                             {var $js$29="unknown primitive:caml_float_of_string";
                              f$4($js$29)}
                            catch(exn$4)
                             {var tag$3=exn$4[1];
                              var $js$30=tag$3=Failure;
                              if($js$30)
                               {var match$3=exn$4[2];
                                var $js$31=match$3;
                                if($js$31=="float_of_string")
                                 {var $js$32=[0,Stop,[1,s,arg$3,"a float"]];throw $js$32}
                                else
                                 {var exit$4=40}}
                              else
                               {var exit$4=40}
                              switch(exit$4){case 40:"unknown primitive:reraise"}}
                            return current$1[0]++}
                          else
                           {var exit$1=44}}
                        else
                         if($js$7==9)
                          {var r$4=param[1];
                           var $js$33=current$1[1]+1<l;
                           if($js$33)
                            {var arg$4=argv[current$1[1]+1];
                             try
                              {var $js$34="unknown primitive:caml_float_of_string";
                               r$4[1]=$js$34,0}
                             catch(exn$5)
                              {var tag$4=exn$5[1];
                               var $js$35=tag$4=Failure;
                               if($js$35)
                                {var match$4=exn$5[2];
                                 var $js$36=match$4;
                                 if($js$36=="float_of_string")
                                  {var $js$37=[0,Stop,[1,s,arg$4,"a float"]];throw $js$37}
                                 else
                                  {var exit$5=42}}
                               else
                                {var exit$5=42}
                               switch(exit$5){case 42:"unknown primitive:reraise"}}
                             return current$1[0]++}
                           else
                            {var exit$1=44}}
                         else
                          if($js$7==10)
                           {var specs=param[1];
                            var $js$38=List["iter"];
                            return $js$38(treat_action,specs)}
                          else
                           if($js$7==11)
                            {var f$5=param[2];
                             var symb=param[1];
                             var $js$39=current$1[1]+1<l;
                             if($js$39)
                              {var arg$5=argv[current$1[1]+1];
                               var $js$40=List["mem"];
                               var $js$41=$js$40(arg$5,symb);
                               if($js$41)
                                {var $js$42=argv[current$1[1]+1];
                                 f$5($js$42);
                                 return current$1[0]++}
                               else
                                {var $js$43=Pervasives["^"];
                                 var $js$44=make_symlist(""," ","",symb);
                                 var $js$45=$js$43("one of: ",$js$44);
                                 var $js$46=[1,s,arg$5,$js$45];
                                 var $js$47=[0,Stop,$js$46];
                                 throw $js$47}}
                             else
                              {var exit$1=44}}
                           else
                            if($js$7==12)
                             {var f$6=param[1];
                              for(;;)
                               {var $js$48=current$1[1]<l-1;
                                if($js$48)
                                 {var $js$49=argv[current$1[1]+1];f$6($js$49);current$1[0]++}
                                else
                                 break}
                              return 0}
                switch(exit$1){case 44:var $js$50=[0,Stop,[2,s]];throw $js$50}};
            treat_action(action)}
          catch(exn$1)
           {var tag=exn$1[1];
            var $js$7=tag=Bad;
            if($js$7)
             {var m=exn$1[2];stop([3,m])}
            else
             {var tag$1=exn$1[1];
              var $js$8=tag$1=Stop;
              if($js$8)
               {var e=exn$1[2];stop(e)}
              else
               {"unknown primitive:reraise"}}}
          current$1[0]++}
        else
         {try
           {anonfun(s)}
          catch(exn$2)
           {var tag$2=exn$2[1];
            var $js$9=tag$2=Bad;
            if($js$9)
             {var m$1=exn$2[2];stop([3,m$1])}
            else
             {"unknown primitive:reraise"}}
          current$1[0]++}}
      else
       break}
    return 0};
var
 parse_argv=
  function(*opt*,argv,speclist,anonfun,errmsg)
   {var $js=*opt*;
    if($js){var *sth*=*opt*[1];var current$1=*sth*}else{var current$1=current}
    return parse_argv_dynamic([0,current$1],argv,[0,speclist],anonfun,errmsg)};
var
 parse=
  function(l,f,msg)
   {try
     {return parse_argv(0,Sys["argv"],l,f,msg)}
    catch(exn)
     {var tag=exn[1];
      var $js=tag=Bad;
      if($js)
       {var msg$1=exn[2];
        var $js$1=Printf["eprintf"];
        $js$1([0,[2,0,0],"%s"],msg$1);
        var $js$2=Pervasives["exit"];
        return $js$2(2)}
      else
       {var tag$1=exn[1];
        var $js$3=tag$1=Help;
        if($js$3)
         {var msg$2=exn[2];
          var $js$4=Printf["printf"];
          $js$4([0,[2,0,0],"%s"],msg$2);
          var $js$5=Pervasives["exit"];
          return $js$5(0)}
        else
         {return "unknown primitive:reraise"}}}};
var
 parse_dynamic=
  function(l,f,msg)
   {try
     {return parse_argv_dynamic(0,Sys["argv"],l,f,msg)}
    catch(exn)
     {var tag=exn[1];
      var $js=tag=Bad;
      if($js)
       {var msg$1=exn[2];
        var $js$1=Printf["eprintf"];
        $js$1([0,[2,0,0],"%s"],msg$1);
        var $js$2=Pervasives["exit"];
        return $js$2(2)}
      else
       {var tag$1=exn[1];
        var $js$3=tag$1=Help;
        if($js$3)
         {var msg$2=exn[2];
          var $js$4=Printf["printf"];
          $js$4([0,[2,0,0],"%s"],msg$2);
          var $js$5=Pervasives["exit"];
          return $js$5(0)}
        else
         {return "unknown primitive:reraise"}}}};
var
 second_word=
  function(s)
   {var len=s["length"];
    var
     loop=
      function(n)
       {var $js=n>=len;
        if($js)
         {return len}
        else
         {var $js$1=s[n];
          var $js$2=$js$1=32;
          if($js$2){return loop(n+1)}else{return n}}};
    try
     {var $js=String["index"];var $js$1=$js(s,32);return loop($js$1)}
    catch(exn)
     {var $js$2=exn=Not_found;
      if($js$2){return len}else{return "unknown primitive:reraise"}}};
var
 max_arg_len=
  function(cur,param)
   {var doc=param[3];
    var spec=param[2];
    var kwd=param[1];
    var $js=spec;
    if($js==11)
     {var $js$1=Pervasives["max"];return $js$1(cur,kwd["length"])}
    else
     {var $js$2=Pervasives["max"];
      var $js$3=second_word(doc);
      var $js$4=kwd["length"]+$js$3;
      return $js$2(cur,$js$4)}};
var
 add_padding=
  function(len,ksd)
   {var spec=ksd[2];
    var kwd=ksd[1];
    var match=ksd[3];
    var $js=match;
    if($js=="")
     {return ksd}
    else
     {var $js$1=spec;
      if($js$1==11)
       {var msg=ksd[3];
        var cutcol=second_word(msg);
        var $js$2=String["make"];
        var $js$3=Pervasives["max"];
        var $js$4=$js$3(0,len-cutcol);
        var $js$5=$js$4+3;
        var spaces=$js$2($js$5,32);
        var $js$6=Pervasives["^"];
        var $js$7=Pervasives["^"];
        var $js$8=$js$7(spaces,msg);
        var $js$9=$js$6("\n",$js$8);
        return [0,kwd,spec,$js$9]}
      else
       {var spec$1=spec;
        var kwd$1=kwd;
        var msg$1=ksd[3];
        var cutcol$1=second_word(msg$1);
        var kwd_len=kwd$1["length"];
        var diff=len-kwd_len-cutcol$1;
        var $js$10=diff<=0;
        if($js$10)
         {return [0,kwd$1,spec$1,msg$1]}
        else
         {var $js$11=String["make"];
          var spaces$1=$js$11(diff,32);
          var $js$12=String["sub"];
          var prefix=$js$12(msg$1,0,cutcol$1);
          var $js$13=String["sub"];
          var suffix=$js$13(msg$1,cutcol$1,msg$1["length"]-cutcol$1);
          var $js$14=Pervasives["^"];
          var $js$15=Pervasives["^"];
          var $js$16=$js$15(spaces$1,suffix);
          var $js$17=$js$14(prefix,$js$16);
          return [0,kwd$1,spec$1,$js$17]}}}};
var
 align=
  function(*opt*,speclist)
   {var $js=*opt*;
    if($js)
     {var *sth*=*opt*[1];var limit=*sth*}
    else
     {var limit=Pervasives["max_int"]}
    var completed=add_help(speclist);
    var $js$1=List["fold_left"];
    var len=$js$1(max_arg_len,0,completed);
    var $js$2=Pervasives["min"];
    var len$1=$js$2(len,limit);
    var $js$3=List["map"];
    var $js$4=add_padding(len$1);
    return $js$3($js$4,completed)};
module["exports"]=
{"parse":parse,
 "parse_dynamic":parse_dynamic,
 "parse_argv":parse_argv,
 "parse_argv_dynamic":parse_argv_dynamic,
 "Help":Help,
 "Bad":Bad,
 "usage":usage,
 "usage_string":usage_string,
 "align":align,
 "current":current};
