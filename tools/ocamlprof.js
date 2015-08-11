// Generated CODE, PLEASE EDIT WITH CARE 

var Parse=require("Parse");
var Warnings=require("Warnings");
var Pervasives=require("Pervasives");
var List=require("List");
var Arg=require("Arg");
var Printf=require("Printf");
var Format=require("Format");
var Lexing=require("Lexing");
var Filename=require("Filename");
var Location=require("Location");
var Sys=require("Sys");


var idprefix="__ocaml_prof_";

var modprefix="OCAML__prof_";

var Profiler="unknown primitive:caml_set_oo_id";

var instr_fun=[0,0];

var instr_match=[0,0];

var instr_if=[0,0];

var instr_loops=[0,0];

var instr_try=[0,0];

var cur_point=[0,0];

var inchan=[0,Pervasives["stdin"]];

var outchan=[0,Pervasives["stdout"]];

var copy_buffer="unknown primitive:caml_create_string";

var
 copy_chars_unix=
  function(nchars)
   {var n=nchars;
    
    while(n>0)
     {var
       m=
        Pervasives["input"](inchan[1],copy_buffer,0,Pervasives["min"](n,256));
      
      if(m=0){throw End_of_file;}else{}
      
      Pervasives["output"](outchan[1],copy_buffer,0,m);
      n=n-m;
      }
    return 0;
    };

var
 copy_chars_win32=
  function(nchars)
   {for(var _i=1;_i<=nchars;_i++)
     {var c=Pervasives["input_char"](inchan[1]);
      
      if(c!=13){Pervasives["output_char"](outchan[1],c)}else{}
      }
    };

var match=Sys["os_type"];

var exit;

switch(match){case "Cygwin":exit=59;case "Win32":exit=59;default:exit=60;}

switch(exit)
 {case 60:var copy_chars=copy_chars_unix;
  case 59:var copy_chars=copy_chars_win32;
  }

var
 copy=
  function(next)
   {if(next>=cur_point[1])
     {}
    else
     {throw [0,Assert_failure,[0,"ocamlprof.ml",61,2]];}
    
    Pervasives["seek_in"](inchan[1],cur_point[1]);
    copy_chars(next-cur_point[1]);
    return cur_point[1]=next,0;
    };

var prof_counter=[0,0];

var instr_mode=[0,0];

var to_insert=[0,0];

var
 insert_action=
  function(st,en)
   {return to_insert[1]=
           /* :: */[0,
            /* tuple */[0,0,st],
            /* :: */[0,/* tuple */[0,1,en],to_insert[1]]],
           0;
    };

var
 add_incr_counter=
  function(modul,param)
   {copy(param[2]);
    if(param[1]!=0)
     {return Printf["fprintf"](outchan[1],[0,[12,41,0],")"]);}
    else
     {Printf["fprintf"]
       (outchan[1],
        [0,
         [12,
          40,
          [2,
           0,
           [11,
            "Profiling.incr ",
            [2,0,[2,0,[11,"_cnt ",[4,0,0,0,[11,"; ",0]]]]]]]],
         "(%sProfiling.incr %s%s_cnt %d; "],
        modprefix,
        idprefix,
        modul,
        prof_counter[1]);
      return prof_counter[0]++;
      }
    };

var counters=[0,"unknown primitive:caml_make_vect"];

var special_id=[0,""];

var
 add_val_counter=
  function(param)
   {if(param[1]=0)
     {copy(param[2]);
      Printf["fprintf"]
       (outchan[1],
        [0,[11,"(* ",[2,0,[4,0,0,0,[11," *) ",0]]]],"(* %s%d *) "],
        special_id[1],
        counters[1][prof_counter[1]]);
      return prof_counter[0]++;
      }
    else
     {return 0;}
    };

var
 insert_profile=
  function(rw_exp,ex)
   {var st=ex[2][1][4];
    
    var en=ex[2][2][4];
    
    var gh=ex[2][3];
    
    if(gh||(st=en))
     {return rw_exp(1,ex);}
    else
     {insert_action(st,en);return rw_exp(0,ex);}
    };

var pos_len=[0,0];

