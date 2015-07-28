var String=require("String");
var Char=require("Char");
var Odoc_info=require("Odoc_info");
var List=require("List");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Set=require("Set");
var Buffer=require("Buffer");
var Array=require("Array");
var i=[0,0];
var new_span_id=function(param){i[0]++;return i[1]};
var i$1=[0,0];
var new_ghost_id=function(param){i$1[0]++;return i$1[1]};
var
 html_table_struct=
  function(indi_txt,phony,d,t)
   {var
     phony$1=
      function(param)
       {var $js=param;
        if(typeof $js=="number")
         {if($js==0){return 1}}
        else
         {var $js$1=$js[0];
          if($js$1==0)
           {return phony(d[1][param[1]])}
          else
           if($js$1==1){return 0}}};
    var
     elem_txt=
      function(param)
       {var $js=param;
        if(typeof $js=="number")
         {if($js==0){return "&nbsp;"}}
        else
         {var $js$1=$js[0];
          if($js$1==0)
           {return indi_txt(d[1][param[1]])}
          else
           if($js$1==1){return "|"}}};
    var
     bar_txt=
      function(param)
       {var $js="unknown primitive:isint";
        if($js){return "&nbsp;"}else{return "|"}};
    var
     all_empty=
      function(i$2)
       {var
         loop=
          function(j)
           {var $js=j=t[1][i$2]["length"];
            if($js)
             {return 1}
            else
             {var e=t[1][i$2][j][1];
              var $js$1="unknown primitive:isint";
              if($js$1)
               {return loop(j+1)}
              else
               {var $js$2=phony$1(e);
                if($js$2){return loop(j+1)}else{return 0}}}};
        return loop(0)};
    var
     line_elem_txt=
      function(i$2)
       {var
         loop=
          function(les,j)
           {var $js=j=t[1][i$2]["length"];
            if($js)
             {return les}
            else
             {var x=t[1][i$2][j];
              var
               loop$1=
                function(j$1)
                 {var $js$1=j$1=t[1][i$2]["length"];
                  if($js$1)
                   {return j$1}
                  else
                   {var $js$2="unknown primitive:caml_equal";
                    if($js$2){return loop$1(j$1+1)}else{return j$1}}};
              var next_j=loop$1(j+1);
              var colspan=3*(next_j-j);
              var les$1=[0,[0,1,0,[0,"&nbsp;"]],les];
              var $js$1=t[1][i$2][j][1]=0;
              if($js$1){var s="&nbsp;"}else{var s=elem_txt(t[1][i$2][j][1])}
              var les$2=[0,[0,colspan-2,1,[0,s]],les$1];
              var les$3=[0,[0,1,0,[0,"&nbsp;"]],les$2];
              return loop(les$3,next_j)}};
        var les=loop(0,0);
        var $js=Array["of_list"];
        var $js$1=List["rev"];
        var $js$2=$js$1(les);
        return $js($js$2)};
    var
     vbars_txt=
      function(k,i$2)
       {var
         loop=
          function(les,j)
           {var $js=j=t[1][i$2]["length"];
            if($js)
             {return les}
            else
             {var x=t[1][i$2][j];
              var
               loop$1=
                function(j$1)
                 {var $js$1=j$1=t[1][i$2]["length"];
                  if($js$1)
                   {return j$1}
                  else
                   {var $js$2="unknown primitive:caml_equal";
                    if($js$2){return loop$1(j$1+1)}else{return j$1}}};
              var next_j=loop$1(j+1);
              var colspan=3*(next_j-j);
              var les$1=[0,[0,1,0,[0,"&nbsp;"]],les];
              var $js$1=k>0&&(t[1][k-1][j][1]=0)||(t[1][k][j][1]=0);
              if($js$1)
               {var s="&nbsp;"}
              else
               {var $js$2=phony$1(t[1][i$2][j][1]);
                if($js$2){var s="&nbsp;"}else{var s=bar_txt(t[1][i$2][j][1])}}
              var les$2=[0,[0,colspan-2,1,[0,s]],les$1];
              var les$3=[0,[0,1,0,[0,"&nbsp;"]],les$2];
              return loop(les$3,next_j)}};
        var les=loop(0,0);
        var $js=Array["of_list"];
        var $js$1=List["rev"];
        var $js$2=$js$1(les);
        return $js($js$2)};
    var
     alone_bar_txt=
      function(i$2)
       {var
         loop=
          function(les,j)
           {var $js=j=t[1][i$2]["length"];
            if($js)
             {return les}
            else
             {var x=t[1][i$2][j][2];
              var
               loop$1=
                function(j$1)
                 {var $js$1=j$1=t[1][i$2]["length"];
                  if($js$1)
                   {return j$1}
                  else
                   {var $js$2="unknown primitive:caml_equal";
                    if($js$2){return loop$1(j$1+1)}else{return j$1}}};
              var next_j=loop$1(j+1);
              var colspan=3*(next_j-j)-2;
              var les$1=[0,[0,1,0,[0,"&nbsp;"]],les];
              var $js$1=(t[1][i$2][j][1]=0)||(t[1][i$2+1][j][1]=0);
              if($js$1)
               {var les$2=[0,[0,colspan,0,[0,"&nbsp;"]],les$1]}
              else
               {var
                 loop$2=
                  function(j$1)
                   {var $js$2=j$1=next_j;
                    if($js$2)
                     {return 1}
                    else
                     {var $js$3=phony$1(t[1][i$2+1][j$1][1]);
                      if($js$3){return loop$2(j$1+1)}else{return 0}}};
                var all_ph=loop$2(j);
                var $js$2=all_ph;
                if($js$2){var s="&nbsp;"}else{var s="|"}
                var les$2=[0,[0,colspan,1,[0,s]],les$1]}
              var les$3=[0,[0,1,0,[0,"&nbsp;"]],les$2];
              return loop(les$3,next_j)}};
        var les=loop(0,0);
        var $js=Array["of_list"];
        var $js$1=List["rev"];
        var $js$2=$js$1(les);
        return $js($js$2)};
    var
     exist_several_branches=
      function(i$2,k)
       {var
         loop=
          function(j)
           {var $js=j=t[1][i$2]["length"];
            if($js)
             {return 0}
            else
             {var x=t[1][i$2][j][2];
              var e=t[1][k][j][1];
              var
               loop1=
                function(j$1)
                 {var $js$1=j$1=t[1][i$2]["length"];
                  if($js$1)
                   {return 0}
                  else
                   {var $js$2=t[1][i$2][j$1][1]=0;
                    if($js$2)
                     {return loop(j$1)}
                    else
                     {var $js$3="unknown primitive:caml_notequal";
                      if($js$3)
                       {return loop(j$1)}
                      else
                       {var $js$4="unknown primitive:caml_notequal";
                        if($js$4){return 1}else{return loop1(j$1+1)}}}}};
              return loop1(j+1)}};
        return loop(0)};
    var
     hbars_txt=
      function(i$2,k)
       {var
         loop=
          function(les,j)
           {var $js=j=t[1][i$2]["length"];
            if($js)
             {return les}
            else
             {var e=t[1][i$2][j][1];
              var x=t[1][i$2][j][2];
              var
               loop$1=
                function(j$1)
                 {var $js$1=j$1=t[1][i$2]["length"];
                  if($js$1)
                   {return j$1}
                  else
                   {var $js$2=(e=0)&&(t[1][i$2][j$1][1]=0);
                    if($js$2)
                     {return loop$1(j$1+1)}
                    else
                     {var $js$3="unknown primitive:caml_equal";
                      if($js$3){return loop$1(j$1+1)}else{return j$1}}}};
              var next_j=loop$1(j+1);
              var
               loop1=
                function(les$1,l)
                 {var $js$1=l=next_j;
                  if($js$1)
                   {return loop(les$1,next_j)}
                  else
                   {var y=t[1][k][l];
                    var match=y[1];
                    var $js$2="unknown primitive:isint";
                    if($js$2)
                     {var next_l=l+1}
                    else
                     {var
                       loop$2=
                        function(l$1)
                         {var $js$3=l$1=t[1][i$2]["length"];
                          if($js$3)
                           {return l$1}
                          else
                           {var $js$4="unknown primitive:caml_equal";
                            if($js$4){return loop$2(l$1+1)}else{return l$1}}};
                      var next_l=loop$2(l+1)}
                    var $js$3=next_l>next_j;
                    if($js$3)
                     {var $js$4=Printf["eprintf"];
                      $js$4
                       ([0,
                         [11,
                          "assert false i ",
                          [4,
                           0,
                           0,
                           0,
                           [11,
                            " k ",
                            [4,
                             0,
                             0,
                             0,
                             [11,
                              " l ",
                              [4,
                               0,
                               0,
                               0,
                               [11,
                                " next_l ",
                                [4,0,0,0,[11," next_j ",[4,0,0,0,[12,10,0]]]]]]]]]]],
                         "assert false i %d k %d l %d next_l %d next_j %d\n"],
                        i$2,
                        k,
                        l,
                        next_l,
                        next_j);
                      var $js$5=Pervasives["flush"];
                      $js$5(Pervasives["stderr"])}
                    else
                     {}
                    var $js$6=Pervasives["min"];
                    var next_l$1=$js$6(next_l,next_j);
                    var colspan=3*(next_l$1-l)-2;
                    var match$1=t[1][i$2][l][1];
                    var match$2=t[1][i$2+1][l][1];
                    var $js$7="unknown primitive:isint";
                    if($js$7)
                     {var exit=334}
                    else
                     {var $js$8="unknown primitive:isint";
                      if($js$8)
                       {var exit=334}
                      else
                       {var
                         ph=
                          function(s)
                           {var $js$9=phony$1(t[1][k][l][1]);
                            if($js$9){return [0,"&nbsp;"]}else{return s}};
                        var $js$9=(l=j)&&(next_l$1=next_j);
                        if($js$9)
                         {var les$2=[0,[0,1,0,[0,"&nbsp;"]],les$1];
                          var s=ph([0,"|"]);
                          var les$3=[0,[0,colspan,1,s],les$2];
                          var les$4=[0,[0,1,0,[0,"&nbsp;"]],les$3]}
                        else
                         {var $js$10=l=j;
                          if($js$10)
                           {var les$5=[0,[0,1,0,[0,"&nbsp;"]],les$1];
                            var s$1=ph([1,2]);
                            var les$6=[0,[0,colspan,2,s$1],les$5];
                            var s$2=ph([1,1]);
                            var les$4=[0,[0,1,0,s$2],les$6]}
                          else
                           {var $js$11=next_l$1=next_j;
                            if($js$11)
                             {var s$3=ph([1,1]);
                              var les$7=[0,[0,1,0,s$3],les$1];
                              var s$4=ph([1,0]);
                              var les$8=[0,[0,colspan,0,s$4],les$7];
                              var les$4=[0,[0,1,0,[0,"&nbsp;"]],les$8]}
                            else
                             {var s$5=ph([1,1]);var les$4=[0,[0,colspan+2,0,s$5],les$1]}}}}}
                    switch(exit)
                     {case 334:var les$4=[0,[0,colspan+2,0,[0,"&nbsp;"]],les$1]}
                    return loop1(les$4,next_l$1)}};
              return loop1(les,j)}};
        var les=loop(0,0);
        var $js=Array["of_list"];
        var $js$1=List["rev"];
        var $js$2=$js$1(les);
        return $js($js$2)};
    var
     loop=
      function(hts,i$2)
       {var $js=i$2=t[1]["length"];
        if($js)
         {return hts}
        else
         {var $js$1=all_empty(i$2);
          var $js$2=(i$2=t[1]["length"]-1)&&$js$1;
          if($js$2)
           {return hts}
          else
           {var $js$3=line_elem_txt(i$2);
            var hts$1=[0,$js$3,hts];
            var $js$4=i$2<t[1]["length"]-1;
            if($js$4)
             {var $js$5=vbars_txt(i$2+1,i$2);
              var hts$2=[0,$js$5,hts$1];
              var $js$6=exist_several_branches(i$2,i$2);
              if($js$6)
               {var $js$7=alone_bar_txt(i$2);
                var $js$8=hbars_txt(i$2,i$2);
                var $js$9=[0,$js$8,hts$2];
                var hts$3=[0,$js$7,$js$9]}
              else
               {var hts$3=hts$2}
              var $js$10=exist_several_branches(i$2,i$2+1);
              var $js$11=all_empty(i$2+1);
              var $js$12=!$js$11;
              var $js$13=i$2<t[1]["length"]-2||$js$12;
              var $js$14=$js$10&&$js$13;
              if($js$14)
               {var $js$15=vbars_txt(i$2+1,i$2+1);
                var $js$16=hbars_txt(i$2,i$2+1);
                var $js$17=[0,$js$16,hts$3];
                var hts$4=[0,$js$15,$js$17]}
              else
               {var hts$4=hts$3}}
            else
             {var hts$4=hts$1}
            return loop(hts$4,i$2+1)}}};
    var hts=loop(0,0);
    var $js=Array["of_list"];
    var $js$1=List["rev"];
    var $js$2=$js$1(hts);
    return $js($js$2)};
