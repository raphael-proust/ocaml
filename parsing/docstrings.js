// Generated CODE, PLEASE EDIT WITH CARE 

var Warnings=require("Warnings");
var List=require("List");
var Pervasives=require("Pervasives");
var Parsing=require("Parsing");
var Location=require("Location");
var Hashtbl=require("Hashtbl");


var docstrings=[0,0];

var
 warn_bad_docstrings=
  function(param)
   {if(Warnings["is_active"]([33,1]))
     {return List["iter"]
              (function(ds)
                {var match=ds[3];
                 
                 switch(match[0])
                  {case 0:return Location["prerr_warning"](ds[2],[33,1]);
                   case 1:return 0;
                   case 2:
                    var match$1=ds[4];
                    
                    if(match$1>=2)
                     {return Location["prerr_warning"](ds[2],[33,0]);}
                    else
                     {return 0;}
                    
                   }
                 },
               List["rev"](docstrings[1]));
      }
    else
     {return 0;}
    };

var
 docstring=
  function(body,loc)
   {var ds=/* record */[0,body,loc,0,0];
    
    docstrings[1]=/* :: */[0,ds,docstrings[1]],0;
    return ds;
    };

var docstring_body=function(ds){return ds[1];};

var docstring_loc=function(ds){return ds[2];};

var empty_docs=[0,0,0];

var doc_loc=/* record */[0,"ocaml.doc",Location["none"]];

var
 docs_attr=
  function(ds)
   {var
     exp=
      /* record */[0,
       /* Pexp_constant */[1,/* Const_string */[2,ds[1],0]],
       ds[2],
       0];
    
    var item=/* record */[0,/* Pstr_eval */[0,exp,0],exp[2]];
    
    return /* tuple */[0,doc_loc,/* PStr */[0,/* :: */[0,item,0]]];
    };

var
 add_docs_attrs=
  function(docs,attrs)
   {var match=docs[1];
    
    if(match)
     {var attrs$1=/* :: */[0,docs_attr(match[1]),attrs];}
    else
     {var attrs$1=attrs;}
    
    var match$1=docs[2];
    
    if(match$1)
     {return Pervasives["@"](attrs$1,/* :: */[0,docs_attr(match$1[1]),0]);}
    else
     {return attrs$1;}
    };

var empty_info=0;

var info_attr=docs_attr;

var
 add_info_attrs=
  function(info,attrs)
   {if(info)
     {return Pervasives["@"](attrs,/* :: */[0,info_attr(info[1]),0]);}
    else
     {return attrs;}
    };

var empty_text=0;

var text_loc=/* record */[0,"ocaml.text",Location["none"]];

var
 text_attr=
  function(ds)
   {var
     exp=
      /* record */[0,
       /* Pexp_constant */[1,/* Const_string */[2,ds[1],0]],
       ds[2],
       0];
    
    var item=/* record */[0,/* Pstr_eval */[0,exp,0],exp[2]];
    
    return /* tuple */[0,text_loc,/* PStr */[0,/* :: */[0,item,0]]];
    };

var
 add_text_attrs=
  function(dsl,attrs)
   {return Pervasives["@"](List["map"](text_attr,dsl),attrs);};

var
 get_docstring=
  function(info,dsl)
   {var
     loop=
      function(param)
       {if(param)
         {var ds=param[1];
          
          var match=ds[3];
          
          if(match!=1)
           {ds[3]=info?1:2,0;return /* Some */[0,ds];}
          else
           {return loop(param[2]);}
          }
        else
         {return 0;}
        };
    
    return loop(dsl);
    };

var
 get_docstrings=
  function(dsl)
   {var
     loop=
      function(acc,param)
       {if(param)
         {var ds=param[1];
          
          var match=ds[3];
          
          if(match!=1)
           {ds[3]=2,0;return loop(/* :: */[0,ds,acc],param[2]);}
          else
           {return loop(acc,param[2]);}
          }
        else
         {return List["rev"](acc);}
        };
    
    return loop(0,dsl);
    };

