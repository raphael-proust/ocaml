var String=require("String");
var CamlinternalOO=require("CamlinternalOO");
var Odoc_info=require("Odoc_info");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Odoc_str=require("Odoc_str");
var Misc=require("Misc");
var Unix=require("Unix");
var Buffer=require("Buffer");
var Filename=require("Filename");
var Odoc_print=require("Odoc_print");
var Str=require("Str");
var Odoc_misc=require("Odoc_misc");
var Odoc_messages=require("Odoc_messages");
var shared=[0,"tag_functions"];
var
 shared$1=
  [0,
   "remove_newlines",
   "relative_idents",
   "open_out",
   "man_of_value",
   "man_of_type_extension",
   "man_of_type_expr_param_list",
   "man_of_type_expr_list",
   "man_of_type_expr",
   "man_of_type",
   "man_of_text_element",
   "man_of_text2",
   "man_of_text",
   "man_of_recfield",
   "man_of_parameter_list",
   "man_of_parameter_description",
   "man_of_module_type_body",
   "man_of_module_type",
   "man_of_module_parameter_list",
   "man_of_module_comment",
   "man_of_module_body",
   "man_of_module",
   "man_of_modtype",
   "man_of_method",
   "man_of_info",
   "man_of_included_module",
   "man_of_exception",
   "man_of_custom_text",
   "man_of_const",
   "man_of_code",
   "man_of_class_type_expr",
   "man_of_class_type",
   "man_of_class_comment",
   "man_of_class",
   "man_of_attribute",
   "man_of_Target",
   "generate_for_module_type",
   "generate_for_module",
   "generate_for_group",
   "generate_for_class_type",
   "generate_for_class",
   "generate",
   "file_name",
   "escape",
   "create_groups"];
var shared$2=[0,"man_of_text"];
var
 shared$3=
  [0,
   "man_of_info",
   "str_man_of_author_list",
   "str_man_of_before",
   "str_man_of_custom",
   "str_man_of_raised_exceptions",
   "str_man_of_return_opt",
   "str_man_of_see",
   "str_man_of_sees",
   "str_man_of_since_opt",
   "str_man_of_text",
   "str_man_of_version_opt"];
var
 shared$4=
  [0,
   "str_man_of_version_opt",
   "str_man_of_text",
   "str_man_of_since_opt",
   "str_man_of_sees",
   "str_man_of_see",
   "str_man_of_return_opt",
   "str_man_of_raised_exceptions",
   "str_man_of_custom",
   "str_man_of_before",
   "str_man_of_author_list",
   "man_of_text",
   "man_of_info"];
var man_suffix=[0,Odoc_messages["default_man_suffix"]];
var man_section=[0,Odoc_messages["default_man_section"]];
var man_mini=[0,0];
var new_buf=function(param){var $js=Buffer["create"];return $js(1024)};
var bp=Printf["bprintf"];
var bs=Buffer["add_string"];
var linebreak="\n.sp\n";
var
 info=
  [0,
   0,
   function(class)
    {var $js=CamlinternalOO["new_methods_variables"];
     var ids=$js(class,shared$4,shared);
     var str_man_of_version_opt=ids[1];
     var str_man_of_text=ids[2];
     var str_man_of_since_opt=ids[3];
     var str_man_of_sees=ids[4];
     var str_man_of_see=ids[5];
     var str_man_of_return_opt=ids[6];
     var str_man_of_raised_exceptions=ids[7];
     var str_man_of_custom=ids[8];
     var str_man_of_before=ids[9];
     var str_man_of_author_list=ids[10];
     var man_of_text=ids[11];
     var man_of_info=ids[12];
     var tag_functions=ids[13];
     var $js$1=CamlinternalOO["set_methods"];
     $js$1
      (class,
       [0,
        str_man_of_text,
        function(self-1,t)
         {var $js$2=Buffer["create"];
          var b=$js$2(256);
          "unknown block:(sendself self-1/1261 man_of_text/1248 b/1263 t/1262)";
          var $js$3=Buffer["contents"];
          return $js$3(b)},
        str_man_of_author_list,
        function(self-1,l)
         {var $js$2=l;
          if($js$2)
           {var $js$3=Buffer["create"];
            var b=$js$3(256);
            bs(b,'.B "');
            bs(b,Odoc_messages["authors"]);
            bs(b,'"\n:\n');
            var $js$4=String["concat"];
            var $js$5=$js$4(", ",l);
            bs(b,$js$5);
            bs(b,"\n");
            var $js$6=Buffer["contents"];
            return $js$6(b)}
          else
           {return ""}},
        str_man_of_version_opt,
        function(self-1,v_opt)
         {var $js$2=v_opt;
          if($js$2)
           {var $js$3=Buffer["create"];
            var b=$js$3(256);
            bs(b,'.B "');
            bs(b,Odoc_messages["version"]);
            bs(b,'"\n:\n');
            bs(b,v_opt[1]);
            bs(b,"\n");
            var $js$4=Buffer["contents"];
            return $js$4(b)}
          else
           {return ""}},
        str_man_of_before,
        function(self-1,l)
         {var $js$2=l;
          if($js$2)
           {var $js$3=Buffer["create"];
            var b=$js$3(256);
            var
             iter=
              function(param)
               {var $js$4=param;
                if($js$4)
                 {var q=param[2];
                  var match=param[1];
                  bp
                   (b,[0,[11,'.B "',[2,0,0]],'.B "%s'],Odoc_messages["before"]);
                  bs(b,match[1]);
                  bs(b,'"\n');
                  "unknown block:(sendself self-1/1274 man_of_text/1248 b/1276 (field 1 match/2220))";
                  bs(b,"\n");
                  bs(b,"\n");
                  var $js$5=q;
                  if($js$5){bs(b,linebreak);return iter(q)}else{return 0}}
                else
                 {return 0}};
            iter(l);
            var $js$4=Buffer["contents"];
            return $js$4(b)}
          else
           {return ""}},
        str_man_of_since_opt,
        function(self-1,s_opt)
         {var $js$2=s_opt;
          if($js$2)
           {var $js$3=Buffer["create"];
            var b=$js$3(256);
            bs(b,'.B "');
            bs(b,Odoc_messages["since"]);
            bs(b,'"\n');
            bs(b,s_opt[1]);
            bs(b,"\n");
            var $js$4=Buffer["contents"];
            return $js$4(b)}
          else
           {return ""}},
        str_man_of_raised_exceptions,
        function(self-1,l)
         {var $js$2=l;
          if($js$2)
           {var $js$3=Buffer["create"];
            var b=$js$3(256);
            var
             iter=
              function(param)
               {var $js$4=param;
                if($js$4)
                 {var q=param[2];
                  var match=param[1];
                  bs(b,'.B "');
                  bs(b,Odoc_messages["raises"]);
                  var $js$5=Pervasives["^"];
                  var $js$6=Pervasives["^"];
                  var $js$7=$js$6(match[1],'"\n');
                  var $js$8=$js$5(" ",$js$7);
                  bs(b,$js$8);
                  "unknown block:(sendself self-1/1287 man_of_text/1248 b/1289 (field 1 match/2214))";
                  bs(b,"\n");
                  var $js$9=q;
                  if($js$9){bs(b,linebreak);return iter(q)}else{return 0}}
                else
                 {return 0}};
            iter(l);
            var $js$4=Buffer["contents"];
            return $js$4(b)}
          else
           {return ""}},
        str_man_of_see,
        function(self-1,param)
         {var t=param[2];
          var see_ref=param[1];
          var $js$2=see_ref;
          if($js$2==0)
           {var t_ref=[0,[15,see_ref[1],t],0]}
          else
           if($js$2==1)
            {var t_ref=[0,[1,see_ref[1]],[0,[0," "],t]]}
           else
            if($js$2==2){var t_ref=[0,[5,[0,[0,see_ref[1]],0]],[0,[0," "],t]]}
          "unknown block:(sendself self-1/1295 str_man_of_text/1249 t_ref/1298)"},
        str_man_of_sees,
        function(self-1,l)
         {var $js$2=l;
          if($js$2)
           {var $js$3=Buffer["create"];
            var b=$js$3(256);
            var
             iter=
              function(param)
               {var $js$4=param;
                if($js$4)
                 {var q=param[2];
                  bs(b,'.B "');
                  bs(b,Odoc_messages["see_also"]);
                  bs(b,'"\n');
                  "unknown block:(sendself self-1/1303 str_man_of_see/1255 (field 0 param/2205))";
                  bs(b,$js$5);
                  bs(b,"\n");
                  var $js$6=q;
                  if($js$6){bs(b,linebreak);return iter(q)}else{return 0}}
                else
                 {return 0}};
            iter(l);
            var $js$4=Buffer["contents"];
            return $js$4(b)}
          else
           {return ""}},
        str_man_of_return_opt,
        function(self-1,return_opt)
         {var $js$2=return_opt;
          if($js$2)
           {var $js$3=Buffer["create"];
            var b=$js$3(256);
            bs(b,".B ");
            bs(b,Odoc_messages["returns"]);
            bs(b,"\n");
            "unknown block:(sendself self-1/1310 man_of_text/1248 b/1313 (field 0 return_opt/1311))";
            bs(b,"\n");
            var $js$4=Buffer["contents"];
            return $js$4(b)}
          else
           {return ""}},
        str_man_of_custom,
        function(self-1,l)
         {var $js$2=List["fold_left"];
          return $js$2
                  (function(acc,param)
                    {var tag=param[1];
                     try
                      {var $js$3=List["assoc"];
                       var f=$js$3(tag,self-1[tag_functions]);
                       var $js$4=Buffer["create"];
                       var buf=$js$4(50);
                       var $js$5=Buffer["add_string"];
                       var $js$6=f(param[2]);
                       $js$5(buf,$js$6);
                       var $js$7=Buffer["contents"];
                       var $js$8=$js$7(buf);
                       return [0,$js$8,acc]}
                     catch(exn)
                      {var $js$9=exn=Not_found;
                       if($js$9)
                        {var $js$10=Odoc_info["warning"];
                         var $js$11=Odoc_messages["tag_not_handled"];
                         var $js$12=$js$11(tag);
                         $js$10($js$12);
                         return acc}
                       else
                        {return "unknown primitive:reraise"}}},
                   0,
                   l)},
        man_of_info,
        function(self-1,*opt*,b,info_opt)
         {var $js$2=*opt*;
          if($js$2){var margin=*opt*[1]}else{var margin=0}
          var $js$3=info_opt;
          if($js$3)
           {var info$1=info_opt[1];
            var M=Odoc_info;
            var $js$4=Pervasives["@"];
            var match=info$1[7];
            var $js$5=match;
            if($js$5)
             {var $js$6=Buffer["create"];
              var b$1=$js$6(256);
              bs(b$1,'.B "');
              bs(b$1,Odoc_messages["deprecated"]);
              bs(b$1,'"\n');
              "unknown block:(sendself self-1/1323 man_of_text/1248 b/1333 (field 0 match/2194))";
              bs(b$1,"\n");
              var $js$7=Buffer["contents"];
              var $js$8=$js$7(b$1);
              var $js$9=[0,$js$8,0]}
            else
             {var $js$9=0}
            var $js$10=Pervasives["@"];
            var match$1=info$1[1];
            var $js$11=match$1;
            if($js$11)
             {var d=match$1[1];
              var $js$12="unknown primitive:caml_equal";
              if($js$12)
               {var $js$13=0}
              else
               {var $js$14=Pervasives["^"];
                "unknown block:(sendself self-1/1323 str_man_of_text/1249 d/1334)";
                var $js$15=$js$14($js$16,"\n");
                var $js$13=[0,$js$15,0]}}
            else
             {var $js$13=0}
            var $js$17=Pervasives["@"];
            "unknown block:(sendself self-1/1323 str_man_of_author_list/1250 (field 1 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_version_opt/1251 (field 2 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_before/1252 (field 5 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_since_opt/1253 (field 4 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_raised_exceptions/1254 (field 8 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_return_opt/1257 (field 9 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_sees/1256 (field 3 info/1329))";
            var $js$18=[0,$js$19,0];
            var $js$20=[0,$js$21,$js$18];
            var $js$22=[0,$js$23,$js$20];
            var $js$24=[0,$js$25,$js$22];
            var $js$26=[0,$js$27,$js$24];
            var $js$28=[0,$js$29,$js$26];
            var $js$30=[0,$js$31,$js$28];
            "unknown block:(sendself self-1/1323 str_man_of_custom/1258 (field 10 info/1329))";
            var $js$32=$js$17($js$30,$js$33);
            var $js$34=$js$10($js$13,$js$32);
            var l=$js$4($js$9,$js$34);
            var $js$35=List["filter"];
            var
             $js$36=
              function(prim,prim$1){return "unknown primitive:caml_notequal"};
            var $js$37=$js$36("");
            var l$1=$js$35($js$37,l);
            var $js$38=Buffer["add_string"];
            var $js$39=String["concat"];
            var $js$40=$js$39("\n.sp\n",l$1);
            return $js$38(b,$js$40)}
          else
           {return 0}}]);
     return function(env,self)
      {var $js$2=CamlinternalOO["create_object_opt"];
       var self$1=$js$2(self,class);
       self$1[tag_functions]=0,0;
       return self$1}},
   0,
   0];
