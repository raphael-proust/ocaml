// Generated CODE, PLEASE EDIT WITH CARE 

var CamlinternalOO=require("./camlinternalOO.js");
var List=require("./list.js");
var Misc=require("./misc.js");


var
 shared=
  [0,
   "with_constraint",
   "value_description",
   "type_extension",
   "type_declaration",
   "structure_item",
   "structure",
   "signature_item",
   "signature",
   "row_field",
   "pattern",
   "package_type",
   "module_type",
   "module_expr",
   "module_binding",
   "extension_constructor",
   "expression",
   "core_type",
   "class_type_field",
   "class_type_declaration",
   "class_type",
   "class_structure",
   "class_signature",
   "class_field",
   "class_expr",
   "class_description",
   "cases",
   "case",
   "bindings",
   "binding"];

var
 opt=
  function(f,param){if(param){return f(param[1]);}else{return /* () */0;}};

var
 structure=
  function(sub,str)
   {/* unknown */"(send sub/1012 832861151)";return List["iter"](0,str[1]);};

var
 structure_item=
  function(sub,x)
   {var match=x[1];
    
    var exit;
    
    switch(match[0])
     {case 0:/* unknown */"(send sub/1015 782176664 (field 0 match/1615))";
      case 1:
       /* unknown */"(send sub/1015 -928231026\n  (makeblock 0 (field 0 match/1615) (field 1 match/1615)))";
       
      case 2:/* unknown */"(send sub/1015 -216458258 (field 0 match/1615))";
      case 3:
       /* unknown */"(send sub/1015 698610869)";
       return List["iter"](0,match[1]);
       
      case 4:/* unknown */"(send sub/1015 179859066 (field 0 match/1615))";
      case 5:/* unknown */"(send sub/1015 -579981062 (field 0 match/1615))";
      case 6:/* unknown */"(send sub/1015 -935352974 (field 0 match/1615))";
      case 7:
       /* unknown */"(send sub/1015 -935352974)";
       return List["iter"](0,match[1]);
       
      case 8:
       /* unknown */"(send sub/1015 915171949)";return opt(0,match[1][3]);
      case 9:exit=51;
      case 10:
       return List["iter"]
               (function(param)
                 {/* unknown */"(send sub/1015 639620572 (field 7 (field 0 param/1610)))";
                  },
                match[1]);
       
      case 11:
       return List["iter"]
               (function(param)
                 {/* unknown */"(send sub/1015 806013793 (field 7 (field 2 param/1613)))";
                  },
                match[1]);
       
      case 12:
       /* unknown */"(send sub/1015 748778728 (field 0 (field 0 match/1615)))";
       
      case 13:exit=51;
      }
    
    switch(exit){case 51:return /* () */0;}
    };

var
 value_description=
  function(sub,x){/* unknown */"(send sub/1035 -957384486 (field 2 x/1036))";};

var
 constructor_decl=
  function(sub,cd)
   {/* unknown */"(send sub/1038 -957384486)";
    List["iter"](0,cd[3]);
    /* unknown */"(send sub/1038 -957384486)";
    return opt(0,cd[4]);
    };

var
 label_decl=
  function(sub,ld)
   {/* unknown */"(send sub/1041 -957384486 (field 3 ld/1042))";};

var
 type_declaration=
  function(sub,decl)
   {List["iter"]
     (function(param)
       {/* unknown */"(send sub/1044 -957384486 (field 0 param/1608))";
        
        /* unknown */"(send sub/1044 -957384486 (field 1 param/1608))";
        },
      decl[5]);
    var match=decl[6];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=46;case 1:exit=46;}}
    else
     {switch(match[0])
       {case 0:List["iter"](constructor_decl(sub),match[1]);
        case 1:List["iter"](label_decl(sub),match[1])
        }}
    
    switch(exit){case 46:}
    
    /* unknown */"(send sub/1044 -957384486)";
    return opt(0,decl[8]);
    };

