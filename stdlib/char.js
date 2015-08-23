// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 chr=
  function(n){return n<0||n>255?Pervasives["invalid_arg"]("Char.chr"):n};

var
 escaped=
  function(c)
   {var exit;
    
    if(c!==39)
     {if(c!==92)
       {if(c>=14)
         {exit=5;}
        else
         {switch(c)
           {case 0:exit=5;break;
            case 1:exit=5;break;
            case 2:exit=5;break;
            case 3:exit=5;break;
            case 4:exit=5;break;
            case 5:exit=5;break;
            case 6:exit=5;break;
            case 7:exit=5;break;
            case 8:return "\\b";
            case 9:return "\\t";
            case 10:return "\\n";
            case 11:exit=5;break;
            case 12:exit=5;break;
            case 13:return "\\r"
            }
          }
        }
      else
       {return "\\\\"}
      }
    else
     {return "\\'"}
    
    switch(exit)
     {case 5:
       if(CamlPrimitive["caml_is_printable"](c))
        {return CamlPrimitive["caml_string_of_char_array"]([/* array */0,c])}
       else
        {var n=c;
         
         return CamlPrimitive["caml_string_of_char_array"]
                 ([/* array */0,92,48+n/100,48+n/10%10,48+n%10])}
       break
      }
    };

var
 lowercase=
  function(c){return c>=65&&c<=90||c>=192&&c<=214||c>=216&&c<=222?c+32:c};

var
 uppercase=
  function(c){return c>=97&&c<=122||c>=224&&c<=246||c>=248&&c<=254?c-32:c};

var compare=function(c1,c2){return c1-c2};

module["exports"]=
{"chr":chr,
 "escaped":escaped,
 "lowercase":lowercase,
 "uppercase":uppercase,
 "compare":compare};

