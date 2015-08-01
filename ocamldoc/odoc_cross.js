var Odoc_name=require("Odoc_name");
var $$String=require("String");
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

var compare=function(prim,prim$1){return "unknown primitive:caml_compare";};

var S=Set["Make"]([0,compare]);

var verified_refs=[0,S[1]];

var
 add_verified=
  function(v){return verified_refs[1]=S[4](v,verified_refs[1]),0;};

var was_verified=function(v){return S[3](v,verified_refs[1]);};

var
 p_module=
  function(m,param)
   {var match=m[6];
    
    switch(match){case 1:var $js=1;default:var $js=0;}
    return [0,1,$js];
    };

var
 p_module_type=
  function(mt,param)
   {var match=mt[6];
    
    if(match)
     {switch(match[1]){case 2:var $js=1;default:var exit=159;}}
    else
     {var exit=159;}
    
    switch(exit){case 159:var $js$1=0;}
    return [0,1,$js$1];
    };

var p_class=function(c,param){return [0,0,0];};

var p_class_type=function(ct,param){return [0,0,0];};

var p_value=function(v,param){return 0;};

var p_recfield=function(param,param$1,param$2){return 0;};

var p_const=function(param,param$1,param$2){return 0;};

var p_type=function(t,param){return [0,0,0];};

var p_extension=function(x,param){return x[5]!=0;};

var p_exception=function(e,param){return e[5]!=0;};

var p_attribute=function(a,param){return 0;};

var p_method=function(m,param){return 0;};

var p_section=function(s,param){return 0;};

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

var Search_alias=Odoc_search["Search"](P_alias);

var module_aliases=Hashtbl["create"](0,13);

var module_and_modtype_aliases=Hashtbl["create"](0,13);

var extension_aliases=Hashtbl["create"](0,13);

var exception_aliases=Hashtbl["create"](0,13);

var
 build_alias_list=
  function(param)
   {if(param)
     {var match=param[1];
      
      switch(match)
       {case 0:
         var m=match[1];
         
         var match$1=m[6];
         
         switch(match$1)
          {case 1:
            var ma=match$1[1];
            
            Hashtbl["add"](module_aliases,m[1],[0,ma[1],1]),
            Hashtbl["add"](module_and_modtype_aliases,m[1],[0,ma[1],1]);
           default:}
         
         return build_alias_list(param[2]);
         
        case 1:
         var mt=match[1];
         
         var match$2=mt[6];
         
         if(match$2)
          {var match$3=match$2[1];
           
           switch(match$3)
            {case 2:
              Hashtbl["add"]
               (module_and_modtype_aliases,mt[1],[0,match$3[1][1],1]);
             default:var exit=142;}
           }
         else
          {var exit=142;}
         
         switch(exit){case 142:}
         
         return build_alias_list(param[2]);
         
        case 6:
         var x=match[1];
         
         var match$4=x[5];
         
         if(match$4)
          {Hashtbl["add"](extension_aliases,x[1],[0,match$4[1][1],1])}
         else
          {}
         
         return build_alias_list(param[2]);
         
        case 7:
         var e=match[1];
         
         var match$5=e[5];
         
         if(match$5)
          {Hashtbl["add"](exception_aliases,e[1],[0,match$5[1][1],1])}
         else
          {}
         
         return build_alias_list(param[2]);
         
        default:return build_alias_list(param[2]);}
      }
    else
     {return 0;}
    };

var
 get_alias_names=
  function(module_list)
   {Hashtbl["clear"](module_aliases);
    Hashtbl["clear"](module_and_modtype_aliases);
    Hashtbl["clear"](extension_aliases);
    Hashtbl["clear"](exception_aliases);
    return build_alias_list(Search_alias[15](module_list,0));
    };

var Found="unknown primitive:caml_set_oo_id";

var
 f=
  function(t,name)
   {try
     {var match=Hashtbl["find"](t,name);
      
      var s=match[1];
      
      if(match[2]!=0){return f(t,s);}else{return s;}
      }
    catch(exn)
     {if(exn=Not_found)
       {try
         {Hashtbl["iter"]
           (function(n2,param)
             {if(Odoc_name["prefix"](n2,name))
               {var ln2=n2["length"];
                
                var
                 s$1=
                  Pervasives["^"]
                   (param[1],$$String["sub"](name,ln2,name["length"]-ln2));
                
                throw [0,Found,s$1];
                }
              else
               {return 0;}
              },
            t);
          Hashtbl["replace"](t,name,[0,name,0]);
          return name;
          }
        catch(exn$1)
         {if(exn$1[1]=Found)
           {var s2=f(t,exn$1[2]);Hashtbl["replace"](t,s2,[0,s2,0]);return s2;}
          else
           {throw exn$1;}
          }
        }
      else
       {throw exn;}
      }
    };

var name_alias=function(name,alias_tbl){return f(alias_tbl,name);};

var compare$1=function(x,y){return "unknown primitive:caml_string_compare";};

var Map_ord=[0,compare$1];

var Ele_map=Map["Make"](Map_ord);

var known_elements=[0,Ele_map[1]];

var
 add_known_element=
  function(name,k)
   {try
     {var l=Ele_map[22](name,known_elements[1]);
      
      var s=Ele_map[6](name,known_elements[1]);
      
      return known_elements[1]=Ele_map[4](name,[0,k,l],s),0;
      }
    catch(exn)
     {if(exn=Not_found)
       {return known_elements[1]=Ele_map[4](name,[0,k,0],known_elements[1]),0;
        }
      else
       {throw exn;}
      }
    };