var
 type_extension=
  function(sub,te)
   {/* unknown */"(send sub/1052 -579981062)";return List["iter"](0,te[4]);};

var
 extension_constructor=
  function(sub,ext)
   {var match=ext[4];
    
    switch(match[0])
     {case 0:
       /* unknown */"(send sub/1055 -957384486)";
       List["iter"](0,match[1]);
       /* unknown */"(send sub/1055 -957384486)";
       return opt(0,match[2]);
       
      case 1:return /* () */0;
      }
    };

var
 pattern=
  function(sub,pat)
   {var
     extra=
      function(param)
       {var exit;
        
        if(typeof param==="number")
         {switch(param){case 0:exit=41;}}
        else
         {switch(param[0])
           {case 0:
             /* unknown */"(send sub/1060 -957384486 (field 0 param/1599))";
            case 1:exit=41;
            }}
        
        switch(exit){case 41:return /* () */0;}
        };
    
    List["iter"](function(param){return extra(param[1]);},pat[3]);
    var match=pat[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:exit=40;
        case 3:var l=match[1];exit=38;
        case 4:var l=match[3];exit=38;
        case 5:
         /* unknown */"(send sub/1060 293013072)";return opt(0,match[2]);
        case 6:
         return List["iter"]
                 (function(param)
                   {/* unknown */"(send sub/1060 293013072 (field 2 param/1577))";
                    },
                  match[1]);
         
        case 7:
         /* unknown */"(send sub/1060 293013072)";
         return List["iter"](0,match[1]);
         
        case 8:
         /* unknown */"(send sub/1060 293013072 (field 0 match/1580))";
         
         /* unknown */"(send sub/1060 293013072 (field 1 match/1580))";
         
        case 9:exit=40;
        default:exit=37;}}
    
    switch(exit)
     {case 40:/* unknown */"(send sub/1060 293013072 (field 0 match/1580))";
      case 37:return /* () */0;
      case 38:
       /* unknown */"(send sub/1060 293013072)";return List["iter"](0,l);
      }
    };

