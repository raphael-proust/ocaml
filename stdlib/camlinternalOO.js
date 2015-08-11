// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Obj=require("Obj");
var Map=require("Map");
var $$Array=require("Array");
var Sys=require("Sys");


var
 copy=
  function(o)
   {var o$1="unknown primitive:caml_obj_dup";
    
    return "unknown primitive:caml_set_oo_id";
    };

var params=/* record */[0,/* true */1,/* true */1,/* true */1,3,16];

var step=Sys["word_size"]/16;

var initial_object_size=2;


var dummy_item=/* () */0;


var
 public_method_label=
  function(s)
   {var accu=[0,0];
    
    for(var i=0;i<=s["length"]-1;i++){accu[1]=223*accu[1]+s[i],0}
    
    accu[1]=accu[1]&(1<<31)-1,0;
    if(accu[1]>1073741823){var tag=accu[1]-(1<<31);}else{var tag=accu[1];}
    
    return tag;
    };

var compare=function(x,y){return "unknown primitive:caml_string_compare";};

var Vars=Map["Make"]([0,compare]);

var compare$1=function(x,y){return "unknown primitive:caml_string_compare";};

var Meths=Map["Make"]([0,compare$1]);

var compare$2=function(x,y){return "unknown primitive:caml_int_compare";};

var Labs=Map["Make"]([0,compare$2]);

var
 dummy_table=
  /* record */[0,
   0,
   [dummy_item],
   Meths[1],
   Labs[1],
   /* [] */0,
   /* [] */0,
   Vars[1],
   /* [] */0];

var table_count=[0,0];

var dummy_met="unknown primitive:caml_obj_block";

var
 fit_size=
  function(n){if(n<=2){return n;}else{return fit_size((n+1)/2)*2;}};

var
 new_table=
  function(pub_labels)
   {table_count[0]++;
    var len=pub_labels["length"];
    
    var methods="unknown primitive:caml_make_vect";
    
    methods[0]=len,0;
    methods[1]=fit_size(len)*Sys["word_size"]/8-1,0;
    for(var i=0;i<=len-1;i++){methods[i*2+3]=pub_labels[i],0}
    
    return /* record */[0,
            initial_object_size,
            methods,
            Meths[1],
            Labs[1],
            /* [] */0,
            /* [] */0,
            Vars[1],
            /* [] */0];
    };

var
 resize=
  function(array,new_size)
   {var old_size=array[2]["length"];
    
    if(new_size>old_size)
     {var new_buck="unknown primitive:caml_make_vect";
      
      $$Array["blit"](array[2],0,new_buck,0,old_size);
      return array[2]=new_buck,0;
      }
    else
     {return 0;}
    };

var
 put=
  function(array,label,element)
   {resize(array,label+1);return array[2][label]=element,0;};

var method_count=[0,0];

var inst_var_count=[0,0];

var
 new_method=
  function(table)
   {var index=table[2]["length"];resize(table,index+1);return index;};

var
 get_method_label=
  function(table,name)
   {try
     {return Meths[22](name,table[3]);}
    catch(exn)
     {if(exn=Not_found)
       {var label=new_method(table);
        
        table[3]=Meths[4](name,label,table[3]),0;
        table[4]=Labs[4](label,/* true */1,table[4]),0;
        return label;
        }
      else
       {throw exn;}
      }
    };

var
 get_method_labels=
  function(table,names){return $$Array["map"](get_method_label(table),names);};

var
 set_method=
  function(table,label,element)
   {method_count[0]++;
    if(Labs[22](label,table[4]))
     {return put(table,label,element);}
    else
     {return table[6]=/* :: */[0,/* tuple */[0,label,element],table[6]],0;}
    };

var
 get_method=
  function(table,label)
   {try
     {return List["assoc"](label,table[6]);}
    catch(exn){if(exn=Not_found){return table[2][label];}else{throw exn;}}
    };

var
 to_list=
  function(arr)
   {if(arr=0){return /* [] */0;}else{return $$Array["to_list"](arr);}};