var
 get_known_elements=
  function(name)
   {try
     {return Ele_map[22](name,known_elements[1]);}
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var
 kind_name_exists=
  function(kind)
   {if("unknown primitive:isint")
     {switch(kind[0])
       {case 0:
         var pred=function(e){switch(e){case 0:return 1;default:return 0;}};
        case 1:
         var pred=function(e){switch(e){case 1:return 1;default:return 0;}};
        case 2:
         var pred=function(e){switch(e){case 2:return 1;default:return 0;}};
        case 3:
         var pred=function(e){switch(e){case 3:return 1;default:return 0;}};
        case 4:
         var pred=function(e){switch(e){case 4:return 1;default:return 0;}};
        case 5:
         var pred=function(e){switch(e){case 5:return 1;default:return 0;}};
        case 6:
         var pred=function(e){switch(e){case 6:return 1;default:return 0;}};
        case 7:
         var pred=function(e){switch(e){case 7:return 1;default:return 0;}};
        case 8:
         var pred=function(e){switch(e){case 8:return 1;default:return 0;}};
        case 9:
         var pred=function(e){switch(e){case 9:return 1;default:return 0;}};
        case 10:
         var pred=function(e){switch(e){case 11:return 1;default:return 0;}};
        case 11:
         var pred=function(e){switch(e){case 12:return 1;default:return 0;}};
        }
      }
    else
     {throw [0,Assert_failure,[0,"odoc_cross.ml",205,22]];}
    
    return function(name)
     {try
       {return List["exists"](pred,get_known_elements(name));}
      catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
      };
    };

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
   {var
     match=
      List["find"]
       (function(k){switch(k){case 0:return 1;default:return 0;}},
        get_known_elements(name));
    
    switch(match)
     {case 0:return match[1];
      default:throw [0,Assert_failure,[0,"odoc_cross.ml",232,9]];}
    };

var
 lookup_module_type=
  function(name)
   {var
     match=
      List["find"]
       (function(k){switch(k){case 1:return 1;default:return 0;}},
        get_known_elements(name));
    
    switch(match)
     {case 1:return match[1];
      default:throw [0,Assert_failure,[0,"odoc_cross.ml",240,9]];}
    };

var
 lookup_class=
  function(name)
   {var
     match=
      List["find"]
       (function(k){switch(k){case 2:return 1;default:return 0;}},
        get_known_elements(name));
    
    switch(match)
     {case 2:return match[1];
      default:throw [0,Assert_failure,[0,"odoc_cross.ml",248,9]];}
    };

var
 lookup_class_type=
  function(name)
   {var
     match=
      List["find"]
       (function(k){switch(k){case 3:return 1;default:return 0;}},
        get_known_elements(name));
    
    switch(match)
     {case 3:return match[1];
      default:throw [0,Assert_failure,[0,"odoc_cross.ml",256,9]];}
    };

var
 lookup_extension=
  function(name)
   {var
     match=
      List["find"]
       (function(k){switch(k){case 6:return 1;default:return 0;}},
        get_known_elements(name));
    
    switch(match)
     {case 6:return match[1];
      default:throw [0,Assert_failure,[0,"odoc_cross.ml",264,9]];}
    };

var
 lookup_exception=
  function(name)
   {var
     match=
      List["find"]
       (function(k){switch(k){case 7:return 1;default:return 0;}},
        get_known_elements(name));
    
    switch(match)
     {case 7:return match[1];
      default:throw [0,Assert_failure,[0,"odoc_cross.ml",272,9]];}
    };

var
 scan_init=
  function($$class)
   {var ids=CamlinternalOO["get_method_labels"]($$class,shared);
    
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
    
    var
     inh=
      CamlinternalOO["inherits"]($$class,0,0,shared$1,Odoc_scan["scanner"],1);
    
    var obj_init=inh[1];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       scan_value,
       function(self$neg1,v){return add_known_element(v[1],[4,v]);},
       scan_type_recfield,
       function(self$neg1,t,f$1)
        {return add_known_element
                 (Printf["sprintf"]
                   ([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],t[1],f$1[1]),
                  [11,t,f$1]);
         },
       scan_type_const,
       function(self$neg1,t,f$1)
        {return add_known_element
                 (Printf["sprintf"]
                   ([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],t[1],f$1[1]),
                  [12,t,f$1]);
         },
       scan_type_pre,
       function(self$neg1,t){add_known_element(t[1],[5,t]);return 1;},
       scan_extension_constructor,
       function(self$neg1,x){return add_known_element(x[1],[6,x]);},
       scan_exception,
       function(self$neg1,e){return add_known_element(e[1],[7,e]);},
       scan_attribute,
       function(self$neg1,a){return add_known_element(a[1][1],[8,a]);},
       scan_method,
       function(self$neg1,m){return add_known_element(m[1][1],[9,m]);},
       scan_class_pre,
       function(self$neg1,c){add_known_element(c[1],[2,c]);return 1;},
       scan_class_type_pre,
       function(self$neg1,c){add_known_element(c[1],[3,c]);return 1;},
       scan_module_pre,
       function(self$neg1,m){add_known_element(m[1],[0,m]);return 1;},
       scan_module_type_pre,
       function(self$neg1,m){add_known_element(m[1],[1,m]);return 1;}]);
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      obj_init($$self$1);
      return CamlinternalOO["run_initializers_opt"]($$self,$$self$1,$$class);
      };
    };

var
 scan=
  CamlinternalOO["make_class"]
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
   {var c=scan[1](0);
    
    "unknown block:(send c/1485 -342620401 module_list/1484)";
    };

