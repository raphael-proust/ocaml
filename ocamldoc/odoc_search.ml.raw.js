var Odoc_name=require("Odoc_name");
var Odoc_class=require("Odoc_class");
var List=require("List");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Odoc_extension=require("Odoc_extension");
var Str=require("Str");
var Odoc_module=require("Odoc_module");
var
 Search=
  function(P)
   {var
     search_section=
      function(t,s,v)
       {var $js=P[13];
        var $js$1=$js(s,v);
        if($js$1){return [0,[10,s,t],0]}else{return 0}};
    var
     search_text=
      function(root,t,v)
       {var $js=List["flatten"];
        var $js$1=List["map"];
        var $js$2=$js$1(function(e){return search_text_ele(root,e,v)},t);
        return $js($js$2)};
    var
     search_text_ele=
      function(root,e,v)
       {var T=Odoc_types;
        var $js=e;
        if(typeof $js=="number")
         {if($js==0){var exit=274}else if($js==1){var exit=274}}
        else
         {var $js$1=$js[0];
          if($js$1==0)
           {var exit=271}
          else
           if($js$1==1)
            {var exit=271}
           else
            if($js$1==2)
             {var exit=271}
            else
             if($js$1==3)
              {var exit=271}
             else
              if($js$1==10)
               {var exit=276}
              else
               if($js$1==11)
                {var exit=276}
               else
                if($js$1==13)
                 {var t=e[3];
                  var l_opt=e[2];
                  var $js$2=Pervasives["@"];
                  var $js$3=l_opt;
                  if($js$3)
                   {var $js$4=Odoc_name["concat"];
                    var $js$5=$js$4(root,l_opt[1]);
                    var $js$6=search_section(t,$js$5,v)}
                  else
                   {var $js$6=0}
                  var $js$7=search_text(root,t,v);
                  return $js$2($js$6,$js$7)}
                else
                 if($js$1==14)
                  {var exit=271}
                 else
                  if($js$1==15)
                   {var exit=277}
                  else
                   if($js$1==16)
                    {var exit=271}
                   else
                    if($js$1==19)
                     {var exit=274}
                    else
                     if($js$1==20)
                      {var exit=277}
                     else
                      if($js$1==21){return 0}else{var t$1=e[1];var exit=272}}
        switch(exit)
         {case 276:
           var $js$8=List["flatten"];
           var $js$9=List["map"];
           var
            $js$10=
             $js$9(function(t$2){return search_text(root,t$2,v)},e[1]);
           return $js$8($js$10);
          case 277:"unknown block:(exit 272 (field 1 e/1051))";
          case 271:return 0;
          case 272:return search_text(root,t$1,v);
          case 274:return 0
          }};
    var
     search_value=
      function(va,v)
       {var $js=P[5];
        var $js$1=$js(va,v);
        if($js$1){return [0,[4,va],0]}else{return 0}};
    var
     search_recfield=
      function(t,f,v)
       {var $js=P[6];
        var $js$1=$js(t,f,v);
        if($js$1){return [0,[11,t,f],0]}else{return 0}};
    var
     search_const=
      function(t,f,v)
       {var $js=P[7];
        var $js$1=$js(t,f,v);
        if($js$1){return [0,[12,t,f],0]}else{return 0}};
    var
     search_type=
      function(t,v)
       {var $js=P[8];
        var match=$js(t,v);
        var $js$1=match[1]!=0;
        if($js$1)
         {var match$1=t[4];
          var $js$2=match$1;
          if(typeof $js$2=="number")
           {if($js$2==0){var exit=264}else if($js$2==1){var exit=264}}
          else
           {var $js$3=$js$2[0];
            if($js$3==0)
             {var $js$4=List["flatten"];
              var $js$5=List["map"];
              var
               $js$6=
                $js$5(function(rf){return search_const(t,rf,v)},match$1[1]);
              var l=$js$4($js$6)}
            else
             if($js$3==1)
              {var $js$7=List["flatten"];
               var $js$8=List["map"];
               var
                $js$9=
                 $js$8
                  (function(rf){return search_recfield(t,rf,v)},match$1[1]);
               var l=$js$7($js$9)}}
          switch(exit){case 264:var l=0}}
        else
         {var l=0}
        var $js$10=match[2];
        if($js$10){return [0,[5,t],l]}else{return l}};
    var
     search_extension_constructor=
      function(xt,v)
       {var $js=P[9];
        var $js$1=$js(xt,v);
        if($js$1){return [0,[6,xt],0]}else{return 0}};
    var
     search_type_extension=
      function(te,v)
       {var $js=List["fold_left"];
        var $js$1=Odoc_extension["extension_constructors"];
        var $js$2=$js$1(te);
        return $js
                (function(acc,xt)
                  {var $js$3=Pervasives["@"];
                   var $js$4=search_extension_constructor(xt,v);
                   return $js$3(acc,$js$4)},
                 0,
                 $js$2)};
    var
     search_exception=
      function(e,v)
       {var $js=P[10];
        var $js$1=$js(e,v);
        if($js$1){return [0,[7,e],0]}else{return 0}};
    var
     search_attribute=
      function(a,v)
       {var $js=P[11];
        var $js$1=$js(a,v);
        if($js$1){return [0,[8,a],0]}else{return 0}};
    var
     search_method=
      function(m,v)
       {var $js=P[12];
        var $js$1=$js(m,v);
        if($js$1){return [0,[9,m],0]}else{return 0}};
    var
     search_class=
      function(c,v)
       {var $js=P[3];
        var match=$js(c,v);
        var $js$1=match[1];
        if($js$1)
         {var $js$2=List["fold_left"];
          var $js$3=Odoc_class["class_attributes"];
          var $js$4=$js$3(0,c);
          var
           res_att=
            $js$2
             (function(acc,att)
               {var $js$5=Pervasives["@"];
                var $js$6=search_attribute(att,v);
                return $js$5(acc,$js$6)},
              0,
              $js$4);
          var $js$5=List["fold_left"];
          var $js$6=Odoc_class["class_methods"];
          var $js$7=$js$6(0,c);
          var
           res_met=
            $js$5
             (function(acc,m)
               {var $js$8=Pervasives["@"];
                var $js$9=search_method(m,v);
                return $js$8(acc,$js$9)},
              0,
              $js$7);
          var $js$8=List["fold_left"];
          var $js$9=Odoc_class["class_comments"];
          var $js$10=$js$9(0,c);
          var
           res_sec=
            $js$8
             (function(acc,t)
               {var $js$11=Pervasives["@"];
                var $js$12=search_text(c[1],t,v);
                return $js$11(acc,$js$12)},
              0,
              $js$10);
          var $js$11=Pervasives["@"];
          var $js$12=Pervasives["@"];
          var $js$13=$js$12(res_met,res_sec);
          var l=$js$11(res_att,$js$13)}
        else
         {var l=0}
        var $js$14=match[2];
        if($js$14){return [0,[2,c],l]}else{return l}};
    var
     search_class_type=
      function(ct,v)
       {var $js=P[4];
        var match=$js(ct,v);
        var $js$1=match[1];
        if($js$1)
         {var $js$2=List["fold_left"];
          var $js$3=Odoc_class["class_type_attributes"];
          var $js$4=$js$3(0,ct);
          var
           res_att=
            $js$2
             (function(acc,att)
               {var $js$5=Pervasives["@"];
                var $js$6=search_attribute(att,v);
                return $js$5(acc,$js$6)},
              0,
              $js$4);
          var $js$5=List["fold_left"];
          var $js$6=Odoc_class["class_type_methods"];
          var $js$7=$js$6(0,ct);
          var
           res_met=
            $js$5
             (function(acc,m)
               {var $js$8=Pervasives["@"];
                var $js$9=search_method(m,v);
                return $js$8(acc,$js$9)},
              0,
              $js$7);
          var $js$8=List["fold_left"];
          var $js$9=Odoc_class["class_type_comments"];
          var $js$10=$js$9(0,ct);
          var
           res_sec=
            $js$8
             (function(acc,t)
               {var $js$11=Pervasives["@"];
                var $js$12=search_text(ct[1],t,v);
                return $js$11(acc,$js$12)},
              0,
              $js$10);
          var $js$11=Pervasives["@"];
          var $js$12=Pervasives["@"];
          var $js$13=$js$12(res_met,res_sec);
          var l=$js$11(res_att,$js$13)}
        else
         {var l=0}
        var $js$14=match[2];
        if($js$14){return [0,[3,ct],l]}else{return l}};
    var
     search_module_type=
      function(mt,v)
       {var $js=P[2];
        var match=$js(mt,v);
        var $js$1=match[1];
        if($js$1)
         {var $js$2=List["fold_left"];
          var $js$3=Odoc_module["module_type_values"];
          var $js$4=$js$3(0,mt);
          var
           res_val=
            $js$2
             (function(acc,va)
               {var $js$5=Pervasives["@"];
                var $js$6=search_value(va,v);
                return $js$5(acc,$js$6)},
              0,
              $js$4);
          var $js$5=List["fold_left"];
          var $js$6=Odoc_module["module_type_types"];
          var $js$7=$js$6(0,mt);
          var
           res_typ=
            $js$5
             (function(acc,t)
               {var $js$8=Pervasives["@"];
                var $js$9=search_type(t,v);
                return $js$8(acc,$js$9)},
              0,
              $js$7);
          var $js$8=List["fold_left"];
          var $js$9=Odoc_module["module_type_type_extensions"];
          var $js$10=$js$9(0,mt);
          var
           res_ext=
            $js$8
             (function(acc,te)
               {var $js$11=Pervasives["@"];
                var $js$12=search_type_extension(te,v);
                return $js$11(acc,$js$12)},
              0,
              $js$10);
          var $js$11=List["fold_left"];
          var $js$12=Odoc_module["module_type_exceptions"];
          var $js$13=$js$12(0,mt);
          var
           res_exc=
            $js$11
             (function(acc,e)
               {var $js$14=Pervasives["@"];
                var $js$15=search_exception(e,v);
                return $js$14(acc,$js$15)},
              0,
              $js$13);
          var $js$14=Odoc_module["module_type_modules"];
          var $js$15=$js$14(0,mt);
          var res_mod=search($js$15,v);
          var $js$16=List["fold_left"];
          var $js$17=Odoc_module["module_type_module_types"];
          var $js$18=$js$17(0,mt);
          var
           res_modtyp=
            $js$16
             (function(acc,mt$1)
               {var $js$19=Pervasives["@"];
                var $js$20=search_module_type(mt$1,v);
                return $js$19(acc,$js$20)},
              0,
              $js$18);
          var $js$19=List["fold_left"];
          var $js$20=Odoc_module["module_type_classes"];
          var $js$21=$js$20(0,mt);
          var
           res_cl=
            $js$19
             (function(acc,cl)
               {var $js$22=Pervasives["@"];
                var $js$23=search_class(cl,v);
                return $js$22(acc,$js$23)},
              0,
              $js$21);
          var $js$22=List["fold_left"];
          var $js$23=Odoc_module["module_type_class_types"];
          var $js$24=$js$23(0,mt);
          var
           res_cltyp=
            $js$22
             (function(acc,clt)
               {var $js$25=Pervasives["@"];
                var $js$26=search_class_type(clt,v);
                return $js$25(acc,$js$26)},
              0,
              $js$24);
          var $js$25=List["fold_left"];
          var $js$26=Odoc_module["module_type_comments"];
          var $js$27=$js$26(0,mt);
          var
           res_sec=
            $js$25
             (function(acc,t)
               {var $js$28=Pervasives["@"];
                var $js$29=search_text(mt[1],t,v);
                return $js$28(acc,$js$29)},
              0,
              $js$27);
          var $js$28=Pervasives["@"];
          var $js$29=Pervasives["@"];
          var $js$30=Pervasives["@"];
          var $js$31=Pervasives["@"];
          var $js$32=Pervasives["@"];
          var $js$33=Pervasives["@"];
          var $js$34=Pervasives["@"];
          var $js$35=Pervasives["@"];
          var $js$36=$js$35(res_cltyp,res_sec);
          var $js$37=$js$34(res_cl,$js$36);
          var $js$38=$js$33(res_modtyp,$js$37);
          var $js$39=$js$32(res_mod,$js$38);
          var $js$40=$js$31(res_exc,$js$39);
          var $js$41=$js$30(res_ext,$js$40);
          var $js$42=$js$29(res_typ,$js$41);
          var l=$js$28(res_val,$js$42)}
        else
         {var l=0}
        var $js$43=match[2];
        if($js$43){return [0,[1,mt],l]}else{return l}};
    var
     search_module=
      function(m,v)
       {var $js=P[1];
        var match=$js(m,v);
        var $js$1=match[1];
        if($js$1)
         {var $js$2=List["fold_left"];
          var $js$3=Odoc_module["module_values"];
          var $js$4=$js$3(0,m);
          var
           res_val=
            $js$2
             (function(acc,va)
               {var $js$5=Pervasives["@"];
                var $js$6=search_value(va,v);
                return $js$5(acc,$js$6)},
              0,
              $js$4);
          var $js$5=List["fold_left"];
          var $js$6=Odoc_module["module_types"];
          var $js$7=$js$6(0,m);
          var
           res_typ=
            $js$5
             (function(acc,t)
               {var $js$8=Pervasives["@"];
                var $js$9=search_type(t,v);
                return $js$8(acc,$js$9)},
              0,
              $js$7);
          var $js$8=List["fold_left"];
          var $js$9=Odoc_module["module_type_extensions"];
          var $js$10=$js$9(0,m);
          var
           res_ext=
            $js$8
             (function(acc,te)
               {var $js$11=Pervasives["@"];
                var $js$12=search_type_extension(te,v);
                return $js$11(acc,$js$12)},
              0,
              $js$10);
          var $js$11=List["fold_left"];
          var $js$12=Odoc_module["module_exceptions"];
          var $js$13=$js$12(0,m);
          var
           res_exc=
            $js$11
             (function(acc,e)
               {var $js$14=Pervasives["@"];
                var $js$15=search_exception(e,v);
                return $js$14(acc,$js$15)},
              0,
              $js$13);
          var $js$14=Odoc_module["module_modules"];
          var $js$15=$js$14(0,m);
          var res_mod=search($js$15,v);
          var $js$16=List["fold_left"];
          var $js$17=Odoc_module["module_module_types"];
          var $js$18=$js$17(0,m);
          var
           res_modtyp=
            $js$16
             (function(acc,mt)
               {var $js$19=Pervasives["@"];
                var $js$20=search_module_type(mt,v);
                return $js$19(acc,$js$20)},
              0,
              $js$18);
          var $js$19=List["fold_left"];
          var $js$20=Odoc_module["module_classes"];
          var $js$21=$js$20(0,m);
          var
           res_cl=
            $js$19
             (function(acc,cl)
               {var $js$22=Pervasives["@"];
                var $js$23=search_class(cl,v);
                return $js$22(acc,$js$23)},
              0,
              $js$21);
          var $js$22=List["fold_left"];
          var $js$23=Odoc_module["module_class_types"];
          var $js$24=$js$23(0,m);
          var
           res_cltyp=
            $js$22
             (function(acc,clt)
               {var $js$25=Pervasives["@"];
                var $js$26=search_class_type(clt,v);
                return $js$25(acc,$js$26)},
              0,
              $js$24);
          var $js$25=List["fold_left"];
          var $js$26=Odoc_module["module_comments"];
          var $js$27=$js$26(0,m);
          var
           res_sec=
            $js$25
             (function(acc,t)
               {var $js$28=Pervasives["@"];
                var $js$29=search_text(m[1],t,v);
                return $js$28(acc,$js$29)},
              0,
              $js$27);
          var $js$28=Pervasives["@"];
          var $js$29=Pervasives["@"];
          var $js$30=Pervasives["@"];
          var $js$31=Pervasives["@"];
          var $js$32=Pervasives["@"];
          var $js$33=Pervasives["@"];
          var $js$34=Pervasives["@"];
          var $js$35=Pervasives["@"];
          var $js$36=$js$35(res_cltyp,res_sec);
          var $js$37=$js$34(res_cl,$js$36);
          var $js$38=$js$33(res_modtyp,$js$37);
          var $js$39=$js$32(res_mod,$js$38);
          var $js$40=$js$31(res_exc,$js$39);
          var $js$41=$js$30(res_ext,$js$40);
          var $js$42=$js$29(res_typ,$js$41);
          var l=$js$28(res_val,$js$42)}
        else
         {var l=0}
        var $js$43=match[2];
        if($js$43){return [0,[0,m],l]}else{return l}};
    var
     search=
      function(module_list,v)
       {var $js=List["fold_left"];
        return $js
                (function(acc,m)
                  {var $js$1=List["fold_left"];
                   var $js$2=search_module(m,v);
                   return $js$1
                           (function(acc2,ele)
                             {var $js$3=List["mem"];
                              var $js$4=$js$3(ele,acc2);
                              if($js$4)
                               {return acc2}
                              else
                               {var $js$5=Pervasives["@"];return $js$5(acc2,[0,ele,0])}},
                            acc,
                            $js$2)},
                 0,
                 module_list)};
    return [0,
            search_section,
            search_text,
            search_text_ele,
            search_value,
            search_recfield,
            search_const,
            search_type,
            search_extension_constructor,
            search_type_extension,
            search_exception,
            search_attribute,
            search_method,
            search_class,
            search_class_type,
            search_module_type,
            search_module,
            search]};
