// Generated CODE, PLEASE EDIT WITH CARE 

var Common=require("./common.js");
var Char=require("./char.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Printf=require("./printf.js");
var CamlPrimitive=require("./camlPrimitive.js");


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
    for(var i=0;i<=/* -1 for tag */v["length"]-1-1;i++)
     {output_byte(oc,v[i+1]&255);
      output_byte(oc,v[i+1]>>8&255);
      if((i&7)===7){Pervasives["output_string"](oc,"\\n    ")}else{}
      }
    
    return Pervasives["output_string"](oc,'"');
    };

var
 output_byte_array=
  function(oc,v)
   {Pervasives["output_string"](oc,'   "');
    for(var i=0;i<=/* -1 for tag */v["length"]-1-1;i++)
     {output_byte(oc,v[i+1]&255);
      if((i&15)===15){Pervasives["output_string"](oc,"\\n    ")}else{}
      }
    
    return Pervasives["output_string"](oc,'"');
    };

var
 output_tables=
  function(oc,tbl)
   {Pervasives["output_string"](oc,"let __ocaml_lex_tables = {\n");
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  Lexing.lex_base = \n",
        [/* Alpha */15,[/* String_literal */11,";\n",/* End_of_format */0]]],
       "  Lexing.lex_base = \n%a;\n"],
      output_array,
      tbl[1]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  Lexing.lex_backtrk = \n",
        [/* Alpha */15,[/* String_literal */11,";\n",/* End_of_format */0]]],
       "  Lexing.lex_backtrk = \n%a;\n"],
      output_array,
      tbl[2]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  Lexing.lex_default = \n",
        [/* Alpha */15,[/* String_literal */11,";\n",/* End_of_format */0]]],
       "  Lexing.lex_default = \n%a;\n"],
      output_array,
      tbl[3]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  Lexing.lex_trans = \n",
        [/* Alpha */15,[/* String_literal */11,";\n",/* End_of_format */0]]],
       "  Lexing.lex_trans = \n%a;\n"],
      output_array,
      tbl[4]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  Lexing.lex_check = \n",
        [/* Alpha */15,[/* String_literal */11,";\n",/* End_of_format */0]]],
       "  Lexing.lex_check = \n%a;\n"],
      output_array,
      tbl[5]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  Lexing.lex_base_code = \n",
        [/* Alpha */15,[/* String_literal */11,";\n",/* End_of_format */0]]],
       "  Lexing.lex_base_code = \n%a;\n"],
      output_array,
      tbl[6]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  Lexing.lex_backtrk_code = \n",
        [/* Alpha */15,[/* String_literal */11,";\n",/* End_of_format */0]]],
       "  Lexing.lex_backtrk_code = \n%a;\n"],
      output_array,
      tbl[7]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  Lexing.lex_default_code = \n",
        [/* Alpha */15,[/* String_literal */11,";\n",/* End_of_format */0]]],
       "  Lexing.lex_default_code = \n%a;\n"],
      output_array,
      tbl[8]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  Lexing.lex_trans_code = \n",
        [/* Alpha */15,[/* String_literal */11,";\n",/* End_of_format */0]]],
       "  Lexing.lex_trans_code = \n%a;\n"],
      output_array,
      tbl[9]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  Lexing.lex_check_code = \n",
        [/* Alpha */15,[/* String_literal */11,";\n",/* End_of_format */0]]],
       "  Lexing.lex_check_code = \n%a;\n"],
      output_array,
      tbl[10]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  Lexing.lex_code = \n",
        [/* Alpha */15,[/* String_literal */11,";\n",/* End_of_format */0]]],
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
      [/* Format */0,
       [/* String */2,
        /* No_padding */0,
        [/* Char_literal */12,
         32,
         [/* Alpha */15,
          [/* String_literal */11,
           "lexbuf =\n  ",
           [/* Alpha */15,
            [/* Alpha */15,
             [/* String_literal */11,
              "  __ocaml_lex_",
              [/* String */2,
               /* No_padding */0,
               [/* String_literal */11,
                "_rec ",
                [/* Alpha */15,
                 [/* String_literal */11,
                  "lexbuf ",
                  [/* Int */4,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   [/* Char_literal */12,10,/* End_of_format */0]]]]]]]]]]]]],
       "%s %alexbuf =\n  %a%a  __ocaml_lex_%s_rec %alexbuf %d\n"],
      e[1],
      Common["output_args"],
      e[2],
      function(oc,x)
       {if(x>0)
         {return Printf["fprintf"]
                  (oc,
                   [/* Format */0,
                    [/* String_literal */11,
                     "lexbuf.Lexing.lex_mem <- Array.make ",
                     [/* Int */4,
                      /* Int_d */0,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* String_literal */11," (-1) ; ",/* End_of_format */0]]],
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
      [/* Format */0,
       [/* String_literal */11,
        "and __ocaml_lex_",
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,
          "_rec ",
          [/* Alpha */15,
           [/* String_literal */11,
            "lexbuf __ocaml_lex_state =\n",
            /* End_of_format */0]]]]],
       "and __ocaml_lex_%s_rec %alexbuf __ocaml_lex_state =\n"],
      e[1],
      Common["output_args"],
      e[2]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  match Lexing.",
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,"engine",/* End_of_format */0]]],
       "  match Lexing.%sengine"],
      e[3]===0?"":"new_");
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        " __ocaml_lex_tables __ocaml_lex_state lexbuf with\n    ",
        /* End_of_format */0],
       " __ocaml_lex_tables __ocaml_lex_state lexbuf with\n    "]);
    List["iter"]
     (function(param)
       {Printf["fprintf"]
         (oc,
          [/* Format */0,
           [/* String_literal */11,"  | ",/* End_of_format */0],
           "  | "]);
        Printf["fprintf"]
         (oc,
          [/* Format */0,
           [/* Int */4,
            /* Int_d */0,
            /* No_padding */0,
            /* No_precision */0,
            [/* String_literal */11," ->\n",/* End_of_format */0]],
           "%d ->\n"],
          param[1]);
        Common["output_env"](ic,oc,oci,param[2]);
        Common["copy_chunk"](ic,oc,oci,param[3],/* true */1);
        return Printf["fprintf"]
                (oc,
                 [/* Format */0,
                  [/* Char_literal */12,10,/* End_of_format */0],
                  "\n"]);
        },
      e[5]);
    if(has_refill)
     {return Printf["fprintf"]
              (oc,
               [/* Format */0,
                [/* String_literal */11,
                 "  | __ocaml_lex_state -> __ocaml_lex_refill \n      (fun lexbuf -> lexbuf.Lexing.refill_buff lexbuf; \n         __ocaml_lex_",
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   "_rec ",
                   [/* Alpha */15,
                    [/* String_literal */11,
                     "lexbuf __ocaml_lex_state) lexbuf\n\n",
                     /* End_of_format */0]]]]],
                "  | __ocaml_lex_state -> __ocaml_lex_refill \n      (fun lexbuf -> lexbuf.Lexing.refill_buff lexbuf; \n         __ocaml_lex_%s_rec %alexbuf __ocaml_lex_state) lexbuf\n\n"],
               e[1],
               Common["output_args"],
               e[2]);
      }
    else
     {return Printf["fprintf"]
              (oc,
               [/* Format */0,
                [/* String_literal */11,
                 "  | __ocaml_lex_state -> lexbuf.Lexing.refill_buff lexbuf; \n      __ocaml_lex_",
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   "_rec ",
                   [/* Alpha */15,
                    [/* String_literal */11,
                     "lexbuf __ocaml_lex_state\n\n",
                     /* End_of_format */0]]]]],
                "  | __ocaml_lex_state -> lexbuf.Lexing.refill_buff lexbuf; \n      __ocaml_lex_%s_rec %alexbuf __ocaml_lex_state\n\n"],
               e[1],
               Common["output_args"],
               e[2]);
      }
    };

