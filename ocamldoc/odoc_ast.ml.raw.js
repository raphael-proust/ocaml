var String=require("String");
var Odoc_name=require("Odoc_name");
var Odoc_global=require("Odoc_global");
var Odoc_value=require("Odoc_value");
var Pervasives=require("Pervasives");
var List=require("List");
var Predef=require("Predef");
var Printf=require("Printf");
var Odoc_sig=require("Odoc_sig");
var Types=require("Types");
var Misc=require("Misc");
var Path=require("Path");
var Odoc_env=require("Odoc_env");
var Filename=require("Filename");
var Location=require("Location");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var Odoc_parameter=require("Odoc_parameter");
var Odoc_messages=require("Odoc_messages");
var blank="[ \n\r\t\f']";
var simple_blank="[ \r\t\f]";
var
 iter_val_pattern=
  function(param)
   {var $js=param;
    if(typeof $js=="number")
     {if($js==0){var exit=379}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var $js$2=Odoc_name["from_ident"];
        var $js$3=$js$2(param[1]);
        return [0,$js$3]}
      else
       if($js$1==3){var exit=379}else{return 0}}
    switch(exit){case 379:return 0}};
var
 add_to_hashes=
  function(table,table_values,tt)
   {var $js=tt;
    if($js==1)
     {var $js$1=List["iter"];
      return $js$1
              (function(param)
                {var pat=param[1];
                 var match=iter_val_pattern(pat[1]);
                 var $js$2=match;
                 if($js$2)
                  {var $js$3=Hashtbl["add"];
                   return $js$3(table_values,match[1],[0,pat,param[2]])}
                 else
                  {return 0}},
               tt[2])}
    else
     if($js==2)
      {var $js$2=Hashtbl["add"];
       var $js$3=Odoc_name["from_ident"];
       var $js$4=$js$3(tt[1][1]);
       var $js$5=[7,$js$4];
       return $js$2(table,$js$5,tt)}
     else
      if($js==3)
       {var $js$6=List["iter"];
        return $js$6
                (function(td)
                  {var $js$7=Hashtbl["add"];
                   var $js$8=Odoc_name["from_ident"];
                   var $js$9=$js$8(td[1]);
                   var $js$10=[2,$js$9];
                   return $js$7(table,$js$10,[3,[0,td,0]])},
                 tt[1])}
      else
       if($js==4)
        {var match=tt[1][4];
         var $js$7=match;
         if($js$7)
          {var $js$8=Hashtbl["add"];
           var $js$9=Odoc_name["from_ident"];
           var $js$10=$js$9(match[1][1]);
           var $js$11=[5,$js$10];
           return $js$8(table,$js$11,tt)}
         else
          {return "unknown primitive:raise"}}
       else
        if($js==5)
         {var $js$12=Hashtbl["add"];
          var $js$13=Odoc_name["from_ident"];
          var $js$14=$js$13(tt[1][1]);
          var $js$15=[6,$js$14];
          return $js$12(table,$js$15,tt)}
        else
         if($js==6)
          {var $js$16=Hashtbl["add"];
           var $js$17=Odoc_name["from_ident"];
           var $js$18=$js$17(tt[1][1]);
           var $js$19=[0,$js$18];
           return $js$16(table,$js$19,tt)}
         else
          if($js==7)
           {var $js$20=List["iter"];
            return $js$20
                    (function(mb)
                      {var $js$21=Hashtbl["add"];
                       var $js$22=Odoc_name["from_ident"];
                       var $js$23=$js$22(mb[1]);
                       var $js$24=[0,$js$23];
                       return $js$21(table,$js$24,[6,mb])},
                     tt[1])}
          else
           if($js==8)
            {var $js$21=Hashtbl["add"];
             var $js$22=Odoc_name["from_ident"];
             var $js$23=$js$22(tt[1][1]);
             var $js$24=[1,$js$23];
             return $js$21(table,$js$24,tt)}
           else
            if($js==10)
             {var $js$25=List["iter"];
              return $js$25
                      (function(param)
                        {var ci=param[1];
                         var $js$26=Hashtbl["add"];
                         var $js$27=Odoc_name["from_ident"];
                         var $js$28=$js$27(ci[4]);
                         var $js$29=[3,$js$28];
                         return $js$26
                                 (table,$js$29,[10,[0,[0,ci,param[2],param[3]],0]])},
                       tt[1])}
            else
             if($js==11)
              {var $js$26=List["iter"];
               return $js$26
                       (function(ci)
                         {var $js$27=Hashtbl["add"];
                          var $js$28=Odoc_name["from_ident"];
                          var $js$29=$js$28(ci[1]);
                          var $js$30=[4,$js$29];
                          return $js$27(table,$js$30,[11,[0,ci,0]])},
                        tt[1])}
             else
              {return 0}};
var
 tables=
  function(typedtree)
   {var $js=Hashtbl["create"];
    var t=$js(0,13);
    var $js$1=Hashtbl["create"];
    var t_values=$js$1(0,13);
    var $js$2=List["iter"];
    $js$2(function(str){return add_to_hashes(t,t_values,str[1])},typedtree);
    return [0,t,t_values]};
var
 search_module=
  function(table,name)
   {var $js=Hashtbl["find"];
    var match=$js(table,[0,name]);
    var $js$1=match;
    if($js$1==6){return match[1][3]}else{return "unknown primitive:raise"}};
var
 search_module_type=
  function(table,name)
   {var $js=Hashtbl["find"];
    var match=$js(table,[1,name]);
    var $js$1=match;
    if($js$1==8){return match[1]}else{return "unknown primitive:raise"}};
var
 search_extension=
  function(table,name)
   {var $js=Hashtbl["find"];
    var match=$js(table,[5,name]);
    var $js$1=match;
    if($js$1==4){return match[1]}else{return "unknown primitive:raise"}};
var
 search_exception=
  function(table,name)
   {var $js=Hashtbl["find"];
    var match=$js(table,[6,name]);
    var $js$1=match;
    if($js$1==5){return match[1]}else{return "unknown primitive:raise"}};
var
 search_type_declaration=
  function(table,name)
   {var $js=Hashtbl["find"];
    var match=$js(table,[2,name]);
    var $js$1=match;
    if($js$1==3)
     {var match$1=match[1];
      var $js$2=match$1;
      if($js$2)
       {var $js$3=match$1[2];if($js$3){var exit=363}else{return match$1[1]}}
      else
       {var exit=363}}
    else
     {var exit=363}
    switch(exit){case 363:return "unknown primitive:raise"}};
var
 search_class_exp=
  function(table,name)
   {var $js=Hashtbl["find"];
    var match=$js(table,[3,name]);
    var $js$1=match;
    if($js$1==10)
     {var match$1=match[1];
      var $js$2=match$1;
      if($js$2)
       {var $js$3=match$1[2];
        if($js$3)
         {var exit=361}
        else
         {var ce=match$1[1][1][8];
          try
           {var type_decl=search_type_declaration(table,name);
            return [0,ce,type_decl[4][1]]}
          catch(exn)
           {var $js$4=exn=Not_found;
            if($js$4){return [0,ce,0]}else{return "unknown primitive:reraise"}}}}
      else
       {var exit=361}}
    else
     {var exit=361}
    switch(exit){case 361:return "unknown primitive:raise"}};
var
 search_class_type_declaration=
  function(table,name)
   {var $js=Hashtbl["find"];
    var match=$js(table,[4,name]);
    var $js$1=match;
    if($js$1==11)
     {var match$1=match[1];
      var $js$2=match$1;
      if($js$2)
       {var $js$3=match$1[2];
        if($js$3){var exit=356}else{return match$1[1][3]}}
      else
       {var exit=356}}
    else
     {var exit=356}
    switch(exit){case 356:return "unknown primitive:raise"}};
var
 search_value=
  function(table,name){var $js=Hashtbl["find"];return $js(table,name)};
var
 search_primitive=
  function(table,name)
   {var $js=Hashtbl["find"];
    var match=$js(table,[7,name]);
    var $js$1=match;
    if($js$1==2){return match[1][4][1]}else{return "unknown primitive:raise"}};
var
 get_nth_inherit_class_expr=
  function(cls,n)
   {var
     iter=
      function(cpt,param)
       {var $js=param;
        if($js)
         {var match=param[1][1];
          var $js$1=match;
          if($js$1==0)
           {var $js$2=n=cpt;
            if($js$2){return match[2]}else{return iter(cpt+1,param[2])}}
          else
           {return iter(cpt,param[2])}}
        else
         {return "unknown primitive:raise"}};
    return iter(0,cls[2])};
var
 search_attribute_type=
  function(cls,name)
   {var
     iter=
      function(param)
       {var $js=param;
        if($js)
         {var match=param[1][1];
          var $js$1=match;
          if($js$1==1)
           {var match$1=match[4];
            var ident=match[3];
            var $js$2=match$1;
            if($js$2==0)
             {var $js$3=Odoc_name["from_ident"];
              var $js$4=$js$3(ident);
              var $js$5="unknown primitive:caml_string_equal";
              if($js$5){return match$1[1][2]}else{var exit=349}}
            else
             if($js$2==1)
              {var $js$6=Odoc_name["from_ident"];
               var $js$7=$js$6(ident);
               var $js$8="unknown primitive:caml_string_equal";
               if($js$8){return match$1[2][4]}else{var exit=349}}}
          else
           {var exit=349}
          switch(exit){case 349:return iter(param[2])}}
        else
         {return "unknown primitive:raise"}};
    return iter(cls[2])};
var
 iter=
  function(param)
   {var $js=param;
    if($js==0)
     {var exit=347}
    else
     if($js==1){return param[1]}else if($js==2){var exit=347}
    switch(exit){case 347:return iter(param[3])}};
var class_sig_of_cltype_decl=function(ct_decl){return iter(ct_decl[2])};
var
 search_method_expression=
  function(cls,name)
   {var
     iter$1=
      function(param)
       {var $js=param;
        if($js)
         {var match=param[1][1];
          var $js$1=match;
          if($js$1==2)
           {var match$1=match[3];
            var $js$2=match$1;
            if($js$2==0)
             {var exit=345}
            else
             if($js$2==1)
              {var $js$3="unknown primitive:caml_string_equal";
               if($js$3){return match$1[2]}else{var exit=345}}}
          else
           {var exit=345}
          switch(exit){case 345:return iter$1(param[2])}}
        else
         {return "unknown primitive:raise"}};
    return iter$1(cls[2])};
var
 Typedtree_search=
  [0,
   iter_val_pattern,
   add_to_hashes,
   tables,
   search_module,
   search_module_type,
   search_extension,
   search_exception,
   search_type_declaration,
   search_class_exp,
   search_class_type_declaration,
   search_value,
   search_primitive,
   get_nth_inherit_class_expr,
   search_attribute_type,
   class_sig_of_cltype_decl,
   search_method_expression];
