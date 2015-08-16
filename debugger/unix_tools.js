// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Pervasives=require("./pervasives.js");
var Printf=require("./printf.js");
var Misc=require("./misc.js");
var Unix=require("./unix.js");
var Filename=require("./filename.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var
 convert_address=
  function(address)
   {try
     {var n=$$String["index"](address,58);
      
      var host=$$String["sub"](address,0,n);
      
      var port=$$String["sub"](address,n+1,address["length"]-n-1);
      
      var $js;
      try
       {$js=Unix["inet_addr_of_string"](host);}
      catch(exn)
       {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
         {try
           {$js=Unix["gethostbyname"](host)[4][1];}
          catch(exn$1)
           {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
             {Pervasives["prerr_endline"]
               (Pervasives["^"]("Unknown host: ",host));
              $js=Pervasives["failwith"]("Can't convert address");
              }
            else
             {throw exn$1;}
            }
          }
        else
         {throw exn;}
        }
      var $js$1;
      try
       {$js$1=CamlPrimitive["caml_int_of_string"](port);}
      catch(exn$2)
       {if(exn$2[1]===CamlPrimitive["caml_global_data"]["Failure"])
         {Pervasives["prerr_endline"]("The port number should be an integer");
          $js$1=Pervasives["failwith"]("Can't convert address");
          }
        else
         {throw exn$2;}
        }
      return /* tuple */[0,/* PF_INET */1,/* ADDR_INET */[1,$js,$js$1]];
      }
    catch(exn$3)
     {if(exn$3===CamlPrimitive["caml_global_data"]["Not_found"])
       {var match=Sys["os_type"];
        
        switch(match)
         {case "Win32":
           return Pervasives["failwith"]("Unix sockets not supported");
          default:
           return /* tuple */[0,/* PF_UNIX */0,/* ADDR_UNIX */[0,address]];}
        }
      else
       {throw exn$3;}
      }
    };

var
 report_error=
  function(param)
   {if(param[1]===Unix["Unix_error"])
     {var arg=param[4];
      
      Pervasives["prerr_string"]("Unix error: '");
      Pervasives["prerr_string"](param[3]);
      Pervasives["prerr_string"]("' failed");
      if(arg["length"]>0)
       {Pervasives["prerr_string"](" on '"),
        Pervasives["prerr_string"](arg),
        Pervasives["prerr_string"]("'")}
      else
       {}
      
      Pervasives["prerr_string"](": ");
      return Pervasives["prerr_endline"](Unix["error_message"](param[2]));
      }
    else
     {return Misc["fatal_error"]("report_error: not a Unix error");}
    };

var
 search_in_path=
  function(name)
   {Printf["fprintf"]
     (Pervasives["stderr"],
      [/* Format */0,
       [/* String_literal */11,
        "search_in_path [",
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,"]\n",[/* Flush */10,/* End_of_format */0]]]],
       "search_in_path [%s]\n%!"],
      name);
    var
     check=
      function(name)
       {try
         {Unix["access"](name,[/* :: */0,/* X_OK */2,/* [] */0]);return name;}
        catch(exn)
         {if(exn[1]===Unix["Unix_error"])
           {throw CamlPrimitive["caml_global_data"]["Not_found"];}
          else
           {throw exn;}
          }
        };
    
    if(!Filename["is_implicit"](name))
     {return check(name);}
    else
     {var path=CamlPrimitive["caml_sys_getenv"]("PATH");
      
      var length=path["length"];
      
      var
       traverse=
        function(pointer)
         {if(pointer>=length||path[pointer]===58)
           {return pointer;}
          else
           {return traverse(pointer+1);}
          };
      
      var
       find=
        function(pos)
         {var pos2=traverse(pos);
          
          var directory=$$String["sub"](path,pos,pos2-pos);
          
          if(CamlPrimitive["caml_string_equal"](directory,""))
           {var fullname=name;}
          else
           {var fullname=Pervasives["^"](directory,Pervasives["^"]("/",name));
            }
          
          try
           {return check(fullname);}
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {if(pos2<length)
               {return find(pos2+1);}
              else
               {throw CamlPrimitive["caml_global_data"]["Not_found"];}
              }
            else
             {throw exn;}
            }
          };
      
      return find(0);
      }
    };

var
 expand_path=
  function(ch)
   {var
     subst_variable=
      function(ch)
       {try
         {var pos=$$String["index"](ch,36);
          
          if(pos+1<ch["length"]&&ch[pos+1]===36)
           {return Pervasives["^"]
                    ($$String["sub"](ch,0,pos+1),
                     subst_variable($$String["sub"](ch,pos+2,ch["length"]-pos-2)));
            }
          else
           {return Pervasives["^"]
                    ($$String["sub"](ch,0,pos),
                     subst2($$String["sub"](ch,pos+1,ch["length"]-pos-1)));
            }
          }
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {return ch;}
          else
           {throw exn;}
          }
        };
    
    var
     subst2=
      function(ch)
       {var i=0;
        
        var c=ch[i];
        
        while
         (i<ch["length"]&&(c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57||c===95))
         {i=1+i;}
        
        var suiv=i;
        
        return Pervasives["^"]
                (CamlPrimitive["caml_sys_getenv"]($$String["sub"](ch,0,suiv)),
                 subst_variable($$String["sub"](ch,suiv,ch["length"]-suiv)));
        };
    
    var ch$1=subst_variable(ch);
    
    var
     concat_root=
      function(nom,ch2)
       {try
         {return Filename["concat"](Unix["getpwnam"](nom)[6],ch2);}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {return Pervasives["^"]("~",nom);}
          else
           {throw exn;}
          }
        };
    
    if(ch$1[0]===126)
     {try
       {var n=$$String["index"](ch$1,47);
        
        if(n!==1)
         {return concat_root
                  ($$String["sub"](ch$1,1,n-1),
                   $$String["sub"](ch$1,n+1,ch$1["length"]-n-1));
          }
        else
         {var tail=$$String["sub"](ch$1,2,ch$1["length"]-2);
          
          try
           {return Filename["concat"]
                    (CamlPrimitive["caml_sys_getenv"]("HOME"),tail);
            }
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {return concat_root
                      (CamlPrimitive["caml_sys_getenv"]("LOGNAME"),tail);
              }
            else
             {throw exn;}
            }
          }
        }
      catch(exn$1)
       {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
         {return expand_path(Pervasives["^"](ch$1,"/"));}
        else
         {throw exn$1;}
        }
      }
    else
     {return ch$1;}
    };

var
 make_absolute=
  function(name)
   {if(Filename["is_relative"](name))
     {return Filename["concat"](Unix["getcwd"](/* () */0),name);}
    else
     {return name;}
    };

module["exports"]=
{"convert_address":convert_address,
 "report_error":report_error,
 "search_in_path":search_in_path,
 "expand_path":expand_path,
 "make_absolute":make_absolute};