var
 Table_overflow=
  CamlPrimitive["caml_set_oo_id"]([248,"Output.Table_overflow",0]);

var
 output_lexdef=
  function(sourcefile,ic,oc,oci,header,rh,tables,entry_points,trailer)
   {if(!Common["quiet_mode"][1])
     {Printf["printf"]
       ([/* Format */0,
         [/* Int */4,
          /* Int_d */0,
          /* No_padding */0,
          /* No_precision */0,
          [/* String_literal */11,
           " states, ",
           [/* Int */4,
            /* Int_d */0,
            /* No_padding */0,
            /* No_precision */0,
            [/* String_literal */11,
             " transitions, table size ",
             [/* Int */4,
              /* Int_d */0,
              /* No_padding */0,
              /* No_precision */0,
              [/* String_literal */11," bytes\n",/* End_of_format */0]]]]]],
         "%d states, %d transitions, table size %d bytes\n"],
        /* -1 for tag */tables[1]["length"]-1,
        /* -1 for tag */tables[4]["length"]-1,
        2*
        (/* -1 for tag */tables[1]["length"]-
         1+
         /* -1 for tag */(tables[2]["length"]-1)+
         /* -1 for tag */(tables[3]["length"]-1)+
         /* -1 for tag */(tables[4]["length"]-1)+
         /* -1 for tag */(tables[5]["length"]-1)))}
    else
     {}
    
    var
     size_groups=
      2*
      (/* -1 for tag */tables[6]["length"]-
       1+
       /* -1 for tag */(tables[7]["length"]-1)+
       /* -1 for tag */(tables[8]["length"]-1)+
       /* -1 for tag */(tables[9]["length"]-1)+
       /* -1 for tag */(tables[10]["length"]-1))+
      /* -1 for tag */(tables[11]["length"]-1);
    
    if(size_groups>0&&!Common["quiet_mode"][1])
     {Printf["printf"]
       ([/* Format */0,
         [/* Int */4,
          /* Int_d */0,
          /* No_padding */0,
          /* No_precision */0,
          [/* String_literal */11,
           " additional bytes used for bindings\n",
           /* End_of_format */0]],
         "%d additional bytes used for bindings\n"],
        size_groups)}
    else
     {}
    
    Pervasives["flush"](Pervasives["stdout"]);
    if(/* -1 for tag */tables[4]["length"]-1>32768)
     {throw Table_overflow;}
    else
     {}
    
    Common["copy_chunk"](ic,oc,oci,header,/* false */0);
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
    
    return Common["copy_chunk"](ic,oc,oci,trailer,/* false */0);
    };

module["exports"]=
{"output_lexdef":output_lexdef,"Table_overflow":Table_overflow};

