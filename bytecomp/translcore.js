// Generated CODE, PLEASE EDIT WITH CARE 

var Typeopt=require("Typeopt");
var Typedtree=require("Typedtree");
var List=require("List");
var Pervasives=require("Pervasives");
var Btype=require("Btype");
var Predef=require("Predef");
var Matching=require("Matching");
var Env=require("Env");
var Clflags=require("Clflags");
var Format=require("Format");
var Obj=require("Obj");
var Misc=require("Misc");
var Lambda=require("Lambda");
var Parmatch=require("Parmatch");
var Translobj=require("Translobj");
var Location=require("Location");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var Config=require("Config");
var $$Array=require("Array");


var $$Error="unknown primitive:caml_set_oo_id";

var
 transl_module=
  [0,
   function(cc,rootpath,modl)
    {throw [0,Assert_failure,[0,"bytecomp/translcore.ml",34,31]];}];

var
 transl_object=
  [0,
   function(id,s,cl)
    {throw [0,Assert_failure,[0,"bytecomp/translcore.ml",38,22]];}];

var
 comparisons_table=
  Misc["create_hashtable"]
   (11,
    [0,
     [0,
      "%equal",
      [0,
       [11,[0,"caml_equal",2,1,"",0]],
       [13,0],
       [16,0],
       [11,[0,"caml_string_equal",2,0,"",0]],
       [38,0,0],
       [38,1,0],
       [38,2,0],
       1]],
     [0,
      [0,
       "%notequal",
       [0,
        [11,[0,"caml_notequal",2,1,"",0]],
        [13,1],
        [16,1],
        [11,[0,"caml_string_notequal",2,0,"",0]],
        [38,0,1],
        [38,1,1],
        [38,2,1],
        1]],
      [0,
       [0,
        "%lessthan",
        [0,
         [11,[0,"caml_lessthan",2,1,"",0]],
         [13,2],
         [16,2],
         [11,[0,"caml_string_lessthan",2,0,"",0]],
         [38,0,2],
         [38,1,2],
         [38,2,2],
         0]],
       [0,
        [0,
         "%greaterthan",
         [0,
          [11,[0,"caml_greaterthan",2,1,"",0]],
          [13,3],
          [16,3],
          [11,[0,"caml_string_greaterthan",2,0,"",0]],
          [38,0,3],
          [38,1,3],
          [38,2,3],
          0]],
        [0,
         [0,
          "%lessequal",
          [0,
           [11,[0,"caml_lessequal",2,1,"",0]],
           [13,4],
           [16,4],
           [11,[0,"caml_string_lessequal",2,0,"",0]],
           [38,0,4],
           [38,1,4],
           [38,2,4],
           0]],
         [0,
          [0,
           "%greaterequal",
           [0,
            [11,[0,"caml_greaterequal",2,1,"",0]],
            [13,5],
            [16,5],
            [11,[0,"caml_string_greaterequal",2,0,"",0]],
            [38,0,5],
            [38,1,5],
            [38,2,5],
            0]],
          [0,
           [0,
            "%compare",
            [0,
             [11,[0,"caml_compare",2,1,"",0]],
             [11,[0,"caml_int_compare",2,0,"",0]],
             [11,[0,"caml_float_compare",2,0,"",0]],
             [11,[0,"caml_string_compare",2,0,"",0]],
             [11,[0,"caml_nativeint_compare",2,0,"",0]],
             [11,[0,"caml_int32_compare",2,0,"",0]],
             [11,[0,"caml_int64_compare",2,0,"",0]],
             0]],
           0]]]]]]]);