var
 associate_docstrings=
  function(dsl)
   {return List["iter"]
            (function(ds)
              {var match=ds[4];
               
               if(match!=0){return ds[4]=2,0;}else{return ds[4]=1,0;}
               },
             dsl);
    };

var pre_table=Hashtbl["create"](0,50);

var
 set_pre_docstrings=
  function(pos,dsl)
   {if(dsl!=0){return Hashtbl["add"](pre_table,pos,dsl);}else{return 0;}};

var
 get_pre_docs=
  function(pos)
   {try
     {var dsl=Hashtbl["find"](pre_table,pos);
      
      associate_docstrings(dsl);
      return get_docstring(0,dsl);
      }
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var
 mark_pre_docs=
  function(pos)
   {try
     {var dsl=Hashtbl["find"](pre_table,pos);
      
      return associate_docstrings(dsl);
      }
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var post_table=Hashtbl["create"](0,50);

var
 set_post_docstrings=
  function(pos,dsl)
   {if(dsl!=0){return Hashtbl["add"](post_table,pos,dsl);}else{return 0;}};

var
 get_post_docs=
  function(pos)
   {try
     {var dsl=Hashtbl["find"](post_table,pos);
      
      associate_docstrings(dsl);
      return get_docstring(0,dsl);
      }
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var
 mark_post_docs=
  function(pos)
   {try
     {var dsl=Hashtbl["find"](post_table,pos);
      
      return associate_docstrings(dsl);
      }
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var
 get_info=
  function(pos)
   {try
     {var dsl=Hashtbl["find"](post_table,pos);return get_docstring(1,dsl);}
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var floating_table=Hashtbl["create"](0,50);

var
 set_floating_docstrings=
  function(pos,dsl)
   {if(dsl!=0){return Hashtbl["add"](floating_table,pos,dsl);}else{return 0;}};

var
 get_text=
  function(pos)
   {try
     {var dsl=Hashtbl["find"](floating_table,pos);return get_docstrings(dsl);}
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var pre_extra_table=Hashtbl["create"](0,50);

var
 set_pre_extra_docstrings=
  function(pos,dsl)
   {if(dsl!=0){return Hashtbl["add"](pre_extra_table,pos,dsl);}else{return 0;}
    };

var
 get_pre_extra_text=
  function(pos)
   {try
     {var dsl=Hashtbl["find"](pre_extra_table,pos);
      
      return get_docstrings(dsl);
      }
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var post_extra_table=Hashtbl["create"](0,50);

var
 set_post_extra_docstrings=
  function(pos,dsl)
   {if(dsl!=0)
     {return Hashtbl["add"](post_extra_table,pos,dsl);}
    else
     {return 0;}
    };

var
 get_post_extra_text=
  function(pos)
   {try
     {var dsl=Hashtbl["find"](post_extra_table,pos);
      
      return get_docstrings(dsl);
      }
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var
 symbol_docs=
  function(param)
   {return /* record */[0,
            get_pre_docs(Parsing["symbol_start_pos"](0)),
            get_post_docs(Parsing["symbol_end_pos"](0))];
    };

var
 symbol_docs_lazy=
  function(param)
   {var p1=Parsing["symbol_start_pos"](0);
    
    var p2=Parsing["symbol_end_pos"](0);
    
    return [246,
            function(param$1)
             {return /* record */[0,get_pre_docs(p1),get_post_docs(p2)];}];
    };

var
 rhs_docs=
  function(pos1,pos2)
   {return /* record */[0,
            get_pre_docs(Parsing["rhs_start_pos"](pos1)),
            get_post_docs(Parsing["rhs_end_pos"](pos2))];
    };

var
 rhs_docs_lazy=
  function(pos1,pos2)
   {var p1=Parsing["rhs_start_pos"](pos1);
    
    var p2=Parsing["rhs_end_pos"](pos2);
    
    return [246,
            function(param)
             {return /* record */[0,get_pre_docs(p1),get_post_docs(p2)];}];
    };

var
 mark_symbol_docs=
  function(param)
   {mark_pre_docs(Parsing["symbol_start_pos"](0));
    return mark_post_docs(Parsing["symbol_end_pos"](0));
    };

var
 mark_rhs_docs=
  function(pos1,pos2)
   {mark_pre_docs(Parsing["rhs_start_pos"](pos1));
    return mark_post_docs(Parsing["rhs_end_pos"](pos2));
    };

var
 symbol_info=
  function(param){return get_info(Parsing["symbol_end_pos"](0));};

var rhs_info=function(pos){return get_info(Parsing["rhs_end_pos"](pos));};

var
 symbol_text=
  function(param){return get_text(Parsing["symbol_start_pos"](0));};

var
 symbol_text_lazy=
  function(param)
   {var pos=Parsing["symbol_start_pos"](0);
    
    return [246,function(param$1){return get_text(pos);}];
    };

var rhs_text=function(pos){return get_text(Parsing["rhs_start_pos"](pos));};

var
 rhs_text_lazy=
  function(pos)
   {var pos$1=Parsing["rhs_start_pos"](pos);
    
    return [246,function(param){return get_text(pos$1);}];
    };

var
 symbol_pre_extra_text=
  function(param){return get_pre_extra_text(Parsing["symbol_start_pos"](0));};

var
 symbol_post_extra_text=
  function(param){return get_post_extra_text(Parsing["symbol_end_pos"](0));};

var
 rhs_pre_extra_text=
  function(pos){return get_pre_extra_text(Parsing["rhs_start_pos"](pos));};

var
 rhs_post_extra_text=
  function(pos){return get_post_extra_text(Parsing["rhs_end_pos"](pos));};

var
 init=
  function(param)
   {docstrings[1]=0,0;
    Hashtbl["reset"](pre_table);
    Hashtbl["reset"](post_table);
    Hashtbl["reset"](floating_table);
    Hashtbl["reset"](pre_extra_table);
    return Hashtbl["reset"](post_extra_table);
    };

module["exports"]=
{"init":init,
 "warn_bad_docstrings":warn_bad_docstrings,
 "docstring":docstring,
 "docstring_body":docstring_body,
 "docstring_loc":docstring_loc,
 "set_pre_docstrings":set_pre_docstrings,
 "set_post_docstrings":set_post_docstrings,
 "set_floating_docstrings":set_floating_docstrings,
 "set_pre_extra_docstrings":set_pre_extra_docstrings,
 "set_post_extra_docstrings":set_post_extra_docstrings,
 "empty_docs":empty_docs,
 "docs_attr":docs_attr,
 "add_docs_attrs":add_docs_attrs,
 "symbol_docs":symbol_docs,
 "symbol_docs_lazy":symbol_docs_lazy,
 "rhs_docs":rhs_docs,
 "rhs_docs_lazy":rhs_docs_lazy,
 "mark_symbol_docs":mark_symbol_docs,
 "mark_rhs_docs":mark_rhs_docs,
 "empty_info":empty_info,
 "info_attr":info_attr,
 "add_info_attrs":add_info_attrs,
 "symbol_info":symbol_info,
 "rhs_info":rhs_info,
 "empty_text":empty_text,
 "text_attr":text_attr,
 "add_text_attrs":add_text_attrs,
 "symbol_text":symbol_text,
 "symbol_text_lazy":symbol_text_lazy,
 "rhs_text":rhs_text,
 "rhs_text_lazy":rhs_text_lazy,
 "symbol_pre_extra_text":symbol_pre_extra_text,
 "symbol_post_extra_text":symbol_post_extra_text,
 "rhs_pre_extra_text":rhs_pre_extra_text,
 "rhs_post_extra_text":rhs_post_extra_text};

