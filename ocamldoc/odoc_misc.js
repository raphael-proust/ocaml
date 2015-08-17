// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("./ctype.js");
var $$String=require("./string.js");
var Char=require("./char.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Btype=require("./btype.js");
var Predef=require("./predef.js");
var Printf=require("./printf.js");
var Unix=require("./unix.js");
var Path=require("./path.js");
var Buffer=require("./buffer.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Odoc_messages=require("./odoc_messages.js");


var
 no_blanks=
  function(s)
   {var len=s["length"];
    
    var buf=Buffer["create"](len);
    
    for(var i=0;i<=len-1;i++)
     {var c=s["charCodeAt"](i);
      
      var exit;
      
      var switcher=-9+c;
      
      if(!(4<switcher>>>0))
       {if(1<-2+switcher>>>0){exit=101;}else{exit=102;}}
      else
       {if(switcher!==23){exit=102;}else{exit=101;}}
      
      switch(exit){case 102:Buffer["add_char"](buf,c);case 101:}
      }
    
    return Buffer["contents"](buf);
    };

var
 input_file_as_string=
  function(nom)
   {var chanin=Pervasives["open_in_bin"](nom);
    
    var len=1024;
    
    var s=CamlPrimitive["caml_create_string"](len);
    
    var buf=Buffer["create"](len);
    
    var
     iter=
      function(param)
       {try
         {var n=Pervasives["input"](chanin,s,0,len);
          
          return n===0
                  ?/* () */0
                  :(Buffer["add_subbytes"](buf,s,0,n),iter(/* () */0));
          }
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["End_of_file"])
           {return /* () */0;}
          else
           {throw exn;}
          }
        };
    
    iter(/* () */0);
    Pervasives["close_in"](chanin);
    return Buffer["contents"](buf);
    };

var
 split_string=
  function(s,chars)
   {var len=s["length"];
    
    var
     iter=
      function(acc,pos)
       {if(pos>=len)
         {switch(acc)
           {case "":return /* [] */0;
            default:return /* :: */[0,acc,/* [] */0];}
          }
        else
         {if(List["mem"](s["charCodeAt"](pos),chars))
           {switch(acc)
             {case "":return iter("",pos+1);
              default:return /* :: */[0,acc,iter("",pos+1)];}
            }
          else
           {return iter
                    (Printf["sprintf"]
                      ([/* Format */0,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char */0,/* End_of_format */0]],
                        "%s%c"],
                       acc,
                       s["charCodeAt"](pos)),
                     pos+1);
            }
          }
        };
    
    return iter("",0);
    };

var
 split_with_blanks=
  function(s)
   {return split_string
            (s,
             [/* :: */0,
              32,
              [/* :: */0,10,[/* :: */0,13,[/* :: */0,9,/* [] */0]]]]);
    };

var
 list_concat=
  function(sep)
   {var
     iter=
      function(param)
       {if(param)
         {var q=param[2];
          
          var h=param[1];
          
          return q?/* :: */[0,h,/* :: */[0,sep,q]]:/* :: */[0,h,/* [] */0];
          }
        else
         {return /* [] */0;}
        };
    
    return iter;
    };

var
 string_of_longident=
  function(li)
   {switch(li[0])
     {case 0:return li[1];
      case 1:
       return Pervasives["^"]
               (string_of_longident(li[1]),Pervasives["^"](".",li[2]));
       
      case 2:
       return Pervasives["^"]
               (string_of_longident(li[1]),
                Pervasives["^"]
                 ("(",Pervasives["^"](string_of_longident(li[2]),")")));
       
      }
    };

