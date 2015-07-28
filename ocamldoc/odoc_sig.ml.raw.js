var String=require("String");
var Odoc_name=require("Odoc_name");
var Ctype=require("Ctype");
var Odoc_global=require("Odoc_global");
var Odoc_class=require("Odoc_class");
var Odoc_value=require("Odoc_value");
var Pervasives=require("Pervasives");
var List=require("List");
var Btype=require("Btype");
var Odoc_types=require("Odoc_types");
var Types=require("Types");
var Misc=require("Misc");
var Odoc_merge=require("Odoc_merge");
var Odoc_env=require("Odoc_env");
var Filename=require("Filename");
var Odoc_misc=require("Odoc_misc");
var Location=require("Location");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var Odoc_messages=require("Odoc_messages");
var
 add_to_hash=
  function(table,signat)
   {var $js=signat;
    if($js==0)
     {var $js$1=Hashtbl["add"];
      var $js$2=Odoc_name["from_ident"];
      var $js$3=$js$2(signat[1]);
      var $js$4=[2,$js$3];
      return $js$1(table,$js$4,signat)}
    else
     if($js==1)
      {var $js$5=Hashtbl["add"];
       var $js$6=Odoc_name["from_ident"];
       var $js$7=$js$6(signat[1]);
       var $js$8=[3,$js$7];
       return $js$5(table,$js$8,signat)}
     else
      if($js==2)
       {var $js$9=Hashtbl["add"];
        var $js$10=Odoc_name["from_ident"];
        var $js$11=$js$10(signat[1]);
        var $js$12=[6,$js$11];
        return $js$9(table,$js$12,signat)}
      else
       if($js==3)
        {var $js$13=Hashtbl["add"];
         var $js$14=Odoc_name["from_ident"];
         var $js$15=$js$14(signat[1]);
         var $js$16=[0,$js$15];
         return $js$13(table,$js$16,signat)}
       else
        if($js==4)
         {var $js$17=Hashtbl["add"];
          var $js$18=Odoc_name["from_ident"];
          var $js$19=$js$18(signat[1]);
          var $js$20=[1,$js$19];
          return $js$17(table,$js$20,signat)}
        else
         if($js==5)
          {var $js$21=Hashtbl["add"];
           var $js$22=Odoc_name["from_ident"];
           var $js$23=$js$22(signat[1]);
           var $js$24=[4,$js$23];
           return $js$21(table,$js$24,signat)}
         else
          if($js==6)
           {var $js$25=Hashtbl["add"];
            var $js$26=Odoc_name["from_ident"];
            var $js$27=$js$26(signat[1]);
            var $js$28=[5,$js$27];
            return $js$25(table,$js$28,signat)}};
var
 table=
  function(signat)
   {var $js=Hashtbl["create"];
    var t=$js(0,13);
    var $js$1=List["iter"];
    var $js$2=add_to_hash(t);
    $js$1($js$2,signat);
    return t};
var
 search_value=
  function(table$1,name)
   {var $js=Hashtbl["find"];
    var match=$js(table$1,[2,name]);
    var $js$1=match;
    if($js$1==0){return match[2][1]}else{return "unknown primitive:raise"}};
var
 search_extension=
  function(table$1,name)
   {var $js=Hashtbl["find"];
    var match=$js(table$1,[6,name]);
    var $js$1=match;
    if($js$1==2){return match[2]}else{return "unknown primitive:raise"}};
var
 search_type=
  function(table$1,name)
   {var $js=Hashtbl["find"];
    var match=$js(table$1,[3,name]);
    var $js$1=match;
    if($js$1==1){return match[2]}else{return "unknown primitive:raise"}};
var
 search_class=
  function(table$1,name)
   {var $js=Hashtbl["find"];
    var match=$js(table$1,[4,name]);
    var $js$1=match;
    if($js$1==5){return match[2]}else{return "unknown primitive:raise"}};
var
 search_class_type=
  function(table$1,name)
   {var $js=Hashtbl["find"];
    var match=$js(table$1,[5,name]);
    var $js$1=match;
    if($js$1==6){return match[2]}else{return "unknown primitive:raise"}};
var
 search_module=
  function(table$1,name)
   {var $js=Hashtbl["find"];
    var match=$js(table$1,[0,name]);
    var $js$1=match;
    if($js$1==3){return match[2][1]}else{return "unknown primitive:raise"}};
var
 search_module_type=
  function(table$1,name)
   {var $js=Hashtbl["find"];
    var match=$js(table$1,[1,name]);
    var $js$1=match;
    if($js$1==4)
     {var match$1=match[2][1];
      var $js$2=match$1;
      if($js$2){return [0,match$1[1]]}else{return 0}}
    else
     {return "unknown primitive:raise"}};
var
 search_attribute_type=
  function(name,class_sig)
   {var $js=Types["Vars"][22];
    var match=$js(name,class_sig[2]);
    return match[3]};
var
 search_method_type=
  function(name,class_sig)
   {var $js=Odoc_misc["get_fields"];
    var fields=$js(class_sig[1]);
    var $js$1=List["assoc"];
    return $js$1(name,fields)};
var
 Signature_search=
  [0,
   add_to_hash,
   table,
   search_value,
   search_extension,
   search_type,
   search_class,
   search_class_type,
   search_module,
   search_module_type,
   search_attribute_type,
   search_method_type];