var $js=Str["regexp_string"];
var re_slash=$js("/");
var
 man_init=
  function(class)
   {var $js$1=CamlinternalOO["new_variable"];
    var re_slash$1=$js$1(class,"");
    var $js$2=CamlinternalOO["get_method_labels"];
    var ids=$js$2(class,shared$1);
    var remove_newlines=ids[1];
    var relative_idents=ids[2];
    var open_out=ids[3];
    var man_of_value=ids[4];
    var man_of_type_extension=ids[5];
    var man_of_type_expr_param_list=ids[6];
    var man_of_type_expr_list=ids[7];
    var man_of_type_expr=ids[8];
    var man_of_type=ids[9];
    var man_of_text_element=ids[10];
    var man_of_text2=ids[11];
    var man_of_text=ids[12];
    var man_of_recfield=ids[13];
    var man_of_parameter_list=ids[14];
    var man_of_parameter_description=ids[15];
    var man_of_module_type_body=ids[16];
    var man_of_module_type=ids[17];
    var man_of_module_parameter_list=ids[18];
    var man_of_module_comment=ids[19];
    var man_of_module_body=ids[20];
    var man_of_module=ids[21];
    var man_of_modtype=ids[22];
    var man_of_method=ids[23];
    var man_of_info=ids[24];
    var man_of_included_module=ids[25];
    var man_of_exception=ids[26];
    var man_of_custom_text=ids[27];
    var man_of_const=ids[28];
    var man_of_code=ids[29];
    var man_of_class_type_expr=ids[30];
    var man_of_class_type=ids[31];
    var man_of_class_comment=ids[32];
    var man_of_class=ids[33];
    var man_of_attribute=ids[34];
    var man_of_Target=ids[35];
    var generate_for_module_type=ids[36];
    var generate_for_module=ids[37];
    var generate_for_group=ids[38];
    var generate_for_class_type=ids[39];
    var generate_for_class=ids[40];
    var generate=ids[41];
    var file_name=ids[42];
    var escape=ids[43];
    var create_groups=ids[44];
    var $js$3=CamlinternalOO["inherits"];
    var inh=$js$3(class,shared,shared$2,shared$3,info,1);
    var obj_init=inh[1];
    var $js$4=CamlinternalOO["set_methods"];
    $js$4
     (class,
      [0,
       file_name,
       function(self-2,name)
        {var $js$5=Printf["sprintf"];
         var s=$js$5([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],name,man_suffix[1]);
         var $js$6=Str["global_replace"];
         return $js$6(self-2[re_slash$1],"slash",s)},
       escape,
       function(self-2,s)
        {var len=s["length"];
         var $js$5=Buffer["create"];
         var b=$js$5(len);
         var $js$6=0;
         var $js$7=len-1;
         for(var i=$js$6;i<=$js$7;i++)
          {var c=s[i];
           var $js$8=c>=47;
           if($js$8)
            {var $js$9=c!=92;
             if($js$9)
              {var exit=98}
             else
              {var $js$10=Buffer["add_string"];$js$10(b,"\(rs")}}
           else
            {var $js$11=c>=39;
             if($js$11)
              {var $js$12=-39+c;
               var $js$13=$js$12[0];
               if($js$13==0)
                {var $js$14=Buffer["add_string"];$js$14(b,"\&'")}
               else
                if($js$13==1)
                 {var exit=98}
                else
                 if($js$13==2)
                  {var exit=98}
                 else
                  if($js$13==3)
                   {var exit=98}
                  else
                   if($js$13==4)
                    {var exit=98}
                   else
                    if($js$13==5)
                     {var exit=98}
                    else
                     if($js$13==6)
                      {var $js$15=Buffer["add_string"];$js$15(b,"\-")}
                     else
                      if($js$13==7)
                       {var $js$16=Buffer["add_string"];$js$16(b,"\&.")}}
             else
              {var exit=98}}
           switch(exit){case 98:var $js$17=Buffer["add_char"];$js$17(b,c)}}
         var $js$18=Buffer["contents"];
         return $js$18(b)},
       open_out,
       function(self-2,file)
        {var $js$5=Filename["concat"];
         var f=$js$5(Odoc_info["Global"][5][1],file);
         var $js$6=Pervasives["open_out"];
         return $js$6(f)},
       man_of_text2,
       function(self-2,b,t)
        {var $js$5=List["iter"];
         "unknown block:(sendself self-2/1417 man_of_text_element/1364 b/1418)";
         return $js$5($js$6,t)},
       man_of_text,
       function(self-2,b,t)
        {var b2=new_buf(0);
         "unknown block:(sendself self-2/1421 man_of_text2/1361 b2/1424 t/1423)";
         var $js$5=Buffer["contents"];
         var s=$js$5(b2);
         var $js$6=Str["global_replace"];
         var $js$7=Str["regexp"];
         var $js$8=$js$7("\n[ ]*");
         var s2=$js$6($js$8,"\n",s);
         var $js$9=Str["global_replace"];
         var $js$10=Str["regexp"];
         var $js$11=$js$10("\n\n");
         var $js$12=$js$9($js$11,"\n",s2);
         return bs(b,$js$12)},
       remove_newlines,
       function(self-2,s)
        {var $js$5=Str["global_replace"];
         var $js$6=Str["regexp"];
         var $js$7=$js$6("[ ]*\n[ ]*");
         return $js$5($js$7," ",s)},
       man_of_text_element,
       function(self-2,b,txt)
        {var $js$5=txt;
         if(typeof $js$5=="number")
          {if($js$5==0){return bs(b,"\n.sp\n")}else if($js$5==1){var exit=91}}
         else
          {var $js$6=$js$5[0];
           if($js$6==0)
            {var exit=92}
           else
            if($js$6==1)
             {bs(b,"\n.B ");
              var $js$7=Pervasives["^"];
              var $js$8=Str["global_replace"];
              var $js$9=Str["regexp"];
              var $js$10=$js$9("\n");
              "unknown block:(sendself self-2/1431 escape/1359 (field 0 txt/1433))";
              var $js$11=$js$8($js$10,"\n.B ",$js$12);
              var $js$13=$js$7($js$11,"\n");
              return bs(b,$js$13)}
            else
             if($js$6==2)
              {bs(b,"\n.B ");
               var $js$14=Pervasives["^"];
               var $js$15=Str["global_replace"];
               var $js$16=Str["regexp"];
               var $js$17=$js$16("\n");
               "unknown block:(sendself self-2/1431 escape/1359 (field 0 txt/1433))";
               var $js$18=$js$15($js$17,"\n.B ",$js$19);
               var $js$20=$js$14($js$18,"\n");
               return bs(b,$js$20)}
             else
              if($js$6==3)
               {var exit=92}
              else
               if($js$6==10)
                {var $js$21=List["iter"];
                 $js$21
                  (function(t)
                    {bs(b,"\n.sp\n \-");
                     "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 t/1459)";
                     return bs(b,"\n")},
                   txt[1]);
                 return bs(b,"\n")}
               else
                if($js$6==11)
                 {var $js$22=List["iter"];
                  $js$22
                   (function(t)
                     {bs(b,"\n.sp\n \-");
                      "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 t/1460)";
                      return bs(b,"\n")},
                    txt[1]);
                  return bs(b,"\n")}
                else
                 if($js$6==12)
                  {bs(b,"\n.sp\n");
                   "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 (field 0 txt/1433))";
                   return bs(b,"\n.sp\n")}
                 else
                  if($js$6==13)
                   {"unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432\n  (makeblock 0\n    (makeblock 1 (apply (field 20 (global Odoc_info!)) (field 2 txt/1433)))\n    0a))"}
                  else
                   if($js$6==14)
                    {var exit=91}
                   else
                    if($js$6==15)
                     {"unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 (field 1 txt/1433))"}
                    else
                     if($js$6==16)
                      {"unknown block:(sendself self-2/1431 man_of_text_element/1364 b/1432\n  (makeblock 1 (apply (field 37 (global Odoc_info!)) (field 0 txt/1433))))"}
                     else
                      if($js$6==17)
                       {bs(b,"^{");
                        "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 (field 0 txt/1433))"}
                      else
                       if($js$6==18)
                        {bs(b,"_{");
                         "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 (field 0 txt/1433))"}
                       else
                        if($js$6==19)
                         {var exit=91}
                        else
                         if($js$6==20)
                          {"unknown block:(sendself self-2/1431 man_of_custom_text/1365 b/1432 (field 0 txt/1433)\n  (field 1 txt/1433))"}
                         else
                          if($js$6==21)
                           {"unknown block:(sendself self-2/1431 man_of_Target/1366 b/1432 (field 0 txt/1433)\n  (field 1 txt/1433))"}
                          else
                           {"unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 (field 0 txt/1433))"}}
         switch(exit)
          {case 91:return 0;
           case 92:
            "unknown block:(sendself self-2/1431 escape/1359 (field 0 txt/1433))";
            return bs(b,$js$23)
           }},
       man_of_custom_text,
       function(self-2,b,s,t){return 0},
       man_of_Target,
       function(self-2,b,target,code)
        {var $js$5=String["lowercase"];
         var $js$6=$js$5(target);
         var $js$7="unknown primitive:caml_string_equal";
         if($js$7){return bs(b,code)}else{return 0}},
       man_of_code,
       function(self-2,b,s)
        {"unknown block:(sendself self-2/1472 man_of_text/1362 b/1473\n  (makeblock 0 (makeblock 1 s/1474) 0a))"},
       relative_idents,
       function(self-2,m_name,s)
        {var
          f=
           function(str_t)
            {var $js$5=Str["matched_string"];
             var match_s=$js$5(str_t);
             var $js$6=Odoc_info["apply_if_equal"];
             var $js$7=Odoc_info["Name"][4];
             var $js$8=$js$7(m_name,match_s);
             return $js$6(Odoc_info["use_hidden_modules"],match_s,$js$8)};
         var $js$5=Str["global_substitute"];
         var $js$6=Str["regexp"];
         var
          $js$7=
           $js$6("\([A-Z]\([a-zA-Z_'0-9]\)*\.\)+\([a-z][a-zA-Z_'0-9]*\)");
         return $js$5($js$7,f,s)},
       man_of_type_expr,
       function(self-2,b,m_name,t)
        {var $js$5=String["concat"];
         var $js$6=Str["split"];
         var $js$7=Str["regexp"];
         var $js$8=$js$7("\n");
         var $js$9=Odoc_print["string_of_type_expr"];
         var $js$10=$js$9(t);
         var $js$11=$js$6($js$8,$js$10);
         var s=$js$5("\n",$js$11);
         var $js$12=Str["global_replace"];
         var $js$13=Str["regexp"];
         var $js$14=$js$13("\n");
         var s2=$js$12($js$14,"\n.B ",s);
         bs(b,"\n.B ");
         "unknown block:(sendself self-2/1484 relative_idents/1368 m_name/1486 s2/1489)";
         bs(b,$js$15);
         return bs(b,"\n")},
       man_of_class_type_expr,
       function(self-2,b,m_name,t)
        {var $js$5=String["concat"];
         var $js$6=Str["split"];
         var $js$7=Str["regexp"];
         var $js$8=$js$7("\n");
         var $js$9=Odoc_print["string_of_class_type"];
         var $js$10=$js$9(0,t);
         var $js$11=$js$6($js$8,$js$10);
         var s=$js$5("\n",$js$11);
         var $js$12=Str["global_replace"];
         var $js$13=Str["regexp"];
         var $js$14=$js$13("\n");
         var s2=$js$12($js$14,"\n.B ",s);
         bs(b,"\n.B ");
         "unknown block:(sendself self-2/1491 relative_idents/1368 m_name/1493 s2/1496)";
         bs(b,$js$15);
         return bs(b,"\n")},
       man_of_type_expr_list,
       function(self-2,par,b,m_name,sep,l)
        {var $js$5=Odoc_str["string_of_type_list"];
         var s=$js$5(par,sep,l);
         var $js$6=Str["global_replace"];
         var $js$7=Str["regexp"];
         var $js$8=$js$7("\n");
         var s2=$js$6($js$8,"\n.B ",s);
         bs(b,"\n.B ");
         "unknown block:(sendself self-2/1498 relative_idents/1368 m_name/1501 s2/1505)";
         bs(b,$js$9);
         return bs(b,"\n")},
       man_of_type_expr_param_list,
       function(self-2,b,m_name,t)
        {var l=t[3];
         var $js$5=l;
         if($js$5)
          {var $js$6=Odoc_str["string_of_type_param_list"];
           var s=$js$6(t);
           var $js$7=Str["global_replace"];
           var $js$8=Str["regexp"];
           var $js$9=$js$8("\n");
           var s2=$js$7($js$9,"\n.B ",s);
           bs(b,"\n.B ");
           "unknown block:(sendself self-2/1507 relative_idents/1368 m_name/1509 s2/1513)";
           bs(b,$js$10);
           return bs(b,"\n")}
         else
          {return 0}},
       man_of_module_type,
       function(self-2,b,m_name,t)
        {var $js$5=String["concat"];
         var $js$6=Str["split"];
         var $js$7=Str["regexp"];
         var $js$8=$js$7("\n");
         var $js$9=Odoc_print["string_of_module_type"];
         var $js$10=$js$9(0,0,t);
         var $js$11=$js$6($js$8,$js$10);
         var s=$js$5("\n",$js$11);
         var $js$12=Str["global_replace"];
         var $js$13=Str["regexp"];
         var $js$14=$js$13("\n");
         var s2=$js$12($js$14,"\n.B ",s);
         bs(b,"\n.B ");
         "unknown block:(sendself self-2/1515 relative_idents/1368 m_name/1517 s2/1520)";
         bs(b,$js$15);
         return bs(b,"\n")},
       man_of_value,
       function(self-2,b,v)
        {var $js$5=Odoc_info["reset_type_names"];
         $js$5(0);
         bs(b,"\n.I val ");
         var $js$6=Odoc_info["Name"][1];
         var $js$7=$js$6(v[1]);
         bs(b,$js$7);
         bs(b," \n: ");
         "unknown block:(sendself self-2/1522 man_of_type_expr/1369 b/1523\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/1524))\n  (field 2 v/1524))";
         bs(b,".sp\n");
         "unknown block:(sendself self-2/1522 man_of_info/1525 0a b/1523 (field 1 v/1524))";
         return bs(b,"\n.sp\n")},
       man_of_type_extension,
       function(self-2,b,m_name,te)
        {var $js$5=Odoc_info["reset_type_names"];
         $js$5(0);
         bs(b,".I type ");
         var l=te[3];
         var $js$6=l;
         if($js$6)
          {var $js$7=Odoc_str["string_of_type_extension_param_list"];
           var s=$js$7(te);
           var $js$8=Str["global_replace"];
           var $js$9=Str["regexp"];
           var $js$10=$js$9("\n");
           var s2=$js$8($js$10,"\n.B ",s);
           bs(b,"\n.B ");
           "unknown block:(sendself self-2/1527 relative_idents/1368 m_name/1529 s2/1533)";
           bs(b,$js$11);
           bs(b,"\n");
           bs(b,".I ")}
         else
          {}
         "unknown block:(sendself self-2/1527 relative_idents/1368 m_name/1529 (field 1 te/1530))";
         bs(b,$js$12);
         bs(b," \n");
         bs(b,"+=");
         var $js$13=te[4]=0;
         if($js$13){bs(b," private")}else{}
         bs(b,"\n ");
         var $js$14=List["iter"];
         $js$14
          (function(x)
            {var $js$15=Odoc_info["Name"][5];
             var father=$js$15(x[1]);
             var $js$16=Pervasives["^"];
             var $js$17=Odoc_info["Name"][1];
             var $js$18=$js$17(x[1]);
             var $js$19=$js$16("| ",$js$18);
             bs(b,$js$19);
             var match=x[2];
             var match$1=x[3];
             var $js$20=match;
             if($js$20)
              {var $js$21=match$1;
               if($js$21)
                {bs(b,"\n.B : ");
                 'unknown block:(sendself self-2/1527 man_of_type_expr_list/1371 [0: 0a] b/1528 father/1535\n  " * " match/2132)';
                 bs(b,".B -> ");
                 "unknown block:(sendself self-2/1527 man_of_type_expr/1369 b/1528 father/1535\n  (field 0 match/2133))"}
               else
                {bs(b,"\n.B of ");
                 'unknown block:(sendself self-2/1527 man_of_type_expr_list/1371 [0: 0a] b/1528 father/1535\n  " * " match/2132)'}}
             else
              {var $js$22=match$1;
               if($js$22)
                {bs(b,"\n.B : ");
                 "unknown block:(sendself self-2/1527 man_of_type_expr/1369 b/1528 father/1535\n  (field 0 match/2133))"}
               else
                {bs(b,"\n")}}
             var match$2=x[5];
             var $js$23=match$2;
             if($js$23)
              {var xa=match$2[1];
               bs(b,".B = ");
               var match$3=xa[2];
               var $js$24=match$3;
               if($js$24){var $js$25=match$3[1][1]}else{var $js$25=xa[1]}
               bs(b,$js$25);
               bs(b,"\n")}
             else
              {}
             var match$4=x[7];
             var $js$26=match$4;
             if($js$26)
              {bs(b,'.I "  "\n');
               bs(b,"(* ");
               "unknown block:(sendself self-2/1527 man_of_info/1525 0a b/1528\n  (makeblock 0 (field 0 match/2126)))";
               return bs(b," *)\n ")}
             else
              {return bs(b," ")}},
           te[5]);
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1527 man_of_info/1525 0a b/1528 (field 0 te/1530))";
         return bs(b,"\n.sp\n")},
       man_of_exception,
       function(self-2,b,e)
        {var $js$5=Odoc_info["reset_type_names"];
         $js$5(0);
         bs(b,"\n.I exception ");
         var $js$6=Odoc_info["Name"][1];
         var $js$7=$js$6(e[1]);
         bs(b,$js$7);
         bs(b," \n");
         var match=e[3];
         var match$1=e[4];
         var $js$8=match;
         if($js$8)
          {var $js$9=match$1;
           if($js$9)
            {bs(b,".B : ");
             'unknown block:(sendself self-2/1544 man_of_type_expr_list/1371 [0: 0a] b/1545\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/1546)) " * "\n  match/2120)';
             bs(b,".B -> ");
             "unknown block:(sendself self-2/1544 man_of_type_expr/1369 b/1545\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/1546))\n  (field 0 match/2121))"}
           else
            {bs(b,".B of ");
             'unknown block:(sendself self-2/1544 man_of_type_expr_list/1371 [0: 0a] b/1545\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/1546)) " * "\n  (field 2 e/1546))'}}
         else
          {var $js$10=match$1;
           if($js$10)
            {bs(b,".B : ");
             "unknown block:(sendself self-2/1544 man_of_type_expr/1369 b/1545\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/1546))\n  (field 0 match/2121))"}
           else
            {}}
         var match$2=e[5];
         var $js$11=match$2;
         if($js$11)
          {var ea=match$2[1];
           bs(b," = ");
           var match$3=ea[2];
           var $js$12=match$3;
           if($js$12){var $js$13=match$3[1][1]}else{var $js$13=ea[1]}
           bs(b,$js$13)}
         else
          {}
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1544 man_of_info/1525 0a b/1545 (field 1 e/1546))";
         return bs(b,"\n.sp\n")},
       man_of_type,
       function(self-2,b,t)
        {var $js$5=Odoc_info["reset_type_names"];
         $js$5(0);
         var $js$6=Odoc_info["Name"][5];
         var father=$js$6(t[1]);
         var
          field_comment=
           function(param)
            {var $js$7=param;
             if($js$7)
              {bs(b,"  (* ");
               "unknown block:(sendself self-2/1554 man_of_info/1525 0a b/1555\n  (makeblock 0 (field 0 param/2113)))";
               return bs(b," *) ")}
             else
              {return 0}};
         bs(b,".I type ");
         "unknown block:(sendself self-2/1554 man_of_type_expr_param_list/1372 b/1555 father/1557\n  t/1556)";
         var match=t[3];
         var $js$7=match;
         if($js$7){bs(b,".I ")}else{}
         var $js$8=Odoc_info["Name"][1];
         var $js$9=$js$8(t[1]);
         bs(b,$js$9);
         bs(b," \n");
         var priv=t[5]=0;
         var match$1=t[6];
         var $js$10=match$1;
         if($js$10)
          {var match$2=match$1[1];
           var $js$11=match$2;
           if($js$11==0)
            {bs(b,"= ");
             var $js$12=priv;
             if($js$12){bs(b,"private ")}else{}
             "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 0 match/2110))"}
           else
            if($js$11==1)
             {bs(b,"= ");
              var $js$13=priv;
              if($js$13){bs(b,"private ")}else{}
              bs(b,"<");
              var $js$14=List["iter"];
              $js$14
               (function(r)
                 {var $js$15=Pervasives["^"];
                  var $js$16=$js$15(r[1]," : ");
                  bs(b,$js$16);
                  "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 1 r/1563))";
                  bs(b,";");
                  return field_comment(r[3])},
                match$2[1]);
              bs(b,"\n >\n")}}
         else
          {}
         var match$3=t[4];
         var $js$15=match$3;
         if(typeof $js$15=="number")
          {if($js$15==0){}else if($js$15==1){bs(b,"= ..");bs(b,"\n")}}
         else
          {var $js$16=$js$15[0];
           if($js$16==0)
            {bs(b,"=");
             var $js$17=priv;
             if($js$17){bs(b," private")}else{}
             bs(b,"\n ");
             var $js$18=List["iter"];
             $js$18
              (function(constr)
                {var $js$19=Pervasives["^"];
                 var $js$20=$js$19("| ",constr[1]);
                 bs(b,$js$20);
                 var
                  print_text=
                   function(t$1)
                    {bs(b,"  (* ");
                     "unknown block:(sendself self-2/1554 man_of_info/1525 0a b/1555 (makeblock 0 t/1568))";
                     return bs(b," *)\n ")};
                 var match$4=constr[2];
                 var match$5=constr[4];
                 var match$6=constr[3];
                 var $js$21=match$4;
                 if($js$21)
                  {var $js$22=match$5;
                   if($js$22)
                    {var t$1=match$5[1];
                     var $js$23=match$6;
                     if($js$23)
                      {bs(b,"\n.B of ");
                       'unknown block:(sendself self-2/1554 man_of_type_expr_list/1371 [0: 0a] b/1555 father/1557\n  " * " match/2101)';
                       bs(b,".B -> ");
                       "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 0 match/2103))";
                       bs(b,'.I "  "\n');
                       return print_text(t$1)}
                     else
                      {bs(b,"\n.B of ");
                       'unknown block:(sendself self-2/1554 man_of_type_expr_list/1371 [0: 0a] b/1555 father/1557\n  " * " match/2101)';
                       bs(b,'.I "  "\n');
                       return print_text(t$1)}}
                   else
                    {var $js$24=match$6;
                     if($js$24)
                      {bs(b,"\n.B : ");
                       'unknown block:(sendself self-2/1554 man_of_type_expr_list/1371 [0: 0a] b/1555 father/1557\n  " * " match/2101)';
                       bs(b,".B -> ");
                       "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 0 match/2103))";
                       return bs(b," ")}
                     else
                      {bs(b,"\n.B of ");
                       'unknown block:(sendself self-2/1554 man_of_type_expr_list/1371 [0: 0a] b/1555 father/1557\n  " * " match/2101)';
                       return bs(b," ")}}}
                 else
                  {var $js$25=match$5;
                   if($js$25)
                    {var t$2=match$5[1];
                     var $js$26=match$6;
                     if($js$26)
                      {bs(b,"\n.B : ");
                       "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 0 match/2103))";
                       bs(b,'.I "  "\n');
                       return print_text(t$2)}
                     else
                      {return print_text(t$2)}}
                   else
                    {var $js$27=match$6;
                     if($js$27)
                      {bs(b,"\n.B : ");
                       "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 0 match/2103))";
                       return bs(b," ")}
                     else
                      {return bs(b,"\n ")}}}},
               match$3[1])}
           else
            if($js$16==1)
             {bs(b,"= ");
              var $js$19=priv;
              if($js$19){bs(b,"private ")}else{}
              bs(b,"{");
              var $js$20=List["iter"];
              $js$20
               (function(r)
                 {var $js$21=r[2];
                  if($js$21)
                   {var $js$22="\n\n.B mutable \n"}
                  else
                   {var $js$22="\n "}
                  bs(b,$js$22);
                  var $js$23=Pervasives["^"];
                  var $js$24=$js$23(r[1]," : ");
                  bs(b,$js$24);
                  "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 2 r/1581))";
                  bs(b,";");
                  return field_comment(r[4])},
                match$3[1]);
              bs(b,"\n }\n")}}
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1554 man_of_info/1525 0a b/1555 (field 1 t/1556))";
         return bs(b,"\n.sp\n")},
       man_of_attribute,
       function(self-2,b,a)
        {bs(b,".I val ");
         var $js$5=a[3];
         if($js$5){bs(b,"virtual ")}else{}
         var $js$6=a[2];
         if($js$6)
          {var $js$7=Pervasives["^"];
           var $js$8=$js$7(Odoc_messages["mutab"]," ");
           bs(b,$js$8)}
         else
          {}
         var $js$9=Pervasives["^"];
         var $js$10=Odoc_info["Name"][1];
         var $js$11=$js$10(a[1][1]);
         var $js$12=$js$9($js$11," : ");
         bs(b,$js$12);
         "unknown block:(sendself self-2/1583 man_of_type_expr/1369 b/1584\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 (field 0 a/1585)))\n  (field 2 (field 0 a/1585)))";
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1583 man_of_info/1525 0a b/1584 (field 1 (field 0 a/1585)))";
         return bs(b,"\n.sp\n")},
       man_of_method,
       function(self-2,b,m)
        {bs(b,".I method ");
         var $js$5=m[2];
         if($js$5){bs(b,"private ")}else{}
         var $js$6=m[3];
         if($js$6){bs(b,"virtual ")}else{}
         var $js$7=Pervasives["^"];
         var $js$8=Odoc_info["Name"][1];
         var $js$9=$js$8(m[1][1]);
         var $js$10=$js$7($js$9," : ");
         bs(b,$js$10);
         "unknown block:(sendself self-2/1587 man_of_type_expr/1369 b/1588\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 (field 0 m/1589)))\n  (field 2 (field 0 m/1589)))";
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1587 man_of_info/1525 0a b/1588 (field 1 (field 0 m/1589)))";
         return bs(b,"\n.sp\n")},
       man_of_parameter_list,
       function(self-2,b,m_name,l)
        {var $js$5=l;
         if($js$5)
          {bs(b,"\n.B ");
           bs(b,Odoc_messages["parameters"]);
           bs(b,": \n");
           var $js$6=List["iter"];
           $js$6
            (function(p)
              {bs(b,".sp\n");
               bs(b,'"');
               var $js$7=Odoc_info["Parameter"][1];
               var $js$8=$js$7(p);
               bs(b,$js$8);
               bs(b,'"\n');
               "unknown block:(sendself self-2/1591 man_of_type_expr/1369 b/1592 m_name/1593\n  (apply (field 1 (field 3 (global Odoc_info!))) p/1595))";
               bs(b,"\n");
               "unknown block:(sendself self-2/1591 man_of_parameter_description/1381 b/1592 p/1595)";
               return bs(b,"\n")},
             l);
           return bs(b,"\n")}
         else
          {return 0}},
       man_of_parameter_description,
       function(self-2,b,p)
        {var $js$5=Odoc_info["Parameter"][3];
         var l=$js$5(p);
         var $js$6=l;
         if($js$6)
          {var $js$7=l[2];
           if($js$7)
            {var $js$8=List["iter"];
             return $js$8
                     (function(n)
                       {var $js$9=Odoc_info["Parameter"][4];
                        var match=$js$9(p,n);
                        var $js$10=match;
                        if($js$10)
                         {'unknown block:(sendself self-2/1597 man_of_code/1367 b/1598\n  (apply (field 15 (global Pervasives!)) n/1603 " : "))';
                          "unknown block:(sendself self-2/1597 man_of_text/1362 b/1598 (field 0 match/2092))"}
                        else
                         {return 0}},
                      l)}
           else
            {var $js$9=Odoc_info["Parameter"][4];
             var match=$js$9(p,l[1]);
             var $js$10=match;
             if($js$10)
              {bs(b,"\n ");
               "unknown block:(sendself self-2/1597 man_of_text/1362 b/1598 (field 0 match/2090))"}
             else
              {return 0}}}
         else
          {return 0}},
       man_of_module_parameter_list,
       function(self-2,b,m_name,l)
        {var $js$5=l;
         if($js$5)
          {bs(b,'.B "');
           bs(b,Odoc_messages["parameters"]);
           bs(b,':"\n');
           var $js$6=List["iter"];
           $js$6
            (function(param)
              {var desc_opt=param[2];
               var p=param[1];
               bs(b,".sp\n");
               var $js$7=Pervasives["^"];
               var $js$8=Pervasives["^"];
               var $js$9=$js$8(p[1],'"\n');
               var $js$10=$js$7('"',$js$9);
               bs(b,$js$10);
               var $js$11=Misc["may"];
               "unknown block:(sendself self-2/1606 man_of_module_type/1373 b/1607 m_name/1608)";
               $js$11($js$12,p[2]);
               bs(b,"\n");
               var $js$13=desc_opt;
               if($js$13)
                {"unknown block:(sendself self-2/1606 man_of_text/1362 b/1607 (field 0 desc_opt/1611))"}
               else
                {}
               return bs(b,"\n")},
             l);
           return bs(b,"\n\n")}
         else
          {return 0}},
       man_of_class,
       function(self-2,b,c)
        {var $js$5=Odoc_info["reset_type_names"];
         $js$5(0);
         var $js$6=Odoc_info["Name"][5];
         var father=$js$6(c[1]);
         bs(b,".I class ");
         var $js$7=c[5];
         if($js$7){bs(b,"virtual ")}else{}
         var l=c[4];
         var $js$8=l;
         if($js$8)
          {var $js$9=Odoc_str["string_of_class_type_param_list"];
           var $js$10=$js$9(l);
           bs(b,$js$10);
           bs(b," ")}
         else
          {}
         var $js$11=Odoc_info["Name"][1];
         var $js$12=$js$11(c[1]);
         bs(b,$js$12);
         bs(b," : ");
         "unknown block:(sendself self-2/1614 man_of_class_type_expr/1370 b/1615 father/1617\n  (field 2 c/1616))";
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1614 man_of_info/1525 0a b/1615 (field 1 c/1616))";
         return bs(b,"\n.sp\n")},
       man_of_class_type,
       function(self-2,b,ct)
        {var $js$5=Odoc_info["reset_type_names"];
         $js$5(0);
         bs(b,".I class type ");
         var $js$6=ct[5];
         if($js$6){bs(b,"virtual ")}else{}
         var l=ct[4];
         var $js$7=l;
         if($js$7)
          {var $js$8=Odoc_str["string_of_class_type_param_list"];
           var $js$9=$js$8(l);
           bs(b,$js$9);
           bs(b," ")}
         else
          {}
         var $js$10=Odoc_info["Name"][1];
         var $js$11=$js$10(ct[1]);
         bs(b,$js$11);
         bs(b," = ");
         "unknown block:(sendself self-2/1620 man_of_class_type_expr/1370 b/1621\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 ct/1622))\n  (field 2 ct/1622))";
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1620 man_of_info/1525 0a b/1621 (field 1 ct/1622))";
         return bs(b,"\n.sp\n")},
       man_of_module,
       function(self-2,b,m)
        {bs(b,".I module ");
         var $js$5=Odoc_info["Name"][1];
         var $js$6=$js$5(m[1]);
         bs(b,$js$6);
         bs(b," : ");
         "unknown block:(sendself self-2/1625 man_of_module_type/1373 b/1626\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 m/1627))\n  (field 1 m/1627))";
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1625 man_of_info/1525 0a b/1626 (field 2 m/1627))";
         return bs(b,"\n.sp\n")},
       man_of_modtype,
       function(self-2,b,mt)
        {bs(b,".I module type ");
         var $js$5=Odoc_info["Name"][1];
         var $js$6=$js$5(mt[1]);
         bs(b,$js$6);
         bs(b," = ");
         var match=mt[3];
         var $js$7=match;
         if($js$7)
          {"unknown block:(sendself self-2/1629 man_of_module_type/1373 b/1630\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 mt/1631))\n  (field 0 match/2077))"}
         else
          {}
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1629 man_of_info/1525 0a b/1630 (field 1 mt/1631))";
         return bs(b,"\n.sp\n")},
       man_of_module_comment,
       function(self-2,b,text)
        {bs(b,"\n.PP\n");
         'unknown block:(sendself self-2/1634 man_of_text/1362 b/1635\n  (makeblock 0\n    (makeblock 1\n      (apply (field 15 (global Pervasives!)) "=== "\n        (apply (field 15 (global Pervasives!))\n          (apply (field 5 (global Odoc_misc!)) text/1636) " ===")))\n    0a))';
         return bs(b,"\n.PP\n")},
       man_of_class_comment,
       function(self-2,b,text)
        {bs(b,"\n.PP\n");
         'unknown block:(sendself self-2/1638 man_of_text/1362 b/1639\n  (makeblock 0\n    (makeblock 1\n      (apply (field 15 (global Pervasives!)) "=== "\n        (apply (field 15 (global Pervasives!))\n          (apply (field 5 (global Odoc_misc!)) text/1640) " ===")))\n    0a))';
         return bs(b,"\n.PP\n")},
       man_of_recfield,
       function(self-2,b,modname,f)
        {bs(b,".I ");
         var $js$5=f[2];
         if($js$5)
          {var $js$6=Pervasives["^"];
           var $js$7=$js$6(Odoc_messages["mutab"]," ");
           bs(b,$js$7)}
         else
          {}
         var $js$8=Pervasives["^"];
         var $js$9=$js$8(f[1]," : ");
         bs(b,$js$9);
         "unknown block:(sendself self-2/1642 man_of_type_expr/1369 b/1643 modname/1644\n  (field 2 f/1645))";
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1642 man_of_info/1525 0a b/1643 (field 3 f/1645))";
         return bs(b,"\n.sp\n")},
       man_of_const,
       function(self-2,b,modname,c)
        {bs(b,".I ");
         var $js$5=Pervasives["^"];
         var $js$6=$js$5(c[1]," ");
         bs(b,$js$6);
         var match=c[2];
         var $js$7=match;
         if($js$7)
          {bs(b,"of ");
           "unknown block:(sendself self-2/1647 man_of_type_expr/1369 b/1648 modname/1649\n  (field 0 match/2071))";
           var $js$8=List["iter"];
           $js$8
            (function(ty)
              {bs(b," * ");
               "unknown block:(sendself self-2/1647 man_of_type_expr/1369 b/1648 modname/1649 ty/1653)"},
             match[2])}
         else
          {}
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1647 man_of_info/1525 0a b/1648 (field 3 c/1650))";
         return bs(b,"\n.sp\n")},
       man_of_included_module,
       function(self-2,b,m_name,im)
        {bs(b,".I include ");
         var match=im[2];
         var $js$5=match;
         if($js$5)
          {var name=match[1][1][1];
           "unknown block:(sendself self-2/1655 relative_idents/1368 m_name/1657 name/1660)";
           bs(b,$js$6)}
         else
          {bs(b,im[1])}
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1655 man_of_info/1525 0a b/1656 (field 2 im/1658))";
         return bs(b,"\n.sp\n")},
       generate_for_class,
       function(self-2,cl)
        {var $js$5=Odoc_info["reset_type_names"];
         $js$5(0);
         var $js$6=Unix["time"];
         var date=$js$6(0);
         "unknown block:(sendself self-2/1664 file_name/1358 (field 0 cl/1665))";
         try
          {"unknown block:(sendself self-2/1664 open_out/1360 file/1667)";
           var b=new_buf(0);
           var $js$7=Pervasives["^"];
           var $js$8=Pervasives["^"];
           var $js$9=$js$8(cl[1],'" ');
           var $js$10=$js$7('.TH "',$js$9);
           bs(b,$js$10);
           bs(b,man_section[1]);
           var $js$11=Pervasives["^"];
           var $js$12=Pervasives["^"];
           var $js$13=Odoc_misc["string_of_date"];
           var $js$14=$js$13([0,0],date);
           var $js$15=$js$12($js$14," ");
           var $js$16=$js$11(" ",$js$15);
           bs(b,$js$16);
           bs(b,"OCamldoc ");
           var $js$17=Pervasives["^"];
           var $js$18=Pervasives["^"];
           var match=Odoc_info["Global"][6][1];
           var $js$19=match;
           if($js$19){var $js$20=match[1]}else{var $js$20=""}
           var $js$21=$js$18($js$20,'"\n');
           var $js$22=$js$17('"',$js$21);
           bs(b,$js$22);
           var match$1=cl[2];
           var $js$23=match$1;
           if($js$23)
            {var match$2=match$1[1][1];
             var $js$24=match$2;
             if($js$24)
              {var $js$25=Odoc_info["string_of_text"];
               var $js$26=Odoc_info["first_sentence_of_text"];
               var $js$27=$js$26(match$2[1]);
               var s=$js$25($js$27);
               "unknown block:(sendself self-2/1664 remove_newlines/1363 s/1673)"}
             else
              {var exit=51}}
           else
            {var exit=51}
           switch(exit){case 51:var abstract="no description"}
           bs(b,".SH NAME\n");
           var $js$28=Pervasives["^"];
           var $js$29=Pervasives["^"];
           var $js$30=Pervasives["^"];
           var $js$31=$js$30(abstract,"\n");
           var $js$32=$js$29(" \- ",$js$31);
           var $js$33=$js$28(cl[1],$js$32);
           bs(b,$js$33);
           var $js$34=Pervasives["^"];
           var $js$35=Pervasives["^"];
           var $js$36=$js$35(Odoc_messages["clas"],"\n");
           var $js$37=$js$34(".SH ",$js$36);
           bs(b,$js$37);
           var $js$38=Pervasives["^"];
           var $js$39=Pervasives["^"];
           var $js$40=Pervasives["^"];
           var $js$41=$js$40(cl[1],"\n");
           var $js$42=$js$39("   ",$js$41);
           var $js$43=$js$38(Odoc_messages["clas"],$js$42);
           bs(b,$js$43);
           var $js$44=Pervasives["^"];
           var $js$45=Pervasives["^"];
           var $js$46=$js$45(Odoc_messages["documentation"],"\n");
           var $js$47=$js$44(".SH ",$js$46);
           bs(b,$js$47);
           bs(b,".sp\n");
           "unknown block:(sendself self-2/1664 man_of_class/1383 b/1669 cl/1665)";
           'unknown block:(sendself self-2/1664 man_of_parameter_list/1380 b/1669 "" (field 6 cl/1665))';
           bs(b,"\n.sp\n.sp\n");
           var $js$48=List["iter"];
           var $js$49=Odoc_info["Class"][1];
           var $js$50=$js$49(0,cl);
           $js$48
            (function(element)
              {var $js$51=element;
               if($js$51==0)
                {"unknown block:(sendself self-2/1664 man_of_attribute/1378 b/1669 (field 0 element/1674))"}
               else
                if($js$51==1)
                 {"unknown block:(sendself self-2/1664 man_of_method/1379 b/1669 (field 0 element/1674))"}
                else
                 if($js$51==2)
                  {"unknown block:(sendself self-2/1664 man_of_class_comment/1388 b/1669\n  (field 0 element/1674))"}},
             $js$50);
           var $js$51=Buffer["output_buffer"];
           $js$51(chanout,b);
           var $js$52=Pervasives["close_out"];
           return $js$52(chanout)}
         catch(exn)
          {var $js$53=exn[1]=Sys_error;
           if($js$53)
            {Odoc_info["errors"][0]++;
             var $js$54=Pervasives["prerr_endline"];
             return $js$54(exn[2])}
           else
            {return "unknown primitive:reraise"}}},
       generate_for_class_type,
       function(self-2,ct)
        {var $js$5=Odoc_info["reset_type_names"];
         $js$5(0);
         var $js$6=Unix["time"];
         var date=$js$6(0);
         "unknown block:(sendself self-2/1680 file_name/1358 (field 0 ct/1681))";
         try
          {"unknown block:(sendself self-2/1680 open_out/1360 file/1683)";
           var b=new_buf(0);
           var $js$7=Pervasives["^"];
           var $js$8=Pervasives["^"];
           var $js$9=$js$8(ct[1],'" ');
           var $js$10=$js$7('.TH "',$js$9);
           bs(b,$js$10);
           bs(b,man_section[1]);
           var $js$11=Pervasives["^"];
           var $js$12=Pervasives["^"];
           var $js$13=Odoc_misc["string_of_date"];
           var $js$14=$js$13([0,0],date);
           var $js$15=$js$12($js$14," ");
           var $js$16=$js$11(" ",$js$15);
           bs(b,$js$16);
           bs(b,"OCamldoc ");
           var $js$17=Pervasives["^"];
           var $js$18=Pervasives["^"];
           var match=Odoc_info["Global"][6][1];
           var $js$19=match;
           if($js$19){var $js$20=match[1]}else{var $js$20=""}
           var $js$21=$js$18($js$20,'"\n');
           var $js$22=$js$17('"',$js$21);
           bs(b,$js$22);
           var match$1=ct[2];
           var $js$23=match$1;
           if($js$23)
            {var match$2=match$1[1][1];
             var $js$24=match$2;
             if($js$24)
              {var $js$25=Odoc_info["string_of_text"];
               var $js$26=Odoc_info["first_sentence_of_text"];
               var $js$27=$js$26(match$2[1]);
               var s=$js$25($js$27);
               "unknown block:(sendself self-2/1680 remove_newlines/1363 s/1689)"}
             else
              {var exit=43}}
           else
            {var exit=43}
           switch(exit){case 43:var abstract="no description"}
           bs(b,".SH NAME\n");
           var $js$28=Pervasives["^"];
           var $js$29=Pervasives["^"];
           var $js$30=Pervasives["^"];
           var $js$31=$js$30(abstract,"\n");
           var $js$32=$js$29(" \- ",$js$31);
           var $js$33=$js$28(ct[1],$js$32);
           bs(b,$js$33);
           var $js$34=Pervasives["^"];
           var $js$35=Pervasives["^"];
           var $js$36=$js$35(Odoc_messages["class_type"],"\n");
           var $js$37=$js$34(".SH ",$js$36);
           bs(b,$js$37);
           var $js$38=Pervasives["^"];
           var $js$39=Pervasives["^"];
           var $js$40=Pervasives["^"];
           var $js$41=$js$40(ct[1],"\n");
           var $js$42=$js$39("   ",$js$41);
           var $js$43=$js$38(Odoc_messages["class_type"],$js$42);
           bs(b,$js$43);
           var $js$44=Pervasives["^"];
           var $js$45=Pervasives["^"];
           var $js$46=$js$45(Odoc_messages["documentation"],"\n");
           var $js$47=$js$44(".SH ",$js$46);
           bs(b,$js$47);
           bs(b,".sp\n");
           "unknown block:(sendself self-2/1680 man_of_class_type/1384 b/1685 ct/1681)";
           bs(b,"\n.sp\n.sp\n");
           var $js$48=List["iter"];
           var $js$49=Odoc_info["Class"][6];
           var $js$50=$js$49(0,ct);
           $js$48
            (function(element)
              {var $js$51=element;
               if($js$51==0)
                {"unknown block:(sendself self-2/1680 man_of_attribute/1378 b/1685 (field 0 element/1690))"}
               else
                if($js$51==1)
                 {"unknown block:(sendself self-2/1680 man_of_method/1379 b/1685 (field 0 element/1690))"}
                else
                 if($js$51==2)
                  {"unknown block:(sendself self-2/1680 man_of_class_comment/1388 b/1685\n  (field 0 element/1690))"}},
             $js$50);
           var $js$51=Buffer["output_buffer"];
           $js$51(chanout,b);
           var $js$52=Pervasives["close_out"];
           return $js$52(chanout)}
         catch(exn)
          {var $js$53=exn[1]=Sys_error;
           if($js$53)
            {Odoc_info["errors"][0]++;
             var $js$54=Pervasives["prerr_endline"];
             return $js$54(exn[2])}
           else
            {return "unknown primitive:reraise"}}},
       man_of_module_type_body,
       function(self-2,b,mt)
        {"unknown block:(sendself self-2/1696 man_of_info/1525 0a b/1697 (field 1 mt/1698))";
         bs(b,"\n.sp\n");
         'unknown block:(sendself self-2/1696 man_of_module_parameter_list/1382 b/1697 ""\n  (apply (field 29 (field 9 (global Odoc_info!))) 0a mt/1698))';
         bs(b,"\n.sp\n.sp\n");
         var $js$5=List["iter"];
         var $js$6=Odoc_info["Module"][17];
         var $js$7=$js$6(0,mt);
         return $js$5
                 (function(ele)
                   {var $js$8=ele;
                    if($js$8==0)
                     {"unknown block:(sendself self-2/1696 man_of_module/1385 b/1697 (field 0 ele/1699))"}
                    else
                     if($js$8==1)
                      {"unknown block:(sendself self-2/1696 man_of_modtype/1386 b/1697 (field 0 ele/1699))"}
                     else
                      if($js$8==2)
                       {"unknown block:(sendself self-2/1696 man_of_included_module/1391 b/1697 (field 0 mt/1698)\n  (field 0 ele/1699))"}
                      else
                       if($js$8==3)
                        {"unknown block:(sendself self-2/1696 man_of_class/1383 b/1697 (field 0 ele/1699))"}
                       else
                        if($js$8==4)
                         {"unknown block:(sendself self-2/1696 man_of_class_type/1384 b/1697 (field 0 ele/1699))"}
                        else
                         if($js$8==5)
                          {"unknown block:(sendself self-2/1696 man_of_value/1374 b/1697 (field 0 ele/1699))"}
                         else
                          if($js$8==6)
                           {"unknown block:(sendself self-2/1696 man_of_type_extension/1375 b/1697 (field 0 mt/1698)\n  (field 0 ele/1699))"}
                          else
                           if($js$8==7)
                            {"unknown block:(sendself self-2/1696 man_of_exception/1376 b/1697 (field 0 ele/1699))"}
                           else
                            if($js$8==8)
                             {"unknown block:(sendself self-2/1696 man_of_type/1377 b/1697 (field 0 ele/1699))"}
                            else
                             if($js$8==9)
                              {"unknown block:(sendself self-2/1696 man_of_module_comment/1387 b/1697 (field 0 ele/1699))"}},
                  $js$7)},
       generate_for_module_type,
       function(self-2,mt)
        {var $js$5=Unix["time"];
         var date=$js$5(0);
         "unknown block:(sendself self-2/1711 file_name/1358 (field 0 mt/1712))";
         try
          {"unknown block:(sendself self-2/1711 open_out/1360 file/1714)";
           var b=new_buf(0);
           var $js$6=Pervasives["^"];
           var $js$7=Pervasives["^"];
           var $js$8=$js$7(mt[1],'" ');
           var $js$9=$js$6('.TH "',$js$8);
           bs(b,$js$9);
           bs(b,man_section[1]);
           var $js$10=Pervasives["^"];
           var $js$11=Pervasives["^"];
           var $js$12=Odoc_misc["string_of_date"];
           var $js$13=$js$12([0,0],date);
           var $js$14=$js$11($js$13," ");
           var $js$15=$js$10(" ",$js$14);
           bs(b,$js$15);
           bs(b,"OCamldoc ");
           var $js$16=Pervasives["^"];
           var $js$17=Pervasives["^"];
           var match=Odoc_info["Global"][6][1];
           var $js$18=match;
           if($js$18){var $js$19=match[1]}else{var $js$19=""}
           var $js$20=$js$17($js$19,'"\n');
           var $js$21=$js$16('"',$js$20);
           bs(b,$js$21);
           var match$1=mt[2];
           var $js$22=match$1;
           if($js$22)
            {var match$2=match$1[1][1];
             var $js$23=match$2;
             if($js$23)
              {var $js$24=Odoc_info["string_of_text"];
               var $js$25=Odoc_info["first_sentence_of_text"];
               var $js$26=$js$25(match$2[1]);
               var s=$js$24($js$26);
               "unknown block:(sendself self-2/1711 remove_newlines/1363 s/1720)"}
             else
              {var exit=35}}
           else
            {var exit=35}
           switch(exit){case 35:var abstract="no description"}
           bs(b,".SH NAME\n");
           var $js$27=Pervasives["^"];
           var $js$28=Pervasives["^"];
           var $js$29=Pervasives["^"];
           var $js$30=$js$29(abstract,"\n");
           var $js$31=$js$28(" \- ",$js$30);
           var $js$32=$js$27(mt[1],$js$31);
           bs(b,$js$32);
           var $js$33=Pervasives["^"];
           var $js$34=Pervasives["^"];
           var $js$35=$js$34(Odoc_messages["module_type"],"\n");
           var $js$36=$js$33(".SH ",$js$35);
           bs(b,$js$36);
           var $js$37=Pervasives["^"];
           var $js$38=Pervasives["^"];
           var $js$39=Pervasives["^"];
           var $js$40=$js$39(mt[1],"\n");
           var $js$41=$js$38("   ",$js$40);
           var $js$42=$js$37(Odoc_messages["module_type"],$js$41);
           bs(b,$js$42);
           var $js$43=Pervasives["^"];
           var $js$44=Pervasives["^"];
           var $js$45=$js$44(Odoc_messages["documentation"],"\n");
           var $js$46=$js$43(".SH ",$js$45);
           bs(b,$js$46);
           bs(b,".sp\n");
           var $js$47=Pervasives["^"];
           var $js$48=$js$47(Odoc_messages["module_type"],"\n");
           bs(b,$js$48);
           var $js$49=Pervasives["^"];
           var $js$50=Pervasives["^"];
           var $js$51=Odoc_info["Name"][1];
           var $js$52=$js$51(mt[1]);
           var $js$53=$js$50($js$52,'"\n');
           var $js$54=$js$49('.BI "',$js$53);
           bs(b,$js$54);
           bs(b," = ");
           var match$3=mt[3];
           var $js$55=match$3;
           if($js$55)
            {"unknown block:(sendself self-2/1711 man_of_module_type/1373 b/1716\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 mt/1712))\n  (field 0 match/1976))"}
           else
            {}
           bs(b,"\n.sp\n");
           "unknown block:(sendself self-2/1711 man_of_module_type_body/1394 b/1716 mt/1712)";
           var $js$56=Buffer["output_buffer"];
           $js$56(chanout,b);
           var $js$57=Pervasives["close_out"];
           return $js$57(chanout)}
         catch(exn)
          {var $js$58=exn[1]=Sys_error;
           if($js$58)
            {Odoc_info["errors"][0]++;
             var $js$59=Pervasives["prerr_endline"];
             return $js$59(exn[2])}
           else
            {return "unknown primitive:reraise"}}},
       man_of_module_body,
       function(self-2,b,m)
        {"unknown block:(sendself self-2/1724 man_of_info/1525 0a b/1725 (field 2 m/1726))";
         bs(b,"\n.sp\n");
         'unknown block:(sendself self-2/1724 man_of_module_parameter_list/1382 b/1725 ""\n  (apply (field 14 (field 9 (global Odoc_info!))) 0a m/1726))';
         bs(b,"\n.sp\n.sp\n");
         var $js$5=List["iter"];
         var $js$6=Odoc_info["Module"][1];
         var $js$7=$js$6(0,m);
         return $js$5
                 (function(ele)
                   {var $js$8=ele;
                    if($js$8==0)
                     {"unknown block:(sendself self-2/1724 man_of_module/1385 b/1725 (field 0 ele/1727))"}
                    else
                     if($js$8==1)
                      {"unknown block:(sendself self-2/1724 man_of_modtype/1386 b/1725 (field 0 ele/1727))"}
                     else
                      if($js$8==2)
                       {"unknown block:(sendself self-2/1724 man_of_included_module/1391 b/1725 (field 0 m/1726)\n  (field 0 ele/1727))"}
                      else
                       if($js$8==3)
                        {"unknown block:(sendself self-2/1724 man_of_class/1383 b/1725 (field 0 ele/1727))"}
                       else
                        if($js$8==4)
                         {"unknown block:(sendself self-2/1724 man_of_class_type/1384 b/1725 (field 0 ele/1727))"}
                        else
                         if($js$8==5)
                          {"unknown block:(sendself self-2/1724 man_of_value/1374 b/1725 (field 0 ele/1727))"}
                         else
                          if($js$8==6)
                           {"unknown block:(sendself self-2/1724 man_of_type_extension/1375 b/1725 (field 0 m/1726)\n  (field 0 ele/1727))"}
                          else
                           if($js$8==7)
                            {"unknown block:(sendself self-2/1724 man_of_exception/1376 b/1725 (field 0 ele/1727))"}
                           else
                            if($js$8==8)
                             {"unknown block:(sendself self-2/1724 man_of_type/1377 b/1725 (field 0 ele/1727))"}
                            else
                             if($js$8==9)
                              {"unknown block:(sendself self-2/1724 man_of_module_comment/1387 b/1725 (field 0 ele/1727))"}},
                  $js$7)},
       generate_for_module,
       function(self-2,m)
        {var $js$5=Unix["time"];
         var date=$js$5(0);
         "unknown block:(sendself self-2/1739 file_name/1358 (field 0 m/1740))";
         try
          {"unknown block:(sendself self-2/1739 open_out/1360 file/1742)";
           var b=new_buf(0);
           var $js$6=Pervasives["^"];
           var $js$7=Pervasives["^"];
           var $js$8=$js$7(m[1],'" ');
           var $js$9=$js$6('.TH "',$js$8);
           bs(b,$js$9);
           bs(b,man_section[1]);
           var $js$10=Pervasives["^"];
           var $js$11=Pervasives["^"];
           var $js$12=Odoc_misc["string_of_date"];
           var $js$13=$js$12([0,0],date);
           var $js$14=$js$11($js$13," ");
           var $js$15=$js$10(" ",$js$14);
           bs(b,$js$15);
           bs(b,"OCamldoc ");
           var $js$16=Pervasives["^"];
           var $js$17=Pervasives["^"];
           var match=Odoc_info["Global"][6][1];
           var $js$18=match;
           if($js$18){var $js$19=match[1]}else{var $js$19=""}
           var $js$20=$js$17($js$19,'"\n');
           var $js$21=$js$16('"',$js$20);
           bs(b,$js$21);
           var match$1=m[3];
           var $js$22=match$1;
           if($js$22)
            {var match$2=match$1[1][1];
             var $js$23=match$2;
             if($js$23)
              {var $js$24=Odoc_info["string_of_text"];
               var $js$25=Odoc_info["first_sentence_of_text"];
               var $js$26=$js$25(match$2[1]);
               var s=$js$24($js$26);
               "unknown block:(sendself self-2/1739 remove_newlines/1363 s/1748)"}
             else
              {var exit=27}}
           else
            {var exit=27}
           switch(exit){case 27:var abstract="no description"}
           bs(b,".SH NAME\n");
           var $js$27=Pervasives["^"];
           var $js$28=Pervasives["^"];
           var $js$29=Pervasives["^"];
           var $js$30=$js$29(abstract,"\n");
           var $js$31=$js$28(" \- ",$js$30);
           var $js$32=$js$27(m[1],$js$31);
           bs(b,$js$32);
           var $js$33=Pervasives["^"];
           var $js$34=Pervasives["^"];
           var $js$35=$js$34(Odoc_messages["modul"],"\n");
           var $js$36=$js$33(".SH ",$js$35);
           bs(b,$js$36);
           var $js$37=Pervasives["^"];
           var $js$38=Pervasives["^"];
           var $js$39=Pervasives["^"];
           var $js$40=$js$39(m[1],"\n");
           var $js$41=$js$38("   ",$js$40);
           var $js$42=$js$37(Odoc_messages["modul"],$js$41);
           bs(b,$js$42);
           var $js$43=Pervasives["^"];
           var $js$44=Pervasives["^"];
           var $js$45=$js$44(Odoc_messages["documentation"],"\n");
           var $js$46=$js$43(".SH ",$js$45);
           bs(b,$js$46);
           bs(b,".sp\n");
           var $js$47=Pervasives["^"];
           var $js$48=$js$47(Odoc_messages["modul"],"\n");
           bs(b,$js$48);
           var $js$49=Pervasives["^"];
           var $js$50=Pervasives["^"];
           var $js$51=Odoc_info["Name"][1];
           var $js$52=$js$51(m[1]);
           var $js$53=$js$50($js$52,'"\n');
           var $js$54=$js$49('.BI "',$js$53);
           bs(b,$js$54);
           bs(b," : ");
           "unknown block:(sendself self-2/1739 man_of_module_type/1373 b/1744\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 m/1740))\n  (field 1 m/1740))";
           bs(b,"\n.sp\n");
           "unknown block:(sendself self-2/1739 man_of_module_body/1396 b/1744 m/1740)";
           var $js$55=Buffer["output_buffer"];
           $js$55(chanout,b);
           var $js$56=Pervasives["close_out"];
           return $js$56(chanout)}
         catch(exn)
          {var $js$57=exn[1]=Sys_error;
           if($js$57)
            {return "unknown primitive:raise"}
           else
            {return "unknown primitive:reraise"}}},
       create_groups,
       function(self-2,mini,module_list)
        {var
          name=
           function(res_ele)
            {var $js$5=res_ele;
             if($js$5==4)
              {var exit=21}
             else
              if($js$5==5)
               {var exit=21}
              else
               if($js$5==6)
                {var exit=21}
               else
                if($js$5==7)
                 {var exit=21}
                else
                 if($js$5==8)
                  {var exit=22}
                 else
                  if($js$5==9)
                   {var exit=22}
                  else
                   if($js$5==10)
                    {return "unknown primitive:raise"}
                   else
                    if($js$5==11)
                     {var exit=23}
                    else
                     if($js$5==12){var exit=23}else{return res_ele[1][1]}
             switch(exit)
              {case 21:
                var $js$6=Odoc_info["Name"][1];return $js$6(res_ele[1][1]);
               case 22:
                var $js$7=Odoc_info["Name"][1];return $js$7(res_ele[1][1][1]);
               case 23:return res_ele[2][1]
               }};
         var $js$5=Odoc_info["Search"][1];
         var $js$6=Str["regexp"];
         var $js$7=$js$6(".*");
         var all_items_pre=$js$5(module_list,$js$7);
         var $js$8=List["filter"];
         var
          all_items=
           $js$8
            (function(r)
              {var $js$9=r;
               if($js$9==0)
                {var exit=16}
               else
                if($js$9==1)
                 {var exit=16}
                else
                 if($js$9==2)
                  {var exit=16}
                 else
                  if($js$9==3)
                   {var exit=16}
                  else
                   if($js$9==10){return 0}else{return !mini}
               switch(exit){case 16:return 1}},
             all_items_pre);
         var $js$9=List["sort"];
         var
          sorted_items=
           $js$9
            (function(e1,e2)
              {var $js$10=name(e1);
               var $js$11=name(e2);
               return "unknown primitive:caml_string_compare"},
             all_items);
         var
          f=
           function(acc1,acc2,l)
            {var $js$10=l;
             if($js$10)
              {var q=l[2];
               var h=l[1];
               var $js$11=acc2;
               if($js$11)
                {var $js$12=name(h);
                 var $js$13=name(acc2[1]);
                 var $js$14="unknown primitive:caml_string_equal";
                 if($js$14)
                  {var $js$15=List["mem"];
                   var $js$16=$js$15(h,acc2);
                   if($js$16)
                    {return f(acc1,acc2,q)}
                   else
                    {var $js$17=Pervasives["@"];
                     var $js$18=$js$17(acc2,[0,h,0]);
                     return f(acc1,$js$18,q)}}
                 else
                  {return f([0,acc2,acc1],[0,h,0],q)}}
               else
                {return f(acc1,[0,h,0],q)}}
             else
              {return [0,acc2,acc1]}};
         return f(0,0,sorted_items)},
       generate_for_group,
       function(self-2,l)
        {var $js$5=Odoc_info["Name"][1];
         var $js$6=List["hd"];
         var match=$js$6(l);
         var $js$7=match;
         if($js$7==8)
          {var exit=12}
         else
          if($js$7==9)
           {var exit=12}
          else
           if($js$7==10)
            {var $js$8=match[1]}
           else
            if($js$7==11)
             {var exit=13}
            else
             if($js$7==12){var exit=13}else{var $js$8=match[1][1]}
         switch(exit)
          {case 12:var $js$8=match[1][1][1];case 13:var $js$8=match[2][1]}
         var name=$js$5($js$8);
         var $js$9=Unix["time"];
         var date=$js$9(0);
         "unknown block:(sendself self-2/1797 file_name/1358 name/1799)";
         try
          {"unknown block:(sendself self-2/1797 open_out/1360 file/1814)";
           var b=new_buf(0);
           var $js$10=Pervasives["^"];
           var $js$11=Pervasives["^"];
           var $js$12=$js$11(name,'" ');
           var $js$13=$js$10('.TH "',$js$12);
           bs(b,$js$13);
           bs(b,man_section[1]);
           var $js$14=Pervasives["^"];
           var $js$15=Pervasives["^"];
           var $js$16=Odoc_misc["string_of_date"];
           var $js$17=$js$16([0,0],date);
           var $js$18=$js$15($js$17," ");
           var $js$19=$js$14(" ",$js$18);
           bs(b,$js$19);
           bs(b,"OCamldoc ");
           var $js$20=Pervasives["^"];
           var $js$21=Pervasives["^"];
           var match$1=Odoc_info["Global"][6][1];
           var $js$22=match$1;
           if($js$22){var $js$23=match$1[1]}else{var $js$23=""}
           var $js$24=$js$21($js$23,'"\n');
           var $js$25=$js$20('"',$js$24);
           bs(b,$js$25);
           bs(b,".SH NAME\n");
           var $js$26=Pervasives["^"];
           var $js$27=Pervasives["^"];
           var $js$28=Pervasives["^"];
           var $js$29=$js$28(name," elements\n\n");
           var $js$30=$js$27(" \- all ",$js$29);
           var $js$31=$js$26(name,$js$30);
           bs(b,$js$31);
           var
            f=
             function(ele)
              {var $js$32=ele;
               if($js$32==0)
                {var m=ele[1];
                 var $js$33=Odoc_info["Name"][5];
                 var $js$34=$js$33(m[1]);
                 var $js$35="unknown primitive:caml_string_notequal";
                 if($js$35)
                  {var $js$36=Pervasives["^"];
                   var $js$37=Pervasives["^"];
                   var $js$38=Pervasives["^"];
                   var $js$39=Pervasives["^"];
                   var $js$40=Odoc_info["Name"][5];
                   var $js$41=$js$40(m[1]);
                   var $js$42=$js$39($js$41,"\n");
                   var $js$43=$js$38(" ",$js$42);
                   var $js$44=$js$37(Odoc_messages["modul"],$js$43);
                   var $js$45=$js$36("\n.SH ",$js$44);
                   bs(b,$js$45);
                   var $js$46=Pervasives["^"];
                   var $js$47=$js$46(Odoc_messages["modul"],"\n");
                   bs(b,$js$47);
                   var $js$48=Pervasives["^"];
                   var $js$49=Pervasives["^"];
                   var $js$50=Odoc_info["Name"][1];
                   var $js$51=$js$50(m[1]);
                   var $js$52=$js$49($js$51,'"\n');
                   var $js$53=$js$48('.BI "',$js$52);
                   bs(b,$js$53);
                   bs(b," : ");
                   "unknown block:(sendself self-2/1797 man_of_module_type/1373 b/1816\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 m/1832))\n  (field 1 m/1832))"}
                 else
                  {var $js$54=Pervasives["^"];
                   var $js$55=Pervasives["^"];
                   var $js$56=Pervasives["^"];
                   var $js$57=Pervasives["^"];
                   var $js$58=$js$57(m[1],"\n");
                   var $js$59=$js$56(" ",$js$58);
                   var $js$60=$js$55(Odoc_messages["modul"],$js$59);
                   var $js$61=$js$54("\n.SH ",$js$60);
                   bs(b,$js$61);
                   bs(b," : ");
                   "unknown block:(sendself self-2/1797 man_of_module_type/1373 b/1816\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 m/1832))\n  (field 1 m/1832))"}
                 bs(b,"\n.sp\n");
                 "unknown block:(sendself self-2/1797 man_of_module_body/1396 b/1816 m/1832)"}
               else
                if($js$32==1)
                 {var mt=ele[1];
                  var $js$62=Pervasives["^"];
                  var $js$63=Pervasives["^"];
                  var $js$64=Pervasives["^"];
                  var $js$65=Pervasives["^"];
                  var $js$66=Odoc_info["Name"][5];
                  var $js$67=$js$66(mt[1]);
                  var $js$68=$js$65($js$67,"\n");
                  var $js$69=$js$64(" ",$js$68);
                  var $js$70=$js$63(Odoc_messages["modul"],$js$69);
                  var $js$71=$js$62("\n.SH ",$js$70);
                  bs(b,$js$71);
                  var $js$72=Pervasives["^"];
                  var $js$73=$js$72(Odoc_messages["module_type"],"\n");
                  bs(b,$js$73);
                  var $js$74=Pervasives["^"];
                  var $js$75=Pervasives["^"];
                  var $js$76=Odoc_info["Name"][1];
                  var $js$77=$js$76(mt[1]);
                  var $js$78=$js$75($js$77,'"\n');
                  var $js$79=$js$74('.BI "',$js$78);
                  bs(b,$js$79);
                  bs(b," = ");
                  var match$2=mt[3];
                  var $js$80=match$2;
                  if($js$80)
                   {"unknown block:(sendself self-2/1797 man_of_module_type/1373 b/1816\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 mt/1833))\n  (field 0 match/1905))"}
                  else
                   {}
                  bs(b,"\n.sp\n");
                  "unknown block:(sendself self-2/1797 man_of_module_type_body/1394 b/1816 mt/1833)"}
                else
                 if($js$32==2)
                  {var c=ele[1];
                   var $js$81=Pervasives["^"];
                   var $js$82=Pervasives["^"];
                   var $js$83=Pervasives["^"];
                   var $js$84=Pervasives["^"];
                   var $js$85=Odoc_info["Name"][5];
                   var $js$86=$js$85(c[1]);
                   var $js$87=$js$84($js$86,"\n");
                   var $js$88=$js$83(" ",$js$87);
                   var $js$89=$js$82(Odoc_messages["modul"],$js$88);
                   var $js$90=$js$81("\n.SH ",$js$89);
                   bs(b,$js$90);
                   "unknown block:(sendself self-2/1797 man_of_class/1383 b/1816 c/1826)"}
                 else
                  if($js$32==3)
                   {var ct=ele[1];
                    var $js$91=Pervasives["^"];
                    var $js$92=Pervasives["^"];
                    var $js$93=Pervasives["^"];
                    var $js$94=Pervasives["^"];
                    var $js$95=Odoc_info["Name"][5];
                    var $js$96=$js$95(ct[1]);
                    var $js$97=$js$94($js$96,"\n");
                    var $js$98=$js$93(" ",$js$97);
                    var $js$99=$js$92(Odoc_messages["modul"],$js$98);
                    var $js$100=$js$91("\n.SH ",$js$99);
                    bs(b,$js$100);
                    "unknown block:(sendself self-2/1797 man_of_class_type/1384 b/1816 ct/1827)"}
                  else
                   if($js$32==4)
                    {var v=ele[1];
                     var $js$101=Pervasives["^"];
                     var $js$102=Pervasives["^"];
                     var $js$103=Pervasives["^"];
                     var $js$104=Pervasives["^"];
                     var $js$105=Odoc_info["Name"][5];
                     var $js$106=$js$105(v[1]);
                     var $js$107=$js$104($js$106,"\n");
                     var $js$108=$js$103(" ",$js$107);
                     var $js$109=$js$102(Odoc_messages["modul"],$js$108);
                     var $js$110=$js$101("\n.SH ",$js$109);
                     bs(b,$js$110);
                     "unknown block:(sendself self-2/1797 man_of_value/1374 b/1816 v/1820)"}
                   else
                    if($js$32==5)
                     {var t=ele[1];
                      var $js$111=Pervasives["^"];
                      var $js$112=Pervasives["^"];
                      var $js$113=Pervasives["^"];
                      var $js$114=Pervasives["^"];
                      var $js$115=Odoc_info["Name"][5];
                      var $js$116=$js$115(t[1]);
                      var $js$117=$js$114($js$116,"\n");
                      var $js$118=$js$113(" ",$js$117);
                      var $js$119=$js$112(Odoc_messages["modul"],$js$118);
                      var $js$120=$js$111("\n.SH ",$js$119);
                      bs(b,$js$120);
                      "unknown block:(sendself self-2/1797 man_of_type/1377 b/1816 t/1821)"}
                    else
                     if($js$32==6)
                      {var x=ele[1];
                       var $js$121=Pervasives["^"];
                       var $js$122=Pervasives["^"];
                       var $js$123=Pervasives["^"];
                       var $js$124=Pervasives["^"];
                       var $js$125=Odoc_info["Name"][5];
                       var $js$126=$js$125(x[1]);
                       var $js$127=$js$124($js$126,"\n");
                       var $js$128=$js$123(" ",$js$127);
                       var $js$129=$js$122(Odoc_messages["modul"],$js$128);
                       var $js$130=$js$121("\n.SH ",$js$129);
                       bs(b,$js$130);
                       "unknown block:(sendself self-2/1797 man_of_type_extension/1375 b/1816\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 x/1822))\n  (field 3 x/1822))"}
                     else
                      if($js$32==7)
                       {var e=ele[1];
                        var $js$131=Pervasives["^"];
                        var $js$132=Pervasives["^"];
                        var $js$133=Pervasives["^"];
                        var $js$134=Pervasives["^"];
                        var $js$135=Odoc_info["Name"][5];
                        var $js$136=$js$135(e[1]);
                        var $js$137=$js$134($js$136,"\n");
                        var $js$138=$js$133(" ",$js$137);
                        var $js$139=$js$132(Odoc_messages["modul"],$js$138);
                        var $js$140=$js$131("\n.SH ",$js$139);
                        bs(b,$js$140);
                        "unknown block:(sendself self-2/1797 man_of_exception/1376 b/1816 e/1823)"}
                      else
                       if($js$32==8)
                        {var a=ele[1];
                         var $js$141=Pervasives["^"];
                         var $js$142=Pervasives["^"];
                         var $js$143=Pervasives["^"];
                         var $js$144=Pervasives["^"];
                         var $js$145=Odoc_info["Name"][5];
                         var $js$146=$js$145(a[1][1]);
                         var $js$147=$js$144($js$146,"\n");
                         var $js$148=$js$143(" ",$js$147);
                         var $js$149=$js$142(Odoc_messages["clas"],$js$148);
                         var $js$150=$js$141("\n.SH ",$js$149);
                         bs(b,$js$150);
                         "unknown block:(sendself self-2/1797 man_of_attribute/1378 b/1816 a/1824)"}
                       else
                        if($js$32==9)
                         {var m$1=ele[1];
                          var $js$151=Pervasives["^"];
                          var $js$152=Pervasives["^"];
                          var $js$153=Pervasives["^"];
                          var $js$154=Pervasives["^"];
                          var $js$155=Odoc_info["Name"][5];
                          var $js$156=$js$155(m$1[1][1]);
                          var $js$157=$js$154($js$156,"\n");
                          var $js$158=$js$153(" ",$js$157);
                          var $js$159=$js$152(Odoc_messages["clas"],$js$158);
                          var $js$160=$js$151("\n.SH ",$js$159);
                          bs(b,$js$160);
                          "unknown block:(sendself self-2/1797 man_of_method/1379 b/1816 m/1825)"}
                        else
                         if($js$32==10)
                          {return 0}
                         else
                          if($js$32==11)
                           {var ty=ele[1];
                            var $js$161=Pervasives["^"];
                            var $js$162=Pervasives["^"];
                            var $js$163=$js$162(ty[1],"\n");
                            var $js$164=$js$161("\n.SH Type ",$js$163);
                            bs(b,$js$164);
                            "unknown block:(sendself self-2/1797 man_of_recfield/1389 b/1816\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 ty/1828))\n  (field 1 ele/1819))"}
                          else
                           if($js$32==12)
                            {var ty$1=ele[1];
                             var $js$165=Pervasives["^"];
                             var $js$166=Pervasives["^"];
                             var $js$167=$js$166(ty$1[1],"\n");
                             var $js$168=$js$165("\n.SH Type ",$js$167);
                             bs(b,$js$168);
                             "unknown block:(sendself self-2/1797 man_of_const/1390 b/1816\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 ty/1830))\n  (field 1 ele/1819))"}};
           var $js$32=List["iter"];
           $js$32(f,l);
           var $js$33=Buffer["output_buffer"];
           $js$33(chanout,b);
           var $js$34=Pervasives["close_out"];
           return $js$34(chanout)}
         catch(exn)
          {var $js$35=exn[1]=Sys_error;
           if($js$35)
            {Odoc_info["errors"][0]++;
             var $js$36=Pervasives["prerr_endline"];
             return $js$36(exn[2])}
           else
            {return "unknown primitive:reraise"}}},
       generate,
       function(self-2,module_list)
        {var $js$5=List["sort"];
         var
          sorted_module_list=
           $js$5
            (function(m1,m2){return "unknown primitive:caml_string_compare"},
             module_list);
         "unknown block:(sendself self-2/1837 create_groups/1398 (field 0 man_mini/1235)\n  sorted_module_list/1839)";
         var
          f=
           function(group)
            {var $js$6=group;
             if($js$6)
              {var match=group[1];
               var $js$7=match;
               if($js$7==0)
                {var $js$8=group[2];
                 if($js$8)
                  {var exit=1}
                 else
                  {"unknown block:(sendself self-2/1837 generate_for_module/1397 (field 0 match/1889))"}}
               else
                if($js$7==1)
                 {var $js$9=group[2];
                  if($js$9)
                   {var exit=1}
                  else
                   {"unknown block:(sendself self-2/1837 generate_for_module_type/1395 (field 0 match/1889))"}}
                else
                 if($js$7==2)
                  {var $js$10=group[2];
                   if($js$10)
                    {var exit=1}
                   else
                    {"unknown block:(sendself self-2/1837 generate_for_class/1392 (field 0 match/1889))"}}
                 else
                  if($js$7==3)
                   {var $js$11=group[2];
                    if($js$11)
                     {var exit=1}
                    else
                     {"unknown block:(sendself self-2/1837 generate_for_class_type/1393 (field 0 match/1889))"}}
                  else
                   {var exit=1}}
             else
              {return 0}
             switch(exit)
              {case 1:
                "unknown block:(sendself self-2/1837 generate_for_group/1399 group/1844)"
               }};
         var $js$6=List["iter"];
         return $js$6(f,groups)}]);
    return function(env,self)
     {var $js$5=CamlinternalOO["create_object_opt"];
      var self$1=$js$5(self,class);
      self$1[re_slash$1]=re_slash,0;
      obj_init(self$1);
      var $js$6=CamlinternalOO["run_initializers_opt"];
      return $js$6(self,self$1,class)}};
