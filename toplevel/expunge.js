// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Runtimedef=require("Runtimedef");
var List=require("List");
var Pervasives=require("Pervasives");
var Set=require("Set");
var Misc=require("Misc");
var Bytesections=require("Bytesections");
var Printexc=require("Printexc");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var $$Array=require("Array");
var Symtable=require("Symtable");
var Sys=require("Sys");


var compare=function(prim,prim$1){return "unknown primitive:caml_compare";};

var StringSet=Set["Make"]([0,compare]);

var h=Hashtbl["create"](0,64);

$$Array["iter"]
 (function(n){return Hashtbl["add"](h,n,0);},Runtimedef["builtin_exceptions"]);
var is_exn=Hashtbl["mem"](h);

var to_keep=[0,StringSet[1]];

var negate="unknown primitive:caml_string_equal";

if(negate)
 {var
   keep=
    function(name){return is_exn(name)||!StringSet[3](name,to_keep[1]);};
  }
else
 {var
   keep=
    function(name){return is_exn(name)||StringSet[3](name,to_keep[1]);};
  }

var
 expunge_map=
  function(tbl)
   {return Symtable["filter_global_map"]
            (function(id){return keep(Ident["name"](id));},tbl);
    };

var
 expunge_crcs=
  function(tbl)
   {return List["filter"](function(param){return keep(param[1]);},tbl);};

var
 main=
  function(param)
   {var input_name=Sys["argv"][1];
    
    var output_name=Sys["argv"][2];
    
    for(var i=negate?4:3;i<=Sys["argv"]["length"]-1;i++)
     {to_keep[1]=
      StringSet[4]($$String["capitalize"](Sys["argv"][i]),to_keep[1]),
      0}
    
    var ic=Pervasives["open_in_bin"](input_name);
    
    Bytesections["read_toc"](ic);
    var toc=Bytesections["toc"](0);
    
    var pos_first_section=Bytesections["pos_first_section"](ic);
    
    var
     oc=
      Pervasives["open_out_gen"]([0,1,[0,3,[0,4,[0,6,0]]]],511,output_name);
    
    Pervasives["seek_in"](ic,0);
    Misc["copy_file_chunk"](ic,oc,pos_first_section);
    Bytesections["init_record"](oc);
    List["iter"]
     (function(param$1)
       {var name=param$1[1];
        
        var exit;
        
        switch(name)
         {case "CRCS":
           var crcs=Pervasives["input_value"](ic);
           
           Pervasives["output_value"](oc,expunge_crcs(crcs));
          case "SYMB":
           var global_map=Pervasives["input_value"](ic);
           
           Pervasives["output_value"](oc,expunge_map(global_map));
          default:exit=3;}
        
        switch(exit){case 3:Misc["copy_file_chunk"](ic,oc,param$1[2])}
        
        return Bytesections["record"](oc,name);
        },
      toc);
    Bytesections["write_toc_and_trailer"](oc);
    Pervasives["close_in"](ic);
    return Pervasives["close_out"](oc);
    };

Printexc["catch"](main,0);
Pervasives["exit"](0);
module["exports"]=
{"StringSet":StringSet,
 "is_exn":is_exn,
 "to_keep":to_keep,
 "negate":negate,
 "keep":keep,
 "expunge_map":expunge_map,
 "expunge_crcs":expunge_crcs,
 "main":main};