var
 ancestors=
  function(d)
   {var
     loop=
      function(i$2)
       {var $js=i$2=d[1]["length"];
        if($js)
         {return 0}
        else
         {var n=d[1][i$2];
          var $js$1=n[1]=0;
          if($js$1)
           {var $js$2=loop(i$2+1);return [0,i$2,$js$2]}
          else
           {return loop(i$2+1)}}};
    return loop(0)};
var
 get_children=
  function(d,parents)
   {var
     merge_children=
      function(children,el)
       {var $js=List["fold_right"];
        return $js
                (function(param,children$1)
                  {var x=param[1];
                   var $js$1=x;
                   if(typeof $js$1=="number")
                    {if($js$1==0){var exit=308}}
                   else
                    {var $js$2=$js$1[0];
                     if($js$2==0)
                      {var e=d[1][x[1]];
                       var $js$3=List["fold_right"];
                       return $js$3
                               (function(c,children$2)
                                 {var $js$4=List["mem"];
                                  var $js$5=$js$4(c,children$2);
                                  if($js$5){return children$2}else{return [0,c,children$2]}},
                                e[3],
                                children$1)}
                     else
                      if($js$2==1){var exit=308}}
                   switch(exit){case 308:return 0}},
                 el,
                 children)};
    return merge_children(0,parents)};
var
 get_block=
  function(t,i$2,j)
   {var $js=j=t[1][i$2]["length"];
    if($js)
     {return 0}
    else
     {var $js$1=j=t[1][i$2]["length"]-1;
      if($js$1)
       {var x=t[1][i$2][j];return [0,[0,[0,[0,x[1],1],0],1,x[2]]]}
      else
       {var x$1=t[1][i$2][j];
        var y=t[1][i$2][j+1];
        var $js$2="unknown primitive:caml_equal";
        if($js$2)
         {var match=get_block(t,i$2,j+1);
          var $js$3=match;
          if($js$3)
           {var match$1=match[1];
            var match$2=match$1[1];
            var $js$4=match$2;
            if($js$4)
             {var mpc=match$1[2];
              var list=match$2[2];
              var match$3=match$2[1];
              var c1=match$3[2];
              var x1=match$3[1];
              var $js$5="unknown primitive:caml_equal";
              if($js$5)
               {var $js$6=Pervasives["max"];
                var $js$7=$js$6(mpc,c1+1);
                var match$4=[0,[0,[0,x1,c1+1],list],$js$7]}
              else
               {var $js$8=Pervasives["max"];
                var $js$9=$js$8(mpc,c1);
                var match$4=[0,[0,[0,x$1[1],1],[0,[0,x1,c1],list]],$js$9]}
              return [0,[0,match$4[1],match$4[2],match$1[3]]]}
            else
             {var exit=303}}
          else
           {var exit=303}
          switch(exit){case 303:return "unknown primitive:raise"}}
        else
         {return [0,[0,[0,[0,x$1[1],1],0],1,x$1[2]]]}}}};
var
 group_by_common_children=
  function(d,list)
   {var compare=function(x,y){return "unknown primitive:caml_int_compare"};
    var O=[0,compare];
    var $js=Set["Make"];
    var S=$js(O);
    var $js$1=List["map"];
    var
     nlcsl=
      $js$1
       (function(id)
         {var n=d[1][id];
          var $js$2=List["fold_right"];
          var cs=$js$2(S[4],n[3],S[1]);
          return [0,[0,id,0],cs]},
        list);
    var
     loop=
      function(param)
       {var $js$2=param;
        if($js$2)
         {var rest=param[2];
          var match=param[1];
          var cs=match[2];
          var nl=match[1];
          var
           loop1=
            function(beg,param$1)
             {var $js$3=param$1;
              if($js$3)
               {var rest1=param$1[2];
                var match$1=param$1[1];
                var cs1=match$1[2];
                var nl1=match$1[1];
                var $js$4=S[2];
                var $js$5=S[8];
                var $js$6=$js$5(cs,cs1);
                var $js$7=$js$4($js$6);
                if($js$7)
                 {return loop1([0,[0,nl1,cs1],beg],rest1)}
                else
                 {var $js$8=Pervasives["@"];
                  var $js$9=$js$8(nl,nl1);
                  var $js$10=S[7];
                  var $js$11=$js$10(cs,cs1);
                  var $js$12=[0,$js$9,$js$11];
                  var $js$13=Pervasives["@"];
                  var $js$14=List["rev"];
                  var $js$15=$js$14(beg);
                  var $js$16=$js$13($js$15,rest1);
                  var $js$17=[0,$js$12,$js$16];
                  return loop($js$17)}}
              else
               {var $js$18=loop(rest);return [0,[0,nl,cs],$js$18]}};
          return loop1(0,rest)}
        else
         {return 0}};
    var nlcsl$1=loop(nlcsl);
    var $js$2=List["fold_right"];
    return $js$2
            (function(param,a)
              {var span=new_span_id(0);
               var $js$3=List["fold_right"];
               return $js$3
                       (function(n,a$1){return [0,[0,[0,n],span],a$1]},param[1],a)},
             nlcsl$1,
             0)};
var copy_data=function(d){return [0,d[1],d[2]]};
var
 insert_columns=
  function(t,nb,j)
   {var t1="unknown primitive:caml_make_vect";
    var $js=0;
    var $js$1=t[1]["length"]-1;
    for(var i$2=$js;i$2<=$js$1;i$2++)
     {var line=t[1][i$2];
      var line1="unknown primitive:caml_make_vect";
      t1[i$2]=line1,0;
      var
       loop=
        function(k)
         {var $js$2=k=line["length"];
          if($js$2)
           {return 0}
          else
           {var $js$3=k<j;
            if($js$3)
             {var $js$4=copy_data(line[k]);line1[k]=$js$4,0}
            else
             {var $js$5=k=j;
              if($js$5)
               {var $js$6=0;
                var $js$7=nb;
                for(var r=$js$6;r<=$js$7;r++)
                 {var $js$8=copy_data(line[k]);line1[k+r]=$js$8,0}}
              else
               {var $js$9=copy_data(line[k]);line1[k+nb]=$js$9,0}}
            return loop(k+1)}};
      loop(0)}
    return [0,t1]};
var
 gcd=
  function(a,b)
   {var $js=a<b;
    if($js)
     {return gcd(b,a)}
    else
     {var $js$1=b=0;if($js$1){return a}else{return gcd(b,a%b)}}};
var
 treat_new_row=
  function(d,t)
   {var i$2=t[1]["length"]-1;
    var
     loop=
      function(t$1,i$3,j)
       {var match=get_block(t$1,i$3,j);
        var $js=match;
        if($js)
         {var match$1=match[1];
          var parents=match$1[1];
          var children=get_children(d,parents);
          var $js$1=children=0;
          if($js$1)
           {var $js$2=new_span_id(0);
            var $js$3=[0,0,$js$2];
            var children$1=[0,$js$3,0]}
          else
           {var $js$4=List["map"];
            var
             children$1=
              $js$4
               (function(n){var $js$5=new_span_id(0);return [0,[0,n],$js$5]},
                children)}
          var $js$5=List["fold_left"];
          var
           simple_parents_colspan=
            $js$5(function(x,param){return x+param[2]},0,parents);
          var $js$6=List["length"];
          var $js$7=$js$6(children$1);
          var $js$8=simple_parents_colspan%$js$7;
          var $js$9=$js$8=0;
          if($js$9)
           {var j$1=j+simple_parents_colspan;
            var $js$10=List["length"];
            var $js$11=$js$10(children$1);
            var cnt=simple_parents_colspan/$js$11;
            var $js$12=List["fold_right"];
            var
             children$2=
              $js$12
               (function(d$1,list)
                 {var
                   loop$1=
                    function(cnt$1,list$1)
                     {var $js$13=cnt$1=1;
                      if($js$13)
                       {return [0,d$1,list$1]}
                      else
                       {var $js$14=copy_data(d$1);
                        var $js$15=loop$1(cnt$1-1,list$1);
                        return [0,$js$14,$js$15]}};
                  return loop$1(cnt,list)},
                children$1,
                0);
            var match$2=loop(t$1,i$3,j$1);
            var $js$13=Pervasives["@"];
            var $js$14=$js$13(children$2,match$2[2]);
            return [0,match$2[1],$js$14]}
          else
           {var $js$15=List["fold_left"];
            var
             parent_colspan=
              $js$15
               (function(scm,param)
                 {var c=param[2];var g=gcd(scm,c);return scm/g*c},
                match$1[2],
                parents);
            var $js$16=List["fold_left"];
            var
             match$3=
              $js$16
               (function(param,param$1)
                 {var c=param$1[2];
                  var j$2=param[3];
                  var to_add=parent_colspan/c-1;
                  var
                   loop$1=
                    function(cc,t$2,j$3)
                     {var $js$17=cc=0;
                      if($js$17)
                       {return t$2}
                      else
                       {var t$3=insert_columns(t$2,to_add,j$3);
                        return loop$1(cc-1,t$3,j$3+to_add+1)}};
                  var t$2=loop$1(c,param[1],j$2);
                  return [0,
                          t$2,
                          [0,[0,param$1[1],parent_colspan],param[2]],
                          j$2+parent_colspan]},
                [0,t$1,0,j],
                parents);
            var $js$17=List["rev"];
            var parents$1=$js$17(match$3[2]);
            var $js$18=List["length"];
            var $js$19=$js$18(parents$1);
            var parents_colspan=parent_colspan*$js$19;
            var $js$20=List["length"];
            var children_colspan=$js$20(children$1);
            var g=gcd(parents_colspan,children_colspan);
            var cnt$1=children_colspan/g;
            var $js$21=List["fold_left"];
            var
             match$4=
              $js$21
               (function(param,param$1)
                 {var
                   loop$1=
                    function(cc,t$2,j$2)
                     {var $js$22=cc=0;
                      if($js$22)
                       {return [0,t$2,j$2]}
                      else
                       {var t$3=insert_columns(t$2,cnt$1-1,j$2);
                        var j$3=j$2+cnt$1;
                        return loop$1(cc-1,t$3,j$3)}};
                  return loop$1(param$1[2],param[1],param[2])},
                [0,match$3[1],j],
                parents$1);
            var cnt$2=parents_colspan/g;
            var $js$22=List["fold_right"];
            var
             children$3=
              $js$22
               (function(d$1,list)
                 {var
                   loop$1=
                    function(cnt$3,list$1)
                     {var $js$23=cnt$3=0;
                      if($js$23)
                       {return list$1}
                      else
                       {var $js$24=loop$1(cnt$3-1,list$1);return [0,d$1,$js$24]}};
                  return loop$1(cnt$2,list)},
                children$1,
                0);
            var match$5=loop(match$4[1],i$3,match$4[2]);
            var $js$23=Pervasives["@"];
            var $js$24=$js$23(children$3,match$5[2]);
            return [0,match$5[1],$js$24]}}
        else
         {return [0,t$1,0]}};
    return loop(t,i$2,0)};
