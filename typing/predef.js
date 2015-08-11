// Generated CODE, PLEASE EDIT WITH CARE 

var Btype=require("Btype");
var List=require("List");
var Types=require("Types");
var Location=require("Location");
var Ident=require("Ident");


var builtin_idents=[0,0];

var
 wrap=
  function(create,s)
   {var id=create(s);
    
    builtin_idents[1]=/* :: */[0,/* tuple */[0,s,id],builtin_idents[1]],0;
    return id;
    };

var ident_create=wrap(Ident["create"]);

var ident_create_predef_exn=wrap(Ident["create_predef_exn"]);

var ident_int=ident_create("int");

var ident_char=ident_create("char");

var ident_string=ident_create("string");

var ident_float=ident_create("float");

var ident_bool=ident_create("bool");

var ident_unit=ident_create("unit");

var ident_exn=ident_create("exn");

var ident_array=ident_create("array");

var ident_list=ident_create("list");

var ident_option=ident_create("option");

var ident_nativeint=ident_create("nativeint");

var ident_int32=ident_create("int32");

var ident_int64=ident_create("int64");

var ident_lazy_t=ident_create("lazy_t");

var ident_bytes=ident_create("bytes");

var path_int=/* Pident */[0,ident_int];

var path_char=/* Pident */[0,ident_char];

var path_string=/* Pident */[0,ident_string];

var path_float=/* Pident */[0,ident_float];

var path_bool=/* Pident */[0,ident_bool];

var path_unit=/* Pident */[0,ident_unit];

var path_exn=/* Pident */[0,ident_exn];

var path_array=/* Pident */[0,ident_array];

var path_list=/* Pident */[0,ident_list];

var path_option=/* Pident */[0,ident_option];

var path_nativeint=/* Pident */[0,ident_nativeint];

var path_int32=/* Pident */[0,ident_int32];

var path_int64=/* Pident */[0,ident_int64];

var path_lazy_t=/* Pident */[0,ident_lazy_t];

var path_bytes=/* Pident */[0,ident_bytes];

var type_int=Btype["newgenty"](/* Tconstr */[3,path_int,0,[0,0]]);

var type_char=Btype["newgenty"](/* Tconstr */[3,path_char,0,[0,0]]);

var type_string=Btype["newgenty"](/* Tconstr */[3,path_string,0,[0,0]]);

var type_float=Btype["newgenty"](/* Tconstr */[3,path_float,0,[0,0]]);

var type_bool=Btype["newgenty"](/* Tconstr */[3,path_bool,0,[0,0]]);

var type_unit=Btype["newgenty"](/* Tconstr */[3,path_unit,0,[0,0]]);

var type_exn=Btype["newgenty"](/* Tconstr */[3,path_exn,0,[0,0]]);

var
 type_array=
  function(t)
   {return Btype["newgenty"]
            (/* Tconstr */[3,path_array,/* :: */[0,t,0],[0,0]]);
    };

var
 type_list=
  function(t)
   {return Btype["newgenty"](/* Tconstr */[3,path_list,/* :: */[0,t,0],[0,0]]);
    };

var
 type_option=
  function(t)
   {return Btype["newgenty"]
            (/* Tconstr */[3,path_option,/* :: */[0,t,0],[0,0]]);
    };

var type_nativeint=Btype["newgenty"](/* Tconstr */[3,path_nativeint,0,[0,0]]);

var type_int32=Btype["newgenty"](/* Tconstr */[3,path_int32,0,[0,0]]);

var type_int64=Btype["newgenty"](/* Tconstr */[3,path_int64,0,[0,0]]);

var
 type_lazy_t=
  function(t)
   {return Btype["newgenty"]
            (/* Tconstr */[3,path_lazy_t,/* :: */[0,t,0],[0,0]]);
    };

var type_bytes=Btype["newgenty"](/* Tconstr */[3,path_bytes,0,[0,0]]);

var ident_match_failure=ident_create_predef_exn("Match_failure");

var ident_out_of_memory=ident_create_predef_exn("Out_of_memory");

var ident_invalid_argument=ident_create_predef_exn("Invalid_argument");

var ident_failure=ident_create_predef_exn("Failure");

var ident_not_found=ident_create_predef_exn("Not_found");

var ident_sys_error=ident_create_predef_exn("Sys_error");

var ident_end_of_file=ident_create_predef_exn("End_of_file");

var ident_division_by_zero=ident_create_predef_exn("Division_by_zero");

var ident_stack_overflow=ident_create_predef_exn("Stack_overflow");

var ident_sys_blocked_io=ident_create_predef_exn("Sys_blocked_io");

