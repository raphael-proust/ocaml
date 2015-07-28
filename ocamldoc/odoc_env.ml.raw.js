var Odoc_name=require("Odoc_name");
var Printtyp=require("Printtyp");
var List=require("List");
var Btype=require("Btype");
var Predef=require("Predef");
var Printf=require("Printf");
var Misc=require("Misc");
var Path=require("Path");
var empty=[0,0,0,0,0,0,0,0];
var
 add_signature=
  function(env,root,rel,signat)
   {var
     qualify=
      function(id)
       {var $js=Odoc_name["concat"];
        var $js$1=Odoc_name["from_ident"];
        var $js$2=$js$1(id);
        return $js(root,$js$2)};
    var
     rel_name=
      function(id)
       {var $js=Odoc_name["from_ident"];
        var n=$js(id);
        var $js$1=rel;
        if($js$1)
         {var $js$2=Odoc_name["concat"];return $js$2(rel[1],n)}
        else
         {return n}};
    var
     f=
      function(env$1,item)
       {var $js=item;
        if($js==0)
         {var ident=item[1];
          var newrecord="unknown primitive:duprecord regular 7";
          var $js$1=rel_name(ident);
          var $js$2=qualify(ident);
          var $js$3=[0,$js$1,$js$2];
          var $js$4=[0,$js$3,env$1[1]];
          newrecord[1]=$js$4,0;
          return newrecord}
        else
         if($js==1)
          {var ident$1=item[1];
           var newrecord$1="unknown primitive:duprecord regular 7";
           var $js$5=rel_name(ident$1);
           var $js$6=qualify(ident$1);
           var $js$7=[0,$js$5,$js$6];
           var $js$8=[0,$js$7,env$1[2]];
           newrecord$1[2]=$js$8,0;
           return newrecord$1}
         else
          if($js==2)
           {var ident$2=item[1];
            var newrecord$2="unknown primitive:duprecord regular 7";
            var $js$9=rel_name(ident$2);
            var $js$10=qualify(ident$2);
            var $js$11=[0,$js$9,$js$10];
            var $js$12=[0,$js$11,env$1[7]];
            newrecord$2[7]=$js$12,0;
            return newrecord$2}
          else
           if($js==3)
            {var ident$3=item[1];
             var match=item[2][1];
             var $js$13=match;
             if($js$13==1)
              {var $js$14=qualify(ident$3);
               var $js$15=rel_name(ident$3);
               var $js$16=[0,$js$15];
               var env2=add_signature(env$1,$js$14,$js$16,match[1])}
             else
              {var env2=env$1}
             var newrecord$3="unknown primitive:duprecord regular 7";
             var $js$17=rel_name(ident$3);
             var $js$18=qualify(ident$3);
             var $js$19=[0,$js$17,$js$18];
             var $js$20=[0,$js$19,env2[5]];
             newrecord$3[5]=$js$20,0;
             return newrecord$3}
           else
            if($js==4)
             {var ident$4=item[1];
              var match$1=item[2][1];
              var $js$21=match$1;
              if($js$21)
               {var modtype=match$1[1];
                var $js$22=modtype;
                if($js$22==1)
                 {var $js$23=qualify(ident$4);
                  var $js$24=rel_name(ident$4);
                  var $js$25=[0,$js$24];
                  var env2$1=add_signature(env$1,$js$23,$js$25,modtype[1])}
                else
                 {var env2$1=env$1}}
              else
               {var env2$1=env$1}
              var newrecord$4="unknown primitive:duprecord regular 7";
              var $js$26=rel_name(ident$4);
              var $js$27=qualify(ident$4);
              var $js$28=[0,$js$26,$js$27];
              var $js$29=[0,$js$28,env2$1[6]];
              newrecord$4[6]=$js$29,0;
              return newrecord$4}
            else
             if($js==5)
              {var ident$5=item[1];
               var newrecord$5="unknown primitive:duprecord regular 7";
               var $js$30=rel_name(ident$5);
               var $js$31=qualify(ident$5);
               var $js$32=[0,$js$30,$js$31];
               var $js$33=[0,$js$32,env$1[4]];
               newrecord$5[4]=$js$33,0;
               return newrecord$5}
             else
              if($js==6)
               {var ident$6=item[1];
                var newrecord$6="unknown primitive:duprecord regular 7";
                var $js$34=rel_name(ident$6);
                var $js$35=qualify(ident$6);
                var $js$36=[0,$js$34,$js$35];
                var $js$37=[0,$js$36,env$1[3]];
                newrecord$6[3]=$js$37,0;
                return newrecord$6}};
    var $js=List["fold_left"];
    return $js(f,env,signat)};
var
 add_extension=
  function(env,full_name)
   {var $js=Odoc_name["simple"];
    var simple_name=$js(full_name);
    var newrecord="unknown primitive:duprecord regular 7";
    newrecord[7]=[0,[0,simple_name,full_name],env[7]],0;
    return newrecord};