var
 Analyser=
  function(My_ir)
   {var $js=Odoc_sig["Analyser"];
    var Sig=$js(My_ir);
    var file=Sig[1];
    var file_name=Sig[2];
    var get_string_of_file=Sig[3];
    var prepare_file=Sig[4];
    var get_comments_in_class=Sig[5];
    var get_comments_in_module=Sig[6];
    var
     tt_param_info_from_pattern=
      function(env,f_desc,pat)
       {var
         iter_pattern=
          function(pat$1)
           {var match=pat$1[1];
            var $js$1=match;
            if(typeof $js$1=="number")
             {"unknown block:match/2523"}
            else
             {var $js$2=$js$1[0];
              if($js$2==0)
               {var $js$3=Odoc_name["from_ident"];
                var name=$js$3(match[1]);
                var $js$4=Odoc_env["subst_type"];
                var $js$5=$js$4(env,pat$1[4]);
                var $js$6=f_desc(name);
                var $js$7=[0,name,$js$5,$js$6];
                return [0,$js$7]}
              else
               if($js$2==1)
                {return iter_pattern(match[1])}
               else
                if($js$2==3)
                 {var $js$8=List["map"];
                  var $js$9=$js$8(iter_pattern,match[1]);
                  var $js$10=Odoc_env["subst_type"];
                  var $js$11=$js$10(env,pat$1[4]);
                  return [1,$js$9,$js$11]}
                else
                 if($js$2==4)
                  {var match$1=match[2][2][1];
                   var $js$12=match$1;
                   if(typeof $js$12=="number")
                    {"unknown block:match/2519"}
                   else
                    {var $js$13=$js$12[0];
                     if($js$13==3)
                      {var $js$14=Path["same"];
                       var $js$15=$js$14(match$1[1],Predef["path_unit"])}
                     else
                      {var exit=336}}
                   switch(exit){case 336:var $js$15=0}
                   if($js$15)
                    {var $js$16=Odoc_env["subst_type"];
                     var $js$17=$js$16(env,pat$1[4]);
                     var $js$18=[0,"()",$js$17,0];
                     return [0,$js$18]}
                   else
                    {var exit$1=337}}
                 else
                  {var exit$1=337}}
            switch(exit$1)
             {case 337:
               var $js$19=Odoc_env["subst_type"];
               var $js$20=$js$19(env,pat$1[4]);
               var $js$21=[0,"()",$js$20,0];
               return [0,$js$21]
              }};
        return iter_pattern(pat)};
    var
     tt_analyse_function_parameters=
      function(env,current_comment_opt,pat_exp_list)
       {var $js$1=pat_exp_list;
        if($js$1)
         {var match=pat_exp_list[1];
          var func_body=match[3];
          var pattern_param=match[1];
          var $js$2=pat_exp_list[2];
          if($js$2)
           {var $js$3=Odoc_env["subst_type"];
            var $js$4=$js$3(env,pattern_param[4]);
            var parameter=[1,0,$js$4];
            return [0,parameter,0]}
          else
           {var $js$5=Odoc_parameter["desc_from_info_opt"];
            var $js$6=$js$5(current_comment_opt);
            var
             parameter$1=
              tt_param_info_from_pattern(env,$js$6,pattern_param);
            var $js$7=parameter$1;
            if($js$7==0)
             {var $js$8=parameter$1[1][1];
              if($js$8=="*opt*")
               {var match$1=func_body[1];
                var $js$9=match$1;
                if($js$9==2)
                 {var match$2=match$1[2];
                  var $js$10=match$2;
                  if($js$10)
                   {var match$3=match$2[1];
                    var match$4=match$3[1][1];
                    var $js$11=match$4;
                    if(typeof $js$11=="number")
                     {"unknown block:match/2497"}
                    else
                     {var $js$12=$js$11[0];
                      if($js$12==0)
                       {var $js$13=Odoc_name["from_ident"];
                        var name=$js$13(match$4[1]);
                        var $js$14=Odoc_env["subst_type"];
                        var $js$15=$js$14(env,match$3[2][4]);
                        var $js$16=Odoc_parameter["desc_from_info_opt"];
                        var $js$17=$js$16(current_comment_opt,name);
                        var $js$18=[0,name,$js$15,$js$17];
                        var new_param=[0,$js$18];
                        var match$5=[0,new_param,match$1[3]]}
                      else
                       {var exit=331}}}
                  else
                   {var exit=331}}
                else
                 {var exit=331}
                switch(exit){case 331:var match$5=[0,parameter$1,func_body]}}
              else
               {var exit$1=332}}
            else
             if($js$7==1){var exit$1=332}
            switch(exit$1){case 332:var match$5=[0,parameter$1,func_body]}
            var p=match$5[1];
            var match$6=match$5[2][1];
            var $js$19=match$6;
            if($js$19==3)
             {var
               $js$20=
                tt_analyse_function_parameters
                 (env,current_comment_opt,match$6[2]);
              return [0,p,$js$20]}
            else
             {return [0,p,0]}}}
        else
         {return "unknown primitive:raise"}};
    var
     tt_analyse_value=
      function(env,current_module_name,comment_opt,loc,pat_exp,rec_flag)
       {var pat=pat_exp[1];
        var match=pat[1];
        var match$1=pat_exp[2][1];
        var $js$1=match;
        if(typeof $js$1=="number")
         {"unknown block:match/2478"}
        else
         {var $js$2=$js$1[0];
          if($js$2==0)
           {var ident=match[1];
            var $js$3=match$1;
            if($js$3==3)
             {var $js$4=Odoc_name["from_ident"];
              var name_pre=$js$4(ident);
              var $js$5=Odoc_name["parens_if_infix"];
              var name=$js$5(name_pre);
              var $js$6=Odoc_name["concat"];
              var complete_name=$js$6(current_module_name,name);
              var $js$7=Odoc_global["keep_code"][1];
              if($js$7)
               {var $js$8=get_string_of_file(loc[1][4],loc[2][4]);
                var code=[0,$js$8]}
              else
               {var code=0}
              var $js$9=Odoc_env["subst_type"];
              var $js$10=$js$9(env,pat[4]);
              var
               $js$11=
                tt_analyse_function_parameters(env,comment_opt,match$1[2]);
              var
               new_value=
                [0,
                 complete_name,
                 comment_opt,
                 $js$10,
                 rec_flag=1,
                 $js$11,
                 code,
                 [0,[0,loc],0]];
              return [0,new_value,0]}
            else
             {var $js$12=Odoc_name["from_ident"];
              var name_pre$1=$js$12(ident);
              var $js$13=Odoc_name["parens_if_infix"];
              var name$1=$js$13(name_pre$1);
              var $js$14=Odoc_name["concat"];
              var complete_name$1=$js$14(current_module_name,name$1);
              var $js$15=Odoc_global["keep_code"][1];
              if($js$15)
               {var $js$16=get_string_of_file(loc[1][4],loc[2][4]);
                var code$1=[0,$js$16]}
              else
               {var code$1=0}
              var $js$17=Odoc_env["subst_type"];
              var $js$18=$js$17(env,pat[4]);
              var
               new_value$1=
                [0,
                 complete_name$1,
                 comment_opt,
                 $js$18,
                 rec_flag=1,
                 0,
                 code$1,
                 [0,[0,loc],0]];
              return [0,new_value$1,0]}}
          else
           if($js$2==3){return 0}else{var exit=323}}
        switch(exit){case 323:return 0}};
    var
     tt_name_of_class_expr=
      function(clexp)
       {var match=clexp[1];
        var $js$1=match;
        if($js$1==0)
         {var $js$2=Odoc_name["from_path"];return $js$2(match[1])}
        else
         if($js$1==3)
          {var exit=312}
         else
          if($js$1==5){var exit=312}else{return Odoc_messages["object_end"]}
        switch(exit){case 312:return tt_name_of_class_expr(match[1])}};
    var
     tt_analyse_method_expression=
      function(env,current_method_name,comment_opt,*opt*,exp)
       {var $js$1=*opt*;
        if($js$1){var first=*opt*[1]}else{var first=1}
        var match=exp[1];
        var $js$2=match;
        if($js$2==3)
         {var pat_exp_list=match[2];
          var $js$3=pat_exp_list;
          if($js$3)
           {var $js$4=pat_exp_list;
            if($js$4)
             {var match$1=pat_exp_list[1];
              var body=match$1[3];
              var pattern_param=match$1[1];
              var $js$5=pat_exp_list[2];
              if($js$5)
               {var $js$6=Odoc_env["subst_type"];
                var $js$7=$js$6(env,pattern_param[4]);
                var $js$8=[0,"??",$js$7,0];
                var new_param=[0,$js$8];
                return [0,new_param,0]}
              else
               {var $js$9=!first;
                if($js$9)
                 {var $js$10=Odoc_parameter["desc_from_info_opt"];
                  var $js$11=$js$10(comment_opt);
                  var
                   parameter=
                    tt_param_info_from_pattern(env,$js$11,pattern_param);
                  var $js$12=parameter;
                  if($js$12==0)
                   {var $js$13=parameter[1][1];
                    if($js$13=="*opt*")
                     {var match$2=body[1];
                      var $js$14=match$2;
                      if($js$14==2)
                       {var match$3=match$2[2];
                        var $js$15=match$3;
                        if($js$15)
                         {var match$4=match$3[1];
                          var match$5=match$4[1][1];
                          var $js$16=match$5;
                          if(typeof $js$16=="number")
                           {"unknown block:match/2440"}
                          else
                           {var $js$17=$js$16[0];
                            if($js$17==0)
                             {var $js$18=Odoc_name["from_ident"];
                              var name=$js$18(match$5[1]);
                              var $js$19=Odoc_env["subst_type"];
                              var $js$20=$js$19(env,match$4[2][4]);
                              var $js$21=Odoc_parameter["desc_from_info_opt"];
                              var $js$22=$js$21(comment_opt,name);
                              var $js$23=[0,name,$js$20,$js$22];
                              var new_param$1=[0,$js$23];
                              var match$6=[0,new_param$1,match$2[3]]}
                            else
                             {var exit=303}}}
                        else
                         {var exit=303}}
                      else
                       {var exit=303}
                      switch(exit){case 303:var match$6=[0,parameter,body]}}
                    else
                     {var exit$1=304}}
                  else
                   if($js$12==1){var exit$1=304}
                  switch(exit$1){case 304:var match$6=[0,parameter,body]}
                  var
                   $js$24=
                    tt_analyse_method_expression
                     (env,current_method_name,comment_opt,[0,0],match$6[2]);
                  return [0,match$6[1],$js$24]}
                else
                 {return tt_analyse_method_expression
                          (env,current_method_name,comment_opt,[0,0],body)}}}
            else
             {return "unknown primitive:raise"}}
          else
           {var $js$25=Pervasives["^"];
            var $js$26=Pervasives["^"];
            var $js$27=Odoc_messages["method_without_param"];
            var $js$28=$js$27(current_method_name);
            var $js$29=$js$26(" ",$js$28);
            var $js$30=$js$25(Odoc_messages["bad_tree"],$js$29);
            var $js$31=[0,Failure,$js$30];
            throw $js$31}}
        else
         {return 0}};
    var
     analyse_class_structure=
      function
       (env,
        current_class_name,
        tt_class_sig,
        last_pos,
        pos_limit,
        p_cls,
        tt_cls,
        table)
       {var
         iter$1=
          function(acc_inher,acc_fields,last_pos$1,param)
           {var $js$1=param;
            if($js$1)
             {var q=param[2];
              var item=param[1];
              var loc=item[2];
              var match=item[1];
              var $js$2=match;
              if($js$2==0)
               {var p_clexp=match[2];
                var $js$3=List["length"];
                var n=$js$3(acc_inher);
                try
                 {var $js$4=Typedtree_search[13];var tt_clexp=$js$4(tt_cls,n)}
                catch(exn)
                 {var $js$5=exn=Not_found;
                  if($js$5)
                   {var
                     $js$6=
                      Odoc_messages["inherit_classexp_not_found_in_typedtree"];
                    var $js$7=$js$6(n);
                    var $js$8=[0,Failure,$js$7];
                    throw $js$8}
                  else
                   {var tt_clexp="unknown primitive:reraise"}}
                var
                 match$1=
                  get_comments_in_class(last_pos$1,p_clexp[2][1][4]);
                var info_opt=match$1[1];
                var $js$9=info_opt;
                if($js$9){var text_opt=info_opt[1][1]}else{var text_opt=0}
                var name=tt_name_of_class_expr(tt_clexp);
                var $js$10=Odoc_env["full_class_or_class_type_name"];
                var $js$11=$js$10(env,name);
                var inher=[0,$js$11,0,text_opt];
                var $js$12=Pervasives["@"];
                var $js$13=$js$12(acc_inher,[0,inher,0]);
                var $js$14=Pervasives["@"];
                var $js$15=$js$14(acc_fields,match$1[2]);
                return iter$1($js$13,$js$15,p_clexp[2][2][4],q)}
              else
               if($js$2==1)
                {var match$2=match[1];
                 var label=match$2[1][1];
                 var $js$16=match$2[3];
                 if($js$16==0){var virt=1}else if($js$16==1){var virt=0}
                 var $js$17=Odoc_name["concat"];
                 var complete_name=$js$17(current_class_name,label);
                 var match$3=get_comments_in_class(last_pos$1,loc[1][4]);
                 try
                  {var $js$18=Typedtree_search[14];
                   var type_exp=$js$18(tt_cls,label)}
                 catch(exn$1)
                  {var $js$19=exn$1=Not_found;
                   if($js$19)
                    {var
                      $js$20=
                       Odoc_messages["attribute_not_found_in_typedtree"];
                     var $js$21=$js$20(complete_name);
                     var $js$22=[0,Failure,$js$21];
                     throw $js$22}
                   else
                    {var type_exp="unknown primitive:reraise"}}
                 var $js$23=Odoc_global["keep_code"][1];
                 if($js$23)
                  {var $js$24=get_string_of_file(loc[1][4],loc[2][4]);
                   var code=[0,$js$24]}
                 else
                  {var code=0}
                 var $js$25=Odoc_env["subst_type"];
                 var $js$26=$js$25(env,type_exp);
                 var
                  $js$27=
                   [0,complete_name,match$3[1],$js$26,0,0,code,[0,[0,loc],0]];
                 var att=[0,$js$27,match$2[2]=1,virt];
                 var $js$28=Pervasives["@"];
                 var $js$29=Pervasives["@"];
                 var $js$30=$js$29(match$3[2],[0,[0,att],0]);
                 var $js$31=$js$28(acc_fields,$js$30);
                 return iter$1(acc_inher,$js$31,loc[2][4],q)}
               else
                if($js$2==2)
                 {var match$4=match[1];
                  var private_flag=match$4[2];
                  var label$1=match$4[1][1];
                  var $js$32=match$4[3];
                  if($js$32==0)
                   {var $js$33=Odoc_name["concat"];
                    var complete_name$1=$js$33(current_class_name,label$1);
                    var match$5=get_comments_in_class(last_pos$1,loc[1][4]);
                    try
                     {var $js$34=Odoc_sig["Signature_search"][10];
                      var met_type=$js$34(label$1,tt_class_sig)}
                    catch(exn$2)
                     {var $js$35=exn$2=Not_found;
                      if($js$35)
                       {var $js$36=Odoc_messages["method_type_not_found"];
                        var $js$37=$js$36(current_class_name,label$1);
                        var $js$38=[0,Failure,$js$37];
                        throw $js$38}
                      else
                       {var met_type="unknown primitive:reraise"}}
                    var match$6=met_type[1];
                    var $js$39=match$6;
                    if(typeof $js$39=="number")
                     {"unknown block:match/2382"}
                    else
                     {var $js$40=$js$39[0];
                      if($js$40==1){var real_type=match$6[3]}else{var exit=283}}
                    switch(exit){case 283:var real_type=met_type}
                    var $js$41=Odoc_global["keep_code"][1];
                    if($js$41)
                     {var $js$42=get_string_of_file(loc[1][4],loc[2][4]);
                      var code$1=[0,$js$42]}
                    else
                     {var code$1=0}
                    var $js$43=Odoc_env["subst_type"];
                    var $js$44=$js$43(env,real_type);
                    var
                     $js$45=
                      [0,
                       complete_name$1,
                       match$5[1],
                       $js$44,
                       0,
                       0,
                       code$1,
                       [0,[0,loc],0]];
                    var met=[0,$js$45,private_flag=0,1];
                    var $js$46=Odoc_value["update_value_parameters_text"];
                    $js$46(met[1]);
                    var $js$47=Pervasives["@"];
                    var $js$48=Pervasives["@"];
                    var $js$49=$js$48(match$5[2],[0,[1,met],0]);
                    var $js$50=$js$47(acc_fields,$js$49);
                    return iter$1(acc_inher,$js$50,loc[2][4],q)}
                  else
                   if($js$32==1)
                    {var $js$51=Odoc_name["concat"];
                     var complete_name$2=$js$51(current_class_name,label$1);
                     var match$7=get_comments_in_class(last_pos$1,loc[1][4]);
                     var info_opt$1=match$7[1];
                     try
                      {var $js$52=Typedtree_search[16];
                       var exp=$js$52(tt_cls,label$1)}
                     catch(exn$3)
                      {var $js$53=exn$3=Not_found;
                       if($js$53)
                        {var $js$54=Odoc_messages["method_not_found_in_typedtree"];
                         var $js$55=$js$54(complete_name$2);
                         var $js$56=[0,Failure,$js$55];
                         throw $js$56}
                       else
                        {var exp="unknown primitive:reraise"}}
                     var match$8=exp[4][1];
                     var $js$57=match$8;
                     if(typeof $js$57=="number")
                      {"unknown block:match/2404"}
                     else
                      {var $js$58=$js$57[0];
                       if($js$58==1)
                        {var real_type$1=match$8[3]}
                       else
                        {var exit$1=291}}
                     switch(exit$1){case 291:var real_type$1=exp[4]}
                     var $js$59=Odoc_global["keep_code"][1];
                     if($js$59)
                      {var $js$60=get_string_of_file(loc[1][4],loc[2][4]);
                       var code$2=[0,$js$60]}
                     else
                      {var code$2=0}
                     var $js$61=Odoc_env["subst_type"];
                     var $js$62=$js$61(env,real_type$1);
                     var
                      $js$63=
                       tt_analyse_method_expression
                        (env,complete_name$2,info_opt$1,0,exp);
                     var
                      $js$64=
                       [0,
                        complete_name$2,
                        info_opt$1,
                        $js$62,
                        0,
                        $js$63,
                        code$2,
                        [0,[0,loc],0]];
                     var met$1=[0,$js$64,private_flag=0,0];
                     var $js$65=Odoc_value["update_value_parameters_text"];
                     $js$65(met$1[1]);
                     var $js$66=Pervasives["@"];
                     var $js$67=Pervasives["@"];
                     var $js$68=$js$67(match$7[2],[0,[1,met$1],0]);
                     var $js$69=$js$66(acc_fields,$js$68);
                     return iter$1(acc_inher,$js$69,loc[2][4],q)}}
                else
                 if($js$2==3)
                  {var exit$2=297}
                 else
                  if($js$2==4)
                   {return iter$1(acc_inher,acc_fields,match[1][2][2][4],q)}
                  else
                   if($js$2==5)
                    {var exit$2=297}
                   else
                    if($js$2==6){return "unknown primitive:raise"}
              switch(exit$2)
               {case 297:return iter$1(acc_inher,acc_fields,loc[2][4],q)}}
            else
             {var s=get_string_of_file(last_pos$1,pos_limit);
              var $js$70=My_ir[1];
              var match$9=$js$70(file_name[1],s);
              var $js$71=List["fold_left"];
              var
               ele_comments=
                $js$71
                 (function(acc,sc)
                   {var match$10=sc[1];
                    var $js$72=match$10;
                    if($js$72)
                     {var $js$73=Pervasives["@"];
                      return $js$73(acc,[0,[2,match$10[1]],0])}
                    else
                     {return acc}},
                  0,
                  match$9[2]);
              var $js$72=Pervasives["@"];
              var $js$73=$js$72(acc_fields,ele_comments);
              return [0,acc_inher,$js$73]}};
        return iter$1(0,0,last_pos,p_cls[2])};
    var
     analyse_class_kind=
      function
       (env,
        current_class_name,
        comment_opt,
        last_pos,
        p_class_expr,
        tt_class_exp,
        table)
       {var match=p_class_expr[1];
        var match$1=tt_class_exp[1];
        var $js$1=match;
        if($js$1==0)
         {var $js$2=match$1;
          if($js$2==0)
           {var $js$3=Odoc_name["from_path"];var name=$js$3(match$1[1])}
          else
           {var $js$4=Odoc_name["from_longident"];var name=$js$4(match[1][1])}
          var match$2=tt_class_exp[3];
          var $js$5=match$2;
          if($js$5==0)
           {var params=match$2[2]}
          else
           if($js$5==1){var exit=241}else if($js$5==2){var exit=241}
          switch(exit){case 241:var params=0}
          var $js$6=Odoc_env["full_class_name"];
          var $js$7=$js$6(env,name);
          var $js$8=List["map"];
          var $js$9=Odoc_env["subst_type"];
          var $js$10=$js$9(env);
          var $js$11=$js$8($js$10,params);
          var $js$12=[0,$js$7,0,$js$11];
          var $js$13=[2,$js$12];
          return [0,0,$js$13]}
        else
         if($js$1==1)
          {var $js$14=match$1;
           if($js$14==1)
            {var match$3=tt_class_exp[3];
             var $js$15=match$3;
             if($js$15==0)
              {var exit$1=246}
             else
              if($js$15==1)
               {var tt_class_sig=match$3[1]}
              else
               if($js$15==2){var exit$1=246}
             switch(exit$1)
              {case 246:var tt_class_sig="unknown primitive:raise"}
             var
              match$4=
               analyse_class_structure
                (env,
                 current_class_name,
                 tt_class_sig,
                 last_pos,
                 p_class_expr[2][2][4],
                 match[1],
                 match$1[1],
                 table);
             return [0,0,[0,match$4[1],match$4[2]]]}
           else
            {var exit$2=263}}
         else
          if($js$1==2)
           {var $js$16=match$1;
            if($js$16==2)
             {var tt_class_expr2=match$1[4];
              var pat=match$1[2];
              var match$5=pat[1];
              var $js$17=match$5;
              if(typeof $js$17=="number")
               {"unknown block:match/2326"}
              else
               {var $js$18=$js$17[0];
                if($js$18==0)
                 {var $js$19=Odoc_name["from_ident"];
                  var $js$20=$js$19(match$5[1]);
                  var $js$21="unknown primitive:caml_string_equal";
                  if($js$21)
                   {var match$6=tt_class_expr2[1];
                    var $js$22=match$6;
                    if($js$22==4)
                     {var match$7=match$6[2];
                      var $js$23=match$7;
                      if($js$23)
                       {var match$8=match$7[1];
                        var match$9=match$8[1][1];
                        var $js$24=match$9;
                        if(typeof $js$24=="number")
                         {"unknown block:match/2315"}
                        else
                         {var $js$25=$js$24[0];
                          if($js$25==0)
                           {var $js$26=Odoc_name["from_ident"];
                            var name$1=$js$26(match$9[1]);
                            var $js$27=Odoc_env["subst_type"];
                            var $js$28=$js$27(env,match$8[2][4]);
                            var $js$29=Odoc_parameter["desc_from_info_opt"];
                            var $js$30=$js$29(comment_opt,name$1);
                            var $js$31=[0,name$1,$js$28,$js$30];
                            var new_param=[0,$js$31];
                            var match$10=[0,new_param,match$6[4]]}
                          else
                           {var exit$3=251}}}
                      else
                       {var exit$3=251}}
                    else
                     {var exit$3=251}
                    switch(exit$3)
                     {case 251:var match$10="unknown primitive:raise"}}
                  else
                   {var exit$4=253}}
                else
                 {var exit$4=253}}
              switch(exit$4)
               {case 253:
                 var $js$32=Odoc_parameter["desc_from_info_opt"];
                 var $js$33=$js$32(comment_opt);
                 var new_param$1=tt_param_info_from_pattern(env,$js$33,pat);
                 var match$10=[0,new_param$1,tt_class_expr2]
                }
              var
               match$11=
                analyse_class_kind
                 (env,
                  current_class_name,
                  comment_opt,
                  last_pos,
                  match[4],
                  match$10[2],
                  table);
              return [0,[0,match$10[1],match$11[1]],match$11[2]]}
            else
             {var exit$2=263}}
          else
           if($js$1==3)
            {var $js$34=match$1;
             if($js$34==3)
              {var match$12=match$1[1][1];
               var $js$35=match$12;
               if($js$35==0)
                {var $js$36=Odoc_name["from_path"];
                 var applied_name=$js$36(match$12[1])}
               else
                {var match$13=match[1][1];
                 var $js$37=match$13;
                 if($js$37==0)
                  {var $js$38=Odoc_name["from_longident"];
                   var applied_name=$js$38(match$13[1][1])}
                 else
                  {var applied_name=Odoc_messages["object_end"]}}
               var $js$39=List["fold_left"];
               var
                param_exps=
                 $js$39
                  (function(acc,param)
                    {var exp_opt=param[2];
                     var $js$40=exp_opt;
                     if($js$40)
                      {var $js$41=Pervasives["@"];
                       return $js$41(acc,[0,exp_opt[1],0])}
                     else
                      {return acc}},
                   0,
                   match$1[2]);
               var $js$40=List["map"];
               var param_types=$js$40(function(e){return e[4]},param_exps);
               var $js$41=List["map"];
               var
                params_code=
                 $js$41
                  (function(e)
                    {return get_string_of_file(e[2][1][4],e[2][2][4])},
                   param_exps);
               var $js$42=Odoc_env["full_class_name"];
               var $js$43=$js$42(env,applied_name);
               var $js$44=[0,$js$43,0,param_types,params_code];
               var $js$45=[1,$js$44];
               return [0,0,$js$45]}
             else
              {var exit$2=263}}
           else
            if($js$1==4)
             {var $js$46=match$1;
              if($js$46==4)
               {return analyse_class_kind
                        (env,
                         current_class_name,
                         comment_opt,
                         last_pos,
                         match[3],
                         match$1[4],
                         table)}
              else
               {var exit$2=263}}
            else
             if($js$1==5)
              {var $js$47=match$1;
               if($js$47==5)
                {var
                  match$14=
                   analyse_class_kind
                    (env,
                     current_class_name,
                     comment_opt,
                     last_pos,
                     match[1],
                     match$1[1],
                     table);
                 var class_type_kind=[1,[0,Odoc_messages["object_end"],0,0]];
                 return [0,match$14[1],[3,match$14[2],class_type_kind]]}
               else
                {var exit$2=263}}
             else
              if($js$1==6){var exit$2=263}
        switch(exit$2){case 263:return "unknown primitive:raise"}};
    var
     analyse_class=
      function
       (env,
        current_module_name,
        comment_opt,
        p_class_decl,
        tt_type_params,
        tt_class_exp,
        table)
       {var name=p_class_decl[3];
        var $js$1=Odoc_name["concat"];
        var complete_name=$js$1(current_module_name,name[1]);
        var loc=p_class_decl[4][2];
        var pos_start=loc[1][4];
        var virt=p_class_decl[1]=0;
        var $js$2=Odoc_env["subst_class_type"];
        var cltype=$js$2(env,tt_class_exp[3]);
        var
         match=
          analyse_class_kind
           (env,
            complete_name,
            comment_opt,
            pos_start,
            p_class_decl[4],
            tt_class_exp,
            table);
        return [0,
                complete_name,
                comment_opt,
                cltype,
                tt_type_params,
                virt,
                match[2],
                match[1],
                [0,[0,loc],0]]};
    var
     tt_name_from_module_expr=
      function(mod_expr)
       {var match=mod_expr[1];
        var $js$1=match;
        if($js$1==0)
         {var $js$2=Odoc_name["from_path"];return $js$2(match[1])}
        else
         if($js$1==4)
          {return tt_name_from_module_expr(match[1])}
         else
          {return Odoc_messages["struct_end"]}};
    var
     tt_get_included_module_list=
      function(tt_structure)
       {var
         f=
          function(acc,item)
           {var match=item[1];
            var $js$1=match;
            if($js$1==12)
             {var $js$2=Pervasives["@"];
              var $js$3=tt_name_from_module_expr(match[1][1]);
              var $js$4=[0,$js$3,0,0];
              var $js$5=[0,$js$4,0];
              return $js$2(acc,$js$5)}
            else
             {return acc}};
        var $js$1=List["fold_left"];
        return $js$1(f,0,tt_structure[1])};
    var
     replace_dummy_included_modules=
      function(module_elements,included_modules)
       {var
         f=
          function(param)
           {var match=param[1];
            var $js$1=match;
            if($js$1)
             {var ele=match[1];
              var $js$2=ele;
              if($js$2==2)
               {var match$1=param[2];
                var q=match[2];
                var im=ele[1];
                var $js$3=match$1;
                if($js$3)
                 {var im_repl=match$1[1];
                  var $js$4=f([0,q,match$1[2]]);
                  return [0,[2,[0,im_repl[1],im_repl[2],im[3]]],$js$4]}
                else
                 {return [0,[2,im],q]}}
              else
               {var $js$5=f([0,match[2],param[2]]);return [0,ele,$js$5]}}
            else
             {return 0}};
        return f([0,module_elements,included_modules])};
    var
     filter_module_with_module_type_constraint=
      function(m,mt)
       {var match=m[6];
        var $js$1=match;
        if($js$1==0)
         {var $js$2=mt;
          if($js$2==1)
           {var
             $js$3=
              filter_module_elements_with_module_type_constraint
               (match[1],mt[1]);
            var $js$4=[0,$js$3];
            m[6]=$js$4,0;
            return m[2]=mt,0}
          else
           {var exit=195}}
        else
         {var exit=195}
        switch(exit){case 195:return 0}};
    var
     filter_module_type_with_module_type_constraint=
      function(mtyp,mt)
       {var match=mtyp[6];
        var $js$1=match;
        if($js$1)
         {var match$1=match[1];
          var $js$2=match$1;
          if($js$2==0)
           {var $js$3=mt;
            if($js$3==1)
             {var
               $js$4=
                filter_module_elements_with_module_type_constraint
                 (match$1[1],mt[1]);
              var $js$5=[0,$js$4];
              var $js$6=[0,$js$5];
              mtyp[6]=$js$6,0;
              return mtyp[3]=[0,mt],0}
            else
             {var exit=196}}
          else
           {var exit=196}}
        else
         {var exit=196}
        switch(exit){case 196:return 0}};
    var
     filter_module_elements_with_module_type_constraint=
      function(l,lsig)
       {var
         pred=
          function(ele)
           {var $js$1=ele;
            if($js$1==0)
             {var m=ele[1];
              var
               f=
                function(param)
                 {var $js$2=param;
                  if($js$2==3)
                   {var $js$3=Odoc_name["simple"];
                    var n1=$js$3(m[1]);
                    var $js$4=Ident["name"];
                    var n2=$js$4(param[1]);
                    var match="unknown primitive:caml_string_equal";
                    var $js$5=match!=0;
                    if($js$5)
                     {filter_module_with_module_type_constraint(m,param[2][1]);
                      return 1}
                    else
                     {return 0}}
                  else
                   {return 0}}}
            else
             if($js$1==1)
              {var mt=ele[1];
               var
                f=
                 function(param)
                  {var $js$2=param;
                   if($js$2==4)
                    {var match=param[2][1];
                     var $js$3=match;
                     if($js$3)
                      {var $js$4=Odoc_name["simple"];
                       var n1=$js$4(mt[1]);
                       var $js$5=Ident["name"];
                       var n2=$js$5(param[1]);
                       var match$1="unknown primitive:caml_string_equal";
                       var $js$6=match$1!=0;
                       if($js$6)
                        {filter_module_type_with_module_type_constraint(mt,match[1]);
                         return 1}
                       else
                        {return 0}}
                     else
                      {var exit=202}}
                   else
                    {var exit=202}
                   switch(exit){case 202:return 0}}}
             else
              if($js$1==2)
               {var f=function(param){return 1}}
              else
               if($js$1==3)
                {var c=ele[1];
                 var
                  f=
                   function(param)
                    {var $js$2=param;
                     if($js$2==5)
                      {var $js$3=Odoc_name["simple"];
                       var n1=$js$3(c[1]);
                       var $js$4=Ident["name"];
                       var n2=$js$4(param[1]);
                       return "unknown primitive:caml_string_equal"}
                     else
                      {return 0}}}
               else
                if($js$1==4)
                 {var ct=ele[1];
                  var
                   f=
                    function(param)
                     {var $js$2=param;
                      if($js$2==6)
                       {var $js$3=Odoc_name["simple"];
                        var n1=$js$3(ct[1]);
                        var $js$4=Ident["name"];
                        var n2=$js$4(param[1]);
                        return "unknown primitive:caml_string_equal"}
                      else
                       {return 0}}}
                else
                 if($js$1==5)
                  {var v=ele[1];
                   var
                    f=
                     function(param)
                      {var $js$2=param;
                       if($js$2==0)
                        {var $js$3=Odoc_name["simple"];
                         var n1=$js$3(v[1]);
                         var $js$4=Ident["name"];
                         var n2=$js$4(param[1]);
                         return "unknown primitive:caml_string_equal"}
                       else
                        {return 0}}}
                 else
                  if($js$1==6)
                   {var te=ele[1];
                    var
                     l$1=
                      filter_extension_constructors_with_module_type_constraint
                       (te[5],lsig);
                    te[5]=l$1,0;
                    var $js$2=l$1!=0;
                    if($js$2)
                     {var f=function(param){return 1}}
                    else
                     {var f=function(param){return 0}}}
                  else
                   if($js$1==7)
                    {var e=ele[1];
                     var
                      f=
                       function(param)
                        {var $js$3=param;
                         if($js$3==2)
                          {var $js$4=Odoc_name["simple"];
                           var n1=$js$4(e[1]);
                           var $js$5=Ident["name"];
                           var n2=$js$5(param[1]);
                           return "unknown primitive:caml_string_equal"}
                         else
                          {return 0}}}
                   else
                    if($js$1==8)
                     {var t=ele[1];
                      var
                       f=
                        function(param)
                         {var $js$3=param;
                          if($js$3==1)
                           {var $js$4=Odoc_name["simple"];
                            var n1=$js$4(t[1]);
                            var $js$5=Ident["name"];
                            var n2=$js$5(param[1]);
                            return "unknown primitive:caml_string_equal"}
                          else
                           {return 0}}}
                    else
                     if($js$1==9){var f=function(param){return 1}}
            var $js$3=List["exists"];
            return $js$3(f,lsig)};
        var $js$1=List["filter"];
        return $js$1(pred,l)};
    var
     filter_extension_constructors_with_module_type_constraint=
      function(l,lsig)
       {var
         pred=
          function(xt)
           {var $js$1=List["exists"];
            return $js$1
                    (function(param)
                      {var $js$2=param;
                       if($js$2==2)
                        {var $js$3=Odoc_name["simple"];
                         var n1=$js$3(xt[1]);
                         var $js$4=Ident["name"];
                         var n2=$js$4(param[1]);
                         return "unknown primitive:caml_string_equal"}
                       else
                        {return 0}},
                     lsig)};
        var $js$1=List["filter"];
        return $js$1(pred,l)};
    var
     analyse_structure=
      function(env,current_module_name,last_pos,pos_limit,parsetree,typedtree)
       {var $js$1=Typedtree_search[3];
        var match=$js$1(typedtree[1]);
        var table_values=match[2];
        var table=match[1];
        var
         iter$1=
          function(env$1,last_pos$1,param)
           {var $js$2=param;
            if($js$2)
             {var q=param[2];
              var item=param[1];
              var match$1=get_comments_in_module(last_pos$1,item[2][1][4]);
              var $js$3=q;
              if($js$3)
               {var pos_limit2=q[1][2][1][4]}
              else
               {var pos_limit2=pos_limit}
              var
               match$2=
                analyse_structure_item
                 (env$1,
                  current_module_name,
                  item[2],
                  pos_limit2,
                  match$1[1],
                  item[1],
                  typedtree,
                  table,
                  table_values);
              var $js$4=Pervasives["@"];
              var $js$5=Pervasives["@"];
              var $js$6=iter$1(match$2[2],item[2][2][4]+match$2[1],q);
              var $js$7=$js$5(match$2[3],$js$6);
              return $js$4(match$1[2],$js$7)}
            else
             {var s=get_string_of_file(last_pos$1,pos_limit);
              var $js$8=My_ir[1];
              var match$3=$js$8(file_name[1],s);
              var $js$9=List["fold_left"];
              return $js$9
                      (function(acc,sc)
                        {var match$4=sc[1];
                         var $js$10=match$4;
                         if($js$10)
                          {var $js$11=Pervasives["@"];
                           return $js$11(acc,[0,[9,match$4[1]],0])}
                         else
                          {return acc}},
                       0,
                       match$3[2])}};
        return iter$1(env,last_pos,parsetree)};
    var
     analyse_structure_item=
      function
       (env,
        current_module_name,
        loc,
        pos_limit,
        comment_opt,
        parsetree_item_desc,
        typedtree,
        table,
        table_values)
       {var $js$1=parsetree_item_desc;
        if($js$1==0)
         {return [0,0,env,0]}
        else
         if($js$1==1)
          {var rec_flag=parsetree_item_desc[1];
           var
            iter_pat=
             function(param)
              {var $js$2=param;
               if(typeof $js$2=="number")
                {if($js$2==0){var exit=32}}
               else
                {var $js$3=$js$2[0];
                 if($js$3==0)
                  {return [0,param[1]]}
                 else
                  if($js$3==4)
                   {var exit=32}
                  else
                   if($js$3==10){return iter_pat(param[1][1])}else{return 0}}
               switch(exit){case 32:return 0}};
           var
            iter$1=
             function(*opt*,last_pos,acc_env,acc,p_e_list)
              {var $js$2=*opt*;
               if($js$2){var first=*opt*[1]}else{var first=0}
               var $js$3=p_e_list;
               if($js$3)
                {var q=p_e_list[2];
                 var match=p_e_list[1];
                 var pat=match[1];
                 var value_name_opt=iter_pat(pat[1]);
                 var new_last_pos=match[2][2][2][4];
                 var $js$4=value_name_opt;
                 if($js$4)
                  {try
                    {var $js$5=Typedtree_search[11];
                     var pat_exp=$js$5(table_values,value_name_opt[1][1]);
                     var $js$6=first;
                     if($js$6)
                      {var match$1=[0,comment_opt,0]}
                     else
                      {var match$1=get_comments_in_module(last_pos,pat[2][1][4])}
                     var
                      l_values=
                       tt_analyse_value
                        (env,current_module_name,match$1[1],loc,pat_exp,rec_flag);
                     var $js$7=List["fold_left"];
                     var
                      new_env=
                       $js$7
                        (function(e,v)
                          {var $js$8=Odoc_env["add_value"];return $js$8(e,v[1])},
                         acc_env,
                         l_values);
                     var $js$8=List["map"];
                     var l_ele=$js$8(function(v){return [5,v]},l_values);
                     var $js$9=Pervasives["@"];
                     var $js$10=Pervasives["@"];
                     var $js$11=$js$10(match$1[2],l_ele);
                     var $js$12=$js$9(acc,$js$11);
                     return iter$1(0,new_last_pos,new_env,$js$12,q)}
                   catch(exn)
                    {var $js$13=exn=Not_found;
                     if($js$13)
                      {return iter$1(0,new_last_pos,acc_env,acc,q)}
                     else
                      {return "unknown primitive:reraise"}}}
                 else
                  {return iter$1(0,new_last_pos,acc_env,acc,q)}}
               else
                {return [0,acc_env,acc]}};
           var match=iter$1([0,1],loc[1][4],env,0,parsetree_item_desc[2]);
           return [0,0,match[1],match[2]]}
         else
          if($js$1==2)
           {var name_pre=parsetree_item_desc[1][1][1];
            var $js$2=Typedtree_search[12];
            var typ=$js$2(table,name_pre);
            var $js$3=Odoc_name["parens_if_infix"];
            var name=$js$3(name_pre);
            var $js$4=Odoc_name["concat"];
            var complete_name=$js$4(current_module_name,name);
            var $js$5=Odoc_global["keep_code"][1];
            if($js$5)
             {var $js$6=get_string_of_file(loc[1][4],loc[2][4]);
              var code=[0,$js$6]}
            else
             {var code=0}
            var $js$7=Odoc_env["subst_type"];
            var $js$8=$js$7(env,typ);
            var
             new_value=
              [0,complete_name,comment_opt,$js$8,0,0,code,[0,[0,loc],0]];
            var $js$9=Odoc_env["add_value"];
            var new_env=$js$9(env,new_value[1]);
            return [0,0,new_env,[0,[5,new_value],0]]}
          else
           if($js$1==3)
            {var name_typedecl_list=parsetree_item_desc[1];
             var $js$10=List["fold_left"];
             var
              extended_env=
               $js$10
                (function(acc_env,param)
                  {var $js$11=Odoc_name["concat"];
                   var complete_name$1=$js$11(current_module_name,param[1][1]);
                   var $js$12=Odoc_env["add_type"];
                   return $js$12(acc_env,complete_name$1)},
                 env,
                 name_typedecl_list);
             var $js$11=List["exists"];
             var
              is_nonrec=
               $js$11
                (function(td)
                  {var $js$12=List["exists"];
                   return $js$12
                           (function(param)
                             {return "unknown primitive:caml_string_equal"},
                            td[7])},
                 name_typedecl_list);
             var $js$12=is_nonrec;
             if($js$12){var env$1=env}else{var env$1=extended_env}
             var
              f=
               function(*opt*,maybe_more_acc,last_pos,name_type_decl_list)
                {var $js$13=*opt*;
                 if($js$13){var first=*opt*[1]}else{var first=0}
                 var $js$14=name_type_decl_list;
                 if($js$14)
                  {var q=name_type_decl_list[2];
                   var type_decl=name_type_decl_list[1];
                   var name$1=type_decl[1][1];
                   var $js$15=Odoc_name["concat"];
                   var complete_name$1=$js$15(current_module_name,name$1);
                   var loc$1=type_decl[8];
                   var loc_start=loc$1[1][4];
                   var loc_end=loc$1[2][4];
                   var $js$16=q;
                   if($js$16)
                    {var pos_limit2=q[1][8][1][4]}
                   else
                    {var pos_limit2=pos_limit}
                   var $js$17=Sig[7];
                   var match$1=$js$17(loc_end,pos_limit2,type_decl);
                   var name_comment_list=match$1[2];
                   var maybe_more=match$1[1];
                   try
                    {var $js$18=Typedtree_search[8];
                     var tt_type_decl=$js$18(table,name$1)}
                   catch(exn)
                    {var $js$19=exn=Not_found;
                     if($js$19)
                      {var $js$20=Odoc_messages["type_not_found_in_typedtree"];
                       var $js$21=$js$20(complete_name$1);
                       var $js$22=[0,Failure,$js$21];
                       throw $js$22}
                     else
                      {var tt_type_decl="unknown primitive:reraise"}}
                   var tt_type_decl$1=tt_type_decl[4];
                   var $js$23=first;
                   if($js$23)
                    {var match$2=[0,comment_opt,0]}
                   else
                    {var match$2=get_comments_in_module(last_pos,loc_start)}
                   var $js$24=Sig[9];
                   var kind=$js$24(env$1,name_comment_list,tt_type_decl$1[3]);
                   var new_end=loc_end+maybe_more;
                   var $js$25=List["map2"];
                   var
                    $js$26=
                     $js$25
                      (function(p,v)
                        {var $js$27=Types["Variance"][11];
                         var match$3=$js$27(v);
                         var $js$28=Odoc_env["subst_type"];
                         var $js$29=$js$28(env$1,p);
                         return [0,$js$29,match$3[1],match$3[2]]},
                       tt_type_decl$1[1],
                       tt_type_decl$1[6]);
                   var match$3=tt_type_decl$1[5];
                   var $js$27=match$3;
                   if($js$27)
                    {var $js$28=Sig[8];
                     var $js$29=$js$28(env$1,name_comment_list,match$3[1]);
                     var $js$30=[0,$js$29]}
                   else
                    {var $js$30=0}
                   var $js$31=Odoc_global["keep_code"][1];
                   if($js$31)
                    {var $js$32=get_string_of_file(loc_start,new_end);
                     var $js$33=[0,$js$32]}
                   else
                    {var $js$33=0}
                   var
                    t=
                     [0,
                      complete_name$1,
                      match$2[1],
                      $js$26,
                      kind,
                      tt_type_decl$1[4],
                      $js$30,
                      [0,[0,loc$1],0],
                      $js$33];
                   var $js$34=My_ir[3];
                   var $js$35=get_string_of_file(new_end,pos_limit2);
                   var match$4=$js$34(file_name[1],$js$35);
                   var maybe_more2=match$4[1];
                   var $js$36=Sig[10];
                   var $js$37=$js$36(t[2],match$4[2]);
                   t[2]=$js$37,0;
                   var
                    match$5=
                     f(0,maybe_more+maybe_more2,new_end+maybe_more2,q);
                   var $js$38=Pervasives["@"];
                   var $js$39=$js$38(match$2[2],[0,[8,t],match$5[2]]);
                   return [0,match$5[1],$js$39]}
                 else
                  {return [0,maybe_more_acc,0]}};
             var match$1=f([0,1],0,loc[1][4],name_typedecl_list);
             return [0,match$1[1],extended_env,match$1[2]]}
           else
            if($js$1==4)
             {var tyext=parsetree_item_desc[1];
              var match$2=tyext[3];
              var $js$13=match$2;
              if($js$13)
               {var ext=match$2[1];
                try
                 {var $js$14=Typedtree_search[6];
                  var tt_tyext=$js$14(table,ext[1][1])}
                catch(exn)
                 {var $js$15=exn=Not_found;
                  if($js$15)
                   {var
                     $js$16=
                      Odoc_messages["extension_not_found_in_typedtree"];
                    var $js$17=Odoc_name["concat"];
                    var $js$18=$js$17(current_module_name,ext[1][1]);
                    var $js$19=$js$16($js$18);
                    var $js$20=[0,Failure,$js$19];
                    throw $js$20}
                  else
                   {var tt_tyext="unknown primitive:reraise"}}}
              else
               {var tt_tyext="unknown primitive:raise"}
              var $js$21=List["fold_left"];
              var
               new_env$1=
                $js$21
                 (function(acc_env,param)
                   {var $js$22=Odoc_name["concat"];
                    var complete_name$1=$js$22(current_module_name,param[1][1]);
                    var $js$23=Odoc_env["add_extension"];
                    return $js$23(acc_env,complete_name$1)},
                  env,
                  tyext[3]);
              var loc_start=loc[1][4];
              var loc_end=loc[2][4];
              var $js$22=Odoc_env["full_type_name"];
              var $js$23=Odoc_name["from_path"];
              var $js$24=$js$23(tt_tyext[1]);
              var $js$25=$js$22(new_env$1,$js$24);
              var $js$26=List["map"];
              var
               $js$27=
                $js$26
                 (function(param)
                   {var $js$28=Odoc_env["subst_type"];
                    return $js$28(new_env$1,param[1][2])},
                  tt_tyext[3]);
              var $js$28=Odoc_global["keep_code"][1];
              if($js$28)
               {var $js$29=get_string_of_file(loc_start,loc_end);
                var $js$30=[0,$js$29]}
              else
               {var $js$30=0}
              var
               new_te=
                [0,
                 comment_opt,
                 $js$25,
                 $js$27,
                 tt_tyext[5],
                 0,
                 [0,[0,loc],0],
                 $js$30];
              var
               analyse_extension_constructors=
                function(maybe_more,exts_acc,tt_ext_list)
                 {var $js$31=tt_ext_list;
                  if($js$31)
                   {var q=tt_ext_list[2];
                    var tt_ext=tt_ext_list[1];
                    var $js$32=Odoc_name["concat"];
                    var
                     complete_name$1=
                      $js$32(current_module_name,tt_ext[2][1]);
                    var ext_loc_end=tt_ext[5][2][4];
                    var match$3=tt_ext[4];
                    var $js$33=match$3;
                    if($js$33==0)
                     {var $js$34=List["map"];
                      var
                       $js$35=
                        $js$34
                         (function(ctyp)
                           {var $js$36=Odoc_env["subst_type"];
                            return $js$36(new_env$1,ctyp[2])},
                          match$3[1]);
                      var $js$36=Misc["may_map"];
                      var
                       $js$37=
                        $js$36
                         (function(ctyp)
                           {var $js$38=Odoc_env["subst_type"];
                            return $js$38(new_env$1,ctyp[2])},
                          match$3[2]);
                      var
                       new_xt=
                        [0,
                         complete_name$1,
                         $js$35,
                         $js$37,
                         new_te,
                         0,
                         [0,[0,tt_ext[5]],0],
                         0]}
                    else
                     if($js$33==1)
                      {var $js$38=Odoc_env["full_extension_constructor_name"];
                       var $js$39=Odoc_name["from_path"];
                       var $js$40=$js$39(match$3[1]);
                       var $js$41=$js$38(env,$js$40);
                       var $js$42=[0,$js$41,0];
                       var $js$43=[0,$js$42];
                       var
                        new_xt=
                         [0,complete_name$1,0,0,new_te,$js$43,[0,[0,tt_ext[5]],0],0]}
                    var $js$44=q;
                    if($js$44)
                     {var pos_limit2=q[1][5][1][4]}
                    else
                     {var pos_limit2=pos_limit}
                    var s=get_string_of_file(ext_loc_end,pos_limit2);
                    var $js$45=My_ir[3];
                    var match$4=$js$45(file_name[1],s);
                    new_xt[7]=match$4[2],0;
                    return analyse_extension_constructors
                            (match$4[1],[0,new_xt,exts_acc],q)}
                  else
                   {var $js$46=List["rev"];
                    var $js$47=$js$46(exts_acc);
                    return [0,maybe_more,$js$47]}};
              var match$3=analyse_extension_constructors(0,0,tt_tyext[4]);
              new_te[5]=match$3[2],0;
              return [0,match$3[1],new_env$1,[0,[6,new_te],0]]}
            else
             if($js$1==5)
              {var name$1=parsetree_item_desc[1][1];
               var $js$31=Odoc_name["concat"];
               var complete_name$1=$js$31(current_module_name,name$1[1]);
               try
                {var $js$32=Typedtree_search[7];
                 var tt_ext=$js$32(table,name$1[1])}
               catch(exn$1)
                {var $js$33=exn$1=Not_found;
                 if($js$33)
                  {var
                    $js$34=
                     Odoc_messages["exception_not_found_in_typedtree"];
                   var $js$35=$js$34(complete_name$1);
                   var $js$36=[0,Failure,$js$35];
                   throw $js$36}
                 else
                  {var tt_ext="unknown primitive:reraise"}}
               var $js$37=Odoc_env["add_extension"];
               var new_env$2=$js$37(env,complete_name$1);
               var match$4=tt_ext[4];
               var $js$38=match$4;
               if($js$38==0)
                {var loc_start$1=loc[1][4];
                 var loc_end$1=loc[2][4];
                 var $js$39=List["map"];
                 var
                  $js$40=
                   $js$39
                    (function(ctyp)
                      {var $js$41=Odoc_env["subst_type"];
                       return $js$41(new_env$2,ctyp[2])},
                     match$4[1]);
                 var $js$41=Misc["may_map"];
                 var
                  $js$42=
                   $js$41
                    (function(ctyp)
                      {var $js$43=Odoc_env["subst_type"];
                       return $js$43(new_env$2,ctyp[2])},
                     match$4[2]);
                 var $js$43=Odoc_global["keep_code"][1];
                 if($js$43)
                  {var $js$44=get_string_of_file(loc_start$1,loc_end$1);
                   var $js$45=[0,$js$44]}
                 else
                  {var $js$45=0}
                 var
                  new_ext=
                   [0,
                    complete_name$1,
                    comment_opt,
                    $js$40,
                    $js$42,
                    0,
                    [0,[0,loc],0],
                    $js$45]}
               else
                if($js$38==1)
                 {var $js$46=Odoc_env["full_extension_constructor_name"];
                  var $js$47=Odoc_name["from_path"];
                  var $js$48=$js$47(match$4[1]);
                  var $js$49=$js$46(env,$js$48);
                  var $js$50=[0,$js$49,0];
                  var $js$51=[0,$js$50];
                  var
                   new_ext=
                    [0,complete_name$1,comment_opt,0,0,$js$51,[0,[0,loc],0],0]}
               return [0,0,new_env$2,[0,[7,new_ext],0]]}
             else
              if($js$1==6)
               {var match$5=parsetree_item_desc[1];
                var module_expr=match$5[2];
                var name$2=match$5[1];
                try
                 {var $js$52=Typedtree_search[4];
                  var tt_module_expr=$js$52(table,name$2[1]);
                  var
                   new_module_pre=
                    analyse_module
                     (env,
                      current_module_name,
                      name$2[1],
                      comment_opt,
                      module_expr,
                      tt_module_expr);
                  var $js$53=Odoc_global["keep_code"][1];
                  if($js$53)
                   {var loc$1=module_expr[2];
                    var st=loc$1[1][4];
                    var en=loc$1[2][4];
                    var $js$54=get_string_of_file(st,en);
                    var code$1=[0,$js$54]}
                  else
                   {var code$1=0}
                  var newrecord="unknown primitive:duprecord regular 11";
                  newrecord[9]=code$1,0;
                  var new_module=newrecord;
                  var $js$55=Odoc_env["add_module"];
                  var new_env$3=$js$55(env,new_module[1]);
                  var match$6=new_module[2];
                  var $js$56=match$6;
                  if($js$56==1)
                   {var $js$57=Odoc_env["add_signature"];
                    var $js$58=Odoc_name["simple"];
                    var $js$59=$js$58(new_module[1]);
                    var $js$60=[0,$js$59];
                    var
                     new_env2=
                      $js$57(new_env$3,new_module[1],$js$60,match$6[1])}
                  else
                   {var new_env2=new_env$3}
                  return [0,0,new_env2,[0,[0,new_module],0]]}
                catch(exn$2)
                 {var $js$61=exn$2=Not_found;
                  if($js$61)
                   {var $js$62=Odoc_name["concat"];
                    var complete_name$2=$js$62(current_module_name,name$2[1]);
                    var $js$63=Odoc_messages["module_not_found_in_typedtree"];
                    var $js$64=$js$63(complete_name$2);
                    var $js$65=[0,Failure,$js$64];
                    throw $js$65}
                  else
                   {return "unknown primitive:reraise"}}}
              else
               if($js$1==7)
                {var mods=parsetree_item_desc[1];
                 var $js$66=List["fold_left"];
                 var
                  new_env$4=
                   $js$66
                    (function(acc_env,param)
                      {var name$3=param[1];
                       var $js$67=Odoc_name["concat"];
                       var complete_name$3=$js$67(current_module_name,name$3[1]);
                       var $js$68=Odoc_env["add_module"];
                       var e=$js$68(acc_env,complete_name$3);
                       try
                        {var $js$69=Typedtree_search[4];
                         var tt_mod_exp=$js$69(table,name$3[1])}
                       catch(exn$3)
                        {var $js$70=exn$3=Not_found;
                         if($js$70)
                          {var $js$71=Odoc_messages["module_not_found_in_typedtree"];
                           var $js$72=$js$71(complete_name$3);
                           var $js$73=[0,Failure,$js$72];
                           throw $js$73}
                         else
                          {var tt_mod_exp="unknown primitive:reraise"}}
                       var
                        new_module$1=
                         analyse_module
                          (e,current_module_name,name$3[1],0,param[2],tt_mod_exp);
                       var match$7=new_module$1[2];
                       var $js$74=match$7;
                       if($js$74==1)
                        {var $js$75=Odoc_env["add_signature"];
                         var $js$76=Odoc_name["simple"];
                         var $js$77=$js$76(new_module$1[1]);
                         var $js$78=[0,$js$77];
                         return $js$75(e,new_module$1[1],$js$78,match$7[1])}
                       else
                        {return e}},
                     env,
                     mods);
                 var
                  f$1=
                   function(*opt*,last_pos,name_mod_exp_list)
                    {var $js$67=*opt*;
                     if($js$67){var first=*opt*[1]}else{var first=0}
                     var $js$68=name_mod_exp_list;
                     if($js$68)
                      {var match$7=name_mod_exp_list[1];
                       var mod_exp=match$7[2];
                       var name$3=match$7[1];
                       var $js$69=Odoc_name["concat"];
                       var complete_name$3=$js$69(current_module_name,name$3[1]);
                       var loc_start$2=mod_exp[2][1][4];
                       var loc_end$2=mod_exp[2][2][4];
                       try
                        {var $js$70=Typedtree_search[4];
                         var tt_mod_exp=$js$70(table,name$3[1])}
                       catch(exn$3)
                        {var $js$71=exn$3=Not_found;
                         if($js$71)
                          {var $js$72=Odoc_messages["module_not_found_in_typedtree"];
                           var $js$73=$js$72(complete_name$3);
                           var $js$74=[0,Failure,$js$73];
                           throw $js$74}
                         else
                          {var tt_mod_exp="unknown primitive:reraise"}}
                       var $js$75=first;
                       if($js$75)
                        {var match$8=[0,comment_opt,0]}
                       else
                        {var match$8=get_comments_in_module(last_pos,loc_start$2)}
                       var
                        new_module$1=
                         analyse_module
                          (new_env$4,
                           current_module_name,
                           name$3[1],
                           match$8[1],
                           mod_exp,
                           tt_mod_exp);
                       var eles=f$1(0,loc_end$2,name_mod_exp_list[2]);
                       var $js$76=Pervasives["@"];
                       return $js$76(match$8[2],[0,[0,new_module$1],eles])}
                     else
                      {return 0}};
                 var eles=f$1([0,1],loc[1][4],mods);
                 return [0,0,new_env$4,eles]}
               else
                if($js$1==8)
                 {var match$7=parsetree_item_desc[1];
                  var modtype=match$7[2];
                  var name$3=match$7[1];
                  var $js$67=Odoc_name["concat"];
                  var complete_name$3=$js$67(current_module_name,name$3[1]);
                  try
                   {var $js$68=Typedtree_search[5];
                    var tt_module_type=$js$68(table,name$3[1])}
                  catch(exn$3)
                   {var $js$69=exn$3=Not_found;
                    if($js$69)
                     {var
                       $js$70=
                        Odoc_messages["module_type_not_found_in_typedtree"];
                      var $js$71=$js$70(complete_name$3);
                      var $js$72=[0,Failure,$js$71];
                      throw $js$72}
                    else
                     {var tt_module_type="unknown primitive:reraise"}}
                  var match$8=tt_module_type[3];
                  var $js$73=modtype;
                  if($js$73)
                   {var $js$74=match$8;
                    if($js$74)
                     {var mty_type=match$8[1];
                      var $js$75=Sig[11];
                      var
                       $js$76=
                        $js$75(0,env,complete_name$3,modtype[1],mty_type[2]);
                      var $js$77=[0,$js$76];
                      var match$9=[0,$js$77,[0,mty_type[2]]]}
                    else
                     {var exit=118}}
                  else
                   {var exit=118}
                  switch(exit){case 118:var match$9=[0,0,0]}
                  var sig_mtype=match$9[2];
                  var
                   mt=
                    [0,
                     complete_name$3,
                     comment_opt,
                     sig_mtype,
                     0,
                     file_name[1],
                     match$9[1],
                     [0,[0,loc],0]];
                  var $js$78=Odoc_env["add_module_type"];
                  var new_env$5=$js$78(env,mt[1]);
                  var $js$79=sig_mtype;
                  if($js$79)
                   {var match$10=sig_mtype[1];
                    var $js$80=match$10;
                    if($js$80==1)
                     {var $js$81=Odoc_env["add_signature"];
                      var $js$82=Odoc_name["simple"];
                      var $js$83=$js$82(mt[1]);
                      var $js$84=[0,$js$83];
                      var new_env2$1=$js$81(new_env$5,mt[1],$js$84,match$10[1])}
                    else
                     {var exit$1=114}}
                  else
                   {var exit$1=114}
                  switch(exit$1){case 114:var new_env2$1=new_env$5}
                  return [0,0,new_env2$1,[0,[1,mt],0]]}
                else
                 if($js$1==9)
                  {var $js$85=comment_opt;
                   if($js$85)
                    {var match$11=comment_opt[1][1];
                     var $js$86=match$11;
                     if($js$86)
                      {var ele_comments=[0,[9,match$11[1]],0]}
                     else
                      {var ele_comments=0}}
                   else
                    {var ele_comments=0}
                   return [0,0,env,ele_comments]}
                 else
                  if($js$1==10)
                   {var class_decl_list=parsetree_item_desc[1];
                    var $js$87=List["fold_left"];
                    var
                     new_env$6=
                      $js$87
                       (function(acc_env,class_decl)
                         {var $js$88=Odoc_name["concat"];
                          var
                           complete_name$4=
                            $js$88(current_module_name,class_decl[3][1]);
                          var $js$89=Odoc_env["add_class"];
                          return $js$89(acc_env,complete_name$4)},
                        env,
                        class_decl_list);
                    var
                     f$2=
                      function(*opt*,last_pos,class_decl_list$1)
                       {var $js$88=*opt*;
                        if($js$88){var first=*opt*[1]}else{var first=0}
                        var $js$89=class_decl_list$1;
                        if($js$89)
                         {var class_decl=class_decl_list$1[1];
                          try
                           {var $js$90=Typedtree_search[9];
                            var match$12=$js$90(table,class_decl[3][1])}
                          catch(exn$4)
                           {var $js$91=exn$4=Not_found;
                            if($js$91)
                             {var $js$92=Odoc_name["concat"];
                              var
                               complete_name$4=
                                $js$92(current_module_name,class_decl[3][1]);
                              var $js$93=Odoc_messages["class_not_found_in_typedtree"];
                              var $js$94=$js$93(complete_name$4);
                              var $js$95=[0,Failure,$js$94];
                              throw $js$95}
                            else
                             {var match$12="unknown primitive:reraise"}}
                          var $js$96=first;
                          if($js$96)
                           {var match$13=[0,comment_opt,0]}
                          else
                           {var
                             match$13=
                              get_comments_in_module(last_pos,class_decl[5][1][4])}
                          var last_pos2=class_decl[5][2][4];
                          var
                           new_class=
                            analyse_class
                             (new_env$6,
                              current_module_name,
                              match$13[1],
                              class_decl,
                              match$12[2],
                              match$12[1],
                              table);
                          var $js$97=Pervasives["@"];
                          var $js$98=f$2(0,last_pos2,class_decl_list$1[2]);
                          var $js$99=[0,[3,new_class],$js$98];
                          return $js$97(match$13[2],$js$99)}
                        else
                         {return 0}};
                    var $js$88=f$2([0,1],loc[1][4],class_decl_list);
                    return [0,0,new_env$6,$js$88]}
                  else
                   if($js$1==11)
                    {var class_type_decl_list=parsetree_item_desc[1];
                     var $js$89=List["fold_left"];
                     var
                      new_env$7=
                       $js$89
                        (function(acc_env,class_type_decl)
                          {var $js$90=Odoc_name["concat"];
                           var
                            complete_name$4=
                             $js$90(current_module_name,class_type_decl[3][1]);
                           var $js$91=Odoc_env["add_class_type"];
                           return $js$91(acc_env,complete_name$4)},
                         env,
                         class_type_decl_list);
                     var
                      f$3=
                       function(*opt*,last_pos,class_type_decl_list$1)
                        {var $js$90=*opt*;
                         if($js$90){var first=*opt*[1]}else{var first=0}
                         var $js$91=class_type_decl_list$1;
                         if($js$91)
                          {var class_type_decl=class_type_decl_list$1[1];
                           var name$4=class_type_decl[3];
                           var $js$92=Odoc_name["concat"];
                           var complete_name$4=$js$92(current_module_name,name$4[1]);
                           var virt=class_type_decl[1]=0;
                           try
                            {var $js$93=Typedtree_search[10];
                             var tt_cltype_declaration=$js$93(table,name$4[1])}
                           catch(exn$4)
                            {var $js$94=exn$4=Not_found;
                             if($js$94)
                              {var
                                $js$95=
                                 Odoc_messages["class_type_not_found_in_typedtree"];
                               var $js$96=$js$95(complete_name$4);
                               var $js$97=[0,Failure,$js$96];
                               throw $js$97}
                             else
                              {var tt_cltype_declaration="unknown primitive:reraise"}}
                           var tt_cltype_declaration$1=tt_cltype_declaration[10];
                           var type_params=tt_cltype_declaration$1[1];
                           var $js$98=Sig[12];
                           var
                            kind=
                             $js$98
                              (new_env$7,
                               complete_name$4,
                               class_type_decl[5][1][4],
                               class_type_decl[4],
                               tt_cltype_declaration$1[2]);
                           var $js$99=first;
                           if($js$99)
                            {var match$12=[0,comment_opt,0]}
                           else
                            {var
                              match$12=
                               get_comments_in_module(last_pos,class_type_decl[5][1][4])}
                           var last_pos2=class_type_decl[5][2][4];
                           var $js$100=Odoc_env["subst_class_type"];
                           var $js$101=$js$100(env,tt_cltype_declaration$1[2]);
                           var $js$102=List["map"];
                           var $js$103=Odoc_env["subst_type"];
                           var $js$104=$js$103(new_env$7);
                           var $js$105=$js$102($js$104,type_params);
                           var
                            $js$106=
                             [0,
                              complete_name$4,
                              match$12[1],
                              $js$101,
                              $js$105,
                              virt,
                              kind,
                              [0,[0,loc],0]];
                           var new_ele=[4,$js$106];
                           var $js$107=Pervasives["@"];
                           var $js$108=f$3(0,last_pos2,class_type_decl_list$1[2]);
                           var $js$109=[0,new_ele,$js$108];
                           return $js$107(match$12[2],$js$109)}
                         else
                          {return 0}};
                     var $js$90=f$3([0,1],loc[1][4],class_type_decl_list);
                     return [0,0,new_env$7,$js$90]}
                   else
                    if($js$1==12)
                     {var im=[0,"dummy",0,comment_opt];
                      return [0,0,env,[0,[2,im],0]]}
                    else
                     if($js$1==13)
                      {var exit$2=148}
                     else
                      if($js$1==14){var exit$2=148}
        switch(exit$2){case 148:return [0,0,env,0]}};
    var
     analyse_module=
      function
       (env,
        current_module_name,
        module_name,
        comment_opt,
        p_module_expr,
        tt_module_expr)
       {var $js$1=Odoc_name["concat"];
        var complete_name=$js$1(current_module_name,module_name);
        var loc=p_module_expr[2];
        var pos_start=loc[1][4];
        var pos_end=loc[2][4];
        var modtype=tt_module_expr[3];
        var match=p_module_expr[1];
        var $js$2=match;
        if($js$2==4)
         {var pmodule_type=match[2];
          var loc_start=pmodule_type[2][1][4];
          var loc_end=pmodule_type[2][2][4];
          var $js$3=get_string_of_file(loc_start,loc_end);
          var m_code_intf=[0,$js$3]}
        else
         {var m_code_intf=0}
        var
         m_base=
          [0,
           complete_name,
           modtype,
           comment_opt,
           0,
           file_name[1],
           [0,0],
           [0,[0,loc],0],
           0,
           0,
           m_code_intf,
           0];
        var match$1=p_module_expr[1];
        var match$2=tt_module_expr[1];
        var $js$4=match$1;
        if($js$4==0)
         {var $js$5=match$2;
          if($js$5==0)
           {var path=match$2[1];var exit=182}
          else
           if($js$5==4)
            {var match$3=match$2[1][1];
             var $js$6=match$3;
             if($js$6==0){var path=match$3[1];var exit=182}else{var exit=184}}
           else
            {var exit=184}}
        else
         if($js$4==1)
          {var p_structure=match$1[1];
           var $js$7=match$2;
           if($js$7==1)
            {var tt_structure=match$2[1];
             var
              elements=
               analyse_structure
                (env,complete_name,pos_start,pos_end,p_structure,tt_structure);
             var
              included_modules_from_tt=
               tt_get_included_module_list(tt_structure);
             var
              elements2=
               replace_dummy_included_modules
                (elements,included_modules_from_tt);
             var newrecord="unknown primitive:duprecord regular 11";
             newrecord[6]=[0,elements2],0;
             return newrecord}
           else
            if($js$7==4)
             {var match$4=match$2[1][1];
              var $js$8=match$4;
              if($js$8==1)
               {var tt_structure$1=match$4[1];
                var
                 elements$1=
                  analyse_structure
                   (env,
                    complete_name,
                    pos_start,
                    pos_end,
                    p_structure,
                    tt_structure$1);
                var
                 included_modules_from_tt$1=
                  tt_get_included_module_list(tt_structure$1);
                var
                 elements2$1=
                  replace_dummy_included_modules
                   (elements$1,included_modules_from_tt$1);
                var newrecord$1="unknown primitive:duprecord regular 11";
                var $js$9=Odoc_env["subst_module_type"];
                var $js$10=$js$9(env,match$2[2]);
                newrecord$1[2]=$js$10,0;
                newrecord$1[6]=[0,elements2$1],0;
                return newrecord$1}
              else
               {var exit=184}}
            else
             {var exit=184}}
         else
          if($js$4==2)
           {var $js$11=match$2;
            if($js$11==2)
             {var mtyp=match$2[3];
              var pmodule_type$1=match$1[2];
              var $js$12=pmodule_type$1;
              if($js$12)
               {var loc$1=pmodule_type$1[1][2]}
              else
               {var loc$1=Location["none"]}
              var loc_start$1=loc$1[1][4];
              var loc_end$1=loc$1[2][4];
              var mp_type_code=get_string_of_file(loc_start$1,loc_end$1);
              var $js$13=Odoc_name["from_ident"];
              var mp_name=$js$13(match$2[1]);
              var $js$14=pmodule_type$1;
              if($js$14)
               {var $js$15=mtyp;
                if($js$15)
                 {var $js$16=Sig[11];
                  var
                   mp_kind=
                    $js$16
                     (0,env,current_module_name,pmodule_type$1[1],mtyp[1][2])}
                else
                 {var exit$1=158}}
              else
               {var exit$1=158}
              switch(exit$1){case 158:var mp_kind=[0,0]}
              var $js$17=Misc["may_map"];
              var
               $js$18=
                $js$17
                 (function(m)
                   {var $js$19=Odoc_env["subst_module_type"];
                    return $js$19(env,m[2])},
                  mtyp);
              var param=[0,mp_name,$js$18,mp_type_code,mp_kind];
              var dummy_complete_name=param[1];
              var $js$19=Odoc_env["add_module"];
              var new_env=$js$19(env,dummy_complete_name);
              var
               m_base2=
                analyse_module
                 (new_env,
                  current_module_name,
                  module_name,
                  0,
                  match$1[3],
                  match$2[4]);
              var kind=m_base2[6];
              var newrecord$2="unknown primitive:duprecord regular 11";
              newrecord$2[6]=[2,param,kind],0;
              return newrecord$2}
            else
             {var exit=184}}
          else
           if($js$4==3)
            {var p_module_expr2=match$1[2];
             var p_module_expr1=match$1[1];
             var $js$20=match$2;
             if($js$20==3)
              {p_module_expr1$1=p_module_expr1;
               p_module_expr2$1=p_module_expr2;
               var tt_module_expr1=match$2[1];
               var tt_module_expr2=match$2[2];
               var exit=183}
             else
              if($js$20==4)
               {var match$5=match$2[1][1];
                var $js$21=match$5;
                if($js$21==3)
                 {p_module_expr1$1=p_module_expr1;
                  p_module_expr2$1=p_module_expr2;
                  var tt_module_expr1=match$5[1];
                  var tt_module_expr2=match$5[2];
                  var exit=183}
                else
                 {var exit=184}}
              else
               {var exit=184}}
           else
            if($js$4==4)
             {var $js$22=match$2;
              if($js$22==4)
               {var tt_modtype=match$2[2];
                var
                 m_base2$1=
                  analyse_module
                   (env,
                    current_module_name,
                    module_name,
                    0,
                    match$1[1],
                    match$2[1]);
                var $js$23=Sig[11];
                var $js$24=Odoc_name["concat"];
                var $js$25=$js$24(current_module_name,"??");
                var mtkind=$js$23(0,env,$js$25,match$1[2],tt_modtype);
                var $js$26=Odoc_env["subst_module_type"];
                var tt_modtype$1=$js$26(env,tt_modtype);
                var $js$27=Odoc_global["filter_with_module_constraints"][1];
                if($js$27)
                 {filter_module_with_module_type_constraint
                   (m_base2$1,tt_modtype$1)}
                else
                 {}
                var newrecord$3="unknown primitive:duprecord regular 11";
                newrecord$3[2]=tt_modtype$1,0;
                newrecord$3[6]=[5,m_base2$1[6],mtkind],0;
                return newrecord$3}
              else
               {var exit=184}}
            else
             if($js$4==5)
              {var $js$28=match$2;
               if($js$28==5)
                {var tt_modtype$2=match$2[2];
                 var loc$2=p_module_expr[2];
                 var loc_end$2=loc$2[2][4];
                 var exp_loc=match$1[1][2];
                 var exp_loc_end=exp_loc[2][4];
                 var s=get_string_of_file(exp_loc_end,loc_end$2);
                 var $js$29=Printf["sprintf"];
                 var code=$js$29([0,[11,"(val ...",[2,0,0]],"(val ...%s"],s);
                 var $js$30=tt_modtype$2;
                 if($js$30==0)
                  {var $js$31=Odoc_env["full_module_type_name"];
                   var $js$32=Odoc_name["from_path"];
                   var $js$33=$js$32(tt_modtype$2[1]);
                   var name=$js$31(env,$js$33)}
                 else
                  {var name=""}
                 var alias=[0,name,0];
                 var newrecord$4="unknown primitive:duprecord regular 11";
                 var $js$34=Odoc_env["subst_module_type"];
                 var $js$35=$js$34(env,tt_modtype$2);
                 newrecord$4[2]=$js$35,0;
                 newrecord$4[6]=[7,code,alias],0;
                 return newrecord$4}
               else
                {var exit=184}}
             else
              if($js$4==6){var exit=184}
        switch(exit)
         {case 184:return "unknown primitive:raise";
          case 182:
           var $js$36=Odoc_env["full_module_name"];
           var $js$37=Odoc_name["from_path"];
           var $js$38=$js$37(path);
           var alias_name=$js$36(env,$js$38);
           var newrecord$5="unknown primitive:duprecord regular 11";
           newrecord$5[6]=[1,[0,alias_name,0]],0;
           return newrecord$5;
          case 183:
           var
            m1=
             analyse_module
              (env,
               current_module_name,
               module_name,
               0,
               p_module_expr1$1,
               tt_module_expr1);
           var
            m2=
             analyse_module
              (env,
               current_module_name,
               module_name,
               0,
               p_module_expr2$1,
               tt_module_expr2);
           var newrecord$6="unknown primitive:duprecord regular 11";
           newrecord$6[6]=[3,m1[6],m2[6]],0;
           return newrecord$6
          }};
    var
     analyse_typed_tree=
      function(source_file,input_file,parsetree,typedtree)
       {var tree_structure=typedtree[1];
        try
         {var curdir="unknown primitive:caml_sys_getcwd";
          var $js$1=Filename["dirname"];
          var $js$2=$js$1(source_file);
          var $js$3=Filename["basename"];
          var $js$4=$js$3(source_file);
          var match=[0,$js$2,$js$4];
          "unknown primitive:caml_sys_chdir";
          var $js$5=Filename["concat"];
          var complete=$js$5("unknown primitive:caml_sys_getcwd",match[2]);
          "unknown primitive:caml_sys_chdir";
          var complete_source_file=complete}
        catch(exn)
         {var $js$6=exn[1]=Sys_error;
          if($js$6)
           {var $js$7=Pervasives["prerr_endline"];
            $js$7(exn[2]);
            Odoc_global["errors"][0]++;
            var complete_source_file=source_file}
          else
           {var complete_source_file="unknown primitive:reraise"}}
        prepare_file(complete_source_file,input_file);
        var $js$8=String["capitalize"];
        var $js$9=Filename["basename"];
        var $js$10=Filename["chop_extension"];
        var $js$11=$js$10(source_file);
        var $js$12=$js$9($js$11);
        var mod_name=$js$8($js$12);
        var $js$13=My_ir[4];
        var match$1=$js$13(file_name[1],file[1]);
        var
         elements=
          analyse_structure
           (Odoc_env["empty"],
            mod_name,
            match$1[1],
            file[1]["length"],
            parsetree,
            tree_structure);
        var
         included_modules_from_tt=
          tt_get_included_module_list(tree_structure);
        var
         elements2=
          replace_dummy_included_modules(elements,included_modules_from_tt);
        var kind=[0,elements2];
        var $js$14=Location["in_file"];
        var $js$15=$js$14(file_name[1]);
        var $js$16=[0,$js$15];
        var $js$17=[0,$js$16,0];
        var $js$18=Odoc_global["keep_code"][1];
        if($js$18){var $js$19=[0,file[1]]}else{var $js$19=0}
        return [0,
                mod_name,
                [1,0],
                match$1[2],
                0,
                file_name[1],
                kind,
                $js$17,
                0,
                $js$19,
                0,
                0]};
    return [0,
            Sig,
            file,
            file_name,
            get_string_of_file,
            prepare_file,
            get_comments_in_class,
            get_comments_in_module,
            tt_param_info_from_pattern,
            tt_analyse_function_parameters,
            tt_analyse_value,
            tt_name_of_class_expr,
            tt_analyse_method_expression,
            analyse_class_structure,
            analyse_class_kind,
            analyse_class,
            tt_name_from_module_expr,
            tt_get_included_module_list,
            replace_dummy_included_modules,
            filter_module_with_module_type_constraint,
            filter_module_type_with_module_type_constraint,
            filter_module_elements_with_module_type_constraint,
            filter_extension_constructors_with_module_type_constraint,
            analyse_structure,
            analyse_structure_item,
            analyse_module,
            analyse_typed_tree]};
