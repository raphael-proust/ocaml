// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Char=require("Char");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Buffer=require("Buffer");
var Lexing=require("Lexing");
var Sys=require("Sys");


var brace_depth=[0,0];

var comment_depth=[0,0];

var
 in_pattern=
  function(param){return (brace_depth[1]=0)&&(comment_depth[1]=0);};

var Lexical_error="unknown primitive:caml_set_oo_id";

var string_buff=Buffer["create"](256);

var reset_string_buffer=function(param){return Buffer["clear"](string_buff);};

var store_string_char=function(c){return Buffer["add_char"](string_buff,c);};

var
 store_string_chars=
  function(s){return Buffer["add_string"](string_buff,s);};

var
 get_stored_string=
  function(param){return Buffer["contents"](string_buff);};

var
 char_for_backslash=
  function(c)
   {var exit;
    
    if(c>=110)
     {if(c>=117)
       {exit=57;}
      else
       {switch((-110+c)[0])
         {case 0:return 10;
          case 1:exit=57;
          case 2:exit=57;
          case 3:exit=57;
          case 4:return 13;
          case 5:exit=57;
          case 6:return 9;
          }
        }
      }
    else
     {if(c!=98){exit=57;}else{return 8;}}
    
    switch(exit){case 57:return c;}
    };

var
 raise_lexical_error=
  function(lexbuf,msg)
   {var p=Lexing["lexeme_start_p"](lexbuf);
    
    throw [0,Lexical_error,msg,p[1],p[2],p[4]-p[3]+1];
    };

var
 handle_lexical_error=
  function(fn,lexbuf)
   {var p=Lexing["lexeme_start_p"](lexbuf);
    
    var line=p[2];
    
    var column=p[4]-p[3]+1;
    
    var file=p[1];
    
    try
     {return fn(lexbuf);}
    catch(exn)
     {var exit;
      
      if(exn[1]=Lexical_error)
       {switch(exn[3])
         {case "":
           if(exn[4]!=0)
            {exit=49;}
           else
            {if(exn[5]!=0)
              {exit=49;}
             else
              {throw [0,Lexical_error,exn[2],file,line,column];}
             }
           
          default:exit=49;}
        }
      else
       {exit=49;}
      
      switch(exit){case 49:throw exn;}
      }
    };

var
 get_input_name=
  function(param){return Sys["argv"][Sys["argv"]["length"]-1];};

var
 warning=
  function(lexbuf,msg)
   {var p=Lexing["lexeme_start_p"](lexbuf);
    
    Printf["eprintf"]
     ([0,
       [11,
        'ocamllex warning:\nFile "',
        [2,
         0,
         [11,
          '", line ',
          [4,0,0,0,[11,", character ",[4,0,0,0,[11,": ",[2,0,[11,".\n",0]]]]]]]]],
       'ocamllex warning:\nFile "%s", line %d, character %d: %s.\n'],
      p[1],
      p[2],
      p[4]-p[3]+1,
      msg);
    return Pervasives["flush"](Pervasives["stderr"]);
    };

var decimal_code=function(c,d,u){return 100*(c-48)+10*(d-48)+(u-48);};

var
 char_for_hexadecimal_code=
  function(d,u)
   {var d1=d;
    
    if(d1>=97)
     {var val1=d1-87;}
    else
     {if(d1>=65){var val1=d1-55;}else{var val1=d1-48;}}
    
    var d2=u;
    
    if(d2>=97)
     {var val2=d2-87;}
    else
     {if(d2>=65){var val2=d2-55;}else{var val2=d2-48;}}
    
    return Char["chr"](val1*16+val2);
    };

var
 incr_loc=
  function(lexbuf,delta)
   {var pos=lexbuf[12];
    
    return lexbuf[12]=/* record */[0,pos[1],pos[2]+1,pos[4]-delta,pos[4]],0;
    };