var
 associate_in_module=
  function(module_list,param,m)
   {var
     iter_kind=
      function(param$1,k)
       {var acc_names=param$1[3];
        
        var acc_inc=param$1[2];
        
        var acc_b=param$1[1];
        
        switch(k)
         {case 0:
           return List["fold_left"]
                   (associate_in_module_element(module_list,m[1]),
                    [0,acc_b,acc_inc,acc_names],
                    k[1]);
           
          case 1:
           var ma=k[1];
           
           var match=ma[2];
           
           if(match)
            {return [0,acc_b,acc_inc,acc_names];}
           else
            {try
              {var mmt_opt=[0,[0,lookup_module(ma[1])]];}
             catch(exn)
              {if(exn=Not_found)
                {try
                  {var mmt_opt=[0,[1,lookup_module_type(ma[1])]];}
                 catch(exn$1)
                  {if(exn$1=Not_found){var mmt_opt=0;}else{throw exn$1;}}
                 }
               else
                {throw exn;}
               }
             
             if(mmt_opt)
              {ma[2]=[0,mmt_opt[1]],0;return [0,1,acc_inc,acc_names];}
             else
              {return [0,
                       acc_b,
                       [0,Odoc_name["head"](m[1]),acc_inc],
                       "unknown primitive:caml_string_equal"||
                        "unknown primitive:caml_string_equal"
                        ?acc_names
                        :[0,[2,ma[1]],acc_names]];
               }
             }
           
          case 2:return iter_kind([0,acc_b,acc_inc,acc_names],k[2]);
          case 3:
           var match$1=iter_kind([0,acc_b,acc_inc,acc_names],k[1]);
           
           return iter_kind([0,match$1[1],match$1[2],match$1[3]],k[2]);
           
          case 4:
           return associate_in_module_type
                   (module_list,
                    [0,acc_b,acc_inc,acc_names],
                    [0,"",0,0,0,"",[0,k[1]],Odoc_types["dummy_loc"]]);
           
          case 5:
           var match$2=iter_kind([0,acc_b,acc_inc,acc_names],k[1]);
           
           return associate_in_module_type
                   (module_list,
                    [0,match$2[1],match$2[2],match$2[3]],
                    [0,"",0,0,0,"",[0,k[2]],Odoc_types["dummy_loc"]]);
           
          case 6:return [0,acc_b,acc_inc,acc_names];
          case 7:
           var mta=k[2];
           
           var match$3=mta[2];
           
           if(match$3)
            {return [0,acc_b,acc_inc,acc_names];}
           else
            {try
              {var mt_opt=[0,lookup_module_type(mta[1])];}
             catch(exn$2)
              {if(exn$2=Not_found){var mt_opt=0;}else{throw exn$2;}}
             
             if(mt_opt)
              {mta[2]=[0,mt_opt[1]],0;return [0,1,acc_inc,acc_names];}
             else
              {return [0,
                       acc_b,
                       [0,Odoc_name["head"](m[1]),acc_inc],
                       "unknown primitive:caml_string_equal"||
                        "unknown primitive:caml_string_equal"
                        ?acc_names
                        :[0,[1,mta[1]],acc_names]];
               }
             }
           
          }
        };
    
    return iter_kind([0,param[1],param[2],param[3]],m[6]);
    };

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
        
        switch(k)
         {case 0:
           return List["fold_left"]
                   (associate_in_module_element(module_list,mt[1]),
                    [0,acc_b,acc_inc,acc_names],
                    k[1]);
           
          case 1:return iter_kind([0,acc_b,acc_inc,acc_names],k[2]);
          case 2:
           var mta=k[1];
           
           var match=mta[2];
           
           if(match)
            {return [0,acc_b,acc_inc,acc_names];}
           else
            {try
              {var mt_opt=[0,lookup_module_type(mta[1])];}
             catch(exn){if(exn=Not_found){var mt_opt=0;}else{throw exn;}}
             
             if(mt_opt)
              {mta[2]=[0,mt_opt[1]],0;return [0,1,acc_inc,acc_names];}
             else
              {return [0,
                       acc_b,
                       [0,Odoc_name["head"](mt[1]),acc_inc],
                       "unknown primitive:caml_string_equal"||
                        "unknown primitive:caml_string_equal"
                        ?acc_names
                        :[0,[1,mta[1]],acc_names]];
               }
             }
           
          case 3:return iter_kind([0,acc_b,acc_inc,acc_names],k[1]);
          case 4:return [0,acc_b,acc_inc,acc_names];
          }
        };
    
    var match=mt[6];
    
    if(match)
     {return iter_kind
              ([0,
                acc_b_modif,
                acc_incomplete_top_module_names,
                acc_names_not_found],
               match[1]);
      }
    else
     {return [0,
              acc_b_modif,
              acc_incomplete_top_module_names,
              acc_names_not_found];
      }
    };