var
 narrow=
  function(table,vars,virt_meths,concr_meths)
   {var vars$1=to_list(vars);
    
    var virt_meths$1=to_list(virt_meths);
    
    var concr_meths$1=to_list(concr_meths);
    
    var virt_meth_labs=List["map"](get_method_label(table),virt_meths$1);
    
    var concr_meth_labs=List["map"](get_method_label(table),concr_meths$1);
    
    table[5]=
    /* :: */[0,
     /* tuple */[0,table[3],table[4],table[6],table[7],virt_meth_labs,vars$1],
     table[5]],
    0;
    table[7]=
    Vars[11]
     (function(lab,info,tvars)
       {if(List["mem"](lab,vars$1))
         {return Vars[4](lab,info,tvars);}
        else
         {return tvars;}
        },
      table[7],
      Vars[1]),
    0;
    var by_name=[0,Meths[1]];
    
    var by_label=[0,Labs[1]];
    
    List["iter2"]
     (function(met,label)
       {by_name[1]=Meths[4](met,label,by_name[1]),0;
        var $js;
        try
         {$js=Labs[22](label,table[4]);}
        catch(exn){if(exn=Not_found){$js=/* true */1;}else{throw exn;}}
        return by_label[1]=Labs[4](label,$js,by_label[1]),0;
        },
      concr_meths$1,
      concr_meth_labs);
    List["iter2"]
     (function(met,label)
       {by_name[1]=Meths[4](met,label,by_name[1]),0;
        return by_label[1]=Labs[4](label,/* false */0,by_label[1]),0;
        },
      virt_meths$1,
      virt_meth_labs);
    table[3]=by_name[1],0;
    table[4]=by_label[1],0;
    return table[6]=
           List["fold_right"]
            (function(met,hm)
              {var lab=met[1];
               
               if(List["mem"](lab,virt_meth_labs))
                {return hm;}
               else
                {return /* :: */[0,met,hm];}
               },
             table[6],
             /* [] */0),
           0;
    };

var
 widen=
  function(table)
   {var match=List["hd"](table[5]);
    
    var vars=match[6];
    
    var virt_meths=match[5];
    
    var saved_vars=match[4];
    
    var saved_hidden_meths=match[3];
    
    var by_label=match[2];
    
    var by_name=match[1];
    
    table[5]=List["tl"](table[5]),0;
    table[7]=
    List["fold_left"]
     (function(s,v){return Vars[4](v,Vars[22](v,table[7]),s);},
      saved_vars,
      vars),
    0;
    table[3]=by_name,0;
    table[4]=by_label,0;
    return table[6]=
           List["fold_right"]
            (function(met,hm)
              {var lab=met[1];
               
               if(List["mem"](lab,virt_meths))
                {return hm;}
               else
                {return /* :: */[0,met,hm];}
               },
             table[6],
             saved_hidden_meths),
           0;
    };

var
 new_slot=
  function(table){var index=table[1];table[1]=index+1,0;return index;};

var
 new_variable=
  function(table,name)
   {try
     {return Vars[22](name,table[7]);}
    catch(exn)
     {if(exn=Not_found)
       {var index=new_slot(table);
        
        if("unknown primitive:caml_string_notequal")
         {table[7]=Vars[4](name,index,table[7]),0}
        else
         {}
        
        return index;
        }
      else
       {throw exn;}
      }
    };

var
 to_array=
  function(arr)
   {if("unknown primitive:caml_equal"){return [];}else{return arr;}};

var
 new_methods_variables=
  function(table,meths,vals)
   {var meths$1=to_array(meths);
    
    var nmeths=meths$1["length"];
    
    var nvals=vals["length"];
    
    var res="unknown primitive:caml_make_vect";
    
    for(var i=0;i<=nmeths-1;i++){res[i]=get_method_label(table,meths$1[i]),0}
    
    for(var i$1=0;i$1<=nvals-1;i$1++)
     {res[i$1+nmeths]=new_variable(table,vals[i$1]),0}
    
    return res;
    };

var
 get_variable=
  function(table,name)
   {try
     {return Vars[22](name,table[7]);}
    catch(exn)
     {if(exn=Not_found)
       {throw [0,Assert_failure,[0,"camlinternalOO.ml",280,50]];}
      else
       {throw exn;}
      }
    };

var
 get_variables=
  function(table,names){return $$Array["map"](get_variable(table),names);};

