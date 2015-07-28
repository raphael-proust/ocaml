var List=require("List");
var Set=require("Set");
var Odoc_print=require("Odoc_print");
var Depend=require("Depend");
var Str=require("Str");
var StrS=0;
var Module=0;
var Type=0;
var
 set_to_list=
  function(s)
   {var l=[0,0];
    var $js=Depend["StringSet"][13];
    $js(function(e){return l[1]=[0,e,l[1]],0},s);
    return l[1]};
var
 impl_dependencies=
  function(ast)
   {Depend["free_structure_names"][1]=Depend["StringSet"][1],0;
    var $js=Depend["add_use_file"];
    $js(Depend["StringSet"][1],[0,[0,ast],0]);
    return set_to_list(Depend["free_structure_names"][1])};
var
 intf_dependencies=
  function(ast)
   {Depend["free_structure_names"][1]=Depend["StringSet"][1],0;
    var $js=Depend["add_signature"];
    $js(Depend["StringSet"][1],ast);
    return set_to_list(Depend["free_structure_names"][1])};
var $js=Set["Make"];
var compare=function(x,y){return "unknown primitive:caml_string_compare"};
var $js$1=[0,compare];
var S=$js($js$1);
var
 set_to_list$1=
  function(s)
   {var l=[0,0];
    var $js$2=S[13];
    $js$2(function(e){return l[1]=[0,e,l[1]],0},s);
    return l[1]};
var
 make_node=
  function(s,children)
   {var $js$2=List["fold_right"];
    var set=$js$2(S[4],children,S[1]);
    var $js$3=S[6];
    var $js$4=$js$3(s,set);
    var $js$5=List["mem"];
    var $js$6=$js$5(s,children);
    return [0,s,$js$4,0,$js$6]};
var
 get_node=
  function(graph,s)
   {try
     {var $js$2=List["find"];
      return $js$2
              (function(n){return "unknown primitive:caml_string_equal"},
               graph)}
    catch(exn)
     {var $js$3=exn=Not_found;
      if($js$3){return make_node(s,0)}else{return "unknown primitive:reraise"}}};
var
 trans_closure=
  function(graph,acc,n)
   {var $js$2=S[3];
    var $js$3=$js$2(n[1],acc);
    if($js$3)
     {return acc}
    else
     {var $js$4=S[14];
      var $js$5=S[4];
      var $js$6=$js$5(n[1],acc);
      return $js$4
              (function(child,acc2)
                {var $js$7=get_node(graph,child);
                 return trans_closure(graph,acc2,$js$7)},
               n[2],
               $js$6)}};
var
 node_trans_closure=
  function(graph,n)
   {var $js$2=List["map"];
    var $js$3=set_to_list$1(n[2]);
    var
     far=
      $js$2
       (function(child)
         {var $js$4=get_node(graph,child);
          var set=trans_closure(graph,S[1],$js$4);
          return [0,child,set]},
        $js$3);
    return n[3]=far,0};
var
 compute_trans_closure=
  function(graph)
   {var $js$2=List["iter"];
    var $js$3=node_trans_closure(graph);
    return $js$2($js$3,graph)};
var
 prune_node=
  function(graph,node)
   {var $js$2=S[13];
    $js$2
     (function(child)
       {var $js$3=List["fold_left"];
        var
         set_reachables=
          $js$3
           (function(acc,param)
             {var $js$4="unknown primitive:caml_string_equal";
              if($js$4)
               {return acc}
              else
               {var $js$5=S[7];return $js$5(acc,param[2])}},
            S[1],
            node[3]);
        var $js$4=S[6];
        var set=$js$4(node[1],set_reachables);
        var $js$5=S[16];
        var
         $js$6=
          $js$5
           (function(n2)
             {var $js$7=S[3];
              var $js$8=get_node(graph,n2);
              var $js$9=$js$8[2];
              return $js$7(child,$js$9)},
            set);
        if($js$6)
         {var $js$7=S[6];
          var $js$8=$js$7(child,node[2]);
          node[2]=$js$8,0;
          var $js$9=List["filter"];
          var
           $js$10=
            $js$9
             (function(param){return "unknown primitive:caml_string_notequal"},
              node[3]);
          return node[3]=$js$10,0}
        else
         {return 0}},
      node[2]);
    var $js$3=node[4];
    if($js$3)
     {var $js$4=S[4];var $js$5=$js$4(node[1],node[2]);return node[2]=$js$5,0}
    else
     {return 0}};
