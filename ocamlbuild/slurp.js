// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Printf=require("./printf.js");
var Format=require("./format.js");
var Filename=require("./filename.js");
var My_std=require("./my_std.js");
var My_unix=require("./my_unix.js");
var Hashtbl=require("./hashtbl.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");


var $slash=My_std["filename_concat"];

var
 filter=
  function(predicate,f)
   {if(typeof f==="number")
     {switch(f){case 0:return /* Nothing */0;}}
    else
     {switch(f[0])
       {case 0:
         var entries=f[5];
         
         var attr=f[4];
         
         var name=f[2];
         
         var path=f[1];
         
         return predicate(path,name,attr)
                 ?/* Dir */[0,
                   path,
                   name,
                   f[3],
                   attr,
                   [246,
                    function(param)
                     {return My_std["List"][16]
                              (filter(predicate),My_std["!*"](entries));
                      }]]
                 :/* Nothing */0;
         
        case 1:return predicate(f[1],f[2],f[4])?f:/* Nothing */0;
        case 2:return f;
        }}
    };

var
 real_slurp=
  function(path)
   {var cwd=CamlPrimitive["caml_sys_getcwd"](/* () */0);
    
    var
     abs=
      function(x)
       {return Filename["is_implicit"](x)||Filename["is_relative"](x)
                ?$slash(cwd,x)
                :x;
        };
    
    var visited=Hashtbl["create"](/* None */0,1024);
    
    var
     scandir=
      function(path,names)
       {var
         match=
          $$Array["fold_left"]
           (function(acc,name)
             {var dir_acc=acc[2];
              
              var file_acc=acc[1];
              
              var match$1=do_entry(/* true */1,path,name);
              
              if(match$1)
               {var entry=match$1[1];
                
                var exit;
                
                if(typeof entry==="number")
                 {switch(entry){case 0:return acc;}}
                else
                 {switch(entry[0])
                   {case 0:exit=19;
                    case 1:
                     return /* tuple */[0,/* :: */[0,entry,file_acc],dir_acc];
                    case 2:exit=19;
                    }}
                
                switch(exit)
                 {case 19:
                   return /* tuple */[0,file_acc,/* :: */[0,entry,dir_acc]];
                  }
                }
              else
               {return acc;}
              },
            [/* tuple */0,/* [] */0,/* [] */0],
            names);
        
        return Pervasives["@"](match[1],match[2]);
        };
    
    var
     do_entry=
      function(link_mode,path,name)
       {var fn=$slash(path,name);
        
        var absfn=abs(fn);
        
        var match;
        try
         {match=
          /* Good */[0,
           link_mode?My_unix["lstat"](absfn):My_unix["stat"](absfn)];
          }
        catch(x){match=/* Bad */[1,x];}
        
        switch(match[0])
         {case 0:
           var st=match[1];
           
           var key=st[2];
           
           var $js;
           try
            {$js=Hashtbl["find"](visited,key);}
           catch(exn)
            {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
              {$js=/* false */0;}
             else
              {throw exn;}
             }
           if($js)
            {return /* None */0;}
           else
            {Hashtbl["add"](visited,key,/* true */1);
             var match$1=st[1];
             
             switch(match$1)
              {case 0:
                var match$2=My_std["sys_readdir"](absfn);
                
                switch(match$2[0])
                 {case 0:
                   var names=match$2[1];
                   
                   var
                    res=
                     /* Some */[0,
                      /* Dir */[0,
                       path,
                       name,
                       [250,st],
                       /* () */0,
                       [246,function(param){return scandir(fn,names);}]]];
                   
                  case 1:var res=/* Some */[0,/* Error */[2,match$2[1]]];
                  }
                
               case 1:
                var
                 res=
                  /* Some */[0,/* File */[1,path,name,[250,st],/* () */0]];
                
               case 2:
                var fn$prime=My_unix["readlink"](absfn);
                
                var
                 res=
                  My_std["sys_file_exists"](abs(fn$prime))
                   ?do_entry(/* false */0,path,name)
                   :/* Some */[0,/* File */[1,path,name,[250,st],/* () */0]];
                
               case 3:var res=/* None */0;
               }
             
             Hashtbl["replace"](visited,key,/* false */0);
             return res;
             }
           
          case 1:return /* Some */[0,/* Error */[2,match[1]]];
          }
        };
    
    var match=do_entry(/* true */1,"",path);
    
    if(match)
     {return match[1];}
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    };

