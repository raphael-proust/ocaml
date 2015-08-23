// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Odoc_global=require("./odoc_global.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Odoc_types=require("./odoc_types.js");
var Odoc_cross=require("./odoc_cross.js");
var Printf=require("./printf.js");
var Odoc_merge=require("./odoc_merge.js");
var Odoc_see_lexer=require("./odoc_see_lexer.js");
var Lexing=require("./lexing.js");
var Odoc_comments_global=require("./odoc_comments_global.js");
var Str=require("./str.js");
var Odoc_lexer=require("./odoc_lexer.js");
var Odoc_misc=require("./odoc_misc.js");
var Odoc_text=require("./odoc_text.js");
var Odoc_parser=require("./odoc_parser.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Odoc_messages=require("./odoc_messages.js");


var simple_blank="[ \r\t\f]";

var
 Info_retriever=
  function(MyTexter)
   {var
     create_see=
      function(s)
       {try
         {var lexbuf=Lexing["from_string"](s);
          
          var match=Odoc_parser["see_info"](Odoc_see_lexer["main"],lexbuf);
          
          return /* tuple */[0,match[1],MyTexter[1](match[2])]}
        catch(exn)
         {if(exn[1]===Odoc_text["Text_syntax"])
           {throw [0,
                   CamlPrimitive["caml_global_data"]["Failure"],
                   Odoc_messages["text_parse_error"](exn[2],exn[3],exn[4])]}
          else
           {throw [0,
                   CamlPrimitive["caml_global_data"]["Failure"],
                   Pervasives["^"]("Unknown error while parsing @see tag: ",s)]}
          }
        };
    
    var
     retrieve_info=
      function(fun_lex,file,s)
       {try
         {var match=Odoc_comments_global["init"](/* () */0);
          
          Odoc_lexer["comments_level"][1]=0;
          var lexbuf=Lexing["from_string"](s);
          
          var match$1=Odoc_parser["main"](fun_lex,lexbuf);
          
          if(match$1)
           {var match$2=match$1[1];
            
            var remain_opt=match$2[2];
            
            var desc=match$2[1];
            
            var mem_nb_chars=Odoc_comments_global["nb_chars"][1];
            
            var match$3;
            if(remain_opt)
             {var lexbuf2=Lexing["from_string"](remain_opt[1]);
              
              match$3=
              Odoc_parser["info_part2"](Odoc_lexer["elements"],lexbuf2);
              }
            else
             {match$3=/* () */0;}
            
            switch(desc)
             {case "":var $js=/* None */0;break;
              default:var $js=/* Some */[0,MyTexter[1](desc)];}
            var match$4=Odoc_comments_global["deprecated"][1];
            
            var match$5=Odoc_comments_global["return_value"][1];
            
            return /* tuple */[0,
                    mem_nb_chars,
                    /* Some */[0,
                     /* record */[0,
                      $js,
                      Odoc_comments_global["authors"][1],
                      Odoc_comments_global["version"][1],
                      List["map"](create_see,Odoc_comments_global["sees"][1]),
                      Odoc_comments_global["since"][1],
                      Odoc_merge["merge_before_tags"]
                       (List["map"]
                         (function(param)
                           {return /* tuple */[0,param[1],MyTexter[1](param[2])]},
                          Odoc_comments_global["before"][1])),
                      match$4?/* Some */[0,MyTexter[1](match$4[1])]:/* None */0,
                      List["map"]
                       (function(param)
                         {return /* tuple */[0,param[1],MyTexter[1](param[2])]},
                        Odoc_comments_global["params"][1]),
                      List["map"]
                       (function(param)
                         {return /* tuple */[0,param[1],MyTexter[1](param[2])]},
                        Odoc_comments_global["raised_exceptions"][1]),
                      match$5?/* Some */[0,MyTexter[1](match$5[1])]:/* None */0,
                      List["map"]
                       (function(param)
                         {return /* tuple */[0,param[1],MyTexter[1](param[2])]},
                        Odoc_comments_global["customs"][1])]]]}
          else
           {return [/* tuple */0,0,/* None */0]}
          }
        catch(exn)
         {return exn[1]===CamlPrimitive["caml_global_data"]["Failure"]
                  ?(Odoc_global["errors"][0]++,
                    Printf["eprintf"]
                     ([/* Format */0,
                       [/* String_literal */11,
                        "File ",
                        [/* Caml_string */3,
                         /* No_padding */0,
                         [/* String_literal */11,
                          ", line ",
                          [/* Int */4,
                           /* Int_d */0,
                           /* No_padding */0,
                           /* No_precision */0,
                           [/* String_literal */11,
                            ":\n",
                            [/* String */2,
                             /* No_padding */0,
                             [/* Char_literal */12,
                              10,
                              [/* Flush */10,/* End_of_format */0]]]]]]]],
                       "File %S, line %d:\n%s\n%!"],
                      file,
                      Odoc_lexer["line_number"][1]+1,
                      exn[2]),
                    [/* tuple */0,0,/* None */0])
                  :exn[1]===Odoc_text["Text_syntax"]
                    ?(Odoc_global["errors"][0]++,
                      Pervasives["prerr_endline"]
                       (Pervasives["^"]
                         (file,
                          Pervasives["^"]
                           (" : ",
                            Odoc_messages["text_parse_error"](exn[2],exn[3],exn[4])))),
                      [/* tuple */0,0,/* None */0])
                    :(Odoc_global["errors"][0]++,
                      Pervasives["prerr_endline"]
                       (Pervasives["^"]
                         (file,
                          Pervasives["^"]
                           (" : ",Pervasives["^"](Odoc_messages["parse_error"],"\n")))),
                      [/* tuple */0,0,/* None */0])}
        };
    
    var
     nothing_before_simple_comment=
      function(s)
       {try
         {var pos=Str["search_forward"](Str["regexp"]("(\\*"),s,0);
          
          var next_char=s["length"]>=pos+1?s["charCodeAt"](pos+2):95;
          
          var s2=$$String["sub"](s,0,pos);
          
          var $js;
          try
           {var
             match=
              Str["search_forward"]
               (Str["regexp"]
                 (Pervasives["^"]
                   ("['\n']",Pervasives["^"](simple_blank,"*['\n']"))),
                s2,
                0);
            
            $js=/* false */0;
            }
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {$js=/* true */1;}
            else
             {throw exn}
            }
          return next_char!==42&&$js}
        catch(exn$1)
         {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
           {return /* false */0}
          else
           {throw exn$1}
          }
        };
    
    var
     blank_line=
      function(s)
       {try
         {var
           match=
            Str["search_forward"]
             (Str["regexp"]
               (Pervasives["^"]
                 ("['\n']",Pervasives["^"](simple_blank,"*['\n']"))),
              s,
              0);
          
          return /* true */1}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {return /* false */0}
          else
           {throw exn}
          }
        };
    
    var
     retrieve_info_special=
      function(file,s){return retrieve_info(Odoc_lexer["main"],file,s)};
    
    var
     retrieve_info_simple=
      function(file,s)
       {var match=Odoc_comments_global["init"](/* () */0);
        
        Odoc_lexer["comments_level"][1]=0;
        var lexbuf=Lexing["from_string"](s);
        
        var match$1=Odoc_parser["main"](Odoc_lexer["simple"],lexbuf);
        
        return match$1
                ?/* tuple */[0,
                  Odoc_comments_global["nb_chars"][1],
                  /* Some */[0,Odoc_types["dummy_info"]]]
                :[/* tuple */0,0,/* None */0]};
    
    var
     blank_line_outside_simple=
      function(file,s)
       {var
         iter=
          function(s2)
           {var match=retrieve_info_simple(file,s2);
            
            var len=match[1];
            
            if(match[2])
             {try
               {var
                 pos=
                  Str["search_forward"](Str["regexp_string"]("(*"),s2,0);
                
                var s_before=$$String["sub"](s2,0,pos);
                
                var s_after=$$String["sub"](s2,len,s2["length"]-len);
                
                return blank_line(s_before)||iter(s_after)}
              catch(exn)
               {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                 {return /* false */0}
                else
                 {throw exn}
                }
              }
            else
             {return blank_line(s2)}
            };
        
        return iter(s)};
    
    var
     retrieve_first_info_simple=
      function($staropt$star,file,s)
       {var strict=$staropt$star?$staropt$star[1]:/* true */1;
        
        var match=retrieve_info_simple(file,s);
        
        var match$1=match[2];
        
        return match$1
                ?!strict||nothing_before_simple_comment(s)
                  ?/* tuple */[0,match[1],/* Some */[0,match$1[1]]]
                  :[/* tuple */0,0,/* None */0]
                :[/* tuple */0,0,/* None */0]};
    
    var
     retrieve_last_info_simple=
      function(file,s)
       {var
         f=
          function(cur_len,cur_d)
           {try
             {var s2=$$String["sub"](s,cur_len,s["length"]-cur_len);
              
              var match=retrieve_info_simple(file,s2);
              
              var match$1=match[2];
              
              var len=match[1];
              
              return match$1
                      ?f(len+cur_len,/* Some */[0,match$1[1]])
                      :/* tuple */[0,cur_len+len,cur_d]}
            catch(exn){return /* tuple */[0,cur_len,cur_d]}
            };
        
        return f(0,/* None */0)};
    
    var
     retrieve_last_special_no_blank_after=
      function(file,s)
       {var
         f=
          function(cur_len,cur_d)
           {try
             {var s2=$$String["sub"](s,cur_len,s["length"]-cur_len);
              
              var match=retrieve_info_special(file,s2);
              
              var match$1=match[2];
              
              var len=match[1];
              
              return match$1
                      ?f(len+cur_len,/* Some */[0,match$1[1]])
                      :/* tuple */[0,cur_len+len,cur_d]}
            catch(exn){return /* tuple */[0,cur_len,cur_d]}
            };
        
        return f(0,/* None */0)};
    
    var
     all_special=
      function(file,s)
       {var
         iter=
          function(acc,n,s2)
           {var match=retrieve_info_special(file,s2);
            
            var match$1=match[2];
            
            if(match$1)
             {var n2=match[1];
              
              var new_s=$$String["sub"](s2,n2,s2["length"]-n2);
              
              return iter
                      (Pervasives["@"](acc,/* :: */[0,match$1[1],/* [] */0]),
                       n+n2,
                       new_s)}
            else
             {return /* tuple */[0,n,acc]}
            };
        
        return iter(/* [] */0,0,s)};
    
    var
     just_after_special=
      function(file,s)
       {var match=retrieve_info_special(file,s);
        
        var match$1=match[2];
        
        if(match$1)
         {var d=match$1[1];
          
          var len=match[1];
          
          var match$2=retrieve_info_simple(file,$$String["sub"](s,0,len));
          
          if(match$2[2])
           {return [/* tuple */0,0,/* None */0]}
          else
           {try
             {var pos=Str["search_forward"](Str["regexp_string"]("(**"),s,0);
              
              return blank_line($$String["sub"](s,0,pos))||
                      CamlPrimitive["caml_equal"]
                       (d[1],[/* Some */0,[/* :: */0,[/* Raw */0,"/*"],/* [] */0]])
                      ?[/* tuple */0,0,/* None */0]
                      :/* tuple */[0,len,/* Some */[0,d]]}
            catch(exn)
             {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
               {return [/* tuple */0,0,/* None */0]}
              else
               {throw exn}
              }
            }
          }
        else
         {return [/* tuple */0,0,/* None */0]}
        };
    
    var first_special=function(file,s){return retrieve_info_special(file,s)};
    
    var
     get_comments=
      function(f_create_ele,file,s)
       {var match=all_special(file,s);
        
        var special_coms=match[2];
        
        var len=match[1];
        
        var match$1=List["rev"](special_coms);
        
        var match$2;
        if(match$1)
         {var h=match$1[1];
          
          match$2=
          blank_line_outside_simple
            (file,$$String["sub"](s,len,s["length"]-len))||
           CamlPrimitive["caml_equal"]
            (h[1],[/* Some */0,[/* :: */0,[/* Raw */0,"/*"],/* [] */0]])
           ?/* tuple */[0,/* None */0,special_coms]
           :/* tuple */[0,/* Some */[0,h],List["rev"](match$1[2])];
          }
        else
         {match$2=[/* tuple */0,/* None */0,/* [] */0];}
        
        var
         ele_comments=
          List["fold_left"]
           (function(acc,sc)
             {var match$3=sc[1];
              
              return match$3
                      ?Pervasives["@"]
                        (acc,/* :: */[0,f_create_ele(match$3[1]),/* [] */0])
                      :acc},
            /* [] */0,
            match$2[2]);
        
        return /* tuple */[0,match$2[1],ele_comments]};
    
    return [0,
            create_see,
            retrieve_info,
            nothing_before_simple_comment,
            blank_line,
            retrieve_info_special,
            retrieve_info_simple,
            blank_line_outside_simple,
            retrieve_first_info_simple,
            retrieve_last_info_simple,
            retrieve_last_special_no_blank_after,
            all_special,
            just_after_special,
            first_special,
            get_comments]};