var
 expression=
  function(sub,exp)
   {var
     extra=
      function(param)
       {var exit;
        
        switch(param[0])
         {case 0:
           /* unknown */"(send sub/1076 -957384486 (field 0 param/1570))";
          case 1:
           /* unknown */"(send sub/1076 -957384486)";
           opt(0,param[1]);
           /* unknown */"(send sub/1076 -957384486 (field 1 param/1570))";
           
          case 2:exit=34;
          case 3:
           /* unknown */"(send sub/1076 -957384486)";return opt(0,param[1]);
          case 4:exit=34;
          }
        
        switch(exit){case 34:return /* () */0;}
        };
    
    List["iter"](function(param){return extra(param[1]);},exp[3]);
    var match=exp[1];
    
    var exit;
    
    switch(match[0])
     {case 0:exit=29;
      case 1:exit=29;
      case 2:
       /* unknown */"(send sub/1076 -928231026\n  (makeblock 0 (field 0 match/1543) (field 1 match/1543)))";
       
       /* unknown */"(send sub/1076 782176664 (field 2 match/1543))";
       
      case 3:/* unknown */"(send sub/1076 -1054819389 (field 1 match/1543))";
      case 4:
       /* unknown */"(send sub/1076 782176664 (field 0 match/1543))";
       
       return List["iter"]
               (function(param)
                 {/* unknown */"(send sub/1076 782176664)";
                  return opt(0,param[2]);
                  },
                match[2]);
       
      case 5:
       /* unknown */"(send sub/1076 782176664 (field 0 match/1543))";
       
       /* unknown */"(send sub/1076 -1054819389 (field 1 match/1543))";
       
       /* unknown */"(send sub/1076 -1054819389 (field 2 match/1543))";
       
      case 6:
       /* unknown */"(send sub/1076 782176664 (field 0 match/1543))";
       
       /* unknown */"(send sub/1076 -1054819389 (field 1 match/1543))";
       
      case 7:exit=30;
      case 8:
       /* unknown */"(send sub/1076 782176664)";
       return List["iter"](0,match[3]);
       
      case 9:/* unknown */"(send sub/1076 782176664)";return opt(0,match[2]);
      case 10:
       List["iter"]
        (function(param)
          {/* unknown */"(send sub/1076 782176664 (field 2 param/1538))";},
         match[1]);
       /* unknown */"(send sub/1076 782176664)";
       return opt(0,match[2]);
       
      case 12:
       /* unknown */"(send sub/1076 782176664 (field 0 match/1543))";
       
       /* unknown */"(send sub/1076 782176664 (field 3 match/1543))";
       
      case 13:exit=30;
      case 14:
       /* unknown */"(send sub/1076 782176664 (field 0 match/1543))";
       
       /* unknown */"(send sub/1076 782176664 (field 1 match/1543))";
       
       /* unknown */"(send sub/1076 782176664)";
       return opt(0,match[3]);
       
      case 15:exit=32;
      case 16:exit=32;
      case 17:
       /* unknown */"(send sub/1076 782176664 (field 2 match/1543))";
       
       /* unknown */"(send sub/1076 782176664 (field 3 match/1543))";
       
       /* unknown */"(send sub/1076 782176664 (field 5 match/1543))";
       
      case 18:
       /* unknown */"(send sub/1076 782176664 (field 0 match/1543))";
       
       /* unknown */"(send sub/1076 782176664)";
       return opt(0,match[3]);
       
      case 19:exit=33;
      case 20:exit=33;
      case 21:/* unknown */"(send sub/1076 782176664 (field 3 match/1543))";
      case 22:
       return List["iter"]
               (function(param)
                 {/* unknown */"(send sub/1076 782176664 (field 2 param/1541))";
                  },
                match[2]);
       
      case 23:
       /* unknown */"(send sub/1076 748778728 (field 2 match/1543))";
       
       /* unknown */"(send sub/1076 782176664 (field 3 match/1543))";
       
      case 26:/* unknown */"(send sub/1076 1010286124 (field 0 match/1543))";
      case 27:/* unknown */"(send sub/1076 748778728 (field 0 match/1543))";
      default:/* unknown */"(send sub/1076 782176664 (field 0 match/1543))";}
    
    switch(exit)
     {case 30:
       /* unknown */"(send sub/1076 782176664)";
       return List["iter"](0,match[1]);
       
      case 32:
       /* unknown */"(send sub/1076 782176664 (field 0 match/1543))";
       
       /* unknown */"(send sub/1076 782176664 (field 1 match/1543))";
       
      case 33:return /* () */0;
      case 29:return /* () */0;
      }
    };

var
 package_type=
  function(sub,pack)
   {return List["iter"]
            (function(param)
              {/* unknown */"(send sub/1137 -957384486 (field 1 param/1533))";
               },
             pack[2]);
    };

var
 signature=
  function(sub,sg)
   {/* unknown */"(send sub/1142 -662996230)";return List["iter"](0,sg[1]);};

var
 signature_item=
  function(sub,item)
   {var match=item[1];
    
    var exit;
    
    switch(match[0])
     {case 0:/* unknown */"(send sub/1145 -216458258 (field 0 match/1530))";
      case 1:
       /* unknown */"(send sub/1145 698610869)";
       return List["iter"](0,match[1]);
       
      case 2:/* unknown */"(send sub/1145 179859066 (field 0 match/1530))";
      case 3:/* unknown */"(send sub/1145 -579981062 (field 0 match/1530))";
      case 4:
       /* unknown */"(send sub/1145 915171949 (field 2 (field 0 match/1530)))";
       
      case 5:
       return List["iter"]
               (function(md)
                 {/* unknown */"(send sub/1145 915171949 (field 2 md/1157))";},
                match[1]);
       
      case 6:
       /* unknown */"(send sub/1145 915171949)";return opt(0,match[1][3]);
      case 7:exit=25;
      case 8:
       /* unknown */"(send sub/1145 915171949 (field 0 (field 0 match/1530)))";
       
      case 9:
       /* unknown */"(send sub/1145 779002677)";
       return List["iter"](0,match[1]);
       
      case 10:
       /* unknown */"(send sub/1145 -191124516)";
       return List["iter"](0,match[1]);
       
      case 11:exit=25;
      }
    
    switch(exit){case 25:return /* () */0;}
    };