var
 add_initializer=
  function(table,f){return table[8]=/* :: */[0,f,table[8]],0;};

var
 create_table=
  function(public_methods)
   {if(public_methods=0)
     {return new_table([]);}
    else
     {var tags=$$Array["map"](public_method_label,public_methods);
      
      var table=new_table(tags);
      
      $$Array["iteri"]
       (function(i,met)
         {var lab=i*2+2;
          
          table[3]=Meths[4](met,lab,table[3]),0;
          return table[4]=Labs[4](lab,/* true */1,table[4]),0;
          },
        public_methods);
      return table;
      }
    };

var
 init_class=
  function(table)
   {inst_var_count[1]=inst_var_count[1]+table[1]-1,0;
    table[8]=List["rev"](table[8]),0;
    return resize(table,3+table[2][1]*16/Sys["word_size"]);
    };

var
 inherits=
  function(cla,vals,virt_meths,concr_meths,param,top)
   {var env=param[4];
    
    var $$super=param[2];
    
    narrow(cla,vals,virt_meths,concr_meths);
    if(top){var init=$$super(cla,env);}else{var init=$$super(cla);}
    
    widen(cla);
    return $$Array["concat"]
            (/* :: */[0,
              [init],
              /* :: */[0,
               $$Array["map"](get_variable(cla),to_array(vals)),
               /* :: */[0,
                $$Array["map"]
                 (function(nm)
                   {return get_method(cla,get_method_label(cla,nm));},
                  to_array(concr_meths)),
                /* [] */0]]]);
    };

var
 make_class=
  function(pub_meths,class_init)
   {var table=create_table(pub_meths);
    
    var env_init=class_init(table);
    
    init_class(table);
    return /* tuple */[0,env_init(0),class_init,env_init,0];
    };

var
 make_class_store=
  function(pub_meths,class_init,init_table)
   {var table=create_table(pub_meths);
    
    var env_init=class_init(table);
    
    init_class(table);
    init_table[2]=class_init,0;
    return init_table[1]=env_init,0;
    };

var
 dummy_class=
  function(loc)
   {var undef=function(param){throw [0,Undefined_recursive_module,loc];};
    
    return /* tuple */[0,undef,undef,undef,0];
    };

var
 create_object=
  function(table)
   {var obj="unknown primitive:caml_obj_block";
    
    obj[0]=table[2],0;
    return "unknown primitive:caml_set_oo_id";
    };

var
 create_object_opt=
  function(obj_0,table)
   {if(obj_0)
     {return obj_0;}
    else
     {var obj="unknown primitive:caml_obj_block";
      
      obj[0]=table[2],0;
      return "unknown primitive:caml_set_oo_id";
      }
    };

var
 iter_f=
  function(obj,param)
   {if(param)
     {var l=param[2];var f=param[1];f(obj);return iter_f(obj,l);}
    else
     {return /* () */0;}
    };

var
 run_initializers=
  function(obj,table)
   {var inits=table[8];
    
    if(inits!=/* [] */0){return iter_f(obj,inits);}else{return 0;}
    };

var
 run_initializers_opt=
  function(obj_0,obj,table)
   {if(obj_0)
     {return obj;}
    else
     {var inits=table[8];
      
      if(inits!=/* [] */0){iter_f(obj,inits)}else{}
      
      return obj;
      }
    };

var
 create_object_and_run_initializers=
  function(obj_0,table)
   {if(obj_0)
     {return obj_0;}
    else
     {var obj=create_object(table);run_initializers(obj,table);return obj;}
    };

var
 build_path=
  function(n,keys,tables)
   {var res=/* record */[0,0,/* Empty */0,/* Empty */0];
    
    var r=[0,res];
    
    for(var i=0;i<=n;i++){r[1]=/* Cons */[0,keys[i],r[1],/* Empty */0],0}
    
    tables[2]=r[1],0;
    return res;
    };

var
 lookup_keys=
  function(i,keys,tables)
   {if(i<0)
     {return tables;}
    else
     {var key=keys[i];
      
      var
       lookup_key=
        function(tables$1)
         {if(tables$1[1]=key)
           {return lookup_keys(i-1,keys,tables$1[2]);}
          else
           {if(tables$1[3]!=/* Empty */0)
             {return lookup_key(tables$1[3]);}
            else
             {var next=/* Cons */[0,key,/* Empty */0,/* Empty */0];
              
              tables$1[3]=next,0;
              return build_path(i-1,keys,next);
              }
            }
          };
      
      return lookup_key(tables);
      }
    };