var
 update_loc=
  function(lexbuf,opt_file,line)
   {var pos=lexbuf[12];
    
    if(opt_file){var new_file=opt_file[1];}else{var new_file=pos[1];}
    
    return lexbuf[12]=/* record */[0,new_file,line,pos[4],pos[4]],0;
    };

var
 __ocaml_lex_tables=
  [0,
   "\0\0åÿæÿèÿéÿêÿìÿíÿîÿïÿðÿñÿòÿóÿ\x04\0ùÿÚ\0ª\x01\x02\0t\0þÿ\x05\0~\0O\x01ýÿ\x06\0\x14\0u\0v\0ýÿüÿŠ\x02\x07\0øÿôÿõ\x01)\x01\b\0÷ÿ3\x01\t\0öÿ¬\x02\n\0õÿ%\x02÷ÿøÿ\n\0ùÿö\x02ÿÿúÿ\x18\x03Y\x01ýÿ\x06\0\x0b\0\f\0\f\x02üÿ?\x03ûÿ\x10\0<\x02ùÿúÿûÿüÿýÿ\t\0\t\0ÿÿþÿ¦\x02øÿùÿúÿ\n\0üÿýÿþÿÿÿûÿ{\0\x0e\0\x10\0[\x03\x11\0w\x03Ÿ\x02\x12\0ÿÿ\x18\x02þÿ\x13\0®\x03\x14\0",
   "ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1a\0ÿÿ\x05\0\x04\0\x14\0\x18\0ÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x0b\0\x0b\0\x0b\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\b\0ÿÿ\b\0ÿÿÿÿ\x05\0\x05\0ÿÿ\x01\0\x05\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x06\0\x06\0ÿÿÿÿÿÿÿÿÿÿÿÿ\x07\0ÿÿÿÿÿÿÿÿÿÿ\x02\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ",
   '\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\0\0ÿÿÿÿÿÿÿÿ\0\0ÿÿ\x19\0ÿÿ\0\0\x19\0\x1a\0\x19\0\x1c\0\0\0\0\0"\0ÿÿ\0\0\0\0ÿÿÿÿÿÿ\0\0ÿÿÿÿ\0\0ÿÿÿÿ\0\0.\0\0\0\0\0ÿÿ\0\x004\0\0\0\0\0ÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿ\0\0ÿÿ\0\0ÿÿA\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿ\0\0\0\0K\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0U\0ÿÿÿÿX\0ÿÿÿÿÿÿÿÿ\0\0ÿÿ\0\0ÿÿÿÿÿÿ',
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x15\0\x14\0\0\0\x15\0\x15\0\x15\x008\0\x18\0\x15\0\x15\0ÿÿ/\x008\x008\0?\0:\0:\0/\0\0\0\0\0?\0\x18\0\0\0\x15\0ÿÿ\x0f\0\x13\0\0\0\x15\x008\0\x0e\0\x12\0\x05\0\b\0\x06\0\x1e\0\x03\0!\0&\0)\0,\0I\0H\0S\0^\0\x1c\0\\0^\0\\0^\0^\0\0\0\f\0\0\0\x07\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\n\0\0\0\t\0\x04\0\x11\0\x1f\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\r\0\x0b\0\x17\0\x1b\0\x18\0\x1d\0\0\0ÿÿÿÿ\0\0V\0\0\0\x1b\0\x18\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x17\0\x1b\0\0\0\x1a\0\0\0\0\0\0\0\0\0\0\0\0\0\x1b\0\0\0\x1a\0\0\0ÿÿ\0\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0W\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x02\0\x10\0\0\0\0\0ÿÿ\0\0ÿÿ\0\0\0\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\0\0\0\0\0\0\x10\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\0\0\0\0\x17\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0(\0(\0(\0(\0(\0(\0(\0(\0(\0(\0\0\0\0\0\x17\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿ\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0ÿÿ\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0;\0;\0;\0;\0;\0;\0;\0;\0;\0;\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\0\0\0\0\0\0\x10\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0/\0\0\0\0\x000\0\0\0\0\0\0\0*\0*\0*\0*\0*\0*\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0B\x003\0_\0_\0_\0_\0_\0_\0_\0_\0_\0_\0\0\0\0\0\0\0\0\0*\0*\0*\0*\0*\0*\0\0\0\0\0E\0\0\0\0\0\0\0\0\0D\0G\0\0\0F\0\0\0\0\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\x002\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0%\0\0\0%\0\0\0\0\0\0\0L\0%\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\0\0\0\0^\0\0\0P\0\0\0\0\0\0\0\0\0O\0N\0]\0]\0]\0]\0]\0]\0]\0]\0]\0]\0\0\0\0\0\0\0+\0+\0+\0+\0+\0+\0+\0+\0+\0+\0%\0\0\0\0\0\0\0\0\0\0\0%\0+\0+\0+\0+\0+\0+\0\0\0\0\0\0\0\0\0\0\0%\0\0\0\0\0\0\0%\0\0\0%\0\0\x008\0\0\0#\x009\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0+\0+\0+\0+\0+\0+\0\0\0\0\0\0\x007\0\0\x007\0\0\0\0\0\0\0\0\x007\0\0\0\0\0\0\0R\0\0\0Q\0\0\x001\x006\x006\x006\x006\x006\x006\x006\x006\x006\x006\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0C\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\x007\0\0\0\0\0\0\0\0\0\0\x007\0=\0=\0=\0=\0=\0=\0\0\0\0\0\0\0\0\0\0\x007\0[\0\0\0\0\x007\0\0\x007\0\0\0\0\0\0\x005\0>\0>\0>\0>\0>\0>\0>\0>\0>\0>\0=\0=\0=\0=\0=\0=\0\0\0>\0>\0>\0>\0>\0>\0\0\0\0\0\0\0\0\0ÿÿZ\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0^\0\0\0>\0>\0>\0>\0>\0>\0M\0`\0`\0`\0`\0`\0`\0`\0`\0`\0`\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0`\0`\0`\0`\0`\0`\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Y\0\0\0\0\0\0\0\0\0`\0`\0`\0`\0`\0`\0a\0a\0a\0a\0a\0a\0a\0a\0a\0a\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0a\0a\0a\0a\0a\0a\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0a\0a\0a\0a\0a\0a\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0ÿÿ\0\0\0\0\x15\x008\0\x19\0\x15\0\x15\0\x19\x000\x009\0:\x000\x009\0:\0?\0ÿÿÿÿ?\0\x1a\0ÿÿ\0\0\x1a\0\0\0\0\0ÿÿ\x15\x008\0\0\0\0\0\0\0\0\0\0\0\x12\0\0\0 \0%\0(\0+\0F\0G\0N\0U\0\x1a\0V\0X\0[\0_\0a\0ÿÿ\0\0ÿÿ\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\x0e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x13\0\x1b\0\x1b\0\x1c\0ÿÿ\x1b\0\x1c\0ÿÿT\0ÿÿ\x16\0\x16\0ÿÿÿÿ\x16\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x13\0\x1b\0ÿÿ\x1b\0ÿÿÿÿÿÿÿÿÿÿÿÿ\x16\0ÿÿ\x16\0ÿÿT\0ÿÿ\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0T\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x10\0ÿÿÿÿ\x0e\0ÿÿ\x19\0ÿÿÿÿÿÿ\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x1a\0ÿÿÿÿÿÿÿÿÿÿÿÿ\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0ÿÿÿÿÿÿÿÿ\x10\0ÿÿ\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0ÿÿÿÿÿÿ\x17\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0'\0'\0'\0'\0'\0'\0'\0'\0'\0'\0ÿÿÿÿ\x17\0ÿÿÿÿÿÿÿÿÿÿ\x1b\0\x1c\0ÿÿÿÿÿÿÿÿT\0ÿÿÿÿ\x16\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\x006\x006\x006\x006\x006\x006\x006\x006\x006\x006\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0ÿÿ\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x11\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0ÿÿÿÿÿÿÿÿ\x11\0ÿÿ\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0-\0ÿÿÿÿ-\0ÿÿÿÿÿÿ#\0#\0#\0#\0#\0#\0;\0;\0;\0;\0;\0;\0;\0;\0;\0;\0@\0-\0]\0]\0]\0]\0]\0]\0]\0]\0]\0]\0ÿÿÿÿÿÿÿÿ#\0#\0#\0#\0#\0#\0ÿÿÿÿ@\0ÿÿÿÿÿÿÿÿ@\0@\0ÿÿ@\0ÿÿÿÿÿÿ\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0-\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0ÿÿ\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x11\0\x1f\0ÿÿ\x1f\0ÿÿÿÿÿÿJ\0\x1f\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0ÿÿÿÿZ\0ÿÿJ\0ÿÿÿÿÿÿÿÿJ\0J\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0ÿÿÿÿÿÿ*\0*\0*\0*\0*\0*\0*\0*\0*\0*\0\x1f\0ÿÿÿÿÿÿÿÿÿÿ\x1f\0*\0*\0*\0*\0*\0*\0ÿÿÿÿÿÿÿÿÿÿ\x1f\0ÿÿÿÿÿÿ\x1f\0ÿÿ\x1f\0ÿÿ2\0ÿÿ\x1f\x002\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ*\0*\0*\0*\0*\0*\0ÿÿÿÿÿÿ2\0ÿÿ2\0ÿÿÿÿÿÿÿÿ2\0ÿÿÿÿÿÿJ\0ÿÿJ\0ÿÿ-\x002\x002\x002\x002\x002\x002\x002\x002\x002\x002\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ@\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ5\x005\x005\x005\x005\x005\x005\x005\x005\x005\x002\0ÿÿÿÿÿÿÿÿÿÿ2\x005\x005\x005\x005\x005\x005\0ÿÿÿÿÿÿÿÿÿÿ2\0W\0ÿÿÿÿ2\0ÿÿ2\0ÿÿÿÿÿÿ2\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\x005\x005\x005\x005\x005\x005\0ÿÿ=\0=\0=\0=\0=\0=\0ÿÿÿÿÿÿÿÿ\x1f\0W\0W\0W\0W\0W\0W\0W\0W\0W\0W\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿY\0ÿÿ=\0=\0=\0=\0=\0=\0J\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿY\0Y\0Y\0Y\0Y\0Y\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿW\0ÿÿÿÿÿÿÿÿY\0Y\0Y\0Y\0Y\0Y\0`\0`\0`\0`\0`\0`\0`\0`\0`\0`\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ`\0`\0`\0`\0`\0`\0ÿÿ2\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ`\0`\0`\0`\0`\0`\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿW\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0$\0\f\0\0\0\0\0\x02\0\0\0\x1b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x13\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0$\0$\0\0\0$\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\x01\0\x16\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\x01\0\0\0\0\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x13\0\x1a\x002\x009\0\x1a\0:\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x13\0ÿÿ\x1a\0\0\0\x1b\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x16\0\x17\0ÿÿÿÿ\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x16\0\x17\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1a\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ",
   "ÿ\x04ÿÿ\x05ÿÿ\x07ÿ\x06ÿÿ\x03ÿ\0\x04\x01\x05ÿ\x07ÿÿ\x06ÿ\x07ÿÿ\0\x04\x01\x05\x03\x06\x02\x07ÿ\x01ÿÿ\0\x01ÿ"];