var
 class_description=
  function(sub,cd)
   {/* unknown */"(send sub/1159 806013793 (field 7 cd/1160))";};

var
 class_type_declaration=
  function(sub,cd)
   {/* unknown */"(send sub/1162 806013793 (field 7 cd/1163))";};

var
 module_type=
  function(sub,mty)
   {var match=mty[1];
    
    var exit;
    
    switch(match[0])
     {case 0:exit=21;
      case 1:/* unknown */"(send sub/1165 359375608 (field 0 match/1525))";
      case 2:
       /* unknown */"(send sub/1165 915171949)";
       Misc["may"](0,match[3]);
       /* unknown */"(send sub/1165 915171949 (field 3 match/1525))";
       
      case 3:
       /* unknown */"(send sub/1165 915171949 (field 0 match/1525))";
       
       return List["iter"]
               (function(param)
                 {/* unknown */"(send sub/1165 409053494 (field 2 param/1522))";
                  },
                match[2]);
       
      case 4:/* unknown */"(send sub/1165 748778728 (field 0 match/1525))";
      case 5:exit=21;
      }
    
    switch(exit){case 21:return /* () */0;}
    };

var
 with_constraint=
  function(sub,cstr)
   {var exit;
    
    switch(cstr[0])
     {case 0:exit=18;case 1:exit=19;case 2:exit=18;case 3:exit=19;}
    
    switch(exit)
     {case 18:/* unknown */"(send sub/1178 698610869 (field 0 cstr/1179))";
      case 19:return /* () */0;
      }
    };

var
 module_expr=
  function(sub,mexpr)
   {var match=mexpr[1];
    
    switch(match[0])
     {case 0:return /* () */0;
      case 1:/* unknown */"(send sub/1183 -951102413 (field 0 match/1508))";
      case 2:
       /* unknown */"(send sub/1183 915171949)";
       Misc["may"](0,match[3]);
       /* unknown */"(send sub/1183 748778728 (field 3 match/1508))";
       
      case 3:
       /* unknown */"(send sub/1183 748778728 (field 0 match/1508))";
       
       /* unknown */"(send sub/1183 748778728 (field 1 match/1508))";
       
      case 4:
       var match$1=match[3];
       
       var mexpr$1=match[1];
       
       if(match$1)
        {/* unknown */"(send sub/1183 748778728 mexpr/1192)";
         
         /* unknown */"(send sub/1183 915171949 (field 0 match/1513))";
         }
       else
        {/* unknown */"(send sub/1183 748778728 mexpr/1192)";}
       
      case 5:/* unknown */"(send sub/1183 782176664 (field 0 match/1508))";
      }
    };

var module_binding=function(sub,mb){return module_expr(sub,mb[3]);};

