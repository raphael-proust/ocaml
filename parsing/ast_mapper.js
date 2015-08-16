// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Clflags=require("./clflags.js");
var Printf=require("./printf.js");
var Misc=require("./misc.js");
var Printexc=require("./printexc.js");
var Location=require("./location.js");
var Ast_helper=require("./ast_helper.js");
var Map=require("./map.js");
var Config=require("./config.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var map_fst=function(f,param){return /* tuple */[0,f(param[1]),param[2]];};

var map_snd=function(f,param){return /* tuple */[0,param[1],f(param[2])];};

var
 map_tuple=
  function(f1,f2,param){return /* tuple */[0,f1(param[1]),f2(param[2])];};

var
 map_tuple3=
  function(f1,f2,f3,param)
   {return /* tuple */[0,f1(param[1]),f2(param[2]),f3(param[3])];};

var
 map_opt=
  function(f,param)
   {if(param){return /* Some */[0,f(param[1])];}else{return /* None */0;}};

var
 map_loc=
  function(sub,param){return /* record */[0,param[1],sub[21](sub,param[2])];};

var
 row_field=
  function(sub,param)
   {switch(param[0])
     {case 0:
       return /* Rtag */[0,
               param[1],
               sub[2](sub,param[2]),
               param[3],
               List["map"](sub[34](sub),param[4])];
       
      case 1:return /* Rinherit */[1,sub[34](sub,param[1])];
      }
    };

var
 map=
  function(sub,param)
   {var desc=param[1];
    
    var loc=sub[21](sub,param[2]);
    
    var attrs=sub[2](sub,param[3]);
    
    if(typeof desc==="number")
     {switch(desc)
       {case 0:
         return Ast_helper["Typ"][3]
                 (/* Some */[0,loc],/* Some */[0,attrs],/* () */0);
         
        }}
    else
     {switch(desc[0])
       {case 0:
         return Ast_helper["Typ"][4]
                 (/* Some */[0,loc],/* Some */[0,attrs],desc[1]);
         
        case 1:
         return Ast_helper["Typ"][5]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  desc[1],
                  sub[34](sub,desc[2]),
                  sub[34](sub,desc[3]));
         
        case 2:
         return Ast_helper["Typ"][6]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  List["map"](sub[34](sub),desc[1]));
         
        case 3:
         return Ast_helper["Typ"][7]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  map_loc(sub,desc[1]),
                  List["map"](sub[34](sub),desc[2]));
         
        case 4:
         var
          f=
           function(param$1)
            {return /* tuple */[0,
                     param$1[1],
                     sub[2](sub,param$1[2]),
                     sub[34](sub,param$1[3])];
             };
         
         return Ast_helper["Typ"][8]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  List["map"](f,desc[1]),
                  desc[2]);
         
        case 5:
         return Ast_helper["Typ"][9]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  map_loc(sub,desc[1]),
                  List["map"](sub[34](sub),desc[2]));
         
        case 6:
         return Ast_helper["Typ"][10]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  sub[34](sub,desc[1]),
                  desc[2]);
         
        case 7:
         return Ast_helper["Typ"][11]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  List["map"](row_field(sub),desc[1]),
                  desc[2],
                  desc[3]);
         
        case 8:
         return Ast_helper["Typ"][12]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  desc[1],
                  sub[34](sub,desc[2]));
         
        case 9:
         var match=desc[1];
         
         return Ast_helper["Typ"][13]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  map_loc(sub,match[1]),
                  List["map"](map_tuple(map_loc(sub),sub[34](sub)),match[2]));
         
        case 10:
         return Ast_helper["Typ"][14]
                 (/* Some */[0,loc],/* Some */[0,attrs],sub[16](sub,desc[1]));
         
        }}
    };

var
 map_type_declaration=
  function(sub,param)
   {return Ast_helper["Type"][1]
            (/* Some */[0,sub[21](sub,param[8])],
             /* Some */[0,sub[2](sub,param[7])],
             /* None */0,
             /* None */0,
             /* Some */[0,List["map"](map_fst(sub[34](sub)),param[2])],
             /* Some */[0,
              List["map"]
               (map_tuple3(sub[34](sub),sub[34](sub),sub[21](sub)),param[3])],
             /* Some */[0,sub[37](sub,param[4])],
             /* Some */[0,param[5]],
             map_opt(sub[34](sub),param[6]),
             map_loc(sub,param[1]));
    };

var
 map_type_kind=
  function(sub,param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:return /* Ptype_abstract */0;case 1:return /* Ptype_open */1;}}
    else
     {switch(param[0])
       {case 0:
         return /* Ptype_variant */[0,List["map"](sub[14](sub),param[1])];
        case 1:
         return /* Ptype_record */[1,List["map"](sub[20](sub),param[1])];
        }}
    };

var
 map_type_extension=
  function(sub,param)
   {return Ast_helper["Te"][1]
            (/* Some */[0,sub[2](sub,param[5])],
             /* None */0,
             /* Some */[0,List["map"](map_fst(sub[34](sub)),param[2])],
             /* Some */[0,param[4]],
             map_loc(sub,param[1]),
             List["map"](sub[17](sub),param[3]));
    };

var
 map_extension_constructor_kind=
  function(sub,param)
   {switch(param[0])
     {case 0:
       return /* Pext_decl */[0,
               List["map"](sub[34](sub),param[1]),
               map_opt(sub[34](sub),param[2])];
       
      case 1:return /* Pext_rebind */[1,map_loc(sub,param[1])];
      }
    };

var
 map_extension_constructor=
  function(sub,param)
   {return Ast_helper["Te"][2]
            (/* Some */[0,sub[21](sub,param[3])],
             /* Some */[0,sub[2](sub,param[4])],
             /* None */0,
             /* None */0,
             map_loc(sub,param[1]),
             map_extension_constructor_kind(sub,param[2]));
    };

var
 T=
  [0,
   row_field,
   map,
   map_type_declaration,
   map_type_kind,
   map_type_extension,
   map_extension_constructor_kind,
   map_extension_constructor];

var
 map$1=
  function(sub,param)
   {var desc=param[1];
    
    var loc=sub[21](sub,param[2]);
    
    var attrs=sub[2](sub,param[3]);
    
    switch(desc[0])
     {case 0:
       return Ast_helper["Cty"][3]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                map_loc(sub,desc[1]),
                List["map"](sub[34](sub),desc[2]));
       
      case 1:
       return Ast_helper["Cty"][4]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[9](sub,desc[1]));
       
      case 2:
       return Ast_helper["Cty"][5]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                desc[1],
                sub[34](sub,desc[2]),
                sub[11](sub,desc[3]));
       
      case 3:
       return Ast_helper["Cty"][6]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[16](sub,desc[1]));
       
      }
    };

