// Generated CODE, PLEASE EDIT WITH CARE 

var Warnings=require("./warnings.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Printf=require("./printf.js");
var Format=require("./format.js");
var Filename=require("./filename.js");
var Buffer=require("./buffer.js");
var Parsing=require("./parsing.js");
var CamlPrimitive=require("./camlPrimitive.js");


var absname=[0,/* false */0];

var
 in_file=
  function(name)
   {var loc=/* record */[0,name,1,0,-1];
    
    return /* record */[0,loc,loc,/* true */1];
    };

var none=in_file("_none_");

var
 curr=
  function(lexbuf){return /* record */[0,lexbuf[11],lexbuf[12],/* false */0];};

var
 init=
  function(lexbuf,fname){return lexbuf[12]=/* record */[0,fname,1,0,0],0;};

var
 symbol_rloc=
  function(param)
   {return /* record */[0,
            Parsing["symbol_start_pos"](/* () */0),
            Parsing["symbol_end_pos"](/* () */0),
            /* false */0];
    };

var
 symbol_gloc=
  function(param)
   {return /* record */[0,
            Parsing["symbol_start_pos"](/* () */0),
            Parsing["symbol_end_pos"](/* () */0),
            /* true */1];
    };

var
 rhs_loc=
  function(n)
   {return /* record */[0,
            Parsing["rhs_start_pos"](n),
            Parsing["rhs_end_pos"](n),
            /* false */0];
    };

var input_name=[0,"_none_"];

var input_lexbuf=[0,/* None */0];

var status=[0,/* Uninitialised */0];

var num_loc_lines=[0,0];

var
 print_updating_num_loc_lines=
  function(ppf,f,arg)
   {var out_functions=Format["pp_get_formatter_out_functions"](ppf,/* () */0);
    
    var
     out_string=
      function(str,start,len)
       {var
         count=
          function(i,c)
           {if(i===start+len)
             {return c;}
            else
             {if(str[i]===10)
               {return count(1+i,1+c);}
              else
               {return count(1+i,c);}
              }
            };
        
        num_loc_lines[1]=num_loc_lines[1]+count(start,0);
        return out_functions[1](str,start,len);
        };
    
    Format["pp_set_formatter_out_functions"]
     (ppf,
      /* record */[0,
       out_string,
       out_functions[2],
       out_functions[3],
       out_functions[4]]);
    f(ppf,arg);
    Format["pp_print_flush"](ppf,/* () */0);
    return Format["pp_set_formatter_out_functions"](ppf,out_functions);
    };

var
 highlight_terminfo=
  function(ppf,num_lines,lb,locs)
   {Format["pp_print_flush"](ppf,/* () */0);
    var pos0=-lb[4];
    
    if(pos0<0){throw Pervasives["Exit"];}else{}
    
    var lines=num_loc_lines[1];
    
    for(var i=pos0;i<=lb[3]-1;i++){if(lb[2][i]===10){lines=1+lines;}else{}}
    
    if(lines>=num_lines-2){throw Pervasives["Exit"];}else{}
    
    Pervasives["flush"](Pervasives["stdout"]);
    CamlPrimitive["caml_terminfo_backup"](lines);
    var bol=/* false */0;
    
    Pervasives["print_string"]("# ");
    for(var pos=0;pos<=lb[3]-pos0-1;pos++)
     {if(bol){Pervasives["print_string"]("  ");bol=/* false */0;}else{}
      
      if(List["exists"](function(loc){return pos===loc[1][4];},locs))
       {CamlPrimitive["caml_terminfo_standout"](/* true */1)}
      else
       {}
      
      if(List["exists"](function(loc){return pos===loc[2][4];},locs))
       {CamlPrimitive["caml_terminfo_standout"](/* false */0)}
      else
       {}
      
      var c=lb[2][pos+pos0];
      
      Pervasives["print_char"](c);
      bol=c===10;
      }
    
    CamlPrimitive["caml_terminfo_standout"](/* false */0);
    CamlPrimitive["caml_terminfo_resume"](num_loc_lines[1]);
    return Pervasives["flush"](Pervasives["stdout"]);
    };

var
 highlight_dumb=
  function(ppf,lb,loc)
   {var pos0=-lb[4];
    
    if(pos0<0){throw Pervasives["Exit"];}else{}
    
    var end_pos=lb[3]-pos0-1;
    
    var line_start=0;
    
    var line_end=0;
    
    for(var pos=0;pos<=end_pos;pos++)
     {if(lb[2][pos+pos0]===10)
       {if(loc[1][4]>pos){line_start=1+line_start;}else{}
        
        if(loc[2][4]>pos){line_end=1+line_end;}else{}
        }
      else
       {}
      }
    
    Format["fprintf"]
     (ppf,
      [/* Format */0,
       [/* String_literal */11,
        "Characters ",
        [/* Int */4,
         /* Int_i */3,
         /* No_padding */0,
         /* No_precision */0,
         [/* Char_literal */12,
          45,
          [/* Int */4,
           /* Int_i */3,
           /* No_padding */0,
           /* No_precision */0,
           [/* Char_literal */12,
            58,
            [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]]]]]],
       "Characters %i-%i:@."],
      loc[1][4],
      loc[2][4]);
    Format["pp_print_string"](ppf,"  ");
    var line=0;
    
    var pos_at_bol=0;
    
    for(var pos$1=0;pos$1<=end_pos;pos$1++)
     {var c=lb[2][pos$1+pos0];
      
      if(c!==10)
       {if(c!==13)
         {if(line===line_start&&line===line_end)
           {Format["pp_print_char"](ppf,c)}
          else
           {if(line===line_start)
             {if(pos$1<loc[1][4])
               {Format["pp_print_char"](ppf,46)}
              else
               {Format["pp_print_char"](ppf,c)}
              }
            else
             {if(line===line_end)
               {if(pos$1<loc[2][4])
                 {Format["pp_print_char"](ppf,c)}
                else
                 {Format["pp_print_char"](ppf,46)}
                }
              else
               {if(line>line_start&&line<line_end)
                 {Format["pp_print_char"](ppf,c)}
                else
                 {}
                }
              }
            }
          }
        else
         {}
        }
      else
       {if(line===line_start&&line===line_end)
         {Format["fprintf"]
           (ppf,
            [/* Format */0,
             [/* Formatting_lit */17,
              /* Flush_newline */4,
              [/* String_literal */11,"  ",/* End_of_format */0]],
             "@.  "]);
          for(var _i=pos_at_bol;_i<=loc[1][4]-1;_i++)
           {Format["pp_print_char"](ppf,32)}
          
          for(var _i$1=loc[1][4];_i$1<=loc[2][4]-1;_i$1++)
           {Format["pp_print_char"](ppf,94)}
          }
        else
         {}
        
        if(line>=line_start&&line<=line_end)
         {Format["fprintf"]
           (ppf,
            [/* Format */0,
             [/* Formatting_lit */17,
              /* Flush_newline */4,
              /* End_of_format */0],
             "@."]);
          if(pos$1<loc[2][4]){Format["pp_print_string"](ppf,"  ")}else{}
          }
        else
         {}
        
        line=1+line;
        
        pos_at_bol=pos$1+1;
        }
      }
    return 0;
    };

var
 highlight_locations=
  function(ppf,locs)
   {var match=status[1];
    
    if(typeof match==="number")
     {if(match!==0)
       {var match$1=input_lexbuf[1];
        
        if(match$1)
         {try
           {var
             norepeat=
              CamlPrimitive["caml_string_equal"]
               (CamlPrimitive["caml_sys_getenv"]("TERM"),"norepeat");
            }
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {var norepeat=/* false */0;}
            else
             {throw exn;}
            }
          
          if(norepeat)
           {return /* false */0;}
          else
           {var loc1=List["hd"](locs);
            
            try
             {highlight_dumb(ppf,match$1[1],loc1);return /* true */1;}
            catch(exn$1)
             {if(exn$1===Pervasives["Exit"])
               {return /* false */0;}
              else
               {throw exn$1;}
              }
            }
          }
        else
         {return /* false */0;}
        }
      else
       {status[1]=CamlPrimitive["caml_terminfo_setup"](Pervasives["stdout"]);
        return highlight_locations(ppf,locs);
        }
      }
    else
     {var match$2=input_lexbuf[1];
      
      if(match$2)
       {try
         {highlight_terminfo(ppf,match[1],match$2[1],locs);
          return /* true */1;
          }
        catch(exn$2)
         {if(exn$2===Pervasives["Exit"])
           {return /* false */0;}
          else
           {throw exn$2;}
          }
        }
      else
       {return /* false */0;}
      }
    };