var
 init_rewrite=
  function(modes,mod_name)
   {cur_point[1]=0,0;
    if(instr_mode[1])
     {Printf["fprintf"]
       (outchan[1],
        [0,
         [11,"module ",[2,0,[11,"Profiling = Profiling;; ",0]]],
         "module %sProfiling = Profiling;; "],
        modprefix);
      Printf["fprintf"]
       (outchan[1],
        [0,
         [11,"let ",[2,0,[2,0,[11,"_cnt = Array.make 000000000",0]]]],
         "let %s%s_cnt = Array.make 000000000"],
        idprefix,
        mod_name);
      pos_len[1]=Pervasives["pos_out"](outchan[1]),0;
      return Printf["fprintf"]
              (outchan[1],
               [0,
                [11,
                 ' 0;; Profiling.counters := ("',
                 [2,
                  0,
                  [11,
                   '", ("',
                   [2,
                    0,
                    [11,
                     '", ',
                     [2,0,[2,0,[11,"_cnt)) :: !Profiling.counters;; ",0]]]]]]]],
                ' 0;; Profiling.counters := ("%s", ("%s", %s%s_cnt)) :: !Profiling.counters;; '],
               mod_name,
               modes,
               idprefix,
               mod_name);
      }
    else
     {return 0;}
    };

var
 final_rewrite=
  function(add_function)
   {to_insert[1]=
    List["sort"]
     (function(x,y){return "unknown primitive:caml_int_compare";},
      to_insert[1]),
    0;
    prof_counter[1]=0,0;
    List["iter"](add_function,to_insert[1]);
    copy(Pervasives["in_channel_length"](inchan[1]));
    if(instr_mode[1])
     {var len=Pervasives["string_of_int"](prof_counter[1]);
      
      if(len["length"]>9){throw [0,Profiler,"too many counters"];}else{}
      
      Pervasives["seek_out"](outchan[1],pos_len[1]-len["length"]);
      return Pervasives["output_string"](outchan[1],len);
      }
    else
     {return 0;}
    };

var
 rewrite_patexp_list=
  function(iflag,l)
   {return rewrite_exp_list(iflag,List["map"](function(x){return x[2];},l));};

var
 rewrite_cases=
  function(iflag,l)
   {return List["iter"]
            (function(pc)
              {var match$1=pc[2];
               
               if(match$1){rewrite_exp(iflag,match$1[1])}else{}
               
               return rewrite_exp(iflag,pc[3]);
               },
             l);
    };

var
 rewrite_labelexp_list=
  function(iflag,l)
   {return rewrite_exp_list
            (iflag,List["map"](function(prim){return prim[2];},l));
    };

var
 rewrite_exp_list=
  function(iflag,l){return List["iter"](rewrite_exp(iflag),l);};

var
 rewrite_exp=
  function(iflag,sexp)
   {if(iflag){return insert_profile(rw_exp,sexp);}else{return rw_exp(0,sexp);}
    };

