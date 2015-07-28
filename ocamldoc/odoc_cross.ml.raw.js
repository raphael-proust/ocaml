var Odoc_name=require("Odoc_name");
var String=require("String");
var Odoc_global=require("Odoc_global");
var CamlinternalOO=require("CamlinternalOO");
var List=require("List");
var Pervasives=require("Pervasives");
var Odoc_types=require("Odoc_types");
var Odoc_search=require("Odoc_search");
var Printf=require("Printf");
var Set=require("Set");
var Str=require("Str");
var Odoc_misc=require("Odoc_misc");
var Odoc_scan=require("Odoc_scan");
var Hashtbl=require("Hashtbl");
var Map=require("Map");
var Odoc_messages=require("Odoc_messages");
var
 shared=
  [0,
   "scan_value",
   "scan_type_recfield",
   "scan_type_pre",
   "scan_type_const",
   "scan_module_type_pre",
   "scan_module_pre",
   "scan_method",
   "scan_extension_constructor",
   "scan_exception",
   "scan_class_type_pre",
   "scan_class_pre",
   "scan_attribute"];
var
 shared$1=
  [0,
   "scan_attribute",
   "scan_class",
   "scan_class_comment",
   "scan_class_elements",
   "scan_class_pre",
   "scan_class_type",
   "scan_class_type_comment",
   "scan_class_type_elements",
   "scan_class_type_pre",
   "scan_exception",
   "scan_extension_constructor",
   "scan_included_module",
   "scan_method",
   "scan_module",
   "scan_module_comment",
   "scan_module_elements",
   "scan_module_list",
   "scan_module_pre",
   "scan_module_type",
   "scan_module_type_comment",
   "scan_module_type_elements",
   "scan_module_type_pre",
   "scan_type",
   "scan_type_const",
   "scan_type_extension",
   "scan_type_extension_constructors",
   "scan_type_extension_pre",
   "scan_type_pre",
   "scan_type_recfield",
   "scan_value"];
var $js=Set["Make"];
var compare=function(prim,prim$1){return "unknown primitive:caml_compare"};
var $js$1=[0,compare];
var S=$js($js$1);
var verified_refs=[0,S[1]];
var
 add_verified=
  function(v)
   {var $js$2=S[4];
    var $js$3=$js$2(v,verified_refs[1]);
    return verified_refs[1]=$js$3,0};
var was_verified=function(v){var $js$2=S[3];return $js$2(v,verified_refs[1])};
var
 p_module=
  function(m,param)
   {var match=m[6];
    var $js$2=match;
    if($js$2==1){var $js$3=1}else{var $js$3=0}
    return [0,1,$js$3]};
var
 p_module_type=
  function(mt,param)
   {var match=mt[6];
    var $js$2=match;
    if($js$2)
     {var $js$3=match[1];if($js$3==2){var $js$4=1}else{var exit=159}}
    else
     {var exit=159}
    switch(exit){case 159:var $js$4=0}
    return [0,1,$js$4]};
var p_class=function(c,param){return [0,0,0]};
var p_class_type=function(ct,param){return [0,0,0]};
var p_value=function(v,param){return 0};
var p_recfield=function(param,param$1,param$2){return 0};
var p_const=function(param,param$1,param$2){return 0};
var p_type=function(t,param){return [0,0,0]};
var p_extension=function(x,param){return x[5]!=0};
var p_exception=function(e,param){return e[5]!=0};
var p_attribute=function(a,param){return 0};
var p_method=function(m,param){return 0};
var p_section=function(s,param){return 0};
var
 P_alias=
  [0,
   p_module,
   p_module_type,
   p_class,
   p_class_type,
   p_value,
   p_recfield,
   p_const,
   p_type,
   p_extension,
   p_exception,
   p_attribute,
   p_method,
   p_section];
var $js$2=Odoc_search["Search"];
var Search_alias=$js$2(P_alias);
var $js$3=Hashtbl["create"];
var module_aliases=$js$3(0,13);
var $js$4=Hashtbl["create"];
var module_and_modtype_aliases=$js$4(0,13);
var $js$5=Hashtbl["create"];
var extension_aliases=$js$5(0,13);
var $js$6=Hashtbl["create"];
var exception_aliases=$js$6(0,13);
var
 build_alias_list=
  function(param)
   {var $js$7=param;
    if($js$7)
     {var match=param[1];
      var $js$8=match;
      if($js$8==0)
       {var m=match[1];
        var match$1=m[6];
        var $js$9=match$1;
        if($js$9==1)
         {var ma=match$1[1];
          var $js$10=Hashtbl["add"];
          $js$10(module_aliases,m[1],[0,ma[1],1]);
          var $js$11=Hashtbl["add"];
          $js$11(module_and_modtype_aliases,m[1],[0,ma[1],1])}
        else
         {}
        return build_alias_list(param[2])}
      else
       if($js$8==1)
        {var mt=match[1];
         var match$2=mt[6];
         var $js$12=match$2;
         if($js$12)
          {var match$3=match$2[1];
           var $js$13=match$3;
           if($js$13==2)
            {var $js$14=Hashtbl["add"];
             $js$14(module_and_modtype_aliases,mt[1],[0,match$3[1][1],1])}
           else
            {var exit=142}}
         else
          {var exit=142}
         switch(exit){case 142:}
         return build_alias_list(param[2])}
       else
        if($js$8==6)
         {var x=match[1];
          var match$4=x[5];
          var $js$15=match$4;
          if($js$15)
           {var $js$16=Hashtbl["add"];
            $js$16(extension_aliases,x[1],[0,match$4[1][1],1])}
          else
           {}
          return build_alias_list(param[2])}
        else
         if($js$8==7)
          {var e=match[1];
           var match$5=e[5];
           var $js$17=match$5;
           if($js$17)
            {var $js$18=Hashtbl["add"];
             $js$18(exception_aliases,e[1],[0,match$5[1][1],1])}
           else
            {}
           return build_alias_list(param[2])}
         else
          {return build_alias_list(param[2])}}
    else
     {return 0}};
var
 get_alias_names=
  function(module_list)
   {var $js$7=Hashtbl["clear"];
    $js$7(module_aliases);
    var $js$8=Hashtbl["clear"];
    $js$8(module_and_modtype_aliases);
    var $js$9=Hashtbl["clear"];
    $js$9(extension_aliases);
    var $js$10=Hashtbl["clear"];
    $js$10(exception_aliases);
    var $js$11=Search_alias[15];
    var $js$12=$js$11(module_list,0);
    return build_alias_list($js$12)};
var Found="unknown primitive:caml_set_oo_id";
var
 f=
  function(t,name)
   {try
     {var $js$7=Hashtbl["find"];
      var match=$js$7(t,name);
      var s=match[1];
      var $js$8=match[2]!=0;
      if($js$8){return f(t,s)}else{return s}}
    catch(exn)
     {var $js$9=exn=Not_found;
      if($js$9)
       {try
         {var $js$10=Hashtbl["iter"];
          $js$10
           (function(n2,param)
             {var $js$11=Odoc_name["prefix"];
              var $js$12=$js$11(n2,name);
              if($js$12)
               {var ln2=n2["length"];
                var $js$13=Pervasives["^"];
                var $js$14=String["sub"];
                var $js$15=$js$14(name,ln2,name["length"]-ln2);
                var s$1=$js$13(param[1],$js$15);
                return "unknown primitive:raise"}
              else
               {return 0}},
            t);
          var $js$11=Hashtbl["replace"];
          $js$11(t,name,[0,name,0]);
          return name}
        catch(exn$1)
         {var $js$12=exn$1[1]=Found;
          if($js$12)
           {var s2=f(t,exn$1[2]);
            var $js$13=Hashtbl["replace"];
            $js$13(t,s2,[0,s2,0]);
            return s2}
          else
           {return "unknown primitive:reraise"}}}
      else
       {return "unknown primitive:reraise"}}};