var
 absolute_path=
  function(s)
   {if(Filename["is_relative"](s))
     {var
       s$1=
        Filename["concat"](CamlPrimitive["caml_sys_getcwd"](/* () */0),s);
      }
    else
     {var s$1=s;}
    
    var
     aux=
      function(s)
       {var base=Filename["basename"](s);
        
        var dir=Filename["dirname"](s);
        
        if(CamlPrimitive["caml_string_equal"](dir,s))
         {return dir;}
        else
         {if
           (CamlPrimitive["caml_string_equal"]
             (base,Filename["current_dir_name"]))
           {return aux(dir);}
          else
           {if
             (CamlPrimitive["caml_string_equal"]
               (base,Filename["parent_dir_name"]))
             {return Filename["dirname"](aux(dir));}
            else
             {return Filename["concat"](aux(dir),base);}
            }
          }
        };
    
    return aux(s$1);
    };

var
 show_filename=
  function(file)
   {if(absname[1]){return absolute_path(file);}else{return file;}};

var
 print_filename=
  function(ppf,file)
   {return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* String */2,/* No_padding */0,/* End_of_format */0],
              "%s"],
             show_filename(file));
    };

var reset=function(param){return num_loc_lines[1]=0,0;};

var match=[/* tuple */0,'File "','", line ',", characters ","-",":"];

