// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Char=require("Char");
var Pervasives=require("Pervasives");
var List=require("List");
var Bytes=require("Bytes");
var Hashtbl=require("Hashtbl");
var Stream=require("Stream");


var initial_buffer=CamlPrimtivie["caml_create_string"](32);

var buffer=[0,initial_buffer];

var bufpos=[0,0];

var
 reset_buffer=
  function(param){buffer[1]=initial_buffer,0;return bufpos[1]=0,0;};

var
 store=
  function(c)
   {if(bufpos[1]>=buffer[1]["length"])
     {var newbuffer=CamlPrimtivie["caml_create_string"](2*bufpos[1]);
      
      Bytes["blit"](buffer[1],0,newbuffer,0,bufpos[1]),buffer[1]=newbuffer,0}
    else
     {}
    
    buffer[1][bufpos[1]]=c,0;
    return bufpos[0]++;
    };

var
 get_string=
  function(param)
   {var s=Bytes["sub_string"](buffer[1],0,bufpos[1]);
    
    buffer[1]=initial_buffer,0;
    return s;
    };

var
 make_lexer=
  function(keywords)
   {var kwd_table=Hashtbl["create"](/* None */0,17);
    
    List["iter"]
     (function(s){return Hashtbl["add"](kwd_table,s,/* Kwd */[0,s]);},
      keywords);
    var
     ident_or_keyword=
      function(id)
       {try
         {return Hashtbl["find"](kwd_table,id);}
        catch(exn)
         {if(exn=Not_found){return /* Ident */[1,id];}else{throw exn;}}
        };
    
    var
     keyword_or_error=
      function(c)
       {var s=$$String["make"](1,c);
        
        try
         {return Hashtbl["find"](kwd_table,s);}
        catch(exn)
         {if(exn=Not_found)
           {throw [0,Stream["Error"],Pervasives["^"]("Illegal character ",s)];
            }
          else
           {throw exn;}
          }
        };
    
    var
     next_token=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        if(match)
         {var c=match[1];
          
          var exit;
          
          if(c<124)
           {var switcher=-65+c;
            
            if(!(57<switcher>>>0))
             {var switcher$1=-26+switcher;
              
              if(5<switcher$1>>>0)
               {exit=10;}
              else
               {switch(switcher$1[0])
                 {case 0:exit=13;
                  case 1:exit=11;
                  case 2:exit=13;
                  case 3:exit=11;
                  case 4:exit=10;
                  case 5:exit=13;
                  }
                }
              }
            else
             {if(switcher>=58)
               {exit=13;}
              else
               {var switcher$2=65+switcher;
                
                switch(switcher$2[0])
                 {case 0:exit=13;
                  case 1:exit=13;
                  case 2:exit=13;
                  case 3:exit=13;
                  case 4:exit=13;
                  case 5:exit=13;
                  case 6:exit=13;
                  case 7:exit=13;
                  case 8:exit=13;
                  case 9:exit=9;
                  case 10:exit=9;
                  case 11:exit=13;
                  case 12:exit=9;
                  case 13:exit=9;
                  case 14:exit=13;
                  case 15:exit=13;
                  case 16:exit=13;
                  case 17:exit=13;
                  case 18:exit=13;
                  case 19:exit=13;
                  case 20:exit=13;
                  case 21:exit=13;
                  case 22:exit=13;
                  case 23:exit=13;
                  case 24:exit=13;
                  case 25:exit=13;
                  case 26:exit=9;
                  case 27:exit=13;
                  case 28:exit=13;
                  case 29:exit=13;
                  case 30:exit=13;
                  case 31:exit=13;
                  case 32:exit=9;
                  case 33:exit=11;
                  case 34:
                   Stream["junk"](strm__);
                   var s=strm__;
                   
                   reset_buffer(/* () */0);
                   return /* Some */[0,/* String */[4,string(s)]];
                   
                  case 35:exit=11;
                  case 36:exit=11;
                  case 37:exit=11;
                  case 38:exit=11;
                  case 39:
                   Stream["junk"](strm__);
                   try
                    {var c$1=$$char(strm__);}
                   catch(exn)
                    {if(exn=Stream["Failure"])
                      {throw [0,Stream["Error"],""];}
                     else
                      {throw exn;}
                     }
                   
                   var match$1=Stream["peek"](strm__);
                   
                   var exit$1;
                   
                   if(match$1)
                    {var match$2=match$1[1];
                     
                     if(match$2!=39)
                      {exit$1=4;}
                     else
                      {Stream["junk"](strm__);
                       return /* Some */[0,/* Char */[5,c$1]];
                       }
                     }
                   else
                    {exit$1=4;}
                   
                   switch(exit$1){case 4:throw [0,Stream["Error"],""];}
                   
                  case 40:Stream["junk"](strm__);return maybe_comment(strm__);
                  case 41:exit=13;
                  case 42:exit=11;
                  case 43:exit=11;
                  case 44:exit=13;
                  case 45:Stream["junk"](strm__);return neg_number(strm__);
                  case 46:exit=13;
                  case 47:exit=11;
                  case 48:exit=12;
                  case 49:exit=12;
                  case 50:exit=12;
                  case 51:exit=12;
                  case 52:exit=12;
                  case 53:exit=12;
                  case 54:exit=12;
                  case 55:exit=12;
                  case 56:exit=12;
                  case 57:exit=12;
                  case 58:exit=11;
                  case 59:exit=13;
                  case 60:exit=11;
                  case 61:exit=11;
                  case 62:exit=11;
                  case 63:exit=11;
                  case 64:exit=11;
                  }
                }
              }
            }
          else
           {if(c>=127)
             {if(c>=192){exit=10;}else{exit=13;}}
            else
             {if(c!=125){exit=11;}else{exit=13;}}
            }
          
          switch(exit)
           {case 13:
             var c$2=c;
             
             Stream["junk"](strm__);
             return /* Some */[0,keyword_or_error(c$2)];
             
            case 9:Stream["junk"](strm__);return next_token(strm__);
            case 10:
             Stream["junk"](strm__);
             var s$1=strm__;
             
             reset_buffer(/* () */0);
             store(c);
             return ident(s$1);
             
            case 11:
             var c$3=c;
             
             Stream["junk"](strm__);
             var s$2=strm__;
             
             reset_buffer(/* () */0);
             store(c$3);
             return ident2(s$2);
             
            case 12:
             var c$4=c;
             
             Stream["junk"](strm__);
             var s$3=strm__;
             
             reset_buffer(/* () */0);
             store(c$4);
             return number(s$3);
             
            }
          }
        else
         {return /* None */0;}
        };
    
    var
     ident=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        var exit;
        
        if(match)
         {var c=match[1];
          
          var exit$1;
          
          if(c>=91)
           {var switcher=-95+c;
            
            if(27<switcher>>>0)
             {if(switcher>=97){exit$1=16;}else{exit=15;}}
            else
             {if(switcher!=1){exit$1=16;}else{exit=15;}}
            }
          else
           {if(c>=48)
             {var switcher$1=-58+c;
              
              if(6<switcher$1>>>0){exit$1=16;}else{exit=15;}
              }
            else
             {if(c!=39){exit=15;}else{exit$1=16;}}
            }
          
          switch(exit$1)
           {case 16:
             Stream["junk"](strm__);var s=strm__;store(c);return ident(s);
            }
          }
        else
         {exit=15;}
        
        switch(exit)
         {case 15:
           return /* Some */[0,ident_or_keyword(get_string(/* () */0))];
          }
        };
    
    var
     ident2=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        var exit;
        
        if(match)
         {var c=match[1];
          
          var exit$1;
          
          if(c>=94)
           {var switcher=-95+c;
            
            if(30<switcher>>>0)
             {if(switcher>=32){exit=18;}else{exit$1=19;}}
            else
             {if(switcher!=29){exit=18;}else{exit$1=19;}}
            }
          else
           {if(c>=65)
             {if(c!=92){exit=18;}else{exit$1=19;}}
            else
             {if(c>=33)
               {var switcher$1=-33+c;
                
                switch(switcher$1[0])
                 {case 0:exit$1=19;
                  case 1:exit=18;
                  case 2:exit$1=19;
                  case 3:exit$1=19;
                  case 4:exit$1=19;
                  case 5:exit$1=19;
                  case 6:exit=18;
                  case 7:exit=18;
                  case 8:exit=18;
                  case 9:exit$1=19;
                  case 10:exit$1=19;
                  case 11:exit=18;
                  case 12:exit$1=19;
                  case 13:exit=18;
                  case 14:exit$1=19;
                  case 15:exit=18;
                  case 16:exit=18;
                  case 17:exit=18;
                  case 18:exit=18;
                  case 19:exit=18;
                  case 20:exit=18;
                  case 21:exit=18;
                  case 22:exit=18;
                  case 23:exit=18;
                  case 24:exit=18;
                  case 25:exit$1=19;
                  case 26:exit=18;
                  case 27:exit$1=19;
                  case 28:exit$1=19;
                  case 29:exit$1=19;
                  case 30:exit$1=19;
                  case 31:exit$1=19;
                  }
                }
              else
               {exit=18;}
              }
            }
          
          switch(exit$1)
           {case 19:
             Stream["junk"](strm__);var s=strm__;store(c);return ident2(s);
            }
          }
        else
         {exit=18;}
        
        switch(exit)
         {case 18:
           return /* Some */[0,ident_or_keyword(get_string(/* () */0))];
          }
        };
    
    var
     neg_number=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        var exit;
        
        if(match)
         {var c=match[1];
          
          var switcher=-48+c;
          
          if(9<switcher>>>0)
           {exit=22;}
          else
           {Stream["junk"](strm__);
            var s=strm__;
            
            reset_buffer(/* () */0);
            store(45);
            store(c);
            return number(s);
            }
          }
        else
         {exit=22;}
        
        switch(exit)
         {case 22:
           var s$1=strm__;
           
           reset_buffer(/* () */0);
           store(45);
           return ident2(s$1);
           
          }
        };
    
    var
     number=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        var exit;
        
        if(match)
         {var c=match[1];
          
          var exit$1;
          
          if(c>=58)
           {if(c!=69){if(c!=101){exit=27;}else{exit$1=29;}}else{exit$1=29;}}
          else
           {if(c!=46)
             {if(c>=48)
               {Stream["junk"](strm__);
                var s=strm__;
                
                store(c);
                return number(s);
                }
              else
               {exit=27;}
              }
            else
             {Stream["junk"](strm__);
              var s$1=strm__;
              
              store(46);
              return decimal_part(s$1);
              }
            }
          
          switch(exit$1)
           {case 29:
             Stream["junk"](strm__);
             var s$2=strm__;
             
             store(69);
             return exponent_part(s$2);
             
            }
          }
        else
         {exit=27;}
        
        switch(exit)
         {case 27:
           return /* Some */[0,
                   /* Int */[2,
                    CamlPrimtivie["caml_int_of_string"](get_string(/* () */0))]];
           
          }
        };
    
    var
     decimal_part=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        var exit;
        
        if(match)
         {var c=match[1];
          
          var switcher=-69+c;
          
          if(32<switcher>>>0)
           {var switcher$1=21+switcher;
            
            if(9<switcher$1>>>0)
             {exit=32;}
            else
             {Stream["junk"](strm__);
              var s=strm__;
              
              store(c);
              return decimal_part(s);
              }
            }
          else
           {var switcher$2=-1+switcher;
            
            if(30<switcher$2>>>0)
             {Stream["junk"](strm__);
              var s$1=strm__;
              
              store(69);
              return exponent_part(s$1);
              }
            else
             {exit=32;}
            }
          }
        else
         {exit=32;}
        
        switch(exit)
         {case 32:
           return /* Some */[0,
                   /* Float */[3,
                    CamlPrimtivie["caml_float_of_string"](get_string(/* () */0))]];
           
          }
        };
    
    var
     exponent_part=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        var exit;
        
        if(match)
         {var c=match[1];
          
          var exit$1;
          
          if(c!=43){if(c!=45){exit=36;}else{exit$1=37;}}else{exit$1=37;}
          
          switch(exit$1)
           {case 37:
             Stream["junk"](strm__);
             var s=strm__;
             
             store(c);
             return end_exponent_part(s);
             
            }
          }
        else
         {exit=36;}
        
        switch(exit){case 36:return end_exponent_part(strm__);}
        };
    
    var
     end_exponent_part=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        var exit;
        
        if(match)
         {var c=match[1];
          
          var switcher=-48+c;
          
          if(9<switcher>>>0)
           {exit=39;}
          else
           {Stream["junk"](strm__);
            var s=strm__;
            
            store(c);
            return end_exponent_part(s);
            }
          }
        else
         {exit=39;}
        
        switch(exit)
         {case 39:
           return /* Some */[0,
                   /* Float */[3,
                    CamlPrimtivie["caml_float_of_string"](get_string(/* () */0))]];
           
          }
        };
    
    var
     string=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        if(match)
         {var c=match[1];
          
          if(c!=34)
           {if(c!=92)
             {Stream["junk"](strm__);var s=strm__;store(c);return string(s);}
            else
             {Stream["junk"](strm__);
              try
               {var c$1=$$escape(strm__);}
              catch(exn)
               {if(exn=Stream["Failure"])
                 {throw [0,Stream["Error"],""];}
                else
                 {throw exn;}
                }
              
              var s$1=strm__;
              
              store(c$1);
              return string(s$1);
              }
            }
          else
           {Stream["junk"](strm__);return get_string(/* () */0);}
          }
        else
         {throw Stream["Failure"];}
        };
    
    var
     $$char=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        if(match)
         {var c=match[1];
          
          if(c!=92)
           {Stream["junk"](strm__);return c;}
          else
           {Stream["junk"](strm__);
            try
             {return $$escape(strm__);}
            catch(exn)
             {if(exn=Stream["Failure"])
               {throw [0,Stream["Error"],""];}
              else
               {throw exn;}
              }
            }
          }
        else
         {throw Stream["Failure"];}
        };
    
    var
     $$escape=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        if(match)
         {var c1=match[1];
          
          var exit;
          
          if(c1>=58)
           {var switcher=-110+c1;
            
            if(6<switcher>>>0)
             {exit=56;}
            else
             {switch(switcher[0])
               {case 0:Stream["junk"](strm__);return 10;
                case 1:exit=56;
                case 2:exit=56;
                case 3:exit=56;
                case 4:Stream["junk"](strm__);return 13;
                case 5:exit=56;
                case 6:Stream["junk"](strm__);return 9;
                }
              }
            }
          else
           {if(c1>=48)
             {Stream["junk"](strm__);
              var match$1=Stream["peek"](strm__);
              
              var exit$1;
              
              if(match$1)
               {var c2=match$1[1];
                
                var switcher$1=-48+c2;
                
                if(9<switcher$1>>>0)
                 {exit$1=52;}
                else
                 {Stream["junk"](strm__);
                  var match$2=Stream["peek"](strm__);
                  
                  var exit$2;
                  
                  if(match$2)
                   {var c3=match$2[1];
                    
                    var switcher$2=-48+c3;
                    
                    if(9<switcher$2>>>0)
                     {exit$2=50;}
                    else
                     {Stream["junk"](strm__);
                      return Char["chr"]((c1-48)*100+(c2-48)*10+(c3-48));
                      }
                    }
                  else
                   {exit$2=50;}
                  
                  switch(exit$2){case 50:throw [0,Stream["Error"],""];}
                  }
                }
              else
               {exit$1=52;}
              
              switch(exit$1){case 52:throw [0,Stream["Error"],""];}
              }
            else
             {exit=56;}
            }
          
          switch(exit){case 56:var c=c1;Stream["junk"](strm__);return c;}
          }
        else
         {throw Stream["Failure"];}
        };
    
    var
     maybe_comment=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        var exit;
        
        if(match)
         {var match$1=match[1];
          
          if(match$1!=42)
           {exit=58;}
          else
           {Stream["junk"](strm__);
            var s=strm__;
            
            comment(s);
            return next_token(s);
            }
          }
        else
         {exit=58;}
        
        switch(exit){case 58:return /* Some */[0,keyword_or_error(40)];}
        };
    
    var
     comment=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        if(match)
         {var c=match[1];
          
          var exit;
          
          var switcher=-40+c;
          
          if(2<switcher>>>0)
           {exit=60;}
          else
           {switch(switcher[0])
             {case 0:
               Stream["junk"](strm__);return maybe_nested_comment(strm__);
              case 1:exit=60;
              case 2:Stream["junk"](strm__);return maybe_end_comment(strm__);
              }
            }
          
          switch(exit){case 60:Stream["junk"](strm__);return comment(strm__);}
          }
        else
         {throw Stream["Failure"];}
        };
    
    var
     maybe_nested_comment=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        if(match)
         {var c=match[1];
          
          if(c!=42)
           {Stream["junk"](strm__);return comment(strm__);}
          else
           {Stream["junk"](strm__);var s=strm__;comment(s);return comment(s);}
          }
        else
         {throw Stream["Failure"];}
        };
    
    var
     maybe_end_comment=
      function(strm__)
       {var match=Stream["peek"](strm__);
        
        if(match)
         {var c=match[1];
          
          if(c!=41)
           {if(c!=42)
             {Stream["junk"](strm__);return comment(strm__);}
            else
             {Stream["junk"](strm__);return maybe_end_comment(strm__);}
            }
          else
           {Stream["junk"](strm__);return /* () */0;}
          }
        else
         {throw Stream["Failure"];}
        };
    
    return function(input)
     {return Stream["from"](function(count){return next_token(input);});};
    };

module["exports"]={"make_lexer":make_lexer};