var
 class_expr=
  function(sub,cexpr)
   {var match=cexpr[1];
    
    switch(match[0])
     {case 0:
       /* unknown */"(send sub/1201 -957384486)";
       return List["iter"](0,match[3]);
       
      case 1:/* unknown */"(send sub/1201 1010286124 (field 0 match/1500))";
      case 2:
       /* unknown */"(send sub/1201 293013072 (field 1 match/1500))";
       
       List["iter"]
        (function(param)
          {/* unknown */"(send sub/1201 782176664 (field 2 param/1494))";},
         match[3]);
       /* unknown */"(send sub/1201 639620572 (field 3 match/1500))";
       
      case 3:
       /* unknown */"(send sub/1201 639620572 (field 0 match/1500))";
       
       return List["iter"]
               (function(param)
                 {/* unknown */"(send sub/1201 782176664)";
                  return opt(0,param[2]);
                  },
                match[2]);
       
      case 4:
       /* unknown */"(send sub/1201 -928231026\n  (makeblock 0 (field 0 match/1500) (field 1 match/1500)))";
       
       List["iter"]
        (function(param)
          {/* unknown */"(send sub/1201 782176664 (field 2 param/1498))";},
         match[3]);
       /* unknown */"(send sub/1201 639620572 (field 3 match/1500))";
       
      case 5:
       var match$1=match[2];
       
       var cl=match[1];
       
       if(match$1)
        {/* unknown */"(send sub/1201 639620572 cl/1203)";
         
         /* unknown */"(send sub/1201 806013793 (field 0 match/1501))";
         }
       else
        {/* unknown */"(send sub/1201 639620572 cl/1203)";}
       
      }
    };

var
 class_type=
  function(sub,ct)
   {var match=ct[1];
    
    switch(match[0])
     {case 0:
       /* unknown */"(send sub/1229 -957384486)";
       return List["iter"](0,match[3]);
       
      case 1:/* unknown */"(send sub/1229 173280497 (field 0 match/1491))";
      case 2:
       /* unknown */"(send sub/1229 -957384486 (field 1 match/1491))";
       
       /* unknown */"(send sub/1229 806013793 (field 2 match/1491))";
       
      }
    };

var
 class_signature=
  function(sub,cs)
   {/* unknown */"(send sub/1238 -957384486 (field 0 cs/1239))";
    
    /* unknown */"(send sub/1238 382854684)";
    return List["iter"](0,cs[2]);
    };

var
 class_type_field=
  function(sub,ctf)
   {var match=ctf[1];
    
    var exit;
    
    switch(match[0])
     {case 0:/* unknown */"(send sub/1241 806013793 (field 0 match/1485))";
      case 1:exit=11;
      case 2:exit=11;
      case 3:
       var match$1=match[1];
       
       /* unknown */"(send sub/1241 -957384486 (field 0 match/1488))";
       
       /* unknown */"(send sub/1241 -957384486 (field 1 match/1488))";
       
      case 4:return /* () */0;
      }
    
    switch(exit)
     {case 11:
       /* unknown */"(send sub/1241 -957384486 (field 3 (field 0 match/1485)))";
       
      }
    };

var
 core_type=
  function(sub,ct)
   {var match=ct[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=8;}}
    else
     {switch(match[0])
       {case 0:exit=8;
        case 1:
         /* unknown */"(send sub/1255 -957384486 (field 1 match/1481))";
         
         /* unknown */"(send sub/1255 -957384486 (field 2 match/1481))";
         
        case 2:
         /* unknown */"(send sub/1255 -957384486)";
         return List["iter"](0,match[1]);
         
        case 3:exit=9;
        case 4:
         return List["iter"]
                 (function(param)
                   {/* unknown */"(send sub/1255 -957384486 (field 2 param/1478))";
                    },
                  match[1]);
         
        case 5:exit=9;
        case 6:/* unknown */"(send sub/1255 -957384486 (field 0 match/1481))";
        case 7:
         /* unknown */"(send sub/1255 223694229)";
         return List["iter"](0,match[1]);
         
        case 8:/* unknown */"(send sub/1255 -957384486 (field 1 match/1481))";
        case 9:/* unknown */"(send sub/1255 -383820461 (field 0 match/1481))";
        }}
    
    switch(exit)
     {case 8:return /* () */0;
      case 9:
       /* unknown */"(send sub/1255 -957384486)";
       return List["iter"](0,match[3]);
       
      }
    };