var
 get_fields=
  function(type_expr)
   {var match=Ctype["flatten_fields"](Ctype["object_fields"](type_expr));
    
    return List["fold_left"]
            (function(acc,param)
              {var field_kind=param[2];
               
               var label=param[1];
               
               var exit;
               
               if(typeof field_kind==="number")
                {if(field_kind!==0){return acc;}else{exit=84;}}
               else
                {exit=84;}
               
               switch(exit)
                {case 84:
                  return CamlPrimitive["caml_string_equal"]
                           (label,"*dummy method*")
                          ?acc
                          :Pervasives["@"]
                            (acc,/* :: */[0,/* tuple */[0,label,param[3]],/* [] */0]);
                  
                 }
               },
             /* [] */0,
             match[1]);
    };

var
 string_of_text=
  function(t)
   {var
     iter=
      function(t_ele)
       {var exit;
        
        if(typeof t_ele==="number")
         {switch(t_ele){case 0:return "\n";case 1:return "";}}
        else
         {switch(t_ele[0])
           {case 0:exit=82;
            case 1:exit=82;
            case 2:exit=82;
            case 3:exit=82;
            case 10:
             return Pervasives["^"]
                     ($$String["concat"]
                       ("",
                        List["map"]
                         (function(t)
                           {return Pervasives["^"]("\n- ",string_of_text(t));},
                          t_ele[1])),
                      "\n");
             
            case 11:
             var
              f=
               function(n,param)
                {return param
                         ?Pervasives["^"]
                           ("\n",
                            Pervasives["^"]
                             (Pervasives["string_of_int"](n),
                              Pervasives["^"]
                               (". ",
                                Pervasives["^"](string_of_text(param[1]),f(n+1,param[2])))))
                         :"\n";
                 };
             
             return f(1,t_ele[1]);
             
            case 12:
             return Pervasives["^"]
                     ("\t",Pervasives["^"](string_of_text(t_ele[1]),"\n"));
             
            case 13:
             return Pervasives["^"]
                     ("\n",Pervasives["^"](string_of_text(t_ele[3]),"\n"));
             
            case 14:
             return Pervasives["^"]("{% ",Pervasives["^"](t_ele[1]," %}"));
            case 15:
             return Pervasives["^"]
                     ("[",
                      Pervasives["^"]
                       (t_ele[1],Pervasives["^"]("]",string_of_text(t_ele[2]))));
             
            case 16:
             var match=t_ele[3];
             
             return match
                     ?Printf["sprintf"]
                       ([/* Format */0,
                         [/* Char_literal */12,
                          91,
                          [/* String */2,
                           /* No_padding */0,
                           [/* Char_literal */12,93,/* End_of_format */0]]],
                         "[%s]"],
                        string_of_text(match[1]))
                     :iter(/* Code */[1,t_ele[1]]);
             
            case 17:
             return Pervasives["^"]
                     ("^{",Pervasives["^"](string_of_text(t_ele[1]),"}"));
             
            case 18:
             return Pervasives["^"]
                     ("^{",Pervasives["^"](string_of_text(t_ele[1]),"}"));
             
            case 19:
             return string_of_text
                     (list_concat
                       ([/* Raw */0,", "],
                        List["map"](function(s){return /* Code */[1,s];},t_ele[1])));
             
            case 20:return string_of_text(t_ele[2]);
            case 21:return "";
            default:return string_of_text(t_ele[1]);}}
        
        switch(exit){case 82:return t_ele[1];}
        };
    
    return $$String["concat"]("",List["map"](iter,t));
    };

var
 string_of_author_list=
  function(l)
   {return l
            ?Pervasives["^"]
              ("* ",
               Pervasives["^"]
                (Odoc_messages["authors"],
                 Pervasives["^"]
                  (":\n",Pervasives["^"]($$String["concat"](", ",l),"\n"))))
            :"";
    };

var
 string_of_version_opt=
  function(v_opt)
   {return v_opt
            ?Pervasives["^"]
              (Odoc_messages["version"],
               Pervasives["^"](": ",Pervasives["^"](v_opt[1],"\n")))
            :"";
    };

var
 string_of_since_opt=
  function(s_opt)
   {return s_opt
            ?Pervasives["^"]
              (Odoc_messages["since"],
               Pervasives["^"](" ",Pervasives["^"](s_opt[1],"\n")))
            :"";
    };

