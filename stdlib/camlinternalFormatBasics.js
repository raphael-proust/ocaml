var
 erase_rel=
  function(param)
   {var $js=param;
    if(typeof $js=="number")
     {if($js==0){return 0}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var rest=param[1];var $js$2=erase_rel(rest);return [0,$js$2]}
      else
       if($js$1==1)
        {var rest$1=param[1];var $js$3=erase_rel(rest$1);return [1,$js$3]}
       else
        if($js$1==2)
         {var rest$2=param[1];var $js$4=erase_rel(rest$2);return [2,$js$4]}
        else
         if($js$1==3)
          {var rest$3=param[1];var $js$5=erase_rel(rest$3);return [3,$js$5]}
         else
          if($js$1==4)
           {var rest$4=param[1];var $js$6=erase_rel(rest$4);return [4,$js$6]}
          else
           if($js$1==5)
            {var rest$5=param[1];var $js$7=erase_rel(rest$5);return [5,$js$7]}
           else
            if($js$1==6)
             {var rest$6=param[1];
              var $js$8=erase_rel(rest$6);
              return [6,$js$8]}
            else
             if($js$1==7)
              {var rest$7=param[1];
               var $js$9=erase_rel(rest$7);
               return [7,$js$9]}
             else
              if($js$1==8)
               {var rest$8=param[2];
                var ty=param[1];
                var $js$10=erase_rel(rest$8);
                return [8,ty,$js$10]}
              else
               if($js$1==9)
                {var rest$9=param[3];
                 var ty1=param[1];
                 var $js$11=erase_rel(rest$9);
                 return [9,ty1,ty1,$js$11]}
               else
                if($js$1==10)
                 {var rest$10=param[1];
                  var $js$12=erase_rel(rest$10);
                  return [10,$js$12]}
                else
                 if($js$1==11)
                  {var rest$11=param[1];
                   var $js$13=erase_rel(rest$11);
                   return [11,$js$13]}
                 else
                  if($js$1==12)
                   {var rest$12=param[1];
                    var $js$14=erase_rel(rest$12);
                    return [12,$js$14]}
                  else
                   if($js$1==13)
                    {var rest$13=param[1];
                     var $js$15=erase_rel(rest$13);
                     return [13,$js$15]}
                   else
                    if($js$1==14)
                     {var rest$14=param[1];
                      var $js$16=erase_rel(rest$14);
                      return [14,$js$16]}}};
var
 concat_fmtty=
  function(fmtty1,fmtty2)
   {var $js=fmtty1;
    if(typeof $js=="number")
     {if($js==0){return fmtty2}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var rest=fmtty1[1];
        var $js$2=concat_fmtty(rest,fmtty2);
        return [0,$js$2]}
      else
       if($js$1==1)
        {var rest$1=fmtty1[1];
         var $js$3=concat_fmtty(rest$1,fmtty2);
         return [1,$js$3]}
       else
        if($js$1==2)
         {var rest$2=fmtty1[1];
          var $js$4=concat_fmtty(rest$2,fmtty2);
          return [2,$js$4]}
        else
         if($js$1==3)
          {var rest$3=fmtty1[1];
           var $js$5=concat_fmtty(rest$3,fmtty2);
           return [3,$js$5]}
         else
          if($js$1==4)
           {var rest$4=fmtty1[1];
            var $js$6=concat_fmtty(rest$4,fmtty2);
            return [4,$js$6]}
          else
           if($js$1==5)
            {var rest$5=fmtty1[1];
             var $js$7=concat_fmtty(rest$5,fmtty2);
             return [5,$js$7]}
           else
            if($js$1==6)
             {var rest$6=fmtty1[1];
              var $js$8=concat_fmtty(rest$6,fmtty2);
              return [6,$js$8]}
            else
             if($js$1==7)
              {var rest$7=fmtty1[1];
               var $js$9=concat_fmtty(rest$7,fmtty2);
               return [7,$js$9]}
             else
              if($js$1==8)
               {var rest$8=fmtty1[2];
                var ty=fmtty1[1];
                var $js$10=concat_fmtty(rest$8,fmtty2);
                return [8,ty,$js$10]}
              else
               if($js$1==9)
                {var rest$9=fmtty1[3];
                 var ty2=fmtty1[2];
                 var ty1=fmtty1[1];
                 var $js$11=concat_fmtty(rest$9,fmtty2);
                 return [9,ty1,ty2,$js$11]}
               else
                if($js$1==10)
                 {var rest$10=fmtty1[1];
                  var $js$12=concat_fmtty(rest$10,fmtty2);
                  return [10,$js$12]}
                else
                 if($js$1==11)
                  {var rest$11=fmtty1[1];
                   var $js$13=concat_fmtty(rest$11,fmtty2);
                   return [11,$js$13]}
                 else
                  if($js$1==12)
                   {var rest$12=fmtty1[1];
                    var $js$14=concat_fmtty(rest$12,fmtty2);
                    return [12,$js$14]}
                  else
                   if($js$1==13)
                    {var rest$13=fmtty1[1];
                     var $js$15=concat_fmtty(rest$13,fmtty2);
                     return [13,$js$15]}
                   else
                    if($js$1==14)
                     {var rest$14=fmtty1[1];
                      var $js$16=concat_fmtty(rest$14,fmtty2);
                      return [14,$js$16]}}};