var $$let=Odoc_text["Texter"];

var Basic_info_retriever=Info_retriever([0,$$let[1]]);

var
 info_of_string=
  function(s)
   {var
     dummy=
      [/* record */0,
       /* None */0,
       /* [] */0,
       /* None */0,
       /* [] */0,
       /* None */0,
       /* [] */0,
       /* None */0,
       /* [] */0,
       /* [] */0,
       /* None */0,
       /* [] */0];
    
    var
     s2=
      Printf["sprintf"]
       ([/* Format */0,
         [/* String_literal */11,
          "(** ",
          [/* String */2,
           /* No_padding */0,
           [/* String_literal */11," *)",/* End_of_format */0]]],
         "(** %s *)"],
        s);
    
    var match=Basic_info_retriever[13]("-",s2);
    
    var i_opt=match[2];
    
    return i_opt?i_opt[1]:dummy};

var
 info_of_comment_file=
  function(modlist,f)
   {try
     {var s=Odoc_misc["input_file_as_string"](f);
      
      var i=info_of_string(s);
      
      return Odoc_cross["assoc_comments_info"]("",modlist,i)}
    catch(exn)
     {if(exn[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
       {return Pervasives["failwith"](exn[2])}
      else
       {throw exn}
      }
    };

module["exports"]=
{"simple_blank":simple_blank,
 "Basic_info_retriever":
 [0,
  Basic_info_retriever[7],
  Basic_info_retriever[11],
  Basic_info_retriever[12],
  Basic_info_retriever[13],
  Basic_info_retriever[14]],
 "info_of_string":info_of_string,
 "info_of_comment_file":info_of_comment_file};

