(***********************************************************************)
(*                                                                     *)
(*                                OCaml                                *)
(*                                                                     *)
(*            Xavier Leroy, projet Cristal, INRIA Rocquencourt         *)
(*                                                                     *)
(*  Copyright 2002 Institut National de Recherche en Informatique et   *)
(*  en Automatique.  All rights reserved.  This file is distributed    *)
(*  under the terms of the Q Public License version 1.0.               *)
(*                                                                     *)
(***********************************************************************)

(* The batch compiler *)

open Misc
open Format
open Typedtree
open Compenv

(* Compile a .mli file *)

(* Keep in sync with the copy in optcompile.ml *)

let tool_name = "ocamlc"

let interface ppf sourcefile outputprefix =
  Compmisc.init_path false;
  let modulename = module_of_filename ppf sourcefile outputprefix in
  Env.set_unit_name modulename;
  let initial_env = Compmisc.initial_env () in
  let ast = Pparse.parse_interface ~tool_name ppf sourcefile in
  if !Clflags.dump_parsetree then fprintf ppf "%a@." Printast.interface ast;
  if !Clflags.dump_source then fprintf ppf "%a@." Pprintast.signature ast;
  let tsg = Typemod.type_interface initial_env ast in
  if !Clflags.dump_typedtree then fprintf ppf "%a@." Printtyped.interface tsg;
  let sg = tsg.sig_type in
  if !Clflags.print_types then
    Printtyp.wrap_printing_env initial_env (fun () ->
        fprintf std_formatter "%a@."
          Printtyp.signature (Typemod.simplify_signature sg));
  ignore (Includemod.signatures initial_env sg sg);
  Typecore.force_delayed_checks ();
  Warnings.check_fatal ();
  if not !Clflags.print_types then begin
    let sg = Env.save_signature sg modulename (outputprefix ^ ".cmi") in
    Typemod.save_signature modulename tsg outputprefix sourcefile
      initial_env sg ;
  end

(* Compile a .ml file *)

let print_if ppf flag printer arg =
  if !flag then fprintf ppf "%a@." printer arg;
  arg

let (++) x f = f x

let serialize_raw_lambda = 
  try ignore @@ Sys.getenv "OCAML_RAW_LAMBDA" ; true with Not_found -> false
let serialize_lambda = 
  try ignore @@ Sys.getenv "OCAML_LAMBDA"; true with Not_found -> true

let serialize_raw_js = 
  try ignore @@ Sys.getenv "OCAML_RAW_JS"; true with Not_found -> false

let serialize_js = 
  try ignore @@ Sys.getenv "OCAML_JS"; true with Not_found -> false

let implementation ppf sourcefile outputprefix =
  Compmisc.init_path false;
  let modulename = module_of_filename ppf sourcefile outputprefix in
  Env.set_unit_name modulename;
  let env = Compmisc.initial_env() in
  let finalenv = ref Env.empty in
  let current_signature = ref [] in
  try
    let (typedtree, coercion) =
      Pparse.parse_implementation ~tool_name ppf sourcefile
      ++ print_if ppf Clflags.dump_parsetree Printast.implementation
      ++ print_if ppf Clflags.dump_source Pprintast.structure
      ++ (fun x -> let (a,b,c,signature) = Typemod.type_implementation_more sourcefile outputprefix modulename env x  in
       begin finalenv:=c; current_signature:= signature; a,b end)
      ++ print_if ppf Clflags.dump_typedtree
        Printtyped.implementation_with_coercion
    in
    if !Clflags.print_types then begin
      Warnings.check_fatal ();
      Stypes.dump (Some (outputprefix ^ ".annot"))
    end else begin
      let bytecode =
        (typedtree, coercion)
        ++ Translmod.transl_implementation modulename
        ++ print_if ppf Clflags.dump_rawlambda Printlambda.lambda
         (* (Printlambda.env_lambda !finalenv) *)
        ++ (fun lambda -> 
          (if serialize_raw_lambda then 
            Printlambda.seriaize !finalenv (sourcefile ^ ".rawlambda") lambda;);
          (if serialize_raw_js then 
            !Printlambda.serialize_raw_js 
              !finalenv !current_signature 
              sourcefile  lambda 
          );
            lambda
           )
        ++ Simplif.simplify_lambda
        ++ (fun lambda -> 
          (if serialize_lambda then 
            Printlambda.seriaize !finalenv (sourcefile ^ ".lambda") lambda;);
            
          (if serialize_js then 
            !Printlambda.serialize_js !finalenv sourcefile  lambda 
          );
            lambda;
           )

        ++ print_if ppf Clflags.dump_lambda (Printlambda.lambda)(* (Printlambda.env_lambda !finalenv) *)
        ++ Bytegen.compile_implementation modulename
        ++ print_if ppf Clflags.dump_instr Printinstr.instrlist
      in
      let objfile = outputprefix ^ ".cmo" in
      let oc = open_out_bin objfile in
      try
        bytecode
        ++ Emitcode.to_file oc modulename objfile;
        Warnings.check_fatal ();
        close_out oc;
        Stypes.dump (Some (outputprefix ^ ".annot"))
      with x ->
        close_out oc;
        remove_file objfile;
        raise x
    end
  with x ->
    Stypes.dump (Some (outputprefix ^ ".annot"));
    raise x

let c_file name =
  Location.input_name := name;
  if Ccomp.compile_file name <> 0 then exit 2
