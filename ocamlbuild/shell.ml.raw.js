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
       {var $js=pos>=ls;
        if($js)
         {return 1}
        else
         {var match=s[pos];
          var $js$1=match>=91;
          if($js$1)
           {var $js$2=match>=97;
            if($js$2)
             {var $js$3=match>=123;if($js$3){var exit=17}else{var exit=16}}
            else
             {var $js$4=match!=95;if($js$4){var exit=17}else{var exit=16}}}
          else
           {var $js$5=match>=59;
            if($js$5)
             {var $js$6=match>=64;if($js$6){var exit=16}else{var exit=17}}
            else
             {var $js$7=match>=43;if($js$7){var exit=16}else{var exit=17}}}
          switch(exit){case 17:return 0;case 16:return loop(pos+1)}}};
    var $js=loop(0);
    return ls!=0&&$js};
var
 quote_filename_if_needed=
  function(s)
   {var $js=is_simple_filename(s);
    if($js)
     {return s}
    else
     {var $js$1="unknown primitive:caml_string_equal";
      if($js$1)
       {var $js$2=Printf["sprintf"];
        return $js$2([0,[12,39,[2,0,[12,39,0]]],"'%s'"],s)}
      else
       {var $js$3=Filename["quote"];return $js$3(s)}}};
var
 chdir=
  function(dir)
   {var $js=My_std["reset_filesys_cache"];
    $js(0);
    return "unknown primitive:caml_sys_chdir"};
var
 run=
  function(args,target)
   {var $js=My_std["reset_readdir_cache"];
    $js(0);
    var $js$1=My_std["String"][22];
    var $js$2=My_std["List"][16];
    var $js$3=$js$2(quote_filename_if_needed,args);
    var cmd=$js$1(" ",$js$3);
    var $js$4=My_std["!*"];
    var $js$5=$js$4(My_unix["is_degraded"]);
    var $js$6=$js$5||"unknown primitive:caml_string_equal";
    if($js$6)
     {var $js$7=Log["event"];
      $js$7(0,cmd,target,Tags["empty"]);
      var $js$8=My_std["sys_command"];
      var st=$js$8(cmd);
      var $js$9=st!=0;
      if($js$9)
       {var $js$10=Pervasives["failwith"];
        var $js$11=Printf["sprintf"];
        var
         $js$12=
          $js$11
           ([0,
             [11,
              "Error during command `",
              [2,0,[11,"'.\nExit code ",[4,0,0,0,[11,".\n",0]]]]],
             "Error during command `%s'.\nExit code %d.\n"],
            cmd,
            st);
        return $js$10($js$12)}
      else
       {return 0}}
    else
     {var $js$13=My_unix["execute_many"];
      var
       match=
        $js$13
         (0,
          [0,Log["update"]],
          0,
          [0,Log["display"]],
          [0,[0,function(param){return cmd},0],0]);
      var $js$14=match;
      if($js$14)
       {var $js$15=Pervasives["failwith"];
        var $js$16=Printf["sprintf"];
        var $js$17=Printexc["to_string"];
        var $js$18=$js$17(match[1][2]);
        var
         $js$19=
          $js$16
           ([0,
             [11,"Error during command ",[3,0,[11,": ",[2,0,0]]]],
             "Error during command %S: %s"],
            cmd,
            $js$18);
        return $js$15($js$19)}
      else
       {return 0}}};
var rm=My_std["sys_remove"];
var
 rm_f=
  function(x)
   {var $js=My_std["sys_file_exists"];
    var $js$1=$js(x);
    if($js$1){return rm(x)}else{return 0}};
var
 mkdir=
  function(dir)
   {var $js=My_std["reset_filesys_cache_for_file"];
    $js(dir);
    return run([0,"mkdir",[0,dir,0]],dir)};
var
 try_mkdir=
  function(dir)
   {var $js=My_std["sys_file_exists"];
    var $js$1=$js(dir);
    var $js$2=!$js$1;
    if($js$2){return mkdir(dir)}else{return 0}};
var
 mkdir_p=
  function(dir)
   {var $js=My_std["sys_file_exists"];
    var $js$1=$js(dir);
    if($js$1)
     {return 0}
    else
     {var $js$2=Filename["dirname"];
      var $js$3=$js$2(dir);
      mkdir_p($js$3);
      return mkdir(dir)}};
var
 cp_pf=
  function(src,dest)
   {var $js=My_std["reset_filesys_cache_for_file"];
    $js(dest);
    return run([0,"cp",[0,"-pf",[0,src,[0,dest,0]]]],dest)};
var
 cp=
  function(src,dst)
   {var $js=Filename["check_suffix"];
    var $js$1=$js(src,".a");
    var $js$2=Filename["check_suffix"];
    var $js$3=$js$2(dst,".a");
    var $js$4=$js$1&&$js$3;
    if($js$4)
     {return cp_pf(src,dst)}
    else
     {var $js$5=My_std["copy_file"];return $js$5(src,dst)}};
var readlink=My_unix["readlink"];
var is_link=My_unix["is_link"];
var
 rm_rf=
  function(x)
   {var $js=My_std["reset_filesys_cache"];
    $js(0);
    return run([0,"rm",[0,"-Rf",[0,x,0]]],x)};
var
 mv=
  function(src,dest)
   {var $js=My_std["reset_filesys_cache_for_file"];
    $js(src);
    var $js$1=My_std["reset_filesys_cache_for_file"];
    $js$1(dest);
    return run([0,"mv",[0,src,[0,dest,0]]],dest)};
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
