// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Bytes=require("./bytes.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var dummy_pos=[/* record */0,"",0,0,-1];

var
 engine=
  function(tbl,state,buf)
   {var result=CamlPrimitive["caml_lex_engine"](tbl,state,buf);
    
    if(result>=0)
     {buf[11]=buf[12];
      var init=buf[12];
      
      buf[12]=/* record */[0,init[1],init[2],init[3],buf[4]+buf[6]]}
    
    return result};

var
 new_engine=
  function(tbl,state,buf)
   {var result=CamlPrimitive["caml_new_lex_engine"](tbl,state,buf);
    
    if(result>=0)
     {buf[11]=buf[12];
      var init=buf[12];
      
      buf[12]=/* record */[0,init[1],init[2],init[3],buf[4]+buf[6]]}
    
    return result};

var
 lex_refill=
  function(read_fun,aux_buffer,lexbuf)
   {var read=read_fun(aux_buffer,aux_buffer["length"]);
    
    var n=read>0?read:(lexbuf[9]=/* true */1,0);
    
    if(lexbuf[3]+n>lexbuf[2]["length"])
     {if(lexbuf[3]-lexbuf[5]+n<=lexbuf[2]["length"])
       {Bytes["blit"](lexbuf[2],lexbuf[5],lexbuf[2],0,lexbuf[3]-lexbuf[5])}
      else
       {var
         newlen=
          Pervasives["min"](2*lexbuf[2]["length"],Sys["max_string_length"]);
        
        if(lexbuf[3]-lexbuf[5]+n>newlen)
         {Pervasives["failwith"]("Lexing.lex_refill: cannot grow buffer")}
        
        var newbuf=CamlPrimitive["caml_create_string"](newlen);
        
        Bytes["blit"](lexbuf[2],lexbuf[5],newbuf,0,lexbuf[3]-lexbuf[5]),
        lexbuf[2]=
        newbuf}
      
      var s=lexbuf[5];
      
      lexbuf[4]=lexbuf[4]+s;
      lexbuf[6]=lexbuf[6]-s;
      lexbuf[5]=0;
      lexbuf[7]=lexbuf[7]-s;
      lexbuf[3]=lexbuf[3]-s;
      var t=lexbuf[10];
      
      for(var i=0;i<=/* -1 for tag */t["length"]-1-1;i++)
       {var v=t[i+1];if(v>=0){t[i+1]=v-s,0}}
      }
    
    Bytes["blit"](aux_buffer,0,lexbuf[2],lexbuf[3],n);
    return lexbuf[3]=lexbuf[3]+n,0};

var zero_pos=[/* record */0,"",1,0,0];

var
 from_function=
  function(f)
   {return /* record */[0,
            lex_refill(f,CamlPrimitive["caml_create_string"](512)),
            CamlPrimitive["caml_create_string"](1024),
            0,
            0,
            0,
            0,
            0,
            0,
            /* false */0,
            [/* array */0],
            zero_pos,
            zero_pos]};

var
 from_channel=
  function(ic)
   {return from_function
            (function(buf,n){return Pervasives["input"](ic,buf,0,n)})};

var
 from_string=
  function(s)
   {return /* record */[0,
            function(lexbuf){return lexbuf[9]=/* true */1,0},
            Bytes["of_string"](s),
            s["length"],
            0,
            0,
            0,
            0,
            0,
            /* true */1,
            [/* array */0],
            zero_pos,
            zero_pos]};

var
 lexeme=
  function(lexbuf)
   {var len=lexbuf[6]-lexbuf[5];
    
    return Bytes["sub_string"](lexbuf[2],lexbuf[5],len)};

var
 sub_lexeme=
  function(lexbuf,i1,i2)
   {var len=i2-i1;return Bytes["sub_string"](lexbuf[2],i1,len)};

var
 sub_lexeme_opt=
  function(lexbuf,i1,i2)
   {if(i1>=0)
     {var len=i2-i1;
      
      return /* Some */[0,Bytes["sub_string"](lexbuf[2],i1,len)]}
    else
     {return /* None */0}
    };

var sub_lexeme_char=function(lexbuf,i){return lexbuf[2][i]};

var
 sub_lexeme_char_opt=
  function(lexbuf,i){return i>=0?/* Some */[0,lexbuf[2][i]]:/* None */0};

var lexeme_char=function(lexbuf,i){return lexbuf[2][lexbuf[5]+i]};

var lexeme_start=function(lexbuf){return lexbuf[11][4]};

var lexeme_end=function(lexbuf){return lexbuf[12][4]};

var lexeme_start_p=function(lexbuf){return lexbuf[11]};

var lexeme_end_p=function(lexbuf){return lexbuf[12]};

var
 new_line=
  function(lexbuf)
   {var lcp=lexbuf[12];
    
    return lexbuf[12]=/* record */[0,lcp[1],lcp[2]+1,lcp[4],lcp[4]],0};

var
 flush_input=
  function(lb)
   {lb[6]=0;
    lb[4]=0;
    var init=lb[12];
    
    lb[12]=/* record */[0,init[1],init[2],init[3],0];
    return lb[3]=0,0};

module["exports"]=
{"dummy_pos":dummy_pos,
 "from_channel":from_channel,
 "from_string":from_string,
 "from_function":from_function,
 "lexeme":lexeme,
 "lexeme_char":lexeme_char,
 "lexeme_start":lexeme_start,
 "lexeme_end":lexeme_end,
 "lexeme_start_p":lexeme_start_p,
 "lexeme_end_p":lexeme_end_p,
 "new_line":new_line,
 "flush_input":flush_input,
 "sub_lexeme":sub_lexeme,
 "sub_lexeme_opt":sub_lexeme_opt,
 "sub_lexeme_char":sub_lexeme_char,
 "sub_lexeme_char_opt":sub_lexeme_char_opt,
 "engine":engine,
 "new_engine":new_engine};