var
 map_field=
  function(sub,param)
   {var desc=param[1];
    
    var loc=sub[21](sub,param[2]);
    
    var attrs=sub[2](sub,param[3]);
    
    switch(desc[0])
     {case 0:
       return Ast_helper["Ctf"][3]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[11](sub,desc[1]));
       
      case 1:
       var match=desc[1];
       
       return Ast_helper["Ctf"][4]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                match[1],
                match[2],
                match[3],
                sub[34](sub,match[4]));
       
      case 2:
       var match$1=desc[1];
       
       return Ast_helper["Ctf"][5]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                match$1[1],
                match$1[2],
                match$1[3],
                sub[34](sub,match$1[4]));
       
      case 3:
       var match$2=desc[1];
       
       return Ast_helper["Ctf"][6]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[34](sub,match$2[1]),
                sub[34](sub,match$2[2]));
       
      case 4:
       return Ast_helper["Ctf"][8](/* Some */[0,loc],sub[1](sub,desc[1]));
      case 5:
       return Ast_helper["Ctf"][7]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[16](sub,desc[1]));
       
      }
    };

var
 map_signature=
  function(sub,param)
   {return Ast_helper["Csig"][1]
            (sub[34](sub,param[1]),List["map"](sub[13](sub),param[2]));
    };

var CT=[0,map$1,map_field,map_signature];

var
 map$2=
  function(sub,param)
   {var desc=param[1];
    
    var loc=sub[21](sub,param[2]);
    
    var attrs=sub[2](sub,param[3]);
    
    switch(desc[0])
     {case 0:
       return Ast_helper["Mty"][3]
               (/* Some */[0,loc],/* Some */[0,attrs],map_loc(sub,desc[1]));
       
      case 1:
       return Ast_helper["Mty"][5]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[30](sub,desc[1]));
       
      case 2:
       return Ast_helper["Mty"][6]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                map_loc(sub,desc[1]),
                Misc["may_map"](sub[25](sub),desc[2]),
                sub[25](sub,desc[3]));
       
      case 3:
       return Ast_helper["Mty"][7]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[25](sub,desc[1]),
                List["map"](sub[40](sub),desc[2]));
       
      case 4:
       return Ast_helper["Mty"][8]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[24](sub,desc[1]));
       
      case 5:
       return Ast_helper["Mty"][9]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[16](sub,desc[1]));
       
      case 6:
       return Ast_helper["Mty"][4]
               (/* Some */[0,loc],/* Some */[0,attrs],map_loc(sub,desc[1]));
       
      }
    };

var
 map_with_constraint=
  function(sub,param)
   {switch(param[0])
     {case 0:
       return /* Pwith_type */[0,map_loc(sub,param[1]),sub[35](sub,param[2])];
      case 1:
       return /* Pwith_module */[1,
               map_loc(sub,param[1]),
               map_loc(sub,param[2])];
       
      case 2:return /* Pwith_typesubst */[2,sub[35](sub,param[1])];
      case 3:
       return /* Pwith_modsubst */[3,
               map_loc(sub,param[1]),
               map_loc(sub,param[2])];
       
      }
    };

var
 map_signature_item=
  function(sub,param)
   {var desc=param[1];
    
    var loc=sub[21](sub,param[2]);
    
    switch(desc[0])
     {case 0:
       return Ast_helper["Sig"][2](/* Some */[0,loc],sub[39](sub,desc[1]));
      case 1:
       return Ast_helper["Sig"][3]
               (/* Some */[0,loc],List["map"](sub[35](sub),desc[1]));
       
      case 2:
       return Ast_helper["Sig"][4](/* Some */[0,loc],sub[36](sub,desc[1]));
      case 3:
       return Ast_helper["Sig"][5](/* Some */[0,loc],sub[17](sub,desc[1]));
      case 4:
       return Ast_helper["Sig"][6](/* Some */[0,loc],sub[23](sub,desc[1]));
      case 5:
       return Ast_helper["Sig"][7]
               (/* Some */[0,loc],List["map"](sub[23](sub),desc[1]));
       
      case 6:
       return Ast_helper["Sig"][8](/* Some */[0,loc],sub[26](sub,desc[1]));
      case 7:
       return Ast_helper["Sig"][9](/* Some */[0,loc],sub[27](sub,desc[1]));
      case 8:
       return Ast_helper["Sig"][10](/* Some */[0,loc],sub[19](sub,desc[1]));
      case 9:
       return Ast_helper["Sig"][11]
               (/* Some */[0,loc],List["map"](sub[6](sub),desc[1]));
       
      case 10:
       return Ast_helper["Sig"][12]
               (/* Some */[0,loc],List["map"](sub[12](sub),desc[1]));
       
      case 11:
       return Ast_helper["Sig"][14](/* Some */[0,loc],sub[1](sub,desc[1]));
      case 12:
       return Ast_helper["Sig"][13]
               (/* Some */[0,loc],
                /* Some */[0,sub[2](sub,desc[2])],
                sub[16](sub,desc[1]));
       
      }
    };

var MT=[0,map$2,map_with_constraint,map_signature_item];

var
 map$3=
  function(sub,param)
   {var desc=param[1];
    
    var loc=sub[21](sub,param[2]);
    
    var attrs=sub[2](sub,param[3]);
    
    switch(desc[0])
     {case 0:
       return Ast_helper["Mod"][3]
               (/* Some */[0,loc],/* Some */[0,attrs],map_loc(sub,desc[1]));
       
      case 1:
       return Ast_helper["Mod"][4]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[32](sub,desc[1]));
       
      case 2:
       return Ast_helper["Mod"][5]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                map_loc(sub,desc[1]),
                Misc["may_map"](sub[25](sub),desc[2]),
                sub[24](sub,desc[3]));
       
      case 3:
       return Ast_helper["Mod"][6]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[24](sub,desc[1]),
                sub[24](sub,desc[2]));
       
      case 4:
       return Ast_helper["Mod"][7]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[24](sub,desc[1]),
                sub[25](sub,desc[2]));
       
      case 5:
       return Ast_helper["Mod"][8]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[15](sub,desc[1]));
       
      case 6:
       return Ast_helper["Mod"][9]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[16](sub,desc[1]));
       
      }
    };