var name_alias=function(name,alias_tbl){return f(alias_tbl,name)};
var compare$1=function(x,y){return "unknown primitive:caml_string_compare"};
var Map_ord=[0,compare$1];
var $js$7=Map["Make"];
var Ele_map=$js$7(Map_ord);
var known_elements=[0,Ele_map[1]];
var
 add_known_element=
  function(name,k)
   {try
     {var $js$8=Ele_map[22];
      var l=$js$8(name,known_elements[1]);
      var $js$9=Ele_map[6];
      var s=$js$9(name,known_elements[1]);
      var $js$10=Ele_map[4];
      var $js$11=$js$10(name,[0,k,l],s);
      return known_elements[1]=$js$11,0}
    catch(exn)
     {var $js$12=exn=Not_found;
      if($js$12)
       {var $js$13=Ele_map[4];
        var $js$14=$js$13(name,[0,k,0],known_elements[1]);
        return known_elements[1]=$js$14,0}
      else
       {return "unknown primitive:reraise"}}};
var
 get_known_elements=
  function(name)
   {try
     {var $js$8=Ele_map[22];return $js$8(name,known_elements[1])}
    catch(exn)
     {var $js$9=exn=Not_found;
      if($js$9){return 0}else{return "unknown primitive:reraise"}}};
var
 kind_name_exists=
  function(kind)
   {var $js$8="unknown primitive:isint";
    if($js$8)
     {var $js$9=kind;
      var $js$10=$js$9[0];
      if($js$10==0)
       {var
         pred=
          function(e){var $js$11=e;if($js$11==0){return 1}else{return 0}}}
      else
       if($js$10==1)
        {var
          pred=
           function(e){var $js$11=e;if($js$11==1){return 1}else{return 0}}}
       else
        if($js$10==2)
         {var
           pred=
            function(e){var $js$11=e;if($js$11==2){return 1}else{return 0}}}
        else
         if($js$10==3)
          {var
            pred=
             function(e){var $js$11=e;if($js$11==3){return 1}else{return 0}}}
         else
          if($js$10==4)
           {var
             pred=
              function(e){var $js$11=e;if($js$11==4){return 1}else{return 0}}}
          else
           if($js$10==5)
            {var
              pred=
               function(e){var $js$11=e;if($js$11==5){return 1}else{return 0}}}
           else
            if($js$10==6)
             {var
               pred=
                function(e)
                 {var $js$11=e;if($js$11==6){return 1}else{return 0}}}
            else
             if($js$10==7)
              {var
                pred=
                 function(e)
                  {var $js$11=e;if($js$11==7){return 1}else{return 0}}}
             else
              if($js$10==8)
               {var
                 pred=
                  function(e)
                   {var $js$11=e;if($js$11==8){return 1}else{return 0}}}
              else
               if($js$10==9)
                {var
                  pred=
                   function(e)
                    {var $js$11=e;if($js$11==9){return 1}else{return 0}}}
               else
                if($js$10==10)
                 {var
                   pred=
                    function(e)
                     {var $js$11=e;if($js$11==11){return 1}else{return 0}}}
                else
                 if($js$10==11)
                  {var
                    pred=
                     function(e)
                      {var $js$11=e;if($js$11==12){return 1}else{return 0}}}}
    else
     {var pred="unknown primitive:raise"}
    return function(name)
     {try
       {var $js$11=List["exists"];
        var $js$12=get_known_elements(name);
        return $js$11(pred,$js$12)}
      catch(exn)
       {var $js$13=exn=Not_found;
        if($js$13){return 0}else{return "unknown primitive:reraise"}}}};
var module_exists=kind_name_exists(0);
var module_type_exists=kind_name_exists(1);
var class_exists=kind_name_exists(2);
var class_type_exists=kind_name_exists(3);
var value_exists=kind_name_exists(4);
var type_exists=kind_name_exists(5);
var extension_exists=kind_name_exists(6);
var exception_exists=kind_name_exists(7);
var attribute_exists=kind_name_exists(8);
var method_exists=kind_name_exists(9);
var recfield_exists=kind_name_exists(10);
var const_exists=kind_name_exists(11);
var
 lookup_module=
  function(name)
   {var $js$8=List["find"];
    var $js$9=get_known_elements(name);
    var
     match=
      $js$8
       (function(k){var $js$10=k;if($js$10==0){return 1}else{return 0}},$js$9);
    var $js$10=match;
    if($js$10==0){return match[1]}else{return "unknown primitive:raise"}};
var
 lookup_module_type=
  function(name)
   {var $js$8=List["find"];
    var $js$9=get_known_elements(name);
    var
     match=
      $js$8
       (function(k){var $js$10=k;if($js$10==1){return 1}else{return 0}},$js$9);
    var $js$10=match;
    if($js$10==1){return match[1]}else{return "unknown primitive:raise"}};
var
 lookup_class=
  function(name)
   {var $js$8=List["find"];
    var $js$9=get_known_elements(name);
    var
     match=
      $js$8
       (function(k){var $js$10=k;if($js$10==2){return 1}else{return 0}},$js$9);
    var $js$10=match;
    if($js$10==2){return match[1]}else{return "unknown primitive:raise"}};
var
 lookup_class_type=
  function(name)
   {var $js$8=List["find"];
    var $js$9=get_known_elements(name);
    var
     match=
      $js$8
       (function(k){var $js$10=k;if($js$10==3){return 1}else{return 0}},$js$9);
    var $js$10=match;
    if($js$10==3){return match[1]}else{return "unknown primitive:raise"}};
var
 lookup_extension=
  function(name)
   {var $js$8=List["find"];
    var $js$9=get_known_elements(name);
    var
     match=
      $js$8
       (function(k){var $js$10=k;if($js$10==6){return 1}else{return 0}},$js$9);
    var $js$10=match;
    if($js$10==6){return match[1]}else{return "unknown primitive:raise"}};
var
 lookup_exception=
  function(name)
   {var $js$8=List["find"];
    var $js$9=get_known_elements(name);
    var
     match=
      $js$8
       (function(k){var $js$10=k;if($js$10==7){return 1}else{return 0}},$js$9);
    var $js$10=match;
    if($js$10==7){return match[1]}else{return "unknown primitive:raise"}};
var
 scan_init=
  function(class)
   {var $js$8=CamlinternalOO["get_method_labels"];
    var ids=$js$8(class,shared);
    var scan_value=ids[1];
    var scan_type_recfield=ids[2];
    var scan_type_pre=ids[3];
    var scan_type_const=ids[4];
    var scan_module_type_pre=ids[5];
    var scan_module_pre=ids[6];
    var scan_method=ids[7];
    var scan_extension_constructor=ids[8];
    var scan_exception=ids[9];
    var scan_class_type_pre=ids[10];
    var scan_class_pre=ids[11];
    var scan_attribute=ids[12];
    var $js$9=CamlinternalOO["inherits"];
    var inh=$js$9(class,0,0,shared$1,Odoc_scan["scanner"],1);
    var obj_init=inh[1];
    var $js$10=CamlinternalOO["set_methods"];
    $js$10
     (class,
      [0,
       scan_value,
       function(self-1,v){return add_known_element(v[1],[4,v])},
       scan_type_recfield,
       function(self-1,t,f$1)
        {var $js$11=Printf["sprintf"];
         var $js$12=$js$11([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],t[1],f$1[1]);
         return add_known_element($js$12,[11,t,f$1])},
       scan_type_const,
       function(self-1,t,f$1)
        {var $js$11=Printf["sprintf"];
         var $js$12=$js$11([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],t[1],f$1[1]);
         return add_known_element($js$12,[12,t,f$1])},
       scan_type_pre,
       function(self-1,t){add_known_element(t[1],[5,t]);return 1},
       scan_extension_constructor,
       function(self-1,x){return add_known_element(x[1],[6,x])},
       scan_exception,
       function(self-1,e){return add_known_element(e[1],[7,e])},
       scan_attribute,
       function(self-1,a){return add_known_element(a[1][1],[8,a])},
       scan_method,
       function(self-1,m){return add_known_element(m[1][1],[9,m])},
       scan_class_pre,
       function(self-1,c){add_known_element(c[1],[2,c]);return 1},
       scan_class_type_pre,
       function(self-1,c){add_known_element(c[1],[3,c]);return 1},
       scan_module_pre,
       function(self-1,m){add_known_element(m[1],[0,m]);return 1},
       scan_module_type_pre,
       function(self-1,m){add_known_element(m[1],[1,m]);return 1}]);
    return function(env,self)
     {var $js$11=CamlinternalOO["create_object_opt"];
      var self$1=$js$11(self,class);
      obj_init(self$1);
      var $js$12=CamlinternalOO["run_initializers_opt"];
      return $js$12(self,self$1,class)}};
