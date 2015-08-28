// Generated CODE, PLEASE EDIT WITH CARE 

var Odoc_type=require("./odoc_type.js");
var List=require("./list.js");
var Set=require("./set.js");
var Depend=require("./depend.js");
var Odoc_print=require("./odoc_print.js");
var Str=require("./str.js");
var Odoc_module=require("./odoc_module.js");
var CamlPrimitive=require("./camlPrimitive.js");



var StrS=0;

var Module=0;

var Type=0;

var
 set_to_list=
  function(s)
   {var l=[0,/* [] */0];
    
    Depend["StringSet"][13](function(e){return l[1]=/* :: */[0,e,l[1]],0},s);
    return l[1]};

var
 impl_dependencies=
  function(ast)
   {Depend["free_structure_names"][1]=Depend["StringSet"][1];
    Depend["add_use_file"]
     (Depend["StringSet"][1],/* :: */[0,/* Ptop_def */[0,ast],/* [] */0]);
    return set_to_list(Depend["free_structure_names"][1])};

var
 intf_dependencies=
  function(ast)
   {Depend["free_structure_names"][1]=Depend["StringSet"][1];
    Depend["add_signature"](Depend["StringSet"][1],ast);
    return set_to_list(Depend["free_structure_names"][1])};

var compare=function(x,y){return CamlPrimitive["caml_string_compare"](x,y)};

var S=Set["Make"]([0,compare]);

var
 set_to_list$1=
  function(s)
   {var l=[0,/* [] */0];
    
    S[13](function(e){return l[1]=/* :: */[0,e,l[1]],0},s);
    return l[1]};

var
 make_node=
  function(s,children)
   {var set=List["fold_right"](S[4],children,S[1]);
    
    return /* record */[0,s,S[6](s,set),/* [] */0,List["mem"](s,children)]};

var
 get_node=
  function(graph,s)
   {try
     {return List["find"]
              (function(n){return CamlPrimitive["caml_string_equal"](n[1],s)},
               graph)}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return make_node(s,/* [] */0)}
      else
       {throw exn}
      }
    };

var
 trans_closure=
  function(graph,acc,n)
   {return S[3](n[1],acc)
            ?acc
            :S[14]
              (function(child,acc2)
                {return trans_closure(graph,acc2,get_node(graph,child))},
               n[2],
               S[4](n[1],acc))};

var
 node_trans_closure=
  function(graph,n)
   {var
     far=
      List["map"]
       (function(child)
         {var set=trans_closure(graph,S[1],get_node(graph,child));
          
          return /* tuple */[0,child,set]},
        set_to_list$1(n[2]));
    
    return n[3]=far,0};

var
 compute_trans_closure=
  function(graph){return List["iter"](node_trans_closure(graph),graph)};

var
 prune_node=
  function(graph,node)
   {S[13]
     (function(child)
       {var
         set_reachables=
          List["fold_left"]
           (function(acc,param)
             {return CamlPrimitive["caml_string_equal"](child,param[1])
                      ?acc
                      :S[7](acc,param[2])},
            S[1],
            node[3]);
        
        var set=S[6](node[1],set_reachables);
        
        return S[16]
                 (function(n2){return S[3](child,get_node(graph,n2)[2])},set)
                ?(node[2]=
                  S[6](child,node[2]),
                  node[3]=
                  List["filter"]
                   (function(param)
                     {return CamlPrimitive["caml_string_notequal"]
                              (param[1],child)},
                    node[3]),
                  0)
                :/* () */0},
      node[2]);
    return node[4]?(node[2]=S[4](node[1],node[2]),0):/* () */0};

var
 kernel=
  function(graph)
   {compute_trans_closure(graph);
    List["iter"](prune_node(graph),graph);
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
   {var l=[0,/* [] */0];
    
    var
     re=
      Str["regexp"]
       ("\\([A-Z]\\([a-zA-Z_'0-9]\\)*\\.\\)+\\([a-z][a-zA-Z_'0-9]*\\)");
    
    var
     f=
      function(s)
       {var s2=Str["matched_string"](s);l[1]=/* :: */[0,s2,l[1]];return s2};
    
    var match=t[4];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=16;break;case 1:exit=16;break}}
    else
     {switch(match[0])
       {case 0:
         List["iter"]
          (function(c)
            {return List["iter"]
                     (function(e)
                       {var s=Odoc_print["string_of_type_expr"](e);
                        
                        return Str["global_substitute"](re,f,s)},
                      c[2])},
           match[1]);
         break;
        case 1:
         List["iter"]
          (function(r)
            {var s=Odoc_print["string_of_type_expr"](r[3]);
             
             return Str["global_substitute"](re,f,s)},
           match[1]);
         break
        }}
    
    switch(exit){case 16:break}
    
    var match$1=t[6];
    
    if(match$1)
     {var match$2=match$1[1];
      
      switch(match$2[0])
       {case 0:
         var s=Odoc_print["string_of_type_expr"](match$2[1]);
         
         Str["global_substitute"](re,f,s);
         break;
        case 1:
         List["iter"]
          (function(r)
            {var s$1=Odoc_print["string_of_type_expr"](r[2]);
             
             return Str["global_substitute"](re,f,s$1)},
           match$2[1]);
         break
        }
      }
    
    return l[1]};

var
 kernel_deps_of_modules=
  function(modules)
   {var graph=List["map"](function(m){return Dep[3](m[1],m[8])},modules);
    
    var k=Dep[9](graph);
    
    return List["iter"]
            (function(m)
              {var node=Dep[4](k,m[1]);
               
               return m[8]=
                      List["filter"]
                       (function(m2){return Dep[1][3](m2,node[2])},m[8]),
                      0},
             modules)};

var
 deps_of_types=
  function($staropt$star,types)
   {var kernel$1=$staropt$star?$staropt$star[1]:/* false */0;
    
    var
     deps_pre=
      List["map"](function(t){return /* tuple */[0,t,type_deps(t)]},types);
    
    if(kernel$1)
     {var
       graph=
        List["map"]
         (function(param){return Dep[3](param[1][1],param[2])},deps_pre);
      
      var k=Dep[9](graph);
      
      return List["map"]
              (function(t)
                {var node=Dep[4](k,t[1]);
                 
                 return /* tuple */[0,t,Dep[2](node[2])]},
               types)}
    else
     {return deps_pre}
    };

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

