// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Format=require("Format");
var Filename=require("Filename");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");
var $$Array=require("Array");


var $unknown=My_std["filename_concat"];

var
 filter=
  function(predicate,f)
   {if(typeof f=="number")
     {switch(f){case 0:return 0;}}
    else
     {switch(f[0])
       {case 0:
         var entries=f[5];
         
         var attr=f[4];
         
         var name=f[2];
         
         var path=f[1];
         
         if(predicate(path,name,attr))
          {return [0,
                   path,
                   name,
                   f[3],
                   attr,
                   [246,
                    function(param)
                     {return My_std["List"][16]
                              (filter(predicate),My_std["!*"](entries));
                      }]];
           }
         else
          {return 0;}
         
        case 1:if(predicate(f[1],f[2],f[4])){return f;}else{return 0;}
        case 2:return f;
        }}
    };

var
 real_slurp=
  function(path)
   {var cwd="unknown primitive:caml_sys_getcwd";
    
    var
     abs=
      function(x)
       {if(Filename["is_implicit"](x)||Filename["is_relative"](x))
         {return $unknown(cwd,x);}
        else
         {return x;}
        };
    
    var visited=Hashtbl["create"](0,1024);
    
    var
     scandir=
      function(path$1,names)
       {var
         match=
          $$Array["fold_left"]
           (function(acc,name)
             {var dir_acc=acc[2];
              
              var file_acc=acc[1];
              
              var match$1=do_entry(1,path$1,name);
              
              if(match$1)
               {var entry=match$1[1];
                
                var exit;
                
                if(typeof entry=="number")
                 {switch(entry){case 0:return acc;}}
                else
                 {switch(entry[0])
                   {case 0:exit=19;
                    case 1:return [0,[0,entry,file_acc],dir_acc];
                    case 2:exit=19;
                    }}
                
                switch(exit){case 19:return [0,file_acc,[0,entry,dir_acc]];}
                }
              else
               {return acc;}
              },
            [0,0,0],
            names);
        
        return Pervasives["@"](match[1],match[2]);
        };
    
    var
     do_entry=
      function(link_mode,path$1,name)
       {var fn=$unknown(path$1,name);
        
        var absfn=abs(fn);
        
        try
         {var
           match=
            [0,link_mode?My_unix["lstat"](absfn):My_unix["stat"](absfn)];
          }
        catch(x){var match=[1,x];}
        
        switch(match)
         {case 0:
           var st=match[1];
           
           var key=st[2];
           
           try
            {var $js=Hashtbl["find"](visited,key);}
           catch(exn){if(exn=Not_found){var $js=0;}else{throw exn;}}
           if($js)
            {return 0;}
           else
            {Hashtbl["add"](visited,key,1);
             var match$1=st[1];
             
             switch(match$1[0])
              {case 0:
                var match$2=My_std["sys_readdir"](absfn);
                
                switch(match$2)
                 {case 0:
                   var names=match$2[1];
                   
                   var
                    res=
                     [0,
                      [0,
                       path$1,
                       name,
                       [250,st],
                       0,
                       [246,function(param){return scandir(fn,names);}]]];
                   
                  case 1:var res=[0,[2,match$2[1]]];
                  }
                
               case 1:var res=[0,[1,path$1,name,[250,st],0]];
               case 2:
                var fn$prime=My_unix["readlink"](absfn);
                
                if(My_std["sys_file_exists"](abs(fn$prime)))
                 {var res=do_entry(0,path$1,name);}
                else
                 {var res=[0,[1,path$1,name,[250,st],0]];}
                
               case 3:var res=0;
               }
             
             Hashtbl["replace"](visited,key,0);
             return res;
             }
           
          case 1:return [0,[2,match[1]]];
          }
        };
    
    var match=do_entry(1,"",path);
    
    if(match){return match[1];}else{throw Not_found;}
    };

var
 split=
  function(path)
   {var
     aux=
      function(path$1)
       {if("unknown primitive:caml_string_equal")
         {return 0;}
        else
         {return [0,
                  Filename["basename"](path$1),
                  aux(Filename["dirname"](path$1))];
          }
        };
    
    return My_std["List"][9](aux(path));
    };

