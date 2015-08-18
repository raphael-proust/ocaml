// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Pervasives=require("./pervasives.js");
var Bytes=require("./bytes.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var
 create=
  function(n)
   {var n$1=n<1?1:n;
    
    var n$2=n$1>Sys["max_string_length"]?Sys["max_string_length"]:n$1;
    
    var s=CamlPrimitive["caml_create_string"](n$2);
    
    return /* record */[0,s,0,n$2,s];
    };

var contents=function(b){return Bytes["sub_string"](b[1],0,b[2]);};

var to_bytes=function(b){return Bytes["sub"](b[1],0,b[2]);};

var
 sub=
  function(b,ofs,len)
   {return ofs<0||len<0||ofs>b[2]-len
            ?Pervasives["invalid_arg"]("Buffer.sub")
            :Bytes["sub_string"](b[1],ofs,len);
    };

var
 blit=
  function(src,srcoff,dst,dstoff,len)
   {return len<
            0||
            srcoff<
            0||
            srcoff>
            src[2]-
            len||
            dstoff<
            0||
            dstoff>
            dst["length"]-
            len
            ?Pervasives["invalid_arg"]("Buffer.blit")
            :Bytes["blit"](src[1],srcoff,dst,dstoff,len);
    };

var
 nth=
  function(b,ofs)
   {return ofs<0||ofs>=b[2]?Pervasives["invalid_arg"]("Buffer.nth"):b[1][ofs];
    };

var length=function(b){return b[2];};

var clear=function(b){return b[2]=0,0;};

var reset=function(b){b[2]=0;b[1]=b[4];return b[3]=b[1]["length"],0;};

var
 resize=
  function(b,more)
   {var len=b[3];
    
    var new_len=len;
    
    while(b[2]+more>new_len){new_len=2*new_len;}
    
    if(new_len>Sys["max_string_length"])
     {if(b[2]+more<=Sys["max_string_length"])
       {new_len=Sys["max_string_length"];}
      else
       {Pervasives["failwith"]("Buffer.add: cannot grow buffer")}
      }
    else
     {}
    
    var new_buffer=CamlPrimitive["caml_create_string"](new_len);
    
    Bytes["blit"](b[1],0,new_buffer,0,b[2]);
    b[1]=new_buffer;
    return b[3]=new_len,0;
    };

var
 add_char=
  function(b,c)
   {var pos=b[2];if(pos>=b[3]){resize(b,1)}b[1][pos]=c;return b[2]=pos+1,0;};

var
 add_substring=
  function(b,s,offset,len)
   {if(offset<0||len<0||offset+len>s["length"])
     {Pervasives["invalid_arg"]("Buffer.add_substring/add_subbytes")}
    
    var new_position=b[2]+len;
    
    if(new_position>b[3]){resize(b,len)}
    
    Bytes["blit_string"](s,offset,b[1],b[2],len);
    return b[2]=new_position,0;
    };

var
 add_subbytes=
  function(b,s,offset,len)
   {return add_substring(b,Bytes["unsafe_to_string"](s),offset,len);};

var
 add_string=
  function(b,s)
   {var len=s["length"];
    
    var new_position=b[2]+len;
    
    if(new_position>b[3]){resize(b,len)}
    
    Bytes["blit_string"](s,0,b[1],b[2],len);
    return b[2]=new_position,0;
    };

var
 add_bytes=
  function(b,s){return add_string(b,Bytes["unsafe_to_string"](s));};

var add_buffer=function(b,bs){return add_subbytes(b,bs[1],0,bs[2]);};

var
 add_channel=
  function(b,ic,len)
   {if(len<0||len>Sys["max_string_length"])
     {Pervasives["invalid_arg"]("Buffer.add_channel")}
    
    if(b[2]+len>b[3]){resize(b,len)}
    
    Pervasives["really_input"](ic,b[1],b[2],len);
    return b[2]=b[2]+len,0;
    };

var
 output_buffer=
  function(oc,b){return Pervasives["output"](oc,b[1],0,b[2]);};

var
 closing=
  function(param)
   {if(param!==40)
     {if(param!==123)
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"buffer.ml",115,9]];
        }
      else
       {return 125;}
      }
    else
     {return 41;}
    };

var
 advance_to_closing=
  function(opening,closing,k,s,start)
   {var
     advance=
      function(k,i,lim)
       {if(i>=lim)
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        else
         {return s["charCodeAt"](i)===opening
                  ?advance(k+1,i+1,lim)
                  :s["charCodeAt"](i)===closing
                    ?k===0?i:advance(k-1,i+1,lim)
                    :advance(k,i+1,lim);
          }
        };
    
    return advance(k,start,s["length"]);
    };

var
 advance_to_non_alpha=
  function(s,start)
   {var
     advance=
      function(i,lim)
       {if(i>=lim)
         {return lim;}
        else
         {var match=s["charCodeAt"](i);
          
          var exit;
          
          if(match>=91)
           {if(match>=97)
             {if(match>=123){exit=15;}else{exit=14;}}
            else
             {if(match!==95){exit=15;}else{exit=14;}}
            }
          else
           {if(match>=58)
             {if(match>=65){exit=14;}else{exit=15;}}
            else
             {if(match>=48){exit=14;}else{exit=15;}}
            }
          
          switch(exit){case 15:return i;case 14:return advance(i+1,lim);}
          }
        };
    
    return advance(start,s["length"]);
    };

var
 find_ident=
  function(s,start,lim)
   {if(start>=lim)
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    else
     {var c=s["charCodeAt"](start);
      
      var exit;
      
      if(c!==40)
       {if(c!==123)
         {var stop=advance_to_non_alpha(s,start+1);
          
          return /* tuple */[0,$$String["sub"](s,start,stop-start),stop];
          }
        else
         {exit=11;}
        }
      else
       {exit=11;}
      
      switch(exit)
       {case 11:
         var new_start=start+1;
         
         var stop$1=advance_to_closing(c,closing(c),0,s,new_start);
         
         return /* tuple */[0,
                 $$String["sub"](s,new_start,stop$1-start-1),
                 stop$1+1];
         
        }
      }
    };

var
 add_substitute=
  function(b,f,s)
   {var lim=s["length"];
    
    var
     subst=
      function(previous,i)
       {if(i<lim)
         {var current=s["charCodeAt"](i);
          
          if(current!==36)
           {return previous===92
                    ?(add_char(b,92),add_char(b,current),subst(32,i+1))
                    :current!==92
                      ?(add_char(b,current),subst(current,i+1))
                      :subst(current,i+1);
            }
          else
           {if(previous===92)
             {add_char(b,current);return subst(32,i+1);}
            else
             {var j=i+1;
              
              var match=find_ident(s,j,lim);
              
              add_string(b,f(match[1]));
              return subst(32,match[2]);
              }
            }
          }
        else
         {return previous===92?add_char(b,previous):0;}
        };
    
    return subst(32,0);
    };

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

