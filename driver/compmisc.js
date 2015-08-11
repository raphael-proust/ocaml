// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Clflags=require("Clflags");
var Misc=require("Misc");
var Typemod=require("Typemod");
var Compenv=require("Compenv");
var Location=require("Location");
var Ident=require("Ident");
var Config=require("Config");


var
 init_path=
  function($$native)
   {if(Clflags["use_threads"][1])
     {var dirs=/* :: */[0,"+threads",Clflags["include_dirs"][1]];}
    else
     {if(Clflags["use_vmthreads"][1]&&!$$native)
       {var dirs=/* :: */[0,"+vmthreads",Clflags["include_dirs"][1]];}
      else
       {var
         dirs=
          Pervasives["@"]
           (Compenv["last_include_dirs"][1],
            Pervasives["@"]
             (Clflags["include_dirs"][1],Compenv["first_include_dirs"][1]));
        }
      }
    
    var
     exp_dirs=
      List["map"](Misc["expand_directory"](Config["standard_library"]),dirs);
    
    Config["load_path"][1]=
    /* :: */[0,"",List["rev_append"](exp_dirs,Clflags["std_include_dir"](0))],
    0;
    return Env["reset_cache"](0);
    };

var
 open_implicit_module=
  function(m,env)
   {var
     lid=
      /* record */[0,/* Lident */[0,m],Location["in_file"]("command line")];
    
    return Typemod["type_open_"](0,0,env,lid[2],lid)[2];
    };

var
 initial_env=
  function(param)
   {Ident["reinit"](0);
    if(Clflags["unsafe_string"][1])
     {var initial=Env["initial_unsafe_string"];}
    else
     {var initial=Env["initial_safe_string"];}
    
    if(Clflags["nopervasives"][1])
     {var env=initial;}
    else
     {var env=open_implicit_module("Pervasives",initial);}
    
    return List["fold_left"]
            (function(env$1,m){return open_implicit_module(m,env$1);},
             env,
             Pervasives["@"]
              (Compenv["implicit_modules"][1],
               List["rev"](Clflags["open_modules"][1])));
    };

module["exports"]={"init_path":init_path,"initial_env":initial_env};

