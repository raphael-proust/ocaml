var String=require("String");
var CamlinternalOO=require("CamlinternalOO");
var Odoc_info=require("Odoc_info");
var Pervasives=require("Pervasives");
var List=require("List");
var Odoc_to_text=require("Odoc_to_text");
var Printf=require("Printf");
var Filename=require("Filename");
var Bytes=require("Bytes");
var Str=require("Str");
var Hashtbl=require("Hashtbl");
var Odoc_messages=require("Odoc_messages");
var
 shared=
  [0,
   "escape",
   "fixedblock",
   "heading",
   "label",
   "texi_of_Block",
   "texi_of_Bold",
   "texi_of_Center",
   "texi_of_Code",
   "texi_of_CodePre",
   "texi_of_Emphasize",
   "texi_of_Enum",
   "texi_of_Italic",
   "texi_of_Left",
   "texi_of_Link",
   "texi_of_List",
   "texi_of_Newline",
   "texi_of_Raw",
   "texi_of_Ref",
   "texi_of_Right",
   "texi_of_Subscript",
   "texi_of_Superscript",
   "texi_of_Target",
   "texi_of_Title",
   "texi_of_Verbatim",
   "texi_of_custom_text",
   "texi_of_text",
   "texi_of_text_element"];
var
 shared$1=
  [0,
   "normal_class_params",
   "normal_class_type",
   "normal_class_type_param_list",
   "normal_module_type",
   "normal_type",
   "normal_type_list",
   "relative_idents",
   "relative_module_idents",
   "text_of_attribute",
   "text_of_author_list",
   "text_of_before",
   "text_of_class_kind",
   "text_of_class_params",
   "text_of_class_type_kind",
   "text_of_class_type_param_expr_list",
   "text_of_custom",
   "text_of_exception",
   "text_of_info",
   "text_of_method",
   "text_of_module_kind",
   "text_of_module_parameter_list",
   "text_of_module_type",
   "text_of_module_type_kind",
   "text_of_parameter_description",
   "text_of_parameter_list",
   "text_of_raised_exceptions",
   "text_of_return_opt",
   "text_of_see",
   "text_of_sees",
   "text_of_short_type_expr",
   "text_of_since_opt",
   "text_of_type_expr",
   "text_of_type_expr_list",
   "text_of_value",
   "text_of_version_opt"];
var shared$2=[0,"titles","headings","fallback_title","fallback_heading"];
var
 shared$3=
  [0,"maxdepth","bullet","minus","linebreak","indices_to_build","node_tbl"];
var shared$4=[0,"tag_functions"];
var shared$5=[0,"label"];
var
 shared$6=
  [0,
   "text_of_version_opt",
   "text_of_since_opt",
   "text_of_short_type_expr",
   "text_of_sees_opt",
   "text_of_return_opt",
   "text_of_raised_exceptions",
   "text_of_params",
   "text_of_info",
   "text_of_desc",
   "text_of_custom",
   "text_of_before",
   "text_of_author_list",
   "text_el_of_type_expr",
   "texi_of_value",
   "texi_of_type_extension",
   "texi_of_type",
   "texi_of_text",
   "texi_of_module_type",
   "texi_of_module_element",
   "texi_of_module",
   "texi_of_method",
   "texi_of_info",
   "texi_of_included_module",
   "texi_of_exception",
   "texi_of_class_type",
   "texi_of_class_element",
   "texi_of_class",
   "texi_of_attribute",
   "string_of_type_parameters",
   "string_of_type_args",
   "soft_fix_linebreaks",
   "scan_for_index_in_mod",
   "scan_for_index_in_class",
   "scan_for_index",
   "relative_idents",
   "normal_type",
   "node",
   "index",
   "heading",
   "generate_texi_trailer",
   "generate_texi_header",
   "generate_inheritance_info",
   "generate_for_module_type",
   "generate_for_module",
   "generate_for_class_type",
   "generate_for_class",
   "generate_class_type_inheritance_info",
   "generate_class_inheritance_info",
   "generate",
   "fixedblock",
   "fix_linebreaks",
   "escape",
   "do_index"];
var
 shared$7=
  [0,
   "texi_of_text_element",
   "texi_of_text",
   "texi_of_custom_text",
   "texi_of_Verbatim",
   "texi_of_Title",
   "texi_of_Target",
   "texi_of_Superscript",
   "texi_of_Subscript",
   "texi_of_Right",
   "texi_of_Ref",
   "texi_of_Raw",
   "texi_of_Newline",
   "texi_of_List",
   "texi_of_Link",
   "texi_of_Left",
   "texi_of_Italic",
   "texi_of_Enum",
   "texi_of_Emphasize",
   "texi_of_CodePre",
   "texi_of_Code",
   "texi_of_Center",
   "texi_of_Bold",
   "texi_of_Block",
   "label",
   "heading",
   "fixedblock",
   "escape"];
var shared$8=[0,"titles","fallback_title","headings","fallback_heading"];
var esc_8bits=[0,0];
var info_section=[0,"OCaml"];
var info_entry=[0,0];
var
 puts_nl=
  function(chan,s)
   {var $js=Pervasives["output_string"];
    $js(chan,s);
    var $js$1=Pervasives["output_char"];
    return $js$1(chan,10)};
var
 puts=
  function(chan,s){var $js=Pervasives["output_string"];return $js(chan,s)};
var nl=function(chan){var $js=Pervasives["output_char"];return $js(chan,10)};
var is=function(param){var $js=param;if($js){return 1}else{return 0}};
var
 pad_to=
  function(n,s)
   {var len=s["length"];
    var $js=len<n;
    if($js)
     {var $js$1=Pervasives["^"];
      var $js$2=String["make"];
      var $js$3=$js$2(n-len,32);
      return $js$1(s,$js$3)}
    else
     {return s}};
