// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Cmt2annot=require("./cmt2annot.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Arg=require("./arg.js");
var Printf=require("./printf.js");
var Clflags=require("./clflags.js");
var Cmt_format=require("./cmt_format.js");
var Digest=require("./digest.js");
var Filename=require("./filename.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");


var gen_annot=[0,/* false */0];

var gen_ml=[0,/* false */0];

var print_info_arg=[0,/* false */0];

var target_filename=[0,/* None */0];

var
 arg_list=
  /* :: */[0,
   /* tuple */[0,
    "-o",
    /* String */[4,function(s){return target_filename[1]=/* Some */[0,s],0;}],
    " FILE (or -) : dump to file FILE (or stdout)"],
   /* :: */[0,
    /* tuple */[0,
     "-annot",
     /* Set */[2,gen_annot],
     " : generate the corresponding .annot file"],
    /* :: */[0,
     /* tuple */[0,
      "-src",
      /* Set */[2,gen_ml],
      " : convert .cmt or .cmti back to source code (without comments)"],
     /* :: */[0,
      /* tuple */[0,
       "-info",
       /* Set */[2,print_info_arg],
       " : print information on the file"],
      /* [] */0]]]];

var
 arg_usage=
  "read_cmt [OPTIONS] FILE.cmt : read FILE.cmt and print related information";

var dummy_crc=$$String["make"](32,45);

var
 print_info=
  function(cmt)
   {Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "module name: ",
        [/* String */2,
         /* No_padding */0,
         [/* Char_literal */12,10,/* End_of_format */0]]],
       "module name: %s\n"],
      cmt[1]);
    var match=cmt[2];
    
    switch(match[0])
     {case 0:
       Printf["printf"]
        ([/* Format */0,
          [/* String_literal */11,
           "pack: ",
           [/* String */2,
            /* No_padding */0,
            [/* Char_literal */12,10,/* End_of_format */0]]],
          "pack: %s\n"],
         $$String["concat"](" ",match[2]));
      case 1:
       Printf["printf"]
        ([/* Format */0,
          [/* String_literal */11,
           "kind: implementation\n",
           /* End_of_format */0],
          "kind: implementation\n"]);
      case 2:
       Printf["printf"]
        ([/* Format */0,
          [/* String_literal */11,"kind: interface\n",/* End_of_format */0],
          "kind: interface\n"]);
      case 3:
       Printf["printf"]
        ([/* Format */0,
          [/* String_literal */11,
           "kind: implementation with errors\n",
           /* End_of_format */0],
          "kind: implementation with errors\n"]);
      case 4:
       Printf["printf"]
        ([/* Format */0,
          [/* String_literal */11,
           "kind: interface with errors\n",
           /* End_of_format */0],
          "kind: interface with errors\n"])
      }
    
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "command: ",
        [/* String */2,
         /* No_padding */0,
         [/* Char_literal */12,10,/* End_of_format */0]]],
       "command: %s\n"],
      $$String["concat"](" ",$$Array["to_list"](cmt[5])));
    var match$1=cmt[6];
    
    if(match$1)
     {Printf["printf"]
       ([/* Format */0,
         [/* String_literal */11,
          "sourcefile: ",
          [/* String */2,
           /* No_padding */0,
           [/* Char_literal */12,10,/* End_of_format */0]]],
         "sourcefile: %s\n"],
        match$1[1])}
    else
     {}
    
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "build directory: ",
        [/* String */2,
         /* No_padding */0,
         [/* Char_literal */12,10,/* End_of_format */0]]],
       "build directory: %s\n"],
      cmt[7]);
    List["iter"]
     (Printf["printf"]
       ([/* Format */0,
         [/* String_literal */11,
          "load path: ",
          [/* String */2,
           /* No_padding */0,
           [/* Char_literal */12,10,[/* Flush */10,/* End_of_format */0]]]],
         "load path: %s\n%!"]),
      cmt[8]);
    var match$2=cmt[9];
    
    if(match$2)
     {Printf["printf"]
       ([/* Format */0,
         [/* String_literal */11,
          "source digest: ",
          [/* String */2,
           /* No_padding */0,
           [/* Char_literal */12,10,/* End_of_format */0]]],
         "source digest: %s\n"],
        Digest["to_hex"](match$2[1]))}
    else
     {}
    
    var match$3=cmt[12];
    
    if(match$3)
     {Printf["printf"]
       ([/* Format */0,
         [/* String_literal */11,
          "interface digest: ",
          [/* String */2,
           /* No_padding */0,
           [/* Char_literal */12,10,/* End_of_format */0]]],
         "interface digest: %s\n"],
        Digest["to_hex"](match$3[1]))}
    else
     {}
    
    List["iter"]
     (function(param)
       {var crco=param[2];
        
        if(crco){var crc=Digest["to_hex"](crco[1]);}else{var crc=dummy_crc;}
        
        return Printf["printf"]
                ([/* Format */0,
                  [/* String_literal */11,
                   "import: ",
                   [/* String */2,
                    /* No_padding */0,
                    [/* Char_literal */12,
                     32,
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,10,/* End_of_format */0]]]]],
                  "import: %s %s\n"],
                 param[1],
                 crc);
        },
      List["sort"]
       (function(prim,prim$1)
         {return CamlPrimitive["caml_compare"](prim,prim$1);},
        cmt[11]));
    Printf["printf"]
     ([/* Format */0,[/* Flush */10,/* End_of_format */0],"%!"]);
    return /* () */0;
    };

Clflags["annotations"][1]=/* true */1;
Arg["parse"]
 (arg_list,
  function(filename)
   {if
     (Filename["check_suffix"](filename,".cmt")||
      Filename["check_suffix"](filename,".cmti"))
     {var cmt=Cmt_format["read_cmt"](filename);
      
      if(gen_annot[1])
       {Cmt2annot["gen_annot"](target_filename[1],filename,cmt)}
      else
       {}
      
      if(gen_ml[1])
       {Cmt2annot["gen_ml"](target_filename[1],filename,cmt)}
      else
       {}
      
      if(print_info_arg[1]||!(gen_ml[1]||gen_annot[1]))
       {return print_info(cmt);}
      else
       {return 0;}
      }
    else
     {Printf["fprintf"]
       (Pervasives["stderr"],
        [/* Format */0,
         [/* String_literal */11,
          "Error: the file's extension must be .cmt or .cmti.\n",
          [/* Flush */10,/* End_of_format */0]],
         "Error: the file's extension must be .cmt or .cmti.\n%!"]);
      return Arg["usage"](arg_list,arg_usage);
      }
    },
  arg_usage);
module["exports"]=
{"gen_annot":gen_annot,
 "gen_ml":gen_ml,
 "print_info_arg":print_info_arg,
 "target_filename":target_filename,
 "arg_list":arg_list,
 "arg_usage":arg_usage,
 "dummy_crc":dummy_crc,
 "print_info":print_info};