var $js$8=CamlinternalOO["make_class"];
var
 scan=
  $js$8
   ([0,
     "scan_type_const",
     "scan_class",
     "scan_module_elements",
     "scan_class_type_pre",
     "scan_type_recfield",
     "scan_module_type_comment",
     "scan_included_module",
     "scan_exception",
     "scan_class_type_elements",
     "scan_class_type",
     "scan_type_extension",
     "scan_module_list",
     "scan_module_type",
     "scan_module",
     "scan_extension_constructor",
     "scan_class_pre",
     "scan_module_pre",
     "scan_type_extension_constructors",
     "scan_module_type_pre",
     "scan_type_extension_pre",
     "scan_class_comment",
     "scan_attribute",
     "scan_class_elements",
     "scan_class_type_comment",
     "scan_module_type_elements",
     "scan_type",
     "scan_module_comment",
     "scan_value",
     "scan_method",
     "scan_type_pre"],
    scan_init);
var
 init_known_elements_map=
  function(module_list)
   {var $js$9=scan[1];
    var c=$js$9(0);
    "unknown block:(send c/1485 -342620401 module_list/1484)"};
var
 associate_in_module=
  function(module_list,param,m)
   {var
     iter_kind=
      function(param$1,k)
       {var acc_names=param$1[3];
        var acc_inc=param$1[2];
        var acc_b=param$1[1];
        var $js$9=k;
        if($js$9==0)
         {var $js$10=List["fold_left"];
          var $js$11=associate_in_module_element(module_list,m[1]);
          return $js$10($js$11,[0,acc_b,acc_inc,acc_names],k[1])}
        else
         if($js$9==1)
          {var ma=k[1];
           var match=ma[2];
           var $js$12=match;
           if($js$12)
            {return [0,acc_b,acc_inc,acc_names]}
           else
            {try
              {var $js$13=lookup_module(ma[1]);
               var $js$14=[0,$js$13];
               var mmt_opt=[0,$js$14]}
             catch(exn)
              {var $js$15=exn=Not_found;
               if($js$15)
                {try
                  {var $js$16=lookup_module_type(ma[1]);
                   var $js$17=[1,$js$16];
                   var mmt_opt=[0,$js$17]}
                 catch(exn$1)
                  {var $js$18=exn$1=Not_found;
                   if($js$18)
                    {var mmt_opt=0}
                   else
                    {var mmt_opt="unknown primitive:reraise"}}}
               else
                {var mmt_opt="unknown primitive:reraise"}}
             var $js$19=mmt_opt;
             if($js$19)
              {ma[2]=[0,mmt_opt[1]],0;return [0,1,acc_inc,acc_names]}
             else
              {var $js$20=Odoc_name["head"];
               var $js$21=$js$20(m[1]);
               var $js$22=[0,$js$21,acc_inc];
               var
                $js$23=
                 "unknown primitive:caml_string_equal"||
                 "unknown primitive:caml_string_equal";
               if($js$23)
                {var $js$24=acc_names}
               else
                {var $js$24=[0,[2,ma[1]],acc_names]}
               return [0,acc_b,$js$22,$js$24]}}}
         else
          if($js$9==2)
           {return iter_kind([0,acc_b,acc_inc,acc_names],k[2])}
          else
           if($js$9==3)
            {var match$1=iter_kind([0,acc_b,acc_inc,acc_names],k[1]);
             return iter_kind([0,match$1[1],match$1[2],match$1[3]],k[2])}
           else
            if($js$9==4)
             {return associate_in_module_type
                      (module_list,
                       [0,acc_b,acc_inc,acc_names],
                       [0,"",0,0,0,"",[0,k[1]],Odoc_types["dummy_loc"]])}
            else
             if($js$9==5)
              {var match$2=iter_kind([0,acc_b,acc_inc,acc_names],k[1]);
               return associate_in_module_type
                       (module_list,
                        [0,match$2[1],match$2[2],match$2[3]],
                        [0,"",0,0,0,"",[0,k[2]],Odoc_types["dummy_loc"]])}
             else
              if($js$9==6)
               {return [0,acc_b,acc_inc,acc_names]}
              else
               if($js$9==7)
                {var mta=k[2];
                 var match$3=mta[2];
                 var $js$25=match$3;
                 if($js$25)
                  {return [0,acc_b,acc_inc,acc_names]}
                 else
                  {try
                    {var $js$26=lookup_module_type(mta[1]);
                     var mt_opt=[0,$js$26]}
                   catch(exn$2)
                    {var $js$27=exn$2=Not_found;
                     if($js$27)
                      {var mt_opt=0}
                     else
                      {var mt_opt="unknown primitive:reraise"}}
                   var $js$28=mt_opt;
                   if($js$28)
                    {mta[2]=[0,mt_opt[1]],0;return [0,1,acc_inc,acc_names]}
                   else
                    {var $js$29=Odoc_name["head"];
                     var $js$30=$js$29(m[1]);
                     var $js$31=[0,$js$30,acc_inc];
                     var
                      $js$32=
                       "unknown primitive:caml_string_equal"||
                       "unknown primitive:caml_string_equal";
                     if($js$32)
                      {var $js$33=acc_names}
                     else
                      {var $js$33=[0,[1,mta[1]],acc_names]}
                     return [0,acc_b,$js$31,$js$33]}}}};
    return iter_kind([0,param[1],param[2],param[3]],m[6])};
var
 associate_in_module_type=
  function(module_list,param,mt)
   {var acc_names_not_found=param[3];
    var acc_incomplete_top_module_names=param[2];
    var acc_b_modif=param[1];
    var
     iter_kind=
      function(param$1,k)
       {var acc_names=param$1[3];
        var acc_inc=param$1[2];
        var acc_b=param$1[1];
        var $js$9=k;
        if($js$9==0)
         {var $js$10=List["fold_left"];
          var $js$11=associate_in_module_element(module_list,mt[1]);
          return $js$10($js$11,[0,acc_b,acc_inc,acc_names],k[1])}
        else
         if($js$9==1)
          {return iter_kind([0,acc_b,acc_inc,acc_names],k[2])}
         else
          if($js$9==2)
           {var mta=k[1];
            var match=mta[2];
            var $js$12=match;
            if($js$12)
             {return [0,acc_b,acc_inc,acc_names]}
            else
             {try
               {var $js$13=lookup_module_type(mta[1]);var mt_opt=[0,$js$13]}
              catch(exn)
               {var $js$14=exn=Not_found;
                if($js$14)
                 {var mt_opt=0}
                else
                 {var mt_opt="unknown primitive:reraise"}}
              var $js$15=mt_opt;
              if($js$15)
               {mta[2]=[0,mt_opt[1]],0;return [0,1,acc_inc,acc_names]}
              else
               {var $js$16=Odoc_name["head"];
                var $js$17=$js$16(mt[1]);
                var $js$18=[0,$js$17,acc_inc];
                var
                 $js$19=
                  "unknown primitive:caml_string_equal"||
                  "unknown primitive:caml_string_equal";
                if($js$19)
                 {var $js$20=acc_names}
                else
                 {var $js$20=[0,[1,mta[1]],acc_names]}
                return [0,acc_b,$js$18,$js$20]}}}
          else
           if($js$9==3)
            {return iter_kind([0,acc_b,acc_inc,acc_names],k[1])}
           else
            if($js$9==4){return [0,acc_b,acc_inc,acc_names]}};
    var match=mt[6];
    var $js$9=match;
    if($js$9)
     {return iter_kind
              ([0,
                acc_b_modif,
                acc_incomplete_top_module_names,
                acc_names_not_found],
               match[1])}
    else
     {return [0,
              acc_b_modif,
              acc_incomplete_top_module_names,
              acc_names_not_found]}};
