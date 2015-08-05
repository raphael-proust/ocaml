// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Misc=require("Misc");
var Unix=require("Unix");
var Filename=require("Filename");
var Sys=require("Sys");


var
 convert_address=
  function(address)
   {try
     {var n=$$String["index"](address,58);
      
      var host=$$String["sub"](address,0,n);
      
      var port=$$String["sub"](address,n+1,address["length"]-n-1);
      
      try
       {var $js=Unix["inet_addr_of_string"](host);}
      catch(exn)
       {if(exn[1]=Failure)
         {try
           {var $js=Unix["gethostbyname"](host)[4][0];}
          catch(exn$1)
           {if(exn$1=Not_found)
             {Pervasives["prerr_endline"]
               (Pervasives["^"]("Unknown host: ",host));
              var $js=Pervasives["failwith"]("Can't convert address");
              }
            else
             {throw exn$1;}
            }
          }
        else
         {throw exn;}
        }
      try
       {var $js$1="unknown primitive:caml_int_of_string";}
      catch(exn$2)
       {if(exn$2[1]=Failure)
         {Pervasives["prerr_endline"]("The port number should be an integer");
          var $js$1=Pervasives["failwith"]("Can't convert address");
          }
        else
         {throw exn$2;}
        }
      return [0,1,[1,$js,$js$1]];
      }
    catch(exn$3)
     {if(exn$3=Not_found)
       {var match=Sys["os_type"];
        
        switch(match)
         {case "Win32":
           return Pervasives["failwith"]("Unix sockets not supported");
          default:return [0,0,[0,address]];}
        }
      else
       {throw exn$3;}
      }
    };

var
 report_error=
  function(param)
   {if(param[1]=Unix["Unix_error"])
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
      [0,
       [11,"search_in_path [",[2,0,[11,"]\n",[10,0]]]],
       "search_in_path [%s]\n%!"],
      name);
    var
     check=
      function(name$1)
       {try
         {Unix["access"](name$1,[0,2,0]);return name$1;}
        catch(exn)
         {if(exn[1]=Unix["Unix_error"]){throw Not_found;}else{throw exn;}}
        };
    
    if(!Filename["is_implicit"](name))
     {return check(name);}
    else
     {var path="unknown primitive:caml_sys_getenv";
      
      var length=path["length"];
      
      var
       traverse=
        function(pointer)
         {if(pointer>=length||(path[pointer]=58))
           {return pointer;}
          else
           {return traverse(pointer+1);}
          };
      
      var
       find=
        function(pos)
         {var pos2=traverse(pos);
          
          var directory=$$String["sub"](path,pos,pos2-pos);
          
          if("unknown primitive:caml_string_equal")
           {var fullname=name;}
          else
           {var fullname=Pervasives["^"](directory,Pervasives["^"]("/",name));
            }
          
          try
           {return check(fullname);}
          catch(exn)
           {if(exn=Not_found)
             {if(pos2<length){return find(pos2+1);}else{throw Not_found;}}
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
      function(ch$1)
       {try
         {var pos=$$String["index"](ch$1,36);
          
          if(pos+1<ch$1["length"]&&(ch$1[pos+1]=36))
           {return Pervasives["^"]
                    ($$String["sub"](ch$1,0,pos+1),
                     subst_variable
                      ($$String["sub"](ch$1,pos+2,ch$1["length"]-pos-2)));
            }
          else
           {return Pervasives["^"]
                    ($$String["sub"](ch$1,0,pos),
                     subst2($$String["sub"](ch$1,pos+1,ch$1["length"]-pos-1)));
            }
          }
        catch(exn){if(exn=Not_found){return ch$1;}else{throw exn;}}
        };
    
    var
     subst2=
      function(ch$1)
       {var i=0;
        
        var c=ch$1[i];
        
        while
         (i<
          ch$1["length"]&&
          (c>=97&&c<=122||c>=65&&c<=90||c>=48&&c<=57||(c=95)))
         {i=1+i;}
        
        var suiv=i;
        
        return Pervasives["^"]
                ("unknown primitive:caml_sys_getenv",
                 subst_variable
                  ($$String["sub"](ch$1,suiv,ch$1["length"]-suiv)));
        };
    
    var ch$1=subst_variable(ch);
    
    var
     concat_root=
      function(nom,ch2)
       {try
         {return Filename["concat"](Unix["getpwnam"](nom)[6],ch2);}
        catch(exn)
         {if(exn=Not_found){return Pervasives["^"]("~",nom);}else{throw exn;}}
        };
    
    if(ch$1[0]=126)
     {try
       {var n=$$String["index"](ch$1,47);
        
        if(n!=1)
         {return concat_root
                  ($$String["sub"](ch$1,1,n-1),
                   $$String["sub"](ch$1,n+1,ch$1["length"]-n-1));
          }
        else
         {var tail=$$String["sub"](ch$1,2,ch$1["length"]-2);
          
          try
           {return Filename["concat"]
                    ("unknown primitive:caml_sys_getenv",tail);
            }
          catch(exn)
           {if(exn=Not_found)
             {return concat_root("unknown primitive:caml_sys_getenv",tail);}
            else
             {throw exn;}
            }
          }
        }
      catch(exn$1)
       {if(exn$1=Not_found)
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
     {return Filename["concat"](Unix["getcwd"](0),name);}
    else
     {return name;}
    };

module["exports"]=
{"convert_address":convert_address,
 "report_error":report_error,
 "search_in_path":search_in_path,
 "expand_path":expand_path,
 "make_absolute":make_absolute};