var
 add_type=
  function(env,full_name)
   {var $js=Odoc_name["simple"];
    var simple_name=$js(full_name);
    var newrecord="unknown primitive:duprecord regular 7";
    newrecord[2]=[0,[0,simple_name,full_name],env[2]],0;
    return newrecord};
var
 add_value=
  function(env,full_name)
   {var $js=Odoc_name["simple"];
    var simple_name=$js(full_name);
    var newrecord="unknown primitive:duprecord regular 7";
    newrecord[1]=[0,[0,simple_name,full_name],env[1]],0;
    return newrecord};
var
 add_module=
  function(env,full_name)
   {var $js=Odoc_name["simple"];
    var simple_name=$js(full_name);
    var newrecord="unknown primitive:duprecord regular 7";
    newrecord[5]=[0,[0,simple_name,full_name],env[5]],0;
    return newrecord};
var
 add_module_type=
  function(env,full_name)
   {var $js=Odoc_name["simple"];
    var simple_name=$js(full_name);
    var newrecord="unknown primitive:duprecord regular 7";
    newrecord[6]=[0,[0,simple_name,full_name],env[6]],0;
    return newrecord};
var
 add_class=
  function(env,full_name)
   {var $js=Odoc_name["simple"];
    var simple_name=$js(full_name);
    return [0,
            env[1],
            [0,[0,simple_name,full_name],env[2]],
            env[3],
            [0,[0,simple_name,full_name],env[4]],
            env[5],
            env[6],
            env[7]]};
var
 add_class_type=
  function(env,full_name)
   {var $js=Odoc_name["simple"];
    var simple_name=$js(full_name);
    return [0,
            env[1],
            [0,[0,simple_name,full_name],env[2]],
            [0,[0,simple_name,full_name],env[3]],
            env[4],
            env[5],
            env[6],
            env[7]]};
var
 full_module_name=
  function(env,n)
   {try
     {var $js=List["assoc"];return $js(n,env[5])}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1){return n}else{return "unknown primitive:reraise"}}};
var
 full_module_type_name=
  function(env,n)
   {try
     {var $js=List["assoc"];return $js(n,env[6])}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1){return n}else{return "unknown primitive:reraise"}}};
var
 full_module_or_module_type_name=
  function(env,n)
   {try
     {var $js=List["assoc"];return $js(n,env[5])}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1)
       {return full_module_type_name(env,n)}
      else
       {return "unknown primitive:reraise"}}};
var
 full_type_name=
  function(env,n)
   {try
     {var $js=List["assoc"];return $js(n,env[2])}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1){return n}else{return "unknown primitive:reraise"}}};
var
 full_value_name=
  function(env,n)
   {try
     {var $js=List["assoc"];return $js(n,env[1])}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1){return n}else{return "unknown primitive:reraise"}}};
var
 full_extension_constructor_name=
  function(env,n)
   {try
     {var $js=List["assoc"];return $js(n,env[7])}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1){return n}else{return "unknown primitive:reraise"}}};
var
 full_class_name=
  function(env,n)
   {try
     {var $js=List["assoc"];return $js(n,env[4])}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1){return n}else{return "unknown primitive:reraise"}}};
var
 full_class_type_name=
  function(env,n)
   {try
     {var $js=List["assoc"];return $js(n,env[3])}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1){return n}else{return "unknown primitive:reraise"}}};
var
 full_class_or_class_type_name=
  function(env,n)
   {try
     {var $js=List["assoc"];return $js(n,env[4])}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1)
       {return full_class_type_name(env,n)}
      else
       {return "unknown primitive:reraise"}}};
var
 print_env_types=
  function(env)
   {var $js=List["iter"];
    return $js
            (function(param)
              {var $js$1=Printf["printf"];
               return $js$1
                       ([0,[2,0,[11," = ",[2,0,[12,10,0]]]],"%s = %s\n"],
                        param[1],
                        param[2])},
             env[2])};
