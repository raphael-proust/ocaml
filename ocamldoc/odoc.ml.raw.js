var Odoc_global=require("Odoc_global");
var Dynlink=require("Dynlink");
var Odoc_info=require("Odoc_info");
var Pervasives=require("Pervasives");
var List=require("List");
var Odoc_analyse=require("Odoc_analyse");
var Odoc_args=require("Odoc_args");
var Filename=require("Filename");
var Odoc_config=require("Odoc_config");
var Odoc_gen=require("Odoc_gen");
var Array=require("Array");
var Odoc_messages=require("Odoc_messages");
var Sys=require("Sys");
var M=0;
var $js=Array["to_list"];
var arg_list=$js(Sys["argv"]);
var
 iter=
  function(param,param$1)
   {var incs=param[2];
    var files=param[1];
    var $js$1=param$1;
    if($js$1)
     {var $js$2=param$1[1];
      if($js$2=="-g")
       {var match=param$1[2];
        var $js$3=match;
        if($js$3)
         {var file=match[1];
          var $js$4=Filename["check_suffix"];
          var $js$5=$js$4(file,"cmo");
          var $js$6=Filename["check_suffix"];
          var $js$7=$js$6(file,"cma");
          var $js$8=Filename["check_suffix"];
          var $js$9=$js$8(file,"cmxs");
          var $js$10=$js$7||$js$9;
          var $js$11=$js$5||$js$10;
          if($js$11)
           {return iter([0,[0,file,files],incs],match[2])}
          else
           {var exit=21}}
        else
         {var exit=21}}
      else
       if($js$2=="-i")
        {var match$1=param$1[2];
         var $js$12=match$1;
         if($js$12)
          {return iter([0,files,[0,match$1[1],incs]],match$1[2])}
         else
          {var exit=21}}
       else
        {var exit=21}
      switch(exit)
       {case 21:
         var q=param$1[2];
         var $js$13=q;
         if($js$13){return iter([0,files,incs],q)}else{var exit$1=20}
        }}
    else
     {var exit$1=20}
    switch(exit$1)
     {case 20:
       var $js$14=List["rev"];
       var $js$15=$js$14(files);
       var $js$16=List["rev"];
       var $js$17=$js$16(incs);
       return [0,$js$15,$js$17]
      }};
var match=iter([0,0,0],arg_list);
var paths=match[2];
var plugins=match[1];
var
 get_real_filename=
  function(name)
   {var $js$1=Filename["basename"];
    var $js$2=$js$1(name);
    var $js$3="unknown primitive:caml_string_notequal";
    if($js$3)
     {return name}
    else
     {var $js$4=Pervasives["@"];
      var
       paths$1=
        $js$4
         ([0,Filename["current_dir_name"],paths],
          [0,Odoc_config["custom_generators_path"],0]);
      try
       {var $js$5=List["find"];
        var
         d=
          $js$5
           (function(d$1)
             {var $js$6=Filename["concat"];
              var $js$7=$js$6(d$1,name);
              return "unknown primitive:caml_sys_file_exists"},
            paths$1);
        var $js$6=Filename["concat"];
        return $js$6(d,name)}
      catch(exn)
       {var $js$7=exn=Not_found;
        if($js$7)
         {var $js$8=Pervasives["failwith"];
          var $js$9=Odoc_messages["file_not_found_in_paths"];
          var $js$10=$js$9(paths$1,name);
          return $js$8($js$10)}
        else
         {return "unknown primitive:reraise"}}}};