var
 down_it=
  function(t,i$2,k,y)
   {t[1][t[1]["length"]-1][k]=t[1][i$2][k],0;
    var $js=i$2;
    var $js$1=t[1]["length"]-2;
    for(var r=$js;r<=$js$1;r++)
     {var $js$2=new_ghost_id(0);
      var $js$3=[1,$js$2];
      var $js$4=new_span_id(0);
      var $js$5=[0,$js$3,$js$4];
      t[1][r][k]=$js$5,0}};
var
 equilibrate=
  function(t)
   {var ilast=t[1]["length"]-1;
    var last=t[1][ilast];
    var len=last["length"];
    var
     loop=
      function(j)
       {var $js=j=len;
        if($js)
         {return 0}
        else
         {var match=last[j][1];
          var $js$1=match;
          if(typeof $js$1=="number")
           {if($js$1==0){var exit=258}}
          else
           {var $js$2=$js$1[0];
            if($js$2==0)
             {var x=match[1];
              var
               loop1=
                function(i$2)
                 {var $js$3=i$2=ilast;
                  if($js$3)
                   {return loop(j+1)}
                  else
                   {var
                     loop2=
                      function(k)
                       {var $js$4=k=len;
                        if($js$4)
                         {return loop1(i$2+1)}
                        else
                         {var match$1=t[1][i$2][k][1];
                          var $js$5=match$1;
                          if(typeof $js$5=="number")
                           {if($js$5==0){var exit$1=257}}
                          else
                           {var $js$6=$js$5[0];
                            if($js$6==0)
                             {var y=match$1[1];
                              var $js$7="unknown primitive:caml_equal";
                              if($js$7)
                               {down_it(t,i$2,k,y);return loop(0)}
                              else
                               {var exit$1=257}}
                            else
                             if($js$6==1){var exit$1=257}}
                          switch(exit$1){case 257:return loop2(k+1)}}};
                    return loop2(0)}};
              return loop1(0)}
            else
             if($js$2==1){var exit=258}}
          switch(exit){case 258:return loop(j+1)}}};
    return loop(0)};
var
 group_elem=
  function(t)
   {var $js=0;
    var $js$1=t[1]["length"]-2;
    for(var i$2=$js;i$2<=$js$1;i$2++)
     {var $js$2=1;
      var $js$3=t[1][0]["length"]-1;
      for(var j=$js$2;j<=$js$3;j++)
       {var match=t[1][i$2+1][j-1][1];
        var match$1=t[1][i$2+1][j][1];
        var $js$4=match;
        if(typeof $js$4=="number")
         {if($js$4==0){var exit=255}}
        else
         {var $js$5=$js$4[0];
          if($js$5==0)
           {var $js$6=match$1;
            if(typeof $js$6=="number")
             {if($js$6==0){var exit=255}}
            else
             {var $js$7=$js$6[0];
              if($js$7==0)
               {var $js$8="unknown primitive:caml_equal";
                if($js$8)
                 {t[1][i$2][j][2]=t[1][i$2][j-1][2],0}
                else
                 {var exit=255}}
              else
               if($js$7==1){var exit=255}}}
          else
           if($js$5==1){var exit=255}}
        switch(exit){case 255:}}}};
var
 group_ghost=
  function(t)
   {var $js=0;
    var $js$1=t[1]["length"]-2;
    for(var i$2=$js;i$2<=$js$1;i$2++)
     {var $js$2=1;
      var $js$3=t[1][0]["length"]-1;
      for(var j=$js$2;j<=$js$3;j++)
       {var match=t[1][i$2+1][j-1][1];
        var match$1=t[1][i$2+1][j][1];
        var $js$4=match;
        if(typeof $js$4=="number")
         {if($js$4==0){var exit=253}}
        else
         {var $js$5=$js$4[0];
          if($js$5==0)
           {var exit=253}
          else
           if($js$5==1)
            {var $js$6=match$1;
             if(typeof $js$6=="number")
              {if($js$6==0){var exit=253}}
             else
              {var $js$7=$js$6[0];
               if($js$7==0)
                {var exit=253}
               else
                if($js$7==1)
                 {var $js$8="unknown primitive:caml_equal";
                  if($js$8)
                   {t[1][i$2+1][j]=[0,[1,match[1]],t[1][i$2+1][j-1][2]],0}
                  else
                   {}}}}}
        switch(exit){case 253:}
        var match$2=t[1][i$2][j-1][1];
        var match$3=t[1][i$2][j][1];
        var $js$9=match$2;
        if(typeof $js$9=="number")
         {if($js$9==0){var exit$1=252}}
        else
         {var $js$10=$js$9[0];
          if($js$10==0)
           {var exit$1=252}
          else
           if($js$10==1)
            {var $js$11=match$3;
             if(typeof $js$11=="number")
              {if($js$11==0){var exit$1=252}}
             else
              {var $js$12=$js$11[0];
               if($js$12==0)
                {var exit$1=252}
               else
                if($js$12==1)
                 {var $js$13="unknown primitive:caml_equal";
                  if($js$13)
                   {t[1][i$2][j]=[0,[1,match$2[1]],t[1][i$2][j-1][2]],0;
                    var $js$14=i$2>0;
                    if($js$14){t[1][i$2-1][j][2]=t[1][i$2-1][j-1][2],0}else{}}
                  else
                   {}}}}}
        switch(exit$1){case 252:}}}};
var
 group_children=
  function(t)
   {var $js=0;
    var $js$1=t[1]["length"]-1;
    for(var i$2=$js;i$2<=$js$1;i$2++)
     {var line=t[1][i$2];
      var len=line["length"];
      var $js$2=1;
      var $js$3=len-1;
      for(var j=$js$2;j<=$js$3;j++)
       {var $js$4="unknown primitive:caml_equal"&&line[j][1]!=0;
        if($js$4){line[j][2]=line[j-1][2],0}else{}}}};
var
 group_span_by_common_children=
  function(d,t)
   {var compare=function(x,y){return "unknown primitive:caml_int_compare"};
    var O=[0,compare];
    var $js=Set["Make"];
    var S=$js(O);
    var i$2=t[1]["length"]-1;
    var line=t[1][i$2];
    var
     loop=
      function(j,cs)
       {var $js$1=j=line["length"];
        if($js$1)
         {return 0}
        else
         {var match=line[j][1];
          var $js$2=match;
          if(typeof $js$2=="number")
           {if($js$2==0){var exit=244}}
          else
           {var $js$3=$js$2[0];
            if($js$3==0)
             {var n=d[1][match[1]];
              var $js$4=List["fold_right"];
              var curr_cs=$js$4(S[4],n[3],S[1]);
              var $js$5=S[2];
              var $js$6=S[8];
              var $js$7=$js$6(cs,curr_cs);
              var $js$8=$js$5($js$7);
              if($js$8)
               {return loop(j+1,curr_cs)}
              else
               {line[j][2]=line[j-1][2],0;
                var $js$9=S[7];
                var $js$10=$js$9(cs,curr_cs);
                return loop(j+1,$js$10)}}
            else
             if($js$3==1){var exit=244}}
          switch(exit){case 244:return loop(j+1,S[1])}}};
    return loop(0,S[1])};
var
 find_same_parents=
  function(t,i$2,j1,j2,j3,j4)
   {var
     loop=
      function(i$3,j1$1,j2$1,j3$1,j4$1)
       {var $js=i$3=0;
        if($js)
         {return [0,i$3,j1$1,j2$1,j3$1,j4$1]}
        else
         {var x1=t[i$3-1][j1$1];
          var x2=t[i$3-1][j2$1];
          var x3=t[i$3-1][j3$1];
          var x4=t[i$3-1][j4$1];
          var $js$1="unknown primitive:caml_equal";
          if($js$1)
           {return [0,i$3,j1$1,j2$1,j3$1,j4$1]}
          else
           {var
             loop$1=
              function(j)
               {var $js$2=j<0;
                if($js$2)
                 {return 0}
                else
                 {var $js$3="unknown primitive:caml_equal";
                  if($js$3){return loop$1(j-1)}else{return j+1}}};
            var j1$2=loop$1(j1$1-1);
            var
             loop$2=
              function(j)
               {var $js$2=j>=t[i$3]["length"];
                if($js$2)
                 {return j-1}
                else
                 {var $js$3="unknown primitive:caml_equal";
                  if($js$3){return loop$2(j+1)}else{return j-1}}};
            var j2$2=loop$2(j2$1+1);
            var
             loop$3=
              function(j)
               {var $js$2=j<0;
                if($js$2)
                 {return 0}
                else
                 {var $js$3="unknown primitive:caml_equal";
                  if($js$3){return loop$3(j-1)}else{return j+1}}};
            var j3$2=loop$3(j3$1-1);
            var
             loop$4=
              function(j)
               {var $js$2=j>=t[i$3]["length"];
                if($js$2)
                 {return j-1}
                else
                 {var $js$3="unknown primitive:caml_equal";
                  if($js$3){return loop$4(j+1)}else{return j-1}}};
            var j4$2=loop$4(j4$1+1);
            return loop(i$3-1,j1$2,j2$2,j3$2,j4$2)}}};
    return loop(i$2,j1,j2,j3,j4)};