var
 rw_exp=
  function(iflag,sexp)
   {var match$1=sexp[1];
    
    var exit$1;
    
    switch(match$1)
     {case 0:exit$1=24;
      case 1:exit$1=24;
      case 2:
       rewrite_patexp_list(iflag,match$1[2]);
       return rewrite_exp(iflag,match$1[3]);
       
      case 3:
       var caselist=match$1[1];
       
       if(instr_fun[1])
        {return rewrite_function(iflag,caselist);}
       else
        {return rewrite_cases(iflag,caselist);}
       
      case 4:
       var l=/* :: */[0,/* record */[0,match$1[3],0,match$1[4]],0];
       
       if(instr_fun[1])
        {return rewrite_function(iflag,l);}
       else
        {return rewrite_cases(iflag,l);}
       
      case 5:
       rewrite_exp(iflag,match$1[1]);
       return rewrite_exp_list
               (iflag,List["map"](function(prim){return prim[2];},match$1[2]));
       
      case 6:
       var caselist$1=match$1[2];
       
       rewrite_exp(iflag,match$1[1]);
       if(instr_match[1]&&!sexp[2][3])
        {return rewrite_funmatching(caselist$1);}
       else
        {return rewrite_cases(iflag,caselist$1);}
       
      case 7:
       var caselist$2=match$1[2];
       
       rewrite_exp(iflag,match$1[1]);
       if(instr_try[1]&&!sexp[2][3])
        {return rewrite_trymatching(caselist$2);}
       else
        {return rewrite_cases(iflag,caselist$2);}
       
      case 8:exit$1=25;
      case 9:exit$1=26;
      case 10:exit$1=26;
      case 11:
       var match$2=match$1[2];
       
       var lid_sexp_list=match$1[1];
       
       if(match$2)
        {rewrite_exp(iflag,match$2[1]);
         return rewrite_labelexp_list(iflag,lid_sexp_list);
         }
       else
        {return rewrite_labelexp_list(iflag,lid_sexp_list);}
       
      case 13:
       rewrite_exp(iflag,match$1[1]);return rewrite_exp(iflag,match$1[3]);
      case 14:exit$1=25;
      case 15:
       var match$3=match$1[3];
       
       var sifso=match$1[2];
       
       var scond=match$1[1];
       
       if(match$3)
        {rewrite_exp(iflag,scond);
         rewrite_ifbody(iflag,sexp[2][3],sifso);
         return rewrite_ifbody(iflag,sexp[2][3],match$3[1]);
         }
       else
        {rewrite_exp(iflag,scond);
         return rewrite_ifbody(iflag,sexp[2][3],sifso);
         }
       
      case 16:
       rewrite_exp(iflag,match$1[1]);return rewrite_exp(iflag,match$1[2]);
      case 17:
       var sbody=match$1[2];
       
       rewrite_exp(iflag,match$1[1]);
       if(instr_loops[1]&&!sexp[2][3])
        {return insert_profile(rw_exp,sbody);}
       else
        {return rewrite_exp(iflag,sbody);}
       
      case 18:
       var sbody$1=match$1[5];
       
       rewrite_exp(iflag,match$1[2]);
       rewrite_exp(iflag,match$1[3]);
       if(instr_loops[1]&&!sexp[2][3])
        {return insert_profile(rw_exp,sbody$1);}
       else
        {return rewrite_exp(iflag,sbody$1);}
       
      case 19:exit$1=28;
      case 20:exit$1=28;
      case 22:exit$1=24;
      case 23:exit$1=29;
      case 24:
       return List["iter"]
               (function(param){return rewrite_exp(iflag,param[2]);},
                match$1[1]);
       
      case 25:
       rewrite_mod(iflag,match$1[2]);return rewrite_exp(iflag,match$1[3]);
      case 29:return List["iter"](rewrite_class_field(iflag),match$1[1][2]);
      case 30:exit$1=29;
      case 31:return rewrite_mod(iflag,match$1[1]);
      case 32:return rewrite_exp(iflag,match$1[3]);
      case 33:exit$1=24;
      default:return rewrite_exp(iflag,match$1[1]);}
    
    switch(exit$1)
     {case 24:return 0;
      case 25:return rewrite_exp_list(iflag,match$1[1]);
      case 26:
       var match$4=match$1[2];
       
       if(match$4){return rewrite_exp(iflag,match$4[1]);}else{return 0;}
       
      case 28:return rewrite_exp(iflag,match$1[1]);
      case 29:return rewrite_exp(iflag,match$1[2]);
      }
    };

var
 rewrite_ifbody=
  function(iflag,ghost,sifbody)
   {if(instr_if[1]&&!ghost)
     {return insert_profile(rw_exp,sifbody);}
    else
     {return rewrite_exp(iflag,sifbody);}
    };

var
 rewrite_annotate_exp_list=
  function(l)
   {return List["iter"]
            (function(param)
              {var match$1=param[2];
               
               if(match$1)
                {insert_profile(rw_exp,match$1[1]);
                 return insert_profile(rw_exp,param[3]);
                 }
               else
                {var sexp=param[3];
                 
                 var match$2=sexp[1];
                 
                 switch(match$2)
                  {case 19:return insert_profile(rw_exp,match$2[1]);
                   default:return insert_profile(rw_exp,sexp);}
                 }
               },
             l);
    };