var
 split=
  function(path)
   {var
     aux=
      function(path)
       {return CamlPrimitive["caml_string_equal"]
                 (path,Filename["current_dir_name"])
                ?/* [] */0
                :/* :: */[0,
                  Filename["basename"](path),
                  aux(Filename["dirname"](path))];
        };
    
    return My_std["List"][9](aux(path));
    };

var
 join=
  function(param)
   {if(param)
     {var xs=param[2];var x=param[1];return xs?$slash(x,join(xs)):x;}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"slurp.ml",105,10]];
      }
    };

var
 add=
  function(root,path,entries)
   {var exit;
    
    if(path)
     {var xspath=path[2];
      
      var xpath=path[1];
      
      var exit$1;
      
      if(entries)
       {var d=entries[1];
        
        if(typeof d==="number")
         {switch(d){case 0:exit=14;}}
        else
         {switch(d[0])
           {case 0:
             var entries$1=entries[2];
             
             var dentries=d[5];
             
             var dname=d[2];
             
             return CamlPrimitive["caml_string_equal"](xpath,dname)
                     ?/* :: */[0,
                       /* Dir */[0,
                        d[1],
                        dname,
                        d[3],
                        d[4],
                        [246,
                         function(param)
                          {return add
                                   ($slash(root,xpath),xspath,My_std["!*"](dentries));
                           }]],
                       entries$1]
                     :/* :: */[0,d,add(root,path,entries$1)];
             
            case 1:exit$1=16;
            case 2:exit=14;
            }}
        }
      else
       {exit$1=16;}
      
      switch(exit$1)
       {case 16:
         if(xspath)
          {if(entries)
            {var entries$prime=entries[2];
             
             var f=entries[1];
             
             var fname=f[2];
             
             return CamlPrimitive["caml_string_equal"](xpath,fname)
                     ?/* :: */[0,
                       /* Dir */[0,
                        f[1],
                        fname,
                        f[3],
                        f[4],
                        [246,
                         function(param)
                          {return add($slash(root,xpath),xspath,/* [] */0);}]],
                       entries$prime]
                     :/* :: */[0,f,add(root,path,entries$prime)];
             }
           else
            {return /* :: */[0,
                     /* Dir */[0,
                      $slash(root,join(xspath)),
                      xpath,
                      [246,
                       function(param)
                        {return My_unix["stat"]($slash(root,join(path)));}],
                      /* () */0,
                      [246,
                       function(param)
                        {return add($slash(root,xpath),xspath,/* [] */0);}]],
                     /* [] */0];
             }
           }
         else
          {if(entries)
            {var f$1=entries[1];
             
             return CamlPrimitive["caml_string_equal"](xpath,f$1[2])
                     ?entries
                     :/* :: */[0,f$1,add(root,path,entries[2])];
             }
           else
            {return /* :: */[0,
                     /* File */[1,
                      root,
                      xpath,
                      [246,
                       function(param){return My_unix["stat"]($slash(root,xpath));}],
                      /* () */0],
                     /* [] */0];
             }
           }
         
        }
      }
    else
     {return entries;}
    
    switch(exit)
     {case 14:
       return typeof entries[1]==="number"?add(root,path,entries[2]):entries;
      }
    };

var
 slurp_with_find=
  function(path)
   {var find_cmd;
    try
     {find_cmd=CamlPrimitive["caml_sys_getenv"]("OCAMLBUILD_FIND");}
    catch(exn){find_cmd="find";}
    
    var
     lines=
      My_unix["run_and_open"]
       (Printf["sprintf"]
         ([/* Format */0,
           [/* String */2,
            /* No_padding */0,
            [/* Char_literal */12,
             32,
             [/* String */2,/* No_padding */0,/* End_of_format */0]]],
           "%s %s"],
          find_cmd,
          Filename["quote"](path)),
        function(ic)
         {var acc=/* [] */0;
          
          try
           {while(/* true */1)
             {acc=/* :: */[0,Pervasives["input_line"](ic),acc];}
            
            return /* [] */0;
            }
          catch(exn$1)
           {if(exn$1===CamlPrimitive["caml_global_data"]["End_of_file"])
             {return acc;}
            else
             {throw exn$1;}
            }
          });
    
    var
     res=
      My_std["List"][20]
       (function(line,acc){return add(path,split(line),acc);},lines,/* [] */0);
    
    return res
            ?res[2]
              ?/* Dir */[0,
                path,
                Filename["basename"](path),
                [246,function(param){return My_unix["stat"](path);}],
                /* () */0,
                [250,res]]
              :res[1]
            :/* Nothing */0;
    };