var
 load_plugin=
  function(file)
   {var $js$1=Dynlink["adapt_filename"];
    var file$1=$js$1(file);
    var $js$2=Dynlink["allow_unsafe_modules"];
    $js$2(1);
    try
     {var real_file=get_real_filename(file$1);
      var $js$3=Dynlink["loadfile"];
      var $js$4=$js$3(real_file);
      return 0}
    catch(exn)
     {var $js$5=exn[1]=Dynlink["Error"];
      if($js$5)
       {var $js$6=Pervasives["prerr_endline"];
        var $js$7=Odoc_messages["load_file_error"];
        var $js$8=Dynlink["error_message"];
        var $js$9=$js$8(exn[2]);
        var $js$10=$js$7(file$1,$js$9);
        $js$6($js$10);
        var $js$11=Pervasives["exit"];
        return $js$11(1)}
      else
       {var $js$12=exn=Not_found;
        if($js$12)
         {var $js$13=Pervasives["prerr_endline"];
          var $js$14=Odoc_messages["load_file_error"];
          var $js$15=$js$14(file$1,"Not_found");
          $js$13($js$15);
          var $js$16=Pervasives["exit"];
          return $js$16(1)}
        else
         {var $js$17=exn[1]=Sys_error;
          if($js$17)
           {var s=exn[2];var exit=9}
          else
           {var $js$18=exn[1]=Failure;
            if($js$18)
             {var s=exn[2];var exit=9}
            else
             {return "unknown primitive:reraise"}}}}
      switch(exit)
       {case 9:
         var $js$19=Pervasives["prerr_endline"];
         var $js$20=Odoc_messages["load_file_error"];
         var $js$21=$js$20(file$1,s);
         $js$19($js$21);
         var $js$22=Pervasives["exit"];
         return $js$22(1)
        }}};
var $js$1=List["iter"];
$js$1(load_plugin,plugins);
var $js$2=Odoc_args["parse"];
var match$1=$js$2(0);
var $js$3=List["flatten"];
var $js$4=List["map"];
var
 $js$5=
  $js$4
   (function(f)
     {var $js$6=Odoc_info["verbose"];
      var $js$7=Odoc_messages["loading"];
      var $js$8=$js$7(f);
      $js$6($js$8);
      try
       {var $js$9=Odoc_analyse["load_modules"];
        var l=$js$9(f);
        var $js$10=Odoc_info["verbose"];
        $js$10(Odoc_messages["ok"]);
        return l}
      catch(exn)
       {var $js$11=exn[1]=Failure;
        if($js$11)
         {var $js$12=Pervasives["prerr_endline"];
          $js$12(exn[2]);
          Odoc_global["errors"][0]++;
          return 0}
        else
         {return "unknown primitive:reraise"}}},
    Odoc_global["load"][1]);
var loaded_modules=$js$3($js$5);
var $js$6=Odoc_analyse["analyse_files"];
var modules=$js$6([0,loaded_modules],Odoc_global["files"][1]);
var match$2=Odoc_global["dump"][1];
var $js$7=match$2;
if($js$7)
 {try
   {var $js$8=Odoc_analyse["dump_modules"];$js$8(match$2[1],modules)}
  catch(exn)
   {var $js$9=exn[1]=Failure;
    if($js$9)
     {var $js$10=Pervasives["prerr_endline"];
      $js$10(exn[2]);
      Odoc_global["errors"][0]++}
    else
     {"unknown primitive:reraise"}}}
else
 {}
var match$3=Odoc_args["current_generator"][1];
var $js$11=match$3;
if($js$11)
 {var $js$12=Odoc_gen["get_minimal_generator"];
  var generator=$js$12(match$3[1]);
  var $js$13=Odoc_info["verbose"];
  $js$13(Odoc_messages["generating_doc"]);
  "unknown block:(send generator/1059 -643670219 modules/1045)";
  var $js$14=Odoc_info["verbose"];
  $js$14(Odoc_messages["ok"])}
else
 {}
var $js$15=Odoc_global["errors"][1]>0;
if($js$15)
 {var $js$16=Pervasives["prerr_endline"];
  var $js$17=Odoc_messages["errors_occured"];
  var $js$18=$js$17(Odoc_global["errors"][1]);
  $js$16($js$18);
  var $js$19=Pervasives["exit"];
  $js$19(1)}
else
 {var $js$20=Pervasives["exit"];$js$20(0)}
module["exports"]=
{"M":M,
 "arg_list":arg_list,
 "plugins":plugins,
 "paths":paths,
 "get_real_filename":get_real_filename,
 "load_plugin":load_plugin,
 "loaded_modules":loaded_modules,
 "modules":modules};