var msg_colon=match[5];

var msg_to=match[4];

var msg_chars=match[3];

var msg_line=match[2];

var msg_file=match[1];

var
 get_pos_info=
  function(pos){return /* tuple */[0,pos[1],pos[2],pos[4]-pos[3]];};

var
 print_loc=
  function(ppf,loc)
   {var match$1=get_pos_info(loc[1]);
    
    var startchar=match$1[3];
    
    var file=match$1[1];
    
    var endchar=loc[2][4]-loc[1][4]+startchar;
    
    if(CamlPrimitive["caml_string_equal"](file,"//toplevel//"))
     {if(highlight_locations(ppf,/* :: */[0,loc,/* [] */0]))
       {return /* () */0;}
      else
       {return Format["fprintf"]
                (ppf,
                 [/* Format */0,
                  [/* String_literal */11,
                   "Characters ",
                   [/* Int */4,
                    /* Int_i */3,
                    /* No_padding */0,
                    /* No_precision */0,
                    [/* Char_literal */12,
                     45,
                     [/* Int */4,
                      /* Int_i */3,
                      /* No_padding */0,
                      /* No_precision */0,
                      /* End_of_format */0]]]],
                  "Characters %i-%i"],
                 loc[1][4],
                 loc[2][4]);
        }
      }
    else
     {Format["fprintf"]
       (ppf,
        [/* Format */0,
         [/* String */2,
          /* No_padding */0,
          [/* Alpha */15,
           [/* String */2,
            /* No_padding */0,
            [/* Int */4,
             /* Int_i */3,
             /* No_padding */0,
             /* No_precision */0,
             /* End_of_format */0]]]],
         "%s%a%s%i"],
        msg_file,
        print_filename,
        file,
        msg_line,
        match$1[2]);
      if(startchar>=0)
       {return Format["fprintf"]
                (ppf,
                 [/* Format */0,
                  [/* String */2,
                   /* No_padding */0,
                   [/* Int */4,
                    /* Int_i */3,
                    /* No_padding */0,
                    /* No_precision */0,
                    [/* String */2,
                     /* No_padding */0,
                     [/* Int */4,
                      /* Int_i */3,
                      /* No_padding */0,
                      /* No_precision */0,
                      /* End_of_format */0]]]],
                  "%s%i%s%i"],
                 msg_chars,
                 startchar,
                 msg_to,
                 endchar);
        }
      else
       {return 0;}
      }
    };

var
 print=
  function(ppf,loc)
   {if
     (CamlPrimitive["caml_string_equal"](loc[1][1],"//toplevel//")&&
      highlight_locations(ppf,/* :: */[0,loc,/* [] */0]))
     {return /* () */0;}
    else
     {return Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* Alpha */15,
                 [/* String */2,
                  /* No_padding */0,
                  [/* Formatting_lit */17,
                   /* Flush_newline */4,
                   /* End_of_format */0]]],
                "%a%s@."],
               print_loc,
               loc,
               msg_colon);
      }
    };

var
 print_error=
  function(ppf,loc)
   {print(ppf,loc);
    return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* String_literal */11,"Error: ",/* End_of_format */0],
              "Error: "]);
    };

var
 print_error_cur_file=
  function(ppf){return print_error(ppf,in_file(input_name[1]));};