var
 string_of_raised_exceptions=
  function(l)
   {if(l)
     {if(l[2])
       {return Pervasives["^"]
                (Odoc_messages["raises"],
                 Pervasives["^"]
                  ("\n",
                   Pervasives["^"]
                    ($$String["concat"]
                      ("",
                       List["map"]
                        (function(param)
                          {return Pervasives["^"]
                                   ("- ",
                                    Pervasives["^"]
                                     (param[1],
                                      Pervasives["^"]
                                       (" ",Pervasives["^"](string_of_text(param[2]),"\n"))));
                           },
                         l)),
                     "\n")));
        }
      else
       {var match=l[1];
        
        return Pervasives["^"]
                (Odoc_messages["raises"],
                 Pervasives["^"]
                  (" ",
                   Pervasives["^"]
                    (match[1],
                     Pervasives["^"]
                      (" ",Pervasives["^"](string_of_text(match[2]),"\n")))));
        }
      }
    else
     {return "";}
    };

var
 string_of_see=
  function(param)
   {var t=param[2];
    
    var see_ref=param[1];
    
    switch(see_ref[0])
     {case 0:var t_ref=/* :: */[0,/* Link */[15,see_ref[1],t],/* [] */0];
      case 1:
       var
        t_ref=
         /* :: */[0,/* Code */[1,see_ref[1]],/* :: */[0,[/* Raw */0," "],t]];
       
      case 2:
       var
        t_ref=
         /* :: */[0,
          /* Italic */[5,/* :: */[0,/* Raw */[0,see_ref[1]],/* [] */0]],
          /* :: */[0,[/* Raw */0," "],t]];
       
      }
    
    return string_of_text(t_ref);
    };

var
 string_of_sees=
  function(l)
   {return l
            ?l[2]
              ?Pervasives["^"]
                (Odoc_messages["see_also"],
                 Pervasives["^"]
                  ("\n",
                   Pervasives["^"]
                    ($$String["concat"]
                      ("",
                       List["map"]
                        (function(see)
                          {return Pervasives["^"]
                                   ("- ",Pervasives["^"](string_of_see(see),"\n"));
                           },
                         l)),
                     "\n")))
              :Pervasives["^"]
                (Odoc_messages["see_also"],
                 Pervasives["^"]
                  (" ",Pervasives["^"](string_of_see(l[1])," \n")))
            :"";
    };

var
 string_of_return_opt=
  function(return_opt)
   {return return_opt
            ?Pervasives["^"]
              (Odoc_messages["returns"],
               Pervasives["^"]
                (" ",Pervasives["^"](string_of_text(return_opt[1]),"\n")))
            :"";
    };

var
 string_of_info=
  function(i)
   {var M=Odoc_types;
    
    var match=i[7];
    
    var match$1=i[1];
    
    var $js;
    if(match$1)
     {var d=match$1[1];
      
      $js=
      CamlPrimitive["caml_equal"](d,[/* :: */0,[/* Raw */0,""],/* [] */0])
       ?""
       :Pervasives["^"](string_of_text(d),"\n");
      }
    else
     {$js="";}
    return Pervasives["^"]
            (match
              ?Pervasives["^"]
                (Odoc_messages["deprecated"],
                 Pervasives["^"]
                  ("! ",Pervasives["^"](string_of_text(match[1]),"\n")))
              :"",
             Pervasives["^"]
              ($js,
               Pervasives["^"]
                (string_of_author_list(i[2]),
                 Pervasives["^"]
                  (string_of_version_opt(i[3]),
                   Pervasives["^"]
                    (string_of_since_opt(i[5]),
                     Pervasives["^"]
                      (string_of_raised_exceptions(i[9]),
                       string_of_return_opt(i[10])))))));
    };

var
 apply_opt=
  function(f,v_opt){return v_opt?/* Some */[0,f(v_opt[1])]:/* None */0;};