var
 Analyser=
  function(My_ir)
   {var file=[0,""];
    var file_name=[0,""];
    var
     get_string_of_file=
      function(the_start,the_end)
       {try
         {var $js=String["sub"];
          return $js(file[1],the_start,the_end-the_start)}
        catch(exn)
         {var $js$1=exn[1]=Invalid_argument;
          if($js$1){return ""}else{return "unknown primitive:reraise"}}};
    var
     prepare_file=
      function(f,input_f)
       {try
         {var $js=Odoc_misc["input_file_as_string"];
          var s=$js(input_f);
          file[1]=s,0;
          return file_name[1]=f,0}
        catch(e){file[1]="",0;return "unknown primitive:reraise"}};
    var
     get_comments_in_class=
      function(pos_start,pos_end)
       {var $js=My_ir[5];
        var $js$1=get_string_of_file(pos_start,pos_end);
        return $js(function(t){return [2,t]},file_name[1],$js$1)};
    var
     get_comments_in_module=
      function(pos_start,pos_end)
       {var $js=My_ir[5];
        var $js$1=get_string_of_file(pos_start,pos_end);
        return $js(function(t){return [9,t]},file_name[1],$js$1)};
    var $js=Odoc_merge["merge_info_opt"];
    var merge_infos=$js(Odoc_types["all_merge_options"]);
    var
     name_comment_from_type_decl=
      function(pos_end,pos_limit,ty_decl)
       {var match=ty_decl[4];
        var $js$1=match;
        if(typeof $js$1=="number")
         {if($js$1==0)
           {var match$1=ty_decl[6];
            var $js$2=match$1;
            if($js$2)
             {var match$2=match$1[1][1];
              var $js$3=match$2;
              if(typeof $js$3=="number")
               {"unknown block:match/2285"}
              else
               {var $js$4=$js$3[0];
                if($js$4==4)
                 {var
                   f=
                    function(param)
                     {var $js$5=param;
                      if($js$5)
                       {var match$3=param[1];
                        var name=match$3[1];
                        var $js$6=name;
                        if($js$6=="")
                         {return "unknown primitive:raise"}
                        else
                         {var match$4=param[2];
                          var ct=match$3[3];
                          var $js$7=match$4;
                          if($js$7)
                           {var ele2=match$4[1];
                            var pos=ct[2][2][4];
                            var pos2=ele2[3][2][1][4];
                            var s=get_string_of_file(pos,pos2);
                            var $js$8=My_ir[3];
                            var match$5=$js$8(file_name[1],s);
                            var $js$9=f([0,ele2,match$4[2]]);
                            return [0,[0,name,match$5[2]],$js$9]}
                          else
                           {var pos$1=ct[2][2][4];
                            var s$1=get_string_of_file(pos$1,pos_end);
                            var $js$10=My_ir[3];
                            var match$6=$js$10(file_name[1],s$1);
                            return [0,[0,name,match$6[2]],0]}}}
                      else
                       {return 0}};
                  var
                   is_named_field=
                    function(field)
                     {var $js$5=field[1];if($js$5==""){return 0}else{return 1}};
                  var $js$5=List["filter"];
                  var $js$6=$js$5(is_named_field,match$2[1]);
                  var $js$7=f($js$6);
                  return [0,0,$js$7]}
                else
                 {var exit=291}}
              switch(exit){case 291:return [0,0,0]}}
            else
             {return [0,0,0]}}
          else
           if($js$1==1){return [0,0,0]}}
        else
         {var $js$8=$js$1[0];
          if($js$8==0)
           {var
             f$1=
              function(acc,cons_core_type_list_list)
               {var $js$9=cons_core_type_list_list;
                if($js$9)
                 {var q=cons_core_type_list_list[2];
                  var pcd=cons_core_type_list_list[1];
                  var $js$10=q;
                  if($js$10)
                   {var pos_end_first=pcd[4][2][4];
                    var pos_start_second=q[1][4][1][4];
                    var s=get_string_of_file(pos_end_first,pos_start_second);
                    var $js$11=My_ir[3];
                    var match$3=$js$11(file_name[1],s);
                    var $js$12=Pervasives["@"];
                    var $js$13=$js$12(acc,[0,[0,pcd[1][1],match$3[2]],0]);
                    return f$1($js$13,q)}
                  else
                   {var s$1=get_string_of_file(pcd[4][2][4],pos_limit);
                    var $js$14=My_ir[3];
                    var match$4=$js$14(file_name[1],s$1);
                    var $js$15=Pervasives["@"];
                    var $js$16=$js$15(acc,[0,[0,pcd[1][1],match$4[2]],0]);
                    return [0,match$4[1],$js$16]}}
                else
                 {return [0,0,acc]}};
            return f$1(0,match[1])}
          else
           if($js$8==1)
            {var
              f$2=
               function(param)
                {var $js$9=param;
                 if($js$9)
                  {var match$3=param[2];
                   var match$4=param[1];
                   var ct=match$4[3];
                   var name=match$4[1];
                   var $js$10=match$3;
                   if($js$10)
                    {var ele2=match$3[1];
                     var pos=ct[2][2][4];
                     var pos2=ele2[3][2][1][4];
                     var s=get_string_of_file(pos,pos2);
                     var $js$11=My_ir[3];
                     var match$5=$js$11(file_name[1],s);
                     var $js$12=f$2([0,ele2,match$3[2]]);
                     return [0,[0,name[1],match$5[2]],$js$12]}
                   else
                    {var pos$1=ct[2][2][4];
                     var s$1=get_string_of_file(pos$1,pos_end);
                     var $js$13=My_ir[3];
                     var match$6=$js$13(file_name[1],s$1);
                     return [0,[0,name[1],match$6[2]],0]}}
                 else
                  {return 0}};
             var $js$9=f$2(match[1]);
             return [0,0,$js$9]}}};
    var
     manifest_structure=
      function(env,name_comment_list,type_expr)
       {var match=type_expr[1];
        var $js$1=match;
        if(typeof $js$1=="number")
         {"unknown block:match/2264"}
        else
         {var $js$2=$js$1[0];
          if($js$2==4)
           {var
             f=
              function(param)
               {var field_name=param[1];
                try
                 {var $js$3=List["assoc"];
                  var comment_opt=$js$3(field_name,name_comment_list)}
                catch(exn)
                 {var $js$4=exn=Not_found;
                  if($js$4)
                   {var comment_opt=0}
                  else
                   {var comment_opt="unknown primitive:reraise"}}
                var $js$5=Odoc_env["subst_type"];
                var $js$6=$js$5(env,param[3]);
                return [0,field_name,$js$6,comment_opt]};
            var $js$3=List["map"];
            var $js$4=Ctype["flatten_fields"];
            var prim=$js$4(match[1]);
            var $js$5=prim[1];
            var $js$6=$js$3(f,$js$5);
            return [1,$js$6]}
          else
           {var exit=279}}
        switch(exit)
         {case 279:
           var $js$7=Odoc_env["subst_type"];
           var $js$8=$js$7(env,type_expr);
           return [0,$js$8]
          }};
    var
     get_type_kind=
      function(env,name_comment_list,type_kind)
       {var $js$1=type_kind;
        if(typeof $js$1=="number")
         {if($js$1==0){return 0}else if($js$1==1){return 1}}
        else
         {var $js$2=$js$1[0];
          if($js$2==0)
           {var
             f=
              function(param)
               {var $js$3=Ident["name"];
                var field_name=$js$3(param[1]);
                try
                 {var $js$4=List["assoc"];
                  var comment_opt=$js$4(field_name,name_comment_list)}
                catch(exn)
                 {var $js$5=exn=Not_found;
                  if($js$5)
                   {var comment_opt=0}
                  else
                   {var comment_opt="unknown primitive:reraise"}}
                var $js$6=Odoc_env["subst_type"];
                var $js$7=$js$6(env,param[3]);
                return [0,field_name,param[2]=1,$js$7,comment_opt]};
            var $js$3=List["map"];
            var $js$4=$js$3(f,type_kind[1]);
            return [1,$js$4]}
          else
           if($js$2==1)
            {var
              f$1=
               function(param)
                {var $js$5=Ident["name"];
                 var constructor_name=$js$5(param[1]);
                 try
                  {var $js$6=List["assoc"];
                   var comment_opt=$js$6(constructor_name,name_comment_list)}
                 catch(exn)
                  {var $js$7=exn=Not_found;
                   if($js$7)
                    {var comment_opt=0}
                   else
                    {var comment_opt="unknown primitive:reraise"}}
                 var $js$8=List["map"];
                 var $js$9=Odoc_env["subst_type"];
                 var $js$10=$js$9(env);
                 var $js$11=$js$8($js$10,param[2]);
                 var $js$12=Misc["may_map"];
                 var $js$13=Odoc_env["subst_type"];
                 var $js$14=$js$13(env);
                 var $js$15=$js$12($js$14,param[3]);
                 return [0,constructor_name,$js$11,$js$15,comment_opt]};
             var $js$5=List["map"];
             var $js$6=$js$5(f$1,type_kind[1]);
             return [0,$js$6]}}};
    var
     erased_names_of_constraints=
      function(constraints,acc)
       {var $js$1=List["fold_right"];
        return $js$1
                (function(constraint_,acc$1)
                  {var $js$2=constraint_;
                   if($js$2==0)
                    {var exit=264}
                   else
                    if($js$2==1)
                     {var exit=264}
                    else
                     if($js$2==2)
                      {var s=constraint_[1][1];var exit=265}
                     else
                      if($js$2==3){var s=constraint_[1];var exit=265}
                   switch(exit)
                    {case 264:return acc$1;
                     case 265:
                      var $js$3=Odoc_name["Set"][4];return $js$3(s[1],acc$1)
                     }},
                 constraints,
                 acc)};
    var
     filter_out_erased_items_from_signature=
      function(erased,signature)
       {var $js$1=Odoc_name["Set"][2];
        var $js$2=$js$1(erased);
        if($js$2)
         {return signature}
        else
         {var $js$3=List["fold_right"];
          return $js$3
                  (function(sig_item,acc)
                    {var
                      take_item=
                       function(psig_desc)
                        {return [0,[0,psig_desc,sig_item[2]],acc]};
                     var tp=sig_item[1];
                     var $js$4=tp;
                     if($js$4==1)
                      {var $js$5=List["filter"];
                       var
                        types=
                         $js$5
                          (function(td)
                            {var $js$6=Odoc_name["Set"][3];
                             var $js$7=$js$6(td[1][1],erased);
                             return !$js$7},
                           tp[1]);
                       var $js$6=types;
                       if($js$6){return take_item([1,types])}else{return acc}}
                     else
                      if($js$4==4)
                       {var exit=261}
                      else
                       if($js$4==5)
                        {var $js$7=List["filter"];
                         var
                          mods=
                           $js$7
                            (function(pmd)
                              {var $js$8=Odoc_name["Set"][3];
                               var $js$9=$js$8(pmd[1][1],erased);
                               return !$js$9},
                             tp[1]);
                         var $js$8=mods;
                         if($js$8){return take_item([5,mods])}else{return acc}}
                       else
                        if($js$4==6){var exit=261}else{return take_item(tp)}
                     switch(exit)
                      {case 261:
                        var $js$9=Odoc_name["Set"][3];
                        var $js$10=$js$9(tp[1][1][1],erased);
                        if($js$10){return acc}else{return take_item(tp)}
                       }},
                   signature,
                   0)}};
    var
     analyse_class_elements=
      function
       (env,
        current_class_name,
        last_pos,
        pos_limit,
        class_type_field_list,
        class_signature)
       {var
         get_pos_limit2=
          function(q)
           {var $js$1=q;
            if($js$1)
             {var ele2=q[1];
              var loc=ele2[2];
              var match=ele2[1];
              var $js$2=match;
              if($js$2==0)
               {return match[1][2][1][4]}
              else
               if($js$2==5)
                {return "unknown primitive:raise"}
               else
                {return loc[1][4]}}
            else
             {return pos_limit}};
        var
         get_method=
          function(name,comment_opt,private_flag,loc,q)
           {var $js$1=Odoc_name["concat"];
            var complete_name=$js$1(current_class_name,name);
            try
             {var $js$2=Signature_search[11];
              var typ=$js$2(name,class_signature)}
            catch(exn)
             {var $js$3=exn=Not_found;
              if($js$3)
               {var $js$4=Odoc_messages["method_type_not_found"];
                var $js$5=$js$4(current_class_name,name);
                var $js$6=[0,Failure,$js$5];
                throw $js$6}
              else
               {var typ="unknown primitive:reraise"}}
            var $js$7=Odoc_env["subst_type"];
            var subst_typ=$js$7(env,typ);
            var $js$8=Odoc_value["dummy_parameter_list"];
            var $js$9=$js$8(subst_typ);
            var
             $js$10=
              [0,complete_name,comment_opt,subst_typ,0,$js$9,0,[0,0,[0,loc]]];
            var met=[0,$js$10,private_flag=0,0];
            var pos_limit2=get_pos_limit2(q);
            var pos_end=loc[2][4];
            var $js$11=My_ir[3];
            var $js$12=get_string_of_file(pos_end,pos_limit2);
            var match=$js$11(file_name[1],$js$12);
            var $js$13=merge_infos(met[1][2],match[2]);
            met[1][2]=$js$13,0;
            var $js$14=Odoc_value["update_value_parameters_text"];
            $js$14(met[1]);
            return [0,met,match[1]]};
        var
         f=
          function(last_pos$1,class_type_field_list$1)
           {var $js$1=class_type_field_list$1;
            if($js$1)
             {var q=class_type_field_list$1[2];
              var item=class_type_field_list$1[1];
              var loc=item[2];
              var match=item[1];
              var $js$2=match;
              if($js$2==0)
               {var class_type=match[1];
                var loc$1=class_type[2];
                var match$1=get_comments_in_class(last_pos$1,loc$1[1][4]);
                var pos_limit2=get_pos_limit2(q);
                var pos_end=loc$1[2][4];
                var $js$3=My_ir[3];
                var $js$4=get_string_of_file(pos_end,pos_limit2);
                var match$2=$js$3(file_name[1],$js$4);
                var comment_opt2=merge_infos(match$1[1],match$2[2]);
                var $js$5=comment_opt2;
                if($js$5){var text_opt=comment_opt2[1][1]}else{var text_opt=0}
                var match$3=class_type[1];
                var $js$6=match$3;
                if($js$6==0)
                 {var $js$7=Odoc_name["from_longident"];
                  var name=$js$7(match$3[1][1]);
                  var $js$8=Odoc_env["full_class_or_class_type_name"];
                  var $js$9=$js$8(env,name);
                  var inh=[0,$js$9,0,text_opt]}
                else
                 if($js$6==1)
                  {var exit=232}
                 else
                  if($js$6==2)
                   {var exit=232}
                  else
                   if($js$6==3){var inh="unknown primitive:raise"}
                switch(exit)
                 {case 232:var inh=[0,Odoc_messages["object_end"],0,text_opt]}
                var match$4=f(pos_end+match$2[1],q);
                var $js$10=Pervasives["@"];
                var $js$11=$js$10(match$1[2],match$4[2]);
                return [0,[0,inh,match$4[1]],$js$11]}
              else
               if($js$2==1)
                {var match$5=match[1];
                 var name$1=match$5[1];
                 var match$6=get_comments_in_class(last_pos$1,loc[1][4]);
                 var $js$12=Odoc_name["concat"];
                 var complete_name=$js$12(current_class_name,name$1);
                 try
                  {var $js$13=Signature_search[10];
                   var typ=$js$13(name$1,class_signature)}
                 catch(exn)
                  {var $js$14=exn=Not_found;
                   if($js$14)
                    {var $js$15=Odoc_messages["attribute_type_not_found"];
                     var $js$16=$js$15(current_class_name,name$1);
                     var $js$17=[0,Failure,$js$16];
                     throw $js$17}
                   else
                    {var typ="unknown primitive:reraise"}}
                 var $js$18=Odoc_env["subst_type"];
                 var subst_typ=$js$18(env,typ);
                 var
                  att=
                   [0,
                    [0,complete_name,match$6[1],subst_typ,0,0,0,[0,0,[0,loc]]],
                    match$5[2]=1,
                    match$5[3]=0];
                 var pos_limit2$1=get_pos_limit2(q);
                 var pos_end$1=loc[2][4];
                 var $js$19=My_ir[3];
                 var $js$20=get_string_of_file(pos_end$1,pos_limit2$1);
                 var match$7=$js$19(file_name[1],$js$20);
                 var $js$21=merge_infos(att[1][2],match$7[2]);
                 att[1][2]=$js$21,0;
                 var match$8=f(pos_end$1+match$7[1],q);
                 var $js$22=Pervasives["@"];
                 var $js$23=$js$22(match$6[2],[0,[0,att],match$8[2]]);
                 return [0,match$8[1],$js$23]}
               else
                if($js$2==2)
                 {var match$9=match[1];
                  var match$10=get_comments_in_class(last_pos$1,loc[1][4]);
                  var
                   match$11=
                    get_method(match$9[1],match$10[1],match$9[2],loc,q);
                  var met=match$11[1];
                  var $js$24=match$9[3]!=0;
                  if($js$24){var met2=met}else{var met2=[0,met[1],met[2],1]}
                  var match$12=f(loc[2][4]+match$11[2],q);
                  var $js$25=Pervasives["@"];
                  var $js$26=$js$25(match$10[2],[0,[1,met2],match$12[2]]);
                  return [0,match$12[1],$js$26]}
                else
                 if($js$2==3)
                  {var match$13=get_comments_in_class(last_pos$1,loc[1][4]);
                   var match$14=f(loc[2][4],q);
                   var $js$27=Pervasives["@"];
                   var $js$28=$js$27(match$13[2],match$14[2]);
                   return [0,match$14[1],$js$28]}
                 else
                  if($js$2==4)
                   {var match$15=get_comments_in_class(last_pos$1,loc[1][4]);
                    var match$16=f(loc[2][4],q);
                    var $js$29=Pervasives["@"];
                    var $js$30=$js$29(match$15[2],match$16[2]);
                    return [0,match$16[1],$js$30]}
                  else
                   if($js$2==5){return "unknown primitive:raise"}}
            else
             {var s=get_string_of_file(last_pos$1,pos_limit);
              var $js$31=My_ir[1];
              var match$17=$js$31(file_name[1],s);
              var $js$32=List["fold_left"];
              var
               ele_comments=
                $js$32
                 (function(acc,sc)
                   {var match$18=sc[1];
                    var $js$33=match$18;
                    if($js$33)
                     {var $js$34=Pervasives["@"];
                      return $js$34(acc,[0,[2,match$18[1]],0])}
                    else
                     {return acc}},
                  0,
                  match$17[2]);
              return [0,0,ele_comments]}};
        return f(last_pos,class_type_field_list)};
    var
     analyse_parsetree=
      function
       (env,signat,current_module_name,last_pos,pos_limit,sig_item_list)
       {var $js$1=Signature_search[2];
        var table$1=$js$1(signat);
        var
         f=
          function(acc_eles,acc_env,last_pos$1,param)
           {var $js$2=param;
            if($js$2)
             {var q=param[2];
              var ele=param[1];
              var match=get_comments_in_module(last_pos$1,ele[2][1][4]);
              var $js$3=q;
              if($js$3){var $js$4=q[1][2][1][4]}else{var $js$4=pos_limit}
              var
               match$1=
                analyse_signature_item_desc
                 (acc_env,
                  signat,
                  table$1,
                  current_module_name,
                  ele[2],
                  ele[2][1][4],
                  ele[2][2][4],
                  $js$4,
                  match[1],
                  ele[1]);
              var $js$5=Pervasives["@"];
              var $js$6=Pervasives["@"];
              var $js$7=$js$6(match[2],match$1[3]);
              var $js$8=$js$5(acc_eles,$js$7);
              return f($js$8,match$1[2],ele[2][2][4]+match$1[1],q)}
            else
             {var s=get_string_of_file(last_pos$1,pos_limit);
              var $js$9=My_ir[1];
              var match$2=$js$9(file_name[1],s);
              var $js$10=List["fold_left"];
              var
               ele_comments=
                $js$10
                 (function(acc,sc)
                   {var match$3=sc[1];
                    var $js$11=match$3;
                    if($js$11)
                     {var $js$12=Pervasives["@"];
                      return $js$12(acc,[0,[9,match$3[1]],0])}
                    else
                     {return acc}},
                  0,
                  match$2[2]);
              var $js$11=Pervasives["@"];
              return $js$11(acc_eles,ele_comments)}};
        return f(0,env,last_pos,sig_item_list)};
    var
     analyse_signature_item_desc=
      function
       (env,
        signat,
        table$1,
        current_module_name,
        sig_item_loc,
        pos_start_ele,
        pos_end_ele,
        pos_limit,
        comment_opt,
        sig_item_desc)
       {var $js$1=sig_item_desc;
        if($js$1==0)
         {var name_pre=sig_item_desc[1][1];
          try
           {var $js$2=Signature_search[3];
            var type_expr=$js$2(table$1,name_pre[1])}
          catch(exn)
           {var $js$3=exn=Not_found;
            if($js$3)
             {var $js$4=Odoc_messages["value_not_found"];
              var $js$5=$js$4(current_module_name,name_pre[1]);
              var $js$6=[0,Failure,$js$5];
              throw $js$6}
            else
             {var type_expr="unknown primitive:reraise"}}
          var $js$7=Odoc_name["parens_if_infix"];
          var name=$js$7(name_pre[1]);
          var $js$8=Odoc_env["subst_type"];
          var subst_typ=$js$8(env,type_expr);
          var $js$9=Odoc_name["concat"];
          var $js$10=$js$9(current_module_name,name);
          var $js$11=Odoc_value["dummy_parameter_list"];
          var $js$12=$js$11(subst_typ);
          var
           v=
            [0,$js$10,comment_opt,subst_typ,0,$js$12,0,[0,0,[0,sig_item_loc]]];
          var $js$13=My_ir[3];
          var $js$14=get_string_of_file(pos_end_ele,pos_limit);
          var match=$js$13(file_name[1],$js$14);
          var $js$15=merge_infos(v[2],match[2]);
          v[2]=$js$15,0;
          var $js$16=Odoc_value["update_value_parameters_text"];
          $js$16(v);
          var $js$17=Odoc_env["add_value"];
          var new_env=$js$17(env,v[1]);
          return [0,match[1],new_env,[0,[5,v],0]]}
        else
         if($js$1==1)
          {var name_type_decl_list=sig_item_desc[1];
           var $js$18=List["fold_left"];
           var
            extended_env=
             $js$18
              (function(acc_env,td)
                {var $js$19=Odoc_name["concat"];
                 var complete_name=$js$19(current_module_name,td[1][1]);
                 var $js$20=Odoc_env["add_type"];
                 return $js$20(acc_env,complete_name)},
               env,
               name_type_decl_list);
           var $js$19=List["exists"];
           var
            is_nonrec=
             $js$19
              (function(td)
                {var $js$20=List["exists"];
                 return $js$20
                         (function(param)
                           {return "unknown primitive:caml_string_equal"},
                          td[7])},
               name_type_decl_list);
           var $js$20=is_nonrec;
           if($js$20){var env$1=env}else{var env$1=extended_env}
           var
            f=
             function(*opt*,acc_maybe_more,last_pos,name_type_decl_list$1)
              {var $js$21=*opt*;
               if($js$21){var first=*opt*[1]}else{var first=0}
               var $js$22=name_type_decl_list$1;
               if($js$22)
                {var q=name_type_decl_list$1[2];
                 var type_decl=name_type_decl_list$1[1];
                 var name$1=type_decl[1];
                 var $js$23=first;
                 if($js$23)
                  {var match$1=[0,comment_opt,0]}
                 else
                  {var
                    match$1=
                     get_comments_in_module(last_pos,type_decl[8][1][4])}
                 var $js$24=q;
                 if($js$24)
                  {var pos_limit2=q[1][8][1][4]}
                 else
                  {var pos_limit2=pos_limit}
                 var
                  match$2=
                   name_comment_from_type_decl
                    (type_decl[8][2][4],pos_limit2,type_decl);
                 var name_comment_list=match$2[2];
                 var maybe_more=match$2[1];
                 try
                  {var $js$25=Signature_search[5];
                   var sig_type_decl=$js$25(table$1,name$1[1])}
                 catch(exn$1)
                  {var $js$26=exn$1=Not_found;
                   if($js$26)
                    {var $js$27=Odoc_messages["type_not_found"];
                     var $js$28=$js$27(current_module_name,name$1[1]);
                     var $js$29=[0,Failure,$js$28];
                     throw $js$29}
                   else
                    {var sig_type_decl="unknown primitive:reraise"}}
                 var
                  type_kind=
                   get_type_kind(env$1,name_comment_list,sig_type_decl[3]);
                 var loc_start=type_decl[8][1][4];
                 var new_end=type_decl[8][2][4]+maybe_more;
                 var $js$30=Odoc_name["concat"];
                 var $js$31=$js$30(current_module_name,name$1[1]);
                 var $js$32=List["map2"];
                 var
                  $js$33=
                   $js$32
                    (function(p,v$1)
                      {var $js$34=Types["Variance"][11];
                       var match$3=$js$34(v$1);
                       var $js$35=Odoc_env["subst_type"];
                       var $js$36=$js$35(env$1,p);
                       return [0,$js$36,match$3[1],match$3[2]]},
                     sig_type_decl[1],
                     sig_type_decl[6]);
                 var match$3=sig_type_decl[5];
                 var $js$34=match$3;
                 if($js$34)
                  {var
                    $js$35=
                     manifest_structure(env$1,name_comment_list,match$3[1]);
                   var $js$36=[0,$js$35]}
                 else
                  {var $js$36=0}
                 var $js$37=Odoc_global["keep_code"][1];
                 if($js$37)
                  {var $js$38=get_string_of_file(loc_start,new_end);
                   var $js$39=[0,$js$38]}
                 else
                  {var $js$39=0}
                 var
                  new_type=
                   [0,
                    $js$31,
                    match$1[1],
                    $js$33,
                    type_kind,
                    sig_type_decl[4],
                    $js$36,
                    [0,0,[0,sig_item_loc]],
                    $js$39];
                 var $js$40=My_ir[3];
                 var $js$41=get_string_of_file(new_end,pos_limit2);
                 var match$4=$js$40(file_name[1],$js$41);
                 var maybe_more2=match$4[1];
                 var $js$42=merge_infos(new_type[2],match$4[2]);
                 new_type[2]=$js$42,0;
                 var
                  match$5=
                   f(0,maybe_more+maybe_more2,new_end+maybe_more2,q);
                 var $js$43=Pervasives["@"];
                 var $js$44=Pervasives["@"];
                 var $js$45=$js$44(match$1[2],[0,[8,new_type],0]);
                 var $js$46=$js$43($js$45,match$5[2]);
                 return [0,match$5[1],$js$46]}
               else
                {return [0,acc_maybe_more,0]}};
           var match$1=f([0,1],0,pos_start_ele,name_type_decl_list);
           return [0,match$1[1],extended_env,match$1[2]]}
         else
          if($js$1==2)
           {var $js$21=List["fold_left"];
            var
             match$2=
              $js$21
               (function(param,param$1)
                 {var name$1=param$1[1][1];
                  var $js$22=Odoc_name["concat"];
                  var complete_name=$js$22(current_module_name,name$1);
                  var $js$23=Odoc_env["add_extension"];
                  var env_acc=$js$23(param[1],complete_name);
                  try
                   {var $js$24=Signature_search[4];
                    var types_ext=$js$24(table$1,name$1)}
                  catch(exn$1)
                   {var $js$25=exn$1=Not_found;
                    if($js$25)
                     {var $js$26=Odoc_messages["extension_not_found"];
                      var $js$27=$js$26(current_module_name,name$1);
                      var $js$28=[0,Failure,$js$27];
                      throw $js$28}
                    else
                     {var types_ext="unknown primitive:reraise"}}
                  return [0,
                          env_acc,
                          [0,[0,name$1,types_ext],param[2]],
                          [0,types_ext]]},
                [0,env,0,0],
                sig_item_desc[1][3]);
            var last_ext=match$2[3];
            var new_env$1=match$2[1];
            var $js$22=last_ext;
            if($js$22)
             {var ext=last_ext[1];var match$3=[0,ext[1],ext[2],ext[5]]}
            else
             {var match$3="unknown primitive:raise"}
            var $js$23=Odoc_env["full_type_name"];
            var $js$24=Odoc_name["from_path"];
            var $js$25=$js$24(match$3[1]);
            var $js$26=$js$23(new_env$1,$js$25);
            var $js$27=List["map"];
            var $js$28=Odoc_env["subst_type"];
            var $js$29=$js$28(new_env$1);
            var $js$30=$js$27($js$29,match$3[2]);
            var $js$31=Odoc_global["keep_code"][1];
            if($js$31)
             {var $js$32=get_string_of_file(pos_start_ele,pos_end_ele);
              var $js$33=[0,$js$32]}
            else
             {var $js$33=0}
            var
             new_te=
              [0,
               comment_opt,
               $js$26,
               $js$30,
               match$3[3],
               0,
               [0,0,[0,sig_item_loc]],
               $js$33];
            var
             analyse_extension_constructors=
              function(maybe_more,exts_acc,types_ext_list)
               {var $js$34=types_ext_list;
                if($js$34)
                 {var q=types_ext_list[2];
                  var match$4=types_ext_list[1];
                  var types_ext=match$4[2];
                  var ext_loc_end=types_ext[6][2][4];
                  var $js$35=Odoc_name["concat"];
                  var $js$36=$js$35(current_module_name,match$4[1]);
                  var $js$37=List["map"];
                  var $js$38=Odoc_env["subst_type"];
                  var $js$39=$js$38(new_env$1);
                  var $js$40=$js$37($js$39,types_ext[3]);
                  var $js$41=Misc["may_map"];
                  var $js$42=Odoc_env["subst_type"];
                  var $js$43=$js$42(new_env$1);
                  var $js$44=$js$41($js$43,types_ext[4]);
                  var
                   new_x=
                    [0,$js$36,$js$40,$js$44,new_te,0,[0,0,[0,types_ext[6]]],0];
                  var $js$45=q;
                  if($js$45)
                   {var pos_limit2=q[1][2][6][1][4]}
                  else
                   {var pos_limit2=pos_limit}
                  var s=get_string_of_file(ext_loc_end,pos_limit2);
                  var $js$46=My_ir[3];
                  var match$5=$js$46(file_name[1],s);
                  new_x[7]=match$5[2],0;
                  return analyse_extension_constructors
                          (match$5[1],[0,new_x,exts_acc],q)}
                else
                 {var $js$47=List["rev"];
                  var $js$48=$js$47(exts_acc);
                  return [0,maybe_more,$js$48]}};
            var match$4=analyse_extension_constructors(0,0,match$2[2]);
            var maybe_more=match$4[1];
            new_te[5]=match$4[2],0;
            var $js$34=My_ir[3];
            var $js$35=get_string_of_file(pos_end_ele+maybe_more,pos_limit);
            var match$5=$js$34(file_name[1],$js$35);
            var $js$36=merge_infos(new_te[1],match$5[2]);
            new_te[1]=$js$36,0;
            return [0,maybe_more+match$5[1],new_env$1,[0,[6,new_te],0]]}
          else
           if($js$1==3)
            {var name$1=sig_item_desc[1][1];
             try
              {var $js$37=Signature_search[4];
               var types_ext=$js$37(table$1,name$1[1])}
             catch(exn$1)
              {var $js$38=exn$1=Not_found;
               if($js$38)
                {var $js$39=Odoc_messages["exception_not_found"];
                 var $js$40=$js$39(current_module_name,name$1[1]);
                 var $js$41=[0,Failure,$js$40];
                 throw $js$41}
               else
                {var types_ext="unknown primitive:reraise"}}
             var $js$42=Odoc_name["concat"];
             var $js$43=$js$42(current_module_name,name$1[1]);
             var $js$44=List["map"];
             var $js$45=Odoc_env["subst_type"];
             var $js$46=$js$45(env);
             var $js$47=$js$44($js$46,types_ext[3]);
             var $js$48=Misc["may_map"];
             var $js$49=Odoc_env["subst_type"];
             var $js$50=$js$49(env);
             var $js$51=$js$48($js$50,types_ext[4]);
             var $js$52=Odoc_global["keep_code"][1];
             if($js$52)
              {var $js$53=get_string_of_file(pos_start_ele,pos_end_ele);
               var $js$54=[0,$js$53]}
             else
              {var $js$54=0}
             var
              e=
               [0,
                $js$43,
                comment_opt,
                $js$47,
                $js$51,
                0,
                [0,0,[0,sig_item_loc]],
                $js$54];
             var $js$55=My_ir[3];
             var $js$56=get_string_of_file(pos_end_ele,pos_limit);
             var match$6=$js$55(file_name[1],$js$56);
             var $js$57=merge_infos(e[2],match$6[2]);
             e[2]=$js$57,0;
             var $js$58=Odoc_env["add_extension"];
             var new_env$2=$js$58(env,e[1]);
             return [0,match$6[1],new_env$2,[0,[7,e],0]]}
           else
            if($js$1==4)
             {var match$7=sig_item_desc[1];
              var module_type=match$7[2];
              var name$2=match$7[1];
              var $js$59=Odoc_name["concat"];
              var complete_name=$js$59(current_module_name,name$2[1]);
              try
               {var $js$60=Signature_search[8];
                var sig_module_type=$js$60(table$1,name$2[1])}
              catch(exn$2)
               {var $js$61=exn$2=Not_found;
                if($js$61)
                 {var $js$62=Odoc_messages["module_not_found"];
                  var $js$63=$js$62(current_module_name,name$2[1]);
                  var $js$64=[0,Failure,$js$63];
                  throw $js$64}
                else
                 {var sig_module_type="unknown primitive:reraise"}}
              var
               module_kind=
                analyse_module_kind
                 (0,env,complete_name,module_type,sig_module_type);
              var $js$65=Odoc_global["keep_code"][1];
              if($js$65)
               {var loc=module_type[2];
                var st=loc[1][4];
                var en=loc[2][4];
                var $js$66=get_string_of_file(st,en);
                var code_intf=[0,$js$66]}
              else
               {var code_intf=0}
              var
               new_module=
                [0,
                 complete_name,
                 sig_module_type,
                 comment_opt,
                 1,
                 file_name[1],
                 module_kind,
                 [0,0,[0,sig_item_loc]],
                 0,
                 0,
                 code_intf,
                 0];
              var $js$67=My_ir[3];
              var $js$68=get_string_of_file(pos_end_ele,pos_limit);
              var match$8=$js$67(file_name[1],$js$68);
              var $js$69=merge_infos(new_module[3],match$8[2]);
              new_module[3]=$js$69,0;
              var $js$70=Odoc_env["add_module"];
              var new_env$3=$js$70(env,new_module[1]);
              var match$9=new_module[2];
              var $js$71=match$9;
              if($js$71==1)
               {var $js$72=Odoc_env["add_signature"];
                var $js$73=Odoc_name["simple"];
                var $js$74=$js$73(new_module[1]);
                var $js$75=[0,$js$74];
                var new_env2=$js$72(new_env$3,new_module[1],$js$75,match$9[1])}
              else
               {var new_env2=new_env$3}
              return [0,match$8[1],new_env2,[0,[0,new_module],0]]}
            else
             if($js$1==5)
              {var decls=sig_item_desc[1];
               var $js$76=List["fold_left"];
               var
                new_env$4=
                 $js$76
                  (function(acc_env,param)
                    {var name$3=param[1][1];
                     var $js$77=Odoc_name["concat"];
                     var complete_name$1=$js$77(current_module_name,name$3);
                     var $js$78=Odoc_env["add_module"];
                     var e$1=$js$78(acc_env,complete_name$1);
                     try
                      {var $js$79=Signature_search[8];
                       var sig_module_type$1=$js$79(table$1,name$3)}
                     catch(exn$3)
                      {var $js$80=exn$3=Not_found;
                       if($js$80)
                        {var $js$81=Odoc_messages["module_not_found"];
                         var $js$82=$js$81(current_module_name,name$3);
                         var $js$83=[0,Failure,$js$82];
                         throw $js$83}
                       else
                        {var sig_module_type$1="unknown primitive:reraise"}}
                     var $js$84=sig_module_type$1;
                     if($js$84==1)
                      {var $js$85=Odoc_env["add_signature"];
                       return $js$85
                               (e$1,complete_name$1,[0,name$3],sig_module_type$1[1])}
                     else
                      {return e$1}},
                   env,
                   decls);
               var
                f$1=
                 function(*opt*,acc_maybe_more,last_pos,name_mtype_list)
                  {var $js$77=*opt*;
                   if($js$77){var first=*opt*[1]}else{var first=0}
                   var $js$78=name_mtype_list;
                   if($js$78)
                    {var q=name_mtype_list[2];
                     var match$10=name_mtype_list[1];
                     var modtype=match$10[2];
                     var name$3=match$10[1];
                     var $js$79=Odoc_name["concat"];
                     var complete_name$1=$js$79(current_module_name,name$3[1]);
                     var loc$1=modtype[2];
                     var loc_start=loc$1[1][4];
                     var loc_end=loc$1[2][4];
                     var $js$80=first;
                     if($js$80)
                      {var match$11=[0,comment_opt,0]}
                     else
                      {var match$11=get_comments_in_module(last_pos,loc_start)}
                     var $js$81=q;
                     if($js$81)
                      {var pos_limit2=loc$1[1][4]}
                     else
                      {var pos_limit2=pos_limit}
                     try
                      {var $js$82=Signature_search[8];
                       var sig_module_type$1=$js$82(table$1,name$3[1])}
                     catch(exn$3)
                      {var $js$83=exn$3=Not_found;
                       if($js$83)
                        {var $js$84=Odoc_messages["module_not_found"];
                         var $js$85=$js$84(current_module_name,name$3[1]);
                         var $js$86=[0,Failure,$js$85];
                         throw $js$86}
                       else
                        {var sig_module_type$1="unknown primitive:reraise"}}
                     var
                      module_kind$1=
                       analyse_module_kind
                        (0,new_env$4,complete_name$1,modtype,sig_module_type$1);
                     var $js$87=Odoc_global["keep_code"][1];
                     if($js$87)
                      {var st$1=loc$1[1][4];
                       var en$1=loc$1[2][4];
                       var $js$88=get_string_of_file(st$1,en$1);
                       var code_intf$1=[0,$js$88]}
                     else
                      {var code_intf$1=0}
                     var
                      new_module$1=
                       [0,
                        complete_name$1,
                        sig_module_type$1,
                        match$11[1],
                        1,
                        file_name[1],
                        module_kind$1,
                        [0,0,[0,loc$1]],
                        0,
                        0,
                        code_intf$1,
                        0];
                     var $js$89=My_ir[3];
                     var $js$90=get_string_of_file(loc_end,pos_limit2);
                     var match$12=$js$89(file_name[1],$js$90);
                     var maybe_more$1=match$12[1];
                     var $js$91=merge_infos(new_module$1[3],match$12[2]);
                     new_module$1[3]=$js$91,0;
                     var match$13=f$1(0,maybe_more$1,loc_end+maybe_more$1,q);
                     var $js$92=Pervasives["@"];
                     var $js$93=Pervasives["@"];
                     var $js$94=$js$93(match$11[2],[0,[0,new_module$1],0]);
                     var $js$95=$js$92($js$94,match$13[2]);
                     return [0,match$13[1],$js$95]}
                   else
                    {return [0,acc_maybe_more,0]}};
               var match$10=f$1([0,1],0,pos_start_ele,decls);
               return [0,match$10[1],new_env$4,match$10[2]]}
             else
              if($js$1==6)
               {var match$11=sig_item_desc[1];
                var pmodtype_decl=match$11[2];
                var name$3=match$11[1];
                var $js$77=Odoc_name["concat"];
                var complete_name$1=$js$77(current_module_name,name$3[1]);
                try
                 {var $js$78=Signature_search[9];
                  var sig_mtype=$js$78(table$1,name$3[1])}
                catch(exn$3)
                 {var $js$79=exn$3=Not_found;
                  if($js$79)
                   {var $js$80=Odoc_messages["module_type_not_found"];
                    var $js$81=$js$80(current_module_name,name$3[1]);
                    var $js$82=[0,Failure,$js$81];
                    throw $js$82}
                  else
                   {var sig_mtype="unknown primitive:reraise"}}
                var $js$83=pmodtype_decl;
                if($js$83)
                 {var $js$84=sig_mtype;
                  if($js$84)
                   {var
                     $js$85=
                      analyse_module_type_kind
                       (0,env,complete_name$1,pmodtype_decl[1],sig_mtype[1]);
                    var module_type_kind=[0,$js$85]}
                  else
                   {var module_type_kind=0}}
                else
                 {var module_type_kind=0}
                var
                 mt=
                  [0,
                   complete_name$1,
                   comment_opt,
                   sig_mtype,
                   1,
                   file_name[1],
                   module_type_kind,
                   [0,0,[0,sig_item_loc]]];
                var $js$86=My_ir[3];
                var $js$87=get_string_of_file(pos_end_ele,pos_limit);
                var match$12=$js$86(file_name[1],$js$87);
                var $js$88=merge_infos(mt[2],match$12[2]);
                mt[2]=$js$88,0;
                var $js$89=Odoc_env["add_module_type"];
                var new_env$5=$js$89(env,mt[1]);
                var $js$90=sig_mtype;
                if($js$90)
                 {var match$13=sig_mtype[1];
                  var $js$91=match$13;
                  if($js$91==1)
                   {var $js$92=Odoc_env["add_signature"];
                    var $js$93=Odoc_name["simple"];
                    var $js$94=$js$93(mt[1]);
                    var $js$95=[0,$js$94];
                    var new_env2$1=$js$92(new_env$5,mt[1],$js$95,match$13[1])}
                  else
                   {var exit=102}}
                else
                 {var exit=102}
                switch(exit){case 102:var new_env2$1=new_env$5}
                return [0,match$12[1],new_env2$1,[0,[1,mt],0]]}
              else
               if($js$1==7)
                {var $js$96=comment_opt;
                 if($js$96)
                  {var match$14=comment_opt[1][1];
                   var $js$97=match$14;
                   if($js$97)
                    {var ele_comments=[0,[9,match$14[1]],0]}
                   else
                    {var ele_comments=0}}
                 else
                  {var ele_comments=0}
                 return [0,0,env,ele_comments]}
               else
                if($js$1==8)
                 {var
                   f$2=
                    function(param)
                     {var $js$98=param;
                      if($js$98==0)
                       {var exit$1=115}
                      else
                       if($js$98==1)
                        {return "??"}
                       else
                        if($js$98==2)
                         {return "??"}
                        else
                         if($js$98==3)
                          {return f$2(param[1][1])}
                         else
                          if($js$98==4)
                           {var match$15=param[1][1];
                            var $js$99=match$15;
                            if($js$99==0)
                             {var $js$100=Odoc_name["from_longident"];
                              return $js$100(match$15[1][1])}
                            else
                             {return "??"}}
                          else
                           if($js$98==5)
                            {return "unknown primitive:raise"}
                           else
                            if($js$98==6){var exit$1=115}
                      switch(exit$1)
                       {case 115:
                         var $js$101=Odoc_name["from_longident"];
                         return $js$101(param[1][1])
                        }};
                  var name$4=f$2(sig_item_desc[1][1][1]);
                  var $js$98=Odoc_env["full_module_or_module_type_name"];
                  var full_name=$js$98(env,name$4);
                  var im=[0,full_name,0,comment_opt];
                  return [0,0,env,[0,[2,im],0]]}
                else
                 if($js$1==9)
                  {var class_description_list=sig_item_desc[1];
                   var $js$99=List["fold_left"];
                   var
                    new_env$6=
                     $js$99
                      (function(acc_env,class_desc)
                        {var $js$100=Odoc_name["concat"];
                         var
                          complete_name$2=
                           $js$100(current_module_name,class_desc[3][1]);
                         var $js$101=Odoc_env["add_class"];
                         return $js$101(acc_env,complete_name$2)},
                       env,
                       class_description_list);
                   var
                    f$3=
                     function
                      (*opt*,acc_maybe_more,last_pos,class_description_list$1)
                      {var $js$100=*opt*;
                       if($js$100){var first=*opt*[1]}else{var first=0}
                       var $js$101=class_description_list$1;
                       if($js$101)
                        {var q=class_description_list$1[2];
                         var class_desc=class_description_list$1[1];
                         var $js$102=first;
                         if($js$102)
                          {var match$15=[0,comment_opt,0]}
                         else
                          {var
                            match$15=
                             get_comments_in_module(last_pos,class_desc[5][1][4])}
                         var pos_end=class_desc[5][2][4];
                         var $js$103=q;
                         if($js$103)
                          {var pos_limit2=q[1][5][1][4]}
                         else
                          {var pos_limit2=pos_limit}
                         var name$5=class_desc[3];
                         var $js$104=Odoc_name["concat"];
                         var complete_name$2=$js$104(current_module_name,name$5[1]);
                         try
                          {var $js$105=Signature_search[6];
                           var sig_class_decl=$js$105(table$1,name$5[1])}
                         catch(exn$4)
                          {var $js$106=exn$4=Not_found;
                           if($js$106)
                            {var $js$107=Odoc_messages["class_not_found"];
                             var $js$108=$js$107(current_module_name,name$5[1]);
                             var $js$109=[0,Failure,$js$108];
                             throw $js$109}
                           else
                            {var sig_class_decl="unknown primitive:reraise"}}
                         var sig_class_type=sig_class_decl[2];
                         var
                          match$16=
                           analyse_class_kind
                            (new_env$6,
                             complete_name$2,
                             class_desc[5][1][4],
                             class_desc[4],
                             sig_class_type);
                         var $js$110=Odoc_env["subst_class_type"];
                         var $js$111=$js$110(env,sig_class_type);
                         var
                          new_class=
                           [0,
                            complete_name$2,
                            match$15[1],
                            $js$111,
                            sig_class_decl[1],
                            class_desc[1]=0,
                            match$16[2],
                            match$16[1],
                            [0,0,[0,class_desc[5]]]];
                         var $js$112=My_ir[3];
                         var $js$113=get_string_of_file(pos_end,pos_limit2);
                         var match$17=$js$112(file_name[1],$js$113);
                         var maybe_more$1=match$17[1];
                         var $js$114=merge_infos(new_class[2],match$17[2]);
                         new_class[2]=$js$114,0;
                         var $js$115=Odoc_class["class_update_parameters_text"];
                         $js$115(new_class);
                         var match$18=f$3(0,maybe_more$1,pos_end+maybe_more$1,q);
                         var $js$116=Pervasives["@"];
                         var
                          $js$117=
                           $js$116(match$15[2],[0,[3,new_class],match$18[2]]);
                         return [0,match$18[1],$js$117]}
                       else
                        {return [0,acc_maybe_more,0]}};
                   var
                    match$15=
                     f$3([0,1],0,pos_start_ele,class_description_list);
                   return [0,match$15[1],new_env$6,match$15[2]]}
                 else
                  if($js$1==10)
                   {var class_type_declaration_list=sig_item_desc[1];
                    var $js$100=List["fold_left"];
                    var
                     new_env$7=
                      $js$100
                       (function(acc_env,class_type_decl)
                         {var $js$101=Odoc_name["concat"];
                          var
                           complete_name$2=
                            $js$101(current_module_name,class_type_decl[3][1]);
                          var $js$102=Odoc_env["add_class_type"];
                          return $js$102(acc_env,complete_name$2)},
                        env,
                        class_type_declaration_list);
                    var
                     f$4=
                      function
                       (*opt*,acc_maybe_more,last_pos,class_type_description_list)
                       {var $js$101=*opt*;
                        if($js$101){var first=*opt*[1]}else{var first=0}
                        var $js$102=class_type_description_list;
                        if($js$102)
                         {var q=class_type_description_list[2];
                          var ct_decl=class_type_description_list[1];
                          var $js$103=first;
                          if($js$103)
                           {var match$16=[0,comment_opt,0]}
                          else
                           {var
                             match$16=
                              get_comments_in_module(last_pos,ct_decl[5][1][4])}
                          var pos_end=ct_decl[5][2][4];
                          var $js$104=q;
                          if($js$104)
                           {var pos_limit2=q[1][5][1][4]}
                          else
                           {var pos_limit2=pos_limit}
                          var name$5=ct_decl[3];
                          var $js$105=Odoc_name["concat"];
                          var complete_name$2=$js$105(current_module_name,name$5[1]);
                          try
                           {var $js$106=Signature_search[7];
                            var sig_cltype_decl=$js$106(table$1,name$5[1])}
                          catch(exn$4)
                           {var $js$107=exn$4=Not_found;
                            if($js$107)
                             {var $js$108=Odoc_messages["class_type_not_found"];
                              var $js$109=$js$108(current_module_name,name$5[1]);
                              var $js$110=[0,Failure,$js$109];
                              throw $js$110}
                            else
                             {var sig_cltype_decl="unknown primitive:reraise"}}
                          var sig_class_type=sig_cltype_decl[2];
                          var
                           kind=
                            analyse_class_type_kind
                             (new_env$7,
                              complete_name$2,
                              ct_decl[5][1][4],
                              ct_decl[4],
                              sig_class_type);
                          var $js$111=Odoc_env["subst_class_type"];
                          var $js$112=$js$111(env,sig_class_type);
                          var
                           ct=
                            [0,
                             complete_name$2,
                             match$16[1],
                             $js$112,
                             sig_cltype_decl[1],
                             ct_decl[1]=0,
                             kind,
                             [0,0,[0,ct_decl[5]]]];
                          var $js$113=My_ir[3];
                          var $js$114=get_string_of_file(pos_end,pos_limit2);
                          var match$17=$js$113(file_name[1],$js$114);
                          var maybe_more$1=match$17[1];
                          var $js$115=merge_infos(ct[2],match$17[2]);
                          ct[2]=$js$115,0;
                          var match$18=f$4(0,maybe_more$1,pos_end+maybe_more$1,q);
                          var $js$116=Pervasives["@"];
                          var $js$117=$js$116(match$16[2],[0,[4,ct],match$18[2]]);
                          return [0,match$18[1],$js$117]}
                        else
                         {return [0,acc_maybe_more,0]}};
                    var
                     match$16=
                      f$4([0,1],0,pos_start_ele,class_type_declaration_list);
                    return [0,match$16[1],new_env$7,match$16[2]]}
                  else
                   if($js$1==11)
                    {var exit$1=148}
                   else
                    if($js$1==12){var exit$1=148}
        switch(exit$1){case 148:return [0,0,env,0]}};
    var
     analyse_module_type_kind=
      function(*opt*,env,current_module_name,module_type,sig_module_type)
       {var $js$1=*opt*;
        if($js$1){var erased=*opt*[1]}else{var erased=Odoc_name["Set"][1]}
        var match=module_type[1];
        var $js$2=match;
        if($js$2==0)
         {var $js$3=sig_module_type;
          if($js$3==0)
           {var $js$4=Odoc_name["from_path"];
            var name=$js$4(sig_module_type[1])}
          else
           {var $js$5=Odoc_name["from_longident"];var name=$js$5(match[1][1])}
          var $js$6=Odoc_env["full_module_type_name"];
          var $js$7=$js$6(env,name);
          var $js$8=[0,$js$7,0];
          return [2,$js$8]}
        else
         if($js$2==1)
          {var ast=filter_out_erased_items_from_signature(erased,match[1]);
           var $js$9=sig_module_type;
           if($js$9==1)
            {var pos_start=module_type[2][1][4];
             var pos_end=module_type[2][2][4];
             var
              elements=
               analyse_parsetree
                (env,
                 sig_module_type[1],
                 current_module_name,
                 pos_start,
                 pos_end,
                 ast);
             return [0,elements]}
           else
            {return "unknown primitive:raise"}}
         else
          if($js$2==2)
           {var pmodule_type2=match[2];
            var $js$10=pmodule_type2;
            if($js$10)
             {var loc=pmodule_type2[1][2]}
            else
             {var loc=Location["none"]}
            var loc_start=loc[1][4];
            var loc_end=loc[2][4];
            var mp_type_code=get_string_of_file(loc_start,loc_end);
            var $js$11=sig_module_type;
            if($js$11==2)
             {var param_module_type=sig_module_type[2];
              var $js$12=pmodule_type2;
              if($js$12)
               {var $js$13=param_module_type;
                if($js$13)
                 {var
                   mp_kind=
                    analyse_module_type_kind
                     (0,
                      env,
                      current_module_name,
                      pmodule_type2[1],
                      param_module_type[1])}
                else
                 {var exit=160}}
              else
               {var exit=160}
              switch(exit){case 160:var mp_kind=[0,0]}
              var $js$14=Odoc_name["from_ident"];
              var $js$15=$js$14(sig_module_type[1]);
              var $js$16=Misc["may_map"];
              var $js$17=Odoc_env["subst_module_type"];
              var $js$18=$js$17(env);
              var $js$19=$js$16($js$18,param_module_type);
              var param=[0,$js$15,$js$19,mp_type_code,mp_kind];
              var
               k=
                analyse_module_type_kind
                 ([0,erased],
                  env,
                  current_module_name,
                  match[3],
                  sig_module_type[3]);
              return [1,param,k]}
            else
             {return "unknown primitive:raise"}}
          else
           if($js$2==3)
            {var module_type2=match[1];
             var loc_start$1=module_type2[2][2][4];
             var loc_end$1=module_type[2][2][4];
             var s=get_string_of_file(loc_start$1,loc_end$1);
             var erased$1=erased_names_of_constraints(match[2],erased);
             var
              k$1=
               analyse_module_type_kind
                ([0,erased$1],
                 env,
                 current_module_name,
                 module_type2,
                 sig_module_type);
             return [3,k$1,s]}
           else
            if($js$2==4)
             {var module_expr=match[1];
              var loc_start$2=module_expr[2][1][4];
              var loc_end$2=module_expr[2][2][4];
              var s$1=get_string_of_file(loc_start$2,loc_end$2);
              return [4,s$1]}
            else
             if($js$2==5)
              {return "unknown primitive:raise"}
             else
              if($js$2==6)
               {var $js$20=sig_module_type;
                if($js$20==3)
                 {var $js$21=Odoc_name["from_path"];
                  var name$1=$js$21(sig_module_type[1])}
                else
                 {var $js$22=Odoc_name["from_longident"];
                  var name$1=$js$22(match[1][1])}
                var $js$23=Odoc_env["full_module_name"];
                var $js$24=$js$23(env,name$1);
                var $js$25=[0,$js$24,0];
                return [2,$js$25]}};
    var
     analyse_module_kind=
      function(*opt*,env,current_module_name,module_type,sig_module_type)
       {var $js$1=*opt*;
        if($js$1){var erased=*opt*[1]}else{var erased=Odoc_name["Set"][1]}
        var match=module_type[1];
        var $js$2=match;
        if($js$2==0)
         {var
           k=
            analyse_module_type_kind
             (0,env,current_module_name,module_type,sig_module_type);
          return [4,k,""]}
        else
         if($js$2==1)
          {var
            signature=
             filter_out_erased_items_from_signature(erased,match[1]);
           var $js$3=sig_module_type;
           if($js$3==1)
            {var
              $js$4=
               analyse_parsetree
                (env,
                 sig_module_type[1],
                 current_module_name,
                 module_type[2][1][4],
                 module_type[2][2][4],
                 signature);
             return [0,$js$4]}
           else
            {return "unknown primitive:raise"}}
         else
          if($js$2==2)
           {var pmodule_type2=match[2];
            var $js$5=sig_module_type;
            if($js$5==2)
             {var param_module_type=sig_module_type[2];
              var $js$6=pmodule_type2;
              if($js$6)
               {var loc=pmodule_type2[1][2]}
              else
               {var loc=Location["none"]}
              var loc_start=loc[1][4];
              var loc_end=loc[2][4];
              var mp_type_code=get_string_of_file(loc_start,loc_end);
              var $js$7=pmodule_type2;
              if($js$7)
               {var $js$8=param_module_type;
                if($js$8)
                 {var
                   mp_kind=
                    analyse_module_type_kind
                     (0,
                      env,
                      current_module_name,
                      pmodule_type2[1],
                      param_module_type[1])}
                else
                 {var exit=184}}
              else
               {var exit=184}
              switch(exit){case 184:var mp_kind=[0,0]}
              var $js$9=Odoc_name["from_ident"];
              var $js$10=$js$9(sig_module_type[1]);
              var $js$11=Misc["may_map"];
              var $js$12=Odoc_env["subst_module_type"];
              var $js$13=$js$12(env);
              var $js$14=$js$11($js$13,param_module_type);
              var param=[0,$js$10,$js$14,mp_type_code,mp_kind];
              var
               k$1=
                analyse_module_kind
                 ([0,erased],
                  env,
                  current_module_name,
                  match[3],
                  sig_module_type[3]);
              return [2,param,k$1]}
            else
             {return "unknown primitive:raise"}}
          else
           if($js$2==3)
            {var module_type2=match[1];
             var loc_start$1=module_type2[2][2][4];
             var loc_end$1=module_type[2][2][4];
             var s=get_string_of_file(loc_start$1,loc_end$1);
             var erased$1=erased_names_of_constraints(match[2],erased);
             var
              k$2=
               analyse_module_type_kind
                ([0,erased$1],
                 env,
                 current_module_name,
                 module_type2,
                 sig_module_type);
             return [4,k$2,s]}
           else
            if($js$2==4)
             {var module_expr=match[1];
              var loc_start$2=module_expr[2][1][4];
              var loc_end$2=module_expr[2][2][4];
              var s$1=get_string_of_file(loc_start$2,loc_end$2);
              return [6,s$1]}
            else
             if($js$2==5)
              {return "unknown primitive:raise"}
             else
              if($js$2==6)
               {var $js$15=sig_module_type;
                if($js$15==3)
                 {var $js$16=Odoc_env["full_module_name"];
                  var $js$17=Odoc_name["from_path"];
                  var $js$18=$js$17(sig_module_type[1]);
                  var alias_name=$js$16(env,$js$18);
                  var ma=[0,alias_name,0];
                  return [1,ma]}
                else
                 {return "unknown primitive:raise"}}};
    var
     analyse_class_kind=
      function
       (env,current_class_name,last_pos,parse_class_type,sig_class_type)
       {var match=parse_class_type[1];
        var $js$1=match;
        if($js$1==0)
         {var $js$2=sig_class_type;
          if($js$2==0)
           {var $js$3=Odoc_name["from_path"];
            var path_name=$js$3(sig_class_type[1]);
            var $js$4=Odoc_env["full_class_or_class_type_name"];
            var name=$js$4(env,path_name);
            var $js$5=List["map"];
            var $js$6=Odoc_env["subst_type"];
            var $js$7=$js$6(env);
            var $js$8=$js$5($js$7,sig_class_type[2]);
            var $js$9=[0,name,0,$js$8];
            var k=[2,$js$9];
            return [0,0,k]}
          else
           if($js$2==1){var exit=206}else if($js$2==2){var exit=206}}
        else
         if($js$1==1)
          {var $js$10=sig_class_type;
           if($js$10==0)
            {var exit=206}
           else
            if($js$10==1)
             {var
               match$1=
                analyse_class_elements
                 (env,
                  current_class_name,
                  last_pos,
                  parse_class_type[2][2][4],
                  match[1][2],
                  sig_class_type[1]);
              return [0,0,[0,match$1[1],match$1[2]]]}
            else
             if($js$10==2){var exit=206}}
         else
          if($js$1==2)
           {var $js$11=sig_class_type;
            if($js$11==0)
             {var exit=206}
            else
             if($js$11==1)
              {var exit=206}
             else
              if($js$11==2)
               {var label=sig_class_type[1];
                var $js$12="unknown primitive:caml_string_equal";
                if($js$12)
                 {var $js$13=Btype["label_name"];
                  var $js$14=$js$13(label);
                  var $js$15=Odoc_env["subst_type"];
                  var $js$16=$js$15(env,sig_class_type[2]);
                  var $js$17=[0,$js$14,$js$16,0];
                  var new_param=[0,$js$17];
                  var
                   match$2=
                    analyse_class_kind
                     (env,current_class_name,last_pos,match[3],sig_class_type[3]);
                  return [0,[0,new_param,match$2[1]],match$2[2]]}
                else
                 {return "unknown primitive:raise"}}}
          else
           if($js$1==3){var exit=206}
        switch(exit){case 206:return "unknown primitive:raise"}};
    var
     analyse_class_type_kind=
      function
       (env,current_class_name,last_pos,parse_class_type,sig_class_type)
       {var match=parse_class_type[1];
        var $js$1=match;
        if($js$1==0)
         {var $js$2=sig_class_type;
          if($js$2==0)
           {var $js$3=Odoc_env["full_class_or_class_type_name"];
            var $js$4=Odoc_name["from_path"];
            var $js$5=$js$4(sig_class_type[1]);
            var $js$6=$js$3(env,$js$5);
            var $js$7=List["map"];
            var $js$8=Odoc_env["subst_type"];
            var $js$9=$js$8(env);
            var $js$10=$js$7($js$9,sig_class_type[2]);
            var $js$11=[0,$js$6,0,$js$10];
            return [1,$js$11]}
          else
           if($js$2==1){var exit=209}else if($js$2==2){var exit=209}}
        else
         if($js$1==1)
          {var $js$12=sig_class_type;
           if($js$12==0)
            {var exit=209}
           else
            if($js$12==1)
             {var
               match$1=
                analyse_class_elements
                 (env,
                  current_class_name,
                  last_pos,
                  parse_class_type[2][2][4],
                  match[1][2],
                  sig_class_type[1]);
              return [0,match$1[1],match$1[2]]}
            else
             if($js$12==2){var exit=209}}
         else
          if($js$1==2)
           {var $js$13=sig_class_type;
            if($js$13==0)
             {var exit=209}
            else
             if($js$13==1)
              {var exit=209}
             else
              if($js$13==2){return "unknown primitive:raise"}}
          else
           if($js$1==3){var exit=209}
        switch(exit){case 209:return "unknown primitive:raise"}};
    var
     analyse_signature=
      function(source_file,input_file,ast,signat)
       {try
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
        try
         {var $js$10=Filename["chop_extension"];
          var $js$11=$js$10(source_file)}
        catch(exn$1){var $js$11=source_file}
        var $js$12=$js$9($js$11);
        var mod_name=$js$8($js$12);
        var $js$13=My_ir[4];
        var match$1=$js$13(file_name[1],file[1]);
        var
         elements=
          analyse_parsetree
           (Odoc_env["empty"],
            signat,
            mod_name,
            match$1[1],
            file[1]["length"],
            ast);
        var $js$14=Odoc_global["keep_code"][1];
        if($js$14){var code_intf=[0,file[1]]}else{var code_intf=0}
        var $js$15=Location["in_file"];
        var $js$16=$js$15(file_name[1]);
        var $js$17=[0,$js$16];
        var $js$18=[0,0,$js$17];
        return [0,
                mod_name,
                [1,signat],
                match$1[2],
                1,
                file_name[1],
                [0,elements],
                $js$18,
                0,
                0,
                code_intf,
                0]};
    return [0,
            file,
            file_name,
            get_string_of_file,
            prepare_file,
            get_comments_in_class,
            get_comments_in_module,
            merge_infos,
            name_comment_from_type_decl,
            manifest_structure,
            get_type_kind,
            erased_names_of_constraints,
            filter_out_erased_items_from_signature,
            analyse_class_elements,
            analyse_parsetree,
            analyse_signature_item_desc,
            analyse_module_type_kind,
            analyse_module_kind,
            analyse_class_kind,
            analyse_class_type_kind,
            analyse_signature]};