var
 rewrite_function=
  function(iflag,l)
   {var exit$1;
    
    if(l)
     {var match$1=l[1];
      
      if(match$1[2])
       {exit$1=32;}
      else
       {var sexp=match$1[3];
        
        var exit$2;
        
        switch(sexp[1]){case 3:exit$2=33;case 4:exit$2=33;default:exit$1=32;}
        
        switch(exit$2)
         {case 33:if(l[2]){exit$1=32;}else{return rewrite_exp(iflag,sexp);}}
        }
      }
    else
     {exit$1=32;}
    
    switch(exit$1){case 32:return rewrite_funmatching(l);}
    };

var rewrite_funmatching=function(l){return rewrite_annotate_exp_list(l);};

var rewrite_trymatching=function(l){return rewrite_annotate_exp_list(l);};

var
 rewrite_class_field=
  function(iflag,cf)
   {var match$1=cf[1];
    
    var exit$1;
    
    switch(match$1)
     {case 0:return rewrite_class_expr(iflag,match$1[2]);
      case 1:
       var match$2=match$1[1][3];
       
       switch(match$2)
        {case 0:exit$1=35;case 1:return rewrite_exp(iflag,match$2[2]);}
       
      case 2:
       var match$3=match$1[1][3];
       
       switch(match$3)
        {case 0:exit$1=35;
         case 1:
          var sexp=match$3[2];
          
          var exit$2;
          
          switch(sexp[1])
           {case 3:exit$2=36;
            case 4:exit$2=36;
            default:
             var loc=cf[2];
             
             if(instr_fun[1]&&!loc[3])
              {return insert_profile(rw_exp,sexp);}
             else
              {return rewrite_exp(iflag,sexp);}
             }
          
          switch(exit$2){case 36:return rewrite_exp(iflag,sexp);}
          
         }
       
      case 3:exit$1=35;
      case 4:return rewrite_exp(iflag,match$1[1]);
      case 5:exit$1=38;
      case 6:exit$1=38;
      }
    
    switch(exit$1){case 38:return 0;case 35:return 0;}
    };

var
 rewrite_class_expr=
  function(iflag,cexpr)
   {var match$1=cexpr[1];
    
    var exit$1;
    
    switch(match$1)
     {case 0:exit$1=39;
      case 1:return List["iter"](rewrite_class_field(iflag),match$1[1][2]);
      case 2:return rewrite_class_expr(iflag,match$1[4]);
      case 3:
       rewrite_class_expr(iflag,match$1[1]);
       return List["iter"]
               (rewrite_exp(iflag),
                List["map"](function(prim){return prim[2];},match$1[2]));
       
      case 4:
       rewrite_patexp_list(iflag,match$1[2]);
       return rewrite_class_expr(iflag,match$1[3]);
       
      case 5:return rewrite_class_expr(iflag,match$1[1]);
      case 6:exit$1=39;
      }
    
    switch(exit$1){case 39:return 0;}
    };

var
 rewrite_class_declaration=
  function(iflag,cl){return rewrite_class_expr(iflag,cl[4]);};

var
 rewrite_mod=
  function(iflag,smod)
   {var match$1=smod[1];
    
    var exit$1;
    
    switch(match$1)
     {case 0:exit$1=40;
      case 1:return List["iter"](rewrite_str_item(iflag),match$1[1]);
      case 2:return rewrite_mod(iflag,match$1[3]);
      case 3:
       rewrite_mod(iflag,match$1[1]);return rewrite_mod(iflag,match$1[2]);
      case 4:return rewrite_mod(iflag,match$1[1]);
      case 5:return rewrite_exp(iflag,match$1[1]);
      case 6:exit$1=40;
      }
    
    switch(exit$1){case 40:return 0;}
    };

var
 rewrite_str_item=
  function(iflag,item)
   {var match$1=item[1];
    
    switch(match$1)
     {case 0:return rewrite_exp(iflag,match$1[1]);
      case 1:
       return List["iter"]
               (function(x){return rewrite_exp(iflag,x[2]);},match$1[2]);
       
      case 6:return rewrite_mod(iflag,match$1[1][2]);
      case 10:
       return List["iter"](rewrite_class_declaration(iflag),match$1[1]);
      default:return 0;}
    };

