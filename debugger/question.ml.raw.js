var Pervasives=require("Pervasives");
var Primitives=require("Primitives");
var Lexer=require("Lexer");
var Lexing=require("Lexing");
var Input_handling=require("Input_handling");
var
 yes_or_no=
  function(message)
   {var $js=Input_handling["interactif"][1];
    if($js)
     {var old_prompt=Input_handling["current_prompt"][1];
      try
       {var $js$1=Pervasives["^"];
        var $js$2=$js$1(message," ? (y or n) ");
        Input_handling["current_prompt"][1]=$js$2,0;
        var
         ask=
          function(param)
           {var $js$3=Input_handling["resume_user_input"];
            $js$3(0);
            var $js$4=Primitives["string_trim"];
            var $js$5=Lexer["line"];
            var $js$6=Lexing["from_function"];
            var $js$7=$js$6(Input_handling["read_user_input"]);
            var $js$8=$js$5($js$7);
            var line=$js$4($js$8);
            var $js$9=Input_handling["stop_user_input"];
            $js$9(0);
            var $js$10=line["length"]>0;
            if($js$10){var match=line[0]}else{var match=32}
            var $js$11=match!=110;
            if($js$11)
             {var $js$12=match!=121;
              if($js$12)
               {var $js$13=Pervasives["print_string"];
                $js$13("Please answer y or n.");
                var $js$14=Pervasives["print_newline"];
                $js$14(0);
                return ask(0)}
              else
               {return 1}}
            else
             {return 0}};
        var answer=ask(0);
        Input_handling["current_prompt"][1]=old_prompt,0;
        return answer}
      catch(x)
       {Input_handling["current_prompt"][1]=old_prompt,0;
        var $js$3=Input_handling["stop_user_input"];
        $js$3(0);
        return "unknown primitive:reraise"}}
    else
     {return 0}};
module["exports"]={"yes_or_no":yes_or_no};
