var String=require("String");
var Pervasives=require("Pervasives");
var Bytes=require("Bytes");
var Sys=require("Sys");
var
 create=
  function(n)
   {var $js=n<1;
    if($js){var n$1=1}else{var n$1=n}
    var $js$1=n$1>Sys["max_string_length"];
    if($js$1){var n$2=Sys["max_string_length"]}else{var n$2=n$1}
    var s="unknown primitive:caml_create_string";
    return [0,s,0,n$2,s]};
var contents=function(b){var $js=Bytes["sub_string"];return $js(b[1],0,b[2])};
var to_bytes=function(b){var $js=Bytes["sub"];return $js(b[1],0,b[2])};
var
 sub=
  function(b,ofs,len)
   {var $js=ofs<0||len<0||ofs>b[2]-len;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Buffer.sub")}
    else
     {var $js$2=Bytes["sub_string"];return $js$2(b[1],ofs,len)}};
var
 blit=
  function(src,srcoff,dst,dstoff,len)
   {var
     $js=
      len<0||srcoff<0||srcoff>src[2]-len||dstoff<0||dstoff>dst["length"]-len;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Buffer.blit")}
    else
     {var $js$2=Bytes["blit"];return $js$2(src[1],srcoff,dst,dstoff,len)}};
var
 nth=
  function(b,ofs)
   {var $js=ofs<0||ofs>=b[2];
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Buffer.nth")}
    else
     {return b[1][ofs]}};
var length=function(b){return b[2]};
var clear=function(b){return b[2]=0,0};
var reset=function(b){b[2]=0,0;b[1]=b[4],0;return b[3]=b[1]["length"],0};
var
 resize=
  function(b,more)
   {var len=b[3];
    var new_len=[0,len];
    for(;;)
     {var $js=b[2]+more>new_len[1];
      if($js){new_len[1]=2*new_len[1],0}else break}
    var $js$1=new_len[1]>Sys["max_string_length"];
    if($js$1)
     {var $js$2=b[2]+more<=Sys["max_string_length"];
      if($js$2)
       {new_len[1]=Sys["max_string_length"],0}
      else
       {var $js$3=Pervasives["failwith"];
        $js$3("Buffer.add: cannot grow buffer")}}
    else
     {}
    var new_buffer="unknown primitive:caml_create_string";
    var $js$4=Bytes["blit"];
    $js$4(b[1],0,new_buffer,0,b[2]);
    b[1]=new_buffer,0;
    return b[3]=new_len[1],0};
var
 add_char=
  function(b,c)
   {var pos=b[2];
    var $js=pos>=b[3];
    if($js){resize(b,1)}else{}
    b[1][pos]=c,0;
    return b[2]=pos+1,0};
var
 add_substring=
  function(b,s,offset,len)
   {var $js=offset<0||len<0||offset+len>s["length"];
    if($js)
     {var $js$1=Pervasives["invalid_arg"];
      $js$1("Buffer.add_substring/add_subbytes")}
    else
     {}
    var new_position=b[2]+len;
    var $js$2=new_position>b[3];
    if($js$2){resize(b,len)}else{}
    var $js$3=Bytes["blit_string"];
    $js$3(s,offset,b[1],b[2],len);
    return b[2]=new_position,0};
var
 add_subbytes=
  function(b,s,offset,len)
   {var $js=Bytes["unsafe_to_string"];
    var $js$1=$js(s);
    return add_substring(b,$js$1,offset,len)};
var
 add_string=
  function(b,s)
   {var len=s["length"];
    var new_position=b[2]+len;
    var $js=new_position>b[3];
    if($js){resize(b,len)}else{}
    var $js$1=Bytes["blit_string"];
    $js$1(s,0,b[1],b[2],len);
    return b[2]=new_position,0};
var
 add_bytes=
  function(b,s)
   {var $js=Bytes["unsafe_to_string"];
    var $js$1=$js(s);
    return add_string(b,$js$1)};
var add_buffer=function(b,bs){return add_subbytes(b,bs[1],0,bs[2])};
var
 add_channel=
  function(b,ic,len)
   {var $js=len<0||len>Sys["max_string_length"];
    if($js)
     {var $js$1=Pervasives["invalid_arg"];$js$1("Buffer.add_channel")}
    else
     {}
    var $js$2=b[2]+len>b[3];
    if($js$2){resize(b,len)}else{}
    var $js$3=Pervasives["really_input"];
    $js$3(ic,b[1],b[2],len);
    return b[2]=b[2]+len,0};
