var Ctype=require("Ctype");
var Frames=require("Frames");
var Printtyp=require("Printtyp");
var List=require("List");
var Pervasives=require("Pervasives");
var Btype=require("Btype");
var Env=require("Env");
var Predef=require("Predef");
var Format=require("Format");
var Printval=require("Printval");
var Misc=require("Misc");
var Path=require("Path");
var Subst=require("Subst");
var Ident=require("Ident");
var Symtable=require("Symtable");
var Debugcom=require("Debugcom");
var Error="unknown primitive:caml_set_oo_id";
var $js=Btype["newgenty"];
var $js$1=Ident["create"];
var $js$2=$js$1("<abstr>");
var $js$3=[0,$js$2];
var $js$4=[3,$js$3,0,[0,0]];
var abstract_type=$js($js$4);
var
 path=
  function(event,param)
   {var $js$5=param;
    if($js$5==0)
     {var id=param[1];
      var $js$6=Ident["global"];
      var $js$7=$js$6(id);
      if($js$7)
       {try
         {var $js$8=Debugcom["Remote_value"][10];
          var $js$9=Symtable["get_global_position"];
          var $js$10=$js$9(id);
          return $js$8($js$10)}
        catch(exn)
         {var $js$11=exn[1]=Symtable["Error"];
          if($js$11)
           {return "unknown primitive:raise"}
          else
           {return "unknown primitive:reraise"}}}
      else
       {var $js$12=event;
        if($js$12)
         {var ev=event[1];
          try
           {var $js$13=Ident["find_same"];
            var pos=$js$13(id,ev[8][1]);
            var $js$14=Debugcom["Remote_value"][8];
            return $js$14(ev[9]-pos)}
          catch(exn$1)
           {var $js$15=exn$1=Not_found;
            if($js$15)
             {try
               {var $js$16=Ident["find_same"];
                var pos$1=$js$16(id,ev[8][2]);
                var $js$17=Debugcom["Remote_value"][9];
                return $js$17(pos$1)}
              catch(exn$2)
               {var $js$18=exn$2=Not_found;
                if($js$18)
                 {return "unknown primitive:raise"}
                else
                 {return "unknown primitive:reraise"}}}
            else
             {return "unknown primitive:reraise"}}}
        else
         {return "unknown primitive:raise"}}}
    else
     if($js$5==1)
      {var root=param[1];
       var v=path(event,root);
       var $js$19=Debugcom["Remote_value"][2];
       var $js$20=$js$19(v);
       var $js$21=!$js$20;
       if($js$21){"unknown primitive:raise"}else{}
       var $js$22=Debugcom["Remote_value"][5];
       return $js$22(v,param[3])}
     else
      if($js$5==2)
       {var $js$23=Misc["fatal_error"];return $js$23("Eval.path: Papply")}};