var
 lookup_tables=
  function(root,keys)
   {var root$1=root;
    
    if(root$1[2]!=/* Empty */0)
     {return lookup_keys(keys["length"]-1,keys,root$1[2]);}
    else
     {return build_path(keys["length"]-1,keys,root$1);}
    };

var get_const=function(x){return function(obj){return x;};};

var get_var=function(n){return function(obj){return obj[n];};};

var get_env=function(e,n){return function(obj){return obj[e][n];};};

var
 get_meth=
  function(n)
   {return function(obj){"unknown block:(sendself obj/1330 n/1329)";};};

var set_var=function(n){return function(obj,x){return obj[n]=x,0;};};

var app_const=function(f,x){return function(obj){return f(x);};};

var app_var=function(f,n){return function(obj){return f(obj[n]);};};

var app_env=function(f,e,n){return function(obj){return f(obj[e][n]);};};

var
 app_meth=
  function(f,n)
   {return function(obj)
     {"unknown block:(sendself obj/1351 n/1350)";return f(0);};
    };

var app_const_const=function(f,x,y){return function(obj){return f(x,y);};};

var app_const_var=function(f,x,n){return function(obj){return f(x,obj[n]);};};

var
 app_const_meth=
  function(f,x,n)
   {return function(obj)
     {"unknown block:(sendself obj/1366 n/1365)";return f(x,0);};
    };

var app_var_const=function(f,n,x){return function(obj){return f(obj[n],x);};};

var
 app_meth_const=
  function(f,n,x)
   {return function(obj)
     {"unknown block:(sendself obj/1376 n/1374)";return f(0,x);};
    };

var
 app_const_env=
  function(f,x,e,n){return function(obj){return f(x,obj[e][n]);};};

var
 app_env_const=
  function(f,e,n,x){return function(obj){return f(obj[e][n],x);};};

var
 meth_app_const=
  function(n,x)
   {return function(obj){"unknown block:(sendself obj/1392 n/1390 x/1391)";};};

var
 meth_app_var=
  function(n,m)
   {return function(obj)
     {"unknown block:(sendself obj/1396 n/1394 (array.unsafe_get obj/1396 m/1395))";
      };
    };

var
 meth_app_env=
  function(n,e,m)
   {return function(obj)
     {"unknown block:(sendself obj/1401 n/1398\n  (array.unsafe_get (id (array.unsafe_get obj/1401 e/1399)) m/1400))";
      };
    };

var
 meth_app_meth=
  function(n,m)
   {return function(obj)
     {"unknown block:(sendself obj/1405 n/1403 (sendself obj/1405 m/1404))";};
    };

var
 send_const=
  function(m,x,c)
   {return function(obj){"unknown block:(send x/1408 m/1407)";};};

var
 send_var=
  function(m,n,c)
   {return function(obj)
     {"unknown block:(send (id (array.unsafe_get obj/1415 n/1413)) m/1412)";};
    };

var
 send_env=
  function(m,e,n,c)
   {return function(obj)
     {"unknown block:(send (id (array.unsafe_get (id (array.unsafe_get obj/1421 e/1418)) n/1419))\n  m/1417)";
      };
    };

var
 send_meth=
  function(m,n,c)
   {return function(obj)
     {"unknown block:(send (sendself obj/1426 n/1424) m/1423)";};
    };

var
 new_cache=
  function(table)
   {var n=new_method(table);
    
    if(((n%2)=0)||n>2+table[2][1]*16/Sys["word_size"])
     {var n$1=n;}
    else
     {var n$1=new_method(table);}
    
    table[2][n$1]=0,0;
    return n$1;
    };

