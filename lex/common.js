// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Sys=require("Sys");


var
 open_tracker=
  function(file,oc)
   {return /* record */[0,file,oc,Pervasives["open_in_bin"](file),1];};

var close_tracker=function(tr){return Pervasives["close_in_noerr"](tr[3]);};

var
 update_tracker=
  function(tr)
   {Printf["fprintf"](tr[2],[0,[12,10,0],"\n"]);
    Pervasives["flush"](tr[2]);
    var cr_seen=0;
    
    try
     {while(1)
       {var match=Pervasives["input_char"](tr[3]);
        
        var exit;
        
        if(match!=10)
         {if(match!=13){exit=25;}else{cr_seen=1;tr[4]=tr[4]+1,0}}
        else
         {if(!cr_seen){tr[4]=tr[4]+1,0}else{exit=25;}}
        
        switch(exit){case 25:cr_seen=0;}
        }
      return 0;
      }
    catch(exn)
     {if(exn=End_of_file)
       {return Printf["fprintf"]
                (tr[2],
                 [0,
                  [11,"# ",[4,0,0,0,[11,' "',[2,0,[11,'"\n',0]]]]],
                  '# %d "%s"\n'],
                 tr[4]+1,
                 tr[1]);
        }
      else
       {throw exn;}
      }
    };

var copy_buffer="unknown primitive:caml_create_string";

var
 copy_chars_unix=
  function(ic,oc,start,stop)
   {var n=stop-start;
    
    while(n>0)
     {var m=Pervasives["input"](ic,copy_buffer,0,Pervasives["min"](n,1024));
      
      Pervasives["output"](oc,copy_buffer,0,m);
      n=n-m;
      }
    return 0;
    };

var
 copy_chars_win32=
  function(ic,oc,start,stop)
   {for(var _i=start;_i<=stop-1;_i++)
     {var c=Pervasives["input_char"](ic);
      
      if(c!=13){Pervasives["output_char"](oc,c)}else{}
      }
    };

var match=Sys["os_type"];

var exit;

switch(match){case "Cygwin":exit=15;case "Win32":exit=15;default:exit=16;}

switch(exit)
 {case 16:var copy_chars=copy_chars_unix;
  case 15:var copy_chars=copy_chars_win32;
  }

var
 copy_chunk=
  function(ic,oc,trl,loc,add_parens)
   {if(loc[2]<loc[3]||add_parens)
     {Printf["fprintf"]
       (oc,
        [0,[11,"# ",[4,0,0,0,[11,' "',[2,0,[11,'"\n',0]]]]],'# %d "%s"\n'],
        loc[4],
        loc[1]);
      if(add_parens)
       {for(var _i=1;_i<=loc[5]-1;_i++){Pervasives["output_char"](oc,32)}
        
        Pervasives["output_char"](oc,40)}
      else
       {for(var _i$1=1;_i$1<=loc[5];_i$1++){Pervasives["output_char"](oc,32)}}
      
      Pervasives["seek_in"](ic,loc[2]);
      copy_chars(ic,oc,loc[2],loc[3]);
      if(add_parens){Pervasives["output_char"](oc,41)}else{}
      
      return update_tracker(trl);
      }
    else
     {return 0;}
    };

var
 output_mem_access=
  function(oc,i)
   {return Printf["fprintf"]
            (oc,
             [0,
              [11,"lexbuf.Lexing.lex_mem.(",[4,0,0,0,[12,41,0]]],
              "lexbuf.Lexing.lex_mem.(%d)"],
             i);
    };

var
 output_memory_actions=
  function(pref,oc,mvs)
   {if(mvs)
     {Pervasives["output_string"](oc,"(* ");
      Printf["fprintf"]
       (oc,[0,[11,"L=",[4,0,0,0,[12,32,0]]],"L=%d "],List["length"](mvs));
      List["iter"]
       (function(mv)
         {switch(mv)
           {case 0:
             return Printf["fprintf"]
                     (oc,
                      [0,
                       [12,91,[4,0,0,0,[11,"] <- [",[4,0,0,0,[11,"] ;",0]]]]],
                       "[%d] <- [%d] ;"],
                      mv[1],
                      mv[2]);
             
            case 1:
             return Printf["fprintf"]
                     (oc,
                      [0,[12,91,[4,0,0,0,[11,"] <- p ; ",0]]],"[%d] <- p ; "],
                      mv[1]);
             
            }
          },
        mvs);
      Pervasives["output_string"](oc," *)\n");
      return List["iter"]
              (function(mv)
                {switch(mv)
                  {case 0:
                    return Printf["fprintf"]
                            (oc,
                             [0,
                              [2,0,[15,[11," <- ",[15,[11," ;\n",0]]]]],
                              "%s%a <- %a ;\n"],
                             pref,
                             output_mem_access,
                             mv[1],
                             output_mem_access,
                             mv[2]);
                    
                   case 1:
                    return Printf["fprintf"]
                            (oc,
                             [0,
                              [2,0,[15,[11," <- lexbuf.Lexing.lex_curr_pos ;\n",0]]],
                              "%s%a <- lexbuf.Lexing.lex_curr_pos ;\n"],
                             pref,
                             output_mem_access,
                             mv[1]);
                    
                   }
                 },
               mvs);
      }
    else
     {return 0;}
    };