var
 find_linked_children=
  function(t,i$2,j1,j2,j3,j4)
   {var
     loop=
      function(i$3,j1$1,j2$1,j3$1,j4$1)
       {var $js=i$3=t["length"]-1;
        if($js)
         {return [0,j1$1,j2$1,j3$1,j4$1]}
        else
         {var x1=t[i$3][j1$1];
          var x2=t[i$3][j2$1];
          var x3=t[i$3][j3$1];
          var x4=t[i$3][j4$1];
          var
           loop$1=
            function(j)
             {var $js$1=j<0;
              if($js$1)
               {return 0}
              else
               {var $js$2="unknown primitive:caml_equal";
                if($js$2){return loop$1(j-1)}else{return j+1}}};
          var j1$2=loop$1(j1$1-1);
          var
           loop$2=
            function(j)
             {var $js$1=j>=t[i$3]["length"];
              if($js$1)
               {return j-1}
              else
               {var $js$2="unknown primitive:caml_equal";
                if($js$2){return loop$2(j+1)}else{return j-1}}};
          var j2$2=loop$2(j2$1+1);
          var
           loop$3=
            function(j)
             {var $js$1=j<0;
              if($js$1)
               {return 0}
              else
               {var $js$2="unknown primitive:caml_equal";
                if($js$2){return loop$3(j-1)}else{return j+1}}};
          var j3$2=loop$3(j3$1-1);
          var
           loop$4=
            function(j)
             {var $js$1=j>=t[i$3]["length"];
              if($js$1)
               {return j-1}
              else
               {var $js$2="unknown primitive:caml_equal";
                if($js$2){return loop$4(j+1)}else{return j-1}}};
          var j4$2=loop$4(j4$1+1);
          return loop(i$3+1,j1$2,j2$2,j3$2,j4$2)}};
    return loop(i$2,j1,j2,j3,j4)};
var
 mirror_block=
  function(t,i1,i2,j1,j2)
   {var $js=i1;
    var $js$1=i2;
    for(var i$2=$js;i$2<=$js$1;i$2++)
     {var line=t[i$2];
      var
       loop=
        function(j1$1,j2$1)
         {var $js$2=j1$1>=j2$1;
          if($js$2)
           {return 0}
          else
           {var v=line[j1$1];
            line[j1$1]=line[j2$1],0;
            line[j2$1]=v,0;
            return loop(j1$1+1,j2$1-1)}};
      loop(j1,j2)}};
var
 exch_blocks=
  function(t,i1,i2,j1,j2,j3,j4)
   {var $js=i1;
    var $js$1=i2;
    for(var i$2=$js;i$2<=$js$1;i$2++)
     {var line=t[i$2];
      var $js$2=Array["copy"];
      var saved=$js$2(line);
      var $js$3=j1;
      var $js$4=j2;
      for(var j=$js$3;j<=$js$4;j++){line[j4-j2+j]=saved[j],0}
      var $js$5=j3;
      var $js$6=j4;
      for(var j$1=$js$5;j$1<=$js$6;j$1++){line[j1-j3+j$1]=saved[j$1],0}}};
var
 find_block_with_parents=
  function(t,i$2,jj1,jj2,jj3,jj4)
   {var
     loop=
      function(ii,jj1$1,jj2$1,jj3$1,jj4$1)
       {var match=find_same_parents(t,i$2,jj1$1,jj2$1,jj3$1,jj4$1);
        var njj4=match[5];
        var njj3=match[4];
        var njj2=match[3];
        var njj1=match[2];
        var nii=match[1];
        var $js=nii!=ii||njj1!=jj1$1||njj2!=jj2$1||njj3!=jj3$1||njj4!=jj4$1;
        if($js)
         {var $js$1=Pervasives["min"];
          var nii$1=$js$1(ii,nii);
          var match$1=find_linked_children(t,nii$1,njj1,njj2,njj3,njj4);
          var jj4$2=match$1[4];
          var jj3$2=match$1[3];
          var jj2$2=match$1[2];
          var jj1$2=match$1[1];
          var $js$2=njj1!=jj1$2||njj2!=jj2$2||njj3!=jj3$2||njj4!=jj4$2;
          if($js$2)
           {return loop(nii$1,jj1$2,jj2$2,jj3$2,jj4$2)}
          else
           {return [0,nii$1,jj1$2,jj2$2,jj3$2,jj4$2]}}
        else
         {return [0,ii,jj1$1,jj2$1,jj3$1,jj4$1]}};
    return loop(i$2,jj1,jj2,jj3,jj4)};
var
 push_to_right=
  function(d,t,i$2,j1,j2)
   {var line=t[i$2];
    var
     loop=
      function(j)
       {var $js=j=j2;
        if($js)
         {return j-1}
        else
         {var x=line[j-1][1];
          var $js$1="unknown primitive:isint";
          if($js$1)
           {var ini_jj1=j-1}
          else
           {var
             same_value=
              function(j$1)
               {var $js$2=j$1<0;
                if($js$2)
                 {return 0}
                else
                 {var $js$3="unknown primitive:caml_equal";
                  if($js$3){return same_value(j$1-1)}else{return j$1+1}}};
            var ini_jj1=same_value(j-2)}
          var jj2=j-1;
          var x$1=line[j][1];
          var $js$2="unknown primitive:isint";
          if($js$2)
           {var jj4=j}
          else
           {var
             same_value$1=
              function(j$1)
               {var $js$3=j$1>=line["length"];
                if($js$3)
                 {return j$1-1}
                else
                 {var $js$4="unknown primitive:caml_equal";
                  if($js$4){return same_value$1(j$1+1)}else{return j$1-1}}};
            var jj4=same_value$1(j+1)}
          var match=find_block_with_parents(t,i$2,ini_jj1,jj2,j,jj4);
          var jj4$1=match[5];
          var jj3=match[4];
          var jj2$1=match[3];
          var jj1=match[2];
          var ii=match[1];
          var $js$3=jj4$1<j2&&jj2$1<jj3;
          if($js$3)
           {exch_blocks(t,ii,i$2,jj1,jj2$1,jj3,jj4$1);return loop(jj4$1+1)}
          else
           {var $js$4=jj4$1<j2&&(jj1=ini_jj1)&&jj2$1<=jj4$1;
            if($js$4)
             {mirror_block(t,ii,i$2,jj1,jj4$1);return loop(jj4$1+1)}
            else
             {return j-1}}}};
    return loop(j1+1)};
var
 push_to_left=
  function(d,t,i$2,j1,j2)
   {var line=t[i$2];
    var
     loop=
      function(j)
       {var $js=j=j1;
        if($js)
         {return j+1}
        else
         {var x=line[j][1];
          var $js$1="unknown primitive:isint";
          if($js$1)
           {var jj1=j}
          else
           {var
             same_value=
              function(j$1)
               {var $js$2=j$1<0;
                if($js$2)
                 {return 0}
                else
                 {var $js$3="unknown primitive:caml_equal";
                  if($js$3){return same_value(j$1-1)}else{return j$1+1}}};
            var jj1=same_value(j-1)}
          var jj3=j+1;
          var x$1=line[j+1][1];
          var $js$2="unknown primitive:isint";
          if($js$2)
           {var ini_jj4=j+1}
          else
           {var
             same_value$1=
              function(j$1)
               {var $js$3=j$1>=line["length"];
                if($js$3)
                 {return j$1-1}
                else
                 {var $js$4="unknown primitive:caml_equal";
                  if($js$4){return same_value$1(j$1+1)}else{return j$1-1}}};
            var ini_jj4=same_value$1(j+2)}
          var match=find_block_with_parents(t,i$2,jj1,j,jj3,ini_jj4);
          var jj4=match[5];
          var jj3$1=match[4];
          var jj2=match[3];
          var jj1$1=match[2];
          var ii=match[1];
          var $js$3=jj1$1>j1&&jj2<jj3$1;
          if($js$3)
           {exch_blocks(t,ii,i$2,jj1$1,jj2,jj3$1,jj4);return loop(jj1$1-1)}
          else
           {var $js$4=jj1$1>j1&&(jj4=ini_jj4)&&jj3$1>=jj1$1;
            if($js$4)
             {mirror_block(t,ii,i$2,jj1$1,jj4);return loop(jj1$1-1)}
            else
             {return j+1}}}};
    return loop(j2-1)};
var
 fill_gap=
  function(d,t,i$2,j1,j2)
   {var $js=Array["copy"];
    var t1=$js(t[1]);
    var $js$1=0;
    var $js$2=t[1]["length"]-1;
    for(var i$3=$js$1;i$3<=$js$2;i$3++)
     {var $js$3=Array["copy"];
      var $js$4=$js$3(t[1][i$3]);
      t1[i$3]=$js$4,0;
      var $js$5=0;
      var $js$6=t1[i$3]["length"]-1;
      for(var j=$js$5;j<=$js$6;j++)
       {var $js$7=copy_data(t[1][i$3][j]);t1[i$3][j]=$js$7,0}}
    var t1$1=t1;
    var j2$1=push_to_left(d,t1$1,i$2,j1,j2);
    var j1$1=push_to_right(d,t1$1,i$2,j1,j2$1);
    var $js$8=j1$1=j2$1-1;
    if($js$8)
     {var line=t1$1[i$2-1];
      var x=line[j1$1][2];
      var y=line[j2$1][2];
      var
       loop=
        function(y$1,j$1)
         {var $js$9=j$1>=line["length"];
          if($js$9)
           {return 0}
          else
           {var
             $js$10=
              "unknown primitive:caml_equal"||"unknown primitive:caml_equal";
            if($js$10)
             {var y$2=line[j$1][2];
              line[j$1][2]=x,0;
              var $js$11=i$2>0;
              if($js$11){t1$1[i$2-1][j$1][2]=t1$1[i$2-1][j$1-1][2],0}else{}
              return loop(y$2,j$1+1)}
            else
             {return 0}}};
      loop(y,j2$1);
      return [0,[0,[0,t1$1],1]]}
    else
     {return 0}};
var
 treat_gaps=
  function(d,t)
   {var i$2=t[1]["length"]-1;
    var
     loop=
      function(t$1,j)
       {var line=t$1[1][i$2];
        var $js=j=line["length"];
        if($js)
         {return t$1}
        else
         {var y=line[j][1];
          var $js$1=y;
          if(typeof $js$1=="number")
           {if($js$1==0){var exit=181}}
          else
           {var $js$2=$js$1[0];
            if($js$2==0)
             {var $js$3="unknown primitive:caml_equal";
              if($js$3)
               {return loop(t$1,j+1)}
              else
               {var
                 loop1=
                  function(t$2,j1)
                   {var $js$4=j1<0;
                    if($js$4)
                     {return loop(t$2,j+1)}
                    else
                     {var $js$5="unknown primitive:caml_equal";
                      if($js$5)
                       {var match=fill_gap(d,t$2,i$2,j1,j);
                        var $js$6=match;
                        if($js$6)
                         {var match$1=match[1];
                          var t$3=match$1[1];
                          var $js$7=match$1[2];
                          if($js$7){return loop(t$3,2)}else{return loop(t$3,j+1)}}
                        else
                         {return loop(t$2,j+1)}}
                      else
                       {return loop1(t$2,j1-1)}}};
                return loop1(t$1,j-2)}}
            else
             if($js$2==1){var exit=181}}
          switch(exit){case 181:return loop(t$1,j+1)}}};
    var $js=t[1][i$2]["length"]=1;
    if($js){return t}else{return loop(t,2)}};
