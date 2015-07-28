var Bool=require("Bool");
var Printf=require("Printf");
var Format=require("Format");
var Glob_ast=require("Glob_ast");
var Glob_lexer=require("Glob_lexer");
var Lexing=require("Lexing");
var My_std=require("My_std");
var Hashtbl=require("Hashtbl");
var Map=require("Map");
var Parse_error=Glob_ast["Parse_error"];
var sf=Printf["sprintf"];
var brute_limit=10;
var
 string_of_token=
  function(param)
   {var $js="unknown primitive:isint";
    if($js)
     {var $js$1=param;
      var $js$2=$js$1[0];
      if($js$2==0)
       {return "AND"}
      else
       if($js$2==1)
        {return "OR"}
       else
        if($js$2==2)
         {return "NOT"}
        else
         if($js$2==3)
          {return "LPAR"}
         else
          if($js$2==4)
           {return "RPAR"}
          else
           if($js$2==5)
            {return "TRUE"}
           else
            if($js$2==6){return "FALSE"}else if($js$2==7){return "EOF"}}
    else
     {return "ATOM"}};
var
 match_character_class=
  function(cl,c)
   {var $js=Bool["eval"];
    return $js
            (function(param)
              {return "unknown primitive:caml_lessequal"&&
                      "unknown primitive:caml_lessequal"},
             cl)};