var
 associate_in_module_element=
  function(module_list,m_name,param,element)
   {var acc_names_not_found=param[3];
    
    var acc_incomplete_top_module_names=param[2];
    
    var acc_b_modif=param[1];
    
    switch(element)
     {case 0:
       return associate_in_module
               (module_list,
                [0,
                 acc_b_modif,
                 acc_incomplete_top_module_names,
                 acc_names_not_found],
                element[1]);
       
      case 1:
       return associate_in_module_type
               (module_list,
                [0,
                 acc_b_modif,
                 acc_incomplete_top_module_names,
                 acc_names_not_found],
                element[1]);
       
      case 2:
       var im=element[1];
       
       var match=im[2];
       
       if(match)
        {return [0,
                 acc_b_modif,
                 acc_incomplete_top_module_names,
                 acc_names_not_found];
         }
       else
        {try
          {var mmt_opt=[0,[0,lookup_module(im[1])]];}
         catch(exn)
          {if(exn=Not_found)
            {try
              {var mmt_opt=[0,[1,lookup_module_type(im[1])]];}
             catch(exn$1)
              {if(exn$1=Not_found){var mmt_opt=0;}else{throw exn$1;}}
             }
           else
            {throw exn;}
           }
         
         if(mmt_opt)
          {im[2]=[0,mmt_opt[1]],0;
           return [0,1,acc_incomplete_top_module_names,acc_names_not_found];
           }
         else
          {return [0,
                   acc_b_modif,
                   [0,
                    Odoc_name["head"](m_name),
                    acc_incomplete_top_module_names],
                   "unknown primitive:caml_string_equal"||
                    "unknown primitive:caml_string_equal"
                    ?acc_names_not_found
                    :[0,[2,im[1]],acc_names_not_found]];
           }
         }
       
      case 3:
       return associate_in_class
               (module_list,
                [0,
                 acc_b_modif,
                 acc_incomplete_top_module_names,
                 acc_names_not_found],
                element[1]);
       
      case 4:
       return associate_in_class_type
               (module_list,
                [0,
                 acc_b_modif,
                 acc_incomplete_top_module_names,
                 acc_names_not_found],
                element[1]);
       
      case 6:
       return associate_in_type_extension
               (module_list,
                [0,
                 acc_b_modif,
                 acc_incomplete_top_module_names,
                 acc_names_not_found],
                element[1]);
       
      case 7:
       var match$1=element[1][5];
       
       if(match$1)
        {var ea=match$1[1];
         
         var match$2=ea[2];
         
         if(match$2)
          {return [0,
                   acc_b_modif,
                   acc_incomplete_top_module_names,
                   acc_names_not_found];
           }
         else
          {try
            {var ex_opt=[0,lookup_exception(ea[1])];}
           catch(exn$2){if(exn$2=Not_found){var ex_opt=0;}else{throw exn$2;}}
           
           if(ex_opt)
            {ea[2]=[0,ex_opt[1]],0;
             return [0,1,acc_incomplete_top_module_names,acc_names_not_found];
             }
           else
            {return [0,
                     acc_b_modif,
                     [0,
                      Odoc_name["head"](m_name),
                      acc_incomplete_top_module_names],
                     [0,[7,ea[1]],acc_names_not_found]];
             }
           }
         }
       else
        {return [0,
                 acc_b_modif,
                 acc_incomplete_top_module_names,
                 acc_names_not_found];
         }
       
      default:
       return [0,
               acc_b_modif,
               acc_incomplete_top_module_names,
               acc_names_not_found];
       }
    };

var
 associate_in_class=
  function(module_list,param,c)
   {var
     iter_kind=
      function(param$1,k)
       {var acc_names=param$1[3];
        
        var acc_inc=param$1[2];
        
        var acc_b=param$1[1];
        
        switch(k)
         {case 0:
           var
            f$1=
             function(param$2,ic)
              {var acc_names2=param$2[3];
               
               var acc_inc2=param$2[2];
               
               var acc_b2=param$2[1];
               
               var match=ic[2];
               
               if(match)
                {return [0,acc_b2,acc_inc2,acc_names2];}
               else
                {try
                  {var cct_opt=[0,[0,lookup_class(ic[1])]];}
                 catch(exn)
                  {if(exn=Not_found)
                    {try
                      {var cct_opt=[0,[1,lookup_class_type(ic[1]),0]];}
                     catch(exn$1)
                      {if(exn$1=Not_found){var cct_opt=0;}else{throw exn$1;}}
                     }
                   else
                    {throw exn;}
                   }
                 
                 if(cct_opt)
                  {ic[2]=[0,cct_opt[1]],0;return [0,1,acc_inc2,acc_names2];}
                 else
                  {return [0,
                           acc_b2,
                           [0,Odoc_name["head"](c[1]),acc_inc2],
                           "unknown primitive:caml_string_equal"
                            ?acc_names2
                            :[0,[5,ic[1]],acc_names2]];
                   }
                 }
               };
           
           return List["fold_left"](f$1,[0,acc_b,acc_inc,acc_names],k[1]);
           
          case 1:
           var capp=k[1];
           
           var match=capp[2];
           
           if(match)
            {return [0,acc_b,acc_inc,acc_names];}
           else
            {try
              {var cl_opt=[0,lookup_class(capp[1])];}
             catch(exn){if(exn=Not_found){var cl_opt=0;}else{throw exn;}}
             
             if(cl_opt)
              {capp[2]=[0,cl_opt[1]],0;return [0,1,acc_inc,acc_names];}
             else
              {return [0,
                       acc_b,
                       [0,Odoc_name["head"](c[1]),acc_inc],
                       "unknown primitive:caml_string_equal"
                        ?acc_names
                        :[0,[3,capp[1]],acc_names]];
               }
             }
           
          case 2:
           var cco=k[1];
           
           var match$1=cco[2];
           
           if(match$1)
            {return [0,acc_b,acc_inc,acc_names];}
           else
            {try
              {var cl_opt$1=[0,lookup_class(cco[1])];}
             catch(exn$1)
              {if(exn$1=Not_found){var cl_opt$1=0;}else{throw exn$1;}}
             
             if(cl_opt$1)
              {cco[2]=[0,[0,cl_opt$1[1]]],0;return [0,1,acc_inc,acc_names];}
             else
              {try
                {var clt_opt=[0,lookup_class_type(cco[1])];}
               catch(exn$2)
                {if(exn$2=Not_found){var clt_opt=0;}else{throw exn$2;}}
               
               if(clt_opt)
                {cco[2]=[0,[1,clt_opt[1],0]],0;
                 return [0,1,acc_inc,acc_names];
                 }
               else
                {return [0,
                         acc_b,
                         [0,Odoc_name["head"](c[1]),acc_inc],
                         "unknown primitive:caml_string_equal"
                          ?acc_names
                          :[0,[5,cco[1]],acc_names]];
                 }
               }
             }
           
          case 3:
           var match$2=iter_kind([0,acc_b,acc_inc,acc_names],k[1]);
           
           return associate_in_class_type
                   (module_list,
                    [0,match$2[1],match$2[2],match$2[3]],
                    [0,"",0,c[3],0,0,k[2],Odoc_types["dummy_loc"]]);
           
          }
        };
    
    return iter_kind([0,param[1],param[2],param[3]],c[6]);
    };