var
 group_span_last_row=
  function(t)
   {var row=t[1][t[1]["length"]-1];
    var
     loop=
      function(i$2)
       {var $js=i$2>=row["length"];
        if($js)
         {return 0}
        else
         {var x=row[i$2][1];
          var $js$1="unknown primitive:isint";
          if($js$1)
           {}
          else
           {var $js$2="unknown primitive:caml_equal";
            if($js$2){row[i$2][2]=row[i$2-1][2],0}else{}}
          return loop(i$2+1)}};
    return loop(1)};
var
 has_phony_children=
  function(phony,d,t)
   {var line=t[1][t[1]["length"]-1];
    var
     loop=
      function(j)
       {var $js=j=line["length"];
        if($js)
         {return 0}
        else
         {var match=line[j][1];
          var $js$1=match;
          if(typeof $js$1=="number")
           {if($js$1==0){var exit=174}}
          else
           {var $js$2=$js$1[0];
            if($js$2==0)
             {var $js$3=phony(d[1][match[1]]);
              if($js$3){return 1}else{return loop(j+1)}}
            else
             if($js$2==1){var exit=174}}
          switch(exit){case 174:return loop(j+1)}}};
    return loop(0)};
var
 tablify=
  function(phony,no_optim,no_group,d)
   {var a=ancestors(d);
    var r=group_by_common_children(d,a);
    var $js=Array["of_list"];
    var $js$1=$js(r);
    var $js$2=[$js$1];
    var t=[0,$js$2];
    var
     loop=
      function(t$1)
       {var match=treat_new_row(d,t$1);
        var new_row=match[2];
        var t$2=match[1];
        var $js$3=List["for_all"];
        var $js$4=$js$3(function(x){return x[1]=0},new_row);
        if($js$4)
         {return t$2}
        else
         {var $js$5=Array["append"];
          var $js$6=Array["of_list"];
          var $js$7=$js$6(new_row);
          var $js$8=[$js$7];
          var $js$9=$js$5(t$2[1],$js$8);
          var t$3=[0,$js$9];
          var $js$10=has_phony_children(phony,d,t$3);
          var $js$11=!$js$10;
          var $js$12=no_group&&$js$11;
          if($js$12)
           {var t$4=t$3}
          else
           {var $js$13=no_optim;
            if($js$13){var match$1=0}else{var match$1=equilibrate(t$3)}
            var match$2=group_elem(t$3);
            var match$3=group_ghost(t$3);
            var match$4=group_children(t$3);
            var match$5=group_span_by_common_children(d,t$3);
            var $js$14=no_optim;
            if($js$14){var t$5=t$3}else{var t$5=treat_gaps(d,t$3)}
            var match$6=group_span_last_row(t$5);
            var t$4=t$5}
          return loop(t$4)}};
    return loop(t)};
var
 fall=
  function(d,t)
   {var $js=1;
    var $js$1=t[1]["length"]-1;
    for(var i$2=$js;i$2<=$js$1;i$2++)
     {var line=t[1][i$2];
      var
       loop=
        function(j)
         {var $js$2=j=line["length"];
          if($js$2)
           {return 0}
          else
           {var match=line[j][1];
            var $js$3=match;
            if(typeof $js$3=="number")
             {if($js$3==0){var exit=157}}
            else
             {var $js$4=$js$3[0];
              if($js$4==0)
               {var exit=157}
              else
               if($js$4==1)
                {var x=match[1];
                 var
                  loop$1=
                   function(j$1)
                    {var $js$5=j$1=line["length"];
                     if($js$5)
                      {return j$1-1}
                     else
                      {var match$1=line[j$1][1];
                       var $js$6=match$1;
                       if(typeof $js$6=="number")
                        {if($js$6==0){var exit$1=155}}
                       else
                        {var $js$7=$js$6[0];
                         if($js$7==0)
                          {var exit$1=155}
                         else
                          if($js$7==1)
                           {var $js$8="unknown primitive:caml_equal";
                            if($js$8){return loop$1(j$1+1)}else{var exit$1=155}}}
                       switch(exit$1){case 155:return j$1-1}}};
                 var j2=loop$1(j+1);
                 var
                  loop$2=
                   function(i$3)
                    {var $js$5=i$3<0;
                     if($js$5)
                      {return i$3+1}
                     else
                      {var line$1=t[1][i$3];
                       var
                        $js$6=
                         ((j=0)||"unknown primitive:caml_notequal")&&
                         ((j2=line$1["length"]-1)||"unknown primitive:caml_notequal");
                       if($js$6){return loop$2(i$3-1)}else{return i$3+1}}};
                 var i1=loop$2(i$2-1);
                 var $js$5=i1=i$2;
                 if($js$5)
                  {var i1$1=i1}
                 else
                  {var $js$6=i1=0;
                   if($js$6)
                    {var i1$1=i1}
                   else
                    {var $js$7=t[1][i1][j][1]=0;
                     if($js$7){var i1$1=i1}else{var i1$1=i$2}}}
                 var $js$8=i1$1<i$2;
                 if($js$8)
                  {var $js$9=i$2;
                   var $js$10=i1$1+1;
                   for(var k=$js$9;k>=$js$10;k--)
                    {var $js$11=j;
                     var $js$12=j2;
                     for(var j$1=$js$11;j$1<=$js$12;j$1++)
                      {t[1][k][j$1][1]=t[1][k-1][j$1][1],0;
                       var $js$13=k<i$2;
                       if($js$13){t[1][k][j$1][2]=t[1][k-1][j$1][2],0}else{}}}
                   var $js$14=j;
                   var $js$15=j2;
                   for(var l=$js$14;l<=$js$15;l++)
                    {var $js$16=(i1$1=0)||(t[1][i1$1-1][l][1]=0);
                     if($js$16)
                      {t[1][i1$1][l][1]=0,0}
                     else
                      {var $js$17=(l=j)||"unknown primitive:caml_notequal";
                       if($js$17)
                        {var $js$18=new_ghost_id(0);
                         var $js$19=[1,$js$18];
                         var $js$20=new_span_id(0);
                         var $js$21=[0,$js$19,$js$20]}
                       else
                        {var $js$21=copy_data(t[1][i1$1][l-1])}
                       t[1][i1$1][l]=$js$21,0}}}
                 else
                  {}
                 return loop(j2+1)}}
            switch(exit){case 157:return loop(j+1)}}};
      loop(0)}};
var
 fall2_cool_right=
  function(t,i1,i2,i3,j1,j2)
   {var span=t[1][i2-1][j1][2];
    var $js=i2-1;
    var $js$1=0;
    for(var i$2=$js;i$2>=$js$1;i$2--)
     {var $js$2=j1;
      var $js$3=j2-1;
      for(var j=$js$2;j<=$js$3;j++)
       {var $js$4=i$2-i2+i1>=0;
        if($js$4)
         {var $js$5=t[1][i$2-i2+i1][j]}
        else
         {var $js$6=new_span_id(0);var $js$5=[0,0,$js$6]}
        t[1][i$2][j]=$js$5,0}}
    var $js$7=t[1]["length"]-1;
    var $js$8=0;
    for(var i$3=$js$7;i$3>=$js$8;i$3--)
     {var $js$9=j2;
      var $js$10=t[1][i$3]["length"]-1;
      for(var j$1=$js$9;j$1<=$js$10;j$1++)
       {var $js$11=i$3-i2+i1>=0;
        if($js$11)
         {var $js$12=t[1][i$3-i2+i1][j$1]}
        else
         {var $js$13=new_span_id(0);var $js$12=[0,0,$js$13]}
        t[1][i$3][j$1]=$js$12,0}}
    var old_span=t[1][i2-1][j1][2];
    var
     loop=
      function(j$2)
       {var $js$14=j$2=t[1][i2-1]["length"];
        if($js$14)
         {return 0}
        else
         {var $js$15="unknown primitive:caml_equal";
          if($js$15)
           {t[1][i2-1][j$2][2]=span,0;return loop(j$2+1)}
          else
           {return 0}}};
    return loop(j1)};
var
 fall2_cool_left=
  function(t,i1,i2,i3,j1,j2)
   {var span=t[1][i2-1][j2][2];
    var $js=i2-1;
    var $js$1=0;
    for(var i$2=$js;i$2>=$js$1;i$2--)
     {var $js$2=j1+1;
      var $js$3=j2;
      for(var j=$js$2;j<=$js$3;j++)
       {var $js$4=i$2-i2+i1>=0;
        if($js$4)
         {var $js$5=t[1][i$2-i2+i1][j]}
        else
         {var $js$6=new_span_id(0);var $js$5=[0,0,$js$6]}
        t[1][i$2][j]=$js$5,0}}
    var $js$7=t[1]["length"]-1;
    var $js$8=0;
    for(var i$3=$js$7;i$3>=$js$8;i$3--)
     {var $js$9=j1;
      var $js$10=0;
      for(var j$1=$js$9;j$1>=$js$10;j$1--)
       {var $js$11=i$3-i2+i1>=0;
        if($js$11)
         {var $js$12=t[1][i$3-i2+i1][j$1]}
        else
         {var $js$13=new_span_id(0);var $js$12=[0,0,$js$13]}
        t[1][i$3][j$1]=$js$12,0}}
    var old_span=t[1][i2-1][j2][2];
    var
     loop=
      function(j$2)
       {var $js$14=j$2<0;
        if($js$14)
         {return 0}
        else
         {var $js$15="unknown primitive:caml_equal";
          if($js$15)
           {t[1][i2-1][j$2][2]=span,0;return loop(j$2-1)}
          else
           {return 0}}};
    return loop(j2)};
var
 do_fall2_right=
  function(t,i1,i2,j1,j2)
   {var
     loop_i=
      function(i$2)
       {var $js=i$2<0;
        if($js)
         {return 0}
        else
         {var
           loop_j=
            function(j)
             {var $js$1=j=t[1][i$2]["length"];
              if($js$1)
               {return loop_i(i$2-1)}
              else
               {var match=t[1][i$2][j][1];
                var $js$2="unknown primitive:isint";
                if($js$2){return loop_j(j+1)}else{return i$2+1}}};
          return loop_j(j2)}};
    var i3=loop_i(t[1]["length"]-1);
    var new_height=i3+i2-i1;
    var $js=new_height>t[1]["length"];
    if($js)
     {var
       loop=
        function(cnt,t$1)
         {var $js$1=cnt=0;
          if($js$1)
           {return t$1}
          else
           {var $js$2=Array["init"];
            var
             new_line=
              $js$2
               (t$1[1][0]["length"],
                function(i$2){var $js$3=new_span_id(0);return [0,0,$js$3]});
            var $js$3=Array["append"];
            var $js$4=$js$3(t$1[1],[new_line]);
            var t$2=[0,$js$4];
            return loop(cnt-1,t$2)}};
      var t$1=loop(new_height-t[1]["length"],t)}
    else
     {var t$1=t}
    fall2_cool_right(t$1,i1,i2,i3,j1,j2);
    return t$1};
