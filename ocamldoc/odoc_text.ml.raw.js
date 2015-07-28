var Odoc_text_lexer=require("Odoc_text_lexer");
var List=require("List");
var Pervasives=require("Pervasives");
var Odoc_text_parser=require("Odoc_text_parser");
var Printf=require("Printf");
var Buffer=require("Buffer");
var Lexing=require("Lexing");
var Text_syntax="unknown primitive:caml_set_oo_id";
var
 text_of_string=
  function(s)
   {var $js=Lexing["from_string"];
    var lexbuf=$js(s);
    try
     {var $js$1=Odoc_text_lexer["init"];
      $js$1(0);
      var $js$2=Odoc_text_parser["main"];
      return $js$2(Odoc_text_lexer["main"],lexbuf)}
    catch(exn){return "unknown primitive:raise"}};
var
 count=
  function(s,c)
   {var count$1=0;
    var $js=0;
    var $js$1=s["length"]-1;
    for(var i=$js;i<=$js$1;i++)
     {var $js$2=s[i]=c;if($js$2){var $js$3=1+count$1;var count$1=$js$3}else{}}
    return count$1};
var
 escape_n=
  function(s,c,n)
   {var remain=n;
    var len=s["length"];
    var $js=Buffer["create"];
    var b=$js(len+n);
    var $js$1=0;
    var $js$2=len-1;
    for(var i=$js$1;i<=$js$2;i++)
     {var $js$3=(s[i]=c)&&remain>0;
      if($js$3)
       {var $js$4=Printf["bprintf"];
        $js$4(b,[0,[12,92,[0,0]],"\%c"],c);
        var $js$5=-1+remain;
        var remain=$js$5}
      else
       {var $js$6=Buffer["add_char"];$js$6(b,s[i])}}
    var $js$7=Buffer["contents"];
    return $js$7(b)};
var
 escape_code=
  function(s)
   {var open_brackets=count(s,91);
    var close_brackets=count(s,93);
    var $js=open_brackets>close_brackets;
    if($js)
     {return escape_n(s,91,open_brackets-close_brackets)}
    else
     {var $js$1=close_brackets>open_brackets;
      if($js$1)
       {return escape_n(s,93,close_brackets-open_brackets)}
      else
       {return s}}};
var
 escape_raw=
  function(s)
   {var len=s["length"];
    var $js=Buffer["create"];
    var b=$js(len);
    var $js$1=0;
    var $js$2=len-1;
    for(var i=$js$1;i<=$js$2;i++)
     {var c=s[i];
      var $js$3=c>=94;
      if($js$3)
       {var $js$4=c!=123;
        if($js$4)
         {var $js$5=c!=125;if($js$5){var exit=6}else{var exit=5}}
        else
         {var exit=5}}
      else
       {var $js$6=c!=91;
        if($js$6)
         {var $js$7=c>=93;if($js$7){var exit=5}else{var exit=6}}
        else
         {var exit=5}}
      switch(exit)
       {case 6:var $js$8=Buffer["add_char"];$js$8(b,c);
        case 5:
         var $js$9=Printf["bprintf"];$js$9(b,[0,[12,92,[0,0]],"\%c"],s[i])
        }}
    var $js$10=Buffer["contents"];
    return $js$10(b)};
var p=Printf["bprintf"];
var
 p_text=
  function(b,t)
   {var $js=List["iter"];var $js$1=p_text_element(b);return $js($js$1,t)};
var
 p_list=
  function(b,l)
   {var $js=List["iter"];
    return $js
            (function(t)
              {p(b,[0,[11,"{- ",0],"{- "]);
               p_text(b,t);
               return p(b,[0,[11,"}\n",0],"}\n"])},
             l)};