var
 method_impl=
  function(table,i,arr)
   {var next=function(param){i[0]++;return arr[i[1]];};
    
    var clo=next(/* () */0);
    
    if("unknown primitive:isint")
     {switch(clo[0])
       {case 0:var x=next(/* () */0);return get_const(x);
        case 1:var n=next(/* () */0);return get_var(n);
        case 2:
         var e=next(/* () */0);var n$1=next(/* () */0);return get_env(e,n$1);
        case 3:var n$2=next(/* () */0);return get_meth(n$2);
        case 4:var n$3=next(/* () */0);return set_var(n$3);
        case 5:
         var f=next(/* () */0);
         
         var x$1=next(/* () */0);
         
         return app_const(f,x$1);
         
        case 6:
         var f$1=next(/* () */0);
         
         var n$4=next(/* () */0);
         
         return app_var(f$1,n$4);
         
        case 7:
         var f$2=next(/* () */0);
         
         var e$1=next(/* () */0);
         
         var n$5=next(/* () */0);
         
         return app_env(f$2,e$1,n$5);
         
        case 8:
         var f$3=next(/* () */0);
         
         var n$6=next(/* () */0);
         
         return app_meth(f$3,n$6);
         
        case 9:
         var f$4=next(/* () */0);
         
         var x$2=next(/* () */0);
         
         var y=next(/* () */0);
         
         return app_const_const(f$4,x$2,y);
         
        case 10:
         var f$5=next(/* () */0);
         
         var x$3=next(/* () */0);
         
         var n$7=next(/* () */0);
         
         return app_const_var(f$5,x$3,n$7);
         
        case 11:
         var f$6=next(/* () */0);
         
         var x$4=next(/* () */0);
         
         var e$2=next(/* () */0);
         
         var n$8=next(/* () */0);
         
         return app_const_env(f$6,x$4,e$2,n$8);
         
        case 12:
         var f$7=next(/* () */0);
         
         var x$5=next(/* () */0);
         
         var n$9=next(/* () */0);
         
         return app_const_meth(f$7,x$5,n$9);
         
        case 13:
         var f$8=next(/* () */0);
         
         var n$10=next(/* () */0);
         
         var x$6=next(/* () */0);
         
         return app_var_const(f$8,n$10,x$6);
         
        case 14:
         var f$9=next(/* () */0);
         
         var e$3=next(/* () */0);
         
         var n$11=next(/* () */0);
         
         var x$7=next(/* () */0);
         
         return app_env_const(f$9,e$3,n$11,x$7);
         
        case 15:
         var f$10=next(/* () */0);
         
         var n$12=next(/* () */0);
         
         var x$8=next(/* () */0);
         
         return app_meth_const(f$10,n$12,x$8);
         
        case 16:
         var n$13=next(/* () */0);
         
         var x$9=next(/* () */0);
         
         return meth_app_const(n$13,x$9);
         
        case 17:
         var n$14=next(/* () */0);
         
         var m=next(/* () */0);
         
         return meth_app_var(n$14,m);
         
        case 18:
         var n$15=next(/* () */0);
         
         var e$4=next(/* () */0);
         
         var m$1=next(/* () */0);
         
         return meth_app_env(n$15,e$4,m$1);
         
        case 19:
         var n$16=next(/* () */0);
         
         var m$2=next(/* () */0);
         
         return meth_app_meth(n$16,m$2);
         
        case 20:
         var m$3=next(/* () */0);
         
         var x$10=next(/* () */0);
         
         return send_const(m$3,x$10,new_cache(table));
         
        case 21:
         var m$4=next(/* () */0);
         
         var n$17=next(/* () */0);
         
         return send_var(m$4,n$17,new_cache(table));
         
        case 22:
         var m$5=next(/* () */0);
         
         var e$5=next(/* () */0);
         
         var n$18=next(/* () */0);
         
         return send_env(m$5,e$5,n$18,new_cache(table));
         
        case 23:
         var m$6=next(/* () */0);
         
         var n$19=next(/* () */0);
         
         return send_meth(m$6,n$19,new_cache(table));
         
        }
      }
    else
     {return clo;}
    };

var
 set_methods=
  function(table,methods)
   {var len=methods["length"];
    
    var i=[0,0];
    
    while(i[1]<len)
     {var label=methods[i[1]];
      
      var clo=method_impl(table,i,methods);
      
      set_method(table,label,clo),i[0]++}
    return 0;
    };

var
 stats=
  function(param)
   {return /* record */[0,table_count[1],method_count[1],inst_var_count[1]];};

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