var
 main=
  function(lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    return __ocaml_lex_main_rec(lexbuf,0);
    };

var
 __ocaml_lex_main_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(26<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_main_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1[0])
       {case 0:return main(lexbuf);
        case 1:incr_loc(lexbuf,0);return main(lexbuf);
        case 2:
         var num=Lexing["sub_lexeme"](lexbuf,lexbuf[10][0],lexbuf[10][1]);
         
         var
          name=
           Lexing["sub_lexeme_opt"](lexbuf,lexbuf[10][3],lexbuf[10][2]);
         
         update_loc(lexbuf,name,"unknown primitive:caml_int_of_string");
         return main(lexbuf);
         
        case 3:
         comment_depth[1]=1,0;
         handle_lexical_error(comment,lexbuf);
         return main(lexbuf);
         
        case 4:return 7;
        case 5:
         var s=Lexing["lexeme"](lexbuf);
         
         var exit;
         
         switch(s)
          {case "and":return 3;
           case "as":return 20;
           case "eof":return 8;
           case "let":return 19;
           case "parse":return 1;
           case "refill":return 11;
           case "rule":return 0;
           case "shortest":return 2;
           default:exit=3;}
         
         switch(exit){case 3:return /* Tident */[0,s];}
         
        case 6:
         reset_string_buffer(0);
         handle_lexical_error(string,lexbuf);
         return /* Tstring */[2,get_stored_string(0)];
         
        case 7:return /* Tchar */[1,Lexing["lexeme_char"](lexbuf,1)];
        case 8:
         return /* Tchar */[1,
                 char_for_backslash(Lexing["lexeme_char"](lexbuf,2))];
         
        case 9:
         var c=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+2);
         
         var d=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+3);
         
         var u=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+4);
         
         var v=decimal_code(c,d,u);
         
         if(v>255)
          {return raise_lexical_error
                   (lexbuf,
                    Printf["sprintf"]
                     ([0,
                       [11,"illegal escape sequence \",[0,[0,[0,0]]]],
                       "illegal escape sequence \%c%c%c"],
                      c,
                      d,
                      u));
           }
         else
          {return /* Tchar */[1,v];}
         
        case 10:
         var d$1=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+3);
         
         var u$1=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+4);
         
         return /* Tchar */[1,char_for_hexadecimal_code(d$1,u$1)];
         
        case 11:
         var c$1=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+2);
         
         return raise_lexical_error
                 (lexbuf,
                  Printf["sprintf"]
                   ([0,
                     [11,"illegal escape sequence \",[0,0]],
                     "illegal escape sequence \%c"],
                    c$1));
         
        case 12:
         var p=Lexing["lexeme_end_p"](lexbuf);
         
         var f=p[1];
         
         var n1=p[4];
         
         var l1=p[2];
         
         var s1=p[3];
         
         brace_depth[1]=1,0;
         var n2=handle_lexical_error(action,lexbuf);
         
         return /* Taction */[3,/* record */[0,f,n1,n2,l1,n1-s1]];
         
        case 13:return 4;
        case 14:return 6;
        case 15:return 9;
        case 16:return 10;
        case 17:return 12;
        case 18:return 13;
        case 19:return 14;
        case 20:return 15;
        case 21:return 16;
        case 22:return 17;
        case 23:return 18;
        case 24:return 21;
        case 25:return 5;
        case 26:
         return raise_lexical_error
                 (lexbuf,
                  Pervasives["^"]
                   ("illegal character ",
                    $$String["escaped"](Lexing["lexeme"](lexbuf))));
         
        }
      }
    };

