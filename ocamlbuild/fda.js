// Generated CODE, PLEASE EDIT WITH CARE 

var Options=require("./options.js");
var List=require("./list.js");
var Printf=require("./printf.js");
var Pathname=require("./pathname.js");
var Hygiene=require("./hygiene.js");
var Log=require("./log.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 Exit_hygiene_failed=
  CamlPrimitive["caml_set_oo_id"]([248,"Fda.Exit_hygiene_failed",0]);

var
 laws=
  [/* :: */0,
   [/* record */0,
    "Leftover OCaml compilation files",
    [/* :: */0,
     [/* Not */1,".cmo"],
     [/* :: */0,
      [/* Not */1,".cmi"],
      [/* :: */0,
       [/* Not */1,".cmx"],
       [/* :: */0,
        [/* Not */1,".cma"],
        [/* :: */0,[/* Not */1,".cmxa"],/* [] */0]]]]],
    /* Fail */1],
   [/* :: */0,
    [/* record */0,
     "Leftover OCaml type annotation files",
     [/* :: */0,[/* Not */1,".annot"],/* [] */0],
     /* Warn */0],
    [/* :: */0,
     [/* record */0,
      "Leftover object files",
      [/* :: */0,
       [/* Not */1,".o"],
       [/* :: */0,
        [/* Not */1,".a"],
        [/* :: */0,
         [/* Not */1,".so"],
         [/* :: */0,
          [/* Not */1,".obj"],
          [/* :: */0,
           [/* Not */1,".lib"],
           [/* :: */0,[/* Not */1,".dll"],/* [] */0]]]]]],
      /* Fail */1],
     [/* :: */0,
      [/* record */0,
       "Leftover ocamlyacc-generated files",
       [/* :: */0,
        [/* Implies_not */0,".mly",".ml"],
        [/* :: */0,[/* Implies_not */0,".mly",".mli"],/* [] */0]],
       /* Fail */1],
      [/* :: */0,
       [/* record */0,
        "Leftover ocamllex-generated files",
        [/* :: */0,[/* Implies_not */0,".mll",".ml"],/* [] */0],
        /* Fail */1],
       [/* :: */0,
        [/* record */0,
         "Leftover dependency files",
         [/* :: */0,
          [/* Not */1,".ml.depends"],
          [/* :: */0,[/* Not */1,".mli.depends"],/* [] */0]],
         /* Fail */1],
        /* [] */0]]]]]];

var
 inspect=
  function(entry)
   {Log["dprintf"]
     (5,
      [/* Format */0,
       [/* String_literal */11,"Doing sanity checks",/* End_of_format */0],
       "Doing sanity checks"]);
    var evil=[0,/* false */0];
    
    var
     stuff=
      Hygiene["check"]
       (Options["sanitize"][1]
         ?/* Some */[0,
           Pathname["concat"]
            (Options["build_dir"][1],Options["sanitization_script"][1])]
         :/* None */0,
        laws,
        entry);
    
    if(stuff)
     {List["iter"]
       (function(param)
         {var law=param[1];
          
          var match=law[3];
          
          var $js;
          if(match!==0)
           {if(!evil[1])
             {Printf["printf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  "IMPORTANT: I cannot work with leftover compiled files.\n",
                  [/* Flush */10,/* End_of_format */0]],
                 "IMPORTANT: I cannot work with leftover compiled files.\n%!"]),
              evil[1]=
              /* true */1,
              0}
            
            $js="ERROR";
            }
          else
           {$js="Warning";}
          Printf["printf"]
           ([/* Format */0,
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,
               ": ",
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,":\n",/* End_of_format */0]]]],
             "%s: %s:\n"],
            $js,
            law[1]);
          return List["iter"]
                  (function(msg)
                    {return Printf["printf"]
                             ([/* Format */0,
                               [/* String_literal */11,
                                "  ",
                                [/* String */2,
                                 /* No_padding */0,
                                 [/* Char_literal */12,10,/* End_of_format */0]]],
                               "  %s\n"],
                              msg);
                     },
                   param[2]);
          },
        stuff);
      if(evil[1]){throw Exit_hygiene_failed;}else{return 0;}
      }
    else
     {return /* () */0;}
    };

module["exports"]=
{"Exit_hygiene_failed":Exit_hygiene_failed,"inspect":inspect};