var
 default_warning_printer=
  function(loc,ppf,w)
   {if(Warnings["is_active"](w))
     {print(ppf,loc);
      return Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* String_literal */11,
                 "Warning ",
                 [/* Alpha */15,
                  [/* Formatting_lit */17,
                   /* Flush_newline */4,
                   /* End_of_format */0]]],
                "Warning %a@."],
               Warnings["print"],
               w);
      }
    else
     {return 0;}
    };

var warning_printer=[0,default_warning_printer];

var
 print_warning=
  function(loc,ppf,w)
   {return print_updating_num_loc_lines(ppf,warning_printer[1](loc),w);};

var formatter_for_warnings=[0,Format["err_formatter"]];

var
 prerr_warning=
  function(loc,w){return print_warning(loc,formatter_for_warnings[1],w);};

var
 echo_eof=
  function(param)
   {Format["print_newline"](/* () */0);return num_loc_lines[0]++;};

var mkloc=function(txt,loc){return /* record */[0,txt,loc];};

var mknoloc=function(txt){return mkloc(txt,none);};

var
 errorf=
  function($staropt$star,$staropt$star,$staropt$star)
   {if($staropt$star$1){var loc=$staropt$star$1[1];}else{var loc=none;}
    
    if($staropt$star$2){var sub=$staropt$star$2[1];}else{var sub=/* [] */0;}
    
    if($staropt$star)
     {var if_highlight=$staropt$star[1];}
    else
     {var if_highlight="";}
    
    return Printf["ksprintf"]
            (function(msg){return /* record */[0,loc,msg,sub,if_highlight];});
    };

var
 error=
  function($staropt$star,$staropt$star,$staropt$star,msg)
   {if($staropt$star$1){var loc=$staropt$star$1[1];}else{var loc=none;}
    
    if($staropt$star$2){var sub=$staropt$star$2[1];}else{var sub=/* [] */0;}
    
    if($staropt$star)
     {var if_highlight=$staropt$star[1];}
    else
     {var if_highlight="";}
    
    return /* record */[0,loc,msg,sub,if_highlight];
    };

var error_of_exn=[0,/* [] */0];

var
 register_error_of_exn=
  function(f){return error_of_exn[1]=/* :: */[0,f,error_of_exn[1]],0;};

var
 error_of_exn$1=
  function(exn)
   {var
     loop=
      function(param)
       {if(param)
         {var r=param[1](exn);if(r){return r;}else{return loop(param[2]);}}
        else
         {return /* None */0;}
        };
    
    return loop(error_of_exn[1]);
    };

var
 default_error_reporter=
  function(ppf,err)
   {var if_highlight=err[4];
    
    if(CamlPrimitive["caml_string_notequal"](if_highlight,""))
     {var
       collect_locs=
        function(locs,param)
         {return List["fold_left"]
                  (collect_locs,/* :: */[0,param[1],locs],param[3]);
          };
      
      var locs=collect_locs(/* [] */0,err);
      
      var highlighted=highlight_locations(ppf,locs);
      }
    else
     {var highlighted=/* false */0;}
    
    if(highlighted)
     {return Format["pp_print_string"](ppf,if_highlight);}
    else
     {print(ppf,err[1]);
      Format["pp_print_string"](ppf,err[2]);
      return List["iter"]
              (function(err)
                {return Format["fprintf"]
                         (ppf,
                          [/* Format */0,
                           [/* Formatting_lit */17,
                            /* Force_newline */3,
                            [/* Formatting_gen */18,
                             [/* Open_box */1,
                              [/* Format */0,
                               [/* String_literal */11,"<2>",/* End_of_format */0],
                               "<2>"]],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]],
                           "@\n@[<2>%a@]"],
                          default_error_reporter,
                          err);
                 },
               err[3]);
      }
    };

var error_reporter=[0,default_error_reporter];

var
 report_error=
  function(ppf,err)
   {return print_updating_num_loc_lines(ppf,error_reporter[1],err);};

var
 error_of_printer=
  function(loc,print,x)
   {var buf=Buffer["create"](64);
    
    var ppf=Format["formatter_of_buffer"](buf);
    
    Format["pp_print_string"](ppf,"Error: ");
    print(ppf,x);
    Format["pp_print_flush"](ppf,/* () */0);
    var msg=Buffer["contents"](buf);
    
    return errorf
            (/* Some */[0,loc],
             /* None */0,
             /* None */0,
             [/* Format */0,
              [/* String */2,/* No_padding */0,/* End_of_format */0],
              "%s"],
             msg);
    };