var
 rewrite_file=
  function(srcfile,add_function)
   {inchan[1]=Pervasives["open_in_bin"](srcfile),0;
    var lb=Lexing["from_channel"](inchan[1]);
    
    Location["input_name"][1]=srcfile,0;
    Location["init"](lb,srcfile);
    List["iter"](rewrite_str_item(0),Parse["implementation"](lb));
    final_rewrite(add_function);
    return Pervasives["close_in"](inchan[1]);
    };

var
 null_rewrite=
  function(srcfile)
   {inchan[1]=Pervasives["open_in_bin"](srcfile),0;
    copy(Pervasives["in_channel_length"](inchan[1]));
    return Pervasives["close_in"](inchan[1]);
    };

var
 set_flags=
  function(s)
   {for(var i=0;i<=s["length"]-1;i++)
     {var match$1=s[i];
      
      var exit$1;
      
      var switcher=-97+match$1;
      
      if(19<switcher>>>0)
       {exit$1=17;}
      else
       {switch(switcher[0])
         {case 0:
           instr_fun[1]=
           1,
           0,
           instr_match[1]=
           1,
           0,
           instr_if[1]=
           1,
           0,
           instr_loops[1]=
           1,
           0,
           instr_try[1]=
           1,
           0;
          case 1:exit$1=17;
          case 2:exit$1=17;
          case 3:exit$1=17;
          case 4:exit$1=17;
          case 5:instr_fun[1]=1,0;
          case 6:exit$1=17;
          case 7:exit$1=17;
          case 8:instr_if[1]=1,0;
          case 9:exit$1=17;
          case 10:exit$1=17;
          case 11:instr_loops[1]=1,0;
          case 12:instr_match[1]=1,0;
          case 13:exit$1=17;
          case 14:exit$1=17;
          case 15:exit$1=17;
          case 16:exit$1=17;
          case 17:exit$1=17;
          case 18:exit$1=17;
          case 19:instr_try[1]=1,0
          }
        }
      
      switch(exit$1){case 17:}
      }
    };

var modes=[0,"fm"];

var dumpfile=[0,"ocamlprof.dump"];

var process_intf_file=function(filename){return null_rewrite(filename);};

var
 process_impl_file=
  function(filename)
   {var modname=Filename["basename"](Filename["chop_extension"](filename));
    
    if(instr_mode[1])
     {set_flags(modes[1]);
      init_rewrite(modes[1],modname);
      return rewrite_file(filename,add_incr_counter(modname));
      }
    else
     {var ic=Pervasives["open_in_bin"](dumpfile[1]);
      
      var allcounters=Pervasives["input_value"](ic);
      
      Pervasives["close_in"](ic);
      try
       {var match$1=List["assoc"](modname,allcounters);}
      catch(exn)
       {if(exn=Not_found)
         {throw [0,
                 Profiler,
                 Pervasives["^"]
                  ("Module ",
                   Pervasives["^"](modname," not used in this profile."))];
          }
        else
         {throw exn;}
        }
      
      var modes$1=match$1[1];
      
      counters[1]=match$1[2],0;
      set_flags(modes$1);
      init_rewrite(modes$1,modname);
      return rewrite_file(filename,add_val_counter);
      }
    };

var
 process_anon_file=
  function(filename)
   {if(Filename["check_suffix"](filename,".ml"))
     {return process_impl_file(filename);}
    else
     {return process_intf_file(filename);}
    };

var usage="Usage: ocamlprof <options> <files>\noptions are:";

