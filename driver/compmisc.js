// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Env=require("./env.js");
var Clflags=require("./clflags.js");
var Misc=require("./misc.js");
var Typemod=require("./typemod.js");
var Compenv=require("./compenv.js");
var Location=require("./location.js");
var Ident=require("./ident.js");
var Config=require("./config.js");


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
    /* :: */[0,
     "",
     List["rev_append"](exp_dirs,Clflags["std_include_dir"](/* () */0))];
    return Env["reset_cache"](/* () */0);
    };

var
 open_implicit_module=
  function(m,env)
   {var
     lid=
      /* record */[0,/* Lident */[0,m],Location["in_file"]("command line")];
    
    return Typemod["type_open_"](/* None */0,/* Override */0,env,lid[2],lid)
            [2];
    };

var
 initial_env=
  function(param)
   {Ident["reinit"](/* () */0);
    if(Clflags["unsafe_string"][1])
     {var initial=Env["initial_unsafe_string"];}
    else
     {var initial=Env["initial_safe_string"];}
    
    if(Clflags["nopervasives"][1])
     {var env=initial;}
    else
     {var env=open_implicit_module("Pervasives",initial);}
    
    return List["fold_left"]
            (function(env,m){return open_implicit_module(m,env);},
             env,
             Pervasives["@"]
              (Compenv["implicit_modules"][1],
               List["rev"](Clflags["open_modules"][1])));
    };

module["exports"]={"init_path":init_path,"initial_env":initial_env};