var
 error_of_printer_file=
  function(print,x){return error_of_printer(in_file(input_name[1]),print,x);};

var
 match$1=
  register_error_of_exn
   (function(param)
     {if(param[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
       {return /* Some */[0,
                errorf
                 (/* Some */[0,in_file(input_name[1])],
                  /* None */0,
                  /* None */0,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Error: I/O error: ",
                    [/* String */2,/* No_padding */0,/* End_of_format */0]],
                   "Error: I/O error: %s"],
                  param[2])];
        }
      else
       {if(param[1]===Warnings["Errors"])
         {return /* Some */[0,
                  errorf
                   (/* Some */[0,in_file(input_name[1])],
                    /* None */0,
                    /* None */0,
                    [/* Format */0,
                     [/* String_literal */11,
                      "Error: Some fatal warnings were triggered (",
                      [/* Int */4,
                       /* Int_d */0,
                       /* No_padding */0,
                       /* No_precision */0,
                       [/* String_literal */11,
                        " occurrences)",
                        /* End_of_format */0]]],
                     "Error: Some fatal warnings were triggered (%d occurrences)"],
                    param[2])];
          }
        else
         {return /* None */0;}
        }
      });

var
 report_exception_rec=
  function(n,ppf,exn)
   {try
     {var match$2=error_of_exn$1(exn);
      
      if(match$2)
       {return Format["fprintf"]
                (ppf,
                 [/* Format */0,
                  [/* Formatting_gen */18,
                   [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                   [/* Alpha */15,
                    [/* Formatting_lit */17,
                     /* Close_box */0,
                     [/* Formatting_lit */17,
                      /* Flush_newline */4,
                      /* End_of_format */0]]]],
                  "@[%a@]@."],
                 report_error,
                 match$2[1]);
        }
      else
       {throw exn;}
      }
    catch(exn$1)
     {if(n>0){return report_exception_rec(n-1,ppf,exn$1);}else{throw exn$1;}}
    };

var
 report_exception=
  function(ppf,exn){return report_exception_rec(5,ppf,exn);};

var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Location.Error",0]);

var
 match$2=
  register_error_of_exn
   (function(param)
     {if(param[1]===$$Error)
       {return /* Some */[0,param[2]];}
      else
       {return /* None */0;}
      });

var
 raise_errorf=
  function($staropt$star,$staropt$star,$staropt$star)
   {if($staropt$star$1){var loc=$staropt$star$1[1];}else{var loc=none;}
    
    if($staropt$star$2){var sub=$staropt$star$2[1];}else{var sub=/* [] */0;}
    
    if($staropt$star)
     {var if_highlight=$staropt$star[1];}
    else
     {var if_highlight="";}
    
    return Printf["ksprintf"]
            (function(msg)
              {throw [0,$$Error,/* record */[0,loc,msg,sub,if_highlight]];});
    };

module["exports"]=
{"none":none,
 "in_file":in_file,
 "init":init,
 "curr":curr,
 "symbol_rloc":symbol_rloc,
 "symbol_gloc":symbol_gloc,
 "rhs_loc":rhs_loc,
 "input_name":input_name,
 "input_lexbuf":input_lexbuf,
 "get_pos_info":get_pos_info,
 "print_loc":print_loc,
 "print_error":print_error,
 "print_error_cur_file":print_error_cur_file,
 "print_warning":print_warning,
 "formatter_for_warnings":formatter_for_warnings,
 "prerr_warning":prerr_warning,
 "echo_eof":echo_eof,
 "reset":reset,
 "warning_printer":warning_printer,
 "default_warning_printer":default_warning_printer,
 "highlight_locations":highlight_locations,
 "mknoloc":mknoloc,
 "mkloc":mkloc,
 "print":print,
 "print_filename":print_filename,
 "absolute_path":absolute_path,
 "show_filename":show_filename,
 "absname":absname,
 "Error":$$Error,
 "error":error,
 "errorf":errorf,
 "raise_errorf":raise_errorf,
 "error_of_printer":error_of_printer,
 "error_of_printer_file":error_of_printer_file,
 "error_of_exn":error_of_exn$1,
 "register_error_of_exn":register_error_of_exn,
 "report_error":report_error,
 "error_reporter":error_reporter,
 "default_error_reporter":default_error_reporter,
 "report_exception":report_exception};

