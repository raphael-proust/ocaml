// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 chr=
  function(n)
   {if(n<0||n>255)
     {return Pervasives["invalid_arg"]("Char.chr");}
    else
     {return n;}
    };

var
 escaped=
  function(c)
   {var exit;
    
    if(c!==39)
     {if(c!==92)
       {if(c>=14)
         {exit=7;}
        else
         {switch(c)
           {case 0:exit=7;
            case 1:exit=7;
            case 2:exit=7;
            case 3:exit=7;
            case 4:exit=7;
            case 5:exit=7;
            case 6:exit=7;
            case 7:exit=7;
            case 8:return "\b";
            case 9:return "\t";
            case 10:return "\n";
            case 11:exit=7;
            case 12:exit=7;
            case 13:return "\r";
            }
          }
        }
      else
       {return "\\";}
      }
    else
     {return "\'";}
    
    switch(exit)
     {case 7:
       if(CamlPrimitive["caml_is_printable"](c))
        {var s=CamlPrimitive["caml_create_string"](1);s[0]=c;return s;}
       else
        {var n=c;
         
         var s$1=CamlPrimitive["caml_create_string"](4);
         
         s$1[0]=92;
         s$1[1]=48+n/100;
         s$1[2]=48+n/10%10;
         s$1[3]=48+n%10;
         return s$1;
         }
       
      }
    };

var
 lowercase=
  function(c)
   {if(c>=65&&c<=90||c>=192&&c<=214||c>=216&&c<=222)
     {return c+32;}
    else
     {return c;}
    };

var
 uppercase=
  function(c)
   {if(c>=97&&c<=122||c>=224&&c<=246||c>=248&&c<=254)
     {return c-32;}
    else
     {return c;}
    };

var compare=function(c1,c2){return c1-c2;};

module["exports"]=
{"chr":chr,
 "escaped":escaped,
 "lowercase":lowercase,
 "uppercase":uppercase,
 "compare":compare};

