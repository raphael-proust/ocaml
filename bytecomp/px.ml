[@@@warning "-a"]
include
  struct
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
    module Jlist :
      sig
        val filter_map : ('a -> 'b option) -> 'a list -> 'b list
        val init : int -> (int -> 'a) -> 'a list
        val take : int -> 'a list -> ('a list* 'a list)
      end =
      struct
        let rec filter_map (f : 'a -> 'b option) xs =
          match xs with
          | [] -> []
          | y::ys ->
              (match f y with
               | None  -> filter_map f ys
               | Some z -> z :: (filter_map f ys))
        let init n f = Array.to_list (Array.init n f)
        let take n l =
          let arr = Array.of_list l in
          let arr_length = Array.length arr in
          if arr_length < n
          then invalid_arg "Jlist.take"
          else
            ((Array.to_list (Array.sub arr 0 n)),
              (Array.to_list (Array.sub arr n (arr_length - n))))
      end 
    module Util :
      sig
        val string_of_fmt : (Format.formatter -> 'a -> unit) -> 'a -> string
      end =
      struct
        let string_of_fmt (f : Format.formatter -> 'a -> unit) v =
          let buf = Buffer.create 37 in
          let fmt = Format.formatter_of_buffer buf in
          let () = f fmt v; Format.pp_print_flush fmt () in
          Buffer.contents buf
      end 
    module Lambda_util :
      sig
        val string_of_lambda : Lambda.lambda -> string
        val string_of_primitive : Lambda.primitive -> string
        type function_arities =
          | Approximate of bool* int list*
          bool[@ocaml.doc
                " when the first argument is true, it is for sure \n      approximation sound but not complete "]
          | NA
        type arities_tbl = (Ident.t,function_arities ref) Hashtbl.t
        type alias_tbl = (Ident.t,Ident.t) Hashtbl.t
        type state =
          | Live[@ocaml.doc " Globals are always live "]
          | Dead[@ocaml.doc " removed after elimination "]
          | NA
        type module_id =
          | Global of Ident.t
          | Local of Ident.t list
        type function_kind =
          | Functor
          | Function
          | NA
        type function_id =
          {
          kind: function_kind;
          mutable arity: function_arities;}
        type kind =
          | Module of
          module_id[@ocaml.doc " True is global otherwise inner "]
          | Record
          | Function of function_id[@ocaml.doc " True then functor "]
          | Exception
          | NA
        type ident_tbl = (Ident.t,kind) Hashtbl.t
        type ident_info = {
          kind: kind;
          state: state;}
        type meta =
          {
          alias_tbl: alias_tbl;
          ident_tbl:
            ident_tbl[@ocaml.doc
                       " we don't need count arities for all identifiers, for identifiers\n        for sure it's not a function, there is no need to count them\n     "];
          exports: Ident.t list;
          mutable required_modules: Ident.t list;}
        val get_arity : meta -> Lambda.lambda -> function_arities
        val add_required_module : Ident.t -> meta -> unit
        val add_required_modules : Ident.t list -> meta -> unit
        val pp_arities_tbl : Format.formatter -> arities_tbl -> unit
        val pp_alias_tbl : Format.formatter -> alias_tbl -> unit
        val beta_reduce :
          Ident.t list ->
            Lambda.lambda -> Lambda.lambda list -> Lambda.lambda
        val mklet :
          Ident.t list ->
            (Lambda.let_kind* Ident.t* Lambda.lambda* Lambda.lambda) ->
              Lambda.lambda
      end =
      struct
        let string_of_fmt (f : Format.formatter -> 'a -> unit) v =
          let buf = Buffer.create 37 in
          let fmt = Format.formatter_of_buffer buf in
          let () = f fmt v; Format.pp_print_flush fmt () in
          Buffer.contents buf
        let string_of_lambda = string_of_fmt Printlambda.lambda
        let string_of_primitive = string_of_fmt Printlambda.primitive
        [@@@ocaml.text
          " It can be useful for common sub expression elimination ? \n    if two lambdas are not equal, it should return false, other wise, \n    it might return true , this is only used as a way of optimizaton\n\n    Use case :\n    1. switch case -- common fall through\n "]
        [@@@ocaml.text
          " lambda pass for alpha conversion \n    and alias\n    we need think about the order of the pass, might be the alias pass can be done \n    in the  beginning, when we do alpha conversion, we can instrument the table \n "]
        type function_arities =
          | Approximate of bool* int list*
          bool[@ocaml.doc
                " when the first argument is true, it is for sure \n      approximation sound but not complete "]
          | NA
        let pp = Format.fprintf
        let pp_arities (fmt : Format.formatter) (x : function_arities) =
          match x with
          | NA  -> pp fmt "?"
          | Approximate (b,ls,tail) ->
              (pp fmt "@[";
               if not b then pp fmt "~";
               pp fmt "[";
               Format.pp_print_list
                 ~pp_sep:(fun fmt  -> fun ()  -> pp fmt ",")
                 Format.pp_print_int fmt ls;
               if tail then pp fmt "@ *";
               pp fmt "]@]")
        type arities_tbl = (Ident.t,function_arities ref) Hashtbl.t
        type alias_tbl = (Ident.t,Ident.t) Hashtbl.t
        let pp_arities_tbl (fmt : Format.formatter)
          (arities_tbl : (Ident.t,function_arities ref) Hashtbl.t) =
          Hashtbl.fold
            (fun (i : Ident.t)  ->
               fun (v : function_arities ref)  ->
                 fun _  ->
                   pp Format.err_formatter "@[%s -> %a@]@." i.name pp_arities
                     (!v)) arities_tbl ()
        let pp_alias_tbl fmt (tbl : alias_tbl) =
          Hashtbl.iter
            (fun k  ->
               fun v  -> pp fmt "@[%a -> %a@]@." Ident.print k Ident.print v)
            tbl
        type state =
          | Live[@ocaml.doc " Globals are always live "]
          | Dead[@ocaml.doc " removed after elimination "]
          | NA
        type module_id =
          | Global of Ident.t
          | Local of Ident.t list
        type function_kind =
          | Functor
          | Function
          | NA
        type function_id =
          {
          kind: function_kind;
          mutable arity: function_arities;}
        type kind =
          | Module of
          module_id[@ocaml.doc " True is global otherwise inner "]
          | Record
          | Function of function_id[@ocaml.doc " True then functor "]
          | Exception
          | NA
        type ident_tbl = (Ident.t,kind) Hashtbl.t
        type ident_info = {
          kind: kind;
          state: state;}
        type meta =
          {
          alias_tbl: alias_tbl;
          ident_tbl:
            ident_tbl[@ocaml.doc
                       " we don't need count arities for all identifiers, for identifiers\n        for sure it's not a function, there is no need to count them\n     "];
          exports:
            Ident.t list[@ocaml.doc
                          " required modules completed by [alias_pass] "];
          mutable required_modules: Ident.t list;}
        let merge (n : int) (x : function_arities) =
          match x with
          | NA  -> Approximate (false, [n], false)
          | Approximate (b,xs,tail) -> Approximate (b, (n :: xs), tail)
        let rec get_arity (meta : meta) (lam : Lambda.lambda) =
          (match lam with
           | Lconst _ -> Approximate (true, [], false)
           | Lvar v ->
               (match Hashtbl.find meta.ident_tbl v with
                | exception Not_found  -> (NA : function_arities)
                | Function { arity;_} -> arity
                | _ ->
                    (Format.fprintf Format.err_formatter
                       "%a is not function/functor" Ident.print v;
                     (NA : function_arities)))
           | Llet (_,_,_,l) -> get_arity meta l
           | Lprim (Pfield _,_) -> NA
           | Lprim (Praise _,_) -> Approximate (true, [], true)
           | Lprim (Pccall _,_) -> Approximate (false, [], false)
           | Lprim _ -> Approximate (true, [], false)
           | Lletrec (_,body) -> get_arity meta body
           | Lapply (app,args,_info) ->
               let fn = get_arity meta app in
               (match fn with
                | NA  -> NA
                | Approximate (b,xs,tail) ->
                    let rec take (xs : int list) arg_length =
                      match xs with
                      | x::xs ->
                          if arg_length = x
                          then Approximate (b, xs, tail)
                          else
                            if arg_length > x
                            then take xs (arg_length - x)
                            else
                              Approximate (b, ((x - arg_length) :: xs), tail)
                      | [] ->
                          if tail
                          then Approximate (b, [], tail)
                          else
                            if not b
                            then NA
                            else failwith (string_of_lambda lam) in
                    take xs (List.length args))
           | Lfunction (kind,params,l) ->
               let n = List.length params in merge n (get_arity meta l)
           | Lswitch
               (l,{ sw_failaction; sw_consts; sw_blocks; sw_numblocks = _;
                    sw_numconsts = _ })
               ->
               all_lambdas meta
                 (let rest =
                    (sw_consts |> (List.map snd)) @
                      (sw_blocks |> (List.map snd)) in
                  match sw_failaction with
                  | None  -> rest
                  | Some x -> x :: rest)
           | Lstringswitch (l,sw,d) ->
               (match d with
                | None  -> all_lambdas meta (List.map snd sw)
                | Some v -> all_lambdas meta (v :: (List.map snd sw)))
           | Lstaticraise _ -> NA
           | Lstaticcatch (_,_,handler) -> get_arity meta handler
           | Ltrywith (l1,_,l2) -> all_lambdas meta [l1; l2]
           | Lifthenelse (l1,l2,l3) -> all_lambdas meta [l2; l3]
           | Lsequence (_,l2) -> get_arity meta l2
           | Lsend (u,m,o,ll,v) -> NA
           | Levent (l,event) -> NA
           | Lifused (v,l) -> NA
           | Lwhile _|Lfor _|Lassign _ -> Approximate (true, [], false) : 
          function_arities)[@@ocaml.doc
                             " we need record all aliases -- since not all aliases are eliminated, \n    mostly are toplevel bindings\n    We will keep iterating such environment\n"]
        and all_lambdas meta (xs : Lambda.lambda list) =
          match xs with
          | y::ys ->
              let arity = get_arity meta y in
              List.fold_left
                (fun exist  ->
                   fun (v : Lambda.lambda)  ->
                     match (exist : function_arities) with
                     | NA  -> NA
                     | Approximate (b,xs,tail) ->
                         (match get_arity meta v with
                          | NA  -> NA
                          | Approximate (u,ys,tail2) ->
                              let rec aux (b,acc) xs ys =
                                match (xs, ys) with
                                | ([],[]) ->
                                    (b, (List.rev acc), (tail && tail2))
                                | ([],y::ys) when tail ->
                                    aux (b, (y :: acc)) [] ys
                                | (x::xs,[]) when tail2 ->
                                    aux (b, (x :: acc)) [] xs
                                | (x::xs,y::ys) when x = y ->
                                    aux (b, (y :: acc)) xs ys
                                | (_,_) -> (false, (List.rev acc), false) in
                              let (b,acc,tail3) = aux ((u && b), []) xs ys in
                              Approximate (b, acc, tail3))) arity ys
          | _ -> assert false
        let add_required_module (x : Ident.t) (meta : meta) =
          meta.required_modules <- x :: (meta.required_modules)
        let add_required_modules (x : Ident.t list) (meta : meta) =
          meta.required_modules <- x @ meta.required_modules
        let mklet export_defs (kind,v,e1,e2) =
          (match (e2 : Lambda.lambda) with
           | Lvar w when (Ident.same v w) && (not (List.mem v export_defs))
               -> e1
           | _ -> Llet (kind, v, e1, e2) : Lambda.lambda)
        let beta_reduce params body args =
          List.fold_left2
            (fun l  ->
               fun param  -> fun arg  -> Lambda.Llet (Strict, param, arg, l))
            body params args
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
    module J_helper :
      sig
        val prim : string[@@ocaml.doc
                           " The [CamlPrimtivie] primitives are from this module, in the future,\n    we might split into several small modules\n"]
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
                ?loc:J.location -> J.ident list -> J.block -> t
          val econd : ?comment:string -> t -> t -> t -> t
          val int : ?comment:string -> int -> t
          val float : ?comment:string -> float -> t
          val eqeq : ?comment:string -> t -> t -> t
          val eq : ?comment:string -> t -> t -> t
          val eqeqeq : ?comment:string -> t -> t -> t
          val typeof : ?comment:string -> t -> t
          val bin : ?comment:string -> J.binop -> t -> t -> t
          val un : ?comment:string -> J.unop -> t -> t
          val not : t -> t
          val call : ?comment:string -> ?loc:J.location -> t -> t list -> t
          val arr : ?comment:string -> t list -> t
          val seq : ?comment:string -> t -> t -> t
          val obj : ?comment:string -> J.property_map -> t
          val true_ : t
          val false_ : t
          val unknown_lambda : ?comment:string -> Lambda.lambda -> t
          val unknown_primitive : ?comment:string -> Lambda.primitive -> t
          val unit : ?comment:string -> unit -> t[@@ocaml.doc
                                                   " [unit] in ocaml will be compiled into [0]  in js"]
          val js_var : ?comment:string -> string -> t
          val undefined : ?comment:string -> unit -> t
          val math : ?comment:string -> string -> t[@@ocaml.doc
                                                     " [math \"abs\"] --> Math[\"abs\"] "]
          [@@ocaml.doc " [prim \"xx\"] ->  CamlPrimtivie[\"xx\"] "]
          val prim : ?comment:string -> string -> t[@@ocaml.doc
                                                     " [prim \"xx\"] ->  CamlPrimtivie[\"xx\"] "]
          val global : ?comment:string -> string -> t[@@ocaml.doc
                                                       " [global \"xx\"] -> CamlPrimtivie[\"caml_global_data\"][\"xx\"]\n      this name is subject to change, don't use it externally\n   "]
          val inc : ?comment:string -> t -> t
          val dec : ?comment:string -> t -> t
          val null : ?comment:string -> unit -> t
          val string : ?comment:string -> string -> t
          val tag : ?comment:string -> J.expression -> t
        end
        module Stmt :
        sig
          type t = J.statement
          val unit : t
          val mk :
            ?comment:string -> ?loc:J.location -> J.statement_desc -> t
          val empty : ?comment:string -> ?loc:J.location -> unit -> t
          val comment : ?loc:J.location -> string -> t
          val throw : ?comment:string -> ?loc:J.location -> J.expression -> t
          val if_ :
            ?comment:string ->
              ?loc:J.location -> ?else_:t -> J.expression -> t -> t
          val block : ?comment:string -> ?loc:J.location -> J.block -> t
          val switch :
            ?comment:string ->
              ?loc:J.location ->
                ?others:J.case_clause list ->
                  ?default:J.block -> J.expression -> J.case_clause list -> t
          val variable :
            ?comment:string ->
              ?loc:J.location ->
                ?loc_exp:(J.expression* J.location) -> Ident.t -> t
          val assign :
            ?comment:string ->
              ?loc:J.location -> J.ident -> J.expression -> t
          val assign_unit :
            ?comment:string -> ?loc:J.location -> J.ident -> t
          val declare_unit :
            ?comment:string -> ?loc:J.location -> J.ident -> t
          val while_ :
            ?comment:string -> ?loc:J.location -> J.expression -> t -> t
          val for_ :
            ?comment:string ->
              ?loc:J.location ->
                ?pred:J.expression ->
                  ?step:J.expression ->
                    (J.expression option,J.variable_declaration list)
                      J.either -> t -> t
          val try_ :
            ?comment:string ->
              ?loc:J.location ->
                ?with_:(J.ident* J.block) -> ?finally:J.block -> J.block -> t
          val exp : ?comment:string -> ?loc:J.location -> J.expression -> t
          val return :
            ?comment:string -> ?loc:J.location -> J.expression option -> t
          val unknown_lambda :
            ?comment:string -> ?loc:J.location -> Lambda.lambda -> t
          val return_unit : ?comment:string -> ?loc:J.location -> unit -> t
          [@@ocaml.doc
            " for ocaml function which returns unit \n      it will be compiled into [return 0] in js "]
          val break :
            ?comment:string -> ?label:J.label -> ?loc:J.location -> unit -> t
        end
      end =
      struct
        [@@@ocaml.text " A module help construct js ast "]
        let prim = "CamlPrimitive"
        module Exp =
          struct
            type t = J.expression
            let mk ?comment  exp = ({ expression_desc = exp; comment } : t)
            let access ?comment  e0 e1 =
              ({ expression_desc = (EAccess (e0, e1)); comment } : t)
            let var ?comment  id =
              ({ expression_desc = (EVar id); comment } : t)
            let str ?comment  s =
              ({ expression_desc = (EStr (s, `Utf8)); comment } : t)
            let efun ?comment  ?name  ?(loc= J.N)  params block =
              ({ expression_desc = (EFun (name, params, block, loc)); comment
               } : t)
            let econd ?comment  b t f =
              ({ expression_desc = (ECond (b, t, f)); comment } : t)
            let int ?comment  i =
              ({ expression_desc = (ENum (float i)); comment } : t)
            let float ?comment  i =
              ({ expression_desc = (ENum i); comment } : t)
            let eqeq ?comment  e0 e1 =
              ({ expression_desc = (EBin (EqEq, e0, e1)); comment } : 
              t)
            let eq ?comment  e0 e1 =
              ({ expression_desc = (EBin (Eq, e0, e1)); comment } : t)
            let eqeqeq ?comment  e0 e1 =
              ({ expression_desc = (EBin (EqEqEq, e0, e1)); comment } : 
              t)
            let typeof ?comment  e =
              ({ expression_desc = (EUn (Typeof, e)); comment } : t)
            let bin ?comment  op e0 e1 =
              ({ expression_desc = (EBin (op, e0, e1)); comment } : t)
            let un ?comment  op e =
              ({ expression_desc = (EUn (op, e)); comment } : t)
            let not (({ expression_desc; comment } as e) : t) =
              (match expression_desc with
               | EBin ((EqEqEq |EqEq ),e0,e1) ->
                   { expression_desc = (EBin (NotEqEq, e0, e1)); comment }
               | EBin (NotEqEq ,e0,e1) ->
                   { expression_desc = (EBin (EqEqEq, e0, e1)); comment }
               | x -> { expression_desc = (EUn (Not, e)); comment = None } : 
              t)
            let call ?comment  ?(loc= J.N)  e0 args =
              ({ expression_desc = (ECall (e0, args, loc)); comment } : 
              t)
            let arr ?comment  es =
              ({
                 expression_desc = (EArr (List.map (fun x  -> Some x) es));
                 comment
               } : t)
            let seq ?comment  e0 e1 =
              ({ expression_desc = (ESeq (e0, e1)); comment } : t)
            let obj ?comment  properties =
              ({ expression_desc = (EObj properties); comment } : t)
            let true_ = var (Jident.create_js "true")
            let false_ = var (Jident.create_js "false")
            let unknown_lambda ?(comment= "unknown")  (lam : Lambda.lambda) =
              (str ~comment (Lambda_util.string_of_lambda lam) : t)
            let unknown_primitive ?(comment= "unknown") 
              (p : Lambda.primitive) =
              (str ~comment (Lambda_util.string_of_primitive p) : t)
            let unit ?comment  () = float ?comment 0.
            let js_var ?comment  (v : string) =
              var ?comment (Jident.create_js v)
            let undefined ?comment  () = js_var ?comment "undefined"
            let math ?comment  v = access ?comment (js_var "Math") (str v)
            let inc ?comment  (e : t) =
              match e with
              | { expression_desc = ENum i;_} ->
                  { e with expression_desc = (ENum (i +. 1.)) }
              | _ -> bin ?comment Plus e (int 1)[@@ocaml.doc
                                                  " handle comment "]
            let inc ?comment  (e : t) =
              match e with
              | { expression_desc = ENum i;_} ->
                  { e with expression_desc = (ENum (i +. 1.)) }
              | _ -> bin ?comment Plus e (int 1)[@@ocaml.doc
                                                  " handle comment "]
            let dec ?comment  (e : t) =
              match e with
              | { expression_desc = ENum i;_} ->
                  { e with expression_desc = (ENum (i -. 1.)) }
              | _ -> bin ?comment Minus e (int 1)
            let prim ?comment  v = access ?comment (js_var prim) (str v)
            let global ?comment  v =
              access (prim ?comment "caml_global_data") (str v)
            let null ?comment  () = js_var ?comment "null"
            let string ?comment  name =
              access ?comment (js_var "String") (str name)
            let tag ?comment  e = access ?comment e (int 0)
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
              ({ loc; statement_desc = (J.Throw v); comment } : t)
            let if_ ?comment  ?(loc= J.N)  ?else_  e then_ =
              ({ loc; statement_desc = (If (e, then_, else_)); comment } : 
              t)
            let block ?comment  ?(loc= J.N)  block =
              ({ loc; statement_desc = (Block block); comment } : t)
            let exp ?comment  ?(loc= J.N)  e =
              ({ loc; statement_desc = (Exp e); comment } : t)
            let switch ?comment  ?(loc= J.N)  ?(others= [])  ?default  e
              clauses =
              ({
                 loc;
                 statement_desc = (J.Switch (e, clauses, default, others));
                 comment
               } : t)
            let return ?comment  ?(loc= J.N)  e =
              ({ loc; statement_desc = (Return e); comment } : t)
            let variable ?comment  ?(loc= J.N)  ?loc_exp  (v : Ident.t) =
              ({ statement_desc = (J.Variable [(v, loc_exp)]); loc; comment } : 
              t)
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
              ({ loc; statement_desc = (While (e, st)); comment } : t)
            let for_ ?comment  ?(loc= J.N)  ?pred  ?step  init block =
              ({
                 loc;
                 statement_desc = (For (init, pred, step, block));
                 comment
               } : t)
            let try_ ?comment  ?(loc= J.N)  ?with_  ?finally  body =
              ({ loc; statement_desc = (Try (body, with_, finally)); comment
               } : t)
            let unknown_lambda ?(comment= "unknown")  ?loc 
              (lam : Lambda.lambda) =
              (exp @@ (Exp.str ~comment (Lambda_util.string_of_lambda lam)) : 
              t)
            let return_unit ?comment  ?(loc= J.N)  () =
              ({
                 loc;
                 statement_desc = (J.Return (Some (Exp.float 0.)));
                 comment
               } : t)
            let break ?comment  ?label  ?(loc= J.N)  () =
              ({ statement_desc = (J.Break label); loc; comment } : t)
          end
      end 
    module Vlq64 : sig val encode_l : Buffer.t -> int list -> unit end =
      struct
        let code =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        let code_rev =
          let a = Array.make 127 (-1) in
          for i = 0 to (String.length code) - 1 do
            a.(Char.code (code.[i])) <- i
          done;
          a
        let vlq_base_shift = 5
        let vlq_base = 1 lsl vlq_base_shift
        let vlq_base_mask = vlq_base - 1
        let vlq_continuation_bit = vlq_base
        let toVLQSigned v = if v < 0 then ((- v) lsl 1) + 1 else v lsl 1
        let fromVLQSigned v =
          let is_neg = (v land 1) = 1 in
          let shift = v lsr 1 in if is_neg then - shift else shift
        let add_char buf x = Buffer.add_char buf (code.[x])
        let rec encode' buf x =
          let digit = x land vlq_base_mask in
          let rest = x lsr vlq_base_shift in
          if rest = 0
          then add_char buf digit
          else
            (add_char buf (digit lor vlq_continuation_bit); encode' buf rest)
        let encode b x = let vql = toVLQSigned x in encode' b vql
        let encode_l b l = List.iter (encode b) l
        let rec decode' acc s start pos =
          let digit = code_rev.(Char.code (s.[pos])) in
          let cont = (digit land vlq_continuation_bit) = vlq_continuation_bit in
          let digit = digit land vlq_base_mask in
          let acc = acc + (digit lsl ((pos - start) * vlq_base_shift)) in
          if cont then decode' acc s start (succ pos) else (acc, (succ pos))
        let decode s p =
          let (d,i) = decode' 0 s p p in ((fromVLQSigned d), i)
        let decode_pos s =
          let sl = String.length s in
          let rec aux pos acc =
            if (List.length acc) > 10 then assert false;
            (let (d,i) = decode s pos in
             if i = sl then List.rev (d :: acc) else aux i (d :: acc)) in
          aux 0 []
        let _ = decode_pos
      end 
    module Pp :
      sig
        type t
        type pos = {
          mutable p_line: int;
          mutable p_col: int;}
        val string : t -> string -> unit
        val genbreak : t -> string -> int -> unit
        val break : t -> unit
        val break1 : t -> unit
        val non_breaking_space : t -> unit
        val space : ?indent:int -> t -> unit
        val start_group : t -> int -> unit
        val end_group : t -> unit
        val newline : t -> unit
        val to_out_channel : out_channel -> t
        val to_buffer : Buffer.t -> t
        val pos : t -> pos
        val total : t -> int
        val set_compact : t -> bool -> unit
        val set_needed_space_function : t -> (char -> char -> bool) -> unit
      end =
      struct
        type pos = {
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
          mutable prev_indents: (int* int) list;
          mutable limit: int;
          mutable cur: int;
          mutable l: elt list;
          mutable n: int;
          mutable w: int;
          mutable compact: bool;
          mutable needed_space: (char -> char -> bool) option;
          mutable pending_space: string option;
          mutable last_char: char option;
          mutable line: int;
          mutable col: int;
          mutable total: int;
          output: string -> int -> int -> unit;}
        let spaces = String.make 80 ' '
        let output st (s : string) l =
          (try
             let last = (String.rindex_from s (l - 1) '\n') + 1 in
             let line = ref 0 in
             for i = 0 to l - 1 do if (s.[i]) = '\n' then incr line done;
             st.line <- st.line + (!line);
             st.col <- l - last
           with | Not_found  -> st.col <- l + st.col);
          st.total <- st.total + (String.length s);
          st.output s 0 l
        let rec output_spaces st n =
          output st spaces (min n 80);
          if n > 80 then output_spaces st (n - 80)
        let output_newline st = output st "\n" 1
        let rec flat_render st l =
          match l with
          | (Text s)::r|(Break (s,_))::r ->
              (output st s (String.length s); flat_render st r)
          | (Set_pos p)::r ->
              (p.p_line <- st.line; p.p_col <- st.col; flat_render st r)
          | (Start_group _|End_group )::r -> flat_render st r
          | [] -> ()
        let rec push st e =
          if st.n = 0
          then
            match e with
            | Text s ->
                (output st s (String.length s);
                 st.cur <- st.cur + (String.length s))
            | Set_pos p -> (p.p_line <- st.line; p.p_col <- st.col)
            | Break (_,offs) ->
                (output_newline st;
                 (let indent = st.box_indent + offs in
                  st.indent <- indent;
                  output_spaces st indent;
                  st.limit <- max (indent + 60) 78;
                  st.cur <- st.indent))
            | Start_group n ->
                (st.n <- 1;
                 st.w <- st.limit - st.cur;
                 st.prev_indents <- ((st.box_indent), (st.indent)) ::
                   (st.prev_indents);
                 st.indent <- st.indent + n;
                 st.box_indent <- st.indent)
            | End_group  ->
                (st.box_indent <- fst (List.hd st.prev_indents);
                 st.indent <- snd (List.hd st.prev_indents);
                 st.prev_indents <- List.tl st.prev_indents)
          else
            (st.l <- e :: (st.l);
             (match e with
              | Text s|Break (s,_) ->
                  let w = st.w - (String.length s) in
                  (st.w <- w;
                   if w < 0
                   then
                     (let l = List.rev st.l in
                      st.l <- [];
                      st.n <- 0;
                      List.iter (fun e  -> push st e) l))
              | Set_pos _ -> ()
              | Start_group _ -> st.n <- st.n + 1
              | End_group  ->
                  (st.n <- st.n - 1;
                   if st.n = 0
                   then
                     (flat_render st (List.rev st.l);
                      st.box_indent <- fst (List.hd st.prev_indents);
                      st.indent <- snd (List.hd st.prev_indents);
                      st.prev_indents <- List.tl st.prev_indents;
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
                      (match ((st.last_char), (st.needed_space)) with
                       | (Some last,Some f) ->
                           if f last (s.[0]) then output st sp 1
                       | (_,None ) -> output st sp 1
                       | _ -> ())));
                output st s len;
                st.last_char <- Some (s.[len - 1])))
          else push st (Text s)
        let genbreak st s n = if not st.compact then push st (Break (s, n))
        let break_token = Break ("", 0)
        let break st = if not st.compact then push st break_token
        let break1 st = if not st.compact then push st (Break ("", 1))
        let non_breaking_space_token = Text " "
        let non_breaking_space st =
          if st.compact
          then st.pending_space <- Some " "
          else push st non_breaking_space_token
        let space ?(indent= 0)  st =
          if st.compact
          then st.pending_space <- Some "\n"
          else push st (Break (" ", indent))
        let start_group st n = if not st.compact then push st (Start_group n)
        let end_group st = if not st.compact then push st End_group
        let total t = t.total
        let pos t =
          if t.compact
          then { p_line = (t.line); p_col = (t.col) }
          else
            (let p = { p_line = (-1); p_col = (-1) } in push t (Set_pos p); p)
        let newline st =
          output_newline st;
          st.indent <- 0;
          st.box_indent <- 0;
          st.prev_indents <- [];
          st.cur <- 0;
          st.l <- [];
          st.n <- 0;
          st.w <- 0
        let output_substring = Pervasives.output
        let _ = output_substring
        let output_substring = let open Pervasives in output_substring
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
              (fun s  -> fun i  -> fun l  -> Buffer.add_substring b s i l)
          }
        let set_compact st v = st.compact <- v
        let set_needed_space_function st f = st.needed_space <- Some f
      end 
    module Js_pp_util : sig val string_of_number : float -> string end =
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
      end 
    module Json :
      sig
        type t =
          [ `Null  | `Bool of bool  | `Float of float  | `String of string 
          | `A of t list  | `O of (string* t) list ]
        val pp : Pp.t -> t -> unit
      end =
      struct
        type t =
          [ `Null  | `Bool of bool  | `Float of float  | `String of string 
          | `A of t list  | `O of (string* t) list ]
        let array_str1 =
          Array.init 256 (fun i  -> String.make 1 (Char.chr i))
        let array_conv =
          Array.init 16 (fun i  -> String.make 1 ("0123456789abcdef".[i]))
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
                   Pp.string f (Array.unsafe_get array_conv (c lsr 4));
                   Pp.string f (Array.unsafe_get array_conv (c land 15)))
              | _ -> Pp.string f (Array.unsafe_get array_str1 (Char.code c)))
           done;
           Pp.string f "\"")
        let rec json f =
          (function
           | `Null -> Pp.string f "null"
           | `Bool (true ) -> Pp.string f "true"
           | `Bool (false ) -> Pp.string f "false"
           | `Float v ->
               let s = Js_pp_util.string_of_number v in Pp.string f s
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
          | e::[] -> (Pp.start_group f 0; json f e; Pp.end_group f)
          | e::r ->
              (Pp.start_group f 0;
               json f e;
               Pp.end_group f;
               Pp.string f ",";
               Pp.break f;
               element_list f r)
        let pp = json
      end 
    module Source_map :
      sig
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
          mutable sources: string list;
          mutable sources_content: string option list option;
          mutable names: string list;
          mutable mappings: mapping;}
        val json : t -> Json.t
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
          mutable sources: string list;
          mutable sources_content: string option list option;
          mutable names: string list;
          mutable mappings: mapping;}
        let string_of_mapping mapping =
          let a = Array.of_list mapping in
          let len = Array.length a in
          Array.stable_sort
            (fun t1  ->
               fun t2  ->
                 match compare t1.gen_line t2.gen_line with
                 | 0 -> compare t1.gen_col t2.gen_col
                 | n -> n) a;
          (let buf = Buffer.create 1024 in
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
                    ((c.ori_source = (a.(prev)).ori_source) &&
                       ((c.ori_line = (a.(prev)).ori_line) &&
                          (c.ori_col = (a.(prev)).ori_col)))
                then loop prev (i + 1)
                else
                  if
                    ((i + 1) < len) &&
                      ((c.gen_line = (a.(i + 1)).gen_line) &&
                         (c.gen_col = (a.(i + 1)).gen_col))
                  then loop prev (i + 1)
                  else
                    (if (!gen_line) <> c.gen_line
                     then
                       (assert ((!gen_line) < c.gen_line);
                        for _i = !gen_line to c.gen_line - 1 do
                          Buffer.add_char buf ';'
                        done;
                        gen_col := 0;
                        gen_line := c.gen_line)
                     else if i > 0 then Buffer.add_char buf ',';
                     (let l = (c.gen_col - (!gen_col)) ::
                        (if c.ori_source = (-1)
                         then []
                         else (c.ori_source - (!ori_source)) ::
                           (c.ori_line - (!ori_line)) ::
                           (c.ori_col - (!ori_col)) ::
                           ((match c.ori_name with
                             | None  -> []
                             | Some n ->
                                 let n' = !ori_name in
                                 (ori_name := n; [n - n'])))) in
                      gen_col := c.gen_col;
                      if c.ori_source <> (-1)
                      then
                        (ori_source := c.ori_source;
                         ori_line := c.ori_line;
                         ori_col := c.ori_col);
                      Vlq64.encode_l buf l;
                      loop i (i + 1)))) in
           loop (-1) 0; Buffer.contents buf)
        let json t =
          (`O
             [("version", (`Float (float_of_int t.version)));
             ("file", (`String (t.file)));
             ("sourceRoot",
               (`String
                  ((match t.sourceroot with | None  -> "" | Some s -> s))));
             ("names", (`A (List.map (fun s  -> `String s) t.names)));
             ("mappings", (`String (string_of_mapping t.mappings)));
             ("sources", (`A (List.map (fun s  -> `String s) t.sources)));
             ("sourcesContent",
               (`A
                  ((match t.sources_content with
                    | None  -> []
                    | Some l ->
                        List.map
                          (function | None  -> `Null | Some s -> `String s) l))))] : 
          Json.t)
      end 
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
        val encode : ?pad:bool -> ?alphabet:string -> string -> string
        [@@ocaml.doc
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
          let padding_len =
            if (length mod 3) = 0 then 0 else 3 - (length mod 3) in
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
          else
            Bytes.sub_string output 0 ((Bytes.length output) - padding_len)
      end 
    module Pp_js :
      sig
        type cxt
        val empty : cxt
        val program :
          cxt ->
            Pp.t ->
              ?source_map:(string option* Source_map.t) -> J.block -> cxt
      end =
      struct
        module E = J_helper.Exp
        module S = J_helper.Stmt
        let quiet = ref false
        let warn fmt =
          Format.ksprintf
            (fun s  -> if not (!quiet) then Format.eprintf "%s%!" s) fmt
        let read_file f =
          let ic = open_in_bin f in
          let n = in_channel_length ic in
          let s = Bytes.create n in
          really_input ic s 0 n; close_in ic; Bytes.unsafe_to_string s
        let op_prec (op : J.binop) =
          match op with
          | Eq |StarEq |SlashEq |ModEq |PlusEq |MinusEq |LslEq |AsrEq |LsrEq 
            |BandEq |BxorEq |BorEq  -> (1, 13, 1)
          | Or  -> (3, 3, 3)
          | And  -> (4, 4, 4)
          | Bor  -> (5, 5, 5)
          | Bxor  -> (6, 6, 6)
          | Band  -> (7, 7, 7)
          | EqEq |NotEq |EqEqEq |NotEqEq  -> (8, 8, 9)
          | Gt |Ge |Lt |Le |InstanceOf |In  -> (9, 9, 10)
          | Lsl |Lsr |Asr  -> (10, 10, 11)
          | Plus |Minus  -> (11, 11, 12)
          | Mul |Div |Mod  -> (12, 12, 13)
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
          | InstanceOf |In  -> assert false
        let unop_str (op : J.unop) =
          match op with
          | Not  -> "!"
          | Neg  -> "-"
          | Pl  -> "+"
          | Bnot  -> "~"
          | IncrA |IncrB |DecrA |DecrB |Typeof |Void |Delete  -> assert false
        let best_string_quote s =
          let simple = ref 0
          and double = ref 0 in
          for i = 0 to (String.length s) - 1 do
            (match s.[i] with
             | '\'' -> incr simple
             | '"' -> incr double
             | _ -> ())
          done;
          if (!simple) < (!double) then '\'' else '"'
        let array_str1 =
          Array.init 256 (fun i  -> String.make 1 (Char.chr i))
        let array_conv =
          Array.init 16 (fun i  -> String.make 1 ("0123456789abcdef".[i]))
        [@@@ocaml.text " purely functional environment "]
        module SMap = Map.Make(String)
        module IMap =
          Map.Make(struct
                     type t = int
                     let compare (x : int) y = Pervasives.compare x y
                   end)
        type cxt = {
          mapping: int IMap.t SMap.t;}
        let empty = { mapping = SMap.empty }
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
			 "top";
			 "content";
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
        module StringSet = Set.Make(String)
        let reserved_map =
          List.fold_left (fun acc  -> fun x  -> StringSet.add x acc)
            StringSet.empty reserved_words
        let convert (name : string) =
          let module E = struct exception Not_normal_letter of int end in
            let len = String.length name in
            if StringSet.mem name reserved_map
            then "$$" ^ name
            else
              (try
                 for i = 0 to len - 1 do
                   (let c = String.unsafe_get name i in
                    if
                      not
                        (((c >= 'a') && (c <= 'z')) ||
                           (((c >= 'A') && (c <= 'Z')) ||
                              ((c = '_') || (c = '$'))))
                    then raise (E.Not_normal_letter i)
                    else ())
                 done;
                 name
               with
               | E.Not_normal_letter i ->
                   (String.sub name 0 i) ^
                     (let buffer = Buffer.create len in
                      (for j = i to len - 1 do
                         (let c = String.unsafe_get name j in
                          match c with
                          | '*' -> Buffer.add_string buffer "$star"
                          | '\'' -> Buffer.add_string buffer "$prime"
                          | '>' -> Buffer.add_string buffer "$great"
                          | '<' -> Buffer.add_string buffer "$less"
                          | '=' -> Buffer.add_string buffer "$eq"
                          | '+' -> Buffer.add_string buffer "$plus"
                          | '-' -> Buffer.add_string buffer "$neg"
                          | '@' -> Buffer.add_string buffer "$at"
                          | '^' -> Buffer.add_string buffer "$caret"
                          | '/' -> Buffer.add_string buffer "$slash"
                          | '.' -> Buffer.add_string buffer "$dot"
                          | 'a'..'z'|'A'..'Z'|'_'|'$'|'0'..'9' ->
                              Buffer.add_char buffer c
                          | _ -> Buffer.add_string buffer "$unknown")
                       done;
                       Buffer.contents buffer)))[@@ocaml.doc
                                                  " TODO:\n    check name conflicts with javascript conventions\n "]
        module SSet = Set.Make(String)
        let gen_symbs =
          SSet.of_list ["param"; "prim"; "match"; "include"; "let"; "*opt*"]
        let string_of_id ?(replace= false)  (id : Ident.t)
          (({ mapping } as cxt) : cxt) =
          (match SMap.find id.name mapping with
           | exception Not_found  ->
               (0,
                 {
                   mapping =
                     (SMap.add id.name
                        (let open IMap in add id.stamp 0 empty) mapping)
                 })
           | imap ->
               (match IMap.find id.stamp imap with
                | exception Not_found  ->
                    if replace && (not (SSet.mem id.name gen_symbs))
                    then
                      (0,
                        {
                          mapping =
                            (SMap.add id.name
                               (let open IMap in add id.stamp 0 empty)
                               mapping)
                        })
                    else
                      (let v = IMap.cardinal imap in
                       (v,
                         {
                           mapping =
                             (SMap.add id.name
                                (let open IMap in add id.stamp v imap : 
                                int IMap.t) mapping)
                         }))
                | i -> (i, cxt)) : (int* cxt))
        let ident ?replace  (cxt : cxt) f (id : Ident.t) =
          (if Jident.is_js id
           then (Pp.string f id.name; cxt)
           else
             if Ident.global id
             then (Pp.string f (convert id.name); cxt)
             else
               (let (i,new_cxt) = string_of_id ?replace id cxt in
                let () =
                  Pp.string f
                    (if i == 0
                     then convert id.name
                     else Printf.sprintf "%s$%d" (convert id.name) i) in
                new_cxt) : cxt)
        let rec formal_parameter_list cxt f l =
          match l with
          | [] -> cxt
          | i::[] -> ident ~replace:true cxt f i
          | i::r ->
              let cxt = ident ~replace:true cxt f i in
              (Pp.string f ","; Pp.break f; formal_parameter_list cxt f r)
        let opt_identifier cxt f i =
          match i with | None  -> cxt | Some i -> (Pp.space f; ident cxt f i)
        let rec ends_with_if_without_else
          ({ statement_desc = st;_} : J.statement) =
          match st with
          | If (_,_,Some st)|While (_,st)|For (_,_,_,st)|ForIn (_,_,st) ->
              ends_with_if_without_else st
          | If (_,_,None ) -> true
          | _ -> false
        let rec need_paren l (e : J.expression) =
          match e.expression_desc with
          | ESeq (e,_) -> (l <= 0) && (need_paren 0 e)
          | ECond (e,_,_) -> (l <= 2) && (need_paren 3 e)
          | EBin (op,e,_) ->
              let (out,lft,_rght) = op_prec op in
              (l <= out) && (need_paren lft e)
          | ECall (e,_,_)|EAccess (e,_)|EDot (e,_) ->
              (l <= 15) && (need_paren 15 e)
          | EVar _|EStr _|EArr _|EBool _|ENum _|EQuote _|ERegexp _|EUn _|ENew
            _ -> false
          | EFun _|EObj _ -> true
        let pp_string f ?(quote= '"')  ?(utf= false)  s =
          let quote_s = String.make 1 quote in
          Pp.string f quote_s;
          (let l = String.length s in
           for i = 0 to l - 1 do
             (let c = s.[i] in
              match c with
              | '\000' when
                  (i = (l - 1)) ||
                    (((s.[i + 1]) < '0') || ((s.[i + 1]) > '9'))
                  -> Pp.string f "\\0"
              | '\b' -> Pp.string f "\\b"
              | '\t' -> Pp.string f "\\t"
              | '\n' -> Pp.string f "\\n"
              | '\012' -> Pp.string f "\\f"
              | '\\' when not utf -> Pp.string f "\\\\"
              | '\r' -> Pp.string f "\\r"
              | '\000'..'\031'|'\127' ->
                  let c = Char.code c in
                  (Pp.string f "\\x";
                   Pp.string f (Array.unsafe_get array_conv (c lsr 4));
                   Pp.string f (Array.unsafe_get array_conv (c land 15)))
              | '\128'..'\255' when not utf ->
                  let c = Char.code c in
                  (Pp.string f "\\x";
                   Pp.string f (Array.unsafe_get array_conv (c lsr 4));
                   Pp.string f (Array.unsafe_get array_conv (c land 15)))
              | _ ->
                  if c = quote
                  then
                    (Pp.string f "\\";
                     Pp.string f (Array.unsafe_get array_str1 (Char.code c)))
                  else
                    Pp.string f (Array.unsafe_get array_str1 (Char.code c)))
           done;
           Pp.string f quote_s)
        type config =
          {
          push_mapping: Pp.pos -> Source_map.map -> unit;
          get_file_index: string -> int;}
        type source_map_config =
          | No_source_map
          | Source_map of config
        module Make(D:sig val source_map : Source_map.t option end) =
          struct
            let temp_mappings = ref []
            let config =
              let idx = ref 0 in
              let files = Hashtbl.create 17 in
              match D.source_map with
              | None  -> No_source_map
              | Some sm ->
                  (List.iter (fun f  -> Hashtbl.add files f (!idx); incr idx)
                     sm.Source_map.sources;
                   Source_map
                     {
                       push_mapping =
                         ((fun pos  ->
                             fun m  ->
                               temp_mappings := ((pos, m) ::
                                 (!temp_mappings))));
                       get_file_index =
                         ((fun file  ->
                             try Hashtbl.find files file
                             with
                             | Not_found  ->
                                 let pos = !idx in
                                 (Hashtbl.add files file pos;
                                  incr idx;
                                  sm.Source_map.sources <-
                                    sm.Source_map.sources @ [file];
                                  pos)))
                     })
            let output_debug_info config =
              match config with
              | Source_map { push_mapping; get_file_index } ->
                  (fun f  ->
                     fun (loc : J.location)  ->
                       match loc with
                       | J.N  -> ()
                       | U |Pi { src = None ;_} ->
                           push_mapping (Pp.pos f)
                             {
                               Source_map.gen_line = (-1);
                               gen_col = (-1);
                               ori_source = (-1);
                               ori_line = (-1);
                               ori_col = (-1);
                               ori_name = None
                             }
                       | Pi { src = Some file; line; col } ->
                           push_mapping (Pp.pos f)
                             {
                               Source_map.gen_line = (-1);
                               gen_col = (-1);
                               ori_source = (get_file_index file);
                               ori_line = line;
                               ori_col = col;
                               ori_name = None
                             })
              | No_source_map  -> (fun f  -> fun loc  -> ())
            let rec expression cxt (l : int) f
              ({ expression_desc; comment } : J.expression) =
              (let () =
                 match comment with
                 | None  -> ()
                 | Some c ->
                     (Pp.string f "/* "; Pp.string f c; Pp.string f " */") in
               match expression_desc with
               | EVar v -> ident cxt f v
               | ESeq (e1,e2) ->
                   (if l > 0 then (Pp.start_group f 1; Pp.string f "(");
                    (let cxt = expression cxt 0 f e1 in
                     let () = Pp.string f "," in
                     let () = Pp.break f in
                     let cxt = expression cxt 0 f e2 in
                     if l > 0 then (Pp.string f ")"; Pp.end_group f); cxt))
               | EFun (i,l,b,pc) ->
                   let () = Pp.start_group f 1 in
                   let () = Pp.start_group f 0 in
                   let () = Pp.start_group f 0 in
                   let () = Pp.string f "function" in
                   let cxt = opt_identifier cxt f i in
                   let () = Pp.end_group f in
                   let () = Pp.break f in
                   let () = Pp.start_group f 1 in
                   let () = Pp.string f "(" in
                   let cxt' = formal_parameter_list cxt f l in
                   let () = Pp.string f ")" in
                   let () = Pp.end_group f in
                   let () = Pp.end_group f in
                   let () = Pp.break f in
                   let () = Pp.start_group f 1 in
                   let () = Pp.string f "{" in
                   let () = ignore @@ (function_body cxt' f b) in
                   let () = output_debug_info config f pc in
                   let () = Pp.string f "}" in
                   let () = Pp.end_group f in let () = Pp.end_group f in cxt
               | ECall (e,el,loc) ->
                   (if l > 15 then (Pp.start_group f 1; Pp.string f "(");
                    output_debug_info config f loc;
                    Pp.start_group f 1;
                    (let cxt = expression cxt 15 f e in
                     Pp.break f;
                     Pp.start_group f 1;
                     Pp.string f "(";
                     (let cxt = arguments cxt f el in
                      Pp.string f ")";
                      Pp.end_group f;
                      Pp.end_group f;
                      if l > 15 then (Pp.string f ")"; Pp.end_group f);
                      cxt)))
               | EStr (s,kind) ->
                   let quote = best_string_quote s in
                   (pp_string f ~quote s; cxt)
               | EBool b ->
                   (Pp.string f (if b then "true" else "false"); cxt)
               | ENum v ->
                   let s = Js_pp_util.string_of_number v in
                   let need_parent =
                     if (s.[0]) = '-'
                     then l > 13
                     else (l = 15) && (((s.[0]) <> 'I') && ((s.[0]) <> 'N')) in
                   (if need_parent then Pp.string f "(";
                    Pp.string f s;
                    if need_parent then Pp.string f ")";
                    cxt)
               | EUn (Typeof ,e) ->
                   (if l > 13 then (Pp.start_group f 1; Pp.string f "(");
                    Pp.start_group f 0;
                    Pp.string f "typeof";
                    Pp.space f;
                    (let cxt = expression cxt 13 f e in
                     Pp.end_group f;
                     if l > 13 then (Pp.string f ")"; Pp.end_group f);
                     cxt))
               | EUn (Void ,e) ->
                   (if l > 13 then (Pp.start_group f 1; Pp.string f "(");
                    Pp.start_group f 0;
                    Pp.string f "void";
                    Pp.space f;
                    (let cxt = expression cxt 13 f e in
                     Pp.end_group f;
                     if l > 13 then (Pp.string f ")"; Pp.end_group f);
                     cxt))
               | EUn (Delete ,e) ->
                   (if l > 13 then (Pp.start_group f 1; Pp.string f "(");
                    Pp.start_group f 0;
                    Pp.string f "delete";
                    Pp.space f;
                    (let cxt = expression cxt 13 f e in
                     Pp.end_group f;
                     if l > 13 then (Pp.string f ")"; Pp.end_group f);
                     cxt))
               | EUn ((IncrA |DecrA |IncrB |DecrB  as op),e) ->
                   (if l > 13 then (Pp.start_group f 1; Pp.string f "(");
                    (let cxt =
                       if (op = IncrA) || (op = DecrA)
                       then expression cxt 13 f e
                       else cxt in
                     if (op = IncrA) || (op = IncrB)
                     then Pp.string f "++"
                     else Pp.string f "--";
                     (let cxt =
                        if (op = IncrB) || (op = DecrB)
                        then expression cxt 13 f e
                        else cxt in
                      if l > 13 then (Pp.string f ")"; Pp.end_group f); cxt)))
               | EUn (op,e) ->
                   (if l > 13 then (Pp.start_group f 1; Pp.string f "(");
                    Pp.string f (unop_str op);
                    (let cxt = expression cxt 13 f e in
                     if l > 13 then (Pp.string f ")"; Pp.end_group f); cxt))
               | EBin (InstanceOf ,e1,e2) ->
                   let (out,lft,rght) = op_prec InstanceOf in
                   (if l > out then (Pp.start_group f 1; Pp.string f "(");
                    Pp.start_group f 0;
                    (let cxt = expression cxt lft f e1 in
                     Pp.space f;
                     Pp.string f "instanceof";
                     Pp.space f;
                     (let cxt = expression cxt rght f e2 in
                      Pp.end_group f;
                      if l > out then (Pp.string f ")"; Pp.end_group f);
                      cxt)))
               | EBin (In ,e1,e2) ->
                   let (out,lft,rght) = op_prec InstanceOf in
                   (if l > out then (Pp.start_group f 1; Pp.string f "(");
                    Pp.start_group f 0;
                    (let cxt = expression cxt lft f e1 in
                     Pp.space f;
                     Pp.string f "in";
                     Pp.space f;
                     (let cxt = expression cxt rght f e2 in
                      Pp.end_group f;
                      if l > out then (Pp.string f ")"; Pp.end_group f);
                      cxt)))
               | EBin (op,e1,e2) ->
                   let (out,lft,rght) = op_prec op in
                   (if l > out then (Pp.start_group f 1; Pp.string f "(");
                    (let cxt = expression cxt lft f e1 in
                     Pp.string f (op_str op);
                     Pp.break f;
                     (let cxt = expression cxt rght f e2 in
                      if l > out then (Pp.string f ")"; Pp.end_group f); cxt)))
               | EArr el ->
                   (Pp.start_group f 1;
                    Pp.string f "[";
                    (let cxt = element_list cxt f el in
                     Pp.string f "]"; Pp.end_group f; cxt))
               | EAccess (e,e') ->
                   (if l > 15 then (Pp.start_group f 1; Pp.string f "(");
                    Pp.start_group f 1;
                    (let cxt = expression cxt 15 f e in
                     Pp.break f;
                     Pp.start_group f 1;
                     Pp.string f "[";
                     (let cxt = expression cxt 0 f e' in
                      Pp.string f "]";
                      Pp.end_group f;
                      Pp.end_group f;
                      if l > 15 then (Pp.string f ")"; Pp.end_group f);
                      cxt)))
               | EDot (e,nm) ->
                   (if l > 15 then (Pp.start_group f 1; Pp.string f "(");
                    (let cxt = expression cxt 15 f e in
                     Pp.string f ".";
                     Pp.string f nm;
                     if l > 15 then (Pp.string f ")"; Pp.end_group f);
                     cxt))
               | ENew (e,None ) ->
                   (if l > 15 then (Pp.start_group f 1; Pp.string f "(");
                    Pp.start_group f 1;
                    Pp.string f "new";
                    Pp.space f;
                    (let cxt = expression cxt 16 f e in
                     Pp.break f;
                     Pp.string f "()";
                     Pp.end_group f;
                     if l > 15 then (Pp.string f ")"; Pp.end_group f);
                     cxt))
               | ENew (e,Some el) ->
                   (if l > 15 then (Pp.start_group f 1; Pp.string f "(");
                    Pp.start_group f 1;
                    Pp.string f "new";
                    Pp.space f;
                    (let cxt = expression cxt 16 f e in
                     Pp.break f;
                     Pp.start_group f 1;
                     Pp.string f "(";
                     (let cxt = arguments cxt f el in
                      Pp.string f ")";
                      Pp.end_group f;
                      Pp.end_group f;
                      if l > 15 then (Pp.string f ")"; Pp.end_group f);
                      cxt)))
               | ECond (e,e1,e2) ->
                   (if l > 2 then (Pp.start_group f 1; Pp.string f "(");
                    Pp.start_group f 1;
                    Pp.start_group f 0;
                    (let cxt = expression cxt 3 f e in
                     Pp.end_group f;
                     Pp.break f;
                     Pp.start_group f 1;
                     Pp.string f "?";
                     (let cxt = expression cxt 1 f e1 in
                      Pp.end_group f;
                      Pp.break f;
                      Pp.start_group f 1;
                      Pp.string f ":";
                      (let cxt = expression cxt 1 f e2 in
                       Pp.end_group f;
                       Pp.end_group f;
                       if l > 2 then (Pp.string f ")"; Pp.end_group f);
                       cxt))))
               | EObj lst ->
                   (Pp.start_group f 1;
                    Pp.string f "{";
                    (let cxt = property_name_and_value_list cxt f lst in
                     Pp.string f "}"; Pp.end_group f; cxt))
               | ERegexp (s,opt) ->
                   ((Pp.string f "/";
                     Pp.string f s;
                     Pp.string f "/";
                     (match opt with | None  -> () | Some o -> Pp.string f o));
                    cxt)
               | EQuote s ->
                   (Pp.string f "("; Pp.string f s; Pp.string f ")"; cxt) : 
              cxt)
            and property_name cxt f (n : J.property_name) =
              (match n with
               | PNI s -> (Pp.string f s; cxt)
               | PNS s ->
                   let quote = best_string_quote s in
                   (pp_string f ~utf:true ~quote s; cxt)
               | PNN v -> expression cxt 0 f (E.float v) : cxt)
            and property_name_and_value_list cxt f l =
              (match l with
               | [] -> cxt
               | (pn,e)::[] ->
                   (Pp.start_group f 0;
                    (let cxt = property_name cxt f pn in
                     Pp.string f ":";
                     Pp.break f;
                     (let cxt = expression cxt 1 f e in Pp.end_group f; cxt)))
               | (pn,e)::r ->
                   (Pp.start_group f 0;
                    (let cxt = property_name cxt f pn in
                     Pp.string f ":";
                     Pp.break f;
                     (let cxt = expression cxt 1 f e in
                      Pp.end_group f;
                      Pp.string f ",";
                      Pp.break f;
                      property_name_and_value_list cxt f r))) : cxt)
            and element_list cxt f el =
              (match el with
               | [] -> cxt
               | e::[] ->
                   (match e with
                    | None  -> (Pp.string f ","; cxt)
                    | Some e ->
                        (Pp.start_group f 0;
                         (let cxt = expression cxt 1 f e in
                          Pp.end_group f; cxt)))
               | e::r ->
                   let cxt =
                     match e with
                     | None  -> cxt
                     | Some e ->
                         (Pp.start_group f 0;
                          (let cxt = expression cxt 1 f e in
                           Pp.end_group f; cxt)) in
                   (Pp.string f ","; Pp.break f; element_list cxt f r) : 
              cxt)
            and function_body cxt f b =
              (source_elements cxt f ~skip_last_semi:true b : cxt)
            and arguments cxt f l =
              (match l with
               | [] -> cxt
               | e::[] ->
                   (Pp.start_group f 0;
                    (let cxt = expression cxt 1 f e in Pp.end_group f; cxt))
               | e::r ->
                   (Pp.start_group f 0;
                    (let cxt = expression cxt 1 f e in
                     Pp.end_group f;
                     Pp.string f ",";
                     Pp.break f;
                     arguments cxt f r)) : cxt)
            and variable_declaration (cxt : cxt) f (i,init) =
              (match init with
               | None  -> ident cxt f i
               | Some (e,pc) ->
                   (Pp.start_group f 1;
                    output_debug_info config f pc;
                    (let cxt = ident cxt f i in
                     Pp.string f "=";
                     Pp.break f;
                     (let cxt = expression cxt 1 f e in Pp.end_group f; cxt))) : 
              cxt)
            and variable_declaration_list_aux cxt f l =
              match l with
              | [] -> assert false
              | d::[] -> variable_declaration cxt f d
              | d::r ->
                  let cxt = variable_declaration cxt f d in
                  (Pp.string f ",";
                   Pp.break f;
                   variable_declaration_list_aux cxt f r)
            and variable_declaration_list cxt close f variables =
              (match variables with
               | [] -> cxt
               | (i,None )::[] ->
                   (Pp.start_group f 1;
                    Pp.string f "var";
                    Pp.space f;
                    (let cxt = ident cxt f i in
                     if close then Pp.string f ";"; Pp.end_group f; cxt))
               | (i,Some (e,pc))::[] ->
                   (Pp.start_group f 1;
                    output_debug_info config f pc;
                    Pp.string f "var";
                    Pp.space f;
                    (let cxt = ident cxt f i in
                     Pp.string f "=";
                     Pp.break1 f;
                     Pp.start_group f 0;
                     (let cxt = expression cxt 1 f e in
                      if close then Pp.string f ";";
                      Pp.end_group f;
                      Pp.end_group f;
                      cxt)))
               | l ->
                   (Pp.start_group f 1;
                    Pp.string f "var";
                    Pp.space f;
                    (let cxt = variable_declaration_list_aux cxt f l in
                     if close then Pp.string f ";"; Pp.end_group f; cxt)) : 
              cxt)
            and opt_expression cxt l f e =
              match e with | None  -> cxt | Some e -> expression cxt l f e
            and statement ?(last= false)  cxt f
              ({ statement_desc = s; loc; comment;_} : J.statement) =
              (let last_semi () = if last then () else Pp.string f ";" in
               output_debug_info config f loc;
               (let () =
                  match comment with
                  | None  -> ()
                  | Some x ->
                      (Pp.string f "/* ";
                       Pp.string f x;
                       Pp.string f " */";
                       Pp.break f) in
                match s with
                | Comment s -> (Pp.string f "// "; Pp.string f s; cxt)
                | Block b -> block cxt f b
                | Variable l -> variable_declaration_list cxt (not last) f l
                | Empty  -> cxt
                | Debugger  -> (Pp.string f "debugger"; last_semi (); cxt)
                | Exp { expression_desc = EVar _ } -> (last_semi (); cxt)
                | Exp e ->
                    if need_paren 0 e
                    then
                      (Pp.start_group f 1;
                       Pp.string f "(";
                       (let cxt = expression cxt 0 f e in
                        Pp.string f ")"; last_semi (); Pp.end_group f; cxt))
                    else
                      (Pp.start_group f 0;
                       (let cxt = expression cxt 0 f e in
                        last_semi (); Pp.end_group f; cxt))
                | If (e,s1,Some s2) when ends_with_if_without_else s1 ->
                    statement ~last cxt f
                      (let open J_helper.Stmt in if_ e (block [s1]) ~else_:s2)
                | If (e,s1,Some ({ statement_desc = Block _;_} as s2)) ->
                    (Pp.start_group f 0;
                     Pp.start_group f 1;
                     Pp.string f "if";
                     Pp.break f;
                     Pp.start_group f 1;
                     Pp.string f "(";
                     (let cxt = expression cxt 0 f e in
                      Pp.string f ")";
                      Pp.end_group f;
                      Pp.end_group f;
                      Pp.break1 f;
                      Pp.start_group f 0;
                      (let cxt = statement cxt f s1 in
                       Pp.end_group f;
                       Pp.break f;
                       Pp.string f "else";
                       Pp.break1 f;
                       Pp.start_group f 0;
                       (let cxt = statement cxt ~last f s2 in
                        Pp.end_group f; Pp.end_group f; cxt))))
                | If (e,s1,Some s2) ->
                    (Pp.start_group f 0;
                     Pp.start_group f 1;
                     Pp.string f "if";
                     Pp.break f;
                     Pp.start_group f 1;
                     Pp.string f "(";
                     (let cxt = expression cxt 0 f e in
                      Pp.string f ")";
                      Pp.end_group f;
                      Pp.end_group f;
                      Pp.break1 f;
                      Pp.start_group f 0;
                      (let cxt = statement cxt f s1 in
                       Pp.end_group f;
                       Pp.break f;
                       Pp.string f "else";
                       Pp.space ~indent:1 f;
                       Pp.start_group f 0;
                       (let cxt = statement ~last cxt f s2 in
                        Pp.end_group f; Pp.end_group f; cxt))))
                | If (e,s1,None ) ->
                    (Pp.start_group f 1;
                     Pp.start_group f 0;
                     Pp.string f "if";
                     Pp.break f;
                     Pp.start_group f 1;
                     Pp.string f "(";
                     (let cxt = expression cxt 0 f e in
                      Pp.string f ")";
                      Pp.end_group f;
                      Pp.end_group f;
                      Pp.break f;
                      Pp.start_group f 0;
                      (let cxt = statement ~last cxt f s1 in
                       Pp.end_group f; Pp.end_group f; cxt)))
                | While (e,s) ->
                    (Pp.start_group f 1;
                     Pp.start_group f 0;
                     Pp.string f "while";
                     Pp.break f;
                     Pp.start_group f 1;
                     Pp.string f "(";
                     (let cxt = expression cxt 0 f e in
                      Pp.string f ")";
                      Pp.end_group f;
                      Pp.end_group f;
                      Pp.break f;
                      Pp.start_group f 0;
                      (let cxt = statement ~last cxt f s in
                       Pp.end_group f; Pp.end_group f; cxt)))
                | Do_while (({ statement_desc = Block _;_} as s),e) ->
                    (Pp.start_group f 0;
                     Pp.string f "do";
                     Pp.break1 f;
                     Pp.start_group f 0;
                     (let cxt = statement cxt f s in
                      Pp.end_group f;
                      Pp.break f;
                      Pp.string f "while";
                      Pp.break1 f;
                      Pp.start_group f 1;
                      Pp.string f "(";
                      (let cxt = expression cxt 0 f e in
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
                     (let cxt = statement cxt f s in
                      Pp.end_group f;
                      Pp.break f;
                      Pp.string f "while";
                      Pp.break f;
                      Pp.start_group f 1;
                      Pp.string f "(";
                      (let cxt = expression cxt 0 f e in
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
                        | Left e -> opt_expression cxt 0 f e
                        | Right l -> variable_declaration_list cxt false f l in
                      Pp.string f ";";
                      Pp.break f;
                      (let cxt = opt_expression cxt 0 f e2 in
                       Pp.string f ";";
                       Pp.break f;
                       (let cxt = opt_expression cxt 0 f e3 in
                        Pp.string f ")";
                        Pp.end_group f;
                        Pp.end_group f;
                        Pp.break f;
                        Pp.start_group f 0;
                        (let cxt = statement ~last cxt f s in
                         Pp.end_group f; Pp.end_group f; cxt)))))
                | ForIn (e1,e2,s) ->
                    (Pp.start_group f 1;
                     Pp.start_group f 0;
                     Pp.string f "for";
                     Pp.break f;
                     Pp.start_group f 1;
                     Pp.string f "(";
                     (let cxt =
                        match e1 with
                        | Left e -> expression cxt 0 f e
                        | Right v ->
                            variable_declaration_list cxt false f [v] in
                      Pp.space f;
                      Pp.string f "in";
                      Pp.break f;
                      Pp.space f;
                      (let cxt = expression cxt 0 f e2 in
                       Pp.string f ")";
                       Pp.end_group f;
                       Pp.end_group f;
                       Pp.break f;
                       Pp.start_group f 0;
                       (let cxt = statement ~last cxt f s in
                        Pp.end_group f; Pp.end_group f; cxt))))
                | Continue (None ) ->
                    (Pp.string f "continue"; last_semi (); cxt)
                | Continue (Some s) ->
                    (Pp.string f "continue ";
                     Pp.string f s;
                     last_semi ();
                     cxt)
                | Break (None ) -> (Pp.string f "break"; last_semi (); cxt)
                | Break (Some s) ->
                    (Pp.string f "break "; Pp.string f s; last_semi (); cxt)
                | Return e ->
                    (match e with
                     | None  -> (Pp.string f "return"; last_semi (); cxt)
                     | Some { expression_desc = EFun (i,l,b,pc);_} ->
                         (Pp.start_group f 1;
                          Pp.start_group f 0;
                          Pp.start_group f 0;
                          Pp.string f "return function";
                          (let cxt = opt_identifier cxt f i in
                           Pp.end_group f;
                           Pp.break f;
                           Pp.start_group f 1;
                           Pp.string f "(";
                           (let cxt' = formal_parameter_list cxt f l in
                            Pp.string f ")";
                            Pp.end_group f;
                            Pp.end_group f;
                            Pp.break f;
                            Pp.start_group f 1;
                            Pp.string f "{";
                            (let () = ignore @@ (function_body cxt' f b) in
                             output_debug_info config f pc;
                             Pp.string f "}";
                             last_semi ();
                             Pp.end_group f;
                             Pp.end_group f;
                             cxt))))
                     | Some e ->
                         (Pp.start_group f 7;
                          Pp.string f "return";
                          Pp.non_breaking_space f;
                          Pp.start_group f 0;
                          (let cxt = expression cxt 0 f e in
                           last_semi (); Pp.end_group f; Pp.end_group f; cxt)))
                | Labelled (i,s) ->
                    (Pp.string f i;
                     Pp.string f ":";
                     Pp.break f;
                     statement cxt ~last f s)
                | Switch (e,cc,def,cc') ->
                    (Pp.start_group f 1;
                     Pp.start_group f 0;
                     Pp.string f "switch";
                     Pp.break f;
                     Pp.start_group f 1;
                     Pp.string f "(";
                     (let cxt = expression cxt 0 f e in
                      Pp.string f ")";
                      Pp.end_group f;
                      Pp.end_group f;
                      Pp.break f;
                      Pp.start_group f 1;
                      Pp.string f "{";
                      (let output_one cxt last (e,sl) =
                         (Pp.start_group f 1;
                          Pp.start_group f 1;
                          Pp.string f "case";
                          Pp.space f;
                          (let cxt = expression cxt 0 f e in
                           Pp.string f ":";
                           Pp.end_group f;
                           Pp.break f;
                           Pp.start_group f 0;
                           (let cxt =
                              statement_list cxt ~skip_last_semi:last f sl in
                            Pp.end_group f; Pp.end_group f; Pp.break f; cxt)) : 
                         cxt) in
                       let rec loop cxt last =
                         function
                         | [] -> cxt
                         | x::[] -> output_one cxt last x
                         | x::xs ->
                             let cxt = output_one cxt false x in
                             loop cxt last xs in
                       let cxt = loop cxt ((def = None) && (cc' = [])) cc in
                       let cxt =
                         match def with
                         | None  -> cxt
                         | Some def ->
                             (Pp.start_group f 1;
                              Pp.string f "default:";
                              Pp.break f;
                              Pp.start_group f 0;
                              (let cxt =
                                 statement_list ~skip_last_semi:(cc' = [])
                                   cxt f def in
                               Pp.end_group f; Pp.end_group f; cxt)) in
                       let cxt = loop cxt true cc' in
                       Pp.string f "}"; Pp.end_group f; Pp.end_group f; cxt)))
                | Throw e ->
                    (Pp.start_group f 6;
                     Pp.string f "throw";
                     Pp.non_breaking_space f;
                     Pp.start_group f 0;
                     (let cxt = expression cxt 0 f e in
                      last_semi (); Pp.end_group f; Pp.end_group f; cxt))
                | Try (b,ctch,fin) ->
                    (Pp.start_group f 0;
                     Pp.string f "try";
                     Pp.space ~indent:1 f;
                     (let cxt = block cxt f b in
                      let cxt =
                        match ctch with
                        | None  -> cxt
                        | Some (i,b) ->
                            (Pp.break f;
                             Pp.start_group f 1;
                             Pp.string f "catch(";
                             (let cxt = ident cxt f i in
                              Pp.string f ")";
                              Pp.break f;
                              (let cxt = block cxt f b in Pp.end_group f; cxt))) in
                      let cxt =
                        match fin with
                        | None  -> cxt
                        | Some b ->
                            (Pp.break f;
                             Pp.start_group f 1;
                             Pp.string f "finally";
                             Pp.space f;
                             (let cxt = block cxt f b in Pp.end_group f; cxt)) in
                      Pp.end_group f; cxt))
                | Fn (i,l,b,loc) ->
                    (Pp.start_group f 1;
                     Pp.start_group f 0;
                     Pp.start_group f 0;
                     Pp.string f "function";
                     Pp.space f;
                     (let cxt = ident cxt f i in
                      Pp.end_group f;
                      Pp.break f;
                      Pp.start_group f 1;
                      Pp.string f "(";
                      (let cxt' = formal_parameter_list cxt f l in
                       Pp.string f ")";
                       Pp.end_group f;
                       Pp.end_group f;
                       Pp.break f;
                       Pp.start_group f 1;
                       Pp.string f "{";
                       (let () = ignore @@ (function_body cxt' f b) in
                        output_debug_info config f loc;
                        Pp.string f "}";
                        Pp.end_group f;
                        Pp.end_group f;
                        cxt))))) : cxt)
            and statement_list cxt f ?skip_last_semi  b =
              match b with
              | [] -> cxt
              | s::[] -> statement cxt f ?last:skip_last_semi s
              | s::r ->
                  let cxt = statement cxt f s in
                  (Pp.break f; statement_list cxt f ?skip_last_semi r)
            and block cxt f b =
              Pp.start_group f 1;
              Pp.string f "{";
              (let cxt = statement_list cxt ~skip_last_semi:true f b in
               Pp.string f "}"; Pp.end_group f; cxt)
            and source_elements cxt f ?skip_last_semi  se =
              (match se with
               | [] -> cxt
               | s::[] -> statement cxt f ?last:skip_last_semi s
               | s::r ->
                   let cxt = statement cxt f s in
                   (Pp.break f; source_elements cxt f ?skip_last_semi r) : 
              cxt)
            and program f s = source_elements f s
          end
        let part_of_ident =
          let a =
            Array.init 256
              (fun i  ->
                 let c = Char.chr i in
                 ((c >= 'a') && (c <= 'z')) ||
                   (((c >= 'A') && (c <= 'Z')) ||
                      (((c >= '0') && (c <= '9')) || ((c = '_') || (c = '$'))))) in
          fun c  -> Array.unsafe_get a (Char.code c)
        let need_space a b =
          ((part_of_ident a) && (part_of_ident b)) ||
            ((a = '/') && (b = '/'))
        let program cxt f ?source_map  p =
          (let smo =
             match source_map with | None  -> None | Some (_,sm) -> Some sm in
           let module O = Make(struct let source_map = smo end) in
             Pp.set_needed_space_function f need_space;
             Pp.start_group f 0;
             (let cxt = O.program cxt f p in
              Pp.end_group f;
              Pp.newline f;
              (match source_map with
               | None  -> ()
               | Some (out_file,sm) ->
                   let sources = sm.Source_map.sources in
                   let sources_content =
                     match sm.Source_map.sources_content with
                     | None  -> None
                     | Some [] ->
                         Some
                           (List.map
                              (fun file  ->
                                 if Sys.file_exists file
                                 then
                                   let content = read_file file in
                                   Some content
                                 else None) sources)
                     | Some _ -> assert false in
                   let mappings =
                     List.map
                       (fun (pos,m)  ->
                          {
                            m with
                            Source_map.gen_line = (pos.Pp.p_line);
                            Source_map.gen_col = (pos.Pp.p_col)
                          }) (!O.temp_mappings) in
                   let sources =
                     match sm.Source_map.sourceroot with
                     | None  -> sources
                     | Some root ->
                         let script_file =
                           (Filename.chop_extension sm.Source_map.file) ^
                             ".make-sourcemap-links.sh" in
                         let oc = open_out script_file in
                         let printf fmt = Printf.fprintf oc fmt in
                         let targets =
                           List.map (fun src  -> Filename.basename src)
                             sources in
                         (printf "#! /bin/bash\n";
                          printf "mkdir -p %s\n" root;
                          List.iter2
                            (fun src  ->
                               fun tg  ->
                                 printf "ln -s %s %s\n" src
                                   (Filename.concat root tg)) sources targets;
                          close_out oc;
                          warn
                            "Source-map info: run 'sh %s' to create links to sources in %s.\n%!"
                            script_file root;
                          targets) in
                   let sm =
                     {
                       sm with
                       Source_map.sources = sources;
                       sources_content;
                       mappings
                     } in
                   let urlData =
                     match out_file with
                     | None  ->
                         let buf = Buffer.create 1024 in
                         let pp = Pp.to_buffer buf in
                         let json = Source_map.json sm in
                         (Json.pp pp json;
                          (let data = Buffer.contents buf in
                           "data:application/json;base64," ^
                             (B64.encode data)))
                     | Some out_file ->
                         let oc = open_out out_file in
                         let pp = Pp.to_out_channel oc in
                         (Pp.set_compact pp false;
                          (let json = Source_map.json sm in
                           Json.pp pp json;
                           close_out oc;
                           Filename.basename out_file)) in
                   (Pp.newline f;
                    Pp.string f
                      (Printf.sprintf "//# sourceMappingURL=%s" urlData)));
              cxt) : cxt)
      end 
    module Gen_util :
      sig
        type output =
          {
          block: J.block;
          value: J.expression option;
          finished: bool;}
        type st =
          | EffectCall
          | Declare of J.ident
          | NeedValue
          | Assign of
          J.ident[@ocaml.doc
                   " when use [Assign], var is not needed, since it's already declared \n      make sure all [Assigs] are declared first, otherwise you are creating global variables\n   "]
        val make_output :
          ?value:J.expression -> ?finished:bool -> J.block -> output
        val gen : ?name:string -> unit -> Ident.t
        val exports : Ident.t list -> J.expression list -> J.statement
        val block_of_output : output -> J.block
        val break_of_output : output -> J.block
        val is_js_pure : J.expression -> bool
        val is_pure : Lambda.lambda -> bool
        module Ops : sig val (++) : output -> output -> output end
        val dump_output : output -> out_channel -> unit
        val pp_output : output -> Pp.t -> unit[@@ocaml.doc
                                                " \n    - not should_return, has name\n      assign the value \n    - should_return, has name\n      impossible\n    - not should_return, no name\n      when prue ignoe\n      otherwise make  expression statement\n    - should_return, no name\n      return it \n "]
        val handle_name_tail :
          st -> bool -> Lambda.lambda -> J.expression -> output[@@ocaml.doc
                                                                 " \n    - not should_return, has name\n      assign the value \n    - should_return, has name\n      impossible\n    - not should_return, no name\n      when prue ignoe\n      otherwise make  expression statement\n    - should_return, no name\n      return it \n "]
        val handle_block_return :
          st -> bool -> Lambda.lambda -> J.block -> J.expression -> output
        val concat : output list -> output
      end =
      struct
        module E = J_helper.Exp
        module S = J_helper.Stmt
        type output =
          {
          block: J.block;
          value: J.expression option;
          finished:
            bool[@ocaml.doc
                  " \n            When [finished] is true the block is already terminated, value does not make sense\n            default is false, false is  an conservative approach \n         "];}
        type st =
          | EffectCall
          | Declare of J.ident
          | NeedValue
          | Assign of J.ident
        let make_output ?value  ?(finished= false)  block =
          { block; value; finished }
        let dummy_output = { value = None; block = []; finished = false }
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
               if is_pure lam
               then dummy_output
               else { block = []; value = (Some exp); finished = false }
           | (EffectCall ,true ) ->
               make_output [S.return (Some exp)] ~finished:true
           | (Declare n,false ) ->
               make_output [S.variable n ~loc_exp:(exp, N)]
           | (Assign n,false ) -> make_output [S.assign n exp]
           | ((Declare _|Assign _),true ) ->
               make_output [S.unknown_lambda lam] ~finished:true
           | (NeedValue ,_) ->
               { block = []; value = (Some exp); finished = false } : 
          output)
        let handle_block_return st should_return lam block exp =
          (match (st, should_return) with
           | (Declare n,false ) ->
               make_output (block @ [S.variable n ~loc_exp:(exp, N)])
           | (Assign n,false ) -> make_output (block @ [S.assign n exp])
           | ((Declare _|Assign _),true ) ->
               make_output [S.unknown_lambda lam] ~finished:true
           | (EffectCall ,false ) -> make_output block ~value:exp
           | (EffectCall ,true ) ->
               make_output (block @ [S.return (Some exp)]) ~finished:true
           | (NeedValue ,_) -> make_output block ~value:exp : output)
        let gen ?(name= "$js")  () = Jident.create name
        let exports (idents : Ident.t list) (lams : J.expression list) =
          (let properties: J.property_map =
             List.map2
               (fun (i : Ident.t)  ->
                  fun (e : J.expression)  -> ((J.PNS (i.name)), e)) idents
               lams in
           S.exp
             (E.bin Eq (E.access (E.js_var "module") (E.str "exports"))
                (E.obj properties)) : J.statement)
        let rec is_js_pure (x : J.expression) =
          match x.expression_desc with
          | EVar _ -> true
          | ENum _ -> true
          | EArr xs ->
              List.for_all
                (function | None  -> true | Some x -> is_js_pure x) xs
          | _ -> false
        let statement_of_opt_expr (x : J.expression option) =
          (match x with
           | None  -> S.empty ()
           | Some x when is_js_pure x -> S.empty ()
           | Some x -> S.exp x : J.statement)
        let block_of_output (x : output) =
          (match x with
           | { block; value = opt; finished } ->
               if finished
               then block
               else block @ [statement_of_opt_expr opt] : J.block)
        let break_of_output (x : output) =
          (match x with
           | { finished = true ; block;_} -> block
           | { block; value = None ; finished } ->
               if finished then block else block @ [S.break ()]
           | { block; value = opt;_} ->
               block @ [statement_of_opt_expr opt; S.break ()] : J.block)
        let append (x : output) (y : output) =
          (match (x, y) with
           | ({ finished = true ;_},y) -> x
           | ({ block = []; value = None ;_},y) -> y
           | ({ block = []; value = Some _;_},{ block = []; value = None ;_})
               -> x
           | ({ block = []; value = Some e1;_},({ block = [];
                                                  value = Some e2; finished }
                                                  as z))
               ->
               if is_js_pure e1
               then z
               else { block = []; value = (Some (E.seq e1 e2)); finished }
           | ({ block = block1; value = opt_e1;_},{ block = block2;
                                                    value = opt_e2; finished
                                                    })
               ->
               make_output
                 (block1 @ ((statement_of_opt_expr opt_e1) :: block2))
                 ?value:opt_e2 ~finished : output)
        module Ops =
          struct
            let (++) (x : output) (y : output) = (append x y : output)
          end
        let concat (xs : output list) =
          (match xs with
           | [] -> dummy_output
           | y::ys -> List.fold_left append y ys : output)
        let pp_output ({ block; value = exp } : output) p =
          let cxt = Pp_js.empty in
          let cxt = let open Pp_js in program cxt p block in
          ignore (Pp_js.program cxt p [statement_of_opt_expr exp])
        let dump_output ({ block; value = exp } : output) (oc : out_channel)
          =
          let cxt = Pp_js.empty in
          let p = Pp.to_out_channel oc in
          let cxt = let open Pp_js in program cxt p block in
          ignore (Pp_js.program cxt p [statement_of_opt_expr exp])
      end 
    module Compile_of_env :
      sig
        type key =
          | GetGlobal of Ident.t* int* Env.t
          | QueryGlobal of Ident.t* Env.t*
          bool[@ocaml.doc
                " we need register which global variable is an dependency "]
          | CamlPrimitive of Primitive.description* J.expression list
        val get_exp : key -> J.expression
        val required_modules : Ident.t list -> J.block
        val query_type : Ident.t -> Env.t -> string
        val add_built_in_module : string -> unit
        val reset : unit -> unit
      end =
      struct
        module E = J_helper.Exp
        module S = J_helper.Stmt
        open Gen_util.Ops
        type env_value =
          | Visit of Types.signature_item list
          | Include
          | BuiltIn
        let cached_tbl: (Ident.t,env_value) Hashtbl.t = Hashtbl.create 31
        let reset () = Hashtbl.clear cached_tbl[@@ocaml.doc
                                                 " For each compilation we need reset to make it re-entrant "]
        let add_built_in_module name =
          Hashtbl.replace cached_tbl (Ident.create_persistent name) BuiltIn
        let add_include name =
          Hashtbl.replace cached_tbl (Ident.create_persistent name) Include
        let name_of_signature_item (x : Types.signature_item) =
          match x with
          | Sig_value (i,_)|Sig_module (i,_,_) -> i
          | Sig_typext (i,_,_) -> i
          | Sig_modtype (i,_) -> i
          | Sig_class (i,_,_) -> i
          | Sig_class_type (i,_,_) -> i
          | Sig_type (i,_,_) -> i
        let get_name (serializable_sigs : Types.signature_item list)
          (pos : int) =
          let ident =
            name_of_signature_item @@ (List.nth serializable_sigs pos) in
          ident.name[@@ocaml.doc " Used in [Pgetglobal] "]
        type key =
          | GetGlobal of Ident.t* int* Env.t
          | QueryGlobal of Ident.t* Env.t*
          bool[@ocaml.doc
                " we need register which global variable is an dependency "]
          | CamlPrimitive of Primitive.description* J.expression list
        let query (prim : Primitive.description) args =
          (let module X = struct exception NA end in
             try
               let v =
                 match prim with
                 | {
                     prim_name = ("caml_gc_stat"|"caml_gc_quick_stat" as x);_}
                     ->
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
                      | e0::e1::[] ->
                          E.call (E.access e0 (E.str "concat")) [e1]
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
                 | { prim_name = ("caml_int32_add"|"caml_nativeint_add");_}
                     ->
                     (match args with
                      | e0::e1::[] -> E.bin Plus e0 e1
                      | _ -> assert false)
                 | { prim_name = ("caml_int32_div"|"caml_nativeint_div");_}
                     ->
                     (match args with
                      | e0::e1::[] -> E.bin Bor (E.bin Div e0 e1) (E.int 0)
                      | _ -> assert false)
                 | { prim_name = ("caml_int32_mul"|"caml_nativeint_mul");_}
                     ->
                     (match args with
                      | e0::e1::[] -> E.bin Mul e0 e1
                      | _ -> assert false)
                 | {
                     prim_name =
                       ("caml_int32_of_int"|"caml_nativeint_of_int"
                        |"caml_nativeint_of_int32");_}
                     -> (match args with | e::[] -> e | _ -> assert false)
                 | {
                     prim_name =
                       ("caml_int32_of_float"|"caml_int_of_float"
                        |"caml_nativeint_of_float");_}
                     ->
                     (match args with
                      | e::[] -> E.bin Bor e (E.int 0)
                      | _ -> assert false)
                 | {
                     prim_name =
                       ("caml_int32_to_float"|"caml_int32_to_int"
                        |"caml_nativeint_to_int"|"caml_nativeint_to_float"
                        |"caml_nativeint_to_int32");_}
                     -> (match args with | e::[] -> e | _ -> assert false)
                 | { prim_name = ("caml_int32_sub"|"caml_nativeint_sub");_}
                     ->
                     (match args with
                      | e0::e1::[] -> E.bin Minus e0 e1
                      | _ -> assert false)
                 | { prim_name = ("caml_int32_xor"|"caml_nativeint_xor");_}
                     ->
                     (match args with
                      | e0::e1::[] -> E.bin Bxor e0 e1
                      | _ -> assert false)
                 | { prim_name = ("caml_int32_and"|"caml_nativeint_and");_}
                     ->
                     (match args with
                      | e0::e1::[] -> E.bin Band e0 e1
                      | _ -> assert false)
                 | { prim_name = ("caml_int32_or"|"caml_nativeint_or");_} ->
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
                     (match args with
                      | e::[] -> E.un Neg e
                      | _ -> assert false)
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
                       ("caml_gc_compaction"|"caml_gc_full_major"
                        |"caml_gc_major"|"caml_gc_major_slice"
                        |"caml_gc_minor"|"caml_gc_set");_}
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
        let filter_serializable_signatures
          (signature : Types.signature_item list) =
          (List.filter
             (fun x  ->
                match (x : Types.signature_item) with
                | Sig_typext _|Sig_module _|Sig_class _ -> true
                | Sig_value (_,{ val_kind = Val_prim _ }) -> false
                | Sig_value _ -> true
                | _ -> false) signature : Types.signature_item list)
        let get_exp key =
          (match key with
           | GetGlobal ((id : Ident.t),(pos : int),env) ->
               let v =
                 match Hashtbl.find cached_tbl id with
                 | exception Not_found  ->
                     (match Env.find_module (Pident id) env with
                      | { md_type = Mty_signature signature;_} ->
                          let serializable_sigs =
                            filter_serializable_signatures signature in
                          (Hashtbl.add cached_tbl id
                             (Visit serializable_sigs);
                           E.str (get_name serializable_sigs pos))
                      | _ -> assert false
                      | exception Not_found  ->
                          (prerr_endline
                             (Printf.sprintf "Err %s %d %d" id.name id.flags
                                pos);
                           E.int (pos + 1)))
                 | Visit serializable_sigs ->
                     E.str (get_name serializable_sigs pos)
                 | Include |BuiltIn  -> assert false in
               E.access (E.var id) v
           | QueryGlobal (id,env,expand) ->
               if Ident.is_predef_exn id
               then (add_built_in_module J_helper.prim; E.global id.name)
               else
                 (let sigs =
                    match Hashtbl.find cached_tbl id with
                    | exception Not_found  ->
                        (match Env.find_module (Pident id) env with
                         | { md_type = Mty_signature signature;_} ->
                             let serializable_sigs =
                               filter_serializable_signatures signature in
                             (Hashtbl.add cached_tbl id
                                (Visit serializable_sigs);
                              serializable_sigs)
                         | _ -> assert false)
                    | Visit serializable_sigs -> serializable_sigs
                    | Include |BuiltIn  -> assert false in
                  if expand
                  then
                    let len = List.length sigs in
                    E.arr ((E.int ~comment:(id.name) 0) ::
                      (Jlist.init len
                         (fun i  ->
                            E.access (E.var id) (E.str (get_name sigs i)))))
                  else E.var id)
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
        let required_modules (extras : Ident.t list) =
          let require (id : Ident.t) =
            (((E.call (E.js_var "require")
                 [E.str
                    (Printf.sprintf "./%s.js" (String.uncapitalize id.name))]),
               J.N) : (E.t* J.location)) in
          let referred =
            Hashtbl.fold
              (fun (id : Ident.t)  ->
                 fun _  ->
                   fun block  -> (S.variable id ~loc_exp:(require id)) ::
                     block) cached_tbl ([] : J.block) in
          let forced =
            Jlist.filter_map
              (fun id  ->
                 if Hashtbl.mem cached_tbl id
                 then None
                 else Some (S.variable id ~loc_exp:(require id))) extras in
          referred @ forced
      end 
    module Alias_pass :
      sig
        val simplify_alias :
          Lambda_util.meta -> Lambda.lambda -> Lambda.lambda
      end =
      struct
        let simplify_alias
          (({ exports = export_idents } as meta) : Lambda_util.meta)
          (lam : Lambda.lambda) =
          (let required_modules = ref [] in
           let record_module id =
             required_modules := (id :: (!required_modules)) in
           let rec simpl (lam : Lambda.lambda) =
             match lam with
             | Lconst _ -> lam
             | Lvar v ->
                 (try Lvar (Hashtbl.find meta.alias_tbl v)
                  with | Not_found  -> lam)
             | Llet (kind,k,(Lprim (Pgetglobal i,[]) as g),l) ->
                 let v = simpl l in
                 if List.mem k export_idents
                 then Llet (kind, k, g, v)
                 else
                   (match kind with
                    | Alias  -> v
                    | Strict |StrictOpt |Variable  -> (record_module i; v))
             | Lprim (Pfield i,(Lvar v)::[]) ->
                 (match Hashtbl.find meta.ident_tbl v with
                  | Module (Global g) ->
                      Lprim ((Pfield i), [Lprim ((Pgetglobal g), [])])
                  | _ -> lam
                  | exception Not_found  -> lam)
             | Llet (str,v,l1,l2) -> Llet (str, v, (simpl l1), (simpl l2))
             | Lletrec (bindings,body) ->
                 let bindings =
                   List.map (fun (k,l)  -> (k, (simpl l))) bindings in
                 Lletrec (bindings, (simpl body))
             | Lprim (prim,ll) -> Lprim (prim, (List.map simpl ll))
             | Lapply (l1,ll,info) ->
                 Lapply ((simpl l1), (List.map simpl ll), info)
             | Lfunction (kind,params,l) ->
                 Lfunction (kind, params, (simpl l))
             | Lswitch
                 (l,{ sw_failaction; sw_consts; sw_blocks; sw_numblocks;
                      sw_numconsts })
                 ->
                 Lswitch
                   ((simpl l),
                     {
                       sw_consts =
                         (List.map (fun (v,l)  -> (v, (simpl l))) sw_consts);
                       sw_blocks =
                         (List.map (fun (v,l)  -> (v, (simpl l))) sw_blocks);
                       sw_numconsts;
                       sw_numblocks;
                       sw_failaction =
                         ((match sw_failaction with
                           | None  -> None
                           | Some x -> Some (simpl x)))
                     })
             | Lstringswitch (l,sw,d) ->
                 Lstringswitch
                   ((simpl l), (List.map (fun (i,l)  -> (i, (simpl l))) sw),
                     ((match d with
                       | Some d -> Some (simpl d)
                       | None  -> None)))
             | Lstaticraise (i,ls) -> Lstaticraise (i, (List.map simpl ls))
             | Lstaticcatch (l1,(i,x),l2) ->
                 Lstaticcatch ((simpl l1), (i, x), (simpl l2))
             | Ltrywith (l1,v,l2) -> Ltrywith ((simpl l1), v, (simpl l2))
             | Lifthenelse (l1,l2,l3) ->
                 Lifthenelse ((simpl l1), (simpl l2), (simpl l3))
             | Lsequence (l1,l2) -> Lsequence ((simpl l1), (simpl l2))
             | Lwhile (l1,l2) -> Lwhile ((simpl l1), (simpl l2))
             | Lfor (flag,l1,l2,dir,l3) ->
                 Lfor (flag, (simpl l1), (simpl l2), dir, (simpl l3))
             | Lassign (v,l) -> Lassign (v, (simpl l))
             | Lsend (u,m,o,ll,v) ->
                 Lsend (u, (simpl m), (simpl o), (List.map simpl ll), v)
             | Levent (l,event) -> Levent ((simpl l), event)
             | Lifused (v,l) -> Lifused (v, (simpl l)) in
           Lambda_util.add_required_modules (!required_modules) meta;
           simpl lam : Lambda.lambda)[@@ocaml.doc
                                       " \n    we should guarantee that all global aliases *would be removed*, it will not be aliased \n    So the only remaining place for globals is either just  Pgetglobal in functor application or \n    `Lprim (Pfield( i ), [Pgetglobal])`\n\n    This pass does not change meta \n"]
      end 
    module Lets_pass :
      sig
        val simplify_lets :
          Lambda_util.meta -> Lambda.lambda -> Lambda.lambda[@@ocaml.doc
                                                              "\n   This pass would do \n\n   1. beta reduction -> Llet (Strict )\n  \n   2. The global table [occ] associates to each let-bound identifier\n   the number of its uses (as a reference):\n     - 0 if never used\n     - 1 if used exactly once in and *not under a lambda or within a loop\n     - > 1 if used several times or under a lambda or within a loop.\n\n   The local table [bv] associates to each locally-let-bound variable\n   its reference count, as above.  [bv] is enriched at let bindings\n   but emptied when crossing lambdas and loops. \n\n   For this pass, when it' used under a lambda or within a loop, we don't do anything,\n   in theory, we can still do something if it's pure but we are conservative here.\n\n   [bv] is used to help caculate [occ] it is not useful outside\n\n "]
        val apply_lets :
          (Ident.t,int ref) Hashtbl.t ->
            Lambda_util.meta -> Lambda.lambda -> Lambda.lambda
      end =
      struct
        open Asttypes
        open Lambda
        exception Real_reference
        let rec eliminate_ref id =
          function
          | Lvar v as lam ->
              if Ident.same v id then raise Real_reference else lam
          | Lconst cst as lam -> lam
          | Lapply (e1,el,loc) ->
              Lapply
                ((eliminate_ref id e1), (List.map (eliminate_ref id) el),
                  loc)
          | Lfunction (kind,params,body) as lam ->
              if IdentSet.mem id (free_variables lam)
              then raise Real_reference
              else lam
          | Llet (str,v,e1,e2) ->
              Llet (str, v, (eliminate_ref id e1), (eliminate_ref id e2))
          | Lletrec (idel,e2) ->
              Lletrec
                ((List.map (fun (v,e)  -> (v, (eliminate_ref id e))) idel),
                  (eliminate_ref id e2))
          | Lprim (Pfield 0,(Lvar v)::[]) when Ident.same v id -> Lvar id
          | Lprim (Psetfield (0,_),(Lvar v)::e::[]) when Ident.same v id ->
              Lassign (id, (eliminate_ref id e))
          | Lprim (Poffsetref delta,(Lvar v)::[]) when Ident.same v id ->
              Lassign (id, (Lprim ((Poffsetint delta), [Lvar id])))
          | Lprim (p,el) -> Lprim (p, (List.map (eliminate_ref id) el))
          | Lswitch (e,sw) ->
              Lswitch
                ((eliminate_ref id e),
                  {
                    sw_numconsts = (sw.sw_numconsts);
                    sw_consts =
                      (List.map (fun (n,e)  -> (n, (eliminate_ref id e)))
                         sw.sw_consts);
                    sw_numblocks = (sw.sw_numblocks);
                    sw_blocks =
                      (List.map (fun (n,e)  -> (n, (eliminate_ref id e)))
                         sw.sw_blocks);
                    sw_failaction =
                      (Misc.may_map (eliminate_ref id) sw.sw_failaction)
                  })
          | Lstringswitch (e,sw,default) ->
              Lstringswitch
                ((eliminate_ref id e),
                  (List.map (fun (s,e)  -> (s, (eliminate_ref id e))) sw),
                  (Misc.may_map (eliminate_ref id) default))
          | Lstaticraise (i,args) ->
              Lstaticraise (i, (List.map (eliminate_ref id) args))
          | Lstaticcatch (e1,i,e2) ->
              Lstaticcatch ((eliminate_ref id e1), i, (eliminate_ref id e2))
          | Ltrywith (e1,v,e2) ->
              Ltrywith ((eliminate_ref id e1), v, (eliminate_ref id e2))
          | Lifthenelse (e1,e2,e3) ->
              Lifthenelse
                ((eliminate_ref id e1), (eliminate_ref id e2),
                  (eliminate_ref id e3))
          | Lsequence (e1,e2) ->
              Lsequence ((eliminate_ref id e1), (eliminate_ref id e2))
          | Lwhile (e1,e2) ->
              Lwhile ((eliminate_ref id e1), (eliminate_ref id e2))
          | Lfor (v,e1,e2,dir,e3) ->
              Lfor
                (v, (eliminate_ref id e1), (eliminate_ref id e2), dir,
                  (eliminate_ref id e3))
          | Lassign (v,e) -> Lassign (v, (eliminate_ref id e))
          | Lsend (k,m,o,el,loc) ->
              Lsend
                (k, (eliminate_ref id m), (eliminate_ref id o),
                  (List.map (eliminate_ref id) el), loc)
          | Levent (l,ev) -> Levent ((eliminate_ref id l), ev)
          | Lifused (v,e) -> Lifused (v, (eliminate_ref id e))
        let apply_lets occ ({ exports = export_defs } : Lambda_util.meta)
          lambda =
          let subst = Hashtbl.create 31 in
          let count_var v = try !(Hashtbl.find occ v) with | Not_found  -> 0 in
          let mklet = Lambda_util.mklet export_defs in
          let rec simplif (lam : Lambda.lambda) =
            match lam with
            | Lvar v as l ->
                (try Hashtbl.find subst v with | Not_found  -> l)
            | Lconst cst as l -> l
            | Lapply (Lfunction (Curried ,params,body),args,_) when
                (List.length params) = (List.length args) ->
                simplif (Lambda_util.beta_reduce params body args)
            | Lapply
                (Lfunction (Tupled ,params,body),(Lprim
                 (Pmakeblock _,args))::[],_)
                when (List.length params) = (List.length args) ->
                simplif (Lambda_util.beta_reduce params body args)
            | Lapply (l1,ll,loc) ->
                Lapply ((simplif l1), (List.map simplif ll), loc)
            | Lfunction (kind,params,l) ->
                Lfunction (kind, params, (simplif l))
            | Llet ((Strict |Alias |StrictOpt ),v,Lvar w,l2) when
                not (List.mem v export_defs) ->
                (Hashtbl.add subst v (simplif (Lvar w)); simplif l2)
            | Llet
                (Strict ,v,Lprim
                 (Pmakeblock (0,tag_info,Mutable ),linit::[]),lbody)
                ->
                let slinit = simplif linit in
                let slbody = simplif lbody in
                (try mklet (Variable, v, slinit, (eliminate_ref v slbody))
                 with
                 | Real_reference  ->
                     mklet
                       (Strict, v,
                         (Lprim
                            ((Pmakeblock (0, tag_info, Mutable)), [slinit])),
                         slbody))
            | Llet (Alias ,v,l1,l2) ->
                (match count_var v with
                 | 0 -> simplif l2
                 | 1 when not (List.mem v export_defs) ->
                     (Hashtbl.add subst v (simplif l1); simplif l2)
                 | n -> Llet (Alias, v, (simplif l1), (simplif l2)))
            | Llet (StrictOpt ,v,l1,l2) ->
                (match count_var v with
                 | 0 -> simplif l2
                 | n -> mklet (Alias, v, (simplif l1), (simplif l2)))
            | Llet (kind,v,l1,l2) ->
                mklet (kind, v, (simplif l1), (simplif l2))
            | Lletrec (bindings,body) ->
                Lletrec
                  ((List.map (fun (v,l)  -> (v, (simplif l))) bindings),
                    (simplif body))
            | Lprim (p,ll) -> Lprim (p, (List.map simplif ll))
            | Lswitch (l,sw) ->
                let new_l = simplif l
                and new_consts =
                  List.map (fun (n,e)  -> (n, (simplif e))) sw.sw_consts
                and new_blocks =
                  List.map (fun (n,e)  -> (n, (simplif e))) sw.sw_blocks
                and new_fail = Misc.may_map simplif sw.sw_failaction in
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
                    (List.map (fun (s,l)  -> (s, (simplif l))) sw),
                    (Misc.may_map simplif d))
            | Lstaticraise (i,ls) -> Lstaticraise (i, (List.map simplif ls))
            | Lstaticcatch (l1,(i,args),l2) ->
                Lstaticcatch ((simplif l1), (i, args), (simplif l2))
            | Ltrywith (l1,v,l2) -> Ltrywith ((simplif l1), v, (simplif l2))
            | Lifthenelse (l1,l2,l3) ->
                Lifthenelse ((simplif l1), (simplif l2), (simplif l3))
            | Lsequence (Lifused (v,l1),l2) ->
                if (count_var v) > 0
                then Lsequence ((simplif l1), (simplif l2))
                else simplif l2
            | Lsequence (l1,l2) -> Lsequence ((simplif l1), (simplif l2))
            | Lwhile (l1,l2) -> Lwhile ((simplif l1), (simplif l2))
            | Lfor (v,l1,l2,dir,l3) ->
                Lfor (v, (simplif l1), (simplif l2), dir, (simplif l3))
            | Lassign (v,l) -> Lassign (v, (simplif l))
            | Lsend (k,m,o,ll,loc) ->
                Lsend
                  (k, (simplif m), (simplif o), (List.map simplif ll), loc)
            | Levent (l,ev) -> Levent ((simplif l), ev)
            | Lifused (v,l) ->
                if (count_var v) > 0 then simplif l else lambda_unit in
          simplif lambda
        let collect_occurs ({ exports = export_defs;_} : Lambda_util.meta)
          lam =
          (let occ: (Ident.t,int ref) Hashtbl.t = Hashtbl.create 83 in
           let count_var v = try !(Hashtbl.find occ v) with | Not_found  -> 0
           and bind_var bv v =
             let r = ref 0 in Hashtbl.add occ v r; Tbl.add v r bv
           and use_var bv v n =
             try let r = Tbl.find v bv in r := ((!r) + n)
             with
             | Not_found  ->
                 (try let r = Hashtbl.find occ v in r := ((!r) + 2)
                  with | Not_found  -> ()) in
           let rec count bv =
             function
             | Lconst cst -> ()
             | Lvar v -> use_var bv v 1
             | Lapply (Lfunction (Curried ,params,body),args,_) when
                 (List.length params) = (List.length args) ->
                 count bv (Lambda_util.beta_reduce params body args)
             | Lapply
                 (Lfunction (Tupled ,params,body),(Lprim
                  (Pmakeblock _,args))::[],_)
                 when (List.length params) = (List.length args) ->
                 count bv (Lambda_util.beta_reduce params body args)
             | Lapply (l1,ll,_) -> (count bv l1; List.iter (count bv) ll)
             | Lfunction (kind,params,l) -> count Tbl.empty l
             | Llet (str,v,Lvar w,l2) ->
                 (count (bind_var bv v) l2; use_var bv w (count_var v))
             | Llet (str,v,l1,l2) ->
                 (count (bind_var bv v) l2;
                  if (str = Strict) || ((count_var v) > 0) then count bv l1)
             | Lletrec (bindings,body) ->
                 (List.iter (fun (v,l)  -> count bv l) bindings;
                  count bv body)
             | Lprim (p,ll) -> List.iter (count bv) ll
             | Lswitch (l,sw) ->
                 (count_default bv sw;
                  count bv l;
                  List.iter (fun (_,l)  -> count bv l) sw.sw_consts;
                  List.iter (fun (_,l)  -> count bv l) sw.sw_blocks)
             | Lstringswitch (l,sw,d) ->
                 (count bv l;
                  List.iter (fun (_,l)  -> count bv l) sw;
                  (match d with
                   | Some d ->
                       (match sw with
                        | []|_::[] -> count bv d
                        | _ -> (count bv d; count bv d))
                   | None  -> ()))
             | Lstaticraise (i,ls) -> List.iter (count bv) ls
             | Lstaticcatch (l1,(i,_),l2) -> (count bv l1; count bv l2)
             | Ltrywith (l1,v,l2) -> (count bv l1; count bv l2)
             | Lifthenelse (l1,l2,l3) ->
                 (count bv l1; count bv l2; count bv l3)
             | Lsequence (l1,l2) -> (count bv l1; count bv l2)
             | Lwhile (l1,l2) -> (count Tbl.empty l1; count Tbl.empty l2)
             | Lfor (_,l1,l2,dir,l3) ->
                 (count bv l1; count bv l2; count Tbl.empty l3)
             | Lassign (v,l) -> count bv l
             | Lsend (_,m,o,ll,_) -> List.iter (count bv) (m :: o :: ll)
             | Levent (l,_) -> count bv l
             | Lifused (v,l) -> if (count_var v) > 0 then count bv l
           and count_default bv sw =
             match sw.sw_failaction with
             | None  -> ()
             | Some al ->
                 let nconsts = List.length sw.sw_consts
                 and nblocks = List.length sw.sw_blocks in
                 if
                   (nconsts < sw.sw_numconsts) && (nblocks < sw.sw_numblocks)
                 then (count bv al; count bv al)
                 else
                   (assert
                      ((nconsts < sw.sw_numconsts) ||
                         (nblocks < sw.sw_numblocks));
                    count bv al) in
           count Tbl.empty lam; occ : (Ident.t,int ref) Hashtbl.t)
        let simplify_lets (meta : Lambda_util.meta) (lam : Lambda.lambda) =
          let occ = collect_occurs meta lam in apply_lets occ meta lam
      end 
    module Exits_pass :
      sig val simplify_exits : Lambda.lambda -> Lambda.lambda end =
      struct
        let simplify_exits (lam : Lambda.lambda) =
          let exits = Hashtbl.create 17 in
          let count_exit i =
            try !(Hashtbl.find exits i) with | Not_found  -> 0
          and incr_exit i =
            try incr (Hashtbl.find exits i)
            with | Not_found  -> Hashtbl.add exits i (ref 1) in
          let rec count (lam : Lambda.lambda) =
            match lam with
            | Lvar _|Lconst _ -> ()
            | Lapply (l1,ll,_) -> (count l1; List.iter count ll)
            | Lfunction (kind,params,l) -> count l
            | Llet (str,v,l1,l2) -> (count l2; count l1)
            | Lletrec (bindings,body) ->
                (List.iter (fun (v,l)  -> count l) bindings; count body)
            | Lprim (p,ll) -> List.iter count ll
            | Lswitch (l,sw) ->
                (count_default sw;
                 count l;
                 List.iter (fun (_,l)  -> count l) sw.sw_consts;
                 List.iter (fun (_,l)  -> count l) sw.sw_blocks)
            | Lstringswitch (l,sw,d) ->
                (count l;
                 List.iter (fun (_,l)  -> count l) sw;
                 (match d with
                  | None  -> ()
                  | Some d ->
                      (match sw with
                       | []|_::[] -> count d
                       | _ -> (count d; count d))))
            | Lstaticraise (i,ls) -> (incr_exit i; List.iter count ls)
            | Lstaticcatch (l1,(i,[]),Lstaticraise (j,[])) ->
                (count l1;
                 (let ic = count_exit i in
                  try let r = Hashtbl.find exits j in r := ((!r) + ic)
                  with | Not_found  -> Hashtbl.add exits j (ref ic)))
            | Lstaticcatch (l1,(i,_),l2) ->
                (count l1; if (count_exit i) > 0 then count l2)
            | Ltrywith (l1,v,l2) -> (count l1; count l2)
            | Lifthenelse (l1,l2,l3) -> (count l1; count l2; count l3)
            | Lsequence (l1,l2) -> (count l1; count l2)
            | Lwhile (l1,l2) -> (count l1; count l2)
            | Lfor (_,l1,l2,dir,l3) -> (count l1; count l2; count l3)
            | Lassign (v,l) -> count l
            | Lsend (k,m,o,ll,_) -> List.iter count (m :: o :: ll)
            | Levent (l,_) -> count l
            | Lifused (v,l) -> count l
          and count_default sw =
            match sw.sw_failaction with
            | None  -> ()
            | Some al ->
                let nconsts = List.length sw.sw_consts
                and nblocks = List.length sw.sw_blocks in
                if (nconsts < sw.sw_numconsts) && (nblocks < sw.sw_numblocks)
                then (count al; count al)
                else
                  (assert
                     ((nconsts < sw.sw_numconsts) ||
                        (nblocks < sw.sw_numblocks));
                   count al) in
          count lam;
          (let subst = Hashtbl.create 17 in
           let rec simplif (lam : Lambda.lambda) =
             match lam with
             | Lvar _|Lconst _ as l -> l
             | Lapply (l1,ll,loc) ->
                 Lapply ((simplif l1), (List.map simplif ll), loc)
             | Lfunction (kind,params,l) ->
                 Lfunction (kind, params, (simplif l))
             | Llet (kind,v,l1,l2) ->
                 Llet (kind, v, (simplif l1), (simplif l2))
             | Lletrec (bindings,body) ->
                 Lletrec
                   ((List.map (fun (v,l)  -> (v, (simplif l))) bindings),
                     (simplif body))
             | Lprim (p,ll) ->
                 let ll = List.map simplif ll in
                 (match (p, ll) with
                  | (Prevapply loc,x::(Lapply (f,args,_))::[])
                    |(Prevapply loc,x::(Levent (Lapply (f,args,_),_))::[]) ->
                      Lapply
                        (f, (args @ [x]),
                          (Lambda.default_apply_info ~loc ()))
                  | (Prevapply loc,x::f::[]) ->
                      Lapply (f, [x], (Lambda.default_apply_info ~loc ()))
                  | (Pdirapply loc,(Lapply (f,args,_))::x::[])
                    |(Pdirapply loc,(Levent (Lapply (f,args,_),_))::x::[]) ->
                      Lapply
                        (f, (args @ [x]),
                          (Lambda.default_apply_info ~loc ()))
                  | (Pdirapply loc,f::x::[]) ->
                      Lapply (f, [x], (Lambda.default_apply_info ~loc ()))
                  | _ -> Lprim (p, ll))
             | Lswitch (l,sw) ->
                 let new_l = simplif l
                 and new_consts =
                   List.map (fun (n,e)  -> (n, (simplif e))) sw.sw_consts
                 and new_blocks =
                   List.map (fun (n,e)  -> (n, (simplif e))) sw.sw_blocks
                 and new_fail = Misc.may_map simplif sw.sw_failaction in
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
                     (List.map (fun (s,l)  -> (s, (simplif l))) sw),
                     (Misc.may_map simplif d))
             | Lstaticraise (i,[]) as l ->
                 (try let (_,handler) = Hashtbl.find subst i in handler
                  with | Not_found  -> l)
             | Lstaticraise (i,ls) ->
                 let ls = List.map simplif ls in
                 (try
                    let (xs,handler) = Hashtbl.find subst i in
                    let ys = List.map Ident.rename xs in
                    let env =
                      List.fold_right2
                        (fun x  ->
                           fun y  -> fun t  -> Ident.add x (Lambda.Lvar y) t)
                        xs ys Ident.empty in
                    List.fold_right2
                      (fun y  ->
                         fun l  -> fun r  -> Lambda.Llet (Alias, y, l, r)) ys
                      ls (Lambda.subst_lambda env handler)
                  with | Not_found  -> Lambda.Lstaticraise (i, ls))
             | Lstaticcatch (l1,(i,[]),(Lstaticraise (j,[]) as l2)) ->
                 (Hashtbl.add subst i ([], (simplif l2)); simplif l1)
             | Lstaticcatch (l1,(i,xs),l2) ->
                 (match count_exit i with
                  | 0 -> simplif l1
                  | 1 when i >= 0 ->
                      (Hashtbl.add subst i (xs, (simplif l2)); simplif l1)
                  | _ -> Lstaticcatch ((simplif l1), (i, xs), (simplif l2)))
             | Ltrywith (l1,v,l2) -> Ltrywith ((simplif l1), v, (simplif l2))
             | Lifthenelse (l1,l2,l3) ->
                 Lifthenelse ((simplif l1), (simplif l2), (simplif l3))
             | Lsequence (l1,l2) -> Lsequence ((simplif l1), (simplif l2))
             | Lwhile (l1,l2) -> Lwhile ((simplif l1), (simplif l2))
             | Lfor (v,l1,l2,dir,l3) ->
                 Lfor (v, (simplif l1), (simplif l2), dir, (simplif l3))
             | Lassign (v,l) -> Lassign (v, (simplif l))
             | Lsend (k,m,o,ll,loc) ->
                 Lsend
                   (k, (simplif m), (simplif o), (List.map simplif ll), loc)
             | Levent (l,ev) -> Levent ((simplif l), ev)
             | Lifused (v,l) -> Lifused (v, (simplif l)) in
           simplif lam)
      end 
    module Compile_defs :
      sig
        type jbl_label = int
        module HandlerMap : (Map.S with type  key =  jbl_label)
        type value = {
          exit_id: Ident.t;
          args: Ident.t list;}
        [@@@ocaml.text
          " delegate to the callee to generate expression \n      Invariant: [output] should return a trailing expression\n   "]
        type cxt =
          {
          st: Gen_util.st;
          should_return: bool;
          jmp_table: value HandlerMap.t;
          env: Env.t;}
        val empty_handler_map : value HandlerMap.t
      end =
      struct
        type jbl_label = int
        module HandlerMap =
          Map.Make(struct
                     type t = jbl_label
                     let compare x y = compare (x : t) y
                   end)
        type value = {
          exit_id: Ident.t;
          args: Ident.t list;}
        [@@@ocaml.text
          " delegate to the callee to generate expression \n      Invariant: [output] should return a trailing expression\n   "]
        type cxt =
          {
          st: Gen_util.st;
          should_return: bool;
          jmp_table: value HandlerMap.t;
          env: Env.t;}
        let empty_handler_map = HandlerMap.empty
      end 
    module Compile_primitive :
      sig
        val jsop_of_comp : Lambda.comparison -> J.binop
        val compile_primitive :
          Compile_defs.cxt ->
            Lambda.primitive -> J.expression list -> J.expression
        val compile_const : Lambda.structured_constant -> J.expression
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
        let decorate_side_effect ({ st; should_return;_} : Compile_defs.cxt)
          e =
          match (st, should_return) with
          | (_,true )|((Assign _|Declare _|NeedValue ),_) ->
              E.seq e (E.unit ())
          | (EffectCall ,false ) -> e
        let compile_primitive (({ env;_} as st) : Compile_defs.cxt)
          (prim : Lambda.primitive) (args : J.expression list) =
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
           | Pbytes_of_string  ->
               (match args with | e::[] -> e | _ -> E.unknown_primitive prim)
           | Pbytes_to_string  ->
               (match args with
                | e::[] ->
                    E.call
                      (E.access (E.string "fromCharCode") (E.str "apply"))
                      [E.null (); e]
                | _ -> E.unknown_primitive prim)
           | Pignore  ->
               (match args with | e::[] -> e | _ -> E.unknown_primitive prim)
           | Pbintcomp (_,cmp)|Pfloatcomp cmp|Pintcomp cmp ->
               (match args with
                | e1::e2::[] -> E.bin (jsop_of_comp cmp) e1 e2
                | _ -> E.unknown_primitive prim)
           | Pgetglobal i ->
               Compile_of_env.get_exp (QueryGlobal (i, env, false))
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
           | Parraylength _ ->
               (match args with
                | e::[] ->
                    E.dec ~comment:"-1 for tag" (E.access e (E.str "length"))
                | _ -> E.unknown_primitive prim)
           | Pstringlength |Pbyteslength  ->
               (match args with
                | e::[] -> E.access e (E.str "length")
                | _ -> E.unknown_primitive prim)
           | Psetfield (i,_) ->
               (match args with
                | e0::e1::[] ->
                    decorate_side_effect st
                      (E.eq (E.access e0 (E.int (i + 1))) e1)
                | _ -> E.unknown_primitive prim)
           | Psetfloatfield i ->
               (match args with
                | e::e0::[] ->
                    decorate_side_effect st
                      (E.eq (E.access e (E.int (i + 1))) e0)
                | _ -> E.unknown_primitive prim)
           | Parraysetu _|Parraysets _ ->
               (match args with
                | e::e0::e1::[] ->
                    decorate_side_effect st (E.eq (E.access e (E.inc e0)) e1)
                | _ -> E.unknown_primitive prim)
           | Pbytessetu |Pbytessets  ->
               (match args with
                | e::e0::e1::[] ->
                    decorate_side_effect st (E.eq (E.access e e0) e1)
                | _ -> E.unknown_primitive prim)
           | Pstringsetu |Pstringsets  -> E.unknown_primitive prim
           | Pfloatfield i ->
               (match args with
                | e::[] -> E.access e (E.int (i + 1))
                | _ -> E.unknown_primitive prim)
           | Parrayrefu _|Parrayrefs _ ->
               (match args with
                | e::e1::[] -> E.access e (E.inc e1)
                | _ -> E.unknown_primitive prim)
           | Pbytesrefu |Pbytesrefs  ->
               (match args with
                | e::e1::[] -> E.access e e1
                | _ -> E.unknown_primitive prim)
           | Pstringrefu |Pstringrefs  ->
               (match args with
                | e::e1::[] -> E.call (E.access e (E.str "charCodeAt")) [e1]
                | _ -> E.unknown_primitive prim)
           | Pmakearray i ->
               (match i with
                | Pgenarray |Paddrarray |Pintarray  ->
                    E.arr ((E.int ~comment:"array" 0) :: args)
                | Pfloatarray  ->
                    E.arr ((E.int ~comment:"floatarray" Obj.double_array_tag)
                      :: args))
           | Pbintofint _|Pintofbint _|Pfloatofint  ->
               (match args with | e::[] -> e | _ -> E.unknown_primitive prim)
           | Pabsfloat  ->
               (match args with
                | e::[] ->
                    E.call (E.access (E.js_var "Math") (E.str "abs")) [e]
                | _ -> E.unknown_primitive prim)
           | Pccall prim ->
               Compile_of_env.get_exp (CamlPrimitive (prim, args))
           | Pisint  ->
               (match args with
                | e::[] ->
                    let open E in bin EqEqEq (typeof e) (E.str "number")
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
               (match args with
                | e0::[] -> e0
                | _ -> E.unknown_primitive prim)
           | Pduprecord (_,_)|Plazyforce |Pbittest |Pbigarrayref (_,_,_,_)
             |Pbigarrayset (_,_,_,_)|Pbigarraydim _|Pstring_load_16 _
             |Pstring_load_32 _|Pstring_load_64 _|Pstring_set_16 _
             |Pstring_set_32 _|Pstring_set_64 _|Pbigstring_load_16 _
             |Pbigstring_load_32 _|Pbigstring_load_64 _|Pbigstring_set_16 _
             |Pbigstring_set_32 _|Pbigstring_set_64 _|Pbswap16 |Pbbswap _
             |Pint_as_pointer  -> E.unknown_primitive prim : J.expression)
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
      end 
    module Collect_pass :
      sig
        val count_alias_globals :
          Ident.t list -> Lambda.lambda -> Lambda_util.meta
      end =
      struct
        [@@@ocaml.text
          " This pass is used to collect meta data information,\n    like alias table, arity for identifiers and might more information,\n    for later pass to keep its information complete, we might need update its table\n "]
        let count_alias_globals export_idents (lam : Lambda.lambda) =
          (let meta: Lambda_util.meta =
             {
               alias_tbl = (Hashtbl.create 31);
               ident_tbl = (Hashtbl.create 31);
               exports = export_idents;
               required_modules = []
             } in
           let alias (k : Ident.t) (v : Ident.t) (v_kind : Lambda_util.kind)
             (let_kind : Lambda.let_kind) =
             (match v_kind with
              | NA  ->
                  (match Hashtbl.find meta.ident_tbl v with
                   | exception Not_found  -> ()
                   | ident_info -> Hashtbl.add meta.ident_tbl k ident_info)
              | ident_info -> Hashtbl.add meta.ident_tbl k ident_info);
             (match let_kind with
              | Alias  ->
                  if not @@ (List.mem k export_idents)
                  then Hashtbl.add meta.alias_tbl k v
              | Strict |StrictOpt |Variable  -> ()) in
           let annotate (k : Ident.t) (v : Lambda_util.function_arities) =
             match Hashtbl.find meta.ident_tbl k with
             | exception Not_found  ->
                 Hashtbl.add meta.ident_tbl k
                   (Function { kind = NA; arity = v })
             | Function old -> old.arity <- v
             | _ -> assert false in
           let rec count (lam : Lambda.lambda) =
             match lam with
             | Lconst cst -> ()
             | Lvar v -> ()
             | Lapply (l1,ll,_) -> (count l1; List.iter count ll)
             | Lfunction (_kind,params,l) -> count l
             | Llet (kind,k,Lprim (Pgetglobal v,[]),body) ->
                 (alias k v (Module (Global v)) kind; count body)
             | Llet (kind,k,Lvar v,l2) -> (alias k v NA kind; count l2)
             | Llet (str,v,(Lfunction (_,params,l) as u),body) ->
                 (annotate v (Lambda_util.get_arity meta u);
                  count l;
                  count body)
             | Llet (str,v,l1,l2) ->
                 (if List.mem v export_idents
                  then annotate v (Lambda_util.get_arity meta l1);
                  count l1;
                  count l2)
             | Lletrec (bindings,body) ->
                 (List.iter
                    (function
                     | x ->
                         (match x with
                          | (k,Lambda.Lvar v) -> alias k v NA Strict
                          | (k,l) ->
                              ((match l with
                                | Lfunction _ ->
                                    annotate k (Lambda_util.get_arity meta l)
                                | _ when List.mem k export_idents ->
                                    annotate k (Lambda_util.get_arity meta l)
                                | _ -> ());
                               count l))) bindings;
                  count body)
             | Lprim (_p,ll) -> List.iter count ll
             | Lswitch (l,{ sw_failaction; sw_consts; sw_blocks }) ->
                 (count l;
                  List.iter (fun (_,l)  -> count l) sw_consts;
                  List.iter (fun (_,l)  -> count l) sw_blocks;
                  (match sw_failaction with | None  -> () | Some x -> count x))
             | Lstringswitch (l,sw,d) ->
                 (count l;
                  List.iter (fun (_,l)  -> count l) sw;
                  (match d with | Some d -> count d | None  -> ()))
             | Lstaticraise (i,ls) -> List.iter count ls
             | Lstaticcatch (l1,(i,_),l2) -> (count l1; count l2)
             | Ltrywith (l1,v,l2) -> (count l1; count l2)
             | Lifthenelse (l1,l2,l3) -> (count l1; count l2; count l3)
             | Lsequence (l1,l2) -> (count l1; count l2)
             | Lwhile (l1,l2) -> (count l1; count l2)
             | Lfor (_,l1,l2,dir,l3) -> (count l1; count l2; count l3)
             | Lassign (v,l) -> count l
             | Lsend (_,m,o,ll,_) -> List.iter count (m :: o :: ll)
             | Levent (l,_evnt) -> count l
             | Lifused (v,l) -> count l in
           count lam; meta : Lambda_util.meta)[@@ocaml.doc
                                                " here alias inference is not for substitution, it is for analyze which module is \n    actually a global module or an exception, so it can be relaxed a bit\n    (without relying on strict analysis)\n "]
      end 
    module Alpha_pass :
      sig
        val alpha_conversion :
          Lambda_util.meta -> Lambda.lambda -> Lambda.lambda
      end =
      struct
        let alpha_conversion (meta : Lambda_util.meta) (lam : Lambda.lambda)
          =
          (let rec simpl (lam : Lambda.lambda) =
             match lam with
             | Lconst _ -> lam
             | Lvar _ -> lam
             | Llet (str,v,l1,l2) -> Llet (str, v, (simpl l1), (simpl l2))
             | Lletrec (bindings,body) ->
                 let bindings =
                   List.map (fun (k,l)  -> (k, (simpl l))) bindings in
                 Lletrec (bindings, (simpl body))
             | Lprim (prim,ll) -> Lprim (prim, (List.map simpl ll))
             | Lapply (l1,ll,info) ->
                 (match Lambda_util.get_arity meta l1 with
                  | NA  -> Lapply ((simpl l1), (List.map simpl ll), info)
                  | Approximate (b,args,tail) ->
                      let len = List.length ll in
                      let rec take args =
                        match args with
                        | x::xs ->
                            if x = len
                            then
                              Lambda.Lapply
                                ((simpl l1), (List.map simpl ll),
                                  { info with apply_status = Full })
                            else
                              if x > len
                              then
                                (let extra_args =
                                   Jlist.init (x - len)
                                     (fun _  -> Ident.create "param") in
                                 Lfunction
                                   (Curried, extra_args,
                                     (Lapply
                                        ((simpl l1),
                                          ((List.map simpl ll) @
                                             (List.map
                                                (fun x  -> Lambda.Lvar x)
                                                extra_args)),
                                          { info with apply_status = Full }))))
                              else
                                (let (first,rest) = Jlist.take x ll in
                                 Lapply
                                   ((Lapply
                                       ((simpl l1), (List.map simpl first),
                                         { info with apply_status = Full })),
                                     (List.map simpl rest), info))
                        | _ -> Lapply ((simpl l1), (List.map simpl ll), info) in
                      take args)
             | Lfunction (kind,params,l) ->
                 Lfunction (kind, params, (simpl l))
             | Lswitch
                 (l,{ sw_failaction; sw_consts; sw_blocks; sw_numblocks;
                      sw_numconsts })
                 ->
                 Lswitch
                   ((simpl l),
                     {
                       sw_consts =
                         (List.map (fun (v,l)  -> (v, (simpl l))) sw_consts);
                       sw_blocks =
                         (List.map (fun (v,l)  -> (v, (simpl l))) sw_blocks);
                       sw_numconsts;
                       sw_numblocks;
                       sw_failaction =
                         ((match sw_failaction with
                           | None  -> None
                           | Some x -> Some (simpl x)))
                     })
             | Lstringswitch (l,sw,d) ->
                 Lstringswitch
                   ((simpl l), (List.map (fun (i,l)  -> (i, (simpl l))) sw),
                     ((match d with
                       | Some d -> Some (simpl d)
                       | None  -> None)))
             | Lstaticraise (i,ls) -> Lstaticraise (i, (List.map simpl ls))
             | Lstaticcatch (l1,(i,x),l2) ->
                 Lstaticcatch ((simpl l1), (i, x), (simpl l2))
             | Ltrywith (l1,v,l2) -> Ltrywith ((simpl l1), v, (simpl l2))
             | Lifthenelse (l1,l2,l3) ->
                 Lifthenelse ((simpl l1), (simpl l2), (simpl l3))
             | Lsequence (l1,l2) -> Lsequence ((simpl l1), (simpl l2))
             | Lwhile (l1,l2) -> Lwhile ((simpl l1), (simpl l2))
             | Lfor (flag,l1,l2,dir,l3) ->
                 Lfor (flag, (simpl l1), (simpl l2), dir, (simpl l3))
             | Lassign (v,l) -> Lassign (v, (simpl l))
             | Lsend (u,m,o,ll,v) ->
                 Lsend (u, (simpl m), (simpl o), (List.map simpl ll), v)
             | Levent (l,event) -> Levent ((simpl l), event)
             | Lifused (v,l) -> Lifused (v, (simpl l)) in
           simpl lam : Lambda.lambda)
      end 
    module Compile_lambda :
      sig
        [@@@ocaml.text " Main entry "]
        val compile :
          ?filename:string ->
            Env.t -> Types.signature -> Lambda.lambda -> Gen_util.output
        val lambda_as_module :
          bool -> Env.t -> Types.signature -> string -> Lambda.lambda -> unit
      end =
      struct
        open Gen_util.Ops
        module E = J_helper.Exp
        module S = J_helper.Stmt
        exception Not_a_module
        let add_jmps (ls : (Compile_defs.jbl_label* Compile_defs.value) list)
          m =
          List.fold_left
            (fun acc  -> fun (l,s)  -> Compile_defs.HandlerMap.add l s acc) m
            ls
        let rec flat_catches acc (x : Lambda.lambda) =
          (match x with
           | Lstaticcatch (l,(code,bindings),handler) ->
               flat_catches ((code, handler, bindings) :: acc) l
           | _ -> (acc, x) : ((int* Lambda.lambda* Ident.t list) list*
                               Lambda.lambda))[@@ocaml.doc
                                                " assume outer is [Lstaticcatch] "]
        [@@@ocaml.text
          " TODO:\n    for expression generation, \n    name, should_return  is not needed,\n    only jmp_table and env needed\n "]
        let rec compile_lambda
          (({ st; should_return; jmp_table; env } as cxt) : Compile_defs.cxt)
          (lam : Lambda.lambda) =
          (match lam with
           | Lvar id ->
               (Gen_util.handle_name_tail st should_return lam) @@ (E.var id)
           | Lconst c ->
               (Gen_util.handle_name_tail st should_return lam) @@
                 (Compile_primitive.compile_const c)
           | Lfunction (kind,params,body) ->
               (Gen_util.handle_name_tail st should_return lam) @@
                 (E.efun params
                    (Gen_util.block_of_output @@
                       (compile_lambda
                          {
                            cxt with
                            st = EffectCall;
                            should_return = true;
                            jmp_table = Compile_defs.empty_handler_map
                          } body)))
           | Lprim (Pfield n,(Lprim (Pgetglobal id,[]))::[]) ->
               (Gen_util.handle_name_tail st should_return lam) @@
                 (Compile_of_env.get_exp (GetGlobal (id, n, (cxt.env))))
           | Lprim (Praise _raise_kind,e::[]) ->
               (match compile_lambda
                        { cxt with should_return = false; st = NeedValue } e
                with
                | { block = b; value = Some v } ->
                    Gen_util.make_output (b @ [S.throw v])
                      ~value:(E.undefined ()) ~finished:true
                | { value = None ;_} -> assert false)
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
                         | { block = a; value = Some b } -> (a, b)
                         | _ -> assert false) args_lambda) in
               let args_code = List.concat args_block in
               let exp =
                 Compile_primitive.compile_primitive cxt prim args_expr in
               Gen_util.handle_block_return st should_return lam args_code
                 exp
           | Llet (kind,id,arg,body) ->
               (compile_lambda
                  { cxt with st = (Declare id); should_return = false } arg)
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
                  { cxt with st = EffectCall; should_return = false } l1)
                 ++ (compile_lambda cxt l2)
           | Lifthenelse (p,t_br,f_br) ->
               (match compile_lambda
                        { cxt with st = NeedValue; should_return = false } p
                with
                | { block = b; value = Some e } ->
                    (match (st, should_return,
                             (compile_lambda { cxt with st = NeedValue } t_br),
                             (compile_lambda { cxt with st = NeedValue } f_br))
                     with
                     | (NeedValue
                        ,_,{ block = []; value = Some out1 },{ block = [];
                                                               value = Some
                                                                 out2
                                                               })
                         ->
                         Gen_util.make_output b ~value:(E.econd e out1 out2)
                     | (NeedValue ,_,_,_) ->
                         let id = Gen_util.gen () in
                         (match ((compile_lambda
                                    { cxt with st = (Assign id) } t_br),
                                  (compile_lambda
                                     { cxt with st = (Assign id) } f_br))
                          with
                          | (out1,out2) ->
                              Gen_util.make_output
                                (((S.variable id) :: b) @
                                   [S.if_ e
                                      (S.block
                                         (Gen_util.block_of_output out1))
                                      ~else_:(S.block
                                                (Gen_util.block_of_output
                                                   out2))]) ~value:(E.var id))
                     | (Declare
                        id,_,{ block = []; value = Some out1 },{ block = [];
                                                                 value = Some
                                                                   out2
                                                                 })
                         ->
                         Gen_util.make_output
                           [S.variable ~loc_exp:((E.econd e out1 out2), N) id]
                     | (Declare id,_,_,_) ->
                         Gen_util.make_output
                           (((S.variable id) :: b) @
                              [S.if_ e
                                 (S.block
                                    (Gen_util.block_of_output @@
                                       (compile_lambda
                                          { cxt with st = (Assign id) } t_br)))
                                 ~else_:(S.block
                                           (Gen_util.block_of_output @@
                                              (compile_lambda
                                                 { cxt with st = (Assign id)
                                                 } f_br)))])
                     | (Assign
                        id,_,{ block = []; value = Some out1 },{ block = [];
                                                                 value = Some
                                                                   out2
                                                                 })
                         ->
                         Gen_util.make_output
                           [S.assign id (E.econd e out1 out2)]
                     | (EffectCall ,true
                        ,{ block = []; value = Some out1 },{ block = [];
                                                             value = Some
                                                               out2
                                                             })
                         ->
                         Gen_util.make_output
                           [S.return (Some (E.econd e out1 out2))]
                           ~finished:true
                     | (EffectCall ,false
                        ,{ block = []; value = Some out1 },{ block = [];
                                                             value = Some
                                                               out2
                                                             })
                         ->
                         if Gen_util.is_js_pure out2
                         then
                           Gen_util.make_output
                             [S.if_ e (S.block [S.exp out1])]
                         else
                           Gen_util.make_output [S.exp (E.econd e out1 out2)]
                     | (EffectCall ,false
                        ,{ block = []; value = Some out1 },_) ->
                         if Gen_util.is_js_pure out1
                         then
                           Gen_util.make_output
                             (b @
                                [S.if_ (E.not e)
                                   (S.block
                                      (Gen_util.block_of_output @@
                                         (compile_lambda cxt f_br)))])
                         else
                           Gen_util.make_output
                             (b @
                                [S.if_ e
                                   (S.block
                                      (Gen_util.block_of_output @@
                                         (compile_lambda cxt t_br)))
                                   ~else_:(S.block
                                             (Gen_util.block_of_output @@
                                                (compile_lambda cxt f_br)))])
                     | (EffectCall ,false
                        ,_,{ block = []; value = Some out2 }) ->
                         let else_ =
                           if Gen_util.is_js_pure out2
                           then None
                           else
                             Some
                               (S.block @@
                                  (Gen_util.block_of_output @@
                                     (compile_lambda cxt f_br))) in
                         Gen_util.make_output
                           (b @
                              [S.if_ e
                                 (S.block
                                    (Gen_util.block_of_output @@
                                       (compile_lambda cxt t_br))) ?else_])
                     | ((Assign _|EffectCall ),_,_,_) ->
                         Gen_util.make_output
                           (b @
                              [S.if_ e
                                 (S.block
                                    (Gen_util.block_of_output @@
                                       (compile_lambda cxt t_br)))
                                 ~else_:(S.block
                                           (Gen_util.block_of_output @@
                                              (compile_lambda cxt f_br)))]))
                | _ -> assert false)
           | Lstringswitch (l,cases,default) ->
               (match compile_lambda
                        { cxt with should_return = false; st = NeedValue } l
                with
                | { block = v; value = Some e } ->
                    let aux (cxt : Compile_defs.cxt) =
                      v @
                        [S.switch e
                           (List.map
                              (fun (x,lam)  ->
                                 ((E.str x),
                                   (Gen_util.break_of_output @@
                                      (compile_lambda cxt lam)))) cases)
                           ?default:(match default with
                                     | None  -> None
                                     | Some lam ->
                                         Some
                                           (Gen_util.block_of_output @@
                                              (compile_lambda cxt lam)))] in
                    (match st with
                     | NeedValue  ->
                         let v = Gen_util.gen () in
                         Gen_util.make_output
                           (aux { cxt with st = (Declare v) })
                           ~value:(E.var v)
                     | _ -> Gen_util.make_output (aux cxt))
                | _ -> assert false)
           | Lswitch
               (lam,{ sw_numconsts; sw_consts; sw_numblocks; sw_blocks;
                      sw_failaction = default })
               ->
               let aux (cxt : Compile_defs.cxt) (v : J.expression)
                 (table : (int* Lambda.lambda) list) default =
                 [S.switch v
                    (List.map
                       (fun (x,lam)  ->
                          ((E.int x),
                            (Gen_util.break_of_output @@
                               (compile_lambda cxt lam)))) table)
                    ?default:(match default with
                              | None  -> None
                              | Some lam ->
                                  Some
                                    (Gen_util.block_of_output @@
                                       (compile_lambda cxt lam)))] in
               let compile_whole (({ st;_} as cxt) : Compile_defs.cxt) =
                 match (sw_numconsts, sw_numblocks,
                         (compile_lambda
                            { cxt with should_return = false; st = NeedValue
                            } lam))
                 with
                 | (0,_,{ block; value = Some e }) ->
                     aux cxt (E.tag e) sw_blocks default
                 | (_,0,{ block; value = Some e }) ->
                     aux cxt e sw_consts default
                 | (_,_,{ block; value = Some e }) ->
                     let dispatch e =
                       [S.if_ (E.eqeqeq (E.typeof e) (E.str "number"))
                          (S.block (aux cxt e sw_consts default))
                          ~else_:(S.block
                                    (aux cxt (E.tag e) sw_blocks default : 
                                    J.block))] in
                     (match e.expression_desc with
                      | J.EVar _ -> dispatch e
                      | _ ->
                          let v = Gen_util.gen () in
                          (S.variable v ~loc_exp:(e, N)) ::
                            (dispatch (E.var v)))
                 | (_,_,{ value = None ;_}) -> assert false in
               (match st with
                | NeedValue  ->
                    let v = Gen_util.gen () in
                    Gen_util.make_output ((S.variable v) ::
                      (compile_whole { cxt with st = (Assign v) }))
                      ~value:(E.var v)
                | Declare id ->
                    Gen_util.make_output ((S.variable id) ::
                      (compile_whole { cxt with st = (Assign id) }))
                | EffectCall |Assign _ ->
                    Gen_util.make_output (compile_whole cxt))
           | Lstaticraise (i,largs) ->
               (match Compile_defs.HandlerMap.find i cxt.jmp_table with
                | { exit_id; args } ->
                    let args_code =
                      Gen_util.concat @@
                        (List.map2
                           (fun (x : Lambda.lambda)  ->
                              fun (arg : Ident.t)  ->
                                match x with
                                | Lvar id ->
                                    Gen_util.make_output
                                      [S.assign arg (E.var id)]
                                | _ ->
                                    compile_lambda
                                      {
                                        cxt with
                                        st = (Assign arg);
                                        should_return = false
                                      } x) largs (args : Ident.t list)) in
                    args_code ++
                      (Gen_util.make_output [S.assign exit_id (E.int i)]
                         ~value:(E.undefined ()))
                | exception Not_found  ->
                    Gen_util.make_output
                      [S.unknown_lambda ~comment:"error" lam])
           | Lstaticcatch _ ->
               let (code_table,body) = flat_catches [] lam in
               let exit_id = Gen_util.gen ~name:"exit" () in
               let code_jmps =
                 List.map
                   (fun (i,_,bindings)  ->
                      (i,
                        ({ exit_id; args = bindings } : Compile_defs.value)))
                   code_table in
               let bindings =
                 List.concat @@
                   (List.map (fun (_,_,bindings)  -> bindings) code_table) in
               let aux (cxt : Compile_defs.cxt) =
                 [S.switch (E.var exit_id)
                    (List.map
                       (fun (i,handler,_)  ->
                          ((E.int i),
                            (Gen_util.break_of_output @@
                               (compile_lambda cxt handler)))) code_table)] in
               let jmp_table = add_jmps code_jmps jmp_table in
               let declares = (S.variable exit_id) ::
                 (List.map (fun x  -> S.variable x) bindings) in
               (match st with
                | NeedValue  ->
                    let v = Gen_util.gen () in
                    let lbody = compile_lambda { cxt with jmp_table } body in
                    ((Gen_util.make_output declares) ++ lbody) ++
                      (Gen_util.make_output ((S.variable v) ::
                         (aux { cxt with st = (Assign v); jmp_table }))
                         ~value:(E.var v))
                | Declare id ->
                    let declares = (S.variable id) :: declares in
                    let lbody =
                      compile_lambda { cxt with jmp_table; st = (Assign id) }
                        body in
                    ((Gen_util.make_output declares) ++ lbody) ++
                      (Gen_util.make_output
                         (aux { cxt with jmp_table; st = (Assign id) }))
                | EffectCall |Assign _ ->
                    let lbody = compile_lambda { cxt with jmp_table } body in
                    ((Gen_util.make_output declares) ++ lbody) ++
                      (Gen_util.make_output (aux { cxt with jmp_table })))
           | Lwhile (p,body) ->
               (match compile_lambda
                        { cxt with st = NeedValue; should_return = false } p
                with
                | { block; value = Some e } ->
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
                         Gen_util.make_output (block @ [S.declare_unit x])
                     | (Assign x,_) ->
                         Gen_util.make_output (block @ [S.assign_unit x])
                     | (EffectCall ,true ) ->
                         Gen_util.make_output (block @ [S.return_unit ()])
                           ~finished:true
                     | (EffectCall ,_) -> Gen_util.make_output block
                     | (NeedValue ,_) ->
                         Gen_util.make_output block ~value:(E.unit ()))
                | _ -> assert false)
           | Lfor (id,start,finish,direction,body) ->
               let block =
                 match ((compile_lambda
                           { cxt with st = NeedValue; should_return = false }
                           start),
                         (compile_lambda
                            { cxt with st = NeedValue; should_return = false
                            } finish))
                 with
                 | ({ block = b1; value = Some e1 },{ block = b2;
                                                      value = Some e2 })
                     ->
                     b1 @
                       (b2 @
                          [(let (cmp,inc) =
                              match direction with
                              | Upto  -> (J.Le, J.IncrA)
                              | Downto  -> (J.Ge, J.DecrA) in
                            S.for_ (Right [(id, (Some (e1, J.N)))])
                              ~pred:(E.bin cmp (E.var id) e2)
                              ~step:(E.un inc (E.var id))
                              (S.block
                                 (Gen_util.block_of_output @@
                                    (compile_lambda
                                       {
                                         cxt with
                                         should_return = false;
                                         st = EffectCall
                                       } body))))])
                 | _ -> assert false in
               (match (st, should_return) with
                | (EffectCall ,false ) -> Gen_util.make_output block
                | (EffectCall ,true ) ->
                    Gen_util.make_output (block @ [S.return_unit ()])
                      ~finished:true
                | ((Declare _|Assign _),true ) ->
                    Gen_util.make_output [S.unknown_lambda lam]
                | (Declare x,false ) ->
                    Gen_util.make_output (block @ [S.declare_unit x])
                | (Assign x,false ) ->
                    Gen_util.make_output (block @ [S.assign_unit x])
                | (NeedValue ,_) ->
                    Gen_util.make_output block ~value:(E.unit ()))
           | Lassign (id,lambda) ->
               let block =
                 match compile_lambda
                         { cxt with st = NeedValue; should_return = false }
                         lambda
                 with
                 | { block = b; value = Some v } -> b @ [S.assign id v]
                 | _ -> assert false in
               (match (st, should_return) with
                | (EffectCall ,false ) -> Gen_util.make_output block
                | (EffectCall ,true ) ->
                    Gen_util.make_output (block @ [S.return_unit ()])
                      ~finished:true
                | ((Declare _|Assign _),true ) ->
                    Gen_util.make_output [S.unknown_lambda lam]
                | (Declare x,false ) ->
                    Gen_util.make_output (block @ [S.declare_unit x])
                | (Assign x,false ) ->
                    Gen_util.make_output (block @ [S.assign_unit x])
                | (NeedValue ,_) ->
                    Gen_util.make_output block ~value:(E.unit ()))
           | Ltrywith (lam,id,catch) ->
               let aux st =
                 [S.try_
                    (Gen_util.block_of_output
                       (compile_lambda { cxt with st } lam))
                    ~with_:(id,
                             (Gen_util.block_of_output @@
                                (compile_lambda { cxt with st } catch)))] in
               (match st with
                | NeedValue  ->
                    let v = Gen_util.gen () in
                    Gen_util.make_output ((S.variable v) :: (aux (Assign v)))
                      ~value:(E.var v)
                | Declare id ->
                    Gen_util.make_output ((S.variable id) ::
                      (aux (Assign id)))
                | Assign _|EffectCall  -> Gen_util.make_output (aux st))
           | Lapply (fn,args_lambda,_info) ->
               (match compile_lambda
                        { cxt with st = NeedValue; should_return = false } fn
                with
                | { value = None ;_} -> assert false
                | { block = fn_code; value = Some fn } ->
                    let (args_code,args) =
                      List.split @@
                        (List.map
                           (fun (x : Lambda.lambda)  ->
                              match x with
                              | Lprim (Pgetglobal i,[]) ->
                                  ([],
                                    (Compile_of_env.get_exp
                                       (QueryGlobal (i, env, true))))
                              | _ ->
                                  (match compile_lambda
                                           {
                                             cxt with
                                             st = NeedValue;
                                             should_return = false
                                           } x
                                   with
                                   | { block = a; value = Some b } -> (a, b)
                                   | _ -> assert false)) args_lambda) in
                    let args_code = List.concat args_code in
                    let exp = E.call fn args in
                    Gen_util.handle_block_return st should_return lam
                      (fn_code @ args_code) exp)
           | Lsend (meth_kind,lam1,lam2,lams,loc) ->
               (match meth_kind with
                | Public |Cached |Self  ->
                    Gen_util.make_output [S.unknown_lambda lam]
                      ~value:(E.unit ()))
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
                   jmp_table = Compile_defs.empty_handler_map;
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
                            jmp_table = Compile_defs.empty_handler_map;
                            env
                          } lam)))
                 |> Gen_util.concat
           | Nop lam ->
               compile_lambda
                 {
                   st = EffectCall;
                   should_return = false;
                   jmp_table = Compile_defs.empty_handler_map;
                   env
                 } lam : Gen_util.output)
        let rec flat (acc : group list) (lam : Lambda.lambda) =
          (match lam with
           | Llet (str,id,arg,body) ->
               flat ((Single (str, id, arg)) :: acc) body
           | Lletrec (bind_args,body) ->
               flat
                 ((Recursive
                     (List.map (fun (id,arg)  -> (id, arg)) bind_args)) ::
                 acc) body
           | Lsequence (l,r) -> flat (flat acc l) r
           | x -> (Nop x) :: acc : group list)
        let compile ?filename  env sigs lam =
          (let exports = Translmod.get_export_identifiers () in
           let () = Translmod.reset () in
           let () = Compile_of_env.reset () in
           let meta = Collect_pass.count_alias_globals exports lam in
           let lam =
             (Alpha_pass.alpha_conversion meta) @@
               ((Alias_pass.simplify_alias meta) @@
                  ((Lets_pass.simplify_lets meta) @@
                     (Exits_pass.simplify_exits lam))) in
           let () = ignore () in
           let () =
             match filename with
             | Some filename ->
                 Printlambda.seriaize env
                   ((Filename.chop_extension filename) ^ ".lam") lam
             | None  -> () in
           match (lam : Lambda.lambda) with
           | Lprim (Psetglobal id,biglambda::[]) ->
               (match flat [] biglambda with
                | (Nop (Lprim (Pmakeblock (_,_,_),lambda_exports)))::rest ->
                    let defs =
                      ((rest |> List.rev) |>
                         (List.map (fun group  -> compile_group env group)))
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
                                          Compile_defs.empty_handler_map;
                                        env
                                      } lam
                              with
                              | { block; value = Some e } -> (block, e)
                              | { value = None ;_} -> assert false)
                           lambda_exports) in
                    let js: Gen_util.output =
                      ((((Gen_util.make_output
                            [S.comment
                               "Generated CODE, PLEASE EDIT WITH CARE "])
                           ++
                           (Gen_util.make_output
                              (Compile_of_env.required_modules
                                 meta.required_modules)))
                          ++ (Gen_util.make_output (List.concat statements)))
                         ++ defs)
                        ++
                        (Gen_util.make_output
                           [Gen_util.exports exports expressions]) in
                    js
                | _ -> raise Not_a_module)
           | _ -> raise Not_a_module : Gen_util.output)[@@ocaml.doc
                                                         " Actually simplify_lets is kind of global optimization since it requires you to know whether \n    it's used or not \n"]
        let lambda_as_module raw env (sigs : Types.signature) filename
          (lam : Lambda.lambda) =
          let out = open_out ((Filename.chop_extension filename) ^ ".js") in
          let js = compile ~filename env sigs lam in
          let () = Gen_util.dump_output js out in close_out out
        let () = Printlambda.serialize_raw_js := (lambda_as_module true)
      end 
    module Jstring :
      sig
        val split_on_chars : string -> on:char list -> string list[@@ocaml.doc
                                                                    "\n   {[ \n   split_on_chars \"gshogh hgsohg ghso    ghos\" ~on:[' '];; \n   ]}\n   {[\n   [\"gshogh\"; \"hgsohg\"; \"ghso\"; \"\"; \"\"; \"\"; \"ghos\"]\n   ]}\n"]
      end =
      struct
        let rec char_list_mem l (c : char) =
          match l with
          | [] -> false
          | hd::tl -> (hd = c) || (char_list_mem tl c)
        let split_gen str ~on  =
          let is_delim =
            match on with
            | `char c' -> (fun c  -> c = c')
            | `char_list l -> (fun c  -> char_list_mem l c) in
          let len = String.length str in
          let rec loop acc last_pos pos =
            if pos = (-1)
            then (StringLabels.sub str ~pos:0 ~len:last_pos) :: acc
            else
              if is_delim (str.[pos])
              then
                (let pos1 = pos + 1 in
                 let sub_str =
                   StringLabels.sub str ~pos:pos1 ~len:(last_pos - pos1) in
                 loop (sub_str :: acc) pos (pos - 1))
              else loop acc last_pos (pos - 1) in
          loop [] len (len - 1)
        let split str ~on  = split_gen str ~on:(`char on)
        let split_on_chars str ~on:chars  =
          split_gen str ~on:(`char_list chars)
      end 
  end