var
 string_of_date=
  function($staropt$star,d)
   {var hour=$staropt$star?$staropt$star[1]:/* true */1;
    
    var add_0=function(s){return s["length"]<2?Pervasives["^"]("0",s):s;};
    
    var t=Unix["localtime"](d);
    
    return Pervasives["^"]
            (Pervasives["string_of_int"](t[6]+1900),
             Pervasives["^"]
              ("-",
               Pervasives["^"]
                (add_0(Pervasives["string_of_int"](t[5]+1)),
                 Pervasives["^"]
                  ("-",
                   Pervasives["^"]
                    (add_0(Pervasives["string_of_int"](t[4])),
                     hour
                      ?Pervasives["^"]
                        (" ",
                         Pervasives["^"]
                          (add_0(Pervasives["string_of_int"](t[3])),
                           Pervasives["^"]
                            (":",add_0(Pervasives["string_of_int"](t[2])))))
                      :"")))));
    };

var
 text_list_concat=
  function(sep,l)
   {if(l)
     {var q=l[2];
      
      var t=l[1];
      
      return q?Pervasives["@"](t,/* :: */[0,sep,text_list_concat(sep,q)]):t;
      }
    else
     {return /* [] */0;}
    };

var
 text_no_title_no_list=
  function(t)
   {var
     iter=
      function(t_ele)
       {var exit;
        
        if(typeof t_ele==="number")
         {switch(t_ele)
           {case 0:return [/* :: */0,/* Newline */0,/* [] */0];
            case 1:return /* [] */0;
            }}
        else
         {switch(t_ele[0])
           {case 4:
             return /* :: */[0,
                     /* Bold */[4,text_no_title_no_list(t_ele[1])],
                     /* [] */0];
             
            case 5:
             return /* :: */[0,
                     /* Italic */[5,text_no_title_no_list(t_ele[1])],
                     /* [] */0];
             
            case 6:
             return /* :: */[0,
                     /* Emphasize */[6,text_no_title_no_list(t_ele[1])],
                     /* [] */0];
             
            case 7:
             return /* :: */[0,
                     /* Center */[7,text_no_title_no_list(t_ele[1])],
                     /* [] */0];
             
            case 8:
             return /* :: */[0,
                     /* Left */[8,text_no_title_no_list(t_ele[1])],
                     /* [] */0];
             
            case 9:
             return /* :: */[0,
                     /* Right */[9,text_no_title_no_list(t_ele[1])],
                     /* [] */0];
             
            case 10:exit=61;
            case 11:exit=61;
            case 12:
             return /* :: */[0,
                     /* Block */[12,text_no_title_no_list(t_ele[1])],
                     /* [] */0];
             
            case 13:return text_no_title_no_list(t_ele[3]);
            case 14:return /* :: */[0,/* Latex */[14,t_ele[1]],/* [] */0];
            case 15:
             return /* :: */[0,
                     /* Link */[15,t_ele[1],text_no_title_no_list(t_ele[2])],
                     /* [] */0];
             
            case 17:
             return /* :: */[0,
                     /* Superscript */[17,text_no_title_no_list(t_ele[1])],
                     /* [] */0];
             
            case 18:
             return /* :: */[0,
                     /* Subscript */[18,text_no_title_no_list(t_ele[1])],
                     /* [] */0];
             
            case 19:
             return list_concat
                     ([/* Raw */0,", "],
                      List["map"]
                       (function(s)
                         {return /* Ref */[16,
                                  s,
                                  [/* Some */0,/* RK_module */0],
                                  /* None */0];
                          },
                        t_ele[1]));
             
            case 20:
             return /* :: */[0,
                     /* Custom */[20,t_ele[1],text_no_title_no_list(t_ele[2])],
                     /* [] */0];
             
            default:return /* :: */[0,t_ele,/* [] */0];}}
        
        switch(exit)
         {case 61:
           return /* :: */[0,
                   [/* Raw */0," "],
                   text_list_concat
                    ([/* Raw */0,", "],
                     List["map"](text_no_title_no_list,t_ele[1]))];
           
          }
        };
    
    return List["flatten"](List["map"](iter,t));
    };