var
 associate_in_class_type=
  function(module_list,param,ct)
   {var
     iter_kind=
      function(param$1,k)
       {var acc_names=param$1[3];
        
        var acc_inc=param$1[2];
        
        var acc_b=param$1[1];
        
        switch(k)
         {case 0:
           var
            f$1=
             function(param$2,ic)
              {var acc_names2=param$2[3];
               
               var acc_inc2=param$2[2];
               
               var acc_b2=param$2[1];
               
               var match=ic[2];
               
               if(match)
                {return [0,acc_b2,acc_inc2,acc_names2];}
               else
                {try
                  {var cct_opt=[0,[1,lookup_class_type(ic[1]),0]];}
                 catch(exn)
                  {if(exn=Not_found)
                    {try
                      {var cct_opt=[0,[0,lookup_class(ic[1])]];}
                     catch(exn$1)
                      {if(exn$1=Not_found){var cct_opt=0;}else{throw exn$1;}}
                     }
                   else
                    {throw exn;}
                   }
                 
                 if(cct_opt)
                  {ic[2]=[0,cct_opt[1]],0;return [0,1,acc_inc2,acc_names2];}
                 else
                  {return [0,
                           acc_b2,
                           [0,Odoc_name["head"](ct[1]),acc_inc2],
                           "unknown primitive:caml_string_equal"
                            ?acc_names2
                            :[0,[5,ic[1]],acc_names2]];
                   }
                 }
               };
           
           return List["fold_left"](f$1,[0,acc_b,acc_inc,acc_names],k[1]);
           
          case 1:
           var cta=k[1];
           
           var match=cta[2];
           
           if(match)
            {return [0,acc_b,acc_inc,acc_names];}
           else
            {try
              {var cct_opt=[0,[1,lookup_class_type(cta[1]),0]];}
             catch(exn)
              {if(exn=Not_found)
                {try
                  {var cct_opt=[0,[0,lookup_class(cta[1])]];}
                 catch(exn$1)
                  {if(exn$1=Not_found){var cct_opt=0;}else{throw exn$1;}}
                 }
               else
                {throw exn;}
               }
             
             if(cct_opt)
              {cta[2]=[0,cct_opt[1]],0;return [0,1,acc_inc,acc_names];}
             else
              {return [0,
                       acc_b,
                       [0,Odoc_name["head"](ct[1]),acc_inc],
                       "unknown primitive:caml_string_equal"
                        ?acc_names
                        :[0,[5,cta[1]],acc_names]];
               }
             }
           
          }
        };
    
    return iter_kind([0,param[1],param[2],param[3]],ct[6]);
    };

var
 associate_in_type_extension=
  function(module_list,param,te)
   {return List["fold_left"]
            (function(param$1,xt)
              {var acc_names_not_found=param$1[3];
               
               var acc_incomplete_top_module_names=param$1[2];
               
               var acc_b_modif=param$1[1];
               
               var match=xt[5];
               
               if(match)
                {var xa=match[1];
                 
                 var match$1=xa[2];
                 
                 if(match$1)
                  {return [0,
                           acc_b_modif,
                           acc_incomplete_top_module_names,
                           acc_names_not_found];
                   }
                 else
                  {try
                    {var xt_opt=[0,lookup_extension(xa[1])];}
                   catch(exn){if(exn=Not_found){var xt_opt=0;}else{throw exn;}}
                   
                   if(xt_opt)
                    {xa[2]=[0,xt_opt[1]],0;
                     return [0,
                             1,
                             acc_incomplete_top_module_names,
                             acc_names_not_found];
                     }
                   else
                    {return [0,
                             acc_b_modif,
                             [0,Odoc_name["head"](xt[1]),acc_incomplete_top_module_names],
                             [0,[6,xa[1]],acc_names_not_found]];
                     }
                   }
                 }
               else
                {return [0,
                         acc_b_modif,
                         acc_incomplete_top_module_names,
                         acc_names_not_found];
                 }
               },
             [0,param[1],param[2],param[3]],
             te[5]);
    };

var ao=Odoc_misc["apply_opt"];

var
 not_found_of_kind=
  function(kind,name)
   {if("unknown primitive:isint")
     {switch(kind[0])
       {case 0:var $js=Odoc_messages["cross_module_not_found"];
        case 1:var $js=Odoc_messages["cross_module_type_not_found"];
        case 2:var $js=Odoc_messages["cross_class_not_found"];
        case 3:var $js=Odoc_messages["cross_class_type_not_found"];
        case 4:var $js=Odoc_messages["cross_value_not_found"];
        case 5:var $js=Odoc_messages["cross_type_not_found"];
        case 6:var $js=Odoc_messages["cross_extension_not_found"];
        case 7:var $js=Odoc_messages["cross_exception_not_found"];
        case 8:var $js=Odoc_messages["cross_attribute_not_found"];
        case 9:var $js=Odoc_messages["cross_method_not_found"];
        case 10:var $js=Odoc_messages["cross_recfield_not_found"];
        case 11:var $js=Odoc_messages["cross_const_not_found"];
        }
      }
    else
     {var $js=Odoc_messages["cross_section_not_found"];}
    return $js(name);
    };

