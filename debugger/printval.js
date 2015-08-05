// Generated CODE, PLEASE EDIT WITH CARE 

var Printtyp=require("Printtyp");
var Pervasives=require("Pervasives");
var Format=require("Format");
var Oprint=require("Oprint");
var Genprintval=require("Genprintval");
var Hashtbl=require("Hashtbl");
var Symtable=require("Symtable");
var Debugcom=require("Debugcom");


var named_values=Hashtbl["create"](0,29);

var next_name=[0,1];

var
 reset_named_values=
  function(param){Hashtbl["clear"](named_values);return next_name[1]=1,0;};

var
 name_value=
  function(v,ty)
   {var name=next_name[1];
    
    next_name[0]++;
    Hashtbl["add"](named_values,name,[0,v,ty]);
    return name;
    };

var
 find_named_value=
  function(name){return Hashtbl["find"](named_values,name);};

var
 check_depth=
  function(ppf,depth,obj,ty)
   {if(depth<=0)
     {var n=name_value(obj,ty);
      
      return [0,[12,Pervasives["^"]("$",Pervasives["string_of_int"](n))]];
      }
    else
     {return 0;}
    };

var $$Error="unknown primitive:caml_set_oo_id";

var
 eval_path=
  function(env,param)
   {switch(param)
     {case 0:
       try
        {return Debugcom["Remote_value"][10]
                 (Symtable["get_global_position"](param[1]));
         }
       catch(exn)
        {if(exn[1]=Symtable["Error"]){throw $$Error;}else{throw exn;}}
       
      case 1:
       var v=eval_path(env,param[1]);
       
       if(!Debugcom["Remote_value"][2](v))
        {throw $$Error;}
       else
        {return Debugcom["Remote_value"][5](v,param[3]);}
       
      case 2:throw $$Error;
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
             function(ppf$1,remote_val)
              {try
                {return fn(ppf$1,Debugcom["Remote_value"][1](remote_val));}
               catch(exn)
                {if(exn=Debugcom["Marshalling_error"])
                  {return Format["fprintf"]
                           (ppf$1,
                            [0,
                             [11,"<cannot fetch remote object>",0],
                             "<cannot fetch remote object>"]);
                   }
                 else
                  {throw exn;}
                 }
               });
    };

var remove_printer=Printer[4];

var max_printer_depth=[0,20];

var max_printer_steps=[0,300];

var
 print_exception=
  function(ppf,obj)
   {var t=Printer[5](obj);return Oprint["out_value"][1](ppf,t);};

var
 print_value=
  function(max_depth,env,obj,ppf,ty)
   {var
     t=
      Printer[6](max_printer_steps[1],max_depth,check_depth(ppf),env,obj,ty);
    
    return Oprint["out_value"][1](ppf,t);
    };

var
 print_named_value=
  function(max_depth,exp,env,obj,ppf,ty)
   {var
     print_value_name=
      function(ppf$1,param)
       {var exit;
        
        if(typeof param=="number")
         {switch(param){}}
        else
         {switch(param[0])
           {case 0:return Printtyp["longident"](ppf$1,param[1]);
            case 1:
             return Format["fprintf"]
                     (ppf$1,[0,[12,36,[4,3,0,0,0]],"$%i"],param[1]);
             
            default:exit=2;}}
        
        switch(exit)
         {case 2:
           var n=name_value(obj,ty);
           
           return Format["fprintf"](ppf$1,[0,[12,36,[4,3,0,0,0]],"$%i"],n);
           
          }
        };
    
    Printtyp["reset_and_mark_loops"](ty);
    return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<2>",0],"<2>"]],
               [15,
                [12,
                 58,
                 [17,
                  [0,"@ ",1,0],
                  [15,
                   [17,
                    [0,"@ ",1,0],
                    [12,61,[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]]]]]],
              "@[<2>%a:@ %a@ =@ %a@]@."],
             print_value_name,
             exp,
             Printtyp["type_expr"],
             ty,
             print_value(max_depth,env,obj),
             ty);
    };

module["exports"]=
{"max_printer_depth":max_printer_depth,
 "max_printer_steps":max_printer_steps,
 "print_exception":print_exception,
 "print_named_value":print_named_value,
 "reset_named_values":reset_named_values,
 "find_named_value":find_named_value,
 "install_printer":install_printer,
 "remove_printer":remove_printer};