var
 map_structure_item=
  function(sub,param)
   {var desc=param[1];
    
    var loc=sub[21](sub,param[2]);
    
    switch(desc[0])
     {case 0:
       return Ast_helper["Str"][2]
               (/* Some */[0,loc],
                /* Some */[0,sub[2](sub,desc[2])],
                sub[15](sub,desc[1]));
       
      case 1:
       return Ast_helper["Str"][3]
               (/* Some */[0,loc],desc[1],List["map"](sub[38](sub),desc[2]));
       
      case 2:
       return Ast_helper["Str"][4](/* Some */[0,loc],sub[39](sub,desc[1]));
      case 3:
       return Ast_helper["Str"][5]
               (/* Some */[0,loc],List["map"](sub[35](sub),desc[1]));
       
      case 4:
       return Ast_helper["Str"][6](/* Some */[0,loc],sub[36](sub,desc[1]));
      case 5:
       return Ast_helper["Str"][7](/* Some */[0,loc],sub[17](sub,desc[1]));
      case 6:
       return Ast_helper["Str"][8](/* Some */[0,loc],sub[22](sub,desc[1]));
      case 7:
       return Ast_helper["Str"][9]
               (/* Some */[0,loc],List["map"](sub[22](sub),desc[1]));
       
      case 8:
       return Ast_helper["Str"][10](/* Some */[0,loc],sub[26](sub,desc[1]));
      case 9:
       return Ast_helper["Str"][11](/* Some */[0,loc],sub[27](sub,desc[1]));
      case 10:
       return Ast_helper["Str"][12]
               (/* Some */[0,loc],List["map"](sub[5](sub),desc[1]));
       
      case 11:
       return Ast_helper["Str"][13]
               (/* Some */[0,loc],List["map"](sub[12](sub),desc[1]));
       
      case 12:
       return Ast_helper["Str"][14](/* Some */[0,loc],sub[18](sub,desc[1]));
      case 13:
       return Ast_helper["Str"][16](/* Some */[0,loc],sub[1](sub,desc[1]));
      case 14:
       return Ast_helper["Str"][15]
               (/* Some */[0,loc],
                /* Some */[0,sub[2](sub,desc[2])],
                sub[16](sub,desc[1]));
       
      }
    };

var M=[0,map$3,map_structure_item];

var
 map$4=
  function(sub,param)
   {var desc=param[1];
    
    var loc=sub[21](sub,param[2]);
    
    var attrs=sub[2](sub,param[3]);
    
    switch(desc[0])
     {case 0:
       return Ast_helper["Exp"][3]
               (/* Some */[0,loc],/* Some */[0,attrs],map_loc(sub,desc[1]));
       
      case 1:
       return Ast_helper["Exp"][4]
               (/* Some */[0,loc],/* Some */[0,attrs],desc[1]);
       
      case 2:
       return Ast_helper["Exp"][5]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                desc[1],
                List["map"](sub[38](sub),desc[2]),
                sub[15](sub,desc[3]));
       
      case 3:
       return Ast_helper["Exp"][7]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[4](sub,desc[1]));
       
      case 4:
       return Ast_helper["Exp"][6]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                desc[1],
                map_opt(sub[15](sub),desc[2]),
                sub[28](sub,desc[3]),
                sub[15](sub,desc[4]));
       
      case 5:
       return Ast_helper["Exp"][8]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[15](sub,desc[1]),
                List["map"](map_snd(sub[15](sub)),desc[2]));
       
      case 6:
       return Ast_helper["Exp"][9]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[15](sub,desc[1]),
                sub[4](sub,desc[2]));
       
      case 7:
       return Ast_helper["Exp"][10]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[15](sub,desc[1]),
                sub[4](sub,desc[2]));
       
      case 8:
       return Ast_helper["Exp"][11]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                List["map"](sub[15](sub),desc[1]));
       
      case 9:
       return Ast_helper["Exp"][12]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                map_loc(sub,desc[1]),
                map_opt(sub[15](sub),desc[2]));
       
      case 10:
       return Ast_helper["Exp"][13]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                desc[1],
                map_opt(sub[15](sub),desc[2]));
       
      case 11:
       return Ast_helper["Exp"][14]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                List["map"](map_tuple(map_loc(sub),sub[15](sub)),desc[1]),
                map_opt(sub[15](sub),desc[2]));
       
      case 12:
       return Ast_helper["Exp"][15]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[15](sub,desc[1]),
                map_loc(sub,desc[2]));
       
      case 13:
       return Ast_helper["Exp"][16]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[15](sub,desc[1]),
                map_loc(sub,desc[2]),
                sub[15](sub,desc[3]));
       
      case 14:
       return Ast_helper["Exp"][17]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                List["map"](sub[15](sub),desc[1]));
       
      case 15:
       return Ast_helper["Exp"][18]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[15](sub,desc[1]),
                sub[15](sub,desc[2]),
                map_opt(sub[15](sub),desc[3]));
       
      case 16:
       return Ast_helper["Exp"][19]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[15](sub,desc[1]),
                sub[15](sub,desc[2]));
       
      case 17:
       return Ast_helper["Exp"][20]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[15](sub,desc[1]),
                sub[15](sub,desc[2]));
       
      case 18:
       return Ast_helper["Exp"][21]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[28](sub,desc[1]),
                sub[15](sub,desc[2]),
                sub[15](sub,desc[3]),
                desc[4],
                sub[15](sub,desc[5]));
       
      case 19:
       return Ast_helper["Exp"][23]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[15](sub,desc[1]),
                sub[34](sub,desc[2]));
       
      case 20:
       return Ast_helper["Exp"][22]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[15](sub,desc[1]),
                map_opt(sub[34](sub),desc[2]),
                sub[34](sub,desc[3]));
       
      case 21:
       return Ast_helper["Exp"][24]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[15](sub,desc[1]),
                desc[2]);
       
      case 22:
       return Ast_helper["Exp"][25]
               (/* Some */[0,loc],/* Some */[0,attrs],map_loc(sub,desc[1]));
       
      case 23:
       return Ast_helper["Exp"][26]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                map_loc(sub,desc[1]),
                sub[15](sub,desc[2]));
       
      case 24:
       return Ast_helper["Exp"][27]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                List["map"](map_tuple(map_loc(sub),sub[15](sub)),desc[1]));
       
      case 25:
       return Ast_helper["Exp"][28]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                map_loc(sub,desc[1]),
                sub[24](sub,desc[2]),
                sub[15](sub,desc[3]));
       
      case 26:
       return Ast_helper["Exp"][29]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[15](sub,desc[1]));
       
      case 27:
       return Ast_helper["Exp"][30]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[15](sub,desc[1]));
       
      case 28:
       return Ast_helper["Exp"][31]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[15](sub,desc[1]),
                map_opt(sub[34](sub),desc[2]));
       
      case 29:
       return Ast_helper["Exp"][32]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[10](sub,desc[1]));
       
      case 30:
       return Ast_helper["Exp"][33]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                desc[1],
                sub[15](sub,desc[2]));
       
      case 31:
       return Ast_helper["Exp"][34]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[24](sub,desc[1]));
       
      case 32:
       return Ast_helper["Exp"][35]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                desc[1],
                map_loc(sub,desc[2]),
                sub[15](sub,desc[3]));
       
      case 33:
       return Ast_helper["Exp"][36]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[16](sub,desc[1]));
       
      }
    };

var E=[0,map$4];

