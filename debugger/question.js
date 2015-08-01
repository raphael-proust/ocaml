var Pervasives=require("Pervasives");
var Primitives=require("Primitives");
var Lexer=require("Lexer");
var Lexing=require("Lexing");
var Input_handling=require("Input_handling");

var
 yes_or_no=
  function(message)
   {if(Input_handling["interactif"][1])
     {var old_prompt=Input_handling["current_prompt"][1];
      
      try
       {Input_handling["current_prompt"][1]=
        Pervasives["^"](message," ? (y or n) "),
        0;
        var
         ask=
          function(param)
           {Input_handling["resume_user_input"](0);
            var
             line=
              Primitives["string_trim"]
               (Lexer["line"]
                 (Lexing["from_function"](Input_handling["read_user_input"])));
            
            Input_handling["stop_user_input"](0);
            if(line["length"]>0){var match=line[0];}else{var match=32;}
            
            if(match!=110)
             {if(match!=121)
               {Pervasives["print_string"]("Please answer y or n.");
                Pervasives["print_newline"](0);
                return ask(0);
                }
              else
               {return 1;}
              }
            else
             {return 0;}
            };
        
        var answer=ask(0);
        
        Input_handling["current_prompt"][1]=old_prompt,0;
        return answer;
        }
      catch(x)
       {Input_handling["current_prompt"][1]=old_prompt,0;
        Input_handling["stop_user_input"](0);
        throw x;
        }
      }
    else
     {return 0;}
    };


module["exports"]={"yes_or_no":yes_or_no};

