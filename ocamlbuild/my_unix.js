// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Filename=require("Filename");
var Buffer=require("Buffer");
var My_std=require("My_std");
var Hashtbl=require("Hashtbl");


var is_degraded=1;

var
 stat=
  function(f)
   {if(My_std["sys_file_exists"](f))
     {if("unknown primitive:caml_sys_is_directory")
       {var $js=0;}
      else
       {var $js=1;}
      }
    else
     {var match=My_std["with_input_file"](0,f,Pervasives["input_char"]);
      
      throw [0,Assert_failure,[0,"my_unix.ml",59,51]];
      }
    return [/* record */0,$js,f];
    };

var
 run_and_open=
  function(s,kont)
   {return My_std["with_temp_file"]
            ("ocamlbuild",
             "out",
             function(tmp)
              {var
                s$1=
                 Printf["sprintf"]
                  ([0,[2,0,[11," > '",[2,0,[12,39,0]]]],"%s > '%s'"],s,tmp);
               
               var st=My_std["sys_command"](s$1);
               
               if(st!=0)
                {Pervasives["failwith"]
                  (Printf["sprintf"]
                    ([0,
                      [11,"Error while running: ",[2,0,0]],
                      "Error while running: %s"],
                     s$1))}
               else
                {}
               
               return My_std["with_input_file"](0,tmp,kont);
               });
    };

var Not_a_link="unknown primitive:caml_set_oo_id";

var No_such_file="unknown primitive:caml_set_oo_id";

var Link_to_directories_not_supported="unknown primitive:caml_set_oo_id";

var cache=Hashtbl["create"](0,32);

var
 readlinkcmd=
  function(x)
   {try
     {return Hashtbl["find"](cache,x);}
    catch(exn)
     {if(exn=Not_found)
       {return run_and_open
                (Printf["sprintf"]
                  ([0,[11,"readlink ",[2,0,0]],"readlink %s"],
                   Filename["quote"](x)),
                 function(ic)
                  {var y=My_std["String"][2](Pervasives["input_line"](ic));
                   
                   Hashtbl["replace"](cache,x,y);
                   return y;
                   });
        }
      else
       {throw exn;}
      }
    };

var
 readlink=
  function(x)
   {if(My_std["sys_file_exists"](x))
     {try
       {var y=readlinkcmd(x);
        
        if(Filename["is_relative"](y))
         {var y$1=Filename["concat"](Filename["dirname"](x),y);}
        else
         {var y$1=y;}
        
        if(lstat(y$1)[1]=0)
         {throw Link_to_directories_not_supported;}
        else
         {return y$1;}
        }
      catch(exn){if(exn[1]=Failure){throw Not_a_link;}else{throw exn;}}
      }
    else
     {throw No_such_file;}
    };

var
 is_link=
  function(x)
   {try
     {return 1;}
    catch(exn)
     {var exit;
      
      if(exn=No_such_file)
       {exit=22;}
      else
       {if(exn=Not_a_link){exit=22;}else{throw exn;}}
      
      switch(exit){case 22:return 0;}
      }
    };

var
 lstat=
  function(x)
   {if(is_link(x)){return [/* record */0,2,x];}else{return stat(x);}};

var
 implem=
  [/* record */0,
   1,
   is_link,
   run_and_open,
   readlink,
   function(param,param$1,param$2,param$3,param$4)
    {throw [0,Assert_failure,[0,"my_unix.ml",119,80]];},
   function(param){return function(prim){throw prim;};},
   Pervasives["at_exit"],
   function(param){throw [0,Assert_failure,[0,"my_unix.ml",117,30]];},
   function(param){return 0;},
   stat,
   lstat];

var is_degraded$1=[246,function(param){return implem[1];}];

var stat$1=function(x){return implem[10](x);};

var lstat$1=function(x){return implem[11](x);};

var readlink$1=function(x){return implem[4](x);};

var is_link$1=function(x){return implem[2](x);};

var run_and_open$1=function(x){return implem[3](x);};

var at_exit_once=function(x){return implem[7](x);};

var report_error=function(x){return implem[6](x);};

var gettimeofday=function(x){return implem[8](x);};

var stdout_isatty=function(x){return implem[9](x);};

var execute_many=function(max_jobs){return implem[5](max_jobs);};

var
 run_and_read=
  function(cmd)
   {var bufsiz=2048;
    
    var buf="unknown primitive:caml_create_string";
    
    var totalbuf=Buffer["create"](4096);
    
    return implem[3]
            (cmd,
             function(ic)
              {var
                loop=
                 function(pos)
                  {var len=Pervasives["input"](ic,buf,0,bufsiz);
                   
                   if(len>0)
                    {Buffer["add_subbytes"](totalbuf,buf,0,len);
                     return loop(pos+len);
                     }
                   else
                    {return 0;}
                   };
               
               loop(0);
               return Buffer["contents"](totalbuf);
               });
    };

module["exports"]=
{"is_degraded":is_degraded$1,
 "is_link":is_link$1,
 "run_and_open":run_and_open$1,
 "readlink":readlink$1,
 "run_and_read":run_and_read,
 "execute_many":execute_many,
 "report_error":report_error,
 "at_exit_once":at_exit_once,
 "gettimeofday":gettimeofday,
 "stdout_isatty":stdout_isatty,
 "stat":stat$1,
 "lstat":lstat$1,
 "implem":implem};

