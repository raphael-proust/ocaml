// Generated CODE, PLEASE EDIT WITH CARE 

var Common=require("Common");
var Char=require("Char");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");


var
 output_byte=
  function(oc,b)
   {Pervasives["output_char"](oc,92);
    Pervasives["output_char"](oc,Char["chr"](48+b/100));
    Pervasives["output_char"](oc,Char["chr"](48+b/10%10));
    return Pervasives["output_char"](oc,Char["chr"](48+b%10));
    };

var
 output_array=
  function(oc,v)
   {Pervasives["output_string"](oc,'   "');
    for(var i=0;i<=v["length"]-1;i++)
     {output_byte(oc,v[i]&255);
      output_byte(oc,v[i]>>8&255);
      if((i&7)=7){Pervasives["output_string"](oc,"\\n    ")}else{}
      }
    
    return Pervasives["output_string"](oc,'"');
    };

var
 output_byte_array=
  function(oc,v)
   {Pervasives["output_string"](oc,'   "');
    for(var i=0;i<=v["length"]-1;i++)
     {output_byte(oc,v[i]&255);
      if((i&15)=15){Pervasives["output_string"](oc,"\\n    ")}else{}
      }
    
    return Pervasives["output_string"](oc,'"');
    };

var
 output_tables=
  function(oc,tbl)
   {Pervasives["output_string"](oc,"let __ocaml_lex_tables = {\n");
    Printf["fprintf"]
     (oc,
      [0,
       [11,"  Lexing.lex_base = \n",[15,[11,";\n",0]]],
       "  Lexing.lex_base = \n%a;\n"],
      output_array,
      tbl[1]);
    Printf["fprintf"]
     (oc,
      [0,
       [11,"  Lexing.lex_backtrk = \n",[15,[11,";\n",0]]],
       "  Lexing.lex_backtrk = \n%a;\n"],
      output_array,
      tbl[2]);
    Printf["fprintf"]
     (oc,
      [0,
       [11,"  Lexing.lex_default = \n",[15,[11,";\n",0]]],
       "  Lexing.lex_default = \n%a;\n"],
      output_array,
      tbl[3]);
    Printf["fprintf"]
     (oc,
      [0,
       [11,"  Lexing.lex_trans = \n",[15,[11,";\n",0]]],
       "  Lexing.lex_trans = \n%a;\n"],
      output_array,
      tbl[4]);
    Printf["fprintf"]
     (oc,
      [0,
       [11,"  Lexing.lex_check = \n",[15,[11,";\n",0]]],
       "  Lexing.lex_check = \n%a;\n"],
      output_array,
      tbl[5]);
    Printf["fprintf"]
     (oc,
      [0,
       [11,"  Lexing.lex_base_code = \n",[15,[11,";\n",0]]],
       "  Lexing.lex_base_code = \n%a;\n"],
      output_array,
      tbl[6]);
    Printf["fprintf"]
     (oc,
      [0,
       [11,"  Lexing.lex_backtrk_code = \n",[15,[11,";\n",0]]],
       "  Lexing.lex_backtrk_code = \n%a;\n"],
      output_array,
      tbl[7]);
    Printf["fprintf"]
     (oc,
      [0,
       [11,"  Lexing.lex_default_code = \n",[15,[11,";\n",0]]],
       "  Lexing.lex_default_code = \n%a;\n"],
      output_array,
      tbl[8]);
    Printf["fprintf"]
     (oc,
      [0,
       [11,"  Lexing.lex_trans_code = \n",[15,[11,";\n",0]]],
       "  Lexing.lex_trans_code = \n%a;\n"],
      output_array,
      tbl[9]);
    Printf["fprintf"]
     (oc,
      [0,
       [11,"  Lexing.lex_check_code = \n",[15,[11,";\n",0]]],
       "  Lexing.lex_check_code = \n%a;\n"],
      output_array,
      tbl[10]);
    Printf["fprintf"]
     (oc,
      [0,
       [11,"  Lexing.lex_code = \n",[15,[11,";\n",0]]],
       "  Lexing.lex_code = \n%a;\n"],
      output_byte_array,
      tbl[11]);
    return Pervasives["output_string"](oc,"}\n\n");
    };

