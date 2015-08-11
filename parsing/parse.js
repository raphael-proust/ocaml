// Generated CODE, PLEASE EDIT WITH CARE 

var Parser=require("Parser");
var Docstrings=require("Docstrings");
var Syntaxerr=require("Syntaxerr");
var Lexer=require("Lexer");
var Parsing=require("Parsing");
var Location=require("Location");


var
 skip_phrase=
  function(lexbuf)
   {try
     {var match=Lexer["token"](lexbuf);
      
      var exit;
      
      if("unknown primitive:isint")
       {if(match!=25){if(match!=83){exit=20;}else{exit=19;}}else{exit=19;}}
      else
       {exit=20;}
      
      switch(exit){case 20:return skip_phrase(lexbuf);case 19:return 0;}
      }
    catch(exn)
     {var exit$1;
      
      if(exn[1]=Lexer["Error"])
       {var $js=exn[2];
        if(typeof $js=="number")
         {switch($js){}}
        else
         {switch($js[0])
           {case 1:exit$1=17;
            case 4:exit$1=17;
            case 5:exit$1=17;
            default:exit$1=18;}}
        }
      else
       {exit$1=17;}
      
      switch(exit$1){case 18:return skip_phrase(lexbuf);case 17:throw exn;}
      }
    };

var
 maybe_skip_phrase=
  function(lexbuf)
   {if
     (Parsing["is_current_lookahead"](83)||
      Parsing["is_current_lookahead"](25))
     {return 0;}
    else
     {return skip_phrase(lexbuf);}
    };

var
 wrap=
  function(parsing_fun,lexbuf)
   {try
     {Docstrings["init"](0);
      Lexer["init"](0);
      var ast=parsing_fun(Lexer["token"],lexbuf);
      
      Parsing["clear_parser"](0);
      Docstrings["warn_bad_docstrings"](0);
      return ast;
      }
    catch(err)
     {var exit;
      
      if(err[1]=Lexer["Error"])
       {var $js=err[2];
        if(typeof $js=="number")
         {switch($js){}}
        else
         {switch($js[0])
           {case 0:
             if("unknown primitive:caml_string_equal")
              {skip_phrase(lexbuf);throw err;}
             else
              {exit=13;}
             
            default:exit=13;}}
        }
      else
       {exit=13;}
      
      switch(exit)
       {case 13:
         if(err[1]=Syntaxerr["Error"])
          {if("unknown primitive:caml_string_equal")
            {maybe_skip_phrase(lexbuf);throw err;}
           else
            {"unknown block:(exit 12)";}
           }
         else
          {"unknown block:(exit 12)";}
         
        case 12:
         if(err=Parsing["Parse_error"])
          {"unknown block:(exit 10)";}
         else
          {if(err=Syntaxerr["Escape_error"])
            {"unknown block:(exit 10)";}
           else
            {throw err;}
           }
         
        case 10:
         var loc=Location["curr"](lexbuf);
         
         if("unknown primitive:caml_string_equal")
          {maybe_skip_phrase(lexbuf)}
         else
          {}
         
         throw [0,Syntaxerr["Error"],/* Other */[5,loc]];
         
        }
      }
    };

var implementation=wrap(Parser["implementation"]);

var $$interface=wrap(Parser["interface"]);

var toplevel_phrase=wrap(Parser["toplevel_phrase"]);

var use_file=wrap(Parser["use_file"]);

var core_type=wrap(Parser["parse_core_type"]);

var expression=wrap(Parser["parse_expression"]);

var pattern=wrap(Parser["parse_pattern"]);

module["exports"]=
{"implementation":implementation,
 "interface":$$interface,
 "toplevel_phrase":toplevel_phrase,
 "use_file":use_file,
 "core_type":core_type,
 "expression":expression,
 "pattern":pattern};