var
 subst_type=
  function(env,t)
   {var $js=Printtyp["mark_loops"];
    $js(t);
    var deja_vu=[0,0];
    var
     iter=
      function(t$1)
       {var $js$1=List["memq"];
        var $js$2=$js$1(t$1,deja_vu[1]);
        if($js$2)
         {return 0}
        else
         {deja_vu[1]=[0,t$1,deja_vu[1]],0;
          var $js$3=Btype["iter_type_expr"];
          $js$3(iter,t$1);
          var match=t$1[1];
          var $js$4=match;
          if(typeof $js$4=="number")
           {"unknown block:match/1165"}
          else
           {var $js$5=$js$4[0];
            if($js$5==3)
             {var l=match[2];
              var p=match[1];
              var $js$6=l;
              if($js$6)
               {var $js$7=l[2];
                if($js$7)
                 {var exit=15}
                else
                 {var $js$8=Path["same"];
                  var $js$9=$js$8(p,Predef["path_option"]);
                  if($js$9){return 0}else{var exit=15}}}
              else
               {var exit=15}
              switch(exit)
               {case 15:
                 var $js$10=Odoc_name["to_path"];
                 var $js$11=Odoc_name["from_path"];
                 var $js$12=$js$11(p);
                 var $js$13=full_type_name(env,$js$12);
                 var new_p=$js$10($js$13);
                 return t$1[1]=[3,new_p,l,match[3]],0
                }}
            else
             if($js$5==4)
              {var r=match[2];
               var match$1=r[1];
               var $js$14=match$1;
               if($js$14)
                {var match$2=match$1[1];
                 var $js$15=Odoc_name["to_path"];
                 var $js$16=Odoc_name["from_path"];
                 var $js$17=$js$16(match$2[1]);
                 var $js$18=full_type_name(env,$js$17);
                 var new_p$1=$js$15($js$18);
                 return r[1]=[0,[0,new_p$1,match$2[2]]],0}
               else
                {var exit$1=14}}
             else
              if($js$5==8)
               {var row=match[1];
                var match$3=row[6];
                var $js$19=match$3;
                if($js$19)
                 {var match$4=match$3[1];
                  var $js$20=Odoc_name["to_path"];
                  var $js$21=Odoc_name["from_path"];
                  var $js$22=$js$21(match$4[1]);
                  var $js$23=full_type_name(env,$js$22);
                  var new_p$2=$js$20($js$23);
                  var newrecord="unknown primitive:duprecord regular 6";
                  newrecord[6]=[0,[0,new_p$2,match$4[2]]],0;
                  var $js$24=newrecord;
                  var $js$25=[8,$js$24];
                  return t$1[1]=$js$25,0}
                else
                 {var exit$1=14}}
              else
               if($js$5==11)
                {var $js$26=Odoc_name["to_path"];
                 var $js$27=Odoc_name["from_path"];
                 var $js$28=$js$27(match[1]);
                 var $js$29=full_module_type_name(env,$js$28);
                 var new_p$3=$js$26($js$29);
                 return t$1[1]=[11,new_p$3,match[2],match[3]],0}
               else
                {var exit$1=14}}
          switch(exit$1){case 14:return 0}}};
    iter(t);
    return t};
var
 subst_module_type=
  function(env,t)
   {var
     iter=
      function(t$1)
       {var $js=t$1;
        if($js==0)
         {var $js$1=Odoc_name["to_path"];
          var $js$2=Odoc_name["from_path"];
          var $js$3=$js$2(t$1[1]);
          var $js$4=full_module_type_name(env,$js$3);
          var new_p=$js$1($js$4);
          return [0,new_p]}
        else
         if($js==1)
          {var exit=8}
         else
          if($js==2)
           {var $js$5=Misc["may_map"];
            var $js$6=$js$5(iter,t$1[2]);
            var $js$7=iter(t$1[3]);
            return [2,t$1[1],$js$6,$js$7]}
          else
           if($js==3){var exit=8}
        switch(exit){case 8:return t$1}};
    return iter(t)};
var
 subst_class_type=
  function(env,t)
   {var
     iter=
      function(t$1)
       {var $js=t$1;
        if($js==0)
         {var $js$1=Odoc_name["to_path"];
          var $js$2=Odoc_name["from_path"];
          var $js$3=$js$2(t$1[1]);
          var $js$4=full_type_name(env,$js$3);
          var new_p=$js$1($js$4);
          var $js$5=List["map"];
          var $js$6=subst_type(env);
          var new_texp_list=$js$5($js$6,t$1[2]);
          var new_ct=iter(t$1[3]);
          return [0,new_p,new_texp_list,new_ct]}
        else
         if($js==1)
          {return t$1}
         else
          if($js==2)
           {var new_texp=subst_type(env,t$1[2]);
            var new_ct$1=iter(t$1[3]);
            return [2,t$1[1],new_texp,new_ct$1]}};
    return iter(t)};
module["exports"]=
{"empty":empty,
 "add_signature":add_signature,
 "add_extension":add_extension,
 "add_type":add_type,
 "add_value":add_value,
 "add_module":add_module,
 "add_module_type":add_module_type,
 "add_class":add_class,
 "add_class_type":add_class_type,
 "full_module_name":full_module_name,
 "full_module_type_name":full_module_type_name,
 "full_module_or_module_type_name":full_module_or_module_type_name,
 "full_type_name":full_type_name,
 "full_value_name":full_value_name,
 "full_extension_constructor_name":full_extension_constructor_name,
 "full_class_name":full_class_name,
 "full_class_type_name":full_class_type_name,
 "full_class_or_class_type_name":full_class_or_class_type_name,
 "subst_type":subst_type,
 "subst_module_type":subst_module_type,
 "subst_class_type":subst_class_type};
