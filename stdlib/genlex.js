var $$String=require("String");
var Char=require("Char");
var Pervasives=require("Pervasives");
var List=require("List");
var Bytes=require("Bytes");
var Hashtbl=require("Hashtbl");
var Stream=require("Stream");
var initial_buffer="unknown primitive:caml_create_string";
var buffer=[0,initial_buffer];
var bufpos=[0,0];
var
 reset_buffer=
  function(param){buffer[1]=initial_buffer,0;return bufpos[1]=0,0};
var
 store=
  function(c)
   {var $js=bufpos[1]>=buffer[1]["length"];
    if($js)
     {var newbuffer="unknown primitive:caml_create_string";
      var $js$1=Bytes["blit"];
      $js$1(buffer[1],0,newbuffer,0,bufpos[1]);
      buffer[1]=newbuffer,0}
    else
     {}
    buffer[1][bufpos[1]]=c,0;
    return bufpos[0]++};
var
 get_string=
  function(param)
   {var $js=Bytes["sub_string"];
    var s=$js(buffer[1],0,bufpos[1]);
    buffer[1]=initial_buffer,0;
    return s};
var
 make_lexer=
  function(keywords)
   {var $js=Hashtbl["create"];
    var kwd_table=$js(0,17);
    var $js$1=List["iter"];
    $js$1
     (function(s){var $js$2=Hashtbl["add"];return $js$2(kwd_table,s,[0,s])},
      keywords);
    var
     ident_or_keyword=
      function(id)
       {try
         {var $js$2=Hashtbl["find"];return $js$2(kwd_table,id)}
        catch(exn)
         {var $js$3=exn=Not_found;
          if($js$3){return [1,id]}else{return "unknown primitive:reraise"}}};
    var
     keyword_or_error=
      function(c)
       {var $js$2=$$String["make"];
        var s=$js$2(1,c);
        try
         {var $js$3=Hashtbl["find"];return $js$3(kwd_table,s)}
        catch(exn)
         {var $js$4=exn=Not_found;
          if($js$4)
           {var $js$5=Pervasives["^"];
            var $js$6=$js$5("Illegal character ",s);
            var $js$7=[0,Stream["Error"],$js$6];
            throw $js$7}
          else
           {return "unknown primitive:reraise"}}};
    var
     next_token=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var $js$4=c<124;
          if($js$4)
           {var switcher=-65+c;
            var $js$5=!(57<switcher>>>0);
            if($js$5)
             {var switcher$1=-26+switcher;
              var $js$6=5<switcher$1>>>0;
              if($js$6)
               {var exit=10}
              else
               {var $js$7=switcher$1;
                var $js$8=$js$7[0];
                if($js$8==0)
                 {var exit=13}
                else
                 if($js$8==1)
                  {var exit=11}
                 else
                  if($js$8==2)
                   {var exit=13}
                  else
                   if($js$8==3)
                    {var exit=11}
                   else
                    if($js$8==4){var exit=10}else if($js$8==5){var exit=13}}}
            else
             {var $js$9=switcher>=58;
              if($js$9)
               {var exit=13}
              else
               {var switcher$2=65+switcher;
                var $js$10=switcher$2;
                var $js$11=$js$10[0];
                if($js$11==0)
                 {var exit=13}
                else
                 if($js$11==1)
                  {var exit=13}
                 else
                  if($js$11==2)
                   {var exit=13}
                  else
                   if($js$11==3)
                    {var exit=13}
                   else
                    if($js$11==4)
                     {var exit=13}
                    else
                     if($js$11==5)
                      {var exit=13}
                     else
                      if($js$11==6)
                       {var exit=13}
                      else
                       if($js$11==7)
                        {var exit=13}
                       else
                        if($js$11==8)
                         {var exit=13}
                        else
                         if($js$11==9)
                          {var exit=9}
                         else
                          if($js$11==10)
                           {var exit=9}
                          else
                           if($js$11==11)
                            {var exit=13}
                           else
                            if($js$11==12)
                             {var exit=9}
                            else
                             if($js$11==13)
                              {var exit=9}
                             else
                              if($js$11==14)
                               {var exit=13}
                              else
                               if($js$11==15)
                                {var exit=13}
                               else
                                if($js$11==16)
                                 {var exit=13}
                                else
                                 if($js$11==17)
                                  {var exit=13}
                                 else
                                  if($js$11==18)
                                   {var exit=13}
                                  else
                                   if($js$11==19)
                                    {var exit=13}
                                   else
                                    if($js$11==20)
                                     {var exit=13}
                                    else
                                     if($js$11==21)
                                      {var exit=13}
                                     else
                                      if($js$11==22)
                                       {var exit=13}
                                      else
                                       if($js$11==23)
                                        {var exit=13}
                                       else
                                        if($js$11==24)
                                         {var exit=13}
                                        else
                                         if($js$11==25)
                                          {var exit=13}
                                         else
                                          if($js$11==26)
                                           {var exit=9}
                                          else
                                           if($js$11==27)
                                            {var exit=13}
                                           else
                                            if($js$11==28)
                                             {var exit=13}
                                            else
                                             if($js$11==29)
                                              {var exit=13}
                                             else
                                              if($js$11==30)
                                               {var exit=13}
                                              else
                                               if($js$11==31)
                                                {var exit=13}
                                               else
                                                if($js$11==32)
                                                 {var exit=9}
                                                else
                                                 if($js$11==33)
                                                  {var exit=11}
                                                 else
                                                  if($js$11==34)
                                                   {var $js$12=Stream["junk"];
                                                    $js$12(strm__);
                                                    var s=strm__;
                                                    reset_buffer(0);
                                                    var $js$13=string(s);
                                                    var $js$14=[4,$js$13];
                                                    return [0,$js$14]}
                                                  else
                                                   if($js$11==35)
                                                    {var exit=11}
                                                   else
                                                    if($js$11==36)
                                                     {var exit=11}
                                                    else
                                                     if($js$11==37)
                                                      {var exit=11}
                                                     else
                                                      if($js$11==38)
                                                       {var exit=11}
                                                      else
                                                       if($js$11==39)
                                                        {var $js$15=Stream["junk"];
                                                         $js$15(strm__);
                                                         try
                                                          {var c$1=$$char(strm__)}
                                                         catch(exn)
                                                          {var $js$16=exn=Stream["Failure"];
                                                           if($js$16)
                                                            {var $js$17=[0,Stream["Error"],""];throw $js$17}
                                                           else
                                                            {var c$1="unknown primitive:reraise"}}
                                                         var $js$18=Stream["peek"];
                                                         var match$1=$js$18(strm__);
                                                         var $js$19=match$1;
                                                         if($js$19)
                                                          {var match$2=match$1[1];
                                                           var $js$20=match$2!=39;
                                                           if($js$20)
                                                            {var exit$1=4}
                                                           else
                                                            {var $js$21=Stream["junk"];
                                                             $js$21(strm__);
                                                             return [0,[5,c$1]]}}
                                                         else
                                                          {var exit$1=4}
                                                         switch(exit$1)
                                                          {case 4:var $js$22=[0,Stream["Error"],""];throw $js$22}}
                                                       else
                                                        if($js$11==40)
                                                         {var $js$23=Stream["junk"];
                                                          $js$23(strm__);
                                                          return maybe_comment(strm__)}
                                                        else
                                                         if($js$11==41)
                                                          {var exit=13}
                                                         else
                                                          if($js$11==42)
                                                           {var exit=11}
                                                          else
                                                           if($js$11==43)
                                                            {var exit=11}
                                                           else
                                                            if($js$11==44)
                                                             {var exit=13}
                                                            else
                                                             if($js$11==45)
                                                              {var $js$24=Stream["junk"];
                                                               $js$24(strm__);
                                                               return neg_number(strm__)}
                                                             else
                                                              if($js$11==46)
                                                               {var exit=13}
                                                              else
                                                               if($js$11==47)
                                                                {var exit=11}
                                                               else
                                                                if($js$11==48)
                                                                 {var exit=12}
                                                                else
                                                                 if($js$11==49)
                                                                  {var exit=12}
                                                                 else
                                                                  if($js$11==50)
                                                                   {var exit=12}
                                                                  else
                                                                   if($js$11==51)
                                                                    {var exit=12}
                                                                   else
                                                                    if($js$11==52)
                                                                     {var exit=12}
                                                                    else
                                                                     if($js$11==53)
                                                                      {var exit=12}
                                                                     else
                                                                      if($js$11==54)
                                                                       {var exit=12}
                                                                      else
                                                                       if($js$11==55)
                                                                        {var exit=12}
                                                                       else
                                                                        if($js$11==56)
                                                                         {var exit=12}
                                                                        else
                                                                         if($js$11==57)
                                                                          {var exit=12}
                                                                         else
                                                                          if($js$11==58)
                                                                           {var exit=11}
                                                                          else
                                                                           if($js$11==59)
                                                                            {var exit=13}
                                                                           else
                                                                            if($js$11==60)
                                                                             {var exit=11}
                                                                            else
                                                                             if($js$11==61)
                                                                              {var exit=11}
                                                                             else
                                                                              if($js$11==62)
                                                                               {var exit=11}
                                                                              else
                                                                               if($js$11==63){var exit=11}else if($js$11==64){var exit=11}}}}
          else
           {var $js$25=c>=127;
            if($js$25)
             {var $js$26=c>=192;if($js$26){var exit=10}else{var exit=13}}
            else
             {var $js$27=c!=125;if($js$27){var exit=11}else{var exit=13}}}
          switch(exit)
           {case 13:
             var c$2=c;
             var $js$28=Stream["junk"];
             $js$28(strm__);
             var $js$29=keyword_or_error(c$2);
             return [0,$js$29];
            case 9:
             var $js$30=Stream["junk"];
             $js$30(strm__);
             return next_token(strm__);
            case 10:
             var $js$31=Stream["junk"];
             $js$31(strm__);
             var s$1=strm__;
             reset_buffer(0);
             store(c);
             return ident(s$1);
            case 11:
             var c$3=c;
             var $js$32=Stream["junk"];
             $js$32(strm__);
             var s$2=strm__;
             reset_buffer(0);
             store(c$3);
             return ident2(s$2);
            case 12:
             var c$4=c;
             var $js$33=Stream["junk"];
             $js$33(strm__);
             var s$3=strm__;
             reset_buffer(0);
             store(c$4);
             return number(s$3)
            }}
        else
         {return 0}};
    var
     ident=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var $js$4=c>=91;
          if($js$4)
           {var switcher=-95+c;
            var $js$5=27<switcher>>>0;
            if($js$5)
             {var $js$6=switcher>=97;
              if($js$6){var exit=16}else{var exit$1=15}}
            else
             {var $js$7=switcher!=1;if($js$7){var exit=16}else{var exit$1=15}}}
          else
           {var $js$8=c>=48;
            if($js$8)
             {var switcher$1=-58+c;
              var $js$9=6<switcher$1>>>0;
              if($js$9){var exit=16}else{var exit$1=15}}
            else
             {var $js$10=c!=39;if($js$10){var exit$1=15}else{var exit=16}}}
          switch(exit)
           {case 16:
             var $js$11=Stream["junk"];
             $js$11(strm__);
             var s=strm__;
             store(c);
             return ident(s)
            }}
        else
         {var exit$1=15}
        switch(exit$1)
         {case 15:
           var $js$12=get_string(0);
           var $js$13=ident_or_keyword($js$12);
           return [0,$js$13]
          }};
    var
     ident2=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var $js$4=c>=94;
          if($js$4)
           {var switcher=-95+c;
            var $js$5=30<switcher>>>0;
            if($js$5)
             {var $js$6=switcher>=32;
              if($js$6){var exit=18}else{var exit$1=19}}
            else
             {var $js$7=switcher!=29;
              if($js$7){var exit=18}else{var exit$1=19}}}
          else
           {var $js$8=c>=65;
            if($js$8)
             {var $js$9=c!=92;if($js$9){var exit=18}else{var exit$1=19}}
            else
             {var $js$10=c>=33;
              if($js$10)
               {var switcher$1=-33+c;
                var $js$11=switcher$1;
                var $js$12=$js$11[0];
                if($js$12==0)
                 {var exit$1=19}
                else
                 if($js$12==1)
                  {var exit=18}
                 else
                  if($js$12==2)
                   {var exit$1=19}
                  else
                   if($js$12==3)
                    {var exit$1=19}
                   else
                    if($js$12==4)
                     {var exit$1=19}
                    else
                     if($js$12==5)
                      {var exit$1=19}
                     else
                      if($js$12==6)
                       {var exit=18}
                      else
                       if($js$12==7)
                        {var exit=18}
                       else
                        if($js$12==8)
                         {var exit=18}
                        else
                         if($js$12==9)
                          {var exit$1=19}
                         else
                          if($js$12==10)
                           {var exit$1=19}
                          else
                           if($js$12==11)
                            {var exit=18}
                           else
                            if($js$12==12)
                             {var exit$1=19}
                            else
                             if($js$12==13)
                              {var exit=18}
                             else
                              if($js$12==14)
                               {var exit$1=19}
                              else
                               if($js$12==15)
                                {var exit=18}
                               else
                                if($js$12==16)
                                 {var exit=18}
                                else
                                 if($js$12==17)
                                  {var exit=18}
                                 else
                                  if($js$12==18)
                                   {var exit=18}
                                  else
                                   if($js$12==19)
                                    {var exit=18}
                                   else
                                    if($js$12==20)
                                     {var exit=18}
                                    else
                                     if($js$12==21)
                                      {var exit=18}
                                     else
                                      if($js$12==22)
                                       {var exit=18}
                                      else
                                       if($js$12==23)
                                        {var exit=18}
                                       else
                                        if($js$12==24)
                                         {var exit=18}
                                        else
                                         if($js$12==25)
                                          {var exit$1=19}
                                         else
                                          if($js$12==26)
                                           {var exit=18}
                                          else
                                           if($js$12==27)
                                            {var exit$1=19}
                                           else
                                            if($js$12==28)
                                             {var exit$1=19}
                                            else
                                             if($js$12==29)
                                              {var exit$1=19}
                                             else
                                              if($js$12==30)
                                               {var exit$1=19}
                                              else
                                               if($js$12==31){var exit$1=19}}
              else
               {var exit=18}}}
          switch(exit$1)
           {case 19:
             var $js$13=Stream["junk"];
             $js$13(strm__);
             var s=strm__;
             store(c);
             return ident2(s)
            }}
        else
         {var exit=18}
        switch(exit)
         {case 18:
           var $js$14=get_string(0);
           var $js$15=ident_or_keyword($js$14);
           return [0,$js$15]
          }};
    var
     neg_number=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var switcher=-48+c;
          var $js$4=9<switcher>>>0;
          if($js$4)
           {var exit=22}
          else
           {var $js$5=Stream["junk"];
            $js$5(strm__);
            var s=strm__;
            reset_buffer(0);
            store(45);
            store(c);
            return number(s)}}
        else
         {var exit=22}
        switch(exit)
         {case 22:var s$1=strm__;reset_buffer(0);store(45);return ident2(s$1)}};
    var
     number=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var $js$4=c>=58;
          if($js$4)
           {var $js$5=c!=69;
            if($js$5)
             {var $js$6=c!=101;if($js$6){var exit=27}else{var exit$1=29}}
            else
             {var exit$1=29}}
          else
           {var $js$7=c!=46;
            if($js$7)
             {var $js$8=c>=48;
              if($js$8)
               {var $js$9=Stream["junk"];
                $js$9(strm__);
                var s=strm__;
                store(c);
                return number(s)}
              else
               {var exit=27}}
            else
             {var $js$10=Stream["junk"];
              $js$10(strm__);
              var s$1=strm__;
              store(46);
              return decimal_part(s$1)}}
          switch(exit$1)
           {case 29:
             var $js$11=Stream["junk"];
             $js$11(strm__);
             var s$2=strm__;
             store(69);
             return exponent_part(s$2)
            }}
        else
         {var exit=27}
        switch(exit)
         {case 27:
           var $js$12=get_string(0);
           var $js$13="unknown primitive:caml_int_of_string";
           var $js$14=[2,$js$13];
           return [0,$js$14]
          }};
    var
     decimal_part=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var switcher=-69+c;
          var $js$4=32<switcher>>>0;
          if($js$4)
           {var switcher$1=21+switcher;
            var $js$5=9<switcher$1>>>0;
            if($js$5)
             {var exit=32}
            else
             {var $js$6=Stream["junk"];
              $js$6(strm__);
              var s=strm__;
              store(c);
              return decimal_part(s)}}
          else
           {var switcher$2=-1+switcher;
            var $js$7=30<switcher$2>>>0;
            if($js$7)
             {var $js$8=Stream["junk"];
              $js$8(strm__);
              var s$1=strm__;
              store(69);
              return exponent_part(s$1)}
            else
             {var exit=32}}}
        else
         {var exit=32}
        switch(exit)
         {case 32:
           var $js$9=get_string(0);
           var $js$10="unknown primitive:caml_float_of_string";
           var $js$11=[3,$js$10];
           return [0,$js$11]
          }};
    var
     exponent_part=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var $js$4=c!=43;
          if($js$4)
           {var $js$5=c!=45;if($js$5){var exit=36}else{var exit$1=37}}
          else
           {var exit$1=37}
          switch(exit$1)
           {case 37:
             var $js$6=Stream["junk"];
             $js$6(strm__);
             var s=strm__;
             store(c);
             return end_exponent_part(s)
            }}
        else
         {var exit=36}
        switch(exit){case 36:return end_exponent_part(strm__)}};
    var
     end_exponent_part=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var switcher=-48+c;
          var $js$4=9<switcher>>>0;
          if($js$4)
           {var exit=39}
          else
           {var $js$5=Stream["junk"];
            $js$5(strm__);
            var s=strm__;
            store(c);
            return end_exponent_part(s)}}
        else
         {var exit=39}
        switch(exit)
         {case 39:
           var $js$6=get_string(0);
           var $js$7="unknown primitive:caml_float_of_string";
           var $js$8=[3,$js$7];
           return [0,$js$8]
          }};
    var
     string=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var $js$4=c!=34;
          if($js$4)
           {var $js$5=c!=92;
            if($js$5)
             {var $js$6=Stream["junk"];
              $js$6(strm__);
              var s=strm__;
              store(c);
              return string(s)}
            else
             {var $js$7=Stream["junk"];
              $js$7(strm__);
              try
               {var c$1=$$escape(strm__)}
              catch(exn)
               {var $js$8=exn=Stream["Failure"];
                if($js$8)
                 {var $js$9=[0,Stream["Error"],""];throw $js$9}
                else
                 {var c$1="unknown primitive:reraise"}}
              var s$1=strm__;
              store(c$1);
              return string(s$1)}}
          else
           {var $js$10=Stream["junk"];$js$10(strm__);return get_string(0)}}
        else
         {var $js$11=Stream["Failure"];throw $js$11}};
    var
     $$char=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var $js$4=c!=92;
          if($js$4)
           {var $js$5=Stream["junk"];$js$5(strm__);return c}
          else
           {var $js$6=Stream["junk"];
            $js$6(strm__);
            try
             {return $$escape(strm__)}
            catch(exn)
             {var $js$7=exn=Stream["Failure"];
              if($js$7)
               {var $js$8=[0,Stream["Error"],""];throw $js$8}
              else
               {return "unknown primitive:reraise"}}}}
        else
         {var $js$9=Stream["Failure"];throw $js$9}};
    var
     $$escape=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c1=match[1];
          var $js$4=c1>=58;
          if($js$4)
           {var switcher=-110+c1;
            var $js$5=6<switcher>>>0;
            if($js$5)
             {var exit=56}
            else
             {var $js$6=switcher;
              var $js$7=$js$6[0];
              if($js$7==0)
               {var $js$8=Stream["junk"];$js$8(strm__);return 10}
              else
               if($js$7==1)
                {var exit=56}
               else
                if($js$7==2)
                 {var exit=56}
                else
                 if($js$7==3)
                  {var exit=56}
                 else
                  if($js$7==4)
                   {var $js$9=Stream["junk"];$js$9(strm__);return 13}
                  else
                   if($js$7==5)
                    {var exit=56}
                   else
                    if($js$7==6)
                     {var $js$10=Stream["junk"];$js$10(strm__);return 9}}}
          else
           {var $js$11=c1>=48;
            if($js$11)
             {var $js$12=Stream["junk"];
              $js$12(strm__);
              var $js$13=Stream["peek"];
              var match$1=$js$13(strm__);
              var $js$14=match$1;
              if($js$14)
               {var c2=match$1[1];
                var switcher$1=-48+c2;
                var $js$15=9<switcher$1>>>0;
                if($js$15)
                 {var exit$1=52}
                else
                 {var $js$16=Stream["junk"];
                  $js$16(strm__);
                  var $js$17=Stream["peek"];
                  var match$2=$js$17(strm__);
                  var $js$18=match$2;
                  if($js$18)
                   {var c3=match$2[1];
                    var switcher$2=-48+c3;
                    var $js$19=9<switcher$2>>>0;
                    if($js$19)
                     {var exit$2=50}
                    else
                     {var $js$20=Stream["junk"];
                      $js$20(strm__);
                      var $js$21=Char["chr"];
                      return $js$21((c1-48)*100+(c2-48)*10+(c3-48))}}
                  else
                   {var exit$2=50}
                  switch(exit$2)
                   {case 50:var $js$22=[0,Stream["Error"],""];throw $js$22}}}
              else
               {var exit$1=52}
              switch(exit$1)
               {case 52:var $js$23=[0,Stream["Error"],""];throw $js$23}}
            else
             {var exit=56}}
          switch(exit)
           {case 56:var c=c1;var $js$24=Stream["junk"];$js$24(strm__);return c
            }}
        else
         {var $js$25=Stream["Failure"];throw $js$25}};
    var
     maybe_comment=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var match$1=match[1];
          var $js$4=match$1!=42;
          if($js$4)
           {var exit=58}
          else
           {var $js$5=Stream["junk"];
            $js$5(strm__);
            var s=strm__;
            comment(s);
            return next_token(s)}}
        else
         {var exit=58}
        switch(exit){case 58:var $js$6=keyword_or_error(40);return [0,$js$6]}};
    var
     comment=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var switcher=-40+c;
          var $js$4=2<switcher>>>0;
          if($js$4)
           {var exit=60}
          else
           {var $js$5=switcher;
            var $js$6=$js$5[0];
            if($js$6==0)
             {var $js$7=Stream["junk"];
              $js$7(strm__);
              return maybe_nested_comment(strm__)}
            else
             if($js$6==1)
              {var exit=60}
             else
              if($js$6==2)
               {var $js$8=Stream["junk"];
                $js$8(strm__);
                return maybe_end_comment(strm__)}}
          switch(exit)
           {case 60:
             var $js$9=Stream["junk"];$js$9(strm__);return comment(strm__)
            }}
        else
         {var $js$10=Stream["Failure"];throw $js$10}};
    var
     maybe_nested_comment=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var $js$4=c!=42;
          if($js$4)
           {var $js$5=Stream["junk"];$js$5(strm__);return comment(strm__)}
          else
           {var $js$6=Stream["junk"];
            $js$6(strm__);
            var s=strm__;
            comment(s);
            return comment(s)}}
        else
         {var $js$7=Stream["Failure"];throw $js$7}};
    var
     maybe_end_comment=
      function(strm__)
       {var $js$2=Stream["peek"];
        var match=$js$2(strm__);
        var $js$3=match;
        if($js$3)
         {var c=match[1];
          var $js$4=c!=41;
          if($js$4)
           {var $js$5=c!=42;
            if($js$5)
             {var $js$6=Stream["junk"];$js$6(strm__);return comment(strm__)}
            else
             {var $js$7=Stream["junk"];
              $js$7(strm__);
              return maybe_end_comment(strm__)}}
          else
           {var $js$8=Stream["junk"];$js$8(strm__);return 0}}
        else
         {var $js$9=Stream["Failure"];throw $js$9}};
    return function(input)
     {var $js$2=Stream["from"];
      return $js$2(function(count){return next_token(input)})}};
module["exports"]={"make_lexer":make_lexer};
