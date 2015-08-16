// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Printtyp=require("./printtyp.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Clflags=require("./clflags.js");
var Format=require("./format.js");
var Lexing=require("./lexing.js");
var Location=require("./location.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 output_int=
  function(oc,i)
   {return Pervasives["output_string"](oc,Pervasives["string_of_int"](i));};

var
 get_location=
  function(ti)
   {var exit;
    
    switch(ti[0]){case 4:exit=25;case 5:exit=25;default:return ti[1][2];}
    
    switch(exit){case 25:return ti[1];}
    };

var annotations=[0,/* [] */0];

var phrases=[0,/* [] */0];

var
 record=
  function(ti)
   {if(Clflags["annotations"][1]&&!get_location(ti)[3])
     {return annotations[1]=/* :: */[0,ti,annotations[1]],0;}
    else
     {return 0;}
    };

var
 record_phrase=
  function(loc)
   {if(Clflags["annotations"][1])
     {return phrases[1]=/* :: */[0,loc,phrases[1]],0;}
    else
     {return 0;}
    };

var
 cmp_loc_inner_first=
  function(loc1,loc2)
   {var x=CamlPrimitive["caml_int_compare"](loc1[2][4],loc2[2][4]);
    
    if(x!==0)
     {return x;}
    else
     {return CamlPrimitive["caml_int_compare"](loc2[1][4],loc1[1][4]);}
    };

var
 cmp_ti_inner_first=
  function(ti1,ti2)
   {return cmp_loc_inner_first(get_location(ti1),get_location(ti2));};

var
 print_position=
  function(pp,pos)
   {if(CamlPrimitive["caml_equal"](pos,Lexing["dummy_pos"]))
     {return Pervasives["output_string"](pp,"--");}
    else
     {Pervasives["output_char"](pp,34);
      Pervasives["output_string"](pp,$$String["escaped"](pos[1]));
      Pervasives["output_string"](pp,'" ');
      output_int(pp,pos[2]);
      Pervasives["output_char"](pp,32);
      output_int(pp,pos[3]);
      Pervasives["output_char"](pp,32);
      return output_int(pp,pos[4]);
      }
    };

var
 print_location=
  function(pp,loc)
   {print_position(pp,loc[1]);
    Pervasives["output_char"](pp,32);
    return print_position(pp,loc[2]);
    };

var
 sort_filter_phrases=
  function(param)
   {var
     ph=
      List["sort"](function(x,y){return cmp_loc_inner_first(y,x);},phrases[1]);
    
    var
     loop=
      function(accu,cur,l)
       {if(l)
         {var t=l[2];
          
          var loc=l[1];
          
          if(cur[1][4]<=loc[1][4]&&cur[2][4]>=loc[2][4])
           {return loop(accu,cur,t);}
          else
           {return loop(/* :: */[0,loc,accu],loc,t);}
          }
        else
         {return accu;}
        };
    
    return phrases[1]=loop(/* [] */0,Location["none"],ph),0;
    };

var
 printtyp_reset_maybe=
  function(loc)
   {var match=phrases[1];
    
    var exit;
    
    if(match)
     {if(match[1][1][4]<=loc[1][4])
       {Printtyp["reset"](/* () */0);
        phrases[1]=match[2];
        return printtyp_reset_maybe(loc);
        }
      else
       {exit=12;}
      }
    else
     {exit=12;}
    
    switch(exit){case 12:return /* () */0;}
    };

var
 call_kind_string=
  function(k)
   {switch(k)
     {case 0:return "tail";case 1:return "stack";case 2:return "inline";}
    };

var
 print_ident_annot=
  function(pp,str,k)
   {if(typeof k==="number")
     {switch(k)
       {case 0:
         Pervasives["output_string"](pp,"ext_ref ");
         Pervasives["output_string"](pp,str);
         return Pervasives["output_char"](pp,10);
         
        }}
    else
     {switch(k[0])
       {case 0:
         Pervasives["output_string"](pp,"int_ref ");
         Pervasives["output_string"](pp,str);
         Pervasives["output_char"](pp,32);
         print_location(pp,k[1]);
         return Pervasives["output_char"](pp,10);
         
        case 1:
         Pervasives["output_string"](pp,"def ");
         Pervasives["output_string"](pp,str);
         Pervasives["output_char"](pp,32);
         print_location(pp,k[1]);
         return Pervasives["output_char"](pp,10);
         
        }}
    };

var
 print_info=
  function(pp,prev_loc,ti)
   {var exit;
    
    switch(ti[0])
     {case 0:
       var match=ti[1];
       
       var env=match[5];
       
       var loc=match[2];
       
       var typ=match[4];
       
       var env$1=env;
       
       exit=8;
       
      case 1:
       var match$1=ti[1];
       
       var loc=match$1[2];
       
       var typ=match$1[4];
       
       var env$1=match$1[5];
       
       exit=8;
       
      case 2:exit=7;
      case 3:exit=7;
      case 4:
       var loc$1=ti[1];
       
       if(CamlPrimitive["caml_notequal"](loc$1,prev_loc))
        {print_location(pp,loc$1),Pervasives["output_char"](pp,10)}
       else
        {}
       
       Pervasives["output_string"](pp,"call(\n  ");
       Pervasives["output_string"](pp,call_kind_string(ti[2]));
       Pervasives["output_string"](pp,"\n)\n");
       return loc$1;
       
      case 5:
       var loc$2=ti[1];
       
       if(CamlPrimitive["caml_notequal"](loc$2,prev_loc))
        {print_location(pp,loc$2),Pervasives["output_char"](pp,10)}
       else
        {}
       
       Pervasives["output_string"](pp,"ident(\n  ");
       print_ident_annot(pp,ti[2],ti[3]);
       Pervasives["output_string"](pp,")\n");
       return loc$2;
       
      }
    
    switch(exit)
     {case 7:return prev_loc;
      case 8:
       if(CamlPrimitive["caml_notequal"](loc,prev_loc))
        {print_location(pp,loc),Pervasives["output_char"](pp,10)}
       else
        {}
       
       Pervasives["output_string"](pp,"type(\n");
       printtyp_reset_maybe(loc);
       Printtyp["mark_loops"](typ);
       Format["pp_print_string"](Format["str_formatter"],"  ");
       Printtyp["wrap_printing_env"]
        (env$1,
         function(param)
          {return Printtyp["type_sch"](Format["str_formatter"],typ);});
       Format["pp_print_newline"](Format["str_formatter"],/* () */0);
       var s=Format["flush_str_formatter"](/* () */0);
       
       Pervasives["output_string"](pp,s);
       Pervasives["output_string"](pp,")\n");
       return loc;
       
      }
    };

var
 get_info=
  function(param)
   {var info=List["fast_sort"](cmp_ti_inner_first,annotations[1]);
    
    annotations[1]=/* [] */0;
    return info;
    };

var
 dump=
  function(filename)
   {if(Clflags["annotations"][1])
     {var info=get_info(/* () */0);
      
      if(filename)
       {var pp=Pervasives["open_out"](filename[1]);}
      else
       {var pp=Pervasives["stdout"];}
      
      sort_filter_phrases(/* () */0);
      List["fold_left"](print_info(pp),Location["none"],info);
      if(filename){Pervasives["close_out"](pp)}else{}
      
      return phrases[1]=/* [] */0,0;
      }
    else
     {return annotations[1]=/* [] */0,0;}
    };

module["exports"]=
{"record":record,
 "record_phrase":record_phrase,
 "dump":dump,
 "get_location":get_location,
 "get_info":get_info};