var
 expression=
  function(event,env,param)
   {var $js$5=param;
    if(typeof $js$5=="number")
     {if($js$5==0)
       {var $js$6=event;
        if($js$6)
         {var match=event[1];
          var match$1=match[4];
          var $js$7="unknown primitive:isint";
          if($js$7)
           {var exit=8}
          else
           {var $js$8=Frames["current_frame"][1]=0;
            if($js$8)
             {var $js$9=Debugcom["Remote_value"][11];
              var $js$10=$js$9(0);
              var $js$11=Subst["type_expr"];
              var $js$12=$js$11(match[7],match$1[1]);
              return [0,$js$10,$js$12]}
            else
             {var exit=8}}}
        else
         {var exit=8}
        switch(exit){case 8:return "unknown primitive:raise"}}}
    else
     {var $js$13=$js$5[0];
      if($js$13==0)
       {var lid=param[1];
        try
         {var $js$14=Env["lookup_value"];
          var match$2=$js$14(lid,env);
          var valdesc=match$2[2];
          var p=match$2[1];
          var match$3=valdesc[2];
          var $js$15=match$3;
          if(typeof $js$15=="number")
           {"unknown block:match/1232"}
          else
           {var $js$16=$js$15[0];
            if($js$16==1)
             {var $js$17=Env["lookup_value"];
              var $js$18=Pervasives["^"];
              var $js$19=$js$18("self-",match$3[2]);
              var $js$20=[0,$js$19];
              var match$4=$js$17($js$20,env);
              var v=path(event,match$4[1]);
              var i=path(event,p);
              var $js$21=Debugcom["Remote_value"][5];
              var $js$22=Debugcom["Remote_value"][1];
              var $js$23=$js$22(i);
              var $js$24=$js$21(v,$js$23)}
            else
             {var exit$1=6}}
          switch(exit$1){case 6:var $js$24=path(event,p)}
          var $js$25=Ctype["correct_levels"];
          var $js$26=$js$25(valdesc[1]);
          return [0,$js$24,$js$26]}
        catch(exn)
         {var $js$27=exn=Not_found;
          if($js$27)
           {return "unknown primitive:raise"}
          else
           {return "unknown primitive:reraise"}}}
      else
       if($js$13==1)
        {var n=param[1];
         try
          {var $js$28=Printval["find_named_value"];return $js$28(n)}
         catch(exn$1)
          {var $js$29=exn$1=Not_found;
           if($js$29)
            {return "unknown primitive:raise"}
           else
            {return "unknown primitive:reraise"}}}
       else
        if($js$13==2)
         {var n$1=param[2];
          var match$5=expression(event,env,param[1]);
          var ty=match$5[2];
          var v$1=match$5[1];
          var $js$30=Ctype["repr"];
          var $js$31=Ctype["expand_head_opt"];
          var $js$32=$js$31(env,ty);
          var $js$33=$js$30($js$32);
          var match$6=$js$33[1];
          var $js$34=match$6;
          if(typeof $js$34=="number")
           {"unknown block:match/1248"}
          else
           {var $js$35=$js$34[0];
            if($js$35==2)
             {var ty_list=match$6[1];
              var $js$36=List["length"];
              var $js$37=$js$36(ty_list);
              var $js$38=n$1>$js$37;
              var $js$39=n$1<1||$js$38;
              if($js$39)
               {var $js$40=List["length"];
                var $js$41=$js$40(ty_list);
                var $js$42=[4,ty,$js$41,n$1];
                var $js$43=[0,Error,$js$42];
                throw $js$43}
              else
               {var $js$44=Debugcom["Remote_value"][5];
                var $js$45=$js$44(v$1,n$1-1);
                var $js$46=List["nth"];
                var $js$47=$js$46(ty_list,n$1-1);
                return [0,$js$45,$js$47]}}
            else
             if($js$35==3)
              {var match$7=match$6[2];
               var path$1=match$6[1];
               var $js$48=match$7;
               if($js$48)
                {var $js$49=match$7[2];
                 if($js$49)
                  {var exit$2=12}
                 else
                  {var ty_arg=match$7[1];
                   var $js$50=Path["same"];
                   var $js$51=$js$50(path$1,Predef["path_array"]);
                   if($js$51)
                    {var $js$52=Debugcom["Remote_value"][4];
                     var size=$js$52(v$1);
                     var $js$53=n$1>=size;
                     if($js$53)
                      {return "unknown primitive:raise"}
                     else
                      {var $js$54=Debugcom["Remote_value"][5];
                       var $js$55=$js$54(v$1,n$1);
                       return [0,$js$55,ty_arg]}}
                   else
                    {var $js$56=Path["same"];
                     var $js$57=$js$56(path$1,Predef["path_list"]);
                     if($js$57)
                      {var
                        nth=
                         function(pos,v$2)
                          {var $js$58=Debugcom["Remote_value"][2];
                           var $js$59=$js$58(v$2);
                           var $js$60=!$js$59;
                           if($js$60)
                            {return "unknown primitive:raise"}
                           else
                            {var $js$61=pos=n$1;
                             if($js$61)
                              {var $js$62=Debugcom["Remote_value"][5];
                               var $js$63=$js$62(v$2,0);
                               return [0,$js$63,ty_arg]}
                             else
                              {var $js$64=Debugcom["Remote_value"][5];
                               var $js$65=$js$64(v$2,1);
                               return nth(pos+1,$js$65)}}};
                       return nth(0,v$1)}
                     else
                      {var exit$2=12}}}}
               else
                {var $js$58=Path["same"];
                 var $js$59=$js$58(path$1,Predef["path_string"]);
                 if($js$59)
                  {var $js$60=Debugcom["Remote_value"][1];
                   var s=$js$60(v$1);
                   var $js$61=n$1>=s["length"];
                   if($js$61)
                    {return "unknown primitive:raise"}
                   else
                    {var $js$62=Debugcom["Remote_value"][7];
                     var $js$63=$js$62(s[n$1]);
                     return [0,$js$63,Predef["type_char"]]}}
                 else
                  {var exit$2=12}}}
             else
              {var exit$2=12}}
          switch(exit$2){case 12:return "unknown primitive:raise"}}
        else
         if($js$13==3)
          {var match$8=expression(event,env,param[1]);
           var ty$1=match$8[2];
           var $js$64=Ctype["repr"];
           var $js$65=Ctype["expand_head_opt"];
           var $js$66=$js$65(env,ty$1);
           var $js$67=$js$64($js$66);
           var match$9=$js$67[1];
           var $js$68=match$9;
           if(typeof $js$68=="number")
            {"unknown block:match/1258"}
           else
            {var $js$69=$js$68[0];
             if($js$69==3)
              {var path$2=match$9[1];
               var $js$70=Env["find_type"];
               var tydesc=$js$70(path$2,env);
               var match$10=tydesc[3];
               var $js$71=match$10;
               if(typeof $js$71=="number")
                {"unknown block:match/1257"}
               else
                {var $js$72=$js$71[0];
                 if($js$72==0)
                  {var
                    match$11=
                     find_label(param[2],env,ty$1,path$2,tydesc,0,match$10[1]);
                   var $js$73=Debugcom["Remote_value"][5];
                   var $js$74=$js$73(match$8[1],match$11[1]);
                   return [0,$js$74,match$11[2]]}
                 else
                  {var exit$3=15}}
               switch(exit$3){case 15:return "unknown primitive:raise"}}
             else
              {var exit$4=17}}
           switch(exit$4){case 17:return "unknown primitive:raise"}}}};
