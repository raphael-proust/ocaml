// Generated CODE, PLEASE EDIT WITH CARE 

var Common=require("./common.js");
var Char=require("./char.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Printf=require("./printf.js");
var Hashtbl=require("./hashtbl.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 output_auto_defs=
  function(oc,has_refill)
   {Pervasives["output_string"]
     (oc,
      "let __ocaml_lex_init_lexbuf lexbuf mem_size =\n  let pos = lexbuf.Lexing.lex_curr_pos in\n  lexbuf.Lexing.lex_mem <- Array.make mem_size (-1) ;\n  lexbuf.Lexing.lex_start_pos <- pos ;\n  lexbuf.Lexing.lex_last_pos <- pos ;\n  lexbuf.Lexing.lex_last_action <- -1\n\n");
    if(has_refill)
     {return Pervasives["output_string"]
              (oc,
               "let rec __ocaml_lex_next_char lexbuf state k =\n  if lexbuf.Lexing.lex_curr_pos >= lexbuf.Lexing.lex_buffer_len then begin\n    if lexbuf.Lexing.lex_eof_reached then\n      state lexbuf k 256\n    else begin\n      __ocaml_lex_refill (fun lexbuf ->\n\n          lexbuf.Lexing.refill_buff lexbuf ;\n          __ocaml_lex_next_char lexbuf state k)\n        lexbuf\n    end\n  end else begin\n    let i = lexbuf.Lexing.lex_curr_pos in\n    let c = lexbuf.Lexing.lex_buffer.[i] in\n    lexbuf.Lexing.lex_curr_pos <- i+1 ;\n    state lexbuf k (Char.code c)\n  end\n\n");
      }
    else
     {return Pervasives["output_string"]
              (oc,
               "let rec __ocaml_lex_next_char lexbuf =\n  if lexbuf.Lexing.lex_curr_pos >= lexbuf.Lexing.lex_buffer_len then begin\n    if lexbuf.Lexing.lex_eof_reached then\n      256\n    else begin\n      lexbuf.Lexing.refill_buff lexbuf ;\n      __ocaml_lex_next_char lexbuf\n    end\n  end else begin\n    let i = lexbuf.Lexing.lex_curr_pos in\n    let c = lexbuf.Lexing.lex_buffer.[i] in\n    lexbuf.Lexing.lex_curr_pos <- i+1 ;\n    Char.code c\n  end\n\n");
      }
    };

var
 output_pats=
  function(oc,pats)
   {return List["iter"]
            (function(p)
              {return Printf["fprintf"]
                       (oc,
                        [/* Format */0,
                         [/* Char_literal */12,
                          124,
                          [/* Int */4,
                           /* Int_d */0,
                           /* No_padding */0,
                           /* No_precision */0,
                           /* End_of_format */0]],
                         "|%d"],
                        p);
               },
             pats);
    };

var
 output_action=
  function(oc,has_refill,mems,r)
   {Common["output_memory_actions"]("    ",oc,mems);
    if(r)
     {return Printf["fprintf"]
              (oc,
               [/* Format */0,
                [/* String_literal */11,
                 "    __ocaml_lex_state",
                 [/* Int */4,
                  /* Int_d */0,
                  /* No_padding */0,
                  /* No_precision */0,
                  [/* String_literal */11,
                   " lexbuf",
                   [/* String */2,
                    /* No_padding */0,
                    [/* Char_literal */12,10,/* End_of_format */0]]]]],
                "    __ocaml_lex_state%d lexbuf%s\n"],
               r[1],
               has_refill?" k":"");
      }
    else
     {Printf["fprintf"]
       (oc,
        [/* Format */0,
         [/* String_literal */11,
          "    lexbuf.Lexing.lex_curr_pos <- lexbuf.Lexing.lex_last_pos ;\n",
          /* End_of_format */0],
         "    lexbuf.Lexing.lex_curr_pos <- lexbuf.Lexing.lex_last_pos ;\n"]);
      if(has_refill)
       {return Printf["fprintf"]
                (oc,
                 [/* Format */0,
                  [/* String_literal */11,
                   "    k lexbuf lexbuf.Lexing.lex_last_action\n",
                   /* End_of_format */0],
                  "    k lexbuf lexbuf.Lexing.lex_last_action\n"]);
        }
      else
       {return Printf["fprintf"]
                (oc,
                 [/* Format */0,
                  [/* String_literal */11,
                   "    lexbuf.Lexing.lex_last_action\n",
                   /* End_of_format */0],
                  "    lexbuf.Lexing.lex_last_action\n"]);
        }
      }
    };

var
 output_pat=
  function(oc,i)
   {if(i>=256)
     {return Printf["fprintf"]
              (oc,
               [/* Format */0,
                [/* String_literal */11,"|eof",/* End_of_format */0],
                "|eof"]);
      }
    else
     {return Printf["fprintf"]
              (oc,
               [/* Format */0,
                [/* String_literal */11,
                 "|'",
                 [/* String */2,
                  /* No_padding */0,
                  [/* Char_literal */12,39,/* End_of_format */0]]],
                "|'%s'"],
               Char["escaped"](Char["chr"](i)));
      }
    };

var
 output_clause=
  function(oc,has_refill,pats,mems,r)
   {Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,"(* ",/* End_of_format */0],
       "(* "]);
    List["iter"](output_pat(oc),pats);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11," *)\n",/* End_of_format */0],
       " *)\n"]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        "  ",
        [/* Alpha */15,[/* String_literal */11," ->\n",/* End_of_format */0]]],
       "  %a ->\n"],
      output_pats,
      pats);
    return output_action(oc,has_refill,mems,r);
    };

