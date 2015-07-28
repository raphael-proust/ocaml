var List=require("List");
var Obj=require("Obj");
var Array=require("Array");
var Map=require("Map");
var Sys=require("Sys");
var
 copy=
  function(o)
   {var $js="unknown primitive:caml_obj_dup";
    var o$1=$js;
    return "unknown primitive:caml_set_oo_id"};
var params=[0,1,1,1,3,16];
var step=Sys["word_size"]/16;
var initial_object_size=2;
var dummy_item=0;
var
 public_method_label=
  function(s)
   {var accu=[0,0];
    var $js=0;
    var $js$1=s["length"]-1;
    for(var i=$js;i<=$js$1;i++)
     {var $js$2=s[i];
      var $js$3=$js$2;
      var $js$4=223*accu[1]+$js$3;
      accu[1]=$js$4,0}
    accu[1]=accu[1]&(1<<31)-1,0;
    var $js$5=accu[1]>1073741823;
    if($js$5){var tag=accu[1]-(1<<31)}else{var tag=accu[1]}
    return tag};
var $js=Map["Make"];
var compare=function(x,y){return "unknown primitive:caml_string_compare"};
var $js$1=[0,compare];
var Vars=$js($js$1);
var $js$2=Map["Make"];
var compare$1=function(x,y){return "unknown primitive:caml_string_compare"};
var $js$3=[0,compare$1];
var Meths=$js$2($js$3);
var $js$4=Map["Make"];
var compare$2=function(x,y){return "unknown primitive:caml_int_compare"};
var $js$5=[0,compare$2];
var Labs=$js$4($js$5);
var dummy_table=[0,0,[dummy_item],Meths[1],Labs[1],0,0,Vars[1],0];
var table_count=[0,0];
var $js$6="unknown primitive:caml_obj_block";
var dummy_met=$js$6;
var
 fit_size=
  function(n)
   {var $js$7=n<=2;
    if($js$7){return n}else{var $js$8=fit_size((n+1)/2);return $js$8*2}};
var
 new_table=
  function(pub_labels)
   {table_count[0]++;
    var len=pub_labels["length"];
    var methods="unknown primitive:caml_make_vect";
    methods[0]=len,0;
    var $js$7=fit_size(len);
    var $js$8=$js$7*Sys["word_size"];
    var $js$9=$js$8/8;
    var $js$10=$js$9-1;
    var $js$11=$js$10;
    methods[1]=$js$11,0;
    var $js$12=0;
    var $js$13=len-1;
    for(var i=$js$12;i<=$js$13;i++)
     {var $js$14=pub_labels[i];var $js$15=$js$14;methods[i*2+3]=$js$15,0}
    return [0,initial_object_size,methods,Meths[1],Labs[1],0,0,Vars[1],0]};
var
 resize=
  function(array,new_size)
   {var old_size=array[2]["length"];
    var $js$7=new_size>old_size;
    if($js$7)
     {var new_buck="unknown primitive:caml_make_vect";
      var $js$8=Array["blit"];
      $js$8(array[2],0,new_buck,0,old_size);
      return array[2]=new_buck,0}
    else
     {return 0}};
var
 put=
  function(array,label,element)
   {resize(array,label+1);return array[2][label]=element,0};
var method_count=[0,0];
var inst_var_count=[0,0];
var
 new_method=
  function(table)
   {var index=table[2]["length"];resize(table,index+1);return index};
var
 get_method_label=
  function(table,name)
   {try
     {var $js$7=Meths[22];return $js$7(name,table[3])}
    catch(exn)
     {var $js$8=exn=Not_found;
      if($js$8)
       {var label=new_method(table);
        var $js$9=Meths[4];
        var $js$10=$js$9(name,label,table[3]);
        table[3]=$js$10,0;
        var $js$11=Labs[4];
        var $js$12=$js$11(label,1,table[4]);
        table[4]=$js$12,0;
        return label}
      else
       {return "unknown primitive:reraise"}}};
var
 get_method_labels=
  function(table,names)
   {var $js$7=Array["map"];
    var $js$8=get_method_label(table);
    return $js$7($js$8,names)};