var
 map$5=
  function(sub,param)
   {var desc=param[1];
    
    var loc=sub[21](sub,param[2]);
    
    var attrs=sub[2](sub,param[3]);
    
    if(typeof desc==="number")
     {switch(desc)
       {case 0:
         return Ast_helper["Pat"][3]
                 (/* Some */[0,loc],/* Some */[0,attrs],/* () */0);
         
        }}
    else
     {switch(desc[0])
       {case 0:
         return Ast_helper["Pat"][4]
                 (/* Some */[0,loc],/* Some */[0,attrs],map_loc(sub,desc[1]));
         
        case 1:
         return Ast_helper["Pat"][5]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  sub[28](sub,desc[1]),
                  map_loc(sub,desc[2]));
         
        case 2:
         return Ast_helper["Pat"][6]
                 (/* Some */[0,loc],/* Some */[0,attrs],desc[1]);
         
        case 3:
         return Ast_helper["Pat"][7]
                 (/* Some */[0,loc],/* Some */[0,attrs],desc[1],desc[2]);
         
        case 4:
         return Ast_helper["Pat"][8]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  List["map"](sub[28](sub),desc[1]));
         
        case 5:
         return Ast_helper["Pat"][9]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  map_loc(sub,desc[1]),
                  map_opt(sub[28](sub),desc[2]));
         
        case 6:
         return Ast_helper["Pat"][10]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  desc[1],
                  map_opt(sub[28](sub),desc[2]));
         
        case 7:
         return Ast_helper["Pat"][11]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  List["map"](map_tuple(map_loc(sub),sub[28](sub)),desc[1]),
                  desc[2]);
         
        case 8:
         return Ast_helper["Pat"][12]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  List["map"](sub[28](sub),desc[1]));
         
        case 9:
         return Ast_helper["Pat"][13]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  sub[28](sub,desc[1]),
                  sub[28](sub,desc[2]));
         
        case 10:
         return Ast_helper["Pat"][14]
                 (/* Some */[0,loc],
                  /* Some */[0,attrs],
                  sub[28](sub,desc[1]),
                  sub[34](sub,desc[2]));
         
        case 11:
         return Ast_helper["Pat"][15]
                 (/* Some */[0,loc],/* Some */[0,attrs],map_loc(sub,desc[1]));
         
        case 12:
         return Ast_helper["Pat"][16]
                 (/* Some */[0,loc],/* Some */[0,attrs],sub[28](sub,desc[1]));
         
        case 13:
         return Ast_helper["Pat"][17]
                 (/* Some */[0,loc],/* Some */[0,attrs],map_loc(sub,desc[1]));
         
        case 14:
         return Ast_helper["Pat"][18]
                 (/* Some */[0,loc],/* Some */[0,attrs],sub[28](sub,desc[1]));
         
        case 15:
         return Ast_helper["Pat"][19]
                 (/* Some */[0,loc],/* Some */[0,attrs],sub[16](sub,desc[1]));
         
        }}
    };

var P=[0,map$5];

var
 map$6=
  function(sub,param)
   {var desc=param[1];
    
    var loc=sub[21](sub,param[2]);
    
    var attrs=sub[2](sub,param[3]);
    
    switch(desc[0])
     {case 0:
       return Ast_helper["Cl"][3]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                map_loc(sub,desc[1]),
                List["map"](sub[34](sub),desc[2]));
       
      case 1:
       return Ast_helper["Cl"][4]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[10](sub,desc[1]));
       
      case 2:
       return Ast_helper["Cl"][5]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                desc[1],
                map_opt(sub[15](sub),desc[2]),
                sub[28](sub,desc[3]),
                sub[7](sub,desc[4]));
       
      case 3:
       return Ast_helper["Cl"][6]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[7](sub,desc[1]),
                List["map"](map_snd(sub[15](sub)),desc[2]));
       
      case 4:
       return Ast_helper["Cl"][7]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                desc[1],
                List["map"](sub[38](sub),desc[2]),
                sub[7](sub,desc[3]));
       
      case 5:
       return Ast_helper["Cl"][8]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[7](sub,desc[1]),
                sub[11](sub,desc[2]));
       
      case 6:
       return Ast_helper["Cl"][9]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[16](sub,desc[1]));
       
      }
    };

var
 map_kind=
  function(sub,param)
   {switch(param[0])
     {case 0:return /* Cfk_virtual */[0,sub[34](sub,param[1])];
      case 1:return /* Cfk_concrete */[1,param[1],sub[15](sub,param[2])];
      }
    };

var
 map_field$1=
  function(sub,param)
   {var desc=param[1];
    
    var loc=sub[21](sub,param[2]);
    
    var attrs=sub[2](sub,param[3]);
    
    switch(desc[0])
     {case 0:
       return Ast_helper["Cf"][3]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                desc[1],
                sub[7](sub,desc[2]),
                desc[3]);
       
      case 1:
       var match=desc[1];
       
       return Ast_helper["Cf"][4]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                map_loc(sub,match[1]),
                match[2],
                map_kind(sub,match[3]));
       
      case 2:
       var match$1=desc[1];
       
       return Ast_helper["Cf"][5]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                map_loc(sub,match$1[1]),
                match$1[2],
                map_kind(sub,match$1[3]));
       
      case 3:
       var match$2=desc[1];
       
       return Ast_helper["Cf"][6]
               (/* Some */[0,loc],
                /* Some */[0,attrs],
                sub[34](sub,match$2[1]),
                sub[34](sub,match$2[2]));
       
      case 4:
       return Ast_helper["Cf"][7]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[15](sub,desc[1]));
       
      case 5:
       return Ast_helper["Cf"][9](/* Some */[0,loc],sub[1](sub,desc[1]));
      case 6:
       return Ast_helper["Cf"][8]
               (/* Some */[0,loc],/* Some */[0,attrs],sub[16](sub,desc[1]));
       
      }
    };

var
 map_structure=
  function(sub,param)
   {return /* record */[0,
            sub[28](sub,param[1]),
            List["map"](sub[8](sub),param[2])];
    };

var
 class_infos=
  function(sub,f,param)
   {return Ast_helper["Ci"][1]
            (/* Some */[0,sub[21](sub,param[5])],
             /* Some */[0,sub[2](sub,param[6])],
             /* None */0,
             /* None */0,
             /* Some */[0,param[1]],
             /* Some */[0,List["map"](map_fst(sub[34](sub)),param[2])],
             map_loc(sub,param[3]),
             f(param[4]));
    };

var CE=[0,map$6,map_kind,map_field$1,map_structure,class_infos];