var
 indent=
  function(nb_sp,s)
   {var c=0;
    var len=-1+s["length"];
    var $js=0;
    var $js$1=len;
    for(var i=$js;i<=$js$1;i++)
     {var $js$2=s[i]=10;if($js$2){var $js$3=1+c;var c=$js$3}else{}}
    var $js$4=Bytes["make"];
    var s'=$js$4(1+len+(1+c)*nb_sp,32);
    var $js$5=nb_sp;
    var c=$js$5;
    var $js$6=0;
    var $js$7=len;
    for(var i$1=$js$6;i$1<=$js$7;i$1++)
     {s'[c]=s[i$1],0;
      var $js$8=s[i$1]=10;
      if($js$8){var $js$9=c+nb_sp;var c=$js$9}else{}
      var $js$10=1+c;
      var c=$js$10}
    var $js$11=Bytes["to_string"];
    return $js$11(s')};
var nothing=[3,""];
var
 iter=
  function(acc,param)
   {var $js=param;
    if($js)
     {var match=param[1];
      var $js$1=match;
      if($js$1==0)
       {var m=match[1];
        var match$1=m[6];
        var $js$2=match$1;
        if($js$2==1)
         {return iter(acc,param[2])}
        else
         {return iter([0,[0,-177755956,m],acc],param[2])}}
      else
       if($js$1==1)
        {var mt=match[1];
         var match$2=mt[6];
         var $js$3=match$2;
         if($js$3)
          {var $js$4=match$2[1];
           if($js$4==2){return iter(acc,param[2])}else{var exit=113}}
         else
          {var exit=113}
         switch(exit){case 113:return iter([0,[0,448725581,mt],acc],param[2])}}
       else
        if($js$1==3)
         {return iter([0,[0,-611981288,match[1]],acc],param[2])}
        else
         if($js$1==4)
          {return iter([0,[0,649842561,match[1]],acc],param[2])}
         else
          {return iter(acc,param[2])}}
    else
     {var $js$5=List["rev"];return $js$5(acc)}};
var module_subparts=iter(0);
var
 indices=
  function(param)
   {var $js=param>=156047674;
    if($js)
     {var $js$1=param!=448725581;
      if($js$1)
       {var $js$2=param>=937565914;
        if($js$2)
         {var $js$3=param>=1039100673;if($js$3){return "me"}else{return "ty"}}
        else
         {var $js$4=param>=649842561;if($js$4){return "ct"}else{return "ca"}}}
      else
       {return "mt"}}
    else
     {var $js$5=param!=-611981288;
      if($js$5)
       {var $js$6=param>=-177755956;
        if($js$6)
         {var $js$7=param>=115569503;if($js$7){return "xt"}else{return "mo"}}
        else
         {var $js$8=param>=-345182161;if($js$8){return "ex"}else{return "va"}}}
      else
       {return "cl"}}};
var
 indices_names=
  [0,
   [0,"Types","ty"],
   [0,
    [0,"Extensions","xt"],
    [0,
     [0,"Exceptions","ex"],
     [0,
      [0,"Values","va"],
      [0,
       [0,"Class attributes","ca"],
       [0,
        [0,"Methods","me"],
        [0,
         [0,"Classes","cl"],
         [0,
          [0,"Class types","ct"],
          [0,[0,"Modules","mo"],[0,[0,"Module types","mt"],0]]]]]]]]]];
var $js=Pervasives["@"];
var $js$1=Str["regexp"];
var $js$2=$js$1("@");
var $js$3=[0,$js$2,"@@"];
var $js$4=Str["regexp"];
var $js$5=$js$4("{");
var $js$6=[0,$js$5,"@{"];
var $js$7=Str["regexp"];
var $js$8=$js$7("}");
var $js$9=[0,$js$8,"@}"];
var $js$10=Str["regexp"];
var $js$11=$js$10("\.\.\.");
var $js$12=[0,$js$11,"@dots{}"];
var $js$13=[0,$js$12,0];
var $js$14=[0,$js$9,$js$13];
var $js$15=[0,$js$6,$js$14];
var $js$16=[0,$js$3,$js$15];
var $js$17=esc_8bits[1];
if($js$17)
 {var $js$18=Str["regexp"];
  var $js$19=$js$18("à");
  var $js$20=[0,$js$19,"@`a"];
  var $js$21=Str["regexp"];
  var $js$22=$js$21("â");
  var $js$23=[0,$js$22,"@^a"];
  var $js$24=Str["regexp"];
  var $js$25=$js$24("é");
  var $js$26=[0,$js$25,"@'e"];
  var $js$27=Str["regexp"];
  var $js$28=$js$27("è");
  var $js$29=[0,$js$28,"@`e"];
  var $js$30=Str["regexp"];
  var $js$31=$js$30("ê");
  var $js$32=[0,$js$31,"@^e"];
  var $js$33=Str["regexp"];
  var $js$34=$js$33("ë");
  var $js$35=[0,$js$34,'@"e'];
  var $js$36=Str["regexp"];
  var $js$37=$js$36("÷");
  var $js$38=[0,$js$37,"@,{c}"];
  var $js$39=Str["regexp"];
  var $js$40=$js$39("ô");
  var $js$41=[0,$js$40,"@^o"];
  var $js$42=Str["regexp"];
  var $js$43=$js$42("ö");
  var $js$44=[0,$js$43,'@"o'];
  var $js$45=Str["regexp"];
  var $js$46=$js$45("î");
  var $js$47=[0,$js$46,"@^i"];
  var $js$48=Str["regexp"];
  var $js$49=$js$48("ï");
  var $js$50=[0,$js$49,'@"i'];
  var $js$51=Str["regexp"];
  var $js$52=$js$51("ù");
  var $js$53=[0,$js$52,"@`u"];
  var $js$54=Str["regexp"];
  var $js$55=$js$54("û");
  var $js$56=[0,$js$55,"@^u"];
  var $js$57=Str["regexp"];
  var $js$58=$js$57("æ");
  var $js$59=[0,$js$58,"@ae{}"];
  var $js$60=Str["regexp"];
  var $js$61=$js$60("Æ");
  var $js$62=[0,$js$61,"@AE{}"];
  var $js$63=Str["regexp"];
  var $js$64=$js$63("ß");
  var $js$65=[0,$js$64,"@ss{}"];
  var $js$66=Str["regexp"];
  var $js$67=$js$66("©");
  var $js$68=[0,$js$67,"@copyright{}"];
  var $js$69=[0,$js$68,0];
  var $js$70=[0,$js$65,$js$69];
  var $js$71=[0,$js$62,$js$70];
  var $js$72=[0,$js$59,$js$71];
  var $js$73=[0,$js$56,$js$72];
  var $js$74=[0,$js$53,$js$73];
  var $js$75=[0,$js$50,$js$74];
  var $js$76=[0,$js$47,$js$75];
  var $js$77=[0,$js$44,$js$76];
  var $js$78=[0,$js$41,$js$77];
  var $js$79=[0,$js$38,$js$78];
  var $js$80=[0,$js$35,$js$79];
  var $js$81=[0,$js$32,$js$80];
  var $js$82=[0,$js$29,$js$81];
  var $js$83=[0,$js$26,$js$82];
  var $js$84=[0,$js$23,$js$83];
  var $js$85=[0,$js$20,$js$84]}
else
 {var $js$85=0}
var subst_strings=$js($js$16,$js$85);
var
 escape=
  function(s)
   {var $js$86=List["fold_left"];
    return $js$86
            (function(acc,param)
              {var $js$87=Str["global_replace"];
               return $js$87(param[1],param[2],acc)},
             s,
             subst_strings)};
var
 fix_nodename=
  function(s)
   {var $js$86=Str["global_replace"];
    var $js$87=Str["regexp"];
    var $js$88=$js$87("\.");
    var $js$89=escape(s);
    return $js$86($js$88,"/",$js$89)};
var
 generate_menu=
  function(chan,subpart_list)
   {var $js$86=subpart_list!=0;
    if($js$86)
     {var
       menu_line=
        function(part_qual,name)
         {var $js$87=Odoc_info["Name"][1];
          var sname=$js$87(name);
          var $js$88="unknown primitive:caml_string_equal";
          if($js$88)
           {var $js$89=Pervasives["^"];
            var $js$90=Pervasives["^"];
            var $js$91=$js$90(sname,":: ");
            var $js$92=$js$89("* ",$js$91);
            var $js$93=pad_to(35,$js$92);
            puts(chan,$js$93);
            return puts_nl(chan,part_qual)}
          else
           {var $js$94=Pervasives["^"];
            var $js$95=Pervasives["^"];
            var $js$96=Pervasives["^"];
            var $js$97=Pervasives["^"];
            var $js$98=fix_nodename(name);
            var $js$99=$js$97($js$98,". ");
            var $js$100=$js$96(": ",$js$99);
            var $js$101=$js$95(sname,$js$100);
            var $js$102=$js$94("* ",$js$101);
            var $js$103=pad_to(35,$js$102);
            puts(chan,$js$103);
            return puts_nl(chan,part_qual)}};
      puts_nl(chan,"@menu");
      var $js$87=List["iter"];
      $js$87
       (function(param)
         {var $js$88="unknown primitive:isint";
          if($js$88)
           {return nl(chan)}
          else
           {var variant=param[1];
            var $js$89=variant>=-177755956;
            if($js$89)
             {var $js$90=variant>=649842561;
              if($js$90)
               {var $js$91=variant>=936573122;
                if($js$91)
                 {return puts_nl(chan,param[2])}
                else
                 {return menu_line(Odoc_messages["class_type"],param[2][1])}}
              else
               {var $js$92=variant>=448725581;
                if($js$92)
                 {return menu_line(Odoc_messages["module_type"],param[2][1])}
                else
                 {return menu_line(Odoc_messages["modul"],param[2][1])}}}
            else
             {var $js$93=variant!=-784200974;
              if($js$93)
               {var $js$94=variant>=-611981288;
                if($js$94)
                 {return menu_line(Odoc_messages["clas"],param[2][1])}
                else
                 {var $js$95=escape(param[2]);return puts_nl(chan,$js$95)}}
              else
               {var $js$96=Printf["fprintf"];
                return $js$96
                        (chan,[0,[11,"* ",[2,0,[11,"::\n",0]]],"* %s::\n"],param[2])}}}},
        subpart_list);
      return puts_nl(chan,"@end menu")}
    else
     {return 0}};
var
 xref=
  function(xname,name)
   {var $js$86=Pervasives["^"];
    var $js$87=Pervasives["^"];
    var $js$88=fix_nodename(name);
    var $js$89=Pervasives["^"];
    var $js$90=xname;
    if($js$90)
     {var $js$91=Pervasives["^"];var $js$92=$js$91(",",xname[1])}
    else
     {var $js$92=""}
    var $js$93=$js$89($js$92,"}.");
    var $js$94=$js$87($js$88,$js$93);
    return $js$86("@xref{",$js$94)};
var
 ifinfo=
  function(s)
   {var $js$86=String["concat"];
    return $js$86("\n",[0,"@ifinfo",[0,s,[0,"@end ifinfo",[0,"",0]]]])};
var
 dirsection=
  function(sec)
   {var $js$86=Pervasives["^"];
    var $js$87=escape(sec);
    return $js$86("@dircategory ",$js$87)};
var
 direntry=
  function(ent)
   {var $js$86=Pervasives["@"];
    var $js$87=Pervasives["@"];
    var $js$88=List["map"];
    var $js$89=$js$88(escape,ent);
    var $js$90=$js$87($js$89,[0,"@end direntry",0]);
    return $js$86([0,"@direntry",0],$js$90)};
var
 Texi=
  [0,
   subst_strings,
   escape,
   fix_nodename,
   generate_menu,
   xref,
   ifinfo,
   dirsection,
   direntry];
var
 text_init=
  function(class)
   {var $js$86=CamlinternalOO["new_methods_variables"];
    var ids=$js$86(class,shared$7,shared$8);
    var texi_of_text_element=ids[1];
    var texi_of_text=ids[2];
    var texi_of_custom_text=ids[3];
    var texi_of_Verbatim=ids[4];
    var texi_of_Title=ids[5];
    var texi_of_Target=ids[6];
    var texi_of_Superscript=ids[7];
    var texi_of_Subscript=ids[8];
    var texi_of_Right=ids[9];
    var texi_of_Ref=ids[10];
    var texi_of_Raw=ids[11];
    var texi_of_Newline=ids[12];
    var texi_of_List=ids[13];
    var texi_of_Link=ids[14];
    var texi_of_Left=ids[15];
    var texi_of_Italic=ids[16];
    var texi_of_Enum=ids[17];
    var texi_of_Emphasize=ids[18];
    var texi_of_CodePre=ids[19];
    var texi_of_Code=ids[20];
    var texi_of_Center=ids[21];
    var texi_of_Bold=ids[22];
    var texi_of_Block=ids[23];
    var label=ids[24];
    var heading=ids[25];
    var fixedblock=ids[26];
    var escape$1=ids[27];
    var titles=ids[28];
    var fallback_title=ids[29];
    var headings=ids[30];
    var fallback_heading=ids[31];
    var $js$87=CamlinternalOO["set_methods"];
    $js$87
     (class,
      [0,
       escape$1,
       0,
       Texi[2],
       label,
       function(self-1,no_,param)
        {var $js$88=Pervasives["failwith"];return $js$88("gni")},
       texi_of_text,
       function(self-1,t)
        {var $js$88=String["concat"];
         var $js$89=List["map"];
         "unknown block:(sendself self-1/1341 texi_of_text_element/1311)";
         var $js$90=$js$89($js$91,t);
         return $js$88("",$js$90)},
       texi_of_text_element,
       function(self-1,param)
        {var $js$88=param;
         if(typeof $js$88=="number")
          {if($js$88==0)
            {"unknown block:(sendself self-1/1344 texi_of_Newline/1326)"}
           else
            if($js$88==1){return ""}}
         else
          {var $js$89=$js$88[0];
           if($js$89==0)
            {"unknown block:(sendself self-1/1344 texi_of_Raw/1315 (field 0 param/2331))"}
           else
            if($js$89==1)
             {"unknown block:(sendself self-1/1344 texi_of_Code/1316 (field 0 param/2331))"}
            else
             if($js$89==2)
              {"unknown block:(sendself self-1/1344 texi_of_CodePre/1317 (field 0 param/2331))"}
             else
              if($js$89==3)
               {var exit=98}
              else
               if($js$89==4)
                {"unknown block:(sendself self-1/1344 texi_of_Bold/1318 (field 0 param/2331))"}
               else
                if($js$89==5)
                 {"unknown block:(sendself self-1/1344 texi_of_Italic/1319 (field 0 param/2331))"}
                else
                 if($js$89==6)
                  {"unknown block:(sendself self-1/1344 texi_of_Emphasize/1320 (field 0 param/2331))"}
                 else
                  if($js$89==7)
                   {"unknown block:(sendself self-1/1344 texi_of_Center/1321 (field 0 param/2331))"}
                  else
                   if($js$89==8)
                    {"unknown block:(sendself self-1/1344 texi_of_Left/1322 (field 0 param/2331))"}
                   else
                    if($js$89==9)
                     {"unknown block:(sendself self-1/1344 texi_of_Right/1323 (field 0 param/2331))"}
                    else
                     if($js$89==10)
                      {"unknown block:(sendself self-1/1344 texi_of_List/1324 (field 0 param/2331))"}
                     else
                      if($js$89==11)
                       {"unknown block:(sendself self-1/1344 texi_of_Enum/1325 (field 0 param/2331))"}
                      else
                       if($js$89==12)
                        {"unknown block:(sendself self-1/1344 texi_of_Block/1327 (field 0 param/2331))"}
                       else
                        if($js$89==13)
                         {"unknown block:(sendself self-1/1344 texi_of_Title/1328 (field 0 param/2331)\n  (field 2 param/2331))"}
                        else
                         if($js$89==14)
                          {var exit=98}
                         else
                          if($js$89==15)
                           {"unknown block:(sendself self-1/1344 texi_of_Link/1329 (field 0 param/2331)\n  (field 1 param/2331))"}
                          else
                           if($js$89==16)
                            {"unknown block:(sendself self-1/1344 texi_of_Ref/1330 (field 0 param/2331)\n  (field 1 param/2331))"}
                           else
                            if($js$89==17)
                             {"unknown block:(sendself self-1/1344 texi_of_Superscript/1331 (field 0 param/2331))"}
                            else
                             if($js$89==18)
                              {"unknown block:(sendself self-1/1344 texi_of_Subscript/1332 (field 0 param/2331))"}
                             else
                              if($js$89==19)
                               {return ""}
                              else
                               if($js$89==20)
                                {"unknown block:(sendself self-1/1344 texi_of_custom_text/1312 (field 0 param/2331)\n  (field 1 param/2331))"}
                               else
                                if($js$89==21)
                                 {"unknown block:(sendself self-1/1344 texi_of_Target/1313 (field 0 param/2331)\n  (field 1 param/2331))"}}
         switch(exit)
          {case 98:
            "unknown block:(sendself self-1/1344 texi_of_Verbatim/1314 (field 0 param/2331))"
           }},
       texi_of_custom_text,
       function(self-1,s,t){return ""},
       texi_of_Target,
       function(self-1,target,code)
        {var $js$88=String["lowercase"];
         var $js$89=$js$88(target);
         var $js$90="unknown primitive:caml_string_equal";
         if($js$90){return code}else{return ""}},
       texi_of_Verbatim,
       function(self-1,s){return s},
       texi_of_Raw,
       function(self-1,s)
        {"unknown block:(sendself self-1/1383 escape/1308 s/1384)"},
       texi_of_Code,
       function(self-1,s)
        {var $js$88=Pervasives["^"];
         var $js$89=Pervasives["^"];
         "unknown block:(sendself self-1/1386 escape/1308 s/1387)";
         var $js$90=$js$89($js$91,"}");
         return $js$88("@code{",$js$90)},
       texi_of_CodePre,
       function(self-1,s)
        {var $js$88=String["concat"];
         "unknown block:(sendself self-1/1389 escape/1308 s/1390)";
         var $js$89=[0,$js$90,[0,"@end example",[0,"",0]]];
         var $js$91=[0,"@example",$js$89];
         var $js$92=[0,"",$js$91];
         return $js$88("\n",$js$92)},
       texi_of_Bold,
       function(self-1,t)
        {var $js$88=Pervasives["^"];
         var $js$89=Pervasives["^"];
         "unknown block:(sendself self-1/1392 texi_of_text/1310 t/1393)";
         var $js$90=$js$89($js$91,"}");
         return $js$88("@strong{",$js$90)},
       texi_of_Italic,
       function(self-1,t)
        {var $js$88=Pervasives["^"];
         var $js$89=Pervasives["^"];
         "unknown block:(sendself self-1/1395 texi_of_text/1310 t/1396)";
         var $js$90=$js$89($js$91,"}");
         return $js$88("@i{",$js$90)},
       texi_of_Emphasize,
       function(self-1,t)
        {var $js$88=Pervasives["^"];
         var $js$89=Pervasives["^"];
         "unknown block:(sendself self-1/1398 texi_of_text/1310 t/1399)";
         var $js$90=$js$89($js$91,"}");
         return $js$88("@emph{",$js$90)},
       texi_of_Center,
       function(self-1,t)
        {var $js$88=Str["split"];
         var $js$89=Str["regexp"];
         var $js$90=$js$89("\n");
         "unknown block:(sendself self-1/1401 texi_of_text/1310 t/1402)";
         var sl=$js$88($js$90,$js$91);
         var $js$92=String["concat"];
         var $js$93=Pervasives["@"];
         var $js$94=List["map"];
         var
          $js$95=
           $js$94
            (function(s)
              {var $js$96=Pervasives["^"];return $js$96("\n@center ",s)},
             sl);
         var $js$96=$js$93($js$95,[0,"\n",0]);
         return $js$92("",$js$96)},
       texi_of_Left,
       function(self-1,t)
        {var $js$88=String["concat"];
         "unknown block:(sendself self-1/1406 texi_of_text/1310 t/1407)";
         var $js$89=[0,$js$90,[0,"@end flushleft",[0,"",0]]];
         var $js$91=[0,"@flushleft",$js$89];
         var $js$92=[0,"",$js$91];
         return $js$88("\n",$js$92)},
       texi_of_Right,
       function(self-1,t)
        {var $js$88=String["concat"];
         "unknown block:(sendself self-1/1409 texi_of_text/1310 t/1410)";
         var $js$89=[0,$js$90,[0,"@end flushright",[0,"",0]]];
         var $js$91=[0,"@flushright",$js$89];
         var $js$92=[0,"",$js$91];
         return $js$88("\n",$js$92)},
       texi_of_List,
       function(self-1,tl)
        {var $js$88=String["concat"];
         var $js$89=Pervasives["@"];
         var $js$90=Pervasives["@"];
         var $js$91=List["map"];
         var
          $js$92=
           $js$91
            (function(t)
              {var $js$93=Pervasives["^"];
               "unknown block:(sendself self-1/1412 texi_of_text/1310 t/1414)";
               return $js$93("@item\n",$js$94)},
             tl);
         var $js$93=$js$90($js$92,[0,"@end itemize",[0,"",0]]);
         var $js$94=$js$89([0,"",[0,"@itemize",0]],$js$93);
         return $js$88("\n",$js$94)},
       texi_of_Enum,
       function(self-1,tl)
        {var $js$88=String["concat"];
         var $js$89=Pervasives["@"];
         var $js$90=Pervasives["@"];
         var $js$91=List["map"];
         var
          $js$92=
           $js$91
            (function(t)
              {var $js$93=Pervasives["^"];
               "unknown block:(sendself self-1/1416 texi_of_text/1310 t/1418)";
               return $js$93("@item\n",$js$94)},
             tl);
         var $js$93=$js$90($js$92,[0,"@end enumerate",[0,"",0]]);
         var $js$94=$js$89([0,"",[0,"@enumerate",0]],$js$93);
         return $js$88("\n",$js$94)},
       texi_of_Newline,
       0,
       "\n",
       texi_of_Block,
       function(self-1,t)
        {var $js$88=String["concat"];
         "unknown block:(sendself self-1/1422 texi_of_text/1310 t/1423)";
         var $js$89=[0,$js$90,[0,"@end format",[0,"",0]]];
         var $js$91=[0,"@format",$js$89];
         return $js$88("\n",$js$91)},
       texi_of_Title,
       function(self-1,n,t)
        {try
          {var $js$88=List["assoc"];var t_begin=$js$88(n,self-1[titles])}
         catch(exn)
          {var $js$89=exn=Not_found;
           if($js$89)
            {var t_begin=self-1[fallback_title]}
           else
            {var t_begin="unknown primitive:reraise"}}
         var $js$90=Pervasives["^"];
         var $js$91=Pervasives["^"];
         "unknown block:(sendself self-1/1425 texi_of_text/1310 t/1427)";
         var $js$92=$js$91($js$93,"\n");
         return $js$90(t_begin,$js$92)},
       texi_of_Link,
       function(self-1,s,t)
        {var $js$88=String["concat"];
         "unknown block:(sendself self-1/1430 texi_of_text/1310 t/1432)";
         var $js$89=[0,$js$90,[0,"}",0]];
         var $js$91=[0,",",$js$89];
         var $js$92=[0,s,$js$91];
         var $js$93=[0,"@uref{",$js$92];
         return $js$88("",$js$93)},
       texi_of_Ref,
       function(self-1,name,kind)
        {var $js$88=kind;
         if($js$88)
          {var match=kind[1];
           var $js$89="unknown primitive:isint";
           if($js$89)
            {var $js$90=match;
             var $js$91=$js$90[0];
             if($js$91==0)
              {var $js$92=Pervasives["^"];
               var $js$93=Pervasives["^"];
               var $js$94=Odoc_info["Name"][1];
               var $js$95=$js$94(name);
               var $js$96=$js$93(" ",$js$95);
               var xname=$js$92(Odoc_messages["modul"],$js$96)}
             else
              if($js$91==1)
               {var $js$97=Pervasives["^"];
                var $js$98=Pervasives["^"];
                var $js$99=Odoc_info["Name"][1];
                var $js$100=$js$99(name);
                var $js$101=$js$98(" ",$js$100);
                var xname=$js$97(Odoc_messages["module_type"],$js$101)}
              else
               if($js$91==2)
                {var $js$102=Pervasives["^"];
                 var $js$103=Pervasives["^"];
                 var $js$104=Odoc_info["Name"][1];
                 var $js$105=$js$104(name);
                 var $js$106=$js$103(" ",$js$105);
                 var xname=$js$102(Odoc_messages["clas"],$js$106)}
               else
                if($js$91==3)
                 {var $js$107=Pervasives["^"];
                  var $js$108=Pervasives["^"];
                  var $js$109=Odoc_info["Name"][1];
                  var $js$110=$js$109(name);
                  var $js$111=$js$108(" ",$js$110);
                  var xname=$js$107(Odoc_messages["class_type"],$js$111)}
                else
                 if($js$91==4)
                  {var exit=92}
                 else
                  if($js$91==5)
                   {var exit=92}
                  else
                   if($js$91==6)
                    {var exit=92}
                   else
                    if($js$91==7)
                     {var exit=92}
                    else
                     if($js$91==8)
                      {var exit=92}
                     else
                      if($js$91==9)
                       {var exit=92}
                      else
                       if($js$91==10){var exit=92}else if($js$91==11){var exit=92}}
           else
            {var exit=92}}
         else
          {var exit=92}
         switch(exit){case 92:var xname=""}
         var $js$112="unknown primitive:caml_string_equal";
         if($js$112)
          {"unknown block:(sendself self-1/1434 escape/1308 name/1435)"}
         else
          {var $js$113=Texi[5];return $js$113([0,xname],name)}},
       texi_of_Superscript,
       function(self-1,t)
        {var $js$88=Pervasives["^"];
         var $js$89=Pervasives["^"];
         "unknown block:(sendself self-1/1439 texi_of_text/1310 t/1440)";
         var $js$90=$js$89($js$91,"@}");
         return $js$88("^@{",$js$90)},
       texi_of_Subscript,
       function(self-1,t)
        {var $js$88=Pervasives["^"];
         var $js$89=Pervasives["^"];
         "unknown block:(sendself self-1/1442 texi_of_text/1310 t/1443)";
         var $js$90=$js$89($js$91,"@}");
         return $js$88("_@{",$js$90)},
       heading,
       function(self-1,n,t)
        {try
          {var $js$88=List["assoc"];var f=$js$88(n,self-1[headings])}
         catch(exn)
          {var $js$89=exn=Not_found;
           if($js$89)
            {var f=self-1[fallback_heading]}
           else
            {var f="unknown primitive:reraise"}}
         var $js$90=Pervasives["^"];
         var $js$91=Pervasives["^"];
         "unknown block:(sendself self-1/1445 texi_of_text/1310 t/1447)";
         var $js$92=$js$91($js$93,"\n");
         return $js$90(f,$js$92)},
       fixedblock,
       function(self-1,t)
        {var $js$88=Pervasives["@"];
         var $js$89=$js$88([0,[3,"@t{"],t],[0,[3,"}"],0]);
         return [12,$js$89]}]);
    return function(env,self)
     {var $js$88=CamlinternalOO["create_object_opt"];
      var self$1=$js$88(self,class);
      self$1[titles]=
      [0,
       [0,1,"@chapter "],
       [0,
        [0,2,"@section "],
        [0,[0,3,"@subsection "],[0,[0,4,"@subsubsection "],0]]]],
      0;
      self$1[fallback_title]="@unnumberedsubsubsec ",0;
      self$1[headings]=
      [0,
       [0,1,"@majorheading "],
       [0,
        [0,2,"@heading "],
        [0,[0,3,"@subheading "],[0,[0,4,"@subsubheading "],0]]]],
      0;
      self$1[fallback_heading]="@subsubheading ",0;
      return self$1}};
var $js$86=CamlinternalOO["make_class"];
var
 text=
  $js$86
   ([0,
     "texi_of_text_element",
     "texi_of_Newline",
     "texi_of_Superscript",
     "texi_of_text",
     "texi_of_Emphasize",
     "escape",
     "texi_of_Raw",
     "texi_of_Ref",
     "heading",
     "texi_of_Subscript",
     "label",
     "texi_of_Right",
     "texi_of_Verbatim",
     "texi_of_custom_text",
     "fixedblock",
     "texi_of_CodePre",
     "texi_of_Title",
     "texi_of_Center",
     "texi_of_Italic",
     "texi_of_Target",
     "texi_of_Bold",
     "texi_of_Code",
     "texi_of_Enum",
     "texi_of_Left",
     "texi_of_Link",
     "texi_of_List",
     "texi_of_Block"],
    text_init);
var Aliased_node="unknown primitive:caml_set_oo_id";
var
 texi_init=
  function(class)
   {var $js$87=CamlinternalOO["new_methods_variables"];
    var ids=$js$87(class,shared$6,shared$3);
    var text_of_version_opt=ids[1];
    var text_of_since_opt=ids[2];
    var text_of_short_type_expr=ids[3];
    var text_of_sees_opt=ids[4];
    var text_of_return_opt=ids[5];
    var text_of_raised_exceptions=ids[6];
    var text_of_params=ids[7];
    var text_of_info=ids[8];
    var text_of_desc=ids[9];
    var text_of_custom=ids[10];
    var text_of_before=ids[11];
    var text_of_author_list=ids[12];
    var text_el_of_type_expr=ids[13];
    var texi_of_value=ids[14];
    var texi_of_type_extension=ids[15];
    var texi_of_type=ids[16];
    var texi_of_text=ids[17];
    var texi_of_module_type=ids[18];
    var texi_of_module_element=ids[19];
    var texi_of_module=ids[20];
    var texi_of_method=ids[21];
    var texi_of_info=ids[22];
    var texi_of_included_module=ids[23];
    var texi_of_exception=ids[24];
    var texi_of_class_type=ids[25];
    var texi_of_class_element=ids[26];
    var texi_of_class=ids[27];
    var texi_of_attribute=ids[28];
    var string_of_type_parameters=ids[29];
    var string_of_type_args=ids[30];
    var soft_fix_linebreaks=ids[31];
    var scan_for_index_in_mod=ids[32];
    var scan_for_index_in_class=ids[33];
    var scan_for_index=ids[34];
    var relative_idents=ids[35];
    var normal_type=ids[36];
    var node=ids[37];
    var index=ids[38];
    var heading=ids[39];
    var generate_texi_trailer=ids[40];
    var generate_texi_header=ids[41];
    var generate_inheritance_info=ids[42];
    var generate_for_module_type=ids[43];
    var generate_for_module=ids[44];
    var generate_for_class_type=ids[45];
    var generate_for_class=ids[46];
    var generate_class_type_inheritance_info=ids[47];
    var generate_class_inheritance_info=ids[48];
    var generate=ids[49];
    var fixedblock=ids[50];
    var fix_linebreaks=ids[51];
    var escape$1=ids[52];
    var do_index=ids[53];
    var maxdepth=ids[54];
    var bullet=ids[55];
    var minus=ids[56];
    var linebreak=ids[57];
    var indices_to_build=ids[58];
    var node_tbl=ids[59];
    var $js$88=CamlinternalOO["inherits"];
    var inh=$js$88(class,shared$2,0,shared,text,1);
    var obj_init=inh[1];
    var $js$89=CamlinternalOO["inherits"];
    var
     inh$1=
      $js$89(class,shared$4,shared$5,shared$1,Odoc_to_text["to_text"],1);
    var obj_init$1=inh$1[1];
    var tag_functions=inh$1[2];
    var text_of_before$1=inh$1[13];
    var $js$90=CamlinternalOO["set_methods"];
    $js$90
     (class,
      [0,
       node,
       function(self-2,depth,name)
        {var $js$91=Hashtbl["mem"];
         var $js$92=$js$91(self-2[node_tbl],name);
         if($js$92){"unknown primitive:raise"}else{}
         var $js$93=Hashtbl["add"];
         $js$93(self-2[node_tbl],name,0);
         var $js$94=depth<=self-2[maxdepth];
         if($js$94)
          {var $js$95=Pervasives["^"];
           var $js$96=Pervasives["^"];
           var $js$97=Texi[3];
           var $js$98=$js$97(name);
           var $js$99=$js$96($js$98,",\n");
           var $js$100=$js$95("@node ",$js$99);
           return [3,$js$100]}
         else
          {return nothing}},
       index,
       function(self-2,ind,ent)
        {var $js$91=Odoc_info["Global"][9][1];
         if($js$91)
          {var $js$92=List["mem"];
           var $js$93=$js$92(ind,self-2[indices_to_build]);
           if($js$93){}else{"unknown primitive:raise"}
           var $js$94=String["concat"];
           var $js$95=indices(ind);
           var $js$96=Texi[2];
           var $js$97=Odoc_info["Name"][1];
           var $js$98=$js$97(ent);
           var $js$99=$js$96($js$98);
           var $js$100=[0,$js$99,[0,"\n",0]];
           var $js$101=[0,"index ",$js$100];
           var $js$102=[0,$js$95,$js$101];
           var $js$103=[0,"@",$js$102];
           var $js$104=$js$94("",$js$103)}
         else
          {var $js$104=""}
         return [3,$js$104]},
       fix_linebreaks,
       function(self-2)
        {var $js$91=Str["regexp"];
         var re=$js$91("\n[ \t]*");
         return function(t)
          {var $js$92=List["map"];
           return $js$92
                   (function(txt)
                     {var $js$93=txt;
                      if(typeof $js$93=="number")
                       {if($js$93==0){return [0,"\n"]}}
                      else
                       {var $js$94=$js$93[0];
                        if($js$94==0)
                         {var $js$95=Str["global_replace"];
                          var $js$96=$js$95(re,"\n",txt[1]);
                          return [0,$js$96]}
                        else
                         if($js$94==10)
                          {var $js$97=List["map"];
                           "unknown block:(sendself self-2/1626 fix_linebreaks/1575)";
                           var $js$98=$js$97($js$99,txt[1]);
                           return [10,$js$98]}
                         else
                          if($js$94==11)
                           {var $js$100=List["map"];
                            "unknown block:(sendself self-2/1626 fix_linebreaks/1575)";
                            var $js$101=$js$100($js$102,txt[1]);
                            return [11,$js$101]}
                          else
                           {var exit=88}}
                      switch(exit){case 88:return txt}},
                    t)}},
       soft_fix_linebreaks,
       function(self-2)
        {var $js$91=Str["regexp"];
         var re=$js$91("\n[ \t]*");
         return function(ind,t)
          {var $js$92=Pervasives["^"];
           var $js$93=String["make"];
           var $js$94=$js$93(ind,32);
           var rep=$js$92("\n",$js$94);
           var $js$95=List["map"];
           return $js$95
                   (function(txt)
                     {var $js$96=txt;
                      if(typeof $js$96=="number")
                       {"unknown block:txt/1640"}
                      else
                       {var $js$97=$js$96[0];
                        if($js$97==0)
                         {var $js$98=Str["global_replace"];
                          var $js$99=$js$98(re,rep,txt[1]);
                          return [0,$js$99]}
                        else
                         {var exit=85}}
                      switch(exit){case 85:return txt}},
                    t)}},
       text_of_desc,
       function(self-2,param)
        {var $js$91=param;
         if($js$91)
          {var t=param[1];
           var $js$92=t;
           if($js$92)
            {var match=t[1];
             var $js$93=match;
             if(typeof $js$93=="number")
              {"unknown block:match/2271"}
             else
              {var $js$94=$js$93[0];
               if($js$94==0)
                {var $js$95=match[1];
                 if($js$95=="")
                  {var $js$96=t[2];if($js$96){var exit=84}else{return 0}}
                 else
                  {var exit=84}}
               else
                {var exit=84}}}
           else
            {var exit=84}
           switch(exit)
            {case 84:
              var $js$97=Pervasives["@"];
              "unknown block:(sendself self-2/1642 fix_linebreaks/1575 t/1643)";
              return $js$97($js$98,[0,0,0])
             }}
         else
          {return 0}},
       text_of_sees_opt,
       function(self-2,see_l)
        {var $js$91=List["concat"];
         var $js$92=List["map"];
         var
          $js$93=
           $js$92
            (function(param)
              {var match=param[1];
               var $js$94=match;
               if($js$94==0)
                {return [0,
                         self-2[linebreak],
                         [0,
                          [4,[0,[0,Odoc_messages["see_also"]],0]],
                          [0,[0," "],[0,[15,match[1],param[2]],[0,0,0]]]]]}
               else
                if($js$94==1){var exit=83}else if($js$94==2){var exit=83}
               switch(exit)
                {case 83:
                  var $js$95=Pervasives["@"];
                  var $js$96=Pervasives["@"];
                  var $js$97=$js$96(param[2],[0,0,0]);
                  return $js$95
                          ([0,
                            self-2[linebreak],
                            [0,
                             [4,[0,[0,Odoc_messages["see_also"]],0]],
                             [0,[0," "],[0,[0,match[1]],0]]]],
                           $js$97)
                 }},
             see_l);
         return $js$91($js$93)},
       text_of_before,
       function(self-2,l)
        {var $js$91=List["flatten"];
         var $js$92=List["map"];
         var
          $js$93=
           $js$92
            (function(x)
              {var $js$94=text_of_before$1(self-2,[0,x,0]);
               return [0,self-2[linebreak],$js$94]},
             l);
         return $js$91($js$93)},
       text_of_params,
       function(self-2,params_list)
        {var $js$91=List["concat"];
         var $js$92=List["map"];
         var
          $js$93=
           $js$92
            (function(param)
              {var $js$94=Pervasives["@"];
               var $js$95=Pervasives["@"];
               var $js$96=$js$95(param[2],[0,0,0]);
               return $js$94
                       ([0,
                         self-2[linebreak],
                         [0,
                          [4,[0,[0,Odoc_messages["parameters"]],0]],
                          [0,[0," "],[0,[0,param[1]],[0,[0,": "],0]]]]],
                        $js$96)},
             params_list);
         return $js$91($js$93)},
       text_of_raised_exceptions,
       function(self-2,l)
        {var $js$91=l;
         if($js$91)
          {var $js$92=l[2];
           if($js$92)
            {var $js$93=List["map"];
             var
              $js$94=
               $js$93
                (function(param){return [0,[1,param[1]],[0,[0," "],param[2]]]},
                 l);
             var $js$95=[10,$js$94];
             var $js$96=[0,$js$95,[0,0,0]];
             var $js$97=[0,[0," :"],$js$96];
             var $js$98=[0,[4,[0,[0,Odoc_messages["raises"]],0]],$js$97];
             return [0,self-2[linebreak],$js$98]}
           else
            {var match=l[1];
             var $js$99=Pervasives["@"];
             var $js$100=Pervasives["@"];
             var $js$101=$js$100(match[2],[0,0,0]);
             return $js$99
                     ([0,
                       self-2[linebreak],
                       [0,
                        [4,[0,[0,Odoc_messages["raises"]],0]],
                        [0,[0," "],[0,[1,match[1]],[0,[0," "],0]]]]],
                      $js$101)}}
         else
          {return 0}},
       text_of_return_opt,
       function(self-2,param)
        {var $js$91=param;
         if($js$91)
          {var $js$92=Pervasives["@"];
           return $js$92
                   ([0,
                     [4,[0,[0,Odoc_messages["returns"]],0]],
                     [0,[0," "],param[1]]],
                    [0,0,0])}
         else
          {return 0}},
       text_of_custom,
       function(self-2,c_l)
        {var $js$91=List["flatten"];
         var $js$92=List["rev"];
         var $js$93=List["fold_left"];
         var
          $js$94=
           $js$93
            (function(acc,param)
              {var tag=param[1];
               try
                {var $js$95=List["assoc"];
                 var f=$js$95(tag,self-2[tag_functions]);
                 var $js$96=Pervasives["@"];
                 var $js$97=f(param[2]);
                 var $js$98=[0,self-2[linebreak],$js$97];
                 var $js$99=$js$96($js$98,[0,0,0]);
                 return [0,$js$99,acc]}
               catch(exn)
                {var $js$100=exn=Not_found;
                 if($js$100)
                  {var $js$101=Odoc_info["warning"];
                   var $js$102=Odoc_messages["tag_not_handled"];
                   var $js$103=$js$102(tag);
                   $js$101($js$103);
                   return acc}
                 else
                  {return "unknown primitive:reraise"}}},
             0,
             c_l);
         var $js$95=$js$92($js$94);
         return $js$91($js$95)},
       text_of_info,
       function(self-2,*opt*,param)
        {var $js$91=*opt*;
         if($js$91){var block=*opt*[1]}else{var block=0}
         var $js$92=param;
         if($js$92)
          {var info=param[1];
           var $js$93=List["concat"];
           var match=info[7];
           var $js$94=match;
           if($js$94)
            {var $js$95=Pervasives["@"];
             var $js$96=Pervasives["^"];
             var $js$97=$js$96(Odoc_messages["deprecated"]," ");
             var $js$98=[0,$js$97];
             "unknown block:(sendself self-2/1680 fix_linebreaks/1575 (field 0 match/2248))";
             var $js$99=[0,$js$98,$js$100];
             var $js$101=$js$95($js$99,[0,0,[0,0,0]])}
           else
            {var $js$101=0}
           "unknown block:(sendself self-2/1680 text_of_desc/1577 (field 0 info/1684))";
           var $js$102=info[2]!=0;
           if($js$102)
            {"unknown block:(sendself self-2/1680 text_of_author_list/1687 (field 1 info/1684))";
             var $js$103=[0,self-2[linebreak],$js$104]}
           else
            {var $js$103=0}
           var $js$105=is(info[3]);
           if($js$105)
            {"unknown block:(sendself self-2/1680 text_of_version_opt/1688 (field 2 info/1684))";
             var $js$106=[0,self-2[linebreak],$js$107]}
           else
            {var $js$106=0}
           "unknown block:(sendself self-2/1680 text_of_sees_opt/1578 (field 3 info/1684))";
           "unknown block:(sendself self-2/1680 text_of_before/1579 (field 5 info/1684))";
           var $js$108=is(info[5]);
           if($js$108)
            {"unknown block:(sendself self-2/1680 text_of_since_opt/1689 (field 4 info/1684))";
             var $js$109=[0,self-2[linebreak],$js$110]}
           else
            {var $js$109=0}
           "unknown block:(sendself self-2/1680 text_of_params/1580 (field 7 info/1684))";
           "unknown block:(sendself self-2/1680 text_of_raised_exceptions/1581 (field 8 info/1684))";
           var $js$111=is(info[10]);
           if($js$111)
            {"unknown block:(sendself self-2/1680 text_of_return_opt/1582 (field 9 info/1684))";
             var $js$112=[0,self-2[linebreak],$js$113]}
           else
            {var $js$112=0}
           "unknown block:(sendself self-2/1680 text_of_custom/1583 (field 10 info/1684))";
           var $js$114=[0,$js$115,0];
           var $js$116=[0,$js$112,$js$114];
           var $js$117=[0,$js$118,$js$116];
           var $js$119=[0,$js$120,$js$117];
           var $js$121=[0,$js$109,$js$119];
           var $js$122=[0,$js$123,$js$121];
           var $js$124=[0,$js$125,$js$122];
           var $js$126=[0,$js$106,$js$124];
           var $js$127=[0,$js$103,$js$126];
           var $js$128=[0,$js$129,$js$127];
           var $js$130=[0,$js$101,$js$128];
           var t=$js$93($js$130);
           var $js$131=block;
           if($js$131)
            {return [0,[12,t],0]}
           else
            {var $js$132=Pervasives["@"];return $js$132(t,[0,0,0])}}
         else
          {return 0}},
       texi_of_info,
       function(self-2,i)
        {"unknown block:(sendself self-2/1691 texi_of_text/1693\n  (sendself self-2/1691 text_of_info/1584 0a i/1692))"},
       text_el_of_type_expr,
       function(self-2,m_name,typ)
        {"unknown block:(sendself self-2/1695 relative_idents/1698 m_name/1696\n  (apply (field 12 (global Odoc_info!)) typ/1697))";
         var $js$91=indent(5,$js$92);
         return [0,$js$91]},
       text_of_short_type_expr,
       function(self-2,m_name,typ)
        {"unknown block:(sendself self-2/1700 normal_type/1703 m_name/1701 typ/1702)";
         var $js$91=[0,$js$92];
         return [0,$js$91,0]},
       texi_of_value,
       function(self-2,v)
        {var $js$91=Odoc_info["reset_type_names"];
         $js$91(0);
         var $js$92=Pervasives["@"];
         'unknown block:(sendself self-2/1705 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1705 minus/1531)\n      (makeblock 0\n        (makeblock 0\n          (apply (field 15 (global Pervasives!)) "val "\n            (apply (field 15 (global Pervasives!))\n              (apply (field 0 (field 2 (global Odoc_info!)))\n                (field 0 v/1706))\n              " :\n")))\n        (makeblock 0\n          (sendself self-2/1705 text_el_of_type_expr/1586\n            (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/1706))\n            (field 2 v/1706))\n          0a)))))';
         "unknown block:(sendself self-2/1705 index/1574 -991563951a (field 0 v/1706))";
         var $js$93=[0,$js$94,[0,0,0]];
         var $js$95=[0,$js$96,$js$93];
         "unknown block:(sendself self-2/1705 text_of_info/1584 0a (field 1 v/1706))";
         var t=$js$92($js$95,$js$97);
         "unknown block:(sendself self-2/1705 texi_of_text/1693 t/1707)"},
       texi_of_attribute,
       function(self-2,a)
        {var $js$91=Odoc_info["reset_type_names"];
         $js$91(0);
         var $js$92=Pervasives["@"];
         'unknown block:(sendself self-2/1710 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1710 minus/1531)\n      (makeblock 0 [0: "val "]\n        (makeblock 0 (makeblock 0 (if (field 2 a/1711) "virtual " ""))\n          (makeblock 0 (makeblock 0 (if (field 1 a/1711) "mutable " ""))\n            (makeblock 0\n              (makeblock 0\n                (apply (field 0 (field 2 (global Odoc_info!)))\n                  (field 0 (field 0 a/1711))))\n              (makeblock 0 [0: " :\n"]\n                (makeblock 0\n                  (sendself self-2/1710 text_el_of_type_expr/1586\n                    (apply (field 4 (field 2 (global Odoc_info!)))\n                      (field 0 (field 0 a/1711)))\n                    (field 2 (field 0 a/1711)))\n                  0a)))))))))';
         "unknown block:(sendself self-2/1710 index/1574 156047674a (field 0 (field 0 a/1711)))";
         var $js$93=[0,$js$94,[0,0,0]];
         var $js$95=[0,$js$96,$js$93];
         "unknown block:(sendself self-2/1710 text_of_info/1584 0a (field 1 (field 0 a/1711)))";
         var t=$js$92($js$95,$js$97);
         "unknown block:(sendself self-2/1710 texi_of_text/1693 t/1712)"},
       texi_of_method,
       function(self-2,m)
        {var $js$91=Odoc_info["reset_type_names"];
         $js$91(0);
         var $js$92=Pervasives["@"];
         'unknown block:(sendself self-2/1714 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1714 minus/1531)\n      (makeblock 0 [0: "method "]\n        (makeblock 0 (makeblock 0 (if (field 1 m/1715) "private " ""))\n          (makeblock 0 (makeblock 0 (if (field 2 m/1715) "virtual " ""))\n            (makeblock 0\n              (makeblock 0\n                (apply (field 0 (field 2 (global Odoc_info!)))\n                  (field 0 (field 0 m/1715))))\n              (makeblock 0 [0: " :\n"]\n                (makeblock 0\n                  (sendself self-2/1714 text_el_of_type_expr/1586\n                    (apply (field 4 (field 2 (global Odoc_info!)))\n                      (field 0 (field 0 m/1715)))\n                    (field 2 (field 0 m/1715)))\n                  0a)))))))))';
         "unknown block:(sendself self-2/1714 index/1574 1039100673a (field 0 (field 0 m/1715)))";
         var $js$93=[0,$js$94,[0,0,0]];
         var $js$95=[0,$js$96,$js$93];
         "unknown block:(sendself self-2/1714 text_of_info/1584 0a (field 1 (field 0 m/1715)))";
         var t=$js$92($js$95,$js$97);
         "unknown block:(sendself self-2/1714 texi_of_text/1693 t/1716)"},
       string_of_type_parameters,
       function(self-2,t)
        {var
          f=
           function(param)
            {var $js$91=Printf["sprintf"];
             var $js$92=Odoc_info["string_of_variance"];
             var $js$93=$js$92(t,[0,param[2],param[3]]);
             var $js$94=Odoc_info["string_of_type_expr"];
             var $js$95=$js$94(param[1]);
             return $js$91([0,[2,0,[2,0,0]],"%s%s"],$js$93,$js$95)};
         var l=t[3];
         var $js$91=l;
         if($js$91)
          {var $js$92=l[2];
           if($js$92)
            {var $js$93=Printf["sprintf"];
             var $js$94=String["concat"];
             var $js$95=List["map"];
             var $js$96=$js$95(f,l);
             var $js$97=$js$94(", ",$js$96);
             return $js$93([0,[12,40,[2,0,[11,") ",0]]],"(%s) "],$js$97)}
           else
            {var match=l[1];
             var $js$98=Pervasives["^"];
             var $js$99=f([0,match[1],match[2],match[3]]);
             return $js$98($js$99," ")}}
         else
          {return ""}},
       string_of_type_args,
       function(self-2,args,ret)
        {var $js$91=args;
         if($js$91)
          {var $js$92=ret;
           if($js$92)
            {var $js$93=Pervasives["^"];
             var $js$94=Pervasives["^"];
             var $js$95=Odoc_info["string_of_type_list"];
             var $js$96=$js$95(0," * ",args);
             var $js$97=Pervasives["^"];
             var $js$98=Odoc_info["string_of_type_expr"];
             var $js$99=$js$98(ret[1]);
             var $js$100=$js$97(" -> ",$js$99);
             var $js$101=$js$94($js$96,$js$100);
             return $js$93(" : ",$js$101)}
           else
            {var $js$102=Pervasives["^"];
             var $js$103=Odoc_info["string_of_type_list"];
             var $js$104=$js$103(0," * ",args);
             return $js$102(" of ",$js$104)}}
         else
          {var $js$105=ret;
           if($js$105)
            {var $js$106=Pervasives["^"];
             var $js$107=Odoc_info["string_of_type_expr"];
             var $js$108=$js$107(ret[1]);
             return $js$106(" : ",$js$108)}
           else
            {return ""}}},
       texi_of_type,
       function(self-2,ty)
        {var $js$91=Odoc_info["reset_type_names"];
         $js$91(0);
         var
          entry_doc=
           function(param)
            {var $js$92=param;
             if($js$92)
              {var $js$93=Pervasives["@"];
               var $js$94=indent(5,"\n(*\n");
               var $js$95=[0,$js$94];
               "unknown block:(sendself self-2/1737 soft_fix_linebreaks/1576 8\n  (sendself self-2/1737 text_of_info/1584 0a\n    (makeblock 0 (field 0 param/2228))))";
               var $js$96=[0,$js$95,$js$97];
               return $js$93($js$96,[0,[0," *)"],[0,0,0]])}
             else
              {return [0,0,0]}};
         var $js$92=Pervasives["@"];
         'unknown block:(sendself self-2/1737 fixedblock/1708\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 0a\n      (makeblock 0 (array.unsafe_get self-2/1737 minus/1531)\n        (makeblock 0 [0: "type "]\n          (makeblock 0\n            (makeblock 0\n              (sendself self-2/1737 string_of_type_parameters/1591 ty/1738))\n            (makeblock 0\n              (makeblock 0\n                (apply (field 0 (field 2 (global Odoc_info!)))\n                  (field 0 ty/1738)))\n              0a)))))\n    (let (priv/1742 = (== (field 4 ty/1738) 0a))\n      (apply (field 21 (global Pervasives!))\n        (let (match/2224 = (field 5 ty/1738))\n          (if match/2224\n            (let (match/2225 =a (field 0 match/2224))\n              (switch* match/2225\n               case tag 0:\n                (makeblock 0 [0: " = "]\n                  (makeblock 0 (makeblock 0 (if priv/1742 "private " ""))\n                    (sendself self-2/1737 text_of_short_type_expr/1587\n                      (apply (field 4 (field 2 (global Odoc_info!)))\n                        (field 0 ty/1738))\n                      (field 0 match/2225))))\n               case tag 1:\n                (apply (field 21 (global Pervasives!))\n                  (makeblock 0\n                    (makeblock 0\n                      (apply (field 15 (global Pervasives!)) " = "\n                        (apply (field 15 (global Pervasives!))\n                          (if priv/1742 "private " "") "{\n")))\n                    (apply (field 8 (global List!))\n                      (apply (field 11 (global List!))\n                        (function r/1745\n                          (apply (field 21 (global Pervasives!))\n                            (makeblock 0\n                              (makeblock 0\n                                (apply (field 15 (global Pervasives!)) "  "\n                                  (apply (field 15 (global Pervasives!))\n                                    (field 0 r/1745) " : ")))\n                              0a)\n                            (apply (field 21 (global Pervasives!))\n                              (sendself self-2/1737\n                                text_of_short_type_expr/1587\n                                (apply\n                                  (field 4 (field 2 (global Odoc_info!)))\n                                  (field 0 r/1745))\n                                (field 1 r/1745))\n                              (apply (field 21 (global Pervasives!))\n                                [0: [0: " ;"] 0a]\n                                (apply entry_doc/1739 (field 2 r/1745))))))\n                        (field 0 match/2225))))\n                  [0: [0: " }"] 0a])))\n            0a))\n        (let (match/2227 = (field 3 ty/1738))\n          (switch* match/2227\n           case int 0: [0: 0a 0a]\n           case int 1: [0: [0: " = .."] [0: 0a 0a]]\n           case tag 0:\n            (makeblock 0\n              (makeblock 0\n                (apply (field 15 (global Pervasives!)) " ="\n                  (apply (field 15 (global Pervasives!))\n                    (if priv/1742 " private" "") "\n")))\n              (apply (field 8 (global List!))\n                (apply (field 11 (global List!))\n                  (function constr/1748\n                    (makeblock 0\n                      (makeblock 0\n                        (apply (field 15 (global Pervasives!)) "  | "\n                          (field 0 constr/1748)))\n                      (makeblock 0\n                        (makeblock 0\n                          (sendself self-2/1737 string_of_type_args/1592\n                            (field 1 constr/1748) (field 2 constr/1748)))\n                        (apply entry_doc/1739 (field 3 constr/1748)))))\n                  (field 0 match/2227))))\n           case tag 1:\n            (apply (field 21 (global Pervasives!))\n              (makeblock 0\n                (makeblock 0\n                  (apply (field 15 (global Pervasives!)) " = "\n                    (apply (field 15 (global Pervasives!))\n                      (if priv/1742 "private " "") "{\n")))\n                (apply (field 8 (global List!))\n                  (apply (field 11 (global List!))\n                    (function r/1749\n                      (apply (field 21 (global Pervasives!))\n                        (makeblock 0\n                          (makeblock 0\n                            (apply (field 15 (global Pervasives!)) "  "\n                              (apply (field 15 (global Pervasives!))\n                                (field 0 r/1749) " : ")))\n                          0a)\n                        (apply (field 21 (global Pervasives!))\n                          (sendself self-2/1737 text_of_short_type_expr/1587\n                            (apply (field 4 (field 2 (global Odoc_info!)))\n                              (field 0 r/1749))\n                            (field 2 r/1749))\n                          (apply (field 21 (global Pervasives!))\n                            [0: [0: " ;"] 0a]\n                            (apply entry_doc/1739 (field 3 r/1749))))))\n                    (field 0 match/2227))))\n              [0: [0: " }"] 0a])))))))';
         "unknown block:(sendself self-2/1737 index/1574 937565914a (field 0 ty/1738))";
         var $js$93=[0,$js$94,[0,0,0]];
         var $js$95=[0,$js$96,$js$93];
         "unknown block:(sendself self-2/1737 text_of_info/1584 0a (field 1 ty/1738))";
         var t=$js$92($js$95,$js$97);
         "unknown block:(sendself self-2/1737 texi_of_text/1693 t/1741)"},
       texi_of_type_extension,
       function(self-2,m_name,te)
        {var $js$91=Odoc_info["reset_type_names"];
         $js$91(0);
         'unknown block:(sendself self-2/1751 fixedblock/1708\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 0a\n      (makeblock 0 (array.unsafe_get self-2/1751 minus/1531)\n        (makeblock 0 [0: "type "]\n          (makeblock 0\n            (makeblock 0\n              (let (l/1756 = (field 2 te/1753))\n                (if l/1756\n                  (if (field 1 l/1756)\n                    (apply (field 3 (global Printf!))\n                      [0: [12: \'(\' [2: 0a [11: ") " 0a]]] "(%s) "]\n                      (apply (field 6 (global String!)) ", "\n                        (apply (field 11 (global List!))\n                          (field 12 (global Odoc_info!)) l/1756)))\n                    (apply (field 3 (global Printf!))\n                      [0: [2: 0a [12: \' \' 0a]] "%s "]\n                      (apply (field 12 (global Odoc_info!)) (field 0 l/1756))))\n                  "")))\n            (makeblock 0\n              (makeblock 0\n                (sendself self-2/1751 relative_idents/1698 m_name/1752\n                  (field 1 te/1753)))\n              (makeblock 0\n                (makeblock 0\n                  (apply (field 15 (global Pervasives!)) " +="\n                    (apply (field 15 (global Pervasives!))\n                      (if (== (field 3 te/1753) 0a) " private" "") "\n")))\n                0a))))))\n    (apply (field 8 (global List!))\n      (apply (field 11 (global List!))\n        (function x/1757\n          (apply (field 21 (global Pervasives!))\n            (makeblock 0\n              (makeblock 0\n                (apply (field 15 (global Pervasives!)) "  | "\n                  (apply (field 0 (field 2 (global Odoc_info!)))\n                    (field 0 x/1757))))\n              (makeblock 0\n                (makeblock 0\n                  (sendself self-2/1751 string_of_type_args/1592\n                    (field 1 x/1757) (field 2 x/1757)))\n                (let (match/2219 = (field 4 x/1757))\n                  (if match/2219\n                    (let (xa/1758 =a (field 0 match/2219))\n                      (makeblock 0 [0: " = "]\n                        (makeblock 0\n                          (makeblock 0\n                            (let (match/2218 = (field 1 xa/1758))\n                              (if match/2218 (field 0 (field 0 match/2218))\n                                (field 0 xa/1758))))\n                          0a)))\n                    0a))))\n            (apply (field 21 (global Pervasives!))\n              (let (match/2221 = (field 6 x/1757))\n                (if match/2221\n                  (apply (field 21 (global Pervasives!))\n                    (makeblock 0 (makeblock 0 (apply indent/1236 5 "\n(* "))\n                      (sendself self-2/1751 soft_fix_linebreaks/1576 8\n                        (sendself self-2/1751 text_of_info/1584 0a\n                          (makeblock 0 (field 0 match/2221)))))\n                    [0: [0: " *)"] [0: 0a 0a]])\n                  [0: 0a 0a]))\n              (makeblock 0\n                (sendself self-2/1751 index/1574 115569503a (field 0 x/1757))\n                0a))))\n        (field 4 te/1753)))))';
         "unknown block:(sendself self-2/1751 text_of_info/1584 0a (field 0 te/1753))";
         var t=[0,$js$92,$js$93];
         "unknown block:(sendself self-2/1751 texi_of_text/1693 t/1754)"},
       texi_of_exception,
       function(self-2,e)
        {var $js$91=Odoc_info["reset_type_names"];
         $js$91(0);
         var $js$92=Pervasives["@"];
         'unknown block:(sendself self-2/1762 fixedblock/1708\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 0a\n      (makeblock 0 (array.unsafe_get self-2/1762 minus/1531)\n        (makeblock 0 [0: "exception "]\n          (makeblock 0\n            (makeblock 0\n              (apply (field 0 (field 2 (global Odoc_info!)))\n                (field 0 e/1763)))\n            (makeblock 0\n              (makeblock 0\n                (sendself self-2/1762 string_of_type_args/1592\n                  (field 2 e/1763) (field 3 e/1763)))\n              0a)))))\n    (let (match/2212 = (field 4 e/1763))\n      (if match/2212\n        (let (ea/1765 =a (field 0 match/2212))\n          (makeblock 0 [0: " = "]\n            (makeblock 0\n              (makeblock 0\n                (let (match/2211 = (field 1 ea/1765))\n                  (if match/2211 (field 0 (field 0 match/2211))\n                    (field 0 ea/1765))))\n              0a)))\n        0a))))';
         "unknown block:(sendself self-2/1762 index/1574 -345182161a (field 0 e/1763))";
         var $js$93=[0,$js$94,[0,0,0]];
         var $js$95=[0,$js$96,$js$93];
         "unknown block:(sendself self-2/1762 text_of_info/1584 0a (field 1 e/1763))";
         var t=$js$92($js$95,$js$97);
         "unknown block:(sendself self-2/1762 texi_of_text/1693 t/1764)"},
       texi_of_module,
       function(self-2,m)
        {var
          is_alias=
           function(param)
            {var match=param[6];
             var $js$91=match;
             if($js$91==1){return 1}else{return 0}};
         var
          is_alias_there=
           function(param)
            {var match=param[6];
             var $js$91=match;
             if($js$91==1)
              {var match$1=match[1][2];
               var $js$92=match$1;
               if($js$92){var exit=61}else{return 0}}
             else
              {var exit=61}
             switch(exit){case 61:return 1}};
         var
          resolve_alias_name=
           function(param)
            {var match=param[6];
             var $js$91=match;
             if($js$91==1){return match[1][1]}else{return param[1]}};
         'unknown block:(sendself self-2/1768 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1768 minus/1531)\n      (makeblock 0 [0: "module "]\n        (makeblock 0\n          (makeblock 0\n            (apply (field 0 (field 2 (global Odoc_info!))) (field 0 m/1769)))\n          (makeblock 0\n            (makeblock 0\n              (if (apply is_alias/1770 m/1769)\n                (apply (field 15 (global Pervasives!)) " = "\n                  (apply resolve_alias_name/1772 m/1769))\n                ""))\n            0a))))))';
         var $js$91=[0,$js$92,0];
         var $js$93=is_alias_there(m);
         if($js$93)
          {var $js$94=resolve_alias_name(m);
           var $js$95=[16,$js$94,[0,0],0];
           var $js$96=[0,$js$95,[0,0,0]]}
         else
          {var $js$96=0}
         var $js$97=is_alias(m);
         if($js$97)
          {"unknown block:(sendself self-2/1768 index/1574 -177755956a (field 0 m/1769))";
           var $js$98=[0,$js$99,[0,0,0]]}
         else
          {var $js$98=[0,0,0]}
         "unknown block:(sendself self-2/1768 text_of_info/1584 0a (field 2 m/1769))";
         var $js$100=[0,$js$101,0];
         var $js$102=[0,$js$98,$js$100];
         var $js$103=[0,$js$96,$js$102];
         var t=[0,$js$91,$js$103];
         "unknown block:(sendself self-2/1768 texi_of_text/1693\n  (apply (field 8 (global List!)) t/1775))"},
       texi_of_module_type,
       function(self-2,mt)
        {var
          is_alias=
           function(param)
            {var match=param[6];
             var $js$91=match;
             if($js$91)
              {var $js$92=match[1];if($js$92==2){return 1}else{var exit=56}}
             else
              {var exit=56}
             switch(exit){case 56:return 0}};
         var
          is_alias_there=
           function(param)
            {var match=param[6];
             var $js$91=match;
             if($js$91)
              {var match$1=match[1];
               var $js$92=match$1;
               if($js$92==2)
                {var match$2=match$1[1][2];
                 var $js$93=match$2;
                 if($js$93){var exit=54}else{return 0}}
               else
                {var exit=54}}
             else
              {var exit=54}
             switch(exit){case 54:return 1}};
         var
          resolve_alias_name=
           function(param)
            {var match=param[6];
             var $js$91=match;
             if($js$91)
              {var match$1=match[1];
               var $js$92=match$1;
               if($js$92==2){return match$1[1][1]}else{var exit=52}}
             else
              {var exit=52}
             switch(exit){case 52:return param[1]}};
         'unknown block:(sendself self-2/1777 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1777 minus/1531)\n      (makeblock 0 [0: "module type "]\n        (makeblock 0\n          (makeblock 0\n            (apply (field 0 (field 2 (global Odoc_info!))) (field 0 mt/1778)))\n          (makeblock 0\n            (makeblock 0\n              (if (apply is_alias/1779 mt/1778)\n                (apply (field 15 (global Pervasives!)) " = "\n                  (apply resolve_alias_name/1781 mt/1778))\n                ""))\n            0a))))))';
         var $js$91=[0,$js$92,0];
         var $js$93=is_alias_there(mt);
         if($js$93)
          {var $js$94=resolve_alias_name(mt);
           var $js$95=[16,$js$94,[0,1],0];
           var $js$96=[0,$js$95,[0,0,0]]}
         else
          {var $js$96=0}
         var $js$97=is_alias(mt);
         if($js$97)
          {"unknown block:(sendself self-2/1777 index/1574 448725581a (field 0 mt/1778))";
           var $js$98=[0,$js$99,[0,0,0]]}
         else
          {var $js$98=[0,0,0]}
         "unknown block:(sendself self-2/1777 text_of_info/1584 0a (field 1 mt/1778))";
         var $js$100=[0,$js$101,0];
         var $js$102=[0,$js$98,$js$100];
         var $js$103=[0,$js$96,$js$102];
         var t=[0,$js$91,$js$103];
         "unknown block:(sendself self-2/1777 texi_of_text/1693\n  (apply (field 8 (global List!)) t/1784))"},
       texi_of_included_module,
       function(self-2,im)
        {'unknown block:(sendself self-2/1786 fixedblock/1708\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 0a\n      (makeblock 0 (array.unsafe_get self-2/1786 minus/1531)\n        (makeblock 0 [0: "include "]\n          (let (match/2095 = (field 1 im/1787))\n            (if match/2095\n              (let (match/2096 =a (field 0 match/2095))\n                (switch* match/2096\n                 case tag 0:\n                  (let (name/1789 =a (field 0 (field 0 match/2096)))\n                    (makeblock 0 (makeblock 0 name/1789)\n                      (makeblock 0 [0: "\n     "]\n                        (makeblock 0 (makeblock 16 name/1789 [0: 0a] 0a) 0a))))\n                 case tag 1:\n                  (let (name/1790 =a (field 0 (field 0 match/2096)))\n                    (makeblock 0 (makeblock 0 name/1790)\n                      (makeblock 0 [0: "\n     "]\n                        (makeblock 0 (makeblock 16 name/1790 [0: 1a] 0a) 0a))))))\n              (makeblock 0 (makeblock 0 (field 0 im/1787)) 0a))))))\n    (apply (field 21 (global Pervasives!)) [0: 0a 0a]\n      (sendself self-2/1786 text_of_info/1584 0a (field 2 im/1787)))))';
         var t=[0,$js$91,0];
         "unknown block:(sendself self-2/1786 texi_of_text/1693 t/1788)"},
       texi_of_class,
       function(self-2,c)
        {var $js$91=Odoc_info["reset_type_names"];
         $js$91(0);
         var $js$92=Pervasives["@"];
         'unknown block:(sendself self-2/1792 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1792 minus/1531)\n      (makeblock 0 [0: "class "]\n        (makeblock 0\n          (makeblock 0\n            (apply (field 0 (field 2 (global Odoc_info!))) (field 0 c/1793)))\n          0a)))))';
         var $js$93=[0,$js$94,[0,[16,c[1],[0,2],0],[0,0,[0,0,0]]]];
         "unknown block:(sendself self-2/1792 text_of_info/1584 0a (field 1 c/1793))";
         var t=$js$92($js$93,$js$95);
         "unknown block:(sendself self-2/1792 texi_of_text/1693 t/1794)"},
       texi_of_class_type,
       function(self-2,ct)
        {var $js$91=Odoc_info["reset_type_names"];
         $js$91(0);
         var $js$92=Pervasives["@"];
         'unknown block:(sendself self-2/1796 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1796 minus/1531)\n      (makeblock 0 [0: "class type "]\n        (makeblock 0\n          (makeblock 0\n            (apply (field 0 (field 2 (global Odoc_info!))) (field 0 ct/1797)))\n          0a)))))';
         var $js$93=[0,$js$94,[0,[16,ct[1],[0,3],0],[0,0,[0,0,0]]]];
         "unknown block:(sendself self-2/1796 text_of_info/1584 0a (field 1 ct/1797))";
         var t=$js$92($js$93,$js$95);
         "unknown block:(sendself self-2/1796 texi_of_text/1693 t/1798)"},
       texi_of_class_element,
       function(self-2,class_name,class_ele)
        {var $js$91=class_ele;
         if($js$91==0)
          {"unknown block:(sendself self-2/1800 texi_of_attribute/1589 (field 0 class_ele/1802))"}
         else
          if($js$91==1)
           {"unknown block:(sendself self-2/1800 texi_of_method/1590 (field 0 class_ele/1802))"}
          else
           if($js$91==2)
            {"unknown block:(sendself self-2/1800 texi_of_text/1693 (field 0 class_ele/1802))"}},
       texi_of_module_element,
       function(self-2,module_name,module_ele)
        {var $js$91=module_ele;
         if($js$91==0)
          {"unknown block:(sendself self-2/1807 texi_of_module/1596 (field 0 module_ele/1809))"}
         else
          if($js$91==1)
           {"unknown block:(sendself self-2/1807 texi_of_module_type/1597 (field 0 module_ele/1809))"}
          else
           if($js$91==2)
            {"unknown block:(sendself self-2/1807 texi_of_included_module/1598 (field 0 module_ele/1809))"}
           else
            if($js$91==3)
             {"unknown block:(sendself self-2/1807 texi_of_class/1599 (field 0 module_ele/1809))"}
            else
             if($js$91==4)
              {"unknown block:(sendself self-2/1807 texi_of_class_type/1600 (field 0 module_ele/1809))"}
             else
              if($js$91==5)
               {"unknown block:(sendself self-2/1807 texi_of_value/1588 (field 0 module_ele/1809))"}
              else
               if($js$91==6)
                {"unknown block:(sendself self-2/1807 texi_of_type_extension/1594 module_name/1808\n  (field 0 module_ele/1809))"}
               else
                if($js$91==7)
                 {"unknown block:(sendself self-2/1807 texi_of_exception/1595 (field 0 module_ele/1809))"}
                else
                 if($js$91==8)
                  {"unknown block:(sendself self-2/1807 texi_of_type/1593 (field 0 module_ele/1809))"}
                 else
                  if($js$91==9)
                   {"unknown block:(sendself self-2/1807 texi_of_text/1693\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 0a (field 0 module_ele/1809)) [0: 0a 0a]))"}},
       generate_inheritance_info,
       function(self-2,chanout,inher_l)
        {var
          f=
           function(inh$2)
            {var match=inh$2[2];
             var $js$91=match;
             if($js$91)
              {var $js$92=match[1];
               if($js$92==0){var kind=[0,2]}else if($js$92==1){var kind=[0,3]}
               var match$1=inh$2[3];
               var $js$93=match$1;
               if($js$93){var $js$94=[0,0,match$1[1]]}else{var $js$94=0}
               var $js$95=[0,[16,inh$2[1],kind,0],$js$94];
               return [0,[1,inh$2[1]],$js$95]}
             else
              {var match$2=inh$2[3];
               var $js$96=match$2;
               if($js$96){var $js$97=[0,0,match$2[1]]}else{var $js$97=0}
               return [0,[1,inh$2[1]],$js$97]}};
         var $js$91=List["map"];
         var $js$92=$js$91(f,inher_l);
         var $js$93=[10,$js$92];
         var $js$94=[0,$js$93,[0,0,0]];
         var text$1=[0,[4,[0,[0,Odoc_messages["inherits"]],0]],$js$94];
         "unknown block:(sendself self-2/1821 texi_of_text/1693 text/1830)";
         return puts(chanout,$js$95)},
       generate_class_inheritance_info,
       function(self-2,chanout,cl)
        {var
          iter_kind=
           function(param)
            {var $js$91=param;
             if($js$91==0)
              {var l=param[1];
               var $js$92=l;
               if($js$92)
                {"unknown block:(sendself self-2/1832 generate_inheritance_info/1603 chanout/1833 l/1836)"}
               else
                {return 0}}
             else
              if($js$91==1)
               {var exit=43}
              else
               if($js$91==2)
                {var exit=43}
               else
                if($js$91==3){return iter_kind(param[1])}
             switch(exit){case 43:return 0}};
         return iter_kind(cl[6])},
       generate_class_type_inheritance_info,
       function(self-2,chanout,clt)
        {var match=clt[6];
         var $js$91=match;
         if($js$91==0)
          {var l=match[1];
           var $js$92=l;
           if($js$92)
            {"unknown block:(sendself self-2/1839 generate_inheritance_info/1603 chanout/1840 l/1842)"}
           else
            {return 0}}
         else
          if($js$91==1){return 0}},
       generate_for_class,
       function(self-2,chanout,c)
        {try
          {var $js$91=Odoc_info["reset_type_names"];
           $js$91(0);
           var $js$92=Odoc_info["Name"][3];
           var depth=$js$92(c[1]);
           "unknown block:(sendself self-2/1844 node/1573 depth/1847 (field 0 c/1846))";
           var $js$93=Pervasives["^"];
           var $js$94=$js$93(Odoc_messages["clas"]," ");
           var $js$95=[0,$js$94];
           var $js$96=[0,$js$95,[0,[1,c[1]],0]];
           var $js$97=[13,depth,0,$js$96];
           "unknown block:(sendself self-2/1844 index/1574 -611981288a (field 0 c/1846))";
           var $js$98=[0,$js$99,0];
           var $js$100=[0,$js$97,$js$98];
           var title=[0,$js$101,$js$100];
           "unknown block:(sendself self-2/1844 texi_of_text/1693 title/1848)";
           puts(chanout,$js$102);
           var $js$103=is(c[2]);
           if($js$103)
            {var
              descr=
               [0,[13,1+depth,0,[0,[0,Odoc_messages["description"]],0]],0];
             "unknown block:(sendself self-2/1844 texi_of_text/1693 descr/1849)";
             puts(chanout,$js$104);
             "unknown block:(sendself self-2/1844 texi_of_info/1585 (field 1 c/1846))";
             puts(chanout,$js$105)}
           else
            {}
           var intf=[0,[13,1+depth,0,[0,[0,Odoc_messages["interface"]],0]],0];
           "unknown block:(sendself self-2/1844 texi_of_text/1693 intf/1850)";
           puts(chanout,$js$106);
           "unknown block:(sendself self-2/1844 generate_class_inheritance_info/1604 chanout/1845\n  c/1846)";
           var $js$107=List["iter"];
           var $js$108=Odoc_info["Class"][1];
           var $js$109=$js$108([0,0],c);
           return $js$107
                   (function(ele)
                     {"unknown block:(sendself self-2/1844 texi_of_class_element/1601 (field 0 c/1846) ele/1851)";
                      return puts(chanout,$js$110)},
                    $js$109)}
         catch(exn)
          {var $js$110=exn=Aliased_node;
           if($js$110){return 0}else{return "unknown primitive:reraise"}}},
       generate_for_class_type,
       function(self-2,chanout,ct)
        {try
          {var $js$91=Odoc_info["reset_type_names"];
           $js$91(0);
           var $js$92=Odoc_info["Name"][3];
           var depth=$js$92(ct[1]);
           "unknown block:(sendself self-2/1853 node/1573 depth/1856 (field 0 ct/1855))";
           var $js$93=Pervasives["^"];
           var $js$94=$js$93(Odoc_messages["class_type"]," ");
           var $js$95=[0,$js$94];
           var $js$96=[0,$js$95,[0,[1,ct[1]],0]];
           var $js$97=[13,depth,0,$js$96];
           "unknown block:(sendself self-2/1853 index/1574 649842561a (field 0 ct/1855))";
           var $js$98=[0,$js$99,0];
           var $js$100=[0,$js$97,$js$98];
           var title=[0,$js$101,$js$100];
           "unknown block:(sendself self-2/1853 texi_of_text/1693 title/1857)";
           puts(chanout,$js$102);
           var $js$103=is(ct[2]);
           if($js$103)
            {var
              descr=
               [0,[13,1+depth,0,[0,[0,Odoc_messages["description"]],0]],0];
             "unknown block:(sendself self-2/1853 texi_of_text/1693 descr/1858)";
             puts(chanout,$js$104);
             "unknown block:(sendself self-2/1853 texi_of_info/1585 (field 1 ct/1855))";
             puts(chanout,$js$105)}
           else
            {}
           var intf=[0,[13,1+depth,0,[0,[0,Odoc_messages["interface"]],0]],0];
           "unknown block:(sendself self-2/1853 texi_of_text/1693 intf/1859)";
           puts(chanout,$js$106);
           "unknown block:(sendself self-2/1853 generate_class_type_inheritance_info/1605 chanout/1854\n  ct/1855)";
           var $js$107=List["iter"];
           var $js$108=Odoc_info["Class"][6];
           var $js$109=$js$108([0,0],ct);
           return $js$107
                   (function(ele)
                     {"unknown block:(sendself self-2/1853 texi_of_class_element/1601 (field 0 ct/1855) ele/1860)";
                      return puts(chanout,$js$110)},
                    $js$109)}
         catch(exn)
          {var $js$110=exn=Aliased_node;
           if($js$110){return 0}else{return "unknown primitive:reraise"}}},
       generate_for_module_type,
       function(self-2,chanout,mt)
        {try
          {var $js$91=Odoc_info["Name"][3];
           var depth=$js$91(mt[1]);
           "unknown block:(sendself self-2/1862 node/1573 depth/1865 (field 0 mt/1864))";
           var $js$92=Pervasives["^"];
           var $js$93=$js$92(Odoc_messages["module_type"]," ");
           var $js$94=[0,$js$93];
           var $js$95=[0,$js$94,[0,[1,mt[1]],0]];
           var $js$96=[13,depth,0,$js$95];
           "unknown block:(sendself self-2/1862 index/1574 448725581a (field 0 mt/1864))";
           var $js$97=[0,$js$98,[0,0,0]];
           var $js$99=[0,$js$96,$js$97];
           var title=[0,$js$100,$js$99];
           "unknown block:(sendself self-2/1862 texi_of_text/1693 title/1866)";
           puts(chanout,$js$101);
           var $js$102=is(mt[2]);
           if($js$102)
            {var
              descr=
               [0,[13,1+depth,0,[0,[0,Odoc_messages["description"]],0]],0];
             "unknown block:(sendself self-2/1862 texi_of_text/1693 descr/1867)";
             puts(chanout,$js$103);
             "unknown block:(sendself self-2/1862 texi_of_info/1585 (field 1 mt/1864))";
             puts(chanout,$js$104)}
           else
            {}
           var $js$105=Odoc_info["Module"][17];
           var mt_ele=$js$105([0,1],mt);
           var subparts=module_subparts(mt_ele);
           var $js$106=depth<self-2[maxdepth]&&subparts!=0;
           if($js$106)
            {var $js$107=Texi[6];
             'unknown block:(sendself self-2/1862 heading/1871 (1+ depth/1865) [0: [0: "Subparts"] 0a])';
             var menu=$js$107($js$108);
             puts(chanout,menu);
             var $js$109=Texi[4];
             $js$109(chanout,subparts)}
           else
            {}
           var intf=[0,[13,1+depth,0,[0,[0,Odoc_messages["interface"]],0]],0];
           "unknown block:(sendself self-2/1862 texi_of_text/1693 intf/1872)";
           puts(chanout,$js$110);
           var $js$111=List["iter"];
           $js$111
            (function(ele)
              {"unknown block:(sendself self-2/1862 texi_of_module_element/1602 (field 0 mt/1864) ele/1873)";
               return puts(chanout,$js$112)},
             mt_ele);
           var $js$112=List["iter"];
           return $js$112
                   (function(param)
                     {var variant=param[1];
                      var $js$113=variant>=448725581;
                      if($js$113)
                       {var $js$114=variant>=649842561;
                        if($js$114)
                         {"unknown block:(sendself self-2/1862 generate_for_class_type/1607 chanout/1863\n  (field 1 param/2057))"}
                        else
                         {"unknown block:(sendself self-2/1862 generate_for_module_type/1608 chanout/1863\n  (field 1 param/2057))"}}
                      else
                       {var $js$115=variant>=-177755956;
                        if($js$115)
                         {"unknown block:(sendself self-2/1862 generate_for_module/1609 chanout/1863\n  (field 1 param/2057))"}
                        else
                         {"unknown block:(sendself self-2/1862 generate_for_class/1606 chanout/1863\n  (field 1 param/2057))"}}},
                    subparts)}
         catch(exn)
          {var $js$113=exn=Aliased_node;
           if($js$113){return 0}else{return "unknown primitive:reraise"}}},
       generate_for_module,
       function(self-2,chanout,m)
        {try
          {var $js$91=Odoc_info["verbose"];
           var $js$92=Pervasives["^"];
           var $js$93=$js$92("Generate for module ",m[1]);
           $js$91($js$93);
           var $js$94=Odoc_info["Name"][3];
           var depth=$js$94(m[1]);
           "unknown block:(sendself self-2/1879 node/1573 depth/1882 (field 0 m/1881))";
           var $js$95=m[11];
           if($js$95)
            {var $js$96=[0,[0,m[1]],0]}
           else
            {var $js$97=Pervasives["^"];
             var $js$98=$js$97(Odoc_messages["modul"]," ");
             var $js$99=[0,$js$98];
             var $js$96=[0,$js$99,[0,[1,m[1]],0]]}
           var $js$100=[13,depth,0,$js$96];
           "unknown block:(sendself self-2/1879 index/1574 -177755956a (field 0 m/1881))";
           var $js$101=[0,$js$102,[0,0,0]];
           var $js$103=[0,$js$100,$js$101];
           var title=[0,$js$104,$js$103];
           "unknown block:(sendself self-2/1879 texi_of_text/1693 title/1883)";
           puts(chanout,$js$105);
           var $js$106=is(m[3]);
           if($js$106)
            {var
              descr=
               [0,[13,1+depth,0,[0,[0,Odoc_messages["description"]],0]],0];
             "unknown block:(sendself self-2/1879 texi_of_text/1693 descr/1884)";
             puts(chanout,$js$107);
             "unknown block:(sendself self-2/1879 texi_of_info/1585 (field 2 m/1881))";
             puts(chanout,$js$108)}
           else
            {}
           var $js$109=Odoc_info["Module"][1];
           var m_ele=$js$109([0,1],m);
           var subparts=module_subparts(m_ele);
           var $js$110=depth<self-2[maxdepth]&&subparts!=0;
           if($js$110)
            {var $js$111=Texi[6];
             'unknown block:(sendself self-2/1879 heading/1871 (1+ depth/1882) [0: [0: "Subparts"] 0a])';
             var menu=$js$111($js$112);
             puts(chanout,menu);
             var $js$113=Texi[4];
             $js$113(chanout,subparts)}
           else
            {}
           var intf=[0,[13,1+depth,0,[0,[0,Odoc_messages["interface"]],0]],0];
           "unknown block:(sendself self-2/1879 texi_of_text/1693 intf/1888)";
           puts(chanout,$js$114);
           var $js$115=List["iter"];
           $js$115
            (function(ele)
              {"unknown block:(sendself self-2/1879 texi_of_module_element/1602 (field 0 m/1881) ele/1889)";
               return puts(chanout,$js$116)},
             m_ele);
           var $js$116=List["iter"];
           return $js$116
                   (function(param)
                     {var variant=param[1];
                      var $js$117=variant>=448725581;
                      if($js$117)
                       {var $js$118=variant>=649842561;
                        if($js$118)
                         {"unknown block:(sendself self-2/1879 generate_for_class_type/1607 chanout/1880\n  (field 1 param/2047))"}
                        else
                         {"unknown block:(sendself self-2/1879 generate_for_module_type/1608 chanout/1880\n  (field 1 param/2047))"}}
                      else
                       {var $js$119=variant>=-177755956;
                        if($js$119)
                         {"unknown block:(sendself self-2/1879 generate_for_module/1609 chanout/1880\n  (field 1 param/2047))"}
                        else
                         {"unknown block:(sendself self-2/1879 generate_for_class/1606 chanout/1880\n  (field 1 param/2047))"}}},
                    subparts)}
         catch(exn)
          {var $js$117=exn=Aliased_node;
           if($js$117){return 0}else{return "unknown primitive:reraise"}}},
       generate_texi_header,
       function(self-2,chan,texi_filename,m_list)
        {var match=Odoc_info["Global"][6][1];
         var $js$91=match;
         if($js$91)
          {"unknown block:(sendself self-2/1895 escape/1901 (field 0 match/2044))"}
         else
          {var title=""}
         var $js$92="unknown primitive:caml_string_notequal";
         if($js$92)
          {var $js$93=Filename["basename"];
           var fn=$js$93(texi_filename);
           var $js$94=Pervasives["^"];
           var $js$95=Filename["check_suffix"];
           var $js$96=$js$95(fn,".texi");
           if($js$96)
            {var $js$97=Filename["chop_suffix"];var $js$98=$js$97(fn,".texi")}
           else
            {var $js$98=fn}
           var filename=$js$94($js$98,".info")}
         else
          {var $js$99="unknown primitive:caml_string_notequal";
           if($js$99)
            {var $js$100=Pervasives["^"];var filename=$js$100(title,".info")}
           else
            {var filename="doc.info"}}
         var $js$101=List["iter"];
         var $js$102=puts_nl(chan);
         var $js$103=List["flatten"];
         var $js$104=Pervasives["^"];
         var $js$105=$js$104("@setfilename ",filename);
         var $js$106=Pervasives["^"];
         var $js$107=$js$106("@settitle ",title);
         var $js$108=[0,$js$107,[0,"@c %**end of header",0]];
         var $js$109=[0,$js$105,$js$108];
         var $js$110=[0,"@c %**start of header",$js$109];
         var $js$111=[0,"\input texinfo   @c -*-texinfo-*-",$js$110];
         var $js$112=Odoc_info["Global"][9][1];
         if($js$112)
          {var $js$113=List["map"];
           var
            $js$114=
             $js$113
              (function(ind)
                {var $js$115=Pervasives["^"];
                 var $js$116=indices(ind);
                 return $js$115("@defcodeindex ",$js$116)},
               self-2[indices_to_build])}
         else
          {var $js$114=0}
         var $js$115=Texi[7];
         var $js$116=$js$115(info_section[1]);
         var $js$117=[0,$js$116,0];
         var $js$118=Texi[8];
         var $js$119=info_entry[1]!=0;
         if($js$119)
          {var $js$120=info_entry[1]}
         else
          {var $js$121=Printf["sprintf"];
           var $js$122=Filename["chop_suffix"];
           var $js$123=$js$122(filename,".info");
           var
            $js$124=
             $js$121
              ([0,[11,"* ",[2,0,[11,": (",[2,0,[11,").",0]]]]],"* %s: (%s)."],
               title,
               $js$123);
           var $js$120=[0,$js$124,0]}
         var $js$125=$js$118($js$120);
         var $js$126=Pervasives["^"];
         var $js$127=$js$126("@top ",title);
         var $js$128=[0,$js$127,0];
         var $js$129=[0,"@node Top, , , (dir)",$js$128];
         var $js$130=[0,"@c no titlepage.",$js$129];
         var $js$131=[0,"@end ifinfo",$js$130];
         var
          $js$132=
           [0,
            "This file was generated by Ocamldoc using the Texinfo generator.",
            $js$131];
         var $js$133=[0,"@ifinfo",$js$132];
         var $js$134=[0,$js$133,0];
         var $js$135=[0,$js$125,$js$134];
         var $js$136=[0,$js$117,$js$135];
         var $js$137=[0,$js$114,$js$136];
         var $js$138=[0,$js$111,$js$137];
         var $js$139=$js$103($js$138);
         $js$101($js$102,$js$139);
         var match$1=Odoc_info["Global"][7][1];
         var $js$140=match$1;
         if($js$140)
          {nl(chan);
           "unknown block:(sendself self-2/1895 texi_of_info/1585\n  (makeblock 0\n    (apply (field 48 (global Odoc_info!)) m_list/1898 (field 0 match/2042))))";
           puts_nl(chan,$js$141)}
         else
          {var $js$142="unknown primitive:caml_string_notequal";
           if($js$142)
            {puts_nl(chan,"@ifinfo");
             var $js$143=Pervasives["^"];
             var $js$144=$js$143("Documentation for ",title);
             puts_nl(chan,$js$144);
             puts_nl(chan,"@end ifinfo")}
           else
            {puts_nl(chan,"@c no title given")}}
         var $js$145=Texi[4];
         var $js$146=Pervasives["@"];
         var $js$147=List["map"];
         var $js$148=$js$147(function(m){return [0,-177755956,m]},m_list);
         var $js$149=Odoc_info["Global"][9][1];
         if($js$149)
          {var $js$150=List["map"];
           var
            indices_names_to_build=
             $js$150(indices,self-2[indices_to_build]);
           var $js$151=List["rev"];
           var $js$152=List["fold_left"];
           var
            $js$153=
             $js$152
              (function(acc,param)
                {var $js$154=List["mem"];
                 var $js$155=$js$154(param[2],indices_names_to_build);
                 if($js$155)
                  {var $js$156=Pervasives["^"];
                   var $js$157=$js$156(param[1]," index");
                   var $js$158=[0,-784200974,$js$157];
                   return [0,$js$158,acc]}
                 else
                  {return acc}},
               [0,[0,-826170817,"Indices :"],[0,-937472204,0]],
               indices_names);
           var $js$154=$js$151($js$153)}
         else
          {var $js$154=0}
         var $js$155=$js$146($js$148,$js$154);
         return $js$145(chan,$js$155)},
       generate_texi_trailer,
       function(self-2,chan)
        {nl(chan);
         var $js$91=Odoc_info["Global"][9][1];
         if($js$91)
          {var $js$92=List["map"];
           var
            indices_names_to_build=
             $js$92(indices,self-2[indices_to_build]);
           var $js$93=List["iter"];
           var $js$94=puts_nl(chan);
           var $js$95=List["flatten"];
           var $js$96=List["map"];
           var
            $js$97=
             $js$96
              (function(param)
                {var shortname=param[2];
                 var longname=param[1];
                 var $js$98=List["mem"];
                 var $js$99=$js$98(shortname,indices_names_to_build);
                 if($js$99)
                  {var $js$100=Pervasives["^"];
                   var $js$101=Pervasives["^"];
                   var $js$102=$js$101(longname," index,");
                   var $js$103=$js$100("@node ",$js$102);
                   var $js$104=Pervasives["^"];
                   var $js$105=Pervasives["^"];
                   var $js$106=$js$105(longname," index");
                   var $js$107=$js$104("@unnumbered ",$js$106);
                   var $js$108=Pervasives["^"];
                   var $js$109=$js$108("@printindex ",shortname);
                   var $js$110=[0,$js$109,0];
                   var $js$111=[0,$js$107,$js$110];
                   return [0,$js$103,$js$111]}
                 else
                  {return 0}},
               indices_names);
           var $js$98=$js$95($js$97);
           $js$93($js$94,$js$98);
           var $js$99=Odoc_info["Global"][8][1];
           if($js$99){puts_nl(chan,"@contents")}else{}
           return puts_nl(chan,"@bye")}
         else
          {return 0}},
       do_index,
       function(self-2,it)
        {var $js$91=List["mem"];
         var $js$92=$js$91(it,self-2[indices_to_build]);
         var $js$93=!$js$92;
         if($js$93)
          {return self-2[indices_to_build]=[0,it,self-2[indices_to_build]],0}
         else
          {return 0}},
       scan_for_index,
       function(self-2,param)
        {var variant=param[1];
         var $js$91=variant>=448725581;
         if($js$91)
          {var $js$92=variant>=649842561;
           if($js$92)
            {var $js$93=Odoc_info["Class"][6];
             var c_ele=$js$93([0,1],param[2]);
             var $js$94=List["iter"];
             "unknown block:(sendself self-2/1921 scan_for_index_in_class/1615)";
             return $js$94($js$95,c_ele)}
           else
            {var $js$96=Odoc_info["Module"][17];
             var m_ele=$js$96([0,1],param[2]);
             var $js$97=List["iter"];
             "unknown block:(sendself self-2/1921 scan_for_index_in_mod/1614)";
             return $js$97($js$98,m_ele)}}
         else
          {var $js$99=variant>=-177755956;
           if($js$99)
            {var $js$100=Odoc_info["Module"][1];
             var m_ele$1=$js$100([0,1],param[2]);
             var $js$101=List["iter"];
             "unknown block:(sendself self-2/1921 scan_for_index_in_mod/1614)";
             return $js$101($js$102,m_ele$1)}
           else
            {var $js$103=Odoc_info["Class"][1];
             var c_ele$1=$js$103([0,1],param[2]);
             var $js$104=List["iter"];
             "unknown block:(sendself self-2/1921 scan_for_index_in_class/1615)";
             return $js$104($js$105,c_ele$1)}}},
       scan_for_index_in_mod,
       function(self-2,param)
        {var $js$91=param;
         if($js$91==0)
          {"unknown block:(sendself self-2/1931 do_index/1612 -177755956a)";
           "unknown block:(sendself self-2/1931 scan_for_index/1613\n  (makeblock 0 -177755956 (field 0 param/2026)))"}
         else
          if($js$91==1)
           {"unknown block:(sendself self-2/1931 do_index/1612 448725581a)";
            "unknown block:(sendself self-2/1931 scan_for_index/1613\n  (makeblock 0 448725581 (field 0 param/2026)))"}
          else
           if($js$91==2)
            {var exit=6}
           else
            if($js$91==3)
             {"unknown block:(sendself self-2/1931 do_index/1612 -611981288a)";
              "unknown block:(sendself self-2/1931 scan_for_index/1613\n  (makeblock 0 -611981288 (field 0 param/2026)))"}
            else
             if($js$91==4)
              {"unknown block:(sendself self-2/1931 do_index/1612 649842561a)";
               "unknown block:(sendself self-2/1931 scan_for_index/1613\n  (makeblock 0 649842561 (field 0 param/2026)))"}
             else
              if($js$91==5)
               {"unknown block:(sendself self-2/1931 do_index/1612 -991563951a)"}
              else
               if($js$91==6)
                {"unknown block:(sendself self-2/1931 do_index/1612 115569503a)"}
               else
                if($js$91==7)
                 {"unknown block:(sendself self-2/1931 do_index/1612 -345182161a)"}
                else
                 if($js$91==8)
                  {"unknown block:(sendself self-2/1931 do_index/1612 937565914a)"}
                 else
                  if($js$91==9){var exit=6}
         switch(exit){case 6:return 0}},
       scan_for_index_in_class,
       function(self-2,param)
        {var $js$91=param;
         if($js$91==0)
          {"unknown block:(sendself self-2/1937 do_index/1612 156047674a)"}
         else
          if($js$91==1)
           {"unknown block:(sendself self-2/1937 do_index/1612 1039100673a)"}
          else
           if($js$91==2){return 0}},
       generate,
       function(self-2,module_list)
        {var $js$91=Hashtbl["clear"];
         $js$91(self-2[node_tbl]);
         var $js$92="unknown primitive:caml_string_equal";
         if($js$92)
          {var filename="ocamldoc.texi"}
         else
          {var filename=Odoc_info["Global"][3][1]}
         var $js$93=Odoc_info["Global"][9][1];
         if($js$93)
          {var $js$94=List["iter"];
           "unknown block:(sendself self-2/1939 scan_for_index/1613)";
           var $js$95=List["map"];
           var
            $js$96=
             $js$95(function(m){return [0,-177755956,m]},module_list);
           $js$94($js$97,$js$96)}
         else
          {}
         try
          {var $js$98=Pervasives["open_out"];
           var $js$99=Filename["concat"];
           var $js$100=$js$99(Odoc_info["Global"][5][1],filename);
           var chanout=$js$98($js$100);
           var $js$101=Odoc_info["Global"][10][1];
           if($js$101)
            {"unknown block:(sendself self-2/1939 generate_texi_header/1610 chanout/1943 filename/1941\n  module_list/1940)"}
           else
            {}
           var $js$102=List["iter"];
           "unknown block:(sendself self-2/1939 generate_for_module/1609 chanout/1943)";
           $js$102($js$103,module_list);
           var $js$104=Odoc_info["Global"][11][1];
           if($js$104)
            {"unknown block:(sendself self-2/1939 generate_texi_trailer/1611 chanout/1943)"}
           else
            {}
           var $js$105=Pervasives["close_out"];
           return $js$105(chanout)}
         catch(exn)
          {var $js$106=exn[1]=Failure;
           if($js$106)
            {var s=exn[2];var exit=2}
           else
            {var $js$107=exn[1]=Sys_error;
             if($js$107)
              {var s=exn[2];var exit=2}
             else
              {return "unknown primitive:reraise"}}
           switch(exit)
            {case 2:
              var $js$108=Pervasives["prerr_endline"];
              $js$108(s);
              return Odoc_info["errors"][0]++
             }}}]);
    return function(env,self)
     {var $js$91=CamlinternalOO["create_object_opt"];
      var self$1=$js$91(self,class);
      obj_init(self$1);
      obj_init$1(self$1);
      self$1[maxdepth]=4,0;
      self$1[bullet]=[3," @bullet{} "],0;
      self$1[minus]=[3," @minus{} "],0;
      self$1[linebreak]=[3,"@*\n"],0;
      self$1[indices_to_build]=[0,-177755956,0],0;
      var $js$92=Hashtbl["create"];
      var $js$93=$js$92(0,37);
      self$1[node_tbl]=$js$93,0;
      var $js$94=CamlinternalOO["run_initializers_opt"];
      return $js$94(self,self$1,class)}};
var $js$87=CamlinternalOO["make_class"];
var
 texi=
  $js$87
   ([0,
     "text_of_module_kind",
     "text_of_parameter_list",
     "text_of_class_params",
     "node",
     "text_of_module_type",
     "text_of_class_type_param_expr_list",
     "text_of_class_type_kind",
     "texi_of_text_element",
     "generate_for_class_type",
     "texi_of_Newline",
     "texi_of_info",
     "relative_idents",
     "string_of_type_parameters",
     "texi_of_class_element",
     "text_of_return_opt",
     "texi_of_Superscript",
     "texi_of_text",
     "texi_of_type",
     "generate_class_type_inheritance_info",
     "texi_of_Emphasize",
     "text_of_see",
     "scan_for_index_in_mod",
     "generate",
     "text_of_desc",
     "generate_for_module",
     "escape",
     "text_of_exception",
     "generate_texi_trailer",
     "text_of_info",
     "texi_of_Raw",
     "texi_of_Ref",
     "heading",
     "normal_type_list",
     "text_of_sees",
     "text_of_module_parameter_list",
     "text_of_parameter_description",
     "text_of_value",
     "texi_of_type_extension",
     "text_of_params",
     "text_el_of_type_expr",
     "texi_of_Subscript",
     "label",
     "texi_of_Right",
     "texi_of_Verbatim",
     "normal_type",
     "texi_of_method",
     "text_of_version_opt",
     "normal_class_type_param_list",
     "texi_of_included_module",
     "texi_of_exception",
     "text_of_sees_opt",
     "texi_of_custom_text",
     "text_of_type_expr_list",
     "text_of_method",
     "fixedblock",
     "text_of_class_kind",
     "normal_class_type",
     "text_of_attribute",
     "texi_of_CodePre",
     "generate_texi_header",
     "text_of_before",
     "texi_of_Title",
     "do_index",
     "text_of_short_type_expr",
     "normal_module_type",
     "text_of_since_opt",
     "scan_for_index_in_class",
     "texi_of_value",
     "scan_for_index",
     "texi_of_class_type",
     "generate_for_class",
     "texi_of_Center",
     "texi_of_Italic",
     "texi_of_module_element",
     "texi_of_Target",
     "texi_of_attribute",
     "generate_for_module_type",
     "text_of_author_list",
     "normal_class_params",
     "string_of_type_args",
     "texi_of_Bold",
     "text_of_module_type_kind",
     "texi_of_Code",
     "texi_of_module",
     "generate_inheritance_info",
     "texi_of_Enum",
     "text_of_type_expr",
     "texi_of_Left",
     "texi_of_Link",
     "texi_of_List",
     "texi_of_module_type",
     "text_of_custom",
     "texi_of_Block",
     "texi_of_class",
     "text_of_raised_exceptions",
     "index",
     "relative_module_idents",
     "generate_class_inheritance_info"],
    texi_init);
var Generator=[0,texi];
module["exports"]=
{"esc_8bits":esc_8bits,
 "info_section":info_section,
 "info_entry":info_entry,
 "puts_nl":puts_nl,
 "puts":puts,
 "nl":nl,
 "is":is,
 "pad_to":pad_to,
 "indent":indent,
 "nothing":nothing,
 "module_subparts":module_subparts,
 "indices":indices,
 "indices_names":indices_names,
 "Texi":Texi,
 "text":text,
 "Aliased_node":Aliased_node,
 "Generator":Generator};