var
 associate_in_module_element=
  function(module_list,m_name,param,element)
   {var acc_names_not_found=param[3];
    var acc_incomplete_top_module_names=param[2];
    var acc_b_modif=param[1];
    var $js$9=element;
    if($js$9==0)
     {return associate_in_module
              (module_list,
               [0,
                acc_b_modif,
                acc_incomplete_top_module_names,
                acc_names_not_found],
               element[1])}
    else
     if($js$9==1)
      {return associate_in_module_type
               (module_list,
                [0,
                 acc_b_modif,
                 acc_incomplete_top_module_names,
                 acc_names_not_found],
                element[1])}
     else
      if($js$9==2)
       {var im=element[1];
        var match=im[2];
        var $js$10=match;
        if($js$10)
         {return [0,
                  acc_b_modif,
                  acc_incomplete_top_module_names,
                  acc_names_not_found]}
        else
         {try
           {var $js$11=lookup_module(im[1]);
            var $js$12=[0,$js$11];
            var mmt_opt=[0,$js$12]}
          catch(exn)
           {var $js$13=exn=Not_found;
            if($js$13)
             {try
               {var $js$14=lookup_module_type(im[1]);
                var $js$15=[1,$js$14];
                var mmt_opt=[0,$js$15]}
              catch(exn$1)
               {var $js$16=exn$1=Not_found;
                if($js$16)
                 {var mmt_opt=0}
                else
                 {var mmt_opt="unknown primitive:reraise"}}}
            else
             {var mmt_opt="unknown primitive:reraise"}}
          var $js$17=mmt_opt;
          if($js$17)
           {im[2]=[0,mmt_opt[1]],0;
            return [0,1,acc_incomplete_top_module_names,acc_names_not_found]}
          else
           {var $js$18=Odoc_name["head"];
            var $js$19=$js$18(m_name);
            var $js$20=[0,$js$19,acc_incomplete_top_module_names];
            var
             $js$21=
              "unknown primitive:caml_string_equal"||
              "unknown primitive:caml_string_equal";
            if($js$21)
             {var $js$22=acc_names_not_found}
            else
             {var $js$22=[0,[2,im[1]],acc_names_not_found]}
            return [0,acc_b_modif,$js$20,$js$22]}}}
      else
       if($js$9==3)
        {return associate_in_class
                 (module_list,
                  [0,
                   acc_b_modif,
                   acc_incomplete_top_module_names,
                   acc_names_not_found],
                  element[1])}
       else
        if($js$9==4)
         {return associate_in_class_type
                  (module_list,
                   [0,
                    acc_b_modif,
                    acc_incomplete_top_module_names,
                    acc_names_not_found],
                   element[1])}
        else
         if($js$9==6)
          {return associate_in_type_extension
                   (module_list,
                    [0,
                     acc_b_modif,
                     acc_incomplete_top_module_names,
                     acc_names_not_found],
                    element[1])}
         else
          if($js$9==7)
           {var match$1=element[1][5];
            var $js$23=match$1;
            if($js$23)
             {var ea=match$1[1];
              var match$2=ea[2];
              var $js$24=match$2;
              if($js$24)
               {return [0,
                        acc_b_modif,
                        acc_incomplete_top_module_names,
                        acc_names_not_found]}
              else
               {try
                 {var $js$25=lookup_exception(ea[1]);var ex_opt=[0,$js$25]}
                catch(exn$2)
                 {var $js$26=exn$2=Not_found;
                  if($js$26)
                   {var ex_opt=0}
                  else
                   {var ex_opt="unknown primitive:reraise"}}
                var $js$27=ex_opt;
                if($js$27)
                 {ea[2]=[0,ex_opt[1]],0;
                  return [0,
                          1,
                          acc_incomplete_top_module_names,
                          acc_names_not_found]}
                else
                 {var $js$28=Odoc_name["head"];
                  var $js$29=$js$28(m_name);
                  var $js$30=[0,$js$29,acc_incomplete_top_module_names];
                  return [0,
                          acc_b_modif,
                          $js$30,
                          [0,[7,ea[1]],acc_names_not_found]]}}}
            else
             {return [0,
                      acc_b_modif,
                      acc_incomplete_top_module_names,
                      acc_names_not_found]}}
          else
           {return [0,
                    acc_b_modif,
                    acc_incomplete_top_module_names,
                    acc_names_not_found]}};
var
 associate_in_class=
  function(module_list,param,c)
   {var
     iter_kind=
      function(param$1,k)
       {var acc_names=param$1[3];
        var acc_inc=param$1[2];
        var acc_b=param$1[1];
        var $js$9=k;
        if($js$9==0)
         {var
           f$1=
            function(param$2,ic)
             {var acc_names2=param$2[3];
              var acc_inc2=param$2[2];
              var acc_b2=param$2[1];
              var match=ic[2];
              var $js$10=match;
              if($js$10)
               {return [0,acc_b2,acc_inc2,acc_names2]}
              else
               {try
                 {var $js$11=lookup_class(ic[1]);
                  var $js$12=[0,$js$11];
                  var cct_opt=[0,$js$12]}
                catch(exn)
                 {var $js$13=exn=Not_found;
                  if($js$13)
                   {try
                     {var $js$14=lookup_class_type(ic[1]);
                      var $js$15=[1,$js$14,0];
                      var cct_opt=[0,$js$15]}
                    catch(exn$1)
                     {var $js$16=exn$1=Not_found;
                      if($js$16)
                       {var cct_opt=0}
                      else
                       {var cct_opt="unknown primitive:reraise"}}}
                  else
                   {var cct_opt="unknown primitive:reraise"}}
                var $js$17=cct_opt;
                if($js$17)
                 {ic[2]=[0,cct_opt[1]],0;return [0,1,acc_inc2,acc_names2]}
                else
                 {var $js$18=Odoc_name["head"];
                  var $js$19=$js$18(c[1]);
                  var $js$20=[0,$js$19,acc_inc2];
                  var $js$21="unknown primitive:caml_string_equal";
                  if($js$21)
                   {var $js$22=acc_names2}
                  else
                   {var $js$22=[0,[5,ic[1]],acc_names2]}
                  return [0,acc_b2,$js$20,$js$22]}}};
          var $js$10=List["fold_left"];
          return $js$10(f$1,[0,acc_b,acc_inc,acc_names],k[1])}
        else
         if($js$9==1)
          {var capp=k[1];
           var match=capp[2];
           var $js$11=match;
           if($js$11)
            {return [0,acc_b,acc_inc,acc_names]}
           else
            {try
              {var $js$12=lookup_class(capp[1]);var cl_opt=[0,$js$12]}
             catch(exn)
              {var $js$13=exn=Not_found;
               if($js$13)
                {var cl_opt=0}
               else
                {var cl_opt="unknown primitive:reraise"}}
             var $js$14=cl_opt;
             if($js$14)
              {capp[2]=[0,cl_opt[1]],0;return [0,1,acc_inc,acc_names]}
             else
              {var $js$15=Odoc_name["head"];
               var $js$16=$js$15(c[1]);
               var $js$17=[0,$js$16,acc_inc];
               var $js$18="unknown primitive:caml_string_equal";
               if($js$18)
                {var $js$19=acc_names}
               else
                {var $js$19=[0,[3,capp[1]],acc_names]}
               return [0,acc_b,$js$17,$js$19]}}}
         else
          if($js$9==2)
           {var cco=k[1];
            var match$1=cco[2];
            var $js$20=match$1;
            if($js$20)
             {return [0,acc_b,acc_inc,acc_names]}
            else
             {try
               {var $js$21=lookup_class(cco[1]);var cl_opt$1=[0,$js$21]}
              catch(exn$1)
               {var $js$22=exn$1=Not_found;
                if($js$22)
                 {var cl_opt$1=0}
                else
                 {var cl_opt$1="unknown primitive:reraise"}}
              var $js$23=cl_opt$1;
              if($js$23)
               {cco[2]=[0,[0,cl_opt$1[1]]],0;return [0,1,acc_inc,acc_names]}
              else
               {try
                 {var $js$24=lookup_class_type(cco[1]);var clt_opt=[0,$js$24]}
                catch(exn$2)
                 {var $js$25=exn$2=Not_found;
                  if($js$25)
                   {var clt_opt=0}
                  else
                   {var clt_opt="unknown primitive:reraise"}}
                var $js$26=clt_opt;
                if($js$26)
                 {cco[2]=[0,[1,clt_opt[1],0]],0;
                  return [0,1,acc_inc,acc_names]}
                else
                 {var $js$27=Odoc_name["head"];
                  var $js$28=$js$27(c[1]);
                  var $js$29=[0,$js$28,acc_inc];
                  var $js$30="unknown primitive:caml_string_equal";
                  if($js$30)
                   {var $js$31=acc_names}
                  else
                   {var $js$31=[0,[5,cco[1]],acc_names]}
                  return [0,acc_b,$js$29,$js$31]}}}}
          else
           if($js$9==3)
            {var match$2=iter_kind([0,acc_b,acc_inc,acc_names],k[1]);
             return associate_in_class_type
                     (module_list,
                      [0,match$2[1],match$2[2],match$2[3]],
                      [0,"",0,c[3],0,0,k[2],Odoc_types["dummy_loc"]])}};
    return iter_kind([0,param[1],param[2],param[3]],c[6])};