var
 string=
  function(lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    return __ocaml_lex_string_rec(lexbuf,45);
    };

var
 __ocaml_lex_string_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(8<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_string_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1[0])
       {case 0:return 0;
        case 1:
         var spaces=Lexing["sub_lexeme"](lexbuf,lexbuf[10][0],lexbuf[6]);
         
         incr_loc(lexbuf,spaces["length"]);
         return string(lexbuf);
         
        case 2:
         var c=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+1);
         
         store_string_char(char_for_backslash(c));
         return string(lexbuf);
         
        case 3:
         var c$1=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+1);
         
         var d=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+2);
         
         var u=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+3);
         
         var v=decimal_code(c$1,d,u);
         
         if(in_pattern(0)&&v>255)
          {warning
            (lexbuf,
             Printf["sprintf"]
              ([0,
                [11,
                 "illegal backslash escape in string: '\",
                 [0,[0,[0,[12,39,0]]]]],
                "illegal backslash escape in string: '\%c%c%c'"],
               c$1,
               d,
               u))}
         else
          {}
         
         store_string_char(Char["chr"](v));
         return string(lexbuf);
         
        case 4:
         var d$1=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+2);
         
         var u$1=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+3);
         
         store_string_char(char_for_hexadecimal_code(d$1,u$1));
         return string(lexbuf);
         
        case 5:
         var c$2=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+1);
         
         if(in_pattern(0))
          {warning
            (lexbuf,
             Printf["sprintf"]
              ([0,
                [11,"illegal backslash escape in string: '\",[0,[12,39,0]]],
                "illegal backslash escape in string: '\%c'"],
               c$2))}
         else
          {}
         
         store_string_char(92);
         store_string_char(c$2);
         return string(lexbuf);
         
        case 6:throw [0,Lexical_error,"unterminated string","",0,0];
        case 7:
         var s=Lexing["sub_lexeme"](lexbuf,lexbuf[5],lexbuf[6]);
         
         warning
          (lexbuf,
           Printf["sprintf"]
            ([0,
              [11,"unescaped newline in string",0],
              "unescaped newline in string"]));
         store_string_chars(s);
         incr_loc(lexbuf,0);
         return string(lexbuf);
         
        case 8:
         var c$3=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]);
         
         store_string_char(c$3);
         return string(lexbuf);
         
        }
      }
    };