var
 default_mapper=
  /* record */[0,
   function($$this,param)
    {return /* tuple */[0,
             map_loc($$this,param[1]),
             $$this[29]($$this,param[2])];
     },
   function($$this,l){return List["map"]($$this[1]($$this),l);},
   function($$this,param)
    {return /* record */[0,
             $$this[28]($$this,param[1]),
             map_opt($$this[15]($$this),param[2]),
             $$this[15]($$this,param[3])];
     },
   function($$this,l){return List["map"]($$this[3]($$this),l);},
   function($$this){return CE[5]($$this,$$this[7]($$this));},
   function($$this){return CE[5]($$this,$$this[11]($$this));},
   CE[1],
   CE[3],
   CT[3],
   CE[4],
   CT[1],
   function($$this){return CE[5]($$this,$$this[11]($$this));},
   CT[2],
   function($$this,param)
    {return Ast_helper["Type"][2]
             (/* Some */[0,$$this[21]($$this,param[4])],
              /* Some */[0,$$this[2]($$this,param[5])],
              /* None */0,
              /* Some */[0,List["map"]($$this[34]($$this),param[2])],
              map_opt($$this[34]($$this),param[3]),
              map_loc($$this,param[1]));
     },
   E[1],
   function($$this,param)
    {return /* tuple */[0,
             map_loc($$this,param[1]),
             $$this[29]($$this,param[2])];
     },
   T[7],
   function($$this,param)
    {return Ast_helper["Incl"][1]
             (/* Some */[0,$$this[21]($$this,param[2])],
              /* Some */[0,$$this[2]($$this,param[3])],
              /* None */0,
              $$this[24]($$this,param[1]));
     },
   function($$this,param)
    {return Ast_helper["Incl"][1]
             (/* Some */[0,$$this[21]($$this,param[2])],
              /* Some */[0,$$this[2]($$this,param[3])],
              /* None */0,
              $$this[25]($$this,param[1]));
     },
   function($$this,param)
    {return Ast_helper["Type"][3]
             (/* Some */[0,$$this[21]($$this,param[4])],
              /* Some */[0,$$this[2]($$this,param[5])],
              /* None */0,
              /* Some */[0,param[2]],
              map_loc($$this,param[1]),
              $$this[34]($$this,param[3]));
     },
   function($$this,l){return l;},
   function($$this,param)
    {return Ast_helper["Mb"][1]
             (/* Some */[0,$$this[21]($$this,param[4])],
              /* Some */[0,$$this[2]($$this,param[3])],
              /* None */0,
              /* None */0,
              map_loc($$this,param[1]),
              $$this[24]($$this,param[2]));
     },
   function($$this,param)
    {return Ast_helper["Md"][1]
             (/* Some */[0,$$this[21]($$this,param[4])],
              /* Some */[0,$$this[2]($$this,param[3])],
              /* None */0,
              /* None */0,
              map_loc($$this,param[1]),
              $$this[25]($$this,param[2]));
     },
   M[1],
   MT[1],
   function($$this,param)
    {return Ast_helper["Mtd"][1]
             (/* Some */[0,$$this[21]($$this,param[4])],
              /* Some */[0,$$this[2]($$this,param[3])],
              /* None */0,
              /* None */0,
              map_opt($$this[25]($$this),param[2]),
              map_loc($$this,param[1]));
     },
   function($$this,param)
    {return Ast_helper["Opn"][1]
             (/* Some */[0,$$this[21]($$this,param[3])],
              /* Some */[0,$$this[2]($$this,param[4])],
              /* None */0,
              /* Some */[0,param[2]],
              map_loc($$this,param[1]));
     },
   P[1],
   function($$this,param)
    {switch(param[0])
      {case 0:return /* PStr */[0,$$this[32]($$this,param[1])];
       case 1:return /* PTyp */[1,$$this[34]($$this,param[1])];
       case 2:
        return /* PPat */[2,
                $$this[28]($$this,param[1]),
                map_opt($$this[15]($$this),param[2])];
        
       }
     },
   function($$this,l){return List["map"]($$this[31]($$this),l);},
   MT[3],
   function($$this,l){return List["map"]($$this[33]($$this),l);},
   M[2],
   T[2],
   T[3],
   T[5],
   T[4],
   function($$this,param)
    {return Ast_helper["Vb"][1]
             (/* Some */[0,$$this[21]($$this,param[4])],
              /* Some */[0,$$this[2]($$this,param[3])],
              /* None */0,
              /* None */0,
              $$this[28]($$this,param[1]),
              $$this[15]($$this,param[2]));
     },
   function($$this,param)
    {return Ast_helper["Val"][1]
             (/* Some */[0,$$this[21]($$this,param[5])],
              /* Some */[0,$$this[2]($$this,param[4])],
              /* None */0,
              /* Some */[0,param[3]],
              map_loc($$this,param[1]),
              $$this[34]($$this,param[2]));
     },
   MT[2]];

var
 extension_of_error=
  function(param)
   {return /* tuple */[0,
            /* record */[0,"ocaml.error",param[1]],
            /* PStr */[0,
             Pervasives["@"]
              (/* :: */[0,
                Ast_helper["Str"][2]
                 (/* None */0,
                  /* None */0,
                  Ast_helper["Exp"][4]
                   (/* None */0,
                    /* None */0,
                    /* Const_string */[2,param[2],/* None */0])),
                /* :: */[0,
                 Ast_helper["Str"][2]
                  (/* None */0,
                   /* None */0,
                   Ast_helper["Exp"][4]
                    (/* None */0,
                     /* None */0,
                     /* Const_string */[2,param[4],/* None */0])),
                 /* [] */0]],
               List["map"]
                (function(ext)
                  {return Ast_helper["Str"][15]
                           (/* None */0,/* None */0,extension_of_error(ext));
                   },
                 param[3]))]];
    };

var
 attribute_of_warning=
  function(loc,s)
   {return /* tuple */[0,
            /* record */[0,"ocaml.ppwarning",loc],
            /* PStr */[0,
             /* :: */[0,
              Ast_helper["Str"][2]
               (/* Some */[0,loc],
                /* None */0,
                Ast_helper["Exp"][4]
                 (/* None */0,/* None */0,/* Const_string */[2,s,/* None */0])),
              /* [] */0]]];
    };

var
 compare=
  function(prim,prim$1){return CamlPrimitive["caml_compare"](prim,prim$1);};

var StringMap=Map["Make"]([0,compare]);

var cookies=[0,StringMap[1]];

var
 get_cookie=
  function(k)
   {try
     {return /* Some */[0,StringMap[22](k,cookies[1])];}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* None */0;}
      else
       {throw exn;}
      }
    };

var
 set_cookie=
  function(k,v){return cookies[1]=StringMap[4](k,v,cookies[1]),0;};

var tool_name_ref=[0,"_none_"];

var tool_name=function(param){return tool_name_ref[1];};

var
 lid=
  function(name)
   {return /* record */[0,/* Lident */[0,name],Location["none"]];};

var
 make_string=
  function(x)
   {return Ast_helper["Exp"][4]
            (/* None */0,/* None */0,/* Const_string */[2,x,/* None */0]);
    };

var
 make_bool=
  function(x)
   {if(x)
     {return Ast_helper["Exp"][12]
              (/* None */0,/* None */0,lid("true"),/* None */0);
      }
    else
     {return Ast_helper["Exp"][12]
              (/* None */0,/* None */0,lid("false"),/* None */0);
      }
    };

