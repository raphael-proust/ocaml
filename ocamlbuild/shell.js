// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Filename=require("Filename");
var My_std=require("My_std");
var Printexc=require("Printexc");
var My_unix=require("My_unix");
var Tags=require("Tags");
var Log=require("Log");
var Sys=require("Sys");


var
 is_simple_filename=
  function(s)
   {var ls=s["length"];
    
    var
     loop=
      function(pos)
       {if(pos>=ls)
         {return 1;}
        else
         {var match=s[pos];
          
          var exit;
          
          if(match>=91)
           {if(match>=97)
             {if(match>=123){exit=17;}else{exit=16;}}
            else
             {if(match!=95){exit=17;}else{exit=16;}}
            }
          else
           {if(match>=59)
             {if(match>=64){exit=16;}else{exit=17;}}
            else
             {if(match>=43){exit=16;}else{exit=17;}}
            }
          
          switch(exit){case 17:return 0;case 16:return loop(pos+1);}
          }
        };
    
    return ls!=0&&loop(0);
    };

var
 quote_filename_if_needed=
  function(s)
   {if(is_simple_filename(s))
     {return s;}
    else
     {if("unknown primitive:caml_string_equal")
       {return Printf["sprintf"]([0,[12,39,[2,0,[12,39,0]]],"'%s'"],s);}
      else
       {return Filename["quote"](s);}
      }
    };

var
 chdir=
  function(dir)
   {My_std["reset_filesys_cache"](0);
    return "unknown primitive:caml_sys_chdir";
    };

var
 run=
  function(args,target)
   {My_std["reset_readdir_cache"](0);
    var
     cmd=
      My_std["String"][22]
       (" ",My_std["List"][16](quote_filename_if_needed,args));
    
    if
     (My_std["!*"](My_unix["is_degraded"])||
      "unknown primitive:caml_string_equal")
     {Log["event"](0,cmd,target,Tags["empty"]);
      var st=My_std["sys_command"](cmd);
      
      if(st!=0)
       {return Pervasives["failwith"]
                (Printf["sprintf"]
                  ([0,
                    [11,
                     "Error during command `",
                     [2,0,[11,"'.\nExit code ",[4,0,0,0,[11,".\n",0]]]]],
                    "Error during command `%s'.\nExit code %d.\n"],
                   cmd,
                   st));
        }
      else
       {return 0;}
      }
    else
     {var
       match=
        My_unix["execute_many"]
         (0,
          [0,Log["update"]],
          0,
          [0,Log["display"]],
          [0,[0,function(param){return cmd;},0],0]);
      
      if(match)
       {return Pervasives["failwith"]
                (Printf["sprintf"]
                  ([0,
                    [11,"Error during command ",[3,0,[11,": ",[2,0,0]]]],
                    "Error during command %S: %s"],
                   cmd,
                   Printexc["to_string"](match[1][2])));
        }
      else
       {return 0;}
      }
    };

var rm=My_std["sys_remove"];

var
 rm_f=
  function(x){if(My_std["sys_file_exists"](x)){return rm(x);}else{return 0;}};

var
 mkdir=
  function(dir)
   {My_std["reset_filesys_cache_for_file"](dir);
    return run([0,"mkdir",[0,dir,0]],dir);
    };

var
 try_mkdir=
  function(dir)
   {if(!My_std["sys_file_exists"](dir)){return mkdir(dir);}else{return 0;}};

var
 mkdir_p=
  function(dir)
   {if(My_std["sys_file_exists"](dir))
     {return 0;}
    else
     {mkdir_p(Filename["dirname"](dir));return mkdir(dir);}
    };

var
 cp_pf=
  function(src,dest)
   {My_std["reset_filesys_cache_for_file"](dest);
    return run([0,"cp",[0,"-pf",[0,src,[0,dest,0]]]],dest);
    };

var
 cp=
  function(src,dst)
   {if(Filename["check_suffix"](src,".a")&&Filename["check_suffix"](dst,".a"))
     {return cp_pf(src,dst);}
    else
     {return My_std["copy_file"](src,dst);}
    };

var readlink=My_unix["readlink"];

var is_link=My_unix["is_link"];

var
 rm_rf=
  function(x)
   {My_std["reset_filesys_cache"](0);
    return run([0,"rm",[0,"-Rf",[0,x,0]]],x);
    };

var
 mv=
  function(src,dest)
   {My_std["reset_filesys_cache_for_file"](src);
    My_std["reset_filesys_cache_for_file"](dest);
    return run([0,"mv",[0,src,[0,dest,0]]],dest);
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