var
 output_default_clause=
  function(oc,has_refill,mems,r)
   {Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,"  | _ ->\n",/* End_of_format */0],
       "  | _ ->\n"]);
    return output_action(oc,has_refill,mems,r);
    };

var
 output_moves=
  function(oc,has_refill,moves)
   {var t=Hashtbl["create"](/* None */0,17);
    
    var
     add_move=
      function(i,param)
       {var m=param[1];
        
        try
         {var match=Hashtbl["find"](t,m);}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {var match=/* tuple */[0,param[2],/* [] */0];}
          else
           {throw exn;}
          }
        
        return Hashtbl["replace"]
                (t,m,/* tuple */[0,match[1],/* :: */[0,i,match[2]]]);
        };
    
    for(var i=0;i<=256;i++){add_move(i,moves[i+1])}
    
    var most_frequent=[0,/* Backtrack */0];
    
    var most_mems=[0,/* [] */0];
    
    var size=[0,0];
    
    Hashtbl["iter"]
     (function(m,param)
       {var size_m=List["length"](param[2]);
        
        if(size_m>size[1])
         {most_frequent[1]=m;most_mems[1]=param[1];return size[1]=size_m,0;}
        else
         {return 0;}
        },
      t);
    Hashtbl["iter"]
     (function(m,param)
       {if(CamlPrimitive["caml_notequal"](m,most_frequent[1]))
         {return output_clause(oc,has_refill,List["rev"](param[2]),param[1],m);
          }
        else
         {return 0;}
        },
      t);
    return output_default_clause(oc,has_refill,most_mems[1],most_frequent[1]);
    };

var
 output_tag_actions=
  function(pref,oc,mvs)
   {Pervasives["output_string"](oc,"(*");
    List["iter"]
     (function(i)
       {switch(i[0])
         {case 0:
           return Printf["fprintf"]
                   (oc,
                    [/* Format */0,
                     [/* String_literal */11,
                      " t",
                      [/* Int */4,
                       /* Int_d */0,
                       /* No_padding */0,
                       /* No_precision */0,
                       [/* String_literal */11,
                        " <- [",
                        [/* Int */4,
                         /* Int_d */0,
                         /* No_padding */0,
                         /* No_precision */0,
                         [/* String_literal */11,"] ;",/* End_of_format */0]]]]],
                     " t%d <- [%d] ;"],
                    i[1],
                    i[2]);
           
          case 1:
           return Printf["fprintf"]
                   (oc,
                    [/* Format */0,
                     [/* String_literal */11,
                      " t",
                      [/* Int */4,
                       /* Int_d */0,
                       /* No_padding */0,
                       /* No_precision */0,
                       [/* String_literal */11," <- -1 ;",/* End_of_format */0]]],
                     " t%d <- -1 ;"],
                    i[1]);
           
          }
        },
      mvs);
    Pervasives["output_string"](oc," *)\n");
    return List["iter"]
            (function(i)
              {switch(i[0])
                {case 0:
                  return Printf["fprintf"]
                          (oc,
                           [/* Format */0,
                            [/* String */2,
                             /* No_padding */0,
                             [/* Alpha */15,
                              [/* String_literal */11,
                               " <- ",
                               [/* Alpha */15,
                                [/* String_literal */11," ;\n",/* End_of_format */0]]]]],
                            "%s%a <- %a ;\n"],
                           pref,
                           Common["output_mem_access"],
                           i[1],
                           Common["output_mem_access"],
                           i[2]);
                  
                 case 1:
                  return Printf["fprintf"]
                          (oc,
                           [/* Format */0,
                            [/* String */2,
                             /* No_padding */0,
                             [/* Alpha */15,
                              [/* String_literal */11," <- -1 ;\n",/* End_of_format */0]]],
                            "%s%a <- -1 ;\n"],
                           pref,
                           Common["output_mem_access"],
                           i[1]);
                  
                 }
               },
             mvs);
    };