var
 set_method=
  function(table,label,element)
   {method_count[0]++;
    var $js$7=Labs[22];
    var $js$8=$js$7(label,table[4]);
    if($js$8)
     {return put(table,label,element)}
    else
     {return table[6]=[0,[0,label,element],table[6]],0}};
var
 get_method=
  function(table,label)
   {try
     {var $js$7=List["assoc"];return $js$7(label,table[6])}
    catch(exn)
     {var $js$8=exn=Not_found;
      if($js$8)
       {return table[2][label]}
      else
       {return "unknown primitive:reraise"}}};
var
 to_list=
  function(arr)
   {var $js$7=arr=0;
    if($js$7){return 0}else{var $js$8=Array["to_list"];return $js$8(arr)}};
var
 narrow=
  function(table,vars,virt_meths,concr_meths)
   {var vars$1=to_list(vars);
    var virt_meths$1=to_list(virt_meths);
    var concr_meths$1=to_list(concr_meths);
    var $js$7=List["map"];
    var $js$8=get_method_label(table);
    var virt_meth_labs=$js$7($js$8,virt_meths$1);
    var $js$9=List["map"];
    var $js$10=get_method_label(table);
    var concr_meth_labs=$js$9($js$10,concr_meths$1);
    table[5]=
    [0,[0,table[3],table[4],table[6],table[7],virt_meth_labs,vars$1],table[5]],
    0;
    var $js$11=Vars[11];
    var
     $js$12=
      $js$11
       (function(lab,info,tvars)
         {var $js$13=List["mem"];
          var $js$14=$js$13(lab,vars$1);
          if($js$14)
           {var $js$15=Vars[4];return $js$15(lab,info,tvars)}
          else
           {return tvars}},
        table[7],
        Vars[1]);
    table[7]=$js$12,0;
    var by_name=[0,Meths[1]];
    var by_label=[0,Labs[1]];
    var $js$13=List["iter2"];
    $js$13
     (function(met,label)
       {var $js$14=Meths[4];
        var $js$15=$js$14(met,label,by_name[1]);
        by_name[1]=$js$15,0;
        var $js$16=Labs[4];
        try
         {var $js$17=Labs[22];var $js$18=$js$17(label,table[4])}
        catch(exn)
         {var $js$19=exn=Not_found;
          if($js$19){var $js$18=1}else{var $js$18="unknown primitive:reraise"}}
        var $js$20=$js$16(label,$js$18,by_label[1]);
        return by_label[1]=$js$20,0},
      concr_meths$1,
      concr_meth_labs);
    var $js$14=List["iter2"];
    $js$14
     (function(met,label)
       {var $js$15=Meths[4];
        var $js$16=$js$15(met,label,by_name[1]);
        by_name[1]=$js$16,0;
        var $js$17=Labs[4];
        var $js$18=$js$17(label,0,by_label[1]);
        return by_label[1]=$js$18,0},
      virt_meths$1,
      virt_meth_labs);
    table[3]=by_name[1],0;
    table[4]=by_label[1],0;
    var $js$15=List["fold_right"];
    var
     $js$16=
      $js$15
       (function(met,hm)
         {var lab=met[1];
          var $js$17=List["mem"];
          var $js$18=$js$17(lab,virt_meth_labs);
          if($js$18){return hm}else{return [0,met,hm]}},
        table[6],
        0);
    return table[6]=$js$16,0};
var
 widen=
  function(table)
   {var $js$7=List["hd"];
    var match=$js$7(table[5]);
    var vars=match[6];
    var virt_meths=match[5];
    var saved_vars=match[4];
    var saved_hidden_meths=match[3];
    var by_label=match[2];
    var by_name=match[1];
    var $js$8=List["tl"];
    var $js$9=$js$8(table[5]);
    table[5]=$js$9,0;
    var $js$10=List["fold_left"];
    var
     $js$11=
      $js$10
       (function(s,v)
         {var $js$12=Vars[4];
          var $js$13=Vars[22];
          var $js$14=$js$13(v,table[7]);
          return $js$12(v,$js$14,s)},
        saved_vars,
        vars);
    table[7]=$js$11,0;
    table[3]=by_name,0;
    table[4]=by_label,0;
    var $js$12=List["fold_right"];
    var
     $js$13=
      $js$12
       (function(met,hm)
         {var lab=met[1];
          var $js$14=List["mem"];
          var $js$15=$js$14(lab,virt_meths);
          if($js$15){return hm}else{return [0,met,hm]}},
        table[6],
        saved_hidden_meths);
    return table[6]=$js$13,0};
