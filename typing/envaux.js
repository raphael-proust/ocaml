// Generated CODE, PLEASE EDIT WITH CARE 

var Printtyp=require("./printtyp.js");
var Env=require("./env.js");
var Format=require("./format.js");
var Misc=require("./misc.js");
var Subst=require("./subst.js");
var Hashtbl=require("./hashtbl.js");
var Ident=require("./ident.js");
var CamlPrimitive=require("./camlPrimitive.js");


var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Envaux.Error",0]);

var env_cache=Hashtbl["create"](/* None */0,59);

var
 reset_cache=
  function(param)
   {Hashtbl["clear"](env_cache);return Env["reset_cache"](/* () */0);};

var
 extract_sig=
  function(env,mty)
   {var match=Env["scrape_alias"](env,mty);
    
    switch(match[0])
     {case 1:return match[1];
      default:return Misc["fatal_error"]("Envaux.extract_sig");}
    };

var
 env_from_summary=
  function(sum,subst)
   {try
     {return Hashtbl["find"](env_cache,/* tuple */[0,sum,subst]);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {if(typeof sum==="number")
         {switch(sum){case 0:var env=Env["empty"];}}
        else
         {switch(sum[0])
           {case 0:
             var
              env=
               Env["add_value"]
                (/* None */0,
                 sum[2],
                 Subst["value_description"](subst,sum[3]),
                 env_from_summary(sum[1],subst));
             
            case 1:
             var
              env=
               Env["add_type"]
                (/* false */0,
                 sum[2],
                 Subst["type_declaration"](subst,sum[3]),
                 env_from_summary(sum[1],subst));
             
            case 2:
             var
              env=
               Env["add_extension"]
                (/* false */0,
                 sum[2],
                 Subst["extension_constructor"](subst,sum[3]),
                 env_from_summary(sum[1],subst));
             
            case 3:
             var
              env=
               Env["add_module_declaration"]
                (/* None */0,
                 sum[2],
                 Subst["module_declaration"](subst,sum[3]),
                 env_from_summary(sum[1],subst));
             
            case 4:
             var
              env=
               Env["add_modtype"]
                (sum[2],
                 Subst["modtype_declaration"](subst,sum[3]),
                 env_from_summary(sum[1],subst));
             
            case 5:
             var
              env=
               Env["add_class"]
                (sum[2],
                 Subst["class_declaration"](subst,sum[3]),
                 env_from_summary(sum[1],subst));
             
            case 6:
             var
              env=
               Env["add_cltype"]
                (sum[2],
                 Subst["cltype_declaration"](subst,sum[3]),
                 env_from_summary(sum[1],subst));
             
            case 7:
             var env$1=env_from_summary(sum[1],subst);
             
             var path$prime=Subst["module_path"](subst,sum[2]);
             
             try
              {var md=Env["find_module"](path$prime,env$1);}
             catch(exn$1)
              {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                {throw [0,$$Error,/* Module_not_found */[0,path$prime]];}
               else
                {throw exn$1;}
               }
             
             var
              env=
               Env["open_signature"]
                (/* None */0,
                 /* None */0,
                 /* Override */0,
                 path$prime,
                 extract_sig(env$1,md[1]),
                 env$1);
             
            case 8:
             var match=sum[1];
             
             var exit;
             
             if(typeof match==="number")
              {switch(match){}}
             else
              {switch(match[0])
                {case 3:
                  var id=match[2];
                  
                  if(Ident["same"](id,sum[2]))
                   {var
                     env=
                      Env["add_module_declaration"]
                       ([/* Some */0,/* true */1],
                        id,
                        Subst["module_declaration"](subst,match[3]),
                        env_from_summary(match[1],subst));
                    }
                  else
                   {exit=7;}
                  
                 default:exit=7;}}
             
             switch(exit)
              {case 7:
                throw [0,
                       CamlPrimitive["caml_global_data"]["Assert_failure"],
                       [0,"typing/envaux.ml",81,29]];
                
               }
             
            }}
        
        Hashtbl["add"](env_cache,/* tuple */[0,sum,subst],env);
        return env;
        }
      else
       {throw exn;}
      }
    };

var
 env_of_only_summary=
  function(env){return Env["env_of_only_summary"](env_from_summary,env);};

var
 report_error=
  function(ppf,param)
   {return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* Formatting_gen */18,
               [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
               [/* String_literal */11,
                "Cannot find module ",
                [/* Alpha */15,
                 [/* Formatting_lit */17,
                  /* Close_box */0,
                  [/* Char_literal */12,
                   46,
                   [/* Formatting_lit */17,
                    /* Flush_newline */4,
                    /* End_of_format */0]]]]]],
              "@[Cannot find module %a@].@."],
             Printtyp["path"],
             param[1]);
    };

module["exports"]=
{"env_from_summary":env_from_summary,
 "reset_cache":reset_cache,
 "env_of_only_summary":env_of_only_summary,
 "Error":$$Error,
 "report_error":report_error};