var
 get_titles_in_text=
  function(t)
   {var l=[0,/* [] */0];
    
    var
     iter_ele=
      function(ele)
       {var exit;
        
        if(typeof ele==="number")
         {switch(ele){case 0:exit=53;case 1:exit=53;}}
        else
         {switch(ele[0])
           {case 0:exit=50;
            case 1:exit=50;
            case 2:exit=50;
            case 3:exit=50;
            case 10:exit=55;
            case 11:exit=55;
            case 13:
             return l[1]=
                    /* :: */[0,/* tuple */[0,ele[1],ele[2],ele[3]],l[1]],
                    0;
             
            case 14:exit=53;
            case 15:var t$1=ele[2];exit=52;
            case 16:exit=50;
            case 17:exit=56;
            case 18:exit=56;
            case 19:exit=53;
            case 20:return iter_text(ele[2]);
            case 21:exit=53;
            default:return iter_text(ele[1]);}}
        
        switch(exit)
         {case 53:return /* () */0;
          case 55:return List["iter"](iter_text,ele[1]);
          case 56:var t$1=ele[1];exit=52;
          case 50:return /* () */0;
          case 52:return iter_text(t$1);
          }
        };
    
    var iter_text=function(txt){return List["iter"](iter_ele,txt);};
    
    iter_text(t);
    return List["rev"](l[1]);
    };

var
 text_concat=
  function(sep,l)
   {var
     iter=
      function(param)
       {if(param)
         {var q=param[2];
          
          var last=param[1];
          
          return q?Pervasives["@"](last,Pervasives["@"](sep,iter(q))):last;
          }
        else
         {return /* [] */0;}
        };
    
    return iter(l);
    };

var
 get_before_dot=
  function(s)
   {try
     {var len=s["length"];
      
      var n=$$String["index"](s,46);
      
      if(n+1>=len)
       {return /* tuple */[0,/* true */1,s,""];}
      else
       {var match=s["charCodeAt"](n+1);
        
        var exit;
        
        var switcher=-9+match;
        
        if(!(4<switcher>>>0))
         {if(1<-2+switcher>>>0){exit=43;}else{exit=44;}}
        else
         {if(switcher!==23){exit=44;}else{exit=43;}}
        
        switch(exit)
         {case 44:
           var match$1=get_before_dot($$String["sub"](s,n+1,len-n-1));
           
           return /* tuple */[0,
                   match$1[1],
                   Pervasives["^"]($$String["sub"](s,0,n+1),match$1[2]),
                   match$1[3]];
           
          case 43:
           return /* tuple */[0,
                   /* true */1,
                   $$String["sub"](s,0,n+1),
                   $$String["sub"](s,n+1,len-n-1)];
           
          }
        }
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* tuple */[0,/* false */0,s,""];}
      else
       {throw exn;}
      }
    };

var
 first_sentence_text=
  function(t)
   {if(t)
     {var q=t[2];
      
      var match=first_sentence_text_ele(t[1]);
      
      var ele3_opt=match[3];
      
      var ele2=match[2];
      
      var stop=match[1];
      
      if(stop)
       {return /* tuple */[0,
                stop,
                /* :: */[0,ele2,/* [] */0],
                ele3_opt?/* :: */[0,ele3_opt[1],q]:q];
        }
      else
       {var match$1=first_sentence_text(q);
        
        return /* tuple */[0,
                match$1[1],
                /* :: */[0,ele2,match$1[2]],
                match$1[3]];
        }
      }
    else
     {return [/* tuple */0,/* false */0,/* [] */0,/* [] */0];}
    };