var
 new_slot=
  function(table){var index=table[1];table[1]=index+1,0;return index};
var
 new_variable=
  function(table,name)
   {try
     {var $js$7=Vars[22];return $js$7(name,table[7])}
    catch(exn)
     {var $js$8=exn=Not_found;
      if($js$8)
       {var index=new_slot(table);
        var $js$9="unknown primitive:caml_string_notequal";
        if($js$9)
         {var $js$10=Vars[4];
          var $js$11=$js$10(name,index,table[7]);
          table[7]=$js$11,0}
        else
         {}
        return index}
      else
       {return "unknown primitive:reraise"}}};
var
 to_array=
  function(arr)
   {var $js$7="unknown primitive:caml_equal";
    if($js$7){return []}else{return arr}};
var
 new_methods_variables=
  function(table,meths,vals)
   {var meths$1=to_array(meths);
    var nmeths=meths$1["length"];
    var nvals=vals["length"];
    var res="unknown primitive:caml_make_vect";
    var $js$7=0;
    var $js$8=nmeths-1;
    for(var i=$js$7;i<=$js$8;i++)
     {var $js$9=meths$1[i];
      var $js$10=get_method_label(table,$js$9);
      res[i]=$js$10,0}
    var $js$11=0;
    var $js$12=nvals-1;
    for(var i$1=$js$11;i$1<=$js$12;i$1++)
     {var $js$13=vals[i$1];
      var $js$14=new_variable(table,$js$13);
      res[i$1+nmeths]=$js$14,0}
    return res};
var
 get_variable=
  function(table,name)
   {try
     {var $js$7=Vars[22];return $js$7(name,table[7])}
    catch(exn)
     {var $js$8=exn=Not_found;
      if($js$8)
       {var $js$9=[0,Assert_failure,[0,"camlinternalOO.ml",280,50]];
        throw $js$9}
      else
       {return "unknown primitive:reraise"}}};
var
 get_variables=
  function(table,names)
   {var $js$7=Array["map"];
    var $js$8=get_variable(table);
    return $js$7($js$8,names)};
var add_initializer=function(table,f){return table[8]=[0,f,table[8]],0};
var
 create_table=
  function(public_methods)
   {var $js$7=public_methods=0;
    if($js$7)
     {return new_table([])}
    else
     {var $js$8=Array["map"];
      var tags=$js$8(public_method_label,public_methods);
      var table=new_table(tags);
      var $js$9=Array["iteri"];
      $js$9
       (function(i,met)
         {var lab=i*2+2;
          var $js$10=Meths[4];
          var $js$11=$js$10(met,lab,table[3]);
          table[3]=$js$11,0;
          var $js$12=Labs[4];
          var $js$13=$js$12(lab,1,table[4]);
          return table[4]=$js$13,0},
        public_methods);
      return table}};
var
 init_class=
  function(table)
   {inst_var_count[1]=inst_var_count[1]+table[1]-1,0;
    var $js$7=List["rev"];
    var $js$8=$js$7(table[8]);
    table[8]=$js$8,0;
    var $js$9=table[2][1];
    var $js$10=$js$9;
    var $js$11=$js$10*16;
    var $js$12=$js$11/Sys["word_size"];
    var $js$13=3+$js$12;
    return resize(table,$js$13)};
var
 inherits=
  function(cla,vals,virt_meths,concr_meths,param,top)
   {var env=param[4];
    var super=param[2];
    narrow(cla,vals,virt_meths,concr_meths);
    var $js$7=top;
    if($js$7)
     {var init=super(cla,env)}
    else
     {var $js$8=super(cla);var init=$js$8}
    widen(cla);
    var $js$9=Array["concat"];
    var $js$10=Array["map"];
    var $js$11=get_variable(cla);
    var $js$12=to_array(vals);
    var $js$13=$js$10($js$11,$js$12);
    var $js$14=$js$13;
    var $js$15=Array["map"];
    var $js$16=to_array(concr_meths);
    var
     $js$17=
      $js$15
       (function(nm)
         {var $js$18=get_method_label(cla,nm);
          var $js$19=get_method(cla,$js$18);
          return $js$19},
        $js$16);
    var $js$18=[0,$js$17,0];
    var $js$19=[0,$js$14,$js$18];
    var $js$20=[0,[init],$js$19];
    return $js$9($js$20)};