var
 associate_in_class_type=
  function(module_list,param,ct)
   {var
     iter_kind=
      function(param$1,k)
       {var acc_names=param$1[3];
        var acc_inc=param$1[2];
        var acc_b=param$1[1];
        var $js$9=k;
        if($js$9==0)
         {var
           f$1=
            function(param$2,ic)
             {var acc_names2=param$2[3];
              var acc_inc2=param$2[2];
              var acc_b2=param$2[1];
              var match=ic[2];
              var $js$10=match;
              if($js$10)
               {return [0,acc_b2,acc_inc2,acc_names2]}
              else
               {try
                 {var $js$11=lookup_class_type(ic[1]);
                  var $js$12=[1,$js$11,0];
                  var cct_opt=[0,$js$12]}
                catch(exn)
                 {var $js$13=exn=Not_found;
                  if($js$13)
                   {try
                     {var $js$14=lookup_class(ic[1]);
                      var $js$15=[0,$js$14];
                      var cct_opt=[0,$js$15]}
                    catch(exn$1)
                     {var $js$16=exn$1=Not_found;
                      if($js$16)
                       {var cct_opt=0}
                      else
                       {var cct_opt="unknown primitive:reraise"}}}
                  else
                   {var cct_opt="unknown primitive:reraise"}}
                var $js$17=cct_opt;
                if($js$17)
                 {ic[2]=[0,cct_opt[1]],0;return [0,1,acc_inc2,acc_names2]}
                else
                 {var $js$18=Odoc_name["head"];
                  var $js$19=$js$18(ct[1]);
                  var $js$20=[0,$js$19,acc_inc2];
                  var $js$21="unknown primitive:caml_string_equal";
                  if($js$21)
                   {var $js$22=acc_names2}
                  else
                   {var $js$22=[0,[5,ic[1]],acc_names2]}
                  return [0,acc_b2,$js$20,$js$22]}}};
          var $js$10=List["fold_left"];
          return $js$10(f$1,[0,acc_b,acc_inc,acc_names],k[1])}
        else
         if($js$9==1)
          {var cta=k[1];
           var match=cta[2];
           var $js$11=match;
           if($js$11)
            {return [0,acc_b,acc_inc,acc_names]}
           else
            {try
              {var $js$12=lookup_class_type(cta[1]);
               var $js$13=[1,$js$12,0];
               var cct_opt=[0,$js$13]}
             catch(exn)
              {var $js$14=exn=Not_found;
               if($js$14)
                {try
                  {var $js$15=lookup_class(cta[1]);
                   var $js$16=[0,$js$15];
                   var cct_opt=[0,$js$16]}
                 catch(exn$1)
                  {var $js$17=exn$1=Not_found;
                   if($js$17)
                    {var cct_opt=0}
                   else
                    {var cct_opt="unknown primitive:reraise"}}}
               else
                {var cct_opt="unknown primitive:reraise"}}
             var $js$18=cct_opt;
             if($js$18)
              {cta[2]=[0,cct_opt[1]],0;return [0,1,acc_inc,acc_names]}
             else
              {var $js$19=Odoc_name["head"];
               var $js$20=$js$19(ct[1]);
               var $js$21=[0,$js$20,acc_inc];
               var $js$22="unknown primitive:caml_string_equal";
               if($js$22)
                {var $js$23=acc_names}
               else
                {var $js$23=[0,[5,cta[1]],acc_names]}
               return [0,acc_b,$js$21,$js$23]}}}};
    return iter_kind([0,param[1],param[2],param[3]],ct[6])};
var
 associate_in_type_extension=
  function(module_list,param,te)
   {var $js$9=List["fold_left"];
    return $js$9
            (function(param$1,xt)
              {var acc_names_not_found=param$1[3];
               var acc_incomplete_top_module_names=param$1[2];
               var acc_b_modif=param$1[1];
               var match=xt[5];
               var $js$10=match;
               if($js$10)
                {var xa=match[1];
                 var match$1=xa[2];
                 var $js$11=match$1;
                 if($js$11)
                  {return [0,
                           acc_b_modif,
                           acc_incomplete_top_module_names,
                           acc_names_not_found]}
                 else
                  {try
                    {var $js$12=lookup_extension(xa[1]);var xt_opt=[0,$js$12]}
                   catch(exn)
                    {var $js$13=exn=Not_found;
                     if($js$13)
                      {var xt_opt=0}
                     else
                      {var xt_opt="unknown primitive:reraise"}}
                   var $js$14=xt_opt;
                   if($js$14)
                    {xa[2]=[0,xt_opt[1]],0;
                     return [0,
                             1,
                             acc_incomplete_top_module_names,
                             acc_names_not_found]}
                   else
                    {var $js$15=Odoc_name["head"];
                     var $js$16=$js$15(xt[1]);
                     var $js$17=[0,$js$16,acc_incomplete_top_module_names];
                     return [0,
                             acc_b_modif,
                             $js$17,
                             [0,[6,xa[1]],acc_names_not_found]]}}}
               else
                {return [0,
                         acc_b_modif,
                         acc_incomplete_top_module_names,
                         acc_names_not_found]}},
             [0,param[1],param[2],param[3]],
             te[5])};
var ao=Odoc_misc["apply_opt"];
var
 not_found_of_kind=
  function(kind,name)
   {var $js$9="unknown primitive:isint";
    if($js$9)
     {var $js$10=kind;
      var $js$11=$js$10[0];
      if($js$11==0)
       {var $js$12=Odoc_messages["cross_module_not_found"]}
      else
       if($js$11==1)
        {var $js$12=Odoc_messages["cross_module_type_not_found"]}
       else
        if($js$11==2)
         {var $js$12=Odoc_messages["cross_class_not_found"]}
        else
         if($js$11==3)
          {var $js$12=Odoc_messages["cross_class_type_not_found"]}
         else
          if($js$11==4)
           {var $js$12=Odoc_messages["cross_value_not_found"]}
          else
           if($js$11==5)
            {var $js$12=Odoc_messages["cross_type_not_found"]}
           else
            if($js$11==6)
             {var $js$12=Odoc_messages["cross_extension_not_found"]}
            else
             if($js$11==7)
              {var $js$12=Odoc_messages["cross_exception_not_found"]}
             else
              if($js$11==8)
               {var $js$12=Odoc_messages["cross_attribute_not_found"]}
              else
               if($js$11==9)
                {var $js$12=Odoc_messages["cross_method_not_found"]}
               else
                if($js$11==10)
                 {var $js$12=Odoc_messages["cross_recfield_not_found"]}
                else
                 if($js$11==11)
                  {var $js$12=Odoc_messages["cross_const_not_found"]}}
    else
     {var $js$12=Odoc_messages["cross_section_not_found"]}
    return $js$12(name)};
