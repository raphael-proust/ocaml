var Pervasives=require("Pervasives");
var
 chr=
  function(n)
   {var $js=n<0||n>255;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Char.chr")}
    else
     {return n}};
var
 escaped=
  function(c)
   {var $js=c!=39;
    if($js)
     {var $js$1=c!=92;
      if($js$1)
       {var $js$2=c>=14;
        if($js$2)
         {var exit=7}
        else
         {var $js$3=c;
          var $js$4=$js$3[0];
          if($js$4==0)
           {var exit=7}
          else
           if($js$4==1)
            {var exit=7}
           else
            if($js$4==2)
             {var exit=7}
            else
             if($js$4==3)
              {var exit=7}
             else
              if($js$4==4)
               {var exit=7}
              else
               if($js$4==5)
                {var exit=7}
               else
                if($js$4==6)
                 {var exit=7}
                else
                 if($js$4==7)
                  {var exit=7}
                 else
                  if($js$4==8)
                   {return "\b"}
                  else
                   if($js$4==9)
                    {return "\t"}
                   else
                    if($js$4==10)
                     {return "\n"}
                    else
                     if($js$4==11)
                      {var exit=7}
                     else
                      if($js$4==12){var exit=7}else if($js$4==13){return "\r"}}}
      else
       {return "\\"}}
    else
     {return "\'"}
    switch(exit)
     {case 7:
       var $js$5="unknown primitive:caml_is_printable";
       if($js$5)
        {var s="unknown primitive:caml_create_string";s[0]=c,0;return s}
       else
        {var n=c;
         var s$1="unknown primitive:caml_create_string";
         s$1[0]=92,0;
         s$1[1]=48+n/100,0;
         s$1[2]=48+n/10%10,0;
         s$1[3]=48+n%10,0;
         return s$1}
      }};
var
 lowercase=
  function(c)
   {var $js=c>=65&&c<=90||c>=192&&c<=214||c>=216&&c<=222;
    if($js){return c+32}else{return c}};
var
 uppercase=
  function(c)
   {var $js=c>=97&&c<=122||c>=224&&c<=246||c>=248&&c<=254;
    if($js){return c-32}else{return c}};
var compare=function(c1,c2){return c1-c2};
module["exports"]=
{"chr":chr,
 "escaped":escaped,
 "lowercase":lowercase,
 "uppercase":uppercase,
 "compare":compare};
