// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Printf=require("./printf.js");
var Filename=require("./filename.js");
var My_std=require("./my_std.js");
var Printexc=require("./printexc.js");
var My_unix=require("./my_unix.js");
var Tags=require("./tags.js");
var Log=require("./log.js");
var Sys=require("./sys.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 is_simple_filename=
  function(s)
   {var ls=s["length"];
    
    var
     loop=
      function(pos)
       {if(pos>=ls)
         {return /* true */1;}
        else
         {var match=s["charCodeAt"](pos);
          
          var exit;
          
          if(match>=91)
           {if(match>=97)
             {if(match>=123){exit=17;}else{exit=16;}}
            else
             {if(match!==95){exit=17;}else{exit=16;}}
            }
          else
           {if(match>=59)
             {if(match>=64){exit=16;}else{exit=17;}}
            else
             {if(match>=43){exit=16;}else{exit=17;}}
            }
          
          switch(exit)
           {case 17:return /* false */0;case 16:return loop(pos+1);}
          }
        };
    
    return ls!==0&&loop(0);
    };

var
 quote_filename_if_needed=
  function(s)
   {return is_simple_filename(s)
            ?s
            :CamlPrimitive["caml_string_equal"](Sys["os_type"],"Win32")
              ?Printf["sprintf"]
                ([/* Format */0,
                  [/* Char_literal */12,
                   39,
                   [/* String */2,
                    /* No_padding */0,
                    [/* Char_literal */12,39,/* End_of_format */0]]],
                  "'%s'"],
                 s)
              :Filename["quote"](s);
    };

var
 chdir=
  function(dir)
   {My_std["reset_filesys_cache"](/* () */0);
    return CamlPrimitive["caml_sys_chdir"](dir);
    };

var
 run=
  function(args,target)
   {My_std["reset_readdir_cache"](/* () */0);
    var
     cmd=
      My_std["String"][22]
       (" ",My_std["List"][16](quote_filename_if_needed,args));
    
    if
     (My_std["!*"](My_unix["is_degraded"])||
      CamlPrimitive["caml_string_equal"](Sys["os_type"],"Win32"))
     {Log["event"](/* None */0,cmd,target,Tags["empty"]);
      var st=My_std["sys_command"](cmd);
      
      return st!==0
              ?Pervasives["failwith"]
                (Printf["sprintf"]
                  ([/* Format */0,
                    [/* String_literal */11,
                     "Error during command `",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       "'.\nExit code ",
                       [/* Int */4,
                        /* Int_d */0,
                        /* No_padding */0,
                        /* No_precision */0,
                        [/* String_literal */11,".\n",/* End_of_format */0]]]]],
                    "Error during command `%s'.\nExit code %d.\n"],
                   cmd,
                   st))
              :/* () */0;
      }
    else
     {var
       match=
        My_unix["execute_many"]
         (/* None */0,
          /* Some */[0,Log["update"]],
          /* None */0,
          /* Some */[0,Log["display"]],
          /* :: */[0,
           /* :: */[0,function(param){return cmd;},/* [] */0],
           /* [] */0]);
      
      return match
              ?Pervasives["failwith"]
                (Printf["sprintf"]
                  ([/* Format */0,
                    [/* String_literal */11,
                     "Error during command ",
                     [/* Caml_string */3,
                      /* No_padding */0,
                      [/* String_literal */11,
                       ": ",
                       [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                    "Error during command %S: %s"],
                   cmd,
                   Printexc["to_string"](match[1][2])))
              :/* () */0;
      }
    };

var rm=My_std["sys_remove"];

var rm_f=function(x){return My_std["sys_file_exists"](x)?rm(x):0;};

var
 mkdir=
  function(dir)
   {My_std["reset_filesys_cache_for_file"](dir);
    return run(/* :: */[0,"mkdir",/* :: */[0,dir,/* [] */0]],dir);
    };

var
 try_mkdir=
  function(dir){return !My_std["sys_file_exists"](dir)?mkdir(dir):0;};

var
 mkdir_p=
  function(dir)
   {return My_std["sys_file_exists"](dir)
            ?/* () */0
            :(mkdir_p(Filename["dirname"](dir)),mkdir(dir));
    };

var
 cp_pf=
  function(src,dest)
   {My_std["reset_filesys_cache_for_file"](dest);
    return run
            (/* :: */[0,
              "cp",
              /* :: */[0,"-pf",/* :: */[0,src,/* :: */[0,dest,/* [] */0]]]],
             dest);
    };

var
 cp=
  function(src,dst)
   {return Filename["check_suffix"](src,".a")&&
            Filename["check_suffix"](dst,".a")
            ?cp_pf(src,dst)
            :My_std["copy_file"](src,dst);
    };

var readlink=My_unix["readlink"];

var is_link=My_unix["is_link"];

var
 rm_rf=
  function(x)
   {My_std["reset_filesys_cache"](/* () */0);
    return run(/* :: */[0,"rm",/* :: */[0,"-Rf",/* :: */[0,x,/* [] */0]]],x);
    };

var
 mv=
  function(src,dest)
   {My_std["reset_filesys_cache_for_file"](src);
    My_std["reset_filesys_cache_for_file"](dest);
    return run
            (/* :: */[0,"mv",/* :: */[0,src,/* :: */[0,dest,/* [] */0]]],dest);
    };

module["exports"]=
{"is_simple_filename":is_simple_filename,
 "quote_filename_if_needed":quote_filename_if_needed,
 "chdir":chdir,
 "rm":rm,
 "rm_f":rm_f,
 "rm_rf":rm_rf,
 "mkdir":mkdir,
 "try_mkdir":try_mkdir,
 "mkdir_p":mkdir_p,
 "cp":cp,
 "mv":mv,
 "readlink":readlink,
 "is_link":is_link};