var
 assoc_comments_text_elements=
  function(parent_name,module_list,t_ele)
   {var $js$9=t_ele;
    if(typeof $js$9=="number")
     {if($js$9==0){return 0}else if($js$9==1){return 1}}
    else
     {var $js$10=$js$9[0];
      if($js$10==4)
       {var $js$11=assoc_comments_text(parent_name,module_list,t_ele[1]);
        return [4,$js$11]}
      else
       if($js$10==5)
        {var $js$12=assoc_comments_text(parent_name,module_list,t_ele[1]);
         return [5,$js$12]}
       else
        if($js$10==6)
         {var $js$13=assoc_comments_text(parent_name,module_list,t_ele[1]);
          return [6,$js$13]}
        else
         if($js$10==7)
          {var $js$14=assoc_comments_text(parent_name,module_list,t_ele[1]);
           return [7,$js$14]}
         else
          if($js$10==8)
           {var $js$15=assoc_comments_text(parent_name,module_list,t_ele[1]);
            return [8,$js$15]}
          else
           if($js$10==9)
            {var $js$16=assoc_comments_text(parent_name,module_list,t_ele[1]);
             return [9,$js$16]}
           else
            if($js$10==10)
             {var $js$17=List["map"];
              var $js$18=assoc_comments_text(parent_name,module_list);
              var $js$19=$js$17($js$18,t_ele[1]);
              return [10,$js$19]}
            else
             if($js$10==11)
              {var $js$20=List["map"];
               var $js$21=assoc_comments_text(parent_name,module_list);
               var $js$22=$js$20($js$21,t_ele[1]);
               return [11,$js$22]}
             else
              if($js$10==12)
               {var
                 $js$23=
                  assoc_comments_text(parent_name,module_list,t_ele[1]);
                return [12,$js$23]}
              else
               if($js$10==13)
                {var
                  $js$24=
                   assoc_comments_text(parent_name,module_list,t_ele[3]);
                 return [13,t_ele[1],t_ele[2],$js$24]}
               else
                if($js$10==15)
                 {var
                   $js$25=
                    assoc_comments_text(parent_name,module_list,t_ele[2]);
                  return [15,t_ele[1],$js$25]}
                else
                 if($js$10==16)
                  {var match=t_ele[2];
                   var initial_name=t_ele[1];
                   var $js$26=match;
                   if($js$26)
                    {var text_option=t_ele[3];
                     var kind=match[1];
                     var
                      iter_parent=
                       function(parent_name$1,name)
                        {var v=[0,name,[0,kind]];
                         var $js$27=was_verified(v);
                         if($js$27)
                          {return [16,name,[0,kind],text_option]}
                         else
                          {var $js$28="unknown primitive:isint";
                           if($js$28)
                            {var $js$29="unknown primitive:isint";
                             if($js$29)
                              {var $js$30=kind;
                               var $js$31=$js$30[0];
                               if($js$31==0)
                                {var f$1=module_exists}
                               else
                                if($js$31==1)
                                 {var f$1=module_type_exists}
                                else
                                 if($js$31==2)
                                  {var f$1=class_exists}
                                 else
                                  if($js$31==3)
                                   {var f$1=class_type_exists}
                                  else
                                   if($js$31==4)
                                    {var f$1=value_exists}
                                   else
                                    if($js$31==5)
                                     {var f$1=type_exists}
                                    else
                                     if($js$31==6)
                                      {var f$1=extension_exists}
                                     else
                                      if($js$31==7)
                                       {var f$1=exception_exists}
                                      else
                                       if($js$31==8)
                                        {var f$1=attribute_exists}
                                       else
                                        if($js$31==9)
                                         {var f$1=method_exists}
                                        else
                                         if($js$31==10)
                                          {var f$1=recfield_exists}
                                         else
                                          if($js$31==11){var f$1=const_exists}}
                             else
                              {var f$1="unknown primitive:raise"}
                             var $js$32=f$1(name);
                             if($js$32)
                              {add_verified(v);var res=[0,name,[0,kind]]}
                             else
                              {var res=[0,name,0]}}
                           else
                            {try
                              {var $js$33=Str["regexp"];
                               var $js$34=Pervasives["^"];
                               var $js$35=Pervasives["^"];
                               var $js$36=Str["quote"];
                               var $js$37=$js$36(name);
                               var $js$38=$js$35($js$37,"$");
                               var $js$39=$js$34("^",$js$38);
                               var re=$js$33($js$39);
                               var $js$40=Odoc_search["find_section"];
                               var t=$js$40(module_list,re);
                               var v2=[0,name,[0,[0,t]]];
                               add_verified(v2);
                               var res=[0,name,[0,[0,t]]]}
                             catch(exn)
                              {var $js$41=exn=Not_found;
                               if($js$41)
                                {var res=[0,name,0]}
                               else
                                {var res="unknown primitive:reraise"}}}
                           var match$1=res[2];
                           var $js$42=match$1;
                           if($js$42)
                            {return [16,res[1],[0,match$1[1]],text_option]}
                           else
                            {var $js$43=parent_name$1;
                             if($js$43)
                              {var p=parent_name$1[1];
                               var $js$44=Odoc_name["father"];
                               var s=$js$44(p);
                               var $js$45=s;
                               if($js$45=="")
                                {var parent_name$2=0}
                               else
                                {var parent_name$2=[0,s]}
                               var $js$46=Odoc_name["concat"];
                               var $js$47=$js$46(p,initial_name);
                               return iter_parent(parent_name$2,$js$47)}
                             else
                              {var $js$48=Odoc_global["pwarning"];
                               var $js$49=not_found_of_kind(kind,initial_name);
                               $js$48($js$49);
                               return [16,initial_name,0,text_option]}}}};
                     return iter_parent([0,parent_name],initial_name)}
                   else
                    {var text_option$1=t_ele[3];
                     var
                      iter_parent$1=
                       function(parent_name$1,name)
                        {var $js$27=Odoc_name["normalize_name"];
                         var name$1=$js$27(name);
                         var match$1=get_known_elements(name$1);
                         var $js$28=match$1;
                         if($js$28)
                          {var ele=match$1[1];
                           var $js$29=ele;
                           if($js$29==0)
                            {var match$2=[0,ele[1][1],0]}
                           else
                            if($js$29==1)
                             {var match$2=[0,ele[1][1],1]}
                            else
                             if($js$29==2)
                              {var match$2=[0,ele[1][1],2]}
                             else
                              if($js$29==3)
                               {var match$2=[0,ele[1][1],3]}
                              else
                               if($js$29==4)
                                {var match$2=[0,ele[1][1],4]}
                               else
                                if($js$29==5)
                                 {var match$2=[0,ele[1][1],5]}
                                else
                                 if($js$29==6)
                                  {var match$2=[0,ele[1][1],6]}
                                 else
                                  if($js$29==7)
                                   {var match$2=[0,ele[1][1],7]}
                                  else
                                   if($js$29==8)
                                    {var match$2=[0,ele[1][1][1],8]}
                                   else
                                    if($js$29==9)
                                     {var match$2=[0,ele[1][1][1],9]}
                                    else
                                     if($js$29==10)
                                      {var match$2="unknown primitive:raise"}
                                     else
                                      if($js$29==11)
                                       {var $js$30=Printf["sprintf"];
                                        var
                                         $js$31=
                                          $js$30
                                           ([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],ele[1][1],ele[2][1]);
                                        var match$2=[0,$js$31,10]}
                                      else
                                       if($js$29==12)
                                        {var $js$32=Printf["sprintf"];
                                         var
                                          $js$33=
                                           $js$32
                                            ([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],ele[1][1],ele[2][1]);
                                         var match$2=[0,$js$33,11]}
                           var kind$1=match$2[2];
                           var name$2=match$2[1];
                           add_verified([0,name$2,[0,kind$1]]);
                           var res=[0,name$2,[0,kind$1]]}
                         else
                          {try
                            {var $js$34=Str["regexp"];
                             var $js$35=Pervasives["^"];
                             var $js$36=Pervasives["^"];
                             var $js$37=Str["quote"];
                             var $js$38=$js$37(name$1);
                             var $js$39=$js$36($js$38,"$");
                             var $js$40=$js$35("^",$js$39);
                             var re=$js$34($js$40);
                             var $js$41=Odoc_search["find_section"];
                             var t=$js$41(module_list,re);
                             var v2=[0,name$1,[0,[0,t]]];
                             add_verified(v2);
                             var res=[0,name$1,[0,[0,t]]]}
                           catch(exn)
                            {var $js$42=exn=Not_found;
                             if($js$42)
                              {var res=[0,name$1,0]}
                             else
                              {var res="unknown primitive:reraise"}}}
                         var match$3=res[2];
                         var $js$43=match$3;
                         if($js$43)
                          {return [16,res[1],[0,match$3[1]],text_option$1]}
                         else
                          {var $js$44=parent_name$1;
                           if($js$44)
                            {var p=parent_name$1[1];
                             var $js$45=Odoc_name["father"];
                             var s=$js$45(p);
                             var $js$46=s;
                             if($js$46=="")
                              {var parent_name$2=0}
                             else
                              {var parent_name$2=[0,s]}
                             var $js$47=Odoc_name["concat"];
                             var $js$48=$js$47(p,initial_name);
                             return iter_parent$1(parent_name$2,$js$48)}
                           else
                            {var $js$49=Odoc_global["pwarning"];
                             var $js$50=Odoc_messages["cross_element_not_found"];
                             var $js$51=$js$50(initial_name);
                             $js$49($js$51);
                             return [16,initial_name,0,text_option$1]}}};
                     return iter_parent$1([0,parent_name],initial_name)}}
                 else
                  if($js$10==17)
                   {var
                     $js$27=
                      assoc_comments_text(parent_name,module_list,t_ele[1]);
                    return [17,$js$27]}
                  else
                   if($js$10==18)
                    {var
                      $js$28=
                       assoc_comments_text(parent_name,module_list,t_ele[1]);
                     return [18,$js$28]}
                   else
                    if($js$10==19)
                     {return [19,t_ele[1]]}
                    else
                     if($js$10==20)
                      {var
                        $js$29=
                         assoc_comments_text(parent_name,module_list,t_ele[2]);
                       return [20,t_ele[1],$js$29]}
                     else
                      if($js$10==21)
                       {return [21,t_ele[1],t_ele[2]]}
                      else
                       {return t_ele}}};
