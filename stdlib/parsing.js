var Lexing=require("Lexing");
var $$Array=require("Array");

var YYexit="unknown primitive:caml_set_oo_id";

var Parse_error="unknown primitive:caml_set_oo_id";

var
 env=
  [0,
   "unknown primitive:caml_make_vect",
   "unknown primitive:caml_make_vect",
   "unknown primitive:caml_make_vect",
   "unknown primitive:caml_make_vect",
   100,
   0,
   0,
   0,
   Lexing["dummy_pos"],
   Lexing["dummy_pos"],
   0,
   0,
   0,
   0,
   0,
   0];

var
 grow_stacks=
  function(param)
   {var oldsize=env[5];
    
    var newsize=oldsize*2;
    
    var new_s="unknown primitive:caml_make_vect";
    
    var new_v="unknown primitive:caml_make_vect";
    
    var new_start="unknown primitive:caml_make_vect";
    
    var new_end="unknown primitive:caml_make_vect";
    
    $$Array["blit"](env[1],0,new_s,0,oldsize);
    env[1]=new_s,0;
    $$Array["blit"](env[2],0,new_v,0,oldsize);
    env[2]=new_v,0;
    $$Array["blit"](env[3],0,new_start,0,oldsize);
    env[3]=new_start,0;
    $$Array["blit"](env[4],0,new_end,0,oldsize);
    env[4]=new_end,0;
    return env[5]=newsize,0;
    };

var
 clear_parser=
  function(param){$$Array["fill"](env[2],0,env[5],0);return env[8]=0,0;};

var current_lookahead_fun=[0,function(x){return 0;}];

var
 yyparse=
  function(tables,start,lexer,lexbuf)
   {var
     loop=
      function(cmd,arg)
       {var match="unknown primitive:caml_parse_engine";
        
        switch(match[0])
         {case 0:
           var t=lexer(lexbuf);
           
           env[9]=lexbuf[11],0;
           env[10]=lexbuf[12],0;
           return loop(1,t);
           
          case 1:throw Parse_error;
          case 2:grow_stacks(0);return loop(2,0);
          case 3:grow_stacks(0);return loop(3,0);
          case 4:
           try
            {var match$1=[0,4,tables[1][env[13]](env)];}
           catch(exn)
            {if(exn=Parse_error){var match$1=[0,5,0];}else{throw exn;}}
           
           var value=match$1[2];
           
           var action=match$1[1];
           
           return loop(action,value);
           
          case 5:tables[14]("syntax error");return loop(5,0);
          }
        };
    
    var init_asp=env[11];
    
    var init_sp=env[14];
    
    var init_stackbase=env[6];
    
    var init_state=env[15];
    
    var init_curr_char=env[7];
    
    var init_lval=env[8];
    
    var init_errflag=env[16];
    
    env[6]=env[14]+1,0;
    env[7]=start,0;
    env[10]=lexbuf[12],0;
    try
     {return loop(0,0);}
    catch(exn)
     {var curr_char=env[7];
      
      env[11]=init_asp,0;
      env[14]=init_sp,0;
      env[6]=init_stackbase,0;
      env[15]=init_state,0;
      env[7]=init_curr_char,0;
      env[8]=init_lval,0;
      env[16]=init_errflag,0;
      var tag=exn[1];
      
      if(tag=YYexit)
       {var v=exn[2];return v;}
      else
       {current_lookahead_fun[1]=
        function(tok)
         {if("unknown primitive:caml_obj_is_block")
           {return tables[3]["unknown primitive:caml_obj_tag"]=curr_char;}
          else
           {return tables[2][tok]=curr_char;}
          },
        0;
        throw exn;
        }
      }
    };

var peek_val=function(env$1,n){return env$1[2][env$1[11]-n];};

var
 symbol_start_pos=
  function(param)
   {var
     loop=
      function(i)
       {if(i<=0)
         {return env[4][env[11]];}
        else
         {var st=env[3][env[11]-i+1];
          
          var en=env[4][env[11]-i+1];
          
          if("unknown primitive:caml_notequal")
           {return st;}
          else
           {return loop(i-1);}
          }
        };
    
    return loop(env[12]);
    };

var symbol_end_pos=function(param){return env[4][env[11]];};

var rhs_start_pos=function(n){return env[3][env[11]-(env[12]-n)];};

var rhs_end_pos=function(n){return env[4][env[11]-(env[12]-n)];};

var symbol_start=function(param){return symbol_start_pos(0)[4];};

var symbol_end=function(param){return symbol_end_pos(0)[4];};

var rhs_start=function(n){return rhs_start_pos(n)[4];};

var rhs_end=function(n){return rhs_end_pos(n)[4];};

var is_current_lookahead=function(tok){return current_lookahead_fun[1](tok);};

var parse_error=function(msg){return 0;};

[0,
 symbol_start,
 symbol_end,
 rhs_start,
 rhs_end,
 symbol_start_pos,
 symbol_end_pos,
 rhs_start_pos,
 rhs_end_pos,
 clear_parser,
 Parse_error,
 function(prim){return "unknown primitive:caml_set_parser_trace";},
 YYexit,
 yyparse,
 peek_val,
 is_current_lookahead,
 parse_error];
module["exports"]=
{"symbol_start":symbol_start,
 "symbol_end":symbol_end,
 "rhs_start":rhs_start,
 "rhs_end":rhs_end,
 "symbol_start_pos":symbol_start_pos,
 "symbol_end_pos":symbol_end_pos,
 "rhs_start_pos":rhs_start_pos,
 "rhs_end_pos":rhs_end_pos,
 "clear_parser":clear_parser,
 "Parse_error":Parse_error,
 "unknown block:(function prim/1116 (caml_set_parser_trace prim/1116))":
 unknown block:(function prim/1116 (caml_set_parser_trace prim/1116)),
 "YYexit":YYexit,
 "yyparse":yyparse,
 "peek_val":peek_val,
 "is_current_lookahead":is_current_lookahead,
 "parse_error":parse_error};