module["exports"]=
{"unknown block:(makeblock 0 (field 1 Signature_search/1240) (field 2 Signature_search/1240)\n  (field 3 Signature_search/1240) (field 4 Signature_search/1240)\n  (field 5 Signature_search/1240) (field 6 Signature_search/1240)\n  (field 7 Signature_search/1240) (field 8 Signature_search/1240)\n  (field 9 Signature_search/1240) (field 10 Signature_search/1240))":
 unknown block:(makeblock 0 (field 1 Signature_search/1240) (field 2 Signature_search/1240)
  (field 3 Signature_search/1240) (field 4 Signature_search/1240)
  (field 5 Signature_search/1240) (field 6 Signature_search/1240)
  (field 7 Signature_search/1240) (field 8 Signature_search/1240)
  (field 9 Signature_search/1240) (field 10 Signature_search/1240)),
 "unknown block:(function funarg/1928\n  (let (let/1929 = (apply Analyser/1922 funarg/1928))\n    (makeblock 0 (field 0 let/1929) (field 1 let/1929) (field 2 let/1929)\n      (field 3 let/1929) (field 4 let/1929) (field 5 let/1929)\n      (field 7 let/1929) (field 8 let/1929) (field 9 let/1929)\n      (field 6 let/1929) (field 15 let/1929) (field 18 let/1929)\n      (field 19 let/1929))))":
 unknown block:(function funarg/1928
  (let (let/1929 = (apply Analyser/1922 funarg/1928))
    (makeblock 0 (field 0 let/1929) (field 1 let/1929) (field 2 let/1929)
      (field 3 let/1929) (field 4 let/1929) (field 5 let/1929)
      (field 7 let/1929) (field 8 let/1929) (field 9 let/1929)
      (field 6 let/1929) (field 15 let/1929) (field 18 let/1929)
      (field 19 let/1929))))};