var
 output_buffer=
  function(oc,b){var $js=Pervasives["output"];return $js(oc,b[1],0,b[2])};
var
 closing=
  function(param)
   {var $js=param!=40;
    if($js)
     {var $js$1=param!=123;
      if($js$1)
       {var $js$2=[0,Assert_failure,[0,"buffer.ml",115,9]];throw $js$2}
      else
       {return 125}}
    else
     {return 41}};
var
 advance_to_closing=
  function(opening,closing$1,k,s,start)
   {var
     advance=
      function(k$1,i,lim)
       {var $js=i>=lim;
        if($js)
         {var $js$1=Not_found;throw $js$1}
        else
         {var $js$2=s[i];
          var $js$3=$js$2=opening;
          if($js$3)
           {return advance(k$1+1,i+1,lim)}
          else
           {var $js$4=s[i];
            var $js$5=$js$4=closing$1;
            if($js$5)
             {var $js$6=k$1=0;
              if($js$6){return i}else{return advance(k$1-1,i+1,lim)}}
            else
             {return advance(k$1,i+1,lim)}}}};
    return advance(k,start,s["length"])};
var
 advance_to_non_alpha=
  function(s,start)
   {var
     advance=
      function(i,lim)
       {var $js=i>=lim;
        if($js)
         {return lim}
        else
         {var match=s[i];
          var $js$1=match>=91;
          if($js$1)
           {var $js$2=match>=97;
            if($js$2)
             {var $js$3=match>=123;if($js$3){var exit=15}else{var exit=14}}
            else
             {var $js$4=match!=95;if($js$4){var exit=15}else{var exit=14}}}
          else
           {var $js$5=match>=58;
            if($js$5)
             {var $js$6=match>=65;if($js$6){var exit=14}else{var exit=15}}
            else
             {var $js$7=match>=48;if($js$7){var exit=14}else{var exit=15}}}
          switch(exit){case 15:return i;case 14:return advance(i+1,lim)}}};
    return advance(start,s["length"])};
var
 find_ident=
  function(s,start,lim)
   {var $js=start>=lim;
    if($js)
     {var $js$1=Not_found;throw $js$1}
    else
     {var c=s[start];
      var $js$2=c!=40;
      if($js$2)
       {var $js$3=c!=123;
        if($js$3)
         {var stop=advance_to_non_alpha(s,start+1);
          var $js$4=String["sub"];
          var $js$5=$js$4(s,start,stop-start);
          return [0,$js$5,stop]}
        else
         {var exit=11}}
      else
       {var exit=11}
      switch(exit)
       {case 11:
         var new_start=start+1;
         var $js$6=closing(c);
         var stop$1=advance_to_closing(c,$js$6,0,s,new_start);
         var $js$7=String["sub"];
         var $js$8=$js$7(s,new_start,stop$1-start-1);
         return [0,$js$8,stop$1+1]
        }}};
var
 add_substitute=
  function(b,f,s)
   {var lim=s["length"];
    var
     subst=
      function(previous,i)
       {var $js=i<lim;
        if($js)
         {var current=s[i];
          var $js$1=current!=36;
          if($js$1)
           {var current$1=current;
            var $js$2=previous=92;
            if($js$2)
             {add_char(b,92);add_char(b,current$1);return subst(32,i+1)}
            else
             {var $js$3=current!=92;
              if($js$3)
               {var current$2=current;
                add_char(b,current$2);
                return subst(current$2,i+1)}
              else
               {var current$3=current;return subst(current$3,i+1)}}}
          else
           {var $js$4=previous=92;
            if($js$4)
             {add_char(b,current);return subst(32,i+1)}
            else
             {var j=i+1;
              var match=find_ident(s,j,lim);
              var next_i=match[2];
              var ident=match[1];
              var $js$5=f(ident);
              add_string(b,$js$5);
              return subst(32,next_i)}}}
        else
         {var $js$6=previous=92;
          if($js$6){return add_char(b,previous)}else{return 0}}};
    return subst(32,0)};
module["exports"]=
{"create":create,
 "contents":contents,
 "to_bytes":to_bytes,
 "sub":sub,
 "blit":blit,
 "nth":nth,
 "length":length,
 "clear":clear,
 "reset":reset,
 "add_char":add_char,
 "add_string":add_string,
 "add_bytes":add_bytes,
 "add_substring":add_substring,
 "add_subbytes":add_subbytes,
 "add_substitute":add_substitute,
 "add_buffer":add_buffer,
 "add_channel":add_channel,
 "output_buffer":output_buffer};