var
 output_trans=
  function(pref,oc,has_refill,i,trans)
   {var
     entry=
      Printf["sprintf"]
       ([/* Format */0,
         [/* String_literal */11,
          "__ocaml_lex_state",
          [/* Int */4,
           /* Int_d */0,
           /* No_padding */0,
           /* No_precision */0,
           /* End_of_format */0]],
         "__ocaml_lex_state%d"],
        i);
    
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String */2,
        /* No_padding */0,
        [/* Char_literal */12,
         32,
         [/* String */2,
          /* No_padding */0,
          [/* String_literal */11,
           " lexbuf ",
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,"= ",/* End_of_format */0]]]]]],
       "%s %s lexbuf %s= "],
      pref,
      entry,
      has_refill?"k ":"");
    switch(trans[0])
     {case 0:
       output_tag_actions("  ",oc,trans[2]);
       return Printf["fprintf"]
               (oc,
                [/* Format */0,
                 [/* String_literal */11,
                  "  ",
                  [/* String */2,
                   /* No_padding */0,
                   [/* Int */4,
                    /* Int_d */0,
                    /* No_padding */0,
                    /* No_precision */0,
                    [/* Char_literal */12,10,/* End_of_format */0]]]],
                 "  %s%d\n"],
                has_refill?"k lexbuf ":"",
                trans[1]);
       
      case 1:
       var trans$1=trans[1];
       
       if(trans$1)
        {output_tag_actions("  ",oc,trans$1[2]),
         Printf["fprintf"]
          (oc,
           [/* Format */0,
            [/* String_literal */11,
             "  lexbuf.Lexing.lex_last_pos <- lexbuf.Lexing.lex_curr_pos ;\n",
             /* End_of_format */0],
            "  lexbuf.Lexing.lex_last_pos <- lexbuf.Lexing.lex_curr_pos ;\n"]),
         Printf["fprintf"]
          (oc,
           [/* Format */0,
            [/* String_literal */11,
             "  lexbuf.Lexing.lex_last_action <- ",
             [/* Int */4,
              /* Int_d */0,
              /* No_padding */0,
              /* No_precision */0,
              [/* String_literal */11," ;\n",/* End_of_format */0]]],
            "  lexbuf.Lexing.lex_last_action <- %d ;\n"],
           trans$1[1])}
       else
        {}
       
       if(has_refill)
        {var next=Pervasives["^"](entry,"_next");
         
         Printf["fprintf"]
          (oc,
           [/* Format */0,
            [/* String_literal */11,
             "  __ocaml_lex_next_char lexbuf ",
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11," k\n",/* End_of_format */0]]],
            "  __ocaml_lex_next_char lexbuf %s k\n"],
           next),
         Printf["fprintf"]
          (oc,
           [/* Format */0,
            [/* String_literal */11,
             "and ",
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,
               " lexbuf k = function ",
               /* End_of_format */0]]],
            "and %s lexbuf k = function "],
           next)}
       else
        {Pervasives["output_string"]
          (oc,"match __ocaml_lex_next_char lexbuf with\n")}
       
       return output_moves(oc,has_refill,trans[2]);
       
      }
    };

