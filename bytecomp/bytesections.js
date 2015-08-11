// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var List=require("List");
var Config=require("Config");


var section_table=[0,0];

var section_beginning=[0,0];

var
 init_record=
  function(outchan)
   {section_beginning[1]=Pervasives["pos_out"](outchan),0;
    return section_table[1]=0,0;
    };

var
 record=
  function(outchan,name)
   {var pos=Pervasives["pos_out"](outchan);
    
    section_table[1]=
    /* :: */[0,/* tuple */[0,name,pos-section_beginning[1]],section_table[1]],
    0;
    return section_beginning[1]=pos,0;
    };

var
 write_toc_and_trailer=
  function(outchan)
   {List["iter"]
     (function(param)
       {Pervasives["output_string"](outchan,param[1]);
        return Pervasives["output_binary_int"](outchan,param[2]);
        },
      List["rev"](section_table[1]));
    Pervasives["output_binary_int"](outchan,List["length"](section_table[1]));
    Pervasives["output_string"](outchan,Config["exec_magic_number"]);
    return section_table[1]=0,0;
    };

var Bad_magic_number="unknown primitive:caml_set_oo_id";

var
 read_toc=
  function(ic)
   {var pos_trailer=Pervasives["in_channel_length"](ic)-16;
    
    Pervasives["seek_in"](ic,pos_trailer);
    var num_sections=Pervasives["input_binary_int"](ic);
    
    var
     header=
      Pervasives["really_input_string"]
       (ic,Config["exec_magic_number"]["length"]);
    
    if("unknown primitive:caml_string_notequal")
     {throw Bad_magic_number;}
    else
     {}
    
    Pervasives["seek_in"](ic,pos_trailer-8*num_sections);
    section_table[1]=0,0;
    for(var _i=1;_i<=num_sections;_i++)
     {var name=Pervasives["really_input_string"](ic,4);
      
      var len=Pervasives["input_binary_int"](ic);
      
      section_table[1]=/* :: */[0,/* tuple */[0,name,len],section_table[1]],0}
    };

var toc=function(param){return List["rev"](section_table[1]);};

var
 seek_section=
  function(ic,name)
   {var
     seek_sec=
      function(curr_ofs,param)
       {if(param)
         {var match=param[1];
          
          var len=match[2];
          
          if("unknown primitive:caml_string_equal")
           {Pervasives["seek_in"](ic,curr_ofs-len);return len;}
          else
           {return seek_sec(curr_ofs-len,param[2]);}
          }
        else
         {throw Not_found;}
        };
    
    return seek_sec
            (Pervasives["in_channel_length"](ic)-
             16-
             8*
             List["length"](section_table[1]),
             section_table[1]);
    };

var
 read_section_string=
  function(ic,name)
   {return Pervasives["really_input_string"](ic,seek_section(ic,name));};

var
 read_section_struct=
  function(ic,name){return Pervasives["input_value"](ic);};

var
 pos_first_section=
  function(ic)
   {return Pervasives["in_channel_length"](ic)-
           16-
           8*
           List["length"](section_table[1])-
           List["fold_left"]
            (function(total,param){return total+param[2];},0,section_table[1]);
    };

var
 reset=
  function(param){section_table[1]=0,0;return section_beginning[1]=0,0;};

module["exports"]=
{"init_record":init_record,
 "record":record,
 "write_toc_and_trailer":write_toc_and_trailer,
 "read_toc":read_toc,
 "Bad_magic_number":Bad_magic_number,
 "toc":toc,
 "seek_section":seek_section,
 "read_section_string":read_section_string,
 "read_section_struct":read_section_struct,
 "pos_first_section":pos_first_section,
 "reset":reset};