var $js=My_std["Set"][1];
var compare=function(x,y){return "unknown primitive:caml_int_compare"};
var print=Format["pp_print_int"];
var $js$1=[0,compare,print];
var IS=$js($js$1);
var $js$2=Map["Make"];
var compare$1=IS[10];
var print$1=IS[29];
var $js$3=[0,compare$1];
var ISM=$js$2($js$3);
var
 build'=
  function(p)
   {var count=[0,0];
    var transitions=[0,0];
    var epsilons=[0,0];
    var state=function(param){var id=count[1];count[0]++;return id};
    var
     -->=
      function(q1,t,q2)
       {var $js$4=t;
        if($js$4)
         {transitions[1]=[0,[0,q1,t[1],q2],transitions[1]],0;return q1}
        else
         {epsilons[1]=[0,[0,q1,q2],epsilons[1]],0;return q1}};
    var
     loop=
      function(qf,param)
       {var $js$4=param;
        if(typeof $js$4=="number")
         {if($js$4==0){return qf}}
        else
         {var $js$5=$js$4[0];
          if($js$5==0)
           {var q2=state(0);
            var q1=loop(q2,param[1]);
            var match=-->(q1,0,qf);
            var match$1=-->(q2,0,q1);
            var match$2=-->(q2,0,q1);
            return q1}
          else
           if($js$5==1)
            {var q1$1=state(0);return -->(q1$1,[0,param[1]],qf)}
           else
            if($js$5==2)
             {var q12=state(0);
              var q1$2=loop(q12,param[1]);
              var q2$1=loop(qf,param[2]);
              var match$3=-->(q12,0,q2$1);
              return q1$2}
            else
             if($js$5==3)
              {var qi=state(0);
               var $js$6=My_std["List"][14];
               $js$6
                (function(p$1)
                  {var q=loop(qf,p$1);var match$4=-->(qi,0,q);return 0},
                 param[1]);
               return qi}
             else
              if($js$5==4)
               {var u=param[1];
                var m=u["length"];
                var q0=state(0);
                var
                 loop$1=
                  function(q,i)
                   {var $js$7=i=m;
                    if($js$7)
                     {return q0}
                    else
                     {var $js$8=i=m-1;
                      if($js$8){var q'=qf}else{var q'=state(0)}
                      var match$4=-->(q,[0,[3,[0,u[i],u[i]]]],q');
                      return loop$1(q',i+1)}};
                return loop$1(q0,0)}}};
    var qf=state(0);
    var qi=loop(qf,p);
    var m=count[1];
    var graph="unknown primitive:caml_make_vect";
    var $js$4=My_std["List"][14];
    $js$4
     (function(param)
       {var q=param[1];
        var $js$5=IS[4];
        var $js$6=$js$5(param[2],graph[q]);
        return graph[q]=$js$6,0},
      epsilons[1]);
    var closure="unknown primitive:caml_make_vect";
    var
     transitive=
      function(past,param)
       {var $js$5=param;
        if($js$5)
         {var q=param[1];
          var $js$6=IS[4];
          var past'=$js$6(q,past);
          var $js$7=IS[14];
          var
           future'=
            $js$7
             (function(q',future'$1)
               {var $js$8=IS[3];
                var $js$9=$js$8(q',past');
                if($js$9){return future'$1}else{return [0,q',future'$1]}},
              graph[q],
              param[2]);
          return transitive(past',future')}
        else
         {return past}};
    var $js$5=0;
    var $js$6=m-1;
    for(var i=$js$5;i<=$js$6;i++)
     {var $js$7=transitive(IS[1],[0,i,0]);closure[i]=$js$7,0}
    var table="unknown primitive:caml_make_vect";
    var $js$8=My_std["List"][14];
    $js$8
     (function(param)
       {var q=param[1];
        return table[q]=[0,[0,param[2],closure[param[3]]],table[q]],0},
      transitions[1]);
    var $js$9=Hashtbl["create"];
    var $js$10=$js$9(0,37);
    var $js$11=[0,closure[qi],table,qf,$js$10];
    return [0,graph,closure,$js$11]};
var build=function(x){var match=build'(x);return match[3]};
var
 run=
  function(*opt*,machine,u)
   {var $js$4=*opt*;
    if($js$4){var trace=*opt*[1]}else{var trace=0}
    var m=u["length"];
    var
     apply=
      function(qs,c)
       {try
         {var $js$5=Hashtbl["find"];
          var t=$js$5(machine[4],c);
          var $js$6=ISM[22];
          return $js$6(qs,t)}
        catch(exn)
         {var $js$7=exn=Not_found;
          if($js$7)
           {var $js$8=IS[14];
            var
             qs'=
              $js$8
               (function(q,qs'$1)
                 {var $js$9=My_std["List"][19];
                  return $js$9
                          (function(qs'$2,param)
                            {var $js$10=match_character_class(param[1],c);
                             if($js$10)
                              {var $js$11=IS[7];return $js$11(qs'$2,param[2])}
                             else
                              {return qs'$2}},
                           qs'$1,
                           machine[2][q])},
                qs,
                IS[1]);
            try
             {var $js$9=Hashtbl["find"];var t$1=$js$9(machine[4],c)}
            catch(exn$1)
             {var $js$10=exn$1=Not_found;
              if($js$10)
               {var t$1=ISM[1]}
              else
               {var t$1="unknown primitive:reraise"}}
            var $js$11=Hashtbl["replace"];
            var $js$12=ISM[4];
            var $js$13=$js$12(qs,qs',t$1);
            $js$11(machine[4],c,$js$13);
            return qs'}
          else
           {return "unknown primitive:reraise"}}};
    var
     loop=
      function(qs,i)
       {var $js$5=IS[2];
        var $js$6=$js$5(qs);
        if($js$6)
         {return 0}
        else
         {var $js$7=i=m;
          if($js$7)
           {var $js$8=IS[3];return $js$8(machine[3],qs)}
          else
           {var c=u[i];
            var $js$9=trace;
            if($js$9)
             {var $js$10=Printf["printf"];
              $js$10([0,[4,0,0,0,[12,32,[1,[11," {",0]]]],"%d %C {"],i,c);
              var $js$11=IS[13];
              $js$11
               (function(q)
                 {var $js$12=Printf["printf"];
                  return $js$12([0,[12,32,[4,0,0,0,0]]," %d"],q)},
                qs);
              var $js$12=Printf["printf"];
              $js$12([0,[11," }\n",[10,0]]," }\n%!"])}
            else
             {}
            var qs'=apply(qs,c);
            return loop(qs',i+1)}}};
    return loop(machine[1],0)};
var NFA=[0,IS,ISM,build',build,run];
var Succeed="unknown primitive:caml_set_oo_id";
var Fail="unknown primitive:caml_set_oo_id";
var Too_hard="unknown primitive:caml_set_oo_id";
var
 match_pattern=
  function(counter,p,u)
   {var m=u["length"];
    var
     loop=
      function(param)
       {var p$1=param[3];
        var n=param[2];
        var i=param[1];
        var $js$4=0<=i&&0<=n&&i+n<=m;
        if($js$4){}else{"unknown primitive:raise"}
        counter[0]++;
        var $js$5=counter[1]>=brute_limit;
        if($js$5){"unknown primitive:raise"}else{}
        var $js$6=p$1;
        if(typeof $js$6=="number")
         {if($js$6==0){return n=0}}
        else
         {var $js$7=$js$6[0];
          if($js$7==0)
           {var match=p$1[1];
            var $js$8=match;
            if(typeof $js$8=="number")
             {"unknown block:match/1932"}
            else
             {var $js$9=$js$8[0];
              if($js$9==1)
               {var cl=match[1];
                var $js$10="unknown primitive:isint";
                if($js$10)
                 {var $js$11=cl!=0;if($js$11){var exit=27}else{return 1}}
                else
                 {var exit=27}
                switch(exit)
                 {case 27:
                   var
                    check=
                     function(k)
                      {var $js$12=k=n;
                       if($js$12)
                        {return 1}
                       else
                        {var $js$13=match_character_class(cl,u[i+k]);
                         var $js$14=check(k+1);
                         return $js$13&&$js$14}};
                   return check(0)
                  }}
              else
               {var exit$1=26}}
            switch(exit$1){case 26:return "unknown primitive:raise"}}
          else
           if($js$7==1)
            {var $js$12=match_character_class(p$1[1],u[i]);
             return (n=1)&&$js$12}
           else
            if($js$7==2)
             {var p2=p$1[2];
              var p1=p$1[1];
              var
               scan=
                function(j)
                 {var $js$13=loop([0,i,j,p1]);
                  var $js$14=loop([0,i+j,n-j,p2]);
                  var $js$15=$js$13&&$js$14;
                  var $js$16=scan(j+1);
                  var $js$17=$js$15||$js$16;
                  return j<=n&&$js$17};
              return scan(0)}
            else
             if($js$7==3)
              {var $js$13=My_std["List"][27];
               return $js$13(function(p'){return loop([0,i,n,p'])},p$1[1])}
             else
              if($js$7==4)
               {var v=p$1[1];
                var
                 check$1=
                  function(j)
                   {var $js$14=check$1(j+1);
                    var $js$15=(v[j]=u[i+j])&&$js$14;
                    return (j=n)||$js$15};
                var $js$14=check$1(0);
                return (v["length"]=n)&&$js$14}}};
    return loop([0,0,m,p])};
var Brute=[0,Succeed,Fail,Too_hard,match_pattern];
var fast_pattern_of_pattern=function(p){return [0,[0,[0,0],p]]};
var
 add_dir=
  function(dir,x)
   {var $js$4=dir;
    if($js$4)
     {var dir$1=dir[1];
      var $js$5=x;
      if($js$5==0)
       {var $js$6=My_std["filename_concat"];
        var $js$7=$js$6(dir$1,x[1]);
        return [0,$js$7]}
      else
       if($js$5==1)
        {var $js$8=My_std["filename_concat"];
         var $js$9=$js$8(dir$1,"");
         var $js$10=[4,$js$9];
         var $js$11=[2,$js$10,x[1]];
         return [1,$js$11]}}
    else
     {return x}};
var
 add_ast_dir=
  function(dir,x)
   {var $js$4=dir;
    if($js$4)
     {var slash=[1,[3,[0,47,47]]];
      var any=[1,0];
      var q=[3,[0,0,[0,[2,slash,[0,any]],0]]];
      return [0,[0,[3,[1,[0,[0,[0,0],[2,[4,dir[1]],q]]]]],[0,x,0]]]}
    else
     {return x}};
var
 parse=
  function(dir,u)
   {var $js$4=Lexing["from_string"];
    var l=$js$4(u);
    var tok=[0,0];
    var
     f=
      function(param)
       {var match=tok[1];
        var $js$5=match;
        if($js$5)
         {tok[1]=0,0;return match[1]}
        else
         {var $js$6=Glob_lexer["token"];return $js$6(l)}};
    var
     g=
      function(t)
       {var match=tok[1];
        var $js$5=match;
        if($js$5)
         {var $js$6=string_of_token(t);
          var $js$7=string_of_token(match[1]);
          var
           $js$8=
            sf
             ([0,
               [11,
                "Trying to unput token ",
                [2,0,[11," while ",[2,0,[11," is active",0]]]]],
               "Trying to unput token %s while %s is active"],
              $js$6,
              $js$7);
          var $js$9=[0,Parse_error,$js$8];
          throw $js$9}
        else
         {return tok[1]=[0,t],0}};
    var
     read=
      function(x)
       {var y=f(0);
        var $js$5="unknown primitive:caml_equal";
        if($js$5)
         {return 0}
        else
         {var $js$6=string_of_token(x);
          var $js$7=string_of_token(y);
          var
           $js$8=
            sf
             ([0,
               [11,"Unexpected token, expecting ",[2,0,[11,", got ",[2,0,0]]]],
               "Unexpected token, expecting %s, got %s"],
              $js$6,
              $js$7);
          var $js$9=[0,Parse_error,$js$8];
          throw $js$9}};
    var
     atomizer=
      function(continuation)
       {var t=f(0);
        var $js$5="unknown primitive:isint";
        if($js$5)
         {var $js$6=t;
          var $js$7=$js$6[0];
          if($js$7==0)
           {var exit=8}
          else
           if($js$7==1)
            {var exit=8}
           else
            if($js$7==2)
             {return atomizer(function(x){return continuation([2,x])})}
            else
             if($js$7==3)
              {var y=parse_s(0);read(4);return continuation(y)}
             else
              if($js$7==4)
               {var exit=8}
              else
               if($js$7==5)
                {return continuation(0)}
               else
                if($js$7==6)
                 {return continuation(1)}
                else
                 if($js$7==7){var exit=8}}
        else
         {var match=add_dir(dir,t[1]);
          var $js$8=match;
          if($js$8==0)
           {var a=[0,match[1]]}
          else
           if($js$8==1)
            {var $js$9=fast_pattern_of_pattern(match[1]);var a=[1,$js$9]}
          return continuation([3,a])}
        switch(exit)
         {case 8:
           var $js$10=string_of_token(t);
           var
            $js$11=
             sf
              ([0,
                [11,"Unexpected token ",[2,0,[11," in atomizer",0]]],
                "Unexpected token %s in atomizer"],
               $js$10);
           var $js$12=[0,Parse_error,$js$11];
           throw $js$12
          }};
    var
     parse_s1=
      function(x)
       {var t=f(0);
        var $js$5="unknown primitive:isint";
        if($js$5)
         {var $js$6=t!=1;
          if($js$6)
           {var $js$7=t!=0;if($js$7){var exit=10}else{return parse_t(x)}}
          else
           {var y=parse_s(0);return [1,[0,x,[0,y,0]]]}}
        else
         {var exit=10}
        switch(exit){case 10:g(t);return x}};
    var
     parse_t1=
      function(x,y)
       {var t=f(0);
        var $js$5="unknown primitive:isint";
        if($js$5)
         {var $js$6=t!=1;
          if($js$6)
           {var $js$7=t!=0;
            if($js$7){var exit=12}else{return parse_t([0,[0,x,[0,y,0]]])}}
          else
           {var z=parse_s(0);return [1,[0,[0,[0,x,[0,y,0]]],[0,z,0]]]}}
        else
         {var exit=12}
        switch(exit){case 12:g(t);return [0,[0,x,[0,y,0]]]}};
    var parse_s=function(param){return atomizer(parse_s1)};
    var parse_t=function(x){var $js$5=parse_t1(x);return atomizer($js$5)};
    var x=parse_s(0);
    read(7);
    return add_ast_dir(dir,x)};
var
 eval=
  function(g,u)
   {var $js$4=Bool["eval"];
    return $js$4
            (function(param)
              {var $js$5=param;
               if($js$5==0)
                {return "unknown primitive:caml_string_equal"}
               else
                if($js$5==1)
                 {var kind=param[1];
                  var match=kind[1];
                  var $js$6=match;
                  if($js$6==0)
                   {var p=match[2];
                    var count=match[1];
                    var
                     do_nfa=
                      function(param$1)
                       {var $js$7=NFA[4];
                        var m=$js$7(p);
                        kind[1]=[1,m],0;
                        var $js$8=NFA[5];
                        return $js$8(0,m,u)};
                    var $js$7=count[1]>=brute_limit;
                    if($js$7)
                     {return do_nfa(0)}
                    else
                     {try
                       {var $js$8=Brute[4];return $js$8(count,p,u)}
                      catch(exn)
                       {var $js$9=exn=Brute[3];
                        if($js$9)
                         {return do_nfa(0)}
                        else
                         {return "unknown primitive:reraise"}}}}
                  else
                   if($js$6==1){var $js$10=NFA[5];return $js$10(0,match[1],u)}}},
             g)};
module["exports"]=
{"parse":parse,
 "Parse_error":Parse_error,
 "eval":eval,
 "fast_pattern_of_pattern":fast_pattern_of_pattern};