var
 kernel=
  function(graph)
   {compute_trans_closure(graph);
    var $js$2=List["iter"];
    var $js$3=prune_node(graph);
    $js$2($js$3,graph);
    return graph};
var
 Dep=
  [0,
   S,
   set_to_list$1,
   make_node,
   get_node,
   trans_closure,
   node_trans_closure,
   compute_trans_closure,
   prune_node,
   kernel];
var
 type_deps=
  function(t)
   {var T=Odoc_type;
    var l=[0,0];
    var $js$2=Str["regexp"];
    var re=$js$2("\([A-Z]\([a-zA-Z_'0-9]\)*\.\)+\([a-z][a-zA-Z_'0-9]*\)");
    var
     f=
      function(s)
       {var $js$3=Str["matched_string"];
        var s2=$js$3(s);
        l[1]=[0,s2,l[1]],0;
        return s2};
    var match=t[4];
    var $js$3=match;
    if(typeof $js$3=="number")
     {if($js$3==0){var exit=16}else if($js$3==1){var exit=16}}
    else
     {var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=List["iter"];
        $js$5
         (function(c)
           {var $js$6=List["iter"];
            return $js$6
                    (function(e)
                      {var $js$7=Odoc_print["string_of_type_expr"];
                       var s=$js$7(e);
                       var $js$8=Str["global_substitute"];
                       var $js$9=$js$8(re,f,s);
                       return 0},
                     c[2])},
          match[1])}
      else
       if($js$4==1)
        {var $js$6=List["iter"];
         $js$6
          (function(r)
            {var $js$7=Odoc_print["string_of_type_expr"];
             var s=$js$7(r[3]);
             var $js$8=Str["global_substitute"];
             var $js$9=$js$8(re,f,s);
             return 0},
           match[1])}}
    switch(exit){case 16:}
    var match$1=t[6];
    var $js$7=match$1;
    if($js$7)
     {var match$2=match$1[1];
      var $js$8=match$2;
      if($js$8==0)
       {var $js$9=Odoc_print["string_of_type_expr"];
        var s=$js$9(match$2[1]);
        var $js$10=Str["global_substitute"];
        var $js$11=$js$10(re,f,s);
        0}
      else
       if($js$8==1)
        {var $js$12=List["iter"];
         $js$12
          (function(r)
            {var $js$13=Odoc_print["string_of_type_expr"];
             var s$1=$js$13(r[2]);
             var $js$14=Str["global_substitute"];
             var $js$15=$js$14(re,f,s$1);
             return 0},
           match$2[1])}}
    else
     {}
    return l[1]};
var
 kernel_deps_of_modules=
  function(modules)
   {var $js$2=List["map"];
    var
     graph=
      $js$2(function(m){var $js$3=Dep[3];return $js$3(m[1],m[8])},modules);
    var $js$3=Dep[9];
    var k=$js$3(graph);
    var $js$4=List["iter"];
    return $js$4
            (function(m)
              {var $js$5=Dep[4];
               var node=$js$5(k,m[1]);
               var $js$6=List["filter"];
               var
                $js$7=
                 $js$6
                  (function(m2){var $js$8=Dep[1][3];return $js$8(m2,node[2])},
                   m[8]);
               return m[8]=$js$7,0},
             modules)};
var
 deps_of_types=
  function(*opt*,types)
   {var $js$2=*opt*;
    if($js$2){var kernel$1=*opt*[1]}else{var kernel$1=0}
    var $js$3=List["map"];
    var
     deps_pre=
      $js$3(function(t){var $js$4=type_deps(t);return [0,t,$js$4]},types);
    var $js$4=kernel$1;
    if($js$4)
     {var $js$5=List["map"];
      var
       graph=
        $js$5
         (function(param){var $js$6=Dep[3];return $js$6(param[1][1],param[2])},
          deps_pre);
      var $js$6=Dep[9];
      var k=$js$6(graph);
      var $js$7=List["map"];
      return $js$7
              (function(t)
                {var $js$8=Dep[4];
                 var node=$js$8(k,t[1]);
                 var $js$9=Dep[2];
                 var $js$10=$js$9(node[2]);
                 return [0,t,$js$10]},
               types)}
    else
     {return deps_pre}};
module["exports"]=
{"StrS":StrS,
 "Module":Module,
 "Type":Type,
 "set_to_list":set_to_list,
 "impl_dependencies":impl_dependencies,
 "intf_dependencies":intf_dependencies,
 "Dep":Dep,
 "type_deps":type_deps,
 "kernel_deps_of_modules":kernel_deps_of_modules,
 "deps_of_types":deps_of_types};