var
 primitives_table=
  Misc["create_hashtable"]
   (57,
    /* :: */[0,
     [0,"%identity",0],
     /* :: */[0,
      [0,"%ignore",1],
      /* :: */[0,
       [0,"%field0",[6,0]],
       /* :: */[0,
        [0,"%field1",[6,1]],
        /* :: */[0,
         [0,"%setfield0",[7,0,1]],
         /* :: */[0,
          /* tuple */[0,
           "%makeblock",
           /* Pmakeblock */[5,0,Lambda["default_tag_info"],0]],
          /* :: */[0,
           /* tuple */[0,
            "%makemutable",
            /* Pmakeblock */[5,0,Lambda["default_tag_info"],1]],
           [0,
            [0,"%raise",[12,0]],
            [0,
             [0,"%reraise",[12,1]],
             [0,
              [0,"%raise_notrace",[12,2]],
              [0,
               [0,"%sequand",3],
               [0,
                [0,"%sequor",4],
                [0,
                 [0,"%boolnot",5],
                 [0,
                  [0,"%big_endian",[54,0]],
                  [0,
                   [0,"%word_size",[54,1]],
                   [0,
                    [0,"%ostype_unix",[54,2]],
                    [0,
                     [0,"%ostype_win32",[54,3]],
                     [0,
                      [0,"%ostype_cygwin",[54,4]],
                      [0,
                       [0,"%negint",6],
                       [0,
                        [0,"%succint",[14,1]],
                        [0,
                         [0,"%predint",[14,-1]],
                         [0,
                          [0,"%addint",7],
                          [0,
                           [0,"%subint",8],
                           [0,
                            [0,"%mulint",9],
                            [0,
                             [0,"%divint",10],
                             [0,
                              [0,"%modint",11],
                              [0,
                               [0,"%andint",12],
                               [0,
                                [0,"%orint",13],
                                [0,
                                 [0,"%xorint",14],
                                 [0,
                                  [0,"%lslint",15],
                                  [0,
                                   [0,"%lsrint",16],
                                   [0,
                                    [0,"%asrint",17],
                                    [0,
                                     [0,"%eq",[13,0]],
                                     [0,
                                      [0,"%noteq",[13,1]],
                                      [0,
                                       [0,"%ltint",[13,2]],
                                       [0,
                                        [0,"%leint",[13,4]],
                                        [0,
                                         [0,"%gtint",[13,3]],
                                         [0,
                                          [0,"%geint",[13,5]],
                                          [0,
                                           [0,"%incr",[15,1]],
                                           [0,
                                            [0,"%decr",[15,-1]],
                                            [0,
                                             [0,"%intoffloat",18],
                                             [0,
                                              [0,"%floatofint",19],
                                              [0,
                                               [0,"%negfloat",20],
                                               [0,
                                                [0,"%absfloat",21],
                                                [0,
                                                 [0,"%addfloat",22],
                                                 [0,
                                                  [0,"%subfloat",23],
                                                  [0,
                                                   [0,"%mulfloat",24],
                                                   [0,
                                                    [0,"%divfloat",25],
                                                    [0,
                                                     [0,"%eqfloat",[16,0]],
                                                     [0,
                                                      [0,"%noteqfloat",[16,1]],
                                                      [0,
                                                       [0,"%ltfloat",[16,2]],
                                                       [0,
                                                        [0,"%lefloat",[16,4]],
                                                        [0,
                                                         [0,"%gtfloat",[16,3]],
                                                         [0,
                                                          [0,"%gefloat",[16,5]],
                                                          [0,
                                                           [0,"%string_length",26],
                                                           [0,
                                                            [0,"%string_safe_get",29],
                                                            [0,
                                                             [0,"%string_safe_set",30],
                                                             [0,
                                                              [0,"%string_unsafe_get",27],
                                                              [0,
                                                               [0,"%string_unsafe_set",28],
                                                               [0,
                                                                [0,"%array_length",[18,0]],
                                                                [0,
                                                                 [0,"%array_safe_get",[21,0]],
                                                                 [0,
                                                                  [0,"%array_safe_set",[22,0]],
                                                                  [0,
                                                                   [0,"%array_unsafe_get",[19,0]],
                                                                   [0,
                                                                    [0,"%array_unsafe_set",[20,0]],
                                                                    [0,
                                                                     [0,"%obj_size",[18,0]],
                                                                     [0,
                                                                      [0,"%obj_field",[19,0]],
                                                                      [0,
                                                                       [0,"%obj_set_field",[20,0]],
                                                                       [0,
                                                                        [0,"%obj_is_int",31],
                                                                        [0,
                                                                         [0,"%lazy_force",2],
                                                                         [0,
                                                                          [0,"%nativeint_of_int",[23,0]],
                                                                          [0,
                                                                           [0,"%nativeint_to_int",[24,0]],
                                                                           [0,
                                                                            [0,"%nativeint_neg",[26,0]],
                                                                            [0,
                                                                             [0,"%nativeint_add",[27,0]],
                                                                             [0,
                                                                              [0,"%nativeint_sub",[28,0]],
                                                                              [0,
                                                                               [0,"%nativeint_mul",[29,0]],
                                                                               [0,
                                                                                [0,"%nativeint_div",[30,0]],
                                                                                [0,
                                                                                 [0,"%nativeint_mod",[31,0]],
                                                                                 [0,
                                                                                  [0,"%nativeint_and",[32,0]],
                                                                                  [0,
                                                                                   [0,"%nativeint_or",[33,0]],
                                                                                   [0,
                                                                                    [0,"%nativeint_xor",[34,0]],
                                                                                    [0,
                                                                                     [0,"%nativeint_lsl",[35,0]],
                                                                                     [0,
                                                                                      [0,"%nativeint_lsr",[36,0]],
                                                                                      [0,
                                                                                       [0,"%nativeint_asr",[37,0]],
                                                                                       [0,
                                                                                        [0,"%int32_of_int",[23,1]],
                                                                                        [0,
                                                                                         [0,"%int32_to_int",[24,1]],
                                                                                         [0,
                                                                                          [0,"%int32_neg",[26,1]],
                                                                                          [0,
                                                                                           [0,"%int32_add",[27,1]],
                                                                                           [0,
                                                                                            [0,"%int32_sub",[28,1]],
                                                                                            [0,
                                                                                             [0,"%int32_mul",[29,1]],
                                                                                             [0,
                                                                                              [0,"%int32_div",[30,1]],
                                                                                              [0,
                                                                                               [0,"%int32_mod",[31,1]],
                                                                                               [0,
                                                                                                [0,"%int32_and",[32,1]],
                                                                                                [0,
                                                                                                 [0,"%int32_or",[33,1]],
                                                                                                 [0,
                                                                                                  [0,"%int32_xor",[34,1]],
                                                                                                  [0,
                                                                                                   [0,"%int32_lsl",[35,1]],
                                                                                                   [0,
                                                                                                    [0,"%int32_lsr",[36,1]],
                                                                                                    [0,
                                                                                                     [0,"%int32_asr",[37,1]],
                                                                                                     [0,
                                                                                                      [0,"%int64_of_int",[23,2]],
                                                                                                      [0,
                                                                                                       [0,"%int64_to_int",[24,2]],
                                                                                                       [0,
                                                                                                        [0,"%int64_neg",[26,2]],
                                                                                                        [0,
                                                                                                         [0,"%int64_add",[27,2]],
                                                                                                         [0,
                                                                                                          [0,"%int64_sub",[28,2]],
                                                                                                          [0,
                                                                                                           [0,"%int64_mul",[29,2]],
                                                                                                           [0,
                                                                                                            [0,"%int64_div",[30,2]],
                                                                                                            [0,
                                                                                                             [0,"%int64_mod",[31,2]],
                                                                                                             [0,
                                                                                                              [0,"%int64_and",[32,2]],
                                                                                                              [0,
                                                                                                               [0,"%int64_or",[33,2]],
                                                                                                               [0,
                                                                                                                [0,"%int64_xor",[34,2]],
                                                                                                                [0,
                                                                                                                 [0,"%int64_lsl",[35,2]],
                                                                                                                 [0,
                                                                                                                  [0,"%int64_lsr",[36,2]],
                                                                                                                  [0,
                                                                                                                   [0,"%int64_asr",[37,2]],
                                                                                                                   [0,
                                                                                                                    [0,"%nativeint_of_int32",[25,1,0]],
                                                                                                                    [0,
                                                                                                                     [0,"%nativeint_to_int32",[25,0,1]],
                                                                                                                     [0,
                                                                                                                      [0,"%int64_of_int32",[25,1,2]],
                                                                                                                      [0,
                                                                                                                       [0,"%int64_to_int32",[25,2,1]],
                                                                                                                       [0,
                                                                                                                        [0,"%int64_of_nativeint",[25,0,2]],
                                                                                                                        [0,
                                                                                                                         [0,"%int64_to_nativeint",[25,2,0]],
                                                                                                                         [0,
                                                                                                                          [0,"%caml_ba_ref_1",[39,0,1,0,0]],
                                                                                                                          [0,
                                                                                                                           [0,"%caml_ba_ref_2",[39,0,2,0,0]],
                                                                                                                           [0,
                                                                                                                            [0,"%caml_ba_ref_3",[39,0,3,0,0]],
                                                                                                                            [0,
                                                                                                                             [0,"%caml_ba_set_1",[40,0,1,0,0]],
                                                                                                                             [0,
                                                                                                                              [0,"%caml_ba_set_2",[40,0,2,0,0]],
                                                                                                                              [0,
                                                                                                                               [0,"%caml_ba_set_3",[40,0,3,0,0]],
                                                                                                                               [0,
                                                                                                                                [0,"%caml_ba_unsafe_ref_1",[39,1,1,0,0]],
                                                                                                                                [0,
                                                                                                                                 [0,"%caml_ba_unsafe_ref_2",[39,1,2,0,0]],
                                                                                                                                 [0,
                                                                                                                                  [0,"%caml_ba_unsafe_ref_3",[39,1,3,0,0]],
                                                                                                                                  [0,
                                                                                                                                   [0,"%caml_ba_unsafe_set_1",[40,1,1,0,0]],
                                                                                                                                   [0,
                                                                                                                                    [0,"%caml_ba_unsafe_set_2",[40,1,2,0,0]],
                                                                                                                                    [0,
                                                                                                                                     [0,"%caml_ba_unsafe_set_3",[40,1,3,0,0]],
                                                                                                                                     [0,
                                                                                                                                      [0,"%caml_ba_dim_1",[41,1]],
                                                                                                                                      [0,
                                                                                                                                       [0,"%caml_ba_dim_2",[41,2]],
                                                                                                                                       [0,
                                                                                                                                        [0,"%caml_ba_dim_3",[41,3]],
                                                                                                                                        [0,
                                                                                                                                         [0,"%caml_string_get16",[42,0]],
                                                                                                                                         [0,
                                                                                                                                          [0,"%caml_string_get16u",[42,1]],
                                                                                                                                          [0,
                                                                                                                                           [0,"%caml_string_get32",[43,0]],
                                                                                                                                           [0,
                                                                                                                                            [0,"%caml_string_get32u",[43,1]],
                                                                                                                                            [0,
                                                                                                                                             [0,"%caml_string_get64",[44,0]],
                                                                                                                                             [0,
                                                                                                                                              [0,"%caml_string_get64u",[44,1]],
                                                                                                                                              [0,
                                                                                                                                               [0,"%caml_string_set16",[45,0]],
                                                                                                                                               [0,
                                                                                                                                                [0,"%caml_string_set16u",[45,1]],
                                                                                                                                                [0,
                                                                                                                                                 [0,"%caml_string_set32",[46,0]],
                                                                                                                                                 [0,
                                                                                                                                                  [0,"%caml_string_set32u",[46,1]],
                                                                                                                                                  [0,
                                                                                                                                                   [0,"%caml_string_set64",[47,0]],
                                                                                                                                                   [0,
                                                                                                                                                    [0,"%caml_string_set64u",[47,1]],
                                                                                                                                                    [0,
                                                                                                                                                     [0,"%caml_bigstring_get16",[48,0]],
                                                                                                                                                     [0,
                                                                                                                                                      [0,"%caml_bigstring_get16u",[48,1]],
                                                                                                                                                      [0,
                                                                                                                                                       [0,"%caml_bigstring_get32",[49,0]],
                                                                                                                                                       [0,
                                                                                                                                                        [0,"%caml_bigstring_get32u",[49,1]],
                                                                                                                                                        [0,
                                                                                                                                                         [0,"%caml_bigstring_get64",[50,0]],
                                                                                                                                                         [0,
                                                                                                                                                          [0,"%caml_bigstring_get64u",[50,1]],
                                                                                                                                                          [0,
                                                                                                                                                           [0,"%caml_bigstring_set16",[51,0]],
                                                                                                                                                           [0,
                                                                                                                                                            [0,"%caml_bigstring_set16u",[51,1]],
                                                                                                                                                            [0,
                                                                                                                                                             [0,"%caml_bigstring_set32",[52,0]],
                                                                                                                                                             [0,
                                                                                                                                                              [0,"%caml_bigstring_set32u",[52,1]],
                                                                                                                                                              [0,
                                                                                                                                                               [0,"%caml_bigstring_set64",[53,0]],
                                                                                                                                                               [0,
                                                                                                                                                                [0,"%caml_bigstring_set64u",[53,1]],
                                                                                                                                                                [0,
                                                                                                                                                                 [0,"%bswap16",34],
                                                                                                                                                                 [0,
                                                                                                                                                                  [0,"%bswap_int32",[55,1]],
                                                                                                                                                                  [0,
                                                                                                                                                                   [0,"%bswap_int64",[55,2]],
                                                                                                                                                                   [0,
                                                                                                                                                                    [0,"%bswap_native",[55,0]],
                                                                                                                                                                    [0,[0,"%int_as_pointer",35],0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]);

var prim_makearray=[0,"caml_make_vect",2,1,"",0];

var prim_obj_dup=[0,"caml_obj_dup",1,1,"",0];

var
 find_primitive=
  function(loc,prim_name)
   {var exit;
    
    switch(prim_name)
     {case "%apply":return /* Pdirapply */[1,loc];
      case "%loc_FILE":return [2,0];
      case "%loc_LINE":return [2,1];
      case "%loc_LOC":return [2,3];
      case "%loc_MODULE":return [2,2];
      case "%loc_POS":return [2,4];
      case "%revapply":return /* Prevapply */[0,loc];
      default:exit=186;}
    
    switch(exit){case 186:return Hashtbl["find"](primitives_table,prim_name);}
    };

var
 transl_prim=
  function(loc,prim,args)
   {var prim_name=prim[1];
    
    try
     {var match=Hashtbl["find"](comparisons_table,prim_name);
      
      var simplify_constant_constructor=match[8];
      
      var intcomp=match[2];
      
      var exit;
      
      if(args)
       {var arg1=args[1];
        
        var match$1=arg1[1];
        
        var exit$1;
        
        var match$2=args[2];
        
        if(match$2)
         {var match$3=match$2[1][1];
          
          switch(match$3)
           {case 8:
             switch(match$3[2][6])
              {case 0:
                if(match$2[2])
                 {exit=180;}
                else
                 {if(simplify_constant_constructor)
                   {return intcomp;}
                  else
                   {exit$1=182;}
                  }
                
               case 1:exit$1=182;
               case 2:exit$1=182;
               }
             
            case 9:
             if(match$3[2])
              {exit$1=182;}
             else
              {if(match$2[2])
                {exit=180;}
               else
                {if(simplify_constant_constructor)
                  {return intcomp;}
                 else
                  {exit$1=182;}
                 }
               }
             
            default:exit$1=182;}
          }
        else
         {exit=180;}
        
        switch(exit$1)
         {case 182:
           switch(match$1)
            {case 8:
              switch(match$1[2][6])
               {case 0:
                 if(args[2][2])
                  {exit=180;}
                 else
                  {if(simplify_constant_constructor)
                    {return intcomp;}
                   else
                    {"unknown block:(exit 181)";}
                   }
                 
                case 1:"unknown block:(exit 181)";
                case 2:"unknown block:(exit 181)";
                }
              
             case 9:
              if(match$1[2])
               {"unknown block:(exit 181)";}
              else
               {if(args[2][2])
                 {exit=180;}
                else
                 {if(simplify_constant_constructor)
                   {return intcomp;}
                  else
                   {"unknown block:(exit 181)";}
                  }
                }
              
             default:"unknown block:(exit 181)";}
           
          case 181:
           if(args[2][2])
            {exit=180;}
           else
            {if
              (Typeopt["has_base_type"](arg1,Predef["path_int"])||
               Typeopt["has_base_type"](arg1,Predef["path_char"]))
              {return intcomp;}
             else
              {if(Typeopt["has_base_type"](arg1,Predef["path_float"]))
                {return match[3];}
               else
                {if(Typeopt["has_base_type"](arg1,Predef["path_string"]))
                  {return match[4];}
                 else
                  {if(Typeopt["has_base_type"](arg1,Predef["path_nativeint"]))
                    {return match[5];}
                   else
                    {if(Typeopt["has_base_type"](arg1,Predef["path_int32"]))
                      {return match[6];}
                     else
                      {if(Typeopt["has_base_type"](arg1,Predef["path_int64"]))
                        {return match[7];}
                       else
                        {exit=180;}
                       }
                     }
                   }
                 }
               }
             }
           
          }
        }
      else
       {exit=180;}
      
      switch(exit){case 180:return match[1];}
      }
    catch(exn)
     {if(exn=Not_found)
       {try
         {var p=find_primitive(loc,prim_name);
          
          var exit$2;
          
          if(typeof p=="number")
           {switch(p){}}
          else
           {switch(p[0])
             {case 7:
               if(args)
                {var match$4=args[2];
                 
                 if(match$4)
                  {if(match$4[2])
                    {exit$2=177;}
                   else
                    {return /* Psetfield */[7,
                             p[1],
                             Typeopt["maybe_pointer"](match$4[1])];
                     }
                   }
                 else
                  {exit$2=177;}
                 }
               else
                {exit$2=177;}
               
              case 18:
               if(p[1]!=0)
                {exit$2=177;}
               else
                {if(args)
                  {if(args[2])
                    {exit$2=177;}
                   else
                    {return /* Parraylength */[18,
                             Typeopt["array_kind"](args[1])];
                     }
                   }
                 else
                  {exit$2=177;}
                 }
               
              case 19:
               if(p[1]!=0)
                {exit$2=177;}
               else
                {if(args)
                  {return /* Parrayrefu */[19,Typeopt["array_kind"](args[1])];
                   }
                 else
                  {exit$2=177;}
                 }
               
              case 20:
               if(p[1]!=0)
                {exit$2=177;}
               else
                {if(args)
                  {return /* Parraysetu */[20,Typeopt["array_kind"](args[1])];
                   }
                 else
                  {exit$2=177;}
                 }
               
              case 21:
               if(p[1]!=0)
                {exit$2=177;}
               else
                {if(args)
                  {return /* Parrayrefs */[21,Typeopt["array_kind"](args[1])];
                   }
                 else
                  {exit$2=177;}
                 }
               
              case 22:
               if(p[1]!=0)
                {exit$2=177;}
               else
                {if(args)
                  {return /* Parraysets */[22,Typeopt["array_kind"](args[1])];
                   }
                 else
                  {exit$2=177;}
                 }
               
              case 39:
               if(p[3]!=0)
                {exit$2=177;}
               else
                {if(p[4]!=0)
                  {exit$2=177;}
                 else
                  {if(args)
                    {var match$5=Typeopt["bigarray_kind_and_layout"](args[1]);
                     
                     return /* Pbigarrayref */[39,
                             p[1],
                             p[2],
                             match$5[1],
                             match$5[2]];
                     }
                   else
                    {exit$2=177;}
                   }
                 }
               
              case 40:
               if(p[3]!=0)
                {exit$2=177;}
               else
                {if(p[4]!=0)
                  {exit$2=177;}
                 else
                  {if(args)
                    {var match$6=Typeopt["bigarray_kind_and_layout"](args[1]);
                     
                     return /* Pbigarrayset */[40,
                             p[1],
                             p[2],
                             match$6[1],
                             match$6[2]];
                     }
                   else
                    {exit$2=177;}
                   }
                 }
               
              default:exit$2=177;}}
          
          switch(exit$2){case 177:return p;}
          }
        catch(exn$1)
         {if(exn$1=Not_found)
           {if(prim_name["length"]>0&&(prim_name[0]=37))
             {throw [0,
                     $$Error,
                     loc,
                     /* Unknown_builtin_primitive */[0,prim_name]];
              }
            else
             {}
            
            return /* Pccall */[11,prim];
            }
          else
           {throw exn$1;}
          }
        }
      else
       {throw exn;}
      }
    };

var
 transl_primitive=
  function(loc,p)
   {try
     {var match=Hashtbl["find"](comparisons_table,p[1]);var prim=match[1];}
    catch(exn)
     {if(exn=Not_found)
       {try
         {var prim=find_primitive(loc,p[1]);}
        catch(exn$1)
         {if(exn$1=Not_found){var prim=/* Pccall */[11,p];}else{throw exn$1;}}
        }
      else
       {throw exn;}
      }
    
    var exit;
    
    if(typeof prim=="number")
     {switch(prim)
       {case 2:
         var parm=Ident["create"]("prim");
         
         return /* Lfunction */[3,
                 0,
                 /* :: */[0,parm,0],
                 Matching["inline_lazy_force"]
                  (/* Lvar */[0,parm],Location["none"])];
         
        }}
    else
     {switch(prim[0])
       {case 2:
         var lam=Lambda["lam_of_loc"](prim[1],loc);
         
         var match$1=p[2];
         
         if(match$1!=0)
          {if(match$1!=1)
            {throw [0,Assert_failure,[0,"bytecomp/translcore.ml",425,13]];}
           else
            {var param=Ident["create"]("prim");
             
             return /* Lfunction */[3,
                     0,
                     /* :: */[0,param,0],
                     /* Lprim */[6,
                      /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                      /* :: */[0,lam,/* :: */[0,/* Lvar */[0,param],0]]]];
             }
           }
         else
          {return lam;}
         
        default:exit=168;}}
    
    switch(exit)
     {case 168:
       var
        make_params=
         function(n)
          {if(n<=0)
            {return 0;}
           else
            {return /* :: */[0,Ident["create"]("prim"),make_params(n-1)];}
           };
       
       var params=make_params(p[2]);
       
       return /* Lfunction */[3,
               0,
               params,
               /* Lprim */[6,
                prim,
                List["map"](function(id){return /* Lvar */[0,id];},params)]];
       
      }
    };

var
 check_recursive_lambda=
  function(idlist,lam)
   {var
     check_top=
      function(idlist$1,lam$1)
       {var exit;
        
        switch(lam$1)
         {case 0:return !List["mem"](lam$1[1],idlist$1);
          case 4:
           var arg=lam$1[3];
           
           if(check_recursive_recordwith(idlist$1,lam$1))
            {return 1;}
           else
            {return check(idlist$1,arg)&&
                    check_top(add_let(lam$1[2],arg,idlist$1),lam$1[4]);
             }
           
          case 5:
           var bindings=lam$1[1];
           
           var idlist$prime=add_letrec(bindings,idlist$1);
           
           return List["for_all"]
                   (function(param){return check(idlist$prime,param[2]);},
                    bindings)&&
                  check_top(idlist$prime,lam$1[2]);
           
          case 6:
           var match=lam$1[1];
           
           if(typeof match=="number")
            {switch(match){}}
           else
            {switch(match[0])
              {case 17:if(match[1]!=0){exit=152;}else{return 0;}
               default:exit=152;}}
           
          case 13:
           return check(idlist$1,lam$1[1])&&check_top(idlist$1,lam$1[2]);
          case 18:return check_top(idlist$1,lam$1[1]);
          default:exit=152;}
        
        switch(exit){case 152:return check(idlist$1,lam$1);}
        };
    
    var
     check=
      function(idlist$1,lam$1)
       {var exit;
        
        switch(lam$1)
         {case 0:exit=157;
          case 3:exit=157;
          case 4:
           var arg=lam$1[3];
           
           if(check_recursive_recordwith(idlist$1,lam$1))
            {return 1;}
           else
            {return check(idlist$1,arg)&&
                    check(add_let(lam$1[2],arg,idlist$1),lam$1[4]);
             }
           
          case 5:
           var bindings=lam$1[1];
           
           var idlist$prime=add_letrec(bindings,idlist$1);
           
           return List["for_all"]
                   (function(param){return check(idlist$prime,param[2]);},
                    bindings)&&
                  check(idlist$prime,lam$1[2]);
           
          case 6:
           var exit$1;
           
           var $js=lam$1[1];
           if(typeof $js=="number")
            {switch($js){}}
           else
            {switch($js[0])
              {case 5:exit$1=156;case 17:exit$1=156;default:exit=155;}}
           
           switch(exit$1)
            {case 156:return List["for_all"](check(idlist$1),lam$1[2]);}
           
          case 13:return check(idlist$1,lam$1[1])&&check(idlist$1,lam$1[2]);
          case 18:return check(idlist$1,lam$1[1]);
          default:exit=155;}
        
        switch(exit)
         {case 157:return 1;
          case 155:
           var fv=Lambda["free_variables"](lam$1);
           
           return !List["exists"]
                   (function(id){return Lambda["IdentSet"][3](id,fv);},
                    idlist$1);
           
          }
        };
    
    var
     add_let=
      function(id,arg,idlist$1)
       {var fv=Lambda["free_variables"](arg);
        
        if
         (List["exists"]
           (function(id$1){return Lambda["IdentSet"][3](id$1,fv);},idlist$1))
         {return /* :: */[0,id,idlist$1];}
        else
         {return idlist$1;}
        };
    
    var
     add_letrec=
      function(bindings,idlist$1)
       {return List["fold_right"]
                (function(param,idl){return add_let(param[1],param[2],idl);},
                 bindings,
                 idlist$1);
        };
    
    var
     check_recursive_recordwith=
      function(idlist$1,param)
       {var exit;
        
        switch(param)
         {case 4:
           if(param[1]!=0)
            {exit=159;}
           else
            {var match=param[3];
             
             switch(match)
              {case 6:
                var $js=match[1];
                if(typeof $js=="number")
                 {switch($js){}}
                else
                 {switch($js[0])
                   {case 10:
                     var match$1=match[2];
                     
                     if(match$1)
                      {if(match$1[2])
                        {exit=159;}
                       else
                        {return check_top(idlist$1,match$1[1])&&
                                check_recordwith_updates(idlist$1,param[2],param[4]);
                         }
                       }
                     else
                      {exit=159;}
                     
                    default:exit=159;}}
                
               default:exit=159;}
             }
           
          default:exit=159;}
        
        switch(exit){case 159:return 0;}
        };
    
    var
     check_recordwith_updates=
      function(idlist$1,id1,param)
       {var exit;
        
        switch(param)
         {case 0:return "unknown primitive:caml_equal";
          case 13:
           var match=param[1];
           
           switch(match)
            {case 6:
              var exit$1;
              
              var $js=match[1];
              if(typeof $js=="number")
               {switch($js){}}
              else
               {switch($js[0])
                 {case 7:exit$1=161;case 9:exit$1=161;default:exit=160;}}
              
              switch(exit$1)
               {case 161:
                 var match$1=match[2];
                 
                 if(match$1)
                  {var match$2=match$1[1];
                   
                   switch(match$2)
                    {case 0:
                      var match$3=match$1[2];
                      
                      if(match$3)
                       {if(match$3[2])
                         {exit=160;}
                        else
                         {return "unknown primitive:caml_equal"&&
                                 check(idlist$1,match$3[1])&&
                                 check_recordwith_updates(idlist$1,id1,param[2]);
                          }
                        }
                      else
                       {exit=160;}
                      
                     default:exit=160;}
                   }
                 else
                  {exit=160;}
                 
                }
              
             default:exit=160;}
           
          default:exit=160;}
        
        switch(exit){case 160:return 0;}
        };
    
    return check_top(idlist,lam);
    };

var Not_constant="unknown primitive:caml_set_oo_id";

var
 extract_constant=
  function(param)
   {switch(param){case 1:return param[1];default:throw Not_constant;}};

var
 extract_float=
  function(param)
   {var exit;
    
    switch(param)
     {case 0:
       var match=param[1];
       
       switch(match){case 3:return match[1];default:exit=147;}
       
      default:exit=147;}
    
    switch(exit)
     {case 147:return Misc["fatal_error"]("Translcore.extract_float");}
    };

var
 name_pattern=
  function($$default,param)
   {if(param)
     {var match=param[1][1][1];
      
      var exit;
      
      if(typeof match=="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 0:return match[1];case 1:return match[2];default:exit=146;}}
      
      switch(exit){case 146:return name_pattern($$default,param[2]);}
      }
    else
     {return Ident["create"]($$default);}
    };

var
 push_defaults=
  function(loc,bindings,cases,partial)
   {var exit;
    
    if(cases)
     {var $$case=cases[1];
      
      var pat=$$case[1];
      
      var exit$1;
      
      if($$case[2])
       {exit$1=144;}
      else
       {var exp=$$case[3];
        
        var match=exp[1];
        
        switch(match)
         {case 2:
           if(match[1]!=0)
            {exit$1=144;}
           else
            {var e2=match[3];
             
             switch(e2[1])
              {case 3:
                var match$1=exp[6];
                
                if(match$1)
                 {switch(match$1[1][1][1])
                   {case "#default":
                     if(match$1[2])
                      {exit$1=144;}
                     else
                      {if(cases[2])
                        {exit$1=144;}
                       else
                        {return push_defaults
                                 (loc,
                                  /* :: */[0,match[2],bindings],
                                  /* :: */[0,/* record */[0,pat,0,e2],0],
                                  partial);
                         }
                       }
                     
                    default:exit$1=144;}
                  }
                else
                 {exit$1=144;}
                
               default:exit$1=144;}
             }
           
          case 3:
           if(cases[2])
            {exit$1=144;}
           else
            {var partial$1=match[3];
             
             var pl=push_defaults(exp[2],bindings,match[2],partial$1);
             
             var newrecord="unknown primitive:duprecord regular 6";
             
             return /* :: */[0,
                     /* record */[0,
                      pat,
                      0,
                      (newrecord[1]=
                       /* Texp_function */[3,match[1],pl,partial$1],
                       0,
                       newrecord)],
                     0];
             }
           
          default:exit$1=144;}
        }
      
      switch(exit$1)
       {case 144:
         var exp$1=$$case[3];
         
         if(cases[2])
          {if(bindings!=0)
            {var param=name_pattern("param",cases);
             
             var name=Ident["name"](param);
             
             var
              exp$2=
               /* record */[0,
                /* Texp_match */[5,
                 /* record */[0,
                  /* Texp_ident */[0,
                   /* Pident */[0,param],
                   Typedtree["mknoloc"](/* Lident */[0,name]),
                   /* record */[0,pat[4],0,Location["none"],0]],
                  exp$1[2],
                  exp$1[3],
                  pat[4],
                  exp$1[5],
                  exp$1[6]],
                 cases,
                 0,
                 partial],
                loc,
                exp$1[3],
                exp$1[4],
                exp$1[5],
                exp$1[6]];
             
             var newrecord$1="unknown primitive:duprecord regular 6";
             
             return push_defaults
                     (loc,
                      bindings,
                      /* :: */[0,
                       /* record */[0,
                        (newrecord$1[1]=
                         /* Tpat_var */[0,param,Typedtree["mknoloc"](name)],
                         0,
                         newrecord$1),
                        0,
                        exp$2],
                       0],
                      1);
             }
           else
            {exit=143;}
           }
         else
          {var
            exp$3=
             List["fold_left"]
              (function(exp$4,binds)
                {var newrecord$2="unknown primitive:duprecord regular 6";
                 
                 newrecord$2[1]=/* Texp_let */[2,0,binds,exp$4],0;
                 return newrecord$2;
                 },
               $$case[3],
               bindings);
           
           return /* :: */[0,/* record */[0,$$case[1],$$case[2],exp$3],0];
           }
         
        }
      }
    else
     {exit=143;}
    
    switch(exit){case 143:return cases;}
    };

var
 event_before=
  function(exp,lam)
   {switch(lam)
     {case 9:return lam;
      default:
       if(Clflags["debug"][1])
        {return /* Levent */[18,
                 lam,
                 /* record */[0,exp[2],0,0,Env["summary"](exp[5])]];
         }
       else
        {return lam;}
       }
    };

var
 event_after=
  function(exp,lam)
   {if(Clflags["debug"][1])
     {return /* Levent */[18,
              lam,
              /* record */[0,
               exp[2],
               /* Lev_after */[0,exp[4]],
               0,
               Env["summary"](exp[5])]];
      }
    else
     {return lam;}
    };

var
 event_function=
  function(exp,lam)
   {if(Clflags["debug"][1])
     {var repr=/* Some */[0,[0,0]];
      
      var match=lam(repr);
      
      return /* tuple */[0,
              match[1],
              /* Levent */[18,
               match[2],
               /* record */[0,exp[2],1,repr,Env["summary"](exp[5])]]];
      }
    else
     {return lam(0);}
    };

var
 primitive_is_ccall=
  function(param)
   {var exit;
    
    if(typeof param=="number")
     {switch(param){case 29:exit=129;case 30:exit=129;}}
    else
     {switch(param[0])
       {case 10:exit=129;
        case 11:exit=129;
        case 21:exit=129;
        case 22:exit=129;
        case 39:exit=129;
        case 40:exit=129;
        default:exit=130;}}
    
    switch(exit){case 130:return 0;case 129:return 1;}
    };

var
 assert_failed=
  function(exp)
   {var match=Location["get_pos_info"](exp[2][1]);
    
    return /* Lprim */[6,
            [12,0],
            /* :: */[0,
             event_after
              (exp,
               /* Lprim */[6,
                /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                /* :: */[0,
                 Lambda["transl_normal_path"](Predef["path_assert_failure"]),
                 /* :: */[0,
                  /* Lconst */[1,
                   /* Const_block */[2,
                    0,
                    Lambda["default_tag_info"],
                    /* :: */[0,
                     /* Const_base */[0,/* Const_string */[2,match[1],0]],
                     /* :: */[0,
                      /* Const_base */[0,/* Const_int */[0,match[2]]],
                      /* :: */[0,
                       /* Const_base */[0,/* Const_int */[0,match[3]]],
                       0]]]]],
                  0]]]),
             0]];
    };

var
 cut=
  function(n,l)
   {if(n=0)
     {return /* tuple */[0,0,l];}
    else
     {if(l)
       {var match=cut(n-1,l[2]);
        
        return /* tuple */[0,/* :: */[0,l[1],match[1]],match[2]];
        }
      else
       {return Pervasives["failwith"]("Translcore.cut");}
      }
    };

var try_ids=Hashtbl["create"](0,8);

var
 transl_exp=
  function(e)
   {var match=e[1];
    
    var exit;
    
    switch(match)
     {case 3:exit=4;case 16:exit=4;case 17:exit=4;default:var eval_once=1;}
    
    switch(exit){case 4:var eval_once=0;}
    
    if(eval_once)
     {return transl_exp0(e);}
    else
     {return Translobj["oo_wrap"](e[5],1,transl_exp0,e);}
    };

var
 transl_exp0=
  function(e)
   {var match=e[1];
    
    switch(match)
     {case 0:
       var match$1=match[3][2];
       
       var exit;
       
       if(typeof match$1=="number")
        {switch(match$1){case 0:exit=69;case 1:exit=70;}}
       else
        {switch(match$1[0])
          {case 0:
            var p=match$1[1];
            
            var public_send="unknown primitive:caml_string_equal";
            
            if(public_send||"unknown primitive:caml_string_equal")
             {if(public_send){var kind=1;}else{var kind=0;}
              
              var obj=Ident["create"]("obj");
              
              var meth=Ident["create"]("meth");
              
              return /* Lfunction */[3,
                      0,
                      /* :: */[0,obj,/* :: */[0,meth,0]],
                      /* Lsend */[17,
                       kind,
                       /* Lvar */[0,meth],
                       /* Lvar */[0,obj],
                       0,
                       e[2]]];
              }
            else
             {if("unknown primitive:caml_string_equal")
               {var obj$1=Ident["create"]("obj");
                
                var meth$1=Ident["create"]("meth");
                
                var cache=Ident["create"]("cache");
                
                var pos=Ident["create"]("pos");
                
                return /* Lfunction */[3,
                        0,
                        /* :: */[0,
                         obj$1,
                         /* :: */[0,meth$1,/* :: */[0,cache,/* :: */[0,pos,0]]]],
                        /* Lsend */[17,
                         2,
                         /* Lvar */[0,meth$1],
                         /* Lvar */[0,obj$1],
                         /* :: */[0,
                          /* Lvar */[0,cache],
                          /* :: */[0,/* Lvar */[0,pos],0]],
                         e[2]]];
                }
              else
               {return transl_primitive(e[2],p);}
              }
            
           case 1:exit=70;
           case 2:exit=69;
           case 3:throw [0,$$Error,e[2],2];
           }}
       
       switch(exit)
        {case 70:
          return Misc["fatal_error"]("Translcore.transl_exp: bad Texp_ident");
         case 69:
          return Lambda["transl_path"](/* Some */[0,e[2]],e[5],match[1]);
         }
       
      case 1:return /* Lconst */[1,/* Const_base */[0,match[1]]];
      case 2:
       var body=match[3];
       
       return transl_let
               (match[1],match[2],event_before(body,transl_exp(body)));
       
      case 3:
       var partial=match[3];
       
       var pat_expr_list=match[2];
       
       var
        match$2=
         event_function
          (e,
           function(repr)
            {var pl=push_defaults(e[2],0,pat_expr_list,partial);
             
             return transl_function
                     (e[2],Clflags["native_code"][1],repr,partial,pl);
             });
       
       var match$3=match$2[1];
       
       return /* Lfunction */[3,match$3[1],match$3[2],match$2[2]];
       
      case 4:
       var funct=match[1];
       
       var match$4=funct[1];
       
       var exit$1;
       
       switch(match$4)
        {case 0:
          var match$5=match$4[3][2];
          
          if(typeof match$5=="number")
           {switch(match$5){}}
          else
           {switch(match$5[0])
             {case 0:
               var oargs=match[2];
               
               var p$1=match$5[1];
               
               if
                (List["length"](oargs)>=
                 p$1[2]&&
                 List["for_all"](function(param){return param[2]!=0;},oargs))
                {var match$6=cut(p$1[2],oargs);
                 
                 var args$prime=match$6[2];
                 
                 var
                  wrap=
                   function(f)
                    {if(args$prime=0)
                      {return event_after(e,f);}
                     else
                      {return event_after(e,transl_apply(f,args$prime,e[2]));}
                     };
                 
                 var
                  wrap0=
                   function(f)
                    {if(args$prime=0){return f;}else{return wrap(f);}};
                 
                 var
                  args=
                   List["map"]
                    (function(param)
                      {var match$7=param[2];
                       
                       if(match$7)
                        {return match$7[1];}
                       else
                        {throw [0,
                                Assert_failure,
                                [0,"bytecomp/translcore.ml",685,53]];
                         }
                       },
                     match$6[1]);
                 
                 var argl=transl_list(args);
                 
                 var
                  public_send$1=
                   "unknown primitive:caml_string_equal"||
                   !Clflags["native_code"][1]&&
                   "unknown primitive:caml_string_equal";
                 
                 if(public_send$1||"unknown primitive:caml_string_equal")
                  {if(public_send$1){var kind$1=1;}else{var kind$1=0;}
                   
                   var obj$2=List["hd"](argl);
                   
                   return wrap
                           (/* Lsend */[17,kind$1,List["nth"](argl,1),obj$2,0,e[2]]);
                   }
                 else
                  {if("unknown primitive:caml_string_equal")
                    {var exit$2;
                     
                     if(argl)
                      {var match$7=argl[2];
                       
                       if(match$7)
                        {var match$8=match$7[2];
                         
                         if(match$8)
                          {var match$9=match$8[2];
                           
                           if(match$9)
                            {if(match$9[2])
                              {exit$2=27;}
                             else
                              {return wrap
                                       (/* Lsend */[17,
                                         2,
                                         match$7[1],
                                         argl[1],
                                         /* :: */[0,match$8[1],/* :: */[0,match$9[1],0]],
                                         e[2]]);
                               }
                             }
                           else
                            {exit$2=27;}
                           }
                         else
                          {exit$2=27;}
                         }
                       else
                        {exit$2=27;}
                       }
                     else
                      {exit$2=27;}
                     
                     switch(exit$2)
                      {case 27:
                        throw [0,Assert_failure,[0,"bytecomp/translcore.ml",696,15]];
                        
                       }
                     }
                   else
                    {var prim=transl_prim(e[2],p$1,args);
                     
                     var exit$3;
                     
                     if(typeof prim=="number")
                      {switch(prim){}}
                     else
                      {switch(prim[0])
                        {case 2:
                          var kind$2=prim[1];
                          
                          if(args)
                           {if(args[2])
                             {throw [0,
                                     Assert_failure,
                                     [0,"bytecomp/translcore.ml",716,25]];
                              }
                            else
                             {var lam=Lambda["lam_of_loc"](kind$2,args[1][2]);
                              
                              return /* Lprim */[6,
                                      /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                                      /* :: */[0,lam,argl]];
                              }
                            }
                          else
                           {return Lambda["lam_of_loc"](kind$2,e[2]);}
                          
                         case 12:
                          if(args)
                           {if(args[2])
                             {exit$3=24;}
                            else
                             {var k=prim[1];
                              
                              var targ=List["hd"](argl);
                              
                              var exit$4;
                              
                              if(k!=0)
                               {exit$4=17;}
                              else
                               {switch(targ)
                                 {case 0:
                                   if(Hashtbl["mem"](try_ids,targ[1]))
                                    {var k$1=1;}
                                   else
                                    {exit$4=17;}
                                   
                                  default:exit$4=17;}
                                }
                              
                              switch(exit$4){case 17:var k$1=k;}
                              
                              return wrap0
                                      (/* Lprim */[6,
                                        /* Praise */[12,k$1],
                                        /* :: */[0,event_after(args[1],targ),0]]);
                              }
                            }
                          else
                           {exit$3=24;}
                          
                         default:exit$3=24;}}
                     
                     switch(exit$3)
                      {case 24:
                        var exit$5;
                        
                        if("unknown primitive:isint")
                         {if(prim!=2)
                           {exit$5=22;}
                          else
                           {var exit$6;
                            
                            if(argl)
                             {if(argl[2])
                               {exit$6=23;}
                              else
                               {return wrap(Matching["inline_lazy_force"](argl[1],e[2]));}
                              }
                            else
                             {exit$6=23;}
                            
                            switch(exit$6)
                             {case 23:
                               throw [0,Assert_failure,[0,"bytecomp/translcore.ml",721,33]];
                               
                              }
                            }
                          }
                        else
                         {exit$5=22;}
                        
                        switch(exit$5)
                         {case 22:
                           var p$2=/* Lprim */[6,prim,argl];
                           
                           if(primitive_is_ccall(prim))
                            {return wrap(p$2);}
                           else
                            {return wrap0(p$2);}
                           
                          }
                        
                       }
                     }
                   }
                 }
               else
                {exit$1=71;}
               
              default:exit$1=71;}}
          
         default:exit$1=71;}
       
       switch(exit$1)
        {case 71:
          return event_after(e,transl_apply(transl_exp(funct),match[2],e[2]));
         }
       
      case 5:return transl_match(e,match[1],match[2],match[3],match[4]);
      case 6:
       var pat_expr_list$1=match[2];
       
       var id=name_pattern("exn",pat_expr_list$1);
       
       return /* Ltrywith */[11,
               transl_exp(match[1]),
               id,
               Matching["for_trywith"]
                (/* Lvar */[0,id],transl_cases_try(pat_expr_list$1))];
       
      case 7:
       var ll=transl_list(match[1]);
       
       var tag_info=0;
       
       try
        {return /* Lconst */[1,
                 /* Const_block */[2,
                  0,
                  tag_info,
                  List["map"](extract_constant,ll)]];
         }
       catch(exn)
        {if(exn=Not_constant)
          {return /* Lprim */[6,/* Pmakeblock */[5,0,tag_info,0],ll];}
         else
          {throw exn;}
         }
       
      case 8:
       var cstr=match[2];
       
       var ll$1=transl_list(match[3]);
       
       var match$10=cstr[6];
       
       switch(match$10)
        {case 0:
          return /* Lconst */[1,
                  /* Const_pointer */[1,
                   match$10[1],
                   /* NullConstructor */[0,cstr[1]]]];
          
         case 1:
          var n=match$10[1];
          
          var tag_info$1=/* Constructor */[0,cstr[1]];
          
          try
           {return /* Lconst */[1,
                    /* Const_block */[2,
                     n,
                     tag_info$1,
                     List["map"](extract_constant,ll$1)]];
            }
          catch(exn$1)
           {if(exn$1=Not_constant)
             {return /* Lprim */[6,/* Pmakeblock */[5,n,tag_info$1,0],ll$1];}
            else
             {throw exn$1;}
            }
          
         case 2:
          var path=match$10[1];
          
          if(match$10[2])
           {return Lambda["transl_path"](0,e[5],path);}
          else
           {return /* Lprim */[6,
                    /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                    /* :: */[0,Lambda["transl_path"](0,e[5],path),ll$1]];
            }
          
         }
       
      case 9:
       var arg=match[2];
       
       var l=match[1];
       
       var tag=Btype["hash_variant"](l);
       
       if(arg)
        {var lam$1=transl_exp(arg[1]);
         
         var tag_info$2=/* Variant */[1,l];
         
         try
          {return /* Lconst */[1,
                   /* Const_block */[2,
                    0,
                    tag_info$2,
                    /* :: */[0,
                     /* Const_base */[0,/* Const_int */[0,tag]],
                     /* :: */[0,extract_constant(lam$1),0]]]];
           }
         catch(exn$2)
          {if(exn$2=Not_constant)
            {return /* Lprim */[6,
                     /* Pmakeblock */[5,0,tag_info$2,0],
                     /* :: */[0,
                      /* Lconst */[1,/* Const_base */[0,/* Const_int */[0,tag]]],
                      /* :: */[0,lam$1,0]]];
             }
           else
            {throw exn$2;}
           }
         }
       else
        {return /* Lconst */[1,
                 /* Const_pointer */[1,tag,/* NullVariant */[1,l]]];
         }
       
      case 10:
       var lbl_expr_list=match[1];
       
       if(lbl_expr_list)
        {var lbl1=lbl_expr_list[1][2];
         
         return transl_record(lbl1[6],lbl1[7],lbl_expr_list,match[2]);
         }
       else
        {return Misc["fatal_error"]("Translcore.transl_exp: bad Texp_record");
         }
       
      case 11:
       var lbl=match[3];
       
       var match$11=lbl[7];
       
       if(match$11!=0)
        {var access=/* Pfloatfield */[8,lbl[5]];}
       else
        {var access=/* Pfield */[6,lbl[5]];}
       
       return /* Lprim */[6,access,/* :: */[0,transl_exp(match[1]),0]];
       
      case 12:
       var newval=match[4];
       
       var lbl$1=match[3];
       
       var match$12=lbl$1[7];
       
       if(match$12!=0)
        {var access$1=/* Psetfloatfield */[9,lbl$1[5]];}
       else
        {var
          access$1=
           /* Psetfield */[7,lbl$1[5],Typeopt["maybe_pointer"](newval)];
         }
       
       return /* Lprim */[6,
               access$1,
               /* :: */[0,
                transl_exp(match[1]),
                /* :: */[0,transl_exp(newval),0]]];
       
      case 13:
       var kind$3=Typeopt["array_kind"](e);
       
       var ll$2=transl_list(match[1]);
       
       try
        {if(List["length"](ll$2)<=4){throw Not_constant;}else{}
         
         var cl=List["map"](extract_constant,ll$2);
         
         if(kind$3!=0)
          {if(kind$3>=3)
            {var
              master=
               /* Lconst */[1,
                /* Const_float_array */[3,List["map"](extract_float,cl)]];
             }
           else
            {var
              master=
               /* Lconst */[1,
                /* Const_block */[2,0,Lambda["default_tag_info"],cl]];
             }
           }
         else
          {throw Not_constant;}
         
         return /* Lprim */[6,
                 /* Pccall */[11,prim_obj_dup],
                 /* :: */[0,master,0]];
         }
       catch(exn$3)
        {if(exn$3=Not_constant)
          {return /* Lprim */[6,/* Pmakearray */[17,kind$3],ll$2];}
         else
          {throw exn$3;}
         }
       
      case 14:
       var match$13=match[3];
       
       var ifso=match[2];
       
       var cond=match[1];
       
       if(match$13)
        {var ifnot=match$13[1];
         
         return /* Lifthenelse */[12,
                 transl_exp(cond),
                 event_before(ifso,transl_exp(ifso)),
                 event_before(ifnot,transl_exp(ifnot))];
         }
       else
        {return /* Lifthenelse */[12,
                 transl_exp(cond),
                 event_before(ifso,transl_exp(ifso)),
                 Lambda["lambda_unit"]];
         }
       
      case 15:
       var expr2=match[2];
       
       return /* Lsequence */[13,
               transl_exp(match[1]),
               event_before(expr2,transl_exp(expr2))];
       
      case 16:
       var body$1=match[2];
       
       return /* Lwhile */[14,
               transl_exp(match[1]),
               event_before(body$1,transl_exp(body$1))];
       
      case 17:
       var body$2=match[6];
       
       return /* Lfor */[15,
               match[1],
               transl_exp(match[3]),
               transl_exp(match[4]),
               match[5],
               event_before(body$2,transl_exp(body$2))];
       
      case 18:
       var match$14=match[3];
       
       var met=match[2];
       
       if(match$14)
        {return transl_exp(match$14[1]);}
       else
        {var obj$3=transl_exp(match[1]);
         
         switch(met)
          {case 0:
            var match$15=Translobj["meth"](obj$3,met[1]);
            
            var cache$1=match$15[2];
            
            if(cache$1=0){var kind$4=1;}else{var kind$4=2;}
            
            var lam$2=/* Lsend */[17,kind$4,match$15[1],obj$3,cache$1,e[2]];
            
           case 1:
            var lam$2=/* Lsend */[17,0,/* Lvar */[0,met[1]],obj$3,0,e[2]];
           }
         
         return event_after(e,lam$2);
         }
       
      case 19:
       return /* Lapply */[2,
               /* Lprim */[6,
                [6,0],
                /* :: */[0,
                 Lambda["transl_path"]
                  (/* Some */[0,match[2][2]],e[5],match[1]),
                 0]],
               /* :: */[0,Lambda["lambda_unit"],0],
               Location["none"]];
       
      case 20:
       return /* Lprim */[6,
               [19,1],
               /* :: */[0,
                Lambda["transl_normal_path"](match[1]),
                /* :: */[0,Lambda["transl_normal_path"](match[2]),0]]];
       
      case 21:
       return transl_setinstvar
               (Lambda["transl_normal_path"](match[1]),match[2],match[4]);
       
      case 22:
       var cpy=Ident["create"]("copy");
       
       return /* Llet */[4,
               0,
               cpy,
               /* Lapply */[2,
                Translobj["oo_prim"]("copy"),
                /* :: */[0,Lambda["transl_normal_path"](match[1]),0],
                Location["none"]],
               List["fold_right"]
                (function(param,rem)
                  {return /* Lsequence */[13,
                           transl_setinstvar(/* Lvar */[0,cpy],param[1],param[3]),
                           rem];
                   },
                 match[2],
                 /* Lvar */[0,cpy])];
       
      case 23:
       return /* Llet */[4,
               0,
               match[1],
               transl_module[1](0,0,match[3]),
               transl_exp(match[4])];
       
      case 24:
       var cond$1=match[1];
       
       var match$16=cond$1[1];
       
       var exit$7;
       
       switch(match$16)
        {case 8:
          switch(match$16[2][1])
           {case "false":return assert_failed(e);default:exit$7=72;}
          
         default:exit$7=72;}
       
       switch(exit$7)
        {case 72:
          if(Clflags["noassert"][1])
           {return Lambda["lambda_unit"];}
          else
           {return /* Lifthenelse */[12,
                    transl_exp(cond$1),
                    Lambda["lambda_unit"],
                    assert_failed(e)];
            }
          
         }
       
      case 25:
       var e$1=match[1];
       
       var match$17=e$1[1];
       
       var exit$8;
       
       switch(match$17)
        {case 0:
          var match$18=e$1[4][1];
          
          var exit$9;
          
          if(typeof match$18=="number")
           {switch(match$18){case 0:exit$9=62;}}
          else
           {switch(match$18[0])
             {case 1:exit$9=62;
              case 2:exit$9=62;
              case 3:
               if
                (Typeopt["has_base_type"](e$1,Predef["path_int"])||
                 Typeopt["has_base_type"](e$1,Predef["path_char"])||
                 Typeopt["has_base_type"](e$1,Predef["path_string"])||
                 Typeopt["has_base_type"](e$1,Predef["path_bool"])||
                 Typeopt["has_base_type"](e$1,Predef["path_unit"])||
                 Typeopt["has_base_type"](e$1,Predef["path_exn"])||
                 Typeopt["has_base_type"](e$1,Predef["path_array"])||
                 Typeopt["has_base_type"](e$1,Predef["path_list"])||
                 Typeopt["has_base_type"](e$1,Predef["path_option"])||
                 Typeopt["has_base_type"](e$1,Predef["path_nativeint"])||
                 Typeopt["has_base_type"](e$1,Predef["path_int32"])||
                 Typeopt["has_base_type"](e$1,Predef["path_int64"]))
                {return transl_exp(e$1);}
               else
                {return /* Lprim */[6,
                         /* Pmakeblock */[5,
                          Obj["forward_tag"],
                          Lambda["default_tag_info"],
                          0],
                         /* :: */[0,transl_exp(e$1),0]];
                 }
               
              case 4:exit$9=62;
              case 8:exit$9=62;
              case 11:exit$9=62;
              default:
               return /* Lprim */[6,
                       /* Pmakeblock */[5,
                        Obj["forward_tag"],
                        Lambda["default_tag_info"],
                        0],
                       /* :: */[0,transl_exp(e$1),0]];
               }}
          
          switch(exit$9){case 62:return transl_exp(e$1);}
          
         case 1:
          switch(match$17[1])
           {case 3:
             return /* Lprim */[6,
                     /* Pmakeblock */[5,
                      Obj["forward_tag"],
                      Lambda["default_tag_info"],
                      0],
                     /* :: */[0,transl_exp(e$1),0]];
             
            default:exit$8=64;}
          
         case 3:exit$8=64;
         case 8:if(match$17[2][5]!=0){exit$8=65;}else{exit$8=64;}
         default:exit$8=65;}
       
       switch(exit$8)
        {case 65:
          var
           fn=
            /* Lfunction */[3,
             0,
             /* :: */[0,Ident["create"]("param"),0],
             transl_exp(e$1)];
          
          return /* Lprim */[6,
                  /* Pmakeblock */[5,
                   Config["lazy_tag"],
                   Lambda["default_tag_info"],
                   1],
                  /* :: */[0,fn,0]];
          
         case 64:return transl_exp(e$1);
         }
       
      case 26:
       var cs=match[1];
       
       var cty=cs[3];
       
       var cl$1=Ident["create"]("class");
       
       return transl_object[1]
               (cl$1,
                match[2],
                /* record */[0,
                 /* Tcl_structure */[1,cs],
                 e[2],
                 /* Cty_signature */[1,cty],
                 e[5],
                 0]);
       
      case 27:return transl_module[1](0,0,match[1]);
      }
    };

var
 transl_list=
  function(expr_list){return List["map"](transl_exp,expr_list);};

var
 transl_guard=
  function(guard,rhs)
   {var expr=event_before(rhs,transl_exp(rhs));
    
    if(guard)
     {var cond=guard[1];
      
      return event_before
              (cond,
               /* Lifthenelse */[12,
                transl_exp(cond),
                expr,
                Lambda["staticfail"]]);
      }
    else
     {return expr;}
    };

var
 transl_case=
  function(param)
   {return /* tuple */[0,param[1],transl_guard(param[2],param[3])];};

var transl_cases=function(cases){return List["map"](transl_case,cases);};

var
 transl_case_try=
  function(param)
   {var c_rhs=param[3];
    
    var c_guard=param[2];
    
    var c_lhs=param[1];
    
    var match=c_lhs[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:var id=match[1];exit=74;
        case 1:var id=match[2];exit=74;
        default:exit=75;}}
    
    switch(exit)
     {case 75:return /* tuple */[0,c_lhs,transl_guard(c_guard,c_rhs)];
      case 74:
       Hashtbl["replace"](try_ids,id,0);
       return Misc["try_finally"]
               (function(param$1)
                 {return /* tuple */[0,c_lhs,transl_guard(c_guard,c_rhs)];},
                function(param$1){return Hashtbl["remove"](try_ids,id);});
       
      }
    };

var
 transl_cases_try=
  function(cases){return List["map"](transl_case_try,cases);};

var
 transl_tupled_cases=
  function(patl_expr_list)
   {return List["map"]
            (function(param)
              {return /* tuple */[0,param[1],transl_guard(param[2],param[3])];
               },
             patl_expr_list);
    };

var
 transl_apply=
  function(lam,sargs,loc)
   {var
     lapply=
      function(funct,args)
       {var exit;
        
        switch(funct)
         {case 2:
           return /* Lapply */[2,funct[1],Pervasives["@"](funct[2],args),loc];
          case 17:
           return /* Lsend */[17,
                   funct[1],
                   funct[2],
                   funct[3],
                   Pervasives["@"](funct[4],args),
                   funct[5]];
           
          case 18:
           var match=funct[1];
           
           switch(match)
            {case 17:
              return /* Lsend */[17,
                      match[1],
                      match[2],
                      match[3],
                      Pervasives["@"](match[4],args),
                      match[5]];
              
             default:exit=88;}
           
          default:exit=88;}
        
        switch(exit){case 88:return /* Lapply */[2,funct,args,loc];}
        };
    
    var
     build_apply=
      function(lam$1,args,param)
       {if(param)
         {var match=param[1];
          
          var match$1=match[1];
          
          if(match$1)
           {return build_apply
                    (lam$1,
                     /* :: */[0,/* tuple */[0,match$1[1],match[2]],args],
                     param[2]);
            }
          else
           {var defs=[0,0];
            
            var
             protect=
              function(name,lam$2)
               {var exit;
                
                switch(lam$2)
                 {case 0:exit=84;
                  case 1:exit=84;
                  default:
                   var id=Ident["create"](name);
                   
                   defs[1]=/* :: */[0,/* tuple */[0,id,lam$2],defs[1]],0;
                   return /* Lvar */[0,id];
                   }
                
                switch(exit){case 84:return lam$2;}
                };
            
            if(List["for_all"](function(param$1){return param$1[2]=1;},args))
             {var match$2=/* tuple */[0,0,args];}
            else
             {var match$2=/* tuple */[0,args,0];}
            
            var args$1=match$2[1];
            
            if(args$1=0)
             {var lam$2=lam$1;}
            else
             {var
               lam$2=
                lapply
                 (lam$1,
                  List["rev_map"](function(prim){return prim[1];},args$1));
              }
            
            var handle=protect("func",lam$2);
            
            var
             l=
              List["map"]
               (function(param$1)
                 {return /* tuple */[0,
                          Misc["may_map"](protect("arg"),param$1[1]),
                          param$1[2]];
                  },
                param[2]);
            
            var id_arg=Ident["create"]("param");
            
            var
             lam$3=
              build_apply
               (handle,
                /* :: */[0,
                 /* tuple */[0,/* Lvar */[0,id_arg],match[2]],
                 match$2[2]],
                l);
            
            var exit;
            
            switch(lam$3)
             {case 3:
               if(lam$3[1]!=0)
                {exit=76;}
               else
                {var
                  body=
                   /* Lfunction */[3,0,/* :: */[0,id_arg,lam$3[2]],lam$3[3]];
                 }
               
              case 18:
               var match$3=lam$3[1];
               
               switch(match$3)
                {case 3:
                  if(match$3[1]!=0)
                   {exit=76;}
                  else
                   {var
                     body=
                      /* Lfunction */[3,
                       0,
                       /* :: */[0,id_arg,match$3[2]],
                       match$3[3]];
                    }
                  
                 default:exit=76;}
               
              default:exit=76;}
            
            switch(exit)
             {case 76:
               var body=/* Lfunction */[3,0,/* :: */[0,id_arg,0],lam$3];
              }
            
            return List["fold_left"]
                    (function(body$1,param$1)
                      {return /* Llet */[4,0,param$1[1],param$1[2],body$1];},
                     body,
                     defs[1]);
            }
          }
        else
         {return lapply
                  (lam$1,
                   List["rev_map"](function(prim){return prim[1];},args));
          }
        };
    
    return build_apply
            (lam,
             0,
             List["map"]
              (function(param)
                {return /* tuple */[0,
                         Misc["may_map"](transl_exp,param[2]),
                         param[3]];
                 },
               sargs));
    };

var
 transl_function=
  function(loc,untuplify_fn,repr,partial,cases)
   {var exit;
    
    if(cases)
     {var match=cases[1];
      
      var pat=match[1];
      
      var match$1=pat[1];
      
      var exit$1;
      
      if(match[2])
       {exit$1=99;}
      else
       {var exp=match[3];
        
        var match$2=exp[1];
        
        switch(match$2)
         {case 3:
           if(cases[2])
            {exit$1=99;}
           else
            {if(Parmatch["fluid"](pat))
              {var param=name_pattern("param",cases);
               
               var
                match$3=
                 transl_function(exp[2],0,repr,match$2[3],match$2[2]);
               
               return /* tuple */[0,
                       /* tuple */[0,0,/* :: */[0,param,match$3[1][2]]],
                       Matching["for_function"]
                        (loc,
                         0,
                         /* Lvar */[0,param],
                         /* :: */[0,/* tuple */[0,pat,match$3[2]],0],
                         partial)];
               }
             else
              {exit$1=99;}
             }
           
          default:exit$1=99;}
        }
      
      switch(exit$1)
       {case 99:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 3:
              var pl=match$1[1];
              
              if(untuplify_fn)
               {try
                 {var size=List["length"](pl);
                  
                  var
                   pats_expr_list=
                    List["map"]
                     (function(param$1)
                       {return /* tuple */[0,
                                Matching["flatten_pattern"](size,param$1[1]),
                                param$1[2],
                                param$1[3]];
                        },
                      cases);
                  
                  var
                   params=
                    List["map"]
                     (function(p){return Ident["create"]("param");},pl);
                  
                  return /* tuple */[0,
                          /* tuple */[0,1,params],
                          Matching["for_tupled_function"]
                           (loc,params,transl_tupled_cases(pats_expr_list),partial)];
                  }
                catch(exn)
                 {if(exn=Matching["Cannot_flatten"])
                   {var param$1=name_pattern("param",cases);
                    
                    return /* tuple */[0,
                            /* tuple */[0,0,/* :: */[0,param$1,0]],
                            Matching["for_function"]
                             (loc,repr,/* Lvar */[0,param$1],transl_cases(cases),partial)];
                    }
                  else
                   {throw exn;}
                  }
                }
              else
               {exit=98;}
              
             default:exit=98;}}
         
        }
      }
    else
     {exit=98;}
    
    switch(exit)
     {case 98:
       var param$2=name_pattern("param",cases);
       
       return /* tuple */[0,
               /* tuple */[0,0,/* :: */[0,param$2,0]],
               Matching["for_function"]
                (loc,repr,/* Lvar */[0,param$2],transl_cases(cases),partial)];
       
      }
    };

var
 transl_let=
  function(rec_flag,pat_expr_list,body)
   {if(rec_flag!=0)
     {var
       idlist=
        List["map"]
         (function(param)
           {var pat=param[1];
            
            var match=pat[1];
            
            var exit;
            
            if(typeof match=="number")
             {switch(match){}}
            else
             {switch(match[0])
               {case 0:return match[1];
                case 1:
                 if("unknown primitive:isint")
                  {return match[2];}
                 else
                  {exit=102;}
                 
                default:exit=102;}}
            
            switch(exit){case 102:throw [0,$$Error,pat[2],0];}
            },
          pat_expr_list);
      
      var
       transl_case$1=
        function(param,id)
         {var expr=param[2];
          
          var lam=transl_exp(expr);
          
          if(!check_recursive_lambda(idlist,lam))
           {throw [0,$$Error,expr[2],1];}
          else
           {}
          
          return /* tuple */[0,id,lam];
          };
      
      return /* Lletrec */[5,
              List["map2"](transl_case$1,pat_expr_list,idlist),
              body];
      }
    else
     {var
       transl=
        function(param)
         {if(param)
           {var match=param[1];
            
            var pat=match[1];
            
            return Matching["for_let"]
                    (pat[2],transl_exp(match[2]),pat,transl(param[2]));
            }
          else
           {return body;}
          };
      
      return transl(pat_expr_list);
      }
    };

var
 transl_setinstvar=
  function($$self,$$var,expr)
   {return /* Lprim */[6,
            /* Parraysetu */[20,Typeopt["maybe_pointer"](expr)?1:2],
            /* :: */[0,
             $$self,
             /* :: */[0,
              Lambda["transl_normal_path"]($$var),
              /* :: */[0,transl_exp(expr),0]]]];
    };

var
 transl_record=
  function(all_labels,repres,lbl_expr_list,opt_init_expr)
   {var size=all_labels["length"];
    
    if(3+2*List["length"](lbl_expr_list)>=size)
     {var lv="unknown primitive:caml_make_vect";
      
      var init_id=Ident["create"]("init");
      
      if(opt_init_expr)
       {for(var i=0;i<=all_labels["length"]-1;i++)
         {var match=all_labels[i][7];
          
          if(match!=0)
           {var access=/* Pfloatfield */[8,i];}
          else
           {var access=/* Pfield */[6,i];}
          
          lv[i]=/* Lprim */[6,access,/* :: */[0,/* Lvar */[0,init_id],0]],0}
        }
      else
       {}
      
      List["iter"]
       (function(param){return lv[param[2][5]]=transl_exp(param[3]),0;},
        lbl_expr_list);
      var ll=$$Array["to_list"](lv);
      
      if(List["exists"](function(param){return param[2][4]=1;},lbl_expr_list))
       {var mut=1;}
      else
       {var mut=0;}
      
      try
       {if(mut=1){throw Not_constant;}else{}
        
        var cl=List["map"](extract_constant,ll);
        
        if(repres!=0)
         {var
           lam=
            /* Lconst */[1,
             /* Const_float_array */[3,List["map"](extract_float,cl)]];
          }
        else
         {var lam=/* Lconst */[1,/* Const_block */[2,0,1,cl]];}
        }
      catch(exn)
       {if(exn=Not_constant)
         {if(repres!=0)
           {var lam=/* Lprim */[6,[17,3],ll];}
          else
           {var lam=/* Lprim */[6,/* Pmakeblock */[5,0,1,mut],ll];}
          }
        else
         {throw exn;}
        }
      
      if(opt_init_expr)
       {return /* Llet */[4,0,init_id,transl_exp(opt_init_expr[1]),lam];}
      else
       {return lam;}
      }
    else
     {var copy_id=Ident["create"]("newrecord");
      
      var
       update_field=
        function(param,cont)
         {var expr=param[3];
          
          var lbl=param[2];
          
          var match$1=lbl[7];
          
          if(match$1!=0)
           {var upd=/* Psetfloatfield */[9,lbl[5]];}
          else
           {var upd=/* Psetfield */[7,lbl[5],Typeopt["maybe_pointer"](expr)];}
          
          return /* Lsequence */[13,
                  /* Lprim */[6,
                   upd,
                   /* :: */[0,
                    /* Lvar */[0,copy_id],
                    /* :: */[0,transl_exp(expr),0]]],
                  cont];
          };
      
      if(opt_init_expr)
       {return /* Llet */[4,
                0,
                copy_id,
                /* Lprim */[6,
                 /* Pduprecord */[10,repres,size],
                 /* :: */[0,transl_exp(opt_init_expr[1]),0]],
                List["fold_right"]
                 (update_field,lbl_expr_list,/* Lvar */[0,copy_id])];
        }
      else
       {throw [0,Assert_failure,[0,"bytecomp/translcore.ml",1128,14]];}
      }
    };

var
 transl_match=
  function(e,arg,pat_expr_list,exn_pat_expr_list,partial)
   {var id=name_pattern("exn",exn_pat_expr_list);
    
    var cases=transl_cases(pat_expr_list);
    
    var exn_cases=transl_cases(exn_pat_expr_list);
    
    var
     static_catch=
      function(body,val_ids,handler)
       {var static_exception_id=Lambda["next_negative_raise_count"](0);
        
        return /* Lstaticcatch */[10,
                /* Ltrywith */[11,
                 /* Lstaticraise */[9,static_exception_id,body],
                 id,
                 Matching["for_trywith"](/* Lvar */[0,id],exn_cases)],
                /* tuple */[0,static_exception_id,val_ids],
                handler];
        };
    
    var match=arg[1];
    
    switch(match)
     {case 7:
       var argl=match[1];
       
       if(exn_cases)
        {var
          val_ids=
           List["map"](function(param){return name_pattern("val",0);},argl);
         
         var
          lvars=
           List["map"](function(id$1){return /* Lvar */[0,id$1];},val_ids);
         
         return static_catch
                 (transl_list(argl),
                  val_ids,
                  Matching["for_multiple_match"](e[2],lvars,cases,partial));
         }
       else
        {return Matching["for_multiple_match"]
                 (e[2],transl_list(argl),cases,partial);
         }
       
      default:
       if(exn_cases)
        {var val_id=name_pattern("val",pat_expr_list);
         
         return static_catch
                 (/* :: */[0,transl_exp(arg),0],
                  /* :: */[0,val_id,0],
                  Matching["for_function"]
                   (e[2],0,/* Lvar */[0,val_id],cases,partial));
         }
       else
        {return Matching["for_function"](e[2],0,transl_exp(arg),cases,partial);
         }
       }
    };

var
 report_error=
  function(ppf,param)
   {if("unknown primitive:isint")
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "Only variables are allowed as left-hand side of `let rec'",
                    0],
                   "Only variables are allowed as left-hand side of `let rec'"]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "This kind of expression is not allowed as right-hand side of `let rec'",
                    0],
                   "This kind of expression is not allowed as right-hand side of `let rec'"]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "Ancestor names can only be used to select inherited methods",
                    0],
                   "Ancestor names can only be used to select inherited methods"]);
         
        }
      }
    else
     {return Format["fprintf"]
              (ppf,
               [0,
                [11,'Unknown builtin primitive "',[2,0,[12,34,0]]],
                'Unknown builtin primitive "%s"'],
               param[1]);
      }
    };

var
 match=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]=$$Error)
       {return /* Some */[0,
                Location["error_of_printer"](param[2],report_error,param[3])];
        }
      else
       {return 0;}
      });

module["exports"]=
{"transl_exp":transl_exp,
 "transl_apply":transl_apply,
 "transl_let":transl_let,
 "transl_primitive":transl_primitive,
 "check_recursive_lambda":check_recursive_lambda,
 "Error":$$Error,
 "report_error":report_error,
 "transl_module":transl_module,
 "transl_object":transl_object};