var
 make_list=
  function(f,lst)
   {if(lst)
     {return Ast_helper["Exp"][12]
              (/* None */0,
               /* None */0,
               lid("::"),
               /* Some */[0,
                Ast_helper["Exp"][11]
                 (/* None */0,
                  /* None */0,
                  /* :: */[0,
                   f(lst[1]),
                   /* :: */[0,make_list(f,lst[2]),/* [] */0]])]);
      }
    else
     {return Ast_helper["Exp"][12]
              (/* None */0,/* None */0,lid("[]"),/* None */0);
      }
    };

var
 make_pair=
  function(f1,f2,param)
   {return Ast_helper["Exp"][11]
            (/* None */0,
             /* None */0,
             /* :: */[0,f1(param[1]),/* :: */[0,f2(param[2]),/* [] */0]]);
    };

var
 make_option=
  function(f,opt)
   {if(opt)
     {return Ast_helper["Exp"][12]
              (/* None */0,/* None */0,lid("Some"),/* Some */[0,f(opt[1])]);
      }
    else
     {return Ast_helper["Exp"][12]
              (/* None */0,/* None */0,lid("None"),/* None */0);
      }
    };

var
 get_cookies=
  function(param)
   {return /* tuple */[0,
            lid("cookies"),
            make_list
             (make_pair(make_string,function(x){return x;}),
              StringMap[17](cookies[1]))];
    };

var
 mk=
  function(fields)
   {return /* tuple */[0,
            /* record */[0,"ocaml.ppx.context",Location["none"]],
            /* PStr */[0,
             /* :: */[0,
              Ast_helper["Str"][2]
               (/* None */0,
                /* None */0,
                Ast_helper["Exp"][14]
                 (/* None */0,/* None */0,fields,/* None */0)),
              /* [] */0]]];
    };

var
 make=
  function(tool_name,param)
   {var
     fields=
      /* :: */[0,
       /* tuple */[0,lid("tool_name"),make_string(tool_name)],
       /* :: */[0,
        /* tuple */[0,
         lid("include_dirs"),
         make_list(make_string,Clflags["include_dirs"][1])],
        /* :: */[0,
         /* tuple */[0,
          lid("load_path"),
          make_list(make_string,Config["load_path"][1])],
         /* :: */[0,
          /* tuple */[0,
           lid("open_modules"),
           make_list(make_string,Clflags["open_modules"][1])],
          /* :: */[0,
           /* tuple */[0,
            lid("for_package"),
            make_option(make_string,Clflags["for_package"][1])],
           /* :: */[0,
            /* tuple */[0,lid("debug"),make_bool(Clflags["debug"][1])],
            /* :: */[0,get_cookies(/* () */0),/* [] */0]]]]]]];
    
    return mk(fields);
    };

var
 get_fields=
  function(param)
   {var exit;
    
    switch(param[0])
     {case 0:
       var match=param[1];
       
       if(match)
        {var match$1=match[1][1];
         
         switch(match$1[0])
          {case 0:
            var match$2=match$1[1][1];
            
            switch(match$2[0])
             {case 11:
               if(match$2[2])
                {exit=51;}
               else
                {if(match$1[2])
                  {exit=51;}
                 else
                  {if(match[2]){exit=51;}else{return match$2[1];}}
                 }
               
              default:exit=51;}
            
           default:exit=51;}
         }
       else
        {exit=51;}
       
      case 1:exit=51;
      case 2:exit=51;
      }
    
    switch(exit)
     {case 51:
       return Location["raise_errorf"]
               (/* None */0,
                /* None */0,
                /* None */0,
                [/* Format */0,
                 [/* String_literal */11,
                  "Internal error: invalid [",
                  [/* Formatting_lit */17,
                   /* Escaped_at */5,
                   [/* Formatting_lit */17,
                    [/* Scan_indic */2,111],
                    [/* String_literal */11,
                     "caml.ppx.context] syntax",
                     /* End_of_format */0]]]],
                 "Internal error: invalid [@@@ocaml.ppx.context] syntax"]);
       
      }
    };