var
 concat_fmt=
  function(fmt1,fmt2)
   {var $js=fmt1;
    if(typeof $js=="number")
     {if($js==0){return fmt2}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var rest=fmt1[1];var $js$2=concat_fmt(rest,fmt2);return [0,$js$2]}
      else
       if($js$1==1)
        {var rest$1=fmt1[1];
         var $js$3=concat_fmt(rest$1,fmt2);
         return [1,$js$3]}
       else
        if($js$1==2)
         {var rest$2=fmt1[2];
          var pad=fmt1[1];
          var $js$4=concat_fmt(rest$2,fmt2);
          return [2,pad,$js$4]}
        else
         if($js$1==3)
          {var rest$3=fmt1[2];
           var pad$1=fmt1[1];
           var $js$5=concat_fmt(rest$3,fmt2);
           return [3,pad$1,$js$5]}
         else
          if($js$1==4)
           {var rest$4=fmt1[4];
            var prec=fmt1[3];
            var pad$2=fmt1[2];
            var iconv=fmt1[1];
            var $js$6=concat_fmt(rest$4,fmt2);
            return [4,iconv,pad$2,prec,$js$6]}
          else
           if($js$1==5)
            {var rest$5=fmt1[4];
             var prec$1=fmt1[3];
             var pad$3=fmt1[2];
             var iconv$1=fmt1[1];
             var $js$7=concat_fmt(rest$5,fmt2);
             return [5,iconv$1,pad$3,prec$1,$js$7]}
           else
            if($js$1==6)
             {var rest$6=fmt1[4];
              var prec$2=fmt1[3];
              var pad$4=fmt1[2];
              var iconv$2=fmt1[1];
              var $js$8=concat_fmt(rest$6,fmt2);
              return [6,iconv$2,pad$4,prec$2,$js$8]}
            else
             if($js$1==7)
              {var rest$7=fmt1[4];
               var prec$3=fmt1[3];
               var pad$5=fmt1[2];
               var iconv$3=fmt1[1];
               var $js$9=concat_fmt(rest$7,fmt2);
               return [7,iconv$3,pad$5,prec$3,$js$9]}
             else
              if($js$1==8)
               {var rest$8=fmt1[4];
                var prec$4=fmt1[3];
                var pad$6=fmt1[2];
                var fconv=fmt1[1];
                var $js$10=concat_fmt(rest$8,fmt2);
                return [8,fconv,pad$6,prec$4,$js$10]}
              else
               if($js$1==9)
                {var rest$9=fmt1[1];
                 var $js$11=concat_fmt(rest$9,fmt2);
                 return [9,$js$11]}
               else
                if($js$1==10)
                 {var rest$10=fmt1[1];
                  var $js$12=concat_fmt(rest$10,fmt2);
                  return [10,$js$12]}
                else
                 if($js$1==11)
                  {var rest$11=fmt1[2];
                   var str=fmt1[1];
                   var $js$13=concat_fmt(rest$11,fmt2);
                   return [11,str,$js$13]}
                 else
                  if($js$1==12)
                   {var rest$12=fmt1[2];
                    var chr=fmt1[1];
                    var $js$14=concat_fmt(rest$12,fmt2);
                    return [12,chr,$js$14]}
                  else
                   if($js$1==13)
                    {var rest$13=fmt1[3];
                     var fmtty=fmt1[2];
                     var pad$7=fmt1[1];
                     var $js$15=concat_fmt(rest$13,fmt2);
                     return [13,pad$7,fmtty,$js$15]}
                   else
                    if($js$1==14)
                     {var rest$14=fmt1[3];
                      var fmtty$1=fmt1[2];
                      var pad$8=fmt1[1];
                      var $js$16=concat_fmt(rest$14,fmt2);
                      return [14,pad$8,fmtty$1,$js$16]}
                    else
                     if($js$1==15)
                      {var rest$15=fmt1[1];
                       var $js$17=concat_fmt(rest$15,fmt2);
                       return [15,$js$17]}
                     else
                      if($js$1==16)
                       {var rest$16=fmt1[1];
                        var $js$18=concat_fmt(rest$16,fmt2);
                        return [16,$js$18]}
                      else
                       if($js$1==17)
                        {var rest$17=fmt1[2];
                         var fmting_lit=fmt1[1];
                         var $js$19=concat_fmt(rest$17,fmt2);
                         return [17,fmting_lit,$js$19]}
                       else
                        if($js$1==18)
                         {var rest$18=fmt1[2];
                          var fmting_gen=fmt1[1];
                          var $js$20=concat_fmt(rest$18,fmt2);
                          return [18,fmting_gen,$js$20]}
                        else
                         if($js$1==19)
                          {var rest$19=fmt1[1];
                           var $js$21=concat_fmt(rest$19,fmt2);
                           return [19,$js$21]}
                         else
                          if($js$1==20)
                           {var rest$20=fmt1[3];
                            var char_set=fmt1[2];
                            var width_opt=fmt1[1];
                            var $js$22=concat_fmt(rest$20,fmt2);
                            return [20,width_opt,char_set,$js$22]}
                          else
                           if($js$1==21)
                            {var rest$21=fmt1[2];
                             var counter=fmt1[1];
                             var $js$23=concat_fmt(rest$21,fmt2);
                             return [21,counter,$js$23]}
                           else
                            if($js$1==22)
                             {var rest$22=fmt1[1];
                              var $js$24=concat_fmt(rest$22,fmt2);
                              return [22,$js$24]}
                            else
                             if($js$1==23)
                              {var rest$23=fmt1[2];
                               var ign=fmt1[1];
                               var $js$25=concat_fmt(rest$23,fmt2);
                               return [23,ign,$js$25]}
                             else
                              if($js$1==24)
                               {var rest$24=fmt1[3];
                                var f=fmt1[2];
                                var arity=fmt1[1];
                                var $js$26=concat_fmt(rest$24,fmt2);
                                return [24,arity,f,$js$26]}}};
module["exports"]=
{"concat_fmtty":concat_fmtty,"erase_rel":erase_rel,"concat_fmt":concat_fmt};