var
 first_sentence_text_ele=
  function(text_ele)
   {var exit;
    
    if(typeof text_ele==="number")
     {switch(text_ele)
       {case 0:
         return [/* tuple */0,
                 /* true */1,
                 [/* Raw */0,""],
                 [/* Some */0,/* Newline */0]];
         
        }}
    else
     {switch(text_ele[0])
       {case 0:
         var match=get_before_dot(text_ele[1]);
         
         return /* tuple */[0,
                 match[1],
                 /* Raw */[0,match[2]],
                 /* Some */[0,/* Raw */[0,match[3]]]];
         
        case 1:exit=38;
        case 2:exit=38;
        case 3:exit=38;
        case 4:
         var match$1=first_sentence_text(text_ele[1]);
         
         return /* tuple */[0,
                 match$1[1],
                 /* Bold */[4,match$1[2]],
                 /* Some */[0,/* Bold */[4,match$1[3]]]];
         
        case 5:
         var match$2=first_sentence_text(text_ele[1]);
         
         return /* tuple */[0,
                 match$2[1],
                 /* Italic */[5,match$2[2]],
                 /* Some */[0,/* Italic */[5,match$2[3]]]];
         
        case 6:
         var match$3=first_sentence_text(text_ele[1]);
         
         return /* tuple */[0,
                 match$3[1],
                 /* Emphasize */[6,match$3[2]],
                 /* Some */[0,/* Emphasize */[6,match$3[3]]]];
         
        case 7:
         var match$4=first_sentence_text(text_ele[1]);
         
         return /* tuple */[0,
                 match$4[1],
                 /* Center */[7,match$4[2]],
                 /* Some */[0,/* Center */[7,match$4[3]]]];
         
        case 8:
         var match$5=first_sentence_text(text_ele[1]);
         
         return /* tuple */[0,
                 match$5[1],
                 /* Left */[8,match$5[2]],
                 /* Some */[0,/* Left */[8,match$5[3]]]];
         
        case 9:
         var match$6=first_sentence_text(text_ele[1]);
         
         return /* tuple */[0,
                 match$6[1],
                 /* Right */[9,match$6[2]],
                 /* Some */[0,/* Right */[9,match$6[3]]]];
         
        case 12:
         var match$7=first_sentence_text(text_ele[1]);
         
         return /* tuple */[0,
                 match$7[1],
                 /* Block */[12,match$7[2]],
                 /* Some */[0,/* Block */[12,match$7[3]]]];
         
        case 13:
         var l_opt=text_ele[2];
         
         var n=text_ele[1];
         
         var match$8=first_sentence_text(text_ele[3]);
         
         return /* tuple */[0,
                 match$8[1],
                 /* Title */[13,n,l_opt,match$8[2]],
                 /* Some */[0,/* Title */[13,n,l_opt,match$8[3]]]];
         
        case 20:exit=40;
        case 21:exit=40;
        default:exit=39;}}
    
    switch(exit)
     {case 38:return /* tuple */[0,/* false */0,text_ele,/* None */0];
      case 39:return /* tuple */[0,/* false */0,text_ele,/* None */0];
      case 40:return /* tuple */[0,/* false */0,text_ele,/* None */0];
      }
    };

var
 first_sentence_of_text=
  function(t){var match=first_sentence_text(t);return match[2];};

var
 first_sentence_and_rest_of_text=
  function(t)
   {var match=first_sentence_text(t);return /* tuple */[0,match[2],match[3]];};

var
 remove_ending_newline=
  function(s)
   {var len=s["length"];
    
    if(len<=0)
     {return s;}
    else
     {var match=s["charCodeAt"](len-1);
      
      return match!==10?s:$$String["sub"](s,0,len-1);
      }
    };