var
 make_class=
  function(pub_meths,class_init)
   {var table=create_table(pub_meths);
    var env_init=class_init(table);
    init_class(table);
    var $js$7=env_init(0);
    return [0,$js$7,class_init,env_init,0]};
var
 make_class_store=
  function(pub_meths,class_init,init_table)
   {var table=create_table(pub_meths);
    var env_init=class_init(table);
    init_class(table);
    init_table[2]=class_init,0;
    return init_table[1]=env_init,0};
var
 dummy_class=
  function(loc)
   {var
     undef=
      function(param)
       {var $js$7=[0,Undefined_recursive_module,loc];throw $js$7};
    return [0,undef,undef,undef,0]};
var
 create_object=
  function(table)
   {var obj="unknown primitive:caml_obj_block";
    obj[0]=table[2],0;
    var $js$7="unknown primitive:caml_set_oo_id";
    return $js$7};
var
 create_object_opt=
  function(obj_0,table)
   {var $js$7=obj_0;
    if($js$7)
     {return obj_0}
    else
     {var obj="unknown primitive:caml_obj_block";
      obj[0]=table[2],0;
      var $js$8="unknown primitive:caml_set_oo_id";
      return $js$8}};
var
 iter_f=
  function(obj,param)
   {var $js$7=param;
    if($js$7)
     {var l=param[2];var f=param[1];f(obj);return iter_f(obj,l)}
    else
     {return 0}};
var
 run_initializers=
  function(obj,table)
   {var inits=table[8];
    var $js$7=inits!=0;
    if($js$7){return iter_f(obj,inits)}else{return 0}};
var
 run_initializers_opt=
  function(obj_0,obj,table)
   {var $js$7=obj_0;
    if($js$7)
     {return obj}
    else
     {var inits=table[8];
      var $js$8=inits!=0;
      if($js$8){iter_f(obj,inits)}else{}
      return obj}};
var
 create_object_and_run_initializers=
  function(obj_0,table)
   {var $js$7=obj_0;
    if($js$7)
     {return obj_0}
    else
     {var obj=create_object(table);run_initializers(obj,table);return obj}};
var
 build_path=
  function(n,keys,tables)
   {var res=[0,0,0,0];
    var r=[0,res];
    var $js$7=0;
    var $js$8=n;
    for(var i=$js$7;i<=$js$8;i++)
     {var $js$9=keys[i];var $js$10=[0,$js$9,r[1],0];r[1]=$js$10,0}
    tables[2]=r[1],0;
    return res};
var
 lookup_keys=
  function(i,keys,tables)
   {var $js$7=i<0;
    if($js$7)
     {return tables}
    else
     {var key=keys[i];
      var
       lookup_key=
        function(tables$1)
         {var $js$8=tables$1[1]=key;
          if($js$8)
           {return lookup_keys(i-1,keys,tables$1[2])}
          else
           {var $js$9=tables$1[3]!=0;
            if($js$9)
             {return lookup_key(tables$1[3])}
            else
             {var next=[0,key,0,0];
              tables$1[3]=next,0;
              return build_path(i-1,keys,next)}}};
      return lookup_key(tables)}};
var
 lookup_tables=
  function(root,keys)
   {var root$1=root;
    var $js$7=root$1[2]!=0;
    if($js$7)
     {return lookup_keys(keys["length"]-1,keys,root$1[2])}
    else
     {return build_path(keys["length"]-1,keys,root$1)}};
var get_const=function(x){return function(obj){return x}};
var get_var=function(n){return function(obj){return obj[n]}};
var get_env=function(e,n){return function(obj){return obj[e][n]}};
var
 get_meth=
  function(n)
   {return function(obj){"unknown block:(sendself obj/1330 n/1329)"}};
var set_var=function(n){return function(obj,x){return obj[n]=x,0}};
var app_const=function(f,x){return function(obj){return f(x)}};
var app_var=function(f,n){return function(obj){return f(obj[n])}};
var app_env=function(f,e,n){return function(obj){return f(obj[e][n])}};
var
 app_meth=
  function(f,n)
   {return function(obj)
     {"unknown block:(sendself obj/1351 n/1350)";return f($js$7)}};