var
 =~=
  function(name,regexp){var $js=Str["string_match"];return $js(regexp,name,0)};
var p_module=function(m,r){var $js==~(m[1],r);return [0,1,$js]};
var p_module_type=function(mt,r){var $js==~(mt[1],r);return [0,1,$js]};
var p_class=function(c,r){var $js==~(c[1],r);return [0,1,$js]};
var p_class_type=function(ct,r){var $js==~(ct[1],r);return [0,1,$js]};
var p_value=function(v,r){return =~(v[1],r)};
var
 p_recfield=
  function(t,f,r)
   {var $js=Printf["sprintf"];
    var name=$js([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],t[1],f[1]);
    return =~(name,r)};
var
 p_const=
  function(t,f,r)
   {var $js=Printf["sprintf"];
    var name=$js([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],t[1],f[1]);
    return =~(name,r)};
var p_type=function(t,r){var $js==~(t[1],r);return [0,1,$js]};
var p_extension=function(x,r){return =~(x[1],r)};
var p_exception=function(e,r){return =~(e[1],r)};
var p_attribute=function(a,r){return =~(a[1][1],r)};
var p_method=function(m,r){return =~(m[1][1],r)};
var p_section=function(s,r){return =~(s,r)};
var
 P_name=
  [0,
   =~,
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
var
 Search_by_name=
  Search
   ([0,
     P_name[2],
     P_name[3],
     P_name[4],
     P_name[5],
     P_name[6],
     P_name[7],
     P_name[8],
     P_name[9],
     P_name[10],
     P_name[11],
     P_name[12],
     P_name[13],
     P_name[14]]);
var p_module$1=function(param,param$1){return [0,1,0]};
var p_module_type$1=function(param,param$1){return [0,1,0]};
var p_class$1=function(param,param$1){return [0,0,0]};
var p_class_type$1=function(param,param$1){return [0,0,0]};
var p_value$1=function(param,param$1){return 1};
var p_recfield$1=function(param,param$1,param$2){return 0};
var p_const$1=function(param,param$1,param$2){return 0};
var p_type$1=function(param,param$1){return [0,0,0]};
var p_extension$1=function(param,param$1){return 0};
var p_exception$1=function(param,param$1){return 0};
var p_attribute$1=function(param,param$1){return 0};
var p_method$1=function(param,param$1){return 0};
var p_section$1=function(param,param$1){return 0};
var
 P_values=
  [0,
   p_module$1,
   p_module_type$1,
   p_class$1,
   p_class_type$1,
   p_value$1,
   p_recfield$1,
   p_const$1,
   p_type$1,
   p_extension$1,
   p_exception$1,
   p_attribute$1,
   p_method$1,
   p_section$1];
var Search_values=Search(P_values);
var
 values=
  function(l)
   {var $js=Search_values[17];
    var l_ele=$js(l,0);
    var p=function(v1,v2){return "unknown primitive:caml_string_equal"};
    var
     iter=
      function(acc,param)
       {var $js$1=param;
        if($js$1)
         {var match=param[1];
          var $js$2=match;
          if($js$2==4)
           {var q=param[2];
            var v=match[1];
            var $js$3=List["exists"];
            var $js$4=p(v);
            var $js$5=$js$3($js$4,acc);
            if($js$5){return iter(acc,q)}else{return iter([0,v,acc],q)}}
          else
           {return iter(acc,param[2])}}
        else
         {return acc}};
    return iter(0,l_ele)};
var p_module$2=function(param,param$1){return [0,1,0]};
var p_module_type$2=function(param,param$1){return [0,1,0]};
var p_class$2=function(param,param$1){return [0,0,0]};
var p_class_type$2=function(param,param$1){return [0,0,0]};
var p_value$2=function(param,param$1){return 0};
var p_recfield$2=function(param,param$1,param$2){return 0};
var p_const$2=function(param,param$1,param$2){return 0};
var p_type$2=function(param,param$1){return [0,0,0]};
var p_extension$2=function(param,param$1){return 1};
var p_exception$2=function(param,param$1){return 0};
var p_attribute$2=function(param,param$1){return 0};
var p_method$2=function(param,param$1){return 0};
var p_section$2=function(param,param$1){return 0};
var
 P_extensions=
  [0,
   p_module$2,
   p_module_type$2,
   p_class$2,
   p_class_type$2,
   p_value$2,
   p_recfield$2,
   p_const$2,
   p_type$2,
   p_extension$2,
   p_exception$2,
   p_attribute$2,
   p_method$2,
   p_section$2];
var Search_extensions=Search(P_extensions);
var
 extensions=
  function(l)
   {var $js=Search_extensions[17];
    var l_ele=$js(l,0);
    var p=function(x1,x2){return "unknown primitive:caml_string_equal"};
    var
     iter=
      function(acc,param)
       {var $js$1=param;
        if($js$1)
         {var match=param[1];
          var $js$2=match;
          if($js$2==6)
           {var q=param[2];
            var x=match[1];
            var $js$3=List["exists"];
            var $js$4=p(x);
            var $js$5=$js$3($js$4,acc);
            if($js$5){return iter(acc,q)}else{return iter([0,x,acc],q)}}
          else
           {return iter(acc,param[2])}}
        else
         {return acc}};
    return iter(0,l_ele)};
var p_module$3=function(param,param$1){return [0,1,0]};
var p_module_type$3=function(param,param$1){return [0,1,0]};
var p_class$3=function(param,param$1){return [0,0,0]};
var p_class_type$3=function(param,param$1){return [0,0,0]};
var p_value$3=function(param,param$1){return 0};
var p_recfield$3=function(param,param$1,param$2){return 0};
var p_const$3=function(param,param$1,param$2){return 0};
var p_type$3=function(param,param$1){return [0,0,0]};
var p_extension$3=function(param,param$1){return 0};
var p_exception$3=function(param,param$1){return 1};
var p_attribute$3=function(param,param$1){return 0};
var p_method$3=function(param,param$1){return 0};
var p_section$3=function(param,param$1){return 0};
var
 P_exceptions=
  [0,
   p_module$3,
   p_module_type$3,
   p_class$3,
   p_class_type$3,
   p_value$3,
   p_recfield$3,
   p_const$3,
   p_type$3,
   p_extension$3,
   p_exception$3,
   p_attribute$3,
   p_method$3,
   p_section$3];
var Search_exceptions=Search(P_exceptions);
var
 exceptions=
  function(l)
   {var $js=Search_exceptions[17];
    var l_ele=$js(l,0);
    var p=function(e1,e2){return "unknown primitive:caml_string_equal"};
    var
     iter=
      function(acc,param)
       {var $js$1=param;
        if($js$1)
         {var match=param[1];
          var $js$2=match;
          if($js$2==7)
           {var q=param[2];
            var t=match[1];
            var $js$3=List["exists"];
            var $js$4=p(t);
            var $js$5=$js$3($js$4,acc);
            if($js$5){return iter(acc,q)}else{return iter([0,t,acc],q)}}
          else
           {return iter(acc,param[2])}}
        else
         {return acc}};
    return iter(0,l_ele)};
var p_module$4=function(param,param$1){return [0,1,0]};
var p_module_type$4=function(param,param$1){return [0,1,0]};
var p_class$4=function(param,param$1){return [0,0,0]};
var p_class_type$4=function(param,param$1){return [0,0,0]};
var p_value$4=function(param,param$1){return 0};
var p_recfield$4=function(param,param$1,param$2){return 0};
var p_const$4=function(param,param$1,param$2){return 0};
var p_type$4=function(param,param$1){return [0,0,1]};
var p_extension$4=function(param,param$1){return 0};
var p_exception$4=function(param,param$1){return 0};
var p_attribute$4=function(param,param$1){return 0};
var p_method$4=function(param,param$1){return 0};
var p_section$4=function(param,param$1){return 0};
var
 P_types=
  [0,
   p_module$4,
   p_module_type$4,
   p_class$4,
   p_class_type$4,
   p_value$4,
   p_recfield$4,
   p_const$4,
   p_type$4,
   p_extension$4,
   p_exception$4,
   p_attribute$4,
   p_method$4,
   p_section$4];
var Search_types=Search(P_types);
var
 types=
  function(l)
   {var $js=Search_types[17];
    var l_ele=$js(l,0);
    var p=function(t1,t2){return "unknown primitive:caml_string_equal"};
    var
     iter=
      function(acc,param)
       {var $js$1=param;
        if($js$1)
         {var match=param[1];
          var $js$2=match;
          if($js$2==5)
           {var q=param[2];
            var t=match[1];
            var $js$3=List["exists"];
            var $js$4=p(t);
            var $js$5=$js$3($js$4,acc);
            if($js$5){return iter(acc,q)}else{return iter([0,t,acc],q)}}
          else
           {return iter(acc,param[2])}}
        else
         {return acc}};
    return iter(0,l_ele)};
var p_module$5=function(param,param$1){return [0,1,0]};
var p_module_type$5=function(param,param$1){return [0,1,0]};
var p_class$5=function(param,param$1){return [0,1,0]};
var p_class_type$5=function(param,param$1){return [0,1,0]};
var p_value$5=function(param,param$1){return 0};
var p_recfield$5=function(param,param$1,param$2){return 0};
var p_const$5=function(param,param$1,param$2){return 0};
var p_type$5=function(param,param$1){return [0,0,0]};
var p_extension$5=function(param,param$1){return 0};
var p_exception$5=function(param,param$1){return 0};
var p_attribute$5=function(param,param$1){return 1};
var p_method$5=function(param,param$1){return 0};
var p_section$5=function(param,param$1){return 0};
var
 P_attributes=
  [0,
   p_module$5,
   p_module_type$5,
   p_class$5,
   p_class_type$5,
   p_value$5,
   p_recfield$5,
   p_const$5,
   p_type$5,
   p_extension$5,
   p_exception$5,
   p_attribute$5,
   p_method$5,
   p_section$5];
var Search_attributes=Search(P_attributes);
var
 attributes=
  function(l)
   {var $js=Search_attributes[17];
    var l_ele=$js(l,0);
    var p=function(a1,a2){return "unknown primitive:caml_string_equal"};
    var
     iter=
      function(acc,param)
       {var $js$1=param;
        if($js$1)
         {var match=param[1];
          var $js$2=match;
          if($js$2==8)
           {var q=param[2];
            var t=match[1];
            var $js$3=List["exists"];
            var $js$4=p(t);
            var $js$5=$js$3($js$4,acc);
            if($js$5){return iter(acc,q)}else{return iter([0,t,acc],q)}}
          else
           {return iter(acc,param[2])}}
        else
         {return acc}};
    return iter(0,l_ele)};
var p_module$6=function(param,param$1){return [0,1,0]};
var p_module_type$6=function(param,param$1){return [0,1,0]};
var p_class$6=function(param,param$1){return [0,1,0]};
var p_class_type$6=function(param,param$1){return [0,1,0]};
var p_value$6=function(param,param$1){return 0};
var p_recfield$6=function(param,param$1,param$2){return 0};
var p_const$6=function(param,param$1,param$2){return 0};
var p_type$6=function(param,param$1){return [0,0,0]};
var p_extension$6=function(param,param$1){return 0};
var p_exception$6=function(param,param$1){return 0};
var p_attribute$6=function(param,param$1){return 0};
var p_method$6=function(param,param$1){return 1};
var p_section$6=function(param,param$1){return 1};
var
 P_methods=
  [0,
   p_module$6,
   p_module_type$6,
   p_class$6,
   p_class_type$6,
   p_value$6,
   p_recfield$6,
   p_const$6,
   p_type$6,
   p_extension$6,
   p_exception$6,
   p_attribute$6,
   p_method$6,
   p_section$6];
var Search_methods=Search(P_methods);
var
 methods=
  function(l)
   {var $js=Search_methods[17];
    var l_ele=$js(l,0);
    var p=function(m1,m2){return "unknown primitive:caml_string_equal"};
    var
     iter=
      function(acc,param)
       {var $js$1=param;
        if($js$1)
         {var match=param[1];
          var $js$2=match;
          if($js$2==9)
           {var q=param[2];
            var t=match[1];
            var $js$3=List["exists"];
            var $js$4=p(t);
            var $js$5=$js$3($js$4,acc);
            if($js$5){return iter(acc,q)}else{return iter([0,t,acc],q)}}
          else
           {return iter(acc,param[2])}}
        else
         {return acc}};
    return iter(0,l_ele)};
var p_module$7=function(param,param$1){return [0,1,0]};
var p_module_type$7=function(param,param$1){return [0,1,0]};
var p_class$7=function(param,param$1){return [0,0,1]};
var p_class_type$7=function(param,param$1){return [0,0,0]};
var p_value$7=function(param,param$1){return 0};
var p_recfield$7=function(param,param$1,param$2){return 0};
var p_const$7=function(param,param$1,param$2){return 0};
var p_type$7=function(param,param$1){return [0,0,0]};
var p_extension$7=function(param,param$1){return 0};
var p_exception$7=function(param,param$1){return 0};
var p_attribute$7=function(param,param$1){return 0};
var p_method$7=function(param,param$1){return 0};
var p_section$7=function(param,param$1){return 0};
var
 P_classes=
  [0,
   p_module$7,
   p_module_type$7,
   p_class$7,
   p_class_type$7,
   p_value$7,
   p_recfield$7,
   p_const$7,
   p_type$7,
   p_extension$7,
   p_exception$7,
   p_attribute$7,
   p_method$7,
   p_section$7];
var Search_classes=Search(P_classes);
var
 classes=
  function(l)
   {var $js=Search_classes[17];
    var l_ele=$js(l,0);
    var p=function(c1,c2){return "unknown primitive:caml_string_equal"};
    var
     iter=
      function(acc,param)
       {var $js$1=param;
        if($js$1)
         {var match=param[1];
          var $js$2=match;
          if($js$2==2)
           {var q=param[2];
            var c=match[1];
            var $js$3=List["exists"];
            var $js$4=p(c);
            var $js$5=$js$3($js$4,acc);
            if($js$5){return iter(acc,q)}else{return iter([0,c,acc],q)}}
          else
           {return iter(acc,param[2])}}
        else
         {return acc}};
    return iter(0,l_ele)};
var p_module$8=function(param,param$1){return [0,1,0]};
var p_module_type$8=function(param,param$1){return [0,1,0]};
var p_class$8=function(param,param$1){return [0,0,0]};
var p_class_type$8=function(param,param$1){return [0,0,1]};
var p_value$8=function(param,param$1){return 0};
var p_recfield$8=function(param,param$1,param$2){return 0};
var p_const$8=function(param,param$1,param$2){return 0};
var p_type$8=function(param,param$1){return [0,0,0]};
var p_extension$8=function(param,param$1){return 0};
var p_exception$8=function(param,param$1){return 0};
var p_attribute$8=function(param,param$1){return 0};
var p_method$8=function(param,param$1){return 0};
var p_section$8=function(param,param$1){return 0};
var
 P_class_types=
  [0,
   p_module$8,
   p_module_type$8,
   p_class$8,
   p_class_type$8,
   p_value$8,
   p_recfield$8,
   p_const$8,
   p_type$8,
   p_extension$8,
   p_exception$8,
   p_attribute$8,
   p_method$8,
   p_section$8];
var Search_class_types=Search(P_class_types);
var
 class_types=
  function(l)
   {var $js=Search_class_types[17];
    var l_ele=$js(l,0);
    var p=function(c1,c2){return "unknown primitive:caml_string_equal"};
    var
     iter=
      function(acc,param)
       {var $js$1=param;
        if($js$1)
         {var match=param[1];
          var $js$2=match;
          if($js$2==3)
           {var q=param[2];
            var c=match[1];
            var $js$3=List["exists"];
            var $js$4=p(c);
            var $js$5=$js$3($js$4,acc);
            if($js$5){return iter(acc,q)}else{return iter([0,c,acc],q)}}
          else
           {return iter(acc,param[2])}}
        else
         {return acc}};
    return iter(0,l_ele)};
var p_module$9=function(param,param$1){return [0,1,1]};
var p_module_type$9=function(param,param$1){return [0,1,0]};
var p_class$9=function(param,param$1){return [0,0,0]};
var p_class_type$9=function(param,param$1){return [0,0,0]};
var p_value$9=function(param,param$1){return 0};
var p_recfield$9=function(param,param$1,param$2){return 0};
var p_const$9=function(param,param$1,param$2){return 0};
var p_type$9=function(param,param$1){return [0,0,0]};
var p_extension$9=function(param,param$1){return 0};
var p_exception$9=function(param,param$1){return 0};
var p_attribute$9=function(param,param$1){return 0};
var p_method$9=function(param,param$1){return 0};
var p_section$9=function(param,param$1){return 0};
var
 P_modules=
  [0,
   p_module$9,
   p_module_type$9,
   p_class$9,
   p_class_type$9,
   p_value$9,
   p_recfield$9,
   p_const$9,
   p_type$9,
   p_extension$9,
   p_exception$9,
   p_attribute$9,
   p_method$9,
   p_section$9];
var Search_modules=Search(P_modules);
var
 modules=
  function(l)
   {var $js=Search_modules[17];
    var l_ele=$js(l,0);
    var p=function(m1,m2){return "unknown primitive:caml_string_equal"};
    var
     iter=
      function(acc,param)
       {var $js$1=param;
        if($js$1)
         {var match=param[1];
          var $js$2=match;
          if($js$2==0)
           {var q=param[2];
            var m=match[1];
            var $js$3=List["exists"];
            var $js$4=p(m);
            var $js$5=$js$3($js$4,acc);
            if($js$5){return iter(acc,q)}else{return iter([0,m,acc],q)}}
          else
           {return iter(acc,param[2])}}
        else
         {return acc}};
    return iter(0,l_ele)};
var p_module$10=function(param,param$1){return [0,1,0]};
var p_module_type$10=function(param,param$1){return [0,1,1]};
var p_class$10=function(param,param$1){return [0,0,0]};
var p_class_type$10=function(param,param$1){return [0,0,0]};
var p_value$10=function(param,param$1){return 0};
var p_recfield$10=function(param,param$1,param$2){return 0};
var p_const$10=function(param,param$1,param$2){return 0};
var p_type$10=function(param,param$1){return [0,0,0]};
var p_extension$10=function(param,param$1){return 0};
var p_exception$10=function(param,param$1){return 0};
var p_attribute$10=function(param,param$1){return 0};
var p_method$10=function(param,param$1){return 0};
var p_section$10=function(param,param$1){return 0};
var
 P_module_types=
  [0,
   p_module$10,
   p_module_type$10,
   p_class$10,
   p_class_type$10,
   p_value$10,
   p_recfield$10,
   p_const$10,
   p_type$10,
   p_extension$10,
   p_exception$10,
   p_attribute$10,
   p_method$10,
   p_section$10];
var Search_module_types=Search(P_module_types);
var
 module_types=
  function(l)
   {var $js=Search_module_types[17];
    var l_ele=$js(l,0);
    var p=function(m1,m2){return "unknown primitive:caml_string_equal"};
    var
     iter=
      function(acc,param)
       {var $js$1=param;
        if($js$1)
         {var match=param[1];
          var $js$2=match;
          if($js$2==1)
           {var q=param[2];
            var m=match[1];
            var $js$3=List["exists"];
            var $js$4=p(m);
            var $js$5=$js$3($js$4,acc);
            if($js$5){return iter(acc,q)}else{return iter([0,m,acc],q)}}
          else
           {return iter(acc,param[2])}}
        else
         {return acc}};
    return iter(0,l_ele)};
var
 type_exists=
  function(mods,regexp)
   {var $js=Search_by_name[17];
    var l=$js(mods,regexp);
    var $js$1=List["exists"];
    return $js$1
            (function(param)
              {var $js$2=param;if($js$2==5){return 1}else{return 0}},
             l)};
var
 value_exists=
  function(mods,regexp)
   {var $js=Search_by_name[17];
    var l=$js(mods,regexp);
    var $js$1=List["exists"];
    return $js$1
            (function(param)
              {var $js$2=param;if($js$2==4){return 1}else{return 0}},
             l)};
var
 class_exists=
  function(mods,regexp)
   {var $js=Search_by_name[17];
    var l=$js(mods,regexp);
    var $js$1=List["exists"];
    return $js$1
            (function(param)
              {var $js$2=param;if($js$2==2){return 1}else{return 0}},
             l)};
var
 class_type_exists=
  function(mods,regexp)
   {var $js=Search_by_name[17];
    var l=$js(mods,regexp);
    var $js$1=List["exists"];
    return $js$1
            (function(param)
              {var $js$2=param;if($js$2==3){return 1}else{return 0}},
             l)};
var
 module_exists=
  function(mods,regexp)
   {var $js=Search_by_name[17];
    var l=$js(mods,regexp);
    var $js$1=List["exists"];
    return $js$1
            (function(param)
              {var $js$2=param;if($js$2==0){return 1}else{return 0}},
             l)};
var
 module_type_exists=
  function(mods,regexp)
   {var $js=Search_by_name[17];
    var l=$js(mods,regexp);
    var $js$1=List["exists"];
    return $js$1
            (function(param)
              {var $js$2=param;if($js$2==1){return 1}else{return 0}},
             l)};
var
 extension_exists=
  function(mods,regexp)
   {var $js=Search_by_name[17];
    var l=$js(mods,regexp);
    var $js$1=List["exists"];
    return $js$1
            (function(param)
              {var $js$2=param;if($js$2==6){return 1}else{return 0}},
             l)};
var
 exception_exists=
  function(mods,regexp)
   {var $js=Search_by_name[17];
    var l=$js(mods,regexp);
    var $js$1=List["exists"];
    return $js$1
            (function(param)
              {var $js$2=param;if($js$2==7){return 1}else{return 0}},
             l)};
var
 attribute_exists=
  function(mods,regexp)
   {var $js=Search_by_name[17];
    var l=$js(mods,regexp);
    var $js$1=List["exists"];
    return $js$1
            (function(param)
              {var $js$2=param;if($js$2==8){return 1}else{return 0}},
             l)};
var
 method_exists=
  function(mods,regexp)
   {var $js=Search_by_name[17];
    var l=$js(mods,regexp);
    var $js$1=List["exists"];
    return $js$1
            (function(param)
              {var $js$2=param;if($js$2==9){return 1}else{return 0}},
             l)};
var
 find_section=
  function(mods,regexp)
   {var $js=Search_by_name[17];
    var l=$js(mods,regexp);
    var $js$1=List["find"];
    var
     match=
      $js$1
       (function(param){var $js$2=param;if($js$2==10){return 1}else{return 0}},
        l);
    var $js$2=match;
    if($js$2==10){return match[2]}else{return "unknown primitive:raise"}};
module["exports"]=
{"unknown block:(function funarg/1779\n  (let (let/1780 = (apply Search/1213 funarg/1779))\n    (makeblock 0 (field 0 let/1780) (field 3 let/1780) (field 4 let/1780)\n      (field 5 let/1780) (field 6 let/1780) (field 7 let/1780)\n      (field 8 let/1780) (field 9 let/1780) (field 10 let/1780)\n      (field 11 let/1780) (field 12 let/1780) (field 13 let/1780)\n      (field 14 let/1780) (field 15 let/1780) (field 16 let/1780))))":
 unknown block:(function funarg/1779
  (let (let/1780 = (apply Search/1213 funarg/1779))
    (makeblock 0 (field 0 let/1780) (field 3 let/1780) (field 4 let/1780)
      (field 5 let/1780) (field 6 let/1780) (field 7 let/1780)
      (field 8 let/1780) (field 9 let/1780) (field 10 let/1780)
      (field 11 let/1780) (field 12 let/1780) (field 13 let/1780)
      (field 14 let/1780) (field 15 let/1780) (field 16 let/1780)))),
 "unknown block:(makeblock 0 (field 0 P_name/1261) (field 1 P_name/1261)\n  (field 2 P_name/1261) (field 3 P_name/1261) (field 4 P_name/1261)\n  (field 5 P_name/1261) (field 6 P_name/1261) (field 7 P_name/1261)\n  (field 8 P_name/1261) (field 9 P_name/1261) (field 10 P_name/1261)\n  (field 11 P_name/1261) (field 12 P_name/1261))":
 unknown block:(makeblock 0 (field 0 P_name/1261) (field 1 P_name/1261)
  (field 2 P_name/1261) (field 3 P_name/1261) (field 4 P_name/1261)
  (field 5 P_name/1261) (field 6 P_name/1261) (field 7 P_name/1261)
  (field 8 P_name/1261) (field 9 P_name/1261) (field 10 P_name/1261)
  (field 11 P_name/1261) (field 12 P_name/1261)),
 "unknown block:(makeblock 0 (field 0 Search_by_name/1279) (field 3 Search_by_name/1279)\n  (field 4 Search_by_name/1279) (field 5 Search_by_name/1279)\n  (field 6 Search_by_name/1279) (field 7 Search_by_name/1279)\n  (field 8 Search_by_name/1279) (field 9 Search_by_name/1279)\n  (field 10 Search_by_name/1279) (field 11 Search_by_name/1279)\n  (field 12 Search_by_name/1279) (field 13 Search_by_name/1279)\n  (field 14 Search_by_name/1279) (field 15 Search_by_name/1279)\n  (field 16 Search_by_name/1279))":
 unknown block:(makeblock 0 (field 0 Search_by_name/1279) (field 3 Search_by_name/1279)
  (field 4 Search_by_name/1279) (field 5 Search_by_name/1279)
  (field 6 Search_by_name/1279) (field 7 Search_by_name/1279)
  (field 8 Search_by_name/1279) (field 9 Search_by_name/1279)
  (field 10 Search_by_name/1279) (field 11 Search_by_name/1279)
  (field 12 Search_by_name/1279) (field 13 Search_by_name/1279)
  (field 14 Search_by_name/1279) (field 15 Search_by_name/1279)
  (field 16 Search_by_name/1279)),
 "values":values,
 "extensions":extensions,
 "exceptions":exceptions,
 "types":types,
 "attributes":attributes,
 "methods":methods,
 "classes":classes,
 "class_types":class_types,
 "modules":modules,
 "module_types":module_types,
 "type_exists":type_exists,
 "value_exists":value_exists,
 "module_exists":module_exists,
 "module_type_exists":module_type_exists,
 "class_exists":class_exists,
 "class_type_exists":class_type_exists,
 "extension_exists":extension_exists,
 "exception_exists":exception_exists,
 "attribute_exists":attribute_exists,
 "method_exists":method_exists,
 "find_section":find_section};