var
 output_entry=
  function(sourcefile,ic,oc,has_refill,oci,e)
   {var match=e[4];
    
    Printf["fprintf"]
     (oc,
      [0,
       [2,
        0,
        [12,
         32,
         [15,
          [11,
           "lexbuf =\n  ",
           [15,
            [15,
             [11,
              "  __ocaml_lex_",
              [2,0,[11,"_rec ",[15,[11,"lexbuf ",[4,0,0,0,[12,10,0]]]]]]]]]]]]],
       "%s %alexbuf =\n  %a%a  __ocaml_lex_%s_rec %alexbuf %d\n"],
      e[1],
      Common["output_args"],
      e[2],
      function(oc$1,x)
       {if(x>0)
         {return Printf["fprintf"]
                  (oc$1,
                   [0,
                    [11,
                     "lexbuf.Lexing.lex_mem <- Array.make ",
                     [4,0,0,0,[11," (-1) ; ",0]]],
                    "lexbuf.Lexing.lex_mem <- Array.make %d (-1) ; "],
                   x);
          }
        else
         {return 0;}
        },
      e[3],
      Common["output_memory_actions"]("  "),
      match[2],
      e[1],
      Common["output_args"],
      e[2],
      match[1]);
    Printf["fprintf"]
     (oc,
      [0,
       [11,
        "and __ocaml_lex_",
        [2,0,[11,"_rec ",[15,[11,"lexbuf __ocaml_lex_state =\n",0]]]]],
       "and __ocaml_lex_%s_rec %alexbuf __ocaml_lex_state =\n"],
      e[1],
      Common["output_args"],
      e[2]);
    Printf["fprintf"]
     (oc,
      [0,
       [11,"  match Lexing.",[2,0,[11,"engine",0]]],
       "  match Lexing.%sengine"],
      (e[3]=0)?"":"new_");
    Printf["fprintf"]
     (oc,
      [0,
       [11," __ocaml_lex_tables __ocaml_lex_state lexbuf with\n    ",0],
       " __ocaml_lex_tables __ocaml_lex_state lexbuf with\n    "]);
    List["iter"]
     (function(param)
       {Printf["fprintf"](oc,[0,[11,"  | ",0],"  | "]);
        Printf["fprintf"](oc,[0,[4,0,0,0,[11," ->\n",0]],"%d ->\n"],param[1]);
        Common["output_env"](ic,oc,oci,param[2]);
        Common["copy_chunk"](ic,oc,oci,param[3],1);
        return Printf["fprintf"](oc,[0,[12,10,0],"\n"]);
        },
      e[5]);
    if(has_refill)
     {return Printf["fprintf"]
              (oc,
               [0,
                [11,
                 "  | __ocaml_lex_state -> __ocaml_lex_refill \n      (fun lexbuf -> lexbuf.Lexing.refill_buff lexbuf; \n         __ocaml_lex_",
                 [2,
                  0,
                  [11,
                   "_rec ",
                   [15,[11,"lexbuf __ocaml_lex_state) lexbuf\n\n",0]]]]],
                "  | __ocaml_lex_state -> __ocaml_lex_refill \n      (fun lexbuf -> lexbuf.Lexing.refill_buff lexbuf; \n         __ocaml_lex_%s_rec %alexbuf __ocaml_lex_state) lexbuf\n\n"],
               e[1],
               Common["output_args"],
               e[2]);
      }
    else
     {return Printf["fprintf"]
              (oc,
               [0,
                [11,
                 "  | __ocaml_lex_state -> lexbuf.Lexing.refill_buff lexbuf; \n      __ocaml_lex_",
                 [2,0,[11,"_rec ",[15,[11,"lexbuf __ocaml_lex_state\n\n",0]]]]],
                "  | __ocaml_lex_state -> lexbuf.Lexing.refill_buff lexbuf; \n      __ocaml_lex_%s_rec %alexbuf __ocaml_lex_state\n\n"],
               e[1],
               Common["output_args"],
               e[2]);
      }
    };

var Table_overflow="unknown primitive:caml_set_oo_id";

var
 output_lexdef=
  function(sourcefile,ic,oc,oci,header,rh,tables,entry_points,trailer)
   {if(!Common["quiet_mode"][1])
     {Printf["printf"]
       ([0,
         [4,
          0,
          0,
          0,
          [11,
           " states, ",
           [4,
            0,
            0,
            0,
            [11," transitions, table size ",[4,0,0,0,[11," bytes\n",0]]]]]],
         "%d states, %d transitions, table size %d bytes\n"],
        tables[1]["length"],
        tables[4]["length"],
        2*
        (tables[1]["length"]+
         tables[2]["length"]+
         tables[3]["length"]+
         tables[4]["length"]+
         tables[5]["length"]))}
    else
     {}
    
    var
     size_groups=
      2*
      (tables[6]["length"]+
       tables[7]["length"]+
       tables[8]["length"]+
       tables[9]["length"]+
       tables[10]["length"])+
      tables[11]["length"];
    
    if(size_groups>0&&!Common["quiet_mode"][1])
     {Printf["printf"]
       ([0,
         [4,0,0,0,[11," additional bytes used for bindings\n",0]],
         "%d additional bytes used for bindings\n"],
        size_groups)}
    else
     {}
    
    Pervasives["flush"](Pervasives["stdout"]);
    if(tables[4]["length"]>32768){throw Table_overflow;}else{}
    
    Common["copy_chunk"](ic,oc,oci,header,0);
    var has_refill=Common["output_refill_handler"](ic,oc,oci,rh);
    
    output_tables(oc,tables);
    if(entry_points)
     {Pervasives["output_string"](oc,"let rec "),
      output_entry(sourcefile,ic,oc,has_refill,oci,entry_points[1]),
      List["iter"]
       (function(e)
         {Pervasives["output_string"](oc,"and ");
          return output_entry(sourcefile,ic,oc,has_refill,oci,e);
          },
        entry_points[2]),
      Pervasives["output_string"](oc,";;\n\n")}
    else
     {}
    
    return Common["copy_chunk"](ic,oc,oci,trailer,0);
    };

module["exports"]=
{"output_lexdef":output_lexdef,"Table_overflow":Table_overflow};