var
 p_text_element=
  function(b,param)
   {var $js=param;
    if(typeof $js=="number")
     {if($js==0)
       {return p(b,[0,[12,10,0],"\n"])}
      else
       if($js==1){return p(b,[0,[11,"{!indexlist}",0],"{!indexlist}"])}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var $js$2=escape_raw(param[1]);return p(b,[0,[2,0,0],"%s"],$js$2)}
      else
       if($js$1==1)
        {var $js$3=escape_code(param[1]);
         return p(b,[0,[12,91,[2,0,[12,93,0]]],"[%s]"],$js$3)}
       else
        if($js$1==2)
         {return p(b,[0,[11,"{[",[2,0,[11,"]}",0]]],"{[%s]}"],param[1])}
        else
         if($js$1==3)
          {return p(b,[0,[11,"{v ",[2,0,[11," v}",0]]],"{v %s v}"],param[1])}
         else
          if($js$1==4)
           {p(b,[0,[11,"{b ",0],"{b "]);
            p_text(b,param[1]);
            return p(b,[0,[12,125,0],"}"])}
          else
           if($js$1==5)
            {p(b,[0,[11,"{i ",0],"{i "]);
             p_text(b,param[1]);
             return p(b,[0,[12,125,0],"}"])}
           else
            if($js$1==6)
             {p(b,[0,[11,"{e ",0],"{e "]);
              p_text(b,param[1]);
              return p(b,[0,[12,125,0],"}"])}
            else
             if($js$1==7)
              {p(b,[0,[11,"{C ",0],"{C "]);
               p_text(b,param[1]);
               return p(b,[0,[12,125,0],"}"])}
             else
              if($js$1==8)
               {p(b,[0,[11,"{L ",0],"{L "]);
                p_text(b,param[1]);
                return p(b,[0,[12,125,0],"}"])}
              else
               if($js$1==9)
                {p(b,[0,[11,"{R ",0],"{R "]);
                 p_text(b,param[1]);
                 return p(b,[0,[12,125,0],"}"])}
               else
                if($js$1==10)
                 {p(b,[0,[11,"{ul\n",0],"{ul\n"]);
                  p_list(b,param[1]);
                  return p(b,[0,[12,125,0],"}"])}
                else
                 if($js$1==11)
                  {p(b,[0,[11,"{ol\n",0],"{ol\n"]);
                   p_list(b,param[1]);
                   return p(b,[0,[12,125,0],"}"])}
                 else
                  if($js$1==12)
                   {return p_text(b,param[1])}
                  else
                   if($js$1==13)
                    {var l_opt=param[2];
                     var $js$4=l_opt;
                     if($js$4)
                      {var $js$5=Pervasives["^"];var $js$6=$js$5(":",l_opt[1])}
                     else
                      {var $js$6=""}
                     p
                      (b,
                       [0,[12,123,[4,0,0,0,[2,0,[12,32,0]]]],"{%d%s "],
                       param[1],
                       $js$6);
                     p_text(b,param[3]);
                     return p(b,[0,[12,125,0],"}"])}
                   else
                    if($js$1==14)
                     {return p
                              (b,
                               [0,
                                [12,123,[12,37,[12,32,[2,0,[12,37,[12,125,0]]]]]],
                                "{%% %s%%}"],
                               param[1])}
                    else
                     if($js$1==15)
                      {p(b,[0,[11,"{{:",[2,0,[12,125,0]]],"{{:%s}"],param[1]);
                       p_text(b,param[2]);
                       return p(b,[0,[12,125,0],"}"])}
                     else
                      if($js$1==16)
                       {var text_opt=param[3];
                        var kind_opt=param[2];
                        var $js$7=text_opt;
                        if($js$7){var $js$8="{"}else{var $js$8=""}
                        var $js$9=kind_opt;
                        if($js$9)
                         {var k=kind_opt[1];
                          var $js$10="unknown primitive:isint";
                          if($js$10)
                           {var $js$11=k;
                            var $js$12=$js$11[0];
                            if($js$12==0)
                             {var s="module"}
                            else
                             if($js$12==1)
                              {var s="modtype"}
                             else
                              if($js$12==2)
                               {var s="class"}
                              else
                               if($js$12==3)
                                {var s="classtype"}
                               else
                                if($js$12==4)
                                 {var s="val"}
                                else
                                 if($js$12==5)
                                  {var s="type"}
                                 else
                                  if($js$12==6)
                                   {var s="extension"}
                                  else
                                   if($js$12==7)
                                    {var s="exception"}
                                   else
                                    if($js$12==8)
                                     {var s="attribute"}
                                    else
                                     if($js$12==9)
                                      {var s="method"}
                                     else
                                      if($js$12==10)
                                       {var s="recfield"}
                                      else
                                       if($js$12==11){var s="const"}}
                          else
                           {var s="section"}
                          var $js$13=Pervasives["^"];
                          var $js$14=$js$13(s,":")}
                        else
                         {var $js$14=""}
                        p
                         (b,
                          [0,[2,0,[11,"{!",[2,0,[2,0,[12,125,0]]]]],"%s{!%s%s}"],
                          $js$8,
                          $js$14,
                          param[1]);
                        var $js$15=text_opt;
                        if($js$15)
                         {p_text(b,text_opt[1]);return p(b,[0,[12,125,0],"}"])}
                        else
                         {return 0}}
                      else
                       if($js$1==17)
                        {p(b,[0,[11,"{^",0],"{^"]);
                         p_text(b,param[1]);
                         return p(b,[0,[12,125,0],"}"])}
                       else
                        if($js$1==18)
                         {p(b,[0,[11,"{_",0],"{_"]);
                          p_text(b,param[1]);
                          return p(b,[0,[12,125,0],"}"])}
                        else
                         if($js$1==19)
                          {p(b,[0,[11,"{!modules:",0],"{!modules:"]);
                           var $js$16=List["iter"];
                           $js$16
                            (function(s$1){return p(b,[0,[12,32,[2,0,0]]," %s"],s$1)},
                             param[1]);
                           return p(b,[0,[12,125,0],"}"])}
                         else
                          if($js$1==20)
                           {p(b,[0,[12,123,[2,0,[12,32,0]]],"{%s "],param[1]);
                            p_text(b,param[2]);
                            return p(b,[0,[12,125,0],"}"])}
                          else
                           if($js$1==21)
                            {var $js$17=escape_raw(param[2]);
                             return p
                                     (b,
                                      [0,
                                       [12,123,[12,37,[2,0,[11,": ",[2,0,[12,125,0]]]]]],
                                       "{%%%s: %s}"],
                                      param[1],
                                      $js$17)}}};
var
 string_of_text=
  function(s)
   {var $js=Buffer["create"];
    var b=$js(256);
    p_text(b,s);
    var $js$1=Buffer["contents"];
    return $js$1(b)};
var
 Texter=
  [0,
   text_of_string,
   count,
   escape_n,
   escape_code,
   escape_raw,
   p,
   p_text,
   p_list,
   p_text_element,
   string_of_text];
module["exports"]=
{"Text_syntax":Text_syntax,
 "unknown block:(makeblock 0 (field 0 Texter/1082) (field 9 Texter/1082))":
 unknown block:(makeblock 0 (field 0 Texter/1082) (field 9 Texter/1082))};