var
 do_fall2_left=
  function(t,i1,i2,j1,j2)
   {var
     loop_i=
      function(i$2)
       {var $js=i$2<0;
        if($js)
         {return 0}
        else
         {var
           loop_j=
            function(j)
             {var $js$1=j<0;
              if($js$1)
               {return loop_i(i$2-1)}
              else
               {var match=t[1][i$2][j][1];
                var $js$2="unknown primitive:isint";
                if($js$2){return loop_j(j-1)}else{return i$2+1}}};
          return loop_j(j1)}};
    var i3=loop_i(t[1]["length"]-1);
    var new_height=i3+i2-i1;
    var $js=new_height>t[1]["length"];
    if($js)
     {var
       loop=
        function(cnt,t$1)
         {var $js$1=cnt=0;
          if($js$1)
           {return t$1}
          else
           {var $js$2=Array["init"];
            var
             new_line=
              $js$2
               (t$1[1][0]["length"],
                function(i$2){var $js$3=new_span_id(0);return [0,0,$js$3]});
            var $js$3=Array["append"];
            var $js$4=$js$3(t$1[1],[new_line]);
            var t$2=[0,$js$4];
            return loop(cnt-1,t$2)}};
      var t$1=loop(new_height-t[1]["length"],t)}
    else
     {var t$1=t}
    fall2_cool_left(t$1,i1,i2,i3,j1,j2);
    return t$1};
var
 do_shorten_too_long=
  function(t,i1,j1,j2)
   {var $js=i1;
    var $js$1=t[1]["length"]-2;
    for(var i$2=$js;i$2<=$js$1;i$2++)
     {var $js$2=j1;
      var $js$3=j2-1;
      for(var j=$js$2;j<=$js$3;j++){t[1][i$2][j]=t[1][i$2+1][j],0}}
    var i$3=t[1]["length"]-1;
    var $js$4=j1;
    var $js$5=j2-1;
    for(var j$1=$js$4;j$1<=$js$5;j$1++)
     {var $js$6=new_span_id(0);var $js$7=[0,0,$js$6];t[1][i$3][j$1]=$js$7,0}
    return t};
var
 try_fall2_right=
  function(t,i$2,j)
   {var match=t[1][i$2][j][1];
    var $js=match;
    if(typeof $js=="number")
     {if($js==0){var exit=128}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var exit=128}
      else
       if($js$1==1)
        {var
          loop=
           function(i$3)
            {var $js$2=i$3<0;
             if($js$2)
              {return 0}
             else
              {var match$1=t[1][i$3][j][1];
               var $js$3=match$1;
               if(typeof $js$3=="number")
                {if($js$3==0){var exit$1=126}}
               else
                {var $js$4=$js$3[0];
                 if($js$4==0)
                  {var exit$1=126}
                 else
                  if($js$4==1){return loop(i$3-1)}}
               switch(exit$1){case 126:return i$3+1}}};
         var i1=loop(i$2-1);
         var
          loop$1=
           function(i$3)
            {var $js$2=i$3<0;
             if($js$2)
              {return 1}
             else
              {var $js$3=j>0&&"unknown primitive:caml_equal";
               if($js$3){return 0}else{return loop$1(i$3-1)}}};
         var separated1=loop$1(i1-1);
         var x=t[1][i$2][j][2];
         var
          loop$2=
           function(j2)
            {var $js$2=j2=t[1][i$2]["length"];
             if($js$2)
              {return j2}
             else
              {var match$1=t[1][i$2][j2];
               var match$2=match$1[1];
               var $js$3=match$2;
               if(typeof $js$3=="number")
                {if($js$3==0){var exit$1=122}}
               else
                {var $js$4=$js$3[0];
                 if($js$4==0)
                  {var exit$1=122}
                 else
                  if($js$4==1)
                   {var y=match$1[2];
                    var $js$5="unknown primitive:caml_equal";
                    if($js$5){return loop$2(j2+1)}else{var exit$1=122}}}
               switch(exit$1){case 122:return j2}}};
         var j2=loop$2(j+1);
         var
          loop$3=
           function(i$3)
            {var $js$2=i$3=t[1]["length"];
             if($js$2)
              {return 1}
             else
              {var $js$3=j2=t[1][i$3]["length"];
               if($js$3)
                {return 0}
               else
                {var $js$4="unknown primitive:caml_equal";
                 if($js$4){return 0}else{return loop$3(i$3+1)}}}};
         var separated2=loop$3(i$2+1);
         var $js$2=!separated1||!separated2;
         if($js$2)
          {return 0}
         else
          {var $js$3=do_fall2_right(t,i1,i$2+1,j,j2);return [0,$js$3]}}}
    switch(exit){case 128:return 0}};
var
 try_fall2_left=
  function(t,i$2,j)
   {var match=t[1][i$2][j][1];
    var $js=match;
    if(typeof $js=="number")
     {if($js==0){var exit=118}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var exit=118}
      else
       if($js$1==1)
        {var
          loop=
           function(i$3)
            {var $js$2=i$3<0;
             if($js$2)
              {return 0}
             else
              {var match$1=t[1][i$3][j][1];
               var $js$3=match$1;
               if(typeof $js$3=="number")
                {if($js$3==0){var exit$1=116}}
               else
                {var $js$4=$js$3[0];
                 if($js$4==0)
                  {var exit$1=116}
                 else
                  if($js$4==1){return loop(i$3-1)}}
               switch(exit$1){case 116:return i$3+1}}};
         var i1=loop(i$2-1);
         var
          loop$1=
           function(i$3)
            {var $js$2=i$3<0;
             if($js$2)
              {return 1}
             else
              {var
                $js$3=
                 j<t[1][i$3]["length"]-1&&"unknown primitive:caml_equal";
               if($js$3){return 0}else{return loop$1(i$3-1)}}};
         var separated1=loop$1(i1-1);
         var x=t[1][i$2][j][2];
         var
          loop$2=
           function(j1)
            {var $js$2=j1<0;
             if($js$2)
              {return j1}
             else
              {var match$1=t[1][i$2][j1];
               var match$2=match$1[1];
               var $js$3=match$2;
               if(typeof $js$3=="number")
                {if($js$3==0){var exit$1=112}}
               else
                {var $js$4=$js$3[0];
                 if($js$4==0)
                  {var exit$1=112}
                 else
                  if($js$4==1)
                   {var y=match$1[2];
                    var $js$5="unknown primitive:caml_equal";
                    if($js$5){return loop$2(j1-1)}else{var exit$1=112}}}
               switch(exit$1){case 112:return j1}}};
         var j1=loop$2(j-1);
         var
          loop$3=
           function(i$3)
            {var $js$2=i$3=t[1]["length"];
             if($js$2)
              {return 1}
             else
              {var $js$3=j1<0;
               if($js$3)
                {return 0}
               else
                {var $js$4="unknown primitive:caml_equal";
                 if($js$4){return 0}else{return loop$3(i$3+1)}}}};
         var separated2=loop$3(i$2+1);
         var $js$2=!separated1||!separated2;
         if($js$2)
          {return 0}
         else
          {var $js$3=do_fall2_left(t,i1,i$2+1,j1,j);return [0,$js$3]}}}
    switch(exit){case 118:return 0}};
var
 try_shorten_too_long=
  function(t,i$2,j)
   {var match=t[1][i$2][j][1];
    var $js=match;
    if(typeof $js=="number")
     {if($js==0){var exit=108}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var exit=108}
      else
       if($js$1==1)
        {var x=t[1][i$2][j][2];
         var
          loop=
           function(j2)
            {var $js$2=j2=t[1][i$2]["length"];
             if($js$2)
              {return j2}
             else
              {var match$1=t[1][i$2][j2];
               var match$2=match$1[1];
               var $js$3=match$2;
               if(typeof $js$3=="number")
                {if($js$3==0){var exit$1=105}}
               else
                {var $js$4=$js$3[0];
                 if($js$4==0)
                  {var exit$1=105}
                 else
                  if($js$4==1)
                   {var y=match$1[2];
                    var $js$5="unknown primitive:caml_equal";
                    if($js$5){return loop(j2+1)}else{var exit$1=105}}}
               switch(exit$1){case 105:return j2}}};
         var j2=loop(j+1);
         var
          loop$1=
           function(i$3)
            {var $js$2=i$3=t[1]["length"];
             if($js$2)
              {return i$3}
             else
              {var match$1=t[1][i$3][j][1];
               var $js$3=match$1;
               if(typeof $js$3=="number")
                {if($js$3==0){var exit$1=102}}
               else
                {var $js$4=$js$3[0];
                 if($js$4==0)
                  {return loop$1(i$3+1)}
                 else
                  if($js$4==1){var exit$1=102}}
               switch(exit$1){case 102:return i$3}}};
         var i1=loop$1(i$2+1);
         var
          loop$2=
           function(i$3)
            {var $js$2=i$3=t[1]["length"];
             if($js$2)
              {return i$3}
             else
              {var match$1=t[1][i$3][j][1];
               var $js$3="unknown primitive:isint";
               if($js$3){return loop$2(i$3+1)}else{return i$3}}};
         var i2=loop$2(i1);
         var
          loop$3=
           function(i$3)
            {var $js$2=i$3=i2;
             if($js$2)
              {return 1}
             else
              {var $js$3=j>0&&"unknown primitive:caml_equal";
               if($js$3){return 0}else{return loop$3(i$3+1)}}};
         var separated_left=loop$3(i$2);
         var
          loop$4=
           function(i$3)
            {var $js$2=i$3=i2;
             if($js$2)
              {return 1}
             else
              {var
                $js$3=
                 j2<t[1][i$3]["length"]&&"unknown primitive:caml_equal";
               if($js$3){return 0}else{return loop$4(i$3+1)}}};
         var separated_right=loop$4(i$2);
         var $js$2=!separated_left||!separated_right;
         if($js$2)
          {return 0}
         else
          {var $js$3=i2<t[1]["length"];
           if($js$3)
            {return 0}
           else
            {var $js$4=do_shorten_too_long(t,i$2,j,j2);return [0,$js$4]}}}}
    switch(exit){case 108:return 0}};
var
 fall2_right=
  function(t)
   {var
     loop_i=
      function(i$2,t$1)
       {var $js=i$2<=0;
        if($js)
         {return t$1}
        else
         {var
           loop_j=
            function(j,t$2)
             {var $js$1=j<0;
              if($js$1)
               {return loop_i(i$2-1,t$2)}
              else
               {var match=try_fall2_right(t$2,i$2,j);
                var $js$2=match;
                if($js$2)
                 {var t$3=match[1];return loop_i(t$3[1]["length"]-1,t$3)}
                else
                 {return loop_j(j-1,t$2)}}};
          return loop_j(t$1[1][i$2]["length"]-2,t$1)}};
    return loop_i(t[1]["length"]-1,t)};
