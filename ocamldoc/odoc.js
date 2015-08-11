// Generated CODE, PLEASE EDIT WITH CARE 

var Dynlink=require("Dynlink");
var Odoc_global=require("Odoc_global");
var Odoc_info=require("Odoc_info");
var List=require("List");
var Pervasives=require("Pervasives");
var Odoc_analyse=require("Odoc_analyse");
var Odoc_args=require("Odoc_args");
var Filename=require("Filename");
var Odoc_config=require("Odoc_config");
var $$Array=require("Array");
var Odoc_gen=require("Odoc_gen");
var Sys=require("Sys");
var Odoc_messages=require("Odoc_messages");



var M=0;

var arg_list=$$Array["to_list"](Sys["argv"]);

var
 iter=
  function(param,param$1)
   {var incs=param[2];
    
    var files=param[1];
    
    var exit;
    
    if(param$1)
     {var exit$1;
      
      switch(param$1[1])
       {case "-g":
         var match=param$1[2];
         
         if(match)
          {var file=match[1];
           
           if
            (Filename["check_suffix"](file,"cmo")||
             Filename["check_suffix"](file,"cma")||
             Filename["check_suffix"](file,"cmxs"))
            {return iter(/* tuple */[0,/* :: */[0,file,files],incs],match[2]);
             }
           else
            {exit$1=21;}
           }
         else
          {exit$1=21;}
         
        case "-i":
         var match$1=param$1[2];
         
         if(match$1)
          {return iter
                   (/* tuple */[0,files,/* :: */[0,match$1[1],incs]],
                    match$1[2]);
           }
         else
          {exit$1=21;}
         
        default:exit$1=21;}
      
      switch(exit$1)
       {case 21:
         var q=param$1[2];
         
         if(q){return iter(/* tuple */[0,files,incs],q);}else{exit=20;}
         
        }
      }
    else
     {exit=20;}
    
    switch(exit)
     {case 20:return /* tuple */[0,List["rev"](files),List["rev"](incs)];}
    };

var match=iter(/* tuple */[0,/* [] */0,/* [] */0],arg_list);

var paths=match[2];

var plugins=match[1];

var
 get_real_filename=
  function(name)
   {if("unknown primitive:caml_string_notequal")
     {return name;}
    else
     {var
       paths$1=
        Pervasives["@"]
         (/* :: */[0,Filename["current_dir_name"],paths],
          /* :: */[0,Odoc_config["custom_generators_path"],/* [] */0]);
      
      try
       {var
         d=
          List["find"]
           (function(d$1){return "unknown primitive:caml_sys_file_exists";},
            paths$1);
        
        return Filename["concat"](d,name);
        }
      catch(exn)
       {if(exn=Not_found)
         {return Pervasives["failwith"]
                  (Odoc_messages["file_not_found_in_paths"](paths$1,name));
          }
        else
         {throw exn;}
        }
      }
    };

var
 load_plugin=
  function(file)
   {var file$1=Dynlink["adapt_filename"](file);
    
    Dynlink["allow_unsafe_modules"](/* true */1);
    try
     {var real_file=get_real_filename(file$1);
      
      return Dynlink["loadfile"](real_file);
      }
    catch(exn)
     {var exit;
      
      if(exn[1]=Dynlink["Error"])
       {Pervasives["prerr_endline"]
         (Odoc_messages["load_file_error"]
           (file$1,Dynlink["error_message"](exn[2])));
        return Pervasives["exit"](1);
        }
      else
       {if(exn=Not_found)
         {Pervasives["prerr_endline"]
           (Odoc_messages["load_file_error"](file$1,"Not_found"));
          return Pervasives["exit"](1);
          }
        else
         {if(exn[1]=Sys_error)
           {var s=exn[2];exit=9;}
          else
           {if(exn[1]=Failure){var s=exn[2];exit=9;}else{throw exn;}}
          }
        }
      
      switch(exit)
       {case 9:
         Pervasives["prerr_endline"]
          (Odoc_messages["load_file_error"](file$1,s));
         return Pervasives["exit"](1);
         
        }
      }
    };

List["iter"](load_plugin,plugins);
var match$1=Odoc_args["parse"](/* () */0);

var
 loaded_modules=
  List["flatten"]
   (List["map"]
     (function(f)
       {Odoc_info["verbose"](Odoc_messages["loading"](f));
        try
         {var l=Odoc_analyse["load_modules"](f);
          
          Odoc_info["verbose"](Odoc_messages["ok"]);
          return l;
          }
        catch(exn)
         {if(exn[1]=Failure)
           {Pervasives["prerr_endline"](exn[2]);
            Odoc_global["errors"][0]++;
            return /* [] */0;
            }
          else
           {throw exn;}
          }
        },
      Odoc_global["load"][1]));

var
 modules=
  Odoc_analyse["analyse_files"]
   (/* Some */[0,loaded_modules],Odoc_global["files"][1]);

var match$2=Odoc_global["dump"][1];

if(match$2)
 {try
   {Odoc_analyse["dump_modules"](match$2[1],modules)}
  catch(exn)
   {if(exn[1]=Failure)
     {Pervasives["prerr_endline"](exn[2]),Odoc_global["errors"][0]++}
    else
     {throw exn;}
    }
  }
else
 {}

var match$3=Odoc_args["current_generator"][1];

if(match$3)
 {var generator=Odoc_gen["get_minimal_generator"](match$3[1]);
  
  Odoc_info["verbose"](Odoc_messages["generating_doc"]);
  "unknown block:(send generator/1059 -643670219 modules/1045)";
  
  Odoc_info["verbose"](Odoc_messages["ok"])}
else
 {}

if(Odoc_global["errors"][1]>0)
 {Pervasives["prerr_endline"]
   (Odoc_messages["errors_occured"](Odoc_global["errors"][1])),
  Pervasives["exit"](1)}
else
 {Pervasives["exit"](0)}

module["exports"]=
{"M":M,
 "arg_list":arg_list,
 "plugins":plugins,
 "paths":paths,
 "get_real_filename":get_real_filename,
 "load_plugin":load_plugin,
 "loaded_modules":loaded_modules,
 "modules":modules};