var
 slurp=
  function(x)
   {return My_std["!*"](My_unix["is_degraded"])
            ?slurp_with_find(x)
            :real_slurp(x);
    };

var
 print=
  function(print_attr,f,entry)
   {if(typeof entry==="number")
     {switch(entry)
       {case 0:
         return Format["fprintf"]
                 (f,
                  [/* Format */0,
                   [/* String_literal */11,"Nothing",/* End_of_format */0],
                   "Nothing"]);
         
        }}
    else
     {switch(entry[0])
       {case 0:
         return Format["fprintf"]
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* String_literal */11,
                     "Dir(",
                     [/* Caml_string */3,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       44,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Caml_string */3,
                         /* No_padding */0,
                         [/* Char_literal */12,
                          44,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String_literal */11,
                            "_,",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Char_literal */12,
                               44,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* Alpha */15,
                                 [/* Char_literal */12,
                                  41,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   /* End_of_format */0]]]]]]]]]]]]]]]],
                   "@[<2>Dir(%S,@ %S,@ _,@ %a,@ %a)@]"],
                  entry[1],
                  entry[2],
                  print_attr,
                  entry[4],
                  My_std["List"][1](print(print_attr)),
                  My_std["!*"](entry[5]));
         
        case 1:
         return Format["fprintf"]
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* String_literal */11,
                     "File(",
                     [/* Caml_string */3,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       44,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Caml_string */3,
                         /* No_padding */0,
                         [/* Char_literal */12,
                          44,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String_literal */11,
                            "_,",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Char_literal */12,
                               41,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                /* End_of_format */0]]]]]]]]]]]]],
                   "@[<2>File(%S,@ %S,@ _,@ %a)@]"],
                  entry[1],
                  entry[2],
                  print_attr,
                  entry[4]);
         
        case 2:
         return Format["fprintf"]
                 (f,
                  [/* Format */0,
                   [/* String_literal */11,"Error(_)",/* End_of_format */0],
                   "Error(_)"]);
         
        }}
    };

var
 fold=
  function(f,entry,acc)
   {var exit;
    
    if(typeof entry==="number")
     {switch(entry){case 0:exit=4;}}
    else
     {switch(entry[0])
       {case 0:
         return f
                 (entry[1],
                  entry[2],
                  entry[4],
                  My_std["List"][20](fold(f),My_std["!*"](entry[5]),acc));
         
        case 1:return f(entry[1],entry[2],entry[4],acc);
        case 2:exit=4;
        }}
    
    switch(exit){case 4:return acc;}
    };

var
 map=
  function(f,entry)
   {var
     $$self=
      function(entry)
       {if(typeof entry==="number")
         {switch(entry){case 0:return /* Nothing */0;}}
        else
         {switch(entry[0])
           {case 0:
             var contents=entry[5];
             
             var name=entry[2];
             
             var path=entry[1];
             
             return /* Dir */[0,
                     path,
                     name,
                     entry[3],
                     f(path,name,entry[4]),
                     [246,
                      function(param)
                       {return My_std["List"][16]($$self,My_std["!*"](contents));}]];
             
            case 1:
             var name$1=entry[2];
             
             var path$1=entry[1];
             
             return /* File */[1,
                     path$1,
                     name$1,
                     entry[3],
                     f(path$1,name$1,entry[4])];
             
            case 2:return /* Error */[2,entry[1]];
            }}
        };
    
    return $$self(entry);
    };

var
 force=
  function(param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param){case 0:exit=2;}}
    else
     {switch(param[0])
       {case 0:
         var match=My_std["!*"](param[3]);
         
         return My_std["List"][14](force,My_std["!*"](param[5]));
         
        case 1:return My_std["!*"](param[3]);
        case 2:exit=2;
        }}
    
    switch(exit){case 2:return /* () */0;}
    };

module["exports"]=
{"slurp":slurp,"filter":filter,"map":map,"fold":fold,"force":force};