var
 fall2_left=
  function(t)
   {var
     loop_i=
      function(i$2,t$1)
       {var $js=i$2<=0;
        if($js)
         {return t$1}
        else
         {var
           loop_j=
            function(j,t$2)
             {var $js$1=j>=t$2[1][i$2]["length"];
              if($js$1)
               {return loop_i(i$2-1,t$2)}
              else
               {var match=try_fall2_left(t$2,i$2,j);
                var $js$2=match;
                if($js$2)
                 {var t$3=match[1];return loop_i(t$3[1]["length"]-1,t$3)}
                else
                 {return loop_j(j+1,t$2)}}};
          return loop_j(1,t$1)}};
    return loop_i(t[1]["length"]-1,t)};
var
 shorten_too_long=
  function(t)
   {var
     loop_i=
      function(i$2,t$1)
       {var $js=i$2<=0;
        if($js)
         {return t$1}
        else
         {var
           loop_j=
            function(j,t$2)
             {var $js$1=j>=t$2[1][i$2]["length"];
              if($js$1)
               {return loop_i(i$2-1,t$2)}
              else
               {var match=try_shorten_too_long(t$2,i$2,j);
                var $js$2=match;
                if($js$2)
                 {var t$3=match[1];return loop_i(t$3[1]["length"]-1,t$3)}
                else
                 {return loop_j(j+1,t$2)}}};
          return loop_j(1,t$1)}};
    return loop_i(t[1]["length"]-1,t)};
var
 top_adjust=
  function(t)
   {var
     loop=
      function(i$2)
       {var $js=i$2=t[1]["length"];
        if($js)
         {return i$2}
        else
         {var
           loop_j=
            function(j)
             {var $js$1=j=t[1][i$2]["length"];
              if($js$1)
               {return loop(i$2+1)}
              else
               {var $js$2=t[1][i$2][j][1]!=0;
                if($js$2){return i$2}else{return loop_j(j+1)}}};
          return loop_j(0)}};
    var di=loop(0);
    var $js=di>0;
    if($js)
     {var $js$1=0;
      var $js$2=t[1]["length"]-1-di;
      for(var i$2=$js$1;i$2<=$js$2;i$2++){t[1][i$2]=t[1][i$2+di],0}
      var $js$3=Array["sub"];
      var $js$4=$js$3(t[1],0,t[1]["length"]-di);
      return [0,$js$4]}
    else
     {return t}};
var
 bottom_adjust=
  function(t)
   {var
     loop=
      function(i$2)
       {var $js=i$2<0;
        if($js)
         {return i$2}
        else
         {var
           loop_j=
            function(j)
             {var $js$1=j=t[1][i$2]["length"];
              if($js$1)
               {return loop(i$2-1)}
              else
               {var $js$2=t[1][i$2][j][1]!=0;
                if($js$2){return i$2}else{return loop_j(j+1)}}};
          return loop_j(0)}};
    var last_i=loop(t[1]["length"]-1);
    var $js=last_i<t[1]["length"]-1;
    if($js)
     {var $js$1=Array["sub"];
      var $js$2=$js$1(t[1],0,last_i+1);
      return [0,$js$2]}
    else
     {return t}};
var
 invert_dag=
  function(d)
   {var $js=Array["copy"];
    var $js$1=$js(d[1]);
    var d$1=[0,$js$1];
    var $js$2=0;
    var $js$3=d$1[1]["length"]-1;
    for(var i$2=$js$2;i$2<=$js$3;i$2++)
     {var n=d$1[1][i$2];
      var $js$4=List["map"];
      var $js$5=$js$4(function(x){return x},n[3]);
      var $js$6=List["map"];
      var $js$7=$js$6(function(x){return x},n[1]);
      var $js$8=[0,$js$5,n[2],$js$7];
      d$1[1][i$2]=$js$8,0}
    return d$1};