var
 class_structure=
  function(sub,cs)
   {/* unknown */"(send sub/1278 293013072 (field 0 cs/1279))";
    
    /* unknown */"(send sub/1278 1060064819)";
    return List["iter"](0,cs[2]);
    };

var
 row_field=
  function(sub,rf)
   {switch(rf[0])
     {case 0:
       /* unknown */"(send sub/1281 -957384486)";return List["iter"](0,rf[4]);
      case 1:/* unknown */"(send sub/1281 -957384486 (field 0 rf/1282))";
      }
    };

var
 class_field=
  function(sub,cf)
   {var match=cf[1];
    
    switch(match[0])
     {case 0:/* unknown */"(send sub/1289 639620572 (field 1 match/1467))";
      case 1:
       var match$1=match[4];
       
       switch(match$1[0])
        {case 0:
          /* unknown */"(send sub/1289 -957384486 (field 0 match/1470))";
         case 1:/* unknown */"(send sub/1289 782176664 (field 1 match/1470))";
         }
       
      case 2:
       var match$2=match[3];
       
       switch(match$2[0])
        {case 0:
          /* unknown */"(send sub/1289 -957384486 (field 0 match/1473))";
         case 1:/* unknown */"(send sub/1289 782176664 (field 1 match/1473))";
         }
       
      case 3:
       /* unknown */"(send sub/1289 -957384486 (field 0 match/1467))";
       
       /* unknown */"(send sub/1289 -957384486 (field 1 match/1467))";
       
      case 4:/* unknown */"(send sub/1289 782176664 (field 0 match/1467))";
      case 5:return /* () */0;
      }
    };

var
 bindings=
  function(sub,param)
   {/* unknown */"(send sub/1310 -13792443)";return List["iter"](0,param[2]);};

var
 cases=
  function(sub,l)
   {/* unknown */"(send sub/1314 -1044767056)";return List["iter"](0,l);};

var
 $$case=
  function(sub,param)
   {/* unknown */"(send sub/1317 293013072 (field 0 param/1464))";
    
    /* unknown */"(send sub/1317 782176664)";
    opt(0,param[2]);
    /* unknown */"(send sub/1317 782176664 (field 2 param/1464))";
    };

var
 binding=
  function(sub,vb)
   {/* unknown */"(send sub/1322 293013072 (field 0 vb/1323))";
    
    /* unknown */"(send sub/1322 782176664 (field 1 vb/1323))";
    };