var
 find_label=
  function(lbl,env,ty,path$1,tydesc,pos,param)
   {var $js$5=param;
    if($js$5)
     {var match=param[1];
      var $js$6=Ident["name"];
      var $js$7=$js$6(match[1]);
      var $js$8="unknown primitive:caml_string_equal";
      if($js$8)
       {var $js$9=Btype["newgenty"];
        var ty_res=$js$9([3,path$1,tydesc[1],[0,0]]);
        try
         {var $js$10=Ctype["apply"];
          var $js$11=$js$10(env,[0,ty_res,0],match[3],[0,ty,0])}
        catch(exn)
         {var $js$12=exn=Ctype["Cannot_apply"];
          if($js$12)
           {var $js$11=abstract_type}
          else
           {var $js$11="unknown primitive:reraise"}}
        return [0,pos,$js$11]}
      else
       {return find_label(lbl,env,ty,path$1,tydesc,pos+1,param[2])}}
    else
     {return "unknown primitive:raise"}};
var
 report_error=
  function(ppf,param)
   {var $js$5=param;
    if(typeof $js$5=="number")
     {if($js$5==0)
       {var $js$6=Format["fprintf"];
        return $js$6
                (ppf,
                 [0,
                  [18,
                   [1,[0,0,""]],
                   [11,
                    "No result available at current program event",
                    [17,0,[17,4,0]]]],
                  "@[No result available at current program event@]@."])}}
    else
     {var $js$7=$js$5[0];
      if($js$7==0)
       {var $js$8=Format["fprintf"];
        var $js$9=Ident["name"];
        var $js$10=$js$9(param[1]);
        return $js$8
                (ppf,
                 [0,
                  [18,
                   [1,[0,0,""]],
                   [11,"Unbound identifier ",[2,0,[17,0,[17,4,0]]]]],
                  "@[Unbound identifier %s@]@."],
                 $js$10)}
      else
       if($js$7==1)
        {var $js$11=Format["fprintf"];
         return $js$11
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The module path ",
                     [15,
                      [11,
                       " is not yet initialized.",
                       [17,
                        [0,"@ ",1,0],
                        [11,
                         "Please run program forward",
                         [17,
                          [0,"@ ",1,0],
                          [11,
                           "until its initialization code is executed.",
                           [17,0,[17,4,0]]]]]]]]]],
                   "@[The module path %a is not yet initialized.@ Please run program forward@ until its initialization code is executed.@]@."],
                  Printtyp["path"],
                  param[1])}
       else
        if($js$7==2)
         {var $js$12=Format["fprintf"];
          return $js$12
                  (ppf,
                   [0,
                    [18,
                     [1,[0,0,""]],
                     [11,"Unbound identifier ",[15,[17,0,[17,4,0]]]]],
                    "@[Unbound identifier %a@]@."],
                   Printtyp["longident"],
                   param[1])}
        else
         if($js$7==3)
          {var $js$13=Format["fprintf"];
           return $js$13
                   (ppf,
                    [0,
                     [18,
                      [1,[0,0,""]],
                      [11,"Unknown value name $",[4,3,0,0,[17,0,[17,4,0]]]]],
                     "@[Unknown value name $%i@]@."],
                    param[1])}
         else
          if($js$7==4)
           {var ty=param[1];
            var $js$14=Printtyp["reset_and_mark_loops"];
            $js$14(ty);
            var $js$15=Format["fprintf"];
            return $js$15
                    (ppf,
                     [0,
                      [18,
                       [1,[0,0,""]],
                       [11,
                        "Cannot extract field number ",
                        [4,
                         3,
                         0,
                         0,
                         [11,
                          " from a ",
                          [4,
                           3,
                           0,
                           0,
                           [11,"-tuple of type",[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]]]]],
                      "@[Cannot extract field number %i from a %i-tuple of type@ %a@]@."],
                     param[3],
                     param[2],
                     Printtyp["type_expr"],
                     ty)}
          else
           if($js$7==5)
            {var $js$16=Format["fprintf"];
             return $js$16
                     (ppf,
                      [0,
                       [18,
                        [1,[0,0,""]],
                        [11,
                         "Cannot extract element number ",
                         [4,
                          3,
                          0,
                          0,
                          [11," from an array of length ",[4,3,0,0,[17,0,[17,4,0]]]]]]],
                       "@[Cannot extract element number %i from an array of length %i@]@."],
                      param[2],
                      param[1])}
           else
            if($js$7==6)
             {var $js$17=Format["fprintf"];
              return $js$17
                      (ppf,
                       [0,
                        [18,
                         [1,[0,0,""]],
                         [11,
                          "Cannot extract element number ",
                          [4,
                           3,
                           0,
                           0,
                           [11," from a list of length ",[4,3,0,0,[17,0,[17,4,0]]]]]]],
                        "@[Cannot extract element number %i from a list of length %i@]@."],
                       param[2],
                       param[1])}
            else
             if($js$7==7)
              {var $js$18=Format["fprintf"];
               return $js$18
                       (ppf,
                        [0,
                         [18,
                          [1,[0,0,""]],
                          [11,
                           "Cannot extract character number ",
                           [4,
                            3,
                            0,
                            0,
                            [17,
                             [0,"@ ",1,0],
                             [11,
                              "from the following string of length ",
                              [4,3,0,0,[12,58,[17,[0,"@ ",1,0],[3,0,[17,0,[17,4,0]]]]]]]]]]],
                         "@[Cannot extract character number %i@ from the following string of length %i:@ %S@]@."],
                        param[3],
                        param[2],
                        param[1])}
             else
              if($js$7==8)
               {var $js$19=Format["fprintf"];
                return $js$19
                        (ppf,
                         [0,
                          [18,
                           [1,[0,0,""]],
                           [11,
                            "Cannot extract item number ",
                            [4,
                             3,
                             0,
                             0,
                             [11,
                              " from a value of type",
                              [17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]]],
                          "@[Cannot extract item number %i from a value of type@ %a@]@."],
                         param[2],
                         Printtyp["type_expr"],
                         param[1])}
              else
               if($js$7==9)
                {var $js$20=Format["fprintf"];
                 return $js$20
                         (ppf,
                          [0,
                           [18,
                            [1,[0,0,""]],
                            [11,
                             "The record type",
                             [17,
                              [0,"@ ",1,0],
                              [15,
                               [17,
                                [0,"@ ",1,0],
                                [11,"has no label named ",[2,0,[17,0,[17,4,0]]]]]]]]],
                           "@[The record type@ %a@ has no label named %s@]@."],
                          Printtyp["type_expr"],
                          param[1],
                          param[2])}
               else
                if($js$7==10)
                 {var $js$21=Format["fprintf"];
                  return $js$21
                          (ppf,
                           [0,
                            [18,
                             [1,[0,0,""]],
                             [11,
                              "The type",
                              [17,
                               [0,"@ ",1,0],
                               [15,
                                [17,
                                 [0,"@ ",1,0],
                                 [11,"is not a record type",[17,0,[17,4,0]]]]]]]],
                            "@[The type@ %a@ is not a record type@]@."],
                           Printtyp["type_expr"],
                           param[1])}}};
module["exports"]=
{"expression":expression,"Error":Error,"report_error":report_error};
