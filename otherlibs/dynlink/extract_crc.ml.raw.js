var String=require("String");
var Dynlink=require("Dynlink");
var Pervasives=require("Pervasives");
var Arg=require("Arg");
var Printf=require("Printf");
var load_path=[0,0];
var first=[0,1];
var
 print_crc=
  function(unit)
   {try
     {var $js=Dynlink["digest_interface"];
      var $js$1=Pervasives["@"];
      var $js$2=$js$1(load_path[1],[0,".",0]);
      var crc=$js(unit,$js$2);
      var $js$3=first[1];
      if($js$3)
       {first[1]=0,0}
      else
       {var $js$4=Pervasives["print_string"];$js$4(";\n")}
      var $js$5=Pervasives["print_string"];
      $js$5('  "');
      var $js$6=Pervasives["print_string"];
      var $js$7=String["capitalize"];
      var $js$8=$js$7(unit);
      $js$6($js$8);
      var $js$9=Pervasives["print_string"];
      $js$9('",\n    "');
      var $js$10=0;
      var $js$11=crc["length"]-1;
      for(var i=$js$10;i<=$js$11;i++)
       {var $js$12=Printf["printf"];
        var $js$13=crc[i];
        var $js$14=$js$13;
        $js$12([0,[12,92,[4,0,[0,2,3],0,0]],"\%03d"],$js$14)}
      var $js$15=Pervasives["print_string"];
      return $js$15('"')}
    catch(exn)
     {var $js$16=Pervasives["prerr_string"];
      $js$16("Error while reading the interface for ");
      var $js$17=Pervasives["prerr_endline"];
      $js$17(unit);
      var tag=exn[1];
      var $js$18=tag=Sys_error;
      if($js$18)
       {var msg=exn[2];var $js$19=Pervasives["prerr_endline"];$js$19(msg)}
      else
       {var tag$1=exn[1];
        var $js$20=tag$1=Dynlink["Error"];
        if($js$20)
         {var match=exn[2];
          var $js$21=match;
          if(typeof $js$21=="number")
           {"unknown block:match/1028"}
          else
           {var $js$22=$js$21[0];
            if($js$22==5)
             {var name=match[1];
              var $js$23=Pervasives["prerr_string"];
              $js$23("Cannot find file ");
              var $js$24=Pervasives["prerr_endline"];
              $js$24(name)}
            else
             {var exit=5}}
          switch(exit)
           {case 5:
             var $js$25=Pervasives["prerr_endline"];
             $js$25("Ill-formed .cmi file")
            }}
        else
         {var $js$26=exn;throw $js$26}}
      var $js$27=Pervasives["exit"];
      return $js$27(2)}};
var usage="Usage: extract_crc [-I <dir>] <files>";
var
 main=
  function(param)
   {var $js=Pervasives["print_string"];
    $js("let crc_unit_list = [\n");
    var $js$1=Arg["parse"];
    $js$1
     ([0,
       [0,
        "-I",
        [4,
         function(dir)
          {var $js$2=Pervasives["@"];
           var $js$3=$js$2(load_path[1],[0,dir,0]);
           return load_path[1]=$js$3,0}],
        "<dir>  Add <dir> to the list of include directories"],
       0],
      print_crc,
      usage);
    var $js$2=Pervasives["print_string"];
    return $js$2("\n]\n")};
main(0);
var $js=Pervasives["exit"];
$js(0);
module["exports"]=
{"load_path":load_path,
 "first":first,
 "print_crc":print_crc,
 "usage":usage,
 "main":main};
