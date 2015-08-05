// Generated CODE, PLEASE EDIT WITH CARE 

var Options=require("Options");
var List=require("List");
var Printf=require("Printf");
var Pathname=require("Pathname");
var Hygiene=require("Hygiene");
var Log=require("Log");


var Exit_hygiene_failed="unknown primitive:caml_set_oo_id";

var
 laws=
  [0,
   [0,
    "Leftover OCaml compilation files",
    [0,
     [1,".cmo"],
     [0,[1,".cmi"],[0,[1,".cmx"],[0,[1,".cma"],[0,[1,".cmxa"],0]]]]],
    1],
   [0,
    [0,"Leftover OCaml type annotation files",[0,[1,".annot"],0],0],
    [0,
     [0,
      "Leftover object files",
      [0,
       [1,".o"],
       [0,
        [1,".a"],
        [0,[1,".so"],[0,[1,".obj"],[0,[1,".lib"],[0,[1,".dll"],0]]]]]],
      1],
     [0,
      [0,
       "Leftover ocamlyacc-generated files",
       [0,[0,".mly",".ml"],[0,[0,".mly",".mli"],0]],
       1],
      [0,
       [0,"Leftover ocamllex-generated files",[0,[0,".mll",".ml"],0],1],
       [0,
        [0,
         "Leftover dependency files",
         [0,[1,".ml.depends"],[0,[1,".mli.depends"],0]],
         1],
        0]]]]]];

var
 inspect=
  function(entry)
   {Log["dprintf"](5,[0,[11,"Doing sanity checks",0],"Doing sanity checks"]);
    var evil=[0,0];
    
    var
     stuff=
      Hygiene["check"]
       (Options["sanitize"][1]
         ?[0,
           Pathname["concat"]
            (Options["build_dir"][1],Options["sanitization_script"][1])]
         :0,
        laws,
        entry);
    
    if(stuff)
     {List["iter"]
       (function(param)
         {var law=param[1];
          
          var match=law[3];
          
          if(match!=0)
           {if(!evil[1])
             {Printf["printf"]
               ([0,
                 [11,
                  "IMPORTANT: I cannot work with leftover compiled files.\n",
                  [10,0]],
                 "IMPORTANT: I cannot work with leftover compiled files.\n%!"]),
              evil[1]=
              1,
              0}
            else
             {}
            
            var $js="ERROR";
            }
          else
           {var $js="Warning";}
          Printf["printf"]
           ([0,[2,0,[11,": ",[2,0,[11,":\n",0]]]],"%s: %s:\n"],$js,law[1]);
          return List["iter"]
                  (function(msg)
                    {return Printf["printf"]
                             ([0,[11,"  ",[2,0,[12,10,0]]],"  %s\n"],msg);
                     },
                   param[2]);
          },
        stuff);
      if(evil[1]){throw Exit_hygiene_failed;}else{return 0;}
      }
    else
     {return 0;}
    };

module["exports"]=
{"Exit_hygiene_failed":Exit_hygiene_failed,"inspect":inspect};