var
 restore=
  function(fields)
   {var
     field=
      function(name,payload)
       {var
         get_string=
          function(param)
           {var match=param[1];
            
            var exit;
            
            switch(match[0])
             {case 1:
               var match$1=match[1];
               
               switch(match$1[0])
                {case 2:if(match$1[2]){exit=44;}else{return match$1[1];}
                 default:exit=44;}
               
              default:exit=44;}
            
            switch(exit)
             {case 44:
               return Location["raise_errorf"]
                       (/* None */0,
                        /* None */0,
                        /* None */0,
                        [/* Format */0,
                         [/* String_literal */11,
                          "Internal error: invalid [",
                          [/* Formatting_lit */17,
                           /* Escaped_at */5,
                           [/* Formatting_lit */17,
                            [/* Scan_indic */2,111],
                            [/* String_literal */11,
                             "caml.ppx.context { ",
                             [/* String */2,
                              /* No_padding */0,
                              [/* String_literal */11,
                               " }] string syntax",
                               /* End_of_format */0]]]]]],
                         "Internal error: invalid [@@@ocaml.ppx.context { %s }] string syntax"],
                        name);
               
              }
            };
        
        var
         get_bool=
          function(pexp)
           {var match=pexp[1];
            
            var exit;
            
            switch(match[0])
             {case 9:
               var match$1=match[1][1];
               
               switch(match$1[0])
                {case 0:
                  switch(match$1[1])
                   {case "false":
                     if(match[2]){exit=45;}else{return /* false */0;}
                    case "true":if(match[2]){exit=45;}else{return /* true */1;}
                    default:exit=45;}
                  
                 case 1:exit=45;
                 case 2:exit=45;
                 }
               
              default:exit=45;}
            
            switch(exit)
             {case 45:
               return Location["raise_errorf"]
                       (/* None */0,
                        /* None */0,
                        /* None */0,
                        [/* Format */0,
                         [/* String_literal */11,
                          "Internal error: invalid [",
                          [/* Formatting_lit */17,
                           /* Escaped_at */5,
                           [/* Formatting_lit */17,
                            [/* Scan_indic */2,111],
                            [/* String_literal */11,
                             "caml.ppx.context { ",
                             [/* String */2,
                              /* No_padding */0,
                              [/* String_literal */11,
                               " }] bool syntax",
                               /* End_of_format */0]]]]]],
                         "Internal error: invalid [@@@ocaml.ppx.context { %s }] bool syntax"],
                        name);
               
              }
            };
        
        var
         get_list=
          function(elem,param)
           {var match=param[1];
            
            var exit;
            
            switch(match[0])
             {case 9:
               var match$1=match[1][1];
               
               switch(match$1[0])
                {case 0:
                  switch(match$1[1])
                   {case "::":
                     var match$2=match[2];
                     
                     if(match$2)
                      {var match$3=match$2[1][1];
                       
                       switch(match$3[0])
                        {case 8:
                          var match$4=match$3[1];
                          
                          if(match$4)
                           {var match$5=match$4[2];
                            
                            if(match$5)
                             {if(match$5[2])
                               {exit=46;}
                              else
                               {return /* :: */[0,
                                        elem(match$4[1]),
                                        get_list(elem,match$5[1])];
                                }
                              }
                            else
                             {exit=46;}
                            }
                          else
                           {exit=46;}
                          
                         default:exit=46;}
                       }
                     else
                      {exit=46;}
                     
                    case "[]":if(match[2]){exit=46;}else{return /* [] */0;}
                    default:exit=46;}
                  
                 case 1:exit=46;
                 case 2:exit=46;
                 }
               
              default:exit=46;}
            
            switch(exit)
             {case 46:
               return Location["raise_errorf"]
                       (/* None */0,
                        /* None */0,
                        /* None */0,
                        [/* Format */0,
                         [/* String_literal */11,
                          "Internal error: invalid [",
                          [/* Formatting_lit */17,
                           /* Escaped_at */5,
                           [/* Formatting_lit */17,
                            [/* Scan_indic */2,111],
                            [/* String_literal */11,
                             "caml.ppx.context { ",
                             [/* String */2,
                              /* No_padding */0,
                              [/* String_literal */11,
                               " }] list syntax",
                               /* End_of_format */0]]]]]],
                         "Internal error: invalid [@@@ocaml.ppx.context { %s }] list syntax"],
                        name);
               
              }
            };
        
        var
         get_pair=
          function(f1,f2,param)
           {var match=param[1];
            
            var exit;
            
            switch(match[0])
             {case 8:
               var match$1=match[1];
               
               if(match$1)
                {var match$2=match$1[2];
                 
                 if(match$2)
                  {if(match$2[2])
                    {exit=47;}
                   else
                    {return /* tuple */[0,f1(match$1[1]),f2(match$2[1])];}
                   }
                 else
                  {exit=47;}
                 }
               else
                {exit=47;}
               
              default:exit=47;}
            
            switch(exit)
             {case 47:
               return Location["raise_errorf"]
                       (/* None */0,
                        /* None */0,
                        /* None */0,
                        [/* Format */0,
                         [/* String_literal */11,
                          "Internal error: invalid [",
                          [/* Formatting_lit */17,
                           /* Escaped_at */5,
                           [/* Formatting_lit */17,
                            [/* Scan_indic */2,111],
                            [/* String_literal */11,
                             "caml.ppx.context { ",
                             [/* String */2,
                              /* No_padding */0,
                              [/* String_literal */11,
                               " }] pair syntax",
                               /* End_of_format */0]]]]]],
                         "Internal error: invalid [@@@ocaml.ppx.context { %s }] pair syntax"],
                        name);
               
              }
            };
        
        var
         get_option=
          function(elem,param)
           {var match=param[1];
            
            var exit;
            
            switch(match[0])
             {case 9:
               var match$1=match[1][1];
               
               switch(match$1[0])
                {case 0:
                  switch(match$1[1])
                   {case "None":if(match[2]){exit=48;}else{return /* None */0;}
                    case "Some":
                     var match$2=match[2];
                     
                     if(match$2)
                      {return /* Some */[0,elem(match$2[1])];}
                     else
                      {exit=48;}
                     
                    default:exit=48;}
                  
                 case 1:exit=48;
                 case 2:exit=48;
                 }
               
              default:exit=48;}
            
            switch(exit)
             {case 48:
               return Location["raise_errorf"]
                       (/* None */0,
                        /* None */0,
                        /* None */0,
                        [/* Format */0,
                         [/* String_literal */11,
                          "Internal error: invalid [",
                          [/* Formatting_lit */17,
                           /* Escaped_at */5,
                           [/* Formatting_lit */17,
                            [/* Scan_indic */2,111],
                            [/* String_literal */11,
                             "caml.ppx.context { ",
                             [/* String */2,
                              /* No_padding */0,
                              [/* String_literal */11,
                               " }] option syntax",
                               /* End_of_format */0]]]]]],
                         "Internal error: invalid [@@@ocaml.ppx.context { %s }] option syntax"],
                        name);
               
              }
            };
        
        var exit;
        
        switch(name)
         {case "cookies":
           var
            l=
             get_list(get_pair(get_string,function(x){return x;}),payload);
           
           return cookies[1]=
                  List["fold_left"]
                   (function(s,param)
                     {return StringMap[4](param[1],param[2],s);},
                    StringMap[1],
                    l),
                  0;
           
          case "debug":return Clflags["debug"][1]=get_bool(payload),0;
          case "for_package":
           return Clflags["for_package"][1]=get_option(get_string,payload),0;
          case "include_dirs":
           return Clflags["include_dirs"][1]=get_list(get_string,payload),0;
          case "load_path":
           return Config["load_path"][1]=get_list(get_string,payload),0;
          case "open_modules":
           return Clflags["open_modules"][1]=get_list(get_string,payload),0;
          case "tool_name":return tool_name_ref[1]=get_string(payload),0;
          default:exit=43;}
        
        switch(exit){case 43:return /* () */0;}
        };
    
    return List["iter"]
            (function(param)
              {var match=param[1][1];
               
               var exit;
               
               switch(match[0])
                {case 0:return field(match[1],param[2]);
                 case 1:exit=41;
                 case 2:exit=41;
                 }
               
               switch(exit){case 41:return /* () */0;}
               },
             fields);
    };

var
 update_cookies=
  function(fields)
   {var
     fields$1=
      List["filter"]
       (function(param)
         {var match=param[1][1];
          
          var exit;
          
          switch(match[0])
           {case 0:
             switch(match[1])
              {case "cookies":return /* false */0;default:exit=38;}
             
            case 1:exit=38;
            case 2:exit=38;
            }
          
          switch(exit){case 38:return /* true */1;}
          },
        fields);
    
    return Pervasives["@"]
            (fields$1,/* :: */[0,get_cookies(/* () */0),/* [] */0]);
    };

var
 PpxContext=
  [0,
   lid,
   make_string,
   make_bool,
   make_list,
   make_pair,
   make_option,
   get_cookies,
   mk,
   make,
   get_fields,
   restore,
   update_cookies];

var ppx_context=PpxContext[9];

