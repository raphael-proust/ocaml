// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
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
     {var
       crc=
        Dynlink["digest_interface"]
         (unit,Pervasives["@"](load_path[1],[0,".",0]));
      
      if(first[1]){first[1]=0,0}else{Pervasives["print_string"](";\n")}
      
      Pervasives["print_string"]('  "');
      Pervasives["print_string"]($$String["capitalize"](unit));
      Pervasives["print_string"]('",\n    "');
      for(var i=0;i<=crc["length"]-1;i++)
       {Printf["printf"]([0,[12,92,[4,0,[0,2,3],0,0]],"\%03d"],crc[i])}
      
      return Pervasives["print_string"]('"');
      }
    catch(exn)
     {Pervasives["prerr_string"]("Error while reading the interface for ");
      Pervasives["prerr_endline"](unit);
      var tag=exn[1];
      
      if(tag=Sys_error)
       {var msg=exn[2];Pervasives["prerr_endline"](msg)}
      else
       {var tag$1=exn[1];
        
        if(tag$1=Dynlink["Error"])
         {var match=exn[2];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 5:
               var name=match[1];
               
               Pervasives["prerr_string"]("Cannot find file "),
               Pervasives["prerr_endline"](name);
              default:exit=5;}}
          
          switch(exit)
           {case 5:Pervasives["prerr_endline"]("Ill-formed .cmi file")}
          }
        else
         {throw exn;}
        }
      
      return Pervasives["exit"](2);
      }
    };

var usage="Usage: extract_crc [-I <dir>] <files>";

var
 main=
  function(param)
   {Pervasives["print_string"]("let crc_unit_list = [\n");
    Arg["parse"]
     (/* :: */[0,
       /* tuple */[0,
        "-I",
        /* String */[4,
         function(dir)
          {return load_path[1]=
                  Pervasives["@"](load_path[1],/* :: */[0,dir,0]),
                  0;
           }],
        "<dir>  Add <dir> to the list of include directories"],
       0],
      print_crc,
      usage);
    return Pervasives["print_string"]("\n]\n");
    };

main(0);
Pervasives["exit"](0);
module["exports"]=
{"load_path":load_path,
 "first":first,
 "print_crc":print_crc,
 "usage":usage,
 "main":main};