var
 assoc_comments_text=
  function(parent_name,module_list,text)
   {var $js$9=List["map"];
    var $js$10=assoc_comments_text_elements(parent_name,module_list);
    return $js$9($js$10,text)};
var
 assoc_comments_info=
  function(parent_name,module_list,i)
   {var ft=assoc_comments_text(parent_name,module_list);
    var $js$9=ao(ft,i[1]);
    var $js$10=List["map"];
    var
     $js$11=
      $js$10
       (function(param){var $js$12=ft(param[2]);return [0,param[1],$js$12]},
        i[4]);
    var $js$12=ao(ft,i[7]);
    var $js$13=List["map"];
    var
     $js$14=
      $js$13
       (function(param){var $js$15=ft(param[2]);return [0,param[1],$js$15]},
        i[8]);
    var $js$15=List["map"];
    var
     $js$16=
      $js$15
       (function(param){var $js$17=ft(param[2]);return [0,param[1],$js$17]},
        i[9]);
    var $js$17=ao(ft,i[10]);
    var $js$18=List["map"];
    var
     $js$19=
      $js$18
       (function(param){var $js$20=ft(param[2]);return [0,param[1],$js$20]},
        i[11]);
    return [0,
            $js$9,
            i[2],
            i[3],
            $js$11,
            i[5],
            i[6],
            $js$12,
            $js$14,
            $js$16,
            $js$17,
            $js$19]};
var
 assoc_comments_module_element=
  function(parent_name,module_list,m_ele)
   {var $js$9=m_ele;
    if($js$9==0)
     {var $js$10=assoc_comments_module(module_list,m_ele[1]);
      return [0,$js$10]}
    else
     if($js$9==1)
      {var $js$11=assoc_comments_module_type(module_list,m_ele[1]);
       return [1,$js$11]}
     else
      if($js$9==2)
       {return m_ele}
      else
       if($js$9==3)
        {var $js$12=assoc_comments_class(module_list,m_ele[1]);
         return [3,$js$12]}
       else
        if($js$9==4)
         {var $js$13=assoc_comments_class_type(module_list,m_ele[1]);
          return [4,$js$13]}
        else
         if($js$9==5)
          {var $js$14=assoc_comments_value(module_list,m_ele[1]);
           return [5,$js$14]}
         else
          if($js$9==6)
           {var
             $js$15=
              assoc_comments_type_extension(parent_name,module_list,m_ele[1]);
            return [6,$js$15]}
          else
           if($js$9==7)
            {var $js$16=assoc_comments_exception(module_list,m_ele[1]);
             return [7,$js$16]}
           else
            if($js$9==8)
             {var $js$17=assoc_comments_type(module_list,m_ele[1]);
              return [8,$js$17]}
            else
             if($js$9==9)
              {var
                $js$18=
                 assoc_comments_text(parent_name,module_list,m_ele[1]);
               return [9,$js$18]}};
var
 assoc_comments_class_element=
  function(parent_name,module_list,c_ele)
   {var $js$9=c_ele;
    if($js$9==0)
     {var $js$10=assoc_comments_attribute(module_list,c_ele[1]);
      return [0,$js$10]}
    else
     if($js$9==1)
      {var $js$11=assoc_comments_method(module_list,c_ele[1]);
       return [1,$js$11]}
     else
      if($js$9==2)
       {var $js$12=assoc_comments_text(parent_name,module_list,c_ele[1]);
        return [2,$js$12]}};
var
 assoc_comments_module_kind=
  function(parent_name,module_list,mk)
   {var $js$9=mk;
    if($js$9==0)
     {var $js$10=List["map"];
      var $js$11=assoc_comments_module_element(parent_name,module_list);
      var $js$12=$js$10($js$11,mk[1]);
      return [0,$js$12]}
    else
     if($js$9==1)
      {var exit=8}
     else
      if($js$9==2)
       {var exit=8}
      else
       if($js$9==3)
        {var $js$13=assoc_comments_module_kind(parent_name,module_list,mk[1]);
         var $js$14=assoc_comments_module_kind(parent_name,module_list,mk[2]);
         return [3,$js$13,$js$14]}
       else
        if($js$9==4)
         {var
           $js$15=
            assoc_comments_module_type_kind(parent_name,module_list,mk[1]);
          return [4,$js$15,mk[2]]}
        else
         if($js$9==5)
          {var
            $js$16=
             assoc_comments_module_kind(parent_name,module_list,mk[1]);
           var
            $js$17=
             assoc_comments_module_type_kind(parent_name,module_list,mk[2]);
           return [5,$js$16,$js$17]}
         else
          if($js$9==6){var exit=9}else if($js$9==7){var exit=9}
    switch(exit){case 9:return mk;case 8:return mk}};
var
 assoc_comments_module_type_kind=
  function(parent_name,module_list,mtk)
   {var $js$9=mtk;
    if($js$9==0)
     {var $js$10=List["map"];
      var $js$11=assoc_comments_module_element(parent_name,module_list);
      var $js$12=$js$10($js$11,mtk[1]);
      return [0,$js$12]}
    else
     if($js$9==1)
      {var
        $js$13=
         assoc_comments_module_type_kind(parent_name,module_list,mtk[2]);
       return [1,mtk[1],$js$13]}
     else
      if($js$9==2)
       {var exit=10}
      else
       if($js$9==3)
        {var
          $js$14=
           assoc_comments_module_type_kind(parent_name,module_list,mtk[1]);
         return [3,$js$14,mtk[2]]}
       else
        if($js$9==4){var exit=10}
    switch(exit){case 10:return mtk}};
var
 assoc_comments_class_kind=
  function(parent_name,module_list,ck)
   {var $js$9=ck;
    if($js$9==0)
     {var $js$10=List["map"];
      var
       inher2=
        $js$10
         (function(ic)
           {var $js$11=assoc_comments_text(parent_name,module_list);
            var $js$12=ao($js$11,ic[3]);
            return [0,ic[1],ic[2],$js$12]},
          ck[1]);
      var $js$11=List["map"];
      var $js$12=assoc_comments_class_element(parent_name,module_list);
      var $js$13=$js$11($js$12,ck[2]);
      return [0,inher2,$js$13]}
    else
     if($js$9==1)
      {var exit=12}
     else
      if($js$9==2)
       {var exit=12}
      else
       if($js$9==3)
        {var $js$14=assoc_comments_class_kind(parent_name,module_list,ck[1]);
         var
          $js$15=
           assoc_comments_class_type_kind(parent_name,module_list,ck[2]);
         return [3,$js$14,$js$15]}
    switch(exit){case 12:return ck}};
var
 assoc_comments_class_type_kind=
  function(parent_name,module_list,ctk)
   {var $js$9=ctk;
    if($js$9==0)
     {var $js$10=List["map"];
      var
       inher2=
        $js$10
         (function(ic)
           {var $js$11=assoc_comments_text(parent_name,module_list);
            var $js$12=ao($js$11,ic[3]);
            return [0,ic[1],ic[2],$js$12]},
          ctk[1]);
      var $js$11=List["map"];
      var $js$12=assoc_comments_class_element(parent_name,module_list);
      var $js$13=$js$11($js$12,ctk[2]);
      return [0,inher2,$js$13]}
    else
     if($js$9==1){return ctk}};