var
 assoc_comments_text_elements=
  function(parent_name,module_list,t_ele)
   {if(typeof t_ele=="number")
     {switch(t_ele){case 0:return 0;case 1:return 1;}}
    else
     {switch(t_ele[0])
       {case 4:
         return [4,assoc_comments_text(parent_name,module_list,t_ele[1])];
        case 5:
         return [5,assoc_comments_text(parent_name,module_list,t_ele[1])];
        case 6:
         return [6,assoc_comments_text(parent_name,module_list,t_ele[1])];
        case 7:
         return [7,assoc_comments_text(parent_name,module_list,t_ele[1])];
        case 8:
         return [8,assoc_comments_text(parent_name,module_list,t_ele[1])];
        case 9:
         return [9,assoc_comments_text(parent_name,module_list,t_ele[1])];
        case 10:
         return [10,
                 List["map"]
                  (assoc_comments_text(parent_name,module_list),t_ele[1])];
         
        case 11:
         return [11,
                 List["map"]
                  (assoc_comments_text(parent_name,module_list),t_ele[1])];
         
        case 12:
         return [12,assoc_comments_text(parent_name,module_list,t_ele[1])];
        case 13:
         return [13,
                 t_ele[1],
                 t_ele[2],
                 assoc_comments_text(parent_name,module_list,t_ele[3])];
         
        case 15:
         return [15,
                 t_ele[1],
                 assoc_comments_text(parent_name,module_list,t_ele[2])];
         
        case 16:
         var match=t_ele[2];
         
         var initial_name=t_ele[1];
         
         if(match)
          {var text_option=t_ele[3];
           
           var kind=match[1];
           
           var
            iter_parent=
             function(parent_name$1,name)
              {var v=[0,name,[0,kind]];
               
               if(was_verified(v))
                {return [16,name,[0,kind],text_option];}
               else
                {if("unknown primitive:isint")
                  {if("unknown primitive:isint")
                    {switch(kind[0])
                      {case 0:var f$1=module_exists;
                       case 1:var f$1=module_type_exists;
                       case 2:var f$1=class_exists;
                       case 3:var f$1=class_type_exists;
                       case 4:var f$1=value_exists;
                       case 5:var f$1=type_exists;
                       case 6:var f$1=extension_exists;
                       case 7:var f$1=exception_exists;
                       case 8:var f$1=attribute_exists;
                       case 9:var f$1=method_exists;
                       case 10:var f$1=recfield_exists;
                       case 11:var f$1=const_exists;
                       }
                     }
                   else
                    {throw [0,Assert_failure,[0,"odoc_cross.ml",808,37]];}
                   
                   if(f$1(name))
                    {add_verified(v);var res=[0,name,[0,kind]];}
                   else
                    {var res=[0,name,0];}
                   }
                 else
                  {try
                    {var
                      re=
                       Str["regexp"]
                        (Pervasives["^"]
                          ("^",Pervasives["^"](Str["quote"](name),"$")));
                     
                     var t=Odoc_search["find_section"](module_list,re);
                     
                     var v2=[0,name,[0,[0,t]]];
                     
                     add_verified(v2);
                     var res=[0,name,[0,[0,t]]];
                     }
                   catch(exn)
                    {if(exn=Not_found){var res=[0,name,0];}else{throw exn;}}
                   }
                 
                 var match$1=res[2];
                 
                 if(match$1)
                  {return [16,res[1],[0,match$1[1]],text_option];}
                 else
                  {if(parent_name$1)
                    {var p=parent_name$1[1];
                     
                     var s=Odoc_name["father"](p);
                     
                     switch(s)
                      {case "":var parent_name$2=0;
                       default:var parent_name$2=[0,s];}
                     
                     return iter_parent
                             (parent_name$2,Odoc_name["concat"](p,initial_name));
                     }
                   else
                    {Odoc_global["pwarning"]
                      (not_found_of_kind(kind,initial_name));
                     return [16,initial_name,0,text_option];
                     }
                   }
                 }
               };
           
           return iter_parent([0,parent_name],initial_name);
           }
         else
          {var text_option$1=t_ele[3];
           
           var
            iter_parent$1=
             function(parent_name$1,name)
              {var name$1=Odoc_name["normalize_name"](name);
               
               var match$1=get_known_elements(name$1);
               
               if(match$1)
                {var ele=match$1[1];
                 
                 switch(ele)
                  {case 0:var match$2=[0,ele[1][1],0];
                   case 1:var match$2=[0,ele[1][1],1];
                   case 2:var match$2=[0,ele[1][1],2];
                   case 3:var match$2=[0,ele[1][1],3];
                   case 4:var match$2=[0,ele[1][1],4];
                   case 5:var match$2=[0,ele[1][1],5];
                   case 6:var match$2=[0,ele[1][1],6];
                   case 7:var match$2=[0,ele[1][1],7];
                   case 8:var match$2=[0,ele[1][1][1],8];
                   case 9:var match$2=[0,ele[1][1][1],9];
                   case 10:throw [0,Assert_failure,[0,"odoc_cross.ml",747,52]];
                   case 11:
                    var
                     match$2=
                      [0,
                       Printf["sprintf"]
                        ([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],ele[1][1],ele[2][1]),
                       10];
                    
                   case 12:
                    var
                     match$2=
                      [0,
                       Printf["sprintf"]
                        ([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],ele[1][1],ele[2][1]),
                       11];
                    
                   }
                 
                 var kind$1=match$2[2];
                 
                 var name$2=match$2[1];
                 
                 add_verified([0,name$2,[0,kind$1]]);
                 var res=[0,name$2,[0,kind$1]];
                 }
               else
                {try
                  {var
                    re=
                     Str["regexp"]
                      (Pervasives["^"]
                        ("^",Pervasives["^"](Str["quote"](name$1),"$")));
                   
                   var t=Odoc_search["find_section"](module_list,re);
                   
                   var v2=[0,name$1,[0,[0,t]]];
                   
                   add_verified(v2);
                   var res=[0,name$1,[0,[0,t]]];
                   }
                 catch(exn)
                  {if(exn=Not_found){var res=[0,name$1,0];}else{throw exn;}}
                 }
               
               var match$3=res[2];
               
               if(match$3)
                {return [16,res[1],[0,match$3[1]],text_option$1];}
               else
                {if(parent_name$1)
                  {var p=parent_name$1[1];
                   
                   var s=Odoc_name["father"](p);
                   
                   switch(s)
                    {case "":var parent_name$2=0;
                     default:var parent_name$2=[0,s];}
                   
                   return iter_parent$1
                           (parent_name$2,Odoc_name["concat"](p,initial_name));
                   }
                 else
                  {Odoc_global["pwarning"]
                    (Odoc_messages["cross_element_not_found"](initial_name));
                   return [16,initial_name,0,text_option$1];
                   }
                 }
               };
           
           return iter_parent$1([0,parent_name],initial_name);
           }
         
        case 17:
         return [17,assoc_comments_text(parent_name,module_list,t_ele[1])];
        case 18:
         return [18,assoc_comments_text(parent_name,module_list,t_ele[1])];
        case 19:return [19,t_ele[1]];
        case 20:
         return [20,
                 t_ele[1],
                 assoc_comments_text(parent_name,module_list,t_ele[2])];
         
        case 21:return [21,t_ele[1],t_ele[2]];
        default:return t_ele;}}
    };

