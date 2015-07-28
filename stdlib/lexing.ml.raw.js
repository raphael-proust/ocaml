var Pervasives=require("Pervasives");
var Bytes=require("Bytes");
var Sys=require("Sys");
var dummy_pos=[0,"",0,0,-1];
var
 engine=
  function(tbl,state,buf)
   {var result="unknown primitive:caml_lex_engine";
    var $js=result>=0;
    if($js)
     {buf[11]=buf[12],0;
      var init=buf[12];
      var $js$1=[0,init[1],init[2],init[3],buf[4]+buf[6]];
      buf[12]=$js$1,0}
    else
     {}
    return result};
var
 new_engine=
  function(tbl,state,buf)
   {var result="unknown primitive:caml_new_lex_engine";
    var $js=result>=0;
    if($js)
     {buf[11]=buf[12],0;
      var init=buf[12];
      var $js$1=[0,init[1],init[2],init[3],buf[4]+buf[6]];
      buf[12]=$js$1,0}
    else
     {}
    return result};
var
 lex_refill=
  function(read_fun,aux_buffer,lexbuf)
   {var read=read_fun(aux_buffer,aux_buffer["length"]);
    var $js=read>0;
    if($js){var n=read}else{lexbuf[9]=1,0;var n=0}
    var $js$1=lexbuf[3]+n>lexbuf[2]["length"];
    if($js$1)
     {var $js$2=lexbuf[3]-lexbuf[5]+n<=lexbuf[2]["length"];
      if($js$2)
       {var $js$3=Bytes["blit"];
        $js$3(lexbuf[2],lexbuf[5],lexbuf[2],0,lexbuf[3]-lexbuf[5])}
      else
       {var $js$4=Pervasives["min"];
        var newlen=$js$4(2*lexbuf[2]["length"],Sys["max_string_length"]);
        var $js$5=lexbuf[3]-lexbuf[5]+n>newlen;
        if($js$5)
         {var $js$6=Pervasives["failwith"];
          $js$6("Lexing.lex_refill: cannot grow buffer")}
        else
         {}
        var newbuf="unknown primitive:caml_create_string";
        var $js$7=Bytes["blit"];
        $js$7(lexbuf[2],lexbuf[5],newbuf,0,lexbuf[3]-lexbuf[5]);
        lexbuf[2]=newbuf,0}
      var s=lexbuf[5];
      lexbuf[4]=lexbuf[4]+s,0;
      lexbuf[6]=lexbuf[6]-s,0;
      lexbuf[5]=0,0;
      lexbuf[7]=lexbuf[7]-s,0;
      lexbuf[3]=lexbuf[3]-s,0;
      var t=lexbuf[10];
      var $js$8=0;
      var $js$9=t["length"]-1;
      for(var i=$js$8;i<=$js$9;i++)
       {var v=t[i];var $js$10=v>=0;if($js$10){t[i]=v-s,0}else{}}}
    else
     {}
    var $js$11=Bytes["blit"];
    $js$11(aux_buffer,0,lexbuf[2],lexbuf[3],n);
    return lexbuf[3]=lexbuf[3]+n,0};
var zero_pos=[0,"",1,0,0];
var
 from_function=
  function(f)
   {var $js="unknown primitive:caml_create_string";
    var $js$1=lex_refill(f,$js);
    var $js$2="unknown primitive:caml_create_string";
    return [0,$js$1,$js$2,0,0,0,0,0,0,0,[],zero_pos,zero_pos]};
var
 from_channel=
  function(ic)
   {return from_function
            (function(buf,n)
              {var $js=Pervasives["input"];return $js(ic,buf,0,n)})};
var
 from_string=
  function(s)
   {var $js=Bytes["of_string"];
    var $js$1=$js(s);
    return [0,
            function(lexbuf){return lexbuf[9]=1,0},
            $js$1,
            s["length"],
            0,
            0,
            0,
            0,
            0,
            1,
            [],
            zero_pos,
            zero_pos]};
var
 lexeme=
  function(lexbuf)
   {var len=lexbuf[6]-lexbuf[5];
    var $js=Bytes["sub_string"];
    return $js(lexbuf[2],lexbuf[5],len)};
var
 sub_lexeme=
  function(lexbuf,i1,i2)
   {var len=i2-i1;var $js=Bytes["sub_string"];return $js(lexbuf[2],i1,len)};
var
 sub_lexeme_opt=
  function(lexbuf,i1,i2)
   {var $js=i1>=0;
    if($js)
     {var len=i2-i1;
      var $js$1=Bytes["sub_string"];
      var $js$2=$js$1(lexbuf[2],i1,len);
      return [0,$js$2]}
    else
     {return 0}};
var sub_lexeme_char=function(lexbuf,i){return lexbuf[2][i]};
var
 sub_lexeme_char_opt=
  function(lexbuf,i)
   {var $js=i>=0;
    if($js){var $js$1=lexbuf[2][i];return [0,$js$1]}else{return 0}};
var lexeme_char=function(lexbuf,i){return lexbuf[2][lexbuf[5]+i]};
var lexeme_start=function(lexbuf){return lexbuf[11][4]};
var lexeme_end=function(lexbuf){return lexbuf[12][4]};
var lexeme_start_p=function(lexbuf){return lexbuf[11]};
var lexeme_end_p=function(lexbuf){return lexbuf[12]};
var
 new_line=
  function(lexbuf)
   {var lcp=lexbuf[12];
    var init=lcp;
    var $js=[0,init[1],lcp[2]+1,lcp[4],init[4]];
    return lexbuf[12]=$js,0};
var
 flush_input=
  function(lb)
   {lb[6]=0,0;
    lb[4]=0,0;
    var init=lb[12];
    var $js=[0,init[1],init[2],init[3],0];
    lb[12]=$js,0;
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