var
 invert_table=
  function(t)
   {var $js=Array["copy"];
    var $js$1=$js(t[1]);
    var t'=[0,$js$1];
    var len=t[1]["length"];
    var $js$2=0;
    var $js$3=len-1;
    for(var i$2=$js$2;i$2<=$js$3;i$2++)
     {var $js$4=Array["init"];
      var
       $js$5=
        $js$4
         (t[1][0]["length"],
          function(j){var d=t[1][len-1-i$2][j];return [0,d[1],d[2]]});
      t'[1][i$2]=$js$5,0;
      var $js$6=i$2<len-1;
      if($js$6)
       {var $js$7=0;
        var $js$8=t'[1][i$2]["length"]-1;
        for(var j=$js$7;j<=$js$8;j++)
         {t'[1][i$2][j][2]=t[1][len-2-i$2][j][2],0}}
      else
       {}}
    return t'};
var
 table_of_dag=
  function(phony,no_optim,invert,no_group,d)
   {var $js=invert;
    if($js){var d$1=invert_dag(d)}else{var d$1=d}
    var t=tablify(phony,no_optim,no_group,d$1);
    var $js$1=invert;
    if($js$1){var t$1=invert_table(t)}else{var t$1=t}
    var match=fall(0,t$1);
    var t$2=fall2_right(t$1);
    var t$3=fall2_left(t$2);
    var t$4=shorten_too_long(t$3);
    var t$5=top_adjust(t$4);
    return bottom_adjust(t$5)};
var version="1.01";
var
 strip_spaces=
  function(str)
   {var
     loop=
      function(i$2)
       {var $js=i$2=str["length"];
        if($js)
         {return i$2}
        else
         {var match=str[i$2];
          var switcher=-9+match;
          var $js$1=!(4<switcher>>>0);
          if($js$1)
           {var $js$2=1<-2+switcher>>>0;
            if($js$2){var exit=69}else{var exit=70}}
          else
           {var $js$3=switcher!=23;if($js$3){var exit=70}else{var exit=69}}
          switch(exit){case 70:return i$2;case 69:return loop(i$2+1)}}};
    var start=loop(0);
    var
     loop$1=
      function(i$2)
       {var $js=i$2=-1;
        if($js)
         {return i$2+1}
        else
         {var match=str[i$2];
          var switcher=-9+match;
          var $js$1=!(4<switcher>>>0);
          if($js$1)
           {var $js$2=1<-2+switcher>>>0;
            if($js$2){var exit=66}else{var exit=67}}
          else
           {var $js$3=switcher!=23;if($js$3){var exit=67}else{var exit=66}}
          switch(exit){case 67:return i$2+1;case 66:return loop$1(i$2-1)}}};
    var stop=loop$1(str["length"]-1);
    var $js=(start=0)&&(stop=str["length"]);
    if($js)
     {return str}
    else
     {var $js$1=start>stop;
      if($js$1)
       {return ""}
      else
       {var $js$2=String["sub"];return $js$2(str,start,stop-start)}}};
var
 get_line=
  function(ic)
   {try
     {var $js=Pervasives["input_line"];
      var line=$js(ic);
      var $js$1=line["length"]>0&&(line[0]=35);
      if($js$1)
       {return get_line(ic)}
      else
       {var $js$2=strip_spaces(line);return [0,$js$2]}}
    catch(exn)
     {var $js$3=exn=End_of_file;
      if($js$3){return 0}else{return "unknown primitive:reraise"}}};
var
 input_dag=
  function(ic)
   {var
     find=
      function(cnt,s,param)
       {var $js=param;
        if($js)
         {var n=param[1];
          var $js$1="unknown primitive:caml_equal";
          if($js$1){return [0,n,cnt]}else{return find(cnt-1,s,param[2])}}
        else
         {return "unknown primitive:raise"}};
    var
     add_node=
      function(pl,cl,nl,cnt)
       {var $js=List["rev"];
        var cl$1=$js(cl);
        var $js$1=List["rev"];
        var pl$1=$js$1(pl);
        var $js$2=List["fold_left"];
        var
         match=
          $js$2
           (function(param,p)
             {var cnt$1=param[4];
              var nl$1=param[3];
              var pnl=param[2];
              var pl$2=param[1];
              try
               {var match$1=find(cnt$1-1,p,nl$1);
                return [0,[0,match$1[2],pl$2],[0,match$1[1],pnl],nl$1,cnt$1]}
              catch(exn)
               {var $js$3=exn=Not_found;
                if($js$3)
                 {var n=[0,0,p,0];
                  var p$1=cnt$1;
                  return [0,[0,p$1,pl$2],[0,n,pnl],[0,n,nl$1],cnt$1+1]}
                else
                 {return "unknown primitive:reraise"}}},
            [0,0,0,nl,cnt],
            pl$1);
        var $js$3=List["rev"];
        var pl$2=$js$3(match[1]);
        var $js$4=List["fold_left"];
        var
         match$1=
          $js$4
           (function(param,c)
             {var cnt$1=param[3];
              var nl$1=param[2];
              var cl$2=param[1];
              try
               {var match$2=find(cnt$1-1,c,nl$1);
                var n=match$2[1];
                var $js$5=Pervasives["@"];
                var $js$6=$js$5(n[1],pl$2);
                n[1]=$js$6,0;
                return [0,[0,match$2[2],cl$2],nl$1,cnt$1]}
              catch(exn)
               {var $js$7=exn=Not_found;
                if($js$7)
                 {var n$1=[0,pl$2,c,0];
                  var c$1=cnt$1;
                  return [0,[0,c$1,cl$2],[0,n$1,nl$1],cnt$1+1]}
                else
                 {return "unknown primitive:reraise"}}},
            [0,0,match[3],match[4]],
            cl$1);
        var $js$5=List["rev"];
        var cl$2=$js$5(match$1[1]);
        var $js$6=List["iter"];
        $js$6
         (function(p)
           {var $js$7=Pervasives["@"];
            var $js$8=$js$7(p[3],cl$2);
            return p[3]=$js$8,0},
          match[2]);
        return [0,match$1[2],match$1[3]]};
    var
     input_parents=
      function(nl,pl,cnt,param)
       {var $js=param;
        if($js)
         {var line=param[1];
          var $js$1=line;
          if($js$1=="")
           {var $js$2=get_line(ic);return input_parents(nl,pl,cnt,$js$2)}
          else
           {var match=line[0];
            var $js$3=match!=45;
            if($js$3)
             {var $js$4=match!=111;
              if($js$4)
               {var $js$5=Pervasives["failwith"];return $js$5(line)}
              else
               {var $js$6=String["sub"];
                var $js$7=$js$6(line,1,line["length"]-1);
                var p=strip_spaces($js$7);
                var $js$8="unknown primitive:caml_string_equal";
                if($js$8)
                 {var $js$9=Pervasives["failwith"];return $js$9(line)}
                else
                 {var $js$10=get_line(ic);
                  return input_parents(nl,[0,p,pl],cnt,$js$10)}}}
            else
             {var $js$11=pl=0;
              if($js$11)
               {var $js$12=Pervasives["failwith"];return $js$12(line)}
              else
               {return input_children(nl,pl,0,cnt,[0,line])}}}}
        else
         {var $js$13=pl=0;
          if($js$13)
           {return [0,nl,cnt]}
          else
           {var $js$14=Pervasives["failwith"];return $js$14("end of file 1")}}};
    var
     input_children=
      function(nl,pl,cl,cnt,param)
       {var $js=param;
        if($js)
         {var line=param[1];
          var $js$1=line;
          if($js$1=="")
           {var $js$2=get_line(ic);return input_children(nl,pl,cl,cnt,$js$2)}
          else
           {var match=line[0];
            var $js$3=match!=45;
            if($js$3)
             {var $js$4=match!=111;
              if($js$4)
               {var $js$5=Pervasives["failwith"];return $js$5(line)}
              else
               {var $js$6=cl=0;
                if($js$6)
                 {var $js$7=Pervasives["failwith"];return $js$7(line)}
                else
                 {var match$1=add_node(pl,cl,nl,cnt);
                  return input_parents(match$1[1],0,match$1[2],[0,line])}}}
            else
             {var $js$8=String["sub"];
              var $js$9=$js$8(line,1,line["length"]-1);
              var c=strip_spaces($js$9);
              var $js$10="unknown primitive:caml_string_equal";
              if($js$10)
               {var $js$11=Pervasives["failwith"];return $js$11(line)}
              else
               {var $js$12=get_line(ic);
                return input_children(nl,pl,[0,c,cl],cnt,$js$12)}}}}
        else
         {var $js$13=cl=0;
          if($js$13)
           {var $js$14=Pervasives["failwith"];return $js$14("end of file 2")}
          else
           {return add_node(pl,cl,nl,cnt)}}};
    var $js=get_line(ic);
    var match=input_parents(0,0,0,$js);
    var $js$1=Array["of_list"];
    var $js$2=List["rev"];
    var $js$3=$js$2(match[1]);
    var $js$4=$js$1($js$3);
    return [0,$js$4]};
var
 map_dag=
  function(f,d)
   {var $js=Array["map"];
    var
     a=
      $js
       (function(d$1){var $js$1=f(d$1[2]);return [0,d$1[1],$js$1,d$1[3]]},
        d[1]);
    return [0,a]};
var
 tag_dag=
  function(d)
   {var c=[0,65];
    return map_dag
            (function(v)
              {var v$1=c[1];
               var $js=c[1]=90;
               if($js)
                {var $js$1=97}
               else
                {var $js$2=c[1]=122;
                 if($js$2)
                  {var $js$1=49}
                 else
                  {var $js$3=Char["chr"];var $js$1=$js$3(c[1]+1)}}
               c[1]=$js$1,0;
               var $js$4=String["make"];
               return $js$4(1,v$1)},
             d)};
var phony=function(param){return 0};
var indi_txt=function(n){return n[2]};
var
 string_table=
  function(border,hts)
   {var $js=Buffer["create"];
    var buf=$js(30);
    var $js$1=Printf["bprintf"];
    $js$1
     (buf,
      [0,[11,"<center><table border=",[4,0,0,0,0]],"<center><table border=%d"],
      border);
    var $js$2=Printf["bprintf"];
    $js$2
     (buf,
      [0,
       [11," cellspacing=0 cellpadding=0>\n",0],
       " cellspacing=0 cellpadding=0>\n"]);
    var $js$3=0;
    var $js$4=hts["length"]-1;
    for(var i$2=$js$3;i$2<=$js$4;i$2++)
     {var $js$5=Printf["bprintf"];
      $js$5(buf,[0,[11,"<tr>\n",0],"<tr>\n"]);
      var $js$6=0;
      var $js$7=hts[i$2]["length"]-1;
      for(var j=$js$6;j<=$js$7;j++)
       {var match=hts[i$2][j];
        var td=match[3];
        var colspan=match[1];
        var $js$8=Printf["bprintf"];
        $js$8(buf,[0,[11,"<td",0],"<td"]);
        var
         $js$9=
          (colspan=1)&&
          ("unknown primitive:caml_equal"||"unknown primitive:caml_equal");
        if($js$9)
         {}
        else
         {var $js$10=Printf["bprintf"];
          $js$10(buf,[0,[11," colspan=",[4,0,0,0,0]]," colspan=%d"],colspan)}
        var $js$11=match[2];
        var $js$12=$js$11[0];
        if($js$12==0)
         {var $js$13=td;
          if($js$13==0)
           {var exit=29}
          else
           if($js$13==1)
            {var $js$14=td[1]!=0;
             if($js$14)
              {var exit=29}
             else
              {var $js$15=Printf["bprintf"];
               $js$15(buf,[0,[11," align=left",0]," align=left"])}}
          switch(exit){case 29:}}
        else
         if($js$12==1)
          {var $js$16=Printf["bprintf"];
           $js$16(buf,[0,[11," align=center",0]," align=center"])}
         else
          if($js$12==2)
           {var $js$17=Printf["bprintf"];
            $js$17(buf,[0,[11," align=right",0]," align=right"])}
        var $js$18=Printf["bprintf"];
        $js$18(buf,[0,[12,62,0],">"]);
        var $js$19=td;
        if($js$19==0)
         {var $js$20=Printf["bprintf"];$js$20(buf,[0,[2,0,0],"%s"],td[1])}
        else
         if($js$19==1)
          {var $js$21=Printf["bprintf"];
           $js$21(buf,[0,[11,"<hr noshade size=1",0],"<hr noshade size=1"]);
           var $js$22=td[1];
           var $js$23=$js$22[0];
           if($js$23==0)
            {var $js$24=Printf["bprintf"];
             $js$24
              (buf,
               [0,
                [11,' width="50',[12,37,[11,'" align=left',0]]],
                ' width="50%%" align=left'])}
           else
            if($js$23==1)
             {}
            else
             if($js$23==2)
              {var $js$25=Printf["bprintf"];
               $js$25
                (buf,
                 [0,
                  [11,' width="50',[12,37,[11,'" align=right',0]]],
                  ' width="50%%" align=right'])}
           var $js$26=Printf["bprintf"];
           $js$26(buf,[0,[12,62,0],">"])}
        var $js$27=Printf["bprintf"];
        $js$27(buf,[0,[11,"</td>\n",0],"</td>\n"])}}
    var $js$28=Printf["bprintf"];
    $js$28(buf,[0,[11,"</table></center>\n",0],"</table></center>\n"]);
    var $js$29=Buffer["contents"];
    return $js$29(buf)};
var fname="";
var invert=[0,0];
var char=0;
var border=[0,0];
var no_optim=[0,0];
var no_group=[0,0];
var
 html_of_dag=
  function(d)
   {var t=table_of_dag(phony,no_optim[1],invert[1],no_group[1],d);
    var hts=html_table_struct(indi_txt,phony,d,t);
    return string_table(border[1],hts)};
var
 create_class_dag=
  function(cl_list,clt_list)
   {var M=Odoc_info["Class"];
    var $js=List["map"];
    var cl_list2=$js(function(c){return [0,c[1],[0,[0,c]]]},cl_list);
    var $js$1=List["map"];
    var clt_list2=$js$1(function(ct){return [0,ct[1],[0,[1,ct,0]]]},clt_list);
    var $js$2=Pervasives["@"];
    var list=$js$2(cl_list2,clt_list2);
    var
     iter=
      function(list2)
       {var $js$3=List["fold_left"];
        return $js$3
                (function(acc,param)
                  {var cct_opt=param[2];
                   var $js$4=cct_opt;
                   if($js$4)
                    {var match=cct_opt[1];
                     var $js$5=match;
                     if($js$5==0)
                      {var $js$6=List["map"];
                       var match$1=match[1][6];
                       var $js$7=match$1;
                       if($js$7==0){var $js$8=match$1[1]}else{var $js$8=0}
                       var
                        $js$9=
                         $js$6(function(inh){return [0,inh[1],inh[2]]},$js$8);
                       var l=iter($js$9)}
                     else
                      if($js$5==1)
                       {var $js$10=List["map"];
                        var match$2=match[1][6];
                        var $js$11=match$2;
                        if($js$11==0)
                         {var $js$12=match$2[1]}
                        else
                         if($js$11==1){var $js$12=0}
                        var
                         $js$13=
                          $js$10(function(inh){return [0,inh[1],inh[2]]},$js$12);
                        var l=iter($js$13)}}
                   else
                    {var l=0}
                   var $js$14=Pervasives["@"];
                   var $js$15=$js$14(acc,l);
                   return [0,[0,param[1],cct_opt],$js$15]},
                 0,
                 list2)};
    var all_classes=iter(list);
    var
     distinct=
      function(acc,param)
       {var $js$3=param;
        if($js$3)
         {var q=param[2];
          var match=param[1];
          var name=match[1];
          var $js$4=List["exists"];
          var
           $js$5=
            $js$4
             (function(param$1){return "unknown primitive:caml_equal"},acc);
          if($js$5)
           {return distinct(acc,q)}
          else
           {return distinct([0,[0,name,match[2]],acc],q)}}
        else
         {return acc}};
    var distinct_classes=distinct(0,all_classes);
    var
     f=
      function(n,param)
       {var $js$3=param;
        if($js$3)
         {var $js$4=f(n+1,param[2]);return [0,[0,param[1][1],n],$js$4]}
        else
         {return 0}};
    var liste_index=f(0,distinct_classes);
    var $js$3=Array["of_list"];
    var array1=$js$3(distinct_classes);
    var
     fmap=
      function(param)
       {var cct_opt=param[2];
        var $js$4=List["map"];
        var $js$5=cct_opt;
        if($js$5)
         {var match=cct_opt[1];
          var $js$6=match;
          if($js$6==0)
           {var match$1=match[1][6];
            var $js$7=match$1;
            if($js$7==0){var $js$8=match$1[1]}else{var $js$8=0}}
          else
           if($js$6==1)
            {var match$2=match[1][6];
             var $js$9=match$2;
             if($js$9==0){var $js$8=match$2[1]}else if($js$9==1){var $js$8=0}}}
        else
         {var $js$8=0}
        var
         $js$10=
          $js$4
           (function(inh)
             {var $js$11=List["assoc"];return $js$11(inh[1],liste_index)},
            $js$8);
        return [0,$js$10,[0,param[1],cct_opt],0]};
    var $js$4=Array["map"];
    var $js$5=$js$4(fmap,array1);
    var dag=[0,$js$5];
    var
     fiter=
      function(i$2,node)
       {var $js$6=Array["to_list"];
        var l=$js$6(dag[1]);
        var $js$7=List["map"];
        var $js$8=List["filter"];
        var
         $js$9=
          $js$8(function(n){var $js$10=List["mem"];return $js$10(i$2,n[1])},l);
        var l2=$js$7(function(n){return n[2]},$js$9);
        var $js$10=List["map"];
        var
         $js$11=
          $js$10
           (function(param)
             {var $js$12=List["assoc"];return $js$12(param[1],liste_index)},
            l2);
        return node[3]=$js$11,0};
    var $js$6=Array["iteri"];
    $js$6(fiter,dag[1]);
    return dag};
module["exports"]=
{"html_of_dag":html_of_dag,"create_class_dag":create_class_dag};