var app_const_const=function(f,x,y){return function(obj){return f(x,y)}};
var app_const_var=function(f,x,n){return function(obj){return f(x,obj[n])}};
var
 app_const_meth=
  function(f,x,n)
   {return function(obj)
     {"unknown block:(sendself obj/1366 n/1365)";return f(x,$js$7)}};
var app_var_const=function(f,n,x){return function(obj){return f(obj[n],x)}};
var
 app_meth_const=
  function(f,n,x)
   {return function(obj)
     {"unknown block:(sendself obj/1376 n/1374)";return f($js$7,x)}};
var
 app_const_env=
  function(f,x,e,n){return function(obj){return f(x,obj[e][n])}};
var
 app_env_const=
  function(f,e,n,x){return function(obj){return f(obj[e][n],x)}};
var
 meth_app_const=
  function(n,x)
   {return function(obj){"unknown block:(sendself obj/1392 n/1390 x/1391)"}};
var
 meth_app_var=
  function(n,m)
   {return function(obj)
     {"unknown block:(sendself obj/1396 n/1394 (array.unsafe_get obj/1396 m/1395))"}};
var
 meth_app_env=
  function(n,e,m)
   {return function(obj)
     {"unknown block:(sendself obj/1401 n/1398\n  (array.unsafe_get (id (array.unsafe_get obj/1401 e/1399)) m/1400))"}};
var
 meth_app_meth=
  function(n,m)
   {return function(obj)
     {"unknown block:(sendself obj/1405 n/1403 (sendself obj/1405 m/1404))"}};
var
 send_const=
  function(m,x,c){return function(obj){"unknown block:(send x/1408 m/1407)"}};
var
 send_var=
  function(m,n,c)
   {return function(obj)
     {"unknown block:(send (id (array.unsafe_get obj/1415 n/1413)) m/1412)"}};
var
 send_env=
  function(m,e,n,c)
   {return function(obj)
     {"unknown block:(send (id (array.unsafe_get (id (array.unsafe_get obj/1421 e/1418)) n/1419))\n  m/1417)"}};
var
 send_meth=
  function(m,n,c)
   {return function(obj)
     {"unknown block:(send (sendself obj/1426 n/1424) m/1423)"}};
var
 new_cache=
  function(table)
   {var n=new_method(table);
    var $js$7=table[2][1];
    var $js$8=$js$7;
    var $js$9=$js$8*16;
    var $js$10=$js$9/Sys["word_size"];
    var $js$11=2+$js$10;
    var $js$12=n>$js$11;
    var $js$13=((n%2)=0)||$js$12;
    if($js$13){var n$1=n}else{var n$1=new_method(table)}
    table[2][n$1]=0,0;
    return n$1};