var
 assoc_comments_text=
  function(parent_name,module_list,text)
   {return List["map"]
            (assoc_comments_text_elements(parent_name,module_list),text);
    };

var
 assoc_comments_info=
  function(parent_name,module_list,i)
   {var ft=assoc_comments_text(parent_name,module_list);
    
    return [0,
            ao(ft,i[1]),
            i[2],
            i[3],
            List["map"]
             (function(param){return [0,param[1],ft(param[2])];},i[4]),
            i[5],
            i[6],
            ao(ft,i[7]),
            List["map"]
             (function(param){return [0,param[1],ft(param[2])];},i[8]),
            List["map"]
             (function(param){return [0,param[1],ft(param[2])];},i[9]),
            ao(ft,i[10]),
            List["map"]
             (function(param){return [0,param[1],ft(param[2])];},i[11])];
    };

var
 assoc_comments_module_element=
  function(parent_name,module_list,m_ele)
   {switch(m_ele)
     {case 0:return [0,assoc_comments_module(module_list,m_ele[1])];
      case 1:return [1,assoc_comments_module_type(module_list,m_ele[1])];
      case 2:return m_ele;
      case 3:return [3,assoc_comments_class(module_list,m_ele[1])];
      case 4:return [4,assoc_comments_class_type(module_list,m_ele[1])];
      case 5:return [5,assoc_comments_value(module_list,m_ele[1])];
      case 6:
       return [6,
               assoc_comments_type_extension(parent_name,module_list,m_ele[1])];
       
      case 7:return [7,assoc_comments_exception(module_list,m_ele[1])];
      case 8:return [8,assoc_comments_type(module_list,m_ele[1])];
      case 9:return [9,assoc_comments_text(parent_name,module_list,m_ele[1])];
      }
    };

var
 assoc_comments_class_element=
  function(parent_name,module_list,c_ele)
   {switch(c_ele)
     {case 0:return [0,assoc_comments_attribute(module_list,c_ele[1])];
      case 1:return [1,assoc_comments_method(module_list,c_ele[1])];
      case 2:return [2,assoc_comments_text(parent_name,module_list,c_ele[1])];
      }
    };

var
 assoc_comments_module_kind=
  function(parent_name,module_list,mk)
   {switch(mk)
     {case 0:
       return [0,
               List["map"]
                (assoc_comments_module_element(parent_name,module_list),mk[1])];
       
      case 1:var exit=8;
      case 2:var exit=8;
      case 3:
       return [3,
               assoc_comments_module_kind(parent_name,module_list,mk[1]),
               assoc_comments_module_kind(parent_name,module_list,mk[2])];
       
      case 4:
       return [4,
               assoc_comments_module_type_kind(parent_name,module_list,mk[1]),
               mk[2]];
       
      case 5:
       return [5,
               assoc_comments_module_kind(parent_name,module_list,mk[1]),
               assoc_comments_module_type_kind(parent_name,module_list,mk[2])];
       
      case 6:var exit=9;
      case 7:var exit=9;
      }
    
    switch(exit){case 9:return mk;case 8:return mk;}
    };

var
 assoc_comments_module_type_kind=
  function(parent_name,module_list,mtk)
   {switch(mtk)
     {case 0:
       return [0,
               List["map"]
                (assoc_comments_module_element(parent_name,module_list),
                 mtk[1])];
       
      case 1:
       return [1,
               mtk[1],
               assoc_comments_module_type_kind(parent_name,module_list,mtk[2])];
       
      case 2:var exit=10;
      case 3:
       return [3,
               assoc_comments_module_type_kind(parent_name,module_list,mtk[1]),
               mtk[2]];
       
      case 4:var exit=10;
      }
    
    switch(exit){case 10:return mtk;}
    };

var
 assoc_comments_class_kind=
  function(parent_name,module_list,ck)
   {switch(ck)
     {case 0:
       var
        inher2=
         List["map"]
          (function(ic)
            {return [0,
                     ic[1],
                     ic[2],
                     ao(assoc_comments_text(parent_name,module_list),ic[3])];
             },
           ck[1]);
       
       return [0,
               inher2,
               List["map"]
                (assoc_comments_class_element(parent_name,module_list),ck[2])];
       
      case 1:var exit=12;
      case 2:var exit=12;
      case 3:
       return [3,
               assoc_comments_class_kind(parent_name,module_list,ck[1]),
               assoc_comments_class_type_kind(parent_name,module_list,ck[2])];
       
      }
    
    switch(exit){case 12:return ck;}
    };

var
 assoc_comments_class_type_kind=
  function(parent_name,module_list,ctk)
   {switch(ctk)
     {case 0:
       var
        inher2=
         List["map"]
          (function(ic)
            {return [0,
                     ic[1],
                     ic[2],
                     ao(assoc_comments_text(parent_name,module_list),ic[3])];
             },
           ctk[1]);
       
       return [0,
               inher2,
               List["map"]
                (assoc_comments_class_element(parent_name,module_list),ctk[2])];
       
      case 1:return ctk;
      }
    };

var
 assoc_comments_module=
  function(module_list,m)
   {m[3]=ao(assoc_comments_info(m[1],module_list),m[3]),0;
    m[6]=assoc_comments_module_kind(m[1],module_list,m[6]),0;
    return m;
    };