var $js$1=CamlinternalOO["make_class"];
var
 man=
  $js$1
   ([0,
     "man_of_Target",
     "man_of_value",
     "man_of_module",
     "generate_for_class_type",
     "man_of_exception",
     "str_man_of_before",
     "man_of_recfield",
     "relative_idents",
     "man_of_type_expr_list",
     "man_of_module_parameter_list",
     "str_man_of_see",
     "man_of_parameter_description",
     "man_of_module_type_body",
     "generate",
     "generate_for_module",
     "escape",
     "man_of_class",
     "man_of_code",
     "man_of_const",
     "man_of_info",
     "man_of_class_comment",
     "man_of_type_expr_param_list",
     "man_of_text",
     "man_of_type",
     "man_of_type_extension",
     "file_name",
     "remove_newlines",
     "man_of_custom_text",
     "man_of_class_type",
     "str_man_of_custom",
     "man_of_class_type_expr",
     "man_of_text_element",
     "open_out",
     "str_man_of_return_opt",
     "man_of_attribute",
     "generate_for_group",
     "str_man_of_version_opt",
     "str_man_of_sees",
     "str_man_of_text",
     "man_of_modtype",
     "str_man_of_raised_exceptions",
     "man_of_parameter_list",
     "man_of_method",
     "man_of_included_module",
     "man_of_module_body",
     "man_of_module_type",
     "create_groups",
     "str_man_of_since_opt",
     "man_of_module_comment",
     "man_of_type_expr",
     "generate_for_class",
     "generate_for_module_type",
     "str_man_of_author_list"],
    man_init);
var Generator=[0,man];
module["exports"]=
{"man_suffix":man_suffix,
 "man_section":man_section,
 "man_mini":man_mini,
 "new_buf":new_buf,
 "bp":bp,
 "bs":bs,
 "linebreak":linebreak,
 "info":info,
 "Generator":Generator};