var
 assoc_comments_module=
  function(module_list,m)
   {var $js$9=assoc_comments_info(m[1],module_list);
    var $js$10=ao($js$9,m[3]);
    m[3]=$js$10,0;
    var $js$11=assoc_comments_module_kind(m[1],module_list,m[6]);
    m[6]=$js$11,0;
    return m};
var
 assoc_comments_module_type=
  function(module_list,mt)
   {var $js$9=assoc_comments_info(mt[1],module_list);
    var $js$10=ao($js$9,mt[2]);
    mt[2]=$js$10,0;
    var $js$11=assoc_comments_module_type_kind(mt[1],module_list);
    var $js$12=ao($js$11,mt[6]);
    mt[6]=$js$12,0;
    return mt};
var
 assoc_comments_class=
  function(module_list,c)
   {var $js$9=assoc_comments_info(c[1],module_list);
    var $js$10=ao($js$9,c[2]);
    c[2]=$js$10,0;
    var $js$11=assoc_comments_class_kind(c[1],module_list,c[6]);
    c[6]=$js$11,0;
    assoc_comments_parameter_list(c[1],module_list,c[7]);
    return c};
var
 assoc_comments_class_type=
  function(module_list,ct)
   {var $js$9=assoc_comments_info(ct[1],module_list);
    var $js$10=ao($js$9,ct[2]);
    ct[2]=$js$10,0;
    var $js$11=assoc_comments_class_type_kind(ct[1],module_list,ct[6]);
    ct[6]=$js$11,0;
    return ct};
var
 assoc_comments_parameter=
  function(parent_name,module_list,p)
   {var $js$9=p;
    if($js$9==0)
     {var sn=p[1];
      var $js$10=assoc_comments_text(parent_name,module_list);
      var $js$11=ao($js$10,sn[3]);
      return sn[3]=$js$11,0}
    else
     if($js$9==1)
      {var $js$12=List["iter"];
       var $js$13=assoc_comments_parameter(parent_name,module_list);
       return $js$12($js$13,p[1])}};
var
 assoc_comments_parameter_list=
  function(parent_name,module_list,pl)
   {var $js$9=List["iter"];
    var $js$10=assoc_comments_parameter(parent_name,module_list);
    return $js$9($js$10,pl)};
var
 assoc_comments_value=
  function(module_list,v)
   {var $js$9=Odoc_name["father"];
    var parent=$js$9(v[1]);
    var $js$10=assoc_comments_info(parent,module_list);
    var $js$11=ao($js$10,v[2]);
    v[2]=$js$11,0;
    assoc_comments_parameter_list(parent,module_list,v[5]);
    return v};
var
 assoc_comments_extension_constructor=
  function(module_list,x)
   {var $js$9=Odoc_name["father"];
    var parent=$js$9(x[1]);
    var $js$10=assoc_comments_info(parent,module_list);
    var $js$11=ao($js$10,x[7]);
    return x[7]=$js$11,0};
var
 assoc_comments_type_extension=
  function(parent_name,module_list,te)
   {var $js$9=assoc_comments_info(parent_name,module_list);
    var $js$10=ao($js$9,te[1]);
    te[1]=$js$10,0;
    var $js$11=List["iter"];
    var $js$12=assoc_comments_extension_constructor(module_list);
    $js$11($js$12,te[5]);
    return te};
var
 assoc_comments_exception=
  function(module_list,e)
   {var $js$9=Odoc_name["father"];
    var parent=$js$9(e[1]);
    var $js$10=assoc_comments_info(parent,module_list);
    var $js$11=ao($js$10,e[2]);
    e[2]=$js$11,0;
    return e};
var
 assoc_comments_type=
  function(module_list,t)
   {var $js$9=Odoc_name["father"];
    var parent=$js$9(t[1]);
    var $js$10=assoc_comments_info(parent,module_list);
    var $js$11=ao($js$10,t[2]);
    t[2]=$js$11,0;
    var match=t[4];
    var $js$12=match;
    if(typeof $js$12=="number")
     {if($js$12==0){var exit=17}else if($js$12==1){var exit=17}}
    else
     {var $js$13=$js$12[0];
      if($js$13==0)
       {var $js$14=List["iter"];
        $js$14
         (function(vc)
           {var $js$15=assoc_comments_info(parent,module_list);
            var $js$16=ao($js$15,vc[4]);
            return vc[4]=$js$16,0},
          match[1])}
      else
       if($js$13==1)
        {var $js$15=List["iter"];
         $js$15
          (function(rf)
            {var $js$16=assoc_comments_info(parent,module_list);
             var $js$17=ao($js$16,rf[4]);
             return rf[4]=$js$17,0},
           match[1])}}
    switch(exit){case 17:}
    return t};
var
 assoc_comments_attribute=
  function(module_list,a)
   {var match=assoc_comments_value(module_list,a[1]);return a};
var
 assoc_comments_method=
  function(module_list,m)
   {var $js$9=Odoc_name["father"];
    var parent_name=$js$9(m[1][1]);
    var match=assoc_comments_value(module_list,m[1]);
    assoc_comments_parameter_list(parent_name,module_list,m[1][5]);
    return m};
var
 associate_type_of_elements_in_comments=
  function(module_list)
   {var $js$9=List["map"];
    var $js$10=assoc_comments_module(module_list);
    return $js$9($js$10,module_list)};
var
 associate=
  function(module_list)
   {get_alias_names(module_list);
    init_known_elements_map(module_list);
    var
     remove_doubles=
      function(acc,param)
       {var $js$9=param;
        if($js$9)
         {var q=param[2];
          var h=param[1];
          var $js$10=List["mem"];
          var $js$11=$js$10(h,acc);
          if($js$11)
           {return remove_doubles(acc,q)}
          else
           {return remove_doubles([0,h,acc],q)}}
        else
         {return acc}};
    var
     iter=
      function(incomplete_modules)
       {var $js$9=List["fold_left"];
        var $js$10=associate_in_module(module_list);
        var match=$js$9($js$10,[0,0,0,0],incomplete_modules);
        var remaining_no_doubles=remove_doubles(0,match[2]);
        var $js$11=List["filter"];
        var
         remaining_modules=
          $js$11
           (function(m)
             {var $js$12=List["mem"];return $js$12(m[1],remaining_no_doubles)},
            incomplete_modules);
        var $js$12=match[1];
        if($js$12){return iter(remaining_modules)}else{return match[3]}};
    var names_not_found=iter(module_list);
    var $js$9=names_not_found;
    if($js$9)
     {var $js$10=List["iter"];
      $js$10
       (function(nf)
         {var $js$11=Odoc_global["pwarning"];
          var $js$12=nf;
          if($js$12==0)
           {var $js$13=Odoc_messages["cross_module_not_found"];
            var $js$14=$js$13(nf[1])}
          else
           if($js$12==1)
            {var $js$15=Odoc_messages["cross_module_type_not_found"];
             var $js$14=$js$15(nf[1])}
           else
            if($js$12==2)
             {var
               $js$16=
                Odoc_messages["cross_module_or_module_type_not_found"];
              var $js$14=$js$16(nf[1])}
            else
             if($js$12==3)
              {var $js$17=Odoc_messages["cross_class_not_found"];
               var $js$14=$js$17(nf[1])}
             else
              if($js$12==4)
               {var $js$18=Odoc_messages["cross_class_type_not_found"];
                var $js$14=$js$18(nf[1])}
              else
               if($js$12==5)
                {var
                  $js$19=
                   Odoc_messages["cross_class_or_class_type_not_found"];
                 var $js$14=$js$19(nf[1])}
               else
                if($js$12==6)
                 {var $js$20=Odoc_messages["cross_extension_not_found"];
                  var $js$14=$js$20(nf[1])}
                else
                 if($js$12==7)
                  {var $js$21=Odoc_messages["cross_exception_not_found"];
                   var $js$14=$js$21(nf[1])}
          return $js$11($js$14)},
        names_not_found)}
    else
     {}
    var $js$11=associate_type_of_elements_in_comments(module_list);
    return 0};
module["exports"]=
{"associate":associate,"assoc_comments_info":assoc_comments_info};