var
 join=
  function(param)
   {if(param)
     {var xs=param[2];
      
      var x=param[1];
      
      if(xs){return $unknown(x,join(xs));}else{return x;}
      }
    else
     {throw [0,Assert_failure,[0,"slurp.ml",105,10]];}
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
        
        if(typeof d=="number")
         {switch(d){case 0:exit=14;}}
        else
         {switch(d[0])
           {case 0:
             var entries$1=entries[2];
             
             var dentries=d[5];
             
             var dname=d[2];
             
             if("unknown primitive:caml_string_equal")
              {return [0,
                       [0,
                        d[1],
                        dname,
                        d[3],
                        d[4],
                        [246,
                         function(param)
                          {return add
                                   ($unknown(root,xpath),xspath,My_std["!*"](dentries));
                           }]],
                       entries$1];
               }
             else
              {return [0,d,add(root,path,entries$1)];}
             
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
             
             if("unknown primitive:caml_string_equal")
              {return [0,
                       [0,
                        f[1],
                        fname,
                        f[3],
                        f[4],
                        [246,
                         function(param){return add($unknown(root,xpath),xspath,0);}]],
                       entries$prime];
               }
             else
              {return [0,f,add(root,path,entries$prime)];}
             }
           else
            {return [0,
                     [0,
                      $unknown(root,join(xspath)),
                      xpath,
                      [246,
                       function(param)
                        {return My_unix["stat"]($unknown(root,join(path)));}],
                      0,
                      [246,
                       function(param){return add($unknown(root,xpath),xspath,0);}]],
                     0];
             }
           }
         else
          {if(entries)
            {var f$1=entries[1];
             
             if("unknown primitive:caml_string_equal")
              {return entries;}
             else
              {return [0,f$1,add(root,path,entries[2])];}
             }
           else
            {return [0,
                     [1,
                      root,
                      xpath,
                      [246,
                       function(param)
                        {return My_unix["stat"]($unknown(root,xpath));}],
                      0],
                     0];
             }
           }
         
        }
      }
    else
     {return entries;}
    
    switch(exit)
     {case 14:
       if("unknown primitive:isint")
        {return add(root,path,entries[2]);}
       else
        {return entries;}
       
      }
    };

var
 slurp_with_find=
  function(path)
   {try
     {var find_cmd="unknown primitive:caml_sys_getenv";}
    catch(exn){var find_cmd="find";}
    
    var
     lines=
      My_unix["run_and_open"]
       (Printf["sprintf"]
         ([0,[2,0,[12,32,[2,0,0]]],"%s %s"],find_cmd,Filename["quote"](path)),
        function(ic)
         {var acc=0;
          
          try
           {while(1){acc=[0,Pervasives["input_line"](ic),acc];}return 0;}
          catch(exn$1){if(exn$1=End_of_file){return acc;}else{throw exn$1;}}
          });
    
    var
     res=
      My_std["List"][20]
       (function(line,acc){return add(path,split(line),acc);},lines,0);
    
    if(res)
     {if(res[2])
       {return [0,
                path,
                Filename["basename"](path),
                [246,function(param){return My_unix["stat"](path);}],
                0,
                [250,res]];
        }
      else
       {return res[1];}
      }
    else
     {return 0;}
    };

var
 slurp=
  function(x)
   {if(My_std["!*"](My_unix["is_degraded"]))
     {return slurp_with_find(x);}
    else
     {return real_slurp(x);}
    };

var
 print=
  function(print_attr,f,entry)
   {if(typeof entry=="number")
     {switch(entry)
       {case 0:return Format["fprintf"](f,[0,[11,"Nothing",0],"Nothing"]);}}
    else
     {switch(entry[0])
       {case 0:
         return Format["fprintf"]
                 (f,
                  [0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,
                     "Dir(",
                     [3,
                      0,
                      [12,
                       44,
                       [17,
                        [0,"@ ",1,0],
                        [3,
                         0,
                         [12,
                          44,
                          [17,
                           [0,"@ ",1,0],
                           [11,
                            "_,",
                            [17,
                             [0,"@ ",1,0],
                             [15,[12,44,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]]]]]]],
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
                  [0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,
                     "File(",
                     [3,
                      0,
                      [12,
                       44,
                       [17,
                        [0,"@ ",1,0],
                        [3,
                         0,
                         [12,
                          44,
                          [17,
                           [0,"@ ",1,0],
                           [11,"_,",[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]]]],
                   "@[<2>File(%S,@ %S,@ _,@ %a)@]"],
                  entry[1],
                  entry[2],
                  print_attr,
                  entry[4]);
         
        case 2:return Format["fprintf"](f,[0,[11,"Error(_)",0],"Error(_)"]);
        }}
    };

var
 fold=
  function(f,entry,acc)
   {var exit;
    
    if(typeof entry=="number")
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
      function(entry$1)
       {if(typeof entry$1=="number")
         {switch(entry$1){case 0:return 0;}}
        else
         {switch(entry$1[0])
           {case 0:
             var contents=entry$1[5];
             
             var name=entry$1[2];
             
             var path=entry$1[1];
             
             return [0,
                     path,
                     name,
                     entry$1[3],
                     f(path,name,entry$1[4]),
                     [246,
                      function(param)
                       {return My_std["List"][16]($$self,My_std["!*"](contents));}]];
             
            case 1:
             var name$1=entry$1[2];
             
             var path$1=entry$1[1];
             
             return [1,path$1,name$1,entry$1[3],f(path$1,name$1,entry$1[4])];
             
            case 2:return [2,entry$1[1]];
            }}
        };
    
    return $$self(entry);
    };

var
 force=
  function(param)
   {var exit;
    
    if(typeof param=="number")
     {switch(param){case 0:exit=2;}}
    else
     {switch(param[0])
       {case 0:
         var match=My_std["!*"](param[3]);
         
         return My_std["List"][14](force,My_std["!*"](param[5]));
         
        case 1:return 0;
        case 2:exit=2;
        }}
    
    switch(exit){case 2:return 0;}
    };

module["exports"]=
{"slurp":slurp,"filter":filter,"map":map,"fold":fold,"force":force};