var
 print_version=
  function(param)
   {Format["printf"]
     ([0,[11,"ocamlprof, version ",[2,0,[17,4,0]]],"ocamlprof, version %s@."],
      Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

var
 print_version_num=
  function(param)
   {Format["printf"]([0,[2,0,[17,4,0]],"%s@."],Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

var
 main=
  function(param)
   {try
     {Warnings["parse_options"](0,"a");
      Arg["parse"]
       (/* :: */[0,
         /* tuple */[0,
          "-f",
          /* String */[4,function(s){return dumpfile[1]=s,0;}],
          "<file>     Use <file> as dump file (default ocamlprof.dump)"],
         /* :: */[0,
          /* tuple */[0,
           "-F",
           /* String */[4,function(s){return special_id[1]=s,0;}],
           "<s>        Insert string <s> with the counts"],
          /* :: */[0,
           /* tuple */[0,
            "-impl",
            /* String */[4,process_impl_file],
            "<file>  Process <file> as a .ml file"],
           /* :: */[0,
            /* tuple */[0,
             "-instrument",
             /* Set */[2,instr_mode],
             "  (undocumented)"],
            /* :: */[0,
             /* tuple */[0,
              "-intf",
              /* String */[4,process_intf_file],
              "<file>  Process <file> as a .mli file"],
             /* :: */[0,
              /* tuple */[0,
               "-m",
               /* String */[4,function(s){return modes[1]=s,0;}],
               "<flags>    (undocumented)"],
              /* :: */[0,
               /* tuple */[0,
                "-version",
                /* Unit */[0,print_version],
                "     Print version and exit"],
               /* :: */[0,
                /* tuple */[0,
                 "-vnum",
                 /* Unit */[0,print_version_num],
                 "        Print version number and exit"],
                0]]]]]]]],
        process_anon_file,
        usage);
      return Pervasives["exit"](0);
      }
    catch(exn)
     {if(exn[1]=Profiler)
       {Format["fprintf"]
         (Format["err_formatter"],
          [0,[18,[1,[0,0,""]],[2,0,[17,0,[17,4,0]]]],"@[%s@]@."],
          exn[2]);
        return Pervasives["exit"](2);
        }
      else
       {return Location["report_exception"](Format["err_formatter"],exn);}
      }
    };

main(0);
module["exports"]=
{"idprefix":idprefix,
 "modprefix":modprefix,
 "Profiler":Profiler,
 "instr_fun":instr_fun,
 "instr_match":instr_match,
 "instr_if":instr_if,
 "instr_loops":instr_loops,
 "instr_try":instr_try,
 "cur_point":cur_point,
 "inchan":inchan,
 "outchan":outchan,
 "copy_buffer":copy_buffer,
 "copy_chars_unix":copy_chars_unix,
 "copy_chars_win32":copy_chars_win32,
 "copy_chars":copy_chars,
 "copy":copy,
 "prof_counter":prof_counter,
 "instr_mode":instr_mode,
 "to_insert":to_insert,
 "insert_action":insert_action,
 "add_incr_counter":add_incr_counter,
 "counters":counters,
 "special_id":special_id,
 "add_val_counter":add_val_counter,
 "insert_profile":insert_profile,
 "pos_len":pos_len,
 "init_rewrite":init_rewrite,
 "final_rewrite":final_rewrite,
 "rewrite_patexp_list":rewrite_patexp_list,
 "rewrite_cases":rewrite_cases,
 "rewrite_labelexp_list":rewrite_labelexp_list,
 "rewrite_exp_list":rewrite_exp_list,
 "rewrite_exp":rewrite_exp,
 "rw_exp":rw_exp,
 "rewrite_ifbody":rewrite_ifbody,
 "rewrite_annotate_exp_list":rewrite_annotate_exp_list,
 "rewrite_function":rewrite_function,
 "rewrite_funmatching":rewrite_funmatching,
 "rewrite_trymatching":rewrite_trymatching,
 "rewrite_class_field":rewrite_class_field,
 "rewrite_class_expr":rewrite_class_expr,
 "rewrite_class_declaration":rewrite_class_declaration,
 "rewrite_mod":rewrite_mod,
 "rewrite_str_item":rewrite_str_item,
 "rewrite_file":rewrite_file,
 "null_rewrite":null_rewrite,
 "set_flags":set_flags,
 "modes":modes,
 "dumpfile":dumpfile,
 "process_intf_file":process_intf_file,
 "process_impl_file":process_impl_file,
 "process_anon_file":process_anon_file,
 "usage":usage,
 "print_version":print_version,
 "print_version_num":print_version_num,
 "main":main};

