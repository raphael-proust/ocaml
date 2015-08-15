[@@@warning "-a"]
module B64 :
  sig
    [@@@ocaml.text
      " Base64 is a group of similar binary-to-text encoding schemes that represent\n    binary data in an ASCII string format by translating it into a radix-64\n    representation.  It is specified in RFC 4648. "]
    val default_alphabet : string[@@ocaml.doc
                                   " A 64-character string specifying the regular Base64 alphabet. "]
    val uri_safe_alphabet : string[@@ocaml.doc
                                    " A 64-character string specifying the URI- and filename-safe Base64\n    alphabet. "]
    val decode : ?alphabet:string -> string -> string[@@ocaml.doc
                                                       " [decode s] decodes the string [s] that is encoded in base64 format.\n    Will leave trailing NULLs on the string, padding it out to a multiple\n    of 3 characters.  "]
    val encode : ?pad:bool -> ?alphabet:string -> string -> string[@@ocaml.doc
                                                                    " [encode s] encodes the string [s] into base64. If [pad] is false,\n    no trailing padding is added. "]
  end =
  struct
    let default_alphabet =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    let uri_safe_alphabet =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
    let padding = '='
    let of_char ?(alphabet= default_alphabet)  x =
      if x = padding then 0 else String.index alphabet x
    let to_char ?(alphabet= default_alphabet)  x = alphabet.[x]
    let decode ?alphabet  input =
      let length = String.length input in
      let input =
        if (length mod 4) = 0
        then input
        else input ^ (String.make (4 - (length mod 4)) padding) in
      let length = String.length input in
      let words = length / 4 in
      let padding =
        match length with
        | 0 -> 0
        | _ when (input.[length - 2]) = padding -> 2
        | _ when (input.[length - 1]) = padding -> 1
        | _ -> 0 in
      let output = Bytes.make ((words * 3) - padding) '\000' in
      for i = 0 to words - 1 do
        (let a = of_char ?alphabet (input.[(4 * i) + 0])
         and b = of_char ?alphabet (input.[(4 * i) + 1])
         and c = of_char ?alphabet (input.[(4 * i) + 2])
         and d = of_char ?alphabet (input.[(4 * i) + 3]) in
         let n = (((a lsl 18) lor (b lsl 12)) lor (c lsl 6)) lor d in
         let x = (n lsr 16) land 255
         and y = (n lsr 8) land 255
         and z = n land 255 in
         Bytes.set output ((3 * i) + 0) (char_of_int x);
         if (i <> (words - 1)) || (padding < 2)
         then Bytes.set output ((3 * i) + 1) (char_of_int y);
         if (i <> (words - 1)) || (padding < 1)
         then Bytes.set output ((3 * i) + 2) (char_of_int z))
      done;
      Bytes.unsafe_to_string output
    let encode ?(pad= true)  ?alphabet  input =
      let length = String.length input in
      let words = (length + 2) / 3 in
      let padding_len = if (length mod 3) = 0 then 0 else 3 - (length mod 3) in
      let output = Bytes.make (words * 4) '\000' in
      let get i = if i >= length then 0 else int_of_char (input.[i]) in
      for i = 0 to words - 1 do
        (let x = get ((3 * i) + 0)
         and y = get ((3 * i) + 1)
         and z = get ((3 * i) + 2) in
         let n = ((x lsl 16) lor (y lsl 8)) lor z in
         let a = (n lsr 18) land 63
         and b = (n lsr 12) land 63
         and c = (n lsr 6) land 63
         and d = n land 63 in
         Bytes.set output ((4 * i) + 0) (to_char ?alphabet a);
         Bytes.set output ((4 * i) + 1) (to_char ?alphabet b);
         Bytes.set output ((4 * i) + 2) (to_char ?alphabet c);
         Bytes.set output ((4 * i) + 3) (to_char ?alphabet d))
      done;
      for i = 1 to padding_len do
        Bytes.set output ((Bytes.length output) - i) padding
      done;
      if pad
      then Bytes.unsafe_to_string output
      else Bytes.sub_string output 0 ((Bytes.length output) - padding_len)
  end 
module Jlist :
  sig val filter_map : ('a -> 'b option) -> 'a list -> 'b list end =
  struct
    let rec filter_map (f : 'a -> 'b option) xs =
      match xs with
      | [] -> []
      | y::ys ->
          (match f y with
           | None  -> filter_map f ys
           | Some z -> z :: (filter_map f ys))
  end 
module J :
  sig
    type loc =
      {
      src: string option;
      name: string option;
      col: int;
      line: int;
      idx: int;
      fol: bool option;}
    type location =
      | Pi of loc
      | N
      | U
    type ident = Ident.t
    type label = string
    type binop =
      | Eq
      | StarEq
      | SlashEq
      | ModEq
      | PlusEq
      | MinusEq
      | LslEq
      | AsrEq
      | LsrEq
      | BandEq
      | BxorEq
      | BorEq
      | Or
      | And
      | Bor
      | Bxor
      | Band
      | EqEq
      | NotEq
      | EqEqEq
      | NotEqEq
      | Lt
      | Le
      | Gt
      | Ge
      | InstanceOf
      | In
      | Lsl
      | Lsr
      | Asr
      | Plus
      | Minus
      | Mul
      | Div
      | Mod
    type unop =
      | Not
      | Neg
      | Pl
      | Typeof
      | Void
      | Delete
      | Bnot
      | IncrA
      | DecrA
      | IncrB
      | DecrB
    type property_name =
      | PNI of string
      | PNS of string
      | PNN of float
    type property_map = (property_name* expression) list
    and expression_desc =
      | ESeq of expression* expression
      | ECond of expression* expression* expression
      | EBin of binop* expression* expression
      | EUn of unop* expression
      | ECall of expression* expression list* location
      | EAccess of expression* expression
      | EDot of expression* string
      | ENew of expression* expression list option
      | EVar of ident
      | EFun of ident option* ident list* block* location
      | EStr of string* [ `Bytes  | `Utf8 ]
      | EArr of expression option list
      | EBool of bool
      | ENum of float
      | EObj of property_map
      | EQuote of string
      | ERegexp of string* string option
    and expression =
      {
      expression_desc: expression_desc;
      comment: string option;}
    and statement_desc =
      | Block of block
      | Variable of variable_declaration list
      | Empty
      | Exp of expression
      | If of expression* statement* statement option
      | Do_while of statement* expression
      | While of expression* statement
      | For of (expression option,variable_declaration list) either*
      expression option* expression option* statement
      | ForIn of (expression,variable_declaration) either* expression*
      statement
      | Continue of label option
      | Break of label option
      | Return of expression option
      | Labelled of label* statement
      | Switch of expression* case_clause list* block option* case_clause
      list
      | Throw of expression
      | Try of block* (ident* block) option* block option
      | Fn of ident* ident list* block* location
      | Debugger
      | Comment of string
    and statement =
      {
      statement_desc: statement_desc;
      loc: location;
      comment: string option;}
    and ('left,'right) either =
      | Left of 'left
      | Right of 'right
    and variable_declaration = (ident* (expression* location) option)
    and case_clause = (expression* block)
    and block = statement list[@@ocaml.doc
                                " TODO: For efficency: block should not be a list, it should be able to \n    be concatenated in both ways "]
  end =
  struct
    type loc =
      {
      src: string option;
      name: string option;
      col: int;
      line: int;
      idx: int;
      fol: bool option;}
    type location =
      | Pi of loc
      | N
      | U
    type ident = Ident.t
    type label = string
    type binop =
      | Eq
      | StarEq
      | SlashEq
      | ModEq
      | PlusEq
      | MinusEq
      | LslEq
      | AsrEq
      | LsrEq
      | BandEq
      | BxorEq
      | BorEq
      | Or
      | And
      | Bor
      | Bxor
      | Band
      | EqEq
      | NotEq
      | EqEqEq
      | NotEqEq
      | Lt
      | Le
      | Gt
      | Ge
      | InstanceOf
      | In
      | Lsl
      | Lsr
      | Asr
      | Plus
      | Minus
      | Mul
      | Div
      | Mod
    type unop =
      | Not
      | Neg
      | Pl
      | Typeof
      | Void
      | Delete
      | Bnot
      | IncrA
      | DecrA
      | IncrB
      | DecrB
    type property_name =
      | PNI of string
      | PNS of string
      | PNN of float
    type property_map = (property_name* expression) list
    and expression_desc =
      | ESeq of expression* expression
      | ECond of expression* expression* expression
      | EBin of binop* expression* expression
      | EUn of unop* expression
      | ECall of expression* expression list* location
      | EAccess of expression* expression
      | EDot of expression* string
      | ENew of expression* expression list option
      | EVar of ident
      | EFun of ident option* ident list* block* location
      | EStr of string* [ `Bytes  | `Utf8 ]
      | EArr of expression option list
      | EBool of bool
      | ENum of float
      | EObj of property_map
      | EQuote of string
      | ERegexp of string* string option
    and statement_desc =
      | Block of block
      | Variable of variable_declaration list
      | Empty
      | Exp of expression
      | If of expression* statement* statement option
      | Do_while of statement* expression
      | While of expression* statement
      | For of (expression option,variable_declaration list) either*
      expression option* expression option* statement
      | ForIn of (expression,variable_declaration) either* expression*
      statement
      | Continue of label option
      | Break of label option
      | Return of expression option
      | Labelled of label* statement
      | Switch of expression* case_clause list* block option* case_clause
      list
      | Throw of expression
      | Try of block* (ident* block) option* block option
      | Fn of ident* ident list* block* location
      | Debugger
      | Comment of string
    and expression =
      {
      expression_desc: expression_desc;
      comment: string option;}
    and statement =
      {
      statement_desc: statement_desc;
      loc: location;
      comment: string option;}
    and ('left,'right) either =
      | Left of 'left
      | Right of 'right
    and variable_declaration = (ident* (expression* location) option)
    and case_clause = (expression* block)
    and block = statement list[@@ocaml.doc
                                " TODO: For efficency: block should not be a list, it should be able to \n    be concatenated in both ways "]
  end 