var
 method_impl=
  function(table,i,arr)
   {var next=function(param){i[0]++;var $js$7=arr[i[1]];return $js$7};
    var clo=next(0);
    var $js$7="unknown primitive:isint";
    if($js$7)
     {var $js$8=clo;
      var $js$9=$js$8[0];
      if($js$9==0)
       {var x=next(0);return get_const(x)}
      else
       if($js$9==1)
        {var n=next(0);return get_var(n)}
       else
        if($js$9==2)
         {var e=next(0);var n$1=next(0);return get_env(e,n$1)}
        else
         if($js$9==3)
          {var n$2=next(0);return get_meth(n$2)}
         else
          if($js$9==4)
           {var n$3=next(0);return set_var(n$3)}
          else
           if($js$9==5)
            {var f=next(0);var x$1=next(0);return app_const(f,x$1)}
           else
            if($js$9==6)
             {var f$1=next(0);var n$4=next(0);return app_var(f$1,n$4)}
            else
             if($js$9==7)
              {var f$2=next(0);
               var e$1=next(0);
               var n$5=next(0);
               return app_env(f$2,e$1,n$5)}
             else
              if($js$9==8)
               {var f$3=next(0);var n$6=next(0);return app_meth(f$3,n$6)}
              else
               if($js$9==9)
                {var f$4=next(0);
                 var x$2=next(0);
                 var y=next(0);
                 return app_const_const(f$4,x$2,y)}
               else
                if($js$9==10)
                 {var f$5=next(0);
                  var x$3=next(0);
                  var n$7=next(0);
                  return app_const_var(f$5,x$3,n$7)}
                else
                 if($js$9==11)
                  {var f$6=next(0);
                   var x$4=next(0);
                   var e$2=next(0);
                   var n$8=next(0);
                   return app_const_env(f$6,x$4,e$2,n$8)}
                 else
                  if($js$9==12)
                   {var f$7=next(0);
                    var x$5=next(0);
                    var n$9=next(0);
                    return app_const_meth(f$7,x$5,n$9)}
                  else
                   if($js$9==13)
                    {var f$8=next(0);
                     var n$10=next(0);
                     var x$6=next(0);
                     return app_var_const(f$8,n$10,x$6)}
                   else
                    if($js$9==14)
                     {var f$9=next(0);
                      var e$3=next(0);
                      var n$11=next(0);
                      var x$7=next(0);
                      return app_env_const(f$9,e$3,n$11,x$7)}
                    else
                     if($js$9==15)
                      {var f$10=next(0);
                       var n$12=next(0);
                       var x$8=next(0);
                       return app_meth_const(f$10,n$12,x$8)}
                     else
                      if($js$9==16)
                       {var n$13=next(0);
                        var x$9=next(0);
                        return meth_app_const(n$13,x$9)}
                      else
                       if($js$9==17)
                        {var n$14=next(0);var m=next(0);return meth_app_var(n$14,m)}
                       else
                        if($js$9==18)
                         {var n$15=next(0);
                          var e$4=next(0);
                          var m$1=next(0);
                          return meth_app_env(n$15,e$4,m$1)}
                        else
                         if($js$9==19)
                          {var n$16=next(0);
                           var m$2=next(0);
                           return meth_app_meth(n$16,m$2)}
                         else
                          if($js$9==20)
                           {var m$3=next(0);
                            var x$10=next(0);
                            var $js$10=new_cache(table);
                            return send_const(m$3,x$10,$js$10)}
                          else
                           if($js$9==21)
                            {var m$4=next(0);
                             var n$17=next(0);
                             var $js$11=new_cache(table);
                             return send_var(m$4,n$17,$js$11)}
                           else
                            if($js$9==22)
                             {var m$5=next(0);
                              var e$5=next(0);
                              var n$18=next(0);
                              var $js$12=new_cache(table);
                              return send_env(m$5,e$5,n$18,$js$12)}
                            else
                             if($js$9==23)
                              {var m$6=next(0);
                               var n$19=next(0);
                               var $js$13=new_cache(table);
                               return send_meth(m$6,n$19,$js$13)}}
    else
     {return clo}};
var
 set_methods=
  function(table,methods)
   {var len=methods["length"];
    var i=[0,0];
    for(;;)
     {var $js$7=i[1]<len;
      if($js$7)
       {var label=methods[i[1]];
        var clo=method_impl(table,i,methods);
        set_method(table,label,clo);
        i[0]++}
      else
       break}
    return 0};
var
 stats=
  function(param){return [0,table_count[1],method_count[1],inst_var_count[1]]};
module["exports"]=
{"public_method_label":public_method_label,
 "new_method":new_method,
 "new_variable":new_variable,
 "new_methods_variables":new_methods_variables,
 "get_variable":get_variable,
 "get_variables":get_variables,
 "get_method_label":get_method_label,
 "get_method_labels":get_method_labels,
 "get_method":get_method,
 "set_method":set_method,
 "set_methods":set_methods,
 "narrow":narrow,
 "widen":widen,
 "add_initializer":add_initializer,
 "dummy_table":dummy_table,
 "create_table":create_table,
 "init_class":init_class,
 "inherits":inherits,
 "make_class":make_class,
 "make_class_store":make_class_store,
 "dummy_class":dummy_class,
 "copy":copy,
 "create_object":create_object,
 "create_object_opt":create_object_opt,
 "run_initializers":run_initializers,
 "run_initializers_opt":run_initializers_opt,
 "create_object_and_run_initializers":create_object_and_run_initializers,
 "lookup_tables":lookup_tables,
 "params":params,
 "stats":stats};