module["exports"]=
{"unknown block:(makeblock 0 (field 2 Typedtree_search/1272) (field 3 Typedtree_search/1272)\n  (field 4 Typedtree_search/1272) (field 5 Typedtree_search/1272)\n  (field 7 Typedtree_search/1272) (field 8 Typedtree_search/1272)\n  (field 9 Typedtree_search/1272) (field 10 Typedtree_search/1272)\n  (field 11 Typedtree_search/1272) (field 12 Typedtree_search/1272)\n  (field 13 Typedtree_search/1272) (field 15 Typedtree_search/1272))":
 unknown block:(makeblock 0 (field 2 Typedtree_search/1272) (field 3 Typedtree_search/1272)
  (field 4 Typedtree_search/1272) (field 5 Typedtree_search/1272)
  (field 7 Typedtree_search/1272) (field 8 Typedtree_search/1272)
  (field 9 Typedtree_search/1272) (field 10 Typedtree_search/1272)
  (field 11 Typedtree_search/1272) (field 12 Typedtree_search/1272)
  (field 13 Typedtree_search/1272) (field 15 Typedtree_search/1272)),
 "unknown block:(function funarg/2004\n  (let (let/2005 = (apply Analyser/2003 funarg/2004))\n    (makeblock 0 (field 25 let/2005))))":
 unknown block:(function funarg/2004
  (let (let/2005 = (apply Analyser/2003 funarg/2004))
    (makeblock 0 (field 25 let/2005))))};
