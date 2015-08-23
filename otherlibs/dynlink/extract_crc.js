// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Dynlink=require("./dynlink.js");
var Pervasives=require("./pervasives.js");
var Arg=require("./arg.js");
var Printf=require("./printf.js");


var load_path=[0,/* [] */0];

var first=[0,/* true */1];

var
 print_crc=
  function(unit)
   {try
     {var
       crc=
        Dynlink["digest_interface"]
         (unit,Pervasives["@"](load_path[1],[/* :: */0,".",/* [] */0]));
      
      first[1]?(first[1]=/* false */0,0):Pervasives["print_string"](";\n");
      
      Pervasives["print_string"]('  "');
      Pervasives["print_string"]($$String["capitalize"](unit));
      Pervasives["print_string"]('",\n    "');
      for(var i=0;i<=crc["length"]-1;i++)
       {Printf["printf"]
         ([/* Format */0,
           [/* Char_literal */12,
            92,
            [/* Int */4,
             /* Int_d */0,
             [/* Lit_padding */0,/* Zeros */2,3],
             /* No_precision */0,
             /* End_of_format */0]],
           "\\%03d"],
          crc["charCodeAt"](i))}
      
      return Pervasives["print_string"]('"')}
    catch(exn)
     {Pervasives["prerr_string"]("Error while reading the interface for ");
      Pervasives["prerr_endline"](unit);
      if(exn[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
       {Pervasives["prerr_endline"](exn[2])}
      else
       {if(exn[1]===Dynlink["Error"])
         {var match=exn[2];
          
          var exit;
          
          if(typeof match==="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 5:
               Pervasives["prerr_string"]("Cannot find file "),
               Pervasives["prerr_endline"](match[1]);
               break;
              default:exit=5;}}
          
          switch(exit)
           {case 5:Pervasives["prerr_endline"]("Ill-formed .cmi file");break}
          }
        else
         {throw exn}
        }
      
      return Pervasives["exit"](2)}
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
                  Pervasives["@"](load_path[1],/* :: */[0,dir,/* [] */0]),
                  0}],
        "<dir>  Add <dir> to the list of include directories"],
       /* [] */0],
      print_crc,
      usage);
    return Pervasives["print_string"]("\n]\n")};

main(/* () */0);
Pervasives["exit"](0);
module["exports"]=
{"load_path":load_path,
 "first":first,
 "print_crc":print_crc,
 "usage":usage,
 "main":main};