var
 assoc_comments_module_type=
  function(module_list,mt)
   {mt[2]=ao(assoc_comments_info(mt[1],module_list),mt[2]),0;
    mt[6]=ao(assoc_comments_module_type_kind(mt[1],module_list),mt[6]),0;
    return mt;
    };

var
 assoc_comments_class=
  function(module_list,c)
   {c[2]=ao(assoc_comments_info(c[1],module_list),c[2]),0;
    c[6]=assoc_comments_class_kind(c[1],module_list,c[6]),0;
    assoc_comments_parameter_list(c[1],module_list,c[7]);
    return c;
    };

var
 assoc_comments_class_type=
  function(module_list,ct)
   {ct[2]=ao(assoc_comments_info(ct[1],module_list),ct[2]),0;
    ct[6]=assoc_comments_class_type_kind(ct[1],module_list,ct[6]),0;
    return ct;
    };

var
 assoc_comments_parameter=
  function(parent_name,module_list,p)
   {switch(p)
     {case 0:
       var sn=p[1];
       
       return sn[3]=ao(assoc_comments_text(parent_name,module_list),sn[3]),0;
       
      case 1:
       return List["iter"]
               (assoc_comments_parameter(parent_name,module_list),p[1]);
       
      }
    };

var
 assoc_comments_parameter_list=
  function(parent_name,module_list,pl)
   {return List["iter"](assoc_comments_parameter(parent_name,module_list),pl);
    };

var
 assoc_comments_value=
  function(module_list,v)
   {var parent=Odoc_name["father"](v[1]);
    
    v[2]=ao(assoc_comments_info(parent,module_list),v[2]),0;
    assoc_comments_parameter_list(parent,module_list,v[5]);
    return v;
    };

var
 assoc_comments_extension_constructor=
  function(module_list,x)
   {var parent=Odoc_name["father"](x[1]);
    
    return x[7]=ao(assoc_comments_info(parent,module_list),x[7]),0;
    };

var
 assoc_comments_type_extension=
  function(parent_name,module_list,te)
   {te[1]=ao(assoc_comments_info(parent_name,module_list),te[1]),0;
    List["iter"](assoc_comments_extension_constructor(module_list),te[5]);
    return te;
    };

var
 assoc_comments_exception=
  function(module_list,e)
   {var parent=Odoc_name["father"](e[1]);
    
    e[2]=ao(assoc_comments_info(parent,module_list),e[2]),0;
    return e;
    };

var
 assoc_comments_type=
  function(module_list,t)
   {var parent=Odoc_name["father"](t[1]);
    
    t[2]=ao(assoc_comments_info(parent,module_list),t[2]),0;
    var match=t[4];
    
    if(typeof match=="number")
     {switch(match){case 0:var exit=17;case 1:var exit=17;}}
    else
     {switch(match[0])
       {case 0:
         List["iter"]
          (function(vc)
            {return vc[4]=ao(assoc_comments_info(parent,module_list),vc[4]),0;
             },
           match[1]);
        case 1:
         List["iter"]
          (function(rf)
            {return rf[4]=ao(assoc_comments_info(parent,module_list),rf[4]),0;
             },
           match[1])
        }}
    
    switch(exit){case 17:}
    
    return t;
    };

var
 assoc_comments_attribute=
  function(module_list,a)
   {var match=assoc_comments_value(module_list,a[1]);return a;};

var
 assoc_comments_method=
  function(module_list,m)
   {var parent_name=Odoc_name["father"](m[1][1]);
    
    var match=assoc_comments_value(module_list,m[1]);
    
    assoc_comments_parameter_list(parent_name,module_list,m[1][5]);
    return m;
    };

var
 associate_type_of_elements_in_comments=
  function(module_list)
   {return List["map"](assoc_comments_module(module_list),module_list);};

var
 associate=
  function(module_list)
   {get_alias_names(module_list);
    init_known_elements_map(module_list);
    var
     remove_doubles=
      function(acc,param)
       {if(param)
         {var q=param[2];
          
          var h=param[1];
          
          if(List["mem"](h,acc))
           {return remove_doubles(acc,q);}
          else
           {return remove_doubles([0,h,acc],q);}
          }
        else
         {return acc;}
        };
    
    var
     iter=
      function(incomplete_modules)
       {var
         match=
          List["fold_left"]
           (associate_in_module(module_list),[0,0,0,0],incomplete_modules);
        
        var remaining_no_doubles=remove_doubles(0,match[2]);
        
        var
         remaining_modules=
          List["filter"]
           (function(m){return List["mem"](m[1],remaining_no_doubles);},
            incomplete_modules);
        
        if(match[1]){return iter(remaining_modules);}else{return match[3];}
        };
    
    var names_not_found=iter(module_list);
    
    if(names_not_found)
     {List["iter"]
       (function(nf)
         {switch(nf)
           {case 0:var $js=Odoc_messages["cross_module_not_found"](nf[1]);
            case 1:
             var $js=Odoc_messages["cross_module_type_not_found"](nf[1]);
            case 2:
             var
              $js=
               Odoc_messages["cross_module_or_module_type_not_found"](nf[1]);
             
            case 3:var $js=Odoc_messages["cross_class_not_found"](nf[1]);
            case 4:var $js=Odoc_messages["cross_class_type_not_found"](nf[1]);
            case 5:
             var
              $js=
               Odoc_messages["cross_class_or_class_type_not_found"](nf[1]);
             
            case 6:var $js=Odoc_messages["cross_extension_not_found"](nf[1]);
            case 7:var $js=Odoc_messages["cross_exception_not_found"](nf[1]);
            }
          return Odoc_global["pwarning"]($js);
          },
        names_not_found)}
    else
     {}
    
    return 0;
    };


module["exports"]=
{"associate":associate,"assoc_comments_info":assoc_comments_info};