module Util :
  sig val string_of_fmt : (Format.formatter -> 'a -> unit) -> 'a -> string
  end =
  struct
    let string_of_fmt (f : Format.formatter -> 'a -> unit) v =
      let buf = Buffer.create 37 in
      let fmt = Format.formatter_of_buffer buf in
      let () = f fmt v; Format.pp_print_flush fmt () in Buffer.contents buf
  end 
module Lambda_util :
  sig
    val string_of_lambda : Lambda.lambda -> string
    val string_of_primitive : Lambda.primitive -> string
  end =
  struct
    let string_of_fmt (f : Format.formatter -> 'a -> unit) v =
      let buf = Buffer.create 37 in
      let fmt = Format.formatter_of_buffer buf in
      let () = f fmt v; Format.pp_print_flush fmt () in Buffer.contents buf
    let string_of_lambda = string_of_fmt Printlambda.lambda
    let string_of_primitive = string_of_fmt Printlambda.primitive
  end 
module Jident :
  sig
    val is_js : Ident.t -> bool
    val create_js : string -> Ident.t
    val create : string -> Ident.t
  end =
  struct
    let js_flag = 8
    let is_js (i : Ident.t) = (i.flags land js_flag) <> 0
    let create_js (name : string) =
      ({ name; flags = js_flag; stamp = 0 } : Ident.t)
    let create = Ident.create
  end 
module rec
  Gen_of_env:sig
               type key =
                 | GetGlobal of Ident.t* int* Env.t
                 | CamlPrimitive of Primitive.description* J.expression list
               val get_exp : key -> J.expression
               val required_modules : unit -> J.block
               val query_type : Ident.t -> Env.t -> string
               val add_built_in_module : string -> unit
               val reset : unit -> unit
             end =
  struct
    module E = J_helper.Exp
    module S = J_helper.Stmt
    type env_value =
      | Visit of Types.signature_item list
      | BuiltIn
    let cached_tbl: (Ident.t,env_value) Hashtbl.t = Hashtbl.create 31
    let reset () = Hashtbl.clear cached_tbl[@@ocaml.doc
                                             " For each compilation we need reset to make it re-entrant "]
    let add_built_in_module name =
      Hashtbl.replace cached_tbl (Ident.create_persistent name) BuiltIn
    let get_name (serializable_sigs : Types.signature_item list) (pos : int)
      =
      let ident =
        match List.nth serializable_sigs pos with
        | Types.Sig_value (i,_)|Sig_module (i,_,_) -> i
        | Sig_typext (i,_,_) -> i
        | Sig_modtype (i,_) -> i
        | Sig_class (i,_,_) -> i
        | Sig_class_type (i,_,_) -> i
        | Sig_type (i,_,_) -> i in
      ident.name[@@ocaml.doc " Used in [Pgetglobal] "]
    type key =
      | GetGlobal of Ident.t* int* Env.t
      | CamlPrimitive of Primitive.description* J.expression list
    let query (prim : Primitive.description) args =
      (let module X = struct exception NA end in
         try
           let v =
             match prim with
             | { prim_name = ("caml_gc_stat"|"caml_gc_quick_stat" as x);_} ->
                 E.arr ~comment:x
                   [E.int ~comment:"stat-record" 0;
                   E.float ~comment:"minor_words" 0.;
                   E.float ~comment:"promoted_words" 0.;
                   E.float ~comment:"major_words" 0.;
                   E.int ~comment:"minor_collections" 0;
                   E.int ~comment:"major_collections" 0;
                   E.int ~comment:"heap_words" 0;
                   E.int ~comment:"heap_chunks" 0;
                   E.int ~comment:"live_words" 0;
                   E.int ~comment:"live_blocks" 0;
                   E.int ~comment:"free_words" 0;
                   E.int ~comment:"free_blocks" 0;
                   E.int ~comment:"larget_blocks" 0;
                   E.int ~comment:"fragments" 0;
                   E.int ~comment:"compactions" 0;
                   E.int ~comment:"top_heap_words" 0;
                   E.int ~comment:"stack_size" 0]
             | { prim_name = "caml_abs_float";_} ->
                 E.call (E.math "abs") args
             | { prim_name = "caml_acos_float";_} ->
                 E.call (E.math "acos") args
             | { prim_name = "caml_add_float";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Plus e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_div_float";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Div e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_sub_float";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Minus e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_eq_float";_} ->
                 (match args with
                  | e0::e1::[] -> E.eqeqeq e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_ge_float";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Ge e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_gt_float";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Gt e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_tan_float";_} ->
                 E.call (E.math "tan") args
             | { prim_name = "caml_tanh_float";_} ->
                 E.call (E.math "tanh") args
             | { prim_name = "caml_asin_float";_} ->
                 E.call (E.math "asin") args
             | { prim_name = "caml_atan2_float";_} ->
                 E.call (E.math "atan2") args
             | { prim_name = "caml_atan_float";_} ->
                 E.call (E.math "atan") args
             | { prim_name = "caml_ceil_float";_} ->
                 E.call (E.math "ceil") args
             | { prim_name = "caml_cos_float";_} ->
                 E.call (E.math "cos") args
             | { prim_name = "caml_cosh_float";_} ->
                 E.call (E.math "cosh") args
             | { prim_name = "caml_exp_float";_} ->
                 E.call (E.math "exp") args
             | { prim_name = "caml_sin_float";_} ->
                 E.call (E.math "sin") args
             | { prim_name = "caml_sinh_float";_} ->
                 E.call (E.math "sinh") args
             | { prim_name = "caml_sqrt_float";_} ->
                 E.call (E.math "sqrt") args
             | { prim_name = "caml_float_of_int";_} ->
                 (match args with | e::[] -> e | _ -> assert false)
             | { prim_name = "caml_floor_float";_} ->
                 E.call (E.math "floor") args
             | { prim_name = "caml_array_append";_} ->
                 (match args with
                  | e0::e1::[] -> E.call (E.access e0 (E.str "concat")) [e1]
                  | _ -> assert false)
             | { prim_name = "caml_array_concat";_} -> raise X.NA
             | {
                 prim_name =
                   ("caml_array_get"|"caml_array_get_addr"
                    |"caml_array_get_float"|"caml_array_unsafe_get"
                    |"caml_array_unsafe_get_float");_}
                 ->
                 (match args with
                  | e0::e1::[] -> E.access e0 e1
                  | _ -> assert false)
             | {
                 prim_name =
                   ("caml_array_set"|"caml_array_set_addr"
                    |"caml_array_set_float"|"caml_array_unsafe_set"
                    |"caml_array_unsafe_set_addr"
                    |"caml_array_unsafe_set_float");_}
                 ->
                 (match args with
                  | e0::e1::e2::[] -> E.eq (E.access e0 e1) e2
                  | _ -> assert false)
             | { prim_name = "caml_int32_add";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Plus e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_int32_div";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Bor (E.bin Div e0 e1) (E.int 0)
                  | _ -> assert false)
             | { prim_name = "caml_int32_mul";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Mul e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_int32_of_int";_} ->
                 (match args with | e::[] -> e | _ -> assert false)
             | { prim_name = ("caml_int32_of_float"|"caml_int_of_float");_}
                 ->
                 (match args with
                  | e::[] -> E.bin Bor e (E.int 0)
                  | _ -> assert false)
             | { prim_name = ("caml_int32_to_float"|"caml_int32_to_int");_}
                 -> (match args with | e::[] -> e | _ -> assert false)
             | { prim_name = "caml_int32_sub";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Minus e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_int32_xor";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Bxor e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_int32_and";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Band e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_int32_or";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Bor e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_le_float";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Le e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_lt_float";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Lt e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_log_float";_} ->
                 E.call (E.math "log") args
             | { prim_name = "caml_log10_float";_} ->
                 E.call (E.math "log10") args
             | { prim_name = "caml_log1p_float";_} ->
                 E.call (E.math "log1p") args
             | { prim_name = "caml_neg_float";_} ->
                 (match args with | e::[] -> E.un Neg e | _ -> assert false)
             | { prim_name = "caml_neq_float";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin NotEqEq e0 e1
                  | _ -> assert false)
             | { prim_name = "caml_mul_float";_} ->
                 (match args with
                  | e0::e1::[] -> E.bin Mul e0 e1
                  | _ -> assert false)
             | {
                 prim_name =
                   ("caml_gc_compaction"|"caml_gc_full_major"|"caml_gc_major"
                    |"caml_gc_major_slice"|"caml_gc_minor"|"caml_gc_set");_}
                 -> E.unit ()
             | { prim_name = "caml_gc_counters";_} ->
                 E.arr [E.int 0; E.float 0.; E.float 0.; E.float 0.]
             | { prim_name = "caml_gc_get";_} ->
                 E.arr
                   [E.int 0;
                   E.int ~comment:"minor_heap_size" 0;
                   E.int ~comment:"major_heap_increment" 0;
                   E.int ~comment:"space_overhead" 0;
                   E.int ~comment:"verbose" 0;
                   E.int ~comment:"max_overhead" 0;
                   E.int ~comment:"stack_limit" 0;
                   E.int ~comment:"allocation_policy" 0]
             | _ -> raise X.NA in
           Some v
         with | X.NA  -> None : J.expression option)[@@ocaml.doc
                                                      " \nThere are two things we need consider:\n1.  For some primitives we can replace caml-primitive with js primitives directly\n2.  For some standard library functions, we prefer to replace with javascript primitives\n    For example [Pervasives[\"^\"] -> ^]\n    We can collect all mli files in OCaml and replace it with an efficient javascript runtime\n"]
    let get_exp key =
      (match key with
       | GetGlobal ((id : Ident.t),(pos : int),env) ->
           let v =
             match Hashtbl.find cached_tbl id with
             | exception Not_found  ->
                 (match Env.find_module (Pident id) env with
                  | { md_type = Mty_signature signature;_} ->
                      let serializable_sigs =
                        List.filter
                          (fun x  ->
                             match x with
                             | Types.Sig_typext _|Sig_module _|Sig_class _ ->
                                 true
                             | Sig_value (_,{ val_kind = Val_prim _ }) ->
                                 false
                             | Sig_value _ -> true
                             | _ -> false) signature in
                      (Hashtbl.add cached_tbl id (Visit serializable_sigs);
                       get_name serializable_sigs pos)
                  | _ -> assert false)
             | Visit serializable_sigs -> get_name serializable_sigs pos
             | BuiltIn  -> assert false in
           E.access (E.var id) (E.str v)
       | CamlPrimitive (prim,args) ->
           (match query prim args with
            | None  ->
                (add_built_in_module J_helper.prim;
                 E.call (E.prim prim.prim_name) args)
            | Some x -> x) : J.expression)[@@ocaml.doc
                                            " Given an module name and position, find its corresponding name  "]
    let string_of_value_description id =
      Util.string_of_fmt (Printtyp.value_description id)
    let rec dump_summary fmt (x : Env.summary) =
      match x with
      | Env_empty  -> ()
      | Env_value (s,id,value_description) ->
          (dump_summary fmt s;
           Printtyp.value_description id fmt value_description)
      | _ -> ()
    let query_type (id : Ident.t) (env : Env.t) =
      match Env.find_value (Pident id) env with
      | exception Not_found  -> ""
      | { val_type } ->
          Util.string_of_fmt (!Oprint.out_type)
            (Printtyp.tree_of_type_scheme val_type)
    let required_modules () =
      Hashtbl.fold
        (fun (id : Ident.t)  ->
           fun _  ->
             fun block  ->
               (S.variable id
                  ~loc_exp:((E.call (E.js_var "require")
                               [E.str
                                  (Printf.sprintf "./%s.js"
                                     (String.uncapitalize id.name))]), N))
               :: block) cached_tbl ([] : J.block)
  end
 and
  Compile_primitive:sig
                      val jsop_of_comp : Lambda.comparison -> J.binop
                      val compile_primitive :
                        Lambda.primitive -> J.expression list -> J.expression
                      val compile_const :
                        Lambda.structured_constant -> J.expression
                    end =
  struct
    let jsop_of_comp (cmp : Lambda.comparison) =
      (match cmp with
       | Ceq  -> EqEqEq
       | Cneq  -> NotEqEq
       | Clt  -> Lt
       | Cgt  -> Gt
       | Cle  -> Le
       | Cge  -> Ge : J.binop)
    module E = J_helper.Exp
    let comment_of_tag_info (x : Lambda.tag_info) =
      match x with
      | Constructor n -> Some n
      | Tuple  -> Some "tuple"
      | Variant x -> Some ("`" ^ x)
      | Record  -> Some "record"
      | NA  -> None
    let compile_primitive (prim : Lambda.primitive)
      (args : J.expression list) =
      (match prim with
       | Pmakeblock (tag,tag_info,_) ->
           E.arr ?comment:(comment_of_tag_info tag_info) ((E.int tag) ::
             args)
       | Pfield i ->
           (match args with
            | e::[] -> E.access e (E.int (i + 1))
            | _ -> E.unknown_primitive prim)
       | Pnegint |Pnegbint _|Pnegfloat  ->
           (match args with
            | e::[] -> E.un Neg e
            | _ -> E.unknown_primitive prim)
       | Pnot  ->
           (match args with
            | e::[] -> E.un Not e
            | _ -> E.unknown_primitive prim)
       | Poffsetint n ->
           (match args with
            | e::[] -> E.bin Plus (E.int n) e
            | _ -> E.unknown_primitive prim)
       | Poffsetref 1 ->
           (match args with
            | e::[] -> E.un IncrA (E.access e (E.float 0.))
            | _ -> E.unknown_primitive prim)
       | Poffsetref (-1) ->
           (match args with
            | e::[] -> E.un DecrA (E.access e (E.float 0.))
            | _ -> E.unknown_primitive prim)
       | Poffsetref n ->
           (match args with
            | e::[] -> E.bin PlusEq (E.access e (E.float 0.)) (E.int n)
            | _ -> E.unknown_primitive prim)
       | Paddint |Paddbint _|Paddfloat  ->
           (match args with
            | e1::e2::[] -> E.bin Plus e1 e2
            | _ -> E.unknown_primitive prim)
       | Psubint |Psubbint _|Psubfloat  ->
           (match args with
            | e1::e2::[] -> E.bin Minus e1 e2
            | _ -> E.unknown_primitive prim)
       | Pmulint |Pmulbint _|Pmulfloat  ->
           (match args with
            | e1::e2::[] -> E.bin Mul e1 e2
            | _ -> E.unknown_primitive prim)
       | Pdivfloat |Pdivint |Pdivbint _ ->
           (match args with
            | e1::e2::[] -> E.bin Div e1 e2
            | _ -> E.unknown_primitive prim)
       | Pmodint |Pmodbint _ ->
           (match args with
            | e1::e2::[] -> E.bin Mod e1 e2
            | _ -> E.unknown_primitive prim)
       | Plslint |Plslbint _ ->
           (match args with
            | e1::e2::[] -> E.bin Lsl e1 e2
            | _ -> E.unknown_primitive prim)
       | Plsrint |Plsrbint _ ->
           (match args with
            | e1::e2::[] -> E.bin Lsr e1 e2
            | _ -> E.unknown_primitive prim)
       | Pasrint |Pasrbint _ ->
           (match args with
            | e1::e2::[] -> E.bin Asr e1 e2
            | _ -> E.unknown_primitive prim)
       | Pandint |Pandbint _ ->
           (match args with
            | e1::e2::[] -> E.bin Band e1 e2
            | _ -> E.unknown_primitive prim)
       | Porint |Porbint _ ->
           (match args with
            | e1::e2::[] -> E.bin Bor e1 e2
            | _ -> E.unknown_primitive prim)
       | Pxorint |Pxorbint _ ->
           (match args with
            | e1::e2::[] -> E.bin Bxor e1 e2
            | _ -> E.unknown_primitive prim)
       | Psequand  ->
           (match args with
            | e1::e2::[] -> E.bin And e1 e2
            | _ -> E.unknown_primitive prim)
       | Psequor  ->
           (match args with
            | e1::e2::[] -> E.bin Or e1 e2
            | _ -> E.unknown_primitive prim)
       | Pisout  ->
           (match args with
            | range::e::[] -> E.bin Lt range (E.bin Lsr e (E.float 0.))
            | _ -> E.unknown_primitive prim)
       | Pidentity  ->
           (match args with | e::[] -> e | _ -> E.unknown_primitive prim)
       | Pignore  ->
           (match args with | e::[] -> e | _ -> E.unknown_primitive prim)
       | Pbintcomp (_,cmp)|Pfloatcomp cmp|Pintcomp cmp ->
           let op: J.binop = jsop_of_comp cmp in
           (match args with
            | e1::e2::[] -> E.bin op e1 e2
            | _ -> E.unknown_primitive prim)
       | Pgetglobal i ->
           if Ident.global i then E.var i else E.unknown_primitive prim
       | Praise _raise_kind -> E.unknown_primitive prim
       | Prevapply _ ->
           (match args with
            | arg::f::[] -> E.call f [arg]
            | _ -> assert false)
       | Pdirapply _ ->
           (match args with
            | f::arg::[] -> E.call f [arg]
            | _ -> E.unknown_primitive prim)
       | Ploc kind -> E.unknown_primitive prim
       | Pintoffloat  ->
           (match args with | e::[] -> e | _ -> E.unknown_primitive prim)
       | Psetfield (i,_) ->
           (match args with
            | e0::e1::[] ->
                E.seq (E.eq (E.access e0 (E.int (i + 1))) e1) (E.unit ())
            | _ -> E.unknown_primitive prim)
       | Pfloatfield i ->
           (match args with
            | e::[] -> E.access e (E.int i)
            | _ -> E.unknown_primitive prim)
       | Psetfloatfield i ->
           (match args with
            | e::e0::[] -> E.seq (E.eq (E.access e (E.int i)) e0) (E.unit ())
            | _ -> E.unknown_primitive prim)
       | Parraylength _|Pstringlength  ->
           (match args with
            | e::[] -> E.access e (E.str "length")
            | _ -> E.unknown_primitive prim)
       | Pmakearray i ->
           (match i with
            | Pgenarray |Paddrarray |Pintarray |Pfloatarray  -> E.arr args)
       | Parrayrefu _|Parrayrefs _|Pstringrefu |Pstringrefs  ->
           (match args with
            | e::e1::[] -> E.access e e1
            | _ -> E.unknown_primitive prim)
       | Parraysetu _|Parraysets _|Pstringsetu |Pstringsets  ->
           (match args with
            | e::e0::e1::[] -> E.seq (E.eq (E.access e e0) e1) (E.unit ())
            | _ -> E.unknown_primitive prim)
       | Pbintofint _|Pintofbint _|Pfloatofint  ->
           (match args with | e::[] -> e | _ -> E.unknown_primitive prim)
       | Pabsfloat  ->
           (match args with
            | e::[] -> E.call (E.access (E.js_var "Math") (E.str "abs")) [e]
            | _ -> E.unknown_primitive prim)
       | Pccall prim -> Gen_of_env.get_exp (CamlPrimitive (prim, args))
       | Pisint  ->
           (match args with
            | e::[] -> let open E in bin EqEqEq (typeof e) (E.str "number")
            | _ -> E.unknown_primitive prim)
       | Pctconst ct ->
           (match ct with
            | Big_endian  -> if Sys.big_endian then E.true_ else E.false_
            | Word_size  -> E.int Sys.word_size
            | Ostype_unix  -> if Sys.unix then E.true_ else E.false_
            | Ostype_win32  -> if Sys.win32 then E.true_ else E.false_
            | Ostype_cygwin  -> if Sys.cygwin then E.true_ else E.false_)
       | Psetglobal _ -> E.unknown_primitive prim
       | Pcvtbint (_boxed_integer_source,_boxed_integer_dest) ->
           (match args with | e0::[] -> e0 | _ -> E.unknown_primitive prim)
       | Pduprecord (_,_)|Plazyforce |Pbittest |Pbigarrayref (_,_,_,_)
         |Pbigarrayset (_,_,_,_)|Pbigarraydim _|Pstring_load_16 _
         |Pstring_load_32 _|Pstring_load_64 _|Pstring_set_16 _|Pstring_set_32
         _|Pstring_set_64 _|Pbigstring_load_16 _|Pbigstring_load_32 _
         |Pbigstring_load_64 _|Pbigstring_set_16 _|Pbigstring_set_32 _
         |Pbigstring_set_64 _|Pbswap16 |Pbbswap _|Pint_as_pointer  ->
           E.unknown_primitive prim : J.expression)
    let comment_of_pointer_info (x : Lambda.pointer_info) =
      match x with
      | NullConstructor x -> Some x
      | NullVariant x -> Some x
      | NAPointer  -> None
    let rec compile_const (x : Lambda.structured_constant) =
      (match x with
       | Const_base c ->
           (match c with
            | Const_int i -> E.int i
            | Const_char i -> E.int (Char.code i)
            | Const_int32 i -> E.float (Int32.to_float i)
            | Const_int64 i -> E.float (Int64.to_float i)
            | Const_nativeint i -> E.float (Nativeint.to_float i)
            | Const_float f -> E.float (float_of_string f)
            | Const_string (i,_) -> E.str i)
       | Const_pointer (c,pointer_info) ->
           E.int ?comment:(comment_of_pointer_info pointer_info) c
       | Const_block (tag,tag_info,xs) ->
           E.arr ((E.int ?comment:(comment_of_tag_info tag_info) tag) ::
             (List.map (fun x  -> compile_const x) xs))
       | Const_float_array ars ->
           E.arr (List.map (fun x  -> E.float (float_of_string x)) ars)
       | Const_immstring s -> E.str s : J.expression)[@@ocaml.doc
                                                       " TODO: check "]
  end and
       Gen_util:sig
                  type output = (J.block* J.expression option)
                  type st =
                    | EffectCall
                    | Declare of J.ident
                    | NeedValue
                    | Assign of
                    J.ident[@ocaml.doc
                             " when use [Assign], var is not needed, since it's already declared \n      make sure all [Assigs] are declared first, otherwise you are creating global variables\n   "]
                  val gen : ?name:string -> unit -> Ident.t
                  val exports :
                    Translmod.exports list ->
                      J.expression list -> J.statement
                  val block_of_output : output -> J.block
                  val is_pure : Lambda.lambda -> bool
                  module Ops : sig val (++) : output -> output -> output end
                  val dump_output : output -> out_channel -> unit
                  val pp_output : output -> Pp.t -> unit[@@ocaml.doc
                                                          " \n    - not should_return, has name\n      assign the value \n    - should_return, has name\n      impossible\n    - not should_return, no name\n      when prue ignoe\n      otherwise make  expression statement\n    - should_return, no name\n      return it \n "]
                  val handle_name_tail :
                    st -> bool -> Lambda.lambda -> J.expression -> output
                  [@@ocaml.doc
                    " \n    - not should_return, has name\n      assign the value \n    - should_return, has name\n      impossible\n    - not should_return, no name\n      when prue ignoe\n      otherwise make  expression statement\n    - should_return, no name\n      return it \n "]
                  val handle_block_return :
                    st ->
                      bool ->
                        Lambda.lambda -> J.block -> J.expression -> output
                  val concat : output list -> output
                end =
       struct
         module E = J_helper.Exp
         module S = J_helper.Stmt
         type output = (J.block* J.expression option)
         type st =
           | EffectCall
           | Declare of J.ident
           | NeedValue
           | Assign of J.ident
         let rec is_pure (lam : Lambda.lambda) =
           match lam with
           | Lvar _|Lconst _|Lfunction _ -> true
           | Lprim (primitive,args) ->
               (List.for_all is_pure args) &&
                 ((match primitive with
                   | Psetfield _|Psetglobal _ -> false
                   | Pfield _|Pgetglobal _|Pmakeblock _ -> true
                   | _ -> false))
           | Llet (_,_,arg,body) -> (is_pure arg) && (is_pure body)
           | _ -> false
         let handle_name_tail name should_return lam (exp : J.expression) =
           (match (name, should_return) with
            | (EffectCall ,false ) ->
                if is_pure lam then ([], None) else ([], (Some exp))
            | (EffectCall ,true ) ->
                ([J_helper.Stmt.return (Some exp)], None)
            | (Declare n,false ) ->
                ([J_helper.Stmt.variable n ~loc_exp:(exp, N)], None)
            | (Assign n,false ) -> ([J_helper.Stmt.assign n exp], None)
            | ((Declare _|Assign _),true ) -> ([S.unknown_lambda lam], None)
            | (NeedValue ,_) -> ([], (Some exp)) : output)
         let handle_block_return st should_return lam block exp =
           (match (st, should_return) with
            | (Declare n,false ) ->
                ((block @ [J_helper.Stmt.variable n ~loc_exp:(exp, N)]),
                  None)
            | (Assign n,false ) ->
                ((block @ [J_helper.Stmt.assign n exp]), None)
            | ((Declare _|Assign _),true ) -> ([S.unknown_lambda lam], None)
            | (EffectCall ,false ) -> (block, (Some exp))
            | (EffectCall ,true ) ->
                ((block @ [J_helper.Stmt.return (Some exp)]), None)
            | (NeedValue ,_) -> (block, (Some exp)) : output)
         let gen ?(name= "$js")  () = Jident.create name
         let exports (idents : Translmod.exports list)
           (lams : J.expression list) =
           (let properties: J.property_map =
              List.map2
                (fun (i : Translmod.exports)  ->
                   fun (e : J.expression)  ->
                     let n = match i with | Id i -> i.name | Prim i -> i in
                     ((J.PNS n), e)) idents lams in
            S.exp
              (E.bin Eq (E.access (E.js_var "module") (E.str "exports"))
                 (E.obj properties)) : J.statement)
         let unit_val = E.float 0.
         let return_unit: J.block =
           [J_helper.Stmt.return (Some (E.float 0.))]
         let rec is_js_pure (x : J.expression) =
           match x.expression_desc with
           | J.EVar _ -> true
           | J.ENum _ -> true
           | J.EArr xs ->
               List.for_all
                 (function | None  -> true | Some x -> is_js_pure x) xs
           | _ -> false
         let statement_of_opt_expr (x : J.expression option) =
           (match x with
            | None  -> J_helper.Stmt.empty ()
            | Some x when is_js_pure x -> J_helper.Stmt.empty ()
            | Some x -> J_helper.Stmt.exp x : J.statement)
         let block_of_output (x : output) =
           (match x with | (block,opt) -> block @ [statement_of_opt_expr opt] : 
           J.block)
         let append (x : output) (y : output) =
           (match (x, y) with
            | (([],None ),y) -> y
            | (([],Some _),([],None )) -> x
            | (([],Some e1),([],Some e2)) ->
                if is_js_pure e1
                then ([], (Some e2))
                else ([], (Some (E.seq e1 e2)))
            | ((block1,opt_e1),(block2,opt_e2)) ->
                ((block1 @ ((statement_of_opt_expr opt_e1) :: block2)),
                  opt_e2) : output)
         module Ops =
           struct
             let (++) (x : output) (y : output) = (append x y : output)
           end
         let concat (xs : output list) =
           (match xs with
            | [] -> ([], None)
            | y::ys -> List.fold_left append y ys : output)
         let pp_output ((block,exp) : output) p =
           let cxt = Pp_js.empty in
           let cxt = let open Pp_js in program cxt p block in
           ignore (Pp_js.program cxt p [statement_of_opt_expr exp])
         let dump_output ((block,exp) : output) (oc : out_channel) =
           let cxt = Pp_js.empty in
           let p = Pp.to_out_channel oc in
           let cxt = let open Pp_js in program cxt p block in
           ignore (Pp_js.program cxt p [statement_of_opt_expr exp])
       end and
            J_helper:sig
                       val prim : string
                       module Exp :
                       sig
                         type t = J.expression
                         val mk : ?comment:string -> J.expression_desc -> t
                         val access : ?comment:string -> t -> t -> t
                         val var : ?comment:string -> J.ident -> t
                         val str : ?comment:string -> string -> t
                         val efun :
                           ?comment:string ->
                             ?name:J.ident ->
                               ?loc:J.location ->
                                 J.ident list -> J.block -> t
                         val econd : ?comment:string -> t -> t -> t -> t
                         val int : ?comment:string -> int -> t
                         val float : ?comment:string -> float -> t
                         val eqeq : ?comment:string -> t -> t -> t
                         val eq : ?comment:string -> t -> t -> t
                         val eqeqeq : ?comment:string -> t -> t -> t
                         val typeof : ?comment:string -> t -> t
                         val bin : ?comment:string -> J.binop -> t -> t -> t
                         val un : ?comment:string -> J.unop -> t -> t
                         val call :
                           ?comment:string ->
                             ?loc:J.location -> t -> t list -> t
                         val arr : ?comment:string -> t list -> t
                         val seq : ?comment:string -> t -> t -> t
                         val obj : ?comment:string -> J.property_map -> t
                         val true_ : t
                         val false_ : t
                         val unknown_lambda :
                           ?comment:string -> Lambda.lambda -> t
                         val unknown_primitive :
                           ?comment:string -> Lambda.primitive -> t
                         val unit : ?comment:string -> unit -> t[@@ocaml.doc
                                                                  " [unit] in ocaml will be compiled into [0]  in js"]
                         val js_var : ?comment:string -> string -> t
                         val undefined : ?comment:string -> unit -> t
                         val math : ?comment:string -> string -> t[@@ocaml.doc
                                                                    " [math \"abs\"] --> Math[\"abs\"] "]
                         [@@ocaml.doc
                           " [prim \"xx\"] ->  CamlPrimtivie[\"xx\"] "]
                         val prim : ?comment:string -> string -> t[@@ocaml.doc
                                                                    " [prim \"xx\"] ->  CamlPrimtivie[\"xx\"] "]
                       end
                       module Stmt :
                       sig
                         type t = J.statement
                         val unit : t
                         val mk :
                           ?comment:string ->
                             ?loc:J.location -> J.statement_desc -> t
                         val empty :
                           ?comment:string -> ?loc:J.location -> unit -> t
                         val comment : ?loc:J.location -> string -> t
                         val throw :
                           ?comment:string ->
                             ?loc:J.location -> J.expression -> t
                         val if_ :
                           ?comment:string ->
                             ?loc:J.location ->
                               ?else_:t -> J.expression -> t -> t
                         val block :
                           ?comment:string -> ?loc:J.location -> J.block -> t
                         val switch :
                           ?comment:string ->
                             ?loc:J.location ->
                               ?others:J.case_clause list ->
                                 ?default:J.block ->
                                   J.expression -> J.case_clause list -> t
                         val variable :
                           ?comment:string ->
                             ?loc:J.location ->
                               ?loc_exp:(J.expression* J.location) ->
                                 Ident.t -> t
                         val assign :
                           ?comment:string ->
                             ?loc:J.location -> J.ident -> J.expression -> t
                         val assign_unit :
                           ?comment:string -> ?loc:J.location -> J.ident -> t
                         val declare_unit :
                           ?comment:string -> ?loc:J.location -> J.ident -> t
                         val while_ :
                           ?comment:string ->
                             ?loc:J.location -> J.expression -> t -> t
                         val for_ :
                           ?comment:string ->
                             ?loc:J.location ->
                               ?pred:J.expression ->
                                 ?step:J.expression ->
                                   (J.expression option,J.variable_declaration
                                                          list)
                                     J.either -> t -> t
                         val try_ :
                           ?comment:string ->
                             ?loc:J.location ->
                               ?with_:(J.ident* J.block) ->
                                 ?finally:J.block -> J.block -> t
                         val exp :
                           ?comment:string ->
                             ?loc:J.location -> J.expression -> t
                         val return :
                           ?comment:string ->
                             ?loc:J.location -> J.expression option -> t
                         val unknown_lambda :
                           ?comment:string ->
                             ?loc:J.location -> Lambda.lambda -> t
                         val return_unit :
                           ?comment:string -> ?loc:J.location -> unit -> t
                         [@@ocaml.doc
                           " for ocaml function which returns unit \n      it will be compiled into [return 0] in js "]
                       end
                     end =
            struct
              [@@@ocaml.text " A module help construct js ast "]
              let prim = "CamlPrimitive"
              module Exp =
                struct
                  type t = J.expression
                  let mk ?comment  exp =
                    ({ expression_desc = exp; comment } : t)
                  let access ?comment  e0 e1 =
                    ({ expression_desc = (EAccess (e0, e1)); comment } : 
                    t)
                  let var ?comment  id =
                    ({ expression_desc = (EVar id); comment } : t)
                  let str ?comment  s =
                    ({ expression_desc = (EStr (s, `Utf8)); comment } : 
                    t)
                  let efun ?comment  ?name  ?(loc= J.N)  params block =
                    ({
                       expression_desc = (EFun (name, params, block, loc));
                       comment
                     } : t)
                  let econd ?comment  b t f =
                    ({ expression_desc = (ECond (b, t, f)); comment } : 
                    t)
                  let int ?comment  i =
                    ({ expression_desc = (ENum (float i)); comment } : 
                    t)
                  let float ?comment  i =
                    ({ expression_desc = (ENum i); comment } : t)
                  let eqeq ?comment  e0 e1 =
                    ({ expression_desc = (EBin (EqEq, e0, e1)); comment } : 
                    t)
                  let eq ?comment  e0 e1 =
                    ({ expression_desc = (EBin (Eq, e0, e1)); comment } : 
                    t)
                  let eqeqeq ?comment  e0 e1 =
                    ({ expression_desc = (EBin (EqEqEq, e0, e1)); comment } : 
                    t)
                  let typeof ?comment  e =
                    ({ expression_desc = (EUn (Typeof, e)); comment } : 
                    t)
                  let bin ?comment  op e0 e1 =
                    ({ expression_desc = (EBin (op, e0, e1)); comment } : 
                    t)
                  let un ?comment  op e =
                    ({ expression_desc = (EUn (op, e)); comment } : t)
                  let call ?comment  ?(loc= J.N)  e0 args =
                    ({ expression_desc = (ECall (e0, args, loc)); comment } : 
                    t)
                  let arr ?comment  es =
                    ({
                       expression_desc =
                         (EArr (List.map (fun x  -> Some x) es));
                       comment
                     } : t)
                  let seq ?comment  e0 e1 =
                    ({ expression_desc = (ESeq (e0, e1)); comment } : 
                    t)
                  let obj ?comment  properties =
                    ({ expression_desc = (EObj properties); comment } : 
                    t)
                  let true_ = var (Jident.create_js "true")
                  let false_ = var (Jident.create_js "false")
                  let unknown_lambda ?(comment= "unknown") 
                    (lam : Lambda.lambda) =
                    (str ~comment (Lambda_util.string_of_lambda lam) : 
                    t)
                  let unknown_primitive ?(comment= "unknown") 
                    (p : Lambda.primitive) =
                    (str ~comment (Lambda_util.string_of_primitive p) : 
                    t)
                  let unit ?comment  () = float ?comment 0.
                  let js_var ?comment  (v : string) =
                    var ?comment (Jident.create_js v)
                  let undefined ?comment  () = js_var ?comment "undefined"
                  let math ?comment  v =
                    access ?comment (js_var "Math") (str v)
                  let prim ?comment  v =
                    access ?comment (js_var prim) (str v)
                end
              module Stmt =
                struct
                  type t = J.statement
                  let unit: t =
                    {
                      J.loc = N;
                      statement_desc = (J.Return (Some (Exp.float 0.)));
                      comment = None
                    }
                  let mk ?comment  ?(loc= J.N)  statement_desc =
                    ({ J.loc = loc; statement_desc; comment } : t)
                  let comment ?(loc= J.N)  str =
                    ({ loc; statement_desc = (Comment str); comment = None } : 
                    t)
                  let empty ?comment  ?(loc= J.N)  () =
                    ({ loc; statement_desc = Empty; comment } : t)
                  let throw ?comment  ?(loc= J.N)  v =
                    ({ loc; statement_desc = (J.Throw v); comment } : 
                    t)
                  let if_ ?comment  ?(loc= J.N)  ?else_  e then_ =
                    ({ loc; statement_desc = (If (e, then_, else_)); comment
                     } : t)
                  let block ?comment  ?(loc= J.N)  block =
                    ({ loc; statement_desc = (Block block); comment } : 
                    t)
                  let exp ?comment  ?(loc= J.N)  e =
                    ({ loc; statement_desc = (Exp e); comment } : t)
                  let switch ?comment  ?(loc= J.N)  ?(others= [])  ?default 
                    e clauses =
                    ({
                       loc;
                       statement_desc =
                         (J.Switch (e, clauses, default, others));
                       comment
                     } : t)
                  let return ?comment  ?(loc= J.N)  e =
                    ({ loc; statement_desc = (Return e); comment } : 
                    t)
                  let variable ?comment  ?(loc= J.N)  ?loc_exp  (v : Ident.t)
                    =
                    ({
                       statement_desc = (J.Variable [(v, loc_exp)]);
                       loc;
                       comment
                     } : t)
                  let assign ?comment  ?(loc= J.N)  id e =
                    ({
                       loc;
                       statement_desc = (J.Exp (Exp.bin Eq (Exp.var id) e));
                       comment
                     } : t)
                  let assign_unit ?comment  ?(loc= J.N)  id =
                    ({
                       loc;
                       statement_desc =
                         (J.Exp (Exp.bin Eq (Exp.var id) (Exp.float 0.)));
                       comment
                     } : t)
                  let declare_unit ?comment  ?(loc= J.N)  id =
                    ({
                       loc;
                       statement_desc =
                         (J.Variable [(id, (Some ((Exp.float 0.), N)))]);
                       comment
                     } : t)
                  let while_ ?comment  ?(loc= J.N)  e st =
                    ({ loc; statement_desc = (While (e, st)); comment } : 
                    t)
                  let for_ ?comment  ?(loc= J.N)  ?pred  ?step  init block =
                    ({
                       loc;
                       statement_desc = (For (init, pred, step, block));
                       comment
                     } : t)
                  let try_ ?comment  ?(loc= J.N)  ?with_  ?finally  body =
                    ({
                       loc;
                       statement_desc = (Try (body, with_, finally));
                       comment
                     } : t)
                  let unknown_lambda ?(comment= "unknown")  ?loc 
                    (lam : Lambda.lambda) =
                    (exp @@
                       (Exp.str ~comment (Lambda_util.string_of_lambda lam)) : 
                    t)
                  let return_unit ?comment  ?(loc= J.N)  () =
                    ({
                       loc;
                       statement_desc = (J.Return (Some (Exp.float 0.)));
                       comment
                     } : t)
                end
            end and
                 Compile_lambda:sig
                                  [@@@ocaml.text " Main entry "]
                                  val compile :
                                    Env.t -> Lambda.lambda -> Gen_util.output
                                  val lambda_as_module :
                                    bool ->
                                      Env.t ->
                                        string -> Lambda.lambda -> unit
                                end =
                 struct
                   open Gen_util.Ops
                   module E = J_helper.Exp
                   module S = J_helper.Stmt
                   exception Not_a_module
                   type jbl_label = int
                   module HandlerMap =
                     Map.Make(struct
                                type t = jbl_label
                                let compare x y = compare (x : t) y
                              end)
                   type value = {
                     exit_id: Ident.t;
                     args: Ident.t list;}
                   let add_jmps (ls : (jbl_label* value) list) m =
                     List.fold_left
                       (fun acc  -> fun (l,s)  -> HandlerMap.add l s acc) m
                       ls
                   [@@@ocaml.text
                     " delegate to the callee to generate expression \n      Invariant: [output] should return a trailing expression\n   "]
                   type cxt =
                     {
                     st: Gen_util.st;
                     should_return: bool;
                     jmp_table: value HandlerMap.t;
                     env: Env.t;}
                   let rec flat_catches acc (x : Lambda.lambda) =
                     (match x with
                      | Lstaticcatch (l,(code,bindings),handler) ->
                          flat_catches ((code, handler, bindings) :: acc) l
                      | _ -> (acc, x) : ((int* Lambda.lambda* Ident.t list)
                                          list* Lambda.lambda))[@@ocaml.doc
                                                                 " assume outer is [Lstaticcatch] "]
                   [@@@ocaml.text
                     " TODO:\n    for expression generation, \n    name, should_return  is not needed,\n    only jmp_table and env needed\n "]
                   let rec compile_lambda
                     ({ st; should_return; jmp_table; env } as cxt)
                     (lam : Lambda.lambda) =
                     (match lam with
                      | Lvar id ->
                          (Gen_util.handle_name_tail st should_return lam) @@
                            (J_helper.Exp.var id)
                      | Lconst c ->
                          (Gen_util.handle_name_tail st should_return lam) @@
                            (Compile_primitive.compile_const c)
                      | Lfunction (kind,params,body) ->
                          (Gen_util.handle_name_tail st should_return lam) @@
                            (J_helper.Exp.efun params
                               (Gen_util.block_of_output @@
                                  (compile_lambda
                                     {
                                       cxt with
                                       st = EffectCall;
                                       should_return = true;
                                       jmp_table = HandlerMap.empty
                                     } body)))
                      | Lprim (Pfield n,(Lprim (Pgetglobal id,[]))::[]) ->
                          (Gen_util.handle_name_tail st should_return lam) @@
                            (Gen_of_env.get_exp
                               (GetGlobal (id, n, (cxt.env))))
                      | Lprim (Praise _raise_kind,e::[]) ->
                          (match compile_lambda
                                   {
                                     cxt with
                                     should_return = false;
                                     st = NeedValue
                                   } e
                           with
                           | (b,Some v) ->
                               ((b @ [S.throw v]), (Some (E.undefined ())))
                           | (_,None ) -> assert false)
                      | Lprim (prim,args_lambda) ->
                          let (args_block,args_expr) =
                            List.split @@
                              (List.map
                                 (fun (x : Lambda.lambda)  ->
                                    match compile_lambda
                                            {
                                              cxt with
                                              st = NeedValue;
                                              should_return = false
                                            } x
                                    with
                                    | (a,Some b) -> (a, b)
                                    | _ -> assert false) args_lambda) in
                          let args_code = List.concat args_block in
                          let exp =
                            Compile_primitive.compile_primitive prim
                              args_expr in
                          Gen_util.handle_block_return st should_return lam
                            args_code exp
                      | Llet (kind,id,arg,body) ->
                          (compile_lambda
                             {
                               cxt with
                               st = (Declare id);
                               should_return = false
                             } arg)
                            ++ (compile_lambda cxt body)
                      | Lletrec (id_args,body) ->
                          (Gen_util.concat
                             (List.map
                                (fun (ident,arg)  ->
                                   compile_lambda
                                     {
                                       cxt with
                                       st = (Declare ident);
                                       should_return = false
                                     } arg) id_args))
                            ++ (compile_lambda cxt body)
                      | Lsequence (l1,l2) ->
                          (compile_lambda
                             {
                               cxt with
                               st = EffectCall;
                               should_return = false
                             } l1)
                            ++ (compile_lambda cxt l2)
                      | Lifthenelse (p,t_br,f_br) ->
                          (match compile_lambda
                                   {
                                     cxt with
                                     st = NeedValue;
                                     should_return = false
                                   } p
                           with
                           | (b,Some e) ->
                               (match (st, should_return) with
                                | (NeedValue ,_) ->
                                    (match ((compile_lambda cxt t_br),
                                             (compile_lambda cxt f_br))
                                     with
                                     | (([],Some out1),([],Some out2)) ->
                                         (b,
                                           (Some
                                              (J_helper.Exp.econd e out1 out2)))
                                     | _ ->
                                         let v = Gen_util.gen () in
                                         (match ((compile_lambda
                                                    {
                                                      cxt with
                                                      st = (Declare v)
                                                    } t_br),
                                                  (compile_lambda
                                                     {
                                                       cxt with
                                                       st = (Declare v)
                                                     } f_br))
                                          with
                                          | (out1,out2) ->
                                              ((b @
                                                  [let open J_helper.Stmt in
                                                     if_ e
                                                       (block
                                                          (Gen_util.block_of_output
                                                             out1))
                                                       ~else_:(block
                                                                 (Gen_util.block_of_output
                                                                    out2))]),
                                                (Some (E.var v)))))
                                | _ ->
                                    ((b @
                                        [let open J_helper.Stmt in
                                           if_ e
                                             (block
                                                (Gen_util.block_of_output @@
                                                   (compile_lambda cxt t_br)))
                                             ~else_:(block
                                                       (Gen_util.block_of_output
                                                          @@
                                                          (compile_lambda cxt
                                                             f_br)))]), None))
                           | _ -> assert false)
                      | Lstringswitch (l,cases,default) ->
                          (match compile_lambda
                                   {
                                     cxt with
                                     should_return = false;
                                     st = NeedValue
                                   } l
                           with
                           | (v,Some e) ->
                               let aux st =
                                 v @
                                   [let open J_helper.Stmt in
                                      switch e
                                        (List.map
                                           (fun (x,lam)  ->
                                              ((E.str x),
                                                (Gen_util.block_of_output @@
                                                   (compile_lambda
                                                      { cxt with st } lam))))
                                           cases)
                                        ?default:(match default with
                                                  | None  -> None
                                                  | Some lam ->
                                                      Some
                                                        (Gen_util.block_of_output
                                                           @@
                                                           (compile_lambda
                                                              { cxt with st }
                                                              lam)))] in
                               (match st with
                                | NeedValue  ->
                                    let v = Gen_util.gen () in
                                    ((aux (Declare v)), (Some (E.var v)))
                                | _ -> ((aux st), None))
                           | _ -> assert false)
                      | Lswitch
                          (lam,{ sw_numconsts; sw_consts; sw_numblocks;
                                 sw_blocks; sw_failaction = default })
                          ->
                          let aux st (v : J.expression)
                            (table : (int* Lambda.lambda) list) default =
                            [let open J_helper.Stmt in
                               switch v
                                 (List.map
                                    (fun (x,lam)  ->
                                       ((E.int x),
                                         (Gen_util.block_of_output @@
                                            (compile_lambda { cxt with st }
                                               lam)))) table)
                                 ?default:(match default with
                                           | None  -> None
                                           | Some lam ->
                                               Some
                                                 (Gen_util.block_of_output @@
                                                    (compile_lambda
                                                       { cxt with st } lam)))] in
                          let aux2 st =
                            match (sw_numconsts, sw_numblocks,
                                    (compile_lambda
                                       {
                                         cxt with
                                         should_return = false;
                                         st = NeedValue
                                       } lam))
                            with
                            | (0,_,(block,Some e)) ->
                                aux st (E.access e (E.float 0.)) sw_blocks
                                  default
                            | (_,0,(block,Some e)) ->
                                aux st e sw_consts default
                            | (_,_,(block,Some e)) ->
                                let aux e =
                                  [S.if_
                                     (E.eqeqeq (E.typeof e)
                                        (let open E in str "number"))
                                     (S.block (aux st e sw_consts None))
                                     ~else_:(S.block
                                               (aux st
                                                  (E.access e (E.float 0.))
                                                  sw_blocks default : 
                                               J.block))] in
                                (match e.expression_desc with
                                 | J.EVar _ -> aux e
                                 | _ ->
                                     let v = Gen_util.gen () in
                                     (S.variable v ~loc_exp:(e, N)) ::
                                       (aux (E.var v)))
                            | (_,_,(_,None )) -> assert false in
                          (match st with
                           | NeedValue  ->
                               let v = Gen_util.gen () in
                               (((J_helper.Stmt.variable v) ::
                                 (aux2 (Assign v))), (Some (E.var v)))
                           | _ -> ((aux2 st), None))
                      | Lstaticraise (i,largs) ->
                          (match HandlerMap.find i cxt.jmp_table with
                           | { exit_id; args } ->
                               let args_code =
                                 Gen_util.concat @@
                                   (List.map2
                                      (fun (x : Lambda.lambda)  ->
                                         fun (arg : Ident.t)  ->
                                           match x with
                                           | Lvar id ->
                                               ([S.variable arg
                                                   ~loc_exp:((E.var id), N)],
                                                 None)
                                           | _ ->
                                               compile_lambda
                                                 {
                                                   cxt with
                                                   st = (Declare arg);
                                                   should_return = false
                                                 } x) largs
                                      (args : Ident.t list)) in
                               args_code ++
                                 ([J_helper.Stmt.assign exit_id (E.int i)],
                                   (Some (E.undefined ())))
                           | exception Not_found  ->
                               ([S.unknown_lambda ~comment:"error" lam],
                                 None))
                      | Lstaticcatch _ ->
                          let (code_table,body) = flat_catches [] lam in
                          let exit_id = Gen_util.gen ~name:"exit" () in
                          let code_jmps =
                            List.map
                              (fun (i,_,bindings)  ->
                                 (i, { exit_id; args = bindings }))
                              code_table in
                          let aux st jmp_table =
                            [S.switch (E.var exit_id)
                               (List.map
                                  (fun (i,handler,_)  ->
                                     ((E.int i),
                                       (Gen_util.block_of_output @@
                                          (compile_lambda
                                             { cxt with st; jmp_table }
                                             handler)))) code_table)] in
                          let jmp_table = add_jmps code_jmps jmp_table in
                          (([S.variable exit_id], None) ++
                             (compile_lambda { cxt with jmp_table } body))
                            ++
                            ((match st with
                              | NeedValue  ->
                                  let v = Gen_util.gen () in
                                  (((S.variable v) ::
                                    (aux (Assign v) jmp_table)),
                                    (Some (E.var v)))
                              | _ -> ((aux st jmp_table), None)))
                      | Lwhile (p,body) ->
                          (match compile_lambda
                                   {
                                     cxt with
                                     st = NeedValue;
                                     should_return = false
                                   } p
                           with
                           | (block,Some e) ->
                               let block =
                                 block @
                                   [S.while_ e
                                      (S.block
                                         (Gen_util.block_of_output @@
                                            (compile_lambda
                                               {
                                                 cxt with
                                                 st = EffectCall;
                                                 should_return = false
                                               } body)))] in
                               (match (st, should_return) with
                                | (Declare x,_) ->
                                    ((block @ [J_helper.Stmt.declare_unit x]),
                                      None)
                                | (Assign x,_) ->
                                    ((block @ [J_helper.Stmt.assign_unit x]),
                                      None)
                                | (EffectCall ,true ) ->
                                    ((block @ [S.return_unit ()]), None)
                                | (EffectCall ,_) -> (block, None)
                                | (NeedValue ,_) ->
                                    (block, (Some (E.unit ()))))
                           | _ -> assert false)
                      | Lfor (id,start,finish,direction,body) ->
                          let block =
                            match ((compile_lambda
                                      {
                                        cxt with
                                        st = NeedValue;
                                        should_return = false
                                      } start),
                                    (compile_lambda
                                       {
                                         cxt with
                                         st = NeedValue;
                                         should_return = false
                                       } finish))
                            with
                            | ((b1,Some e1),(b2,Some e2)) ->
                                b1 @
                                  (b2 @
                                     [(let (cmp,inc) =
                                         match direction with
                                         | Upto  -> (J.Le, J.IncrA)
                                         | Downto  -> (J.Ge, J.DecrA) in
                                       let open J_helper.Stmt in
                                         for_
                                           (Right [(id, (Some (e1, J.N)))])
                                           ~pred:(E.bin cmp (E.var id) e2)
                                           ~step:(E.un inc (E.var id))
                                           (block
                                              (Gen_util.block_of_output @@
                                                 (compile_lambda
                                                    {
                                                      cxt with
                                                      should_return = false;
                                                      st = EffectCall
                                                    } body))))])
                            | _ -> assert false in
                          (match st with
                           | EffectCall  -> (block, None)
                           | Declare x ->
                               ((block @ [J_helper.Stmt.declare_unit x]),
                                 None)
                           | Assign x ->
                               ((block @ [J_helper.Stmt.assign_unit x]),
                                 None)
                           | NeedValue  -> (block, (Some (E.unit ()))))
                      | Lassign (id,lambda) ->
                          let block =
                            match compile_lambda
                                    {
                                      cxt with
                                      st = NeedValue;
                                      should_return = false
                                    } lambda
                            with
                            | (b,Some v) -> b @ [J_helper.Stmt.assign id v]
                            | _ -> assert false in
                          (match (st, should_return) with
                           | (EffectCall ,false ) -> (block, None)
                           | (EffectCall ,true ) ->
                               ((block @ [S.return_unit ()]), None)
                           | ((Declare _|Assign _),true ) ->
                               ([S.unknown_lambda lam], None)
                           | (Declare x,false ) ->
                               ((block @ [J_helper.Stmt.declare_unit x]),
                                 None)
                           | (Assign x,false ) ->
                               ((block @ [J_helper.Stmt.assign_unit x]),
                                 None)
                           | (NeedValue ,_) -> (block, (Some (E.unit ()))))
                      | Ltrywith (lam,id,catch) ->
                          let aux st =
                            let b = compile_lambda { cxt with st } lam in
                            [S.try_
                               ~with_:(id,
                                        (Gen_util.block_of_output @@
                                           (compile_lambda { cxt with st }
                                              catch)))
                               (Gen_util.block_of_output b)] in
                          (match st with
                           | NeedValue  ->
                               let v = Gen_util.gen () in
                               (((S.variable v) :: (aux (Assign v))),
                                 (Some (E.var v)))
                           | _ -> ((aux st), None))
                      | Lapply (fn,args_lambda,_) ->
                          (match compile_lambda
                                   {
                                     cxt with
                                     st = NeedValue;
                                     should_return = false
                                   } fn
                           with
                           | (_,None ) -> assert false
                           | (fn_code,Some fn) ->
                               let (args_code,args) =
                                 List.split @@
                                   (List.map
                                      (fun (x : Lambda.lambda)  ->
                                         match compile_lambda
                                                 {
                                                   cxt with
                                                   st = NeedValue;
                                                   should_return = false
                                                 } x
                                         with
                                         | (a,Some b) -> (a, b)
                                         | _ -> assert false) args_lambda) in
                               let args_code = List.concat args_code in
                               let exp = E.call fn args in
                               Gen_util.handle_block_return st should_return
                                 lam (fn_code @ args_code) exp)
                      | Lsend (meth_kind,lam1,lam2,lams,loc) ->
                          (match meth_kind with
                           | Public |Cached |Self  ->
                               ([S.unknown_lambda lam], (Some (E.unit ()))))
                      | Levent (lam,_lam_event) -> compile_lambda cxt lam
                      | Lifused (_,lam) -> compile_lambda cxt lam : Gen_util.output)
                     [@@ocaml.text
                       " TODO:\n    for expression generation, \n    name, should_return  is not needed,\n    only jmp_table and env needed\n "]
                   type group =
                     | Single of (Lambda.let_kind* Ident.t* Lambda.lambda)
                     | Recursive of (Ident.t* Lambda.lambda) list
                     | Nop of Lambda.lambda
                   let compile_group env (x : group) =
                     (match x with
                      | Single (kind,id,lam) ->
                          compile_lambda
                            {
                              st = (Declare id);
                              should_return = false;
                              jmp_table = HandlerMap.empty;
                              env
                            } lam
                      | Recursive id_lams ->
                          (id_lams |>
                             (List.map
                                (fun (id,lam)  ->
                                   compile_lambda
                                     {
                                       st = (Declare id);
                                       should_return = false;
                                       jmp_table = HandlerMap.empty;
                                       env
                                     } lam)))
                            |> Gen_util.concat
                      | Nop lam ->
                          compile_lambda
                            {
                              st = EffectCall;
                              should_return = false;
                              jmp_table = HandlerMap.empty;
                              env
                            } lam : Gen_util.output)
                   let rec flat (acc : group list) (lam : Lambda.lambda) =
                     (match lam with
                      | Llet (str,id,arg,body) ->
                          flat ((Single (str, id, arg)) :: acc) body
                      | Lletrec (bind_args,body) ->
                          flat
                            ((Recursive
                                (List.map (fun (id,arg)  -> (id, arg))
                                   bind_args)) :: acc) body
                      | Lsequence (l,r) -> flat (flat acc l) r
                      | x -> (Nop x) :: acc : group list)
                   let compile env lam =
                     (let exports = Translmod.get_export_identifiers () in
                      let () = Translmod.reset () in
                      let () = Gen_of_env.reset () in
                      let export_idents =
                        exports |>
                          (Jlist.filter_map
                             (fun (t : Translmod.exports)  ->
                                match t with | Id id -> Some id | _ -> None)) in
                      let lam =
                        (Optimizer.simplify_lets export_idents) @@
                          (Simplif.simplify_exits lam) in
                      match (lam : Lambda.lambda) with
                      | Lprim (Psetglobal id,biglambda::[]) ->
                          (match flat [] biglambda with
                           | (Nop (Lprim
                               (Pmakeblock (_,_,_),lambda_exports)))::rest ->
                               let defs =
                                 ((rest |> List.rev) |>
                                    (List.map
                                       (fun group  -> compile_group env group)))
                                   |> Gen_util.concat in
                               let (statements,expressions) =
                                 List.split @@
                                   (List.map
                                      (fun lam  ->
                                         match compile_lambda
                                                 {
                                                   st = NeedValue;
                                                   should_return = false;
                                                   jmp_table =
                                                     HandlerMap.empty;
                                                   env
                                                 } lam
                                         with
                                         | (block,Some e) -> (block, e)
                                         | (_,_) -> assert false)
                                      lambda_exports) in
                               let js: Gen_util.output =
                                 (((([J_helper.Stmt.comment
                                        "Generated CODE, PLEASE EDIT WITH CARE "],
                                      None) ++
                                      ((Gen_of_env.required_modules ()),
                                        None))
                                     ++ ((List.concat statements), None))
                                    ++ defs)
                                   ++
                                   ([Gen_util.exports exports expressions],
                                     None) in
                               js
                           | _ -> raise Not_a_module)
                      | _ -> raise Not_a_module : Gen_util.output)[@@ocaml.doc
                                                                    " Actually simplify_lets is kind of global optimization since it requires you to know whether \n    it's used or not \n"]
                   let lambda_as_module raw env filename
                     (lam : Lambda.lambda) =
                     let out =
                       open_out ((Filename.chop_extension filename) ^ ".js") in
                     let js = compile env lam in
                     let () = Gen_util.dump_output js out in close_out out
                   let () =
                     Printlambda.serialize_raw_js := (lambda_as_module true)
                 end and
                      Js_pp_util:sig val string_of_number : float -> string
                                 end =
                      struct
                        let string_of_number v =
                          if v = infinity
                          then "Infinity"
                          else
                            if v = neg_infinity
                            then "-Infinity"
                            else
                              if v <> v
                              then "NaN"
                              else
                                (let vint = int_of_float v in
                                 if (float_of_int vint) = v
                                 then
                                   let rec div n i =
                                     if (n <> 0) && ((n mod 10) = 0)
                                     then div (n / 10) (succ i)
                                     else
                                       if i > 2
                                       then Printf.sprintf "%de%d" n i
                                       else string_of_int vint in
                                   div vint 0
                                 else
                                   (let s1 = Printf.sprintf "%.12g" v in
                                    if v = (float_of_string s1)
                                    then s1
                                    else
                                      (let s2 = Printf.sprintf "%.15g" v in
                                       if v = (float_of_string s2)
                                       then s2
                                       else Printf.sprintf "%.18g" v)))
                      end and
                           Json:sig
                                  type t =
                                    [ `Null  | `Bool of bool 
                                    | `Float of float  | `String of string 
                                    | `A of t list 
                                    | `O of (string* t) list ]
                                  val pp : Pp.t -> t -> unit
                                end =
                           struct
                             type t =
                               [ `Null  | `Bool of bool  | `Float of float 
                               | `String of string  | `A of t list 
                               | `O of (string* t) list ]
                             let array_str1 =
                               Array.init 256
                                 (fun i  -> String.make 1 (Char.chr i))
                             let array_conv =
                               Array.init 16
                                 (fun i  ->
                                    String.make 1 ("0123456789abcdef".[i]))
                             let pp_string f s =
                               Pp.string f "\"";
                               (let l = String.length s in
                                for i = 0 to l - 1 do
                                  (let c = s.[i] in
                                   match c with
                                   | '"' -> Pp.string f "\\\""
                                   | '\\' -> Pp.string f "\\\\"
                                   | '\n' -> Pp.string f "\\n"
                                   | '\000'..'\031' ->
                                       let c = Char.code c in
                                       (Pp.string f "\\u00";
                                        Pp.string f
                                          (Array.unsafe_get array_conv
                                             (c lsr 4));
                                        Pp.string f
                                          (Array.unsafe_get array_conv
                                             (c land 15)))
                                   | _ ->
                                       Pp.string f
                                         (Array.unsafe_get array_str1
                                            (Char.code c)))
                                done;
                                Pp.string f "\"")
                             let rec json f =
                               (function
                                | `Null -> Pp.string f "null"
                                | `Bool (true ) -> Pp.string f "true"
                                | `Bool (false ) -> Pp.string f "false"
                                | `Float v ->
                                    let s = Js_pp_util.string_of_number v in
                                    Pp.string f s
                                | `String s -> pp_string f s
                                | `A l ->
                                    (Pp.start_group f 1;
                                     Pp.string f "[";
                                     element_list f l;
                                     Pp.string f "]";
                                     Pp.end_group f)
                                | `O l ->
                                    (Pp.start_group f 1;
                                     Pp.string f "{";
                                     property_name_and_value_list f l;
                                     Pp.string f "}";
                                     Pp.end_group f) : t -> unit)
                             and property_name_and_value_list f l =
                               match l with
                               | [] -> ()
                               | (s,e)::[] ->
                                   (Pp.start_group f 0;
                                    pp_string f s;
                                    Pp.string f ":";
                                    Pp.break f;
                                    json f e;
                                    Pp.end_group f)
                               | (s,e)::r ->
                                   (Pp.start_group f 0;
                                    pp_string f s;
                                    Pp.string f ":";
                                    Pp.break f;
                                    json f e;
                                    Pp.end_group f;
                                    Pp.string f ",";
                                    Pp.break f;
                                    property_name_and_value_list f r)
                             and element_list f el =
                               match el with
                               | [] -> ()
                               | e::[] ->
                                   (Pp.start_group f 0;
                                    json f e;
                                    Pp.end_group f)
                               | e::r ->
                                   (Pp.start_group f 0;
                                    json f e;
                                    Pp.end_group f;
                                    Pp.string f ",";
                                    Pp.break f;
                                    element_list f r)
                             let pp = json
                           end and
                                Optimizer:sig
                                            val simplify_lets :
                                              Ident.t list ->
                                                Lambda.lambda ->
                                                  Lambda.lambda
                                          end =
                                struct
                                  open Asttypes
                                  open Lambda
                                  exception Real_reference
                                  let rec eliminate_ref id =
                                    function
                                    | Lvar v as lam ->
                                        if Ident.same v id
                                        then raise Real_reference
                                        else lam
                                    | Lconst cst as lam -> lam
                                    | Lapply (e1,el,loc) ->
                                        Lapply
                                          ((eliminate_ref id e1),
                                            (List.map (eliminate_ref id) el),
                                            loc)
                                    | Lfunction (kind,params,body) as lam ->
                                        if
                                          IdentSet.mem id
                                            (free_variables lam)
                                        then raise Real_reference
                                        else lam
                                    | Llet (str,v,e1,e2) ->
                                        Llet
                                          (str, v, (eliminate_ref id e1),
                                            (eliminate_ref id e2))
                                    | Lletrec (idel,e2) ->
                                        Lletrec
                                          ((List.map
                                              (fun (v,e)  ->
                                                 (v, (eliminate_ref id e)))
                                              idel), (eliminate_ref id e2))
                                    | Lprim (Pfield 0,(Lvar v)::[]) when
                                        Ident.same v id -> Lvar id
                                    | Lprim (Psetfield (0,_),(Lvar v)::e::[])
                                        when Ident.same v id ->
                                        Lassign (id, (eliminate_ref id e))
                                    | Lprim (Poffsetref delta,(Lvar v)::[])
                                        when Ident.same v id ->
                                        Lassign
                                          (id,
                                            (Lprim
                                               ((Poffsetint delta),
                                                 [Lvar id])))
                                    | Lprim (p,el) ->
                                        Lprim
                                          (p,
                                            (List.map (eliminate_ref id) el))
                                    | Lswitch (e,sw) ->
                                        Lswitch
                                          ((eliminate_ref id e),
                                            {
                                              sw_numconsts =
                                                (sw.sw_numconsts);
                                              sw_consts =
                                                (List.map
                                                   (fun (n,e)  ->
                                                      (n,
                                                        (eliminate_ref id e)))
                                                   sw.sw_consts);
                                              sw_numblocks =
                                                (sw.sw_numblocks);
                                              sw_blocks =
                                                (List.map
                                                   (fun (n,e)  ->
                                                      (n,
                                                        (eliminate_ref id e)))
                                                   sw.sw_blocks);
                                              sw_failaction =
                                                (Misc.may_map
                                                   (eliminate_ref id)
                                                   sw.sw_failaction)
                                            })
                                    | Lstringswitch (e,sw,default) ->
                                        Lstringswitch
                                          ((eliminate_ref id e),
                                            (List.map
                                               (fun (s,e)  ->
                                                  (s, (eliminate_ref id e)))
                                               sw),
                                            (Misc.may_map (eliminate_ref id)
                                               default))
                                    | Lstaticraise (i,args) ->
                                        Lstaticraise
                                          (i,
                                            (List.map (eliminate_ref id) args))
                                    | Lstaticcatch (e1,i,e2) ->
                                        Lstaticcatch
                                          ((eliminate_ref id e1), i,
                                            (eliminate_ref id e2))
                                    | Ltrywith (e1,v,e2) ->
                                        Ltrywith
                                          ((eliminate_ref id e1), v,
                                            (eliminate_ref id e2))
                                    | Lifthenelse (e1,e2,e3) ->
                                        Lifthenelse
                                          ((eliminate_ref id e1),
                                            (eliminate_ref id e2),
                                            (eliminate_ref id e3))
                                    | Lsequence (e1,e2) ->
                                        Lsequence
                                          ((eliminate_ref id e1),
                                            (eliminate_ref id e2))
                                    | Lwhile (e1,e2) ->
                                        Lwhile
                                          ((eliminate_ref id e1),
                                            (eliminate_ref id e2))
                                    | Lfor (v,e1,e2,dir,e3) ->
                                        Lfor
                                          (v, (eliminate_ref id e1),
                                            (eliminate_ref id e2), dir,
                                            (eliminate_ref id e3))
                                    | Lassign (v,e) ->
                                        Lassign (v, (eliminate_ref id e))
                                    | Lsend (k,m,o,el,loc) ->
                                        Lsend
                                          (k, (eliminate_ref id m),
                                            (eliminate_ref id o),
                                            (List.map (eliminate_ref id) el),
                                            loc)
                                    | Levent (l,ev) ->
                                        Levent ((eliminate_ref id l), ev)
                                    | Lifused (v,e) ->
                                        Lifused (v, (eliminate_ref id e))
                                  let beta_reduce params body args =
                                    List.fold_left2
                                      (fun l  ->
                                         fun param  ->
                                           fun arg  ->
                                             Llet (Strict, param, arg, l))
                                      body params args
                                  let simplify_lets
                                    (export_defs : Ident.t list) lam =
                                    let optimize =
                                      (!Clflags.native_code) ||
                                        (not (!Clflags.debug)) in
                                    let occ: (Ident.t,int ref) Hashtbl.t =
                                      Hashtbl.create 83 in
                                    let count_var v =
                                      try !(Hashtbl.find occ v)
                                      with | Not_found  -> 0
                                    and bind_var bv v =
                                      let r = ref 0 in
                                      Hashtbl.add occ v r; Tbl.add v r bv
                                    and use_var bv v n =
                                      try
                                        let r = Tbl.find v bv in
                                        r := ((!r) + n)
                                      with
                                      | Not_found  ->
                                          (try
                                             let r = Hashtbl.find occ v in
                                             r := ((!r) + 2)
                                           with | Not_found  -> ()) in
                                    let rec count bv =
                                      function
                                      | Lconst cst -> ()
                                      | Lvar v -> use_var bv v 1
                                      | Lapply
                                          (Lfunction
                                           (Curried ,params,body),args,_)
                                          when
                                          optimize &&
                                            ((List.length params) =
                                               (List.length args))
                                          ->
                                          count bv
                                            (beta_reduce params body args)
                                      | Lapply
                                          (Lfunction
                                           (Tupled ,params,body),(Lprim
                                           (Pmakeblock _,args))::[],_)
                                          when
                                          optimize &&
                                            ((List.length params) =
                                               (List.length args))
                                          ->
                                          count bv
                                            (beta_reduce params body args)
                                      | Lapply (l1,ll,_) ->
                                          (count bv l1;
                                           List.iter (count bv) ll)
                                      | Lfunction (kind,params,l) ->
                                          count Tbl.empty l
                                      | Llet (str,v,Lvar w,l2) when optimize
                                          ->
                                          (count (bind_var bv v) l2;
                                           use_var bv w (count_var v))
                                      | Llet (str,v,l1,l2) ->
                                          (count (bind_var bv v) l2;
                                           if
                                             (str = Strict) ||
                                               ((count_var v) > 0)
                                           then count bv l1)
                                      | Lletrec (bindings,body) ->
                                          (List.iter
                                             (fun (v,l)  -> count bv l)
                                             bindings;
                                           count bv body)
                                      | Lprim (p,ll) ->
                                          List.iter (count bv) ll
                                      | Lswitch (l,sw) ->
                                          (count_default bv sw;
                                           count bv l;
                                           List.iter
                                             (fun (_,l)  -> count bv l)
                                             sw.sw_consts;
                                           List.iter
                                             (fun (_,l)  -> count bv l)
                                             sw.sw_blocks)
                                      | Lstringswitch (l,sw,d) ->
                                          (count bv l;
                                           List.iter
                                             (fun (_,l)  -> count bv l) sw;
                                           (match d with
                                            | Some d ->
                                                (match sw with
                                                 | []|_::[] -> count bv d
                                                 | _ ->
                                                     (count bv d; count bv d))
                                            | None  -> ()))
                                      | Lstaticraise (i,ls) ->
                                          List.iter (count bv) ls
                                      | Lstaticcatch (l1,(i,_),l2) ->
                                          (count bv l1; count bv l2)
                                      | Ltrywith (l1,v,l2) ->
                                          (count bv l1; count bv l2)
                                      | Lifthenelse (l1,l2,l3) ->
                                          (count bv l1;
                                           count bv l2;
                                           count bv l3)
                                      | Lsequence (l1,l2) ->
                                          (count bv l1; count bv l2)
                                      | Lwhile (l1,l2) ->
                                          (count Tbl.empty l1;
                                           count Tbl.empty l2)
                                      | Lfor (_,l1,l2,dir,l3) ->
                                          (count bv l1;
                                           count bv l2;
                                           count Tbl.empty l3)
                                      | Lassign (v,l) -> count bv l
                                      | Lsend (_,m,o,ll,_) ->
                                          List.iter (count bv) (m :: o :: ll)
                                      | Levent (l,_) -> count bv l
                                      | Lifused (v,l) ->
                                          if (count_var v) > 0
                                          then count bv l
                                    and count_default bv sw =
                                      match sw.sw_failaction with
                                      | None  -> ()
                                      | Some al ->
                                          let nconsts =
                                            List.length sw.sw_consts
                                          and nblocks =
                                            List.length sw.sw_blocks in
                                          if
                                            (nconsts < sw.sw_numconsts) &&
                                              (nblocks < sw.sw_numblocks)
                                          then (count bv al; count bv al)
                                          else
                                            (assert
                                               ((nconsts < sw.sw_numconsts)
                                                  ||
                                                  (nblocks < sw.sw_numblocks));
                                             count bv al) in
                                    count Tbl.empty lam;
                                    (let subst = Hashtbl.create 83 in
                                     let mklet (kind,v,e1,e2) =
                                       match e2 with
                                       | Lvar w when
                                           optimize &&
                                             ((Ident.same v w) &&
                                                (not (List.mem v export_defs)))
                                           -> e1
                                       | _ -> Llet (kind, v, e1, e2) in
                                     let rec simplif =
                                       function
                                       | Lvar v as l ->
                                           (try Hashtbl.find subst v
                                            with | Not_found  -> l)
                                       | Lconst cst as l -> l
                                       | Lapply
                                           (Lfunction
                                            (Curried ,params,body),args,_)
                                           when
                                           optimize &&
                                             ((List.length params) =
                                                (List.length args))
                                           ->
                                           simplif
                                             (beta_reduce params body args)
                                       | Lapply
                                           (Lfunction
                                            (Tupled ,params,body),(Lprim
                                            (Pmakeblock _,args))::[],_)
                                           when
                                           optimize &&
                                             ((List.length params) =
                                                (List.length args))
                                           ->
                                           simplif
                                             (beta_reduce params body args)
                                       | Lapply (l1,ll,loc) ->
                                           Lapply
                                             ((simplif l1),
                                               (List.map simplif ll), loc)
                                       | Lfunction (kind,params,l) ->
                                           Lfunction
                                             (kind, params, (simplif l))
                                       | Llet (str,v,Lvar w,l2) when
                                           optimize &&
                                             (not (List.mem v export_defs))
                                           ->
                                           (Hashtbl.add subst v
                                              (simplif (Lvar w));
                                            simplif l2)
                                       | Llet
                                           (Strict ,v,Lprim
                                            (Pmakeblock
                                             (0,tag_info,Mutable ),linit::[]),lbody)
                                           when optimize ->
                                           let slinit = simplif linit in
                                           let slbody = simplif lbody in
                                           (try
                                              mklet
                                                (Variable, v, slinit,
                                                  (eliminate_ref v slbody))
                                            with
                                            | Real_reference  ->
                                                mklet
                                                  (Strict, v,
                                                    (Lprim
                                                       ((Pmakeblock
                                                           (0, tag_info,
                                                             Mutable)),
                                                         [slinit])), slbody))
                                       | Llet (Alias ,v,l1,l2) ->
                                           (match count_var v with
                                            | 0 -> simplif l2
                                            | 1 when
                                                optimize &&
                                                  (not
                                                     (List.mem v export_defs))
                                                ->
                                                (Hashtbl.add subst v
                                                   (simplif l1);
                                                 simplif l2)
                                            | n ->
                                                Llet
                                                  (Alias, v, (simplif l1),
                                                    (simplif l2)))
                                       | Llet (StrictOpt ,v,l1,l2) ->
                                           (match count_var v with
                                            | 0 -> simplif l2
                                            | n ->
                                                mklet
                                                  (Alias, v, (simplif l1),
                                                    (simplif l2)))
                                       | Llet (kind,v,l1,l2) ->
                                           mklet
                                             (kind, v, (simplif l1),
                                               (simplif l2))
                                       | Lletrec (bindings,body) ->
                                           Lletrec
                                             ((List.map
                                                 (fun (v,l)  ->
                                                    (v, (simplif l)))
                                                 bindings), (simplif body))
                                       | Lprim (p,ll) ->
                                           Lprim (p, (List.map simplif ll))
                                       | Lswitch (l,sw) ->
                                           let new_l = simplif l
                                           and new_consts =
                                             List.map
                                               (fun (n,e)  ->
                                                  (n, (simplif e)))
                                               sw.sw_consts
                                           and new_blocks =
                                             List.map
                                               (fun (n,e)  ->
                                                  (n, (simplif e)))
                                               sw.sw_blocks
                                           and new_fail =
                                             Misc.may_map simplif
                                               sw.sw_failaction in
                                           Lswitch
                                             (new_l,
                                               {
                                                 sw with
                                                 sw_consts = new_consts;
                                                 sw_blocks = new_blocks;
                                                 sw_failaction = new_fail
                                               })
                                       | Lstringswitch (l,sw,d) ->
                                           Lstringswitch
                                             ((simplif l),
                                               (List.map
                                                  (fun (s,l)  ->
                                                     (s, (simplif l))) sw),
                                               (Misc.may_map simplif d))
                                       | Lstaticraise (i,ls) ->
                                           Lstaticraise
                                             (i, (List.map simplif ls))
                                       | Lstaticcatch (l1,(i,args),l2) ->
                                           Lstaticcatch
                                             ((simplif l1), (i, args),
                                               (simplif l2))
                                       | Ltrywith (l1,v,l2) ->
                                           Ltrywith
                                             ((simplif l1), v, (simplif l2))
                                       | Lifthenelse (l1,l2,l3) ->
                                           Lifthenelse
                                             ((simplif l1), (simplif l2),
                                               (simplif l3))
                                       | Lsequence (Lifused (v,l1),l2) ->
                                           if (count_var v) > 0
                                           then
                                             Lsequence
                                               ((simplif l1), (simplif l2))
                                           else simplif l2
                                       | Lsequence (l1,l2) ->
                                           Lsequence
                                             ((simplif l1), (simplif l2))
                                       | Lwhile (l1,l2) ->
                                           Lwhile
                                             ((simplif l1), (simplif l2))
                                       | Lfor (v,l1,l2,dir,l3) ->
                                           Lfor
                                             (v, (simplif l1), (simplif l2),
                                               dir, (simplif l3))
                                       | Lassign (v,l) ->
                                           Lassign (v, (simplif l))
                                       | Lsend (k,m,o,ll,loc) ->
                                           Lsend
                                             (k, (simplif m), (simplif o),
                                               (List.map simplif ll), loc)
                                       | Levent (l,ev) ->
                                           Levent ((simplif l), ev)
                                       | Lifused (v,l) ->
                                           if (count_var v) > 0
                                           then simplif l
                                           else lambda_unit in
                                     simplif lam)
                                end and
                                     Pp:sig
                                          type t
                                          type pos =
                                            {
                                            mutable p_line: int;
                                            mutable p_col: int;}
                                          val string : t -> string -> unit
                                          val genbreak :
                                            t -> string -> int -> unit
                                          val break : t -> unit
                                          val break1 : t -> unit
                                          val non_breaking_space : t -> unit
                                          val space :
                                            ?indent:int -> t -> unit
                                          val start_group : t -> int -> unit
                                          val end_group : t -> unit
                                          val newline : t -> unit
                                          val to_out_channel :
                                            out_channel -> t
                                          val to_buffer : Buffer.t -> t
                                          val pos : t -> pos
                                          val total : t -> int
                                          val set_compact : t -> bool -> unit
                                          val set_needed_space_function :
                                            t ->
                                              (char -> char -> bool) -> unit
                                        end =
                                     struct
                                       type pos =
                                         {
                                         mutable p_line: int;
                                         mutable p_col: int;}
                                       type elt =
                                         | Text of string
                                         | Break of string* int
                                         | Start_group of int
                                         | End_group
                                         | Set_pos of pos
                                       type t =
                                         {
                                         mutable indent: int;
                                         mutable box_indent: int;
                                         mutable prev_indents:
                                           (int* int) list;
                                         mutable limit: int;
                                         mutable cur: int;
                                         mutable l: elt list;
                                         mutable n: int;
                                         mutable w: int;
                                         mutable compact: bool;
                                         mutable needed_space:
                                           (char -> char -> bool) option;
                                         mutable pending_space:
                                           string option;
                                         mutable last_char: char option;
                                         mutable line: int;
                                         mutable col: int;
                                         mutable total: int;
                                         output:
                                           string -> int -> int -> unit;}
                                       let spaces = String.make 80 ' '
                                       let output st (s : string) l =
                                         (try
                                            let last =
                                              (String.rindex_from s (
                                                 l - 1) '\n')
                                                + 1 in
                                            let line = ref 0 in
                                            for i = 0 to l - 1 do
                                              if (s.[i]) = '\n'
                                              then incr line
                                            done;
                                            st.line <- st.line + (!line);
                                            st.col <- l - last
                                          with
                                          | Not_found  ->
                                              st.col <- l + st.col);
                                         st.total <-
                                           st.total + (String.length s);
                                         st.output s 0 l
                                       let rec output_spaces st n =
                                         output st spaces (min n 80);
                                         if n > 80
                                         then output_spaces st (n - 80)
                                       let output_newline st =
                                         output st "\n" 1
                                       let rec flat_render st l =
                                         match l with
                                         | (Text s)::r|(Break (s,_))::r ->
                                             (output st s (String.length s);
                                              flat_render st r)
                                         | (Set_pos p)::r ->
                                             (p.p_line <- st.line;
                                              p.p_col <- st.col;
                                              flat_render st r)
                                         | (Start_group _|End_group )::r ->
                                             flat_render st r
                                         | [] -> ()
                                       let rec push st e =
                                         if st.n = 0
                                         then
                                           match e with
                                           | Text s ->
                                               (output st s (String.length s);
                                                st.cur <-
                                                  st.cur + (String.length s))
                                           | Set_pos p ->
                                               (p.p_line <- st.line;
                                                p.p_col <- st.col)
                                           | Break (_,offs) ->
                                               (output_newline st;
                                                (let indent =
                                                   st.box_indent + offs in
                                                 st.indent <- indent;
                                                 output_spaces st indent;
                                                 st.limit <-
                                                   max (indent + 60) 78;
                                                 st.cur <- st.indent))
                                           | Start_group n ->
                                               (st.n <- 1;
                                                st.w <- st.limit - st.cur;
                                                st.prev_indents <-
                                                  ((st.box_indent),
                                                    (st.indent))
                                                  :: (st.prev_indents);
                                                st.indent <- st.indent + n;
                                                st.box_indent <- st.indent)
                                           | End_group  ->
                                               (st.box_indent <-
                                                  fst
                                                    (List.hd st.prev_indents);
                                                st.indent <-
                                                  snd
                                                    (List.hd st.prev_indents);
                                                st.prev_indents <-
                                                  List.tl st.prev_indents)
                                         else
                                           (st.l <- e :: (st.l);
                                            (match e with
                                             | Text s|Break (s,_) ->
                                                 let w =
                                                   st.w - (String.length s) in
                                                 (st.w <- w;
                                                  if w < 0
                                                  then
                                                    (let l = List.rev st.l in
                                                     st.l <- [];
                                                     st.n <- 0;
                                                     List.iter
                                                       (fun e  -> push st e)
                                                       l))
                                             | Set_pos _ -> ()
                                             | Start_group _ ->
                                                 st.n <- st.n + 1
                                             | End_group  ->
                                                 (st.n <- st.n - 1;
                                                  if st.n = 0
                                                  then
                                                    (flat_render st
                                                       (List.rev st.l);
                                                     st.box_indent <-
                                                       fst
                                                         (List.hd
                                                            st.prev_indents);
                                                     st.indent <-
                                                       snd
                                                         (List.hd
                                                            st.prev_indents);
                                                     st.prev_indents <-
                                                       List.tl
                                                         st.prev_indents;
                                                     st.cur <- st.cur + st.w;
                                                     st.l <- []))))
                                       let string st (s : string) =
                                         if st.compact
                                         then
                                           let len = String.length s in
                                           (if len <> 0
                                            then
                                              ((match st.pending_space with
                                                | None  -> ()
                                                | Some sp ->
                                                    (st.pending_space <- None;
                                                     (match ((st.last_char),
                                                              (st.needed_space))
                                                      with
                                                      | (Some last,Some f) ->
                                                          if f last (s.[0])
                                                          then output st sp 1
                                                      | (_,None ) ->
                                                          output st sp 1
                                                      | _ -> ())));
                                               output st s len;
                                               st.last_char <-
                                                 Some (s.[len - 1])))
                                         else push st (Text s)
                                       let genbreak st s n =
                                         if not st.compact
                                         then push st (Break (s, n))
                                       let break_token = Break ("", 0)
                                       let break st =
                                         if not st.compact
                                         then push st break_token
                                       let break1 st =
                                         if not st.compact
                                         then push st (Break ("", 1))
                                       let non_breaking_space_token =
                                         Text " "
                                       let non_breaking_space st =
                                         if st.compact
                                         then st.pending_space <- Some " "
                                         else
                                           push st non_breaking_space_token
                                       let space ?(indent= 0)  st =
                                         if st.compact
                                         then st.pending_space <- Some "\n"
                                         else push st (Break (" ", indent))
                                       let start_group st n =
                                         if not st.compact
                                         then push st (Start_group n)
                                       let end_group st =
                                         if not st.compact
                                         then push st End_group
                                       let total t = t.total
                                       let pos t =
                                         if t.compact
                                         then
                                           {
                                             p_line = (t.line);
                                             p_col = (t.col)
                                           }
                                         else
                                           (let p =
                                              { p_line = (-1); p_col = (-1) } in
                                            push t (Set_pos p); p)
                                       let newline st =
                                         output_newline st;
                                         st.indent <- 0;
                                         st.box_indent <- 0;
                                         st.prev_indents <- [];
                                         st.cur <- 0;
                                         st.l <- [];
                                         st.n <- 0;
                                         st.w <- 0
                                       let output_substring =
                                         Pervasives.output
                                       let _ = output_substring
                                       let output_substring =
                                         let open Pervasives in
                                           output_substring
                                       let to_out_channel ch =
                                         {
                                           indent = 0;
                                           box_indent = 0;
                                           prev_indents = [];
                                           limit = 78;
                                           cur = 0;
                                           l = [];
                                           n = 0;
                                           w = 0;
                                           col = 0;
                                           line = 0;
                                           total = 0;
                                           compact = false;
                                           pending_space = None;
                                           last_char = None;
                                           needed_space = None;
                                           output = (output_substring ch)
                                         }
                                       let to_buffer b =
                                         {
                                           indent = 0;
                                           box_indent = 0;
                                           prev_indents = [];
                                           limit = 78;
                                           cur = 0;
                                           l = [];
                                           n = 0;
                                           w = 0;
                                           col = 0;
                                           line = 0;
                                           total = 0;
                                           compact = false;
                                           pending_space = None;
                                           last_char = None;
                                           needed_space = None;
                                           output =
                                             (fun s  ->
                                                fun i  ->
                                                  fun l  ->
                                                    Buffer.add_substring b s
                                                      i l)
                                         }
                                       let set_compact st v = st.compact <- v
                                       let set_needed_space_function st f =
                                         st.needed_space <- Some f
                                     end and
                                          Pp_js:sig
                                                  type cxt
                                                  val empty : cxt
                                                  val program :
                                                    cxt ->
                                                      Pp.t ->
                                                        ?source_map:(string
                                                          option*
                                                          Source_map.t) ->
                                                          J.block -> cxt
                                                end =
                                          struct
                                            module E = J_helper.Exp
                                            module S = J_helper.Stmt
                                            let quiet = ref false
                                            let warn fmt =
                                              Format.ksprintf
                                                (fun s  ->
                                                   if not (!quiet)
                                                   then
                                                     Format.eprintf "%s%!" s)
                                                fmt
                                            let read_file f =
                                              let ic = open_in_bin f in
                                              let n = in_channel_length ic in
                                              let s = Bytes.create n in
                                              really_input ic s 0 n;
                                              close_in ic;
                                              Bytes.unsafe_to_string s
                                            let op_prec (op : J.binop) =
                                              match op with
                                              | Eq |StarEq |SlashEq |ModEq 
                                                |PlusEq |MinusEq |LslEq 
                                                |AsrEq |LsrEq |BandEq |BxorEq 
                                                |BorEq  -> (1, 13, 1)
                                              | Or  -> (3, 3, 3)
                                              | And  -> (4, 4, 4)
                                              | Bor  -> (5, 5, 5)
                                              | Bxor  -> (6, 6, 6)
                                              | Band  -> (7, 7, 7)
                                              | EqEq |NotEq |EqEqEq |NotEqEq 
                                                  -> (8, 8, 9)
                                              | Gt |Ge |Lt |Le |InstanceOf 
                                                |In  -> (9, 9, 10)
                                              | Lsl |Lsr |Asr  ->
                                                  (10, 10, 11)
                                              | Plus |Minus  -> (11, 11, 12)
                                              | Mul |Div |Mod  ->
                                                  (12, 12, 13)
                                            let op_str (op : J.binop) =
                                              match op with
                                              | Eq  -> "="
                                              | StarEq  -> "*="
                                              | SlashEq  -> "/="
                                              | ModEq  -> "%="
                                              | PlusEq  -> "+="
                                              | MinusEq  -> "-="
                                              | Or  -> "||"
                                              | And  -> "&&"
                                              | Bor  -> "|"
                                              | Bxor  -> "^"
                                              | Band  -> "&"
                                              | EqEq  -> "=="
                                              | NotEq  -> "!="
                                              | EqEqEq  -> "==="
                                              | NotEqEq  -> "!=="
                                              | LslEq  -> "<<="
                                              | AsrEq  -> ">>="
                                              | LsrEq  -> ">>>="
                                              | BandEq  -> "&="
                                              | BxorEq  -> "^="
                                              | BorEq  -> "|="
                                              | Lt  -> "<"
                                              | Le  -> "<="
                                              | Gt  -> ">"
                                              | Ge  -> ">="
                                              | Lsl  -> "<<"
                                              | Lsr  -> ">>>"
                                              | Asr  -> ">>"
                                              | Plus  -> "+"
                                              | Minus  -> "-"
                                              | Mul  -> "*"
                                              | Div  -> "/"
                                              | Mod  -> "%"
                                              | InstanceOf |In  ->
                                                  assert false
                                            let unop_str (op : J.unop) =
                                              match op with
                                              | Not  -> "!"
                                              | Neg  -> "-"
                                              | Pl  -> "+"
                                              | Bnot  -> "~"
                                              | IncrA |IncrB |DecrA |DecrB 
                                                |Typeof |Void |Delete  ->
                                                  assert false
                                            let best_string_quote s =
                                              let simple = ref 0
                                              and double = ref 0 in
                                              for i = 0 to
                                                (String.length s) - 1 do
                                                (match s.[i] with
                                                 | '\'' -> incr simple
                                                 | '"' -> incr double
                                                 | _ -> ())
                                              done;
                                              if (!simple) < (!double)
                                              then '\''
                                              else '"'
                                            let array_str1 =
                                              Array.init 256
                                                (fun i  ->
                                                   String.make 1 (Char.chr i))
                                            let array_conv =
                                              Array.init 16
                                                (fun i  ->
                                                   String.make 1
                                                     ("0123456789abcdef".[i]))
                                            [@@@ocaml.text
                                              " purely functional environment "]
                                            module SMap = Map.Make(String)
                                            module IMap =
                                              Map.Make(struct
                                                         type t = int
                                                         let compare
                                                           (x : int) y =
                                                           Pervasives.compare
                                                             x y
                                                       end)
                                            type cxt =
                                              {
                                              mapping: int IMap.t SMap.t;}
                                            let empty =
                                              { mapping = SMap.empty }
                                            let reserved_words =
                                              ["break";
                                              "case";
                                              "catch";
                                              "continue";
                                              "debugger";
                                              "default";
                                              "delete";
                                              "do";
                                              "else";
                                              "finally";
                                              "for";
                                              "function";
                                              "if";
                                              "in";
                                              "instanceof";
                                              "new";
                                              "return";
                                              "switch";
                                              "this";
                                              "throw";
                                              "try";
                                              "typeof";
                                              "var";
                                              "void";
                                              "while";
                                              "with";
                                              "class";
                                              "enum";
                                              "export";
                                              "extends";
                                              "import";
                                              "super";
                                              "implements";
                                              "interface";
                                              "let";
                                              "package";
                                              "private";
                                              "protected";
                                              "public";
                                              "static";
                                              "yield";
                                              "null";
                                              "true";
                                              "false";
                                              "NaN";
                                              "undefined";
                                              "this";
                                              "abstract";
                                              "boolean";
                                              "byte";
                                              "char";
                                              "const";
                                              "double";
                                              "final";
                                              "float";
                                              "goto";
                                              "int";
                                              "long";
                                              "native";
                                              "short";
                                              "synchronized";
                                              "throws";
                                              "transient";
                                              "volatile";
                                              "await";
                                              "event";
                                              "location";
                                              "window";
                                              "document";
                                              "eval";
                                              "navigator";
                                              "self";
                                              "Array";
                                              "Date";
                                              "Math";
                                              "JSON";
                                              "Object";
                                              "RegExp";
                                              "String";
                                              "Boolean";
                                              "Number";
                                              "Infinity";
                                              "isFinite";
                                              "ActiveXObject";
                                              "XMLHttpRequest";
                                              "XDomainRequest";
                                              "DOMException";
                                              "Error";
                                              "SyntaxError";
                                              "arguments";
                                              "decodeURI";
                                              "decodeURIComponent";
                                              "encodeURI";
                                              "encodeURIComponent";
                                              "escape";
                                              "unescape";
                                              "isNaN";
                                              "parseFloat";
                                              "parseInt";
                                              "require";
                                              "exports";
                                              "module"]
                                            module StringSet =
                                              Set.Make(String)
                                            let reserved_map =
                                              List.fold_left
                                                (fun acc  ->
                                                   fun x  ->
                                                     StringSet.add x acc)
                                                StringSet.empty
                                                reserved_words
                                            let convert (name : string) =
                                              let module E =
                                                struct
                                                  exception Not_normal_letter
                                                    of int
                                                end in
                                                let len = String.length name in
                                                if
                                                  StringSet.mem name
                                                    reserved_map
                                                then "$$" ^ name
                                                else
                                                  (try
                                                     for i = 0 to len - 1 do
                                                       (let c =
                                                          String.unsafe_get
                                                            name i in
                                                        if
                                                          not
                                                            (((c >= 'a') &&
                                                                (c <= 'z'))
                                                               ||
                                                               (((c >= 'A')
                                                                   &&
                                                                   (c <= 'Z'))
                                                                  ||
                                                                  ((c = '_')
                                                                    ||
                                                                    (c = '$'))))
                                                        then
                                                          raise
                                                            (E.Not_normal_letter
                                                               i)
                                                        else ())
                                                     done;
                                                     name
                                                   with
                                                   | E.Not_normal_letter i ->
                                                       (String.sub name 0 i)
                                                         ^
                                                         (let buffer =
                                                            Buffer.create len in
                                                          (for j = i to
                                                             len - 1 do
                                                             (let c =
                                                                String.unsafe_get
                                                                  name j in
                                                              match c with
                                                              | '*' ->
                                                                  Buffer.add_string
                                                                    buffer
                                                                    "$star"
                                                              | '\'' ->
                                                                  Buffer.add_string
                                                                    buffer
                                                                    "$prime"
                                                              | '>' ->
                                                                  Buffer.add_string
                                                                    buffer
                                                                    "$great"
                                                              | '<' ->
                                                                  Buffer.add_string
                                                                    buffer
                                                                    "$less"
                                                              | '=' ->
                                                                  Buffer.add_string
                                                                    buffer
                                                                    "$eq"
                                                              | '+' ->
                                                                  Buffer.add_string
                                                                    buffer
                                                                    "$plus"
                                                              | '-' ->
                                                                  Buffer.add_string
                                                                    buffer
                                                                    "$neg"
                                                              | '@' ->
                                                                  Buffer.add_string
                                                                    buffer
                                                                    "$at"
                                                              | '^' ->
                                                                  Buffer.add_string
                                                                    buffer
                                                                    "$caret"
                                                              | '/' ->
                                                                  Buffer.add_string
                                                                    buffer
                                                                    "$slash"
                                                              | '.' ->
                                                                  Buffer.add_string
                                                                    buffer
                                                                    "$dot"
                                                              | 'a'..'z'
                                                                |'A'..'Z'|'_'
                                                                |'$'|'0'..'9'
                                                                  ->
                                                                  Buffer.add_char
                                                                    buffer c
                                                              | _ ->
                                                                  Buffer.add_string
                                                                    buffer
                                                                    "$unknown")
                                                           done;
                                                           Buffer.contents
                                                             buffer)))
                                              [@@ocaml.doc
                                                " TODO:\n    check name conflicts with javascript conventions\n "]
                                            let string_of_id ?(replace=
                                              false)  (id : Ident.t)
                                              (({ mapping } as cxt) : cxt) =
                                              (match SMap.find id.name
                                                       mapping
                                               with
                                               | exception Not_found  ->
                                                   (0,
                                                     {
                                                       mapping =
                                                         (SMap.add id.name
                                                            (let open IMap in
                                                               add id.stamp 0
                                                                 empty)
                                                            mapping)
                                                     })
                                               | imap ->
                                                   (match IMap.find id.stamp
                                                            imap
                                                    with
                                                    | exception Not_found  ->
                                                        if
                                                          replace &&
                                                            (id.name <>
                                                               "param")
                                                        then
                                                          (0,
                                                            {
                                                              mapping =
                                                                (SMap.add
                                                                   id.name
                                                                   (let open IMap in
                                                                    add
                                                                    id.stamp
                                                                    0 empty)
                                                                   mapping)
                                                            })
                                                        else
                                                          (let v =
                                                             IMap.cardinal
                                                               imap in
                                                           (v,
                                                             {
                                                               mapping =
                                                                 (SMap.add
                                                                    id.name
                                                                    (
                                                                    let open IMap in
                                                                    add
                                                                    id.stamp
                                                                    v imap : 
                                                                    int
                                                                    IMap.t)
                                                                    mapping)
                                                             }))
                                                    | i -> (i, cxt)) : 
                                              (int* cxt))
                                            let ident ?replace  (cxt : cxt) f
                                              (id : Ident.t) =
                                              (if Jident.is_js id
                                               then
                                                 (Pp.string f id.name; cxt)
                                               else
                                                 if Ident.global id
                                                 then
                                                   (Pp.string f
                                                      (convert id.name);
                                                    cxt)
                                                 else
                                                   (let (i,new_cxt) =
                                                      string_of_id ?replace
                                                        id cxt in
                                                    let () =
                                                      Pp.string f
                                                        (if i == 0
                                                         then convert id.name
                                                         else
                                                           Printf.sprintf
                                                             "%s$%d"
                                                             (convert id.name)
                                                             i) in
                                                    new_cxt) : cxt)
                                            let rec formal_parameter_list cxt
                                              f l =
                                              match l with
                                              | [] -> cxt
                                              | i::[] ->
                                                  ident ~replace:true cxt f i
                                              | i::r ->
                                                  let cxt =
                                                    ident ~replace:true cxt f
                                                      i in
                                                  (Pp.string f ",";
                                                   Pp.break f;
                                                   formal_parameter_list cxt
                                                     f r)
                                            let opt_identifier cxt f i =
                                              match i with
                                              | None  -> cxt
                                              | Some i ->
                                                  (Pp.space f; ident cxt f i)
                                            let rec ends_with_if_without_else
                                              ({ statement_desc = st;_} :
                                                J.statement)
                                              =
                                              match st with
                                              | If (_,_,Some st)|While 
                                                (_,st)|For (_,_,_,st)|ForIn
                                                (_,_,st) ->
                                                  ends_with_if_without_else
                                                    st
                                              | If (_,_,None ) -> true
                                              | _ -> false
                                            let rec need_paren l
                                              (e : J.expression) =
                                              match e.expression_desc with
                                              | ESeq (e,_) ->
                                                  (l <= 0) &&
                                                    (need_paren 0 e)
                                              | ECond (e,_,_) ->
                                                  (l <= 2) &&
                                                    (need_paren 3 e)
                                              | EBin (op,e,_) ->
                                                  let (out,lft,_rght) =
                                                    op_prec op in
                                                  (l <= out) &&
                                                    (need_paren lft e)
                                              | ECall (e,_,_)|EAccess 
                                                (e,_)|EDot (e,_) ->
                                                  (l <= 15) &&
                                                    (need_paren 15 e)
                                              | EVar _|EStr _|EArr _|EBool _
                                                |ENum _|EQuote _|ERegexp _
                                                |EUn _|ENew _ -> false
                                              | EFun _|EObj _ -> true
                                            let pp_string f ?(quote= '"') 
                                              ?(utf= false)  s =
                                              let quote_s =
                                                String.make 1 quote in
                                              Pp.string f quote_s;
                                              (let l = String.length s in
                                               for i = 0 to l - 1 do
                                                 (let c = s.[i] in
                                                  match c with
                                                  | '\000' when
                                                      (i = (l - 1)) ||
                                                        (((s.[i + 1]) < '0')
                                                           ||
                                                           ((s.[i + 1]) > '9'))
                                                      -> Pp.string f "\\0"
                                                  | '\b' -> Pp.string f "\\b"
                                                  | '\t' -> Pp.string f "\\t"
                                                  | '\n' -> Pp.string f "\\n"
                                                  | '\012' ->
                                                      Pp.string f "\\f"
                                                  | '\\' when not utf ->
                                                      Pp.string f "\\\\"
                                                  | '\r' -> Pp.string f "\\r"
                                                  | '\000'..'\031'|'\127' ->
                                                      let c = Char.code c in
                                                      (Pp.string f "\\x";
                                                       Pp.string f
                                                         (Array.unsafe_get
                                                            array_conv
                                                            (c lsr 4));
                                                       Pp.string f
                                                         (Array.unsafe_get
                                                            array_conv
                                                            (c land 15)))
                                                  | '\128'..'\255' when
                                                      not utf ->
                                                      let c = Char.code c in
                                                      (Pp.string f "\\x";
                                                       Pp.string f
                                                         (Array.unsafe_get
                                                            array_conv
                                                            (c lsr 4));
                                                       Pp.string f
                                                         (Array.unsafe_get
                                                            array_conv
                                                            (c land 15)))
                                                  | _ ->
                                                      if c = quote
                                                      then
                                                        (Pp.string f "\\";
                                                         Pp.string f
                                                           (Array.unsafe_get
                                                              array_str1
                                                              (Char.code c)))
                                                      else
                                                        Pp.string f
                                                          (Array.unsafe_get
                                                             array_str1
                                                             (Char.code c)))
                                               done;
                                               Pp.string f quote_s)
                                            type config =
                                              {
                                              push_mapping:
                                                Pp.pos ->
                                                  Source_map.map -> unit;
                                              get_file_index: string -> int;}
                                            type source_map_config =
                                              | No_source_map
                                              | Source_map of config
                                            module Make(D:sig
                                                            val source_map :
                                                              Source_map.t
                                                                option
                                                          end) =
                                              struct
                                                let temp_mappings = ref []
                                                let config =
                                                  let idx = ref 0 in
                                                  let files =
                                                    Hashtbl.create 17 in
                                                  match D.source_map with
                                                  | None  -> No_source_map
                                                  | Some sm ->
                                                      (List.iter
                                                         (fun f  ->
                                                            Hashtbl.add files
                                                              f (!idx);
                                                            incr idx)
                                                         sm.Source_map.sources;
                                                       Source_map
                                                         {
                                                           push_mapping =
                                                             ((fun pos  ->
                                                                 fun m  ->
                                                                   temp_mappings
                                                                    :=
                                                                    ((pos, m)
                                                                    ::
                                                                    (!temp_mappings))));
                                                           get_file_index =
                                                             ((fun file  ->
                                                                 try
                                                                   Hashtbl.find
                                                                    files
                                                                    file
                                                                 with
                                                                 | Not_found 
                                                                    ->
                                                                    let pos =
                                                                    !idx in
                                                                    (Hashtbl.add
                                                                    files
                                                                    file pos;
                                                                    incr idx;
                                                                    sm.Source_map.sources
                                                                    <-
                                                                    sm.Source_map.sources
                                                                    @ [file];
                                                                    pos)))
                                                         })
                                                let output_debug_info config
                                                  =
                                                  match config with
                                                  | Source_map
                                                      { push_mapping;
                                                        get_file_index }
                                                      ->
                                                      (fun f  ->
                                                         fun
                                                           (loc : J.location)
                                                            ->
                                                           match loc with
                                                           | J.N  -> ()
                                                           | U |Pi
                                                             { src = None ;_}
                                                               ->
                                                               push_mapping
                                                                 (Pp.pos f)
                                                                 {
                                                                   Source_map.gen_line
                                                                    = (-1);
                                                                   gen_col =
                                                                    (-1);
                                                                   ori_source
                                                                    = (-1);
                                                                   ori_line =
                                                                    (-1);
                                                                   ori_col =
                                                                    (-1);
                                                                   ori_name =
                                                                    None
                                                                 }
                                                           | Pi
                                                               {
                                                                 src = Some
                                                                   file;
                                                                 line; 
                                                                 col }
                                                               ->
                                                               push_mapping
                                                                 (Pp.pos f)
                                                                 {
                                                                   Source_map.gen_line
                                                                    = (-1);
                                                                   gen_col =
                                                                    (-1);
                                                                   ori_source
                                                                    =
                                                                    (get_file_index
                                                                    file);
                                                                   ori_line =
                                                                    line;
                                                                   ori_col =
                                                                    col;
                                                                   ori_name =
                                                                    None
                                                                 })
                                                  | No_source_map  ->
                                                      (fun f  ->
                                                         fun loc  -> ())
                                                let rec expression cxt
                                                  (l : int) f
                                                  ({ expression_desc; 
                                                     comment }
                                                    : J.expression)
                                                  =
                                                  (let () =
                                                     match comment with
                                                     | None  -> ()
                                                     | Some c ->
                                                         (Pp.string f "/* ";
                                                          Pp.string f c;
                                                          Pp.string f " */") in
                                                   match expression_desc with
                                                   | EVar v -> ident cxt f v
                                                   | ESeq (e1,e2) ->
                                                       (if l > 0
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        (let cxt =
                                                           expression cxt 0 f
                                                             e1 in
                                                         let () =
                                                           Pp.string f "," in
                                                         let () = Pp.break f in
                                                         let cxt =
                                                           expression cxt 0 f
                                                             e2 in
                                                         if l > 0
                                                         then
                                                           (Pp.string f ")";
                                                            Pp.end_group f);
                                                         cxt))
                                                   | EFun (i,l,b,pc) ->
                                                       let () =
                                                         Pp.start_group f 1 in
                                                       let () =
                                                         Pp.start_group f 0 in
                                                       let () =
                                                         Pp.start_group f 0 in
                                                       let () =
                                                         Pp.string f
                                                           "function" in
                                                       let cxt =
                                                         opt_identifier cxt f
                                                           i in
                                                       let () =
                                                         Pp.end_group f in
                                                       let () = Pp.break f in
                                                       let () =
                                                         Pp.start_group f 1 in
                                                       let () =
                                                         Pp.string f "(" in
                                                       let cxt' =
                                                         formal_parameter_list
                                                           cxt f l in
                                                       let () =
                                                         Pp.string f ")" in
                                                       let () =
                                                         Pp.end_group f in
                                                       let () =
                                                         Pp.end_group f in
                                                       let () = Pp.break f in
                                                       let () =
                                                         Pp.start_group f 1 in
                                                       let () =
                                                         Pp.string f "{" in
                                                       let () =
                                                         ignore @@
                                                           (function_body
                                                              cxt' f b) in
                                                       let () =
                                                         output_debug_info
                                                           config f pc in
                                                       let () =
                                                         Pp.string f "}" in
                                                       let () =
                                                         Pp.end_group f in
                                                       let () =
                                                         Pp.end_group f in
                                                       cxt
                                                   | ECall (e,el,loc) ->
                                                       (if l > 15
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        output_debug_info
                                                          config f loc;
                                                        Pp.start_group f 1;
                                                        (let cxt =
                                                           expression cxt 15
                                                             f e in
                                                         Pp.break f;
                                                         Pp.start_group f 1;
                                                         Pp.string f "(";
                                                         (let cxt =
                                                            arguments cxt f
                                                              el in
                                                          Pp.string f ")";
                                                          Pp.end_group f;
                                                          Pp.end_group f;
                                                          if l > 15
                                                          then
                                                            (Pp.string f ")";
                                                             Pp.end_group f);
                                                          cxt)))
                                                   | EStr (s,kind) ->
                                                       let quote =
                                                         best_string_quote s in
                                                       (pp_string f
                                                          ~utf:(kind = `Utf8)
                                                          ~quote s;
                                                        cxt)
                                                   | EBool b ->
                                                       (Pp.string f
                                                          (if b
                                                           then "true"
                                                           else "false");
                                                        cxt)
                                                   | ENum v ->
                                                       let s =
                                                         Js_pp_util.string_of_number
                                                           v in
                                                       let need_parent =
                                                         if (s.[0]) = '-'
                                                         then l > 13
                                                         else
                                                           (l = 15) &&
                                                             (((s.[0]) <> 'I')
                                                                &&
                                                                ((s.[0]) <>
                                                                   'N')) in
                                                       (if need_parent
                                                        then Pp.string f "(";
                                                        Pp.string f s;
                                                        if need_parent
                                                        then Pp.string f ")";
                                                        cxt)
                                                   | EUn (Typeof ,e) ->
                                                       (if l > 13
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        Pp.start_group f 0;
                                                        Pp.string f "typeof";
                                                        Pp.space f;
                                                        (let cxt =
                                                           expression cxt 13
                                                             f e in
                                                         Pp.end_group f;
                                                         if l > 13
                                                         then
                                                           (Pp.string f ")";
                                                            Pp.end_group f);
                                                         cxt))
                                                   | EUn (Void ,e) ->
                                                       (if l > 13
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        Pp.start_group f 0;
                                                        Pp.string f "void";
                                                        Pp.space f;
                                                        (let cxt =
                                                           expression cxt 13
                                                             f e in
                                                         Pp.end_group f;
                                                         if l > 13
                                                         then
                                                           (Pp.string f ")";
                                                            Pp.end_group f);
                                                         cxt))
                                                   | EUn (Delete ,e) ->
                                                       (if l > 13
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        Pp.start_group f 0;
                                                        Pp.string f "delete";
                                                        Pp.space f;
                                                        (let cxt =
                                                           expression cxt 13
                                                             f e in
                                                         Pp.end_group f;
                                                         if l > 13
                                                         then
                                                           (Pp.string f ")";
                                                            Pp.end_group f);
                                                         cxt))
                                                   | EUn
                                                       ((IncrA |DecrA |IncrB 
                                                         |DecrB  as op),e)
                                                       ->
                                                       (if l > 13
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        (let cxt =
                                                           if
                                                             (op = IncrA) ||
                                                               (op = DecrA)
                                                           then
                                                             expression cxt
                                                               13 f e
                                                           else cxt in
                                                         if
                                                           (op = IncrA) ||
                                                             (op = IncrB)
                                                         then
                                                           Pp.string f "++"
                                                         else
                                                           Pp.string f "--";
                                                         (let cxt =
                                                            if
                                                              (op = IncrB) ||
                                                                (op = DecrB)
                                                            then
                                                              expression cxt
                                                                13 f e
                                                            else cxt in
                                                          if l > 13
                                                          then
                                                            (Pp.string f ")";
                                                             Pp.end_group f);
                                                          cxt)))
                                                   | EUn (op,e) ->
                                                       (if l > 13
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        Pp.string f
                                                          (unop_str op);
                                                        (let cxt =
                                                           expression cxt 13
                                                             f e in
                                                         if l > 13
                                                         then
                                                           (Pp.string f ")";
                                                            Pp.end_group f);
                                                         cxt))
                                                   | EBin (InstanceOf ,e1,e2)
                                                       ->
                                                       let (out,lft,rght) =
                                                         op_prec InstanceOf in
                                                       (if l > out
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        Pp.start_group f 0;
                                                        (let cxt =
                                                           expression cxt lft
                                                             f e1 in
                                                         Pp.space f;
                                                         Pp.string f
                                                           "instanceof";
                                                         Pp.space f;
                                                         (let cxt =
                                                            expression cxt
                                                              rght f e2 in
                                                          Pp.end_group f;
                                                          if l > out
                                                          then
                                                            (Pp.string f ")";
                                                             Pp.end_group f);
                                                          cxt)))
                                                   | EBin (In ,e1,e2) ->
                                                       let (out,lft,rght) =
                                                         op_prec InstanceOf in
                                                       (if l > out
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        Pp.start_group f 0;
                                                        (let cxt =
                                                           expression cxt lft
                                                             f e1 in
                                                         Pp.space f;
                                                         Pp.string f "in";
                                                         Pp.space f;
                                                         (let cxt =
                                                            expression cxt
                                                              rght f e2 in
                                                          Pp.end_group f;
                                                          if l > out
                                                          then
                                                            (Pp.string f ")";
                                                             Pp.end_group f);
                                                          cxt)))
                                                   | EBin (op,e1,e2) ->
                                                       let (out,lft,rght) =
                                                         op_prec op in
                                                       (if l > out
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        (let cxt =
                                                           expression cxt lft
                                                             f e1 in
                                                         Pp.string f
                                                           (op_str op);
                                                         Pp.break f;
                                                         (let cxt =
                                                            expression cxt
                                                              rght f e2 in
                                                          if l > out
                                                          then
                                                            (Pp.string f ")";
                                                             Pp.end_group f);
                                                          cxt)))
                                                   | EArr el ->
                                                       (Pp.start_group f 1;
                                                        Pp.string f "[";
                                                        (let cxt =
                                                           element_list cxt f
                                                             el in
                                                         Pp.string f "]";
                                                         Pp.end_group f;
                                                         cxt))
                                                   | EAccess (e,e') ->
                                                       (if l > 15
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        Pp.start_group f 1;
                                                        (let cxt =
                                                           expression cxt 15
                                                             f e in
                                                         Pp.break f;
                                                         Pp.start_group f 1;
                                                         Pp.string f "[";
                                                         (let cxt =
                                                            expression cxt 0
                                                              f e' in
                                                          Pp.string f "]";
                                                          Pp.end_group f;
                                                          Pp.end_group f;
                                                          if l > 15
                                                          then
                                                            (Pp.string f ")";
                                                             Pp.end_group f);
                                                          cxt)))
                                                   | EDot (e,nm) ->
                                                       (if l > 15
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        (let cxt =
                                                           expression cxt 15
                                                             f e in
                                                         Pp.string f ".";
                                                         Pp.string f nm;
                                                         if l > 15
                                                         then
                                                           (Pp.string f ")";
                                                            Pp.end_group f);
                                                         cxt))
                                                   | ENew (e,None ) ->
                                                       (if l > 15
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        Pp.start_group f 1;
                                                        Pp.string f "new";
                                                        Pp.space f;
                                                        (let cxt =
                                                           expression cxt 16
                                                             f e in
                                                         Pp.break f;
                                                         Pp.string f "()";
                                                         Pp.end_group f;
                                                         if l > 15
                                                         then
                                                           (Pp.string f ")";
                                                            Pp.end_group f);
                                                         cxt))
                                                   | ENew (e,Some el) ->
                                                       (if l > 15
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        Pp.start_group f 1;
                                                        Pp.string f "new";
                                                        Pp.space f;
                                                        (let cxt =
                                                           expression cxt 16
                                                             f e in
                                                         Pp.break f;
                                                         Pp.start_group f 1;
                                                         Pp.string f "(";
                                                         (let cxt =
                                                            arguments cxt f
                                                              el in
                                                          Pp.string f ")";
                                                          Pp.end_group f;
                                                          Pp.end_group f;
                                                          if l > 15
                                                          then
                                                            (Pp.string f ")";
                                                             Pp.end_group f);
                                                          cxt)))
                                                   | ECond (e,e1,e2) ->
                                                       (if l > 2
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(");
                                                        Pp.start_group f 1;
                                                        Pp.start_group f 0;
                                                        (let cxt =
                                                           expression cxt 3 f
                                                             e in
                                                         Pp.end_group f;
                                                         Pp.break f;
                                                         Pp.start_group f 1;
                                                         Pp.string f "?";
                                                         (let cxt =
                                                            expression cxt 1
                                                              f e1 in
                                                          Pp.end_group f;
                                                          Pp.break f;
                                                          Pp.start_group f 1;
                                                          Pp.string f ":";
                                                          (let cxt =
                                                             expression cxt 1
                                                               f e2 in
                                                           Pp.end_group f;
                                                           Pp.end_group f;
                                                           if l > 2
                                                           then
                                                             (Pp.string f ")";
                                                              Pp.end_group f);
                                                           cxt))))
                                                   | EObj lst ->
                                                       (Pp.start_group f 1;
                                                        Pp.string f "{";
                                                        (let cxt =
                                                           property_name_and_value_list
                                                             cxt f lst in
                                                         Pp.string f "}";
                                                         Pp.end_group f;
                                                         cxt))
                                                   | ERegexp (s,opt) ->
                                                       ((Pp.string f "/";
                                                         Pp.string f s;
                                                         Pp.string f "/";
                                                         (match opt with
                                                          | None  -> ()
                                                          | Some o ->
                                                              Pp.string f o));
                                                        cxt)
                                                   | EQuote s ->
                                                       (Pp.string f "(";
                                                        Pp.string f s;
                                                        Pp.string f ")";
                                                        cxt) : cxt)
                                                and property_name cxt f
                                                  (n : J.property_name) =
                                                  (match n with
                                                   | PNI s ->
                                                       (Pp.string f s; cxt)
                                                   | PNS s ->
                                                       let quote =
                                                         best_string_quote s in
                                                       (pp_string f ~utf:true
                                                          ~quote s;
                                                        cxt)
                                                   | PNN v ->
                                                       expression cxt 0 f
                                                         (E.float v) : 
                                                  cxt)
                                                and property_name_and_value_list
                                                  cxt f l =
                                                  (match l with
                                                   | [] -> cxt
                                                   | (pn,e)::[] ->
                                                       (Pp.start_group f 0;
                                                        (let cxt =
                                                           property_name cxt
                                                             f pn in
                                                         Pp.string f ":";
                                                         Pp.break f;
                                                         (let cxt =
                                                            expression cxt 1
                                                              f e in
                                                          Pp.end_group f; cxt)))
                                                   | (pn,e)::r ->
                                                       (Pp.start_group f 0;
                                                        (let cxt =
                                                           property_name cxt
                                                             f pn in
                                                         Pp.string f ":";
                                                         Pp.break f;
                                                         (let cxt =
                                                            expression cxt 1
                                                              f e in
                                                          Pp.end_group f;
                                                          Pp.string f ",";
                                                          Pp.break f;
                                                          property_name_and_value_list
                                                            cxt f r))) : 
                                                  cxt)
                                                and element_list cxt f el =
                                                  (match el with
                                                   | [] -> cxt
                                                   | e::[] ->
                                                       (match e with
                                                        | None  ->
                                                            (Pp.string f ",";
                                                             cxt)
                                                        | Some e ->
                                                            (Pp.start_group f
                                                               0;
                                                             (let cxt =
                                                                expression
                                                                  cxt 1 f e in
                                                              Pp.end_group f;
                                                              cxt)))
                                                   | e::r ->
                                                       let cxt =
                                                         match e with
                                                         | None  -> cxt
                                                         | Some e ->
                                                             (Pp.start_group
                                                                f 0;
                                                              (let cxt =
                                                                 expression
                                                                   cxt 1 f e in
                                                               Pp.end_group f;
                                                               cxt)) in
                                                       (Pp.string f ",";
                                                        Pp.break f;
                                                        element_list cxt f r) : 
                                                  cxt)
                                                and function_body cxt f b =
                                                  (source_elements cxt f
                                                     ~skip_last_semi:true b : 
                                                  cxt)
                                                and arguments cxt f l =
                                                  (match l with
                                                   | [] -> cxt
                                                   | e::[] ->
                                                       (Pp.start_group f 0;
                                                        (let cxt =
                                                           expression cxt 1 f
                                                             e in
                                                         Pp.end_group f; cxt))
                                                   | e::r ->
                                                       (Pp.start_group f 0;
                                                        (let cxt =
                                                           expression cxt 1 f
                                                             e in
                                                         Pp.end_group f;
                                                         Pp.string f ",";
                                                         Pp.break f;
                                                         arguments cxt f r)) : 
                                                  cxt)
                                                and variable_declaration
                                                  (cxt : cxt) f (i,init) =
                                                  (match init with
                                                   | None  -> ident cxt f i
                                                   | Some (e,pc) ->
                                                       (Pp.start_group f 1;
                                                        output_debug_info
                                                          config f pc;
                                                        (let cxt =
                                                           ident cxt f i in
                                                         Pp.string f "=";
                                                         Pp.break f;
                                                         (let cxt =
                                                            expression cxt 1
                                                              f e in
                                                          Pp.end_group f; cxt))) : 
                                                  cxt)
                                                and variable_declaration_list_aux
                                                  cxt f l =
                                                  match l with
                                                  | [] -> assert false
                                                  | d::[] ->
                                                      variable_declaration
                                                        cxt f d
                                                  | d::r ->
                                                      let cxt =
                                                        variable_declaration
                                                          cxt f d in
                                                      (Pp.string f ",";
                                                       Pp.break f;
                                                       variable_declaration_list_aux
                                                         cxt f r)
                                                and variable_declaration_list
                                                  cxt close f variables =
                                                  (match variables with
                                                   | [] -> cxt
                                                   | (i,None )::[] ->
                                                       (Pp.start_group f 1;
                                                        Pp.string f "var";
                                                        Pp.space f;
                                                        (let cxt =
                                                           ident cxt f i in
                                                         if close
                                                         then Pp.string f ";";
                                                         Pp.end_group f;
                                                         cxt))
                                                   | (i,Some (e,pc))::[] ->
                                                       (Pp.start_group f 1;
                                                        output_debug_info
                                                          config f pc;
                                                        Pp.string f "var";
                                                        Pp.space f;
                                                        (let cxt =
                                                           ident cxt f i in
                                                         Pp.string f "=";
                                                         Pp.break1 f;
                                                         Pp.start_group f 0;
                                                         (let cxt =
                                                            expression cxt 1
                                                              f e in
                                                          if close
                                                          then
                                                            Pp.string f ";";
                                                          Pp.end_group f;
                                                          Pp.end_group f;
                                                          cxt)))
                                                   | l ->
                                                       (Pp.start_group f 1;
                                                        Pp.string f "var";
                                                        Pp.space f;
                                                        (let cxt =
                                                           variable_declaration_list_aux
                                                             cxt f l in
                                                         if close
                                                         then Pp.string f ";";
                                                         Pp.end_group f;
                                                         cxt)) : cxt)
                                                and opt_expression cxt l f e
                                                  =
                                                  match e with
                                                  | None  -> cxt
                                                  | Some e ->
                                                      expression cxt l f e
                                                and statement ?(last= false) 
                                                  cxt f
                                                  ({ statement_desc = s; 
                                                     loc; comment;_}
                                                    : J.statement)
                                                  =
                                                  (let last_semi () =
                                                     if last
                                                     then ()
                                                     else Pp.string f ";" in
                                                   output_debug_info config f
                                                     loc;
                                                   (let () =
                                                      match comment with
                                                      | None  -> ()
                                                      | Some x ->
                                                          (Pp.string f "/* ";
                                                           Pp.string f x;
                                                           Pp.string f " */";
                                                           Pp.break f) in
                                                    match s with
                                                    | Comment s ->
                                                        (Pp.string f "// ";
                                                         Pp.string f s;
                                                         cxt)
                                                    | Block b ->
                                                        block cxt f b
                                                    | Variable l ->
                                                        variable_declaration_list
                                                          cxt (not last) f l
                                                    | Empty  -> cxt
                                                    | Debugger  ->
                                                        (Pp.string f
                                                           "debugger";
                                                         last_semi ();
                                                         cxt)
                                                    | Exp
                                                        {
                                                          expression_desc =
                                                            EVar _
                                                          }
                                                        ->
                                                        (last_semi (); cxt)
                                                    | Exp e ->
                                                        if need_paren 0 e
                                                        then
                                                          (Pp.start_group f 1;
                                                           Pp.string f "(";
                                                           (let cxt =
                                                              expression cxt
                                                                0 f e in
                                                            Pp.string f ")";
                                                            last_semi ();
                                                            Pp.end_group f;
                                                            cxt))
                                                        else
                                                          (Pp.start_group f 0;
                                                           (let cxt =
                                                              expression cxt
                                                                0 f e in
                                                            last_semi ();
                                                            Pp.end_group f;
                                                            cxt))
                                                    | If (e,s1,Some s2) when
                                                        ends_with_if_without_else
                                                          s1
                                                        ->
                                                        statement ~last cxt f
                                                          (let open J_helper.Stmt in
                                                             if_ e
                                                               (block [s1])
                                                               ~else_:s2)
                                                    | If
                                                        (e,s1,Some
                                                         ({
                                                            statement_desc =
                                                              Block _;_}
                                                            as s2))
                                                        ->
                                                        (Pp.start_group f 0;
                                                         Pp.start_group f 1;
                                                         Pp.string f "if";
                                                         Pp.break f;
                                                         Pp.start_group f 1;
                                                         Pp.string f "(";
                                                         (let cxt =
                                                            expression cxt 0
                                                              f e in
                                                          Pp.string f ")";
                                                          Pp.end_group f;
                                                          Pp.end_group f;
                                                          Pp.break1 f;
                                                          Pp.start_group f 0;
                                                          (let cxt =
                                                             statement cxt f
                                                               s1 in
                                                           Pp.end_group f;
                                                           Pp.break f;
                                                           Pp.string f "else";
                                                           Pp.break1 f;
                                                           Pp.start_group f 0;
                                                           (let cxt =
                                                              statement cxt
                                                                ~last f s2 in
                                                            Pp.end_group f;
                                                            Pp.end_group f;
                                                            cxt))))
                                                    | If (e,s1,Some s2) ->
                                                        (Pp.start_group f 0;
                                                         Pp.start_group f 1;
                                                         Pp.string f "if";
                                                         Pp.break f;
                                                         Pp.start_group f 1;
                                                         Pp.string f "(";
                                                         (let cxt =
                                                            expression cxt 0
                                                              f e in
                                                          Pp.string f ")";
                                                          Pp.end_group f;
                                                          Pp.end_group f;
                                                          Pp.break1 f;
                                                          Pp.start_group f 0;
                                                          (let cxt =
                                                             statement cxt f
                                                               s1 in
                                                           Pp.end_group f;
                                                           Pp.break f;
                                                           Pp.string f "else";
                                                           Pp.space ~indent:1
                                                             f;
                                                           Pp.start_group f 0;
                                                           (let cxt =
                                                              statement ~last
                                                                cxt f s2 in
                                                            Pp.end_group f;
                                                            Pp.end_group f;
                                                            cxt))))
                                                    | If (e,s1,None ) ->
                                                        (Pp.start_group f 1;
                                                         Pp.start_group f 0;
                                                         Pp.string f "if";
                                                         Pp.break f;
                                                         Pp.start_group f 1;
                                                         Pp.string f "(";
                                                         (let cxt =
                                                            expression cxt 0
                                                              f e in
                                                          Pp.string f ")";
                                                          Pp.end_group f;
                                                          Pp.end_group f;
                                                          Pp.break f;
                                                          Pp.start_group f 0;
                                                          (let cxt =
                                                             statement ~last
                                                               cxt f s1 in
                                                           Pp.end_group f;
                                                           Pp.end_group f;
                                                           cxt)))
                                                    | While (e,s) ->
                                                        (Pp.start_group f 1;
                                                         Pp.start_group f 0;
                                                         Pp.string f "while";
                                                         Pp.break f;
                                                         Pp.start_group f 1;
                                                         Pp.string f "(";
                                                         (let cxt =
                                                            expression cxt 0
                                                              f e in
                                                          Pp.string f ")";
                                                          Pp.end_group f;
                                                          Pp.end_group f;
                                                          Pp.break f;
                                                          Pp.start_group f 0;
                                                          (let cxt =
                                                             statement ~last
                                                               cxt f s in
                                                           Pp.end_group f;
                                                           Pp.end_group f;
                                                           cxt)))
                                                    | Do_while
                                                        (({
                                                            statement_desc =
                                                              Block _;_}
                                                            as s),e)
                                                        ->
                                                        (Pp.start_group f 0;
                                                         Pp.string f "do";
                                                         Pp.break1 f;
                                                         Pp.start_group f 0;
                                                         (let cxt =
                                                            statement cxt f s in
                                                          Pp.end_group f;
                                                          Pp.break f;
                                                          Pp.string f "while";
                                                          Pp.break1 f;
                                                          Pp.start_group f 1;
                                                          Pp.string f "(";
                                                          (let cxt =
                                                             expression cxt 0
                                                               f e in
                                                           Pp.string f ")";
                                                           last_semi ();
                                                           Pp.end_group f;
                                                           Pp.end_group f;
                                                           cxt)))
                                                    | Do_while (s,e) ->
                                                        (Pp.start_group f 0;
                                                         Pp.string f "do";
                                                         Pp.space ~indent:1 f;
                                                         Pp.start_group f 0;
                                                         (let cxt =
                                                            statement cxt f s in
                                                          Pp.end_group f;
                                                          Pp.break f;
                                                          Pp.string f "while";
                                                          Pp.break f;
                                                          Pp.start_group f 1;
                                                          Pp.string f "(";
                                                          (let cxt =
                                                             expression cxt 0
                                                               f e in
                                                           Pp.string f ")";
                                                           last_semi ();
                                                           Pp.end_group f;
                                                           Pp.end_group f;
                                                           cxt)))
                                                    | For (e1,e2,e3,s) ->
                                                        (Pp.start_group f 1;
                                                         Pp.start_group f 0;
                                                         Pp.string f "for";
                                                         Pp.break f;
                                                         Pp.start_group f 1;
                                                         Pp.string f "(";
                                                         (let cxt =
                                                            match e1 with
                                                            | Left e ->
                                                                opt_expression
                                                                  cxt 0 f e
                                                            | Right l ->
                                                                variable_declaration_list
                                                                  cxt false f
                                                                  l in
                                                          Pp.string f ";";
                                                          Pp.break f;
                                                          (let cxt =
                                                             opt_expression
                                                               cxt 0 f e2 in
                                                           Pp.string f ";";
                                                           Pp.break f;
                                                           (let cxt =
                                                              opt_expression
                                                                cxt 0 f e3 in
                                                            Pp.string f ")";
                                                            Pp.end_group f;
                                                            Pp.end_group f;
                                                            Pp.break f;
                                                            Pp.start_group f
                                                              0;
                                                            (let cxt =
                                                               statement
                                                                 ~last cxt f
                                                                 s in
                                                             Pp.end_group f;
                                                             Pp.end_group f;
                                                             cxt)))))
                                                    | ForIn (e1,e2,s) ->
                                                        (Pp.start_group f 1;
                                                         Pp.start_group f 0;
                                                         Pp.string f "for";
                                                         Pp.break f;
                                                         Pp.start_group f 1;
                                                         Pp.string f "(";
                                                         (let cxt =
                                                            match e1 with
                                                            | Left e ->
                                                                expression
                                                                  cxt 0 f e
                                                            | Right v ->
                                                                variable_declaration_list
                                                                  cxt false f
                                                                  [v] in
                                                          Pp.space f;
                                                          Pp.string f "in";
                                                          Pp.break f;
                                                          Pp.space f;
                                                          (let cxt =
                                                             expression cxt 0
                                                               f e2 in
                                                           Pp.string f ")";
                                                           Pp.end_group f;
                                                           Pp.end_group f;
                                                           Pp.break f;
                                                           Pp.start_group f 0;
                                                           (let cxt =
                                                              statement ~last
                                                                cxt f s in
                                                            Pp.end_group f;
                                                            Pp.end_group f;
                                                            cxt))))
                                                    | Continue (None ) ->
                                                        (Pp.string f
                                                           "continue";
                                                         last_semi ();
                                                         cxt)
                                                    | Continue (Some s) ->
                                                        (Pp.string f
                                                           "continue ";
                                                         Pp.string f s;
                                                         last_semi ();
                                                         cxt)
                                                    | Break (None ) ->
                                                        (Pp.string f "break";
                                                         last_semi ();
                                                         cxt)
                                                    | Break (Some s) ->
                                                        (Pp.string f "break ";
                                                         Pp.string f s;
                                                         last_semi ();
                                                         cxt)
                                                    | Return e ->
                                                        (match e with
                                                         | None  ->
                                                             (Pp.string f
                                                                "return";
                                                              last_semi ();
                                                              cxt)
                                                         | Some
                                                             {
                                                               expression_desc
                                                                 = EFun
                                                                 (i,l,b,pc);_}
                                                             ->
                                                             (Pp.start_group
                                                                f 1;
                                                              Pp.start_group
                                                                f 0;
                                                              Pp.start_group
                                                                f 0;
                                                              Pp.string f
                                                                "return function";
                                                              (let cxt =
                                                                 opt_identifier
                                                                   cxt f i in
                                                               Pp.end_group f;
                                                               Pp.break f;
                                                               Pp.start_group
                                                                 f 1;
                                                               Pp.string f
                                                                 "(";
                                                               (let cxt' =
                                                                  formal_parameter_list
                                                                    cxt f l in
                                                                Pp.string f
                                                                  ")";
                                                                Pp.end_group
                                                                  f;
                                                                Pp.end_group
                                                                  f;
                                                                Pp.break f;
                                                                Pp.start_group
                                                                  f 1;
                                                                Pp.string f
                                                                  "{";
                                                                (let () =
                                                                   ignore @@
                                                                    (function_body
                                                                    cxt' f b) in
                                                                 output_debug_info
                                                                   config f
                                                                   pc;
                                                                 Pp.string f
                                                                   "}";
                                                                 last_semi ();
                                                                 Pp.end_group
                                                                   f;
                                                                 Pp.end_group
                                                                   f;
                                                                 cxt))))
                                                         | Some e ->
                                                             (Pp.start_group
                                                                f 7;
                                                              Pp.string f
                                                                "return";
                                                              Pp.non_breaking_space
                                                                f;
                                                              Pp.start_group
                                                                f 0;
                                                              (let cxt =
                                                                 expression
                                                                   cxt 0 f e in
                                                               last_semi ();
                                                               Pp.end_group f;
                                                               Pp.end_group f;
                                                               cxt)))
                                                    | Labelled (i,s) ->
                                                        (Pp.string f i;
                                                         Pp.string f ":";
                                                         Pp.break f;
                                                         statement cxt ~last
                                                           f s)
                                                    | Switch (e,cc,def,cc')
                                                        ->
                                                        (Pp.start_group f 1;
                                                         Pp.start_group f 0;
                                                         Pp.string f "switch";
                                                         Pp.break f;
                                                         Pp.start_group f 1;
                                                         Pp.string f "(";
                                                         (let cxt =
                                                            expression cxt 0
                                                              f e in
                                                          Pp.string f ")";
                                                          Pp.end_group f;
                                                          Pp.end_group f;
                                                          Pp.break f;
                                                          Pp.start_group f 1;
                                                          Pp.string f "{";
                                                          (let output_one cxt
                                                             last (e,sl) =
                                                             (Pp.start_group
                                                                f 1;
                                                              Pp.start_group
                                                                f 1;
                                                              Pp.string f
                                                                "case";
                                                              Pp.space f;
                                                              (let cxt =
                                                                 expression
                                                                   cxt 0 f e in
                                                               Pp.string f
                                                                 ":";
                                                               Pp.end_group f;
                                                               Pp.break f;
                                                               Pp.start_group
                                                                 f 0;
                                                               (let cxt =
                                                                  statement_list
                                                                    cxt
                                                                    ~skip_last_semi:last
                                                                    f sl in
                                                                Pp.end_group
                                                                  f;
                                                                Pp.end_group
                                                                  f;
                                                                Pp.break f;
                                                                cxt)) : 
                                                             cxt) in
                                                           let rec loop cxt
                                                             last =
                                                             function
                                                             | [] -> cxt
                                                             | x::[] ->
                                                                 output_one
                                                                   cxt last x
                                                             | x::xs ->
                                                                 let cxt =
                                                                   output_one
                                                                    cxt false
                                                                    x in
                                                                 loop cxt
                                                                   last xs in
                                                           let cxt =
                                                             loop cxt
                                                               ((def = None)
                                                                  &&
                                                                  (cc' = []))
                                                               cc in
                                                           let cxt =
                                                             match def with
                                                             | None  -> cxt
                                                             | Some def ->
                                                                 (Pp.start_group
                                                                    f 1;
                                                                  Pp.string f
                                                                    "default:";
                                                                  Pp.break f;
                                                                  Pp.start_group
                                                                    f 0;
                                                                  (let cxt =
                                                                    statement_list
                                                                    ~skip_last_semi:(
                                                                    cc' = [])
                                                                    cxt f def in
                                                                   Pp.end_group
                                                                    f;
                                                                   Pp.end_group
                                                                    f;
                                                                   cxt)) in
                                                           let cxt =
                                                             loop cxt true
                                                               cc' in
                                                           Pp.string f "}";
                                                           Pp.end_group f;
                                                           Pp.end_group f;
                                                           cxt)))
                                                    | Throw e ->
                                                        (Pp.start_group f 6;
                                                         Pp.string f "throw";
                                                         Pp.non_breaking_space
                                                           f;
                                                         Pp.start_group f 0;
                                                         (let cxt =
                                                            expression cxt 0
                                                              f e in
                                                          last_semi ();
                                                          Pp.end_group f;
                                                          Pp.end_group f;
                                                          cxt))
                                                    | Try (b,ctch,fin) ->
                                                        (Pp.start_group f 0;
                                                         Pp.string f "try";
                                                         Pp.space ~indent:1 f;
                                                         (let cxt =
                                                            block cxt f b in
                                                          let cxt =
                                                            match ctch with
                                                            | None  -> cxt
                                                            | Some (i,b) ->
                                                                (Pp.break f;
                                                                 Pp.start_group
                                                                   f 1;
                                                                 Pp.string f
                                                                   "catch(";
                                                                 (let cxt =
                                                                    ident cxt
                                                                    f i in
                                                                  Pp.string f
                                                                    ")";
                                                                  Pp.break f;
                                                                  (let cxt =
                                                                    block cxt
                                                                    f b in
                                                                   Pp.end_group
                                                                    f;
                                                                   cxt))) in
                                                          let cxt =
                                                            match fin with
                                                            | None  -> cxt
                                                            | Some b ->
                                                                (Pp.break f;
                                                                 Pp.start_group
                                                                   f 1;
                                                                 Pp.string f
                                                                   "finally";
                                                                 Pp.space f;
                                                                 (let cxt =
                                                                    block cxt
                                                                    f b in
                                                                  Pp.end_group
                                                                    f;
                                                                  cxt)) in
                                                          Pp.end_group f; cxt))
                                                    | Fn (i,l,b,loc) ->
                                                        (Pp.start_group f 1;
                                                         Pp.start_group f 0;
                                                         Pp.start_group f 0;
                                                         Pp.string f
                                                           "function";
                                                         Pp.space f;
                                                         (let cxt =
                                                            ident cxt f i in
                                                          Pp.end_group f;
                                                          Pp.break f;
                                                          Pp.start_group f 1;
                                                          Pp.string f "(";
                                                          (let cxt' =
                                                             formal_parameter_list
                                                               cxt f l in
                                                           Pp.string f ")";
                                                           Pp.end_group f;
                                                           Pp.end_group f;
                                                           Pp.break f;
                                                           Pp.start_group f 1;
                                                           Pp.string f "{";
                                                           (let () =
                                                              ignore @@
                                                                (function_body
                                                                   cxt' f b) in
                                                            output_debug_info
                                                              config f loc;
                                                            Pp.string f "}";
                                                            Pp.end_group f;
                                                            Pp.end_group f;
                                                            cxt))))) : 
                                                  cxt)
                                                and statement_list cxt f
                                                  ?skip_last_semi  b =
                                                  match b with
                                                  | [] -> cxt
                                                  | s::[] ->
                                                      statement cxt f
                                                        ?last:skip_last_semi
                                                        s
                                                  | s::r ->
                                                      let cxt =
                                                        statement cxt f s in
                                                      (Pp.break f;
                                                       statement_list cxt f
                                                         ?skip_last_semi r)
                                                and block cxt f b =
                                                  Pp.start_group f 1;
                                                  Pp.string f "{";
                                                  (let cxt =
                                                     statement_list cxt
                                                       ~skip_last_semi:true f
                                                       b in
                                                   Pp.string f "}";
                                                   Pp.end_group f;
                                                   cxt)
                                                and source_elements cxt f
                                                  ?skip_last_semi  se =
                                                  (match se with
                                                   | [] -> cxt
                                                   | s::[] ->
                                                       statement cxt f
                                                         ?last:skip_last_semi
                                                         s
                                                   | s::r ->
                                                       let cxt =
                                                         statement cxt f s in
                                                       (Pp.break f;
                                                        source_elements cxt f
                                                          ?skip_last_semi r) : 
                                                  cxt)
                                                and program f s =
                                                  source_elements f s
                                              end
                                            let part_of_ident =
                                              let a =
                                                Array.init 256
                                                  (fun i  ->
                                                     let c = Char.chr i in
                                                     ((c >= 'a') &&
                                                        (c <= 'z'))
                                                       ||
                                                       (((c >= 'A') &&
                                                           (c <= 'Z'))
                                                          ||
                                                          (((c >= '0') &&
                                                              (c <= '9'))
                                                             ||
                                                             ((c = '_') ||
                                                                (c = '$'))))) in
                                              fun c  ->
                                                Array.unsafe_get a
                                                  (Char.code c)
                                            let need_space a b =
                                              ((part_of_ident a) &&
                                                 (part_of_ident b))
                                                || ((a = '/') && (b = '/'))
                                            let program cxt f ?source_map  p
                                              =
                                              (let smo =
                                                 match source_map with
                                                 | None  -> None
                                                 | Some (_,sm) -> Some sm in
                                               let module O =
                                                 Make(struct
                                                        let source_map = smo
                                                      end) in
                                                 Pp.set_needed_space_function
                                                   f need_space;
                                                 Pp.start_group f 0;
                                                 (let cxt = O.program cxt f p in
                                                  Pp.end_group f;
                                                  Pp.newline f;
                                                  (match source_map with
                                                   | None  -> ()
                                                   | Some (out_file,sm) ->
                                                       let sources =
                                                         sm.Source_map.sources in
                                                       let sources_content =
                                                         match sm.Source_map.sources_content
                                                         with
                                                         | None  -> None
                                                         | Some [] ->
                                                             Some
                                                               (List.map
                                                                  (fun file 
                                                                    ->
                                                                    if
                                                                    Sys.file_exists
                                                                    file
                                                                    then
                                                                    let content
                                                                    =
                                                                    read_file
                                                                    file in
                                                                    Some
                                                                    content
                                                                    else None)
                                                                  sources)
                                                         | Some _ ->
                                                             assert false in
                                                       let mappings =
                                                         List.map
                                                           (fun (pos,m)  ->
                                                              {
                                                                m with
                                                                Source_map.gen_line
                                                                  =
                                                                  (pos.Pp.p_line);
                                                                Source_map.gen_col
                                                                  =
                                                                  (pos.Pp.p_col)
                                                              })
                                                           (!O.temp_mappings) in
                                                       let sources =
                                                         match sm.Source_map.sourceroot
                                                         with
                                                         | None  -> sources
                                                         | Some root ->
                                                             let script_file
                                                               =
                                                               (Filename.chop_extension
                                                                  sm.Source_map.file)
                                                                 ^
                                                                 ".make-sourcemap-links.sh" in
                                                             let oc =
                                                               open_out
                                                                 script_file in
                                                             let printf fmt =
                                                               Printf.fprintf
                                                                 oc fmt in
                                                             let targets =
                                                               List.map
                                                                 (fun src  ->
                                                                    Filename.basename
                                                                    src)
                                                                 sources in
                                                             (printf
                                                                "#! /bin/bash\n";
                                                              printf
                                                                "mkdir -p %s\n"
                                                                root;
                                                              List.iter2
                                                                (fun src  ->
                                                                   fun tg  ->
                                                                    printf
                                                                    "ln -s %s %s\n"
                                                                    src
                                                                    (Filename.concat
                                                                    root tg))
                                                                sources
                                                                targets;
                                                              close_out oc;
                                                              warn
                                                                "Source-map info: run 'sh %s' to create links to sources in %s.\n%!"
                                                                script_file
                                                                root;
                                                              targets) in
                                                       let sm =
                                                         {
                                                           sm with
                                                           Source_map.sources
                                                             = sources;
                                                           sources_content;
                                                           mappings
                                                         } in
                                                       let urlData =
                                                         match out_file with
                                                         | None  ->
                                                             let buf =
                                                               Buffer.create
                                                                 1024 in
                                                             let pp =
                                                               Pp.to_buffer
                                                                 buf in
                                                             let json =
                                                               Source_map.json
                                                                 sm in
                                                             (Json.pp pp json;
                                                              (let data =
                                                                 Buffer.contents
                                                                   buf in
                                                               "data:application/json;base64,"
                                                                 ^
                                                                 (B64.encode
                                                                    data)))
                                                         | Some out_file ->
                                                             let oc =
                                                               open_out
                                                                 out_file in
                                                             let pp =
                                                               Pp.to_out_channel
                                                                 oc in
                                                             (Pp.set_compact
                                                                pp false;
                                                              (let json =
                                                                 Source_map.json
                                                                   sm in
                                                               Json.pp pp
                                                                 json;
                                                               close_out oc;
                                                               Filename.basename
                                                                 out_file)) in
                                                       (Pp.newline f;
                                                        Pp.string f
                                                          (Printf.sprintf
                                                             "//# sourceMappingURL=%s"
                                                             urlData)));
                                                  cxt) : cxt)
                                          end and
                                               Source_map:sig
                                                            type map =
                                                              {
                                                              gen_line: int;
                                                              gen_col: int;
                                                              ori_source:
                                                                int;
                                                              ori_line: int;
                                                              ori_col: int;
                                                              ori_name:
                                                                int option;}
                                                            type mapping =
                                                              map list
                                                            type t =
                                                              {
                                                              version: int;
                                                              file: string;
                                                              sourceroot:
                                                                string option;
                                                              mutable
                                                                sources:
                                                                string list;
                                                              mutable
                                                                sources_content:
                                                                string option
                                                                  list option;
                                                              mutable names:
                                                                string list;
                                                              mutable
                                                                mappings:
                                                                mapping;}
                                                            val json :
                                                              t -> Json.t
                                                          end =
                                               struct
                                                 type map =
                                                   {
                                                   gen_line: int;
                                                   gen_col: int;
                                                   ori_source: int;
                                                   ori_line: int;
                                                   ori_col: int;
                                                   ori_name: int option;}
                                                 type mapping = map list
                                                 type t =
                                                   {
                                                   version: int;
                                                   file: string;
                                                   sourceroot: string option;
                                                   mutable sources:
                                                     string list;
                                                   mutable sources_content:
                                                     string option list
                                                       option;
                                                   mutable names:
                                                     string list;
                                                   mutable mappings: mapping;}
                                                 let string_of_mapping
                                                   mapping =
                                                   let a =
                                                     Array.of_list mapping in
                                                   let len = Array.length a in
                                                   Array.stable_sort
                                                     (fun t1  ->
                                                        fun t2  ->
                                                          match compare
                                                                  t1.gen_line
                                                                  t2.gen_line
                                                          with
                                                          | 0 ->
                                                              compare
                                                                t1.gen_col
                                                                t2.gen_col
                                                          | n -> n) a;
                                                   (let buf =
                                                      Buffer.create 1024 in
                                                    let gen_line = ref 0 in
                                                    let gen_col = ref 0 in
                                                    let ori_source = ref 0 in
                                                    let ori_line = ref 0 in
                                                    let ori_col = ref 0 in
                                                    let ori_name = ref 0 in
                                                    let rec loop prev i =
                                                      if i < len
                                                      then
                                                        let c = a.(i) in
                                                        (if
                                                           (prev >= 0) &&
                                                             ((c.ori_source =
                                                                 (a.(prev)).ori_source)
                                                                &&
                                                                ((c.ori_line
                                                                    =
                                                                    (a.(prev)).ori_line)
                                                                   &&
                                                                   (c.ori_col
                                                                    =
                                                                    (a.(prev)).ori_col)))
                                                         then
                                                           loop prev (i + 1)
                                                         else
                                                           if
                                                             ((i + 1) < len)
                                                               &&
                                                               ((c.gen_line =
                                                                   (a.(i + 1)).gen_line)
                                                                  &&
                                                                  (c.gen_col
                                                                    =
                                                                    (a.(
                                                                    i + 1)).gen_col))
                                                           then
                                                             loop prev
                                                               (i + 1)
                                                           else
                                                             (if
                                                                (!gen_line)
                                                                  <>
                                                                  c.gen_line
                                                              then
                                                                (assert
                                                                   ((!gen_line)
                                                                    <
                                                                    c.gen_line);
                                                                 for _i =
                                                                   !gen_line
                                                                   to
                                                                   c.gen_line
                                                                    - 1
                                                                   do
                                                                   Buffer.add_char
                                                                    buf ';'
                                                                 done;
                                                                 gen_col := 0;
                                                                 gen_line :=
                                                                   c.gen_line)
                                                              else
                                                                if i > 0
                                                                then
                                                                  Buffer.add_char
                                                                    buf ',';
                                                              (let l =
                                                                 (c.gen_col -
                                                                    (
                                                                    !gen_col))
                                                                 ::
                                                                 (if
                                                                    c.ori_source
                                                                    = (-1)
                                                                  then []
                                                                  else
                                                                    (
                                                                    c.ori_source
                                                                    -
                                                                    (!ori_source))
                                                                    ::
                                                                    (
                                                                    c.ori_line
                                                                    -
                                                                    (!ori_line))
                                                                    ::
                                                                    (
                                                                    c.ori_col
                                                                    -
                                                                    (!ori_col))
                                                                    ::
                                                                    ((
                                                                    match 
                                                                    c.ori_name
                                                                    with
                                                                    | 
                                                                    None  ->
                                                                    []
                                                                    | 
                                                                    Some n ->
                                                                    let n' =
                                                                    !ori_name in
                                                                    (ori_name
                                                                    := n;
                                                                    [n - n'])))) in
                                                               gen_col :=
                                                                 c.gen_col;
                                                               if
                                                                 c.ori_source
                                                                   <> (-1)
                                                               then
                                                                 (ori_source
                                                                    :=
                                                                    c.ori_source;
                                                                  ori_line :=
                                                                    c.ori_line;
                                                                  ori_col :=
                                                                    c.ori_col);
                                                               Vlq64.encode_l
                                                                 buf l;
                                                               loop i (i + 1)))) in
                                                    loop (-1) 0;
                                                    Buffer.contents buf)
                                                 let json t =
                                                   `O
                                                     [("version",
                                                        (`Float
                                                           (float_of_int
                                                              t.version)));
                                                     ("file",
                                                       (`String (t.file)));
                                                     ("sourceRoot",
                                                       (`String
                                                          ((match t.sourceroot
                                                            with
                                                            | None  -> ""
                                                            | Some s -> s))));
                                                     ("names",
                                                       (`A
                                                          (List.map
                                                             (fun s  ->
                                                                `String s)
                                                             t.names)));
                                                     ("mappings",
                                                       (`String
                                                          (string_of_mapping
                                                             t.mappings)));
                                                     ("sources",
                                                       (`A
                                                          (List.map
                                                             (fun s  ->
                                                                `String s)
                                                             t.sources)));
                                                     ("sourcesContent",
                                                       (`A
                                                          ((match t.sources_content
                                                            with
                                                            | None  -> []
                                                            | Some l ->
                                                                List.map
                                                                  (function
                                                                   | 
                                                                   None  ->
                                                                    `Null
                                                                   | 
                                                                   Some s ->
                                                                    `String s)
                                                                  l))))]
                                               end and
                                                    Vlq64:sig
                                                            val encode_l :
                                                              Buffer.t ->
                                                                int list ->
                                                                  unit
                                                          end =
                                                    struct
                                                      let code =
                                                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                                                      let code_rev =
                                                        let a =
                                                          Array.make 127 (-1) in
                                                        for i = 0 to
                                                          (String.length code)
                                                            - 1
                                                          do
                                                          a.(Char.code
                                                               (code.[i]))
                                                          <- i
                                                        done;
                                                        a
                                                      let vlq_base_shift = 5
                                                      let vlq_base =
                                                        1 lsl vlq_base_shift
                                                      let vlq_base_mask =
                                                        vlq_base - 1
                                                      let vlq_continuation_bit
                                                        = vlq_base
                                                      let toVLQSigned v =
                                                        if v < 0
                                                        then
                                                          ((- v) lsl 1) + 1
                                                        else v lsl 1
                                                      let fromVLQSigned v =
                                                        let is_neg =
                                                          (v land 1) = 1 in
                                                        let shift = v lsr 1 in
                                                        if is_neg
                                                        then - shift
                                                        else shift
                                                      let add_char buf x =
                                                        Buffer.add_char buf
                                                          (code.[x])
                                                      let rec encode' buf x =
                                                        let digit =
                                                          x land
                                                            vlq_base_mask in
                                                        let rest =
                                                          x lsr
                                                            vlq_base_shift in
                                                        if rest = 0
                                                        then
                                                          add_char buf digit
                                                        else
                                                          (add_char buf
                                                             (digit lor
                                                                vlq_continuation_bit);
                                                           encode' buf rest)
                                                      let encode b x =
                                                        let vql =
                                                          toVLQSigned x in
                                                        encode' b vql
                                                      let encode_l b l =
                                                        List.iter (encode b)
                                                          l
                                                      let rec decode' acc s
                                                        start pos =
                                                        let digit =
                                                          code_rev.(Char.code
                                                                    (s.[pos])) in
                                                        let cont =
                                                          (digit land
                                                             vlq_continuation_bit)
                                                            =
                                                            vlq_continuation_bit in
                                                        let digit =
                                                          digit land
                                                            vlq_base_mask in
                                                        let acc =
                                                          acc +
                                                            (digit lsl
                                                               ((pos - start)
                                                                  *
                                                                  vlq_base_shift)) in
                                                        if cont
                                                        then
                                                          decode' acc s start
                                                            (succ pos)
                                                        else
                                                          (acc, (succ pos))
                                                      let decode s p =
                                                        let (d,i) =
                                                          decode' 0 s p p in
                                                        ((fromVLQSigned d),
                                                          i)
                                                      let decode_pos s =
                                                        let sl =
                                                          String.length s in
                                                        let rec aux pos acc =
                                                          if
                                                            (List.length acc)
                                                              > 10
                                                          then assert false;
                                                          (let (d,i) =
                                                             decode s pos in
                                                           if i = sl
                                                           then
                                                             List.rev (d ::
                                                               acc)
                                                           else
                                                             aux i (d :: acc)) in
                                                        aux 0 []
                                                      let _ = decode_pos
                                                    end