var
 output_base_mem=
  function(oc,param)
   {if("unknown primitive:isint")
     {if(param!=0)
       {return Printf["fprintf"]
                (oc,
                 [0,
                  [11,"lexbuf.Lexing.lex_curr_pos",0],
                  "lexbuf.Lexing.lex_curr_pos"]);
        }
      else
       {return Printf["fprintf"]
                (oc,
                 [0,
                  [11,"lexbuf.Lexing.lex_start_pos",0],
                  "lexbuf.Lexing.lex_start_pos"]);
        }
      }
    else
     {return output_mem_access(oc,param[1]);}
    };

var
 output_tag_access=
  function(oc,param)
   {var match$1=param[1];
    
    var i=match$1[2];
    
    var a=match$1[1];
    
    if(i!=0)
     {return Printf["fprintf"]
              (oc,
               [0,[12,40,[15,[11," + ",[4,0,0,0,[12,41,0]]]]],"(%a + %d)"],
               output_base_mem,
               a,
               i);
      }
    else
     {return output_base_mem(oc,a);}
    };

var
 output_env=
  function(ic,oc,tr,env)
   {var pref=[0,"let"];
    
    if(env)
     {var
       env$1=
        List["sort"]
         (function(param,param$1)
           {return "unknown primitive:caml_int_compare";},
          env);
      
      List["iter"]
       (function(param)
         {var v=param[2];
          
          Printf["fprintf"](oc,[0,[2,0,[12,10,0]],"%s\n"],pref[1]);
          copy_chunk(ic,oc,tr,param[1][2],0);
          switch(v)
           {case 0:
             Printf["fprintf"]
              (oc,
               [0,
                [11,
                 "= Lexing.sub_lexeme",
                 [2,0,[11," lexbuf ",[15,[12,32,[15,0]]]]]],
                "= Lexing.sub_lexeme%s lexbuf %a %a"],
               v[1]?"_opt":"",
               output_tag_access,
               v[2],
               output_tag_access,
               v[3]);
            case 1:
             Printf["fprintf"]
              (oc,
               [0,
                [11,"= Lexing.sub_lexeme_char",[2,0,[11," lexbuf ",[15,0]]]],
                "= Lexing.sub_lexeme_char%s lexbuf %a"],
               v[1]?"_opt":"",
               output_tag_access,
               v[2])
            }
          
          return pref[1]="\nand",0;
          },
        env$1);
      return Printf["fprintf"](oc,[0,[11," in\n",0]," in\n"]);
      }
    else
     {return 0;}
    };

var
 output_args=
  function(oc,args)
   {return List["iter"]
            (function(x)
              {Pervasives["output_string"](oc,x);
               return Pervasives["output_char"](oc,32);
               },
             args);
    };

var
 output_refill_handler=
  function(ic,oc,oci,param)
   {if(param)
     {Pervasives["output_string"]
       (oc,
        "let __ocaml_lex_refill : (Lexing.lexbuf -> 'a) -> (Lexing.lexbuf -> 'a) =\n");
      copy_chunk(ic,oc,oci,param[1],1);
      return 1;
      }
    else
     {return 0;}
    };

var quiet_mode=[0,0];

module["exports"]=
{"open_tracker":open_tracker,
 "close_tracker":close_tracker,
 "copy_chunk":copy_chunk,
 "output_mem_access":output_mem_access,
 "output_memory_actions":output_memory_actions,
 "output_env":output_env,
 "output_args":output_args,
 "output_refill_handler":output_refill_handler,
 "quiet_mode":quiet_mode};