var
 search_string_backward=
  function(pat)
   {var lenp=pat["length"];
    
    var
     iter=
      function(s)
       {var len=s["length"];
        
        var match=CamlPrimitive["caml_int_compare"](len,lenp);
        
        if(match!==-1)
         {if(match!==0)
           {var pos=len-lenp;
            
            var s2=$$String["sub"](s,pos,lenp);
            
            return CamlPrimitive["caml_string_equal"](s2,pat)
                    ?pos
                    :iter($$String["sub"](s,0,pos));
            }
          else
           {if(CamlPrimitive["caml_string_equal"](pat,s))
             {return 0;}
            else
             {throw CamlPrimitive["caml_global_data"]["Not_found"];}
            }
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    return function(s){return iter(s);};
    };

var
 create_index_lists=
  function(elements,string_of_ele)
   {var
     f=
      function(current,acc0,acc1,acc2,param)
       {if(param)
         {var q=param[2];
          
          var ele=param[1];
          
          var s=string_of_ele(ele);
          
          switch(s)
           {case "":
             return f
                     (current,
                      acc0,
                      acc1,
                      Pervasives["@"](acc2,/* :: */[0,ele,/* [] */0]),
                      q);
             
            default:
             var first=Char["uppercase"](s["charCodeAt"](0));
             
             return 25<-65+first>>>0
                     ?f
                       (current,
                        Pervasives["@"](acc0,/* :: */[0,ele,/* [] */0]),
                        acc1,
                        acc2,
                        q)
                     :current===first
                       ?f
                         (current,
                          acc0,
                          acc1,
                          Pervasives["@"](acc2,/* :: */[0,ele,/* [] */0]),
                          q)
                       :f
                         (first,
                          acc0,
                          Pervasives["@"](acc1,/* :: */[0,acc2,/* [] */0]),
                          /* :: */[0,ele,/* [] */0],
                          q);
             }
          }
        else
         {return Pervasives["@"]
                  (/* :: */[0,acc0,acc1],/* :: */[0,acc2,/* [] */0]);
          }
        };
    
    return f(95,/* [] */0,/* [] */0,/* [] */0,elements);
    };

var is_optional=Btype["is_optional"];

var label_name=Btype["label_name"];

var
 remove_option=
  function(typ)
   {var
     iter=
      function(t)
       {var exit;
        
        if(typeof t==="number")
         {switch(t){}}
        else
         {switch(t[0])
           {case 3:
             var match=t[2];
             
             var exit$1;
             
             if(match)
              {if(match[2])
                {exit$1=3;}
               else
                {if(Path["same"](t[1],Predef["path_option"]))
                  {return match[1][1];}
                 else
                  {exit$1=3;}
                 }
               }
             else
              {exit$1=3;}
             
             switch(exit$1){case 3:exit=1;}
             
            case 6:exit=4;
            case 7:exit=4;
            default:exit=1;}}
        
        switch(exit){case 4:return iter(t[1][1]);case 1:return t;}
        };
    
    return /* record */[0,iter(typ[1]),typ[2],typ[3]];
    };

module["exports"]=
{"no_blanks":no_blanks,
 "input_file_as_string":input_file_as_string,
 "split_with_blanks":split_with_blanks,
 "string_of_longident":string_of_longident,
 "get_fields":get_fields,
 "string_of_text":string_of_text,
 "string_of_author_list":string_of_author_list,
 "string_of_version_opt":string_of_version_opt,
 "string_of_since_opt":string_of_since_opt,
 "string_of_raised_exceptions":string_of_raised_exceptions,
 "string_of_see":string_of_see,
 "string_of_sees":string_of_sees,
 "string_of_return_opt":string_of_return_opt,
 "string_of_info":string_of_info,
 "apply_opt":apply_opt,
 "string_of_date":string_of_date,
 "first_sentence_of_text":first_sentence_of_text,
 "first_sentence_and_rest_of_text":first_sentence_and_rest_of_text,
 "text_no_title_no_list":text_no_title_no_list,
 "text_concat":text_concat,
 "get_titles_in_text":get_titles_in_text,
 "create_index_lists":create_index_lists,
 "remove_ending_newline":remove_ending_newline,
 "search_string_backward":search_string_backward,
 "remove_option":remove_option,
 "is_optional":is_optional,
 "label_name":label_name};