var ident_assert_failure=ident_create_predef_exn("Assert_failure");

var
 ident_undefined_recursive_module=
  ident_create_predef_exn("Undefined_recursive_module");

var path_match_failure=/* Pident */[0,ident_match_failure];

var path_assert_failure=/* Pident */[0,ident_assert_failure];

var
 path_undefined_recursive_module=
  /* Pident */[0,ident_undefined_recursive_module];

var decl_abstr=/* record */[0,0,0,0,1,0,0,0,Location["none"],0];

var
 cstr=
  function(id,args){return /* record */[0,id,args,0,Location["none"],0];};

var ident_false=ident_create("false");

var ident_true=ident_create("true");

var ident_void=ident_create("()");

var ident_nil=ident_create("[]");

var ident_cons=ident_create("::");

var ident_none=ident_create("None");

var ident_some=ident_create("Some");

var
 common_initial_env=
  function(add_type,add_extension,empty_env)
   {var newrecord="unknown primitive:duprecord regular 9";
    
    newrecord[3]=
    /* Type_variant */[1,
     /* :: */[0,cstr(ident_false,0),/* :: */[0,cstr(ident_true,0),0]]],
    0;
    var decl_bool=newrecord;
    
    var newrecord$1="unknown primitive:duprecord regular 9";
    
    newrecord$1[3]=/* Type_variant */[1,/* :: */[0,cstr(ident_void,0),0]],0;
    var decl_unit=newrecord$1;
    
    var newrecord$2="unknown primitive:duprecord regular 9";
    
    newrecord$2[3]=1,0;
    var decl_exn=newrecord$2;
    
    var tvar=Btype["newgenvar"](0,0);
    
    var
     decl_array=
      /* record */[0,
       /* :: */[0,tvar,0],
       1,
       decl_abstr[3],
       decl_abstr[4],
       decl_abstr[5],
       /* :: */[0,Types["Variance"][2],0],
       decl_abstr[7],
       decl_abstr[8],
       decl_abstr[9]];
    
    var tvar$1=Btype["newgenvar"](0,0);
    
    var
     decl_list=
      /* record */[0,
       /* :: */[0,tvar$1,0],
       1,
       /* Type_variant */[1,
        /* :: */[0,
         cstr(ident_nil,0),
         /* :: */[0,
          cstr(ident_cons,/* :: */[0,tvar$1,/* :: */[0,type_list(tvar$1),0]]),
          0]]],
       decl_abstr[4],
       decl_abstr[5],
       /* :: */[0,Types["Variance"][3],0],
       decl_abstr[7],
       decl_abstr[8],
       decl_abstr[9]];
    
    var tvar$2=Btype["newgenvar"](0,0);
    
    var
     decl_option=
      /* record */[0,
       /* :: */[0,tvar$2,0],
       1,
       /* Type_variant */[1,
        /* :: */[0,
         cstr(ident_none,0),
         /* :: */[0,cstr(ident_some,/* :: */[0,tvar$2,0]),0]]],
       decl_abstr[4],
       decl_abstr[5],
       /* :: */[0,Types["Variance"][3],0],
       decl_abstr[7],
       decl_abstr[8],
       decl_abstr[9]];
    
    var tvar$3=Btype["newgenvar"](0,0);
    
    var
     decl_lazy_t=
      /* record */[0,
       /* :: */[0,tvar$3,0],
       1,
       decl_abstr[3],
       decl_abstr[4],
       decl_abstr[5],
       /* :: */[0,Types["Variance"][3],0],
       decl_abstr[7],
       decl_abstr[8],
       decl_abstr[9]];
    
    var
     add_extension$1=
      function(id,l)
       {return add_extension
                (id,/* record */[0,path_exn,0,l,0,1,Location["none"],0]);
        };
    
    return add_extension$1
            (ident_match_failure,
             /* :: */[0,
              Btype["newgenty"]
               (/* Ttuple */[2,
                 /* :: */[0,
                  type_string,
                  /* :: */[0,type_int,/* :: */[0,type_int,0]]]]),
              0],
             add_extension$1
              (ident_out_of_memory,
               0,
               add_extension$1
                (ident_stack_overflow,
                 0,
                 add_extension$1
                  (ident_invalid_argument,
                   /* :: */[0,type_string,0],
                   add_extension$1
                    (ident_failure,
                     /* :: */[0,type_string,0],
                     add_extension$1
                      (ident_not_found,
                       0,
                       add_extension$1
                        (ident_sys_blocked_io,
                         0,
                         add_extension$1
                          (ident_sys_error,
                           /* :: */[0,type_string,0],
                           add_extension$1
                            (ident_end_of_file,
                             0,
                             add_extension$1
                              (ident_division_by_zero,
                               0,
                               add_extension$1
                                (ident_assert_failure,
                                 /* :: */[0,
                                  Btype["newgenty"]
                                   (/* Ttuple */[2,
                                     /* :: */[0,
                                      type_string,
                                      /* :: */[0,type_int,/* :: */[0,type_int,0]]]]),
                                  0],
                                 add_extension$1
                                  (ident_undefined_recursive_module,
                                   /* :: */[0,
                                    Btype["newgenty"]
                                     (/* Ttuple */[2,
                                       /* :: */[0,
                                        type_string,
                                        /* :: */[0,type_int,/* :: */[0,type_int,0]]]]),
                                    0],
                                   add_type
                                    (ident_int64,
                                     decl_abstr,
                                     add_type
                                      (ident_int32,
                                       decl_abstr,
                                       add_type
                                        (ident_nativeint,
                                         decl_abstr,
                                         add_type
                                          (ident_lazy_t,
                                           decl_lazy_t,
                                           add_type
                                            (ident_option,
                                             decl_option,
                                             add_type
                                              (ident_list,
                                               decl_list,
                                               add_type
                                                (ident_array,
                                                 decl_array,
                                                 add_type
                                                  (ident_exn,
                                                   decl_exn,
                                                   add_type
                                                    (ident_unit,
                                                     decl_unit,
                                                     add_type
                                                      (ident_bool,
                                                       decl_bool,
                                                       add_type
                                                        (ident_float,
                                                         decl_abstr,
                                                         add_type
                                                          (ident_string,
                                                           decl_abstr,
                                                           add_type
                                                            (ident_char,
                                                             decl_abstr,
                                                             add_type(ident_int,decl_abstr,empty_env))))))))))))))))))))))))));
    };

