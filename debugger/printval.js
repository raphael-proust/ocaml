// Generated CODE, PLEASE EDIT WITH CARE 

var Printtyp=require("./printtyp.js");
var Pervasives=require("./pervasives.js");
var Format=require("./format.js");
var Oprint=require("./oprint.js");
var Genprintval=require("./genprintval.js");
var Hashtbl=require("./hashtbl.js");
var Symtable=require("./symtable.js");
var Debugcom=require("./debugcom.js");
var CamlPrimitive=require("./camlPrimitive.js");


var named_values=Hashtbl["create"](/* None */0,29);

var next_name=[0,1];

var
 reset_named_values=
  function(param){Hashtbl["clear"](named_values);return next_name[1]=1,0};

var
 name_value=
  function(v,ty)
   {var name=next_name[1];
    
    next_name[0]++;
    Hashtbl["add"](named_values,name,/* tuple */[0,v,ty]);
    return name};

var
 find_named_value=
  function(name){return Hashtbl["find"](named_values,name)};

var
 check_depth=
  function(ppf,depth,obj,ty)
   {if(depth<=0)
     {var n=name_value(obj,ty);
      
      return /* Some */[0,
              /* Oval_stuff */[12,
               Pervasives["^"]("$",Pervasives["string_of_int"](n))]]}
    else
     {return /* None */0}
    };

var
 $$Error=
  CamlPrimitive["caml_set_oo_id"]([248,"Printval.EvalPath.Error",0]);

var
 eval_path=
  function(env,param)
   {switch(param[0])
     {case 0:
       try
        {return Debugcom["Remote_value"][10]
                 (Symtable["get_global_position"](param[1]))}
       catch(exn)
        {if(exn[1]===Symtable["Error"]){throw $$Error}else{throw exn}}
       break;
      case 1:
       var v=eval_path(env,param[1]);
       
       if(!Debugcom["Remote_value"][2](v))
        {throw $$Error}
       else
        {return Debugcom["Remote_value"][5](v,param[3])}
       break;
      case 2:throw $$Error
      }
    };

var same_value=Debugcom["Remote_value"][6];

var EvalPath=[0,$$Error,eval_path,same_value];

var $$let=Debugcom["Remote_value"];

var
 Printer=
  Genprintval["Make"]([0,$$let[1],$$let[2],$$let[3],$$let[4],$$let[5]])
   ([0,EvalPath[2],EvalPath[1],EvalPath[3]]);

var
 install_printer=
  function(path,ty,ppf,fn)
   {return Printer[1]
            (path,
             ty,
             function(ppf,remote_val)
              {try
                {return fn(ppf,Debugcom["Remote_value"][1](remote_val))}
               catch(exn)
                {if(exn===Debugcom["Marshalling_error"])
                  {return Format["fprintf"]
                           (ppf,
                            [/* Format */0,
                             [/* String_literal */11,
                              "<cannot fetch remote object>",
                              /* End_of_format */0],
                             "<cannot fetch remote object>"])}
                 else
                  {throw exn}
                 }
               })};

var remove_printer=Printer[4];

var max_printer_depth=[0,20];

var max_printer_steps=[0,300];

var
 print_exception=
  function(ppf,obj)
   {var t=Printer[5](obj);return Oprint["out_value"][1](ppf,t)};

var
 print_value=
  function(max_depth,env,obj,ppf,ty)
   {var
     t=
      Printer[6]
       (max_printer_steps[1],
        max_depth,
        function(param,param$1,param$2)
         {return check_depth(ppf,param,param$1,param$2)},
        env,
        obj,
        ty);
    
    return Oprint["out_value"][1](ppf,t)};

var
 print_named_value=
  function(max_depth,exp,env,obj,ppf,ty)
   {var
     print_value_name=
      function(ppf,param)
       {var exit;
        
        if(typeof param==="number")
         {switch(param){default:exit=2;}}
        else
         {switch(param[0])
           {case 0:return Printtyp["longident"](ppf,param[1]);
            case 1:
             return Format["fprintf"]
                     (ppf,
                      [/* Format */0,
                       [/* Char_literal */12,
                        36,
                        [/* Int */4,
                         /* Int_i */3,
                         /* No_padding */0,
                         /* No_precision */0,
                         /* End_of_format */0]],
                       "$%i"],
                      param[1]);
            default:exit=2;}}
        
        switch(exit)
         {case 2:
           var n=name_value(obj,ty);
           
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Char_literal */12,
                      36,
                      [/* Int */4,
                       /* Int_i */3,
                       /* No_padding */0,
                       /* No_precision */0,
                       /* End_of_format */0]],
                     "$%i"],
                    n)
          }
        };
    
    Printtyp["reset_and_mark_loops"](ty);
    return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* Formatting_gen */18,
               [/* Open_box */1,
                [/* Format */0,
                 [/* String_literal */11,"<2>",/* End_of_format */0],
                 "<2>"]],
               [/* Alpha */15,
                [/* Char_literal */12,
                 58,
                 [/* Formatting_lit */17,
                  [/* Break */0,"@ ",1,0],
                  [/* Alpha */15,
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* Char_literal */12,
                     61,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        [/* Formatting_lit */17,
                         /* Flush_newline */4,
                         /* End_of_format */0]]]]]]]]]]],
              "@[<2>%a:@ %a@ =@ %a@]@."],
             print_value_name,
             exp,
             Printtyp["type_expr"],
             ty,
             function(param,param$1)
              {return print_value(max_depth,env,obj,param,param$1)},
             ty)};

module["exports"]=
{"max_printer_depth":max_printer_depth,
 "max_printer_steps":max_printer_steps,
 "print_exception":print_exception,
 "print_named_value":print_named_value,
 "reset_named_values":reset_named_values,
 "find_named_value":find_named_value,
 "install_printer":install_printer,
 "remove_printer":remove_printer};