var
 iter_init=
  function($$class)
   {var ids=CamlinternalOO["get_method_labels"]($$class,shared);
    
    var with_constraint$1=ids[1];
    
    var value_description$1=ids[2];
    
    var type_extension$1=ids[3];
    
    var type_declaration$1=ids[4];
    
    var structure_item$1=ids[5];
    
    var structure$1=ids[6];
    
    var signature_item$1=ids[7];
    
    var signature$1=ids[8];
    
    var row_field$1=ids[9];
    
    var pattern$1=ids[10];
    
    var package_type$1=ids[11];
    
    var module_type$1=ids[12];
    
    var module_expr$1=ids[13];
    
    var module_binding$1=ids[14];
    
    var extension_constructor$1=ids[15];
    
    var expression$1=ids[16];
    
    var core_type$1=ids[17];
    
    var class_type_field$1=ids[18];
    
    var class_type_declaration$1=ids[19];
    
    var class_type$1=ids[20];
    
    var class_structure$1=ids[21];
    
    var class_signature$1=ids[22];
    
    var class_field$1=ids[23];
    
    var class_expr$1=ids[24];
    
    var class_description$1=ids[25];
    
    var cases$1=ids[26];
    
    var $$case$1=ids[27];
    
    var bindings$1=ids[28];
    
    var binding$1=ids[29];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       binding$1,
       function(self$neg1){return binding(self$neg1);},
       bindings$1,
       function(self$neg1){return bindings(self$neg1);},
       $$case$1,
       function(self$neg1){return $$case(self$neg1);},
       cases$1,
       function(self$neg1){return cases(self$neg1);},
       class_description$1,
       function(self$neg1){return class_description(self$neg1);},
       class_expr$1,
       function(self$neg1){return class_expr(self$neg1);},
       class_field$1,
       function(self$neg1){return class_field(self$neg1);},
       class_signature$1,
       function(self$neg1){return class_signature(self$neg1);},
       class_structure$1,
       function(self$neg1){return class_structure(self$neg1);},
       class_type$1,
       function(self$neg1){return class_type(self$neg1);},
       class_type_declaration$1,
       function(self$neg1){return class_type_declaration(self$neg1);},
       class_type_field$1,
       function(self$neg1){return class_type_field(self$neg1);},
       core_type$1,
       function(self$neg1){return core_type(self$neg1);},
       expression$1,
       function(self$neg1){return expression(self$neg1);},
       extension_constructor$1,
       function(self$neg1){return extension_constructor(self$neg1);},
       module_binding$1,
       function(self$neg1){return module_binding(self$neg1);},
       module_expr$1,
       function(self$neg1){return module_expr(self$neg1);},
       module_type$1,
       function(self$neg1){return module_type(self$neg1);},
       package_type$1,
       function(self$neg1){return package_type(self$neg1);},
       pattern$1,
       function(self$neg1){return pattern(self$neg1);},
       row_field$1,
       function(self$neg1){return row_field(self$neg1);},
       signature$1,
       function(self$neg1){return signature(self$neg1);},
       signature_item$1,
       function(self$neg1){return signature_item(self$neg1);},
       structure$1,
       function(self$neg1){return structure(self$neg1);},
       structure_item$1,
       function(self$neg1){return structure_item(self$neg1);},
       type_declaration$1,
       function(self$neg1){return type_declaration(self$neg1);},
       type_extension$1,
       function(self$neg1){return type_extension(self$neg1);},
       value_description$1,
       function(self$neg1){return value_description(self$neg1);},
       with_constraint$1,
       function(self$neg1){return with_constraint(self$neg1);}]);
    return function(env,$$self)
     {return CamlinternalOO["create_object_opt"]($$self,$$class);};
    };

var
 iter=
  CamlinternalOO["make_class"]
   ([0,
     "cases",
     "case",
     "core_type",
     "structure",
     "module_binding",
     "bindings",
     "signature_item",
     "extension_constructor",
     "package_type",
     "value_description",
     "class_type_declaration",
     "binding",
     "class_signature",
     "type_extension",
     "row_field",
     "pattern",
     "signature",
     "class_type_field",
     "with_constraint",
     "class_expr",
     "type_declaration",
     "module_expr",
     "class_description",
     "expression",
     "class_type",
     "structure_item",
     "module_type",
     "class_structure",
     "class_field"],
    iter_init);

module["exports"]=
{"iter":iter,
 "binding":binding,
 "bindings":bindings,
 "class_description":class_description,
 "class_expr":class_expr,
 "class_field":class_field,
 "class_signature":class_signature,
 "class_structure":class_structure,
 "class_type":class_type,
 "class_type_declaration":class_type_declaration,
 "class_type_field":class_type_field,
 "core_type":core_type,
 "expression":expression,
 "extension_constructor":extension_constructor,
 "module_binding":module_binding,
 "module_expr":module_expr,
 "module_type":module_type,
 "package_type":package_type,
 "pattern":pattern,
 "row_field":row_field,
 "signature":signature,
 "signature_item":signature_item,
 "structure":structure,
 "structure_item":structure_item,
 "type_declaration":type_declaration,
 "type_extension":type_extension,
 "value_description":value_description,
 "with_constraint":with_constraint};