var
 apply_lazy=
  function(source,target,mapper)
   {var ic=Pervasives["open_in_bin"](source);
    
    var
     magic=
      Pervasives["really_input_string"]
       (ic,Config["ast_impl_magic_number"]["length"]);
    
    if
     (CamlPrimitive["caml_string_notequal"]
       (magic,Config["ast_impl_magic_number"])&&
      CamlPrimitive["caml_string_notequal"]
       (magic,Config["ast_intf_magic_number"]))
     {Pervasives["failwith"]
       ("Ast_mapper: OCaml version mismatch or malformed input")}
    else
     {}
    
    Location["input_name"][1]=Pervasives["input_value"](ic);
    var ast=Pervasives["input_value"](ic);
    
    Pervasives["close_in"](ic);
    var
     implem=
      function(ast)
       {try
         {var exit;
          
          if(ast)
           {var match=ast[1][1];
            
            switch(match[0])
             {case 13:
               var match$1=match[1];
               
               switch(match$1[1][1])
                {case "ocaml.ppx.context":
                  var
                   match$2=
                    /* tuple */[0,PpxContext[10](match$1[2]),ast[2]];
                  
                 default:exit=30;}
               
              default:exit=30;}
            }
          else
           {exit=30;}
          
          switch(exit){case 30:var match$2=/* tuple */[0,/* [] */0,ast];}
          
          var fields=match$2[1];
          
          PpxContext[11](fields);
          var mapper$1=mapper(/* () */0);
          
          var ast$1=mapper$1[32](mapper$1,match$2[2]);
          
          var fields$1=PpxContext[12](fields);
          
          return /* :: */[0,
                  Ast_helper["Str"][16](/* None */0,PpxContext[8](fields$1)),
                  ast$1];
          }
        catch(exn)
         {var match$3=Location["error_of_exn"](exn);
          
          if(match$3)
           {return /* :: */[0,
                    /* record */[0,
                     /* Pstr_extension */[14,
                      extension_of_error(match$3[1]),
                      /* [] */0],
                     Location["none"]],
                    /* [] */0];
            }
          else
           {throw exn;}
          }
        };
    
    var
     iface=
      function(ast)
       {try
         {var exit;
          
          if(ast)
           {var match=ast[1][1];
            
            switch(match[0])
             {case 11:
               var match$1=match[1];
               
               switch(match$1[1][1])
                {case "ocaml.ppx.context":
                  var
                   match$2=
                    /* tuple */[0,PpxContext[10](match$1[2]),ast[2]];
                  
                 default:exit=23;}
               
              default:exit=23;}
            }
          else
           {exit=23;}
          
          switch(exit){case 23:var match$2=/* tuple */[0,/* [] */0,ast];}
          
          var fields=match$2[1];
          
          PpxContext[11](fields);
          var mapper$1=mapper(/* () */0);
          
          var ast$1=mapper$1[30](mapper$1,match$2[2]);
          
          var fields$1=PpxContext[12](fields);
          
          return /* :: */[0,
                  Ast_helper["Sig"][14](/* None */0,PpxContext[8](fields$1)),
                  ast$1];
          }
        catch(exn)
         {var match$3=Location["error_of_exn"](exn);
          
          if(match$3)
           {return /* :: */[0,
                    /* record */[0,
                     /* Psig_extension */[12,
                      extension_of_error(match$3[1]),
                      /* [] */0],
                     Location["none"]],
                    /* [] */0];
            }
          else
           {throw exn;}
          }
        };
    
    if
     (CamlPrimitive["caml_string_equal"]
       (magic,Config["ast_impl_magic_number"]))
     {var ast$1=implem(ast);}
    else
     {var ast$1=iface(ast);}
    
    var oc=Pervasives["open_out_bin"](target);
    
    Pervasives["output_string"](oc,magic);
    Pervasives["output_value"](oc,Location["input_name"][1]);
    Pervasives["output_value"](oc,ast$1);
    return Pervasives["close_out"](oc);
    };

var
 drop_ppx_context_str=
  function(restore,items)
   {var exit;
    
    if(items)
     {var match=items[1][1];
      
      switch(match[0])
       {case 13:
         var match$1=match[1];
         
         switch(match$1[1][1])
          {case "ocaml.ppx.context":
            if(restore){PpxContext[11](PpxContext[10](match$1[2]))}else{}
            
            return items[2];
            
           default:exit=15;}
         
        default:exit=15;}
      }
    else
     {exit=15;}
    
    switch(exit){case 15:return items;}
    };

var
 drop_ppx_context_sig=
  function(restore,items)
   {var exit;
    
    if(items)
     {var match=items[1][1];
      
      switch(match[0])
       {case 11:
         var match$1=match[1];
         
         switch(match$1[1][1])
          {case "ocaml.ppx.context":
            if(restore){PpxContext[11](PpxContext[10](match$1[2]))}else{}
            
            return items[2];
            
           default:exit=13;}
         
        default:exit=13;}
      }
    else
     {exit=13;}
    
    switch(exit){case 13:return items;}
    };

var
 add_ppx_context_str=
  function(tool_name,ast)
   {return /* :: */[0,
            Ast_helper["Str"][16]
             (/* None */0,ppx_context(tool_name,/* () */0)),
            ast];
    };

var
 add_ppx_context_sig=
  function(tool_name,ast)
   {return /* :: */[0,
            Ast_helper["Sig"][14]
             (/* None */0,ppx_context(tool_name,/* () */0)),
            ast];
    };

var
 apply=
  function(source,target,mapper)
   {return apply_lazy(source,target,function(param){return mapper;});};

var
 run_main=
  function(mapper)
   {try
     {var a=Sys["argv"];
      
      var n=/* -1 for tag */a["length"]-1;
      
      if(n>2)
       {var
         mapper$1=
          function(param)
           {try
             {return mapper($$Array["to_list"]($$Array["sub"](a,1,n-3)));}
            catch(exn)
             {var f=function(param$1,param$2){throw exn;};
              
              var newrecord=/* unknown */"duprecord regular 40";
              
              newrecord[30]=f;
              newrecord[32]=f;
              return newrecord;
              }
            };
        
        return apply_lazy(a[n-2+1],a[n-1+1],mapper$1);
        }
      else
       {Printf["eprintf"]
         ([/* Format */0,
           [/* String_literal */11,
            "Usage: ",
            [/* String */2,
             /* No_padding */0,
             [/* String_literal */11,
              " [extra_args] <infile> <outfile>\n",
              [/* Flush */10,/* End_of_format */0]]]],
           "Usage: %s [extra_args] <infile> <outfile>\n%!"],
          Sys["executable_name"]);
        return Pervasives["exit"](2);
        }
      }
    catch(exn)
     {Pervasives["prerr_endline"](Printexc["to_string"](exn));
      return Pervasives["exit"](2);
      }
    };

var register_function=[0,function(_name,f){return run_main(f);}];

var register=function(name,f){return register_function[1](name,f);};

module["exports"]=
{"default_mapper":default_mapper,
 "tool_name":tool_name,
 "apply":apply,
 "run_main":run_main,
 "register_function":register_function,
 "register":register,
 "map_opt":map_opt,
 "extension_of_error":extension_of_error,
 "attribute_of_warning":attribute_of_warning,
 "add_ppx_context_str":add_ppx_context_str,
 "add_ppx_context_sig":add_ppx_context_sig,
 "drop_ppx_context_str":drop_ppx_context_str,
 "drop_ppx_context_sig":drop_ppx_context_sig,
 "set_cookie":set_cookie,
 "get_cookie":get_cookie};

