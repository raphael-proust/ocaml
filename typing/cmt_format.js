// Generated CODE, PLEASE EDIT WITH CARE 

var Cmi_format=require("Cmi_format");
var Pervasives=require("Pervasives");
var List=require("List");
var Env=require("Env");
var Clflags=require("Clflags");
var Digest=require("Digest");
var Misc=require("Misc");
var Lexer=require("Lexer");
var TypedtreeMap=require("TypedtreeMap");
var Config=require("Config");
var $$Array=require("Array");
var Sys=require("Sys");



var
 read_magic_number=
  function(ic)
   {var len_magic_number=Config["cmt_magic_number"]["length"];
    
    return Pervasives["really_input_string"](ic,len_magic_number);
    };

try
 {var need_to_clear_env=0;}
catch(exn){if(exn=Not_found){var need_to_clear_env=1;}else{throw exn;}}

var keep_only_summary=Env["keep_only_summary"];

var include=TypedtreeMap["DefaultMapArgument"];

var
 leave_pattern=
  function(p)
   {var newrecord="unknown primitive:duprecord regular 6";
    
    newrecord[5]=keep_only_summary(p[5]),0;
    return newrecord;
    };

var
 leave_expression=
  function(e)
   {var
     exp_extra=
      List["map"]
       (function(exp_extra$1)
         {var match=exp_extra$1[1];
          
          switch(match)
           {case 2:
             return /* tuple */[0,
                     /* Texp_open */[2,
                      match[1],
                      match[2],
                      match[3],
                      keep_only_summary(match[4])],
                     exp_extra$1[2],
                     exp_extra$1[3]];
             
            default:return exp_extra$1;}
          },
        e[3]);
    
    return /* record */[0,
            e[1],
            e[2],
            exp_extra,
            e[4],
            keep_only_summary(e[5]),
            e[6]];
    };

var
 leave_class_expr=
  function(c)
   {return /* record */[0,c[1],c[2],c[3],keep_only_summary(c[4]),c[5]];};

var
 leave_module_expr=
  function(m)
   {return /* record */[0,m[1],m[2],m[3],keep_only_summary(m[4]),m[5]];};

var
 leave_structure=
  function(s){return /* record */[0,s[1],s[2],keep_only_summary(s[3])];};

var
 leave_structure_item=
  function(str)
   {return /* record */[0,str[1],str[2],keep_only_summary(str[3])];};

var
 leave_module_type=
  function(m)
   {return /* record */[0,m[1],m[2],keep_only_summary(m[3]),m[4],m[5]];};

var
 leave_signature=
  function(s){return /* record */[0,s[1],s[2],keep_only_summary(s[3])];};

var
 leave_signature_item=
  function(s){return /* record */[0,s[1],keep_only_summary(s[2]),s[3]];};

var
 leave_core_type=
  function(c)
   {return /* record */[0,c[1],c[2],keep_only_summary(c[3]),c[4],c[5]];};

var
 leave_class_type=
  function(c)
   {return /* record */[0,c[1],c[2],keep_only_summary(c[3]),c[4],c[5]];};

var
 ClearEnv=
  TypedtreeMap["MakeMap"]
   ([0,
     include[1],
     include[2],
     include[3],
     include[4],
     include[5],
     include[6],
     include[7],
     include[8],
     include[9],
     include[10],
     include[11],
     include[12],
     include[13],
     include[14],
     include[15],
     include[16],
     include[17],
     include[18],
     include[19],
     include[20],
     include[21],
     include[22],
     include[23],
     include[24],
     include[25],
     leave_structure,
     include[27],
     include[28],
     include[29],
     include[30],
     leave_pattern,
     leave_expression,
     include[33],
     leave_signature,
     leave_signature_item,
     include[36],
     leave_module_type,
     leave_module_expr,
     include[39],
     leave_class_expr,
     include[41],
     include[42],
     include[43],
     include[44],
     leave_class_type,
     include[46],
     leave_core_type,
     include[48],
     include[49],
     leave_structure_item]);

var
 clear_part=
  function(p)
   {switch(p)
     {case 0:return /* Partial_structure */[0,ClearEnv[1](p[1])];
      case 1:return /* Partial_structure_item */[1,ClearEnv[3](p[1])];
      case 2:return /* Partial_expression */[2,ClearEnv[4](p[1])];
      case 3:return /* Partial_pattern */[3,ClearEnv[2](p[1])];
      case 4:return /* Partial_class_expr */[4,ClearEnv[5](p[1])];
      case 5:return /* Partial_signature */[5,ClearEnv[6](p[1])];
      case 6:return /* Partial_signature_item */[6,ClearEnv[7](p[1])];
      case 7:return /* Partial_module_type */[7,ClearEnv[8](p[1])];
      }
    };

