// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Primitives=require("./primitives.js");
var Lexer=require("./lexer.js");
var Lexing=require("./lexing.js");
var Input_handling=require("./input_handling.js");


var
 yes_or_no=
  function(message)
   {if(Input_handling["interactif"][1])
     {var old_prompt=Input_handling["current_prompt"][1];
      
      try
       {Input_handling["current_prompt"][1]=
        Pervasives["^"](message," ? (y or n) ");
        var
         ask=
          function(param)
           {Input_handling["resume_user_input"](/* () */0);
            var
             line=
              Primitives["string_trim"]
               (Lexer["line"]
                 (Lexing["from_function"](Input_handling["read_user_input"])));
            
            Input_handling["stop_user_input"](/* () */0);
            var match=line["length"]>0?line["charCodeAt"](0):32;
            
            return match!==110
                    ?match!==121
                      ?(Pervasives["print_string"]("Please answer y or n."),
                        Pervasives["print_newline"](/* () */0),
                        ask(/* () */0))
                      :/* true */1
                    :/* false */0};
        
        var answer=ask(/* () */0);
        
        Input_handling["current_prompt"][1]=old_prompt;
        return answer}
      catch(x)
       {Input_handling["current_prompt"][1]=old_prompt;
        Input_handling["stop_user_input"](/* () */0);
        throw x}
      }
    else
     {return /* false */0}
    };

module["exports"]={"yes_or_no":yes_or_no};