var
 build_initial_env=
  function(add_type,add_exception,empty_env)
   {var common=common_initial_env(add_type,add_exception,empty_env);
    
    var safe_string=add_type(ident_bytes,decl_abstr,common);
    
    var newrecord="unknown primitive:duprecord regular 9";
    
    newrecord[5]=/* Some */[0,type_string],0;
    var decl_bytes_unsafe=newrecord;
    
    var unsafe_string=add_type(ident_bytes,decl_bytes_unsafe,common);
    
    return /* tuple */[0,safe_string,unsafe_string];
    };

var
 builtin_values=
  List["map"]
   (function(id)
     {Ident["make_global"](id);return /* tuple */[0,Ident["name"](id),id];},
    /* :: */[0,
     ident_match_failure,
     /* :: */[0,
      ident_out_of_memory,
      /* :: */[0,
       ident_stack_overflow,
       /* :: */[0,
        ident_invalid_argument,
        /* :: */[0,
         ident_failure,
         /* :: */[0,
          ident_not_found,
          /* :: */[0,
           ident_sys_error,
           /* :: */[0,
            ident_end_of_file,
            /* :: */[0,
             ident_division_by_zero,
             /* :: */[0,
              ident_sys_blocked_io,
              /* :: */[0,
               ident_assert_failure,
               /* :: */[0,ident_undefined_recursive_module,0]]]]]]]]]]]]);

Ident["set_current_time"](999);
var builtin_idents$1=List["rev"](builtin_idents[1]);

module["exports"]=
{"type_int":type_int,
 "type_char":type_char,
 "type_string":type_string,
 "type_bytes":type_bytes,
 "type_float":type_float,
 "type_bool":type_bool,
 "type_unit":type_unit,
 "type_exn":type_exn,
 "type_array":type_array,
 "type_list":type_list,
 "type_option":type_option,
 "type_nativeint":type_nativeint,
 "type_int32":type_int32,
 "type_int64":type_int64,
 "type_lazy_t":type_lazy_t,
 "path_int":path_int,
 "path_char":path_char,
 "path_string":path_string,
 "path_bytes":path_bytes,
 "path_float":path_float,
 "path_bool":path_bool,
 "path_unit":path_unit,
 "path_exn":path_exn,
 "path_array":path_array,
 "path_list":path_list,
 "path_option":path_option,
 "path_nativeint":path_nativeint,
 "path_int32":path_int32,
 "path_int64":path_int64,
 "path_lazy_t":path_lazy_t,
 "path_match_failure":path_match_failure,
 "path_assert_failure":path_assert_failure,
 "path_undefined_recursive_module":path_undefined_recursive_module,
 "build_initial_env":build_initial_env,
 "builtin_values":builtin_values,
 "builtin_idents":builtin_idents$1};