var
 clear_env=
  function(binary_annots)
   {if(need_to_clear_env)
     {switch(binary_annots)
       {case 0:return binary_annots;
        case 1:return /* Implementation */[1,ClearEnv[1](binary_annots[1])];
        case 2:return /* Interface */[2,ClearEnv[6](binary_annots[1])];
        case 3:
         return /* Partial_implementation */[3,
                 $$Array["map"](clear_part,binary_annots[1])];
         
        case 4:
         return /* Partial_interface */[4,
                 $$Array["map"](clear_part,binary_annots[1])];
         
        }
      }
    else
     {return binary_annots;}
    };

var $$Error="unknown primitive:caml_set_oo_id";

var input_cmt=function(ic){return Pervasives["input_value"](ic);};

var
 output_cmt=
  function(oc,cmt)
   {Pervasives["output_string"](oc,Config["cmt_magic_number"]);
    return Pervasives["output_value"](oc,cmt);
    };

var
 read=
  function(filename)
   {var ic=Pervasives["open_in_bin"](filename);
    
    try
     {var magic_number=read_magic_number(ic);
      
      if("unknown primitive:caml_string_equal")
       {var match=/* tuple */[0,0,/* Some */[0,input_cmt(ic)]];}
      else
       {if("unknown primitive:caml_string_equal")
         {var cmi=Cmi_format["input_cmi"](ic);
          
          try
           {var magic_number$1=read_magic_number(ic);
            
            if("unknown primitive:caml_string_equal")
             {var cmt=input_cmt(ic);var cmt$1=/* Some */[0,cmt];}
            else
             {var cmt$1=0;}
            }
          catch(exn$1){var cmt$1=0;}
          
          var match=/* tuple */[0,/* Some */[0,cmi],cmt$1];
          }
        else
         {throw [0,Cmi_format["Error"],/* Not_an_interface */[0,filename]];}
        }
      
      Pervasives["close_in"](ic);
      return /* tuple */[0,match[1],match[2]];
      }
    catch(e){Pervasives["close_in"](ic);throw e;}
    };

var
 string_of_file=
  function(filename)
   {var ic=Pervasives["open_in"](filename);
    
    var s=Misc["string_of_file"](ic);
    
    Pervasives["close_in"](ic);
    return s;
    };

var
 read_cmt=
  function(filename)
   {var match=read(filename);
    
    var match$1=match[2];
    
    if(match$1)
     {return match$1[1];}
    else
     {throw [0,$$Error,/* Not_a_typedtree */[0,filename]];}
    };

var
 read_cmi=
  function(filename)
   {var match=read(filename);
    
    var match$1=match[1];
    
    if(match$1)
     {return match$1[1];}
    else
     {throw [0,Cmi_format["Error"],/* Not_an_interface */[0,filename]];}
    };

var saved_types=[0,0];

var value_deps=[0,0];

var clear=function(param){saved_types[1]=0,0;return value_deps[1]=0,0;};

var
 add_saved_type=
  function(b){return saved_types[1]=/* :: */[0,b,saved_types[1]],0;};

var get_saved_types=function(param){return saved_types[1];};

var set_saved_types=function(l){return saved_types[1]=l,0;};

var
 record_value_dependency=
  function(vd1,vd2)
   {if("unknown primitive:caml_notequal")
     {return value_deps[1]=/* :: */[0,/* tuple */[0,vd1,vd2],value_deps[1]],0;
      }
    else
     {return 0;}
    };

var
 save_cmt=
  function(filename,modname,binary_annots,sourcefile,initial_env,sg)
   {if(Clflags["binary_annotations"][1]&&!Clflags["print_types"][1])
     {var imports=Env["imports"](0);
      
      var oc=Pervasives["open_out_bin"](filename);
      
      if(sg)
       {var
         cmi=
          /* record */[0,
           modname,
           sg[1],
           imports,
           Clflags["recursive_types"][1]?[0,0,0]:0];
        
        var this_crc=/* Some */[0,Cmi_format["output_cmi"](filename,oc,cmi)];
        }
      else
       {var this_crc=0;}
      
      var source_digest=Misc["may_map"](Digest["file"],sourcefile);
      
      var
       cmt=
        /* record */[0,
         modname,
         clear_env(binary_annots),
         value_deps[1],
         Lexer["comments"](0),
         Sys["argv"],
         sourcefile,
         "unknown primitive:caml_sys_getcwd",
         Config["load_path"][1],
         source_digest,
         need_to_clear_env?keep_only_summary(initial_env):initial_env,
         List["sort"]
          (function(prim,prim$1){return "unknown primitive:caml_compare";},
           imports),
         this_crc,
         need_to_clear_env];
      
      output_cmt(oc,cmt),Pervasives["close_out"](oc)}
    else
     {}
    
    return clear(0);
    };

module["exports"]=
{"Error":$$Error,
 "read":read,
 "read_cmt":read_cmt,
 "read_cmi":read_cmi,
 "save_cmt":save_cmt,
 "read_magic_number":read_magic_number,
 "clear":clear,
 "add_saved_type":add_saved_type,
 "get_saved_types":get_saved_types,
 "set_saved_types":set_saved_types,
 "record_value_dependency":record_value_dependency};