var comment=function(lexbuf){return __ocaml_lex_comment_rec(lexbuf,64);};

var
 __ocaml_lex_comment_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(6<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_comment_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1[0])
       {case 0:comment_depth[0]++;return comment(lexbuf);
        case 1:
         comment_depth[0]--;
         if(comment_depth[1]=0){return 0;}else{return comment(lexbuf);}
         
        case 2:
         reset_string_buffer(0);
         string(lexbuf);
         reset_string_buffer(0);
         return comment(lexbuf);
         
        case 3:skip_char(lexbuf);return comment(lexbuf);
        case 4:throw [0,Lexical_error,"unterminated comment","",0,0];
        case 5:incr_loc(lexbuf,0);return comment(lexbuf);
        case 6:return comment(lexbuf);
        }
      }
    };

var action=function(lexbuf){return __ocaml_lex_action_rec(lexbuf,74);};

var
 __ocaml_lex_action_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(7<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_action_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1[0])
       {case 0:brace_depth[0]++;return action(lexbuf);
        case 1:
         brace_depth[0]--;
         if(brace_depth[1]=0)
          {return Lexing["lexeme_start"](lexbuf);}
         else
          {return action(lexbuf);}
         
        case 2:
         reset_string_buffer(0);
         handle_lexical_error(string,lexbuf);
         reset_string_buffer(0);
         return action(lexbuf);
         
        case 3:skip_char(lexbuf);return action(lexbuf);
        case 4:comment_depth[1]=1,0;comment(lexbuf);return action(lexbuf);
        case 5:throw [0,Lexical_error,"unterminated action","",0,0];
        case 6:incr_loc(lexbuf,0);return action(lexbuf);
        case 7:return action(lexbuf);
        }
      }
    };

var skip_char=function(lexbuf){return __ocaml_lex_skip_char_rec(lexbuf,84);};

var
 __ocaml_lex_skip_char_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    var exit;
    
    if(__ocaml_lex_state$1>0)
     {if(__ocaml_lex_state$1>=3){exit=32;}else{return 0;}}
    else
     {if(__ocaml_lex_state$1>=0){return incr_loc(lexbuf,1);}else{exit=32;}}
    
    switch(exit)
     {case 32:
       lexbuf[1](lexbuf);
       return __ocaml_lex_skip_char_rec(lexbuf,__ocaml_lex_state$1);
       
      }
    };

module["exports"]={"main":main,"Lexical_error":Lexical_error};

