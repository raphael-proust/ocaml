var Lexing=require("Lexing");
var $$Array=require("Array");
var YYexit="unknown primitive:caml_set_oo_id";
var Parse_error="unknown primitive:caml_set_oo_id";
var $js="unknown primitive:caml_make_vect";
var $js$1="unknown primitive:caml_make_vect";
var $js$2="unknown primitive:caml_make_vect";
var $js$3="unknown primitive:caml_make_vect";
var
 env=
  [0,
   $js,
   $js$1,
   $js$2,
   $js$3,
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
    var $js$4=$$Array["blit"];
    $js$4(env[1],0,new_s,0,oldsize);
    env[1]=new_s,0;
    var $js$5=$$Array["blit"];
    $js$5(env[2],0,new_v,0,oldsize);
    env[2]=new_v,0;
    var $js$6=$$Array["blit"];
    $js$6(env[3],0,new_start,0,oldsize);
    env[3]=new_start,0;
    var $js$7=$$Array["blit"];
    $js$7(env[4],0,new_end,0,oldsize);
    env[4]=new_end,0;
    return env[5]=newsize,0};
var
 clear_parser=
  function(param)
   {var $js$4=$$Array["fill"];$js$4(env[2],0,env[5],0);return env[8]=0,0};
var current_lookahead_fun=[0,function(x){return 0}];
var
 yyparse=
  function(tables,start,lexer,lexbuf)
   {var
     loop=
      function(cmd,arg)
       {var match="unknown primitive:caml_parse_engine";
        var $js$4=match;
        var $js$5=$js$4[0];
        if($js$5==0)
         {var $js$6=lexer(lexbuf);
          var t=$js$6;
          env[9]=lexbuf[11],0;
          env[10]=lexbuf[12],0;
          return loop(1,t)}
        else
         if($js$5==1)
          {var $js$7=Parse_error;throw $js$7}
         else
          if($js$5==2)
           {grow_stacks(0);return loop(2,0)}
          else
           if($js$5==3)
            {grow_stacks(0);return loop(3,0)}
           else
            if($js$5==4)
             {try
               {var $js$8=tables[1][env[13]];
                var $js$9=$js$8(env);
                var match$1=[0,4,$js$9]}
              catch(exn)
               {var $js$10=exn=Parse_error;
                if($js$10)
                 {var match$1=[0,5,0]}
                else
                 {var match$1="unknown primitive:reraise"}}
              var value=match$1[2];
              var action=match$1[1];
              return loop(action,value)}
            else
             if($js$5==5)
              {var $js$11=tables[14];$js$11("syntax error");return loop(5,0)}};
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
     {return loop(0,0)}
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
      var $js$4=tag=YYexit;
      if($js$4)
       {var v=exn[2];return v}
      else
       {current_lookahead_fun[1]=
        function(tok)
         {var $js$5="unknown primitive:caml_obj_is_block";
          if($js$5)
           {var $js$6="unknown primitive:caml_obj_tag";
            var $js$7=tables[3][$js$6];
            return $js$7=curr_char}
          else
           {var $js$8=tables[2][tok];return $js$8=curr_char}},
        0;
        var $js$5=exn;
        throw $js$5}}};
var peek_val=function(env$1,n){var $js$4=env$1[2][env$1[11]-n];return $js$4};
var
 symbol_start_pos=
  function(param)
   {var
     loop=
      function(i)
       {var $js$4=i<=0;
        if($js$4)
         {return env[4][env[11]]}
        else
         {var st=env[3][env[11]-i+1];
          var en=env[4][env[11]-i+1];
          var $js$5="unknown primitive:caml_notequal";
          if($js$5){return st}else{return loop(i-1)}}};
    return loop(env[12])};
var symbol_end_pos=function(param){return env[4][env[11]]};
var rhs_start_pos=function(n){return env[3][env[11]-(env[12]-n)]};
var rhs_end_pos=function(n){return env[4][env[11]-(env[12]-n)]};
var
 symbol_start=
  function(param){var $js$4=symbol_start_pos(0);return $js$4[4]};
var symbol_end=function(param){var $js$4=symbol_end_pos(0);return $js$4[4]};
var rhs_start=function(n){var $js$4=rhs_start_pos(n);return $js$4[4]};
var rhs_end=function(n){var $js$4=rhs_end_pos(n);return $js$4[4]};
var
 is_current_lookahead=
  function(tok){var $js$4=current_lookahead_fun[1];return $js$4(tok)};
var parse_error=function(msg){return 0};
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
