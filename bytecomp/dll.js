// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Misc=require("./misc.js");
var Filename=require("./filename.js");
var Config=require("./config.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var search_path=[0,/* [] */0];

var opened_dlls=[0,/* [] */0];

var names_of_opened_dlls=[0,/* [] */0];

var
 add_path=
  function(dirs)
   {return search_path[1]=Pervasives["@"](dirs,search_path[1]),0;};

var
 remove_path=
  function(dirs)
   {return search_path[1]=
           List["filter"]
            (function(d){return !List["mem"](d,dirs);},search_path[1]),
           0;
    };

var
 extract_dll_name=
  function(file)
   {if(Filename["check_suffix"](file,Config["ext_dll"]))
     {return Filename["chop_suffix"](file,Config["ext_dll"]);}
    else
     {if
       (file["length"]>=
        2&&
        CamlPrimitive["caml_string_equal"]($$String["sub"](file,0,2),"-l"))
       {return Pervasives["^"]("dll",$$String["sub"](file,2,file["length"]-2));
        }
      else
       {return file;}
      }
    };

var
 open_dll=
  function(mode,name)
   {var name$1=Pervasives["^"](name,Config["ext_dll"]);
    
    try
     {var fullname=Misc["find_in_path"](search_path[1],name$1);
      
      if(Filename["is_implicit"](fullname))
       {var
         fullname$1=
          Filename["concat"](Filename["current_dir_name"],fullname);
        }
      else
       {var fullname$1=fullname;}
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var fullname$1=name$1;}
      else
       {throw exn;}
      }
    
    if(!List["mem"](fullname$1,names_of_opened_dlls[1]))
     {try
       {var dll=CamlPrimitive["caml_dynlink_open_lib"](mode,fullname$1);
        
        names_of_opened_dlls[1]=
        /* :: */[0,fullname$1,names_of_opened_dlls[1]];
        return opened_dlls[1]=/* :: */[0,dll,opened_dlls[1]],0;
        }
      catch(exn$1)
       {if(exn$1[1]===CamlPrimitive["caml_global_data"]["Failure"])
         {return Pervasives["failwith"]
                  (Pervasives["^"](fullname$1,Pervasives["^"](": ",exn$1[2])));
          }
        else
         {throw exn$1;}
        }
      }
    else
     {return 0;}
    };

var
 open_dlls=
  function(mode,names){return List["iter"](open_dll(mode),names);};

var
 close_all_dlls=
  function(param)
   {List["iter"]
     (function(prim){return CamlPrimitive["caml_dynlink_close_lib"](prim);},
      opened_dlls[1]);
    opened_dlls[1]=/* [] */0;
    return names_of_opened_dlls[1]=/* [] */0,0;
    };

var
 find_primitive=
  function(prim_name)
   {var
     find=
      function(seen,param)
       {if(param)
         {var rem=param[2];
          
          var dll=param[1];
          
          var addr=CamlPrimitive["caml_dynlink_lookup_symbol"](dll,prim_name);
          
          if(addr===/* () */0)
           {return find(/* :: */[0,dll,seen],rem);}
          else
           {if(seen!==/* [] */0)
             {opened_dlls[1]=/* :: */[0,dll,List["rev_append"](seen,rem)]}
            else
             {}
            
            return addr;
            }
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    return find(/* [] */0,opened_dlls[1]);
    };

var linking_in_core=[0,/* false */0];

var
 synchronize_primitive=
  function(num,symb)
   {if(linking_in_core[1])
     {var actual_num=CamlPrimitive["caml_dynlink_add_primitive"](symb);
      
      if(actual_num===num)
       {return 0;}
      else
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"bytecomp/dll.ml",110,4]];
        }
      }
    else
     {return 0;}
    };

var
 ld_conf_contents=
  function(param)
   {var path=/* [] */0;
    
    try
     {var
       ic=
        Pervasives["open_in"]
         (Filename["concat"](Config["standard_library"],"ld.conf"));
      
      try
       {while(/* true */1)
         {path=/* :: */[0,Pervasives["input_line"](ic),path];}
        }
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["End_of_file"])
         {}
        else
         {throw exn;}
        }
      
      Pervasives["close_in"](ic)}
    catch(exn$1)
     {if(exn$1[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
       {}
      else
       {throw exn$1;}
      }
    
    return List["rev"](path);
    };

var
 split=
  function(str,sep)
   {var
     split_rec=
      function(pos)
       {if(pos>=str["length"])
         {return /* [] */0;}
        else
         {try
           {var newpos=$$String["index_from"](str,pos,sep);
            
            return /* :: */[0,
                    $$String["sub"](str,pos,newpos-pos),
                    split_rec(newpos+1)];
            }
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {return /* :: */[0,
                      $$String["sub"](str,pos,str["length"]-pos),
                      /* [] */0];
              }
            else
             {throw exn;}
            }
          }
        };
    
    return split_rec(0);
    };

var
 ld_library_path_contents=
  function(param)
   {var match=Sys["os_type"];
    
    var exit;
    
    switch(match)
     {case "Cygwin":exit=6;
      case "Unix":exit=6;
      case "Win32":var path_separator=59;
      default:exit=7;}
    
    switch(exit)
     {case 7:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"bytecomp/dll.ml",150,11]];
       
      case 6:var path_separator=58;
      }
    
    try
     {return split
              (CamlPrimitive["caml_sys_getenv"]("CAML_LD_LIBRARY_PATH"),
               path_separator);
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* [] */0;}
      else
       {throw exn;}
      }
    };

var split_dll_path=function(path){return split(path,0);};

var
 init_compile=
  function(nostdlib)
   {return search_path[1]=
           Pervasives["@"]
            (ld_library_path_contents(/* () */0),
             nostdlib?/* [] */0:ld_conf_contents(/* () */0)),
           0;
    };

var
 init_toplevel=
  function(dllpath)
   {search_path[1]=
    Pervasives["@"]
     (ld_library_path_contents(/* () */0),
      Pervasives["@"](split_dll_path(dllpath),ld_conf_contents(/* () */0)));
    opened_dlls[1]=
    $$Array["to_list"]
     (CamlPrimitive["caml_dynlink_get_current_libs"](/* () */0));
    names_of_opened_dlls[1]=/* [] */0;
    return linking_in_core[1]=/* true */1,0;
    };

var
 reset=
  function(param)
   {search_path[1]=/* [] */0;
    opened_dlls[1]=/* [] */0;
    names_of_opened_dlls[1]=/* [] */0;
    return linking_in_core[1]=/* false */0,0;
    };

module["exports"]=
{"extract_dll_name":extract_dll_name,
 "open_dlls":open_dlls,
 "close_all_dlls":close_all_dlls,
 "find_primitive":find_primitive,
 "synchronize_primitive":synchronize_primitive,
 "add_path":add_path,
 "remove_path":remove_path,
 "init_compile":init_compile,
 "init_toplevel":init_toplevel,
 "reset":reset};