var
 output_automata=
  function(oc,has_refill,auto)
   {output_auto_defs(oc,has_refill);
    var n=/* -1 for tag */auto["length"]-1;
    
    output_trans("let rec",oc,has_refill,0,auto[1]);
    for(var i=1;i<=n-1;i++){output_trans("\nand",oc,has_refill,i,auto[i+1])}
    
    return Pervasives["output_char"](oc,10);
    };

var
 output_entry=
  function(sourcefile,ic,oc,has_refill,tr,e)
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
           "lexbuf =\n  __ocaml_lex_init_lexbuf lexbuf ",
           [/* Int */4,
            /* Int_d */0,
            /* No_padding */0,
            /* No_precision */0,
            [/* String_literal */11,"; ",[/* Alpha */15,/* End_of_format */0]]]]]]],
       "%s %alexbuf =\n  __ocaml_lex_init_lexbuf lexbuf %d; %a"],
      e[1],
      Common["output_args"],
      e[2],
      e[3],
      Common["output_memory_actions"]("  "),
      match[2]);
    Printf["fprintf"]
     (oc,
      has_refill
       ?[/* Format */0,
         [/* String_literal */11,
          "\n  __ocaml_lex_state",
          [/* Int */4,
           /* Int_d */0,
           /* No_padding */0,
           /* No_precision */0,
           [/* String_literal */11,
            " lexbuf (fun lexbuf __ocaml_lex_result ->",
            /* End_of_format */0]]],
         "\n  __ocaml_lex_state%d lexbuf (fun lexbuf __ocaml_lex_result ->"]
       :[/* Format */0,
         [/* String_literal */11,
          "\n  let __ocaml_lex_result = __ocaml_lex_state",
          [/* Int */4,
           /* Int_d */0,
           /* No_padding */0,
           /* No_precision */0,
           [/* String_literal */11," lexbuf in",/* End_of_format */0]]],
         "\n  let __ocaml_lex_result = __ocaml_lex_state%d lexbuf in"],
      match[1]);
    Pervasives["output_string"]
     (oc,
      "\n  lexbuf.Lexing.lex_start_p <- lexbuf.Lexing.lex_curr_p;\n  lexbuf.Lexing.lex_curr_p <- {lexbuf.Lexing.lex_curr_p with\n    Lexing.pos_cnum = lexbuf.Lexing.lex_abs_pos+lexbuf.Lexing.lex_curr_pos};\n  match __ocaml_lex_result with\n");
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
        Common["output_env"](ic,oc,tr,param[2]);
        Common["copy_chunk"](ic,oc,tr,param[3],/* true */1);
        return Printf["fprintf"]
                (oc,
                 [/* Format */0,
                  [/* Char_literal */12,10,/* End_of_format */0],
                  "\n"]);
        },
      e[5]);
    Printf["fprintf"]
     (oc,
      [/* Format */0,
       [/* String_literal */11,
        '  | _ -> raise (Failure "lexing: empty token")\n',
        /* End_of_format */0],
       '  | _ -> raise (Failure "lexing: empty token")\n']);
    if(has_refill)
     {return Pervasives["output_string"](oc,"  )\n\n");}
    else
     {return Pervasives["output_string"](oc,"\n\n");}
    };

var
 output_lexdef=
  function(sourcefile,ic,oc,tr,header,rh,entry_points,transitions,trailer)
   {Common["copy_chunk"](ic,oc,tr,header,/* false */0);
    var has_refill=Common["output_refill_handler"](ic,oc,tr,rh);
    
    output_automata(oc,has_refill,transitions);
    if(entry_points)
     {Pervasives["output_string"](oc,"let rec "),
      output_entry(sourcefile,ic,oc,has_refill,tr,entry_points[1]),
      List["iter"]
       (function(e)
         {Pervasives["output_string"](oc,"and ");
          return output_entry(sourcefile,ic,oc,has_refill,tr,e);
          },
        entry_points[2]),
      Pervasives["output_string"](oc,";;\n\n")}
    else
     {}
    
    return Common["copy_chunk"](ic,oc,tr,trailer,/* false */0);
    };

module["exports"]={"output_lexdef":output_lexdef};

